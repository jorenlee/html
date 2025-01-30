<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
const router = useRouter();
const userStore = useUserStore();
import _ from "lodash";

const endpoint = ref(userStore.mainDevServer);
const developerEmail = ref(userStore.user.developerEmail);

onMounted(() => {
  if (userStore.user.isAuthenticated && 
      (userStore.user.email === developerEmail.value ||
      userStore.user.email === 'monaliza.mugot@lsu.edu.ph' ||
      userStore.user.email === 'marilyn.bejec@lsu.edu.ph' ||
      userStore.user.email === 'applejane.ebarle@lsu.edu.ph' ||
      userStore.user.email === 'janekaren.gudmalin@lsu.edu.ph' ||
      userStore.user.email === 'macy.beniola@lsu.edu.ph' ||
      userStore.user.email === 'lynn.lumacad@lsu.edu.ph'
      )
      ) {
    router.push("/_/panels/library");
  } else {
    router.push("/_/unauthorized");
  }
});

let libraryInfo = ref(true);

let toggleSideBarMenu = ref(true);
let toggleConfirmDelete = ref(false);

let idToBeDeleted = ref();

const bookingLibrary = await $fetch(endpoint.value + "/api/library/booking/list/").catch(
  (error) => error.data
);

let toggleMenu = (a) => {
  libraryInfo.value = a;
  appointmentDetails.value = false;
};

const goToList = () => {
  router.push("/_/panels/library");
};

const goToEdit = (id) => {
  router.push("/_/panels/library/edit/" + id);
};

const toggleDeleteBtn = (id) => {
  toggleConfirmDelete.value = !toggleConfirmDelete.value;
  idToBeDeleted.value = id;
  // console.log(id);
}

const goToCreate = () => {
  router.push("/_/panels/library/create");
};

const deleteLibrary = async () => {
  await $fetch(
    endpoint.value + "/api/library/booking/" + idToBeDeleted.value + "/delete/",
    {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    }
  ).then(async (response) => {
    // console.log("response", response);
    router.go();
    toggleConfirmDelete.value = !toggleConfirmDelete.value;
  });
}

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
}

</script>
<template>
  <div class="">
    <div class="flex">
      <div
        class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"
        v-show="toggleSideBarMenu"
      >
        <LibraryMenuBar />
      </div>
      <div class="w-full min-h-screen">
        <div class="bg-green-800">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex items-center text-white lg:gap-5">
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
            <button @click="logOut" class="flex hover:font-boldn pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>
        <div class="px-3">
          <div>
            <div class="text-left p-10 shadow-lg">
              <h1 class="font-bold text-green-800 text-3xl">Welcome!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter/>
  </div>
</template>
<style scoped></style>