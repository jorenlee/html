import{_ as F}from"./BJG_fTkF.js";import{_ as O}from"./Dhbgj7Ek.js";import{_ as $}from"./tqQo1Ts0.js";import{m as A,u as z,g as J,r as t,q as C,h as q,c as f,a as e,i as b,v as K,f as a,b as w,j as g,n as G,t as y,k as H,l as Q,F as W,s as X,w as Y,o as S,C as Z,d as ee,p as te,e as se}from"./6xoVAQCu.js";import{u as oe}from"./CjzAs7LX.js";import"./C3csOAw6.js";/* empty css        */import{s as ae}from"./C1zSg28U.js";import{p as le}from"./DsCrdf0t.js";import"./C5S46NFB.js";import"./vUEbHlag.js";import{_ as ie}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const c=_=>(te("data-v-fb9cd923"),_=_(),se(),_),ce={class:""},ne={class:"flex"},de={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},re={class:"w-full"},ue={class:"bg-green-800"},_e={class:"flex mx-auto justify-between py-2 px-3.5"},pe={class:"flex items-center text-white gap-5"},me={class:"flex -mt-1"},he=c(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),xe={class:"text-sm"},ve=c(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),fe=c(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),be=[ve,fe],we={class:""},ge={class:"lg:w-full p-5"},ye={class:"h-full shadow-lg pb-10"},Se={class:""},ke={class:"flex"},Ce={class:"lg:w-1/3 mx-auto"},De={class:"w-fit mx-auto"},Pe=c(()=>e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),Me={class:"border p-5"},Ee=c(()=>e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),Le={class:"lg:space-y-3"},Ne={class:"w-1/3 mb-10 justify-center h-full mr-10"},Te=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),Be={class:"w-fit mx-auto"},Ie={class:"lg:w-1/3 mx-auto"},Re=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),Ue={class:"w-fit mx-auto"},Ve={class:""},je={class:""},Fe={class:"flex h-full w-full px-5 py-2 shadow-sm border"},Oe={class:"text-xs"},$e=["value"],Ae={class:"",for:"time"},ze=c(()=>e("button",{class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update ",-1)),Je={__name:"[id]",async setup(_){let l,p;const h=A(),m=z(),s=J(),x=t(s.mainDevServer),{data:D}=([l,p]=C(()=>oe(x.value+"/api/schedules/"+h.params.id+"/","$4IPCPoxKDf")),l=await l,p(),l),P=([l,p]=C(()=>$fetch(x.value+"/api/schedules/list/").catch(o=>o.data)),l=await l,p(),l),M=t(ae.timeSelection);let E=t(),v=t([]),d=t(),i=t([]);t([]);let n=t(!0);t(le.providerListsDepartment);const L=t(s.user.registrarEmail),N=t(s.user.developerEmail),T=t(s.user.testEmail);q(()=>{s.user.isAuthenticated&&(s.user.email===L.value||s.user.email===N.value||s.user.email===T.value)?(m.push("/_/panels/registrar/appointment/set-schedules/edit/"+h.params.id),P.filter(function(o){o.date===D.value.date&&(v.value=o.provider,E.value=o.id,i.value=o.time,d.value=o.date)})):m.push("/_/unauthorized")});const B=()=>{m.push("/_/reg-admin"),s.removeToken()},I=async()=>{i.value<2&&(i.value=["-"]),await $fetch(x.value+"/api/schedules/"+h.params.id+"/edit/",{method:"PUT",body:{provider:v.value,date:d.value,time:i.value}}).then(o=>{m.push({path:"/_/panels/registrar/appointment/set-schedules"})})};return(o,r)=>{const R=F,U=O,V=$;return S(),f("div",ce,[e("div",ne,[b(e("div",de,[w(R)],512),[[K,a(n)]]),e("div",re,[e("div",ue,[e("div",_e,[e("div",pe,[e("div",{onClick:r[0]||(r[0]=u=>g(n)?n.value=!a(n):n=!a(n)),class:"w-10 px-1.5"},[e("i",{class:G(["fa text-3xl text-white",a(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",me,[he,e("h1",xe,y(a(s).user.email),1)])]),e("button",{onClick:B,class:"flex hover:font-bold pt-1"},be)])]),e("div",we,[e("div",ge,[e("div",ye,[e("div",Se,[e("form",{class:"w-full",onSubmit:H(I,["prevent"])},[e("div",ke,[e("div",Ce,[e("div",De,[Pe,e("div",Me,[Ee,e("div",Le,y(a(v)),1)])])]),e("div",Ne,[Te,e("div",Be,[b(e("input",{class:"text-center","onUpdate:modelValue":r[1]||(r[1]=u=>g(d)?d.value=u:d=u),disabled:""},null,512),[[Q,a(d)]])])]),e("div",Ie,[Re,e("div",Ue,[e("div",Ve,[e("div",je,[e("div",Fe,[e("ul",Oe,[(S(!0),f(W,null,X(a(M)[0].time,(u,j)=>(S(),f("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:j},[b(e("input",{id:"time",type:"checkbox",name:"time",value:u,class:"mr-2 mt-0.5 available","onUpdate:modelValue":r[2]||(r[2]=k=>g(i)?i.value=k:i=k)},null,8,$e),[[Z,a(i)]]),e("label",Ae,y(u),1)]))),128))])])])])])])]),ze,w(U,{to:"/_/panels/registrar/appointment/set-schedules",class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:Y(()=>[ee(" Cancel ")]),_:1})],32)])])])])])]),w(V)])}}},at=ie(Je,[["__scopeId","data-v-fb9cd923"]]);export{at as default};
