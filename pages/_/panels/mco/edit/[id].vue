<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const userStore = useUserStore();
const route = useRoute();
import _ from "lodash";

const endpoint = ref(userStore.mainDevServer);

onMounted(() => {
  if (
    userStore.user.isAuthenticated &&
    (userStore.user.email === "jorenleeluna24@gmail.com" ||
      userStore.user.email === "roquevanefren@gmail.com" ||
      userStore.user.email === "procurement@lsu.edu.ph")
  ) {
    router.push("/_/panels/mco/edit/" + route.params.id);
  } else {
    router.push("/_/unauthorized");
  }
});


const mco = await $fetch(endpoint.value + "/api/mco/" + route.params.id + "/").catch((error) => error.data)


let id = ref(mco.value.id);
let field_1 = ref(mco.value.field_1);
let field_2 = ref(mco.value.field_2);
let field_3 = ref(mco.value.field_3);
let field_4 = ref(mco.value.field_4);
let created_by_name = ref("Mco Admin");
let created_by_email = ref(userStore.user.email);
let errors = ref([]);

let toggleSideBarMenu = ref(true);

const logOut = () => {
  router.push("/_/mco-admin");
  userStore.removeToken();
};

const goToList = () => {
  router.push("/_/panels/mco");
};

const goToCreate = () => {
  router.push("/_/panels/mco/create");
};

const submitForm = async () => {
  // console.log("submitForm");

  errors.value = [];

  if (
    field_1.value == "" &&
    field_2.value == "" &&
    field_3.value == "" &&
    field_4.value == "" &&
    created_by_name.value == "" &&
    created_by_email.value == ""
  ) {
    errors.value.push("Please fill in all fields.");
  }

  if (errors.value.length == 0) {
    await $fetch(endpoint.value + "/api/mco/" + id.value + "/edit/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        field_1: field_1.value,
        field_2: field_2.value,
        field_3: field_3.value,
        field_4: field_4.value,
        created_by_name: created_by_name.value,
        created_by_email: created_by_email.value,
      },
    })
      .then((response) => {
        // console.log("response", response);
        router.push({ path: "/_/panels/mco" });
      });
  }
}
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
      <div class="w-full h-screen">
        <div class="bg-green-800">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex lg:items-center text-white gap-5">
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
            <button @click="logOut" class="flex hover:font-bold pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div class="text-xs mb-5">
          <div class="p-5">
            <div class="lg:mb-4 text-lg font-medium">Edit Mco</div>
            <form v-on:submit.prevent="submitForm">
              <div class="lg:flex">
                <div class="w-full md:w-1/2 mt-1">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"
                    for="startdate-1"
                  >
                    Field 1
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-full border"
                    id="field_1"
                    v-model="field_1"
                    placeholder="Field 1 Here"
                  />
                </div>

                <div class="w-full md:w-1/2 mt-1 ml-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"
                    for="startdate-1"
                  >
                    Field 2
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-full border"
                    id="field_2"
                    v-model="field_2"
                    placeholder="Field 2 Here"
                  />
                </div>

                <div class="w-full md:w-1/2 mt-1 ml-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"
                    for="startdate-1"
                  >
                    Field 3
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-full border"
                    id="field_3"
                    v-model="field_3"
                    placeholder="Field 3 Here"
                  />
                </div>

                <div class="w-full md:w-1/2 mt-1 ml-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"
                    for="startdate-1"
                  >
                    Field 4
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-full border"
                    id="field_4"
                    v-model="field_4"
                    placeholder="Field 4 Here"
                  />
                </div>
              </div>
              <div class="w-1/2 justify-between flex mt-5">
                <button
                  class="text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<sytle scoped>

</sytle>
