<script setup>
import { onMounted } from "vue";
import { useUserStore } from "~/stores/user";
import scheduleJSON from "./schedule.json";
import VueDatePicker from "@vuepic/vue-datepicker";
import "./css/main.css";
import moment from "moment";
import _ from "lodash";
const router = useRouter();
const userStore = useUserStore();
const endpoint = ref(userStore.mainDevServer);
const title = ["LRC Book Thru", "(lrc)", "Book Thru"];

const timeSelection = ref(scheduleJSON.timeSelection);
const schedulesListsData = await $fetch(
  endpoint.value + "/api/library/schedule/booking/list/"
).catch((error) => error.data);

const searchForAvailableBooks = ref("");
// const books = await $fetch(endpoint.value + "/api/library/reports/book/list/").catch((error) => error.data) || 0;

// let books = 0;
// const searchedItem = ref(books.length)

let highlightedDates = ref([]);
const minDate = ref(new Date());

let currentHour = ref(moment(new Date()).format("HH:MM"));
// let currentHour = ref('10:00');
// console.log(books)

let id = ref();
let limitCounter = ref(0);
let allFieldsAreRequired = ref(false);
let errors = ref([]);
let timeList = ref([]);
const pickedTime = ref();
const unFilteredTime = ref();


let displayTableListsOfBooks = ref(false)

const schedule = ref({
  date: "",
  time: "",
  updated_at: new Date(),
})

const info = ref({
  borrower_category: "",
  id_number: "",
  firstname: "",
  lastname: "",
  email: "",
  books: [// {book_title: null,book_author: null,book_call_number: null}
  ],
  booking_date: "",
  booking_time: "",
  status: "pending",
  created_by_email: "",
  updated_at: new Date(),
})

onMounted(() => {
  schedulesListsData.filter(function (params) {
    // schedule.value.date = params.date;
    highlightedDates.value.push(params.date);
  });

});

let displayForm = ref(false);
let currentObjectSelectedFromSearch = ref(null);
let selectIDBooksList = ref(null)

// just adding empty fields ready for input
const addBooks = async (obj) => {
  console.log('select one obj', obj)
  obj.number_of_copies--;
  // selectIDBooksList.value = obj.id;
  info.value.books.push({
    book_title: obj.title,
    book_author: obj.author,
    book_call_number: obj.call_number,
  });
  limitCounter.value--;
  // currentObjectSelectedFromSearch.value = obj
  // let booksData = await $fetch(endpoint.value + "/api/library/reports/book/" + obj.id + "/").catch((error) => error.data) || 0;
  // booksData.number_of_copies--;
  // selectIDBooksList.value = obj.id
 
    editForm(obj)
    filterSearchBooks.value = []
    searchForAvailableBooks.value = ""
};


let books = await $fetch(endpoint.value + "/api/library/reports/book/list/").catch((error) => error.data) || 0;
// displayTableListsOfBooks.value = true;
let searchIconBtnClicked = ref(false)

let filterSearchBooks = ref([])
let listAvailableBooksBtn = () => {
  searchIconBtnClicked.value = true
  setTimeout(() => {
    searchIconBtnClicked.value = false
  }, 2000)
  if (searchForAvailableBooks.value.toLowerCase() !== "") {
    filterSearchBooks.value = books.filter(function (params) {
      return params.title.toLowerCase().includes(searchForAvailableBooks.value)
    });
  } else {
    filterSearchBooks.value = 0
  }
}

// const filterSearchBooks = computed(() => {
//         // if (!searchForAvailableBooks.value) {
//         //   return books;

//         // }

//         return books.filter(item => 
//           item.includes(searchForAvailableBooks.value.toLowerCase())
//         );
//       });

//       let filterSearchBooks = computed(() => {
//   if (searchForAvailableBooks.value === "") {
//     // return books; // Return all data if search is empty
//     return filterSearchBooks = null;
//   }
//   return books.filter((item) => {
//     // Perform case-insensitive search in both 'name' and 'description' fields
//     let query = searchForAvailableBooks.value.toLowerCase();
//     return (
//       item.title.toLowerCase().includes(query) ||
//       item.call_number.toLowerCase().includes(query)
//     );
//   });
// });

const editForm = async (obj) => {

  let booksData = await $fetch(endpoint.value + "/api/library/reports/book/" + obj.id + "/").catch((error) => error.data) || 0;
  booksData.number_of_copies--;
  console.log(booksData)
  await $fetch(endpoint.value + "/api/library/reports/book/edit/" + obj.id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: booksData,
  }).then((response) => {
    console.log(response)
    // console.log(books);
  });
}

const removeRow = (obj) => {
  books.filter(function (params) {
    if(params.call_number === obj.book_call_number) {
      params.number_of_copies++;
      reverseEditForm(params)
      console.log(params.number_of_copies)
      // remove selected books
      
    }

    if (info.value.books.length > 0) {
        _.pull(info.value.books, obj);
        limitCounter.value++;
        filterSearchBooks.value = []
      }
  });
};

const reverseEditForm = async (obj) => {
  let booksData = await $fetch(endpoint.value + "/api/library/reports/book/" + obj.id + "/").catch((error) => error.data) || 0;
  booksData.number_of_copies++;
  console.log(booksData)
  await $fetch(endpoint.value + "/api/library/reports/book/edit/" + obj.id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: booksData,
  }).then((response) => {
    console.log(response)
    // console.log(books);
  });
}

const defaultIDNumber = () => {
  displayForm.value = true;
  info.value.id_number = "";
};

const borrowerCategoryLimit = () => {
  if (info.value.borrower_category === "Faculty") {
    limitCounter.value = 20;
    defaultIDNumber();
  }
  if (info.value.borrower_category === "Staff") {
    limitCounter.value = 20;
    defaultIDNumber();
  }
  if (info.value.borrower_category === "Student") {
    limitCounter.value = 15;
    defaultIDNumber();
  }
  info.value.books = [
    {
      book_title: null,
      book_author: null,
      book_call_number: null,
    },
  ];
};

const setDate = (value) => {
  schedule.value.date = moment(value).format("MM-DD-YYYY");
  let currentDate = moment(moment().toDate()).format("MM-DD-YYYY");
  schedule.value.time = ["-"];
  //every 100 milliseconds the setDate will auto update and removed the past hours
  setTimeout(() => {
    schedulesListsData.filter(function (params) {
      //display the available time slots in specific selected date or day
      if (params.date === schedule.value.date) {
        id.value = params.id;
        schedule.value.time = params.time;
      }
      if (params.date === currentDate && params.date === schedule.value.date) {
          schedule.value.time = params.time.filter((t) => {
            return currentHour.value.slice(0, 2) < t.range_from_time.slice(0, 2)
          })
        }
    });
  }, 100);
};

const updateSchedule = async () => {
  if (schedule.value.time.length === 1) {
    timeList.value = [
      {
        range_from_time: '',
        range_to_time: '',
        _12_hour_format_from: '',
        _12_hour_format_to: ''
      }
    ]
  } else {
    // list down the remaining time or slots left
    timeList.value = _.filter(
      schedule.value.time, function (params) {
        return params.range_from_time !== pickedTime.value.range_from_time && params.range_to_time !== pickedTime.value.range_to_time
      }
    )
  }

  await $fetch(endpoint.value + "/api/library/schedule/booking/" + id.value + "/edit/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      date: schedule.value.date,
      time: timeList.value,
      updated_at: schedule.value.updated_at,
    },
  }).then((response) => {
    // console.log("response", response);
  });

}

const createBtn = () => {
  submitForm();
  submitAppointmentToGmail();
};

const submitForm = async () => {
  // console.log("submitForm");

  info.value.booking_date = schedule.value.date;
  info.value.booking_time = pickedTime.value._12_hour_format_from + ' - ' + pickedTime.value._12_hour_format_to;
  info.value.created_by_email = info.value.email;

  await $fetch(endpoint.value + "/api/library/booking/create/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: info.value,
  }).then((response) => {
    if (response.status === "errors") {
      // console.log("response.status", response.status);
      // console.log("response.errors", response.errors);
      allFieldsAreRequired.value = true;
      setTimeout(() => {
        allFieldsAreRequired.value = false;
      }, 10000);
    } else {
      updateSchedule();
      router.push({ path: "/library/LRCBookThru/ConfirmationPage" });
    }
  });
}

const submitAppointmentToGmail = async () => {
  await $fetch(endpoint.value + "/api/library/submit-appointment-to-gmail/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: info.value,
  }).then((response) => { })
}
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="relative">
          <img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg"
            class="align-top w-full h-auto lg:object-fill lg:block hidden" />
          <img
            src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png"
            class="align-top w-full h-36 object-none lg:hidden block" />
          <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
            <h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto">
              {{ title[0] }}
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <div class="w-11/12 mx-auto flex justify-between">
              <ul class="flex lasalle-green-text capitalize text-xs">
                <li>
                  <a href="/" class=""> Home </a>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-caret-right mx-1.5 mt-0.5"></i>
                  <a href="/library" class="mr-1 flex"> Library </a>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-caret-right mx-1.5 mt-0.5"></i>
                  <a href="/library/LRCBookThru" class="mr-1 flex">
                    <span class="lg:flex hidden ml-1"> LRC Book Thru</span>
                    <span class="lg:hidden flex"> LRC Book Thru</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="text-xs lg:mb-5 bg-white w-11/12 mx-auto lg:mt-5 shadow-xl rounded-xl">
        <div class="">
          <div
            class="bg-green-900 py-1 mt-4 lg:mb-10 mb-4 text-base font-medium text-white text-center uppercase tracking-tight">
            Book an Appointment
          </div>
          <form v-on:submit.prevent="createBtn" class="px-3">
            <div class="lg:w-fit w-auto mx-auto lg:flex lg:gap-20">
              <div class="lg:w-fit mb-1">
                <div class="">
                  <h1 class="font-bold lasalle-green-text text-xs text-center capitalize mb-3">
                    Date
                  </h1>
                  <div class="mx-auto w-fit">
                    <VueDatePicker 
                      v-model="schedule.date" 
                      inline 
                      :enable-time-picker="false" 
                      name="date" 
                      auto-apply
                      :highlight="highlightedDates" 
                      @update:model-value="setDate(schedule.date)"
                      :year-range="[2025, 2025]" 
                      :disabled-week-days="[0,7]"
                      week-start="0"
                      :allowed-dates="highlightedDates" 
                      :min-date="minDate" />
                  </div>
                </div>
              </div>
              <div class="mx-auto shadow lg:h-fit lg:my-auto border rounded-sm my-3">
                <h1
                  class="border-b-2 border-green-900 text-center font-bold text-green-900 
                  lg:whitespace-nowrap capitalize pt-3 pb-3 mb-3">
                  Time
                </h1>
                <div class="w-full rounded-md justify-center">
                  <ul class="grid lg:grid-cols-3 grid-cols-2 pr-6">
                    <li
                      class="flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5"
                      v-for="(t, i) in timeSelection[0].time" :key="i">
                      <input type="radio" name="time" :value="t" class="mr-2 mt-0.5" 
                      v-model="pickedTime"
                        v-if="_.find(schedule.time, t)" :id="i" required />
                      <input type="radio" name="time" :value="t" class="mr-2 mt-0.5" v-else disabled />
                      <label :for="i" class="lg:text-xs text-[10px]" :class="_.find(schedule.time, t) ? 'text-[#087830] font-bold' : ' text-gray-400 font-light'
                        ">
                        {{ t._12_hour_format_from }} - {{ t._12_hour_format_to }}
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- {{ pickedTime }}
            <div @click="updateSchedule">updateSchedule</div> -->
            <div class="lg:w-11/12 mx-auto lg:p-5">
              <div class="lg:flex gap-2 lg:mb-3 lg:mt-0 mt-3">
                <div class="flex lg:w-9/12 mx-auto gap-2">
                  <div class="lg:max-w-fit lg:w-9/12 mx-auto lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      Borrower Category
                    </label>
                    <select v-model="info.borrower_category" name="borrower_category"
                      class="shadow-lg pl-2 pr-3 pt-2 pb-[6.5px] w-full border-b-2 border-green-800 capitalize" required
                      @change="borrowerCategoryLimit()">
                      <option value="" disabled selected hidden>
                        Select Borrower Category
                      </option>
                      <option value="Faculty">Faculty</option>
                      <option value="Staff">Staff</option>
                      <option value="Student">Student</option>
                      <!-- <option value="Visitor">Visitor</option> -->
                    </select>
                </div>
                <div class="w-full lg:mb-0 mb-2" v-if="displayForm">
                  <label class="text-[10px] text-gray-800">
                    ID Number
                  </label>
                  <input
                    class="shadow-lg px-2 py-2 text-xs w-full border-b-2 border-green-800 capitalize"
                    v-model="info.id_number" placeholder="ID Number" type="text" required />
                </div>
                </div>
                <div class="flex lg:w-full gap-2" v-if="displayForm">
                  <div class="w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      First Name
                    </label>
                    <input
                      class="shadow-lg text-xs px-2 py-2  w-full border-b-2 border-green-800 capitalize"
                      v-model="info.firstname" placeholder="first Name" type="text" required />
                  </div>
                  <div class="w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      Last Name
                    </label>
                    <input
                      class="shadow-lg text-xs px-2 py-2  w-full border-b-2 border-green-800 capitalize"
                      v-model="info.lastname" placeholder="last Name" type="text" required />
                  </div>
                </div>
                <div class="lg:w-10/12 w-full lg:mb-0 mb-2" v-if="displayForm">
                  <label class="text-[10px] text-gray-800"> Email </label>
                  <input
                    class="shadow-lg text-xs px-2 py-2  w-full border-b-2 border-green-800"
                    v-model="info.email" placeholder="Email" type="email" required />
                </div>
              </div>
              <!-- <div class="lg:flex gap-2 lg:mb-3">

              </div> -->
              <div class="lg:shadow lg:rounded-lg lg:px-2 lg:py-3 lg:mt-0 mt-5">
                <div class="text-green-900 text-sm text-center lg:mb-3 px-3">
                  Open this link
                  <a class="font-bold cursor-pointer" target="_blank"
                    href="https://lsu-opac.follettdestiny.com">
                    OPAC
                  </a>
                  for the available resources and copy the book details in the input boxes
                  <span class="">
                    (please select first the borrower category above)</span>.
                </div>
              <div v-if="limitCounter > 1">       
                <div class="lg:w-6/12 mx-auto lg:my-5 flex">
                  <input 
                    v-model="searchForAvailableBooks"
                    placeholder="Search for a Book Title ... " 
                    class="shadow-xl text-xs text-green-800 px-2 py-2
                      w-full lg:border-b-4 border-2 lg:border-b-[#225c21] border-[#225c21] lg:mb-0 mb-3"/>
                      <span 
                    @click="listAvailableBooksBtn"
                      class="bg-green-800 hover:bg-white hover:text-green-800
                       text-white px-3.5 h-full lg:py-2 py-[3px] lg:mt-0 cursor-pointer border-green-800 border">
                      <i class="fa fa-search text-lg"></i>
                    </span>
                </div>
                <div 

  
                class="lg:mb-10 mb-3 lg:bg-white bg-green-700 lg:text-black text-white shadow-xl">
                  <div class="appointment-lists shadow mx-auto text-xs">
                    <div class="">
                      <div 
                      v-if="filterSearchBooks.length > 0"
                      class="header w-full bg-green-800 text-white lg:flex hidden items-center">
                        <ul class="lg:flex w-full justify-center text-center whitespace-nowrap uppercase">
                          <li class="border-r border-green-700 
                            py-2 px-1 lg:w-6/12">Title</li>
                          <li class="border-r border-green-700 
                            py-2 px-1 lg:w-40">Author</li>
                          <li class="border-r border-green-700 
                            py-2 px-1 lg:w-44">Call Number</li>
                          <li class="border-r border-green-700 
                            py-2 px-1 lg:w-32">Remaining Copies</li>
                          <li class="py-2 px-1 lg:w-52">Status</li>
                        </ul>
                      </div>
                      <div class="w-full rows"               
                        v-if="filterSearchBooks.length > 0">
                        <ul class="lg:flex w-full justify-center lg:text-center h-auto border-b border-gray-100 lg:py-0 py-5"
                            v-for="(b, i) in _.orderBy(filterSearchBooks, 'id', 'asc')" 
                            :key="i" :class="i % 2 ? 'lg:bg-gray-100':''">
                          <li class="px-2 lg:w-6/12 lg:flex items-center justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-2 lg:gap-0 gap-5">
                           <span class="font-bold lg:hidden">Title:</span> {{ b.title }}
                          </li>
                          <li class="px-2 lg:w-40 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5">
                            <span class="font-bold lg:hidden">Author:</span>{{ b.author }}
                          </li>
                          <li class="px-2 lg:w-44 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5">
                            <span class="font-bold lg:hidden">Call Number:</span>{{ b.call_number }}
                          </li>
                          <li class="px-2 lg:w-32 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-5 lg:gap-0 gap-5">
                            <span class="font-bold lg:hidden">Number of Copies:</span>{{ b.number_of_copies }}
                          </li>
                          <li class="px-2 lg:w-52 lg:h-10 flex items-center justify-center gap-3" 
                            v-if="b.number_of_copies > 0">
                            <span class="bg-green-500 text-white font-bold px-2 py-1 lg:border-0 border-white border">Available</span>
                            <span @click="addBooks(b)" class="bg-yellow-500 text-white hover:bg-yellow-700 hover:white font-bold px-2 py-1 rounded-xl uppercase shadow-lg cursor-pointer text-[10px]"> + Add to Lists </span>
                          </li>
                          <li class="px-2 lg:w-52 lg:h-10 lg:mb-0 mb-3 flex items-center justify-center" 
                          v-if="b.number_of_copies === 0">
                            <span  class="bg-red-500 text-white font-bold px-2 py-1 whitespace-nowrap border border-white">Not Available</span>
                          </li>
                        </ul>
                      </div>
                      <div v-if="filterSearchBooks.length === 0 &&
                        searchForAvailableBooks !== '' && searchIconBtnClicked
                      " 
                      class="italic text-gray-400 text-center p-1">
                        No Results Found!
                      </div>
                      <!-- <div v-else class="italic text-gray-400 text-center p-1" :class="filterSearchBooks.length > 0 ? 'hidden' : ''">
                        Please Wait ...
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="shadow-lg p-2 lg:border-0 border-t" v-if="info.books.length > 0">
                <div>
                  <p class="text-center mb-3 text-green-800 py-2 font-bold">
                    Final Lists of Books to be Borrowed:
                  </p>
                </div>
                <div class="lg:flex lg:shadow lg:p-5 gap-2 mb-3 relative" 
                v-for="(b, i) in info.books" :key="i">
                  <div class="flex items-center">
                    <div class="mr-2 lg:hidden block mt-1">Book</div>
                    <div
                      class="flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 
                      text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2">
                      {{ i + 1 }}
                    </div>
                  </div>
                  <div class="w-full lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      Book Title
                    </label>
                    <input
                      
                      class="shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize"
                      v-model="b.book_title" placeholder="book title" type="text" required />
                  </div>
                  <div class="lg:w-6/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      Book Author
                    </label>
                    <input
                      
                      class="shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize"
                      v-model="b.book_author" placeholder="book author" type="text" required />
                  </div>
                  <div class="lg:w-4/12 lg:mb-0 mb-2">
                    <label class="text-[10px] text-gray-800">
                      Book Call Number
                    </label>
                    <input
                      
                      class="shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize"
                      v-model="b.book_call_number" placeholder="book call number" type="text" required />
                  </div>
                  <!-- v-if="info.books.length > 1" -->
                  <div class="flex items-center lg:static absolute top-3 right-0">
                    <div class="mr-2 lg:hidden block">Remove</div>
                    <div
                      class="flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border 
                      border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm"
                      @click="removeRow(b)">
                      <i class="fa fa-close"></i>
                    </div>
                  </div>
                </div>
                <div class="lg:w-10/12 lg:mx-auto" v-if="limitCounter > 1">
                  <div 
                    class="hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2"
                    @click="addBooks">
                    <i class="fa fa-plus mr-1"></i> Add Book
                  </div>
                </div>
              </div>       
              </div>
              <div v-if="allFieldsAreRequired"
                class="text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center">
                Date and Time and other fields are required!
              </div>
              <div class="mt-5 mb-3 w-fit lg:mx-auto mx-auto">
                <button
                  class="hover:text-green-800 border border-green-800 text-white hover:bg-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center font-bold lg:mb-0 mb-5">
                  Submit <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div></div>
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat-library" class="fb-customerchat"></div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.sub-header {
  background: url("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/banners/LMC/LMCBanner.png");
  background-position: center;
  background-size: 100% 100%;
}

input[type="radio"]:disabled {
  background-color: #e2e2e2;
  accent-color: #e2e2e2;
}

input[type='radio'] {
  color: #005715;
  outline: none;
  box-shadow: none;
}
</style>