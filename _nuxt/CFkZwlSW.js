import{g as p,u as h,c as g,a as e,f as a,o as _,p as w,e as x}from"./DDu6Fbxf.js";import{u as f}from"./DIIXSyvi.js";import{useTokenClient as b}from"./kDlRX8bU.js";import{_ as k}from"./DlAUqK2U.js";const n=s=>(w("data-v-1cb96fa9"),s=s(),x(),s),v={class:"lg:bg-gray-50"},y={class:"lg:h-screen flex items-center"},S={class:"lg:w-3/12 w-11/12 mx-auto"},B={class:""},R=n(()=>e("a",{href:"/human-resource",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"}," Go Back ")],-1)),I={class:"py-7 px-4 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},C=n(()=>e("img",{class:"w-24 h-auto mx-auto block mb-3",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/procurement.png"},null,-1)),E=n(()=>e("p",{class:"text-2xl font-bold lasalle-green-text"}," LSU Recruitment ",-1)),F=["disabled"],j={__name:"index",setup(s){const c=p(),l=h(),i=async t=>{const o=await f("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$uHyFFXGgiR");c.setToken(t.access_token,o.data._rawValue.email),l.push("/human-resource/dashboard")},d=t=>{},{isReady:u,login:r}=b({onSuccess:i,onError:d});return(t,o)=>(_(),g("div",v,[e("div",y,[e("div",S,[e("div",B,[R,e("div",I,[C,E,e("button",{disabled:!a(u),onClick:o[0]||(o[0]=(...m)=>a(r)&&a(r)(...m)),class:"lg:w-fit w-10/12 pl-20 pr-10 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase mt-7 tracking-widest"}," Admin Login ",8,F)])])])])]))}},T=k(j,[["__scopeId","data-v-1cb96fa9"]]);export{T as default};
