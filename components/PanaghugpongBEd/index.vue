<script setup>
import activitiesJSON from "./activities2023-2024.json";

const activities = ref(activitiesJSON.administrators);
</script>

<template>
  <div class="">
    <div class="justify-center mx-auto lg:my-5 my-3 overflow-x-auto">
      <div class="text-sm text-left text-gray-500 shadow-3xl border-2">
        <div
           class="font-bold lg:text-sm text-xs text-center bg-green-700 text-white uppercase lg:py-0.5 py-1"
        >
          Schedule of Activities Basic Education
        </div>
        <div>
          <div class="lg:border-none border" v-for="(a, i) in activities" :key="i">
             <div
              v-if="a.lunch"
              :class="
                a.lunch ? 'border-gray-300 text-gray-500' : 'bg-gray-100 text-gray-900'
              "
            >
              <h1
                class="py-1 lg:px-6 px-2 font-bold lg:capitalize lg:text-left text-center text-xs"
              >
                {{ a.offices }}
              </h1>
            </div>

            <div
              v-if="a.headOffice"
              :class="
                a.headOffice ? 'border-y border-green-700 text-green-700' : 'bg-gray-100 text-gray-900'
              "
            >
              <h1
                class="py-1 lg:px-6 px-2 font-bold lg:capitalize lg:text-left text-center text-xs"
              >
                {{ a.offices }}
              </h1>
            </div>

            <div
              class="bg-white text-black border-b"
              v-for="(aa, i) in a.admins"
              :key="i"
            >
              <div class="lg:flex lg:py-0 py-3">
                <h1
                  class="flex items-center lg:pt-1 pt-0 lg:pb-1 lg:px-6 px-2 text-gray-900 text-center lg:text-left lg:border-r-4 lg:w-3/12 lg:ml-0 text-xs"
                >
                  {{ aa.designationAbbr }}
                </h1>

                <h1
                  class="flex items-center lg:pt-1 pt-0 lg:pb-1 px-2 text-gray-900 text-center lg:text-left lg:w-6/12 lg:border-r-4 lg:ml-0 text-xs"
                >
                  {{ aa.designation }}
                </h1>

                <h1
                  class="flex items-center lg:pt-1 lg:pb-1 pb-0 lg:px-6 px-2 lg:text-left text-center text-black lg:w-3/12 lg:ml-0 text-xs"
                >
                  {{ aa.name }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
