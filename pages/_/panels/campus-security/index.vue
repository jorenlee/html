<script setup>
  import {
    onMounted,
    ref
  } from "vue";
  import {
    useUserStore
  } from "@/stores/user";
  const router = useRouter();
  const userStore = useUserStore();
  import _ from "lodash";
  const endpoint = ref(userStore.mainDevServer);
  const listItems = ref(0);
  let deleteIDItem = ref();
  let updateIDItem = ref();
  let tableDisplay = ref(true);
  let toggleSideBarMenu = ref(true);
  let toggleConfirmDelete = ref(false);
  const confirmModal = ref(false);

  const selectedItem = ref(null);

  const btnShowModal = async (id, status) => {
    confirmModal.value = true;
    updateIDItem.value = id;
    console.log(updateIDItem.value)

    selectedItem.value = await $fetch(endpoint.value + "/api/campus-pass/" + id + "/").catch((error) => error.data)
    selectedItem.value.approval_status = status
  }







  const btnConfirm = () => {



    // console.log(info.value)


    editStatus();
    confirmModal.value = false;

  }

  onMounted(() => {
    setTimeout(async () => {
      if (userStore.user.isAuthenticated && (userStore.user.email === "jorenleeluna24@gmail.com" || userStore.user.email === "esmael.larubis@lsu.edu.ph")) {
        listItems.value = await $fetch(endpoint.value + "/api/campus-pass/list").catch((error) => error.data) || 0;
        router.push("/_/panels/campus-security");
        console.log(listItems.value)
      } else {
        router.push("/_/unauthorized");
      }
    }, 3000)
  });









  const editStatus = async () => {
    // console.log(selectedItem.value)
    await $fetch(endpoint.value + "/api/campus-pass/" + updateIDItem.value + "/edit/", {
      method: "PUT",
      body: selectedItem.value,
    }).then((response) => {
      console.log("response", response);
      // console.log(selectedItem.value)
    })
  }


  //refreshed data
  const btnCloseModal = async () => {
    confirmModal.value = false;
    listItems.value = await $fetch(endpoint.value + "/api/campus-pass/list").catch((error) => error.data) || 0;
  }


  const toggleDeleteBtn = (id) => {
    toggleConfirmDelete.value = !toggleConfirmDelete.value;
    deleteIDItem.value = id;
    // console.log(id);
  };
  const deleteItem = async () => {
    await $fetch(endpoint.value + "/api/campus-pass/" + deleteIDItem.value + "/delete/", {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      console.log("response", response);
      listItems.value = await $fetch(endpoint.value + "/api/campus-pass/list").catch((error) => error.data) || 0;
      toggleConfirmDelete.value = !toggleConfirmDelete.value;
    })
  }
  const logOut = () => {
    router.push("/_/proc-admin");
    userStore.removeToken();
  };
  let infoDetails = ref(true);
  let toggleMenu = (a) => {
    tableDisplay.value = a;
    infoDetails.value = false;
  };
  const goToList = () => {
    router.push("/_/panels/campus-security");
  }
  const goToEdit = (id) => {
    router.push("/_/panels/campus-security/edit/" + id);
  }
</script>
<template>
  <div>
    <div class="flex">
      <div class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden" v-show="toggleSideBarMenu">
        <CampusPassMenuBar :goToList="goToList" :goToCreate="goToCreate" />
      </div>
      <div class="w-full min-h-screen">
        <div class="bg-green-800">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex items-center text-white gap-5">
              <div @click="toggleSideBarMenu = !toggleSideBarMenu" class="w-10 px-1.5">
                <i class="fa text-3xl text-white" :class="toggleSideBarMenu ? 'fa-caret-left' : 'fa-bars'" aria-hidden="true"></i>
              </div>
              <div class="flex -mt-1">
                <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
                <h1 class="text-sm">
                  {{ userStore.user.email }}
                </h1>
              </div>
            </div>
            <button @click="logOut" class="flex hover:font-bold pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div>
          <div class="w-full p-5">
            <div v-show="tableDisplay">
              <div class="">
                <div class="appointment-lists shadow mx-auto text-xs">
                  <div class="">
                    <div class="header w-full p-2 bg-green-800 text-white flex items-center">
                      <ul class="lg:flex justify-evenly text-center whitespace-nowrap">
                        <li class="lg:w-[250px]">Main In-Charge</li>
                        <li class="lg:w-[250px]">Purpose of Access</li>
                        <li class="lg:w-[250px]">Location</li>
                        <li class="lg:w-[250px]">Schedule</li>
                        <li class="lg:w-[250px]">Links</li>
                        <li class="lg:w-[250px]">Status</li>
                        <li class="lg:w-[100px]">Action</li>
                      </ul>
                    </div>
                    <div class="w-full rows px-2" v-if="listItems.length > 0">
                      <div class="w-full justify-evenly text-center items-center h-auto border-b border-gray-100" v-for="(b, i) in _.orderBy(listItems, 'id', 'asc')" :key="i">
                        <div class="lg:flex py-3 w-full">
                          <div class="flex items-center px-2 lg:w-[250px]">
                            <div class="w-full">
                              <span class=""> {{ b.main_in_charge_fullname }}</span>
                              <br>
                              {{ b.email_address }}
                              <br>
                              {{ b.mobile_phone_number }}
                            </div>
                          </div>
                          <div class="px-2 lg:w-[250px] flex items-center justify-center">
                            {{ b.purpose_of_access }}
                        
                          </div>
                          <div class="px-2 lg:w-[250px] flex items-center justify-center">
                            {{ b.location }}
                          </div>
                          <div class="flex items-center px-2 lg:w-[250px]">
                            <div class="w-full"> Start : {{ b.date_start }} | {{ b.time_start }}
                              <br> End : {{ b.date_end}} | {{ b.time_end }}
                            </div>
                          </div>
                          <div class="flex items-center lg:w-[250px]">
                            <a :href="b.approved_activities_link" target="_blank" class="font-bold mx-3 text-green-800">Approved Activities</a>
                            <a :href="b.approved_booking_document_gso_link" target="_blank" class="font-bold mx-3 text-green-800">Approved Booking GSO</a>
                            <a :href="b.lists_names_link" target="_blank" class="font-bold mx-3 text-green-800">List of Names</a>
                          </div>





                          
                          <div class="flex items-center justify-center px-2 lg:w-[250px]">
                           
                          <div class="flex w-fit mx-auto my-2 gap-5">
                            <div class="w-fit mx-auto flex items-center gap-3">
                            <div> 
                              <label class="font-bold py-1 block" :class="{
                                'text-red-700': b.approval_status === 'declined',
                                'text-yellow-500': b.approval_status === 'pending',
                                'text-green-900': b.approval_status === 'approved',
                              }">STATUS:</label>
                              <select v-model="b.approval_status" name="borrower_category"
                                class="shadow-md p-2 block font-bold rounded-md w-fit border border-[#e5e7eb] capitalize" required
                                @change="btnShowModal(b.id,b.approval_status )">
                                <option value="approved">approved</option>
                                <option value="declined">declined</option>
                                <option value="pending">pending</option>
                              </select>
                            </div>
                            </div>
                         
                          </div>
                          </div>




                       






                          <div class="flex px-2 font-bold justify-center lg:w-[100px]">
                            <!-- <div class="mx-auto lg:flex justify-center">
                              <button @click="goToEdit(b.id)">
                                <i class="fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl" aria-hidden="true"></i>
                              </button>
                            </div> -->
                            <div class="mx-auto lg:flex justify-center">
                              <button @click="toggleDeleteBtn(b.id)">
                                <i class="fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        
                        </div>
                        <div class="bg-gray-100 ">
                          <div class="text-center border-y py-2 font-bold"> 
                            List of Names 
                          </div>
                          <div class="flex"> 
                            <div v-for="(j,i) in b.few_name_list" :key="i" class="text-left px-10 py-5">
                              <div> 
                                {{ j.fullname }}
                              </div>
                              <div> 
                                {{ j.email }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center" v-show="confirmModal">


                    <div  class="w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white">
                              <div class="flex items-center">
                                <div class="font-bold pl-5 pr-10">Confirm Status: </div>
                                <div class="flex gap-10 mr-10">
                                  <span
                                    class="px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer"
                                    @click="btnConfirm">yes</span>
                                  <span
                                    class="px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer"
                                    @click="btnCloseModal">no</span>
                                </div>
                              </div>
                            </div>



                  </div>


                      <div class="px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-show="toggleConfirmDelete">
                        <div class="my-6">Are you sure you want to Delete?</div>
                        <div class="flex gap-5 mx-auto w-fit my-5">
                          <span class="bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer" @click="deleteItem">Yes</span>
                          <span class="bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer" @click="toggleDeleteBtn">Cancel</span>
                        </div>
                      </div>
                    </div>
                    <div v-if="listItems.length === 0" class="italic text-gray-400 text-center p-1"> No Results Found! </div>
                    <div v-else class="italic text-gray-400 text-center p-1" :class="listItems.length > 0 ? 'hidden' : ''"> Please Wait ... </div>
                  </div>
                </div>
                <!-- <div class="mx-auto w-4/12 text-center mt-5 text-gray-400 mb-3"><div class="inline-flex gap-5"><button
                      class="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l"
                      @click="prevBtn"
                    >
                      Prev
                    </button><button class="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l"
                    @click="currentBtn">
                      1
                    </button><button class="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l">
                      2
                    </button><button class="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-l">
                      3
                    </button><button
                      class="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
                    @click="nextBtn">
                      Next
                    </button></div></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter />
  </div>
</template>
<style scoped>
  input[type="checkbox"] {
    color: #116f00;
  }
</style>