import{_ as W}from"./iqvwxiHq.js";import{_ as X}from"./LZ88SyS9.js";import{u as Z,g as ee,r as t,h as te,B as se,c as u,a as e,i as j,v as L,f as i,b as M,j as ae,n as le,t as h,F as O,s as V,d as $,z as oe,x as ie,o as d,p as re,e as ne}from"./BfjF16w0.js";import{p as ce}from"./BOCn3TFe.js";import{s as ue}from"./C1zSg28U.js";import"./DMG3FHpu.js";/* empty css        */import{h as de}from"./C5S46NFB.js";import{_ as pe}from"./vUEbHlag.js";import{_ as ve}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const n=x=>(re("data-v-e7781281"),x=x(),ne(),x),he={class:""},_e={class:"flex"},me={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},ge={class:"w-full min-h-screen"},xe={class:"bg-green-800"},fe={class:"lg:flex mx-auto justify-between py-2 px-3.5"},we={class:"lg:flex items-center text-white lg:gap-5"},be={class:"flex -mt-1"},ye=n(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),Ce={class:"text-sm"},ke=n(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),Se=n(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),Ae=[ke,Se],Ee={class:"px-3"},Ne=n(()=>e("div",{class:""},[e("a",{href:"/_/panels/registrar/appointment/create",class:"w-fit block shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Appointment ")],-1)),Re={class:""},De={class:"w-full"},Te={class:""},Be={class:"appointment-lists shadow mx-auto text-xs"},je={class:""},Le=ie('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-e7781281><ul class="lg:flex w-full justify-evenly text-center lg:whitespace-nowrap" data-v-e7781281><li class="lg:w-14" data-v-e7781281>No.</li><li class="lg:w-1/12" data-v-e7781281>Reference Code</li><li class="lg:w-1/12" data-v-e7781281>Provider</li><li class="lg:w-1/12" data-v-e7781281>Time</li><li class="lg:w-2/12" data-v-e7781281>Date</li><li class="lg:w-1/12" data-v-e7781281>Action</li></ul></div>',1),Me={key:0,class:"w-full rows"},Oe={class:"px-2 lg:w-14"},Ve={class:"px-2 lg:w-1/12"},$e={class:"px-2 lg:w-1/12 whitespace-nowrap"},Fe={class:"px-2 lg:w-1/12 whitespace-nowrap"},Ie={class:"px-2 lg:w-2/12"},Ye={class:"flex px-2 font-bold justify-center lg:w-1/12"},ze={class:"mx-auto lg:flex justify-center"},Ge=["onClick"],He=n(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),qe=[He],Je={class:"mx-auto lg:flex justify-center"},Pe=["onClick"],Ue=n(()=>e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),Ke=[Ue],Qe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},We=n(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),Xe={key:1,class:"itallic text-gray-400 text-center p-1"},Ze={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg mt-10"},et=n(()=>e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1)),tt={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},st=["onClick"],at=n(()=>e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)),lt={__name:"index",setup(x){const m=Z(),a=ee();t(1);const w=t(a.mainServer);let o=t(0);t(ce.providerLists),t(ue.timeSelection),t(!0),t(!1),t(!1);let p=t(!0),g=t(!1),b=t();t(!1);const y=t("cba.registrar@lsu.edu.ph"),C=t("ccsea.registrar@lsu.edu.ph"),k=t("onlinerequest@lsu.edu.ph"),S=t("cthm.registrar@lsu.edu.ph"),A=t("cthm.registrar@lsu.edu.ph"),E=t("onlinerequest@lsu.edu.ph"),N=t("cte.registrar@lsu.edu.ph"),F=t(a.user.registrarEmail),I=t(a.user.developerEmail),Y=t(a.user.testEmail);te(async()=>{const s=await $fetch(w.value+"/api/appointments/list/").catch(l=>l.data);if(a.user.isAuthenticated&&(a.user.email===y.value||a.user.email===C.value||a.user.email===k.value||a.user.email===S.value||a.user.email===A.value||a.user.email===E.value||a.user.email===N.value||a.user.email===F.value||a.user.email===I.value||a.user.email===Y.value))switch(m.push("/_/panels/registrar/appointment"),a.user.email){case y.value:o.value=s.filter(l=>l.provider==="CBA")||0;break;case C.value:o.value=s.filter(l=>l.provider==="CCSEA")||0;break;case k.value:o.value=s.filter(l=>l.provider==="CAS / CON")||0;break;case S.value:o.value=s.filter(l=>l.provider==="CTHM / SGS")||0;break;case A.value:o.value=s.filter(l=>l.provider==="CTHM / SGS")||0;break;case E.value:o.value=s.filter(l=>l.provider==="CAS / CON")||0;break;case N.value:o.value=s.filter(l=>l.provider==="CTE")||0;break;default:o.value=s||0,R=Math.ceil(o._rawValue.length/c.value),D=o._rawValue.length}else m.push("/_/unauthorized")});const v=t(2),c=t(2),_=t(0);let R,D,z=se(()=>o.value.slice(_.value,c.value));const G=()=>{_.value>0&&(_.value-=v.value,c.value-=v.value,console.log("prev"))},H=()=>{c.value<D&&(_.value+=v.value,c.value+=v.value,console.log("next"))},q=s=>{_.value=0,c.value=v.value,s>1&&(c.value*=s,_.value=c.value-v.value)},T=s=>{g.value=!g.value,b.value=s},J=async()=>{await $fetch(w.value+"/api/appointments/"+b.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async s=>{console.log("response",s),m.go(),g.value=!g.value}).catch(s=>{console.log(s)})},P=s=>{m.push("/_/panels/registrar/appointment/edit/"+s)},U=()=>{m.push("/_/reg-admin"),a.removeToken()};return(s,l)=>{const K=W,Q=X;return d(),u("div",he,[e("div",_e,[j(e("div",me,[M(K)],512),[[L,i(p)]]),e("div",ge,[e("div",xe,[e("div",fe,[e("div",we,[e("div",{onClick:l[0]||(l[0]=r=>ae(p)?p.value=!i(p):p=!i(p)),class:"w-10 px-1.5"},[e("i",{class:le(["fa text-3xl text-white",i(p)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",be,[ye,e("h1",Ce,h(i(a).user.email),1)])]),e("button",{onClick:U,class:"flex hover:font-boldn pt-1"},Ae)])]),e("div",Ee,[Ne,e("div",Re,[e("div",De,[e("div",Te,[e("div",Be,[e("div",je,[Le,i(o).length>0?(d(),u("div",Me,[(d(!0),u(O,null,V(i(pe).orderBy(i(z),"date","asc"),(r,f)=>(d(),u("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:f},[e("li",Oe,h(f+1),1),e("li",Ve,h(r.referencecode),1),e("li",$e,h(r.provider),1),e("li",Fe,h(r.time),1),e("li",Ie,h(i(de)(r.date).format("MM-DD-YYYY")),1),e("li",Ye,[e("div",ze,[e("button",{onClick:B=>P(r.id)},qe,8,Ge)]),e("div",Je,[e("button",{onClick:B=>T(r.id)},Ke,8,Pe)])])]))),128)),j(e("div",Qe,[We,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:J},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:T},"Cancel")])],512),[[L,i(g)]])])):(d(),u("div",Xe," Please Add appointments, No Results Found! "))])]),i(o).length>v.value?(d(),u("div",Ze,[e("div",{onClick:G,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[et,$(" Prev ")]),e("ul",tt,[(d(!0),u(O,null,V(i(R),(r,f)=>(d(),u("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:f,onClick:B=>q(r)},h(r),9,st))),128))]),e("div",{onClick:H,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[$(" Next "),at])])):oe("",!0)])])])])])]),M(Q)])}}},mt=ve(lt,[["__scopeId","data-v-e7781281"]]);export{mt as default};
