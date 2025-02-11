import{_ as S}from"./DT8aDeOp.js";import{m as j,u as A,r as c,p as $,E as z,c as u,a as e,q as g,v as f,n as l,b as E,s as N,x as R,t as n,y as T,F,z as M,o as x}from"./C-OGQw-w.js";import"./5JjjnmY2.js";const O={class:""},V={class:"flex"},I={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},U={class:"w-full h-screen"},Y={class:"bg-green-700"},q={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex items-center text-white gap-5"},G={class:"flex -mt-1"},H={class:"text-sm"},J={class:"lg:w-full p-5"},K={class:"appointment-lists shadow mx-auto text-xs"},Q={class:""},W={key:0,class:"w-full rows"},X={class:"px-2 lg:w-14"},Z={class:"px-2 lg:w-2/12"},ee={class:"px-2 lg:w-2/12"},te={class:"px-2 lg:w-2/12"},se={class:"px-2 lg:w-2/12"},le={class:"flex px-2 font-bold justify-center lg:w-1/12"},oe={class:"mx-auto flex justify-center"},ie=["onClick"],ae={class:"mx-auto flex justify-center"},ne=["onClick"],re={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},de={key:1,class:"itallic text-gray-400 text-center p-1"},ge={__name:"index",async setup(ce){let p,_;const r=j(),i=A(),h=c(i.mainDevServer);$(()=>{i.user.isAuthenticated&&i.user.email===i.user.email?r.push("/library/dashboard"):r.push("/_/unauthorized")});let y=c(!0),a=c(!0),d=c(!1),v=c();const w=([p,_]=z(()=>$fetch(h.value+"/api/library/booking/list/").catch(o=>o.data)),p=await p,_(),p),b=o=>{r.push("/_/panels/library/edit/"+o)},m=o=>{d.value=!d.value,v.value=o};async function k(){await $fetch(h.value+"/api/library/booking/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:i.user.token,"Content-Type":"application/json"}}).then(async o=>{r.go(),d.value=!d.value}).catch(o=>{})}const C=()=>{r.push("/library/login"),i.removeToken()};return(o,t)=>{const B=S;return x(),u("div",O,[e("div",V,[g(e("div",I,[E(B)],512),[[f,l(a)]]),e("div",U,[e("div",Y,[e("div",q,[e("div",P,[e("div",{onClick:t[0]||(t[0]=s=>N(a)?a.value=!l(a):a=!l(a)),class:"w-10 px-1.5"},[e("i",{class:R(["fa text-3xl text-white",l(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",G,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",H,n(l(i).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=s=>C()),class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",J,[g(e("div",null,[e("div",K,[e("div",Q,[t[7]||(t[7]=T('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-20">No.</li><li class="lg:w-2/12">email</li><li class="lg:w-2/12">student_id</li><li class="lg:w-2/12">borrower_category</li><li class="lg:w-2/12">book_title</li><li class="lg:w-2/12">Action</li></ul></div>',1)),l(w).length>0?(x(),u("div",W,[(x(!0),u(F,null,M(l(w),(s,D)=>(x(),u("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:D},[e("li",X,n(s.id),1),e("li",Z,n(s.email),1),e("li",ee,n(s.student_id),1),e("li",te,n(s.borrower_category),1),e("li",se,n(s.book_title),1),e("li",le,[e("div",oe,[e("button",{onClick:L=>b(s.id)},t[4]||(t[4]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ie)]),e("div",ae,[e("button",{onClick:L=>m(s.id)},t[5]||(t[5]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ne)])])]))),128)),g(e("div",re,[t[6]||(t[6]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:k},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:m},"Cancel")])],512),[[f,l(d)]])])):(x(),u("div",de," Please Add LIBRARY, No Results Found! "))])])],512),[[f,l(y)]])])])])]),t[8]||(t[8]=e("div",{class:"bg-green-900 p-3"},[e("h1",{class:"text-center text-white text-xs"},[e("span",{class:"font-bold"},"Copyright © 2023 "),e("span",null,"La Salle University - Ozamiz")])],-1))])}}};export{ge as default};
