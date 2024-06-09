import{_ as q}from"./C82r3uAo.js";import{_ as G}from"./CEDhaVpL.js";import{m as H,u as K,g as Q,r as l,q as W,h as Z,c as d,a as e,i as g,v as T,f as s,b as D,j as w,n as ee,t as A,F as V,s as L,z as te,o as r,A as se,C as oe,p as le,e as ae}from"./CEjWktDe.js";import{p as ie}from"./DsCrdf0t.js";import{s as ne}from"./C1zSg28U.js";import{X as de}from"./B-Z9G7Ro.js";/* empty css        */import{h as re}from"./C5S46NFB.js";import"./vUEbHlag.js";import{_ as ce}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const u=x=>(le("data-v-1d8d322f"),x=x(),ae(),x),ue={class:""},pe={class:"flex h-screen"},me={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},he={class:"w-full"},_e={class:"bg-green-800"},ve={class:"flex mx-auto justify-between py-2 px-3.5"},xe={class:"flex items-center text-white gap-5"},fe={class:"flex -mt-1"},ge=u(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),we={class:"text-sm"},be=u(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ye=u(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ke=[be,ye],Ce={class:""},Se={class:"lg:w-full p-5"},De={class:"h-full shadow-lg pb-10"},Ae={class:"relative"},Ee={key:0,class:""},Me={class:"w-full"},Ne={class:"lg:flex"},Re={class:"lg:w-1/3 mx-auto"},Te={class:"lg:w-8/12 mx-auto ml-5"},Ve=u(()=>e("p",{class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),Le={class:"border p-5 w-fit mx-auto"},Be={class:"lg:py-2"},Oe={class:"flex"},Ue=["value","onClick"],Ye={class:"ml-1"},je={class:"w-1/3 mb-10 w-fitmx-auto h-full mr-10"},Fe=u(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Calendar ",-1)),Ie={class:"w-fit mx-auto"},$e={class:"lg:w-1/3 mx-auto"},ze=u(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),Pe={class:"w-full"},Je={class:""},Xe={class:""},qe={class:"flex h-full w-fit mx-auto px-5 py-2 shadow-sm border"},Ge={class:"text-xs"},He=["value"],Ke={class:"",for:"time"},Qe={key:0,class:"ml-10"},We={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ze=u(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),et={key:1,class:"text-center"},tt={__name:"index",async setup(x){let f,E;H();const p=K(),i=Q(),M=l(i.mainServer),B=l(ne.timeSelection),O=l(ie.providerListsDepartment),b=([f,E]=W(()=>$fetch(M.value+"/api/schedules/list/").catch(o=>o.data)),f=await f,E(),f);let y=l(),m=l("CAS / CON"),n=l(),h=l([]);l([]);let k=l(!1),C=l([]),c=l(!0),v=l(!1);const U=l(i.user.registrarEmail),Y=l(i.user.developerEmail),j=l(i.user.testEmail);Z(()=>{i.user.isAuthenticated&&(i.user.email===U.value||i.user.email===Y.value||i.user.email===j.value)?p.push("/_/panels/registrar/appointment/set-schedules"):p.push("/_/unauthorized"),N("CAS / CON")});let N=o=>{C.value=[],console.log(o),setTimeout(()=>{b.filter(function(t){o===t.provider&&(m.value=t.provider,n.value=t.date,C.value.push(t.date))},100)})};const F=o=>{n.value=re(o).format("MM-DD-YYYY"),k.value=!1,h.value=["-"],setTimeout(()=>{b.filter(function(t){t.provider===m.value&&t.date===n.value&&(y.value=t.id,h.value=t.time,k.value=!0)})},100)},R=o=>{v.value=!v.value,o.value=o},I=async()=>{await $fetch(M.value+"/api/schedules/"+y.value+"/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(async o=>{console.log("response",o),p.go(),v.value=!v.value})},$=()=>{p.push("/_/panels/registrar/appointment/set-schedules/create")},z=()=>{p.push("/_/reg-admin"),i.removeToken()},P=o=>{p.push("/_/panels/registrar/appointment/set-schedules/edit/"+o),console.log(o)};return(o,t)=>{const J=q,X=G;return r(),d("div",ue,[e("div",pe,[g(e("div",me,[D(J)],512),[[T,s(c)]]),e("div",he,[e("div",_e,[e("div",ve,[e("div",xe,[e("div",{onClick:t[0]||(t[0]=a=>w(c)?c.value=!s(c):c=!s(c)),class:"w-10 px-1.5"},[e("i",{class:ee(["fa text-3xl text-white",s(c)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",fe,[ge,e("h1",we,A(s(i).user.email),1)])]),e("button",{onClick:z,class:"flex hover:font-bold pt-1"},ke)])]),e("div",Ce,[e("div",Se,[e("div",De,[e("div",Ae,[e("div",{class:"w-full mb-10"},[e("div",{class:"shadow px-3"},[e("button",{onClick:$,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Schedules ")])]),s(b).length>0?(r(),d("div",Ee,[e("div",Me,[e("div",Ne,[e("div",Re,[e("div",Te,[Ve,e("div",Le,[e("div",Be,[(r(!0),d(V,null,L(s(O),(a,S)=>(r(),d("div",{key:S},[e("div",Oe,[g(e("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500 mt-1",type:"radio",name:"provider",value:a.department,"onUpdate:modelValue":t[1]||(t[1]=_=>w(m)?m.value=_:m=_),onClick:_=>s(N)(a.department)},null,8,Ue),[[se,s(m)]]),e("div",Ye,A(a.department),1)])]))),128))])])])]),e("div",je,[Fe,e("div",Ie,[D(s(de),{modelValue:s(n),"onUpdate:modelValue":[t[2]||(t[2]=a=>w(n)?n.value=a:n=a),t[3]||(t[3]=a=>F(s(n)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(C),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",$e,[ze,e("div",Pe,[e("div",Je,[e("div",Xe,[e("div",qe,[e("ul",Ge,[(r(!0),d(V,null,L(s(B)[0].time,(a,S)=>(r(),d("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:S},[g(e("input",{type:"checkbox",name:"time",value:a,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[4]||(t[4]=_=>w(h)?h.value=_:h=_),disabled:""},null,8,He),[[oe,s(h)]]),e("p",Ke,A(a),1)]))),128))])])])])])])])]),s(k)?(r(),d("div",Qe,[e("button",{onClick:t[5]||(t[5]=a=>P(s(y))),class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update Time "),e("button",{onClick:R,class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900"}," Removed / Disable ")])):te("",!0),g(e("div",We,[Ze,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:I},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:R},"Cancel")])],512),[[T,s(v)]])])):(r(),d("div",et," Please Add Schedules, No Results Found! "))])])])])])]),D(X)])}}},mt=ce(tt,[["__scopeId","data-v-1d8d322f"]]);export{mt as default};
