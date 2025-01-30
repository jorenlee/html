<script setup>
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);

import collegeOrSchoolJSON from "./college_school.json";
import courseOrProgramJSON from "./course_program.json";
// import courseMajorJSON from "./course_major.json";
import _ from "lodash";

let limitCounter = ref(2);
let limitCounterSibling = ref(2);

onMounted(() => {
    addEducation()
    addSibling()
});

const collegeOrSchoolDataOne = ref(collegeOrSchoolJSON);
const courseOrProgramDataOne = ref(courseOrProgramJSON);
const collegeOrSchoolDataTwo = ref(collegeOrSchoolJSON);
const courseOrProgramDataTwo = ref(courseOrProgramJSON);
const collegeOrSchoolDataThree = ref(collegeOrSchoolJSON);
const courseOrProgramDataThree = ref(courseOrProgramJSON);
// const courseMajorListData = ref(courseMajorJSON);
// console.log('collegeOrSchoolData', collegeOrSchoolJSON);

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
        permanent_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: "",
            region: ""
        },
        current_or_present_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        }
    },
    student_educational_info: [],
    // student_college_course_info: {
    //     college: "-",
    //     courseProgram: "-",
    //     courseYear: "-",
    //     courseMajor: "-"
    // },
    student_college_course_info: {
        choice_track_program_one_college: "-",
        choice_track_program_one_courseProgram: "-",
        choice_track_program_two_college: "-",
        choice_track_program_two_courseProgram: "-",
        choice_track_program_three_college: "-",
        choice_track_program_three_courseProgram: "-",
    },
    student_contact_person: {
        firstname: "",
        middlename: "",
        lastname: "",
        extension_or_suffix_name: "",
        relation: "",
        contact_number: "",
        permanent_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        current_or_present_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        }
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
        permanent_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        current_or_present_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        contact_number: "",
        contact_email_address: "",
    },
    father_employment_info: {
        highest_education_completed: "",
        occupation_or_title: "",
        source_income: "",
        gross_monthly_income: "",
        company_employer: {
            name: "",
            address: "",
            contact_number: "",
        }
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
        permanent_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        current_or_present_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        contact_number: "",
        contact_email_address: "",
    },
    mother_employment_info: {
        highest_education_completed: "",
        occupation_or_title: "",
        source_income: "",
        gross_monthly_income: "",
        company_employer: {
            name: "",
            address: "",
            contact_number: "",
        }
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
        permanent_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        current_or_present_living_home_address_category: {
            zipcode: "",
            city_or_municipality: "",
            province_or_state: "",
            houseNo_or_BuildingNo: "",
            street: "",
            barangay_and_purok: "",
            landmark: ""
        },
        contact_number: "",
        contact_email_address: "",
    },
    legal_guardian_employment_info: {
        highest_education_completed: "",
        occupation_or_title: "",
        source_income: "",
        gross_monthly_income: "",
        company_employer: {
            name: "",
            address: "",
            contact_number: "",
        }
    },
    siblings: [],
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
})


const addEducation = () => {
    newStudent.value.student_educational_info.push({
        curriculum: "",
        name_of_previous_school: "",
        track_or_program: "",
        highest_honors_received: "",
        city_or_municipality_and_province: "",
        year_graduated: "",
    });
    limitCounter.value--;
}

const removeRow = (obj) => {
    if (newStudent.value.student_educational_info.length > 1) {
        _.pull(newStudent.value.student_educational_info, obj);
        limitCounter.value++;
    }
}

const addSibling = () => {
    newStudent.value.siblings.push({
        lastname: "",
        firstName: "",
        middlename: "",
        extension_or_suffix_name: "",
        date_of_birth: "",
        age: "",
        civil_status: "",
        highest_educational_attainment: "",
        name_of_school_attended_or_company_employer: "",
    })
    limitCounterSibling.value--;
}

const removeRowSibling = (obj) => {
    if (newStudent.value.siblings.length > 1) {
        _.pull(newStudent.value.siblings, obj);
        limitCounterSibling.value++;
    }
}


let filteredCourseOrProgramOne = computed(() =>
    courseOrProgramDataOne.value.filter(function (params) {
        if (params.college_or_school_id === newStudent.value.student_college_course_info.choice_track_program_one_college) {
            return params.name;
        }
    })
)

let filteredCourseOrProgramTwo = computed(() =>
    courseOrProgramDataTwo.value.filter(function (params) {
        if (params.college_or_school_id === newStudent.value.student_college_course_info.choice_track_program_two_college) {
            return params.name;
        }
    })
)

let filteredCourseOrProgramThree = computed(() =>
    courseOrProgramDataThree.value.filter(function (params) {
        if (params.college_or_school_id === newStudent.value.student_college_course_info.choice_track_program_three_college) {
            return params.name;
        }
    })
)

const ageRange = ref([
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50
])


const birthOrder = ref([
    '1st', '2nd', '3rd', '4th', '5th', 'Nth'
])

const civilStatus = ref([
    'Single',
    'Married',
    'Separated',
    'Divorced',
    'Widowed'
])

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


const submitFunc = async () => {
    await $fetch(endpoint.value + "/api/admissions/create/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: newStudent.value,
        }
    ).then((response) => {
        // console.log(response);
    })
}

const submitForm = () => {
    submitFunc()
    //   saveFile();
}
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
        <div class="w-9/12 mx-auto items-center flex pt-5 pb-10 justify-center">
            <div class="mt-5">
                <div class="">
                    <ul class="flex justify-between">
                        <li @click="toggleInfo(
                            true, false, false, false)" class="w-full ">
                            <span class=" text-white  bg-green-900 rounded-lg px-3 py-2 h-10 w-10 text-center">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </span>
                            <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                            <p class="text-left text-xs mt-5  text-green-800 whitespace-nowrap">Student
                                Information</p>
                        </li>
                        <li @click="toggleInfo(
                            false, true, false, false)" class="w-full ">
                            <span class=" text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                                <i class="fa fa-users" aria-hidden="true"></i>
                            </span>
                            <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                            <p class="text-left text-xs  mt-5  text-green-800 whitespace-nowrap">Family Information
                            </p>
                        </li>
                        <li @click="toggleInfo(
                            false, false, true, false)" class="w-full ">
                            <span class=" text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                                <i class="fa fa-file-text" aria-hidden="true"></i>

                            </span>
                            <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                            <p class="text-left text-xs mt-5  text-green-800 whitespace-nowrap">Chosen Program &
                                Survey
                            </p>
                        </li>
                        <li @click="toggleInfo(
                            false, false, false, true)" class="w-full ">
                            <span class=" text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">
                                <i class='fa fa-poll-h'></i>
                            </span>
                            <span class="bg-green-900 h-0.5 w-full block -mt-2.5"></span>
                            <p class="text-left text-xs mt-5  text-green-800 whitespace-nowrap">Documents
                            </p>
                        </li>
                        <li class="">
                            <span class=" text-white  bg-green-900 rounded-lg px-2.5 py-2 h-10 w-10 text-center">

                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </span>
                            <p class="text-left text-xs -ml-24  mt-3  text-green-800 whitespace-nowrap">Submit and Check
                                Email</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <form class="">
                        <div class="border-t-2 border-green-700 mt-5 shadow-lg rounded-lg" v-show="toggle.studentInfo">
                            <div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Personal Details</p>
                                    <div class="">
                                        <div>
                                            <div class="flex gap-3 mb-3">
                                                <div>
                                                    <label
                                                        class="text-[10px] text-gray-300 lg:block hidden">Title</label>
                                                    <div>
                                                        <input type="text"
                                                            class="border border-green-800 rounded-md h-9 w-20 capitalize"
                                                            v-model="newStudent.student_personal_info.title"
                                                            placeholder="title" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        class="text-[10px] text-gray-300 lg:block hidden">Suffix</label>
                                                    <div class="flex">
                                                        <input type="text"
                                                            class="border border-green-800 rounded-md h-9 w-20 capitalize"
                                                            v-model="newStudent.student_personal_info.extension_or_suffix_name"
                                                            placeholder="Suffix" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">Biological
                                                        Sex</label>
                                                    <div class="flex">

                                                        <select class="border border-green-800 rounded-md h-9 w-fit px-4"
                                                            v-model="newStudent.student_personal_info.biological_sex">
                                                            <option value="" disabled selected hidden>Sex at Birth</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Male">Male</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Full
                                                    Name</label>
                                                <div class="flex gap-3">
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9 capitalize"
                                                        placeholder="First Name"
                                                        v-model="newStudent.student_personal_info.firstname" />
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9 capitalize"
                                                        placeholder="Middle Name"
                                                        v-model="newStudent.student_personal_info.middlename" />
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9 capitalize"
                                                        placeholder="Last Name"
                                                        v-model="newStudent.student_personal_info.lastname" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex gap-3 mb-3">
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Date of
                                                    Birth</label>
                                                <div>
                                                    <input type="date"
                                                        class="w-44 border border-green-800 rounded-md h-9"
                                                        placeholder="Date of Birth"
                                                        v-model="newStudent.student_personal_info.date_of_birth" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Age</label>
                                                <div>
                                                    <select class="w-20 border border-green-800 rounded-md h-9 px-2"
                                                        v-model="newStudent.student_personal_info.age">
                                                        <option value="" disabled selected hidden>Age</option>
                                                        <option :value="j" v-for="(j, i) in ageRange" :key="i">{{ j }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Birth
                                                    Order</label>
                                                <div>
                                                    <select class="w-32 border border-green-800 rounded-md h-9 px-2"
                                                        v-model="newStudent.student_personal_info.birth_order">
                                                        <option value="" disabled selected hidden>Birth Oder</option>
                                                        <option :value="j" v-for="(j, i) in birthOrder" :key="i">{{ j }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Birth
                                                    Place</label>
                                                <div>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.student_personal_info.birth_place"
                                                        placeholder="Birth Place" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex gap-3 mb-3">
                                            <div>
                                                <label
                                                    class="text-[10px] text-gray-300 lg:block hidden">Nationality</label>
                                                <div>
                                                    <input type="text"
                                                        class="w-44 border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.student_personal_info.nationality"
                                                        placeholder="Nationality" />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    class="text-[10px] text-gray-300 lg:block hidden">Citizenship</label>
                                                <div>
                                                    <input type="text"
                                                        class="w-44 border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.student_personal_info.citizenship"
                                                        placeholder="Citizenship" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Civil
                                                    Status</label>
                                                <div>
                                                    <select class="w-44 border border-green-800 rounded-md h-9 px-3"
                                                        v-model="newStudent.student_personal_info.civil_status">
                                                        <option value="" disabled selected hidden>Civil Status</option>
                                                        <option :value="j" v-for="(j, i) in civilStatus" :key="i">{{ j
                                                            }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="text-[10px] text-gray-300 lg:block hidden">Religion</label>
                                            <div>
                                                <input type="text" class="w-9/12 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.student_personal_info.religion"
                                                    placeholder="Religion" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Contact Details</p>
                                    <div class="">
                                        <div class="flex gap-3">

                                            <div class="">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Contact
                                                    Number</label>
                                                <div>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        placeholder="(+63) XXX-XXX-XXXX"
                                                        v-model="newStudent.student_contact_info.contact_number" />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="text-[10px] text-gray-300 lg:block hidden">Email
                                                    Address</label>
                                                <div>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        placeholder="email@domain.com"
                                                        v-model="newStudent.student_contact_info.contact_email_address" />
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div>
                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.student_contact_info.living_home_address_category" />

                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.student_contact_info.current_address" />

                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.student_contact_info.permanent_address" />
                                            </div> -->
                                        <div class="mt-2">
                                            <label class="text-[10px] text-gray-300 lg:block hidden">Present
                                                Address</label>
                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                placeholder="Present Complete Address"
                                                v-model="newStudent.student_contact_info.permanent_living_home_address_category" />

                                        </div>

                                        <div class="mt-2">
                                            <label class="text-[10px] text-gray-300 lg:block hidden">Permanent
                                                Address</label>
                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                placeholder="Permanent Complete Address"
                                                v-model="newStudent.student_contact_info.current_or_present_living_home_address_category" />

                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-4 px-10 pt-5 pb-3">
                                    <p class="text-green-800 uppercase font-bold mb-3">Educational Details</p>
                                    <p class="text-xs text-gray-500">Please add all your previous educational detail
                                        information.</p>
                                    <div>
                                        <div class="lg:flex lg:shadow rounded-xl lg:p-5 mt-2 gap-2 mb-3 relative"
                                            v-for="(b, i) in newStudent.student_educational_info" :key="i">
                                            <div class="flex items-center">

                                                <div
                                                    class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2">
                                                    {{ i + 1 }}
                                                </div>
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    Curriculum
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.curriculum" placeholder="curriculum" type="text"
                                                    required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    Name of Previous School
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.name_of_previous_school"
                                                    placeholder="name_of_previous_school" type="text" required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    Track or Program
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.track_or_program" placeholder="track_or_program"
                                                    type="text" required />
                                            </div>
                                            <div class="flex items-center lg:static absolute top-3 right-0"
                                                v-if="newStudent.student_educational_info.length > 1">
                                                <div class="mr-2 lg:hidden block">Remove</div>
                                                <div class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                                                    @click="removeRow(b)">
                                                    <i class="fa fa-close"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-2">
                                            <div class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                @click="addEducation">
                                                <i class="fa fa-plus mr-1"></i> Add Education
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Foreign Student Details</p>
                                    <div class="gap-2 mb-3">
                                        <div class="flex gap-3">
                                            <div class="w-full">
                                                <label class="text-[10px] text-gray-300">
                                                    Status Info or Visa Status
                                                </label>
                                                <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.foreign_student_info.status_info_visa_status"
                                                    placeholder="Status Info or Visa Status" />
                                            </div>
                                            <div class="w-full">
                                                <label class="text-[10px] text-gray-300">
                                                    Passport Number
                                                </label>
                                                <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.foreign_student_info.passport_number"
                                                    placeholder="Passport Number" />
                                            </div>
                                            <div class="w-full">
                                                <label class="text-[10px] text-gray-300">
                                                    Last Day of Authorized Stay
                                                </label>
                                                <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.foreign_student_info.last_day_of_authorized_stay"
                                                    placeholder="Last Day of Authorized Stay" />
                                            </div>
                                        </div>
                                        <div class="flex gap-3">
                                            <div class="w-full">
                                                <label class="text-[10px] text-gray-300">
                                                    Place Issued
                                                </label>
                                                <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.foreign_student_info.place_issued"
                                                    placeholder="Place Issued" />
                                            </div>
                                            <div class="w-full">
                                                <label class="text-[10px] text-gray-300">
                                                    Agent Name
                                                </label>
                                                <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.foreign_student_info.agentname"
                                                    placeholder="Agent Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-4 gap-2">
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                Date Issued
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.date_issued"
                                                placeholder="Date Issued" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                Date of Expiry
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.date_of_expiry"
                                                placeholder="Date of Expiry" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                ACRICARD Date Issued
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.ACRICARD_date_issued"
                                                placeholder="ACRICARD Date Issued" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                ACRICARD Date of Expiry
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.ACRICARD_date_of_expiry"
                                                placeholder="ACRICARD Date of Expiry" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                CRTS Date Issued
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.CRTS_date_issued"
                                                placeholder="CRTS Date Issued" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                CRTS Date of Expiry
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.CRTS_date_of_expiry"
                                                placeholder="CRTS Date of Expiry" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                SSP Date Issued
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.SSP_date_issued"
                                                placeholder="SSP Date Issued" />
                                        </div>
                                        <div>
                                            <label class="text-[10px] text-gray-300 lg:block hidden">
                                                SSP Date of Expiry
                                            </label>
                                            <input type="date" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.foreign_student_info.SSP_date_of_expiry"
                                                placeholder="SSP Date of Expiry" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="w-fit mx-auto py-5 flex">
                                        <!-- <div
                                        class="py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                                        <i class="fa fa-angle-double-left"></i> Prev</div> -->
                                        <div class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                                            @click="toggleInfo(
                                                false, true, false, false)">Next <i
                                                class="fa fa-angle-double-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto border-t-2 border-green-700 mt-5 shadow-lg rounded-lg"
                            v-show="toggle.familyInfo">
                            <div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Contact Person</p>
                                    <div class="grid grid-cols-3">
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                First Name</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.firstname" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Middle Name</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.middlename" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Last Name</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.lastname" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Suffix Name</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.extension_or_suffix_name" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Relation to Student</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.relation" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Permanent Address</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.permament_address" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Current Address</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.current_address" />
                                        </div>
                                        <div>
                                            <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                Contact Number</label>

                                            <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                                v-model="newStudent.student_contact_person.contact_number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Father Information</p>
                                    <div>
                                        <div class="py-5">
                                            <p>Personal Details</p>
                                            <div class="grid grid-cols-3">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Vital Life Status</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.vital_life_status" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        First Name</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.firstname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Middle Name</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.middlename" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        LastName</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.lastname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Suffix
                                                        Name</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.extension_or_suffix_name" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Marital
                                                        Status</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.marital_status" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Date of
                                                        Birth</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.date_of_birth" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Citizenship</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_personal_info.citizenship" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-5">
                                            <p>Contact Details</p>
                                            <div class="grid grid-cols-3">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Permanent
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_contact_info.permanent_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Current
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_contact_info.current_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Contact
                                                        Number</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_contact_info.contact_number" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Email
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_contact_info.contact_email_address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-5">
                                            <p>Employment Details</p>
                                            <div class="grid grid-cols-3">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Highest Education Completed</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.highest_education_completed" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Occupation or Title</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.occupation_or_title" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Source Income</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.source_income" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Gross Monthly Income</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.gross_monthly_income" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Name</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.company_employer_name" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.company_employer_address" />
                                                </div>

                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Contact Number</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.father_employment_info.company_employer_contact_number" />
                                                </div>
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
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Vital Life Status</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.vital_life_status" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        First Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.firstname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Middle Name</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.middlename" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Last Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.lastname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Extension or Suffix Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.extension_or_suffix_name" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Marital Status
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.marital_status" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Date of Birth
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.date_of_birth" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Citizenship
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_personal_info.citizenship" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-5">
                                            <p class="">Contact Details</p>
                                            <div class="">
                                                <div class="">
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Permanent
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_contact_info.permanent_address" />
                                                </div>
                                                <div class="">
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Current
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_contact_info.current_address" />
                                                </div>
                                                <div class="">
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Contact Number</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_contact_info.contact_number" />
                                                </div>
                                                <div class="">
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Contact Email
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_contact_info.contact_email_address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="py-5">
                                            <p class="">Employment Details</p>
                                            <div class="">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Highest Education Completed</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.highest_education_completed" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Occupation or Title
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.occupation_or_title" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Source Income
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.source_income" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Gross Monthly Income
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.gross_monthly_income" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.company_employer_name" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Address
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.company_employer_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Contact Number
                                                        Address</label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.mother_employment_info.company_employer_contact_number" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-5">
                                    <p class="text-green-800 uppercase font-bold mb-3 px-10">Legal Guardian
                                        Information</p>
                                    <div class="px-10">
                                        <label class="block text-xs text-gray-700 whitespace-nowrap">Current
                                            Address</label>
                                        <input type="text" class="w-full border border-green-800 rounded-md h-9"
                                            v-model="newStudent.legal_guardian_relation" />
                                    </div>
                                    <div class="">
                                        <div class="px-10 py-5">
                                            <p class="">Personal Details</p>
                                            <div class="">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        First Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.firstname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Middle Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.middlename" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Last Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.lastname" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Extension or Suffix Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.extension_or_suffix_name" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Marital Status
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.marital_status" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Date of Birth
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.date_of_birth" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Citizenship
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_personal_info.citizenship" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="px-10 py-5">
                                            <p class="">Contact Details</p>
                                            <div class="">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Permanent Address
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_contact_info.permanent_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Current Address
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_contact_info.current_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Contact Number
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_contact_info.contact_number" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Contact Email Address
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_contact_info.contact_email_address" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-b-4 px-10 py-5">
                                            <p class="">Employment Details</p>
                                            <div class="">
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Highest Education Completed
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.highest_education_completed" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Occupation or Title
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.occupation_or_title" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Source Income
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.source_income" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Gross Monthly Income
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.gross_monthly_income" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Name
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.company_employer_name" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Address
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.company_employer_address" />
                                                </div>
                                                <div>
                                                    <label class="block text-xs text-gray-700 whitespace-nowrap">
                                                        Company Employer Contact Number
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.legal_guardian_employment_info.company_employer_contact_number" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b-4 px-10 py-5">
                                    <p class="text-green-800 uppercase font-bold mb-3">Siblings Information</p>
                                    <div>
                                        <div class="lg:flex lg:shadow rounded-xl lg:p-5 mt-2 gap-2 mb-3 relative"
                                            v-for="(b, i) in newStudent.siblings" :key="i">
                                            <div class="flex items-center">

                                                <div
                                                    class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2">
                                                    {{ i + 1 }}
                                                </div>
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    lastname
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.lastname" placeholder="lastname" type="text" required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    firstName
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.firstName" placeholder="firstName" type="text"
                                                    required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    middlename
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.middlename" placeholder="middlename" type="text"
                                                    required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    extension_or_suffix_name
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.extension_or_suffix_name"
                                                    placeholder="extension_or_suffix_name" type="text" required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    date_of_birth
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.date_of_birth" placeholder="date_of_birth" type="text"
                                                    required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    age
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.age" placeholder="age" type="text" required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    civil_status
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.civil_status" placeholder="civil_status" type="text"
                                                    required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    highest_educational_attainment
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.highest_educational_attainment"
                                                    placeholder="highest_educational_attainment" type="text" required />
                                            </div>
                                            <div class="w-full lg:mb-0 mb-2">
                                                <label class="text-[10px] text-gray-300 lg:block hidden">
                                                    name_of_school_attended_or_company_employer
                                                </label>
                                                <input
                                                    class="shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize"
                                                    v-model="b.name_of_school_attended_or_company_employer"
                                                    placeholder="name_of_school_attended_or_company_employer"
                                                    type="text" required />
                                            </div>
                                            <div class="flex items-center lg:static absolute top-3 right-0"
                                                v-if="newStudent.siblings.length > 1">
                                                <div class="mr-2 lg:hidden block">Remove</div>
                                                <div class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                                                    @click="removeRowSibling(b)">
                                                    <i class="fa fa-close"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-2">
                                            <div class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                                                @click="addSibling">
                                                <i class="fa fa-plus mr-1"></i> Add Sibling
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="w-fit mx-auto py-5 flex ">
                                        <div @click="toggleInfo(
                                            true, false, false, false)"
                                            class="cursor-pointer py-1 uppercase pr-8 pl-7 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5">
                                            <i class="fa fa-angle-double-left"></i> Prev
                                        </div>
                                        <div class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                                            @click="toggleInfo(
                                                false, false, true, false)">Next <i
                                                class="fa fa-angle-double-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto border-t-2 border-green-700 mt-5 shadow-lg rounded-lg pt-5"
                            v-show="toggle.programCourseDetailsAndDocuments">
                            <div>
                                <div>
                                    <div class="border-b-4 px-10 pb-5">
                                        <p class="text-green-800 uppercase font-bold mb-3">Choice Track Program</p>
                                        <div>
                                            <div class="lg:flex lg:gap-5">

                                                <div class="lg:flex items-center w-full gap-3">
                                                    <label class="text-xs text-gray-700 whitespace-nowrap">Academic
                                                        Year</label>
                                                    <select class="w-full border border-green-800 rounded-md h-9 px-4"
                                                        v-model="newStudent.academic_year">
                                                        <option value="" disabled selected hidden>Academic Year</option>
                                                        <option value="A.Y 2020 - 2021">A.Y 2020 - 2021</option>
                                                        <option value="A.Y 2021 - 2022">A.Y 2021 - 2022</option>
                                                        <option value="A.Y 2022 - 2023">A.Y 2022 - 2023</option>
                                                        <option value="A.Y 2023 - 2024">A.Y 2023 - 2024</option>
                                                        <option value="A.Y 2024 - 2025">A.Y 2024 - 2025</option>
                                                        <option value="A.Y 2025 - 2026">A.Y 2025 - 2026</option>
                                                    </select>
                                                </div>
                                                <div class="lg:flex items-center w-full gap-3">
                                                    <label class="text-xs text-gray-700 whitespace-nowrap">Semester
                                                        Year</label>
                                                    <select class="w-full border border-green-800 rounded-md h-9 px-4"
                                                        v-model="newStudent.semester_or_term">
                                                        <option value="" disabled selected hidden>Semester Term</option>
                                                        <option value="1st Sem">1st Sem</option>
                                                        <option value="2nd Sem">2nd Sem</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <!-- <div class="grid grid-cols-3">
                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.choice_track_program.first_program" />
                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.choice_track_program.second_program" />
                                                <input type="text" class="w-44 border border-green-800 rounded-md h-9"
                                                    v-model="newStudent.choice_track_program.third_program" />
                                            </div> -->
                                            <div>
                                                <div class="my-3">
                                                    <div>
                                                        <h1>Choice Track Program 1</h1>
                                                    </div>
                                                    <div class="">
                                                        <div>
                                                            <label class="text-xs text-gray-700">
                                                                College/School<span
                                                                    class="text-red-500">*</span></label>
                                                            <div class="">
                                                                <select
                                                                    v-model="newStudent.student_college_course_info.choice_track_program_one_college"
                                                                    class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                    required>
                                                                    <option value="" disabled>Select College or School
                                                                    </option>
                                                                    <option :value="c.name"
                                                                        v-for="(c, i) in collegeOrSchoolDataOne"
                                                                        :key="i">
                                                                        {{ c.name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label class="text-xs text-gray-700">Course/Program<span
                                                                    class="text-red-500">*</span></label>
                                                            <select
                                                                v-model="newStudent.student_college_course_info.choice_track_program_one_courseProgram"
                                                                class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                required>
                                                                <option value="" disabled>Select Course Program</option>
                                                                <option :value="cp.name"
                                                                    v-for="(cp, i) in filteredCourseOrProgramOne"
                                                                    :key="i">
                                                                    {{ cp.name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <!-- v-if="newStudent.student_college_course_info.courseProgram === _.has(filteredCourseMajor)" -->
                                                    <!-- <div>
                                                        <label class="text-xs text-gray-700">
                                                            Course Major</label>
                                                        <select
                                                            v-model="newStudent.student_college_course_info.courseMajor"
                                                            class="w-full border  border-green-800 rounded-md h-9 px-3">
                                                            <option value="N/A" disabled>Select Course Major</option>
                                                            <option :value="cm.name"
                                                                v-for="(cm, i) in filteredCourseMajor" :key="i">
                                                                <span v-if="cm">{{ cm.name }}</span>
                                                            </option>
                                                        </select>
                                                    </div> -->
                                                    <!-- <div>
                                                        <label class="text-xs text-gray-700">
                                                            Course Year/Grade<span class="text-red-500">*</span></label>
                                                        <div>
                                                            <select
                                                                v-model="newStudent.student_college_course_info.courseYear"
                                                                class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                required>
                                                                <option value="N/A" disabled>Select Course Year</option>
                                                                <option value="1st Year">1st Year</option>
                                                                <option value="2nd Year">2nd Year</option>
                                                                <option value="3rd Year">3rd Year</option>
                                                                <option value="4th Year">4th Year</option>
                                                                <option value="5th Year">5th Year</option>
                                                                <option value="6th Year">6th Year</option>
                                                                <option value="7th Year">7th Year</option>
                                                                <option value="8th Year">8th Year</option>
                                                                <option value="9th Year">9th Year</option>
                                                                <option value="10th Year">10th Year</option>
                                                            </select>
                                                        </div>
                                                    </div> -->
                                                </div>
                                                <div class="my-3">
                                                    <div>
                                                        <h1>Choice Track Program 2</h1>
                                                    </div>
                                                    <div class="">
                                                        <div>
                                                            <label class="text-xs text-gray-700">
                                                                College/School<span
                                                                    class="text-red-500">*</span></label>
                                                            <div class="">
                                                                <select
                                                                    v-model="newStudent.student_college_course_info.choice_track_program_two_college"
                                                                    class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                    required>
                                                                    <option value="" disabled>Select College or School
                                                                    </option>
                                                                    <option :value="c.name"
                                                                        v-for="(c, i) in collegeOrSchoolDataTwo"
                                                                        :key="i">
                                                                        {{ c.name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label class="text-xs text-gray-700">Course/Program<span
                                                                    class="text-red-500">*</span></label>
                                                            <select
                                                                v-model="newStudent.student_college_course_info.choice_track_program_two_courseProgram"
                                                                class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                required>
                                                                <option value="" disabled>Select Course Program</option>
                                                                <option :value="cp.name"
                                                                    v-for="(cp, i) in filteredCourseOrProgramTwo"
                                                                    :key="i">
                                                                    {{ cp.name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <h1>Choice Track Program 3</h1>
                                                    </div>
                                                    <div class="">
                                                        <div>
                                                            <label class="text-xs text-gray-700">
                                                                College/School<span
                                                                    class="text-red-500">*</span></label>
                                                            <div class="">
                                                                <select
                                                                    v-model="newStudent.student_college_course_info.choice_track_program_three_college"
                                                                    class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                    required>
                                                                    <option value="" disabled>Select College or School
                                                                    </option>
                                                                    <option :value="c.name"
                                                                        v-for="(c, i) in collegeOrSchoolDataThree"
                                                                        :key="i">
                                                                        {{ c.name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label class="text-xs text-gray-700">Course/Program<span
                                                                    class="text-red-500">*</span></label>
                                                            <select
                                                                v-model="newStudent.student_college_course_info.choice_track_program_three_courseProgram"
                                                                class="w-full border  border-green-800 rounded-md h-9 px-3"
                                                                required>
                                                                <option value="" disabled>Select Course Program</option>
                                                                <option :value="cp.name"
                                                                    v-for="(cp, i) in filteredCourseOrProgramThree"
                                                                    :key="i">
                                                                    {{ cp.name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b-4 py-5">
                                        <p class="text-green-800 uppercase font-bold mb-3 px-10">Survey</p>
                                        <div class="px-10">
                                            <div class="grid grid-cols-3 gap-3 mb-3">
                                                <div>
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        Physical Health
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.health_check_in_survey_in_present_time.physical_health" />
                                                </div>
                                                <div>
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        Mental Health
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.health_check_in_survey_in_present_time.mental_health" />
                                                </div>
                                                <div>
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        Mental Health Support
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.health_check_in_survey_in_present_time.mental_health_support" />
                                                </div>
                                            </div>
                                            <div class="">
                                                <div class="mb-3">
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        Has Funded Scholarship or Grant in Aid Program?
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.has_funded_scholarship_or_grant_in_aid_program" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        How you Learn about LSU?
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.how_you_learn_about_lsu" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="text-[10px] text-gray-300 lg:block hidden">
                                                        Reason for Choosing LSU?
                                                    </label>
                                                    <input type="text"
                                                        class="w-full border border-green-800 rounded-md h-9"
                                                        v-model="newStudent.reason_for_choosing_lsu" />
                                                </div>
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
                                        <div class="cursor-pointer py-1 uppercase pr-7 pl-8 shadow bg-green-800 text-white hover:bg-white hover:text-green-800 rounded-lg mx-5"
                                            @click="toggleInfo(
                                                false, false, false, true)">Next <i
                                                class="fa fa-angle-double-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto border-t-2 border-green-700 mt-5 shadow-lg rounded-lg pt-5"
                            v-show="toggle.survey">
                            <div class="border-b-4 pb-5  px-10">
                                <p class="text-green-800 uppercase font-bold">Submit Hard Copies - Registrar's
                                    Office</p>
                                <div>
                                    <div ref="dropRef" class="dropzone custom-dropzone"></div>
                                    <!-- <div
                                        class="dropzone preview-container flex text-center justify-center border w-fit mx-auto p-3 mt-5"></div> -->
                                    <!-- <div v-for="(p, i) in previewFilesData" :key="i">
                                        <img :src="p.dataURL" class="w-10 h-10" />{{ p.name }}
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
                                    <p class="text-green-800 text-center">Please check all your information before
                                        submitting ...</p>
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

select {
    color: #000000;
}

option:not(:first-of-type) {
    color: black;
}
</style>