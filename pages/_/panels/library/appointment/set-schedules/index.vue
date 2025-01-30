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

const schedulesListsData = await $fetch(
  endpoint.value + "/api/library/schedule/booking/list/"
).catch((error) => error.data);

const info = ref({
  date: null,
  time: null,
  updated_at: new Date()
})

let id = ref();
// let date = ref();
// let time = ref(timeSelection._rawValue[0].time);
// let time = ref();
// let updated_at = ref("Jan 1, 2024");

let highlightedDates = ref([]);
let displayAction = ref(false);
let toggleSideBarMenu = ref(true);
let toggleConfirmDelete = ref(false);

const minDate = ref(new Date());
let timeList = ref();

const emailRegistrar = ref(userStore.user.registrarEmail);
const developerEmail = ref(userStore.user.developerEmail);
const testEmail = ref(userStore.user.testEmail);

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
    schedulesListsData.filter(function (params) {
      info.value.date = params.date;
      highlightedDates.value.push(params.date);
    });
    router.push("/_/panels/library/appointment/set-schedules");
  } else {
    router.push("/_/unauthorized");
  }
});

const setDate = (value) => {
  info.value.date = moment(value).format("MM-DD-YYYY");
  displayAction.value = false;
  info.value.time = ["-"];
  setTimeout(() => {
    schedulesListsData.filter(function (params) {
      if (params.date === info.value.date) {
        id.value = params.id;
        info.value.time = params.time;
        timeList.value = params.time;
        displayAction.value = true;
      }
    });
  }, 100);
};

const toggleDeleteBtn = (id) => {
  toggleConfirmDelete.value = !toggleConfirmDelete.value;
  id.value = id;
};

const deleteSchedule = async () => {
  await $fetch(
    endpoint.value + "/api/library/schedule/booking/" + id.value + "/delete/",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (response) => {
      // console.log("response", response);
      router.go();
      toggleConfirmDelete.value = !toggleConfirmDelete.value;
    });
};

const addSchedules = () => {
  router.push("/_/panels/library/appointment/set-schedules/create");
};

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
};

const editTime = (id) => {
  router.push("/_/panels/library/appointment/set-schedules/edit/" + id);
  // console.log(id);
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
            <div class="h-full shadow-lg pb-10">
              <div class="relative">
                <div class="w-full mb-10">
                  <div class="flex shadow px-3 justify-between">
                    <button @click="addSchedules"
                      class="shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap">
                      Add Schedules
                    </button>
                    <div v-if="displayAction" class="">
                      <button @click="editTime(id)"
                        class="shadow text-center mx-5 uppercase my-3 px-4 py-1 bg-yellow-500 font-semibold text-sm text-white rounded-md whitespace-nowrap">
                        Edit Time
                      </button>
                      <button @click="toggleDeleteBtn"
                        class="shadow text-center  uppercase my-3 px-4 py-1 bg-red-800 font-semibold text-sm text-white rounded-md whitespace-nowrap">
                        Removed / Disable
                      </button>
                    </div>
                  </div>
                </div>
                <div class="" v-if="schedulesListsData.length > 0">
                  <div class="w-11/12 mx-auto">
                    <div class="lg:flex">
                      <div class="lg:w-fit mr-14 mb-10 w-fitmx-auto h-full">
                        <h1 class="mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase">
                          Calendar
                        </h1>
                        <div class=" ">
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
                            :min-date="minDate" />
                        </div>
                      </div>

                      <div class="lg:w-full">
                        <h1 class="mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase">
                          Select Time
                        </h1>
                        <div class="border mx-auto px-5 py-5 rounded-md">
                          <ul class="lg:grid grid-cols-3">
                        <!-- <li
                                class="mb-3 lg:flex justify-center font-bold"
                                v-for="(t, i) in timeSelection[0].time"
                                :key="i"
                              >
                                <input
                                  type="checkbox"
                                  name="time"
                                  :value="t"
                                  class="mr-2 mt-0.5 available"
                                  v-model="time"
                                  disabled
                                />
                                <label
                                  for="time"
                                >
                                {{ t._12_hour_format_from }} - {{ t._12_hour_format_to }}
                                </label>
                              </li> -->
                            <li
                              class="flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5"
                              v-for="(t, i) in timeSelection[0].time" :key="i">
                              <label :for="i" 
                                class="lg:text-xs text-[10px]" 
                                :class="_.find(info.time, t) ? 'text-[#087830]' : ' text-gray-400'
                                ">
                                {{ t._12_hour_format_from }} - {{ t._12_hour_format_to }}
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    v-show="toggleConfirmDelete">
                    <div class="my-6">Are you sure you want to Delete?</div>
                    <div class="flex gap-5 mx-auto w-fit my-5">
                      <span class="bg-green-900 text-white px-3 py-1 rounded-lg" @click="deleteSchedule">Yes</span>
                      <span class="bg-red-900 text-white px-3 py-1 rounded-lg" @click="toggleDeleteBtn">Cancel</span>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center">
                  Please Add Schedules, No Results Found!
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

/* input[type="radio"] {
  accent-color: #148600;
  background-color: #6eff58;
} */

input[type="radio"]:disabled {
  background-color: #e2e2e2;
  accent-color: #e2e2e2;
}

input[type='radio'] {
  color: #005715;
  outline: none;
  box-shadow: none;
}
</style>