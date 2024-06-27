import{_ as S}from"./DQ_R2otk.js";import{_ as $}from"./UPA3sOSJ.js";import{u as A,g as E,r as d,h as L,q as N,c as r,a as e,i as p,v as x,f as l,b as y,j as z,n as R,t as n,F as V,s as O,x as q,o as _}from"./D42_E3UP.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const I={class:""},P={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Y={class:"w-full lg:h-screen h-screen"},G={class:"bg-green-700"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex items-center text-white gap-5"},K={class:"flex -mt-1"},Q=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),W={class:"text-sm"},X=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),Z=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),ee=[X,Z],te={class:"w-full p-5"},se={class:"appointment-lists shadow mx-auto text-xs"},le={class:""},oe=q('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="lg:flex w-full justify-evenly text-center whitespace-nowrap"><li class="lg:w-20">No.</li><li class="lg:w-2/12">Field 1</li><li class="lg:w-3/12">Field 2</li><li class="lg:w-2/12">Field 3</li><li class="lg:w-1/12">Field 4</li><li class="lg:w-2/12">Action</li></ul></div>',1),ie={key:0,class:"w-full rows"},ae=["cits"],ne={class:"px-2 lg:w-14"},ce={class:"px-2 lg:w-2/12"},de={class:"px-2 lg:w-2/12"},re={class:"px-2 lg:w-2/12"},_e={class:"px-2 lg:w-2/12"},ue={class:"flex px-2 font-bold justify-center lg:w-1/12"},he={class:"mx-auto lg:flex justify-center"},pe=["onClick"],xe=e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),fe=[xe],ge={class:"mx-auto lg:flex justify-center"},me=["onClick"],ve=e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),we=[ve],ye={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},be=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1),ke={key:1,class:"itallic text-gray-400 text-center p-1"},Se={__name:"index",async setup(Ce){let u,f;const o=A(),a=E(),g=d(a.mainServer);L(()=>{a.user.isAuthenticated&&a.user.email==="jorenleeluna24@gmail.com"?o.push("/_/panels/mco"):o.push("/_/unauthorized")});let b=d(!0),i=d(!0),c=d(!1),m=d();const v=([u,f]=N(()=>$fetch(g.value+"/api/mco/list").catch(s=>s.data)),u=await u,f(),u),k=()=>{o.push("/_/panels/mco")},C=()=>{o.push("/_/panels/mco/create")},j=s=>{o.push("/_/panels/mco/edit/"+s)},w=s=>{c.value=!c.value,m.value=s},T=()=>{o.push("/_/mco-admin"),a.removeToken()},D=async()=>{await $fetch(g.value+"/api/mco/"+m.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async s=>{console.log("response",s),o.go(),c.value=!c.value})};return(s,h)=>{const F=S,B=$;return _(),r("div",I,[e("div",P,[p(e("div",U,[y(F,{goToList:k,goToCreate:C})],512),[[x,l(i)]]),e("div",Y,[e("div",G,[e("div",H,[e("div",J,[e("div",{onClick:h[0]||(h[0]=t=>z(i)?i.value=!l(i):i=!l(i)),class:"w-10 px-1.5"},[e("i",{class:R(["fa text-3xl text-white",l(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[Q,e("h1",W,n(l(a).user.email),1)])]),e("button",{onClick:h[1]||(h[1]=t=>T()),class:"flex hover:font-bold pt-1"},ee)])]),e("div",null,[e("div",te,[p(e("div",null,[e("div",se,[e("div",le,[oe,l(v).length>0?(_(),r("div",ie,[(_(!0),r(V,null,O(l(v),t=>(_(),r("ul",{class:"lg:flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:t.id,cits:s.Mco},[e("li",ne,n(t.id),1),e("li",ce,n(t.field_1),1),e("li",de,n(t.field_2),1),e("li",re,n(t.field_3),1),e("li",_e,n(t.field_4),1),e("li",ue,[e("div",he,[e("button",{onClick:M=>j(t.id)},fe,8,pe)]),e("div",ge,[e("button",{onClick:M=>w(t.id)},we,8,me)])])],8,ae))),128)),p(e("div",ye,[be,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:D},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:w},"Cancel")])],512),[[x,l(c)]])])):(_(),r("div",ke," Please Add Mco, No Results Found! "))])])],512),[[x,l(b)]])])])])]),y(B)])}}};export{Se as default};
