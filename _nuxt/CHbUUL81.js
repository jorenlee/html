import{_ as F}from"./C0vwGnwE.js";import{_ as O}from"./DIo_YVBX.js";import{_ as $}from"./YD0WXFwI.js";import{D as j,m as z,u as A,r as s,E as S,p as J,c as v,a as e,q as f,v as I,n as l,b as h,s as b,x as q,t as w,G,B as K,F as H,z as Q,w as W,o as g,J as X,d as Y}from"./CFRatIu_.js";import"./CUWZBpx2.js";/* empty css        */import{s as Z}from"./C1zSg28U.js";import{p as ee}from"./DsCrdf0t.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import{u as te}from"./D8oNfOCP.js";import{_ as se}from"./DlAUqK2U.js";const ae={class:""},oe={class:"flex"},le={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},ie={class:"w-full"},re={class:"bg-green-800"},ne={class:"flex mx-auto justify-between py-2 px-3.5"},de={class:"flex items-center text-white gap-5"},ce={class:"flex -mt-1"},ue={class:"text-sm"},pe={class:""},me={class:"lg:w-full p-5"},_e={class:"h-full shadow-lg pb-10"},xe={class:""},ve={class:"flex"},fe={class:"lg:w-1/3 mx-auto"},he={class:"w-fit mx-auto"},be={class:"border p-5"},we={class:"lg:space-y-3"},ge={class:"w-1/3 mb-10 justify-center h-full mr-10"},ye={class:"w-fit mx-auto"},Se={class:"lg:w-1/3 mx-auto"},ke={class:"w-fit mx-auto"},Ce={class:""},De={class:""},Pe={class:"flex h-full w-full px-5 py-2 shadow-sm border"},Ee={class:"text-xs"},Me=["value"],Be={class:"",for:"time"},Le={__name:"[id]",async setup(Ne){let i,u;const m=j(),p=z(),a=A(),_=s(a.mainDevServer),{data:k}=([i,u]=S(()=>te(_.value+"/api/schedules/"+m.params.id+"/","$4IPCPoxKDf")),i=await i,u(),i),C=([i,u]=S(()=>$fetch(_.value+"/api/schedules/list/").catch(o=>o.data)),i=await i,u(),i),D=s(Z.timeSelection);let P=s(),x=s([]),d=s(),r=s([]);s([]);let n=s(!0);s(ee.providerListsDepartment);const E=s(a.user.registrarEmail),M=s(a.user.developerEmail),B=s(a.user.testEmail);J(()=>{a.user.isAuthenticated&&(a.user.email===E.value||a.user.email===M.value||a.user.email===B.value)?(p.push("/_/panels/registrar/appointment/set-schedules/edit/"+m.params.id),C.filter(function(o){o.date===k.value.date&&(x.value=o.provider,P.value=o.id,r.value=o.time,d.value=o.date)})):p.push("/_/unauthorized")});const L=()=>{p.push("/_/reg-admin"),a.removeToken()},N=async()=>{r.value<2&&(r.value=["-"]),await $fetch(_.value+"/api/schedules/"+m.params.id+"/edit/",{method:"PUT",body:{provider:x.value,date:d.value,time:r.value}}).then(o=>{p.push({path:"/_/panels/registrar/appointment/set-schedules"})})};return(o,t)=>{const T=F,R=O,U=$;return g(),v("div",ae,[e("div",oe,[f(e("div",le,[h(T)],512),[[I,l(n)]]),e("div",ie,[e("div",re,[e("div",ne,[e("div",de,[e("div",{onClick:t[0]||(t[0]=c=>b(n)?n.value=!l(n):n=!l(n)),class:"w-10 px-1.5"},[e("i",{class:q(["fa text-3xl text-white",l(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ce,[t[3]||(t[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ue,w(l(a).user.email),1)])]),e("button",{onClick:L,class:"flex hover:font-bold pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",pe,[e("div",me,[e("div",_e,[e("div",xe,[e("form",{class:"w-full",onSubmit:G(N,["prevent"])},[e("div",ve,[e("div",fe,[e("div",he,[t[6]||(t[6]=e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),e("div",be,[t[5]||(t[5]=e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),e("div",we,w(l(x)),1)])])]),e("div",ge,[t[7]||(t[7]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),e("div",ye,[f(e("input",{class:"text-center","onUpdate:modelValue":t[1]||(t[1]=c=>b(d)?d.value=c:d=c),disabled:""},null,512),[[K,l(d)]])])]),e("div",Se,[t[8]||(t[8]=e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),e("div",ke,[e("div",Ce,[e("div",De,[e("div",Pe,[e("ul",Ee,[(g(!0),v(H,null,Q(l(D)[0].time,(c,V)=>(g(),v("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:V},[f(e("input",{id:"time",type:"checkbox",name:"time",value:c,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[2]||(t[2]=y=>b(r)?r.value=y:r=y)},null,8,Me),[[X,l(r)]]),e("label",Be,w(c),1)]))),128))])])])])])])]),t[10]||(t[10]=e("button",{class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update ",-1)),h(R,{to:"/_/panels/registrar/appointment/set-schedules",class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-red-900 whitespace-nowrap"},{default:W(()=>t[9]||(t[9]=[Y(" Cancel ")])),_:1})],32)])])])])])]),h(U)])}}},qe=se(Le,[["__scopeId","data-v-fb9cd923"]]);export{qe as default};
