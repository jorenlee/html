import{_ as f}from"./CkM6idDT.js";import{_ as x}from"./C77_Y0jh.js";import{u as v,f as g,r as l,g as b,m as w,c as y,a as e,h as k,v as S,e as i,b as d,i as B,n as j,t as C,o as D}from"./Za2wGT4t.js";import"./vUEbHlag.js";import"./C5S46NFB.js";import"./Cpj98o6Y.js";const $={class:""},z={class:"flex"},E={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},M={class:"w-full min-h-screen"},A={class:"bg-green-800"},L={class:"lg:flex mx-auto justify-between py-2 px-3.5"},N={class:"lg:flex items-center text-white lg:gap-5"},O={class:"flex -mt-1"},R={class:"text-sm"},I={__name:"index",async setup(V){let o,r;const n=v(),s=g(),c=l(s.mainDevServer),m=l(s.user.developerEmail);b(()=>{s.user.isAuthenticated&&(s.user.email===m.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph")?n.push("/_/panels/library"):n.push("/_/unauthorized")}),l(!0);let a=l(!0);l(!1),l(),[o,r]=w(()=>$fetch(c.value+"/api/library/booking/list/").catch(u=>u.data)),o=await o,r();const p=()=>{n.push("/_/lib-admin"),s.removeToken()};return(u,t)=>{const _=f,h=x;return D(),y("div",$,[e("div",z,[k(e("div",E,[d(_)],512),[[S,i(a)]]),e("div",M,[e("div",A,[e("div",L,[e("div",N,[e("div",{onClick:t[0]||(t[0]=F=>B(a)?a.value=!i(a):a=!i(a)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",i(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",O,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",R,C(i(s).user.email),1)])]),e("button",{onClick:p,class:"flex hover:font-boldn pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),t[3]||(t[3]=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")])])],-1))])]),d(h)])}}};export{I as default};
