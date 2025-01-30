<script setup>
  import {
    useUserStore
  } from "@/stores/user";
  const router = useRouter();
  const userStore = useUserStore();
  const endpoint = ref(userStore.mainDevServer);
  // const careers = await $fetch(endpoint.value + "/api/humanResource/list").catch(
  //   (error) => error.data);

  const careers = [{
    image_url: "https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/humanResource/files/s1.jpg"
  }]
  // console.log(careers)
</script>
<template>
  <div>
    <Header />
    <div class="">
      <div class="">
        <div class="relative">
          <img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" />
          <img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" />
          <div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full">
            <h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> human resource </h1>
          </div>
          <div class="shadow-lg">
            <div class="w-11/12 mx-auto flex justify-between">
              <ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-3">
                <li>
                  <a href="/" class="mr-1"> Home </a>
                </li>
                <li>
                  <i class="fas fa-caret-right mr-1"></i>
                  <a href="/campus-pass" class="mr-1"> human resource </a>
                </li>
              </ul>
              <ul class="flex hover:text-green-800 text-white">
                <li class="px-3 h-full flex items-center capitalize text-xs ">
                  <a href="/_/campus-pass-admin" class="flex items-center">
                    <span class="">Admin Login</span>
                  </a>
                </li>
                <li class="bg-green-800 px-3 h-full flex items-center capitalize text-xs ">
                  <a href="/_/campus-pass-admin" class="flex items-center">
                    <i class="fa fa-user text-white" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-11/12 mx-auto shadow lg:px-10 px-4 lg:py-12 py-5 my-10 rounded-lg">
          <h1 class="text-center text-green-700 font-bold lg:text-3xl text-lg capitalize"> career opportunities </h1>
          <ul class="lg:grid grid-cols-3 gap-5 lg:py-10">
            <li v-for="(c, i) in careers" :key="i" class="">
              <!-- <img class="lg:mx-0 mx-auto w-[700px] lg:h-[550px]" :src="`https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/humanResource/files/${c.image_link}`" /> -->
              <!-- :src="`https://lsu-media-styles.sgp1.cdn.digitaloceanspaces.com/lsu-public-images/slides-landing-page/${c.image}`" -->
               <img :src="c.image_url" class="border p-3 rounded-lg hover:rounded-none shadow-md hover:shadow-none lg:my-0 my-5 bg-white hover:bg-green-800"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<style scope></style>