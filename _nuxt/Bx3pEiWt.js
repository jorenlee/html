import{_ as o}from"./B5ip3PvY.js";import{_ as i}from"./DC__lrXO.js";import{g as r,u as n,c as f,b as s,x as m,o as v}from"./Lz2sqZ9A.js";import{useTokenClient as u}from"./BapVyDEM.js";import{_ as b}from"./DlAUqK2U.js";import"./C5S46NFB.js";const g={class:"bg-gray-50"},p=m('<div class="" data-v-6968cdfb><div class="" data-v-6968cdfb><div class="relative" data-v-6968cdfb><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-6968cdfb><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-6968cdfb><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-6968cdfb><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-6968cdfb> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-6968cdfb><div class="w-11/12 mx-auto flex justify-between" data-v-6968cdfb><ul class="flex lasalle-green-text capitalize text-xs" data-v-6968cdfb><li data-v-6968cdfb><a href="/" class="mr-1" data-v-6968cdfb> Home </a></li><li data-v-6968cdfb><i class="fas fa-caret-right mr-1" data-v-6968cdfb></i><a href="/enrollment" class="mr-1" data-v-6968cdfb> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-6968cdfb><li data-v-6968cdfb><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-6968cdfb><i class="fa fa-user mr-2" aria-hidden="true" data-v-6968cdfb></i> Admin Login </a></li></ul></div></div></div></div><div class="w-11/12 mx-auto items-center lg:my-5 lg:shadow-lg" data-v-6968cdfb><div class="mx-auto gap-20" data-v-6968cdfb><div class="" data-v-6968cdfb></div><div class="" data-v-6968cdfb><div class="lg:flex flex-wrap mx-auto text-center justify-center gap-10 py-5 lg:my-14" data-v-6968cdfb><div class="lg:mb-0 mb-4 cursor-not-allowed" data-v-6968cdfb><div class="rounded-lg py-2 justify-center lg:px-10 px-5 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-gray-300 text-white border-b border-gray-100 mt-0.5 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6968cdfb><i class="fa fa-calendar-times mr-5 text-3xl pt-0.5" aria-hidden="true" data-v-6968cdfb></i><h1 class="my-auto lg:whitespace-nowrap leading-tight" data-v-6968cdfb>Summer Enrollment Closed</h1></div></div><div class="lg:mb-0 mb-4" data-v-6968cdfb><a href="https://my.lsu.edu.ph/class_offered_stat_open.jsp" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6968cdfb><i class="fa fa-list mr-5 text-3xl" aria-hidden="true" data-v-6968cdfb></i><h1 class="my-auto whitespace-nowrap" data-v-6968cdfb>Realtime Class Schedule</h1></a></div><div class="lg:mb-0 mb-4" data-v-6968cdfb><a href="/enrollment/tracking" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6968cdfb><i class="fa fa-tasks mr-5 text-3xl" aria-hidden="true" data-v-6968cdfb></i><h1 class="my-auto whitespace-nowrap" data-v-6968cdfb>Enrollment Tracking</h1></a></div><div class="" data-v-6968cdfb><a href="/enrollment/demonstration/enrollees" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6968cdfb><i class="fa fa-file-video mr-5 text-3xl" aria-hidden="true" data-v-6968cdfb></i><h1 class="my-auto whitespace-nowrap" data-v-6968cdfb>Enrollment Guide Video</h1></a></div><div data-v-6968cdfb></div></div></div></div></div></div>',1),x={__name:"index",setup(h){const d=r(),l=n();return u({onSuccess:async a=>{const t=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+a.access_token).catch(e=>e.data);d.setToken(a.access_token,t.data._rawValue.email),console.log("data.data",t.data),l.push("/enrollment/portal")},onError:a=>{console.log("Error: ",a)}}),(a,t)=>{const e=o,c=i;return v(),f("div",g,[s(e),p,s(c)])}}},V=b(x,[["__scopeId","data-v-6968cdfb"]]);export{V as default};