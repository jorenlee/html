<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import _ from "lodash";
import "@vuepic/vue-datepicker/dist/main.css";
const userStore = useUserStore();

const endpoint = ref(userStore.mainDevServer);
let enrolleesList = ref(null)
let totalEnrollees = ref(0)


onMounted(async () => {
  let enrollees = await $fetch(endpoint.value + "/api/admissions/list/").catch((error) => error.data);
  enrolleesList.value = enrollees

  // console.log('enrolleesList.value', enrolleesList.value)
  totalEnrollees.value = enrollees.length || 0
});


</script>

<template>
<div class="">
 
{{ JSON.stringify(enrolleesList) }}
  
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