import{_ as V}from"./BNM_qKgV.js";import{_ as E}from"./6A5hzLs8.js";import{u as L,g as z,r as t,m as A,h as F,c as r,a as e,i as x,v as g,f as l,b as k,j as M,n as C,t as m,F as P,s as R,z as O,x as U,o as d,C as W,p as Y,e as q}from"./D61FpxW5.js";import{_ as G}from"./vUEbHlag.js";import"./C5S46NFB.js";import{_ as H}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const u=p=>(Y("data-v-e5438c19"),p=p(),q(),p),J={class:"flex"},K={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Q={class:"w-full min-h-screen"},X={class:"bg-green-800"},Z={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ee={class:"lg:flex items-center text-white gap-5"},te={class:"flex -mt-1"},se=u(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),oe={class:"text-sm"},le=u(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ae=u(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ne=[le,ae],ie={class:"w-full p-5"},ce={class:""},re={class:"appointment-lists shadow mx-auto text-xs"},de={class:""},ue=U('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-e5438c19><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap" data-v-e5438c19><li class="lg:w-1/12" data-v-e5438c19>No.</li><li class="lg:w-5/12" data-v-e5438c19>Title</li><li class="lg:w-1/12" data-v-e5438c19>Open for bids</li><li class="lg:w-3/12" data-v-e5438c19>Deadline</li><li class="lg:w-2/12" data-v-e5438c19>Action</li></ul></div>',1),_e={key:0,class:"w-full rows"},pe={class:"px-2 lg:w-1/12"},he={class:"px-2 lg:w-5/12"},xe={class:"px-2 lg:w-1/12"},me=["onUpdate:modelValue"],fe={class:"px-2 lg:w-3/12"},ve={class:"flex px-2 font-bold justify-center lg:w-2/12"},ge={class:"mx-auto lg:flex justify-center"},we=["onClick"],ye=u(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),be=[ye],ke={class:"mx-auto lg:flex justify-center"},Ce=["onClick"],je=u(()=>e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),De=[je],Se={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Te=u(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),Be={key:1,class:"itallic text-gray-400 text-center p-1"},$e={__name:"index",setup(p){const c=L(),s=z(),f=t(s.mainServer);A();const a=t(0);console.log(a),t(new Date),t(!1);let w=t(),j=t(!0),n=t(!0),_=t(!1);F(()=>{setTimeout(async()=>{s.user.isAuthenticated&&(s.user.email==="jorenleeluna24@gmail.com"||s.user.email==="procurement@lsu.edu.ph"||s.user.email==="jason.yap@lsu.edu.ph")?(a.value=await $fetch(f.value+"/api/procurements/list").catch(o=>o.data)||0,c.push("/_/panels/procurement")):c.push("/_/unauthorized")},3e3)});const y=o=>{_.value=!_.value,w.value=o},D=async()=>{await $fetch(f.value+"/api/procurements/"+w.value+"/delete/",{method:"DELETE",headers:{Authorization:s.user.token,"Content-Type":"application/json"}}).then(async o=>{console.log("response",o),a.value=await $fetch(f.value+"/api/procurements/list").catch(h=>h.data)||0,_.value=!_.value})},S=()=>{c.push("/_/proc-admin"),s.removeToken()};t(!0);const T=()=>{c.push("/_/panels/procurement")},B=o=>{c.push("/_/panels/procurement/edit/"+o)},$=()=>{c.push("/_/panels/procurement/create")};return(o,h)=>{const I=V,N=E;return d(),r("div",null,[e("div",J,[x(e("div",K,[k(I,{goToList:T,goToCreate:$})],512),[[g,l(n)]]),e("div",Q,[e("div",X,[e("div",Z,[e("div",ee,[e("div",{onClick:h[0]||(h[0]=i=>M(n)?n.value=!l(n):n=!l(n)),class:"w-10 px-1.5"},[e("i",{class:C(["fa text-3xl text-white",l(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",te,[se,e("h1",oe,m(l(s).user.email),1)])]),e("button",{onClick:S,class:"flex hover:font-bold pt-1"},ne)])]),e("div",null,[e("div",ie,[x(e("div",null,[e("div",ce,[e("div",re,[e("div",de,[ue,a.value.length>0?(d(),r("div",_e,[(d(!0),r(P,null,R(l(G).orderBy(a.value,"id","asc"),(i,b)=>(d(),r("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:b},[e("li",pe,m(b+1),1),e("li",he,m(i.title),1),e("li",xe,[x(e("input",{type:"checkbox",disabled:"","onUpdate:modelValue":v=>i.open_for_bids=v},null,8,me),[[W,i.open_for_bids]])]),e("li",fe,m(i.deadline),1),e("li",ve,[e("div",ge,[e("button",{onClick:v=>B(i.id)},be,8,we)]),e("div",ke,[e("button",{onClick:v=>y(i.id)},De,8,Ce)])])]))),128)),x(e("div",Se,[Te,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:D},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:y},"Cancel")])],512),[[g,l(_)]])])):O("",!0),a.value.length===0?(d(),r("div",Be," No Results Found! ")):(d(),r("div",{key:2,class:C(["itallic text-gray-400 text-center p-1",a.value.length>0?"hidden":""])}," Please Wait ... ",2))])])])],512),[[g,l(j)]])])])])]),k(N)])}}},Fe=H($e,[["__scopeId","data-v-e5438c19"]]);export{Fe as default};
