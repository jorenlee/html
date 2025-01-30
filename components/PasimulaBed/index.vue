<script setup>
import activitiesJSON from "./activities2022-2023.json";

const activities = ref(activitiesJSON.administrators);
</script>

<template>
  <div class="">
    <div class="justify-center mx-auto lg:my-5 my-3 overflow-x-auto">
      <div class="text-sm text-left text-gray-500 shadow-3xl">
        <div
          class="text-sm uppercase lasalle-green text-white font-bold py-1 lg:px-6 px-2 whitespace-nowrap text-center"
        >
          Schedule of Activities Basic Education
        </div>
        <div>
          <div class="lg:border-none border" v-for="(a, i) in activities" :key="i">
            <div
              v-if="a.lunch"
              :class="
                a.lunch ? 'bg-gray-300 text-white' : 'bg-gray-100 text-gray-900'
              "
            >
              <h1
                class="py-1 lg:px-6 px-2 font-bold lg:capitalize uppercase lg:text-left text-center text-xs"
              >
                {{ a.offices }}
              </h1>
            </div>

            <div
              v-if="a.headOffice"
              :class="
                a.headOffice ? 'bg-green-900 text-white' : 'bg-gray-100 text-gray-900'
              "
            >
              <h1
                class="py-1 lg:px-6 px-2 font-bold lg:capitalize uppercase lg:text-left text-center text-xs"
              >
                {{ a.offices }}
              </h1>
            </div>

            <div
              class="bg-white text-black border-b"
              v-for="(aa, i) in a.admins"
              :key="i"
            >
              <h1 class="lg:flex lg:py-0 py-3">
                <h1
                  class="lg:flex lg:pt-1 pt-0 lg:pb-1 lg:px-6 px-2 text-gray-900 text-center lg:text-left lg:border-r-4 lg:w-2/12 lg:ml-0 text-xs"
                >
                  {{ aa.designationAbbr }}
                </h1>

                <h1
                  class="lg:flex lg:pt-1 pt-0 lg:pb-1 px-5 text-gray-900 text-center lg:text-left lg:w-4/12 lg:border-r-4 lg:ml-0 text-xs"
                >
                  {{ aa.designation }}
                </h1>

                <h1
                  class="lg:pt-1 lg:pb-1 pb-0 lg:px-6 px-2 lg:text-left text-center text-black lg:w-3/12 lg:ml-0 text-xs lg:border-r-4 "
                >
                  {{ aa.name }}
                </h1>

                <h1
                  class="lg:pt-1 lg:pb-1 pb-0 lg:px-6 px-2 lg:text-left text-center text-black lg:w-3/12 lg:ml-0 text-xs"
                >
                  {{ aa.officerInCharge }}
                </h1>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
