<script setup></script>
<template>
  <div class="lg:overflow-hidden">
    <div class="lg:flex h-screen">
      <div class="w-full lg:pl-44">
        <div class="lg:pt-14 pt-5">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/mace_png_lsg.png" class="lg:h-screen mx-auto -rotate-6 logo lg:w-auto w-7/12" alt="mace-logo" />
        </div>
      </div>
      <div class="w-full flex items-center lg:px-44">
        <div class="block">
          <div class="w-full mx-auto block">
            <!-- <h1 class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:pt-10 pt-0 lg:text-8xl text-5xl text-green-800 font-bold text-center lg:mb-10 mb-7 uppercase [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-900 hover:text-white">
              Rite of Investiture
            </h1> -->
            <h1 class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:pt-10 pt-0 lg:text-8xl text-5xl text-green-800 font-bold text-center lg:mb-10 mb-7 uppercase [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-800 hover:text-green-600"> Rite of Investiture </h1>
            <p class="text-center font-bold lg:text-3xl text-xl hover:text-green-800">of the 5th President</p>
          </div>
          <NuxtLink to="/investiture/presentations">
            <!-- <NuxtLink to="/investiture"> -->
            <button class="text-green-800 bg-white lg:mb-10 mb-5 border-transparent hover:border-green-900 shadow-lg block mx-auto rounded-lg px-10 py-1 lg:mt-20 mt-10 border border-gradient-to-r from-green-500">
              <i class="fa fa-angle-double-right text-3xl"></i>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  /* div {
    perspective: 500px;	
    justify-content: center;
    align-items: center;
  } */
  .logo {
    transform: rotateY(-20deg);
    animation: rotateAnimation 50s linear infinite;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotateY(-20deg);
    }

    to {
      transform: rotateY(310deg);
    }
  }
</style>