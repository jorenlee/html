<script setup></script>
<template>
  <div>
    <div class="lg:flex w-full shadow-xl mb-5 fixed bg-white lg:border-b-[10px] border-green-800 z-10">
      <NuxtLink to="/investiture">
        <h1 class="flex items-center lg:mx-5 lg:w-full w-fit mx-auto">
          <span class="lg:w-14 w-16 py-3 lg:pr-0 pr-3 lg:pl-0">
            <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/lsuseal-mono.png" />
          </span>
          <span class="lg:flex ml-1">
            <h1 class="lg:whitespace-nowrap uppercase text-green-800 font-bold lg:text-4xl text-2xl lg:px-2 tracking-tight">rite of investiture</h1>
            <span class="lg:whitespace-nowrap text-black lg:text-xl mt-3.5 font-bold">of the 5th president</span>
          </span>
        </h1>
      </NuxtLink>
      <div class="lg:py-3 lg:bg-white bg-green-900 ml-auto lg:mr-5">
        <ul class="flex text-center justify-between lg:mt-2.5">
          <NuxtLink to="/investiture/program">
            <li class="lg:text-green-800 text-white py-2 lg:text-lg lg:w-32 w-24 text-xs lg:py-5  text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap"> the Rites </li>
          </NuxtLink>
          <NuxtLink to="/investiture/president">
            <li class="lg:text-green-800 text-white py-2 lg:text-lg lg:w-32 w-24 text-xs lg:py-5  text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap"> the President </li>
          </NuxtLink>
          <NuxtLink to="/investiture/vision">
            <li class="lg:text-green-800 text-white py-2 lg:text-lg lg:w-32 w-24 text-xs lg:py-5  text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap"> the Vision </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <div class="lg:py-[150px] h-4/6 block">
      <div class="lg:w-10/12 mx-auto text-center justify-center">
        <h2 class="uppercase lg:text-4xl text-2xl text-green-800 font-bold tracking-tighter lg:mb-10 mb-4 whitespace-nowrap">RITE OF investiture</h2>
        <p class="text-black tracking-tighter text-base">of the</p>
        <p class="text-black tracking-tighter capitalize text-base lg:mb-10 mb-5">Fifth University President</p>
        <h2 class="uppercase lg:text-5xl text-3xl whitespace-nowrap text-green-800 font-bold tracking-tighter lg:mb-10 mb-4">br. rey e. mejias fsc</h2>
        <p class="text-black tracking-tighter text-base">Arts Center, La Salle University</p>
        <p class="text-black tracking-tighter text-base">Friday, 16 August 2024</p>
        <p class="text-black tracking-tighter text-base mb-10">3:00 PM</p>
        <p class="text-black tracking-tighter text-base">RSVP</p>
        <p class="text-black tracking-tighter text-base">Mr. Israel Gallogo</p>
        <p class="text-black tracking-tighter text-base mb-7">+63 985 346 0730</p>
        <p class="text-black tracking-tighter text-base">Attire</p>
        <p class="text-black tracking-tighter text-base">Filipiniana</p>
      </div>
    </div>
    <!-- <TotalAmount /> -->
  </div>
</template>
<style scoped></style>