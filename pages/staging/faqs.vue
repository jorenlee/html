<script setup></script>
<template>
  <div>
    <div class="bg-white-50">
      <Header />
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
              frequently asked questions
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs">
              <li>
                <a href="/" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/" class="mr-1">frequently asked questions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:pt-5 pt-7 pb-4">
        <div class="text-center">
          <p class="font-semibold lg:text-lg text-base mb-10">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500"
              >Frequently Asked Question (FAQs)
            </span>
          </p>
          <div class="justify-center w-8/12 mx-auto my-3">
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
        </div>
      </div>
      <div>
        <!-- <div class="w-11/12 mx-auto pt-10">
          <h2 class="font-bold text-4xl">Fees</h2>
        </div>
      </div>
      <div>
        <div class="w-11/12 mx-auto pt-10">
          <h2 class="font-meduim text-xl">Brief Description</h2>
          <div class="list-decimal lg:ml-10 ml-8">
            <div class="mt-2">
              <p class="lg:mb-3 mb-2">
                During enrollment, a
                <span class="font-bold">NON-REFUNDABLE</span> enrollment deposit
                of <span class="font-bold">Php. 3,000.00</span> (or
                <span class="font-bold">Php. 1,000.00</span> for
                <span class="font-bold">4Ps Members only</span>) should be made to
                the student’s account.
              </p>
            </div>
            <div class="mt-2">
              <p class="lg:mb-3 mb-2">
                Payment for the enrollment deposit is needed to receive a
                Certificate of Registration (COR) and to complete the rest of the
                enrollment process.
              </p>
            </div>
          </div>
        </div>
        <div class="w-11/12 mx-auto pt-10">
          <h2 class="font-meduim text-xl">Student Ledger</h2>
          <div class="list-decimal lg:ml-10 ml-8">
            <div class="mt-2">
              <p class="lg:mb-3 mb-2 italic">
                Where can I see my dues and payments/deposits made?
              </p>
            </div>
            <div class="mt-2">
              <p class="lg:mb-3 mb-2 ml-8">
                Enrolled students can view their dues and payments/deposits in the
                Ledger in the School Automate.
              </p>
            </div>
            <div class="mt-8">
              <p class="lg:mb-3 mb-2">
                To access the <span class="font-bold">Ledger:</span>
              </p>
            </div>
            <div class="mt-2 mb-4">
              <p class="lg:mb-3 mb-4 ml-8">
                <span class="font-bold">LSU website</span> (lsu.edu.ph) >
                <span class="font-bold">MY.LSU</span> (Portal) >
                <span class="font-bold">Parents/Students</span> >
                <span class="font-bold">Student Account</span> >
                <span class="font-bold">Ledger</span>
              </p>
            </div>
          </div>
          <div class="pt-4 mt-24">
            <h2 class="font-bold text-4xl">Discount</h2>
          </div>
        </div>
        <div>
          <div class="w-11/12 mx-auto pt-10">
            <h2 class="font-meduim text-xl">Full Payment</h2>
            <div class="list-decimal lg:ml-10 ml-8">
              <div class="mt-2 mb-8">
                <p class="lg:mb-3 mb-2">
                  Students that pay the full amount of their
                  <span class="font-bold">TOTAL FEE</span> for a given semester
                  will receive a discount of five percent (5%) on their TUITION
                  FEE.
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto w-11/12">
            <h2 class="font-semibold text-xl">Basic Education Unit</h2>
          <table class=" border-collapse border border-slate-500 border-spacing-px">
    <thead>
      <tr class="p-14">
        <th class="border border-slate-600 ">TERM</th>
        <th class="border border-slate-600 ...">FULL PAYMENT</th>
        <th class="border border-slate-600 ...">Discount</th>
        <th class="border border-slate-600 ...">EXAMPLE</th> 
      </tr>
    </thead>
    <tbody>
      <tbody class="">
      <tr class="text-center">
        <td class="border border-slate-600 p-4">Not Applicable (N/A)</td>
        <td class="border border-slate-600">Within one (1) month from start of classes</td>
        <td class="border border-slate-600">5% on current semester tuition fee</td>
        <td class="border border-slate-600">Class start August 1, 2023, full payment on or before September 1, 2023</td>
      </tr>
    </tbody>
    </tbody>
  </table>
        </div>
        <div class="mx-auto w-11/12 mt-8">
            <h2 class="font-semibold text-xl">Higher Education Unit (Undergraduate)</h2>
          <table class=" border-collapse border border-slate-500">
          <div class="">
    <thead>
      <tr class="">
        <th class="border border-slate-600 ">TERM</th>
        <th class="border border-slate-600 ...">FULL PAYMENT</th>
        <th class="border border-slate-600 ...">Discount</th>
        <th class="border border-slate-600 ...">EXAMPLE</th> 
      </tr>
    </thead>
  </div>
    <tbody class="">
      <tr class="text-center">
        <td class="border border-slate-600 p-4 ">Regular (1st, 2nd Semester)</td>
        <td class="border border-slate-600">Within one (1) month from start of classes</td>
        <td class="border border-slate-600">5% on current semester tuition fee</td>
        <td class="border border-slate-600">Class start August 1, 2023, full payment on or before September 1, 2023</td>
      </tr>
      <tr class="text-center">
        <td class="border border-slate-600 p-4">Summer</td>
        <td class="border border-slate-600">Within one (1) month from start of classes</td>
        <td class="border border-slate-600">5% on current semester tuition fee</td>
        <td class="border border-slate-600 ">Class start June 1, 2023, full payment on or before June 8, 2023</td>
      </tr>
    </tbody>
  </table>
        </div>
        <div class="pt-10 w-11/12 mx-auto mt-12">
          <h2 class="font-bold text-4xl">Withdrawals</h2>
        </div>
      </div>
    </div>
      <div>
        <div class="w-11/12 mx-auto pt-16">
          <div class="list-decimal lg:ml-10">
            <div class="mt-2">
              <p class="lg:mb-3 mb-2">
                Students with a negative balance (more deposits made to student
                accounts than fees and charges incurred) can withdraw the negative
                balance amount upon request at the <span class="font-bold">Accounting Office.</span>
              </p>
            </div>
            <div class="mt-2 pb-4 mx-auto">
              <p class="lg:mb-3 mb-2">
                Students can have a negative balance due, but not limited, to the following:
                <ul class="list-disc ml-8">
                  <li>Advance payments/deposits</li>
                  <li>Subsidies, grants, and other financial assistance</li>
                  <li>Made full payment but cancelled enrollment on or before 4th week from start of classes (see Cancellation of Enrollment)</li>
                </ul>
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="lg:w-8/12 w-11/12 mx-auto mt-10">
      <div class="accordion">
        <div class="bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative items-center w-full py-4 px-5 bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="cas = !cas"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
              </h1>
              <i
                class="fa text-green-700"
                :class="cas ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="cas ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="lg:text-base text-sm">
                  Bachelor of Arts in English Language Studies (BAELS)
                </li>
                <!-- <li class="lg:text-base text-sm">Bachelor of Arts in Communication (BAComm)</li> -->
                <li class="lg:text-base text-sm">
                  Bachelor of Arts in Political Science (BAPolSc)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Psychology (BSPsych)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Criminology (BSCrim)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Social Work (BSSW)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="cba = !cba"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
              </h1>
              <i
                class="fa text-green-700"
                :class="cba ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="cba ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li>
                  <h2 class="lg:text-base text-sm">
                    Bachelor of Science in Business Administration (BSBA)
                  </h2>
                  <h6 class="italic lg:ml-5 lg:w-10/12 lg:text-sm text-xs">
                    Majors in: Financial Management, Marketing Management
                  </h6>
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Accounting Information System (BSAIS)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Accountancy (BSAc)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative items-center w-full py-4 px-5 bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="ccsea = !ccsea"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                <a href="#"> What is the most frequently asked question?</a>
              </h1>
              <i
                class="fa text-green-700"
                :class="ccsea ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="ccsea ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Civil Engineering (BSCE)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Architecture (BSArch)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Electrical Engineering (BSEE)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Electronics Engineering (BSECE)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Geodetic Engineering (BSGE)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Computer Engineering (BSCpE)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Science in Computer Science (BSCS)
                </li>
                <li class="lg:text-base text-sm">
                  <a href="#">Bachelor of Science in Information Technology (BSIT)</a>
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Library and Information Science (BLIS)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="con = !con"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
              </h1>
              <i
                class="fa text-green-700"
                :class="con ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="con ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="lg:text-base text-sm">Bachelor of Science in Nursing (BSN)</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="cte = !cte"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
              </h1>
              <i
                class="fa text-green-700"
                :class="cte ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="cte ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="lg:text-base text-sm">
                  Bachelor of Elementary Education (BEEd)
                </li>
                <li>
                  <h2 class="lg:text-base text-sm">
                    Bachelor of Secondary Education (BSEd)
                  </h2>
                  <h6 class="italic lg:ml-5 lg:w-10/12 lg:text-sm text-xs">
                    Majors in: English, Filipino, Science, Mathematics, Social Studies,
                    Values Education
                  </h6>
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Special Needs Education (BSNEd)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Physical Education (BPEd)
                </li>
                <li class="lg:text-base text-sm">
                  Bachelor of Technology and Livelihood Education (BTLEd)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item bg-white border-green-800">
          <h2 class="accordion-header mb-8">
            <button
              class="relative items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="cthm = !cthm"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
                <!-- <a href="/academics/tertiary-education/cthm" class="text-black">=></a> -->
              </h1>
              <i
                class="fa text-green-700"
                :class="cthm ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="cthm ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="lg:text-base text-sm">
                  <!-- <a href="/academics/tertiary-education/cthm/bshm"> -->
                  <a href="#"> Bachelor of Science in Hospitality Management (BSHM) </a>
                </li>
                <li class="lg:text-base text-sm">
                  <!-- <a href="/academics/tertiary-education/cthm/bstm"> -->
                  <a href="#"> Bachelor of Science in Tourism Management (BSTM) </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-white border-green-900">
          <h2 class="accordion-header mb-8">
            <button
              class="relative items-center w-full py-4 px-5 text-base text-green-800 text-left bg-white border rounded-none transition focus:outline-none flex justify-between"
              type="button"
              @click="sgs = !sgs"
            >
              <h1 class="font-semibold text-green-900 lg:text-lg text-sm">
                What is the most frequently asked question?
              </h1>
              <i
                class="fa text-green-700"
                :class="sgs ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"
              ></i>
            </button>
          </h2>
          <div :class="sgs ? 'block' : 'hidden'">
            <div class="accordion-body py-4 lg:px-20 px-5 text-left">
              <ul>
                <li class="">
                  <h1
                    class="font-bold text-green-900 lg:text-lg text-md whitespace-nowrap"
                  >
                    Graduate School of Business
                  </h1>
                  <ul class="lg:ml-10 list-disc pl-5">
                    <li class="lg:text-base text-sm">
                      Doctor of Business Administration
                    </li>
                    <li class="lg:text-base text-sm">
                      Master in Business Administration (Non-Thesis Program)
                    </li>
                    <li class="lg:text-base text-sm">
                      Master in Public Administration (Non-Thesis Program)
                    </li>
                  </ul>
                </li>
                <li>
                  <h1
                    class="font-bold text-green-900 lg:text-lg text-md whitespace-nowrap"
                  >
                    Graduate School of Education
                  </h1>
                  <ul class="lg:ml-10 list-disc pl-5">
                    <li>
                      <h2 class="lg:text-base text-sm">
                        Doctor of Philosophy in Education
                      </h2>
                      <h6 class="italic lg:ml-5 lg:w-9/12 lg:text-sm text-xs">
                        Major in Educational Management
                      </h6>
                    </li>
                    <li class="lg:text-base text-sm">
                      Master of Arts in Education (with Thesis Program)
                    </li>
                    <li>
                      <h2 class="lg:text-base text-sm">
                        Master of Education (Non-Thesis Program)
                      </h2>
                      <h6 class="italic lg:ml-5 lg:w-10/12 lg:text-sm text-xs">
                        Majors in: Cultural Education, Educational Management, English,
                        Filipino, Guidance and Counseling, Mathematics, Physical
                        Education, Science, Social Studies, Teaching Arts
                      </h6>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style></style>