<script setup>
  import {
    onMounted,
    ref
  } from "vue";
  import {
    useUserStore
  } from "@/stores/user";
  import _ from "lodash";
  import "@vuepic/vue-datepicker/dist/main.css";
  import courseOrProgramJSON from "../courseProgram.json";
  const courseOrProgramData = ref(courseOrProgramJSON);
  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  let bookingAppointmentListFilter = ref(0);
  const spinner = ref(false);
  let searchText = ref('');
  let enrolleesList = ref(null)
  let totalEnrollees = ref(0)
  let totalEnrolleesPerCollege = ref(0)
  const tableDisplay = ref(true);
  const initialDisplay = ref(25);
  const numberOfItems = ref(25);
  const startNum = ref(0);
  let idToBeDeleted = ref();
  let numberOfPages;
  let bookingAppointmentListFilterlength;
  let toggleConfirmDelete = ref(false);
  let totalIndicator = ref('');
  let currentPageNumber = ref(1);
  const fatherInfo = ref(false);
  const motherInfo = ref(false);
 

  let singleEnrollee = ref(null)
  let displaySingleEntryToggle = ref(false)
  // let currentIDSelected = ref(null)
  let singleEnrolleeStudentProfile = ref(null)



  onMounted(async () => {
    if (userStore.user.isAuthenticated && (userStore.user.email === 'jorenleeluna24@gmail.com')) {
      let currentList = await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/list/").catch((error) => error.data);
      enrolleesList.value = currentList
      totalEnrollees.value = currentList.length || 0
      console.log(enrolleesList.value)
      bookingAppointmentListFilter.value = enrolleesList.value || 0
      numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
      bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
    } else {
      if (userStore.user.email === "" || userStore.user.email === undefined) {
        router.push("/enrollment/admin/login");
      }
      router.push("/_/unauthorized");
    }
    router.push("/enrollment/admin/dashboard/student-profile");

  });

  let itemsLoaded = computed(() => {
    return bookingAppointmentListFilter.value.slice(startNum.value, numberOfItems.value);
  });


  const logOut = () => {
    router.push("/enrollment");
    userStore.removeToken();
  }
  const toggleDeleteBtn = (id) => {
    toggleConfirmDelete.value = !toggleConfirmDelete.value;
    idToBeDeleted.value = id;
  };

  let courseSelection = ref('Select Course Program');
  let courseSelectionShiftee = ref('Select Course Program');

  let selectedSingleID = ref(null)


  const syncData = async () => {
    singleEnrollee.value = await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/" + selectedSingleID.value + "/").catch((error) => error.data)
    console.log(singleEnrollee.value)
    setCollegeAndProgramValue()
  }

  const displaySingleEntry = (id) => {
    
    selectedSingleID.value = id
    syncData()
  
 
    // singleEnrollee.value.primary_info.college = singleEnrollee.value.primary_info.college + ' | ' + singleEnrollee.value.primary_info.program

    // courseSelection.value = 'Eyy'

   
    displaySingleEntryToggle.value = !displaySingleEntryToggle.value;
    tableDisplay.value = !tableDisplay.value;

    window.scrollTo(0, 0)
    vitalLifeStatusSelection()
    // currentIDSelected.value = id
    
  



  }

  

let setCollegeAndProgramValue = () => {
  courseSelection.value = singleEnrollee.value.primary_info.college + ' | ' + singleEnrollee.value.primary_info.program
}


  let assignCollege = () => {
    singleEnrollee.value.primary_info.college = courseSelection.value.college
    singleEnrollee.value.primary_info.program = courseSelection.value.program
  }

  const vitalLifeStatusSelection = () => {
    if (singleEnrollee.value.father_personal_info.vital_life_status === 'living') {
        fatherInfo.value = true;
    }
    if (singleEnrollee.value.father_personal_info.vital_life_status === 'deceased') {
        fatherInfo.value = false;
    }
    if (singleEnrollee.value.mother_personal_info.vital_life_status === 'living') {
        motherInfo.value = true;
    }
    if (singleEnrollee.value.mother_personal_info.vital_life_status === 'deceased') {
        motherInfo.value = false;
    }
  }



  const directDelete = async (id) => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/" + id + "/delete/", {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    })
    .then(async(response) => {
      searchText.value = '';
      console.log("response", response);
    });
  }



  const deleteItem = async () => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/" + idToBeDeleted.value + "/delete/", {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("response", response);
      router.go();
      toggleConfirmDelete.value = !toggleConfirmDelete.value;
    });
  }
  const closeModal = () => {
    displaySingleEntryToggle.value = !displaySingleEntryToggle.value
    singleEnrolleeStudentProfile.value = null
    singleEnrollee.value = null
    tableDisplay.value = !tableDisplay.value;
  }
  const editStatus = async () => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/" + singleEnrollee.value.id + "/edit/", {
      method: "PUT",
      body: singleEnrollee.value,
    }).then((response) => {
      console.log("response", response);
      router.go()
    })
  }
</script>
<template>
  <div class="lg:overflow-x-hidden">
    <div class="flex min-h-screen">
      <div class="w-full">
        <div class="bg-green-800">
          <div class="lg:flex items-center mx-auto justify-between py-2">
            <div class="lg:flex items-center text-white gap-1 lg:px-1">
              <div class="lg:p-0 pt-0.5 pb-3 mx-3">
                <img class="rounded-full w-10" src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" />
              </div>
              <div class="flex py-2 items-center lg:border-none border-t-2 border-white justify-center">
                <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
                <h1 class="text-sm pt-1">
                  {{ userStore.user.email }}
                </h1>
              </div>
            </div>
            <button @click="logOut" class="flex items-center hover:font-bold py-2 lg:static 
          absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 
          hover:text-green-900 hover:bg-white text-white rounded-xl">
              <i class="fa fa-sign-out text-xl"></i>
              <h1 class="text-xs p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div class="px-3 pt-5">
          <div class="w-full bg-white z-10  px-5 
          absolute top-0 left-1/2 transform -translate-x-1/2" v-if="displaySingleEntryToggle">
            <div class="absolute flex  w-full right-0">
              <div @click="closeModal()" class="w-fit  ml-auto bg-red-900 text-white rounded-full px-5 cursor-pointer uppercase py-1.5 -mb-10 h-fit mt-4 mr-5"> close </div>
            </div>
            <div class="font-bold text-green-900 uppercase px-10 justify-center flex text-center mx-auto w-full py-5"> Student Details </div>

            <div class="bg-white w-full">
                      <div class="">
                        <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"> Detailed Student Profile </h2>
                      </div>
                      <div class="pb-5">
                        <div class="">
                          <div class=" text-center px-3 uppercase font-bold lg:text-sm  text-xs py-2  cursor-pointer border-y"> Personal Details </div>
                          <div class="mt-3 lg:pb-5 px-2 lg:px-5">
                            <div>
                              <div class="lg:flex gap-3">
                                <div class="mb-3 w-full">
                                  <div class="lg:flex w-full gap-3">
                                    <div class="lg:flex gap-3 w-full lg:mb-0 mb-3">
                                      <div class="w-fit">
                                        <label class="text-[10px] text-gray-900 block  pb-1">Title</label>
                                        <select class="w-fit px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.title">
                                          <option value="" disabled selected>Title</option>
                                          <option :value="j" v-for="(j, i) in titleList" :key="i">{{ j }}
                                          </option>
                                        </select>
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Last Name</label>
                                        <input type="text" class="w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Last Name" v-model="singleEnrollee.primary_info.lastname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">First Name</label>
                                        <input type="text" class="w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="First Name" v-model="singleEnrollee.primary_info.firstname" />
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Middle Name</label>
                                        <input type="text" class="w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Middle Name" v-model="singleEnrollee.primary_info.middlename" />
                                      </div>
                                    </div>
                                    <div class="lg:flex gap-3">
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> 
                                          Suffix Name </label>
                                        <div class="flex">
                                          <select class="lg:w-24 px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                            v-model="singleEnrollee.primary_info.extension_or_suffix_name">
                                            <option value="" disabled selected> Suffix </option>
                                            <option :value="j" v-for="(j, i) in suffixName" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Birth Sex </label>
                                        <div class="flex lg:w-fit lg:gap-5 pt-2.5 pb-2 lg:pl-4 pl-1 lg:pr-5 pr-1 shadow bg-white border-b-2 border-green-700">
                                          <div class="flex mr-3">
                                            <input type="radio" value="Female" v-model="singleEnrollee.primary_info.birth_sex" class="lg:mr-2 mr-1" />
                                            <label class="text-[10px]"> Female </label>
                                          </div>
                                          <div class="flex">
                                            <input type="radio" value="Male" v-model="singleEnrollee.primary_info.birth_sex" class="lg:mr-2 mr-1" />
                                            <label class="text-[10px] pr-3"> Male </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Birth Date </label>
                                        <div>
                                          <input type="date" class="lg:w-44 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Date of Birth" v-model="singleEnrollee.primary_info.birth_date" />
                                        </div>
                                      </div>
                                      <div class="lg:flex gap-3 grid grid-cols-2">
                                        <div>
                                          <label class="text-[10px] text-gray-900 lg:block  pb-1"> Citizenship </label>
                                          <div>
                                            <select class="lg:w-32 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.citizenship">
                                              <option value="" disabled selected> Citizenship </option>
                                              <option :value="j" v-for="(j, i) in citizenshipList" :key="i">{{ j }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="pb-5 lg:px-5 px-2">
                            <div>
                              <div class="flex gap-3">
                                <div class="w-full">
                                  <div class="lg:flex w-full gap-3">
                                    <div class="lg:flex gap-3 w-full">
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Birth Order </label>
                                        <div>
                                          <select class="lg:w-fit w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.birth_order">
                                            <option value="" disabled selected>Birth Order </option>
                                            <option :value="j" v-for="(j, i) in birthOrderList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Birth Place</label>
                                        <div>
                                          <input type="text" class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.birth_place" placeholder="Birth Place" />
                                        </div>
                                      </div>
                                      <div class="mb-3 w-full">
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> 
                                          Religion</label>
                                        <div class="flex">
                                          <select class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                                            v-model="singleEnrollee.primary_info.religion">
                                            <option value="" disabled selected>Select a Religion</option>
                                            <option :value="j" v-for="(j, i) in religionList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Civil Status </label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.civil_status">
                                            <option value="" disabled selected>Civil Status </option>
                                            <option :value="j" v-for="(j, i) in civilStatusList" :key="i">{{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <!-- <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1"> Languages Spoken </label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.nationality">
                                            <option value="" disabled selected> Languages Spoken </option>
                                            <option :value="j" v-for="(j, i) in languagesSpokenList" :key="i">
                                              {{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div> -->
                                      <div>
                                        <label class="text-[10px] text-gray-900 lg:block  pb-1">Ethnicity</label>
                                        <div>
                                          <select class="lg:w-44 w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="singleEnrollee.primary_info.ethnicity">
                                            <option value="" disabled selected>Ethnicity</option>
                                            <option :value="j" v-for="(j, i) in ethnicityList" :key="i">
                                              {{ j }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="border-y py-5 flex px-5 gap-3">
                              <div class="lg:flex items-center w-11/12">
                                <p class="text-xs lg:mb-0 mb-3 lg:mr-5 text-green-900">Do you belong to a Tribal/Indigenous Community?</p>
                                <div class="flex items-center">
                                  <span class="flex items-center">
                                    <input type="radio" value="yes" v-model="singleEnrollee.student_tribal_or_indigenous_community.option" />
                                    <label class="text-xs px-1"> Yes </label>
                                    <span class="flex items-center whitespace-nowrap" :class="singleEnrollee.student_tribal_or_indigenous_community.option === 'yes' ? '' : 'hidden'">
                                      <input type="text" v-model="singleEnrollee.student_tribal_or_indigenous_community.name" placeholder="Name of Tribe" class="w-fit px-3 ml-2 mr-1 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" />
                                    </span>
                                  </span>
                                  <span class="flex items-center mx-1">
                                    <input type="radio" value="no" v-model="singleEnrollee.student_tribal_or_indigenous_community.option" />
                                    <label class="text-xs px-1"> No </label>
                                  </span>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                        <div class="">
                          <div class=" px-3  uppercase font-bold lg:text-sm  text-xs text-center cursor-pointer border-y py-2"> Contact Information </div>
                          <div class="mt-3 lg:pb-5 pb-3 lg:px-5 px-2">
                          <div class="lg:flex gap-3">
                            <div class="flex w-full gap-3">
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> Primary Contact Number</label>
                                <div>
                                  <input type="text" class="w-full text-xs px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="(+63) XXX-XXX-XXXX" v-model="singleEnrollee.primary_info.contact_primary_number" />
                                </div>
                              </div>
                              <div class="w-full lg:mb-0 mb-3">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> Alternate Contact Number</label>
                                <div>
                                  <input type="text" class="w-full text-xs px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="(+63) XXX-XXX-XXXX" v-model="singleEnrollee.primary_info.contact_alternate_number" />
                                </div>
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3">
                              <label class="text-[10px] text-gray-900 lg:block  pb-1"> Personal Email Address </label>
                              <div>
                                <input type="email" class="w-full text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                placeholder="e.g name7@gmail.com" v-model="singleEnrollee.primary_info.contact_personal_email_address" required />
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3" :class="singleEnrollee.primary_info.contact_lsu_email_address ? '': 'hidden'">
                              <label class="text-[10px] text-gray-900 lg:block  pb-1"> LSU Email</label>
                              <div>
                                <input type="email" class="w-full text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" placeholder="e.g firstname.lastname@lsu.edu.ph" v-model="singleEnrollee.primary_info.contact_lsu_email_address" />
                              </div>
                            </div>
                            
                            <div class="lg:mb-0 mb-3" :class="singleEnrollee.primary_info.student_lsu_id_number ? '': 'hidden'">
                              <div class="flex items-center">
                                <label class="text-[10px] text-gray-900 lg:block  pb-1"> LSU Student ID Number</label>
                              </div>
                              <div class="flex">
                                <input type="text" class="w-[120px] text-xs px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9" 
                                  placeholder="e.g 221123265" v-model="singleEnrollee.primary_info.student_lsu_id_number"/>
                              </div>
                             
                            </div>
                          
                          </div>
                       
                        </div>
                        </div>

                        <div class="">
                          <h1 class="lg:px-5 px-2 font-bold text-base uppercase">Contact Address</h1>
                          <div class="lg:px-5 lg:pt-3 lg:pb-5 px-2">
<div class="mb-3">
  <p class="font-bold">Permanent Address</p>
  <div class="gap-3">
                                                    <div class="lg:flex gap-3">
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Street or Purok
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.street_or_purok"
                                                                placeholder="Street or Purok" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Barangay or Village
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.barangay_or_village"
                                                                placeholder="Barangay or Village" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                City or Municipality
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.city_or_municipality"
                                                                placeholder="City or Municipality" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Zip Code
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.zipcode"
                                                                placeholder="Zip Code" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Province or State
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.province_or_state"
                                                                placeholder="Province or State" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Region
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.region"
                                                                placeholder="Region" />
                                                        </div>

                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Country
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.permanent_living_home_address_category.country"
                                                                placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
  </div>
                                                
                                         <div>
                                          <p class="font-bold">Present Address</p>
                                          <div class="gap-3">

                                                    <div class="lg:flex gap-3">
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Street or Purok
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.street_or_purok"
                                                                placeholder="Street or Purok" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Barangay or Village
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.barangay_or_village"
                                                                placeholder="Barangay or Village" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                City or Municipality
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.city_or_municipality"
                                                                placeholder="City or Municipality" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Zip Code
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.zipcode"
                                                                placeholder="Zip Code" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Province or State
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.province_or_state"
                                                                placeholder="Province or State" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Region
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.region"
                                                                placeholder="Region" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-3">
                                                            <label class="text-[10px]  lg:block ">
                                                                Country
                                                            </label>
                                                            <input type="text"
                                                                class="w-full px-3  border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_contact_info.current_or_present_living_home_address_category.country"
                                                                placeholder="Country" />
                                                        </div>
                                                    </div>
                                                </div>
                                         </div>
                                            
                          </div>
                        </div>

                        <div class="lg:flex gap-3 border-t-4 pb-3 border-gray lg:pt-6 pt-3 lg:px-5 px-2">
                            <div class="lg:w-3/12 lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block  font-bold"> 
                                Academic Year </label>
                              <div>
                                <input type="text" disabled class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" value="A.Y. 2024 to 2025" />
                              </div>
                            </div>
                            <div class="lg:w-3/12 lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block  font-bold"> Academic Term </label>
                              <div>
                                <input type="text" disabled class="w-full text-xs bg-gray-100 px-3 border-b-2 border-t-0 border-x-0  shadow-lg rounded-sm h-9" value="First Semester" />
                              </div>
                            </div>
                            <div class="w-full lg:mb-0 mb-3">
                              <label class="text-sm mb-1 text-black lg:block font-bold">Degree Program</label>
                              <select v-model="courseSelection" @change="assignCollege"
                            
                            

                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-black h-9 text-xs">
                                
                                
                                <option :value="singleEnrollee.primary_info.college + ' | ' + singleEnrollee.primary_info.program" selected>
                                  {{singleEnrollee.primary_info.college + ' | ' + singleEnrollee.primary_info.program}}</option>
                               
                               
                               
                                  <option value="Select Course Program" disabled>Select Course Program</option>
                                <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                  {{ cp.college }} | {{ cp.program }}
                                </option>
                              </select>
                            </div>
                          </div>


                        <!-- <div class="border-y-4 my-10">
                          
                          <div class="shadow px-8 py-7 ">
                                        <h2 class="font-bold capitalize mb-3 text-green-900 text-center border-b pb-4">
                                            Household Capacity and
                                            Access to
                                            Distance Learning
                                        </h2>
                                        <div>
                                            <ul class="lg:grid grid-cols-2 gap-10">
                                                <li v-for="(h, i) in singleEnrollee.household_capacity_and_access_to_distance_learning"
                                                    :key="i" class="py-2 text-xs">
                                                    <p class="mb-3 font-bold">{{ h.question }}</p>
                                                    <ul class="lg:grid grid-cols-2 gap-2">
                                                        <li v-for="(li, i) in h.list_items" :key="i"
                                                            class="text-xs flex items-center">
                                                            <input v-model="li.value" :value="li.label" type="checkbox"
                                                                class="mr-2" />
                                                            {{ li.label }}
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div class="border-b-4">
                                        <div class="flex w-9/12 mx-auto gap-40">
                                            <div class="w-full py-5">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900">
                                                        {{ singleEnrollee.how_you_learn_about_lsu.question }}</p>
                                                    <ul class="ml-2">
                                                        <li v-for="(li, i) in singleEnrollee.how_you_learn_about_lsu.list_items"
                                                            :key="i">
                                                            <input class="mr-2" type="checkbox" :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">{{ li.label
                                                                }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="w-full py-5">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900">
                                                        {{ singleEnrollee.reasons_for_choosing_lsu.question }}</p>
                                                    <ul class="ml-2">
                                                        <li v-for="(li, i) in singleEnrollee.reasons_for_choosing_lsu.list_items"
                                                            :key="i">
                                                            <input class="mr-2" type="checkbox" :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">{{ li.label
                                                                }}</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                        </div> -->


                        <div class="parents">
                          <div>
                                        <div class="parents lg:flex">
                                            <div class="border-b-4 lg:px-5 px-3 lg:py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p
                                                            class="text-green-800 uppercase font-bold mb-3 whitespace-nowrap">
                                                            Father Information
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex bg-green-600 text-white py-2 px-4 font-bold tracking-widest uppercase">
                                                        <div class="flex w-full">
                                                            <input type="radio" value="living"
                                                                v-model="singleEnrollee.father_personal_info.vital_life_status"
                                                                class="mr-2" @change="vitalLifeStatusSelection" />
                                                            <label class="text-[10px] ">
                                                                Living
                                                            </label>
                                                        </div>
                                                        <div class="flex">
                                                            <input type="radio" value="deceased"
                                                                v-model="singleEnrollee.father_personal_info.vital_life_status"
                                                                @change="vitalLifeStatusSelection" class="mr-2" />
                                                            <label class="text-[10px] ">
                                                                Deceased
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="py-5">
                                                        <div>
                                                            <p class="lg:mb-3 font-bold text-green-800">
                                                                Father's Complete Name
                                                            </p>
                                                        </div>
                                                        <div class="lg:grid lg:grid-cols-3 gap-3">
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Last Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.lastname"
                                                                    placeholder="Last Name" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    First Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.firstname"
                                                                    placeholder="First Name" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Middle Name</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.middlename"
                                                                    placeholder="Middle Name" />
                                                            </div>
                                                            <div v-if="fatherInfo" class="lg:mb-0 mb-3">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Birth Date
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.birth_date"
                                                                    placeholder="Birth Date" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3" v-if="fatherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Age</label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.age"
                                                                    placeholder="Age" />
                                                            </div>
                                                            <div class="lg:mb-0 mb-3" v-if="fatherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Civil Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_personal_info.civil_status"
                                                                    placeholder="Civil Status" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="lg:pb-5" v-if="fatherInfo">
                                                        <p class="lg:mb-3 font-bold text-green-800 text-base ">
                                                          Father Contact Details
                                                        </p>
                                                        <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Father Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.permanent_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        singleEnrollee.father_contact_info.the_same_address.question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesFatherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="singleEnrollee.father_contact_info.the_same_address.answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noFatherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="singleEnrollee.father_contact_info.the_same_address.answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="singleEnrollee.father_contact_info.the_same_address.answer === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block ">
                                                                    Father Current Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.current_or_present_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.contact.number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.father_contact_info.contact.email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="fatherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                            Father Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_employment_info.highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_employment_info.occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_employment_info.employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_employment_info.gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div class=" block">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.father_employment_info.employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b-4 lg:px-5 px-3 py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p
                                                            class="text-green-800 uppercase font-bold mb-3 whitespace-nowrap">
                                                            Mother Information
                                                        </p>
                                                    </div>
                                                    <div
                                                        class="flex bg-green-600 text-white py-2 px-4 font-bold tracking-widest uppercase">
                                                        <div class="flex w-full">
                                                            <input type="radio" value="living"
                                                                v-model="singleEnrollee.mother_personal_info.vital_life_status"
                                                                class="mr-2" @change="vitalLifeStatusSelection" />
                                                            <label class="text-[10px] ">
                                                                Living
                                                            </label>
                                                        </div>
                                                        <div class="flex">
                                                            <input type="radio" value="deceased"
                                                                v-model="singleEnrollee.mother_personal_info.vital_life_status"
                                                                @change="vitalLifeStatusSelection" class="mr-2" />
                                                            <label class="text-[10px] ">
                                                                Deceased
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="py-5">
                                                      <div>
                                                            <p class="lg:mb-3 font-bold text-green-800">
                                                                Mother's Complete Name (Name Before Marriage)
                                                            </p>
                                                        </div>
                                                            <!-- <p class="lg:mb-3 mb-2 text-[12px]">Please Input Mother's Maiden Name (Name before Marriage)</p> -->
                                                        <div class="lg:grid lg:grid-cols-3 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Last Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.lastname"
                                                                    placeholder="Last Name" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    First Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.firstname"
                                                                    placeholder="First Name" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Middle Name</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.middlename"
                                                                    placeholder="Middle Name" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Birth Date
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.birth_date"
                                                                    placeholder="Birth Date" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Age</label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.age"
                                                                    placeholder="Age" />
                                                            </div>
                                                            <div v-if="motherInfo">
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Civil Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full  px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_personal_info.civil_status"
                                                                    placeholder="Civil Status" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="motherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Mother Contact Details
                                                        </p>
                                                        <div class="">
                                                          <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Mother Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.permanent_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        singleEnrollee.mother_contact_info.the_same_address.question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesMotherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="singleEnrollee.mother_contact_info.the_same_address.answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noMotherContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="singleEnrollee.mother_contact_info.the_same_address.answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="singleEnrollee.mother_contact_info.the_same_address.answer === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block mb-3">
                                                                    Mother Current Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.current_or_present_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.contact.number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs text-black lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.mother_contact_info.contact.email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5" v-if="motherInfo">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Mother Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_employment_info.highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_employment_info.occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_employment_info.employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_employment_info.gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text"
                                                                    class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.mother_employment_info.employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-b-4 lg:px-5 px-3 py-5 lg:w-4/12 w-full">
                                                <div>
                                                    <div>
                                                        <p class="text-green-800 uppercase font-bold mb-3">
                                                            Guardian Information
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div class="flex items-center">
                                                            <label class="text-[10px] mr-3">
                                                                Relation
                                                            </label>
                                                            <input type="text"
                                                                class="w-fit px-3 border-b border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-xs"
                                                                v-model="singleEnrollee.legal_guardian_personal_info.relation_to_student"
                                                                placeholder="Relation" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div class="pb-5">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                           Guardian 
                                                           Personal
                                                            Details</p>
                                                        <div class="">
                                                            <div class="lg:grid grid-cols-3 gap-3">
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Last Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.lastname"
                                                                        placeholder="Last Name" />
                                                                </div>

                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        First Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.firstname"
                                                                        placeholder="First Name" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Middle Name</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.middlename"
                                                                        placeholder="Middle Name" />
                                                                </div>

                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Birth Date
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.birth_date"
                                                                        placeholder="Birth Date" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Age</label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.age"
                                                                        placeholder="Age" />
                                                                </div>
                                                                <div>
                                                                    <label
                                                                        class="text-xs lg:block ">
                                                                        Civil Status
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full mb-3 px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_personal_info.civil_status"
                                                                        placeholder="Civil Status" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                             
                                                    <div class="pb-5">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          
                                                          Guardian Contact Details
                                                        </p>
                                                        <div class="">
                                                          <div class="">
                                                            <div>
                                                                <label
                                                                    class="text-base text-black lg:block mb-3">
                                                                    Guardian Permanent Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.permanent_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                            <div class="mb-3 lg:flex items-center lg:pt-3">
                                                                <p
                                                                    class="text-xs text-green-900 mr-3 lg:pt-1 lg:text-left text-center">
                                                                    {{
                                                                        singleEnrollee.legal_guardian_contact_info.the_same_address.question
                                                                    }}
                                                                </p>
                                                                <div
                                                                    class="flex gap-3 pt-1 lg:mx-0 mx-auto w-fit lg:mb-0 mb-4 lg:mt-0 mt-2">
                                                                    <div @click="theSameAddressBtn('yesGuardianContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer px-3 rounded-lg hover:text-green-800 hover:bg-white border-2 border-green-800"
                                                                        :class="singleEnrollee.legal_guardian_contact_info.the_same_address.answer === 'yes' ? 'text-white bg-green-800' : 'text-green-800 bg-white border-2'">
                                                                        yes</div>
                                                                    <div @click="theSameAddressBtn('noGuardianContactInfo')"
                                                                        class="text-xs capitalize cursor-pointer  px-3 rounded-lg hover:text-red-800 hover:bg-white border-2 border-red-800"
                                                                        :class="singleEnrollee.legal_guardian_contact_info.the_same_address.answer === 'no' ? 'text-white bg-red-800' : 'text-red-800 bg-white border-2'">
                                                                        no</div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                :class="singleEnrollee.legal_guardian_contact_info.the_same_address.answer === 'yes' ? 'hidden' : ''">
                                                                <label
                                                                    class="text-base  lg:block ">
                                                                    Guardian Current Address
                                                                </label>
                                                                <div class="lg:grid grid-cols-3 gap-3">
                                                                  
                                                                  <div class="lg:mb-0">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs  lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.current_or_present_living_home_address_category.country"
                                                                        placeholder="Country" />
                                                                  </div>

                                                                </div>
                                                            </div>
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full mb-3">
                                                                    <label
                                                                        class="text-xs  lg:block ">
                                                                        Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.contact.number"
                                                                        placeholder="Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.legal_guardian_contact_info.contact.email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div class="pb-5">
                                                        <p class="lg:mb-3 mb-2 font-bold text-green-800">
                                                          Guardian
                                                          Employment
                                                            Details</p>
                                                        <div class="lg:grid lg:grid-cols-2 gap-3">
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Highest Education Completed
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.legal_guardian_employment_info.highest_education_completed"
                                                                    placeholder="Highest Education Completed" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Occupation
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.legal_guardian_employment_info.occupation"
                                                                    placeholder="Occupation" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Employment Status
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.legal_guardian_employment_info.employment_status"
                                                                    placeholder="Employment Status" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Gross Monthly Income
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.legal_guardian_employment_info.gross_monthly_income"
                                                                    placeholder="Gross Monthly Income" />
                                                            </div>
                                                            <div>
                                                                <label
                                                                    class="text-xs  lg:block ">
                                                                    Employer or Company
                                                                </label>
                                                                <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                    border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                    v-model="singleEnrollee.legal_guardian_employment_info.employer_or_company"
                                                                    placeholder="Employer or Company" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="guardian">
                                            <div class="border-b-4 lg:px-5 px-3 py-5">
                                                <p class="text-green-800 uppercase font-bold mb-3 tracking-tighter ">
                                                    Emergency Contact Information
                                                </p>
                                                <div class="">
                                                    <div class="lg:grid grid-cols-6 gap-3">
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Title</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.title"
                                                                placeholder="Title" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Last Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.lastname"
                                                                placeholder="Last Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                First Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.firstname"
                                                                placeholder="First Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Middle Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.middlename"
                                                                placeholder="Middle Name" />
                                                        </div>
                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Extension or Suffix Name</label>

                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.extension_or_suffix_name"
                                                                placeholder="Extension or Suffix Name" />
                                                        </div>

                                                        <div class="w-full">
                                                            <label class="text-xs lg:block ">
                                                                Relation to Student</label>
                                                            <input type="text" class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="singleEnrollee.student_emergency_contact_information.personal_info.relation_to_student"
                                                                placeholder="Relation to Student" />
                                                        </div>
                                                    </div>

                                                    <div class="pt-5 pb-2">
                                                        <p class="mb-2 font-bold text-green-800">Emergency Contact Info Details</p>
                                                        <div class="">
                                                            <h1 class="font-bold text-base mb-2">Address</h1>
                                                            <div class="mb-2">
                                                                
                                                                <div class="lg:flex gap-3">
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Street or Purok
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.street_or_purok"
                                                                        placeholder="Street or Purok" />
                                                                  </div>
                                                                 
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Barangay or Village
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.barangay_or_village"
                                                                        placeholder="Barangay or Village" />
                                                                  </div>

                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      City or Municipality
                                                                  </label>
                                                                    <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.city_or_municipality"
                                                                        placeholder="City or Municipality" />

                                                                  </div>
                                                                  
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Zip Code
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.zipcode"
                                                                        placeholder="Zip Code" />
                                                                  </div>
                                                                     
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Province or State
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.province_or_state"
                                                                        placeholder="Province or State" />
                                                                  </div>
             
                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Region
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.region"
                                                                        placeholder="Region" />
                                                                  </div>

                                                                  <div class="w-full lg:mb-0 mb-3">
                                                                    <label
                                                                      class="text-xs text-black lg:block ">
                                                                      Country
                                                                  </label>
                                                                  <input type="text"
                                                                        class="w-full lg:mb-3 mb-2 px-3 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.address.country"
                                                                        placeholder="Country" />
                                                                  </div>
                                                                    


                                                                </div>
                                                            </div>
                                                           
                                                            <div class="lg:flex gap-3">
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold ">
                                                                        Primary Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.contact.primary_number"
                                                                        placeholder="Primary Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold ">
                                                                        Alternate Contact Number
                                                                    </label>
                                                                    <input type="text"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.contact.alternate_number"
                                                                        placeholder="Alternate Contact Number" />
                                                                </div>
                                                                <div class="w-full">
                                                                    <label
                                                                        class="text-xs  lg:block font-bold ">
                                                                        Email Address
                                                                    </label>
                                                                    <input type="email"
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="singleEnrollee.student_emergency_contact_information.contact.email_address"
                                                                        placeholder="Email Address" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="border-b-4 lg:px-5 px-3 py-5">
                                            <p class="text-green-800 uppercase font-bold mb-3">Sibling Information</p>
                                            <div>
                                                <div class="lg:ml-2">
                                                    <div class="hover:text-green-800 text-white border border-green-800 cursor-pointer w-fit mb-3 hover:bg-white bg-green-800 font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                        @click="onlyChildBtn()">
                                                        Only Child
                                                    </div>
                                                </div>
                                                <div>
                                                    <div v-if="siblingForm"
                                                        class="lg:flex lg:shadow rounded-xl lg:p-5 mt-2 mb-3 relative"
                                                        v-for="(b, i) in singleEnrollee.siblings" :key="i">
                                                        <div class="flex items-center mr-3">
                                                            <div
                                                                class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2">
                                                                {{ i + 1 }}
                                                            </div>
                                                        </div>
                                                        <div class="w-full">
                                                            <div class="lg:flex personal-details mb-4 gap-3">
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Last Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Last Name" type="text"
                                                                        v-model="b.lastname" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        First Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="First Name" type="text"
                                                                        v-model="b.firstname" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Middle Name
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Middle Name" type="text"
                                                                        v-model="b.middlename" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Birth Date
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Birth Date" type="text"
                                                                        v-model="b.birth_date" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Age
                                                                    </label>
                                                           
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Age" type="text"
                                                                        v-model="b.age" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Civil Status
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Civil Status" type="text"
                                                                        v-model="b.civil_status" />
                                                                </div>
                                                            </div>
                                                            <div class="lg:flex educational-details gap-3">
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Grade or Year Level
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.grade_or_year_level"
                                                                        placeholder="Grade or Year Level" type="text" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        School or Graduated From
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="School or Graduated From"
                                                                        type="text"
                                                                        v-model="b.school_or_graduated_from" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Highest Education Completed
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        placeholder="Highest Education Completed"
                                                                        type="text"
                                                                        v-model="b.highest_education_completed" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Occupation
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.occupation" placeholder="Occupation"
                                                                        type="text" />
                                                                </div>
                                                                <div class="w-full lg:mb-0 mb-2">
                                                                    <label
                                                                        class="text-[10px] text-gray-300 lg:block ">
                                                                        Employer or Company
                                                                    </label>
                                                                    <input
                                                                        class="w-full px-3 border-b-2 border-t-0 border-x-0 
                                                                        border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                        v-model="b.employer_or_company"
                                                                        placeholder="Employer or Company" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center lg:static absolute top-3 right-0"
                                                            v-if="singleEnrollee.siblings.length > 1">
                                                            <div class="mr-2 lg:hidden block">Remove</div>
                                                            <div class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                                                                @click="removeRowSibling(b)">
                                                                <i class="fa fa-close"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="lg:ml-2">
                                                        <div class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                            @click="addSibling">
                                                            <i class="fa fa-plus mr-1"></i> Add Sibling
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div> -->
                                       


                                    </div>
                        </div>
                        <div>
                          <div>
                                        <div class="border-b-4 lg:px-5 py-5">
                                            <div class="lg:px-0 px-3">
                                                <p class="text-green-800 uppercase font-bold mb-3">
                                                    EDUCATIONAL INFORMATION
                                                </p>
                                                <p class="text-xs text-gray-500 mb-3">
                                                    Please add all your previous educational detail information and
                                                    double
                                                    click the tabs to fill.
                                                </p>
                                            </div>
                                            <div class="shadow pt-5 pb-2 lg:px-4 bg-green-100">
                                                <div class="mb-3 lg:flex w-full gap-5 lg:px-0 px-2">
                                                    <div class="lg:flex items-center lg:w-full cursor-pointer lg:mb-0 mb-2"
                                                        v-for="(b, i) in singleEnrollee.student_educational_info.tab"
                                                        :key="i" @click="expandEducationalDetails(b)">
                                                        <span
                                                            class="justify-between flex w-full items-center px-2 py-1 h-fit whitespace-nowrap hover:bg-green-700 hover:text-white rounded-lg"
                                                            :class="b === currentEducationalTab ? 'bg-white text-green-800 font-bold border-b-4 border-green-900 border-t border-x py-1.5' : 'bg-green-900 border-4 border-green-900 text-white'">
                                                            <span class="lg:text-sm text-xs">
                                                                {{ b }}
                                                            </span>
                                                            <i class="fa fa-angle-double-right rotate-90 ml-5"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="lg:px-0 px-2" v-for="(b, i) in educationalActiveTabFilter" :key="i">
                                                    <div class="lg:flex items-end rounded-xl gap-2 mb-3 relative">
                                                        <div class="lg:w-[800px] w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block  lg:whitespace-nowrap">
                                                                Education Level
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize font-bold text-green-800 border-x-0 border-t-0 border-b-2 border-green-900 shadow-lg rounded-sm h-9 text-xs text-center"
                                                                v-model="b.education_level"
                                                                placeholder="Education Level" type="text" disabled />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Name of Previous School
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.name_of_previous_school"
                                                                placeholder="Name of Previous School" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Track or Program
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.track_or_program"
                                                                placeholder="Track or Program" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Highest Honors Received
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.highest_honors_received"
                                                                placeholder="Highest Honors Received" type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                City or Municipality and Province
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.city_or_municipality_and_province"
                                                                placeholder="City or Municipality and Province"
                                                                type="text" />
                                                        </div>
                                                        <div class="w-full lg:mb-0 mb-1">
                                                            <label
                                                                class="text-[10px] text-gray-900 mb-1 lg:block ">
                                                                Year Last Attended or Graduated
                                                            </label>
                                                            <input
                                                                class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                                v-model="b.year_graduated_or_attended"
                                                                placeholder="Year Last Attended or Graduated"
                                                                type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="shadow py-2 lg:px-3 px-2 mt-4 bg-green-100">
                                                <div class="lg:flex lg:py-3 py-2 gap-3">
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">
                                                            Learner Reference Number
                                                        </label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="Learner Reference Number" type="text"
                                                            v-model="singleEnrollee.student_education_information_number.learner_reference_number" />
                                                    </div>
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">CHEd Award Number</label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="CHEd Award Number" type="text"
                                                            v-model="singleEnrollee.student_education_information_number.ched_award_number" />
                                                    </div>
                                                    <div class="w-full lg:mb-0 mb-3">
                                                        <label class="text-xs text-gray-700">DWSD Household
                                                            Number</label>
                                                        <input
                                                            class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs"
                                                            placeholder="DWSD Household Number" type="text"
                                                            v-model="singleEnrollee.student_education_information_number.dswd_household_number" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                       
                                       
                                    </div>
                        </div>

                        <div class="survey">
                          <div class="border-b-4 lg:px-10 px-3 py-5 lg:flex items-center">
                                        <p
                                            class="text-green-800 font-semibold lg:w-[150px] pt-2 text-sm lg:mr-5 lg:mb-3 mb-4">
                                            What are your Top 3 programs of choice?
                                        </p>
                                        <div class="w-full">
                                            <div class="lg:flex gap-3">
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">1st
                                                    
                                                    </label>
                                                    <select
                                                        v-model="singleEnrollee.student_choice.choice_track_program_one_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">2nd
                                                    
                                                    </label>
                                                    <select
                                                        v-model="singleEnrollee.student_choice.choice_track_program_two_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="w-full lg:block flex items-center lg:mb-0 mb-3">
                                                    <label class="text-xs text-gray-700 lg:ml-0 mr-2 w-[20px]">3rd
                                                    
                                                    </label>
                                                    <select
                                                        v-model="singleEnrollee.student_choice.choice_track_program_three_course_program"
                                                        class="w-full px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs">
                                                        <option value="" disabled selected>Select Course Program
                                                        </option>
                                                        <option :value="cp" v-for="(cp, i) in programDataOnly"
                                                            :key="i">
                                                            {{ cp }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b-4">
                                        <div class="lg:flex lg:w-9/12 w-11/12 mx-auto gap-40 lg:pb-0 pb-3">
                                            <div class="w-full lg:py-5 pt-3">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900 mb-2">
                                                        {{ singleEnrollee.how_you_learn_about_lsu.question }}
                                                    </p>
                                                    <ul class="lg:ml-2">
                                                        <li v-for="(li, i) in singleEnrollee.how_you_learn_about_lsu.list_items"
                                                            :key="i" class="flex mb-3">
                                                            <input class="mr-2" type="checkbox" v-model="li.value"
                                                                :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">
                                                                {{ li.label }}
                                                            </label>
                                                            <input v-model="li.description" placeholder="please specify"
                                                                :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="w-full lg:py-5 pt-3">
                                                <div class="">
                                                    <p class="font-bold text-md text-green-900 mb-2">
                                                        {{ singleEnrollee.reasons_for_choosing_lsu.question }}</p>
                                                    <ul class="lg:ml-2">
                                                        <li v-for="(li, i) in singleEnrollee.reasons_for_choosing_lsu.list_items"
                                                            :key="i" class="flex mb-3">
                                                            <input class="mr-2" type="checkbox" v-model="li.value"
                                                                :value="li.value" />
                                                            <label class="capitalize text-xs text-green-900">
                                                                {{ li.label }}
                                                            </label>
                                                            <input v-model="li.description" placeholder="please specify"
                                                                :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="shadow lg:px-8 px-3 lg:py-7 py-3">
                                        <h2
                                            class="font-bold capitalize mb-3 text-green-900 text-center border-b pb-4 leading-tight tracking-tight">
                                            Household Capacity and Access to Distance Learning
                                        </h2>
                                        <div>
                                            <ul class="lg:grid grid-cols-2 gap-10">
                                                <li v-for="(h, i) in singleEnrollee.household_capacity_and_access_to_distance_learning"
                                                    :key="i" class="py-2 text-xs">
                                                    <div>
                                                        <p class="mb-3 font-bold">{{ h.question }}</p>
                                                        <ul class="lg:grid grid-cols-2 gap-2">
                                                            <li v-for="(li, i) in h.list_items" :key="i"
                                                                class="text-xs flex items-center lg:mb-0 mb-3">
                                                                <input v-model="li.value" :value="li.label"
                                                                    type="checkbox" class="mr-2" />
                                                                {{ li.label }}
                                                                <input v-model="li.description"
                                                                    placeholder="please specify"
                                                                    :class="li.label === 'Others' && li.value ? '' : 'hidden'"
                                                                    class="ml-3 lg:w-44 w-full px-3 capitalize border-b-2 py-1 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-[23px] text-xs" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                        </div>
                      </div>
                      <div class="py-5 border-t-4">
                        <div class="justify-between flex">
                          <div @click="toggleInfo(true, false, false, false, false)" class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 
                            text-white hover:bg-white hover:text-green-800 rounded-lg mx-2">
                            <i class="fa fa-angle-double-left pr-2"></i> Prev
                          </div>
                          <div class="cursor-pointer py-1 uppercase px-4 shadow bg-green-800 
                          text-white hover:bg-white hover:text-green-800 rounded-lg mx-2" @click="toggleInfo(false, false, true, false, false)"> Next <i class="fa fa-angle-double-right pl-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
          <div class="w-full px-10 text-center uppercase border-y-4 
          border-green-900 py-2 tracking-widest font-bold"> Student Profile List </div>
          <div v-if="tableDisplay">
            <div class="w-full">
              <div class="">
                <div class="shadow mx-auto text-xs">
                  <div class="">
                    <div class="lg:flex hidden header w-full px-1.5 py-2 bg-green-800 text-white items-center shadow-lg">
                      <ul class="flex  w-full lg:whitespace-nowrap">
                        <!-- <li class="lg:w-14">No.</li> -->
                        <!-- <li class="lg:w-2/12">Tracking ID</li> -->
                       
                        <li class=" lg:w-1/12 uppercase">LSU ID</li>
                        <li class=" lg:w-2/12 text-left uppercase">Full Name</li>
                        <li class=" lg:w-8/12 text-left uppercase">Program</li>
                        <li class="w-fit text-center px-5 uppercase">Action</li>
                      </ul>
                    </div>
                    <div class="w-full" v-if="bookingAppointmentListFilter.length > 0">
                      <ul class=" lg:flex w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 py-1 relative hover:bg-gray-200" 
                      v-for="(b, i) in _.orderBy(bookingAppointmentListFilter, 'created_at', 'desc')" :key="i">
                        <!-- <li class="px-2 font-bold text-xs text-green-800 lg:w-14">N{{ b.id }}</li> -->
                        <!-- <li class="px-2 font-bold text-xs text-green-800 lg:w-2/12">{{ b.primary_info.tracking_id  }}</li> -->
                        <li class="font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase px-1">
                        {{ b.primary_info.student_lsu_id_number }}
                      </li>
                        <li class="font-bold text-xs text-green-800 lg:w-2/12 uppercase">
                          {{ b.primary_info.firstname || '' }} {{ b.primary_info.lastname || '' }}
                        </li>
                        <li class="font-bold text-xs text-green-800 lg:w-8/12  uppercase text-left">
                          {{ b.primary_info.college }} | {{ b.primary_info.program }}
                        </li>
                        <li class="flex justify-center font-bold px-2 text-xs text-green-800 lg:w-fit lg:static absolute top-2 right-2">
                          <div class="w-auto px-1 flex gap-5">
                            <button @click="displaySingleEntry(b.id)" class="cursor-pointer hover:bg-white hover:text-blue-600 border-blue-500 border-2
                             bg-blue-500 text-white uppercase font-bold px-2 py-1 
                             rounded-lg tracking-tighter text-[10px]"> Details </button>
                            <!-- <button v-if="
                              userStore.user.email === 'jorenleeluna24@gmail.com' ||
                              userStore.user.email === 'admissions@lsu.edu.ph'" @click="toggleDeleteBtn(b.id)" class="cursor-pointer">
                              <i class="fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl" aria-hidden="true"></i>
                            </button> -->

                             <!-- <button
                              v-if="
                                userStore.user.email === 'jorenleeluna24@gmail.com'
                              "
                              @click="directDelete(b.id)" class="cursor-pointer text-white bg-red-700 font-bold uppercase rounded-xl px-4 py-1">
                                X
                              </button> -->


                          </div>
                        </li>
                      </ul>
                      <div class="px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-show="toggleConfirmDelete">
                        <div class="my-6">Are you sure you want to Delete?</div>
                        <div class="flex gap-5 mx-auto w-fit my-5">
                          <span class="bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer" @click="deleteItem">Yes</span>
                          <span class="bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer" @click="toggleDeleteBtn">Cancel</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div v-if="bookingAppointmentListFilter.length > initialDisplay" class="flex items-center justify-center lg:w-[600px] 
                w-fit mx-auto font-bold text-sm rounded-lg my-5">
                  <div @click="prev" class="mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] 
                  border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 
                  rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950">
                    <i class="fa fa-angle-left px-2" aria-hidden="true"></i> Prev
                  </div>
                  <ul class="border-t border-gray-50 flex lg:w-6/12 w-[150px] 
                justify-evenly overflow-x-scroll px-2">
                    <li v-for="(selectedPage, i) in numberOfPages" class=" hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg" :class="currentPageNumber === selectedPage ? 'bg-green-900 text-white':''" :key="i" @click="pagination(selectedPage)">
                      {{ selectedPage }}
                    </li>
                  </ul>
                  <div @click="next" class="mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] 
                  border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 
                  hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"> Next <i class="fa fa-angle-right px-2" aria-hidden="true"></i>
                  </div>
                </div> -->
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
  /* width */
  ::-webkit-scrollbar {
    width: 2px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ececec;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #135000;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00c566;
  }
</style>