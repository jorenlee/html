import{_ as f}from"./sfx5KTti.js";import{_ as x}from"./CZIOoNdy.js";import{m as v,u as g,r as l,p as b,E as w,c as y,a as e,q as k,v as S,n as o,b as d,s as B,x as j,t as z,o as C}from"./DshvmW_w.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const D={class:""},E={class:"flex"},$={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},M={class:"w-full min-h-screen"},A={class:"bg-green-800"},L={class:"lg:flex mx-auto justify-between py-2 px-3.5"},N={class:"lg:flex items-center text-white lg:gap-5"},O={class:"flex -mt-1"},R={class:"text-sm"},H={__name:"index",async setup(V){let i,r;const n=v(),s=g(),c=l(s.mainDevServer),m=l(s.user.developerEmail);b(()=>{s.user.isAuthenticated&&(s.user.email===m.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph"||s.user.email==="zosette.salas@lsu.edu.ph")?n.push("/_/panels/library"):n.push("/_/unauthorized")}),l(!0);let a=l(!0);l(!1),l(),[i,r]=w(()=>$fetch(c.value+"/api/library/booking/list/").catch(u=>u.data)),i=await i,r();const p=()=>{n.push("/_/lib-admin"),s.removeToken()};return(u,t)=>{const _=f,h=x;return C(),y("div",D,[e("div",E,[k(e("div",$,[d(_)],512),[[S,o(a)]]),e("div",M,[e("div",A,[e("div",L,[e("div",N,[e("div",{onClick:t[0]||(t[0]=q=>B(a)?a.value=!o(a):a=!o(a)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",o(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",O,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",R,z(o(s).user.email),1)])]),e("button",{onClick:p,class:"flex hover:font-bold pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),t[3]||(t[3]=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")])])],-1))])]),d(h)])}}};export{H as default};
