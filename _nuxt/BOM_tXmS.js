import{_ as m}from"./Bx_XbRCA.js";import{e as x,u as p,r as o,g as f,c as _,a as e,h as g,v as h,f as l,b as v,j as b,n as w,t as k,o as E}from"./BsKHL9Zt.js";import"./5JjjnmY2.js";import"./DlAUqK2U.js";const y={class:""},B={class:"flex"},R={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},S={class:"w-full min-h-screen"},C={class:"bg-green-800"},M={class:"lg:flex mx-auto justify-between py-2 px-3.5"},j={class:"lg:flex items-center text-white lg:gap-5"},z={class:"flex -mt-1"},A={class:"text-sm"},U={__name:"index",setup(D){const i=x(),s=p(),r=o(s.user.registrarEmail),n=o(s.user.developerEmail),u=o(s.user.testEmail);let a=o(!0);f(async()=>{setTimeout(()=>{s.user.isAuthenticated&&(s.user.email===r.value||s.user.email===n.value||s.user.email===u.value)?i.push("/_/panels/registrar"):i.push("/_/unauthorized")},3e3)});const d=()=>{i.push("/_/reg-admin"),s.removeToken()};return(N,t)=>{const c=m;return E(),_("div",y,[e("div",B,[g(e("div",R,[v(c)],512),[[h,l(a)]]),e("div",S,[e("div",C,[e("div",M,[e("div",j,[e("div",{onClick:t[0]||(t[0]=O=>b(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5"},[e("i",{class:w(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",z,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",A,k(l(s).user.email),1)])]),e("button",{onClick:d,class:"flex hover:font-boldn pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),t[3]||(t[3]=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!"),e("h2",{class:"font-bold text-green-800 text-lg"},"Registrar's Admin Portal")])])],-1))])])])}}};export{U as default};
