import{u as m,e as u,c as p,a as e,f as o,o as g}from"./BeRLQFm1.js";import{useTokenClient as h}from"./CjHt8g7H.js";import{u as w}from"./Bdn6NQ8l.js";import{_}from"./DlAUqK2U.js";const x={class:"lg:bg-gray-50"},f={class:"lg:h-screen flex items-center"},k={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},b={class:""},v={class:"py-7 px-4 shadow bg-white my-auto lg:order-1 order-2 text-center rounded-2xl"},y=["disabled"],B={__name:"proc-admin",setup(S){const r=m(),a=u(),l=t=>{},c=async t=>{const s=await w("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+t.access_token,"$Bg6qghAvNc");r.setToken(t.access_token,s.data._rawValue.email),a.push("/_/panels/procurement")},{isReady:i,login:n}=h({onSuccess:c,onError:l});return(t,s)=>(g(),p("div",x,[e("div",f,[e("div",k,[e("div",b,[s[3]||(s[3]=e("a",{href:"/",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"}," Back to LSU Homepage ")],-1)),e("div",v,[s[1]||(s[1]=e("img",{class:"w-24 h-auto mx-auto block",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/procurement.png"},null,-1)),s[2]||(s[2]=e("p",{class:"text-2xl font-bold lasalle-green-text"}," LSU Central Procurement Unit ",-1)),e("button",{disabled:!o(i),onClick:s[0]||(s[0]=(...d)=>o(n)&&o(n)(...d)),class:"lg:w-6/12 w-10/12 pl-12 pr-3 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase mt-7 tracking-widest"}," Admin Login ",8,y)])])])])]))}},L=_(B,[["__scopeId","data-v-56ea0c9b"]]);export{L as default};
