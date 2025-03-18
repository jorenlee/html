import{_ as q}from"./BxTHoL7b.js";import{e as F,u as H,r as n,g as W,c as r,a as e,h,v as w,f as d,i as Y,t as o,j as D,n as v,k as A,F as C,l as T,b as J,o as c,d as x,m as K,p as Q}from"./h7LtFIAY.js";import"./C5S46NFB.js";import{_ as X}from"./5JjjnmY2.js";import{_ as Z}from"./DlAUqK2U.js";const ee={class:"lg:flex min-h-screen"},te={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},ae={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},se={class:"flex items-center w-full px-2"},le={class:"text-sm"},oe={class:"w-full"},ie={class:"bg-green-800"},ne={class:"flex mx-auto justify-between py-2 px-3.5"},re={class:"w-full lg:p-5 px-2 py-2"},de={class:"relative"},ce={class:""},ue={key:0,class:"lg:grid grid-cols-3 gap-4"},pe={class:"w-full"},ve={class:""},fe=["onClick"],me={class:"mb-3 text-[10px] font-light"},ge={class:"hover:font-bold"},he={class:"flex gap-x-3 absolute left-3"},xe=["href"],_e=["href"],be={class:"flex px-2 font-bold justify-center absolute right-0"},we={class:"mx-auto lg:flex justify-center text-white items-center"},ye=["onClick"],ke={class:"text-left px-2"},Ce={class:"w-full px-2 py-0.5 border-b"},Te={class:""},$e={class:"px-2 py-0.5 border-b"},Se={class:"px-2 py-0.5"},je={class:"flex items-center justify-center border-t-4 uppercase"},De={class:"flex gap-x-0.5 w-full"},Ae={class:"border-y font-bold py-1 px-2 flex items-center justify-center"},Ne={class:""},Le={class:"flex items-center my-2"},ze=["onUpdate:modelValue","onChange"],Pe=["onClick"],Re={class:"flex items-center justify-center"},Ue={class:"w-fit mx-auto py-1 flex items-center gap-3"},Ve={class:"flex items-center gap-x-2 w-full"},Ie=["onUpdate:modelValue","onChange"],Me={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},Ge={class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},Be={class:"flex items-center"},Ee={class:"flex gap-10 mr-10"},Oe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},qe={key:0,class:"italic text-gray-400 text-center p-1 h-screen"},Fe={key:0,class:"w-full z-10 bg-white h-full"},He={class:"border-4 border-gray-100 shadow-lg"},We={class:"flex items-center"},Ye={class:"lg:grid grid-cols-4 lg:gap-x-3 lg:text-sm text-xs"},Je={class:"static bottom-0 w-full"},Ke={__name:"index",setup(Qe){const y=F(),m=H(),u=n(m.mainDevServer),f=n(0);let $=n();n();let N=n(!0),i=n(!1),_=n(!1);const L=n(!1),s=n(null),g=n(!1),S=n([]);W(()=>{setTimeout(async()=>{m.user.isAuthenticated&&(m.user.email==="jorenleeluna24@gmail.com"||m.user.email==="esmael.larubis@lsu.edu.ph")?(f.value=await $fetch(u.value+"/api/campus-pass/list").catch(l=>l.data)||0,y.push("/_/panels/campus-security"),console.log(f.value)):y.push("/_/unauthorized")},5e3)});const z=async(l,t)=>{s.value=await $fetch(u.value+"/api/campus-pass/"+l+"/").catch(b=>b.data),s.value.approval_status=t,console.log(s.value),U(l)},P=async(l,t)=>{s.value=await $fetch(u.value+"/api/campus-pass/"+l+"/").catch(b=>b.data),s.value.remarks=t,console.log(s.value)},R=async l=>{s.value.remarks===""||s.value.remarks===null?s.value.remarks="N/A":await $fetch(u.value+"/api/campus-pass/"+l+"/edit/",{method:"PUT",body:s.value}).then(t=>{console.log("response",t),console.log(s.value)})},U=async l=>{await $fetch(u.value+"/api/campus-pass/"+l+"/edit/",{method:"PUT",body:s.value}).then(t=>{console.log("response",t),console.log(s.value),s.value.approval_status==="approved"&&V(),s.value.approval_status==="declined"&&I(),s.value.approval_status==="for revision"&&M()})},V=async()=>{await $fetch(u.value+"/api/campus-pass/to-gmail-approved/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},I=async()=>{await $fetch(u.value+"/api/campus-pass/to-gmail-declined/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},M=async()=>{await $fetch(u.value+"/api/campus-pass/to-gmail-for-revision/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:s.value.incharge_firstname,incharge_contact_email:s.value.incharge_contact_email,schedule:s.value.schedule,approval_status:s.value.approval_status,remarks:s.value.remarks,tracking_id:s.value.tracking_id}}).then(l=>{console.log(l)})},j=l=>{_.value=!_.value,$.value=l},G=async()=>{await $fetch(u.value+"/api/campus-pass/"+$.value+"/delete/",{method:"DELETE",headers:{Authorization:m.user.token,"Content-Type":"application/json"}}).then(async l=>{console.log("response",l),f.value=await $fetch(u.value+"/api/campus-pass/list").catch(t=>t.data)||0,_.value=!_.value})},B=l=>{f.value.filter(function(t){l===t.id&&(console.log(t),S.value=t.name_list,g.value=!g.value)})},E=()=>{m.removeToken(),y.push("/_/campus-pass-admin")};return(l,t)=>{const b=q;return c(),r("div",null,[e("div",ee,[h(e("div",te,[e("div",ae,[e("div",se,[t[5]||(t[5]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",le,o(d(m).user.email),1)]),e("div",{onClick:t[0]||(t[0]=a=>D(i)?i.value=!d(i):i=!d(i)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:v(["fa text-3xl text-white",d(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[6]||(t[6]=Y('<div class="" data-v-e1432593><div class="w-fit mx-auto mt-5 mb-3" data-v-e1432593><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG" class="lg:w-24 w-20 mx-auto" data-v-e1432593></div><div class="text-center" data-v-e1432593><h1 class="font-bold text-green-800 text-2xl" data-v-e1432593>Dashboard</h1></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-e1432593><a href="/_/panels/campus-security" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-black hover:bg-black hover:text-white" data-v-e1432593><i class="fa fa-list mr-3" aria-hidden="true" data-v-e1432593></i> All Request Lists </a><a href="/_/panels/campus-security/pending" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-gray-900 hover:bg-gray-900 hover:text-white" data-v-e1432593><i class="fa fa-clock mr-0.5" aria-hidden="true" data-v-e1432593></i> Pending </a><a href="/_/panels/campus-security/declined" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-red-900 hover:bg-red-900 hover:text-white" data-v-e1432593><i class="fa fa-ban mr-0.5" aria-hidden="true" data-v-e1432593></i> Declined </a><a href="/_/panels/campus-security/inprogress" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-yellow-600 hover:bg-yellow-600 hover:text-white" data-v-e1432593><i class="fa fa-adjust mr-0.5" aria-hidden="true" data-v-e1432593></i> In Progress </a><a href="/_/panels/campus-security/approved" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-e1432593><i class="fa fa-check" aria-hidden="true" data-v-e1432593></i> Approved </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-e1432593><i class="fa fa-globe mr-3" aria-hidden="true" data-v-e1432593></i> LSU HOME PAGE </a></div></div>',1))],512),[[w,d(i)]]),e("div",oe,[e("div",ie,[e("div",ne,[e("div",{onClick:t[1]||(t[1]=a=>D(i)?i.value=!d(i):i=!d(i)),class:"w-10 px-1.5"},[e("i",{class:v(["fa text-3xl text-white",d(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("button",{onClick:E,class:"flex hover:font-bold pt-1"},t[7]||(t[7]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",re,[h(e("div",null,[t[24]||(t[24]=e("div",{class:"w-full shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase"}," All Request Lists ",-1)),e("div",de,[e("div",{class:v(["appointment-lists mx-auto text-xs",g.value?"hidden":""])},[e("div",ce,[f.value.length>0?(c(),r("div",ue,[(c(!0),r(C,null,T(d(X).orderBy(f.value,"id","asc"),(a,k)=>(c(),r("div",{class:"justify-evenly text-center items-center h-auto lg:mb-0 mb-3 border border-gray-200 shadow",key:k},[e("div",pe,[e("div",{class:v(["flex items-center justify-center border-b relative",a.attendees==="Group"?"pt-[7px] cursor-pointer hover:bg-gray-300 px-5 hover:text-black bg-blue-200":"pt-[14px] "])},[e("div",ve,[e("div",{class:"font-bold uppercase w-full",onClick:p=>B(a.id)},[x(o(a.attendees)+" ",1),e("i",{class:v(["fa fa-caret-down text-lg ml-2 -mt-[1px] h-[0px]",a.attendees==="Group"?"text-green-800":"hidden"])},null,2)],8,fe),e("div",me,[t[8]||(t[8]=x(" TID: ")),e("span",ge,o(a.tracking_id),1)])]),e("div",he,[e("a",{href:a.approved_activities_link,target:"_blank",class:v(["font-bold w-full block text-green-800",a.approved_activities_link==="-"?"hidden":""])},t[9]||(t[9]=[e("i",{class:"fa fa-file-pdf text-lg"},null,-1)]),10,xe),e("a",{href:a.approved_gso_docs_link,target:"_blank",class:v(["font-bold w-full block text-green-800",a.approved_gso_docs_link==="-"?"hidden":""])},t[10]||(t[10]=[e("i",{class:"fa fa-soccer-ball text-lg"},null,-1)]),10,_e)]),e("div",be,[e("div",we,[e("button",{onClick:p=>j(a.id),class:"text-red-500 hover:text-white hover:bg-red-500 bg-white border border-red-500 px-1.5 py-0.5 rounded-md"},t[11]||(t[11]=[e("i",{class:"fa fa-close rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,ye)])])],2),e("div",ke,[e("div",Ce,[e("span",Te,[t[12]||(t[12]=e("i",{class:"fa fa-user mr-2"},null,-1)),x(" "+o(a.incharge_firstname),1)]),e("span",{class:v([{hidden:a.incharge_middlename==="-",hidden:a.incharge_middlename==="n/a",hidden:a.incharge_middlename==="N/A",hidden:a.incharge_middlename===""},"mx-1"])},o(a.incharge_middlename),3),e("span",null,o(a.incharge_lastname),1)]),e("div",$e,[t[13]||(t[13]=e("i",{class:"fa fa-envelope mr-2"},null,-1)),x(" "+o(a.incharge_contact_email),1)]),e("div",Se,[t[14]||(t[14]=e("i",{class:"fa fa-phone mr-2"},null,-1)),x(" "+o(a.incharge_contact_number),1)])]),e("div",je,[e("ul",De,[(c(!0),r(C,null,T(a.type_of_access,(p,O)=>(c(),r("li",{key:O,class:"shadow px-2 py-0.5 text-[10px] tracking-tighter w-full whitespace-nowrap"},o(p),1))),128))])]),e("div",Ae,[t[15]||(t[15]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),x(" "+o(a.schedule),1)]),e("div",Ne,[e("div",Le,[t[17]||(t[17]=e("label",{for:"remarks",class:"px-2 font-bold text-gray-800"},"Remarks:",-1)),h(e("input",{type:"text",class:"border w-full mx-auto py-1 px-1 shadow-sm","onUpdate:modelValue":p=>a.remarks=p,onChange:p=>P(a.id,a.remarks)},null,40,ze),[[K,a.remarks]]),e("button",{onClick:p=>R(a.id),class:"flex text-green-500 hover:text-white hover:bg-green-500 bg-white border border-green-500 px-1 py-1.5 mr-2"},t[16]||(t[16]=[e("i",{class:"fa fa-save rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,Pe)])]),e("div",Re,[e("div",{class:v(["flex w-full gap-5",{"bg-red-700":a.approval_status==="declined","bg-gray-700":a.approval_status==="pending","bg-yellow-500":a.approval_status==="for revision","bg-green-900":a.approval_status==="approved"}])},[e("div",Ue,[e("div",Ve,[t[19]||(t[19]=e("label",{class:"font-bold block text-white"},"Status:",-1)),h(e("select",{"onUpdate:modelValue":p=>a.approval_status=p,name:"borrower_category",class:"shadow block font-bold rounded-md w-fit border px-1 pb-0.5 border-[#e5e7eb] capitalize",required:"",onChange:p=>z(a.id,a.approval_status)},t[18]||(t[18]=[e("option",{value:"approved"},"approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"pending"},"pending",-1),e("option",{value:"for revision"},"for revision",-1)]),40,Ie),[[Q,a.approval_status]])])])],2)])])]))),128)),h(e("div",Me,[e("div",Ge,[e("div",Be,[t[20]||(t[20]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Remarks: ",-1)),e("div",Ee,[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[2]||(t[2]=(...a)=>l.btnConfirm&&l.btnConfirm(...a))},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[3]||(t[3]=(...a)=>l.btnCloseModal&&l.btnCloseModal(...a))},"no")])])])],512),[[w,L.value]]),h(e("div",Oe,[t[21]||(t[21]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:G},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:j},"Cancel")])],512),[[w,d(_)]])])):A("",!0)]),f.value.length===0?(c(),r("div",qe," Please Wait ... ")):(c(),r("div",{key:1,class:v(["italic text-gray-400 text-center p-1 h-screen",f.value.length>0?"hidden":""])}," No Results Found! ",2))],2),g.value?(c(),r("div",Fe,[e("div",He,[e("div",We,[t[23]||(t[23]=e("div",{class:"text-center border-b py-2 font-bold w-full"}," List of Names ",-1)),e("div",{onClick:t[4]||(t[4]=a=>g.value=!g.value),class:"bg-gray-600 hover:bg-white hover:text-gray-600 border-b border-l text-white px-2 py-[8px]"},t[22]||(t[22]=[e("i",{class:"fa fa-close","aria-hidden":"true"},null,-1)]))]),e("div",Ye,[(c(!0),r(C,null,T(S.value,(a,k)=>(c(),r("div",{key:k,class:"text-left lg:px-10 px-2 py-1 bg-gray-100 mb-0.5"},[e("div",null,o(a.lastname)+", "+o(a.firstname)+" "+o(a.middlename),1),e("div",null,o(a.email),1)]))),128))])])])):A("",!0)])],512),[[w,d(N)]])])])])]),e("div",Je,[J(b)])])}}},st=Z(Ke,[["__scopeId","data-v-e1432593"]]);export{st as default};
