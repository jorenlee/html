import{_ as o}from"./B5roEsCe.js";import{_ as i}from"./DpNp_6zy.js";import{g as n,u as r,c as m,b as c,x as v,o as u}from"./ClyeHbQ_.js";import{useTokenClient as g}from"./DuytjlAo.js";import{_ as p}from"./DlAUqK2U.js";import"./C5S46NFB.js";const h={class:"bg-gray-50"},x=v('<div class="" data-v-c6cd7488><div class="" data-v-c6cd7488><div class="relative" data-v-c6cd7488><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-c6cd7488><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-c6cd7488><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-c6cd7488><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-c6cd7488> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-c6cd7488><div class="w-11/12 mx-auto flex justify-between" data-v-c6cd7488><ul class="flex lasalle-green-text capitalize text-xs" data-v-c6cd7488><li data-v-c6cd7488><a href="/" class="mr-1" data-v-c6cd7488> Home </a></li><li data-v-c6cd7488><i class="fas fa-caret-right mr-1" data-v-c6cd7488></i><a href="/enrollment" class="mr-1" data-v-c6cd7488> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-c6cd7488><li data-v-c6cd7488><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-c6cd7488><i class="fa fa-user mr-2" aria-hidden="true" data-v-c6cd7488></i> Admin Login </a></li></ul></div></div></div></div><div class="w-11/12 mx-auto items-center lg:my-5 lg:shadow-lg" data-v-c6cd7488><div class="mx-auto gap-20" data-v-c6cd7488><div class="" data-v-c6cd7488></div><div class="" data-v-c6cd7488><div class="lg:flex flex-wrap mx-auto text-center justify-center gap-10 py-5 lg:my-14" data-v-c6cd7488><div class="lg:mb-0 mb-4" data-v-c6cd7488><a href="https://my.lsu.edu.ph/class_offered_stat_open.jsp" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-c6cd7488><i class="fa fa-list mr-5 text-3xl" aria-hidden="true" data-v-c6cd7488></i><h1 class="my-auto whitespace-nowrap" data-v-c6cd7488>Realtime Class Schedule</h1></a></div><div class="lg:mb-0 mb-4" data-v-c6cd7488><a href="/admissions/form" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-c6cd7488><i class="fa fa-user-plus mr-5 text-3xl" aria-hidden="true" data-v-c6cd7488></i><h1 class="my-auto whitespace-nowrap" data-v-c6cd7488>Admissions</h1></a></div><div class="" data-v-c6cd7488><a href="/enrollment/tracking" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-c6cd7488><i class="fa fa-tasks mr-5 text-3xl" aria-hidden="true" data-v-c6cd7488></i><h1 class="my-auto whitespace-nowrap" data-v-c6cd7488>Enrollment Tracking</h1></a></div><div data-v-c6cd7488></div></div></div></div></div></div>',1),f={__name:"index",setup(w){const s=n(),d=r();return g({onSuccess:async a=>{const t=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+a.access_token).catch(e=>e.data);s.setToken(a.access_token,t.data._rawValue.email),console.log("data.data",t.data),d.push("/enrollment/portal")},onError:a=>{console.log("Error: ",a)}}),(a,t)=>{const e=o,l=i;return u(),m("div",h,[c(e),x,c(l)])}}},T=p(f,[["__scopeId","data-v-c6cd7488"]]);export{T as default};
