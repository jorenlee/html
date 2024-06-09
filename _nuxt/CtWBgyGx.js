import{_ as q}from"./BbOsh75T.js";import{_ as P}from"./CEDhaVpL.js";import{u as U,g as G,r as l,h as H,q as J,B as K,c,a as e,i as y,v as k,f as n,b as N,j as Q,n as W,t as s,F as $,s as L,d as i,z as X,o as d,p as Z,e as ee}from"./CEjWktDe.js";import"./vUEbHlag.js";import{_ as te}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const o=f=>(Z("data-v-4edef152"),f=f(),ee(),f),se={class:""},oe={class:"flex"},ae={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},le={class:"w-full"},ne={class:"bg-green-700"},ie={class:"lg:flex mx-auto justify-between py-2 px-3.5"},re={class:"lg:flex items-center text-white gap-5"},ce={class:"flex -mt-1"},de=o(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ue={class:"text-sm"},_e=o(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),he=o(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),xe=[_e,he],pe={class:"relative"},fe={class:"lg:w-full p-5"},ge={key:0,class:"mb-10 flex flex-wrap gap-5"},ve={class:"flex w-full"},me={class:"border-r-4 border-green-900 text-white"},be={class:"text-white bg-green-950 rounded-full h-6 w-6 mt-2 ml-2 text-xs flex items-center justify-center font-bold"},we={class:"py-2 px-10 mb-7"},ye=o(()=>e("span",{class:"text-xs text-gray-900"},"Book:",-1)),ke={class:"text-green-900 font-bold mb-3"},Ce=o(()=>e("span",{class:"text-xs text-gray-900"},"Description:",-1)),De={class:"text-green-900 text-xs w-44 italic line-clamp-3"},Be={class:"w-[300px] relative px-2 py-3"},Se={class:"absolute top-2 right-5"},je={class:"mx-auto lg:flex justify-center"},Ie=["onClick"],Ne=o(()=>e("i",{class:"fa fa-close text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),$e={class:"text-xs text-green-900 mb-2"},Le=o(()=>e("i",{class:"mr-2 fa fa-user","aria-hidden":"true"},null,-1)),Te={class:"text-xs text-green-900 mb-2"},ze=o(()=>e("i",{class:"mr-2 fa fa-id-card","aria-hidden":"true"},null,-1)),Ae=o(()=>e("span",{class:"font-bold mx-2"},"|",-1)),Me={class:"text-xs text-green-900 mb-2"},Ee=o(()=>e("i",{class:"mr-2 fa fa-envelope","aria-hidden":"true"},null,-1)),Fe={class:"absolute bottom-2.5 left-2 text-xs text-yellow-500 w-fit px-3 py-0.5 font-bold rounded-lg border uppercase border-yellow-500"},Oe={class:"absolute bottom-3 right-5 h-fit"},Ve={class:"text-xs text-green-900"},Re=o(()=>e("i",{class:"fa fa-calendar mr-1","aria-hidden":"true"},null,-1)),Ye={class:"text-xs text-green-900"},qe=o(()=>e("i",{class:"fa fa-clock mr-1","aria-hidden":"true"},null,-1)),Pe={key:1,class:"itallic text-gray-400 text-center p-1"},Ue={class:"z-10 px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ge=o(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),He={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg"},Je=o(()=>e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1)),Ke={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},Qe=["onClick"],We=o(()=>e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)),Xe={__name:"pagination",async setup(f){let g,C;const v=U(),u=G(),D=l(u.mainServer);H(()=>{setTimeout(()=>{u.user.isAuthenticated&&u.user.email===u.user.email?v.push("/_/panels/library/appointment"):v.push("/_/unauthorized")},3e3)});const B=([g,C]=J(()=>$fetch(D.value+"/api/library/booking/list/").catch(a=>a.data)),g=await g,C(),g),b=l(B.length),_=l(3),r=l(3),x=l(0);let T=l(Math.ceil(b.value/r.value)),S=K(()=>B.slice(x.value,r.value));const z=()=>{x.value>0&&(x.value-=_.value,r.value-=_.value)},A=()=>{r.value<b.value&&(x.value+=_.value,r.value+=_.value)},M=a=>{x.value=0,r.value=_.value,a>1&&(r.value*=a,x.value=r.value-_.value)};let E=l(!0),h=l(!0),p=l(!1),j=l();const I=a=>{p.value=!p.value,j.value=a},F=async()=>{await $fetch(D.value+"/api/library/booking/"+j.value+"/delete/",{method:"DELETE",headers:{Authorization:u.user.token,"Content-Type":"application/json"}}).then(async a=>{console.log("response",a),v.go(),p.value=!p.value}).catch(a=>{console.log(a)})},O=()=>{v.push("/_/lib-admin"),u.removeToken()};return(a,m)=>{const V=q,R=P;return d(),c("div",se,[e("div",oe,[y(e("div",ae,[N(V)],512),[[k,n(h)]]),e("div",le,[e("div",ne,[e("div",ie,[e("div",re,[e("div",{onClick:m[0]||(m[0]=t=>Q(h)?h.value=!n(h):h=!n(h)),class:"w-10 px-1.5"},[e("i",{class:W(["fa text-3xl text-white",n(h)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ce,[de,e("h1",ue,s(n(u).user.email),1)])]),e("button",{onClick:m[1]||(m[1]=t=>O()),class:"flex hover:font-bold pt-1"},xe)])]),e("div",pe,[e("div",fe,[y(e("div",null,[n(S).length>0?(d(),c("div",ge,[(d(!0),c($,null,L(n(S),(t,w)=>(d(),c("div",{class:"shadow border border-gray-200 rounded-md h-auto",key:w},[e("div",ve,[e("div",me,[e("span",be,s(t.id),1),e("div",we,[ye,e("h1",ke,s(t.book_title),1),Ce,e("p",De,s(t.book_description),1)])]),e("div",Be,[e("span",Se,[e("div",je,[e("button",{onClick:Y=>I(t.id),class:"flex items-center text-xs text-red-900 gap-2"},[Ne,i(" Cancel ")],8,Ie)])]),e("p",$e,[Le,i(" "+s(t.firstname)+" "+s(t.lastname),1)]),e("p",Te,[ze,i(" "+s(t.student_id)+" ",1),Ae,i(" "+s(t.college)+" "+s(t.courseProgram)+" "+s(t.courseYear)+" "+s(t.courseMajor),1)]),e("p",Me,[Ee,i(" "+s(t.email),1)]),e("p",Fe,s(t.borrower_category),1),e("div",Oe,[e("p",Ve,[Re,i(" "+s(t.booking_date),1)]),e("p",Ye,[qe,i(" "+s(t.booking_time),1)])])])])]))),128))])):(d(),c("div",Pe," No Results Found! "))],512),[[k,n(E)]])]),y(e("div",Ue,[Ge,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:F},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:I},"Cancel")])],512),[[k,n(p)]])]),b.value>_.value?(d(),c("div",He,[e("div",{onClick:z,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[Je,i(" Prev ")]),e("ul",Ke,[(d(!0),c($,null,L(n(T),(t,w)=>(d(),c("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:w,onClick:Y=>M(t)},s(t),9,Qe))),128))]),e("div",{onClick:A,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[i(" Next "),We])])):X("",!0)])]),N(R)])}}},lt=te(Xe,[["__scopeId","data-v-4edef152"]]);export{lt as default};
