import{u as m,m as u,c as g,a as s,n as o,o as p}from"./mxn6a8Zp.js";import{useTokenClient as w}from"./BCRyrqrk.js";import{u as h}from"./B0sQE48S.js";import{_ as x}from"./DlAUqK2U.js";const f={class:"lg:bg-gray-50"},_={class:"lg:h-screen flex items-center"},v={class:"lg:w-5/12 py-5 w-11/12 mx-auto"},k={class:""},b={class:"lg:flex md:w-fit w-full mx-auto gap-10 items-center lg:py-14 py-8 md:px-10 px-7 lg:px-16 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},y={class:""},S=["disabled"],B={__name:"campus-pass-admin",setup(L){const l=m(),n=u(),r=e=>{},i=async e=>{const t=await h("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+e.access_token,"$jrLPdRgVXE");l.setToken(e.access_token,t.data._rawValue.email),n.push("/_/panels/campus-security")},{isReady:c,login:a}=w({onSuccess:i,onError:r});return(e,t)=>(p(),g("div",f,[s("div",_,[s("div",v,[s("div",k,[s("div",b,[t[3]||(t[3]=s("img",{class:"w-24 lg:mx-0 mx-auto h-auto block lg:mb-0 mb-5",src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/circleLSULogo.jpg"},null,-1)),s("div",y,[t[1]||(t[1]=s("a",{href:"/",class:"gap-1 lg:w-auto md:w-fit w-full mx-auto lg:mt-0 mt-5 lg:flex hidden"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),s("h1",{class:"font-bold text-sm text-green-900"}," Back to LSU Homepage ")],-1)),s("button",{disabled:!o(c),onClick:t[0]||(t[0]=(...d)=>o(a)&&o(a)(...d)),class:"h-fit pl-12 pr-3 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold lg:w-auto w-full login-with-google-btn block mx-auto uppercase mt-2 tracking-widest"}," LSU Admin Login ",8,S),t[2]||(t[2]=s("a",{href:"/",class:"gap-1 lg:w-auto md:w-fit w-full mx-auto lg:mt-0 mt-5 lg:hidden flex shadow-xl py-3 px-3.5 rounded-lg justify-center"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),s("h1",{class:"font-bold text-sm text-green-900"}," Back to LSU Homepage ")],-1))])])])])])]))}},M=x(B,[["__scopeId","data-v-5899d40c"]]);export{M as default};
