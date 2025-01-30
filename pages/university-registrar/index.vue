<script setup>
</script>

<template>
  <div class="bg-gray-50">
    <Header />
    <div class="">
      <div class="">
        <div class="relative">
             <Banner />
          <img
            src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png"
            class="align-top w-full h-36 object-none lg:hidden block"
          />
          <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
            <h1
              class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"
            >
              Registrar Appointment
            </h1>
          </div>
          <div class="pt-2.5 pb-3 shadow-lg">
            <ul
              class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"
            >
              <li>
                <a href="/university-registrar" class="mr-1"> Home </a>
              </li>
              <li>
                <i class="fas fa-caret-right mr-1"></i>
                <a href="/" class="mr-1">University Registrar</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-5 w-11/12 lg:flex mx-auto bg-white mb-5 shadow-md">
        <div class="w-full items-center flex lg:my-10">
          <div class="mx-auto lg:mt-0 lg:flex gap-10">
            <!-- href="/university-registrar/appointment" -->
            <!-- href="https://registrar.lsu.edu.ph/appointment/" -->
            <a
              href="https://registrar.lsu.edu.ph/appointment/"
              class="rounded-lg lg:py-2.5 p-2 lg:my-6 my-6 lg:w-80 justify-center mx-auto flex shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold lg:whitespace-nowrap"
            >
              <i
                class="fa fa-calendar-check mr-5 text-3xl"
                aria-hidden="true"
              ></i>
              <h1 class="my-auto whitespace-nowrap">Book Appointment</h1>
            </a>
            <!-- href="/university-registrar/track-appointment-status" -->
            <a
              href="/university-registrar/track-appointment-status"
              class="rounded-lg lg:py-2.5 p-2 lg:my-6 my-6 lg:w-80 justify-center mx-auto flex shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold lg:whitespace-nowrap"
            >
              <i class="fa fa-search mr-5 text-3xl" aria-hidden="true"></i>
              <h1 class="my-auto whitespace-nowrap">
                Track Appointment Status
              </h1>
            </a>
            <!-- href="/_/reg-admin" -->
            <a
              href="/_/reg-admin"
              class="rounded-lg lg:py-2.5 p-2 lg:my-6 my-6 lg:w-80 justify-center mx-auto flex shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold lg:whitespace-nowrap"
            >
              <i class="fa fa-user mr-5 text-3xl" aria-hidden="true"></i>
              <h1 class="my-auto whitespace-nowrap">Admin Login</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
</style>