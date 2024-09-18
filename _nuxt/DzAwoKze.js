import{_ as V}from"./DvC9ZINv.js";import{_ as E}from"./tqQo1Ts0.js";import{u as L,g as z,r as t,m as A,h as F,c as r,a as e,i as x,v as g,f as o,b as k,j as M,n as C,t as m,F as P,s as R,z as O,x as U,o as d,C as W,p as Y,e as q}from"./6xoVAQCu.js";import{_ as G}from"./vUEbHlag.js";import"./C5S46NFB.js";import{_ as H}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const u=p=>(Y("data-v-48773ab4"),p=p(),q(),p),J={class:"flex"},K={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Q={class:"w-full min-h-screen"},X={class:"bg-green-800"},Z={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ee={class:"lg:flex items-center text-white gap-5"},te={class:"flex -mt-1"},se=u(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),oe={class:"text-sm"},ae=u(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),le=u(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ne=[ae,le],ie={class:"w-full p-5"},ce={class:""},re={class:"appointment-lists shadow mx-auto text-xs"},de={class:""},ue=U('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-48773ab4><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap" data-v-48773ab4><li class="lg:w-1/12" data-v-48773ab4>No.</li><li class="lg:w-5/12" data-v-48773ab4>Title</li><li class="lg:w-1/12" data-v-48773ab4>Open for bids</li><li class="lg:w-3/12" data-v-48773ab4>Deadline</li><li class="lg:w-2/12" data-v-48773ab4>Action</li></ul></div>',1),_e={key:0,class:"w-full rows"},pe={class:"px-2 lg:w-1/12"},he={class:"px-2 lg:w-5/12"},xe={class:"px-2 lg:w-1/12"},me=["onUpdate:modelValue"],fe={class:"px-2 lg:w-3/12"},ve={class:"flex px-2 font-bold justify-center lg:w-2/12"},ge={class:"mx-auto lg:flex justify-center"},we=["onClick"],ye=u(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),be=[ye],ke={class:"mx-auto lg:flex justify-center"},Ce=["onClick"],De=u(()=>e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),je=[De],Se={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Te=u(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),Be={key:1,class:"itallic text-gray-400 text-center p-1"},$e={__name:"index",setup(p){const i=L(),s=z(),f=t(s.mainDevServer);A();const c=t(0);t(new Date),t(!1);let w=t(),D=t(!0),a=t(!0),_=t(!1);F(()=>{setTimeout(async()=>{s.user.isAuthenticated&&(s.user.email==="jorenleeluna24@gmail.com"||s.user.email==="procurement@lsu.edu.ph"||s.user.email==="jason.yap@lsu.edu.ph")?(c.value=await $fetch(f.value+"/api/procurements/list").catch(l=>l.data)||0,i.push("/_/panels/procurement")):i.push("/_/unauthorized")},3e3)});const y=l=>{_.value=!_.value,w.value=l},j=async()=>{await $fetch(f.value+"/api/procurements/"+w.value+"/delete/",{method:"DELETE",headers:{Authorization:s.user.token,"Content-Type":"application/json"}}).then(async l=>{c.value=await $fetch(f.value+"/api/procurements/list").catch(h=>h.data)||0,_.value=!_.value})},S=()=>{i.push("/_/proc-admin"),s.removeToken()};t(!0);const T=()=>{i.push("/_/panels/procurement")},B=l=>{i.push("/_/panels/procurement/edit/"+l)},$=()=>{i.push("/_/panels/procurement/create")};return(l,h)=>{const I=V,N=E;return d(),r("div",null,[e("div",J,[x(e("div",K,[k(I,{goToList:T,goToCreate:$})],512),[[g,o(a)]]),e("div",Q,[e("div",X,[e("div",Z,[e("div",ee,[e("div",{onClick:h[0]||(h[0]=n=>M(a)?a.value=!o(a):a=!o(a)),class:"w-10 px-1.5"},[e("i",{class:C(["fa text-3xl text-white",o(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",te,[se,e("h1",oe,m(o(s).user.email),1)])]),e("button",{onClick:S,class:"flex hover:font-bold pt-1"},ne)])]),e("div",null,[e("div",ie,[x(e("div",null,[e("div",ce,[e("div",re,[e("div",de,[ue,c.value.length>0?(d(),r("div",_e,[(d(!0),r(P,null,R(o(G).orderBy(c.value,"id","asc"),(n,b)=>(d(),r("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:b},[e("li",pe,m(b+1),1),e("li",he,m(n.title),1),e("li",xe,[x(e("input",{type:"checkbox",disabled:"","onUpdate:modelValue":v=>n.open_for_bids=v},null,8,me),[[W,n.open_for_bids]])]),e("li",fe,m(n.deadline),1),e("li",ve,[e("div",ge,[e("button",{onClick:v=>B(n.id)},be,8,we)]),e("div",ke,[e("button",{onClick:v=>y(n.id)},je,8,Ce)])])]))),128)),x(e("div",Se,[Te,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:j},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:y},"Cancel")])],512),[[g,o(_)]])])):O("",!0),c.value.length===0?(d(),r("div",Be," No Results Found! ")):(d(),r("div",{key:2,class:C(["itallic text-gray-400 text-center p-1",c.value.length>0?"hidden":""])}," Please Wait ... ",2))])])])],512),[[g,o(D)]])])])])]),k(N)])}}},Fe=H($e,[["__scopeId","data-v-48773ab4"]]);export{Fe as default};
