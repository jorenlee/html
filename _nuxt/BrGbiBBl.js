import{f as d,u as m,c as u,a as e,e as o,o as p}from"./Ce35KScH.js";import{useTokenClient as g}from"./D4qtOOsI.js";import{u as w}from"./Dcvxzey-.js";import{_ as h}from"./DlAUqK2U.js";const x={class:"bg-white"},_={class:"lg:h-screen flex items-center"},b={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},f={class:""},k={class:"py-7 px-4 lg:shadow-xl my-auto lg:order-1 order-2 text-center rounded-2xl"},v=["disabled"],y={__name:"lib-admin",setup(C){const a=d(),n=m(),r=t=>{},l=async t=>{const s=await w("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$xQHWEihO4C");n.push("/_/panels/library"),a.setToken(t.access_token,s.data._rawValue.email)},{isReady:i,login:c}=g({onSuccess:l,onError:r});return(t,s)=>(p(),u("div",x,[e("div",_,[e("div",b,[e("div",f,[s[3]||(s[3]=e("a",{href:"/library",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"},"Back to Library")],-1)),e("div",k,[s[1]||(s[1]=e("img",{class:"lg:w-32 w-44 h-auto mx-auto block",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg"},null,-1)),s[2]||(s[2]=e("p",{class:"text-2xl font-bold lasalle-green-text"}," Learning Resource Center ",-1)),e("button",{disabled:!o(i),onClick:s[0]||(s[0]=()=>o(c)()),class:"lg:w-fit w-10/12 pl-20 pr-10 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase lg:mt-7 mt-14 tracking-widest whitespace-nowrap"}," Admin Login ",8,v)])])])])]))}},E=h(y,[["__scopeId","data-v-9d50eb66"]]);export{E as default};
