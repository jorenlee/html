import{_ as F}from"./CgKGmP-z.js";import{_ as O}from"./CsTAejHJ.js";import{_ as $}from"./BJ9zYYbz.js";import{m as A,u as z,g as J,r as t,q as P,h as q,c as f,a as e,i as g,v as K,f as a,b as w,j as b,n as G,t as y,k as H,l as Q,F as W,s as X,w as Y,o as S,C as Z,d as ee,p as te,e as se}from"./Dg5c85YJ.js";import{u as oe}from"./DzCuYo-h.js";import"./JCa0i-9V.js";/* empty css        */import{s as ae}from"./C1zSg28U.js";import{p as le}from"./DsCrdf0t.js";import"./C5S46NFB.js";import"./vUEbHlag.js";import{_ as ie}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const c=_=>(te("data-v-e94c2770"),_=_(),se(),_),ce={class:""},ne={class:"flex"},de={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},re={class:"w-full"},ue={class:"bg-green-800"},_e={class:"flex mx-auto justify-between py-2 px-3.5"},pe={class:"flex items-center text-white gap-5"},me={class:"flex -mt-1"},he=c(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),xe={class:"text-sm"},ve=c(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),fe=c(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ge=[ve,fe],we={class:""},be={class:"lg:w-full p-5"},ye={class:"h-full shadow-lg pb-10"},Se={class:""},ke={class:"flex"},Ce={class:"lg:w-1/3 mx-auto"},Pe={class:"w-fit mx-auto"},De=c(()=>e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),Me={class:"border p-5"},Ee=c(()=>e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),Le={class:"lg:space-y-3"},Ne={class:"w-1/3 mb-10 justify-center h-full mr-10"},Te=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),Be={class:"w-fit mx-auto"},Ie={class:"lg:w-1/3 mx-auto"},Re=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),Ue={class:"w-fit mx-auto"},Ve={class:""},je={class:""},Fe={class:"flex h-full w-full px-5 py-2 shadow-sm border"},Oe={class:"text-xs"},$e=["value"],Ae={class:"",for:"time"},ze=c(()=>e("button",{class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update ",-1)),Je={__name:"[id]",async setup(_){let l,p;const h=A(),m=z(),s=J(),x=t(s.mainServer),{data:k}=([l,p]=P(()=>oe(x.value+"/api/schedules/"+h.params.id+"/","$4IPCPoxKDf")),l=await l,p(),l),D=([l,p]=P(()=>$fetch(x.value+"/api/schedules/list/").catch(o=>o.data)),l=await l,p(),l),M=t(ae.timeSelection);let E=t(),v=t([]),d=t(),i=t([]);t([]);let n=t(!0);t(le.providerListsDepartment);const L=t(s.user.registrarEmail),N=t(s.user.developerEmail),T=t(s.user.testEmail);q(()=>{s.user.isAuthenticated&&(s.user.email===L.value||s.user.email===N.value||s.user.email===T.value)?(m.push("/_/panels/registrar/appointment/set-schedules/edit/"+h.params.id),D.filter(function(o){o.date===k.value.date&&(v.value=o.provider,E.value=o.id,i.value=o.time,d.value=o.date)}),console.log(k)):m.push("/_/unauthorized")});const B=()=>{m.push("/_/reg-admin"),s.removeToken()},I=async()=>{console.log("updated"),i.value<2&&(i.value=["-"],console.log("1 left")),await $fetch(x.value+"/api/schedules/"+h.params.id+"/edit/",{method:"PUT",body:{provider:v.value,date:d.value,time:i.value}}).then(o=>{console.log("response",o),m.push({path:"/_/panels/registrar/appointment/set-schedules"})})};return(o,r)=>{const R=F,U=O,V=$;return S(),f("div",ce,[e("div",ne,[g(e("div",de,[w(R)],512),[[K,a(n)]]),e("div",re,[e("div",ue,[e("div",_e,[e("div",pe,[e("div",{onClick:r[0]||(r[0]=u=>b(n)?n.value=!a(n):n=!a(n)),class:"w-10 px-1.5"},[e("i",{class:G(["fa text-3xl text-white",a(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",me,[he,e("h1",xe,y(a(s).user.email),1)])]),e("button",{onClick:B,class:"flex hover:font-bold pt-1"},ge)])]),e("div",we,[e("div",be,[e("div",ye,[e("div",Se,[e("form",{class:"w-full",onSubmit:H(I,["prevent"])},[e("div",ke,[e("div",Ce,[e("div",Pe,[De,e("div",Me,[Ee,e("div",Le,y(a(v)),1)])])]),e("div",Ne,[Te,e("div",Be,[g(e("input",{class:"text-center","onUpdate:modelValue":r[1]||(r[1]=u=>b(d)?d.value=u:d=u),disabled:""},null,512),[[Q,a(d)]])])]),e("div",Ie,[Re,e("div",Ue,[e("div",Ve,[e("div",je,[e("div",Fe,[e("ul",Oe,[(S(!0),f(W,null,X(a(M)[0].time,(u,j)=>(S(),f("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:j},[g(e("input",{id:"time",type:"checkbox",name:"time",value:u,class:"mr-2 mt-0.5 available","onUpdate:modelValue":r[2]||(r[2]=C=>b(i)?i.value=C:i=C)},null,8,$e),[[Z,a(i)]]),e("label",Ae,y(u),1)]))),128))])])])])])])]),ze,w(U,{to:"/_/panels/registrar/appointment/set-schedules",class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:Y(()=>[ee(" Cancel ")]),_:1})],32)])])])])])]),w(V)])}}},at=ie(Je,[["__scopeId","data-v-e94c2770"]]);export{at as default};
