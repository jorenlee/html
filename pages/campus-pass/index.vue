<script setup>
  import {
    useUserStore
  } from "@/stores/user";
  import _ from "lodash";
  const pleaseFillUpAllRequiredFields = ref(false);
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  const formDisplay = ref(true);
  const thankYouDisplay = ref(false);
  const info = ref({
    main_in_charge_fullname: "",
    email_address: "",
    mobile_phone_number: "",
    purpose_of_access: "",
    location: "",
    date_start: "",
    time_start: "",
    date_end: "",
    time_end: "",
    approved_activities_link: "",
    approved_booking_document_gso_link: "",
    lists_names_link: "-",
    few_name_list: [],
    approval_status: "pending",
    remarks: "-"
  })
  const bulkListsBtn = ref(false)
  const individualListsBtn = ref(false)
  const toggleListsFunc = (a, b) => {
    bulkListsBtn.value = a
    individualListsBtn.value = b
    info.value.few_name_list = []
  }
  const addRow = async (obj) => {
    info.value.few_name_list.push({
      fullname: obj.fullname,
      email: obj.email
    });
  };
  const removeRow = (item) => {
    if (info.value.few_name_list.length > 0) {
      _.pull(info.value.few_name_list, item);
    }
  }
  const submitForm = async () => {
    await $fetch(endpoint.value + "/api/campus-pass/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: info.value,
    }).then((response) => {
      formDisplay.value = false;
      thankYouDisplay.value = true;
      console.log(response);
    })
  }
</script>
<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="relative">
        <img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" />
        <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" />
        <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
          <h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Campus Pass </h1>
        </div>
        <div class="shadow-lg">
          <div class="w-11/12 mx-auto flex justify-between">
            <ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-3">
              <li>
                <a href="/" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/campus-pass" class="mr-1"> Campus Pass Form </a>
              </li>
            </ul>
            <ul class="flex hover:text-green-800 text-white">
              <li class="px-3 h-full flex items-center capitalize text-xs ">
                <a href="/_/campus-pass-admin" class="flex items-center">
                  <span class="">Admin Login</span>
                </a>
              </li>
              <li class="bg-green-800 px-3 h-full flex items-center capitalize text-xs ">
                <a href="/_/campus-pass-admin" class="flex items-center">
                  <i class="fa fa-user text-white" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="formDisplay">
      <form v-on:submit.prevent="submitForm">
        <div class="border-t-2 border-green-700 shadow-lg my-5 w-11/12 mx-auto">
          <div class="">
            <h2 class="lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center">
              <i class="fa fa-address-card text-white mr-2"></i> Campus Pass Entry Form
            </h2>
            <div class="border-y-4">
              <!-- <div class="text-center px-3 uppercase font-bold lg:text-sm  text-xs py-2  cursor-pointer border-b"> Personal Details </div> -->
              <div class="mt-3 pb-5 lg:px-5 px-2">
                <div>
                  <div class="flex gap-3">
                    <div class="w-full">
                      <div class="lg:flex w-full gap-3">
                        <div class="lg:flex gap-3 w-full">
                          <div class="w-full lg:mb-0 mb-2">
                            <label class="text-xs text-gray-900 lg:block pb-2 lg:font-bold">
                              <i class='text-md mr-2 ml-1 fa fa-id-badge text-green-800'></i> Main Incharge </label>
                            <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="e.g Juan Dela Cruz" v-model="info.main_in_charge_fullname" />
                          </div>
                          <div class="w-full lg:mb-0 mb-2">
                            <label class="text-xs text-gray-900 lg:block pb-2 lg:font-bold">
                              <i class='text-md mr-2 ml-1 fa fa-envelope text-green-800'></i> LSU Email Address </label>
                            <input type="email" class="px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="LSU Email e.g sample@lsu.edu.ph" v-model="info.email_address" />
                          </div>
                          <div class="lg:w-8/12 w-full lg:mb-0 mb-2">
                            <label class="text-xs text-gray-900 lg:block pb-2 lg:font-bold">
                              <i class='text-md mr-2 ml-1 fa fa-phone text-green-800'></i> Mobile Phone Number </label>
                            <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Mobile Phone Number" v-model="info.mobile_phone_number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 gap-3">
                    <div class="w-full lg:mb-0 mb-2">
                      <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                        <i class='text-md mr-2 ml-1 fa fa-university text-green-800'></i> Purpose of Access </label>
                      <input type="text" class="px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Purpose of Access" v-model="info.purpose_of_access" />
                    </div>
                    <div class="w-full lg:mb-0 mb-4">
                      <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                        <i class='text-md mr-2 ml-1 fa fa-map-marker text-green-800'></i> Location </label>
                      <div>
                        <input type="text" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Location" v-model="info.location" />
                      </div>
                    </div>
                    <div class="flex gap-3 lg:shadow-none shadow-lg lg:mb-0 mb-2">
                      <div class="lg:w-fit w-full ">
                        <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                          <i class='text-md mr-2 ml-1 fa fa-calendar text-green-800'></i> Date Start </label>
                        <div>
                          <input type="date" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 lg:shadow-lg rounded-sm h-9 text-xs" v-model="info.date_start" />
                        </div>
                      </div>
                      <div class="lg:w-fit w-full">
                        <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                          <i class='text-md mr-2 ml-1 fa fa-clock text-green-800'></i> Time Start </label>
                        <div>
                          <input type="time" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 lg:shadow-lg rounded-sm h-9 text-xs" v-model="info.time_start" />
                        </div>
                      </div>
                    </div>
                    <div class="flex gap-3 lg:shadow-none shadow-lg lg:mb-0 mb-1">
                      <div class="lg:w-fit w-full">
                        <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                          <i class='text-md mr-2 ml-1 fa fa-calendar text-green-800'></i> Date End </label>
                        <div>
                          <input type="date" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 lg:shadow-lg rounded-sm h-9 text-xs" v-model="info.date_end" />
                        </div>
                      </div>
                      <div class="lg:w-fit w-full">
                        <label class="text-xs text-gray-900 lg:block pb-1 lg:font-bold">
                          <i class='text-md mr-2 ml-1 fa fa-clock text-green-800'></i> Time End </label>
                        <div>
                          <input type="time" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 lg:shadow-lg rounded-sm h-9 text-xs" v-model="info.time_end" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-b-4">
              <div class="border-b">
                <div class="w-fit flex items-center mx-auto gap-2 px-3  uppercase font-bold lg:text-sm  text-xs text-center cursor-pointer  py-2 text-green-800">
                  <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/Google_Drive.png" class="h-5 w-5" /> Supporting Documents
                </div>
              </div>
              <div class="mt-3 lg:pb-5 pb-6">
                <div class="lg:flex lg:w-full lg:px-5 w-11/12 mx-auto gap-3">
                  <div class="w-full lg:mb-4 mb-3 mx-auto">
                    <label class="text-xs text-gray-900 lg:block pb-1">
                      <i class="fa fa-link mx-2 text-green-900"></i>Approved Activities </label>
                    <div>
                      <!-- <input class="w-full border-b-2 lg:px-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm pb-1 text-xs" id="approved_activities_link" v-on:change="onFileChange" type="file"> -->
                      <input type="url" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Google Drive Link" v-model="info.approved_activities_link" />
                    </div>
                  </div>
                  <div class="w-full lg:mb-4 mb-3 mx-auto">
                    <label class="text-xs text-gray-900 lg:block pb-1">
                      <i class="fa fa-link mx-2 text-green-900"></i>Approved Booking Document (From GSO) </label>
                    <div>
                      <!-- <input class="w-full border-b-2 lg:px-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm pb-1 text-xs" id="approved_booking_document_gso_link" v-on:change="onFileChange" type="file"> -->
                      <input type="url" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Google Drive Link" v-model="info.approved_booking_document_gso_link" />
                    </div>
                  </div>
                </div>
                <div class="flex lg:gap-5 gap-3 lg:w-6/12 mx-auto lg:mt-2 mt-7 w-11/12">
                  <div @click="toggleListsFunc(true, false)" class="lg:w-6/12 w-full text-center cursor-pointer bg-green-600 hover:bg-white border border-green-600 hover:text-green-600 text-white rounded-lg uppercase lg:px-4 px-2 py-2 font-bold lg:text-xs text-[10px] block">
                    <i class="fa fa-users" aria-hidden="true"></i> Bulk Lists
                  </div>
                  <div @click="toggleListsFunc(false, true)" class="lg:w-6/12 w-full text-center cursor-pointer bg-green-600 hover:bg-white text-white hover:text-green-600 border border-green-600 rounded-lg uppercase lg:px-4 px-2 py-2 font-bold lg:text-xs text-[10px] block">
                    <i class="fa fa-user" aria-hidden="true"></i> Individual Input
                  </div>
                </div>
                <div v-if="bulkListsBtn" class="lg:w-6/12 w-11/12 mx-auto mt-3">
                  <label class="text-xs text-gray-900 lg:block pb-1">
                    <i class="fa fa-link mx-2 text-green-900"></i>Lists of Names By Bulk </label>
                  <div>
                    <!-- <input class="w-full border-b-2 lg:px-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm pb-1 text-xs" id="lists_names_link" 
                    v-on:change="onFileChange" type="file"> -->
                    <input type="url" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" placeholder="Google Drive Link" v-model="info.lists_names_link" />
                  </div>
                </div>
              </div>
              <div v-if="individualListsBtn" class="lg:pb-5 pb-3">
                <h1 class="text-center uppercase font-bold lg:mb-5 mb-4 text-xs border-y py-2">List of Names</h1>
                <div class="gap-10 lg:grid lg:grid-cols-2 lg:px-5">
                  <div class="gap-3 w-full mb-4 shadow-2xl px-3 py-2" v-for="(j,i) in info.few_name_list" :key="i">
                    <div class="flex items-center justify-between lg:mb-5 mb-2">
                      <div class="text-xs font-bold text-white bg-green-800 px-2.5 py-1.5 h-7 w-7 rounded-full">
                        {{ i + 1}}
                      </div>
                      <div @click="removeRow(j)" v-if="info.few_name_list.length > 1" class="cursor-pointer shadow-lg hover:bg-white bg-red-700 hover:text-red-700 text-white font-bold w-fit px-2 py-[3px] rounded-lg text-lg border border-red-700">
                        <i class="fa fa-close"></i>
                      </div>
                    </div>
                    <div class="lg:flex gap-5">
                      <div class="w-full lg:mb-0 mb-3">
                        <label class="text-xs text-gray-900 lg:block pb-1">
                          <i class="fa fa-user mr-2 ml-1 text-green-900"></i>Full Name </label>
                        <div>
                          <div class="flex gap-3">
                            <input type="text" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="j.fullname" placeholder="Full Name" />
                          </div>
                        </div>
                      </div>
                      <div class="w-full">
                        <label class="text-xs text-gray-900 lg:block pb-1">
                          <i class="fa fa-envelope mr-2 ml-1 text-green-900"></i>Email </label>
                        <div>
                          <div class="flex gap-3">
                            <input type="email" class="w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" v-model="j.email" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div @click="addRow" class="cursor-pointer shadow-lg hover:bg-white bg-yellow-500 hover:text-yellow-500 text-white font-bold w-fit mx-auto py-1 px-4 rounded-lg text-sm border border-yellow-500 mb-3">
                  <i class="fa fa-plus mr-2 font-bold"></i> ADD
                </div>
              </div>
            </div>
            <div v-if="pleaseFillUpAllRequiredFields" class="my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"> All fields are required information. Otherwise, type N/A if not applicable. </div>
            <div class="py-5 px-5 mb-5">
              <button class="px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold 
        py-2 w-fit mx-auto block uppercase
        hover:bg-white border-2 border-green-900 hover:text-green-900 text-sm">
                <i class="fa fa-paper-plane mr-2" aria-hidden="true"></i> Submit </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-if="thankYouDisplay" class="">
      <div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl">
        <div class="flex items-center">
          <img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14" />
        </div>
        <div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5">
          <h1 class="font-bold text-3xl">Thanks for submitting! </h1>
          <p class="font-light pt-3 pb-10"> your request has been sent! </p>
          <!-- <p class="font-light italic mb-10">Please Check your Email.</p> -->
          <a href="https://lsu.edu.ph/campus-pass" class="bg-green-800 text-white rounded-3xl py-1.5 px-10 lg:mb-0 mb-5 mx-auto block w-fit">Campus Pass</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scoped></style>