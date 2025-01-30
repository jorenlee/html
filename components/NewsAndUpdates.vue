<script setup>
const router = useRouter();
const newsupdates = [
  {
    image:
      "https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/newsupdates/n1.jpg",
    link:
      "https://www.facebook.com/lsu.edu.ph/posts/pfbid02uqmtVSEBV2nu6qXkMcMJva1DbH5c3XXyvgu1qRZCRysNf2pFehnt3QPT2iGwUDzCl",
  },
  {
    image:
      "https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/newsupdates/n2.png",
    link:
      "https://www.facebook.com/lsu.edu.ph/posts/pfbid0Cyv76mNwJA8DnyeuMnA45aQ6ahqr4vEYY3WfUvuSBgchJoYmkGmNVWaxoMvPUiTpl",
  },
  {
    image:
      "https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/newsupdates/n3.png",
    link:
      "https://www.facebook.com/lsu.edu.ph/posts/pfbid02maZUk8T7oLcsao1y5VF7ThDGKYiCfgDLhVFsUqhVTq8UCCw5acJEtJP1a87KQkdwl",
  },
];

const communityCalendar = () => {
  router.push("/calendar/community-calendar")
}

const alternativeCalendar = () => {
  router.push("/calendar/alternative")
}
</script>

<template>
<div class="">
  <!-- <div class="bg-green-700">
      <div class="lg:pt-24 pt-5 lg:pb-20">
        <div class="w-11/12 mx-auto">
          <div
            class="mx-auto w-11/12 text-center font-bold lg:text-3xl text-lg uppercase text-white lg:mb-10"
          >
            News and Updates
          </div>
          <div
            class="lg:grid grid-cols-3 text-center mx-auto lg:py-10 pt-4 pb-2 gap-14 list-none"
          >
            <div
              class="hover:shadow-2xl hover:border hover:border-white w-full lg:h-[350px] h-[200px] relative lg:mb-0 mb-3 cursor-pointer shadow-4xl"
              v-for="(nu, i) in newsupdates"
              :key="i"
            >
              <NuxtLink :to="nu.link">
             
                <img :src="nu.image" class="object-cover h-full w-full z-10 absolute" />
                <button
                  class="text-left text-xs text-white w-full bg-black opacity-80 px-3 h-20 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
                >
                  
                  <div class="-mt-3">
                    <h1 class="text-sm font-bold">LSU Welcomes Sister Ann Carbon MSC</h1>
                    <h3 class="line-clamp-2 text-xs">
                      Welcome to La Salle University, Sister Anne Carbon MSC,
                      Congregational Leader of the Missionary Sisters of Saint Columban.
                    </h3>
                  </div>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  <!-- <i class="fa fa-angle-down text-5xl" aria-hidden="true"></i> -->
  <!-- <div class="absolute w-full h-80" :style="{backgroundImage: 'url('+(nu.image)+')' , opacity: '0.2'}"></div>
                <div class="absolute w-full h-80 opacity-60"></div> -->
  <!-- <div
      class="w-fit lasalle-green-text rounded-md mx-auto text-center text-xl text-white font-bold p-3"
    >
      Higher Education
    </div> -->
  <!-- <div
      class="w-fit lasalle-green-text rounded-md mx-auto text-center text-xl text-white font-bold p-3"
    >
      Basic Education
    </div>
    <div
      class="grid grid-cols-3 text-center w-11/12 mx-auto py-5 gap-5 list-none"
    >
      <li class="border w-full h-44 bg-green-600">
        <img src="" class="" />
        <p class="text-center font-bold uppercase text-white">
          APPLICATION FOR ADMISSION
        </p>
      </li>
    </div> -->


  <!-- <div class="lg:block hidden">
      <div class="h-1 w-full bg-white">
      </div>
      <div class="h-2 w-full bg-green-700">
      </div>
      <div class="h-1 w-full bg-white">
      </div>
    </div>
    <div class="h-2 w-full bg-green-700">
    </div>
    <div class="h-1 w-full bg-white">
    </div> -->



  <div class="lg:flex border lg:bg-[#dddddd]">
    <div class="lg:w-5/12 lg:bg-[#dddddd] lg:px-10">
      <div class="lg:flex relative">

        <div class="lg:bg-transparent bg-green-900 lg:py-0">
          <div class="lg:pt-3 pt-2">
            <a href="https://www.facebook.com/lsuadvacement" class="">


              <div class="w-fit mx-auto">
                <!-- <img
                  src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/lsu-corporate-logo-green.png"
                  class="mb-4 lg:static absolute top-2 left-2 w-24 z-10 mx-auto lg:block hidden"> -->
                <h1
                  class="mx-auto lg:text-lg text-sm font-semibold  lg:text-green-900 text-white text-left leading-tight my-2 uppercase">
                  Advancement and Linkages
                </h1>

              </div>



            </a>
          </div>
          <div class="lg:w-11/12 lg:mt-4 mx-auto overflow-hidden flex items-center">
            <img
              src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/lsuOPR.jpg"
              class="xl:w-auto lg:w-full lg:max-h-[888px] xl:max-h-[800px] lg:mb-3"></div>


              <a href="https://www.facebook.com/lsuadvacement" target="_blank"
            class="mx-auto cursor-pointer text-xs uppercase py-3 lg:mt-2 -mt-10 lg:relative absolute lg:bg-green-800 bg-[#173b08ba] 
            lg:hover:bg-white lg:border lg:hover:border-green-800 hover:text-green-800 lg:hover:text-green-800 text-white px-4 lg:py-2 block lg:w-fit w-full lg:my-4 text-center"><span
              class="font-bold whitespace-nowrap"> learn more</span>


              </a>
        </div>
      </div>
    </div>


    <div class="lg:bg-[#ffffff] relative lg:w-9/12">
      <div class="text-center bg-white text-green-950 font-bold py-2 border-t-4">
        University Events and Activities
      </div>
      <div class="border-t-2">
        <div class="lg:flex w-full">

      

        <div class="relative w-full lg:h-[400px] hover:border-b-4 border-green-900 cursor-pointer" 
        @click="communityCalendar">
          <div class="w-full lg:h-[400px] z-10 lg:absolute lg:opacity-50 hover:opacity-90 bg-gradient-to-t from-green-800 lg:block hidden"></div>
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/Monthly%20Calendar.png" 
          class="lg:h-[400px] mx-auto"/>
        </div>
        <div class="relative w-full lg:h-[400px] hover:border-b-4 border-green-900 cursor-pointer lg:border-t-0 border-t-2" 
        @click="alternativeCalendar">
          <div class="bg-[#fff] w-full lg:h-[400px] z-10 lg:block hidden"></div>
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/CalendarB.jpg" 
          class="hover:opacity-70 lg:absolute lg:top-0 z-10 lg:h-[400px] lg:left-1/2 lg:transform lg:-translate-x-1/2"/>
        </div>


        </div>
        <!-- <div class="lg:w-11/12 flex items-center lg:order-2 order-1"><img
            src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/lsutingogbanner.jpg"
            class="object-cover w-full lg:h-full shadow-2xl max-h-[387px]"></div>
        <div class="lg:w-5/12 text-left lg:order-1 order-2 lg:px-10">
          <a href="https://www.facebook.com/lsutingog" target="_blank" class="mx-auto text-white w-full">
            <div class="lg:w-24 lg:h-38 lg:mb-5">
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/LSUTingogLogo.jpg"
                class="xl:h-44 h-32 object-cover lg:block hidden">
            </div>
            <div class="lg:bg-transparent lg:block flex bg-[#11590a] w-full items-center justify-between lg:px-0 px-3">
              <h1 class="lg:block lg:mb-10 flex italic font-semibold lg:text-white text-white"><span
                  class="uppercase block lg:text-xl lg:mt-9">tingog&nbsp;</span><span class="capitalize lg:text-xl">
                  student publications</span></h1>
              <button
                class="w-fit cursor-pointer lg:mb-10 my-2 text-left text-xs uppercase lg:text-green-900 text-white lg:bg-white 2xl:px-7 xl:px-4 px-3 lg:py-2.5 block"><span
                  class="lg:block hidden font-bold">learn more</span><span class="lg:hidden block"><i
                    class="fa fa-angle-double-right text-xl"></i></span></button>
            </div>
          </a>
        </div> -->




      </div>

      <div class="flex items-center lg:bottom-0 lg:absolute w-full z-20 border-t-2 bg-white">
        <a target="_blank" href="https://www.facebook.com/lsuETC"
          class="bg-white hover:bg-green-700 w-full  border-r-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/ETC.png"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU ETC </p> -->
        </a>
        <a target="_blank" href="https://www.facebook.com/lsucso"
          class="bg-white hover:bg-green-700 w-full border-r-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/CSO.png"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU CSO </p> -->
        </a>
        <a target="_blank" href="https://www.facebook.com/lsuusg"
          class="bg-white hover:bg-green-700 w-full border-r-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/USG.png"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU USG </p> -->
        </a>

        <a target="_blank" href="https://www.facebook.com/lsu.swc"
          class="bg-white hover:bg-green-700 w-full border-r-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/Sports.png"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU SWC </p> -->
        </a>




        <a target="_blank" href="https://www.facebook.com/lsuozamizstudentaffairs"
          class="bg-white hover:bg-green-700 w-full border-r-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/SAC.jpg"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU SAC </p> -->
        </a>


        <a target="_blank" href="https://www.facebook.com/artsandculturecenter"
          class="bg-white hover:bg-green-700 w-full border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/ACC.jpg"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU ACC </p> -->
        </a>

     
        <a target="_blank" href="https://www.facebook.com/lsutingog"
          class="bg-white hover:bg-green-700 w-full border-l-2 border-gray-300 py-2 text-green-950 hover:text-white">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/LSUTingog.jpg"
            class="w-[40px] mx-auto rounded-full" />
          <!-- <p class="font-bold  text-center">LSU Tingog </p> -->
        </a>


      </div>
    </div>
  </div>
</div>
</template>