import{o as c,c as p,a as e,d as a,e as A,u as B,r as d,h as N,j as v,v as h,f as n,b,k as I,n as y,t as i,q as M,F as P,s as R,x as V}from"./Dovn5ABk.js";import{_ as F}from"./LryTFo-Z.js";import{_ as z}from"./5JjjnmY2.js";import{_ as O}from"./DlAUqK2U.js";import"./C5S46NFB.js";const U={class:"mx-auto mt-10 mb-5 grid grid-cols-1"},q={__name:"CampusPassMenuBar",props:["goToList","goToCreate"],setup(g){return(x,s)=>(c(),p("div",null,[s[5]||(s[5]=e("div",{class:"w-fit mx-auto mt-5 mb-3"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG",class:"lg:w-24 w-20 mx-auto"})],-1)),s[6]||(s[6]=e("div",{class:"text-center"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")],-1)),e("div",U,[e("button",{onClick:s[0]||(s[0]=(...r)=>g.goToList&&g.goToList(...r)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},s[2]||(s[2]=[e("i",{class:"fa fa-list mr-3","aria-hidden":"true"},null,-1),a(" All Request Lists ")])),e("button",{onClick:s[1]||(s[1]=(...r)=>g.goToCreate&&g.goToCreate(...r)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},s[3]||(s[3]=[e("i",{class:"fa fa-plus-circle mr-3","aria-hidden":"true"},null,-1),a(" CREATE ")])),s[4]||(s[4]=e("a",{href:"/",class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[e("i",{class:"fa fa-globe mr-3","aria-hidden":"true"}),a(" LSU HOME PAGE ")],-1))])]))}},G={class:"flex"},W={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},H={class:"w-full min-h-screen"},Y={class:"bg-green-800"},J={class:"lg:flex mx-auto justify-between py-2 px-3.5"},K={class:"lg:flex items-center text-white gap-5"},Q={class:"flex -mt-1"},X={class:"text-sm"},Z={class:"w-full p-5"},ee={class:""},te={class:"appointment-lists shadow mx-auto text-xs"},se={class:""},le={key:0,class:"w-full rows"},ae={class:"px-2 lg:w-1/12"},oe={class:"border"},ie={class:"px-2 lg:w-1/12"},ne={class:"px-2 lg:w-1/12"},re={class:"flex px-2 font-bold justify-center lg:w-2/12"},ue={class:"mx-auto lg:flex justify-center"},de=["onClick"],ce={class:"mx-auto lg:flex justify-center"},pe=["onClick"],xe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},me={key:1,class:"italic text-gray-400 text-center p-1"},ge={__name:"index",setup(g){const x=A(),s=B(),r=d(s.mainDevServer),m=d(0);let w=d(),C=d(!0),u=d(!0),f=d(!1);N(()=>{setTimeout(async()=>{s.user.isAuthenticated&&(s.user.email==="jorenleeluna24@gmail.com"||s.user.email==="esmael.larubis@lsu.edu.ph")?(m.value=await $fetch(r.value+"/api/campus-pass/list").catch(o=>o.data)||0,x.push("/_/panels/campus-security")):x.push("/_/unauthorized")},3e3)});const _=o=>{f.value=!f.value,w.value=o},k=async()=>{await $fetch(r.value+"/api/campus-pass/"+w.value+"/delete/",{method:"DELETE",headers:{Authorization:s.user.token,"Content-Type":"application/json"}}).then(async o=>{console.log("response",o),m.value=await $fetch(r.value+"/api/campus-pass/list").catch(t=>t.data)||0,f.value=!f.value})},T=()=>{x.push("/_/proc-admin"),s.removeToken()};d(!0);const L=()=>{x.push("/_/panels/campus-security")},j=o=>{x.push("/_/panels/campus-security/edit/"+o)};return(o,t)=>{const D=q,S=F;return c(),p("div",null,[e("div",G,[v(e("div",W,[b(D,{goToList:L,goToCreate:o.goToCreate},null,8,["goToCreate"])],512),[[h,n(u)]]),e("div",H,[e("div",Y,[e("div",J,[e("div",K,[e("div",{onClick:t[0]||(t[0]=l=>I(u)?u.value=!n(u):u=!n(u)),class:"w-10 px-1.5"},[e("i",{class:y(["fa text-3xl text-white",n(u)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Q,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",X,i(n(s).user.email),1)])]),e("button",{onClick:T,class:"flex hover:font-bold pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",Z,[v(e("div",null,[e("div",ee,[e("div",te,[e("div",se,[t[12]||(t[12]=M('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-79e065ca><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap" data-v-79e065ca><li class="lg:w-1/12" data-v-79e065ca>Main In-Charge</li><li class="lg:w-1/12" data-v-79e065ca>Purpose of Access</li><li class="lg:w-1/12" data-v-79e065ca>Location</li><li class="lg:w-1/12" data-v-79e065ca>Action</li></ul></div>',1)),m.value.length>0?(c(),p("div",le,[(c(!0),p(P,null,R(n(z).orderBy(m.value,"id","asc"),(l,E)=>(c(),p("ul",{class:"lg:flex w-full justify-evenly py-3 text-center items-center h-auto border-b border-gray-100",key:E},[e("li",ae,[e("span",oe,i(l.main_in_charge_fullname),1),t[3]||(t[3]=e("br",null,null,-1)),a(" "+i(l.email_address)+" ",1),t[4]||(t[4]=e("br",null,null,-1)),a(" "+i(l.mobile_phone_number),1)]),t[10]||(t[10]=e("li",{class:"px-2 lg:w-1/12"},null,-1)),e("li",ie,[a(i(l.purpose_of_access)+" ",1),t[5]||(t[5]=e("br",null,null,-1)),a(" "+i(l.location),1)]),e("li",ne,[a(i(l.date_of_access),1),t[6]||(t[6]=e("br",null,null,-1)),a(" "+i(l.time_start)+" ",1),t[7]||(t[7]=e("br",null,null,-1)),a(" "+i(l.time_end),1)]),e("li",re,[e("div",ue,[e("button",{onClick:$=>j(l.id)},t[8]||(t[8]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,de)]),e("div",ce,[e("button",{onClick:$=>_(l.id)},t[9]||(t[9]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,pe)])])]))),128)),v(e("div",xe,[t[11]||(t[11]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:k},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:_},"Cancel")])],512),[[h,n(f)]])])):V("",!0),m.value.length===0?(c(),p("div",me," No Results Found! ")):(c(),p("div",{key:2,class:y(["italic text-gray-400 text-center p-1",m.value.length>0?"hidden":""])}," Please Wait ... ",2))])])])],512),[[h,n(C)]])])])])]),b(S)])}}},be=O(ge,[["__scopeId","data-v-79e065ca"]]);export{be as default};
