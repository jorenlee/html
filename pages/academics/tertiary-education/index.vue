<script setup>
import tertiaryJSON from "./tertiary.json";
const tertiary = ref(tertiaryJSON.tertiary);

const underGrad = ref(true);
const gradStud = ref(false);

const schoolToggle = (a, b) => {
  underGrad.value = a
  gradStud.value = b
}

</script>
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
          <h1
            class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"
          >
            Tertiary Education
          </h1>
        </div>
        <div class="pt-2.5 pb-3 shadow-lg">
          <ul
            class="flex flex-wrap lasalle-green-text capitalize w-11/12 mx-auto text-xs"
          >
            <li>
              <a href="/" class="mr-1"> Home </a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="#" class="mr-1"> Academics </a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a class="hover:underline mr-1" href="#"> Tertiary Education </a>
            </li>
            <li>
              <i class="fas fa-caret-right mr-1"></i>
              <a href="#" class="flex-wrap capitalize mr-1"> degree programs </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="">
      <div class="text-center">
        <div class="lg:flex gap-10 w-11/12 mx-auto lg:mt-10 mt-3">
          <div class="lg:w-3/12 w-full h-fit lg:mt-0 mt-5 mb-3">
            <div v-for="(t, i) in tertiary" class="" :key="i">
              <div v-for="(tu, i) in t.under_grad" class="mb-2 bg-white border-l-4 border-green-900" :key="i" @click="schoolToggle(true, false)">
                <div class="lg:text-sm text-xs py-2 text-center hover:bg-green-900 hover:text-white cursor-pointer">
                  <span class="tracking-widest">
                    {{ tu.title }}
                  </span>
                </div>
              </div>
              <div v-for="(tu, i) in t.grad_stud" :key="i" class="bg-white border-l-4 border-green-900" @click="schoolToggle(false, true)">
                <div class="lg:text-sm text-xs py-2 text-center hover:bg-green-900 hover:text-white cursor-pointer">
                  <span class="tracking-widest">
                    {{ tu.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-6/12 w-full">
            <div v-for="(t, i) in tertiary" class="" :key="i">
              <div v-for="(tu, i) in t.under_grad" class="lg:mb-10" :key="i" v-show="underGrad">
                <div class="accordion mb-5">
                  <div v-for="(a, i) in tu.list" :key="i" class="mb-1">
                    <div
                      class="bg-white border-b-2 flex"
                      @click="a.active = !a.active"
                    >
                      <!-- <div class="lg:w-full h-auto border border-white">
                        <img
                          :src="`https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/colleges/${a.logo}.png`"
                          class="mx-auto w-44 h-auto mt-5 flex items-center"
                          :alt="a.logo"
                        />
                        <h1 class="bg-green-900 py-1 px-5 text-white text-xl">{{a.abbr}}</h1>
                      </div> -->
                      <i
                        class="fa text-gray-700 text-sm lg:px-5 px-3 flex items-center"
                        :class="a.active ? 'fa-minus' : 'fa-plus'"
                        @click="a.active = !a.active"
                      ></i>
                      <h2 class="accordion-header mb-0">
                        <button
                          class="items-center w-full px-5 bg-white border-b rounded-none transition focus:outline-none justify-between mx-auto"
                          type="button"
                        >
  
                          <h1
                            class="font-bold text-green-900 text-xs py-2 my-2 flex items-center text-left"
                          >
                            {{ a.title }} {{a.abbr}}
                          </h1>
                        </button>
                      </h2>
                    </div>
                    <div
                      v-if="a.active"
                      class="bg-white border border-gray-200"
                    >
                      <div class="accordion-body py-4 px-5 text-left">
                        <ul class="lg:pl-20 pl-2">
                          <li
                            class="lg:text-sm text-xs hover:font-bold"
                            v-for="(p, i) in a.programs"
                            :key="i"
                          >
                            <!-- href="/academics/tertiary-education/programs" -->
                            <a
                              href="#"
                              class="hover:font-bold hover:text-green-900 block"
                              >{{ p.title }}</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-for="(tu, i) in t.grad_stud" :key="i" class="lg:mb-6 mb-5" v-show="gradStud">
                <div class="accordion">
                  <div
                    v-for="(a, i) in tu.list"
                    :key="i"
                    class="lg:flex justify-center"
                  >
                    <div
                      class="h-full bg-white border border-gray-200 lg:w-[500px]"
                      :class="a.active ? '' : 'mx-auto'"
                      @click="a.active = !a.active"
                    >
                      <div class="lg:w-full h-auto border border-white px-2">
                        <img
                          :src="`https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/colleges/${a.logo}.png`"
                          class="mx-auto w-44 h-auto mt-5 flex items-center"
                          :alt="a.logo"
                        />
                      </div>
                      <h2 class="accordion-header mb-0">
                        <button
                          class="items-center w-full px-5 bg-white border-b rounded-none transition focus:outline-none justify-between mx-auto"
                          type="button"
                        >
                          <h1
                            class="font-bold text-green-900 text-xs lg:h-16 h-20 lg:mt-0 mt-3 flex items-center justify-center whitespace-nowrap"
                          >
                            {{ a.title }}
                          </h1>
                        </button>
                      </h2>
                    </div>
                    <div
                      v-if="a.active"
                      class="lg:flex bg-white border border-gray-200 w-full"
                    >
                      <div class="lg:w-1/12 w-11/2 lg:flex items-center lg:p-5">
                        <i
                          class="lg:block hidden fa text-green-700 text-3xl"
                          :class="a.active ? 'fa-caret-left' : 'fa-caret-right'"
                          @click="a.active = !a.active"
                        ></i>
                        <i
                          class="lg:hidden block fa text-green-700 text-3xl"
                          :class="a.active ? 'fa-caret-up' : 'fa-caret-down'"
                          @click="a.active = !a.active"
                        ></i>
                      </div>
                      <div
                        class="w-full accordion-body lg:pt-4 px-5 text-center"
                      >
                        <a
                          href="/academics/tertiary-education/programs"
                          class="font-bold hover:text-green-900 hover:text-lg lg:mb-3 uppercase"
                          >{{ a.title }}</a
                        >
                        <ul>
                          <li
                            class="lg:text-base text-xs"
                            v-for="(c, i) in a.category"
                            :key="i"
                          >
                            <h1 class="my-3 font-bold">{{ c.title }}</h1>
                            <a
                              href="/academics/tertiary-education/programs"
                              class="hover:font-bold hover:text-green-900 mb-3"
                              >{{ c.abbr }}</a
                            >
                            <ul class="mb-3">
                              <li
                                class="lg:text-sm text-xs hover:font-bold"
                                v-for="(p, i) in c.programs"
                                :key="i"
                              >
                                <a
                                  :href="`academics/progams/${p.abbr}`"
                                  class="hover:font-bold hover:text-green-900"
                                  >{{ p.title }}</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style></style>