import{_ as j}from"./RXFMQHjA.js";import{_ as A}from"./BHrem7VL.js";import{_ as F}from"./DF-Bxzw6.js";import{g as O,e as $,u as z,r as s,i as S,h as I,c as v,a as e,j as f,v as J,f as l,b as h,k as b,n as K,t as w,l as q,m as G,F as H,s as Q,w as W,o as g,A as X,d as Y}from"./BJD4BkOF.js";import"./3Y-mrisH.js";/* empty css        */import{s as Z}from"./C1zSg28U.js";import{p as ee}from"./DsCrdf0t.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import{u as te}from"./D6QLTXHn.js";import{_ as se}from"./DlAUqK2U.js";const ae={class:""},oe={class:"flex"},le={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},ie={class:"w-full"},re={class:"bg-green-800"},ne={class:"flex mx-auto justify-between py-2 px-3.5"},de={class:"flex items-center text-white gap-5"},ce={class:"flex -mt-1"},ue={class:"text-sm"},me={class:""},pe={class:"lg:w-full p-5"},_e={class:"h-full shadow-lg pb-10"},xe={class:""},ve={class:"flex"},fe={class:"lg:w-1/3 mx-auto"},he={class:"w-fit mx-auto"},be={class:"border p-5"},we={class:"lg:space-y-3"},ge={class:"w-1/3 mb-10 justify-center h-full mr-10"},ye={class:"w-fit mx-auto"},Se={class:"lg:w-1/3 mx-auto"},ke={class:"w-fit mx-auto"},Ce={class:""},De={class:""},Pe={class:"flex h-full w-full px-5 py-2 shadow-sm border"},Me={class:"text-xs"},Ee=["value"],Le={class:"",for:"time"},Ne={__name:"[id]",async setup(Te){let i,u;const p=O(),m=$(),a=z(),_=s(a.mainDevServer),{data:k}=([i,u]=S(()=>te(_.value+"/api/schedules/"+p.params.id+"/","$4IPCPoxKDf")),i=await i,u(),i),C=([i,u]=S(()=>$fetch(_.value+"/api/schedules/list/").catch(o=>o.data)),i=await i,u(),i),D=s(Z.timeSelection);let P=s(),x=s([]),d=s(),r=s([]);s([]);let n=s(!0);s(ee.providerListsDepartment);const M=s(a.user.registrarEmail),E=s(a.user.developerEmail),L=s(a.user.testEmail);I(()=>{a.user.isAuthenticated&&(a.user.email===M.value||a.user.email===E.value||a.user.email===L.value)?(m.push("/_/panels/registrar/appointment/set-schedules/edit/"+p.params.id),C.filter(function(o){o.date===k.value.date&&(x.value=o.provider,P.value=o.id,r.value=o.time,d.value=o.date)})):m.push("/_/unauthorized")});const N=()=>{m.push("/_/reg-admin"),a.removeToken()},T=async()=>{r.value<2&&(r.value=["-"]),await $fetch(_.value+"/api/schedules/"+p.params.id+"/edit/",{method:"PUT",body:{provider:x.value,date:d.value,time:r.value}}).then(o=>{m.push({path:"/_/panels/registrar/appointment/set-schedules"})})};return(o,t)=>{const B=j,R=A,U=F;return g(),v("div",ae,[e("div",oe,[f(e("div",le,[h(B)],512),[[J,l(n)]]),e("div",ie,[e("div",re,[e("div",ne,[e("div",de,[e("div",{onClick:t[0]||(t[0]=c=>b(n)?n.value=!l(n):n=!l(n)),class:"w-10 px-1.5"},[e("i",{class:K(["fa text-3xl text-white",l(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ce,[t[3]||(t[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ue,w(l(a).user.email),1)])]),e("button",{onClick:N,class:"flex hover:font-bold pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",me,[e("div",pe,[e("div",_e,[e("div",xe,[e("form",{class:"w-full",onSubmit:q(T,["prevent"])},[e("div",ve,[e("div",fe,[e("div",he,[t[6]||(t[6]=e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),e("div",be,[t[5]||(t[5]=e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),e("div",we,w(l(x)),1)])])]),e("div",ge,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),e("div",ye,[f(e("input",{class:"text-center","onUpdate:modelValue":t[1]||(t[1]=c=>b(d)?d.value=c:d=c),disabled:""},null,512),[[G,l(d)]])])]),e("div",Se,[t[8]||(t[8]=e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),e("div",ke,[e("div",Ce,[e("div",De,[e("div",Pe,[e("ul",Me,[(g(!0),v(H,null,Q(l(D)[0].time,(c,V)=>(g(),v("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:V},[f(e("input",{id:"time",type:"checkbox",name:"time",value:c,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[2]||(t[2]=y=>b(r)?r.value=y:r=y)},null,8,Ee),[[X,l(r)]]),e("label",Le,w(c),1)]))),128))])])])])])])]),t[10]||(t[10]=e("button",{class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update ",-1)),h(R,{to:"/_/panels/registrar/appointment/set-schedules",class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:W(()=>t[9]||(t[9]=[Y(" Cancel ")])),_:1})],32)])])])])])]),h(U)])}}},Ke=se(Ne,[["__scopeId","data-v-fb9cd923"]]);export{Ke as default};
