<script setup>
import { onMounted } from "vue";
import { useUserStore } from "~/stores/user";
const router = useRouter();
const userStore = useUserStore();
import _ from "lodash";
const endpoint = ref(userStore.mainDevServer);


const developerEmail = ref(userStore.user.developerEmail);

onMounted(() => {
  if (
    userStore.user.isAuthenticated &&
    (userStore.user.email === developerEmail.value ||
      userStore.user.email === "monaliza.mugot@lsu.edu.ph" ||
      userStore.user.email === "marilyn.bejec@lsu.edu.ph" ||
      userStore.user.email === "applejane.ebarle@lsu.edu.ph" ||
      userStore.user.email === "janekaren.gudmalin@lsu.edu.ph" ||
      userStore.user.email === "macy.beniola@lsu.edu.ph" ||
      userStore.user.email === "lynn.lumacad@lsu.edu.ph")
  ) {
    router.push("/_/panels/library/appointment/reports/books/create");
  } else {
    // setTimeout(() => {
    //   router.push("/_/unauthorized");
    // }, 5000)
  }
});

const info = ref({
  call_number: "",
  author: "",
  title: "",
  barcode: "",
  year: "",
  date_acquired: "",
  status: "",
  sublocation: "",
  circulation: "",
  number_of_copies: "",
  created_by_email: "",
})

let reportsSaved = ref(false);
let allFieldsAreRequired = ref(false);
let toggleSideBarMenu = ref(true);

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
};

const submitForm = async () => {
  console.log("submitForm");
  info.value.created_by_email = userStore.user.email

  await $fetch(endpoint.value + "/api/library/reports/book/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: info.value,
  }).then(async(response) => {
    if (response.status === "errors") {
      // console.log("response.status", response.status);
      // console.log("response.errors", response.errors);
      allFieldsAreRequired.value = true;
      setTimeout(() => {
        allFieldsAreRequired.value = false;
      }, 10000);
    } else {
      reportsSaved.value = true;
      setTimeout(() => {
        reportsSaved.value = false;
        info.value = {}
      }, 2000);

      // router.push("/_/panels/library/appointment/reports/books");
    }
  });
}
</script>

<template>
  <div class="">
    <div class="flex">
      <div
        class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"
        v-show="toggleSideBarMenu">
        <LibraryMenuBar />
      </div>
      <div class="w-full">
        <div class="bg-green-800">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex lg:items-center text-white gap-5">
              <div @click="toggleSideBarMenu = !toggleSideBarMenu" 
                class="w-10 px-1.5">
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
            <button @click="logOut" class="flex hover:font-bold pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div class="text-xs lg:mb-5">
          <div class="lg:p-5 p-2">
            <div
              class="mt-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter">
              Record Book Details
            </div>
            <form v-on:submit.prevent="submitForm">
              <div class="lg:w-11/12 mx-auto shadow-lg lg:p-5 border mt-5 rounded-lg">
                <div class="lg:flex gap-2 lg:mb-3">
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Call Number </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Call Number"
                      v-model="info.call_number"
                      required
                    />
                  </div>
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Author </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Author"
                      v-model="info.author"
                      required
                    />
                  </div>
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Title </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Title"
                      v-model="info.title"
                      required
                    />
                  </div>
                </div>
                <div class="lg:flex gap-2 lg:mb-3">
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Barcode </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Barcode"
                      v-model="info.barcode"
                      required
                    />
                  </div>
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Date Acquired </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Date Acquired"
                      v-model="info.date_acquired"
                      required
                    />
                  </div>
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Sublocation </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Sublocation"
                      v-model="info.sublocation"
                      required
                    />
                  </div>
                  <div class="lg:w-6/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Year </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Year"
                      v-model="info.year"
                      required
                    />
                  </div>
                </div>
                <div class="lg:flex gap-2 lg:mb-3">

                  <div class="lg:w-6/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Status </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      placeholder="Status"
                      v-model="info.status"
                      required
                    />
                  </div>
                
                  <div class="lg:w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Created By </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 lowercase"
                      placeholder="Created By"
                      v-model="userStore.user.email"
                      disabled
                    />
                  </div>
                  <div class="lg:w-5/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Circulation </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      type="number"
                      placeholder="Circulation"
                      v-model="info.circulation"
                      required
                    />
                  </div>
                  <div class="lg:w-5/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-600"> Number of Copies </label>
                    <input
                      class="shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize"
                      type="number"
                      placeholder="Number of Copies"
                      v-model="info.number_of_copies"
                      required
                    />
                  </div>
                </div>
                <div
                  v-show="allFieldsAreRequired"
                  class="text-center w-full p-2 bg-red-700 text-white uppercase mt-10"
                >
                  All Fields are Required!
                </div>
                <div
                  v-show="reportsSaved"
                  class="text-center w-full p-2 bg-green-900 text-white uppercase mt-10"
                >
                  Record Added!
                </div>
                <div class="mt-5 w-fit mx-auto">
                  <button
                    class="text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter/>
  </div>
</template>

<style scoped>
input[type="radio"]:disabled {
  background-color: #ff8b8b;
  accent-color: #ff8f8f;
}
</style>