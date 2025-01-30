<script setup></script>

<template>
  <div class="bg-gray-50">
    <Header />

    <div class="">
      <div class="relative">
        <Banner />
        <img
          src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png"
          class="align-top w-full h-36 object-none lg:hidden block"
        />
        <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
          <h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto">
            class schedule
          </h1>
        </div>
        <div class="pt-2.5 pb-3 shadow-lg">
          <ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs">
            <li>
              <a href="/" class="mr-1"> Home </a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="/" class="mr-1">class schedule</a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="/" class="mr-1">A.Y. 2023 - 2024</a>
            </li>
              <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="/" class="mr-1">Term 1</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:py-7">
      <div class="lg:w-11/12 mx-auto lg:shadow-2xl lg:rounded-lg" style="background-color: #076f2c;">
        <!-- <img
          class="lg:w-8/12 mx-auto"
          src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/class-shifting-2324.png"
        /> -->
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>
