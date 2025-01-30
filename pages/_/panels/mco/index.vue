<script setup scoped>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const userStore = useUserStore();
import _ from "lodash";

const endpoint = ref(userStore.mainDevServer);

onMounted(() => {
  if (
    userStore.user.isAuthenticated &&
    userStore.user.email === "jorenleeluna24@gmail.com"
  ) {
    router.push("/_/panels/mco");
  } else {
    router.push("/_/unauthorized");
  }
});

let mcoInfo = ref(true);

let toggleSideBarMenu = ref(true);
let toggleConfirmDelete = ref(false);

let idToBeDeleted = ref();

let toggleMenu = (a) => {
  citsInfo.value = a;
  appointmentDetails.value = false;
};

const mco = await $fetch(endpoint.value + "/api/mco/list").catch((error) => error.data);

// console.log(mco.value);

const goToList = () => {
  router.push("/_/panels/mco");
};

const goToCreate = () => {
  router.push("/_/panels/mco/create");
};

const goToEdit = (id) => {
  router.push("/_/panels/mco/edit/" + id);
  // console.log(id);
};

const toggleDeleteBtn = (id) => {
  toggleConfirmDelete.value = !toggleConfirmDelete.value;
  idToBeDeleted.value = id;
  // console.log(id);
};

const logOut = () => {
  router.push("/_/mco-admin");
  userStore.removeToken();
};

const deleteMco = async () => {
  await $fetch(endpoint.value + "/api/mco/" + idToBeDeleted.value + "/delete/", {
    method: "DELETE",
    headers: {
      Authorization: userStore.user.token,
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    // console.log("response", response);
    router.go();
    toggleConfirmDelete.value = !toggleConfirmDelete.value;
  });
};
</script>
<template>
  <div class="">
    <div class="flex">
      <div
        class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"
        v-show="toggleSideBarMenu"
      >
        <McoMenuBar :goToList="goToList" :goToCreate="goToCreate" />
      </div>
      <div class="w-full lg:h-screen h-screen">
        <div class="bg-green-700">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex items-center text-white gap-5">
              <div @click="toggleSideBarMenu = !toggleSideBarMenu" class="w-10 px-1.5">
                <i
                  class="fa text-3xl text-white"
                  :class="toggleSideBarMenu ? 'fa-caret-left' : 'fa-bars'"
                  aria-hidden="true"
                ></i>
              </div>
              <div class="flex -mt-1">
                <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
                <h1 class="text-sm">
                  {{ userStore.user.email }}
                </h1>
              </div>
            </div>
            <button @click="logOut()" class="flex hover:font-bold pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div>
          <div class="w-full p-5">
            <div v-show="mcoInfo">
              <div class="appointment-lists shadow mx-auto text-xs">
                <div class="">
                  <div
                    class="header w-full p-2 bg-green-800 text-white flex items-center"
                  >
                    <ul
                      class="lg:flex w-full justify-evenly text-center whitespace-nowrap"
                    >
                      <li class="lg:w-20">No.</li>
                      <li class="lg:w-2/12">Field 1</li>
                      <li class="lg:w-3/12">Field 2</li>
                      <li class="lg:w-2/12">Field 3</li>
                      <li class="lg:w-1/12">Field 4</li>
                      <li class="lg:w-2/12">Action</li>
                    </ul>
                  </div>

                  <div class="w-full rows" v-if="mco.length > 0">
                    <ul
                      class="lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100"
                      v-for="mco in mco"
                      v-bind:key="mco.id"
                      v-bind:cits="Mco"
                    >
                      <li class="px-2 lg:w-14">{{ mco.id }}</li>
                      <li class="px-2 lg:w-2/12">{{ mco.field_1 }}</li>
                      <li class="px-2 lg:w-2/12">{{ mco.field_2 }}</li>
                      <li class="px-2 lg:w-2/12">{{ mco.field_3 }}</li>
                      <li class="px-2 lg:w-2/12">{{ mco.field_4 }}</li>
                      <li class="flex px-2 font-bold justify-center lg:w-1/12">
                        <div class="mx-auto lg:flex justify-center">
                          <button @click="goToEdit(mco.id)">
                            <i
                              class="fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                        <div class="mx-auto lg:flex justify-center">
                          <button @click="toggleDeleteBtn(mco.id)">
                            <i
                              class="fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div
                      class="px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      v-show="toggleConfirmDelete"
                    >
                      <div class="my-6">Are you sure you want to Delete?</div>
                      <div class="flex gap-5 mx-auto w-fit my-5">
                        <span
                          class="bg-green-900 text-white px-3 py-1 rounded-lg"
                          @click="deleteMco"
                          >Yes</span
                        >
                        <span
                          class="bg-red-900 text-white px-3 py-1 rounded-lg"
                          @click="toggleDeleteBtn"
                          >Cancel</span
                        >
                      </div>
                    </div>
                  </div>
                  <div v-else class="itallic text-gray-400 text-center p-1">
                    Please Add Mco, No Results Found!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter/>
  </div>
</template>
<style scoped></style>