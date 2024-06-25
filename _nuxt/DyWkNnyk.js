import{_ as F}from"./CWdZnkO6.js";import{_ as N}from"./DWBd0UaW.js";import{u as U,g as R,r as i,q as X,h as q,c as u,a as e,i as x,v as g,f as t,b as w,j as J,n as K,t as y,k as P,F as G,s as H,o as m,C as Q,p as W,e as Z}from"./DW51Lek_.js";import{s as ee}from"./BEx1_QdV.js";import{X as te}from"./DObfOPD5.js";/* empty css        */import{h as v}from"./C5S46NFB.js";import"./vUEbHlag.js";import{_ as se}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const _=h=>(W("data-v-fd80611e"),h=h(),Z(),h),ae={class:""},oe={class:"flex"},le={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ie={class:"w-full"},ne={class:"bg-green-800"},de={class:"flex mx-auto justify-between py-2 px-3.5"},re={class:"flex items-center text-white gap-5"},ce={class:"flex -mt-1"},ue=_(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),me={class:"text-sm"},_e=_(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),he=_(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),pe=[_e,he],fe={class:""},xe={class:"lg:w-full p-5"},ve={class:"h-full shadow-lg"},be={class:""},ge={class:"w-full"},we={class:""},ye={class:"mx-10 flex items-center"},De={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"},ke={key:1,class:"bg-gray-300 text-xs text-white font-bold py-2 px-4 rounded-lg uppercase cursor-not-allowed"},Se={class:"lg:flex"},Ce={class:"w-fit mx-auto mb-10 h-full"},Me=_(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Select Date to Add Schedule ",-1)),je={class:""},Ae={class:"text-center mt-5 text-red-700"},Be={class:"w-fit mx-auto mb-5"},Ye={class:"w-11/12 mx-auto px-3 py-2 shadow-sm border"},Ve=_(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Time ",-1)),ze={class:"text-xs flex flex-wrap justify-center"},Ie=["value"],Le={class:"",for:"time"},Te={__name:"create",async setup(h){let p,D;const c=U(),s=R(),k=i(s.mainServer),S=i(ee.timeSelection),a=i({date:null,time:S._rawValue[0].time,updated_at:new Date});let C=i([]),r=i(!1),n=i(!0);const b=i(!1),f=i(!0),A=i(new Date),M=([p,D]=X(()=>$fetch(k.value+"/api/library/schedule/booking/list/").catch(o=>o.data)),p=await p,D(),p),B=i(s.user.developerEmail),j=()=>{M.filter(function(o){a.value.date=o.date,C.value.push(o.date)})};q(()=>{s.user.isAuthenticated&&(s.user.email===B.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph")?(j(),c.push("/_/panels/library/appointment/set-schedules/create")):c.push("/_/unauthorized")});const Y=()=>{M.filter(function(o){a.value.time=o.time,o.date===a.value.date&&(r.value=!1)})},V=o=>{a.value.date=v(o).format("MM-DD-YYYY");let l=v(v().toDate()).format("MM-DD-YYYY");b.value=!1,f.value=!0,r.value=!0,a.value.date===l?(r.value=!1,b.value=!0,f.value=!1):v(a.value.date).isBefore(l)?(r.value=!1,f.value=!1):Y()},z=()=>{c.push("/_/panels/library/appointment/set-schedules")},I=()=>{c.push("/_/lib-admin"),s.removeToken()},L=async()=>{await $fetch(k.value+"/api/library/schedule/booking/create/",{method:"POST",headers:{Authorization:s.user.token,"Content-Type":"application/json"},body:a.value}).then(async o=>{console.log("response",o),j(),c.go(),r.value=!0})};return(o,l)=>{const T=F,$=N;return m(),u("div",ae,[e("div",oe,[x(e("div",le,[w(T)],512),[[g,t(n)]]),e("div",ie,[e("div",ne,[e("div",de,[e("div",re,[e("div",{onClick:l[0]||(l[0]=d=>J(n)?n.value=!t(n):n=!t(n)),class:"w-10 px-1.5"},[e("i",{class:K(["fa text-3xl text-white",t(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ce,[ue,e("h1",me,y(t(s).user.email),1)])]),e("button",{onClick:I,class:"flex hover:font-bold pt-1"},pe)])]),e("div",fe,[e("div",xe,[e("div",ve,[e("div",be,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:z,class:"shadow text-center capitalize my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," BACK ")])]),e("div",ge,[e("div",we,[e("form",{class:"flex mx-auto",onSubmit:P(L,["prevent"])},[e("div",ye,[t(r)?(m(),u("button",De," ADD ")):(m(),u("div",ke," ADD "))]),e("div",Se,[e("div",Ce,[Me,e("div",je,[w(t(te),{modelValue:t(a).date,"onUpdate:modelValue":[l[1]||(l[1]=d=>t(a).date=d),l[2]||(l[2]=d=>V(t(a).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:t(C),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":t(A)},null,8,["modelValue","highlight","min-date"])]),x(e("div",Ae," Sorry! Can't Add Current Date ",512),[[g,t(b)]])]),x(e("div",Be,[e("div",Ye,[Ve,e("ul",ze,[(m(!0),u(G,null,H(t(S)[0].time,(d,E)=>(m(),u("li",{class:"my-2 lg:flex justify-center font-bold text-black mx-10",key:E},[x(e("input",{id:"time",type:"checkbox",name:"time",value:d,class:"mr-2 mt-0.5 available","onUpdate:modelValue":l[3]||(l[3]=O=>t(a).time=O)},null,8,Ie),[[Q,t(a).time]]),e("label",Le,y(d._12_hour_format_from)+" - "+y(d._12_hour_format_to),1)]))),128))])])],512),[[g,t(f)]])])],32)])])])])])])])]),w($)])}}},Ke=se(Te,[["__scopeId","data-v-fd80611e"]]);export{Ke as default};
