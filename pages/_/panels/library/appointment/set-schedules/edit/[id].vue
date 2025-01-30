<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import "@vuepic/vue-datepicker/dist/main.css";
import scheduleJSON from "../../schedule.json";
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);
import _ from "lodash";
import moment from "moment";

const schedule = await $fetch(endpoint.value + "/api/library/schedule/booking/" + route.params.id + "/").catch((error) => error.data);

const timeSelection = ref(scheduleJSON.timeSelection);

const info = ref({
  date: schedule.date,
  time: [],
  updated_at: new Date()
})


let toggleSideBarMenu = ref(true);
const developerEmail = ref(userStore.user.developerEmail);

onMounted(async () => {
  if (
    userStore.user.isAuthenticated &&
    (userStore.user.email === developerEmail.value ||
      userStore.user.email === 'monaliza.mugot@lsu.edu.ph' ||
      userStore.user.email === 'marilyn.bejec@lsu.edu.ph' ||
      userStore.user.email === 'applejane.ebarle@lsu.edu.ph' ||
      userStore.user.email === 'janekaren.gudmalin@lsu.edu.ph' ||
      userStore.user.email === 'macy.beniola@lsu.edu.ph' ||
      userStore.user.email === 'lynn.lumacad@lsu.edu.ph'
    )
  ) {
    router.push("/_/panels/library/appointment/set-schedules/edit/" + route.params.id);
    schedule.time.filter((params) => {
      info.value.time.push(params);
    })
  } else {
    router.push("/_/unauthorized");
  }
})

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
};

const editSchedule = async () => {
  // console.log("updated");
  if (info.value.time < 2) {
    info.value.time = ["-"];
    // console.log("1 left");
  }
  await $fetch(
    endpoint.value + "/api/library/schedule/booking/" + route.params.id + "/edit/",
    {
      method: "PUT",
      body: info.value,
    }
  )
    .then((response) => {
      // console.log("response", response);
      router.push({ path: "/_/panels/library/appointment/set-schedules" });
    });
};
</script>

<template>
  <div class="">
    <div class="flex">
      <div class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden" v-show="toggleSideBarMenu">
        <LibraryMenuBar />
      </div>
      <div class="w-full">
        <div class="bg-green-800">
          <div class="flex mx-auto justify-between py-2 px-3.5">
            <div class="flex items-center text-white gap-5">
              <div @click="toggleSideBarMenu = !toggleSideBarMenu" class="w-10 px-1.5">
                <i class="fa text-3xl text-white" :class="toggleSideBarMenu ? 'fa-caret-left' : 'fa-bars'"
                  aria-hidden="true"></i>
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
        <div class="">
          <div class="lg:w-full p-5">
            <div class="h-full shadow-lg">
              <div class="py-5">
                <form class="w-full" v-on:submit.prevent="editSchedule">
                  <div class="flex w-11/12 mx-auto gap-5">
                    <div class="h-fit">
                      <h1 class="mb-3 font-bold lasalle-green-text text-xs text-center uppercase">
                        Date
                      </h1>
                      <div class="w-fit mx-auto my-5">
                        <input class="text-center text-green-900 text-sm font-bold" v-model="info.date" disabled />
                      </div>

                      <div class="w-fit mx-auto">
                        <button
                          class="block uppercase text-sm rounded-sm shadow px-5 py-1 my-10 text-green-900 whitespace-nowrap">
                          Update
                        </button>
                        <NuxtLink to="/_/panels/library/appointment/set-schedules"
                          class="block w-fit uppercase text-sm rounded-sm shadow px-5 py-1 text-red-900 whitespace-nowrap">
                          Cancel
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="px-5 py-2 shadow-sm border">
                      <h1 class="mb-3 font-bold lasalle-green-text text-xs text-center uppercase">
                        Time
                      </h1>
                      <ul class="text-xs flex flex-wrap justify-center">
                        <li class="mb-3 lg:flex justify-center font-bold text-black mx-10"
                          v-for="(t, i) in timeSelection[0].time" :key="i">
                          <input id="time" type="checkbox" name="time" :value="t" class="mr-2 mt-0.5 available"
                            v-model="info.time" />
                          <label class="" for="time">
                            {{ t._12_hour_format_from }} - {{ t._12_hour_format_to }}
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DashboardFooter/>
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #0e4a03;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #ffffff;
  border-radius: 100vh;
  border: 3px solid #12b700;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #014716;
}

input[type="radio"] {
  accent-color: #20990b;
}
</style>