import{g as p,u as h,c as m,a as e,f as r,o as g,p as _,e as w}from"./AQTE8VfV.js";import{u as x}from"./B3hazctO.js";import{useTokenClient as f}from"./5F82Q67z.js";import{_ as b}from"./DlAUqK2U.js";const a=o=>(_("data-v-92485034"),o=o(),w(),o),k={class:"bg-white"},v={class:"lg:h-screen flex items-center"},y={class:"lg:w-4/12 py-5 w-11/12 mx-auto"},S={class:""},B=a(()=>e("a",{href:"/library",class:"flex my-3 gap-3"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})]),e("h1",{class:"font-bold text-sm text-green-900"},"Back to Library")],-1)),C={class:"py-7 px-4 lg:shadow-xl my-auto lg:order-1 order-2 text-center rounded-2xl"},L=a(()=>e("img",{class:"lg:w-32 w-44 h-auto mx-auto block",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg"},null,-1)),E=a(()=>e("p",{class:"text-2xl font-bold lasalle-green-text"},"LRC Book Thru",-1)),I=["disabled"],R={__name:"index",setup(o){const n=p(),c=h(),l=s=>{console.log("Error: ",s)},i=async s=>{const t=await x("https://www.googleapis.com/oauth2/v1/userinfo?access_token="+s.access_token,"$1Z87KqStsl");c.push("/library/dashboard"),n.setToken(s.access_token,t.data._rawValue.email)},{isReady:d,login:u}=f({onSuccess:i,onError:l});return(s,t)=>(g(),m("div",k,[e("div",v,[e("div",y,[e("div",S,[B,e("div",C,[L,E,e("button",{disabled:!r(d),onClick:t[0]||(t[0]=()=>r(u)()),class:"lg:w-fit w-10/12 pl-20 pr-10 py-3 bg-green-10 rounded-lg text-sm text-white text-center font-semibold login-with-google-btn block mx-auto uppercase lg:mt-7 mt-14 tracking-widest"}," Login ",8,I)])])])])]))}},U=b(R,[["__scopeId","data-v-92485034"]]);export{U as default};
