import{u as h,g as x,m as p,r as i,q as m,h as f,c as g,a as e,i as _,v,f as a,j as w,n as b,t as y,d as S,o as L,x as k}from"./CGUrbvXj.js";import"./C5S46NFB.js";import"./vUEbHlag.js";import"./Cpj98o6Y.js";const C={class:"flex"},j={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},E=k('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1),R=[E],U={class:"w-full min-h-screen"},z={class:"bg-green-800"},A={class:"lg:flex mx-auto justify-between py-2 px-3.5"},B={class:"lg:flex items-center text-white gap-5"},O={class:"flex -mt-1"},V=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),D={class:"text-sm"},M=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),N=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),T=[M,N],$=e("div",null,[e("div",{class:"w-full p-5"},[e("h1",{class:"text-green-800 shadow-lg rounded-lg p-10 font-bold"},"Welcome! to Dashboard")])],-1),q=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[S(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1),J={__name:"index",async setup(G){let o,l;const r=h(),s=x();p();const u=i(s.mainServer);[o,l]=m(()=>$fetch(u.value+"/api/procurements/list").catch(n=>n.data)),o=await o,l();let t=i(!0);i(!1),f(()=>{s.user.isAuthenticated&&(s.user.email==="hr@lsu.edu.ph"||s.user.email==="jorenleeluna24@gmail.com")?r.push("/human-resource/dashboard"):r.push("/_/unauthorized")});const d=()=>{r.push("/human-resource"),s.removeToken()};return(n,c)=>(L(),g("div",null,[e("div",C,[_(e("div",j,R,512),[[v,a(t)]]),e("div",U,[e("div",z,[e("div",A,[e("div",B,[e("div",{onClick:c[0]||(c[0]=H=>w(t)?t.value=!a(t):t=!a(t)),class:"w-10 px-1.5"},[e("i",{class:b(["fa text-3xl text-white",a(t)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",O,[V,e("h1",D,y(a(s).user.email),1)])]),e("button",{onClick:d,class:"flex hover:font-bold pt-1"},T)])]),$])]),q]))}};export{J as default};
