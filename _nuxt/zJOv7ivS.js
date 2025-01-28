import{o as i,c as r,a as e,d as v,e as F,u as O,r as n,h as R,j as g,v as h,f as c,b as L,k as q,n as C,t as o,q as G,F as $,s as j,x as W,p as H}from"./DJKLSPQr.js";import{_ as Y}from"./oSg_oWOP.js";import{_ as J}from"./5JjjnmY2.js";import{_ as K}from"./DlAUqK2U.js";import"./C5S46NFB.js";const Q={class:"mx-auto mt-10 mb-5 grid grid-cols-1"},X={__name:"CampusPassMenuBar",props:["goToList","goToCreate"],setup(b){return(x,l)=>(i(),r("div",null,[l[3]||(l[3]=e("div",{class:"w-fit mx-auto mt-5 mb-3"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG",class:"lg:w-24 w-20 mx-auto"})],-1)),l[4]||(l[4]=e("div",{class:"text-center"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")],-1)),e("div",Q,[e("button",{onClick:l[0]||(l[0]=(...d)=>b.goToList&&b.goToList(...d)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},l[1]||(l[1]=[e("i",{class:"fa fa-list mr-3","aria-hidden":"true"},null,-1),v(" All Request Lists ")])),l[2]||(l[2]=e("a",{href:"/",class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[e("i",{class:"fa fa-globe mr-3","aria-hidden":"true"}),v(" LSU HOME PAGE ")],-1))])]))}},Z={class:"flex"},ee={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},te={class:"w-full min-h-screen"},se={class:"bg-green-800"},le={class:"lg:flex mx-auto justify-between py-2 px-3.5"},ae={class:"lg:flex items-center text-white gap-5"},oe={class:"flex -mt-1"},ne={class:"text-sm"},ie={class:"w-full p-5"},re={class:""},de={class:"appointment-lists shadow mx-auto text-xs"},ue={class:""},ce={key:0,class:"w-full rows px-2"},pe={class:"lg:flex py-3 w-full"},fe={class:"flex items-center px-2 lg:w-[250px]"},ve={class:"w-full"},xe={class:""},me={class:"px-2 lg:w-[250px] flex items-center justify-center"},ge={class:"px-2 lg:w-[250px] flex items-center justify-center"},_e={class:"flex items-center px-2 lg:w-[250px]"},he={class:"w-full"},be={class:"flex items-center lg:w-[250px]"},we=["href"],ye=["href"],ke=["href"],Ce={class:"flex items-center justify-center px-2 lg:w-[250px]"},Se={class:"flex w-fit mx-auto my-2 gap-5"},Te={class:"w-fit mx-auto flex items-center gap-3"},Le=["onUpdate:modelValue","onChange"],$e={class:"flex px-2 font-bold justify-center lg:w-[100px]"},je={class:"mx-auto lg:flex justify-center"},Ae=["onClick"],De={class:"bg-gray-100"},Me={class:"flex"},Be={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},Ie={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ne={key:1,class:"italic text-gray-400 text-center p-1"},Ee={__name:"index",setup(b){const x=F(),l=O(),d=n(l.mainDevServer),u=n(0);let S=n(),w=n(),A=n(!0),p=n(!0),m=n(!1);const _=n(!1),y=n(null),D=async(a,t)=>{_.value=!0,w.value=a,console.log(w.value),y.value=await $fetch(d.value+"/api/campus-pass/"+a+"/").catch(k=>k.data),y.value.approval_status=t},M=()=>{B(),_.value=!1};R(()=>{setTimeout(async()=>{l.user.isAuthenticated&&(l.user.email==="jorenleeluna24@gmail.com"||l.user.email==="esmael.larubis@lsu.edu.ph")?(u.value=await $fetch(d.value+"/api/campus-pass/list").catch(a=>a.data)||0,x.push("/_/panels/campus-security"),console.log(u.value)):x.push("/_/unauthorized")},3e3)});const B=async()=>{await $fetch(d.value+"/api/campus-pass/"+w.value+"/edit/",{method:"PUT",body:y.value}).then(a=>{console.log("response",a)})},I=async()=>{_.value=!1,u.value=await $fetch(d.value+"/api/campus-pass/list").catch(a=>a.data)||0},T=a=>{m.value=!m.value,S.value=a},N=async()=>{await $fetch(d.value+"/api/campus-pass/"+S.value+"/delete/",{method:"DELETE",headers:{Authorization:l.user.token,"Content-Type":"application/json"}}).then(async a=>{console.log("response",a),u.value=await $fetch(d.value+"/api/campus-pass/list").catch(t=>t.data)||0,m.value=!m.value})},E=()=>{x.push("/_/proc-admin"),l.removeToken()};n(!0);const P=()=>{x.push("/_/panels/campus-security")};return(a,t)=>{const k=X,U=Y;return i(),r("div",null,[e("div",Z,[g(e("div",ee,[L(k,{goToList:P,goToCreate:a.goToCreate},null,8,["goToCreate"])],512),[[h,c(p)]]),e("div",te,[e("div",se,[e("div",le,[e("div",ae,[e("div",{onClick:t[0]||(t[0]=s=>q(p)?p.value=!c(p):p=!c(p)),class:"w-10 px-1.5"},[e("i",{class:C(["fa text-3xl text-white",c(p)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",oe,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ne,o(c(l).user.email),1)])]),e("button",{onClick:E,class:"flex hover:font-bold pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",ie,[g(e("div",null,[e("div",re,[e("div",de,[e("div",ue,[t[11]||(t[11]=G('<div class="header w-full p-2 bg-green-800 text-white flex items-center" data-v-beddb9fb><ul class="lg:flex justify-evenly text-center whitespace-nowrap" data-v-beddb9fb><li class="lg:w-[250px]" data-v-beddb9fb>Main In-Charge</li><li class="lg:w-[250px]" data-v-beddb9fb>Purpose of Access</li><li class="lg:w-[250px]" data-v-beddb9fb>Location</li><li class="lg:w-[250px]" data-v-beddb9fb>Schedule</li><li class="lg:w-[250px]" data-v-beddb9fb>Links</li><li class="lg:w-[250px]" data-v-beddb9fb>Status</li><li class="lg:w-[100px]" data-v-beddb9fb>Action</li></ul></div>',1)),u.value.length>0?(i(),r("div",ce,[(i(!0),r($,null,j(c(J).orderBy(u.value,"id","asc"),(s,V)=>(i(),r("div",{class:"w-full justify-evenly text-center items-center h-auto border-b border-gray-100",key:V},[e("div",pe,[e("div",fe,[e("div",ve,[e("span",xe,o(s.main_in_charge_fullname),1),t[3]||(t[3]=e("br",null,null,-1)),v(" "+o(s.email_address)+" ",1),t[4]||(t[4]=e("br",null,null,-1)),v(" "+o(s.mobile_phone_number),1)])]),e("div",me,o(s.purpose_of_access),1),e("div",ge,o(s.location),1),e("div",_e,[e("div",he,[v(" Start : "+o(s.date_start)+" | "+o(s.time_start)+" ",1),t[5]||(t[5]=e("br",null,null,-1)),v(" End : "+o(s.date_end)+" | "+o(s.time_end),1)])]),e("div",be,[e("a",{href:s.approved_activities_link,target:"_blank",class:"font-bold mx-3 text-green-800"},"Approved Activities",8,we),e("a",{href:s.approved_booking_document_gso_link,target:"_blank",class:"font-bold mx-3 text-green-800"},"Approved Booking GSO",8,ye),e("a",{href:s.lists_names_link,target:"_blank",class:"font-bold mx-3 text-green-800"},"List of Names",8,ke)]),e("div",Ce,[e("div",Se,[e("div",Te,[e("div",null,[e("label",{class:C(["font-bold py-1 block",{"text-red-700":s.approval_status==="declined","text-yellow-500":s.approval_status==="pending","text-green-900":s.approval_status==="approved"}])},"STATUS:",2),g(e("select",{"onUpdate:modelValue":f=>s.approval_status=f,name:"borrower_category",class:"shadow-md p-2 block font-bold rounded-md w-fit border border-[#e5e7eb] capitalize",required:"",onChange:f=>D(s.id,s.approval_status)},t[6]||(t[6]=[e("option",{value:"approved"},"approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"pending"},"pending",-1)]),40,Le),[[H,s.approval_status]])])])])]),e("div",$e,[e("div",je,[e("button",{onClick:f=>T(s.id)},t[7]||(t[7]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,Ae)])])]),e("div",De,[t[8]||(t[8]=e("div",{class:"text-center border-y py-2 font-bold"}," List of Names ",-1)),e("div",Me,[(i(!0),r($,null,j(s.few_name_list,(f,z)=>(i(),r("div",{key:z,class:"text-left px-10 py-5"},[e("div",null,o(f.fullname),1),e("div",null,o(f.email),1)]))),128))])])]))),128)),g(e("div",Be,[e("div",{class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},[e("div",{class:"flex items-center"},[t[9]||(t[9]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Status: ",-1)),e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:M},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:I},"no")])])])],512),[[h,_.value]]),g(e("div",Ie,[t[10]||(t[10]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:N},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:T},"Cancel")])],512),[[h,c(m)]])])):W("",!0),u.value.length===0?(i(),r("div",Ne," No Results Found! ")):(i(),r("div",{key:2,class:C(["italic text-gray-400 text-center p-1",u.value.length>0?"hidden":""])}," Please Wait ... ",2))])])])],512),[[h,c(A)]])])])])]),L(U)])}}},Oe=K(Ee,[["__scopeId","data-v-beddb9fb"]]);export{Oe as default};
