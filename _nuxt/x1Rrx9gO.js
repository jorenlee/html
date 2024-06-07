import{_ as $}from"./DRCBfQaT.js";import{u as z,g as O,r as e,h as F,c as r,a as s,i as S,v as E,f as o,b as G,j as H,n as V,t as p,F as q,s as P,x as U,o as n}from"./ro2K5Opj.js";import{_ as Y}from"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const J={class:""},K={class:"flex"},Q={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},W={class:"w-full min-h-screen"},X={class:"bg-green-800"},Z={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ee={class:"lg:flex items-center text-white lg:gap-5"},se={class:"flex -mt-1"},te=s("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),le={class:"text-sm"},ae=s("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),ie=s("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),oe=[ae,ie],ue={class:"px-3"},re=s("div",{class:""},[s("a",{href:"/_/panels/registrar/enrollment/create",class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap block w-fit"}," Create ")],-1),ne={class:"w-full"},ce={class:"appointment-lists shadow mx-auto text-xs"},de={class:""},he=U('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="flex w-full justify-evenly text-center whitespace-nowrap"><li class="w-5">No.</li><li class="w-1/2">Student Id</li><li class="lg:w-20 w-1/3">Action</li></ul></div>',1),pe={key:0},ge={key:1},_e={key:0,class:"w-full rows"},ve={class:"px-2 w-5"},me={class:"px-2 w-1/2"},fe={class:"flex px-2 font-bold justify-center gap-5 lg:w-20 w-1/3"},xe={class:"mx-auto lg:flex justify-center"},be=["onClick"],we=s("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),ye=[we],Ce={class:"mx-auto lg:flex justify-center"},ke=["onClick"],Se=s("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),Ee=[Se],Ae={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Be=s("div",{class:"my-6"},"Are you sure you want to Delete?",-1),Te={key:1,class:"itallic text-gray-400 text-center p-1"},Le={__name:"index",setup(Re){const c=z(),l=O(),g=e(l.mainServer);let u=e(!0),d=e(!1),_=e();e("cba@lsu.edu.ph"),e("ccsea@lsu.edu.ph"),e("con@lsu.edu.ph"),e("cea@lsu.edu.ph"),e("cthm@lsu.edu.ph"),e("cte@lsu.edu.ph"),e("cte@lsu.edu.ph"),e("graduatestudies@lsu.edu.ph");const v=e("cba.registrar@lsu.edu.ph"),m=e("ccsea.registrar@lsu.edu.ph"),f=e("onlinerequest@lsu.edu.ph"),x=e("cthm.registrar@lsu.edu.ph"),b=e("cthm.registrar@lsu.edu.ph"),w=e("onlinerequest@lsu.edu.ph"),y=e("cte.registrar@lsu.edu.ph");e("is.registrar@lsu.edu.ph");const C=e("bsit@lsu.edu.ph");e("bscpe@lsu.edu.ph"),e("bsba@lsu.edu.ph"),e("bsais@lsu.edu.ph"),e("bsac@lsu.edu.ph"),e("bsce@lsu.edu.ph"),e("bsarch@lsu.edu.ph"),e("bsee@lsu.edu.ph"),e("bsece@lsu.edu.ph"),e("bsge@lsu.edu.ph"),e("bscs@lsu.edu.ph"),e("blis@lsu.edu.ph"),e("baels@lsu.edu.ph"),e("bapolsc@lsu.edu.ph"),e("bspsych@lsu.edu.ph'"),e("bscrim@lsu.edu.ph"),e("bssw@lsu.edu.ph"),e("beed@lsu.edu.ph"),e("bsed@lsu.edu.ph"),e("bsned@lsu.edu.ph"),e("bped@lsu.edu.ph"),e("btled@lsu.edu.ph"),e("npc@lsu.edu.ph"),e("admissions@lsu.edu.ph"),e("accounting@lsu.edu.ph");const A=e(l.user.registrarEmail),B=e(l.user.developerEmail),T=e(l.user.testEmail);let i=e(0);const R=e(!1);F(async()=>{const a=await $fetch(g.value+"/api/enrollment/list/").catch(t=>t.data);if(console.log(a),l.user.isAuthenticated&&(l.user.email===v.value||l.user.email===m.value||l.user.email===f.value||l.user.email===x.value||l.user.email===b.value||l.user.email===w.value||l.user.email===y.value||l.user.email===C.value||l.user.email===A.value||l.user.email===B.value||l.user.email===T.value))switch(c.push("/_/panels/registrar/enrollment"),l.user.email){case v.value:i.value=a.value.filter(t=>t.college==="CBA (College of Business and Accountancy)");break;case m.value:i.value=a.value.filter(t=>t.college==="CCSEA (College of Computer Science, Engineering, and Architecture)");break;case f.value:i.value=a.value.filter(t=>t.college==="CON (College of Nursing)");break;case x.value:i.value=a.value.filter(t=>t.college==="CTHM (College of Tourism and Hospitality Management)");break;case b.value:i.value=a.value.filter(t=>t.college==="SGS (School of Graduate Studies)");break;case w.value:i.value=a.value.filter(t=>t.college==="CAS (College of Arts and Sciences)");break;case y.value:i.value=a.value.filter(t=>t.college==="CTE (College of Teacher Education)");break;case C.value:i.value=a.value.filter(t=>{if(t.courseProgram==="Bachelor of Science in Information Technology (BSIT)")return t.isAdmissionConfirmed});break;default:i.value=a||0,u.value=!0,R.value=!0}else c.push("/_/unauthorized")});const k=a=>{d.value=!d.value,_.value=a},j=async()=>{await $fetch(g.value+"/api/enrollment/"+_.value+"/delete/",{method:"DELETE",headers:{Authorization:l.user.token,"Content-Type":"application/json"}}).then(async a=>{console.log("response",a),c.go(),d.value=!d.value})},D=a=>{c.push("/_/panels/registrar/enrollment/edit/"+a)},N=()=>{c.push("/_/reg-admin"),l.removeToken()};return(a,t)=>{const M=$;return n(),r("div",J,[s("div",K,[S(s("div",Q,[G(M)],512),[[E,o(u)]]),s("div",W,[s("div",X,[s("div",Z,[s("div",ee,[s("div",{onClick:t[0]||(t[0]=h=>H(u)?u.value=!o(u):u=!o(u)),class:"w-10 px-1.5"},[s("i",{class:V(["fa text-3xl text-white",o(u)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),s("div",se,[te,s("h1",le,p(o(l).user.email),1)])]),s("button",{onClick:N,class:"flex hover:font-boldn pt-1"},oe)])]),s("div",ue,[re,s("div",ne,[s("div",null,[s("div",ce,[s("div",de,[he,a.pending?(n(),r("div",pe,"Loading ...")):(n(),r("div",ge,[o(i).length>0?(n(),r("div",_e,[(n(!0),r(q,null,P(o(Y).orderBy(o(i),"id","asc"),(h,I)=>(n(),r("ul",{class:"flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:I},[s("li",ve,p(h.id),1),s("li",me,p(h.studentId),1),s("li",fe,[s("div",xe,[s("button",{onClick:L=>D(h.id)},ye,8,be)]),s("div",Ce,[s("button",{onClick:L=>k(h.id)},Ee,8,ke)])])]))),128)),S(s("div",Ae,[Be,s("div",{class:"flex gap-5 mx-auto w-fit my-5"},[s("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:j},"Yes"),s("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:k},"Cancel")])],512),[[E,o(d)]])])):(n(),r("div",Te," Clear or Empty! "))]))])])])])])])])])}}};export{Le as default};
