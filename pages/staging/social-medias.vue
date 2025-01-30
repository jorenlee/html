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
              SOCIAL MEDIA
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <ul
              class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"
            >
              <li>
                <a href="/" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/" class="mr-1">Social Media</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="justify-center w-8/12 mx-auto my-3 mt-8">
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-green-800 text-green-800 text-sm rounded-lg focus:ring-green-800 focus:border-green-800 block w-full pl-10 p-2.5 dark:bg-green-800 dark:border-green-800 dark:placeholder-green-800 dark:text-white dark:focus:ring-green-800 dark:focus:border-green-800"
              placeholder="How can we help you?"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-green-800 rounded-lg border border-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-800 dark:hover:bg-green-800 dark:focus:ring-green-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div class="">
        <div class="text-center">
          <div class="w-11/12 mx-auto my-10">
            <div class="accordion grid lg:grid-cols-3 gap-10">
              <div v-for="(c, i) in colleges" :key="i" @click="isVisible(i)">
                <div class="bg-white border border-gray-200">
                  <img
                    :src="require(`@/assets/logos/${c.logo}.jpg`)"
                    class="mx-auto w-44 mt-5"
                    alt="logo"
                  />
                  <h2 class="accordion-header mb-0">
                    <button
                      class="items-center w-full px-5 bg-white border-b rounded-none transition focus:outline-none justify-between mx-auto"
                      type="button"
                    >
                      <h1
                        class="font-semibold text-green-900 text-lg my-5 h-20 flex items-center justify-center"
                      >
                        {{ c.title }}
                      </h1>
                    </button>
                  </h2>
                </div>
                <div v-if="c.active" class="bg-white border border-gray-200">
                  <i
                    class="fa text-green-700 text-3xl"
                    :class="c.active ? 'fa-caret-up' : 'fa-caret-down'"
                    @click="c.active = !c.active"
                  ></i>
                  <div class="accordion-body pb-4 px-5 text-left">
                    <ul>
                      <li
                        class="lg:text-base text-sm"
                        v-for="(p, i) in c.programs"
                        :key="i"
                      >
                        {{ p.title }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// const colleges = [
//         {
//           logo: "circleLSULogo",
//           title: "LSU Offices"
//         }
//     ],
//  const programs = [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]

//         {
//           logo: "circleLSULogo",
//           title: "College and Student Council",
//           active: false,
//           programs: [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]
//         },
//         {
//           logo: "circleLSULogo",
//           title: "University Academic Organizations",
//           active: false,
//           programs: [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]
//         },
//         {
//           logo: "circleLSULogo",
//           title: "University Sports Organizations",
//           active: false,
//           programs: [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]
//         },
//         {
//           logo: "circleLSULogo",
//           title: "University Non-Academic Organization",
//           active: false,
//           programs: [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]
//         },
//         {
//           logo: "circleLSULogo",
//           title: "School of Graduate Studies",
//           active: false,
//           programs: [
//             {
//               title: "Bachelor of Arts in English Language Studies (BAELS)"
//             },
//             {
//               title: "Bachelor of Arts in Political Science (BAPolSc)"
//             },
//             {
//               title: "Bachelor of Science in Psychology (BSPsych)"
//             },
//             {
//               title: "Bachelor of Science in Criminology (BSCrim)"
//             },
//             {
//               title: "Bachelor of Science in Social Work (BSSW)"
//             }
//           ]
//         },
//       ]
//     };
//   },
// //   methods: {
// //     isVisible(index) {
// //       this.colleges[index].active = !this.colleges[index].active
// //     },
// //   },
// // }
</script>

<style></style>