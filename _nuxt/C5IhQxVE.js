import{_ as S}from"./CWaZuZ9U.js";import{u as A,g as D,r,h as $,q as z,c as d,a as e,i as x,v as g,f as l,b as E,j as N,n as R,t as a,F as T,s as F,x as M,o as u}from"./BWiGc4EW.js";import"./vUEbHlag.js";import"./Cpj98o6Y.js";const O={class:""},V={class:"flex"},I={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},U={class:"w-full h-screen"},Y={class:"bg-green-700"},q={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex items-center text-white gap-5"},G={class:"flex -mt-1"},H=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),J={class:"text-sm"},K=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),Q=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),W=[K,Q],X={class:"lg:w-full p-5"},Z={class:"appointment-lists shadow mx-auto text-xs"},ee={class:""},te=M('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-20">No.</li><li class="lg:w-2/12">email</li><li class="lg:w-2/12">student_id</li><li class="lg:w-2/12">borrower_category</li><li class="lg:w-2/12">book_title</li><li class="lg:w-2/12">Action</li></ul></div>',1),se={key:0,class:"w-full rows"},le={class:"px-2 lg:w-14"},oe={class:"px-2 lg:w-2/12"},ie={class:"px-2 lg:w-2/12"},ae={class:"px-2 lg:w-2/12"},ne={class:"px-2 lg:w-2/12"},ce={class:"flex px-2 font-bold justify-center lg:w-1/12"},re={class:"mx-auto flex justify-center"},de=["onClick"],ue=e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),_e=[ue],he={class:"mx-auto flex justify-center"},xe=["onClick"],ge=e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),pe=[ge],fe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ve=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1),we={key:1,class:"itallic text-gray-400 text-center p-1"},me=e("div",{class:"bg-green-900 p-3"},[e("h1",{class:"text-center text-white text-xs"},[e("span",{class:"font-bold"},"Copyright © 2023 "),e("span",null,"La Salle University - Ozamiz")])],-1),je={__name:"index",async setup(ye){let _,p;const n=A(),o=D(),f=r(o.mainServer);$(()=>{o.user.isAuthenticated&&o.user.email===o.user.email?n.push("/library/dashboard"):n.push("/_/unauthorized")});let y=r(!0),i=r(!0),c=r(!1),v=r();const w=([_,p]=z(()=>$fetch(f.value+"/api/library/booking/list/").catch(t=>t.data)),_=await _,p(),_),b=t=>{n.push("/_/panels/library/edit/"+t)},m=t=>{c.value=!c.value,v.value=t,console.log(t)};async function k(){await $fetch(f.value+"/api/library/booking/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:o.user.token,"Content-Type":"application/json"}}).then(async t=>{console.log("response",t),n.go(),c.value=!c.value}).catch(t=>{console.log(t)})}const C=()=>{n.push("/library/login"),o.removeToken()};return(t,h)=>{const B=S;return u(),d("div",O,[e("div",V,[x(e("div",I,[E(B)],512),[[g,l(i)]]),e("div",U,[e("div",Y,[e("div",q,[e("div",P,[e("div",{onClick:h[0]||(h[0]=s=>N(i)?i.value=!l(i):i=!l(i)),class:"w-10 px-1.5"},[e("i",{class:R(["fa text-3xl text-white",l(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",G,[H,e("h1",J,a(l(o).user.email),1)])]),e("button",{onClick:h[1]||(h[1]=s=>C()),class:"flex hover:font-bold pt-1"},W)])]),e("div",null,[e("div",X,[x(e("div",null,[e("div",Z,[e("div",ee,[te,l(w).length>0?(u(),d("div",se,[(u(!0),d(T,null,F(l(w),(s,j)=>(u(),d("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:j},[e("li",le,a(s.id),1),e("li",oe,a(s.email),1),e("li",ie,a(s.student_id),1),e("li",ae,a(s.borrower_category),1),e("li",ne,a(s.book_title),1),e("li",ce,[e("div",re,[e("button",{onClick:L=>b(s.id)},_e,8,de)]),e("div",he,[e("button",{onClick:L=>m(s.id)},pe,8,xe)])])]))),128)),x(e("div",fe,[ve,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:k},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:m},"Cancel")])],512),[[g,l(c)]])])):(u(),d("div",we," Please Add LIBRARY, No Results Found! "))])])],512),[[g,l(y)]])])])])]),me])}}};export{je as default};
