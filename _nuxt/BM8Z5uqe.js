import{_ as K}from"./Px715GBl.js";import{e as Q,u as X,r as n,g as Z,c as d,a as e,h as m,v as k,f as c,i as ee,t as o,j as N,n as v,k as I,F as T,l as D,b as te,o as u,d as h,m as ae,p as se}from"./2IV8EIEV.js";import"./C5S46NFB.js";import{_ as le}from"./5JjjnmY2.js";import{_ as oe}from"./DlAUqK2U.js";const ie={class:"lg:flex lg:min-h-screen"},ne={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute lg:min-h-auto min-h-[700px] lg:h-auto h-screen"},re={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},de={class:"flex items-center w-full px-2"},ce={class:"text-sm"},ue={class:"w-full"},pe={class:"bg-green-800"},ve={class:"flex mx-auto justify-between py-2 px-3.5"},fe={class:"w-full lg:p-5 px-2 py-2"},me={class:"relative"},he={class:"appointment-lists mx-auto text-xs"},ge={class:""},xe={key:0,class:"lg:grid grid-cols-3 gap-4"},_e={class:"w-full"},be={class:"flex items-center justify-center border-b relative"},ye=["onClick"],we={class:"mb-3 text-[10px] font-light"},ke={class:"hover:font-bold"},Ce={class:"flex gap-x-3 absolute left-3"},$e=["href"],Te=["href"],De={class:"flex px-2 font-bold justify-center absolute right-0"},Se={class:"mx-auto lg:flex justify-center text-white items-center"},je=["onClick"],Le={class:"text-left px-2"},Ae={class:"w-full px-2 py-0.5 border-b"},Ne={class:""},Ie={class:"px-2 py-0.5 border-b"},ze={class:"px-2 py-0.5"},Pe={class:"flex items-center justify-center border-t-4 uppercase"},Re={class:"flex gap-x-0.5"},Ue={class:"border-y font-bold py-1 px-2 flex items-center justify-center"},Ve={class:""},Be={class:"flex items-center my-2"},Ge=["onUpdate:modelValue","onChange"],Me=["onClick"],Ee={class:"flex items-center justify-center"},Oe={class:"w-fit mx-auto py-1 flex items-center gap-3"},qe={class:"flex items-center gap-x-2 w-full"},Fe=["onUpdate:modelValue","onChange"],He={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},We={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ye={key:0,class:"italic text-gray-400 text-center p-1 h-screen"},Je={key:0,class:"absolute top-0 w-full z-10 bg-white h-full"},Ke={class:"border-4 border-gray-100 shadow-lg"},Qe={class:"flex items-center"},Xe={class:"lg:flex lg:gap-x-3 lg:text-sm text-xs"},Ze={class:"static bottom-0 w-full"},et={__name:"index",setup(tt){const C=Q(),f=X(),r=n(f.mainDevServer),g=n(0);let S=n(),j=n(),z=n(!0),i=n(!1),x=n(!1);const w=n(!1),s=n(null),_=n(!1),L=n([]),b=n([]);Z(()=>{setTimeout(async()=>{f.user.isAuthenticated&&(f.user.email==="jorenleeluna24@gmail.com"||f.user.email==="esmael.larubis@lsu.edu.ph")?(g.value=await $fetch(r.value+"/api/campus-pass/list").catch(l=>l.data)||0,C.push("/_/panels/campus-security/declined"),P()):C.push("/_/unauthorized")},5e3)});const P=()=>{g.value.filter(l=>{l.approval_status==="declined"&&b.value.push(l)})},R=async(l,t)=>{s.value=await $fetch(r.value+"/api/campus-pass/"+l+"/").catch(y=>y.data),s.value.approval_status=t,console.log(s.value),E(l)},U=async(l,t)=>{s.value=await $fetch(r.value+"/api/campus-pass/"+l+"/").catch(y=>y.data),s.value.remarks=t,console.log(s.value)},V=l=>{w.value=!0,j.value=l},B=()=>{M(),w.value=!1},G=l=>{g.value.filter(function(t){l===t.id&&(console.log(t),L.value=t.name_list,_.value=!_.value)})},M=async()=>{await $fetch(r.value+"/api/campus-pass/"+j.value+"/edit/",{method:"PUT",body:s.value}).then(l=>{console.log("response",l),console.log(s.value)})},E=async l=>{await $fetch(r.value+"/api/campus-pass/"+l+"/edit/",{method:"PUT",body:s.value}).then(t=>{console.log("response",t),console.log(s.value),s.value.approval_status==="approved"&&O(),s.value.approval_status==="declined"&&q(),s.value.approval_status==="for revision"&&F()})},O=async()=>{await $fetch(r.value+"/api/campus-pass/to-gmail-approved/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},q=async()=>{await $fetch(r.value+"/api/campus-pass/to-gmail-declined/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},F=async()=>{await $fetch(r.value+"/api/campus-pass/to-gmail-for-revision/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},H=async()=>{w.value=!1,g.value=await $fetch(r.value+"/api/campus-pass/list").catch(l=>l.data)||0},A=l=>{x.value=!x.value,S.value=l},W=async()=>{await $fetch(r.value+"/api/campus-pass/"+S.value+"/delete/",{method:"DELETE",headers:{Authorization:f.user.token,"Content-Type":"application/json"}}).then(async l=>{console.log("response",l),g.value=await $fetch(r.value+"/api/campus-pass/list").catch(t=>t.data)||0,x.value=!x.value})},Y=()=>{f.removeToken(),C.push("/_/campus-pass-admin")};return(l,t)=>{const y=K;return u(),d("div",null,[e("div",ie,[m(e("div",ne,[e("div",re,[e("div",de,[t[3]||(t[3]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",ce,o(c(f).user.email),1)]),e("div",{onClick:t[0]||(t[0]=a=>N(i)?i.value=!c(i):i=!c(i)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:v(["fa text-3xl text-white",c(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[4]||(t[4]=ee('<div class="" data-v-8253fbd6><div class="w-fit mx-auto mt-5 mb-3" data-v-8253fbd6><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG" class="lg:w-24 w-20 mx-auto" data-v-8253fbd6></div><div class="text-center" data-v-8253fbd6><h1 class="font-bold text-green-800 text-2xl" data-v-8253fbd6>Dashboard</h1></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-8253fbd6><a href="/_/panels/campus-security" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-black hover:bg-black hover:text-white" data-v-8253fbd6><i class="fa fa-list mr-3" aria-hidden="true" data-v-8253fbd6></i> All Request Lists </a><a href="/_/panels/campus-security/pending" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-gray-900 hover:bg-gray-900 hover:text-white" data-v-8253fbd6><i class="fa fa-clock mr-0.5" aria-hidden="true" data-v-8253fbd6></i> Pending </a><a href="/_/panels/campus-security/declined" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-red-900 hover:bg-red-900 hover:text-white" data-v-8253fbd6><i class="fa fa-ban mr-0.5" aria-hidden="true" data-v-8253fbd6></i> Declined </a><a href="/_/panels/campus-security/inprogress" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-yellow-600 hover:bg-yellow-600 hover:text-white" data-v-8253fbd6><i class="fa fa-adjust mr-0.5" aria-hidden="true" data-v-8253fbd6></i> In Progress </a><a href="/_/panels/campus-security/approved" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-8253fbd6><i class="fa fa-check" aria-hidden="true" data-v-8253fbd6></i> Approved </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-8253fbd6><i class="fa fa-globe mr-3" aria-hidden="true" data-v-8253fbd6></i> LSU HOME PAGE </a></div></div>',1))],512),[[k,c(i)]]),e("div",ue,[e("div",pe,[e("div",ve,[e("div",{onClick:t[1]||(t[1]=a=>N(i)?i.value=!c(i):i=!c(i)),class:"w-10 px-1.5"},[e("i",{class:v(["fa text-3xl text-white",c(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("button",{onClick:Y,class:"flex hover:font-bold pt-1"},t[5]||(t[5]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",fe,[m(e("div",null,[t[23]||(t[23]=e("div",{class:"w-full shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase"}," All Declined Request Lists ",-1)),e("div",me,[e("div",he,[e("div",ge,[b.value.length>0?(u(),d("div",xe,[(u(!0),d(T,null,D(c(le).orderBy(b.value,"id","asc"),(a,$)=>(u(),d("div",{class:"justify-evenly text-center items-center h-auto lg:mb-0 mb-3 border border-gray-200 shadow",key:$},[e("div",_e,[e("div",be,[e("div",null,[e("div",{class:v(["font-bold uppercase w-full",a.attendees==="Group"?"pt-[7px] cursor-pointer":"pt-[14px]"]),onClick:p=>G(a.id)},[h(o(a.attendees)+" ",1),e("span",{class:v(a.attendees==="Group"?"text-green-800":"hidden")},t[6]||(t[6]=[e("i",{class:"fa fa-caret-down text-lg mt-0.5 ml-2"},null,-1)]),2)],10,ye),e("div",we,[t[7]||(t[7]=h(" TID: ")),e("span",ke,o(a.tracking_id),1)])]),e("div",Ce,[e("a",{href:a.approved_activities_link,target:"_blank",class:v(["font-bold w-full block text-green-800",a.approved_activities_link==="-"?"hidden":""])},t[8]||(t[8]=[e("i",{class:"fa fa-file-pdf text-lg"},null,-1)]),10,$e),e("a",{href:a.approved_gso_docs_link,target:"_blank",class:v(["font-bold w-full block text-green-800",a.approved_gso_docs_link==="-"?"hidden":""])},t[9]||(t[9]=[e("i",{class:"fa fa-soccer-ball text-lg"},null,-1)]),10,Te)]),e("div",De,[e("div",Se,[e("button",{onClick:p=>A(a.id),class:"text-red-500 hover:text-white hover:bg-red-500 bg-white border border-red-500 px-1.5 py-0.5 rounded-md"},t[10]||(t[10]=[e("i",{class:"fa fa-close rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,je)])])]),e("div",Le,[e("div",Ae,[e("span",Ne,[t[11]||(t[11]=e("i",{class:"fa fa-user mr-2"},null,-1)),h(" "+o(a.incharge_firstname),1)]),e("span",{class:v([{hidden:a.incharge_middlename==="-",hidden:a.incharge_middlename==="n/a",hidden:a.incharge_middlename==="N/A",hidden:a.incharge_middlename===""},"mx-1"])},o(a.incharge_middlename),3),e("span",null,o(a.incharge_lastname),1)]),e("div",Ie,[t[12]||(t[12]=e("i",{class:"fa fa-envelope mr-2"},null,-1)),h(" "+o(a.incharge_contact_email),1)]),e("div",ze,[t[13]||(t[13]=e("i",{class:"fa fa-phone mr-2"},null,-1)),h(" "+o(a.incharge_contact_number),1)])]),e("div",Pe,[e("ul",Re,[(u(!0),d(T,null,D(a.type_of_access,(p,J)=>(u(),d("li",{key:J,class:"shadow px-2 py-0.5 text-[10px] tracking-tighter"},o(p),1))),128))])]),e("div",Ue,[t[14]||(t[14]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),h(" "+o(a.schedule),1)]),e("div",Ve,[e("div",Be,[t[16]||(t[16]=e("label",{for:"remarks",class:"px-2 font-bold text-gray-800"},"Remarks:",-1)),m(e("input",{type:"text",class:"border w-full mx-auto py-1 px-1 shadow-sm","onUpdate:modelValue":p=>a.remarks=p,onChange:p=>U(a.id,a.remarks)},null,40,Ge),[[ae,a.remarks]]),e("button",{onClick:p=>V(a.id),class:"flex text-green-500 hover:text-white hover:bg-green-500 bg-white border border-green-500 px-1 py-1.5 mr-2"},t[15]||(t[15]=[e("i",{class:"fa fa-check rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,Me)])]),e("div",Ee,[e("div",{class:v(["flex w-full gap-5",{"bg-red-700":a.approval_status==="declined","bg-gray-700":a.approval_status==="pending","bg-yellow-500":a.approval_status==="for revision","bg-green-900":a.approval_status==="approved"}])},[e("div",Oe,[e("div",qe,[t[18]||(t[18]=e("label",{class:"font-bold block text-white"},"Status:",-1)),m(e("select",{"onUpdate:modelValue":p=>a.approval_status=p,name:"borrower_category",class:"shadow block font-bold rounded-md w-fit border px-1 pb-0.5 border-[#e5e7eb] capitalize",required:"",onChange:p=>R(a.id,a.approval_status)},t[17]||(t[17]=[e("option",{value:"approved"},"approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"pending"},"pending",-1),e("option",{value:"for revision"},"for revision",-1)]),40,Fe),[[se,a.approval_status]])])])],2)])])]))),128)),m(e("div",He,[e("div",{class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},[e("div",{class:"flex items-center"},[t[19]||(t[19]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Remarks: ",-1)),e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:B},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:H},"no")])])])],512),[[k,w.value]]),m(e("div",We,[t[20]||(t[20]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:W},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:A},"Cancel")])],512),[[k,c(x)]])])):I("",!0)]),b.value.length===0?(u(),d("div",Ye," Please Wait ... ")):(u(),d("div",{key:1,class:v(["italic text-gray-400 text-center p-1 h-screen",b.value.length>0?"hidden":""])}," No Results Found! ",2))]),_.value?(u(),d("div",Je,[e("div",Ke,[e("div",Qe,[t[22]||(t[22]=e("div",{class:"text-center border-b py-2 font-bold w-full"}," List of Names ",-1)),e("div",{onClick:t[2]||(t[2]=a=>_.value=!_.value),class:"bg-gray-600 hover:bg-white hover:text-gray-600 border-b border-l text-white px-2 py-[8px]"},t[21]||(t[21]=[e("i",{class:"fa fa-close","aria-hidden":"true"},null,-1)]))]),e("div",Xe,[(u(!0),d(T,null,D(L.value,(a,$)=>(u(),d("div",{key:$,class:"text-left lg:px-10 px-2 py-1 bg-gray-100 mb-0.5"},[e("div",null,o(a.lastname)+", "+o(a.firstname)+" "+o(a.middlename),1),e("div",null,o(a.email),1)]))),128))])])])):I("",!0)])],512),[[k,c(z)]])])])])]),e("div",Ze,[te(y)])])}}},nt=oe(et,[["__scopeId","data-v-8253fbd6"]]);export{nt as default};
