<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import scheduleJSON from "../schedule.json";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";
const router = useRouter();
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);
import _ from "lodash";

const timeSelection = ref(scheduleJSON.timeSelection);

const info = ref({
  date: null,
  time: timeSelection._rawValue[0].time,
  updated_at: new Date()
})

let highlightedDates = ref([]);
let addBtn = ref(false);

let toggleSideBarMenu = ref(true);
const cantSelectCurrentDateText = ref(false);
const timeSelectionList = ref(true);

const minDate = ref(new Date());

const schedulesListsData = await $fetch(
  endpoint.value + "/api/library/schedule/booking/list/"
).catch((error) => error.data);

const developerEmail = ref(userStore.user.developerEmail);

const fetchData = () => {
  schedulesListsData.filter(function (params) {
    info.value.date = params.date;
    highlightedDates.value.push(params.date);
  });
}

onMounted(() => {
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
    fetchData();
    router.push("/_/panels/library/appointment/set-schedules/create");
  } else {
    router.push("/_/unauthorized");
  }
});

const checkIfExists = () => {
  // addBtn.value = true;
  schedulesListsData.filter(function (params) {
    info.value.time = params.time;
    if (params.date === info.value.date) {
      addBtn.value = false;
    }
  })
}

const setDate = (dateSelected) => {
  info.value.date = moment(dateSelected).format("MM-DD-YYYY");
  let currentDate = moment(moment().toDate()).format("MM-DD-YYYY");
  cantSelectCurrentDateText.value = false;
  timeSelectionList.value = true;
  addBtn.value = true;
  if (info.value.date === currentDate) {
    addBtn.value = false;
    cantSelectCurrentDateText.value = true;
    timeSelectionList.value = false;
  } else if (moment(info.value.date).isBefore(currentDate)) {
    addBtn.value = false;
    timeSelectionList.value = false;
  } else {
    checkIfExists();
  }
};

const browseDates = () => {
  router.push("/_/panels/library/appointment/set-schedules");
};

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
};

const addDates = async () => {
  await $fetch(endpoint.value + "/api/library/schedule/booking/create/", {
    method: "POST",
    headers: {
      Authorization: userStore.user.token,
      "Content-Type": "application/json",
    },
    body: info.value,
  })
  .then(async (response) => {
    // console.log("response", response);

    fetchData();
    setTimeout(() => {
      router.go();
    }, 1000)
    addBtn.value = true;
  })
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
      <div class="w-full">
        <div class="bg-green-800">
          <div class="flex mx-auto justify-between py-2 px-3.5">
            <div class="flex items-center text-white gap-5">
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
        <div class="">
          <div class="lg:w-full p-5">
            <div class="h-full shadow-lg">
              <div class="">
                <div class="w-full shadow mb-10">
                  <div class="px-3">
                    <button
                      @click="browseDates"
                      class="shadow text-center capitalize my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"
                    >
                      BACK
                    </button>
                  </div>
                </div>
                <div class="w-full">
                  <div class="">
                    <form class="flex mx-auto" 
                      v-on:submit.prevent="addDates">
                      <div class="mx-10 flex items-center">
                        <button
                          v-if="addBtn"
                          class="bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"
                        >
                          ADD
                        </button>
                        <div
                          v-else
                          class="bg-gray-300 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-not-allowed"
                        >
                          ADD
                        </div>
                      </div>
                      <div class="lg:flex">
                        <div class="w-fit mx-auto mb-10 h-full">
                          <h1
                            class="mb-3 font-bold lasalle-green-text text-xs text-center uppercase"
                          >
                            Select Date to Add Schedule
                          </h1>
                          <!-- remove past dates using min-date disable weekends in calendar -->
                          <!-- set Sunday First in the Calendar using week-start=0 -->
                          <!-- :disabled-week-days="[6, 7, 0]" -->
                          <div class="">
                            <VueDatePicker
                              v-model="info.date"
                              inline
                              :enable-time-picker="false"
                              id="date"
                              name="date"
                              auto-apply
                              :highlight="highlightedDates"
                              @update:model-value="setDate(info.date)"
                              :year-range="[2025, 2025]"
                              :disabled-week-days="[0,7]"
                              week-start="0"
                              hide-offset-dates
                              :min-date="minDate"
                            />
                          </div>
                          <div
                            v-show="cantSelectCurrentDateText"
                            class="text-center mt-5 text-red-700"
                          >
                            Sorry! Can't Add Current Date
                          </div>
                        </div>
                        <div class="w-fit mx-auto mb-5" v-show="timeSelectionList">
                          <div class="w-11/12 mx-auto px-3 py-2 shadow-sm border">
                             <h1
                            class="mb-3 font-bold lasalle-green-text text-xs text-center uppercase"
                          >
                            Time
                          </h1>
                            <ul class="text-xs flex flex-wrap justify-center">
                              <li
                                class="my-2 lg:flex justify-center font-bold text-black mx-10"
                                v-for="(t, i) in timeSelection[0].time"
                                :key="i"
                              >
                                <input
                                  id="time"
                                  type="checkbox"
                                  name="time"
                                  :value="t"
                                  class="mr-2 mt-0.5 available"
                                  v-model="info.time"
                                />
                                <label class="" for="time">{{ t._12_hour_format_from }} - {{ t._12_hour_format_to }}</label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
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