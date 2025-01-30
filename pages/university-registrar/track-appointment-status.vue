<script setup>
import _ from "lodash";

import moment from "moment";

let search = ref("");
let filteredTbltrackorder = ref();
let fldtrackid = ref();
let fldorderid = ref();
let flddocid = ref();
let fldtransname = ref();
let proceed = ref(false);
let loading = ref(false);
let noResults = ref(false);
let pleaseInputText = ref(false);
let btnClicked = ref(false);
// v-if="pending"
// const { pending, data: posts } = await useLazyFetch('/api/posts')

const tblorders = await $fetch(
  "https://api-registrar.lsu.edu.ph/api/appointments/list/tblorders/"
).catch((error) => error.data);

const tbltrackorder = await $fetch(
  "https://api-registrar.lsu.edu.ph/api/appointments/list/tbltrackorder/"
).catch((error) => error.data);

const tbltransactions = await $fetch(
  "https://api-registrar.lsu.edu.ph/api/appointments/list/tbltransactions/"
).catch((error) => error.data);

// console.log(tblorders);
// console.log("tbltrackorder", tbltrackorder);
// console.log(tbltransactions);

const filterSearch = () => {
  btnClicked.value = true;
  proceed.value = false;
  fldtrackid.value = "";
  fldorderid.value = "";
  fldtransname.value = "";
  noResults.value = false;

  if (search.value !== "") {
    loading.value = true;
    setTimeout(() => {
      tblorders.filter(function (params) {
        loading.value = false;

        if (params.fldtrackid === search.value) {
          fldtrackid.value = params.fldtrackid;
          fldorderid.value = params.fldorderid;
          noResults.value = false;
          search.value = "";
          proceed.value = true;
          btnClicked.value = false;
        } else {
          noResults.value = true;
        }
      });

      filteredTbltrackorder.value = tbltrackorder.filter(function (params) {
        return params.fldorderid === fldorderid.value;
      });

      flddocid.value = filteredTbltrackorder.value[0].flddocid;

      tbltransactions.filter(function (params) {
        if (params.fldtransid === flddocid.value) {
          fldtransname.value = params.fldtransname;
        }
      });

      // filteredTbltransactions.value = tbltransactions.filter(function (item) {
      //   return item.fldorderid === search.value
      // });
    }, 3000);
  }
};
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
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
          <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
            <h1
              class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"
            >
              Track Appointment Status
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
                <a href="/" class="mr-1">Track Appointment Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-5 w-11/12 mx-auto pb-7 bg-white mb-5 shadow-md">
        <form
          v-on:submit.prevent="filterSearch"
          class="mx-auto w-fit pt-10 pb-5 lg:flex items-center"
        >
          <!-- <label class="lasalle-green-text mr-2 whitespace-nowrap"> Tracking Code:</label> -->
          <input
            v-model="search"
            class="w-[200px] shadow-md px-2 py-1 rounded-md border-y border-x-2 border-green-800"
            placeholder="Tracking Code"
            name="search"
            required
          />
          <!-- maxlength="16" -->
          <button
            type="submit"
            class="bg-green-800 mx-2 text-white px-4 py-1 rounded-md uppercase"
          >
            Proceed
          </button>
        </form>

        <div v-if="proceed" class="-ml-[100px]">
          <div>
            <div class="text-center font-bold text-green-900">
              Appointment Status : <span class="">{{ fldtrackid }}</span>
            </div>

            <div class="">
              <div class="text-center">
                <!-- Tracking Code: <span class="font-bold">{{ fldtrackid }}</span><br /> -->
                <!-- {{ fldorderid }}<br /> -->
                <span class="font-bold">{{ fldtransname }}</span>
              </div>

              <div class="mx-auto w-fit pl-[250px]">
                <div class="border-b">
                  <div :key="i" v-for="(j, i) in filteredTbltrackorder" class="">
                    <!-- {{j.fldorderid}}  -->
                    <!-- {{j.flddocid}} -->
                    <div>
                      <i class="fa fa-circle -ml-2 mr-3" aria-hidden="true"></i>
                      <span class="font-bold">{{ j.flddescription }}</span>

                      <div class="border-l pl-5 -mt-1 pb-5">
                        <span class="text-sm text-gray-500">
                          {{
                            moment(j.flddatetime).format("dddd, MMMM Do YYYY hh:mm A")
                          }}</span
                        >
                        <!-- {{j.flddocid}} -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="
            btnClicked && fldtrackid !== search && search.length > 0 && loading !== true
          "
          class="text-center"
        >
          No Results Found
        </div>
        <div class="mx-auto w-fit" v-if="loading">
          <div
            class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-green-600"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>