import{e as S,u as A,r as c,g as B,s as L,c as u,a as e,h as p,v as f,f as l,j as $,n as z,t as n,i as E,F as R,l as T,o as x}from"./BowgSS-C.js";import"./5JjjnmY2.js";const N={class:""},F={class:"flex"},O={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},I={class:"w-full h-screen"},M={class:"bg-green-700"},U={class:"lg:flex mx-auto justify-between py-2 px-3.5"},V={class:"lg:flex items-center text-white gap-5"},Y={class:"flex -mt-1"},P={class:"text-sm"},q={class:"lg:w-full p-5"},G={class:"appointment-lists shadow mx-auto text-xs"},H={class:""},J={key:0,class:"w-full rows"},K={class:"px-2 lg:w-14"},Q={class:"px-2 lg:w-2/12"},W={class:"px-2 lg:w-2/12"},X={class:"px-2 lg:w-2/12"},Z={class:"px-2 lg:w-2/12"},ee={class:"flex px-2 font-bold justify-center lg:w-1/12"},te={class:"mx-auto flex justify-center"},se=["onClick"],le={class:"mx-auto flex justify-center"},oe=["onClick"],ie={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ae={key:1,class:"itallic text-gray-400 text-center p-1"},ce={__name:"index",async setup(ne){let g,h;const r=S(),i=A(),_=c(i.mainDevServer);B(()=>{i.user.isAuthenticated&&i.user.email===i.user.email?r.push("/library/dashboard"):r.push("/_/unauthorized")});let y=c(!0),a=c(!0),d=c(!1),v=c();const w=([g,h]=L(()=>$fetch(_.value+"/api/library/booking/list/").catch(o=>o.data)),g=await g,h(),g),b=o=>{r.push("/_/panels/library/edit/"+o)},m=o=>{d.value=!d.value,v.value=o};async function k(){await $fetch(_.value+"/api/library/booking/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:i.user.token,"Content-Type":"application/json"}}).then(async o=>{r.go(),d.value=!d.value}).catch(o=>{})}const C=()=>{r.push("/library/login"),i.removeToken()};return(o,t)=>(x(),u("div",N,[e("div",F,[p(e("div",O,null,512),[[f,l(a)]]),e("div",I,[e("div",M,[e("div",U,[e("div",V,[e("div",{onClick:t[0]||(t[0]=s=>$(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5"},[e("i",{class:z(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Y,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",P,n(l(i).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=s=>C()),class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",q,[p(e("div",null,[e("div",G,[e("div",H,[t[7]||(t[7]=E('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-20">No.</li><li class="lg:w-2/12">email</li><li class="lg:w-2/12">student_id</li><li class="lg:w-2/12">borrower_category</li><li class="lg:w-2/12">book_title</li><li class="lg:w-2/12">Action</li></ul></div>',1)),l(w).length>0?(x(),u("div",J,[(x(!0),u(R,null,T(l(w),(s,j)=>(x(),u("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:j},[e("li",K,n(s.id),1),e("li",Q,n(s.email),1),e("li",W,n(s.student_id),1),e("li",X,n(s.borrower_category),1),e("li",Z,n(s.book_title),1),e("li",ee,[e("div",te,[e("button",{onClick:D=>b(s.id)},t[4]||(t[4]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,se)]),e("div",le,[e("button",{onClick:D=>m(s.id)},t[5]||(t[5]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,oe)])])]))),128)),p(e("div",ie,[t[6]||(t[6]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:k},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:m},"Cancel")])],512),[[f,l(d)]])])):(x(),u("div",ae," Please Add LIBRARY, No Results Found! "))])])],512),[[f,l(y)]])])])])]),t[8]||(t[8]=e("div",{class:"bg-green-900 p-3"},[e("h1",{class:"text-center text-white text-xs"},[e("span",{class:"font-bold"},"Copyright © 2023 "),e("span",null,"La Salle University - Ozamiz")])],-1))]))}};export{ce as default};
