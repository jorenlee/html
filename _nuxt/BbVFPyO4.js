import{u as d,e as u,c as m,a as e,f as o,o as g}from"./C7epRmsl.js";import{useTokenClient as p}from"./D4bjghb8.js";import{u as w}from"./QHAAo4ly.js";import{_ as h}from"./DlAUqK2U.js";const x={class:"bg-white"},_={class:"lg:h-screen flex items-center"},f={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},b={class:""},k={class:"py-7 px-4 lg:shadow-xl my-auto lg:order-1 order-2 text-center rounded-2xl"},v=["disabled"],y={__name:"index",setup(B){const r=d(),a=u(),n=t=>{},l=async t=>{const s=await w("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$V6EozcjrMo");a.push("/library/dashboard"),r.setToken(t.access_token,s.data._rawValue.email)},{isReady:i,login:c}=p({onSuccess:l,onError:n});return(t,s)=>(g(),m("div",x,[e("div",_,[e("div",f,[e("div",b,[s[3]||(s[3]=e("a",{href:"/library",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"},"Back to Library")],-1)),e("div",k,[s[1]||(s[1]=e("img",{class:"lg:w-32 w-44 h-auto mx-auto block",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg"},null,-1)),s[2]||(s[2]=e("p",{class:"text-2xl font-bold lasalle-green-text"}," Learning Resource Center ",-1)),e("button",{disabled:!o(i),onClick:s[0]||(s[0]=()=>o(c)()),class:"lg:w-fit w-10/12 pl-20 pr-10 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase lg:mt-7 mt-14 tracking-widest whitespace-nowrap"}," Admin Login ",8,v)])])])])]))}},j=h(y,[["__scopeId","data-v-4e64200f"]]);export{j as default};
