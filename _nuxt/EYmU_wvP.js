import{_ as i}from"./C8OS9JBd.js";import{_ as n}from"./Ct5hfwpw.js";import{g as r,u as c,c as m,b as s,x as v,o as u}from"./CkeeaNzp.js";import{useTokenClient as g}from"./wlFuxxpI.js";import{_ as h}from"./DlAUqK2U.js";import"./C5S46NFB.js";const p={class:"bg-gray-50"},x=v('<div class="" data-v-6967d46a><div class="" data-v-6967d46a><div class="relative" data-v-6967d46a><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-6967d46a><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-6967d46a><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-6967d46a><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-6967d46a> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-6967d46a><div class="w-11/12 mx-auto flex justify-between" data-v-6967d46a><ul class="flex lasalle-green-text capitalize text-xs" data-v-6967d46a><li data-v-6967d46a><a href="/" class="mr-1" data-v-6967d46a> Home </a></li><li data-v-6967d46a><i class="fas fa-caret-right mr-1" data-v-6967d46a></i><a href="/enrollment" class="mr-1" data-v-6967d46a> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-6967d46a><li data-v-6967d46a><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-6967d46a><i class="fa fa-user mr-2" aria-hidden="true" data-v-6967d46a></i> Admin Login </a></li></ul></div></div></div></div><div class="w-11/12 mx-auto items-center lg:my-5 lg:shadow-lg" data-v-6967d46a><div class="mx-auto gap-20" data-v-6967d46a><div class="" data-v-6967d46a></div><div class="" data-v-6967d46a><div class="lg:flex flex-wrap mx-auto text-center justify-center gap-10 py-5 lg:my-14" data-v-6967d46a><div class="lg:mb-0 mb-4" data-v-6967d46a><a href="https://my.lsu.edu.ph/class_offered_stat_open.jsp" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6967d46a><i class="fa fa-list mr-5 text-3xl" aria-hidden="true" data-v-6967d46a></i><h1 class="my-auto whitespace-nowrap" data-v-6967d46a>Realtime Class Schedule</h1></a></div><div class="lg:mb-0 mb-4" data-v-6967d46a><a href="/admissions/form" class="rounded-lg py-2.5 px-10 my-auto h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6967d46a><i class="fa fa-user-plus mr-5 text-3xl" aria-hidden="true" data-v-6967d46a></i><h1 class="my-auto whitespace-nowrap" data-v-6967d46a>Admissions</h1></a></div><div class="lg:mb-0 mb-4" data-v-6967d46a><a href="/enrollment/tracking" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6967d46a><i class="fa fa-tasks mr-5 text-3xl" aria-hidden="true" data-v-6967d46a></i><h1 class="my-auto whitespace-nowrap" data-v-6967d46a>Enrollment Tracking</h1></a></div><div class="" data-v-6967d46a><a href="/enrollment/demonstration/enrollees" class="rounded-lg py-2.5 px-10 my-auto justify-center h-fit lg:w-fit md:w-5/12 w-10/12 mx-auto shadow-xl bg-white text-green-800 lg:text-sm text-xs font-bold flex lg:whitespace-nowrap" data-v-6967d46a><i class="fa fa-file-video mr-5 text-3xl" aria-hidden="true" data-v-6967d46a></i><h1 class="my-auto whitespace-nowrap" data-v-6967d46a>Enrollment Guide Video</h1></a></div><div data-v-6967d46a></div></div></div></div></div></div>',1),f={__name:"index",setup(w){const d=r(),l=c();return g({onSuccess:async a=>{const t=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+a.access_token).catch(e=>e.data);d.setToken(a.access_token,t.data._rawValue.email),console.log("data.data",t.data),l.push("/enrollment/portal")},onError:a=>{console.log("Error: ",a)}}),(a,t)=>{const e=i,o=n;return u(),m("div",p,[s(e),x,s(o)])}}},V=h(f,[["__scopeId","data-v-6967d46a"]]);export{V as default};
