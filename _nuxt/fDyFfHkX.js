import{_}from"./CxmLD63K.js";import{u as h,g as m,r as o,h as x,c as p,a as e,i as f,v as g,f as a,b as v,j as b,n as w,t as k,o as E}from"./D-TxO_i8.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const y={class:""},B={class:"flex"},R={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},S={class:"w-full min-h-screen"},C={class:"bg-green-800"},M={class:"lg:flex mx-auto justify-between py-2 px-3.5"},j={class:"lg:flex items-center text-white lg:gap-5"},z={class:"flex -mt-1"},A=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),D={class:"text-sm"},N=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),O=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),T=[N,O],V=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!"),e("h2",{class:"font-bold text-green-800 text-lg"},"Registrar's Admin Portal")])])],-1),H={__name:"index",setup(L){const i=h(),s=m(),r=o(s.user.registrarEmail),n=o(s.user.developerEmail),c=o(s.user.testEmail);let t=o(!0);x(async()=>{setTimeout(()=>{s.user.isAuthenticated&&(s.user.email===r.value||s.user.email===n.value||s.user.email===c.value)?i.push("/_/panels/registrar"):i.push("/_/unauthorized")},3e3)});const u=()=>{i.push("/_/reg-admin"),s.removeToken()};return(P,l)=>{const d=_;return E(),p("div",y,[e("div",B,[f(e("div",R,[v(d)],512),[[g,a(t)]]),e("div",S,[e("div",C,[e("div",M,[e("div",j,[e("div",{onClick:l[0]||(l[0]=U=>b(t)?t.value=!a(t):t=!a(t)),class:"w-10 px-1.5"},[e("i",{class:w(["fa text-3xl text-white",a(t)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",z,[A,e("h1",D,k(a(s).user.email),1)])]),e("button",{onClick:u,class:"flex hover:font-boldn pt-1"},T)])]),V])])])}}};export{H as default};
