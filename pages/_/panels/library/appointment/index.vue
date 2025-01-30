<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import moment from "moment";
const router = useRouter();
const userStore = useUserStore();
import _ from "lodash";
const endpoint = ref(userStore.mainDevServer);
import scheduleJSON from "./time.json";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";


const bookingLibrary = await $fetch(endpoint.value + "/api/library/booking/list/").catch(
  (error) => error.data
);


let date = ref();
let time = ref([]);



let highlightedDates = ref([]);
let dataList = ref([]);


const timeSelection = ref(scheduleJSON.timeSelection);
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
    )) {
    // appointment dates pending not the schedules
    bookingLibrary.filter(function (params) {
      highlightedDates.value.push(params.booking_date);
    });
    // console.log('bookingLibrary', bookingLibrary)
    router.push("/_/panels/library/appointment");
    setDate();
  } else {
    router.push("/_/unauthorized");
  }
  // console.log(timeSelection.value)
});

const setDate = (value) => {
  date.value = moment(value).format("MM-DD-YYYY");
  time.value = [];
  dataList.value = ["-"];
  setTimeout(() => {
    bookingLibrary.filter(function (params) {
      if (params.booking_date === date.value) {
        time.value.push(params.booking_time);
        dataList.value.push(params);
        // console.log(params)
      }
    });
  }, 100);

};


const goToEdit = (id) => {
  router.push("/_/panels/library/appointment/edit/" + id);
}

let toggleSideBarMenu = ref(true);

const logOut = () => {
  router.push("/_/lib-admin");
  userStore.removeToken();
};
</script>
<template>
  <div class="">
    <div class="flex">
      <div class="pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden" v-show="toggleSideBarMenu">
        <LibraryMenuBar />
      </div>
      <div class="w-full">
        <div class="bg-green-700">
          <div class="lg:flex mx-auto justify-between py-2 px-3.5">
            <div class="lg:flex items-center text-white gap-5">
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
            <button @click="logOut()" class="flex hover:font-bold pt-1">
              <i class="fa fa-sign-out text-white text-xl"></i>
              <h1 class="text-xs text-white p-1.5">Log Out</h1>
            </button>
          </div>
        </div>

        <div class="border pb-5 m-5">
          <div>
            <div class="py-2  mb-5 text-center bg-green-900 text-white uppercase text-xs tracking-widest">Appointments
            </div>
            <div class="w-11/12 mx-auto lg:flex gap-10">
              <div class="w-4/12 mb-1">
                <div class="">
                  <div class="mx-auto w-fit">
                    <VueDatePicker v-model="date" inline :enable-time-picker="false" name="date" auto-apply
                      :highlight="highlightedDates" @update:model-value="setDate(date)" :year-range="[2025, 2025]"
                      :disabled-week-days="[0,7]" week-start="0" />
                  </div>
                </div>
              </div>

              <div class="w-full relative">
                <div class="w-full border rounded-md">
                  <ul class="flex flex-wrap pt-4 justify-center">
                    <li class="mb-3 font-bold mx-2 border p-3 w-[240px] min-h-[110px]"
                      v-for="(t, i) in timeSelection[0].time" :key="i">
                      <div class="">
                        <div class="flex justify-between w-full">
                          <div class="">
                            <div v-for="(d, i) in dataList" :key="i" :class="{
                              'text-red-700': d.status === 'pending',
                              'text-yellow-500': d.status === 'reserved',
                              'text-green-900': d.status === 'received',
                              'text-blue-300': d.status === 'returned',
                            }">
                              <span v-if="t === d.booking_time">
                                <span class="text-xs -mt-0.5 mb-3 block">{{ d.booking_time }}</span>
                              </span>

                              <!-- {{ d.booking_time }} JSON -->

                            </div>

                            <div class="text-xs w-full" :class="_.includes(time, t) ? 'hidden' : ''">
                              {{ t }}

                            </div>
                          </div>
                          <!-- <div v-for="(d, i) in dataList" :key="i" class="">
                            <span class="" :class="t === d.booking_time ? '' : 'hidden'">
                              <div class="mx-auto lg:flex justify-center">
                                <button @click="toggleDeleteBtn(d.id)" class="">
                                  <i
                                    class="fa fa-history text-green-500 rounded-lg uppercase text-sm "
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </div>
                            </span>
                          </div> -->
                        </div>
                        <div class="text-xs">
                          <div class="relative">
                            <p v-for="(d, i) in dataList" :key="i">
                              <span :class="t === d.booking_time ? '' : 'hidden'">
                                {{ d.booking_date }}
                              </span>
                            </p>
                          </div>

                          <p v-for="(d, i) in dataList" :key="i">
                            <span v-if="t === d.booking_time">
                              <span>{{ d.email }}</span><br />
                              <span>{{ d.borrower_category }}</span>
                            </span>
                          </p>


                          <div v-for="(d, i) in dataList" :key="i" class="">
                            <span class="" :class="t === d.booking_time ? '' : 'hidden'">
                              <div class="">
                                <button @click="goToEdit(d.id)"
                                  class=" w-full py-0.5 rounded-sm flex items-center gap-10 px-10 mt-3" :class="{
                                    'bg-red-700': d.status === 'pending',
                                    'bg-yellow-500': d.status === 'reserved',
                                    'bg-green-900': d.status === 'received',
                                    'bg-blue-300': d.status === 'returned',
                                  }">
                                  <span class="text-white"> Go To Details</span>
                                  <i class="fa fa-chevron-circle-right text-white rounded-lg uppercase text-sm "
                                    aria-hidden="true"></i>
                                </button>
                              </div>
                            </span>
                          </div>
                          <!-- 
                          <p
                            :class="
                              _.includes(time, t) ? ' bg-red-500 text-white' : 'hidden'
                            "
                            class="shadow text-center block p-1 mt-2"
                          >
                            Pending
                          </p> -->
                          <!-- <p
                          class="shadow text-center block p-1 my-2 bg-green-900 text-white"
                        >
                          Done
                        </p> -->
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- 
                <div
                  class="z-10 px-10 border-4 rounded-lg bg-white shadow-2xl absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  v-show="toggleConfirmDelete"
                >
                  <div class="mt-6 mb-12">Done or Close Appointment?</div>
                  <div class="flex gap-20 mx-auto w-fit my-5">
                    <span
                      class="bg-green-900 text-white px-3 py-1 rounded-lg"
                      @click="deleteAppointment"
                      >Confirm</span
                    >
                    <span
                      class="bg-red-900 text-white px-3 py-1 rounded-lg"
                      @click="toggleDeleteBtn"
                      >Cancel</span
                    >
                  </div>
                </div> -->
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
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
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
