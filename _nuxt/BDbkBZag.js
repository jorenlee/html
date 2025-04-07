import{_ as $}from"./YY3Wtshm.js";import{e as z,u as O,r as e,g as F,c as o,a as t,h as S,v as E,f as i,b as G,j as H,n as V,t as h,i as q,F as P,l as U,o as n}from"./BsJlg5l1.js";import{_ as Y}from"./5JjjnmY2.js";import"./DlAUqK2U.js";const J={class:""},K={class:"flex"},Q={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},W={class:"w-full min-h-screen"},X={class:"bg-green-800"},Z={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ee={class:"lg:flex items-center text-white lg:gap-5"},se={class:"flex -mt-1"},te={class:"text-sm"},le={class:"px-3"},ae={class:"w-full"},ue={class:"appointment-lists shadow mx-auto text-xs"},ie={class:""},re={key:0},oe={key:1},ne={key:0,class:"w-full rows"},de={class:"px-2 w-5"},ce={class:"px-2 w-1/2"},pe={class:"flex px-2 font-bold justify-center gap-5 lg:w-20 w-1/3"},he={class:"mx-auto lg:flex justify-center"},ge=["onClick"],ve={class:"mx-auto lg:flex justify-center"},me=["onClick"],fe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},xe={key:1,class:"itallic text-gray-400 text-center p-1"},ke={__name:"index",setup(be){const d=z(),l=O(),g=e(l.mainDevServer);let r=e(!0),c=e(!1),v=e();e("cba@lsu.edu.ph"),e("ccsea@lsu.edu.ph"),e("con@lsu.edu.ph"),e("cea@lsu.edu.ph"),e("cthm@lsu.edu.ph"),e("cte@lsu.edu.ph"),e("cte@lsu.edu.ph"),e("graduatestudies@lsu.edu.ph");const m=e("cba.registrar@lsu.edu.ph"),f=e("ccsea.registrar@lsu.edu.ph"),x=e("onlinerequest@lsu.edu.ph"),b=e("cthm.registrar@lsu.edu.ph"),_=e("cthm.registrar@lsu.edu.ph"),w=e("onlinerequest@lsu.edu.ph"),y=e("cte.registrar@lsu.edu.ph");e("is.registrar@lsu.edu.ph");const C=e("bsit@lsu.edu.ph");e("bscpe@lsu.edu.ph"),e("bsba@lsu.edu.ph"),e("bsais@lsu.edu.ph"),e("bsac@lsu.edu.ph"),e("bsce@lsu.edu.ph"),e("bsarch@lsu.edu.ph"),e("bsee@lsu.edu.ph"),e("bsece@lsu.edu.ph"),e("bsge@lsu.edu.ph"),e("bscs@lsu.edu.ph"),e("blis@lsu.edu.ph"),e("baels@lsu.edu.ph"),e("bapolsc@lsu.edu.ph"),e("bspsych@lsu.edu.ph'"),e("bscrim@lsu.edu.ph"),e("bssw@lsu.edu.ph"),e("beed@lsu.edu.ph"),e("bsed@lsu.edu.ph"),e("bsned@lsu.edu.ph"),e("bped@lsu.edu.ph"),e("btled@lsu.edu.ph"),e("npc@lsu.edu.ph"),e("admissions@lsu.edu.ph"),e("accounting@lsu.edu.ph");const A=e(l.user.registrarEmail),B=e(l.user.developerEmail),T=e(l.user.testEmail);let u=e(0);const R=e(!1);F(async()=>{const a=await $fetch(g.value+"/api/enrollment/list/").catch(s=>s.data);if(l.user.isAuthenticated&&(l.user.email===m.value||l.user.email===f.value||l.user.email===x.value||l.user.email===b.value||l.user.email===_.value||l.user.email===w.value||l.user.email===y.value||l.user.email===C.value||l.user.email===A.value||l.user.email===B.value||l.user.email===T.value))switch(d.push("/_/panels/registrar/enrollment"),l.user.email){case m.value:u.value=a.value.filter(s=>s.college==="CBA (College of Business and Accountancy)");break;case f.value:u.value=a.value.filter(s=>s.college==="CCSEA (College of Computer Science, Engineering, and Architecture)");break;case x.value:u.value=a.value.filter(s=>s.college==="CON (College of Nursing)");break;case b.value:u.value=a.value.filter(s=>s.college==="CTHM (College of Tourism and Hospitality Management)");break;case _.value:u.value=a.value.filter(s=>s.college==="SGS (School of Graduate Studies)");break;case w.value:u.value=a.value.filter(s=>s.college==="CAS (College of Arts and Sciences)");break;case y.value:u.value=a.value.filter(s=>s.college==="CTE (College of Teacher Education)");break;case C.value:u.value=a.value.filter(s=>{if(s.courseProgram==="Bachelor of Science in Information Technology (BSIT)")return s.isAdmissionConfirmed});break;default:u.value=a||0,r.value=!0,R.value=!0}else d.push("/_/unauthorized")});const k=a=>{c.value=!c.value,v.value=a},j=async()=>{await $fetch(g.value+"/api/enrollment/"+v.value+"/delete/",{method:"DELETE",headers:{Authorization:l.user.token,"Content-Type":"application/json"}}).then(async a=>{d.go(),c.value=!c.value})},D=a=>{d.push("/_/panels/registrar/enrollment/edit/"+a)},N=()=>{d.push("/_/reg-admin"),l.removeToken()};return(a,s)=>{const M=$;return n(),o("div",J,[t("div",K,[S(t("div",Q,[G(M)],512),[[E,i(r)]]),t("div",W,[t("div",X,[t("div",Z,[t("div",ee,[t("div",{onClick:s[0]||(s[0]=p=>H(r)?r.value=!i(r):r=!i(r)),class:"w-10 px-1.5"},[t("i",{class:V(["fa text-3xl text-white",i(r)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),t("div",se,[s[1]||(s[1]=t("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),t("h1",te,h(i(l).user.email),1)])]),t("button",{onClick:N,class:"flex hover:font-boldn pt-1"},s[2]||(s[2]=[t("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),t("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),t("div",le,[s[7]||(s[7]=t("div",{class:""},[t("a",{href:"/_/panels/registrar/enrollment/create",class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap block w-fit"}," Create ")],-1)),t("div",ae,[t("div",null,[t("div",ue,[t("div",ie,[s[6]||(s[6]=q('<div class="header w-full p-2 bg-green-800 text-white flex items-center"><ul class="flex w-full justify-evenly text-center whitespace-nowrap"><li class="w-5">No.</li><li class="w-1/2">Student Id</li><li class="lg:w-20 w-1/3">Action</li></ul></div>',1)),a.pending?(n(),o("div",re,"Loading ...")):(n(),o("div",oe,[i(u).length>0?(n(),o("div",ne,[(n(!0),o(P,null,U(i(Y).orderBy(i(u),"id","asc"),(p,I)=>(n(),o("ul",{class:"flex w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:I},[t("li",de,h(p.id),1),t("li",ce,h(p.studentId),1),t("li",pe,[t("div",he,[t("button",{onClick:L=>D(p.id)},s[3]||(s[3]=[t("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,ge)]),t("div",ve,[t("button",{onClick:L=>k(p.id)},s[4]||(s[4]=[t("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,me)])])]))),128)),S(t("div",fe,[s[5]||(s[5]=t("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),t("div",{class:"flex gap-5 mx-auto w-fit my-5"},[t("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:j},"Yes"),t("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:k},"Cancel")])],512),[[E,i(c)]])])):(n(),o("div",xe," Clear or Empty! "))]))])])])])])])])])}}};export{ke as default};
