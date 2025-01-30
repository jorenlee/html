<script setup>
import axios from "axios";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);
const newStudent = ref({
  id: "-",
  confirmation_id: "-",
  temporary_id_number: "-",
  // obj
  student_personal_info: {
    title: "-",
    firstname: "-",
    middlename: "-",
    lastname: "-",
    extension_or_suffix_name: "-",
    date_of_birth: "-",
    age: "-",
    birth_order: "-",
    birth_place: "-",
    biological_sex: "-",
    nationality: "-",
    citizenship: "-",
    religion: "-",
    civil_status: "-",
  },
  // obj
  student_contact_info: 
  {
      contact_number: "-",
      contact_email_address: "-",
      living_home_address_category: "-",
      current_address: "-",
      permanent_address: "-",
  },
  student_educational_info: [
    {
      curriculum: "-",
      name_of_previous_school: "-",
      track_or_program: "-",
      highest_honors_received: "-",
      city_or_municipality_and_province: "-",
      year_graduated: "-",
    },
  ],
  // obj
  student_contact_person:
    {
      firstname: "-",
      middlename: "-",
      lastname: "-",
      extension_or_suffix_name: "-",
      relation: "-",
      permament_address: "-",
      current_address: "-",
      contact_number: "-",
    },
  // obj
  father_personal_info: 
    {
      vital_life_status: "-",
      firstname: "-",
      middlename: "-",
      lastname: "-",
      extension_or_suffix_name: "-",
      marital_status: "-",
      date_of_birth: "-",
      citizenship: "-",
    },
  // obj
  father_contact_info: 
    {
      permanent_address: "-",
      current_address: "-",
      contact_number: "-",
      contact_email_address: "-",
    },
  // obj
  father_employment_info: 
    {
      highest_education_completed: "-",
      occupation_or_title: "-",
      source_income: "-",
      gross_monthly_income: "-",
      company_employer_name: "-",
      company_employer_address: "-",
      company_employer_contact_number: "-",
    },
  // obj
  mother_personal_info:   
    {
      vital_life_status: "-",
      firstname: "-",
      middlename: "-",
      lastname: "-",
      extension_or_suffix_name: "-",
      marital_status: "-",
      date_of_birth: "-",
      citizenship: "-",
    },
  // obj
  mother_contact_info:
    {
      permanent_address: "-",
      current_address: "-",
      contact_number: "-",
      contact_email_address: "-",
    },
  // obj
  mother_employment_info: 
    {
      highest_education_completed: "-",
      occupation_or_title: "-",
      source_income: "-",
      gross_monthly_income: "-",
      company_employer_name: "-",
      company_employer_address: "-",
      company_employer_contact_number: "-",
    },
  legal_guardian_relation: "-",
  // obj
  legal_guardian_personal_info:
    {
      firstname: "-",
      middlename: "-",
      lastname: "-",
      extension_or_suffix_name: "-",
      marital_status: "-",
      date_of_birth: "-",
      citizenship: "-",
    },
  // obj
  legal_guardian_contact_info:
    {
      permanent_address: "-",
      current_address: "-",
      contact_number: "-",
      contact_email_address: "-",
    },
  // obj
  legal_guardian_employment_info: 
  {
      highest_education_completed: "-",
      occupation_or_title: "-",
      source_income: "-",
      gross_monthly_income: "-",
      company_employer_name: "-",
      company_employer_address: "-",
      company_employer_contact_number: "-",
  },
  siblings: [
    {
      lastname: "-",
      firstName: "-",
      middlename: "-",
      extension_or_suffix_name: "-",
      date_of_birth: "-",
      age: "-",
      civil_status: "-",
      highest_educational_attainment: "-",
      name_of_school_attended_or_company_employer: "-",
    },
  ],
  // obj
  choice_track_program: 
    {
      first_program: "-",
      second_program: "-",
      third_program: "-",
    },
  // obj
  foreign_student_info:
   {
      status_info_visa_status: "-",
      last_day_of_authorized_stay: "-",
      agentname: "-",
      passport_number: "-",
      place_issued: "-",
      date_issued: "-",
      date_of_expiry: "-",
      ACRICARD_date_issued: "-",
      ACRICARD_date_of_expiry: "-",
      CRTS_date_issued: "-",
      CRTS_date_of_expiry: "-",
      SSP_date_issued: "-",
      SSP_date_of_expiry: "-",
    },
  // obj
  health_check_in_survey_in_present_time: 
    {
      physical_health: "-",
      mental_health: "-",
      mental_health_support: "-",
    },
  // obj
  sao_personnel:
    {
      remarks: "-",
      checked_and_verified_by: "-",
      date_verified: "-",
    },
  has_funded_scholarship_or_grant_in_aid_program: "-",
  how_you_learn_about_lsu: "-",
  reason_for_choosing_lsu: "-",
  // learningReferenceNumberReportCard: '',
  academic_year: "-",
  semester_or_term: "-",
  documents: ["-"],
  created_at: "-",
});



const banner_imageData = ref();
// const imagePreview = ref(
//   "https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"
// );
//image
// const upload_status = ref("");

const uploadedFile = (e) => {
  // imagePreview.value = URL.createObjectURL(banner_imageData.value);
  banner_imageData.value = e.target.files[0];
  // banner_imageData.value = e.target.files[0];
  // console.log(e.target.files)
};

const saveFile = async () => {
  let formData = new FormData();

  formData.append("image", banner_imageData.value);
  // console.log(banner_imageData.value)
  let axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
      },
  };
  axios
    .post("http://127.0.0.1:8001/api/admissions/file/list/files/", formData, axiosConfig)
    // .post("http://127.0.0.1:8000/upload/file/", formData, axiosConfig)
    .then((response) => {
      // console.log(response);
      // upload_status.value = "success";
    })
    .catch(() => {
      // upload_status.value = "error";
    });
};

const submitFunc = async () => {
  await $fetch(endpoint.value + "/api/admissions/create/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: newStudent.value,
  }).then((response) => {
    // console.log("response", response);
    // router.push({ path: "/_" });
  });
};

const submitForm = () => {
  // submitFunc()
  saveFile()
}
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="">
          <div class="pt-10 w-full bg-green-900">
            <h1
              class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto pt-14 pb-5"
            >
              Admissions
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs">
              <li>
                <a href="/" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/enrollment" class="mr-1"> Enrollment </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/admissions" class="mr-1"> Admissions </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/admissions/new" class="mr-1"> New Student </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="font-bold text-center text-xl mt-10">TESTING PROD</div>
      <div class="w-11/12 mx-auto items-center flex lg:py-10 p-5 my-5 shadow-lg">
        <form v-on:submit.prevent="submitForm" class="px-3 flex flex-wrap">
          <!-- class="hidden" -->
          <input type="text" v-model="newStudent.id" class="" />
          <input type="text" v-model="newStudent.confirmationID" />
          <input type="text" v-model="newStudent.temporaryIDNumber" />
          
          
  
          <input type="text" v-model="newStudent.student_personal_info.title" />
          <input type="text" v-model="newStudent.student_personal_info.firstName" />
          <input type="text" v-model="newStudent.student_personal_info.middleName" />
          <input type="text" v-model="newStudent.student_personal_info.lastName" />
          <input type="text" v-model="newStudent.student_personal_info.extensionOrSuffixName" />
          <input type="text" v-model="newStudent.student_personal_info.dateOfBirth" />
          <input type="text" v-model="newStudent.student_personal_info.age" />
          <input type="text" v-model="newStudent.student_personal_info.birthOrder" />
          <input type="text" v-model="newStudent.student_personal_info.birthPlace" />
          <input type="text" v-model="newStudent.student_personal_info.biologicalSex" />
          <input type="text" v-model="newStudent.student_personal_info.nationality" />
          <input type="text" v-model="newStudent.student_personal_info.citizenship" />
          <input type="text" v-model="newStudent.student_personal_info.religion" />
          <input type="text" v-model="newStudent.student_personal_info.civilStatus" />




          <input type="text" v-model="newStudent.student_contact_info.contactNumber" />
          <input type="text" v-model="newStudent.student_contact_info.contactEmailAddress" />
          <input type="text" v-model="newStudent.student_contact_info.livingHomeAddressCategory" />
          <input type="text" v-model="newStudent.student_contact_info.currentAddress" />
          <input type="text" v-model="newStudent.student_contact_info.permanentAddress" />


          <div class="shadow rounded-lg px-2 py-2">
            <div
              class="grid grid-cols-6 lg:shadow lg:p-5 gap-2 mb-3 relative"
              v-for="(ns, i) in newStudent.student_educational_info"
              :key="i"
            >
              <div class="flex items-center">
                <div class="mr-2 lg:hidden block mt-1">
                  Student Educational Information
                </div>
                <div
                  class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2"
                >
                  {{ i + 1 }}
                </div>
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  curriculum
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.curriculum"
                  placeholder="curriculum"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  nameOfPreviousSchool
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.nameOfPreviousSchool"
                  placeholder="nameOfPreviousSchool"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  trackOrProgram
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.trackOrProgram"
                  placeholder="trackOrProgram"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  highestHonorsReceived
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.highestHonorsReceived"
                  placeholder="highestHonorsReceived"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  cityOrMunicipalityAndProvince
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.cityOrMunicipalityAndProvince"
                  placeholder="cityOrMunicipalityAndProvince"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  yearGraduated
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ns.yearGraduated"
                  placeholder="yearGraduated"
                  
                />
              </div>
              <div
                class="flex items-center lg:static absolute top-3 right-0"
                v-if="newStudent.student_educational_info.length > 1"
              >
                <div class="mr-2 lg:hidden block">Remove</div>
                <div
                  class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                  @click="removeRow(b)"
                >
                  <i class="fa fa-close"></i>
                </div>
              </div>
            </div>


          </div>
          <input type="text" v-model="newStudent.student_contact_person.firstName" />
          <input type="text" v-model="newStudent.student_contact_person.middleName" />
          <input type="text" v-model="newStudent.student_contact_person.lastName" />
          <input
            type="text"
            v-model="newStudent.student_contact_person.extensionOrSuffixName"
          />
          <input type="text" v-model="newStudent.student_contact_person.relation" />
          <input type="text" v-model="newStudent.student_contact_person.permamentAddress" />
          <input type="text" v-model="newStudent.student_contact_person.currentAddress" />
          <input type="text" v-model="newStudent.student_contact_person.contactNumber" />

          <input type="text" v-model="newStudent.father_personal_info.vitalLifeStatus" />
          <input type="text" v-model="newStudent.father_personal_info.lastName" />
          <input type="text" v-model="newStudent.father_personal_info.firstName" />
          <input type="text" v-model="newStudent.father_personal_info.middleName" />
          <input
            type="text"
            v-model="newStudent.father_personal_info.extensionOrSuffixName"
          />
          <input type="text" v-model="newStudent.father_personal_info.maritalStatus" />
          <input type="text" v-model="newStudent.father_personal_info.dateOfBirth" />
          <input type="text" v-model="newStudent.father_personal_info.citizenship" />




          <input type="text" v-model="newStudent.father_contact_info.permanentAddress" />
          <input type="text" v-model="newStudent.father_contact_info.currentAddress" />
          <input type="text" v-model="newStudent.father_contact_info.contactNumber" />
          <input type="text" v-model="newStudent.father_contact_info.contactEmailAddress" />




          <input
            type="text"
            v-model="newStudent.father_employment_info.highestEducationCompleted"
          />
          <input
            type="text"
            v-model="newStudent.father_employment_info.occupationOrTitle"
          />
          <input type="text" v-model="newStudent.father_employment_info.sourceIncome" />
          <input
            type="text"
            v-model="newStudent.father_employment_info.grossMonthlyIncome"
          />
          <input
            type="text"
            v-model="newStudent.father_employment_info.companyEmployerName"
          />
          <input
            type="text"
            v-model="newStudent.father_employment_info.companyEmployerAddress"
          />
          <input
            type="text"
            v-model="newStudent.father_employment_info.companyEmployerContactNumber"
          />

          <input type="text" v-model="newStudent.mother_personal_info.vitalLifeStatus" />
          <input type="text" v-model="newStudent.mother_personal_info.lastName" />
          <input type="text" v-model="newStudent.mother_personal_info.firstName" />
          <input type="text" v-model="newStudent.mother_personal_info.middleName" />
          <input
            type="text"
            v-model="newStudent.mother_personal_info.extensionOrSuffixName"
          />
          <input type="text" v-model="newStudent.mother_personal_info.maritalStatus" />
          <input type="text" v-model="newStudent.mother_personal_info.dateOfBirth" />
          <input type="text" v-model="newStudent.mother_personal_info.citizenship" />




          <input type="text" v-model="newStudent.mother_contact_info.permanentAddress" />
          <input type="text" v-model="newStudent.mother_contact_info.currentAddress" />
          <input type="text" v-model="newStudent.mother_contact_info.contactNumber" />
          <input type="text" v-model="newStudent.mother_contact_info.contactEmailAddress" />





          <input
            type="text"
            v-model="newStudent.mother_employment_info.highestEducationCompleted"
          />
          <input
            type="text"
            v-model="newStudent.mother_employment_info.occupationOrTitle"
          />
          <input type="text" v-model="newStudent.mother_employment_info.sourceIncome" />
          <input
            type="text"
            v-model="newStudent.mother_employment_info.grossMonthlyIncome"
          />
          <input
            type="text"
            v-model="newStudent.mother_employment_info.companyEmployerName"
          />
          <input
            type="text"
            v-model="newStudent.mother_employment_info.companyEmployerAddress"
          />
          <input
            type="text"
            v-model="newStudent.mother_employment_info.companyEmployerContactNumber"
          />




          <input type="text" v-model="newStudent.legalGuardianRelation" />

          <input
            type="text"
            v-model="newStudent.legal_guardian_personal_info.vitalLifeStatus"
          />
          <input type="text" v-model="newStudent.legal_guardian_personal_info.lastName" />
          <input type="text" v-model="newStudent.legal_guardian_personal_info.firstName" />
          <input type="text" v-model="newStudent.legal_guardian_personal_info.middleName" />
          <input
            type="text"
            v-model="newStudent.legal_guardian_personal_info.extensionOrSuffixName"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_personal_info.maritalStatus"
          />
          <input type="text" v-model="newStudent.legal_guardian_personal_info.dateOfBirth" />
          <input type="text" v-model="newStudent.legal_guardian_personal_info.citizenship" />

          <input
            type="text"
            v-model="newStudent.legal_guardian_contact_info.permanentAddress"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_contact_info.currentAddress"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_contact_info.contactNumber"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_contact_info.contactEmailAddress"
          />

          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.highestEducationCompleted"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.occupationOrTitle"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.sourceIncome"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.grossMonthlyIncome"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.companyEmployerName"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.companyEmployerAddress"
          />
          <input
            type="text"
            v-model="newStudent.legal_guardian_employment_info.companyEmployerContactNumber"
          />

          <div class="shadow rounded-lg px-2 py-2">
            <div
              class="grid grid-cols-6 lg:shadow lg:p-5 gap-2 mb-3 relative"
              v-for="(ss, i) in newStudent.siblings"
              :key="i"
            >
              <div class="flex items-center">
                <div class="mr-2 lg:hidden block mt-1">Student Siblings</div>
                <div
                  class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2"
                >
                  {{ i + 1 }}
                </div>
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  lastName
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.lastName"
                  placeholder="lastName"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  firstName
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.firstName"
                  placeholder="firstName"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  middleName
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.middleName"
                  placeholder="middleName"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  extensionOrSuffixName
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.extensionOrSuffixName"
                  placeholder="extensionOrSuffixName"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  dateOfBirth
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.dateOfBirth"
                  placeholder="dateOfBirth"
                  
                />
              </div>
              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden"> age </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.age"
                  placeholder="age"
                  
                />
              </div>

              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  civilStatus
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.civilStatus"
                  placeholder="civilStatus"
                  
                />
              </div>

              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  highestEducationalAttainment
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.highestEducationalAttainment"
                  placeholder="highestEducationalAttainment"
                  
                />
              </div>

              <div class="w-full lg:mb-0 mb-2">
                <label class="text-[10px] text-gray-300 lg:block hidden">
                  nameOfSchoolAttendedOrCompanyEmployer
                </label>
                <input
                  class="shadow-md px-2 lg:py-2 py-2 rounded-md w-full border capitalize"
                  v-model="ss.nameOfSchoolAttendedOrCompanyEmployer"
                  placeholder="nameOfSchoolAttendedOrCompanyEmployer"
                  
                />
              </div>

              <div
                class="flex items-center lg:static absolute top-3 right-0"
                v-if="newStudent.siblings.length > 1"
              >
                <div class="mr-2 lg:hidden block">Remove</div>
                <div
                  class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                  @click="removeRow(b)"
                >
                  <i class="fa fa-close"></i>
                </div>
              </div>
            </div>

            <div class="lg:w-10/12 lg:mx-auto">
              <button
                v-if="limitCounter > 1"
                class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                @click="addBooks"
              >
                <i class="fa fa-plus mr-1"></i> Add Book
              </button>
            </div>
          </div>

          <input type="text" v-model="newStudent.choice_track_program.firstProgram" />
          <input type="text" v-model="newStudent.choice_track_program.secondProgram" />
          <input type="text" v-model="newStudent.choice_track_program.thirdProgram" />

          <input
            type="text"
            v-model="newStudent.foreign_student_info.statusInfoVisaStatus"
          />
          <input
            type="text"
            v-model="newStudent.foreign_student_info.lastDayOfAuthorizedStay"
          />
          <input type="text" v-model="newStudent.foreign_student_info.agentName" />
          <input type="text" v-model="newStudent.foreign_student_info.passportNumber" />
          <input type="text" v-model="newStudent.foreign_student_info.placeIssued" />
          <input type="text" v-model="newStudent.foreign_student_info.dateIssued" />
          <input type="text" v-model="newStudent.foreign_student_info.dateOfExpiry" />
          <input type="text" v-model="newStudent.foreign_student_info.ACRICARDDateIssued" />
          <input
            type="text"
            v-model="newStudent.foreign_student_info.ACRICARDDateOfExpiry"
          />
          <input type="text" v-model="newStudent.foreign_student_info.CRTSDateIssued" />
          <input type="text" v-model="newStudent.foreign_student_info.CRTSDateOfExpiry" />
          <input type="text" v-model="newStudent.foreign_student_info.SSPDateIssued" />
          <input type="text" v-model="newStudent.foreign_student_info.SSPDateOfExpiry" />

          <input
            type="text"
            v-model="newStudent.health_check_in_survey_in_present_time.physicalHealth"
          />
          <input
            type="text"
            v-model="newStudent.health_check_in_survey_in_present_time.mentalHealth"
          />
          <input
            type="text"
            v-model="newStudent.health_check_in_survey_in_present_time.mentalHealthSupport"
          />

          <input type="text" v-model="newStudent.sao_personnel.remarks" />
          <input type="text" v-model="newStudent.sao_personnel.checkedAndVerifiedBy" />
          <input type="text" v-model="newStudent.sao_personnel.dateVerified" />

          <input
            type="text"
            v-model="newStudent.hasFundedScholarshipOrGrantInAIDProgram"
          />
          <input type="text" v-model="newStudent.howYouLearnAboutLSU" />
          <input type="text" v-model="newStudent.reasonForChoosingLSU" />

          <input type="text" v-model="newStudent.academicYear" />
          <input type="text" v-model="newStudent.semesterOrTerm" />

          <div class="w-full lg:mb-0 mb-2">
            <label class="text-[10px] text-gray-300 lg:block hidden"> documents </label>
            <div class="mt-3">
              <div class="flex w-full mb-3">
                <div class="flex h-fit">
                  <input
                    type="file"
                    @change="uploadedFile"
                    accept="image/png, image/jpeg"
                    multiple
                  />
                </div>
              </div>
              <div class="w-fit lg:mx-0 mx-auto">
                <div class="w-56 shadow">
                  <img class="lg:w-full h-56 object-contain" :src="imagePreview" />
                </div>
              </div>
            </div>
          </div>
          <input type="text" v-model="newStudent.createdAt" />
          <div class="w-full">
            <button class="w-fit mx-auto block">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-green-10 {
  background: #003613;
}
.login-with-google-btn {
  border: none;
  background-image: url("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/icons8-google-48.png");
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 8% 51%;
}
</style>
