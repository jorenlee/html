<script setup>
import { onMounted } from "vue";
import { useUserStore } from "~/stores/user";
const router = useRouter();
const userStore = useUserStore();
import _ from "lodash";

const endpoint = ref(userStore.mainDevServer);

onMounted(() => {
  if (userStore.user.isAuthenticated &&
    (userStore.user.email === "jorenleeluna24@gmail.com" ||
    userStore.user.email === "procurement@lsu.edu.ph")
  ) {
    router.push("/_/panels/cits/create");
  } else {
    router.push("/_/unauthorized");
  }
})


const info = ref({
  firstname: "",
  middlename: "",
  lastname: "",
  lsu_email: userStore.user.email,
  admin_level_role: "",
  lsu_partner_category: "",
  office: "",
  office_abbr: "",
  department: "",
  department_abbr: "",
  created_at: ""
})

let toggleSideBarMenu = ref(true);

const logOut = () => {
  router.push("/_/cits-admin");
  userStore.removeToken();
};

const goToList = () => {
  router.push("/_/panels/cits");
};

const goToCreate = () => {
  router.push("/_/panels/cits/create");
};

const submitForm = async () => {
  // console.log("submitForm");
  errors.value = [];
  if (email == "" && role == "") {
    errors.value.push("Please fill in all fields.");
  }
  if (errors.value.length == 0) {
    await $fetch(endpoint.value + "/api/cits/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: info.value,
    })
    .then((response) => {
      // console.log("response", response);
      router.push({ path: "/_/panels/cits" });
    })
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
        <CitsMenuBar :goToList="goToList" :goToCreate="goToCreate" />
      </div>
      <div class="w-full lg:h-screen">
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
            <div class="lg:mb-4 text-lg font-medium">Create CITS</div>
            <form v-on:submit.prevent="submitForm">
              <div>
                <div class="w-2/5 mt-1">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"
                    for="startdate-1"
                  >
                    Email
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-5/12 border"
                    id="field_1"
                    v-model="email"
                    placeholder="Email Here"
                  />
                </div>

                <div class="w-2/5 mt-1">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2 mt-2"
                    for="startdate-1"
                  >
                    Role
                  </label>
                  <input
                    class="shadow-md p-2 rounded-sm w-5/12 border"
                    id="field_2"
                    v-model="role"
                    placeholder="Role"
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
    <DashboardFooter/>
  </div>
</template>