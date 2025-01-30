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
  const emailRegistrar = ref(userStore.user.registrarEmail);
  const developerEmail = ref(userStore.user.developerEmail);
  const testEmail = ref(userStore.user.testEmail);
  let toggleSideBarMenu = ref(true);
  onMounted(async () => {
    setTimeout(() => {
      if (userStore.user.isAuthenticated && (userStore.user.email === emailRegistrar.value || userStore.user.email === developerEmail.value || userStore.user.email === testEmail.value)) {
        router.push("/_/panels/registrar");
      } else {
        router.push("/_/unauthorized");
      }
    }, 3000)
  });
  const logOut = () => {
    router.push("/_/reg-admin");
    userStore.removeToken();
  };
</script>
<template>
  <div class="">
    <div class="flex">
      <div class="pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden" v-show="toggleSideBarMenu">
        <RegistrarMenuBar />
      </div>
      <div class="w-full min-h-screen">
        <div class="bg-green-800">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex items-center text-white lg:gap-5">
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
              <h2 class="font-bold text-green-800 text-lg">Registrar's Admin Portal</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>