<script setup></script>
<template>
  <div class="font-montserrat">
    <div class="lg:block hidden">
      <div
        class="lg:h-auto w-full lg:relative z-30 bottom-0 lg:border-none bg-dark-green"
      >
        <div
          class="flex justify-evenly border-4 border-gray-50 shadow-xl rounded-2xl lg:w-11/12 mx-auto lg:gap-0.5 text-center"
        >
          <a
            href="/enrollment"
            class="block lg:bg-white lg:w-1/5 shortcuts text-center mx-auto lg:pr-5 lg:pl-2 lg:rounded-l-2xl lg:rounded-r-none rounded-md h-fit my-auto relative lg:hover:bg-slate-200 hover:border-1 hover:border-white"
            ><p
              class="lg:flex w-fit mx-auto lg:py-2.5 py-3 lg:rounded-none rounded-full lg:border-none border lg:shadow-none shadow-xl lg:px-0 px-3 lg:bg-transparent bg-white"
            >
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-1-apply-now.png"
                class="lg:w-8 lg:h-8 w-6 h-6 my-auto lg:mr-2 enrollnow-icon"
              /><span
                class="my-auto font-semibold lasalle-green-text whitespace-nowrap lg:text-base text-sm lg:text-green-900 text-white uppercase mx-auto block text enrollnow lg:relative absolute"
              >
                Enrollment
              </span>
            </p></a
          ><a
            href="/scholarships"
            class="block lg:bg-white w-1/5 shortcuts text-center mx-auto lg:pl-4 lg:pr-6 rounded-md lg:rounded-none h-fit my-auto relative lg:hover:bg-slate-200"
            ><p
              class="lg:flex w-fit mx-auto lg:py-3 py-3 lg:rounded-none rounded-full lg:border-none border lg:shadow-none shadow-xl lg:px-0 px-2.5 relative lg:bg-transparent bg-white"
            >
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-2-apply-for-scholarships.png"
                class="lg:w-8 lg:h-7 w-7 my-auto lg:mr-2 scholarships-icon"
              /><span
                class="my-auto font-semibold lasalle-green-text whitespace-nowrap lg:text-base text-sm lg:text-green-900 text-white text-center uppercase block text scholarships absolute lg:relative"
              >
                Scholarships
              </span>
            </p></a
          ><a
            href="/mylsu"
            class="block lg:bg-white w-1/5 shortcuts text-center mx-auto lg:px-5 rounded-md lg:rounded-none h-fit my-auto relative lg:hover:bg-slate-200"
            ><p
              class="lg:flex w-fit mx-auto py-2 lg:rounded-none rounded-full lg:border-none border lg:shadow-none shadow-xl lg:px-0 px-2 bg-white lg:bg-transparent"
            >
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-4-my-lsu.png"
                class="lg:w-9 w-6 lg:h-9 h-8 lg:mr-2 my-auto lg:py-0.5 mylsu-icon"
              /><span
                class="my-auto font-semibold lasalle-green-text whitespace-nowrap lg:text-base text-sm lg:text-green-900 text-white text-center uppercase block text mylsu absolute lg:relative"
              >
                my.lsu
              </span>
            </p></a
          ><a
            href="/library"
            class="block lg:bg-white lg:w-1/5 shortcuts text-center mx-auto lg:px-5 rounded-md lg:rounded-none h-fit my-auto relative lg:hover:bg-slate-200"
            ><p
              class="lg:flex w-fit mx-auto lg:py-3.5 py-3 lg:rounded-none rounded-full lg:border-none border lg:shadow-none shadow-xl lg:px-0 px-2.5 bg-white lg:bg-transparent"
            >
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-3-programs.png"
                class="lg:w-8 w-5 h-6 lg:h-6 lg:mr-4 my-auto library-icon"
              /><span
                class="my-auto font-semibold lasalle-green-text whitespace-nowrap lg:text-base text-sm lg:text-green-900 text-white text-center uppercase block text library lg:relative absolute"
              >
                Library
              </span>
            </p></a
          ><a
            href="https://lsu.instructure.com/login/canvas"
            class="flex items-center lg:bg-white lg:w-1/5 shortcuts text-center mx-auto lg:px-5 lg:rounded-r-2xl rounded-md lg:rounded-l-none my-auto lg:hover:bg-slate-200 lg:mb-0 -mb-3 justify-center py-1 canvas-bg"
            ><p
              class="lg:rounded-none rounded-2xl lg:border-none border lg:shadow-none shadow-xl lg:bg-transparent bg-white"
            >
              <img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/Logo_Canvas_Red_Horizontal.png"
                class="lg:block hidden lg:w-6/12 mx-auto max-h-12"
              /><img
                src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/Logo_Canvas_Red_Vertical.png"
                class="lg:hidden block lg:my-0.5 w-14 h-16 py-3 px-1 mx-auto"
              /></p
          ></a>
        </div>
      </div>
    </div>

    <div
      class="lg:h-auto lg:relative z-30 bottom-0 lg:border-none bg-dark-green lg:hidden block"
    >
      <div class="grid grid-cols-2 mx-auto gap-1 p-1 w-full">
        <a
          href="/enrollment"
          class="text-center p-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <img
              src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-1-apply-now.png"
              class="w-10 h-10 my-auto mx-auto enrollnow-icon"
            /><span class=""> ENROLLMENT </span>
          </p></a
        ><a
          href="/scholarships"
          class="text-center p-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <i
              class="fa fa-graduation-cap lasalle-green-text block my-auto mx-auto text-4xl"
              aria-hidden="true"
            ></i
            ><span class=""> SCHOLARSHIPS </span>
          </p></a
        ><a
          href="/mylsu"
          class="text-center p-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <img
              src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/btn-4-my-lsu.png"
              class="w-10 h-10 my-auto mx-auto mylsu-icon"
            /><span class=""> MY.LSU </span>
          </p></a
        ><a
          href="/library"
          class="text-center p-2 pt-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <i
              class="fa fa-book lasalle-green-text block my-auto mx-auto text-4xl"
              aria-hidden="true"
            ></i
            ><span class=""> LIBRARY </span>
          </p></a
        ><a
          href="https://lsu.instructure.com/login/canvas"
          class="text-center p-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <img
              src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/Logo_Canvas_Red_Vertical.png"
              class="lg:my-0.5 w-16 mx-auto"
            /></p></a
        ><a
          href="/faqs"
          class="text-center p-2 h-20 bg-white shadow-xl font-semibold lasalle-green-text"
          ><p class="">
            <i
              class="fa fa-question-circle lasalle-green-text block my-auto mx-auto text-4xl"
              aria-hidden="true"
            ></i
            ><span class=""> FAQs </span>
          </p></a
        >
      </div>
    </div>
  </div>
</template>

<style>
.shortcuts {
  width: 100%;
}
.canvas-bg {
  height: 52px;
}
.lasalle-green-bg {
  background-color: #02ff5b00 !important;
}
</style>