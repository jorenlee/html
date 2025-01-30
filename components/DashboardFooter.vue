<script setup>
  import moment from "moment";
  const presentYear = ref(moment(new Date()).format("YYYY"));
</script>
<template>
    <div class="mt-10">
        <div class="bg-green-900 p-3">
            <h1 class="text-center text-white text-xs">
                <span class="font-bold">Copyright © {{presentYear}} </span><span>La Salle University - Ozamiz</span>
            </h1>
        </div>
    </div>
</template>