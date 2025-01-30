<script setup>
const display = ref("desktop");
const displayMikrotik = ref(false);
onMounted(() =>
  nextTick(() => {
    if (window.innerWidth < 800) {
      display.value = "mobile";
    }
  })
)
</script>

<template>
<div class="font-montserrat">
  <Header />
  <div v-if="display === 'desktop'">
    <Slider />
  </div>
  <div v-if="display === 'mobile'">
    <SliderMobile />
  </div>
  <div class="lg:relative block z-0">
    <div class="">
      <Shortcuts class="lg:-mt-0.5 bg-white 2xl-shadow" />
    </div>
    <NewsAndUpdates />
    <div>
      <div v-if="!displayMikrotik" @click="displayMikrotik = !displayMikrotik"
        class="w-full border-y-4 border-green-700 bg-white">

        <div class="flex items-center w-fit mx-auto py-6">
          
         <a href="/linkages/Mikrotik" target="_blank" class="flex"> <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/partners/MikrotikAcademy.jpg"
          class="lg:w-[300px]  w-10/12  h-auto  object-contain lg:mx-10 mx-auto" /></a>

         <a href="/" target="_blank">
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/partners/Philnitslogo.jpg"
          class="lg:w-[200px] w-8/12  h-auto   object-contain lg:mx-10 mx-auto" />
         </a>
        </div>
      </div>
      <div class="text-center bg-green-800 text-white" v-if="displayMikrotik"
        @click="displayMikrotik = !displayMikrotik">
        <i class="fa fa-angle-double-up text-2xl pt-1 hover:text-3xl hover:my-5"></i>
      </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<style scoped>
.bg {
  background: url("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>