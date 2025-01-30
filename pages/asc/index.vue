<script setup>
  import {
    onMounted,
    ref
  } from "vue";
  import {
    useUserStore
  } from "@/stores/user";
  import _ from "lodash";
  import "@vuepic/vue-datepicker/dist/main.css";
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  let enrolleesList = ref(await $fetch(endpoint.value + "/api/admissions-first-sem/student-profile/list/").catch((error) => error.data))
  let list = ref(enrolleesList.value || null)
  const usherettes_code = ref('')
  const usherettes_codeInputBox = ref(true)
  const codeDoesNotExists = ref(false)
  const cashDetailsBox = ref(false)
  const final_usherettes_code = ref('')
  const verifyCode = () => {
    final_usherettes_code.value = usherettes_code.value
    if (final_usherettes_code.value === 'ASC000' && final_usherettes_code.value.length === 6) {
      cashDetailsBox.value = true
      codeDoesNotExists.value = false
      usherettes_codeInputBox.value = false
    } else {
      usherettes_codeInputBox.value = false
      cashDetailsBox.value = false
      codeDoesNotExists.value = true
    }
  }
  const codeRestart = () => {
    codeDoesNotExists.value = false
    usherettes_codeInputBox.value = true
    final_usherettes_code.value = ''
    usherettes_code.value = ''
    cashDetailsBox.value = false
  }
</script>
<template>
  <div>
    <div class="min-h-screen w-full items-center" v-if="enrolleesList.length === 4236">
    <div v-if="usherettes_codeInputBox" class="mt-3 mb-2 flex items-center lg:shadow-none shadow-lg w-fit mx-auto ">
      <input v-model="usherettes_code" type="password" maxlength="6" class="h-8 rounded-tl-sm rounded-bl-sm w-[110px] border-y-2 border-l-2 px-2 border-green-800" placeholder="Enter Code" />
      <button class="bg-green-800 text-white hover:bg-green-700 border-2 border-green-800 px-2 h-8 lg:shadow-none shadow-lg" @click="verifyCode"> Verify <i class="fa fa-check ml-1"></i>
      </button>
    </div>
    <div v-if="codeDoesNotExists">
      <p class="text-center text-red-800 font-montserrat text-sm mt-5"> Code does not exists! </p>
      <button class="bg-green-800 text-white hover:bg-white hover:text-green-800 border border-green-800 px-2 py-1 mt-3 mx-auto uppercase text-xs rounded-md w-fit block" @click="codeRestart">reset</button>
    </div>
    <div v-if="cashDetailsBox">
      <div class="">
        <div class="bg-green-800">
          <div class="lg:flex items-center mx-auto justify-between py-2">
            <div class="lg:flex items-center text-white gap-1 lg:px-1">
              <div class="lg:p-0 pt-0.5 pb-3 mx-3">
                <img class="rounded-full w-10" src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" />
              </div>
              <div class="flex py-2 items-center lg:border-none border-t-2 border-white justify-center">
                <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
                <h1 class="text-sm pt-1"> LSU Admissions and Scholarships Center </h1>
              </div>
            </div>
            <div class="px-5 font-bold text-white" v-if="enrolleesList"> Total: {{ enrolleesList.length }}</div>
          </div>
        </div>
        <div class="px-3 pt-5">
          <div class="">
            <ul class="flex shadow-lg text-xs">
              <li class="w-1/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">LSU ID</li>
              <li class="w-1/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Last Name</li>
              <li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">First Name</li>
              <li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Middle Name</li>
              <li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Learner Reference Info Number</li>
              <li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">CHED Award Number</li>
              <li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">DSWD Household Number</li>
            </ul>
            <ul class="flex mb-0 border-b" v-for="(b, i) in _.orderBy(list, 'created_at', 'desc')" :key="i">
              <li class="text-left text-xs w-1/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                {{ b.primary_info.student_lsu_id_number || 'N/A'}}
              </li>
              <li class="text-left text-xs w-1/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                {{ b.primary_info.lastname || '' }}
              </li>
              <li class="text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                {{ b.primary_info.firstname || '' }}
              </li>
              <li class="text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                {{ b.primary_info.middlename || '' }}
              </li>
              <li class="text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                {{ b.student_education_information_number.learner_reference_number || '' }}
              </li>
              <li class="text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                {{ b.student_education_information_number.ched_award_number || '' }}
              </li>
              <li class="text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                {{ b.student_education_information_number.dswd_household_number || '' }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </div>
    </div>
    <div v-else class="text-center text-gray-800 text-xs">
      Loading Data...
    </div>
  </div>
</template>
<style scoped></style>