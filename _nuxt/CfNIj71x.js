import{f as u,u as m,c as g,a as e,e as o,o as p}from"./Yjc4JF9J.js";import{useTokenClient as h}from"./IQUuq4NB.js";import{u as w}from"./D6DsnHAM.js";import{_ as x}from"./DlAUqK2U.js";const _={class:"lg:bg-gray-50"},f={class:"lg:h-screen flex items-center"},b={class:"lg:w-3/12 w-11/12 mx-auto"},k={class:""},v={class:"py-7 px-4 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},y=["disabled"],B={__name:"index",setup(R){const a=u(),r=m(),l=async t=>{const s=await w("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$uHyFFXGgiR");a.setToken(t.access_token,s.data._rawValue.email),r.push("/human-resource/dashboard")},c=t=>{},{isReady:i,login:n}=h({onSuccess:l,onError:c});return(t,s)=>(p(),g("div",_,[e("div",f,[e("div",b,[e("div",k,[s[3]||(s[3]=e("a",{href:"/human-resource",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"}," Go Back ")],-1)),e("div",v,[s[1]||(s[1]=e("img",{class:"w-24 h-auto mx-auto block mb-3",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/procurement.png"},null,-1)),s[2]||(s[2]=e("p",{class:"text-2xl font-bold lasalle-green-text"}," LSU Recruitment ",-1)),e("button",{disabled:!o(i),onClick:s[0]||(s[0]=(...d)=>o(n)&&o(n)(...d)),class:"lg:w-fit w-10/12 pl-20 pr-10 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase mt-7 tracking-widest"}," Admin Login ",8,y)])])])])]))}},j=x(B,[["__scopeId","data-v-1cb96fa9"]]);export{j as default};
