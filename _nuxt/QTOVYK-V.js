import{_ as p}from"./Cxk7GGt1.js";import{_ as f}from"./BlsGHlX5.js";import{u as x,g as v,r as a,h as g,q as b,c as w,a as e,i as y,v as k,f as o,b as u,j as S,n as j,t as B,o as C}from"./BV9eHCsz.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const z={class:""},D={class:"flex"},M={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},$={class:"w-full min-h-screen"},A={class:"bg-green-800"},E={class:"lg:flex mx-auto justify-between py-2 px-3.5"},L={class:"lg:flex items-center text-white lg:gap-5"},N={class:"flex -mt-1"},O=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),R={class:"text-sm"},V=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),q=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),F=[V,q],T=e("div",{class:"px-3"},[e("div",null,[e("div",{class:"text-left p-10 shadow-lg"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")])])],-1),Q={__name:"index",async setup(U){let l,n;const i=x(),s=v(),d=a(s.mainServer);g(()=>{s.user.isAuthenticated&&(s.user.email===developerEmail.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph")?i.push("/_/panels/library"):i.push("/_/unauthorized")}),a(!0);let t=a(!0);a(!1),a(),[l,n]=b(()=>$fetch(d.value+"/api/library/booking/list/").catch(r=>r.data)),l=await l,n();const _=()=>{i.push("/_/lib-admin"),s.removeToken()};return(r,c)=>{const h=p,m=f;return C(),w("div",z,[e("div",D,[y(e("div",M,[u(h)],512),[[k,o(t)]]),e("div",$,[e("div",A,[e("div",E,[e("div",L,[e("div",{onClick:c[0]||(c[0]=W=>S(t)?t.value=!o(t):t=!o(t)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",o(t)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",N,[O,e("h1",R,B(o(s).user.email),1)])]),e("button",{onClick:_,class:"flex hover:font-boldn pt-1"},F)])]),T])]),u(m)])}}};export{Q as default};
