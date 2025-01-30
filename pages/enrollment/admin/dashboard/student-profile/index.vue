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


  // console.log(enrolleesList.value)

  const usherettes_code = ref('')
  const usherettes_codeInputBox = ref(true)
  const codeDoesNotExists = ref(false)
  const cashDetailsBox = ref(false)
  const final_usherettes_code = ref('')

  const verifyCode = () => {
    final_usherettes_code.value = usherettes_code.value
    if (
      final_usherettes_code.value === 'ASC000' && 
      final_usherettes_code.value.length === 6) {
      cashDetailsBox.value = true
      codeDoesNotExists.value = false
      usherettes_codeInputBox.value = false
    } else {
      final_usherettes_code.value = ''
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

  const toPrint = () => {
    window.print()
  }

</script>
<template>
  <div class="min-h-screen  items-center">
      <div v-if="usherettes_codeInputBox" class="mt-3 mb-2 flex items-center lg:shadow-none shadow-lg w-fit mx-auto ">
              <input v-model="usherettes_code" type="password" maxlength="6" class="h-8 rounded-tl-sm rounded-bl-sm w-[110px] border-y-2 border-l-2 px-2 border-green-800" placeholder="Enter Code" />
              <button class="bg-green-800 text-white hover:bg-green-700 border-2 border-green-800 px-2 h-8 lg:shadow-none shadow-lg" @click="verifyCode"> Verify <i class="fa fa-check ml-1"></i>
              </button>
            </div>
            <div v-if="codeDoesNotExists">
              <p class="text-center text-red-800 font-montserrat text-sm mt-5"> Code does not exists! </p>
              <button class="bg-green-800 text-white hover:bg-white hover:text-green-800 border border-green-800 px-2 py-1 mt-3 mx-auto uppercase text-xs rounded-md w-fit block" @click="codeRestart">reset</button>
            </div>

            <!-- <div :class="cashDetailsBox ? '':'hidden'"> -->
            <div>
              <div class="">

<div class="bg-green-800">
  <div class="lg:flex items-center mx-auto justify-between py-2">
     <div class="lg:flex items-center text-white gap-1 lg:px-1">
      <div class="lg:p-0 pt-0.5 pb-3 mx-3">
        <img class="rounded-full w-10" src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" />
      </div>
      <div class="flex py-2 items-center lg:border-none border-t-2 border-white justify-center">
        <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
        <h1 class="text-sm pt-1">
         LSU Admissions and Scholarships Center
        </h1>
      </div>
    </div>


  <div class="px-5 font-bold text-white" v-if="enrolleesList"> Total: {{ enrolleesList.length }}</div>

      <!-- <button @click="toPrint" class="flex items-center hover:font-bold py-2 lg:static 
  absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 
  hover:text-green-900 hover:bg-white text-white rounded-xl">
      <i class="fa fa-print text-xl"></i>
      <h1 class="text-xs p-1.5">Print</h1>
    </button> -->
    
  </div>
</div>


<div class="px-3 pt-5">
  <!-- <div class="px-1 border-y-4 
  border-green-900 py-1 tracking-widest font-bold text-center uppercase"> Student Profile List </div> -->
  <div class="overflow-x-scroll">
  
    
            <!-- <li class="w-fit text-center px-5 capitalize">Action</li> -->
                <!-- <li class="lg:w-14">No.</li> -->
                <!-- <li class="lg:w-2/12">Tracking ID</li> -->

              <ul class="flex shadow-lg text-xs">
          
                <li class="w-[220px] shrink-0 capitalize bg-green-800 text-white px-1.5 py-2">LSU ID</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Title</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Last Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">First Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Middle Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Suffix Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Birth Sex</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Birth Date</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Birth Order</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Birth Place</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Religion</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Citizenship</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Civil Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Nationality</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Ethnicity</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2">College</li>
                <li class="w-[500px] shrink-0 text-left capitalize bg-green-800 text-white py-2">Program</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Primary Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Alternate Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Email Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">LSU Email</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3 text-[8px]">Part of Tribal and indigenous_community</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Student Permanent Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Student Present Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Vital Life Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Last Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father First Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Middle Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Birth Date</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Civil Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Permanent Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Present Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Contact Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Contact Email</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Education Completed</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Occupation</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Employment Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Gross Monthly Income</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Father Employer or Company</li>

                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Vital Life Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Last Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother First Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Middle Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Birth Date</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Civil Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Permanent Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Present Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Contact Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Contact Email</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Education Completed</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Occupation</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Employment Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Gross Monthly Income</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Mother Employer or Company</li>


                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian (Relation)</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Last Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian First Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Middle Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Birth Date</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Civil Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Permanent Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Present Address</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Contact Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Contact Email</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Education Completed</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Occupation</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Employment Status</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Gross Monthly Income</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Guardian Employer or Company</li>


                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Title</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Last Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact First Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Middle Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Suffix Name</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Relation</li>
       
        
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Address</li>
                
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Numbers</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Emergency Contact Email</li>


                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Learner Reference Info Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">CHED Award Number</li>
                <li class="w-[220px] shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">DSWD Household Number</li>
  




                

                
                
              </ul>
    

      <!-- <li class="flex justify-center px-2 text-xs lg:w-fit lg:static absolute top-2 right-2">
                  <div class="w-auto px-1 flex gap-5">
                    <button @click="displaySingleEntry(b.id)" class="cursor-pointer hover:bg-white hover:text-blue-600 border-blue-500 border-2
                     bg-blue-500 text-white uppercase shrink-0 px-2 py-1 
                     rounded-lg tracking-tighter text-[10px]"> Details </button>
                  </div>
                </li> -->
                <!-- <li class="px-2 text-xs lg:w-14">N{{ b.id }}</li> -->
                <!-- <li class="px-2 text-xs w-[300px]">{{ b.primary_info.tracking_id  }}</li> -->
          <!-- {{ b }} -->

                <!-- <li class="px-2 text-xs lg:w-14">N{{ b.id }}</li> -->
             

              <ul class="flex  mb-0 border-b " 
              v-for="(b, i) in _.orderBy(enrolleesList, 'created_at', 'desc')" :key="i">
    
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.student_lsu_id_number || 'N/A'}}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.title || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.lastname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.firstname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.middlename || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.extension_or_suffix_name || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.birth_sex || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.birth_date || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.birth_order || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1 whitespace-nowrap">
                  {{ b.primary_info.birth_place || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.religion || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.citizenship || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.civil_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.nationality || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1">
                  {{ b.primary_info.ethnicity || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1">
                  {{ b.primary_info.college || '' }}
                </li>
                <li class="text-xs w-[500px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 text-left">
                  {{ b.primary_info.program }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.primary_info.contact_primary_number || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.primary_info.contact_alternate_number || '' }}
                </li>
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.primary_info.contact_personal_email_address || '' }}
                </li>
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.primary_info.contact_lsu_email_address || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  <span class="pr-5">{{ b.student_tribal_or_indigenous_community.option || '' }}</span> |  {{ b.student_tribal_or_indigenous_community.name || '' }}
                </li>

                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_contact_info.permanent_living_home_address_category.street_or_purok || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.barangay_or_village || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.city_or_municipality || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.zipcode || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.province_or_state || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.region || '' }}
                  {{ b.student_contact_info.permanent_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_contact_info.current_or_present_living_home_address_category.street_or_purok || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.barangay_or_village || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.city_or_municipality || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.zipcode || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.province_or_state || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.region || '' }}
                  {{ b.student_contact_info.current_or_present_living_home_address_category.country || '' }}



  
                </li>



                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.vital_life_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.lastname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.firstname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.middlename || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.birth_date || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_personal_info.civil_status || '' }}
                </li>
                
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_contact_info.permanent_living_home_address_category.street_or_purok || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.barangay_or_village || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.city_or_municipality || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.zipcode || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.province_or_state || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.region || '' }}
                  {{ b.father_contact_info.permanent_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_contact_info.current_or_present_living_home_address_category.street_or_purok || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.barangay_or_village || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.city_or_municipality || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.zipcode || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.province_or_state || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.region || '' }}
                  {{ b.father_contact_info.current_or_present_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_contact_info.contact.number || '' }}
                </li>
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_contact_info.contact.email_address || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_employment_info.highest_education_completed || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_employment_info.occupation || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_employment_info.employment_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_employment_info.gross_monthly_income || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.father_employment_info.employer_or_company || '' }}
                </li>








                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.vital_life_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.lastname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.firstname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.middlename || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.birth_date || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_personal_info.civil_status || '' }}
                </li>
                
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_contact_info.permanent_living_home_address_category.street_or_purok || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.barangay_or_village || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.city_or_municipality || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.zipcode || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.province_or_state || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.region || '' }}
                  {{ b.mother_contact_info.permanent_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.street_or_purok || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.barangay_or_village || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.city_or_municipality || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.zipcode || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.province_or_state || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.region || '' }}
                  {{ b.mother_contact_info.current_or_present_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_contact_info.contact.number || '' }}
                </li>
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_contact_info.contact.email_address || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_employment_info.highest_education_completed || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_employment_info.occupation || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_employment_info.employment_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_employment_info.gross_monthly_income || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.mother_employment_info.employer_or_company || '' }}
                </li>











                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.relation_to_student || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.lastname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.firstname || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.middlename || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.birth_date || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_personal_info.civil_status || '' }}
                </li>
                
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.street_or_purok || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.barangay_or_village || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.city_or_municipality || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.zipcode || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.province_or_state || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.region || '' }}
                  {{ b.legal_guardian_contact_info.permanent_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.street_or_purok || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.barangay_or_village || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.city_or_municipality || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.zipcode || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.province_or_state || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.region || '' }}
                  {{ b.legal_guardian_contact_info.current_or_present_living_home_address_category.country || '' }}



  
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_contact_info.contact.number || '' }}
                </li>
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_contact_info.contact.email_address || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_employment_info.highest_education_completed || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_employment_info.occupation || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_employment_info.employment_status || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_employment_info.gross_monthly_income || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.legal_guardian_employment_info.employer_or_company || '' }}
                </li>


                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.title || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.lastname || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.firstname || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.middlename || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.extension_or_suffix_name || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.personal_info.relation_to_student || '' }}
                </li>


                <li class="text-xs w-[220px] capitalize shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.address.street_or_purok || '' }}
                  {{ b.student_emergency_contact_information.address.barangay_or_village || '' }}
                  {{ b.student_emergency_contact_information.address.city_or_municipality || '' }}
                  {{ b.student_emergency_contact_information.address.zipcode || '' }}
                  {{ b.student_emergency_contact_information.address.province_or_state || '' }}
                  {{ b.student_emergency_contact_information.address.region || '' }}
                  {{ b.student_emergency_contact_information.address.country || '' }}
                </li>

                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.contact.primary_number || '' }} |  {{ b.student_emergency_contact_information.contact.alternate_number || '' }}
                </li>
          
                <li class="text-xs w-[220px] lowercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_emergency_contact_information.contact.email_address || '' }}
                </li>




                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_education_information_number.learner_reference_number || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_education_information_number.ched_award_number || '' }}
                </li>
                <li class="text-xs w-[220px] uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3">
                  {{ b.student_education_information_number.dswd_household_number || '' }}
                </li>






              </ul>
          
        

  </div>
</div>

</div>
<DashboardFooter />

            </div>


  </div>
</template>
<style scoped></style>