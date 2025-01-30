<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import providerListJSON from "./providerList.json";
import scheduleJSON from "./schedule.json";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import addDays from "date-fns/addDays";
import moment from "moment";
import _ from "lodash";
const router = useRouter();
const userStore = useUserStore();
const providerLists = ref(providerListJSON.providerLists);
const timeSelection = ref(scheduleJSON.timeSelection);

import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref as storageReference,
} from "firebase/storage";


const endpoint = ref(userStore.mainDevServer);

const schedulesListsData = await $fetch(endpoint.value + "/api/schedules/list/").catch((error) => error.data)

let id = ref();
let service = ref("");
let provider = ref("");
let referencecode = ref("APS" + Date.now());
let date = ref();
let time = ref("");
let firstname = ref("Jo Renlee");
let lastname = ref("Luna");
let email = ref("jorenleeluna24@gmail.com");
let contactnumber = ref("09210689089");
let address = ref("Philippines");
let city = ref("Ozamiz City");
let zipcode = ref("7200");
let notes = ref("Sample");
let banner_image = ref(
  "https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2"
);
let successful_request = ref(true);
let appointment_confirm = ref(false);
let payment = ref(false);
let request_delivered = ref(false);
let updated_at = ref(new Date().toDateString());
let created_by_name = ref("Public Users");
let created_by_email = ref(email.value);
let errors = ref([]);
let timeList = ref();
let providerList = ref();
let highlightedDates = ref([]);

let bookAppointment = ref(true);
let serviceAndProvider = ref(true);
let appointmentDateAndTime = ref(false);
let contactInformation = ref(false);
let appointmentConfirmation = ref(false);

const uploadTask = ref(null);
const paused = ref(true);
const progress = ref(0);
let fileTitle = ref("");

let bannerImagePreview = ref(
  "https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2"
);

// let confirmRefCodeBtn = ref(true);
// let resetRefCodeBtn = ref(true);

// let countDown = ref(100);
// let confirmReferenceCode = ref("");
// let matchReferenceCodeInEmail = ref(false);

// onMounted(() => {
//   console.log(schedulesListsData);
// });

const progressPercent = computed(() => Math.round(progress.value));

function handleChange(e) {
  const storage = getStorage();
  fileTitle.value = e.target.files[0].lastModified;
  const storageRef = storageReference(storage, "public/" + fileTitle.value);
  uploadTask.value = uploadBytesResumable(storageRef, e.target.files[0]);

  // console.log(e.target.files[0].lastModified);
  uploadTask.value.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      progress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("Upload is " + progress.value + "% done");
      switch (snapshot.state) {
        case "paused":
          // console.log("Upload is paused");
          break;
        case "running":
          // console.log("Upload is running");
          break;
      }
    },
    (error) => {},
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.value.snapshot.ref).then((downloadURL) => {
        // console.log("File available at", downloadURL);
        banner_image.value = downloadURL;
        bannerImagePreview.value = downloadURL;
      });
    }
  );
  paused.value = false;
}

function pause(e) {
  e.preventDefault();

  if (paused.value == false) {
    uploadTask.value.pause();
    paused.value = !paused.value;
  } else {
    uploadTask.value.resume();
    paused.value = false;
  }
}


let listAvailableDatesInEachProvider = (value) => {
  highlightedDates.value = [];
  for (let i = 0; i < schedulesListsData.length; i++) {
    if (_.includes(schedulesListsData[i].provider, value)) {
      highlightedDates.value.push(schedulesListsData[i].date);
    }
  }
}

const setDate = (value) => {
  date.value = moment(value).format("MM-DD-YYYY");
  schedulesListsData.filter(function (params) {
    if (date.value === params.date) {
      id.value = params.id;
      date.value = params.date;
      timeList.value = params.time;
      providerList.value = params.provider;
    }
  });
};

let toggleBtn = (a, b, c, d) => {
  serviceAndProvider.value = a;
  appointmentDateAndTime.value = b;
  contactInformation.value = c;
  appointmentConfirmation.value = d;
};

const updateSchedule = async () => {
 if (timeList.value.length === 1) {
    timeList.value = ["-"];
  } 
  _.pull(timeList.value, time.value);
  await $fetch(endpoint.value + "/api/schedules/" + id.value + "/edit/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      provider: providerList.value,
      date: date.value,
      time: timeList.value,
    },
  })
  .then((response) => {
    // console.log("response", response);
  })
  .catch((error) => {
    if (error.response) {
      for (const property in error.response._data) {
        errors.value.push(`${property}: ${error.response._data[property]}`);
      }
      // console.log(JSON.stringify(error.response));
    } else if (error.message) {
      errors.value.push("Something went wrong. Please try again");
      // console.log(JSON.stringify(error));
    }
  });
};

const confirmEmail = () => {
  errors.value = [];
  if (
    service.value == "" &&
    provider.value == "" &&
    referencecode.value == "" &&
    date.value == "" &&
    time.value == "" &&
    firstname.value == "" &&
    lastname.value == "" &&
    email.value == "" &&
    contactnumber.value == "" &&
    address.value == "" &&
    city.value == "" &&
    zipcode.value == "" &&
    notes.value == "" &&
    banner_image.value == "" &&
    successful_request.value == "" &&
    appointment_confirm.value == "" &&
    payment.value == "" &&
    request_delivered.value == ""
  ) {
    errors.value.push("Please enter all Fields.");
  }
  if (errors.value.length == 0) {
    serviceAndProvider.value = false;
    appointmentDateAndTime.value = false;
    contactInformation.value = false;
    appointmentConfirmation.value = true;
    // countDownTimer();
    // submitReferenceCode();
  }
};

// const submitReferenceCode = async () => {
//   await $fetch(endpoint.value + "/api/appointments/reference-code-to-gmail/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: {
//       service: service.value,
//       provider: provider.value,
//       referencecode: referencecode.value,
//       date: date.value,
//       time: time.value,
//       firstname: firstname.value,
//       lastname: lastname.value,
//       email: email.value,
//       contactnumber: contactnumber.value,
//       address: address.value,
//       city: city.value,
//       zipcode: zipcode.value,
//       notes: notes.value,
//       successful_request: successful_request.value,
//       appointment_confirm: appointment_confirm.value,
//       payment: payment.value,
//       request_delivered: request_delivered.value,
//       updated_at: updated_at.value,
//       created_by_name: created_by_name.value,
//       created_by_email: email.value,
//     },
//   })
//     .then((response) => {})
//     .catch((error) => {
//       console.log(error);
//     });
// };

const submitAppointmentToGmail = async () => {
  await $fetch(endpoint.value + "/api/appointments/submit-appointment-to-gmail/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      service: service.value,
      provider: provider.value,
      referencecode: referencecode.value,
      date: date.value,
      time: time.value,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      contactnumber: contactnumber.value,
      address: address.value,
      city: city.value,
      zipcode: zipcode.value,
      notes: notes.value,
      banner_image: banner_image.value,
      successful_request: successful_request.value,
      appointment_confirm: appointment_confirm.value,
      payment: payment.value,
      request_delivered: request_delivered.value,
      updated_at: updated_at.value,
      created_by_name: created_by_name.value,
      created_by_email: email.value,
    },
  })
    .then((response) => {})
    .catch((error) => {
      // console.log(error);
    });
};

// const countDownTimer = () => {
//   if (countDown.value > 0) {
//     setTimeout(() => {
//       countDown.value -= 1;
//       countDownTimer();
//     }, 1000);
//   }
// };

// const checkReferenceCode = () => {
//   if (confirmReferenceCode.value === referencecode.value) {
//     matchReferenceCodeInEmail.value = true;
//     countDown.value = -1;
//     confirmRefCodeBtn.value = false;
//     resetRefCodeBtn.value = false;
//   }
// };

// const resetReferenceCode = () => {
//   referencecode.value = "APS" + Date.now();
//   countDown.value = 100;
//   submitReferenceCode();
//   countDownTimer();
// };

const submitForm = async () => {
  // console.log("submitForm");

  errors.value = [];

  if (
    service.value == "" &&
    provider.value == "" &&
    referencecode.value == "" &&
    date.value == "" &&
    time.value == "" &&
    firstname.value == "" &&
    lastname.value == "" &&
    email.value == "" &&
    contactnumber.value == "" &&
    address.value == "" &&
    city.value == "" &&
    zipcode.value == "" &&
    notes.value == "" &&
    banner_image.value == "" &&
    successful_request.value == "" &&
    appointment_confirm.value == "" &&
    payment.value == "" &&
    request_delivered.value == ""
  ) {
    errors.value.push("Please enter all Fields.");
  }
  if (errors.value.length == 0) {
    successful_request.value = true;
    updateSchedule();
    submitAppointmentToGmail();
    await $fetch(endpoint.value + "/api/appointments/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        service: service.value,
        provider: provider.value,
        referencecode: referencecode.value,
        // referencecode: confirmReferenceCode.value,
        date: date.value,
        time: time.value,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        contactnumber: contactnumber.value,
        address: address.value,
        city: city.value,
        zipcode: zipcode.value,
        notes: notes.value,
        banner_image: banner_image.value,
        successful_request: successful_request.value,
        appointment_confirm: appointment_confirm.value,
        payment: payment.value,
        request_delivered: request_delivered.value,
        updated_at: updated_at.value,
        created_by_name: created_by_name.value,
        created_by_email: email.value,
      },
    })
      .then((response) => {
        // console.log("response", response);
        bookAppointment.value = false;
      })
      .catch((error) => {
        if (error.response) {
          for (const property in error.response._data) {
            errors.value.push(`${property}: ${error.response._data[property]}`);
          }
          // console.log(JSON.stringify(error.response));
        } else if (error.message) {
          errors.value.push("Something went wrong. Please try again");
          // console.log(JSON.stringify(error));
        }
      });
  }
};
</script>

<template>
  <div class="">
    <Header />
    <div class="">
      <div class="relative">
        <img
          src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg"
          class="align-top w-full h-auto lg:object-fill lg:block hidden"
        />
        <img
          src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png"
          class="align-top w-full h-36 object-none lg:hidden block"
        />
        <div class="lg:pt-10 absolute top-1/2 transform -translate-y-1/2 lg:w-full">
          <h1
            class="font-bold uppercase text-white lg:text-2xl text-lg lg:w-11/12 mx-auto"
          >
            Book Appointment
          </h1>
        </div>
        <div class="pt-2.5 pb-3 shadow-lg">
          <ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs">
            <li>
              <a href="/" class="mr-1"> Home </a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="/university-registrar" class="mr-1">University Registrar</a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="/" class="mr-1">Book Appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-11/12 lg:rounded-lg mx-auto shadow-lg lg:my-10 my-5">
      <div v-if="bookAppointment" class="lg:flex">
        <div
          class="lg:whitespace-nowrap lg:w-3/12 w-full px-5 lasalle-green text-white pt-10 pb-5 lg:rounded-bl-lg lg:rounded-tl-lg"
        >
          <ul class="">
            <li
              class="mb-8 cursor-pointer"
              :class="serviceAndProvider ? 'font-bold text-sm' : 'text-xs text-gray-300'"
            >
              <span class="bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"
                >1</span
              >
              Service and Provider
            </li>
            <li
              class="mb-8 cursor-pointer"
              :class="
                appointmentDateAndTime ? 'font-bold text-sm' : 'text-xs text-gray-300'
              "
            >
              <span class="bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"
                >2</span
              >
              Appointment Date and Time
            </li>
            <li
              class="mb-8 cursor-pointer"
              :class="contactInformation ? 'font-bold text-sm' : 'text-xs text-gray-300'"
            >
              <span class="bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"
                >3</span
              >
              Contact Information
            </li>
            <li
              class="mb-8 cursor-pointer"
              :class="
                appointmentConfirmation ? 'font-bold text-sm' : 'text-xs text-gray-300'
              "
            >
              <span class="bg-white rounded-full lg:py-1.5 px-3 mr-3 text-green-900"
                >4</span
              >
              Appointment Confirmation
            </li>
          </ul>
        </div>

        <form v-on:submit.prevent="submitForm" class="w-full">
          <div
            class="lg:flex mx-auto gap-5 lg:px-10 px-1 lg:w-full lg:py-3 text-xs"
            v-show="serviceAndProvider"
          >
            <div class="lg:w-full my-5">
              <div>
                <h1 class="font-bold">Note:</h1>
                <ul class="list-disc pl-5">
                  <li>
                    Appointment DOES NOT necessarily mean we will release your document(s)
                    on that same day.
                  </li>
                  <li>
                    You do not need to come to LSU. We will call you on your appointment
                    date/time.
                  </li>
                  <li>
                    We can send your requested documents to your address through a
                    courrier.
                  </li>
                  <li>Duration for each Application is up to 20 Minutes.</li>
                </ul>
              </div>

              <div class="my-5">
                <label
                  for="registrar"
                  class="block mb-2 text-xs font-bold text-gray-900 uppercase"
                  >Service</label
                >
                <select
                  v-model="service"
                  id="service"
                  name="service"
                  class="shadow-md p-2 rounded-sm mb-2 w-full"
                >
                  <option value="" disabled>Please select the type of service.</option>
                  <optgroup label="University Registrar">
                    <option value="CAV">CAV Application</option>
                    <option value="Good Moral">
                      Certificate of Good Moral Character
                    </option>
                    <option value="Honorable">Honorable Dismissal</option>
                    <option value="TOR">Transcipt of Records Application</option>
                    <option value="OTHERS">Other Certificates Application</option>
                  </optgroup>

                  <optgroup label="SAO Office">
                    <option value="Good Moral SAO">
                      Certificate of Good Moral Character
                    </option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div class="lg:w-full mx-auto">
              <div class="lg:pr-0 lg:pl-10 px-2 lg:mt-5">
                <div class="">
                  <label
                    for="registrar"
                    class="uppercase block ml-6 mb-3 text-xs font-bold text-gray-900"
                    >Provider</label
                  >
                  <div class="text-xs mt-3 mb-3 font-bold">
                    <label class="" for="PleaseSelectTheProvider"
                      >Please Select a Provider</label
                    >
                  </div>
                  <div
                    v-for="(p, i) in providerLists"
                    :key="i"
                    class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
                  >
                    <div class="">
                      <input
                        class="lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500"
                        type="radio"
                        name="provider"
                        id="provider"
                        :value="p.registrarsAssign"
                        v-model="provider"
                        @click="listAvailableDatesInEachProvider(p.registrarsAssign)"
                      />
                      <label
                        class="flex items-center ml-5 font-bold text-green-900 -mt-5 text-sm"
                        style="font-size: 9px"
                        for="provider"
                        >{{ p.title }}</label
                      >
                    </div>

                    <p class="pl-5 text-xs">{{ p.description }}</p>
                  </div>
                </div>
              </div>
              <div class="justify-end flex">
                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 lg:mb-0 mb-3 uppercase"
                  @click="toggleBtn(false, true, false, false)"
                >
                  Next <i class="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div
            class="lg:flex mx-auto gap-20 lg:px-8 w-full pb-3 text-xs"
            v-show="appointmentDateAndTime"
          >
            <div class="mx-auto gap-20 w-full">
              <div class="lg:w-full lg:px-10 pt-2">
                <div class="lg:grid grid-cols-2 lg:gap-20">
                  <div class="pb-3">
                    <h1 class="text-center mb-3 font-bold lasalle-green-text">
                      Calendar
                    </h1>
                    <div class="w-fit mx-auto">
                     <VueDatePicker
                            v-model="date"
                            inline
                            :enable-time-picker="false"
                            id="date"
                            name="date"
                            auto-apply
                            :highlight="highlightedDates"
                            @update:model-value="setDate(date)"
                            :year-range="[2025, 2025]"
                            :disabled-week-days="[6, 7,0]"
                            week-start="0"
                            hide-offset-dates
                            :min-date="minDate"
                          />
                    </div>
                  </div>

                  <div class="pb-3">
                    <h1
                      class="text-center mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"
                    >
                      Available Time
                    </h1>
                    <div class="w-full">
                      <div class="">
                        <div class="">
                          <div class="h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md">
                            <ul class="">
                              <li
                                class="mb-3 lg:flex justify-center font-bold"
                                v-for="(t, i) in timeSelection[0].time"
                                :key="i"
                              >
                                <input
                                  id="time"
                                  type="radio"
                                  name="time"
                                  :value="t"
                                  class="mr-2 mt-0.5"
                                  v-model="time"
                                  v-if="_.includes(timeList, t)"
                                />
                                <input
                                  id="time"
                                  type="radio"
                                  name="time"
                                  :value="t"
                                  class="mr-2 mt-0.5"
                                  v-else
                                  disabled
                                />
                                <label
                                  for="time"
                                  :class="
                                    _.includes(timeList, t)
                                      ? 'text-green-500'
                                      : 'text-red-500'
                                  "
                                >
                                  {{ t }}
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mx-auto justify-between flex">
                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg uppercase"
                  @click="toggleBtn(true, false, false, false)"
                >
                  <i class="fa fa-angle-left"></i> Previous
                </div>
                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg uppercase"
                  @click="toggleBtn(false, false, true, false)"
                >
                  Next <i class="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:flex mx-auto gap-20 lg:px-8 px-1 w-full py-3 text-xs"
            v-show="contactInformation"
          >
            <div class="mx-auto gap-20 w-full">
              <div class="w-full">
                <div class="lg:grid grid-cols-2 gap-5">
                  <div>
                    <h1 class="mb-3 font-bold lasalle-green-text">Primary Information</h1>
                    <div class="grid lg:grid-cols-3 grid-cols-1 gap-3">
                      <input
                        id="firstname"
                        name="firstname"
                        class="shadow-md p-2 rounded-sm w-full border"
                        placeholder="First Name"
                        v-model="firstname"
                      />
                      <input
                        id="lastname"
                        name="lastname"
                        class="shadow-md p-2 rounded-sm w-full border"
                        placeholder="Last Name"
                        v-model="lastname"
                      />

                      <input
                        id="contactnumber"
                        name="contactnumber"
                        class="shadow-md p-2 rounded-sm w-full border"
                        placeholder="Contact Number"
                        v-model="contactnumber"
                      />
                    </div>
                    <input
                      id="email"
                      name="email"
                      class="shadow-md p-2 my-3 rounded-sm w-full border"
                      placeholder="Email"
                      v-model="email"
                    />
                  </div>
                  <div>
                    <h1 class="lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text">
                      Contact Address
                    </h1>
                    <div class="gap-5">
                      <input
                        id="address"
                        name="address"
                        class="shadow-md p-2 rounded-sm mb-3 w-full border"
                        placeholder="Address"
                        v-model="address"
                      />
                      <div class="lg:grid lg:grid-cols-2 grid-cols-1 gap-3">
                        <input
                          id="city"
                          name="city"
                          class="shadow-md p-2 rounded-sm w-full border"
                          placeholder="City"
                          v-model="city"
                        />
                        <input
                          id="zipcode"
                          name="zipcode"
                          class="shadow-md p-2 rounded-sm w-full border"
                          placeholder="Zip Code"
                          v-model="zipcode"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <textarea
                    name="notes"
                    placeholder="Notes"
                    class="shadow-md outline-0 border border-gray-200 rounded-sm p-2 w-full"
                    v-model="notes"
                  ></textarea>
                </div>
                <div class="lg:flex mt-3">
                  <div class="flex w-full">
                    <div class="flex h-fit">
                      <input
                        type="file"
                        @change="handleChange"
                        accept="image/*"
                      />
                      <button @click="pause" class="ml-10">
                        <div v-if="paused">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </div>
                        <div v-else>
                          <i class="fa fa-play" aria-hidden="true"></i>
                        </div>
                      </button>
                    </div>
                    <div class="w-5/12 ml-10 text-center pt-3">
                      <div
                        class="text-white bg-green-900 transition-all ease-in-out duration-200 h-5 flex items-center"
                        :style="`width:${progressPercent}%`"
                      >
                        <p class="mx-auto">{{ progressPercent }} %</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full shadow" v-if="bannerImagePreview">
                    <img class="w-full h-56" :src="bannerImagePreview" />
                  </div>
                </div>
              </div>

              <div class="lg:w-full mx-auto justify-between flex">
                <div
                  v-if="errors.length"
                  class="mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"
                >
                  <p v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </p>
                </div>
                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"
                  @click="toggleBtn(false, true, false, false)"
                >
                  <i class="fa fa-angle-left"></i> Previous
                </div>

                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"
                  @click="confirmEmail"
                >
                  Next <i class="fa fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:flex mx-auto gap-20 lg:px-8 lg:w-full pt-3 pb-3 text-xs"
            v-show="appointmentConfirmation"
          >
            <div class="mx-auto gap-20 lg:w-full lasalle-green-text">
              <div class="lg:w-full lg:flex gap-10">
                <div
                  class="lg:flex w-full border-t-2 border-gray-100 shadow-md rounded-lg"
                >
                  <div class="p-5 border-r lg:w-full">
                    <h1 class="mb-3 lasalle-green-text text-center border-b pb-3">
                      Appointment
                    </h1>
                    <div class="">
                      <ul>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 w-3/12">Service</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ service }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 w-3/12">Provider</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ provider }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 w-3/12 whitespace-nowrap">Date</label>
                          <h1 class="font-bold text-green-800 text-xs">: {{ date }}</h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 w-3/12 whitespace-nowrap">Time</label>
                          <h1 class="font-bold text-green-800 text-xs">: {{ time }}</h1>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="p-5 lg:w-full border-r">
                    <h1 class="mb-3 lasalle-green-text text-center border-b pb-3">
                      Personal Information
                    </h1>
                    <div class="">
                      <ul>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Full Name</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ firstname }} {{ lastname }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Contact Number</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ contactnumber }}
                          </h1>
                        </li>
                        <li class="lg:flex lg:text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Contact Email</label>
                          <h1 class="font-bold text-green-800 lg:text-xs">
                            : {{ email }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Address</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ address }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">City</label>
                          <h1 class="font-bold text-green-800 text-xs">: {{ city }}</h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Zipcode</label>
                          <h1 class="font-bold text-green-800 text-xs">
                            : {{ zipcode }}
                          </h1>
                        </li>
                        <li class="lg:flex text-xs mb-2">
                          <label class="pr-2 lg:w-4/12">Notes</label>
                          <h1 class="font-bold text-green-800 text-xs">: {{ notes }}</h1>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- <div class="p-5 lg:w-3/12">
                    <h1 class="mb-3 lasalle-green-text text-center border-b pb-3">
                      Verification
                    </h1>
                    <div class="">
                      <ul>
                        <li class="text-xs mb-2">
                          <label v-if="confirmRefCodeBtn" class="pr-2 w-4/12"
                            >Enter reference code from your email.</label
                          >
                          <label v-if="!confirmRefCodeBtn" class="mx-auto w-fit block"
                            >Reference Code
                          </label>
                          <input
                            v-if="confirmRefCodeBtn"
                            id="referencecode"
                            name="referencecode"
                            class="shadow-md p-2 my-3 rounded-sm w-full border"
                            placeholder="Reference Code"
                            v-model="confirmReferenceCode"
                          />
                          <input
                            v-if="!confirmRefCodeBtn"
                            id="referencecode"
                            name="referencecode"
                            class="shadow-md p-2 my-3 text-center font-bold rounded-sm w-full border"
                            placeholder="Reference Code"
                            v-model="confirmReferenceCode"
                            disabled
                          />
                          <span
                            v-if="confirmRefCodeBtn"
                            class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-1 uppercase block w-fit mx-auto"
                            :class="countDown > 0 ? '' : 'hidden'"
                            @click="checkReferenceCode"
                          >
                            Confirm
                          </span>

                          <span
                            v-if="countDown === 0"
                            class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-1 uppercase block w-fit mx-auto"
                            @click="resetReferenceCode"
                          >
                            Resend
                          </span>
                          <h1
                            v-if="countDown > 0"
                            class="text-white bg-green-900 rounded-full w-20 h-20 mx-auto mt-3 flex items-center"
                          >
                            <span class="mx-auto">
                              <span class="font-bold text-lg block text-center">{{
                                countDown
                              }}</span>
                              seconds
                            </span>
                          </h1>
                        </li>
                      </ul>
                    </div>
                  </div> -->
                </div>
              </div>
              <div class="lg:w-full w-full mx-auto justify-between flex">
                <div
                  class="lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"
                  @click="toggleBtn(false, false, true, false)"
                >
                  <i class="fa fa-angle-left"></i> Previous
                </div>
                <!--v-if="matchReferenceCodeInEmail"-->
                <button
                  class="text-green-900 text-xs border-green-900 border-2 bg-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"
                >
                  <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>
                    Submit Appointment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div v-else>
        <p class="text-green-900 p-10 text-center w-6/12 mx-auto">
          <i
            class="fa fa-check-circle mx-auto text-7xl mb-3 text-green-900 block"
            aria-hidden="true"
          ></i>
          Successfully submitted! Kindly check your email for more updates. You can track
          your appointment through this page:
          <a
            href="https://lsu.edu.ph/university-registrar/track-appointment-status"
            class="font-bold"
            >Track Appointment</a
          >
          <span class="block">Thank you!</span>
        </p>
      </div>
    </div>
    <Footer />
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

input[type="radio"]:disabled {
  background-color: #940000;
  accent-color: #940000;
}
</style>
