import{_ as o}from"./CUC9w-nc.js";import{_ as i}from"./DOjW1NW_.js";import{g as n,u as r,c as m,b as s,x as v,o as u}from"./Bir4801W.js";import{useTokenClient as g}from"./BiKjeJOO.js";import{_ as h}from"./DlAUqK2U.js";import"./C5S46NFB.js";const p={class:"bg-gray-50"},x=v('<div class="" data-v-d3370c3e><div class="" data-v-d3370c3e><div class="relative" data-v-d3370c3e><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-d3370c3e><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-d3370c3e><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-d3370c3e><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-d3370c3e> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-d3370c3e><div class="w-11/12 mx-auto flex justify-between" data-v-d3370c3e><ul class="flex lasalle-green-text capitalize text-xs" data-v-d3370c3e><li data-v-d3370c3e><a href="/" class="mr-1" data-v-d3370c3e> Home </a></li><li data-v-d3370c3e><i class="fas fa-caret-right mr-1" data-v-d3370c3e></i><a href="/enrollment" class="mr-1" data-v-d3370c3e> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-d3370c3e><li data-v-d3370c3e><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-d3370c3e><i class="fa fa-user mr-2" aria-hidden="true" data-v-d3370c3e></i> Admin Login </a></li></ul></div></div></div></div><div class="w-11/12 mx-auto items-center lg:my-5 lg:shadow-lg" data-v-d3370c3e><div class="mx-auto gap-20" data-v-d3370c3e><div class="" data-v-d3370c3e></div><div class="" data-v-d3370c3e><div class="lg:flex flex-wrap mx-auto text-center justify-center gap-10 py-5 lg:my-14" data-v-d3370c3e><div class="lg:mb-0 mb-4" data-v-d3370c3e><a href="https://my.lsu.edu.ph/class_offered_stat_open.jsp" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-d3370c3e><i class="fa fa-list mr-5 text-3xl" aria-hidden="true" data-v-d3370c3e></i><h1 class="my-auto whitespace-nowrap" data-v-d3370c3e>Realtime Class Schedule</h1></a></div><div class="lg:mb-0 mb-4" data-v-d3370c3e><a href="/admissions/form" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-d3370c3e><i class="fa fa-user-plus mr-5 text-3xl" aria-hidden="true" data-v-d3370c3e></i><h1 class="my-auto whitespace-nowrap" data-v-d3370c3e>Admissions</h1></a></div><div class="lg:mb-0 mb-4" data-v-d3370c3e><a href="/enrollment/tracking" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-d3370c3e><i class="fa fa-tasks mr-5 text-3xl" aria-hidden="true" data-v-d3370c3e></i><h1 class="my-auto whitespace-nowrap" data-v-d3370c3e>Enrollment Tracking</h1></a></div><div class="" data-v-d3370c3e><a href="/enrollment/demonstration/enrollees" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-d3370c3e><i class="fa fa-file-video mr-5 text-3xl" aria-hidden="true" data-v-d3370c3e></i><h1 class="my-auto whitespace-nowrap" data-v-d3370c3e>Enrollment Guide Video</h1></a></div><div data-v-d3370c3e></div></div></div></div></div></div>',1),f={__name:"index",setup(w){const d=n(),l=r();return g({onSuccess:async a=>{const e=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+a.access_token).catch(t=>t.data);d.setToken(a.access_token,e.data._rawValue.email),console.log("data.data",e.data),l.push("/enrollment/portal")},onError:a=>{console.log("Error: ",a)}}),(a,e)=>{const t=o,c=i;return u(),m("div",p,[s(t),x,s(c)])}}},V=h(f,[["__scopeId","data-v-d3370c3e"]]);export{V as default};
