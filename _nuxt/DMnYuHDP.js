import{_ as T}from"./Csb7MZnU.js";import{_ as U}from"./Du1fIl7t.js";import{_ as V}from"./D3Qmd3nL.js";import{m as $,u as I,g as L,r as d,q as z,h as E,c as m,a as e,i as h,v as F,f as s,b as f,j as O,n as R,t as x,k as A,l as q,w as J,F as P,s as G,o as v,d as H,C as K,p as Q,e as W}from"./CFxP1wSo.js";/* empty css        */import{s as X}from"./BEx1_QdV.js";import"./vUEbHlag.js";import"./C5S46NFB.js";import{_ as Y}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const c=r=>(Q("data-v-96a80751"),r=r(),W(),r),Z={class:""},ee={class:"flex"},te={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},se={class:"w-full"},ae={class:"bg-green-800"},oe={class:"flex mx-auto justify-between py-2 px-3.5"},le={class:"flex items-center text-white gap-5"},ie={class:"flex -mt-1"},ne=c(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ce={class:"text-sm"},de=c(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),re=c(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ue=[de,re],_e={class:""},pe={class:"lg:w-full p-5"},me={class:"h-full shadow-lg"},he={class:"py-5"},fe={class:"flex w-11/12 mx-auto gap-5"},xe={class:"h-fit"},ve=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Date ",-1)),be={class:"w-fit mx-auto my-5"},we={class:"w-fit mx-auto"},ge=c(()=>e("button",{class:"block uppercase text-sm rounded-sm shadow px-5 py-1 my-10 text-green-900 whitespace-nowrap"}," Update ",-1)),ye={class:"px-5 py-2 shadow-sm border"},ke=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),Se={class:"text-xs flex flex-wrap justify-center"},Ce=["value"],je={class:"",for:"time"},Me={__name:"[id]",async setup(r){let u,b;const p=$(),_=I(),t=L(),w=d(t.mainServer),g=([u,b]=z(()=>$fetch(w.value+"/api/library/schedule/booking/"+p.params.id+"/").catch(l=>l.data)),u=await u,b(),u),y=d(X.timeSelection),a=d({date:g.date,time:[],updated_at:new Date});let o=d(!0);const k=d(t.user.developerEmail);E(async()=>{t.user.isAuthenticated&&(t.user.email===k.value||t.user.email==="monaliza.mugot@lsu.edu.ph"||t.user.email==="marilyn.bejec@lsu.edu.ph"||t.user.email==="applejane.ebarle@lsu.edu.ph"||t.user.email==="janekaren.gudmalin@lsu.edu.ph"||t.user.email==="macy.beniola@lsu.edu.ph"||t.user.email==="lynn.lumacad@lsu.edu.ph")?(_.push("/_/panels/library/appointment/set-schedules/edit/"+p.params.id),g.time.filter(l=>{a.value.time.push(l)})):_.push("/_/unauthorized")});const S=()=>{_.push("/_/lib-admin"),t.removeToken()},C=async()=>{console.log("updated"),a.value.time<2&&(a.value.time=["-"],console.log("1 left")),await $fetch(w.value+"/api/library/schedule/booking/"+p.params.id+"/edit/",{method:"PUT",body:a.value}).then(l=>{console.log("response",l),_.push({path:"/_/panels/library/appointment/set-schedules"})})};return(l,i)=>{const j=T,M=U,B=V;return v(),m("div",Z,[e("div",ee,[h(e("div",te,[f(j)],512),[[F,s(o)]]),e("div",se,[e("div",ae,[e("div",oe,[e("div",le,[e("div",{onClick:i[0]||(i[0]=n=>O(o)?o.value=!s(o):o=!s(o)),class:"w-10 px-1.5"},[e("i",{class:R(["fa text-3xl text-white",s(o)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ie,[ne,e("h1",ce,x(s(t).user.email),1)])]),e("button",{onClick:S,class:"flex hover:font-bold pt-1"},ue)])]),e("div",_e,[e("div",pe,[e("div",me,[e("div",he,[e("form",{class:"w-full",onSubmit:A(C,["prevent"])},[e("div",fe,[e("div",xe,[ve,e("div",be,[h(e("input",{class:"text-center text-green-900 text-sm font-bold","onUpdate:modelValue":i[1]||(i[1]=n=>s(a).date=n),disabled:""},null,512),[[q,s(a).date]])]),e("div",we,[ge,f(M,{to:"/_/panels/library/appointment/set-schedules",class:"block w-fit uppercase text-sm rounded-sm shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:J(()=>[H(" Cancel ")]),_:1})])]),e("div",ye,[ke,e("ul",Se,[(v(!0),m(P,null,G(s(y)[0].time,(n,D)=>(v(),m("li",{class:"mb-3 lg:flex justify-center font-bold text-black mx-10",key:D},[h(e("input",{id:"time",type:"checkbox",name:"time",value:n,class:"mr-2 mt-0.5 available","onUpdate:modelValue":i[2]||(i[2]=N=>s(a).time=N)},null,8,Ce),[[K,s(a).time]]),e("label",je,x(n._12_hour_format_from)+" - "+x(n._12_hour_format_to),1)]))),128))])])])],32)])])])])])]),f(B)])}}},Ee=Y(Me,[["__scopeId","data-v-96a80751"]]);export{Ee as default};
