import{u as p,e as m,c as u,a as s,f as o,o as g}from"./BJD4BkOF.js";import{useTokenClient as h}from"./C3C0_Mf5.js";import{u as _}from"./D6QLTXHn.js";import{_ as w}from"./DlAUqK2U.js";const f={class:"lg:bg-gray-50"},x={class:"lg:h-screen flex items-center"},k={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},v={class:""},b={class:"flex w-fit gap-10 items-center py-14 px-16 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},y={class:""},S=["disabled"],L={__name:"campus-pass-admin",setup(B){const n=p(),r=m(),c=t=>{},l=async t=>{const e=await _("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$jrLPdRgVXE");n.setToken(t.access_token,e.data._rawValue.email),r.push("/_/panels/campus-security")},{isReady:i,login:a}=h({onSuccess:l,onError:c});return(t,e)=>(g(),u("div",f,[s("div",x,[s("div",k,[s("div",v,[s("div",b,[e[2]||(e[2]=s("img",{class:"w-24 h-auto mx-auto block",src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/circleLSULogo.jpg"},null,-1)),s("div",y,[e[1]||(e[1]=s("a",{href:"/",class:"flex gap-1"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),s("h1",{class:"font-bold text-sm text-green-900"}," Back to LSU Homepage ")],-1)),s("button",{disabled:!o(i),onClick:e[0]||(e[0]=(...d)=>o(a)&&o(a)(...d)),class:"h-fit pl-12 pr-3 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase mt-2 tracking-widest lg:whitespace-nowrap"}," LSU Admin Login ",8,S)])])])])])]))}},C=w(L,[["__scopeId","data-v-ab38e907"]]);export{C as default};
