import{_ as A}from"./DEtf9fpm.js";import{_ as E}from"./C3vFa2Lx.js";import{u as L,g as N,r as c,h as F,q as R,c as r,a as e,i as p,v as x,f as t,b as y,j as z,n as M,t as h,F as V,s as I,x as O,o as d}from"./CbzWtQ1Y.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const q={class:""},P={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full h-screen"},G={class:"bg-green-700"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex items-center text-white gap-5"},K={class:"flex -mt-1"},Q=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),W={class:"text-sm"},X=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),Z=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),ee=[X,Z],te={class:"w-full p-5"},se={class:"appointment-lists shadow mx-auto text-xs"},oe={class:""},le=O('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-2/12">No.</li><li class="lg:w-2/12">Email</li><li class="lg:w-3/12">Role</li><li class="lg:w-2/12">Action</li></ul></div>',1),ie={key:0,class:"w-full rows"},ae=["cits"],ne={class:"lg:w-12"},ce={class:"lg:w-2/12"},re={class:"lg:w-2/12"},de={class:"lg:flex px-2 font-bold justify-center lg:w-1/12"},ue={class:"mx-auto lg:flex justify-center"},_e=["onClick"],he=e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),pe=[he],xe={class:"mx-auto lg:flex justify-center"},fe=["onClick"],ge=e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),me=[ge],ve={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},we=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1),ye={key:1,class:"itallic text-gray-400 text-center p-1"},Be={__name:"index",async setup(be){let u,f;const l=L(),a=N(),g=c(a.mainServer);F(()=>{a.user.isAuthenticated&&a.user.email==="jorenleeluna24@gmail.com"?l.push("/_/panels/cits"):l.push("/_/unauthorized")});let b=c(!0),i=c(!0),n=c(!1),m=c();const v=([u,f]=R(()=>$fetch(g.value+"/api/cits/list").catch(s=>s.data)),u=await u,f(),u),C=()=>{l.push("/_/panels/cits")},k=()=>{l.push("/_/panels/cits/create")},T=s=>{l.push("/_/panels/cits/edit/"+s)},w=s=>{n.value=!n.value,m.value=s},j=async()=>{await $fetch(g.value+"/api/cits/"+m.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async s=>{l.go(),n.value=!n.value})},D=()=>{l.push("/_/cits-admin"),a.removeToken()};return(s,_)=>{const S=A,B=E;return d(),r("div",q,[e("div",P,[p(e("div",U,[y(S,{goToList:C,goToCreate:k})],512),[[x,t(i)]]),e("div",Y,[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:_[0]||(_[0]=o=>z(i)?i.value=!t(i):i=!t(i)),class:"w-10 px-1.5"},[e("i",{class:M(["fa text-3xl text-white",t(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[Q,e("h1",W,h(t(a).user.email),1)])]),e("button",{onClick:_[1]||(_[1]=o=>D()),class:"flex hover:font-bold pt-1"},ee)])]),e("div",null,[e("div",te,[p(e("div",null,[e("div",se,[e("div",oe,[le,t(v).length>0?(d(),r("div",ie,[(d(!0),r(V,null,I(t(v),o=>(d(),r("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:o.id,cits:s.Cits},[e("li",ne,h(o.id),1),e("li",ce,h(o.email),1),e("li",re,h(o.role),1),e("li",de,[e("div",ue,[e("button",{onClick:$=>T(o.id)},pe,8,_e)]),e("div",xe,[e("button",{onClick:$=>w(o.id)},me,8,fe)])])],8,ae))),128)),p(e("div",ve,[we,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:j},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:w},"Cancel")])],512),[[x,t(n)]])])):(d(),r("div",ye," Please Add CITS, No Results Found! "))])])],512),[[x,t(b)]])])])])]),y(B)])}}};export{Be as default};