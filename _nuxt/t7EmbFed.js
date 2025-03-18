import{_ as k}from"./C1ZMNu55.js";import{_ as S}from"./D621uroN.js";import{u as j,e as C,r as i,c as d,b as c,a as e,i as f,k as m,d as o,f as s,n as b,o as p}from"./DpKV41fr.js";import{useTokenClient as _}from"./RTsX3pm8.js";import{_ as N}from"./DlAUqK2U.js";import"./C5S46NFB.js";const E={class:"bg-gray-50"},O={class:""},V={class:"lg:flex lg:w-11/12 mx-auto lg:mt-2 text-center justify-center lg:pb-5 gap-10 tracking-tight"},A={class:"lg:w-full shadow-lg pb-5 lg:border-t-0 border-t-2"},I={class:"w-11/12 mx-auto text-center mb-5"},T={class:"w-full lg:grid grid-cols-2 gap-x-3 justify-between lg:text-sm text-xs"},L={class:"w-full lg:mb-5 mb-2 border bg-white"},R={class:"lg:py-2.5 py-2 block relative text-center"},B={class:"lg:mb-0 mb-1"},F={key:0},P={class:"w-full mb-5 border bg-white"},$={class:"bg-white text-green-800 lg:py-4 py-2 border-b w-full justify-center"},z={key:0},M={__name:"index",setup(U){const x=j(),v=C(),g=i(!1),a=i(!1),l=i(!1),w=n=>{},y=async n=>{const t=await $fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+n.access_token).catch(r=>r.data);x.setToken(n.access_token,t.data._rawValue.email),v.push("/enrollment/portal")},{isReady:H,login:D}=_({onSuccess:y,onError:w});return(n,t)=>{const r=k,h=S;return p(),d("div",E,[c(r),e("div",O,[t[18]||(t[18]=f('<div class="" data-v-8817796f><div class="relative" data-v-8817796f><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-8817796f><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-8817796f><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-8817796f><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-8817796f> Enrollment </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-8817796f><div class="w-11/12 mx-auto flex justify-between" data-v-8817796f><ul class="flex lasalle-green-text capitalize text-xs" data-v-8817796f><li data-v-8817796f><a href="/" class="mr-1" data-v-8817796f> Home </a></li><li data-v-8817796f><i class="fas fa-caret-right mr-1" data-v-8817796f></i><a href="/enrollment" class="mr-1" data-v-8817796f> Enrollment </a></li></ul><ul class="flex text-green-800 capitalize text-xs" data-v-8817796f><li data-v-8817796f><a href="/enrollment/admin/login" class="mr-1 flex items-center" data-v-8817796f><i class="fa fa-user mr-2" aria-hidden="true" data-v-8817796f></i> Admin Login </a></li></ul></div></div></div></div>',1)),e("div",V,[e("div",A,[e("div",I,[t[16]||(t[16]=e("p",{class:"font-bold text-green-900 lg:text-3xl text-lg lg:mb-10 mb-2 lg:mt-7 mt-3"},"Enrollment Steps",-1)),e("ul",T,[e("li",L,[t[5]||(t[5]=e("span",{class:"justify-evenly flex lg:bg-green-800 bg-green-600 text-white py-1 font-bold"},[e("span",{class:"w-full"},"Step 1:"),e("span",{class:"w-full uppercase"},"Admissions")],-1)),e("div",R,[e("div",B,[t[3]||(t[3]=e("a",{href:"/admissions/form",class:"font-bold w-full justify-center cursor-pointer bg-white text-green-800 hover:uppercase hover:underline"},[e("i",{class:"fa fa-external-link mr-1","aria-hidden":"true"}),o(" ONLINE: Admissions Form ")],-1)),e("button",{onClick:t[0]||(t[0]=u=>a.value=!s(a)),class:"mt-2.5 ml-2 h-fit w-fit rounded-full"},[e("i",{class:b(["fa text-green-900 text-[17px] border-2 border-green-400 p-0 rounded-full leading-0",(s(a),"fa-info-circle")])},null,2)])]),s(a)?(p(),d("div",F,t[4]||(t[4]=[e("p",{class:"text-green-800 text-xs w-11/12 mx-auto"},"For New Enrollees Submit Hard Copy Documents",-1),e("p",{class:"text-green-800 text-xs w-11/12 mx-auto"},"at Admissions and Scholarships Center Office",-1)]))):m("",!0)])]),t[14]||(t[14]=f('<li class="w-full lg:mb-5 mb-2 border bg-white" data-v-8817796f><span class="justify-between flex text-white lg:bg-green-800 bg-green-700 py-1 font-bold" data-v-8817796f><span class="w-full" data-v-8817796f>Step 2:</span><span class="w-full uppercase" data-v-8817796f>Advising</span></span><div class="lg:py-3 pt-3.5 pb-2" data-v-8817796f><p class="bg-white text-green-800 w-full flex justify-center lg:py-0" data-v-8817796f><span class="font-bold" data-v-8817796f>ONSITE</span> : Visit SJ Building LSU Campus </p><p class="text-green-800 bg-white lg:pb-0 pb-2 justify-center" data-v-8817796f><span class="mr-1" data-v-8817796f>or College Departments for</span><span class="font-bold" data-v-8817796f>Course Subjects</span></p></div></li>',1)),e("li",P,[t[13]||(t[13]=e("span",{class:"justify-between flex text-white lg:bg-green-800 bg-green-800 py-1 font-bold"},[e("span",{class:"w-full"},"Step 3:"),e("span",{class:"w-full uppercase"},"Payment")],-1)),e("p",$,[t[6]||(t[6]=e("span",{class:"font-bold"},"ONSITE:",-1)),t[7]||(t[7]=o(" Accounting Office or ")),t[8]||(t[8]=e("br",null,null,-1)),t[9]||(t[9]=o()),t[10]||(t[10]=e("span",{class:"font-bold"},"ONLINE: ",-1)),t[11]||(t[11]=o(" Payment Methods ")),e("button",{onClick:t[1]||(t[1]=u=>l.value=!s(l)),class:"mt-1 ml-2 h-fit w-fit rounded-full"},[e("i",{class:b(["fa text-green-900 text-[17px] border-2 border-green-400 p-0 rounded-full leading-0",(s(l),"fa-info-circle")])},null,2)])]),s(l)?(p(),d("div",z,[e("div",{onClick:t[2]||(t[2]=u=>g.value=!s(g))},t[12]||(t[12]=[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"hover:border-4 hover:rounded-lg border-green-800"},null,-1)]))])):m("",!0)]),t[15]||(t[15]=f('<li class="w-full lg:mb-5 mb-2 border bg-white" data-v-8817796f><span class="justify-between flex text-white lg:bg-green-800 bg-green-900 py-1 font-bold" data-v-8817796f><span class="w-full" data-v-8817796f>Step 4:</span><span class="w-full uppercase" data-v-8817796f>Validation</span></span><p class="ml-1 text-green-800 lg:pt-5 pt-2 lg:flex block justify-center" data-v-8817796f><span class="font-bold lg:flex block mr-1" data-v-8817796f>ONSITE: Certificate of Registration</span> <span class="block" data-v-8817796f>at Registrar&#39;s Office</span></p><p class="justify-center text-green-800 lg:pb-3 pb-2 lg:flex block" data-v-8817796f><span class="lg:flex block" data-v-8817796f>and NPCC Office for</span> <span class="font-bold mx-1" data-v-8817796f>LSU Gmail and Credentials</span>Creation</p></li>',1))])])]),t[17]||(t[17]=e("div",{class:"lg:mt-5 mt-10 w-11/12 lg:w-auto mx-auto"},[e("a",{href:"https://my.lsu.edu.ph/class_offered_stat_open.jsp",class:"rounded-lg lg:py-6 py-3 px-5 my-auto justify-center h-fit mx-auto shadow-xl bg-white text-green-800 hover:bg-green-800 hover:text-white lg:text-sm text-xs font-bold flex lg:whitespace-nowrap"},[e("i",{class:"fa fa-list mr-5 text-3xl","aria-hidden":"true"}),e("h1",{class:"my-auto whitespace-nowrap lg:text-lg text-sm"},"Realtime Class Schedule")])],-1))]),t[19]||(t[19]=e("div",{class:"w-11/12 mx-auto text-center mb-4 py-5 px-2 shadow-lg text-green-800 lg:text-sm text-xs mt-3 font-bold border-t"}," If you have any concerns please visit Admissions and Scholarships Office, SJ Building Ground Floor LSU Campus. Monday to Friday 8am to 5pm and Saturday 8am to 12nn. Thank you!",-1))]),c(h)])}}},X=N(M,[["__scopeId","data-v-8817796f"]]);export{X as default};
