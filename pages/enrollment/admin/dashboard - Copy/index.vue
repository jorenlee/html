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
  import courseOrProgramJSON from "./courseProgram.json";
  const courseOrProgramData = ref(courseOrProgramJSON);
  const router = useRouter();
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  let bookingAppointmentListFilter = ref(0);
  const spinner = ref(false);
  const updatingStatus = ref(false);
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
  let newStudentsCounter = ref(0);
  let continuingStudentsCounter = ref(0);
  let transfereesStudentsCounter = ref(0);
  let secondDegreeStudentsCounter = ref(0);
  let toggleTrackingIDColumn = ref(false)


  let filterSearch = async () => {
    if (searchText.value === '') {
      bookingAppointmentListFilter.value = enrolleesList.value
      pagination(1)
    } 
    else {
      startNum.value = 0  
      enrolleesList.value = await $fetch(endpoint.value + "/api/admissions-first-sem/list/").catch((error) => error.data);
      bookingAppointmentListFilter.value = enrolleesList.value.filter(function(params) {
        return searchText.value === (params.tracking_id).toUpperCase() || 
        searchText.value === (params.student_lsu_id_number).toUpperCase() || 
        searchText.value === (params.lastname).toLowerCase() || 
        searchText.value === (params.firstname).toLowerCase()
      })
    }
  }

  onMounted(async () => {
    let newStudents = await $fetch(endpoint.value + "/api/admissions-first-sem/new-student/list/").catch((error) => error.data);
    let continuingStudents = await $fetch(endpoint.value + "/api/admissions-first-sem/list/").catch((error) => error.data);
    let transfereesStudents = await $fetch(endpoint.value + "/api/admissions-first-sem/transferee/list/").catch((error) => error.data);
    let secondDegreeStudents = await $fetch(endpoint.value + "/api/admissions-first-sem/second-degree-holder/list/").catch((error) => error.data);

    totalEnrollees.value = (continuingStudents.length + newStudents.length + transfereesStudents.length + secondDegreeStudents.length) || 0
    newStudentsCounter.value = newStudents.length
    continuingStudentsCounter.value = continuingStudents.length
    transfereesStudentsCounter.value = transfereesStudents.length
    secondDegreeStudentsCounter.value = secondDegreeStudents.length

    let currentList = await $fetch(endpoint.value + "/api/admissions-first-sem/list/").catch((error) => error.data);
    enrolleesList.value = currentList
    // totalEnrollees.value = currentList.length || 0
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
        userStore.user.email === 'theodoralareyna.villanueva@lsu.edu.ph' ||
        userStore.user.email === 'charmfemae.mendoza@lsu.edu.ph' ||
        userStore.user.email === 'markanthony.lumayag@lsu.edu.ph' ||
        userStore.user.email === 'sandramarie.haganus@lsu.edu.ph' ||
        userStore.user.email === 'miashaina.dumasig@lsu.edu.ph' ||
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
        userStore.user.email === 'michaeljohn.puertogalera@lsu.edu.ph' ||
        userStore.user.email === 'giovanni.morales@lsu.edu.ph' ||
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
        userStore.user.email === 'kenneth.yagong@lsu.edu.ph' ||
        userStore.user.email === 'cte@lsu.edu.ph'
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
        userStore.user.email === 'arlene.apao@lsu.edu.ph' ||
        userStore.user.email === 'con@lsu.edu.ph'
      )
    ) {
      // console.log(enrolleesList.value)
      let filter = enrolleesList.value.filter(function (params) {
        return params.college === 'CON'
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
        userStore.user.email === 'karen.linganay@lsu.edu.ph' ||
        userStore.user.email === 'cthm@lsu.edu.ph'
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
  });
  


  const defaultRemarksAdmissions = ref([
    'Please proceed to CAS at SJ Room 111 for course advising. Thank you.', 
    'Please proceed to CCJE at SJ Room 112 for course advising. Thank you.',
    'Please proceed to CTE at SJ Room 113 for course advising. Thank you.',
    'Please proceed to CON at SJ Room 115 for course advising. Thank you.',
    'Please proceed to CCSEA at SJ Room 211 for course advising. Thank you.',
    'Please proceed to CTHM at SJ Room 213 for course advising. Thank you.',
    'Please proceed to CBA at SJ Room 216 for course advising. Thank you.',
  ])

  let itemsLoaded = computed(() => {
    return bookingAppointmentListFilter.value.slice(startNum.value, numberOfItems.value);
  });
  const prev = () => {
    if (currentPageNumber.value > 1) {
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
    if (currentPageNumber.value < numberOfPages) {
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
  const logOut = () => {
    router.push("/enrollment");
    userStore.removeToken();
  }
  
  const toggleDeleteBtn = (id) => {
    toggleConfirmDelete.value = !toggleConfirmDelete.value;
    idToBeDeleted.value = id;
  }

  const deleteItem = async () => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/" + idToBeDeleted.value + "/delete/", {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      }
    })
    .then(async(response) => {
      console.log("response", response);
      toggleConfirmDelete.value = !toggleConfirmDelete.value;
      router.go();
    });
  }

  const directDelete = async (id) => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/" + id + "/delete/", {
      method: "DELETE",
      headers: {
        Authorization: userStore.user.token,
        "Content-Type": "application/json",
      },
    })
    .then(async(response) => {
      searchText.value = '';
      console.log("response", response);
    });
  }
  let singleEnrollee = ref(null)
  let displaySingleEntryToggle = ref(false)
  let currentIDSelected = ref(null)

  const displaySingleEntry = async (id) => {
    singleEnrollee.value = await $fetch(endpoint.value + "/api/admissions-first-sem/" + id + "/").catch((error) => error.data)
    // displaySingleEntryToggle.value = !displaySingleEntryToggle.value;
    currentIDSelected.value = id
    // console.log(singleEnrollee.value)
    // console.log(singleEnrollee.value.shiftee_student.is_student_shiftee)
    window.scrollTo(0, 0)
    displaySingleEntryToggle.value = false;
    verificationDone()
  }



  const courseSelection = ref('Select Course Program');
  const courseSelectionShiftee = ref('Select Course Program');

  let assignCollege = () => {
    singleEnrollee.value.college = courseSelection.value.college
    singleEnrollee.value.program = courseSelection.value.program
  }

  let assignCollegeShiftee = () => {
    singleEnrollee.value.shiftee_student.college = courseSelectionShiftee.value.college || ''
    singleEnrollee.value.shiftee_student.program = courseSelectionShiftee.value.program || ''
  }

  const editStatus = async () => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/" + singleEnrollee.value.id + "/edit/", {
      method: "PUT",
      body: singleEnrollee.value,
    })
    .then(async () => {
      spinner.value = true;
      enrolleesList.value = await $fetch(endpoint.value + "/api/admissions-first-sem/list/")
      .then((response) => {
        displaySingleEntryToggle.value = !displaySingleEntryToggle.value;
        bookingAppointmentListFilter.value = response || 0
        // bookingAppointmentListFilter.value = enrolleesList.value || 0
        spinner.value = false;
        searchText.value = '';
      }).catch((error) => error.data);
    })
  }


  const updateStatus = async () => {
    await $fetch(endpoint.value + "/api/admissions-first-sem/" + singleEnrollee.value.id + "/edit/", {
      method: "PUT",
      body: singleEnrollee.value,
    })
    .then(async () => {
      updatingStatus.value = true;
      enrolleesList.value = await $fetch(endpoint.value + "/api/admissions-first-sem/list/")
      .then((response) => {
        displaySingleEntryToggle.value = !displaySingleEntryToggle.value;
        bookingAppointmentListFilter.value = response || 0
        // bookingAppointmentListFilter.value = enrolleesList.value || 0
        updatingStatus.value = false;
        searchText.value = '';
      }).catch((error) => error.data);
    })
  }
  

  const admissionsDone = async () => {
    spinner.value = true;
    singleEnrollee.value.enrollment_tracking_status[1] = {
      track_name: 'advising',
      label: 'Per Colleges',
      details: 'Course Subjects ',
      date_checked: '',
      check_by: '',
      status: 'ongoing',
      remarks: ''
    }
    await $fetch(endpoint.value + "/api/admissions-first-sem/submit-new-student-to-gmail-admissions-done/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: {
        tracking_id: singleEnrollee.value.tracking_id,
        student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
        firstname: singleEnrollee.value.firstname,
        email: singleEnrollee.value.contact_personal_email_address,
        lsu_email: singleEnrollee.value.contact_lsu_email_address
      }
    }).then((response) => {
      // console.log(response);
      editStatus()
    })
  }

  const advisingDone = async () => {
    spinner.value = true;
    singleEnrollee.value.enrollment_tracking_status[2] = {
      track_name: 'accounting',
      label: 'Accounting',
      details: 'Enrollment Fee',
      date_checked: '',
      check_by: '',
      status: 'ongoing',
      remarks: ''
    }
    await $fetch(endpoint.value + "/api/admissions-first-sem/submit-new-student-to-gmail-advising-done/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: {
        tracking_id: singleEnrollee.value.tracking_id,
        student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
        firstname: singleEnrollee.value.firstname,
        email: singleEnrollee.value.contact_personal_email_address,
        lsu_email: singleEnrollee.value.contact_lsu_email_address
      }
    }).then((response) => {
      // console.log(response);
      editStatus()
    })
  }

  const accountingDone = async () => {
    spinner.value = true;
    singleEnrollee.value.enrollment_tracking_status[3] = {
      track_name: 'validation',
      label: 'CITS or NPCC',
      details: 'Student Portal & LSU Gmail Activation',
      date_checked: '',
      check_by: '',
      status: 'ongoing',
      remarks: ''
    }
    await $fetch(endpoint.value + "/api/admissions-first-sem/submit-new-student-to-gmail-accounting-done/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: {
        tracking_id: singleEnrollee.value.tracking_id,
        student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
        firstname: singleEnrollee.value.firstname,
        email: singleEnrollee.value.contact_personal_email_address,
        lsu_email: singleEnrollee.value.contact_lsu_email_address
      }
    }).then((response) => {
      // console.log(response);
      editStatus()
    })
  }
  
  const verificationDone = async () => {
    spinner.value = true
    singleEnrollee.value.enrollment_tracking_status[0] = {
      track_name: 'admissions',
      label: 'Admissions',
      details: 'Student Detailed Information',
      date_checked: '2024-08-07',
      check_by: '',
      status: 'yes',
      remarks: ''
    }
    singleEnrollee.value.enrollment_tracking_status[1] = {
      track_name: 'advising',
      label: 'Per Colleges',
      details: 'Course Subjects ',
      date_checked: '2024-08-07',
      check_by: '',
      status: 'yes',
      remarks: ''
    }
    singleEnrollee.value.enrollment_tracking_status[2] = {
      track_name: 'accounting',
      label: 'Accounting',
      details: 'Enrollment Fee',
      date_checked: '2024-08-07',
      check_by: '',
      status: 'yes',
      remarks: ''
    }
    singleEnrollee.value.enrollment_tracking_status[3] = {
      track_name: 'validation',
      label: 'CITS or NPCC',
      details: 'Student Portal & LSU Gmail Activation',
      date_checked: '2024-08-07',
      check_by: '',
      status: 'yes',
      remarks: ''
    }
    await $fetch(endpoint.value + "/api/admissions-first-sem/submit-new-student-to-gmail-evaluation-done/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        tracking_id: singleEnrollee.value.tracking_id,
        student_lsu_id_number: singleEnrollee.value.student_lsu_id_number,
        firstname: singleEnrollee.value.firstname,
        email: singleEnrollee.value.contact_personal_email_address,
        lsu_email: singleEnrollee.value.contact_lsu_email_address
      }
    }).then((response) => {
      console.log(response);
      editStatus()
    }) 
  }
</script>
<template>
  <div class="lg:overflow-x-hidden">
    <div class="flex min-h-screen">
      <div class="w-full">
        <div class="bg-green-800">
          <div class="lg:flex items-center mx-auto justify-between py-2">
            <div class="lg:flex items-center text-white gap-1 lg:px-1">
              <div class="lg:p-0 pt-0.5 pb-3 mx-3">
                <img class="rounded-full w-10" src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" />
              </div>
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
            <div class="w-full lg:flex">
              <div class="font-bold text-center lg:mb-0 mb-4 flex justify-center whitespace-nowrap">Total: {{ totalEnrollees }} <span class="lg:flex hidden ml-2">|</span></div>
              <div class="lg:flex items-center block lg:text-left text-center">
                <a href="/enrollment/admin/dashboard/new-first-years" 
                class="lg:flex lg:mb-0 mb-3 block bg-green-600 text-white rounded-lg lg:mx-2 py-1 px-3 hover:bg-white hover:text-green-600 border-2 border-green-600 uppercase text-xs"> 
                New First Years <span class="font-bold pl-1">({{ newStudentsCounter }})</span></a>
                <a href="/enrollment/admin/dashboard/transferees" 
                class="lg:flex lg:mb-0 mb-3 block bg-green-700 text-white rounded-lg lg:mx-2 py-1 px-3 hover:bg-white hover:text-green-700 border-2 border-green-700 uppercase text-xs"> 
                Transferees <span class="font-bold pl-1">({{ transfereesStudentsCounter }})</span></a>
                <a href="/enrollment/admin/dashboard/second-degree-students" 
                class="lg:flex lg:mb-0 mb-3 block bg-green-800 text-white rounded-lg lg:mx-2 py-1 px-3 hover:bg-white hover:text-green-800 border-2 border-green-800 uppercase text-xs"> 
                Second Degree Holders <span class="font-bold pl-1">({{ secondDegreeStudentsCounter }})</span></a>
                <a href="/enrollment/admin/dashboard" 
                class="lg:flex lg:mb-0 mb-3 block bg-green-950 text-white rounded-lg lg:mx-2 py-1 px-3 hover:bg-white hover:text-green-950 border-2 border-green-950 uppercase text-xs"> 
                Continuing <span class="font-bold pl-1">({{ continuingStudentsCounter }})</span></a>
              </div>
            </div>
            <div class="lg:w-6/12 flex items-center lg:mt-0 mt-5">
              <input v-model="searchText" type="text" class="shadow-lg search w-full border border-b-4 
                border-green-800 h-8 rounded-lg" placeholder="Search Name or LSU ID or Tracking ID then press Enter" @change="filterSearch()" />
            </div>
          </div>
        
          <div class="w-full h-[2000px] bg-white z-10  px-5 absolute top-0 left-1/2 transform -translate-x-1/2"
           v-if="displaySingleEntryToggle">
            <div class="absolute flex  w-full right-0">

              <div @click="displaySingleEntryToggle = !displaySingleEntryToggle" 
              class="w-fit  ml-auto bg-red-900 text-white rounded-full px-5 cursor-pointer uppercase py-1.5 -mb-10 h-fit mt-4 mr-5"> close </div>
            </div>
            <div class="font-bold text-green-900 uppercase px-10 justify-center flex text-center mx-auto w-full py-5">
                Student Details
              </div>









            <div class="mx-auto w-fit my-10" v-if="spinner">
            <p class="text-base text-green-900 font-bold mb-4">            
              <i class='fa fa-paper-plane mr-2'></i>
              Please wait, Sending to Email ...
            </p>

          </div>

          <div class="mx-auto w-fit my-10" v-if="updatingStatus">
            <p class="text-base text-green-900 font-bold mb-4">            
              <i class="fa fa-hourglass-2"></i>
              Updating ...
            </p>

          </div>




            <div class="flex bg-white border-t-2">

                
                <div class="grid lg:grid-cols-4 grid-cols-2 pt-4 pb-3 lg:gap-10 gap-3 bg-white w-full">
                  <div class="relative w-full lg:mb-0 mb-3" 
                    v-for="(j, i) in singleEnrollee.enrollment_tracking_status"
                    :key="i">
                    <div class="lg:items-center w-full relative">
                      <p class="lg:px-3 px-4 lg:py-2 lg:mx-0 ml-0 h-fit w-full text-center font-bold" 
                      :class="
                        [j.status === 'yes' ? 'bg-green-900 text-white' : ''],
                        [j.status === 'no' ? 'bg-red-700 text-white' : ''],
                        [j.status === '' ? 'bg-black text-white' : ''],
                        [j.status === 'ongoing' ? 'bg-blue-800 text-white' : '']
                      ">
                      <span>
                        {{ i + 1 }} | <span class="uppercase"> {{ j.track_name }}</span>
                      </span>


                      <span class="block text-[10px]">  {{ j.details }}</span>
                      </p>
    
                    </div>

                    <div class="px-3 text-center shadow" 
                    
                    :class="i === 0 ? '' : ''">

    
    
    
                      <div 
                        v-if="(
                          userStore.user.email === 'jorenleeluna24@gmail.com' ||
                          userStore.user.email === 'saodirector@lsu.edu.ph' ||
                          userStore.user.email === 'ascdirector@lsu.edu.ph' ||
                          userStore.user.email === 'admissions@lsu.edu.ph' ||
                          userStore.user.email === 'scholarships@lsu.edu.ph' ||
                          userStore.user.email === 'katerijunine.tabernero@lsu.edu.ph' ||
                          userStore.user.email === 'sherryl.origenes@lsu.edu.ph' ||
                          userStore.user.email === 'lourdes.niebla@lsu.edu.ph' ||
                          userStore.user.email === 'lindakj11196@gmail.com' ||
                          userStore.user.email === 'jayharold.reazol@lsu.edu.ph'
                        )
                        && 
                        j.track_name === 'admissions'">
                            <div>




                              <div class="lg:flex gap-3">
                                <div class="text-xs capitalize w-full mt-3">
                                  <label 
                                  :class="
                                    [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                                    [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                                    [j.status === '' ? 'border-black text-black' : ''],
                                    [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                                  "
                                  
                                  class="text-left mb-1 block font-bold capitalize pr-3">
                                    status
                                    </label>
                                    <select
                                  :class="
                                    [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                                    [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                                    [j.status === '' ? 'border-black text-black' : ''],
                                    [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                                  "
                                    class="block w-full px-2 py-1 capitalize shadow-lg rounded-sm text-xs -ml-1"
                                    v-model="j.status">
                                    <option value="" disabled selected hidden>status
                                    </option>
                                    <option value="yes">done</option>
                                    <option value="ongoing">ongoing</option>
                                    <option value="no">pending</option>
                                    </select>
                                    </div>
                          <div class="text-xs capitalize w-full mt-3"
                            >
                            <label
                            :class="
                              [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                              [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                              [j.status === '' ? 'border-black text-black' : ''],
                              [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                            "
                            class="text-left mb-1 block font-bold capitalize pr-3">
                              date checked
                            </label>
                            <input v-model="j.date_checked"
                            type="date"
                            :class="
                              [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                              [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                              [j.status === '' ? 'border-black text-black' : ''],
                              [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                            "
                              class="block w-full px-2 py-1 border  shadow-lg rounded-sm text-xs -ml-1"
                              :placeholder="j.date_checked" />
                          </div>

                              </div>



                          <div class="text-xs capitalize mt-2 gap-3"
                            >
                            <label
                            :class="
                              [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                              [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                              [j.status === '' ? 'border-black text-black' : ''],
                              [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                            "
                            
                            class="text-left mb-1 block font-bold capitalize pr-3">
                              check by
                            </label>
                            <input v-model="j.check_by"
                            :class="
                              [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                              [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                              [j.status === '' ? 'border-black text-black' : ''],
                              [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                            "
                              class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                              :placeholder="j.check_by" />
                          </div>
        
                          <div class="text-xs capitalize mt-2 pb-3 gap-3">
                            <label 
                            :class="
                              [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                              [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                              [j.status === '' ? 'border-black text-black' : ''],
                              [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                            "
                            class="text-left mb-1 block font-bold capitalize pr-3">
                              Remarks
                            </label>
                            <input v-model="j.remarks"
                              :class="
                                [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                                [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                                [j.status === '' ? 'border-black text-black' : ''],
                                [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                              "
                              class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                              :placeholder="j.remarks" />
                          </div>

                            </div>

                      </div>

                      
    
                      <div 
                        v-if="(
                          userStore.user.email === 'jorenleeluna24@gmail.com' ||
                          userStore.user.email === 'admissions@lsu.edu.ph' ||
                          userStore.user.email === 'jorenlee.luna@lsu.edu.ph' ||
                          userStore.user.email === 'jessel.abarca@lsu.edu.ph' ||
                          userStore.user.email === 'ramel.recentes@lsu.edu.ph' ||
                          userStore.user.email === 'markkrisli.delapena@lsu.edu.ph' ||
                          userStore.user.email === 'grace.dolloso@lsu.edu.ph' ||
                          userStore.user.email === 'ladyvi.tagailo@lsu.edu.ph' ||
                          userStore.user.email === 'earl.gangoso@lsu.edu.ph' ||
                          userStore.user.email === 'honimar.panganiban@lsu.edu.ph' ||
                          userStore.user.email === 'olaira.imbong@lsu.edu.ph' ||
                          userStore.user.email === 'anilou.dilao@lsu.edu.ph' ||
                          userStore.user.email === 'marvel.deromol@lsu.edu.ph' ||
                          userStore.user.email === 'nizel.apas@lsu.edu.ph' ||
                          userStore.user.email === 'noel.alamin@lsu.edu.ph' ||
                          userStore.user.email === 'emma.suana@lsu.edu.ph' ||
                          userStore.user.email === 'jenel.cruz@lsu.edu.ph' ||
                          userStore.user.email === 'johnmark.saldivar@lsu.edu.ph' ||
                          userStore.user.email === 'kenneth.yagong@lsu.edu.ph' ||
                          userStore.user.email === 'lowelle.pacot@lsu.edu.ph' ||
                          userStore.user.email === 'jennifer.aguanta@lsu.edu.ph' ||
                          userStore.user.email === 'jaysavelle.tubigon@lsu.edu.ph' ||
                          userStore.user.email === 'arlene.apao@lsu.edu.ph' ||
                          userStore.user.email === 'joed.layna@lsu.edu.ph' ||
                          userStore.user.email === 'michael.angelo.pagara@lsu.edu.ph' ||
                          userStore.user.email === 'karen.linganay@lsu.edu.ph' ||
                          userStore.user.email === 'estephanie.zamora@lsu.edu.ph'
                        )
                        && 
                        j.track_name === 'advising'"
                        
                        
                        >
                       
                       
                       
<div class="lg:flex gap-3">

  <div class="text-xs capitalize w-full mt-3">
                        <label
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3"
                        >
                          status
                        </label>
                        <select
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          v-model="j.status">
                          <option value="" disabled selected hidden>status
                          </option>
                          <option value="yes">done</option>
                          <option value="ongoing">ongoing</option>
                          <option value="no">pending</option>
                        </select>
                      </div>



                      <div class="text-xs capitalize w-full mt-3"
                      >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          date checked
                        </label>
                        <input v-model="j.date_checked"
                         type="date"
                          class="block w-full px-2 py-1 border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.date_checked" 
                          :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          />
                      </div>
  </div>






                      <div class="text-xs capitalize mt-2 gap-3"
                      >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          check by
                        </label>
                        <input v-model="j.check_by"
                          
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.check_by" />
                      </div>
    
                      <div class="text-xs capitalize mt-2 pb-3 gap-3"
                        >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          Remarks
                        </label>
                        <input v-model="j.remarks"
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.remarks" />
                      </div>
                      </div>
    
    
                      <div 
                        v-if="(
                        userStore.user.email === 'jorenleeluna24@gmail.com' ||       
                        userStore.user.email === 'admissions@lsu.edu.ph' ||      
                        userStore.user.email === 'cheryl.osorio@lsu.edu.ph'
                        )
                        && 
                        j.track_name === 'accounting'">



<div class="lg:flex gap-3">
  <div class="text-xs capitalize w-full mt-3">
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize pr-3">
                          status
                        </label>
                        <select
    
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
    
                          class="block w-full px-2 py-1 capitalize shadow-lg rounded-sm text-xs -ml-1"
                          v-model="j.status">
                          <option value="" disabled selected hidden>status
                          </option>
                          <option value="yes">done</option>
                          <option value="ongoing">ongoing</option>
                          <option value="no">pending</option>
                        </select>
                      </div>
                      <div class="text-xs capitalize w-full mt-3"
                        
                      
                      
                      >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          date checked
                        </label>
                        <input v-model="j.date_checked"
                          type="date"
                          class="block w-full px-2 py-1 border  shadow-lg rounded-sm text-xs -ml-1"
                          :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          :placeholder="j.date_checked" />
                      </div>
</div>
                      <div class="text-xs capitalize mt-2 gap-3"
                        
                      
                      
                      >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          check by
                        </label>
                        <input v-model="j.check_by"
                          
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.check_by" />
                      </div>
    
                      <div class="text-xs capitalize mt-2 pb-3 gap-3"
                      >
                        <label
                        
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          Remarks
                        </label>
                        <input v-model="j.remarks"
                          class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          :placeholder="j.remarks" />
                      </div>
                      </div>
    
    
    
                      <div 
                        v-if="(
                          userStore.user.email === 'jorenleeluna24@gmail.com' ||   
                          userStore.user.email === 'admissions@lsu.edu.ph' ||
                          userStore.user.email === 'cte.registrar@lsu.edu.ph' ||
                          userStore.user.email === 'onlinerequest@lsu.edu.ph' ||
                          userStore.user.email === 'ccsea.registrar@lsu.edu.ph' ||
                          userStore.user.email === 'cba.registrar@lsu.edu.ph' ||
                          userStore.user.email === 'patrick.obut@lsu.edu.ph' ||
                          userStore.user.email === 'maryeloise.pilvera@lsu.edu.ph' ||
                          userStore.user.email === 'johny14_gonzaga@lsu.edu.ph' ||
                          userStore.user.email === 'denzelroy.suarez@lsu.edu.ph' ||
                          userStore.user.email === 'jason.yap@lsu.edu.ph'
                        )
                        && 
                        j.track_name === 'validation'">


                       <div class="lg:flex gap-3">
                        <div class="text-xs capitalize w-full mt-3">
                        
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          status
                        </label>
                        <select
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"

                          v-model="j.status">
                          <option value="" disabled selected hidden>status
                          </option>
                          <option value="yes">done</option>
                          <option value="ongoing">ongoing</option>
                          <option value="no">pending</option>
                        </select>
                      </div>


                      <div class="text-xs capitalize w-full mt-3">
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          date checked
                        </label>
                        <input v-model="j.date_checked"
                          type="date"
    
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          class="block w-full px-2 py-1 border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.date_checked" />
                      </div>
                       </div>






                      <div class="text-xs capitalize mt-2 gap-3"
                        >
                        <label 
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          check by
                        </label>
                        <input v-model="j.check_by"
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.check_by" />
                      </div>
    
                      <div class="text-xs capitalize mt-2 pb-3 gap-3"
                        >
                        <label
                        
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                        class="text-left mb-1 block font-bold capitalize  pr-3">
                          Remarks
                        </label>
                        <input v-model="j.remarks"
    
                        :class="
                          [j.status === 'yes' ? 'border-green-900 text-green-900 ' : ''],
                          [j.status === 'no' ? 'border-red-700 text-red-700 ' : ''],
                          [j.status === '' ? 'border-black text-black' : ''],
                          [j.status === 'ongoing' ? 'border-blue-800 text-blue-800 ' : '']
                        "
                          class="block w-full px-2 py-1 capitalize border  shadow-lg rounded-sm text-xs -ml-1"
                          :placeholder="j.remarks" />
                      </div>
                      </div>
                    
                    </div>
    
                    <!-- {{ j }} use filter then check correspond object if has done -->
                  </div>
                </div>
    
    
            
                </div>

                <div class="justify-between flex gap-10 bg-white shadow-lg w-full border-t mt-5">
              <div class="justify-between flex w-full gap-5 py-2 px-3">
             
  
                <ul class="flex text-center gap-4">
            <li 
            v-if="
              // userStore.user.email === 'saodirector@lsu.edu.ph' ||
              // userStore.user.email === 'ascdirector@lsu.edu.ph' ||
              // userStore.user.email === 'scholarships@lsu.edu.ph' ||
              // userStore.user.email === 'katerijunine.tabernero@lsu.edu.ph' ||
              // userStore.user.email === 'sherryl.origenes@lsu.edu.ph' ||
              // userStore.user.email === 'lourdes_niebla@lsu.edu.ph' ||
              // userStore.user.email === 'lindakj11196@gmail.com' ||
              // userStore.user.email === 'jayharold.reazol@lsu.edu.ph' ||
              // userStore.user.email === 'cheryl.osorio@lsu.edu.ph' ||
              // userStore.user.email === 'johny14_gonzaga@lsu.edu.ph' ||
              // userStore.user.email === 'denzelroy.suarez@lsu.edu.ph' ||
              // userStore.user.email === 'jason.yap@lsu.edu.ph' ||
              userStore.user.email === 'jorenleeluna24@gmail.com' ||
              userStore.user.email === 'admissions@lsu.edu.ph'
            "
            @click="admissionsDone()"
              class="cursor-pointer border-2 border-green-800 rounded-lg hover:text-green-800 hover:bg-white bg-green-800 text-white font-bold px-5 py-2">
              Admission Confirm</li>

            <li 
              v-if="
                // userStore.user.email === 'jorenleeluna24@gmail.com' ||
                userStore.user.email === 'admissions@lsu.edu.ph' ||
                userStore.user.email === 'jessel.abarca@lsu.edu.ph' ||
                userStore.user.email === 'ramel.recentes@lsu.edu.ph' ||
                userStore.user.email === 'markkrisli.delapena@lsu.edu.ph' ||
                userStore.user.email === 'grace.dolloso@lsu.edu.ph' ||
                userStore.user.email === 'ladyvi.tagailo@lsu.edu.ph' ||
                userStore.user.email === 'earl.gangoso@lsu.edu.ph' ||
                userStore.user.email === 'honimar.panganiban@lsu.edu.ph' ||
                userStore.user.email === 'olaira.imbong@lsu.edu.ph' ||
                userStore.user.email === 'jorenlee.luna@lsu.edu.ph' ||
                userStore.user.email === 'anilou.dilao@lsu.edu.ph' ||
                userStore.user.email === 'marvel.deromol@lsu.edu.ph' ||
                userStore.user.email === 'nizel.apas@lsu.edu.ph' ||
                userStore.user.email === 'noel.alamin@lsu.edu.ph' ||
                userStore.user.email === 'emma.suana@lsu.edu.ph' ||
                userStore.user.email === 'jenel.cruz@lsu.edu.ph' ||
                userStore.user.email === 'johnmark.saldivar@lsu.edu.ph' ||
                userStore.user.email === 'kenneth.yagong@lsu.edu.ph' ||
                userStore.user.email === 'lowelle.pacot@lsu.edu.ph' ||
                userStore.user.email === 'jennifer.aguanta@lsu.edu.ph' ||
                userStore.user.email === 'jaysavelle.tubigon@lsu.edu.ph' ||
                userStore.user.email === 'arlene.apao@lsu.edu.ph' ||
                userStore.user.email === 'joed.layna@lsu.edu.ph' ||
                userStore.user.email === 'michael.angelo.pagara@lsu.edu.ph' ||
                userStore.user.email === 'karen.linganay@lsu.edu.ph' ||
                userStore.user.email === 'estephanie.zamora@lsu.edu.ph'

              "
            
            
            @click="advisingDone"
              class="cursor-pointer border-2 border-green-800 rounded-lg hover:text-green-800 hover:bg-white bg-green-800 text-white font-bold px-5 py-2">
              Advising Confirm</li>


              
            <li 
              v-if="
                // userStore.user.email === 'jorenleeluna24@gmail.com' ||
                userStore.user.email === 'admissions@lsu.edu.ph' ||
                userStore.user.email === 'cheryl.osorio@lsu.edu.ph'
              "
            
            
            @click="accountingDone"
              class="cursor-pointer border-2 border-green-800 rounded-lg hover:text-green-800 hover:bg-white bg-green-800 text-white font-bold px-5 py-2">
              Accounting Confirm</li>




            <li 
              v-if="
                userStore.user.email === 'jorenleeluna24@gmail.com' ||
                userStore.user.email === 'admissions@lsu.edu.ph' ||
                userStore.user.email === 'cte.registrar@lsu.edu.ph' ||
                userStore.user.email === 'onlinerequest@lsu.edu.ph' ||
                userStore.user.email === 'ccsea.registrar@lsu.edu.ph' ||
                userStore.user.email === 'cba.registrar@lsu.edu.ph' ||
                // userStore.user.email === 'patrick.obut@lsu.edu.ph' ||
                userStore.user.email === 'maryeloise.pilvera@lsu.edu.ph'
              "
              @click="verificationDone"
              class="cursor-pointer border-2 border-green-800 rounded-lg hover:text-green-800 hover:bg-white bg-green-800 text-white font-bold px-5 py-2">
              Verification Confirm</li>




<!-- 
              <li 
              v-if="
                userStore.user.email === 'jorenleeluna24@gmail.com'
              "
              @click="verificationDone"
              class="cursor-pointer border-2 border-green-800 rounded-lg hover:text-green-800 hover:bg-white bg-green-800 text-white font-bold px-5 py-2">
              Send Credentials
            
            </li> -->





                </ul>
              
              

              
              
              
              
              
              
              
              </div>

              
              <div class="">
                <button @click="updateStatus" 
                class="bg-yellow-500 text-white hover:bg-white whitespace-nowrap font-bold hover:text-yellow-600 border-2 border-yellow-500 flex rounded-2xl uppercase py-1 px-3 mr-3 mt-3">Update</button>
              </div>
            </div>


                <div class="h-fit flex border-t mt-10">
            <div class=" w-full shadow-lg px-10 py-5">
              <p class=" flex w-full">
                            <label class="pr-6 w-4/12 text-right"> Tracking ID: </label>
                            <span class="font-bold px-3 border-b-4 border-green-800">
                              {{ singleEnrollee.tracking_id }}
                            </span>
                          </p>
                          <p class=" flex items-center">
                            <label class="pr-6 w-4/12 text-right">LSU ID:</label>
                            <input type="text" 
                            class="w-fit lowercase border-b-4 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-sm" 
                            placeholder="LSU ID" 
                            v-model="singleEnrollee.student_lsu_id_number" />
                          </p>
                          <p class=" flex">
                            <label class="pr-6 w-4/12 text-right"> Full Name: </label>
                            <span class="font-bold px-3 border-b-4 border-green-800"> {{ singleEnrollee.lastname }} , {{ singleEnrollee.firstname }} {{ singleEnrollee.middlename }}
                              <span class="" v-if="singleEnrollee.extension_or_suffix_name !== 'N/A'">{{ singleEnrollee.extension_or_suffix_name }}</span>
                            </span>
                          </p>
                          <p class=" flex">
                            <label class="pr-6 w-4/12 text-right"> Gender: </label>
                            <span class="font-bold px-3 border-b-4 border-green-800"> {{ singleEnrollee.birth_sex }} </span>
                          </p>
                          <p class=" flex">
                            <label class="pr-6 w-4/12 text-right"> Birth Date: </label>
                            <span class="font-bold px-3 border-b-4 border-green-800"> {{ singleEnrollee.birth_date }} </span>
                          </p>
                          <p class=" flex">
                            <label class="pr-6 w-4/12 text-right"> College: </label>
                            <span class="font-bold px-3 border-b-4 border-green-800"> {{ singleEnrollee.college }} </span>
                          </p>
                          <p class="flex" :class="singleEnrollee.shiftee_student.is_student_shiftee === 'yes' ? 'hidden':''">
                            <label class="pr-6 w-4/12 text-right"> 
                              Program: 
                            </label>
                     
                          <select v-model="courseSelection" 
                              @change="assignCollege"
                              class="px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-black h-9 text-xs w-[400px]">
                              <option :value="courseSelection" disabled selected>
                                {{ singleEnrollee.program }}</option>
                              <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                {{ cp.program }}
                              </option>
                            </select>
                          </p>


                          <p class="flex" v-if="singleEnrollee.shiftee_student.is_student_shiftee === 'yes'">
                            <label class="pr-6 w-4/12 text-right">
                              
                              Program <span>to Shift</span>: 
                            </label>
                     
                          <select v-model="courseSelectionShiftee"  
                                @change="assignCollegeShiftee"
                              class="px-3 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm text-black h-9 text-xs w-[400px]">
                              <option :value="courseSelectionShiftee" disabled selected>
                                {{ singleEnrollee.shiftee_student.program }}
                              </option>
                              <option :value="cp" v-for="(cp, i) in courseOrProgramData" :key="i">
                                {{ cp.program }}
                              </option>
                            </select>
                          </p>
            </div>
            <div class="w-full shadow-lg px-10 py-5">
             
              <p class=" flex">
                <label class="pr-6 w-4/12 text-right"> Contact Numbers: </label>
                <span class="font-bold border-b-4 border-green-800 gap-10">
                  <span class="pr-4">{{ singleEnrollee.contact_primary_number }} </span> | <span class="pl-4">{{ singleEnrollee.contact_alternate_number }} </span>
                </span>
              </p>
              <p class="flex items-center">
                <label class="pr-6 w-4/12 text-right"> Emails: </label>
                <span class="font-bold border-green-800 gap-10">
                 
                  <input type="text" 
                      class="w-full lowercase border-b-4 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                      placeholder="Last Name" 
                      v-model="singleEnrollee.contact_personal_email_address" />
                      <input type="text" 
                      class="w-full lowercase border-b-4 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm h-9 text-xs" 
                      placeholder="Last Name" 
                      v-model="singleEnrollee.contact_lsu_email_address" />
                </span>
              </p>
        

          
            </div>

            </div>

         

          </div>
          














          <div class="w-full px-10 text-center uppercase border-y-4 border-green-900 py-2 tracking-widest font-bold">
   Continuing Students List
</div>


          <div v-if="tableDisplay">
          <div class="w-full">
            <div class="">
              <div class="shadow mx-auto text-xs">
                <div class="">
                  <div class="lg:flex hidden header w-full px-1.5 py-2 bg-green-800 text-white items-center shadow-lg">
                    <ul class="flex  w-full lg:whitespace-nowrap">
                      <!-- <li class=" lg:w-14">No.</li> -->
                      <li class="cursor-pointer uppercase" :class="toggleTrackingIDColumn ? 'lg:w-2/12' :'w-20'" @click="toggleTrackingIDColumn = !toggleTrackingIDColumn">
                        <span v-if="toggleTrackingIDColumn">
                          Tracking ID <span>

                            <i class="fa fa-arrow-left" aria-hidden="true"></i>

                          </span>
                          
                        </span>

                        <span v-else>
                          TID 
                        
                          <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </span>

                      </li>
                      <li class=" lg:w-1/12 uppercase">LSU ID</li>
                      <li class=" lg:w-2/12 text-left uppercase">Full Name</li>
                      <li class=" lg:w-1/12 text-left uppercase">Status</li>
                      <li class=" lg:w-4/12 text-left uppercase">Program</li>
                      <li class="text-center lg:w-5/12 uppercase">Status</li>
                      <li class="w-fit text-center px-5 uppercase">Action</li>
                    </ul>
                  </div>
                  <div class="w-full" v-if="bookingAppointmentListFilter.length > 0">
                    <ul
                      class="lg:py-1 lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 py-1 relative hover:bg-gray-200"
                      v-for="(b, i) in _.orderBy(bookingAppointmentListFilter, 'created_at', 'desc')" :key="i">
                      <!-- <li class="px-2 font-bold text-xs text-green-800 lg:w-14">{{ i + 1 }}</li> -->
                      <li class="lg:px-2 font-bold text-xs text-green-800  uppercase"

                      :class="toggleTrackingIDColumn ? 'lg:w-2/12':'w-20'"
                     >
                     <span  v-if="toggleTrackingIDColumn">
                      {{ b.tracking_id }}
                     </span>

                     <span v-else>
                      TID...
                     </span>
                       
                      </li>
                      <li class="font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase">
                    <span class="block">
                      {{ b.student_lsu_id_number }}
                    </span>

                  <span>
                    <span v-if="b.shiftee_student.is_student_shiftee === 'yes'" class="text-red-800 font-bold block">Shiftee</span>
                    <span v-if="b.returnee_student.is_student_returnee === 'yes'" class="text-yellow-500 font-bold block">Returnee</span>
                  </span>
                      </li>
                      <li class="font-bold text-xs text-green-800 lg:w-2/12 uppercase">
                        {{ b.firstname || '' }}  {{ b.lastname || '' }}
                      </li>
            
                      <li class="font-bold text-xs text-green-800 lg:w-4/12  uppercase text-left">
                        {{ b.college }} | {{ b.program }}
                        <br>  <br>
                        <span class="text-blue-600 lowercase">{{ b.contact_lsu_email_address }}</span>
                        <br>
                      </li>

                      <li class="flex font-bold text-xs text-green-800 lg:w-5/12 px-8 text-center">
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
                            <div class="lg:flex hidden text-[8px]"
                              :class="
                                [j.status === 'yes' ? 'text-green-900 ' : ''],
                                [j.status === 'no' ? 'text-red-700 ' : ''],
                                [j.status === '' ? 'text-gray-300 ' : ''],
                                [j.status === 'ongoing' ? 'text-blue-800 ' : ''],
                                [i === 3 ? 'lg:-mt-5 -ml-1' : 'lg:-mt-8 ml-14']">
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
                        class="flex justify-center font-bold px-2 text-xs text-green-800 lg:w-fit lg:static absolute top-2 right-2">
                        <div class="w-auto px-1 flex gap-5">
                          <button @click="displaySingleEntry(b.id)" 
                            class="cursor-pointer hover:bg-white hover:text-yellow-600 border-yellow-600 border-2
                             bg-yellow-500 text-white uppercase font-bold px-2 py-1 rounded-lg tracking-tighter text-[10px]"> Update </button>
                          <button
                          v-if="
                            userStore.user.email === 'jorenleeluna24@gmail.com' ||
                            userStore.user.email === 'admissions@lsu.edu.ph'
                          "
                          @click="toggleDeleteBtn(b.id)" class="cursor-pointer">
                            <i class="fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl"
                              aria-hidden="true"></i>
                          </button>
                          <!-- <button
                          v-if="
                            userStore.user.email === 'jorenleeluna24@gmail.com'
                          "
                          @click="directDelete(b.id)" class="cursor-pointer text-white bg-red-700 font-bold uppercase rounded-xl px-4 py-1">
                            X
                          </button> -->
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