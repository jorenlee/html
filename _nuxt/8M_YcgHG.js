import{_ as I}from"./C4mC7P-8.js";import{u as z,m as D,g as B,r as a,h as L,B as F,c as m,a as s,t as O,f as x,F as R,s as U,i as H,l as J,j as P,z as b,b as q,o as p,p as $,e as G,x as w}from"./CGUrbvXj.js";import"./vUEbHlag.js";/* empty css        */import"./Ca9QRLQE.js";import"./C5S46NFB.js";import{_ as K}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const h=g=>($("data-v-969530f8"),g=g(),G(),g),Q={class:"lg:overflow-x-hidden"},W={class:"flex min-h-screen"},X={class:"w-full"},Y={class:"bg-green-800"},Z={class:"lg:flex items-center mx-auto justify-between py-2"},ee={class:"lg:flex items-center text-white gap-1 lg:px-1"},le=h(()=>s("div",{class:"lg:p-0 pt-0.5 pb-3 mx-3"},[s("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),te={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},se=h(()=>s("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ae={class:"text-sm pt-1"},ue=h(()=>s("i",{class:"fa fa-sign-out text-xl"},null,-1)),ie=h(()=>s("h1",{class:"text-xs p-1.5"},"Log Out",-1)),re=[ue,ie],ne={class:"px-3 pt-5"},oe={class:"lg:flex items-center mb-5"},de={class:"w-full"},ce=w('<button class="bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs" data-v-969530f8> New Freshmen </button><button class="bg-blue-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-blue-900 border-2 border-blue-900 uppercase text-xs" data-v-969530f8> Transferees </button><button class="bg-orange-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-orange-900 border-2 border-orange-900 uppercase text-xs" data-v-969530f8> Returnee </button><button class="bg-yellow-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-yellow-900 border-2 border-yellow-900 uppercase text-xs" data-v-969530f8> Shiftee </button><button class="bg-pink-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-pink-900 border-2 border-pink-900 uppercase text-xs" data-v-969530f8> Continuing </button>',5),he=[ce],me={class:"w-full flex items-center lg:mt-0 mt-5"},pe={key:0,class:"mx-auto w-fit my-20"},ge=h(()=>s("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1)),ve=h(()=>s("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)),fe=[ge,ve],_e={key:1},xe=w('<div class="w-full" data-v-969530f8><div class="" data-v-969530f8><div class="shadow mx-auto text-xs" data-v-969530f8><div class="" data-v-969530f8><div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-969530f8><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-969530f8><li class="lg:w-1/12" data-v-969530f8>Tracking ID</li><li class="lg:w-1/12" data-v-969530f8>LSU ID</li><li class="lg:w-2/12 text-left" data-v-969530f8>Full Name</li><li class="text-center lg:w-6/12" data-v-969530f8>Status</li><li class="px-1 lg:w-2/12 text-center" data-v-969530f8>Action</li></ul></div><div class="itallic text-gray-700 text-center p-1" data-v-969530f8> Enrollment Start Time 9:30 AM </div></div></div></div></div>',1),be=[xe],we={__name:"index",setup(g){const v=z();D();const e=B(),y=a(e.mainServer);let l=a(0);const C=a(!1);let o=a(""),i=a(null),S=a(0),d=a(0);const k=a(!0),V=a(25),r=a(25),_=a(0);a(),a(!1);let c=a(""),j=a(1),A=()=>{o.value===""?(l.value=i.value,E(1)):(_.value=0,l.value=i.value.filter(function(n){return o.value===n.tracking_id||o.value===n.student_lsu_id_number}))};L(async()=>{let n=await $fetch(y.value+"/api/admissions/list/").catch(t=>t.data);if(i.value=n,S.value=n.length||0,e.user.isAuthenticated&&(e.user.email==="ccc@lsu.edu.ph"||e.user.email==="saodirector@lsu.edu.ph"||e.user.email==="ascdirector@lsu.edu.ph"||e.user.email==="admissions@lsu.edu.ph"||e.user.email==="scholarships@lsu.edu.ph"||e.user.email==="katerijunine.tabernero@lsu.edu.ph"||e.user.email==="sherryl.origenes@lsu.edu.ph"||e.user.email==="lourdes_niebla@lsu.edu.ph"||e.user.email==="lindakj11196@gmail.com"||e.user.email==="jorenleeluna24@gmail.com"||e.user.email==="jayharold.reazol@lsu.edu.ph"||e.user.email==="cheryl.osorio@lsu.edu.ph"||e.user.email==="cte.registrar@lsu.edu.ph"||e.user.email==="onlinerequest@lsu.edu.ph"||e.user.email==="ccsea.registrar@lsu.edu.ph"||e.user.email==="cba.registrar@lsu.edu.ph"||e.user.email==="patrick.obut@lsu.edu.ph"||e.user.email==="maryeloise.pilvera@lsu.edu.ph"||e.user.email==="johny14_gonzaga@lsu.edu.ph"||e.user.email==="denzelroy.suarez@lsu.edu.ph"||e.user.email==="jason.yap@lsu.edu.ph"||e.user.email==="rommel.rosal@lsu.edu.ph"))l.value=i.value||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length;else if(e.user.isAuthenticated&&(e.user.email==="ramel.recentes@lsu.edu.ph"||e.user.email==="markkrisli.delapena@lsu.edu.ph"||e.user.email==="grace.dolloso@lsu.edu.ph"||e.user.email==="ladyvi.tagailo@lsu.edu.ph"||e.user.email==="earl.gangoso@lsu.edu.ph"||e.user.email==="honimar.panganiban@lsu.edu.ph"||e.user.email==="olaira.imbong@lsu.edu.ph"||e.user.email==="jessel.abarca@lsu.edu.ph"||e.user.email==="jorenlee.luna@lsu.edu.ph")){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CCSEA (College of Computer Studies, Engineering, and Architecture)"});c.value="CCSEA",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="anilou.dilao@lsu.edu.ph"||e.user.email==="marvel.deromol@lsu.edu.ph"||e.user.email==="nizel.apas@lsu.edu.ph"||e.user.email==="noel.alamin@lsu.edu.ph")){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CAS (College of Arts and Sciences)"});c.value="CAS",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="emma.suana@lsu.edu.ph"||e.user.email==="jenel.cruz@lsu.edu.ph"||e.user.email==="johnmark.saldivar@lsu.edu.ph"||e.user.email==="kenneth.yagong@lsu.edu.ph")){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CTE (College of Teacher Education)"});c.value="CTE",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="lowelle.pacot@lsu.edu.ph"||e.user.email==="jennifer.aguanta@lsu.edu.ph"||e.user.email==="jaysavelle.tubigon@lsu.edu.ph")){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CBA (College of Business and Accountancy)"});c.value="CBA",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="arlene.apao@lsu.edu.ph"){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CON (College of Nursing)"});c.value="CON",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="joed.layna@lsu.edu.ph"||e.user.email==="michael.angelo.pagara@lsu.edu.ph"||e.user.email==="karen.linganay@lsu.edu.ph")){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CTHM (College of Tourism and Hospitality Management)"});c.value="CTHM",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="estephanie.zamora@lsu.edu.ph"){let t=i.value.filter(function(u){return u.admissions_list_filter.college==="CCJE (College of Criminal Justice Education)"});c.value="CCJE",l.value=t||0,d.value=t.length||0,Math.ceil(l._rawValue.length/r.value),l._rawValue.length}else(e.user.email===""||e.user.email===void 0)&&v.push("/enrollment/admin/login"),v.push("/_/unauthorized");v.push("/enrollment/admin/dashboard")}),F(()=>l.value.slice(_.value,r.value));const E=n=>{j.value=n,_.value=0,r.value=V.value},M=a([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),T=()=>{v.push("/enrollment"),e.removeToken()};return a(null),(n,t)=>{const u=I;return p(),m("div",Q,[s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[s("div",ee,[le,s("div",te,[se,s("h1",ae,O(x(e).user.email),1)])]),s("button",{onClick:T,class:"flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 hover:text-green-900 hover:bg-white text-white rounded-xl"},re)])]),s("div",ne,[s("div",oe,[s("div",de,[(p(!0),m(R,null,U(M.value,(f,N)=>(p(),m("div",{class:"lg:flex items-center block lg:text-left text-center",key:N},he))),128))]),s("div",me,[H(s("input",{"onUpdate:modelValue":t[0]||(t[0]=f=>P(o)?o.value=f:o=f),type:"text",class:"shadow-lg search w-full border border-b-4 border-green-800 h-8 rounded-lg",placeholder:"Search Tracking ID or LSU ID Number then press Enter",onChange:t[1]||(t[1]=f=>x(A)())},null,544),[[J,x(o)]])])]),C.value?(p(),m("div",pe,fe)):b("",!0),k.value?(p(),m("div",_e,be)):b("",!0)])])]),q(u)])}}},Me=K(we,[["__scopeId","data-v-969530f8"]]);export{Me as default};
