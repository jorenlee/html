import{_ as g}from"./DLWyt7LK.js";import{e as b,u as v,r as i,g as w,s as _,c as y,a as e,b as k,h as S,v as j,f as l,i as C,t as E,j as d,n as c,o as L}from"./CMPvSVsy.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const z={class:""},A={class:"flex"},B={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},D={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},R={class:"flex items-center w-full px-2"},U={class:"text-sm"},$={class:"w-full min-h-screen"},M={class:"bg-green-800"},N={class:"lg:flex mx-auto justify-between py-2 px-3.5"},G={__name:"index",async setup(O){let r,n;const o=b(),t=v(),p=i(t.mainDevServer),x=i(t.user.developerEmail);w(()=>{t.user.isAuthenticated&&(t.user.email===x.value||t.user.email==="monaliza.mugot@lsu.edu.ph"||t.user.email==="marilyn.bejec@lsu.edu.ph"||t.user.email==="applejane.ebarle@lsu.edu.ph"||t.user.email==="janekaren.gudmalin@lsu.edu.ph"||t.user.email==="macy.beniola@lsu.edu.ph"||t.user.email==="lynn.lumacad@lsu.edu.ph"||t.user.email==="zosette.salas@lsu.edu.ph")?o.push("/library/dashboard"):o.push("/_/unauthorized")}),i(!0);let s=i(!0);i(!1),i(),[r,n]=_(()=>$fetch(p.value+"/api/library/booking/list/").catch(u=>u.data)),r=await r,n();const m=()=>{o.push("/library/login"),t.removeToken()};return(u,a)=>{const h=g;return L(),y("div",z,[e("div",A,[S(e("div",B,[e("div",D,[e("div",R,[a[2]||(a[2]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",U,E(l(t).user.email),1)]),e("div",{onClick:a[0]||(a[0]=f=>d(s)?s.value=!l(s):s=!l(s)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:c(["fa text-3xl text-white",l(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),a[3]||(a[3]=C('<div class="min-h-[570px]"><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg">Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-book mr-3" aria-hidden="true"></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-calendar mr-3.5" aria-hidden="true"></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1))],512),[[j,l(s)]]),e("div",$,[e("div",M,[e("div",N,[e("div",{onClick:a[1]||(a[1]=f=>d(s)?s.value=!l(s):s=!l(s)),class:"w-10 px-1.5"},[e("i",{class:c(["fa text-3xl text-white",l(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("button",{onClick:m,class:"flex hover:font-bold pt-1"},a[4]||(a[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),a[5]||(a[5]=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")])])],-1))])]),k(h)])}}};export{G as default};
