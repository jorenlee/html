import{u as h,f as p,l as x,r as i,m,g as f,c as g,a as e,h as v,v as w,e as r,p as b,i as _,n as y,t as S,d as L,o as k}from"./Yjc4JF9J.js";import"./C5S46NFB.js";import"./vUEbHlag.js";import"./Cpj98o6Y.js";const C={class:"flex"},E={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},R={class:"w-full min-h-screen"},U={class:"bg-green-800"},j={class:"lg:flex mx-auto justify-between py-2 px-3.5"},z={class:"lg:flex items-center text-white gap-5"},A={class:"flex -mt-1"},B={class:"text-sm"},$={__name:"index",async setup(D){let l,n;const o=h(),a=p();x();const d=i(a.mainDevServer);[l,n]=m(()=>$fetch(d.value+"/api/procurements/list").catch(u=>u.data)),l=await l,n();let s=i(!0);i(!1),f(()=>{a.user.isAuthenticated&&(a.user.email==="hr@lsu.edu.ph"||a.user.email==="jorenleeluna24@gmail.com")?o.push("/human-resource/dashboard"):o.push("/_/unauthorized")});const c=()=>{o.push("/human-resource"),a.removeToken()};return(u,t)=>(k(),g("div",null,[e("div",C,[v(e("div",E,t[1]||(t[1]=[b('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1)]),512),[[w,r(s)]]),e("div",R,[e("div",U,[e("div",j,[e("div",z,[e("div",{onClick:t[0]||(t[0]=O=>_(s)?s.value=!r(s):s=!r(s)),class:"w-10 px-1.5"},[e("i",{class:y(["fa text-3xl text-white",r(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",A,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",B,S(r(a).user.email),1)])]),e("button",{onClick:c,class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),t[4]||(t[4]=e("div",null,[e("div",{class:"w-full p-5"},[e("h1",{class:"text-green-800 shadow-lg rounded-lg p-10 font-bold"},"Welcome! to Dashboard")])],-1))])]),t[5]||(t[5]=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[L(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1))]))}};export{$ as default};