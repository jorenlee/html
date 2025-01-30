<script setup>
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);
import { Dropzone } from "dropzone";
const dropRef = ref(null);


const dropzoneData = ref();

const customPreview = `
<div class="dz-preview dz-file-preview">
  <div class="dz-details mx-3">
    <img data-dz-thumbnail class="mx-auto"/>
    <div class="dz-size" data-dz-size></div>
  </div>
  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
  <div class="dz-error-message"><span data-dz-errormessage></span></div>
  <div data-dz-remove>remove</div>
</div>
`;


const previewFilesBtn = () => {
  for (let i = 0; i < dropzoneData.value.files.length; i++) {
    previewFilesData.value.push(dropzoneData.value.files[i]);
  }
  // console.log(dropzoneData.value.files);
};
const removedfile = (file) => {
  file.previewElement.remove();
}
const dropzoneDataFilesBtn = () => {
  // console.log(dropzoneData.value.files[0].name);
  // console.log(dropzoneData.value);
  dropzoneData.value.processQueue();
  // previewFilesBtn();
};

onMounted(() => {
  if (dropRef.value !== null) {
    dropzoneData.value = new Dropzone(dropRef.value, {
      previewTemplate: customPreview,
      url: "http://127.0.0.1:8000/upload/file/",
      method: "POST",
      headers: {
        // remove Cache-Control and X-Requested-With
        // to be sent along with the request
        "Cache-Control": null,
        "X-Requested-With": null,
      },
      parallelUploads: 100,
      maxFiles: 100,
      acceptedFiles: ".jpg, .png,.jpeg,.webp,.pdf,.doc,.docx,.mp4", // accepted files .zip
      previewsContainer: dropRef.value.parentElement.querySelector(".preview-container"),
      autoProcessQueue: false,
    });

    if (dropRef.value.querySelector(".dz-default")) {
      dropRef.value.querySelector(".dz-default").innerHTML = `
        <div style="display: flex; justify-content: center; color: green;">
          <svg width="10em" height="10em" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none;">
            <path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z"/>
          </svg>
        </div>
        <p style="text-align: center; margin: 0; color: green;"><strong>Click the Button or Drop Files Here</strong></p>
        <p style="text-align: center; margin-top: 0; "><small style="color: #999;">Your files will be added automatically</small></p>
        
      `;
    }
  }
});

const newStudent = ref({
  id: "",
  confirmation_id: "",
  temporary_id_number: "",
  student_personal_info: {
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    extension_or_suffix_name: "",
    date_of_birth: "",
    age: "",
    birth_order: "",
    birth_place: "",
    biological_sex: "",
    nationality: "",
    citizenship: "",
    religion: "",
    civil_status: "",
  },
  student_contact_info: {
    contact_number: "",
    contact_email_address: "",
    living_home_address_category: "",
    current_address: "",
    permanent_address: "",
  },
  student_educational_info: [
    {
      curriculum: "",
      name_of_previous_school: "",
      track_or_program: "",
      highest_honors_received: "",
      city_or_municipality_and_province: "",
      year_graduated: "",
    },
  ],
  student_contact_person: {
    firstname: "",
    middlename: "",
    lastname: "",
    extension_or_suffix_name: "",
    relation: "",
    permament_address: "",
    current_address: "",
    contact_number: "",
  },
  father_personal_info: {
    vital_life_status: "",
    firstname: "",
    middlename: "",
    lastname: "",
    extension_or_suffix_name: "",
    marital_status: "",
    date_of_birth: "",
    citizenship: "",
  },
  father_contact_info: {
    permanent_address: "",
    current_address: "",
    contact_number: "",
    contact_email_address: "",
  },
  father_employment_info: {
    highest_education_completed: "",
    occupation_or_title: "",
    source_income: "",
    gross_monthly_income: "",
    company_employer_name: "",
    company_employer_address: "",
    company_employer_contact_number: "",
  },
  mother_personal_info: {
    vital_life_status: "",
    firstname: "",
    middlename: "",
    lastname: "",
    extension_or_suffix_name: "",
    marital_status: "",
    date_of_birth: "",
    citizenship: "",
  },
  mother_contact_info: {
    permanent_address: "",
    current_address: "",
    contact_number: "",
    contact_email_address: "",
  },
  mother_employment_info: {
    highest_education_completed: "",
    occupation_or_title: "",
    source_income: "",
    gross_monthly_income: "",
    company_employer_name: "",
    company_employer_address: "",
    company_employer_contact_number: "",
  },
  legal_guardian_relation: "",
  legal_guardian_personal_info: {
    firstname: "",
    middlename: "",
    lastname: "",
    extension_or_suffix_name: "",
    marital_status: "",
    date_of_birth: "",
    citizenship: "",
  },
  legal_guardian_contact_info: {
    permanent_address: "",
    current_address: "",
    contact_number: "",
    contact_email_address: "",
  },
  legal_guardian_employment_info: {
    highest_education_completed: "",
    occupation_or_title: "",
    source_income: "",
    gross_monthly_income: "",
    company_employer_name: "",
    company_employer_address: "",
    company_employer_contact_number: "",
  },
  siblings: [
    {
      lastname: "",
      firstName: "",
      middlename: "",
      extension_or_suffix_name: "",
      date_of_birth: "",
      age: "",
      civil_status: "",
      highest_educational_attainment: "",
      name_of_school_attended_or_company_employer: "",
    },
  ],
  choice_track_program: {
    first_program: "",
    second_program: "",
    third_program: "",
  },
  foreign_student_info: {
    status_info_visa_status: "",
    last_day_of_authorized_stay: "",
    agentname: "",
    passport_number: "",
    place_issued: "",
    date_issued: "",
    date_of_expiry: "",
    ACRICARD_date_issued: "",
    ACRICARD_date_of_expiry: "",
    CRTS_date_issued: "",
    CRTS_date_of_expiry: "",
    SSP_date_issued: "",
    SSP_date_of_expiry: "",
  },
  health_check_in_survey_in_present_time: {
    physical_health: "",
    mental_health: "",
    mental_health_support: "",
  },
  sao_personnel: {
    remarks: "",
    checked_and_verified_by: "",
    date_verified: "",
  },
  has_funded_scholarship_or_grant_in_aid_program: "",
  how_you_learn_about_lsu: "",
  reason_for_choosing_lsu: "",
  academic_year: "",
  semester_or_term: "",
  documents: ["-"],
  created_at: "",
});


const toggle = ref({
  studentInfo: true,
  familyInfo: false,
  programCourseDetailsAndDocuments: false,
  survey: false
})


const toggleInfo = (a, b, c, d) => {
  toggle.value = {
    studentInfo: a,
    familyInfo: b,
    programCourseDetailsAndDocuments: c,
    survey: d
  }
}


const banner_imageData = ref();
const imagePreview = ref("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg");
const admissionsMediaPathUrl = ref('https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/');
const imageFile = ref('45019851_2293865323989255_3616147190881189888_n.jpg');

const uploadedFile = (e) => {
  banner_imageData.value = e.target.files[0];
  imagePreview.value = URL.createObjectURL(banner_imageData.value);
  // console.log(banner_imageData.value);
  // console.log(e.target.files[0].name);
};

const saveFile = async () => {
  let formData = new FormData();
  formData.append("image", banner_imageData.value);
  // console.log(banner_imageData.value);
  let axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data"
    },
  };
  axios
    .post(endpoint.value + "/api/admissions/file/list/files/", formData, axiosConfig)
    .then((response) => {
      // console.log(response);
    })
}

const submitFunc = async () => {
  await $fetch(endpoint.value + "/api/admissions/create/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: newStudent.value,
    }
  ).then((response) => {
    // console.log(response);
  });
};

const submitForm = () => {
  submitFunc()
  saveFile();
};
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="">
          <div class="pt-10 w-full bg-green-900">
            <h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto pt-14 pb-5">
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
                <a href="/admissions/new" class="mr-1"> New Student or Transferee </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="font-bold text-center text-xl pt-10 text-green-900 uppercase">Admissions</div>
      <div class="w-11/12 mx-auto items-center flex pt-5 pb-10">
        <div class="w-fit mx-auto mt-5">
          <ul class="flex justify-between">
            <li @click="toggleInfo(
              true, false, false, false)">
              <span class="-ml-5 text-white  bg-green-900 rounded-lg px-3 py-2 h-10 w-10 text-center">
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
              <span class="bg-green-900 h-0.5 w-52 block -mt-2.5"></span>
              <p class="text-left text-xs -ml-5 mt-5  text-green-800 whitespace-nowrap">Student Information</p>
            </li>
            <li @click="toggleInfo(
              false, true, false, false)">
              <span class="-ml-5 text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                <i class="fa fa-users" aria-hidden="true"></i>
              </span>
              <span class="bg-green-900 h-0.5 w-52 block -mt-2.5"></span>
              <p class="text-left text-xs -ml-5 mt-5  text-green-800 whitespace-nowrap">Family Information</p>
            </li>
            <li @click="toggleInfo(
              false, false, true, false)">
              <span class="-ml-5 text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                <i class="fa fa-file-text" aria-hidden="true"></i>

              </span>
              <span class="bg-green-900 h-0.5 w-52 block -mt-2.5"></span>
              <p class="text-left text-xs -ml-14 mt-5  text-green-800 whitespace-nowrap">Chosen Program & Survey
              </p>
            </li>
            <li @click="toggleInfo(
              false, false, false, true)">
              <span class="-ml-5 text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                <i class='fa fa-poll-h'></i>
              </span>
              <span class="bg-green-900 h-0.5 w-52 block -mt-2.5"></span>
              <p class="text-left text-xs -ml-5 mt-5  text-green-800 whitespace-nowrap">Upload Documents</p>
            </li>
            <li>
              <span class="-ml-5 text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">

                <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </span>
              <p class="text-left text-xs -ml-5 mt-3  text-green-800 whitespace-nowrap">Submit</p>
            </li>
          </ul>
          <div class="">
            <form>
              <div class="mx-auto border-t-2 border-green-700  -ml-5 mt-5 shadow-lg rounded-lg"
                v-show="toggle.studentInfo">
                <div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Personal Details</p>
                    <div class="">
                      <div>
                        <div class="flex gap-3">
                          <div>
                            <label class="text-xs text-gray-700">Title</label>
                            <div>
                              <input type="text" class="border border-green-800 rounded-md h-9 w-20"
                                v-model="newStudent.student_personal_info.title" placeholder="title" />
                            </div>
                          </div>
                          <div>
                            <label class="text-xs text-gray-700">Suffix Name</label>
                            <div class="flex">
                              <input type="text" class="border border-green-800 rounded-md h-9 w-20"
                                v-model="newStudent.student_personal_info.extension_or_suffix_name" />
                            </div>
                          </div>

                          <div>
                            <label class="text-xs text-gray-700">Biological Sex</label>
                            <div class="flex">
                              <input type="text" class="border border-green-800 rounded-md h-9 w-28"
                                v-model="newStudent.student_personal_info.biological_sex" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Full Name</label>
                          <div class="flex gap-3">
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.firstname" />
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.middlename" />
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.lastname" />
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-3">
                        <div>
                          <label class="text-xs text-gray-700">Date of Birth</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.date_of_birth" />
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Age</label>
                          <div>
                            <input type="text" class="w-20 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.age" />
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Birth Order</label>
                          <div>
                            <input type="text" class="w-20 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.birth_order" />
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Birth Place</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.birth_place" />
                          </div>
                        </div>



                      </div>
                      <div class="flex gap-3">
                        <div>
                          <label class="text-xs text-gray-700">Nationality</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.nationality" />
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Citizenship</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.citizenship" />
                          </div>
                        </div>

                        <div>
                          <label class="text-xs text-gray-700">Civil Status</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_personal_info.civil_status" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label class="text-xs text-gray-700">Religion</label>
                        <div>
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.student_personal_info.religion" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Contact Details</p>
                    <div class="">
                      <div class="flex gap-3">

                        <div class="">
                          <label class="text-xs text-gray-700">Contact Number</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_contact_info.contact_number" />
                          </div>
                        </div>
                        <div>
                          <label class="text-xs text-gray-700">Email Address</label>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.student_contact_info.contact_email_address" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                          v-model="newStudent.student_contact_info.living_home_address_category" />

                        <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                          v-model="newStudent.student_contact_info.current_address" />

                        <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                          v-model="newStudent.student_contact_info.permanent_address" />
                      </div>
                    </div>
                  </div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Educational Details</p>
                  </div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Foreign Student Details</p>
                    <div class="grid grid-cols-3">
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.status_info_visa_status" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.last_day_of_authorized_stay" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.agentname" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.passport_number" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.place_issued" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.date_issued" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.date_of_expiry" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.ACRICARD_date_issued" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.ACRICARD_date_of_expiry" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.CRTS_date_issued" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.CRTS_date_of_expiry" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.SSP_date_issued" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.foreign_student_info.SSP_date_of_expiry" />
                    </div>
                  </div>
                  <div>
                    <div class="w-fit mx-auto py-5 flex ">
                      <!-- <div
                        class="py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                        <i class="fa fa-angle-double-left"></i> Prev</div> -->
                      <div
                        class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                        @click="toggleInfo(
                          false, true, false, false)">Next <i class="fa fa-angle-double-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mx-auto border-t-2 border-green-700  -ml-5 mt-5 shadow-lg rounded-lg"
                v-show="toggle.familyInfo">
                <div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Contact Person</p>
                    <div class="grid grid-cols-3">
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.firstname" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.middlename" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.lastname" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.extension_or_suffix_name" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.relation" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.permament_address" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.current_address" />
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.student_contact_person.contact_number" />
                    </div>
                  </div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Father Information</p>
                    <div>
                      <div class="py-5">
                        <p>Personal Details</p>
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.vital_life_status" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.firstname" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.middlename" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.lastname" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.extension_or_suffix_name" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.marital_status" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.date_of_birth" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_personal_info.citizenship" />
                        </div>
                      </div>
                      <div class="py-5">
                        <p>Contact Details</p>
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_contact_info.permanent_address" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_contact_info.current_address" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_contact_info.contact_number" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_contact_info.contact_email_address" />
                        </div>
                      </div>
                      <div class="py-5">
                        <p>Employment Details</p>
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.highest_education_completed" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.occupation_or_title" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.source_income" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.gross_monthly_income" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.company_employer_name" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.company_employer_address" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.father_employment_info.company_employer_contact_number" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Mother Information</p>
                    <div>
                      <div class="py-5">
                        <p>Personal Details</p>
                        <div class="grid grid-cols-3">
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.vital_life_status" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.firstname" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.middlename" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.lastname" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.extension_or_suffix_name" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.marital_status" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.date_of_birth" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_personal_info.citizenship" />
                          </div>
                        </div>
                      </div>
                      <div class="py-5">
                        <p class="">Contact Details</p>
                        <div class="">
                          <div class="">
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_contact_info.permanent_address" />
                          </div>
                          <div class="">
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_contact_info.current_address" />
                          </div>
                          <div class="">
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_contact_info.contact_number" />
                          </div>
                          <div class="">
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_contact_info.contact_email_address" />
                          </div>
                        </div>
                      </div>
                      <div class="py-5">
                        <p class="">Employment Details</p>
                        <div class="">
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.highest_education_completed" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.occupation_or_title" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.source_income" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.gross_monthly_income" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.company_employer_name" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.company_employer_address" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.mother_employment_info.company_employer_contact_number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pt-5">
                    <p class="text-green-800 uppercase font-bold mb-3 px-10">Legal Guardian Information</p>
                    <div class="px-10">
                      <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                        v-model="newStudent.legal_guardian_relation" />
                    </div>
                    <div class="">
                      <div class="px-10 py-5">
                        <p class="">Personal Details</p>
                        <div class="">
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.firstname" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.middlename" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.lastname" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.extension_or_suffix_name" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.marital_status" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.date_of_birth" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_personal_info.citizenship" />
                          </div>
                        </div>
                      </div>
                      <div class="px-10 py-5">
                        <p class="">Contact Details</p>
                        <div class="">
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_contact_info.permanent_address" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_contact_info.current_address" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_contact_info.contact_number" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_contact_info.contact_email_address" />
                          </div>
                        </div>
                      </div>
                      <div class="border-b-4 px-10 py-5">
                        <p class="">Employment Details</p>
                        <div class="">
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.highest_education_completed" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.occupation_or_title" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.source_income" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.gross_monthly_income" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.company_employer_name" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.company_employer_address" />
                          </div>
                          <div>
                            <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                              v-model="newStudent.legal_guardian_employment_info.company_employer_contact_number" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b-4 px-10 py-5">
                    <p class="text-green-800 uppercase font-bold mb-3">Siblings Information</p>
                    <div>
                      siblings
                    </div>
                  </div>

                  <div class="">
                    <div class="w-fit mx-auto py-5 flex ">
                      <div @click="toggleInfo(
                        true, false, false, false)"
                        class="cursor-pointer py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                        <i class="fa fa-angle-double-left"></i> Prev
                      </div>
                      <div
                        class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                        @click="toggleInfo(
                          false, false, true, false)">Next <i class="fa fa-angle-double-right"></i></div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="mx-auto border-t-2 border-green-700  -ml-5 mt-5 shadow-lg rounded-lg pt-5"
                v-show="toggle.programCourseDetailsAndDocuments">
                <div>
                  <div>
                    <div class="border-b-4 px-10 pb-5">
                      <p class="text-green-800 uppercase font-bold mb-3">Choice Track Program</p>
                      <div>
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.academic_year" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.semester_or_term" />
                        </div>
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.choice_track_program.first_program" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.choice_track_program.second_program" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.choice_track_program.third_program" />
                        </div>
                      </div>
                    </div>
                    <div class="border-b-4 py-5">
                      <p class="text-green-800 uppercase font-bold mb-3 px-10">Survey</p>
                      <div class="px-10">
                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.health_check_in_survey_in_present_time.physical_health" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.health_check_in_survey_in_present_time.mental_health" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.health_check_in_survey_in_present_time.mental_health_support" />
                        </div>

                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.has_funded_scholarship_or_grant_in_aid_program" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.how_you_learn_about_lsu" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.reason_for_choosing_lsu" />
                        </div>


                        <div class="grid grid-cols-3">
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.sao_personnel.remarks" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.sao_personnel.checked_and_verified_by" />
                          <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                            v-model="newStudent.sao_personnel.date_verified" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="">
                    <div class="w-fit mx-auto py-5 flex ">
                      <div @click="toggleInfo(
                        false, true, false, false)"
                        class="cursor-pointer py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                        <i class="fa fa-angle-double-left"></i> Prev
                      </div>
                      <div
                        class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                        @click="toggleInfo(
                          false, false, false, true)">Next <i class="fa fa-angle-double-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mx-auto border-t-2 border-green-700 -ml-5 mt-5 shadow-lg rounded-lg pt-5"
                v-show="toggle.survey">
                <div class="border-b-4 pb-5  px-10">
                  <p class="text-green-800 uppercase font-bold">Upload Soft Copies</p>

                  <div>
                    <div ref="dropRef" class="dropzone custom-dropzone"></div>
                    <!-- <div
          class="dropzone preview-container flex text-center justify-center border w-fit mx-auto p-3 mt-5"
        ></div> -->

                    <!-- <div v-for="(p, i) in previewFilesData" :key="i">
          <img :src="p.dataURL" class="w-10 h-10" />
          {{ p.name }}
        </div> -->
                  </div>


                  <div>
                    <!-- <div @click="dropzoneDataFilesBtn" class="mx-auto w-fit p-5 m-5">click me</div> -->
                  </div>
                </div>
                <div class="border-b-4 border-green-800 px-5 flex">

                  <div class="w-fit my-5">
                    <div @click="toggleInfo(
                      false, false, true, false)"
                      class="cursor-pointer py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                      <i class="fa fa-angle-double-left"></i> Review
                    </div>
                  </div>

                  <div class="mt-6 text-center w-7/12">
                    <p class="text-green-800 text-center">Please check all your information before submitting ...</p>
                  </div>
                </div>

                <div class="">
                  <div class=" w-11/12 mx-auto py-5 flex ">

                    <button
                      class="ml-auto mr-0 py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                      Submit <i class="fa fa-paper-plane"></i></button>
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
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