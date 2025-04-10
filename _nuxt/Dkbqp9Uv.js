import{_ as h}from"./D291dK2I.js";import{_ as S}from"./D0XM5dVK.js";import{u as k,e as _,r as o,c as d,b as g,a as e,i,k as u,f as a,d as r,n as j,o as c}from"./De3fpnXA.js";import{useTokenClient as C}from"./CisD51uc.js";import{_ as N}from"./DlAUqK2U.js";import"./C5S46NFB.js";const E={class:"bg-gray-50"},O={class:""},V={class:"lg:flex lg:w-11/12 mx-auto lg:mt-2 text-center justify-center lg:pb-5 gap-10 tracking-tight"},A={class:"lg:w-full shadow-lg pb-5 lg:border-t-0 border-t-2"},I={class:"w-11/12 mx-auto text-center mb-5"},T={class:"w-full lg:grid grid-cols-2 gap-x-3 justify-between lg:text-sm text-xs"},R={class:"w-full lg:mb-5 mb-2 border bg-white"},B={class:"lg:py-2.5 py-2 block relative text-center"},L={key:0},P={class:"w-full mb-5 border bg-white"},z={class:"bg-white text-green-800 lg:py-4 py-2 border-b w-full justify-center"},F={key:0},M={__name:"index",setup(U){const f=k(),m=_(),p=o(!1),b=o(!1),s=o(!1),x=l=>{},v=async l=>{const t=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+l.access_token).catch(n=>n.data);f.setToken(l.access_token,t.data._rawValue.email),m.push("/enrollment/portal")},{isReady:$,login:H}=C({onSuccess:v,onError:x});return(l,t)=>{const n=h,w=S;return c(),d("div",E,[g(n),e("div",O,[t[16]||(t[16]=i('<div class="" data-v-70da01c3><div class="relative" data-v-70da01c3><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-70da01c3><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-70da01c3><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-70da01c3><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-70da01c3> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-70da01c3><div class="w-11/12 mx-auto flex justify-between" data-v-70da01c3><ul class="flex lasalle-green-text capitalize text-xs" data-v-70da01c3><li data-v-70da01c3><a href="/" class="mr-1" data-v-70da01c3> Home </a></li><li data-v-70da01c3><i class="fas fa-caret-right mr-1" data-v-70da01c3></i><a href="/enrollment" class="mr-1" data-v-70da01c3> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-70da01c3><li data-v-70da01c3><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-70da01c3><i class="fa fa-user mr-2" aria-hidden="true" data-v-70da01c3></i> Admin Login </a></li></ul></div></div></div></div>',1)),e("div",V,[e("div",A,[e("div",I,[t[14]||(t[14]=e("p",{class:"font-bold text-green-900 lg:text-3xl text-lg lg:mb-10 mb-2 lg:mt-7 mt-3"},"Enrollment Steps",-1)),e("ul",T,[e("li",R,[t[3]||(t[3]=e("span",{class:"justify-evenly flex lg:bg-green-800 bg-green-600 text-white py-1 font-bold"},[e("span",{class:"w-full"},"Step 1:"),e("span",{class:"w-full uppercase"},"Admissions")],-1)),e("div",B,[a(b)?(c(),d("div",L,t[2]||(t[2]=[e("p",{class:"text-green-800 text-xs w-11/12 mx-auto"},"For New Enrollees Submit Hard Copy Documents",-1),e("p",{class:"text-green-800 text-xs w-11/12 mx-auto"},"at Admissions and Scholarships Center Office",-1)]))):u("",!0)])]),t[12]||(t[12]=i('<li class="w-full lg:mb-5 mb-2 border bg-white" data-v-70da01c3><span class="justify-between flex text-white lg:bg-green-800 bg-green-700 py-1 font-bold" data-v-70da01c3><span class="w-full" data-v-70da01c3>Step 2:</span><span class="w-full uppercase" data-v-70da01c3>Advising</span></span><div class="lg:py-3 pt-3.5 pb-2" data-v-70da01c3><p class="bg-white text-green-800 w-full flex justify-center lg:py-0" data-v-70da01c3><span class="font-bold" data-v-70da01c3>ONSITE</span> : Visit SJ Building LSU Campus </p><p class="text-green-800 bg-white lg:pb-0 pb-2 justify-center" data-v-70da01c3><span class="mr-1" data-v-70da01c3>or College Departments for</span><span class="font-bold" data-v-70da01c3>Course Subjects</span></p></div></li>',1)),e("li",P,[t[11]||(t[11]=e("span",{class:"justify-between flex text-white lg:bg-green-800 bg-green-800 py-1 font-bold"},[e("span",{class:"w-full"},"Step 3:"),e("span",{class:"w-full uppercase"},"Payment")],-1)),e("p",z,[t[4]||(t[4]=e("span",{class:"font-bold"},"ONSITE:",-1)),t[5]||(t[5]=r(" Accounting Office or ")),t[6]||(t[6]=e("br",null,null,-1)),t[7]||(t[7]=r()),t[8]||(t[8]=e("span",{class:"font-bold"},"ONLINE: ",-1)),t[9]||(t[9]=r(" Payment Methods ")),e("button",{onClick:t[0]||(t[0]=y=>s.value=!a(s)),class:"mt-1 ml-2 h-fit w-fit rounded-full"},[e("i",{class:j(["fa text-green-900 text-[17px] border-2 border-green-400 p-0 rounded-full leading-0",(a(s),"fa-info-circle")])},null,2)])]),a(s)?(c(),d("div",F,[e("div",{onClick:t[1]||(t[1]=y=>p.value=!a(p))},t[10]||(t[10]=[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"hover:border-4 hover:rounded-lg border-green-800"},null,-1)]))])):u("",!0)]),t[13]||(t[13]=i('<li class="w-full lg:mb-5 mb-2 border bg-white" data-v-70da01c3><span class="justify-between flex text-white lg:bg-green-800 bg-green-900 py-1 font-bold" data-v-70da01c3><span class="w-full" data-v-70da01c3>Step 4:</span><span class="w-full uppercase" data-v-70da01c3>Validation</span></span><p class="ml-1 text-green-800 lg:pt-5 pt-2 lg:flex block justify-center" data-v-70da01c3><span class="font-bold lg:flex block mr-1" data-v-70da01c3>ONSITE: Certificate of Registration</span> <span class="block" data-v-70da01c3>at Registrar&#39;s Office</span></p><p class="justify-center text-green-800 lg:pb-3 pb-2 lg:flex block" data-v-70da01c3><span class="lg:flex block" data-v-70da01c3>and NPCC Office for</span> <span class="font-bold mx-1" data-v-70da01c3>LSU Gmail and Credentials</span>Creation</p></li>',1))])])]),t[15]||(t[15]=e("div",{class:"lg:mt-5 mt-10 w-11/12 lg:w-auto mx-auto"},[e("a",{href:"https://my.lsu.edu.ph/class_offered_stat_open.jsp",class:"rounded-lg lg:py-6 py-3 px-5 my-auto justify-center h-fit mx-auto shadow-xl bg-white text-green-800 hover:bg-green-800 hover:text-white lg:text-sm text-xs font-bold flex lg:whitespace-nowrap"},[e("i",{class:"fa fa-list mr-5 text-3xl","aria-hidden":"true"}),e("h1",{class:"my-auto whitespace-nowrap lg:text-lg text-sm"},"Realtime Class Schedule")])],-1))]),t[17]||(t[17]=e("div",{class:"w-11/12 mx-auto text-center mb-4 py-5 px-2 shadow-lg text-green-800 lg:text-sm text-xs mt-3 font-bold border-t"}," If you have any concerns please visit Admissions and Scholarships Office, SJ Building Ground Floor LSU Campus. Monday to Friday 8am to 5pm and Saturday 8am to 12nn. Thank you!",-1))]),g(w)])}}},W=N(M,[["__scopeId","data-v-70da01c3"]]);export{W as default};
