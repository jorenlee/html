import{_ as M}from"./BQGLt3-t.js";import{_ as S}from"./PFkbO1rM.js";import{m as A,u as E,r as c,p as L,E as N,c as u,a as e,q as x,v as f,n as l,b as y,s as z,x as R,t as d,y as V,F as O,z as q,o as p}from"./BB2UOgvV.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const I={class:""},P={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full lg:h-screen h-screen"},G={class:"bg-green-700"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex items-center text-white gap-5"},K={class:"flex -mt-1"},Q={class:"text-sm"},W={class:"w-full p-5"},X={class:"appointment-lists shadow mx-auto text-xs"},Z={class:""},ee={key:0,class:"w-full rows"},te=["cits"],se={class:"px-2 lg:w-14"},le={class:"px-2 lg:w-2/12"},oe={class:"px-2 lg:w-2/12"},ie={class:"px-2 lg:w-2/12"},ae={class:"px-2 lg:w-2/12"},ne={class:"flex px-2 font-bold justify-center lg:w-1/12"},de={class:"mx-auto lg:flex justify-center"},re=["onClick"],ce={class:"mx-auto lg:flex justify-center"},ue=["onClick"],pe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},_e={key:1,class:"itallic text-gray-400 text-center p-1"},we={__name:"index",async setup(xe){let _,g;const i=A(),n=E(),h=c(n.mainDevServer);L(()=>{n.user.isAuthenticated&&n.user.email==="jorenleeluna24@gmail.com"?i.push("/_/panels/mco"):i.push("/_/unauthorized")});let b=c(!0),a=c(!0),r=c(!1),v=c();const m=([_,g]=N(()=>$fetch(h.value+"/api/mco/list").catch(o=>o.data)),_=await _,g(),_),k=()=>{i.push("/_/panels/mco")},C=()=>{i.push("/_/panels/mco/create")},D=o=>{i.push("/_/panels/mco/edit/"+o)},w=o=>{r.value=!r.value,v.value=o},T=()=>{i.push("/_/mco-admin"),n.removeToken()},j=async()=>{await $fetch(h.value+"/api/mco/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:n.user.token,"Content-Type":"application/json"}}).then(async o=>{i.go(),r.value=!r.value})};return(o,t)=>{const F=M,$=S;return p(),u("div",I,[e("div",P,[x(e("div",U,[y(F,{goToList:k,goToCreate:C})],512),[[f,l(a)]]),e("div",Y,[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:t[0]||(t[0]=s=>z(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5"},[e("i",{class:R(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Q,d(l(n).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=s=>T()),class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",W,[x(e("div",null,[e("div",X,[e("div",Z,[t[7]||(t[7]=V('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-20">No.</li><li class="lg:w-2/12">Field 1</li><li class="lg:w-3/12">Field 2</li><li class="lg:w-2/12">Field 3</li><li class="lg:w-1/12">Field 4</li><li class="lg:w-2/12">Action</li></ul></div>',1)),l(m).length>0?(p(),u("div",ee,[(p(!0),u(O,null,q(l(m),s=>(p(),u("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:s.id,cits:o.Mco},[e("li",se,d(s.id),1),e("li",le,d(s.field_1),1),e("li",oe,d(s.field_2),1),e("li",ie,d(s.field_3),1),e("li",ae,d(s.field_4),1),e("li",ne,[e("div",de,[e("button",{onClick:B=>D(s.id)},t[4]||(t[4]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,re)]),e("div",ce,[e("button",{onClick:B=>w(s.id)},t[5]||(t[5]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ue)])])],8,te))),128)),x(e("div",pe,[t[6]||(t[6]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:j},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:w},"Cancel")])],512),[[f,l(r)]])])):(p(),u("div",_e," Please Add Mco, No Results Found! "))])])],512),[[f,l(b)]])])])])]),y($)])}}};export{we as default};
