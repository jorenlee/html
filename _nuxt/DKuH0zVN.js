import{g as m,u,c as _,a as e,f as a,o as h,p as w,e as x}from"./CWFzkY8C.js";import{u as f}from"./-IMRkcMd.js";import{useTokenClient as k}from"./DsEDrmY2.js";import{_ as v}from"./DlAUqK2U.js";const r=s=>(w("data-v-55a37a6a"),s=s(),x(),s),b={class:"lg:bg-gray-50"},S={class:"lg:h-screen flex items-center"},y={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},L={class:""},B=r(()=>e("a",{href:"/",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"},"Back to LSU Homepage")],-1)),R={class:"py-7 px-4 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},U=r(()=>e("img",{class:"w-24 h-auto mx-auto block",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"},null,-1)),I=r(()=>e("p",{class:"text-2xl font-bold lasalle-green-text"}," LSU University Registrar's Office ",-1)),j=["disabled"],C={__name:"reg-admin",setup(s){const c=m(),l=u(),i=o=>{},d=async o=>{const t=await f("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+o.access_token,"$aKpLRVxQoo");l.push("/_/panels/registrar"),c.setToken(o.access_token,t.data._rawValue.email)},{isReady:p,login:n}=k({onSuccess:d,onError:i});return(o,t)=>(h(),_("div",b,[e("div",S,[e("div",y,[e("div",L,[B,e("div",R,[U,I,e("button",{disabled:!a(p),onClick:t[0]||(t[0]=(...g)=>a(n)&&a(n)(...g)),class:"lg:w-6/12 w-10/12 pl-12 pr-3 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase mt-7 tracking-widest"}," Admin Login ",8,j)])])])])]))}},M=v(C,[["__scopeId","data-v-55a37a6a"]]);export{M as default};
