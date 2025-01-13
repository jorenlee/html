import{_ as A}from"./WXDa2ZMh.js";import{_ as E}from"./pUOksTf8.js";import{u as L,f as N,r as d,g as F,m as R,c,a as e,h as _,v as f,e as s,b as y,i as z,n as M,t as x,p as V,F as I,q as O,o as u}from"./Ce35KScH.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const q={class:""},P={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full h-screen"},G={class:"bg-green-700"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex items-center text-white gap-5"},K={class:"flex -mt-1"},Q={class:"text-sm"},W={class:"w-full p-5"},X={class:"appointment-lists shadow mx-auto text-xs"},Z={class:""},ee={key:0,class:"w-full rows"},te=["cits"],se={class:"lg:w-12"},le={class:"lg:w-2/12"},oe={class:"lg:w-2/12"},ie={class:"lg:flex px-2 font-bold justify-center lg:w-1/12"},ae={class:"mx-auto lg:flex justify-center"},ne=["onClick"],re={class:"mx-auto lg:flex justify-center"},de=["onClick"],ce={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ue={key:1,class:"itallic text-gray-400 text-center p-1"},ve={__name:"index",async setup(pe){let p,g;const i=L(),n=N(),h=d(n.mainDevServer);F(()=>{n.user.isAuthenticated&&n.user.email==="jorenleeluna24@gmail.com"?i.push("/_/panels/cits"):i.push("/_/unauthorized")});let b=d(!0),a=d(!0),r=d(!1),v=d();const m=([p,g]=R(()=>$fetch(h.value+"/api/cits/list").catch(l=>l.data)),p=await p,g(),p),C=()=>{i.push("/_/panels/cits")},k=()=>{i.push("/_/panels/cits/create")},T=l=>{i.push("/_/panels/cits/edit/"+l)},w=l=>{r.value=!r.value,v.value=l},D=async()=>{await $fetch(h.value+"/api/cits/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:n.user.token,"Content-Type":"application/json"}}).then(async l=>{i.go(),r.value=!r.value})},j=()=>{i.push("/_/cits-admin"),n.removeToken()};return(l,t)=>{const S=A,$=E;return u(),c("div",q,[e("div",P,[_(e("div",U,[y(S,{goToList:C,goToCreate:k})],512),[[f,s(a)]]),e("div",Y,[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:t[0]||(t[0]=o=>z(a)?a.value=!s(a):a=!s(a)),class:"w-10 px-1.5"},[e("i",{class:M(["fa text-3xl text-white",s(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Q,x(s(n).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=o=>j()),class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",W,[_(e("div",null,[e("div",X,[e("div",Z,[t[7]||(t[7]=V('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-2/12">No.</li><li class="lg:w-2/12">Email</li><li class="lg:w-3/12">Role</li><li class="lg:w-2/12">Action</li></ul></div>',1)),s(m).length>0?(u(),c("div",ee,[(u(!0),c(I,null,O(s(m),o=>(u(),c("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:o.id,cits:l.Cits},[e("li",se,x(o.id),1),e("li",le,x(o.email),1),e("li",oe,x(o.role),1),e("li",ie,[e("div",ae,[e("button",{onClick:B=>T(o.id)},t[4]||(t[4]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ne)]),e("div",re,[e("button",{onClick:B=>w(o.id)},t[5]||(t[5]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,de)])])],8,te))),128)),_(e("div",ce,[t[6]||(t[6]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:D},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:w},"Cancel")])],512),[[f,s(r)]])])):(u(),c("div",ue," Please Add CITS, No Results Found! "))])])],512),[[f,s(b)]])])])])]),y($)])}}};export{ve as default};
