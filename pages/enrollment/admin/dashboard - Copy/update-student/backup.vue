<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import _ from "lodash";
import "@vuepic/vue-datepicker/dist/main.css";


const router = useRouter();
const userStore = useUserStore();

const endpoint = ref(userStore.mainDevServer);
let bookingAppointmentListFilter = ref(0);
const spinner = ref(false);




let searchText = ref('');

let enrolleesList = ref(null)

let totalEnrollees = ref(0)
let totalEnrolleesPerCollege = ref(0)

const tableDisplay = ref(true);
const initialDisplay = ref(25);
const numberOfItems = ref(25);
const startNum = ref(0);
let idToBeDeleted = ref();
let numberOfPages;
let bookingAppointmentListFilterlength;
let toggleConfirmDelete = ref(false);

let totalIndicator = ref('');
let currentPageNumber = ref(1);

let filterSearch = () => {
  if(searchText.value === '') {
    bookingAppointmentListFilter.value = enrolleesList.value
    pagination(1)
  } else {
    startNum.value = 0
    bookingAppointmentListFilter.value = enrolleesList.value.filter(function (params) {
      return searchText.value === params.tracking_id || searchText.value === params.student_lsu_id_number
    })
  }
}

onMounted(async () => {
  let continuingStudents = await $fetch(endpoint.value + "/api/admissions-first-sem/list/").catch((error) => error.data);
  enrolleesList.value = continuingStudents
  totalEnrollees.value = continuingStudents.length || 0
  if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'ccc@lsu.edu.ph' ||
      userStore.user.email === 'saodirector@lsu.edu.ph' ||
      userStore.user.email === 'ascdirector@lsu.edu.ph' ||
      userStore.user.email === 'admissions@lsu.edu.ph' ||
      userStore.user.email === 'scholarships@lsu.edu.ph' ||
      userStore.user.email === 'katerijunine.tabernero@lsu.edu.ph' ||
      userStore.user.email === 'sherryl.origenes@lsu.edu.ph' ||
      userStore.user.email === 'lourdes_niebla@lsu.edu.ph' ||
      userStore.user.email === 'lindakj11196@gmail.com' ||
      userStore.user.email === 'jorenleeluna24@gmail.com' ||
      userStore.user.email === 'jayharold.reazol@lsu.edu.ph' ||
      userStore.user.email === 'cheryl.osorio@lsu.edu.ph' ||
      userStore.user.email === 'cte.registrar@lsu.edu.ph' ||
      userStore.user.email === 'onlinerequest@lsu.edu.ph' ||
      userStore.user.email === 'ccsea.registrar@lsu.edu.ph' ||
      userStore.user.email === 'cba.registrar@lsu.edu.ph' ||
      userStore.user.email === 'patrick.obut@lsu.edu.ph' ||
      userStore.user.email === 'maryeloise.pilvera@lsu.edu.ph' ||
      userStore.user.email === 'johny14_gonzaga@lsu.edu.ph' ||
      userStore.user.email === 'denzelroy.suarez@lsu.edu.ph' ||
      userStore.user.email === 'jason.yap@lsu.edu.ph' ||
      userStore.user.email === 'rommel.rosal@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    bookingAppointmentListFilter.value = enrolleesList.value || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'ramel.recentes@lsu.edu.ph' ||
      userStore.user.email === 'markkrisli.delapena@lsu.edu.ph' ||
      userStore.user.email === 'grace.dolloso@lsu.edu.ph' ||
      userStore.user.email === 'ladyvi.tagailo@lsu.edu.ph' ||
      userStore.user.email === 'earl.gangoso@lsu.edu.ph' ||
      userStore.user.email === 'honimar.panganiban@lsu.edu.ph' ||
      userStore.user.email === 'olaira.imbong@lsu.edu.ph' ||
      userStore.user.email === 'jessel.abarca@lsu.edu.ph' ||
      userStore.user.email === 'jorenlee.luna@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CCSEA'
    })
    totalIndicator.value = 'CCSEA'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'anilou.dilao@lsu.edu.ph' ||
      userStore.user.email === 'marvel.deromol@lsu.edu.ph' ||
      userStore.user.email === 'nizel.apas@lsu.edu.ph' ||
      userStore.user.email === 'noel.alamin@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CAS'
    })
    totalIndicator.value = 'CAS'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'emma.suana@lsu.edu.ph' ||
      userStore.user.email === 'jenel.cruz@lsu.edu.ph' ||
      userStore.user.email === 'johnmark.saldivar@lsu.edu.ph' ||
      userStore.user.email === 'kenneth.yagong@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CTE'
    })
    totalIndicator.value = 'CTE'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'lowelle.pacot@lsu.edu.ph' ||
      userStore.user.email === 'jennifer.aguanta@lsu.edu.ph' ||
      userStore.user.email === 'jaysavelle.tubigon@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CBA'
    })
    totalIndicator.value = 'CBA'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'arlene.apao@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.admissions_list_filter.college === 'CON'
    })
    totalIndicator.value = 'CON'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'joed.layna@lsu.edu.ph' ||
      userStore.user.email === 'michael.angelo.pagara@lsu.edu.ph' ||
      userStore.user.email === 'karen.linganay@lsu.edu.ph'
    )
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CTHM'
    })
    totalIndicator.value = 'CTHM'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else if (
    userStore.user.isAuthenticated &&
    (
      userStore.user.email === 'estephanie.zamora@lsu.edu.ph'
    ) 
  ) {
    // console.log(enrolleesList.value)
    let filter = enrolleesList.value.filter(function (params) {
      return params.college === 'CCJE'
    })
    totalIndicator.value = 'CCJE'
    bookingAppointmentListFilter.value = filter || 0
    totalEnrolleesPerCollege.value = filter.length || 0
    numberOfPages = Math.ceil(bookingAppointmentListFilter._rawValue.length / numberOfItems.value);
    bookingAppointmentListFilterlength = bookingAppointmentListFilter._rawValue.length;
  }
  else {
    if (userStore.user.email === "" || userStore.user.email === undefined) {
      router.push("/enrollment/admin/login");
    }
    router.push("/_/unauthorized");
  }
  router.push("/enrollment/admin/dashboard");
  // console.log('enrolleesList.value', enrolleesList.value)
});



let itemsLoaded = computed(() => {
  return bookingAppointmentListFilter.value.slice(startNum.value, numberOfItems.value);
});


const prev = () => {
  if(currentPageNumber.value > 1) {
    currentPageNumber.value--;
  }
  if (startNum.value > 0) {
    startNum.value -= initialDisplay.value;
    numberOfItems.value -= initialDisplay.value;
    // console.log("prev");
    itemsLoaded;
  }
};

const next = () => {
  if(currentPageNumber.value < numberOfPages) {
    currentPageNumber.value++;
  }
  if (numberOfItems.value < bookingAppointmentListFilterlength) {
    startNum.value += initialDisplay.value;
    numberOfItems.value += initialDisplay.value;
    // console.log("next");
    itemsLoaded;
  }
};

const pagination = (selectedPage) => {
  currentPageNumber.value = selectedPage
  startNum.value = 0;
  numberOfItems.value = initialDisplay.value;
  itemsLoaded;
  if (selectedPage > 1) {
    numberOfItems.value *= selectedPage;
    startNum.value = numberOfItems.value - initialDisplay.value;
  }
};

const filtersBtn = ref([
  {
    category_title: 'Student Classification Status',
    list: ['Continuing', 'Returnee']
  }
])

const goToEdit = async (id) => {
  router.push("/enrollment/admin/dashboard/update-student/" + id);
  tableDisplay.value = false
  spinner.value = true
}

const logOut = () => {
  router.push("/enrollment");
  userStore.removeToken();
}

const toggleDeleteBtn = (id) => {
  toggleConfirmDelete.value = !toggleConfirmDelete.value;
  idToBeDeleted.value = id;
};

const deleteItem = async () => {
  await $fetch(
    endpoint.value + "/api/admissions/" + idToBeDeleted.value + "/delete/",
    {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      // console.log("response", response);
      router.go();
      toggleConfirmDelete.value = !toggleConfirmDelete.value;
    });
}

let singleEnrollee = ref(null)
let displaySingleEntryToggle = ref(false)

const editStatus = async (id) => {
  spinner.value = true
  await $fetch(endpoint.value + "/api/admissions/" + id + "/edit/", {
    method: "PUT",
    body: singleEnrollee.value,
  }).then((response) => {
    // console.log("response", response);
    router.push("/enrollment/admin/dashboard/");
    spinner.value = false
    router.go();
  })
}



const displaySingleEntry = async (id) => {
  singleEnrollee.value = await $fetch(endpoint.value + "/api/admissions-first-sem/" + id + "/").catch((error) => error.data)
  displaySingleEntryToggle.value = true;
}


const admissionsDone = async (id) => {
  singleEnrollee.value = await $fetch(endpoint.value + "/api/admissions/" + id + "/").catch((error) => error.data)
  // console.log(singleEnrollee.value.length)
  if(singleEnrollee.value !== null){
    spinner.value = true
  singleEnrollee.value.enrollment_tracking_status[0] = {
    track_name: 'admissions',
    label: 'admission',
    details: 'Requirements',
    date_checked: '-',
    check_by: '-',
    status: 'yes',
    remarks: ''
  }

 
  await $fetch(endpoint.value + "/api/admissions/submit-new-student-to-gmail-evaluation-done/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      tracking_id: singleEnrollee.value.tracking_id,
      student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
      firstname: singleEnrollee.value.student_personal_info.firstname,
      email: singleEnrollee.value.student_contact_info.contact.personal_email_address,
      lsu_email: singleEnrollee.value.student_contact_info.contact.lsu_email_address
    }
  }).then((response) => {
    // console.log(response);
    editStatus(id)
    router.push("/enrollment/admin/dashboard/");
    spinner.value = false
  })
  }
}



const evaluationDone = async (id) => {
  singleEnrollee.value = await $fetch(endpoint.value + "/api/admissions/" + id + "/").catch((error) => error.data)
  // console.log(singleEnrollee.value.length)
  if(singleEnrollee.value !== null){
    spinner.value = true
  singleEnrollee.value.enrollment_tracking_status[0] = {
    track_name: 'admissions',
    label: 'admission',
    details: 'Requirements',
    date_checked: '-',
    check_by: '-',
    status: 'yes',
    remarks: ''
  }
  singleEnrollee.value.enrollment_tracking_status[1] = {
    track_name: 'advising',
    label: 'advising',
    details: 'Course Subjects ',
    date_checked: '-',
    check_by: '-',
    status: 'yes',
    remarks: ''
  }
  singleEnrollee.value.enrollment_tracking_status[2] = {
    track_name: 'accounting',
    label: 'payment',
    details: 'payment',
    date_checked: '-',
    check_by: '-',
    status: 'yes',
    remarks: ''
  }
  singleEnrollee.value.enrollment_tracking_status[3] = {
    track_name: 'verification',
    label: 'verification',
    details: 'verification',
    date_checked: '',
    check_by: '-',
    status: 'yes',
    remarks: 'You are now officially enrolled,'
  }
  singleEnrollee.value.evaluation.submitted = true
  singleEnrollee.value.receipt.submitted = true
 
  await $fetch(endpoint.value + "/api/admissions/submit-new-student-to-gmail-evaluation-done/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      tracking_id: singleEnrollee.value.tracking_id,
      student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
      firstname: singleEnrollee.value.student_personal_info.firstname,
      email: singleEnrollee.value.student_contact_info.contact.personal_email_address,
      lsu_email: singleEnrollee.value.student_contact_info.contact.lsu_email_address
    }
  }).then((response) => {
    // console.log(response);
    editStatus(id)
    router.push("/enrollment/admin/dashboard/");
    spinner.value = false
  })
  }
}


// const directDeleteItem = async (id) => {
//   await $fetch(
//     endpoint.value + "/api/admissions/" + id + "/delete/",
//     {
//       method: "DELETE",
//       headers: {
//         Authorization: userStore.user.token,
//         "Content-Type": "application/json",
//       },
//     }
//   )
//     .then((response) => {
//       console.log("response", response);
//       // router.go();
//       toggleConfirmDelete.value = !toggleConfirmDelete.value;
//     });
// }

</script>

<template>
<div class="lg:overflow-x-hidden">
  <div class="flex min-h-screen">
    <!-- <div
        class="pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"
        v-show="toggleSideBarMenu"
      >
        <RegistrarMenuBar />
      </div> -->
    <div class="w-full">
      <div class="bg-green-800">
        <div class="lg:flex items-center mx-auto justify-between py-2">
          <div class="lg:flex items-center text-white gap-1 lg:px-1">
            <div class="lg:p-0 pt-0.5 pb-3 mx-3">
              <img class="rounded-full w-10"
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" />
            </div>
            <!-- <div @click="toggleSideBarMenu = !toggleSideBarMenu" class="w-10 px-1.5">
                <i
                  class="fa text-3xl text-white"
                  :class="toggleSideBarMenu ? 'fa-caret-left' : 'fa-bars'"
                  aria-hidden="true"
                ></i>
              </div> -->
            <div class="flex py-2 items-center lg:border-none border-t-2 border-white justify-center">
              <i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i>
              <h1 class="text-sm pt-1">
                {{ userStore.user.email }}
              </h1>
            </div>
          </div>
          <button @click="logOut" class="flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 hover:text-green-900 hover:bg-white text-white rounded-xl">
            <i class="fa fa-sign-out text-xl"></i>
            <h1 class="text-xs p-1.5">Log Out</h1>
          </button>
        </div>
      </div>
      <div class="px-3 pt-5">
        <div class="lg:flex items-center mb-5">
          <!-- <div class="w-full">
            <div class="lg:flex items-center block lg:text-left text-center" v-for="(j, i) in filtersBtn" :key="i">
              <label class="text-xs mr-4 lg:mb-0 mb-2 block lg:flex font-bold text-green-900">
                {{ j.category_title }} :
              </label>
              <button v-for="(n, i) in j.list" :key="i"
                class="bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs">
                {{ n }}
              </button>
            </div>
          </div> -->
          <div class="w-full">
            <div class="lg:flex items-center block lg:text-left text-center" v-for="(j, i) in filtersBtn" :key="i">
              <!-- <label class="text-xs mr-4 lg:mb-0 mb-2 block font-bold text-green-900">
                <span class="block">Total Enrollees : {{ totalEnrollees }} </span>
                <span class="block" :class="totalEnrolleesPerCollege === 0 ? 'hidden':''">
                  Total {{ totalIndicator }} Enrollees : {{ totalEnrolleesPerCollege }}
                </span>
              </label> -->
              <a
              href="/enrollment/admin/dashboard/new-first-years"
                class="bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs">
                New Freshmen
            </a>
              <a
              href="/enrollment/admin/dashboard/transferees"
                class="bg-blue-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-blue-900 border-2 border-blue-900 uppercase text-xs">
                Transferees
              </a>
             
              <a
              href="/enrollment/admin/dashboard/second-degree-students"
                class="bg-yellow-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-pink-900 border-2 border-pink-900 uppercase text-xs">
                Second Degree Holder
              </a>

              <a
              href="/enrollment/admin/dashboard"
                class="bg-pink-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-pink-900 border-2 border-pink-900 uppercase text-xs">
                Continuing
              </a>
            </div>
          </div>
          <div class="w-full flex items-center lg:mt-0 mt-5">
            <input 
              v-model="searchText" 
              type="text" 
              class="shadow-lg search w-full border border-b-4 
                border-green-800 h-8 rounded-lg" 
              placeholder="Search Tracking ID or LSU ID Number then press Enter" 
              @change="filterSearch()" />
          </div>
        </div>
        <!-- <div class="text-center w-11/12 mx-auto my-10">
          {{ searchText }}
        </div> -->
        <div class="mx-auto w-fit my-20" v-if="spinner">
          <p class="text-base text-green-900 font-bold mb-4">Please wait ... </p>
          <i class="fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"></i>
        </div>
        <div class="w-5/12 h-4/6 bg-white border  z-10 shadow-2xl rounded-lg px-5 py-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-if="displaySingleEntryToggle">
          <div class="">
            <div @click="displaySingleEntryToggle = !displaySingleEntryToggle" class="w-fit mr-0 ml-auto bg-red-900 text-white rounded-full px-5 cursor-pointer">close</div>
          </div>
         <p> {{ singleEnrollee.tracking_id }}</p>
          <p>  {{ singleEnrollee.student_lsu_id_number }}</p>
          <p>  {{ singleEnrollee.lastname }}</p>
          <p>  {{ singleEnrollee.firstname }}</p>
          <p>  {{ singleEnrollee.middlename }}</p>
          <p>  {{ singleEnrollee.extension_or_suffix_name }}</p>
          <p>  {{ singleEnrollee.birth_sex }}</p>
          <p>  {{ singleEnrollee.birth_date }}</p>
          <p>  {{ singleEnrollee.citizenship }}</p>
          <p>  {{ singleEnrollee.college }}</p>
          <p>  {{ singleEnrollee.program }}</p>
          <p>  {{ singleEnrollee.contact_primary_number }}</p>
          <p>  {{ singleEnrollee.contact_alternate_number }}</p>
          <p>  {{ singleEnrollee.contact_personal_email_address }}</p>
          <p>  {{ singleEnrollee.contact_lsu_email_address }}</p>
          <p>  {{ singleEnrollee.last_term_enrolled }}</p>
          <p>  {{ singleEnrollee.last_academic_year_enrolled }}</p>
          <p>  {{ singleEnrollee.media_release_consent }}</p>
          <p>  {{ singleEnrollee.has_health_condition }}</p>
          <p>  {{ singleEnrollee.hereby_certification }}</p>
          <p>  {{ singleEnrollee.shiftee_placement.details }}</p>
          <p>  {{ singleEnrollee.shiftee_placement.department }}</p>
          <p>  {{ singleEnrollee.shiftee_placement.recommendation_status }}</p>
          <p>  {{ singleEnrollee.shiftee_placement.accepting_college }}</p>
          <p>  {{ singleEnrollee.shiftee_placement.approval_status }}</p>

        </div>
        <div v-if="tableDisplay">
          <div class="w-full">
            <div class="">
              <div class="shadow mx-auto text-xs">
                <div class="">
                  <div class="lg:flex hidden header w-full p-2 bg-pink-900 text-white items-center shadow-lg">
                    <ul class="flex items-center text-center justify-between w-full lg:whitespace-nowrap">
                      <!-- <li class=" lg:w-14">No.</li> -->
                      <li class=" lg:w-1/12">Tracking ID</li>
                      <li class=" lg:w-1/12">LSU ID</li>
                      <li class=" lg:w-2/12 ">Full Name</li>
                      <li class=" lg:w-2/12  ">Status <br>(Continuing /Shiftee/ Returnee)</li>
                      <li class=" lg:w-4/12 ">Program</li>
                      <li class="text-center lg:w-7/12">Status</li>
                      <li class="px-1 lg:w-1/12 text-center">Action</li>
                    </ul>
                  </div>
                  <div class="w-full" v-if="bookingAppointmentListFilter.length > 0">
                    <ul
                      class="lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative hover:bg-gray-200"
                      v-for="(b, i) in _.orderBy(itemsLoaded, 'created_at', 'asc')" :key="i">
                      <!-- <li class="px-2 font-bold text-xs text-green-800 lg:w-14">{{ i + 1 }}</li> -->
                      <li class="lg:px-2 font-bold text-xs text-green-800 lg:w-1/12 uppercase">
                        {{ b.tracking_id }}
                      </li>
                      <li class="lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap text-center uppercase">
                        {{ b.student_lsu_id_number }}
                      </li>
                      <li class="lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase text-center">
                        {{ b.firstname }}  {{ b.lastname }}
                      </li>

                      <li class="lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase text-center">
                        <div v-if="b.shiftee_student.is_student_shiftee === 'yes'">Shiftee</div>
                        <div v-if="b.returnee_student.is_student_returnee === 'yes'">Returnee</div>
                        <div v-else>Continuing</div>
                      </li>

                      <li class="lg:px-1 font-bold text-xs text-green-800 lg:w-4/12  uppercase text-center">
                        {{ b.college }} | {{ b.program }}
                      </li>

                      <!-- <li class="lg:px-1 font-bold text-xs text-green-800 lg:w-4/12  uppercase text-center">
                        {{ b.birth_sex }} | {{ b.birth_date }} | {{ b.citizenship }}
                      </li> -->


                      <li class="flex font-bold text-xs text-green-800 lg:w-7/12 text-center">
                        <div class="relative w-full lg:py-2 py-1 block" v-for="(j, i) in b.enrollment_tracking_status"
                          :key="i">
                          <div 
                            class="flex lg:items-center lg:h-fit h-0 w-3/12 lg:ml-4 relative"
                            :class=" [i === 3 ? 'w-fit' : 'lg:w-full']"
                            >
                            <p class="text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold"
                              :class="
                                [j.status === 'yes' ? 'bg-green-900 text-white' : ''],
                                [j.status === 'no' ? 'bg-red-700 text-white' : ''],
                                [j.status === '' ? 'bg-gray-300 text-gray-200' : ''],
                                [j.status === 'ongoing' ? 'bg-blue-800 text-white' : ''],
                                [i === 3 ? 'ml-0' : '']
                              ">
                              {{ i + 1 }}
                            </p>
                            <div
                              class="lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden"
                              :class="
                                [j.status === 'yes' ? 'bg-green-900 text-white' : ''],
                                [j.status === 'no' ? 'bg-red-700 text-white' : ''],
                                [j.status === '' ? 'bg-gray-300 text-gray-200' : ''],
                                [j.status === 'ongoing' ? 'bg-blue-800 text-white' : ''],
                                [i === 3 ? 'hidden' : 'lg:w-full w-5']
                              ">
                            </div>
                          </div>
                          <div class="lg:static lg:text-center lg:w-auto w-full" :class="i === 0 ? '' : ''">
                            <div class="capitalize lg:w-fit mx-auto text-xs 
                             py-1 lg:py-0" 
                              :class="
                                [j.status === 'yes' ? ' text-white' : ''],
                                [j.status === 'no' ? ' text-white' : ''],
                                [j.status === '' ? ' text-gray-200' : ''],
                                [j.status === 'ongoing' ? 'text-white' : ''],
                                [i === 3 ? 'lg:-mt-5 lg:ml-12' : 'lg:-mt-2']
                              ">
                            <div class="lg:flex hidden"
                              :class="
                                [j.status === 'yes' ? 'text-green-900 ' : ''],
                                [j.status === 'no' ? 'text-red-700 ' : ''],
                                [j.status === '' ? 'text-gray-300 ' : ''],
                                [j.status === 'ongoing' ? 'text-blue-800 ' : ''],
                                [i === 3 ? 'lg:-mt-5' : 'lg:-mt-2']">
                              <span>{{ j.track_name }}</span>
                            </div>
                            <div class="lg:hidden flex pl-7"
                              :class="
                                [j.status === 'yes' ? 'bg-green-900 text-white' : ''],
                                [j.status === 'no' ? 'bg-red-700 text-white' : ''],
                                [j.status === '' ? 'bg-gray-300 text-gray-200' : ''],
                                [j.status === 'ongoing' ? 'bg-blue-800 text-white' : ''],
                                [i === 3 ? 'lg:-mt-5 lg:ml-12' : 'lg:-mt-2']">
                              <span v-if="j.track_name === 'admissions'">
                                <i class="fa fa-address-card"></i>
                              </span>
                              <span v-if="j.track_name === 'advising'">
                                <i class="	fa fa-calendar-check"></i>
                              </span>
                              <span v-if="j.track_name === 'accounting'">
                                <i class="fa fa-money-bill-alt"></i>
                              </span>
                              <span v-if="j.track_name === 'evaluation' || j.track_name === 'verification'">
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                          </div>
                          </div>
                        </div>
                      </li>

                      <li
                        class="flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2">
                        <div class="w-auto px-1 flex gap-10">
                          <!-- <div 
                            v-if="
                              userStore.user.email === 'jorenleeluna24@gmail.com' ||
                              userStore.user.email === 'jorenlee.luna@lsu.edu.ph' ||
                              userStore.user.email === 'saodirector@lsu.edu.ph' ||
                              userStore.user.email === 'ascdirector@lsu.edu.ph' ||
                              userStore.user.email === 'admissions@lsu.edu.ph' ||
                              userStore.user.email === 'scholarships@lsu.edu.ph' ||
                              userStore.user.email === 'katerijunine.tabernero@lsu.edu.ph' ||
                              userStore.user.email === 'sherryl.origenes@lsu.edu.ph' ||
                              userStore.user.email === 'lourdes.niebla@lsu.edu.ph'
                            ">
                            <button @click="evaluationDone(b.id)" class="cursor-pointer hover:bg-white hover:text-green-600 border-green-600 border-2 bg-green-600 text-white uppercase font-bold px-1 rounded-lg" >
                              <i class="fa fa-check text-lg font-bold"></i>
                            </button>
                          </div>  -->
                          <button @click="displaySingleEntry(b.id)" class="cursor-pointer hover:bg-white hover:text-green-600 border-green-600 border-2 bg-green-600 text-white uppercase font-bold px-1 rounded-lg" >
                             Details
                            </button>
                          
                          <div class="">
                            <button @click="goToEdit(b.id)">
                              <i class="fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl"
                                aria-hidden="true"></i>
                            </button>
                          </div>
                          <!-- <div class="" 
                          v-if="
                            userStore.user.email === 'saodirector@lsu.edu.ph' ||
                            userStore.user.email === 'ascdirector@lsu.edu.ph' ||
                            userStore.user.email === 'admissions@lsu.edu.ph' ||
                            userStore.user.email === 'scholarships@lsu.edu.ph' ||
                            userStore.user.email === 'jorenleeluna24@gmail.com' ||
                            userStore.user.email === 'jorenlee.luna@lsu.edu.ph'
                          ">
                            <button @click="toggleDeleteBtn(b.id)" class="cursor-pointer">
                              <i class="fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl"
                                aria-hidden="true"></i>
                            </button>
                          </div> -->

                          <!--<div v-if="userStore.user.email === 'jorenleeluna24@gmail.com'">
                            <button @click="directDeleteItem(b.id)" class="cursor-pointer bg-red-950 text-white uppercase font-bold px-3 py-1 rounded-lg" >
                              X
                            </button>
                          </div>-->
                        </div>
                      </li>
                    </ul>
                    <div
                      class="px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      v-show="toggleConfirmDelete">
                      <div class="my-6">Are you sure you want to Delete?</div>
                      <div class="flex gap-5 mx-auto w-fit my-5">
                        <span class="bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer"
                          @click="deleteItem">Yes</span>
                        <span class="bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer"
                          @click="toggleDeleteBtn">Cancel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="bookingAppointmentListFilter.length > initialDisplay"
                class="flex items-center justify-center lg:w-[600px] w-fit mx-auto font-bold text-sm rounded-lg my-5">
                <div @click="prev"
                  class="mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950">
                  <i class="fa fa-angle-left px-2" aria-hidden="true"></i>
                  Prev
                </div>
                <ul class="border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2">
                  <li v-for="(selectedPage, i) in numberOfPages"
                    class=" hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg"
                    :class="currentPageNumber === selectedPage ? 'bg-green-900 text-white':''"
                    :key="i" @click="pagination(selectedPage)">
                    {{ selectedPage }}
                  </li>
                </ul>
                <div @click="next"
                  class="mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg">
                  Next
                  <i class="fa fa-angle-right px-2" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <DashboardFooter />
</div>
</template>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 5px;
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