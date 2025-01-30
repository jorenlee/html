<script setup>
const menuDetails = ref(false);
</script>

<template>
  <!-- <div class="lasalle-green" :class="? 'fixed z-10':''"> -->
  <div
    class="lasalle-green fixed z-50 w-full font-montserrat"
    style="box-shadow: 0 5px 12px 0 rgb(0 0 0 / 20%), 0 3px 5px 0 rgb(0 0 0 / 19%)"
  >
    <div class="flex w-11/12 mx-auto justify-between">
      <a href="/" class="">
        <img
          src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/lsu-w-h.png"
          class="w-48 lg:w-60 lg:my-2.5 my-2"
        />
      </a>
      <div class="lg:block hidden">
        <ul class="flex uppercase font-semibold gap-1">
          <li class="text-xs">
            <a href="/" class="text-white hover:text-green-900 hover:bg-white rounded-lg block 
            h-fit hover:pt-4 hover:pb-3 hover:mt-3 hover:mb-1 px-5 mt-7 mb-5 
             ">Home </a>
          </li>
          <li class="text-xs relative nav">
            <a href="#" class="text-white hover:text-green-900 hover:bg-white rounded-lg block
            h-fit hover:pt-4 hover:pb-3 hover:mt-3 hover:mb-1 px-5 mt-7 mb-5 
            "
              >Academics <i class="fa fa-caret-down" aria-hidden="true"></i
            ></a>
            <ul
              class="text-xs lasalle-green text-white absolute text-left whitespace-nowrap z-10 rounded-md py-2 px-3 subnav capitalize"
            >
              <!-- <li class="whitespace-nowrap">CCSEA (College of Computer Science, Engineering, and Architecture)</li>
              <li class="whitespace-nowrap">CBA (College of Business and Accountancy)</li>
              <li class="whitespace-nowrap">CAS (College of Arts and Sciences)</li>
              <li class="whitespace-nowrap">CTE (College of Teacher Education)</li>
              <li class="whitespace-nowrap">SGS (School of Graduate Studies)</li>
              <li class="whitespace-nowrap">CTHM (College of Tourism and Hospitality Management)</li>
              <li class="whitespace-nowrap">CON (College of Nursing)</li>
              <li class="whitespace-nowrap">SGS (School of Graduate Studies)</li> -->
              <!-- <li class="hover:font-bold">
                <a href="/academics/basic-education">
                  Basic Education
                </a>
              </li> -->
              <li class="hover:font-bold">
                <a href="/academics/tertiary-education"> Tertiary Education </a>
              </li>
              <!-- <li class="hover:font-bold">
                <a href="/basic-ed"> Basic Education </a>
              </li> -->
              <li class="hover:font-bold">
                <a href="/class-schedules"> Class Schedules </a>
              </li>
              <!-- <li class="hover:font-bold">
                <a href="/academics">
                  School of Graduate Studies
                </a>
              </li> -->
            </ul>
          </li>
          <li class="text-xs">
            <a href="/administration" class="text-white hover:text-green-900 hover:bg-white rounded-lg block 
            h-fit hover:pt-4 hover:pb-3 hover:mt-3 hover:mb-1 px-5 mt-7 mb-5"
              >Administration
            </a>
          </li>

          <li class="text-xs">
            <a href="/directory" class="text-white hover:text-green-900 hover:bg-white rounded-lg block
            h-fit hover:pt-4 hover:pb-3 hover:mt-3 hover:mb-1 px-5 mt-7 mb-5">Contact </a>
          </li>
          <!-- 
          <li class="text-xs">
            <a href="/about" class="text-white hover:text-green-900 hover:bg-white rounded-lg h-full block px-5 pt-6 pb-5 mt-1 hover:pt-7">About </a>
          </li> -->
          <!-- <li class="text-xs">
            <a href="/directory" class="whitespace-nowrap text-white hover:text-gray-300">Contact Us</a>
          </li> -->
          <li class="text-xs relative nav">
            <a href="#" class="text-white hover:text-green-900 hover:bg-white rounded-lg block 
            h-fit hover:pt-4 hover:pb-3 hover:mt-3 hover:mb-1 px-5 mt-7 mb-5"
              >more <i class="fa fa-caret-down" aria-hidden="true"></i
            ></a>
            <ul
              class="text-xs lasalle-green text-white absolute text-left whitespace-nowrap z-10 rounded-md py-3 px-3 subnav capitalize"
            >
              <li class="hover:font-bold">
                <a href="/university-registrar"> Registrar </a>
              </li>
              <li class="hover:font-bold">
                <a href="/procurement"> Procurement </a>
              </li>
              <li class="hover:font-bold">
                <a href="/events"> Events </a>
              </li>
              <li class="hover:font-bold">
                <a href="/about"> About </a>
              </li>
              <li class="hover:font-bold">
                <a href="/human-resource"> Human Resource </a>
              </li>
              <!-- <li class="hover:font-bold">
                <a href="/faqs" class="capitalized"> Frequently asked questions </a>
              </li>
              <li class="hover:font-bold">
                <a href="/social-medias"> Social Media FB Pages </a>
              </li> -->
              <!-- <li class="hover:font-bold">
                <a href="/academics">
                  School of Graduate Studies
                </a>
              </li> -->
            </ul>
          </li>
          <!-- <li class="text-xs">
            <a href="/downloads">Downloads</a>
          </li> -->
          <!-- <li class="text-xs">
            <a href="/partners">Partners</a>
          </li> -->
        </ul>
      </div>
      <div class="lg:hidden block" @click="menuDetails = !menuDetails">
        <i
          class="fa text-3xl text-white pt-3"
          :class="menuDetails ? 'fa-times' : 'fa-bars'"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div
      class="font-bold w-full z-30 absolute shadow-lg bg-white pb-20 right-0 text-green-900"
      :class="menuDetails ? 'lg:hidden block min-h-screen overflow-y-scroll' : 'hidden'"
    >
      <ul class="px-5 w-full gap-10 text-left py-3">
        <li class="text-xl py-1.5">
          <a href="/">Home</a>
        </li>
        <!-- <li class="text-xl py-1.5">
          <a href="/about">About</a>
        </li> -->

        <li class="text-xl py-1.5 relative">
          <a href="#" class="pb-5"> Academics </a>
          <ul class="list-disc ml-5 text-xl py-1.5 text-left whitespace-nowrap rounded-md">
            <li class="py-1.5">
              <a href="/academics/tertiary-education"> Tertiary Education </a>
            </li>
            <li class="py-1.5">
              <a href="/class-schedules"> Class Schedules </a>
            </li>
          </ul>
        </li>
        <li class="text-xl py-1.5">
          <a href="/administration">Administration</a>
        </li>
        <!-- <li class="text-xl py-1">
          <a href="/directory" class="whitespace-nowrap">Contact Us</a>
        </li> -->
        <li class="text-xl py-1.5 relative">
          <a href="#" class="pb-5"> More </a>
          <ul class="list-disc ml-5 text-xl py-1 text-left whitespace-nowrap rounded-md">
            <li class="py-1">
              <a href="/procurement"> Procurement </a>
            </li>
            <li class="py-1">
              <a href="/library"> Library </a>
            </li>
            <li class="py-1">
              <a href="/events"> Events </a>
            </li>
            <li class="py-1">
              <a href="/university-registrar"> Registrar Appointment </a>
            </li>
            <li class="py-1">
              <a href="/data-privacy"> Data Privacy </a>
            </li>
            <li class="py-1">
              <a href="/downloads"> Downloads </a>
            </li>
            <li class="py-1">
              <a href="/about"> About </a>
            </li>
            <li class="py-1">
              <a href="/directory"> Contact Us </a>
            </li>
            <li class="py-1">
              <a href="/human-resource"> Human Resource </a>
            </li>
            <li class="py-1">
              <a href="/social-medias"> Social Media </a>
            </li>
            <!-- <li class="py-1">
              <a href="/donation/box"> Donation Box </a>
            </li> -->
            <!-- <li class="py-1">
              <a href="/faqs"> Frequently asked questions </a>
            </li>-->
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav {
    .subnav {
      display: none;
    }
    &:hover {
      color: #00ff84;
      .subnav {
        display: block;
      }
    }
  }
</style>