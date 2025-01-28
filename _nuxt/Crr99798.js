import{_ as L}from"./C2uFIgz9.js";import{_ as N}from"./oSg_oWOP.js";import{e as E,u as z,r as l,g as A,h as F,c,a as e,j as h,v as m,f as o,b as y,k as P,n as g,t as x,q as R,F as V,s as I,x as M,o as u}from"./DJKLSPQr.js";import{_ as O}from"./5JjjnmY2.js";import"./C5S46NFB.js";import{_ as q}from"./DlAUqK2U.js";const U={class:"flex"},W={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full min-h-screen"},G={class:"bg-green-800"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex items-center text-white gap-5"},K={class:"flex -mt-1"},Q={class:"text-sm"},X={class:"w-full p-5"},Z={class:""},ee={class:"appointment-lists shadow mx-auto text-xs"},te={class:""},se={key:0,class:"w-full rows"},le={class:"px-2 lg:w-1/12"},ae={class:"px-2 lg:w-5/12 capitalize"},oe={class:"px-2 lg:w-1/12 uppercase"},ie={class:"px-2 lg:w-3/12"},ne={class:"flex px-2 font-bold justify-center lg:w-2/12"},re={class:"mx-auto lg:flex justify-center"},de=["onClick"],ce={class:"mx-auto lg:flex justify-center"},ue=["onClick"],pe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},xe={key:1,class:"itallic text-gray-400 text-center p-1"},_e={__name:"index",setup(he){const r=E(),a=z(),_=l(a.mainDevServer);A();const d=l(0);l(new Date),l(!1);let f=l(),b=l(!0),i=l(!0),p=l(!1);F(()=>{setTimeout(async()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="procurement@lsu.edu.ph"||a.user.email==="jason.yap@lsu.edu.ph")?(d.value=await $fetch(_.value+"/api/procurements/list").catch(n=>n.data)||0,r.push("/_/panels/procurement")):r.push("/_/unauthorized")},3e3)});const v=n=>{p.value=!p.value,f.value=n},k=async()=>{await $fetch(_.value+"/api/procurements/"+f.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async n=>{d.value=await $fetch(_.value+"/api/procurements/list").catch(t=>t.data)||0,p.value=!p.value})},C=()=>{r.push("/_/proc-admin"),a.removeToken()};l(!0);const D=()=>{r.push("/_/panels/procurement")},j=n=>{r.push("/_/panels/procurement/edit/"+n)},T=()=>{r.push("/_/panels/procurement/create")};return(n,t)=>{const S=L,B=N;return u(),c("div",null,[e("div",U,[h(e("div",W,[y(S,{goToList:D,goToCreate:T})],512),[[m,o(i)]]),e("div",Y,[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:t[0]||(t[0]=s=>P(i)?i.value=!o(i):i=!o(i)),class:"w-10 px-1.5"},[e("i",{class:g(["fa text-3xl text-white",o(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Q,x(o(a).user.email),1)])]),e("button",{onClick:C,class:"flex hover:font-bold pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",X,[h(e("div",null,[e("div",Z,[e("div",ee,[e("div",te,[t[6]||(t[6]=R('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-854966cd><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap" data-v-854966cd><li class="lg:w-1/12" data-v-854966cd>No.</li><li class="lg:w-5/12" data-v-854966cd>Title</li><li class="lg:w-1/12" data-v-854966cd>Bid Status</li><li class="lg:w-3/12" data-v-854966cd>Deadline of Submission</li><li class="lg:w-2/12" data-v-854966cd>Action</li></ul></div>',1)),d.value.length>0?(u(),c("div",se,[(u(!0),c(V,null,I(o(O).orderBy(d.value,"id","asc"),(s,w)=>(u(),c("ul",{class:"lg:flex w-full justify-evenly py-3 text-center items-center h-auto border-b border-gray-100",key:w},[e("li",le,x(w+1),1),e("li",ae,x(s.title.toLowerCase()),1),e("li",oe,[e("span",{class:g({"border-green-900 px-2 py-1 text-white bg-green-900":s.bid_status==="completed","border-red-500 px-2 py-1 text-white bg-red-500":s.bid_status==="on hold","border-yellow-500 px-2 py-1 text-white bg-yellow-500":s.bid_status==="ongoing","border-purple-800 px-2 py-1 text-white bg-purple-800":s.bid_status==="announcement"})},x(s.bid_status),3)]),e("li",ie,x(s.deadline),1),e("li",ne,[e("div",re,[e("button",{onClick:$=>j(s.id)},t[3]||(t[3]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,de)]),e("div",ce,[e("button",{onClick:$=>v(s.id)},t[4]||(t[4]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ue)])])]))),128)),h(e("div",pe,[t[5]||(t[5]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:k},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:v},"Cancel")])],512),[[m,o(p)]])])):M("",!0),d.value.length===0?(u(),c("div",xe," No Results Found! ")):(u(),c("div",{key:2,class:g(["itallic text-gray-400 text-center p-1",d.value.length>0?"hidden":""])}," Please Wait ... ",2))])])])],512),[[m,o(b)]])])])])]),y(B)])}}},be=q(_e,[["__scopeId","data-v-854966cd"]]);export{be as default};
