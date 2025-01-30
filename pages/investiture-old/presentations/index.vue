<script setup></script>
<template>
  <div>
    <div class="lg:flex w-full mb-5 fixed bg-white z-10 shadow">
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

   <div class="lg:pt-20 pt-32">
 
  
    
   
    <div class="mx-auto lg:w-8/12 lg:mb-5 mb-2  lg:hidden block">
      <video width="100%" height="100%" controls loop controlsList="nodownload" class="mx-auto shadow-2xl">
        <source src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/videos/main.mp4" type="video/mp4"> Your browser does not support the video tag.
      </video>
    </div>

    <div class="pb-10 py-10 mb-3">
      <SliderInvestiture/>
       <!-- <SliderAlt/> -->
    </div>


    <div class="mx-auto lg:w-8/12 lg:mb-5 mb-2  lg:block hidden border-4 border-green-500">
      <video width="100%" height="100%" controls loop controlsList="nodownload" class="mx-auto shadow-2xl">
        <source src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/videos/main.mp4" type="video/mp4"> Your browser does not support the video tag.
      </video>
    </div>


   </div>
   

    <!-- <TotalAmount /> -->
  </div>
</template>
<style scoped></style>