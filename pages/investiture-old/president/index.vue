<script setup></script>
<template>
  <div class="">
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
            <li class="lg:text-green-800 text-white py-2 lg:text-lg lg:w-32 w-24 text-xs lg:py-5  text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-bold underline"> the President </li>
          </NuxtLink>
          <NuxtLink to="/investiture/vision">
            <li class="lg:text-green-800 text-white py-2 lg:text-lg lg:w-32 w-24 text-xs lg:py-5  text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap"> the Vision </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
    <!-- overflow-y-scroll -->
    <div class="mb-5 lg:pt-36 pt-[127px]">
      <div class="lg:w-7/12 mx-auto">
        <video width="100%" height="200" controls autoplay loop controlsList="nodownload" class="mx-auto lg:mb-10 shadow-2xl border-4 border-green-800">
          <source src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/videos/bionote.mp4" type="video/mp4"> Your browser does not support the video tag.
        </video>
      </div>
      <div class="lg:flex lg:w-7/12 mx-auto lg:gap-10 lg:shadow-lg">
        <div class="bg-green-800 lg:w-8/12 text-white">
          <div class="w-11/12 mx-auto pt-4">
            <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/president-profile.jpg" alt="president" class="w-full h-full mb-5 border-4 border-green-700" />
          </div>
          <div class="w-11/12 mx-auto">
            <h2 class="text-white text-xl font-bold mb-3">RECENT PUBLISHED WORK</h2>
            <h3 class="text-white lg:text-lg text-base mb-5 leading-tight"> The Aim of Lasallian Formation for Mission in the Context of Interreligious Learning </h3>
            <p class="text-sm text-white mb-3 leading-tight">The research concerns the question of the formation of religious identity in Lasallian schools in the context of today’s multi-cultural and multireligious reality. the published work is a synthesis version of a capstone project that uses the framework of the Institute’s Lasallian Formation: The Pilgrim’s Handbook (2019) to explore religious formation itinerary in an academic context.</p>
            <p class="italic text-xs text-white mb-10">https://axis.smumn.edu/2021/08/11/theaim-of-lasallian-formation-for-mission-in-the-context-of-interreligious-learning/</p>
            <h2 class="text-white text-xl font-bold">RECENT AWARD</h2>
            <ul class="list-disc text-white ml-4 mb-5 pb-4">
              <li>British Council Fellow (2020-2021)</li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <div class="w-11/12 mx-auto">
            <h1 class="uppercase text-3xl font-bold text-green-900">Br. Rey E. Mejias FSC</h1>
            <p class="font-bold text-lg mb-5">De La Salle Brother</p>
            <p class="lg:text-base mb-2  text-xs"> Br. Rey Erezare Mejias FSC currently serves as the President of La Salle University in Ozamiz City, Philippines. Additionally, he is actively engaged in the International Publications Office of the Institute of the Brothers of Christian Schools in Rome, Italy. </p>
            <p class="lg:text-base mb-2  text-xs"> He is a trustee of several La Salle institutions in the Philippines. Previously, he held the role of the Coordinating Secretary of the Secretariat for Formation of the De La Salle Brothers in Rome, Italy, from 2021 to 2024. </p>
            <p class="lg:text-base mb-2  text-xs"> Prior to his time in Rome, He was the Director of the Pacific Asia Regional Conference La Salle Novitiate in Lipa City, Batangas, Philippines, in 2017, 2018, and 2020. In 2019, he served as the Director of the Saint Joseph’s College Community in Hong Kong. </p>
            <p class="lg:mb-10 mb-2 lg:text-base text-xs"> His previous roles in the Philippines include President and Principal of the Jaime Hilario Integrated School- La Salle (Bataan) in 2016, Coordinator for the Lasallian East Asia District Pastoral Ministry for Vocations in 2015, Director of the Scholasticate House of Studies in De La Salle University (Manila) in 2014, Director of the District Vocations Ministry Office in 2008, and IT Coordinator & Chemistry Teacher in La Salle Academy (Iligan) in 2006. </p>
            <p class="lg:text-base mb-2 text-xs">Br. Rey has been a Professional Chemical Engineer since 2000 and a Professional Teacher since 2006. He obtained his M.S. in Teaching Physics & Chemistry from Mindanao University of Science & Technology in 2003, his M.A. in Religious Studies from Maryhill School of Theology in 2017, and his Executive Program Certificate in School Leadership from the National University of Singapore in 2018. </p>
            <p class="lg:text-base text-xs"> He completed his M.A. in School Leadership in 2021 and his Doctor of Education (Ed.D) in School Leadership in 2024 at St. Mary’s University of Minnesota, USA.</p>
          </div>
        </div>
      </div>
      <!-- <div class="h-20 border w-8/12 mx-auto">

      </div> -->
    </div>
    <!-- <TotalAmount class="my-10"/> -->
  </div>
</template>
<style scoped></style>