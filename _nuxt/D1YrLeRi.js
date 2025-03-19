import{_ as A}from"./ChbiSg5X.js";import{e as F,u as M,r as n,s as q,c as o,a as e,k as _,h as v,m as N,v as k,f as C,d as c,n as u,F as x,l as m,i as P,t as l,b as z,o as a,p as G}from"./wSCKuYEC.js";import{_ as E}from"./5JjjnmY2.js";import{_ as W}from"./DlAUqK2U.js";import"./C5S46NFB.js";const Y={class:"lg:flex min-h-screen"},H={class:"w-full"},J={key:0,class:"w-fit mx-auto flex items-center"},K={key:1},O={class:"w-full lg:p-5 px-2 py-2"},Q={class:"relative"},X={class:""},Z={key:0,class:"lg:grid grid-cols-3 gap-4"},ee={class:"w-full"},te={class:""},se=["onClick"],le={class:"mb-3 text-[10px] font-light"},oe={class:"hover:font-bold"},ae={class:"flex gap-x-3 absolute left-3"},re=["href"],ie=["href"],ne={class:"flex px-2 font-bold justify-center absolute right-0"},de={class:"mx-auto lg:flex justify-center text-white items-center"},ue=["onClick"],ce={class:"text-left px-2"},pe={class:"w-full px-2 py-0.5 border-b"},fe={class:""},ve={class:"px-2 py-0.5 border-b"},ge={class:"px-2 py-0.5"},xe={class:"flex items-center justify-center border-t-4 uppercase"},me={class:"flex gap-x-0.5 w-full"},he={class:"border-y font-bold py-1 px-2 flex items-center justify-center"},_e={class:""},be={class:"flex items-center my-2"},we=["onUpdate:modelValue","onChange"],ye=["onClick"],ke={class:"flex items-center justify-center"},Ce={class:"w-fit mx-auto py-1 flex items-center gap-3"},De={class:"flex items-center gap-x-2 w-full"},Ne=["onUpdate:modelValue","onChange"],Se={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},Ve={class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},Be={class:"flex items-center"},$e={class:"flex gap-10 mr-10"},je={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Le={class:"flex gap-5 mx-auto w-fit my-5"},Re={key:0,class:"italic text-gray-400 text-center p-1 h-screen"},Ie={key:0,class:"w-full z-10 bg-white h-full"},Te={class:"border-4 border-gray-100 shadow-lg"},Ue={class:"flex items-center"},Ae={class:"lg:gap-x-3 lg:text-sm text-xs"},Fe={class:"flex text-left lg:px-4 px-2 py-1 bg-gray-100 mb-0.5 border-b-2 border-gray-600 lg:border-t-0 border-t-2"},Me={class:"w-full"},qe={class:"w-full"},Pe={class:"w-full"},ze={class:"w-full"},Ge={class:"w-full"},Ee={class:"w-full"},We={class:"w-full"},Ye={class:"w-full"},He={class:"w-full"},Je={class:"w-full"},Ke={class:"w-full"},Oe={class:"static bottom-0 w-full"},Qe={__name:"index",async setup(Xe){let h,D;F();const S=M(),V=n(S.mainDevServer),p=n(0);n();const B=n("13579"),b=n("");let $=n(!0);n(!1);let j=n(!1);const L=n(!1);n(null);const f=n(!1),i=n([]);p.value=([h,D]=q(()=>$fetch(V.value+"/api/campus-pass/list").catch(r=>r.data)),h=await h,D(),h||0);const R=r=>{p.value.filter(function(t){r===t.id&&(console.log(t),i.value=t,f.value=!f.value)})},I=()=>{window.print()},w=n(!1),T=()=>{B.value===b.value&&(w.value=!0)};return(r,t)=>{const U=A;return a(),o("div",null,[e("div",Y,[e("div",H,[t[26]||(t[26]=e("div",{class:"bg-green-800"},[e("div",{class:"flex mx-auto justify-between py-2 px-3.5"},[e("a",{href:"/",class:"w-fit mx-auto"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/lsu-w-h.png",class:"lg:h-9 h-8"})])])],-1)),w.value?_("",!0):(a(),o("div",J,[v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>b.value=s),placeholder:"Pin Code",class:"text-center my-3 rounded-bl-md rounded-tl-md px-2 text-lg border shadow-lg border-green-700 w-[100px]",type:"password",maxlength:"5"},null,512),[[N,b.value]]),e("div",{onClick:T,class:"bg-green-800 font-bold text-white text-sm h-fit cursor-pointer px-3 py-[4px] rounded-br-md rounded-tr-md hover:bg-white hover:text-green-800 border border-green-800"}," Go ")])),w.value?(a(),o("div",K,[e("div",O,[v(e("div",null,[e("div",{class:"cursor-pointer w-full flex shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase",onClick:I},t[6]||(t[6]=[e("div",{class:"w-fit mx-auto flex items-center"},[e("span",{class:"w-fit mx-auto block rounded-md text-green-800 px-4 font-bold"},[e("i",{class:"fa fa-print"})]),c(" All Request Lists ")],-1)])),e("div",Q,[e("div",{class:u(["appointment-lists mx-auto text-xs",f.value?"hidden":""])},[e("div",X,[p.value.length>0?(a(),o("div",Z,[(a(!0),o(x,null,m(C(E).orderBy(p.value,"id","asc"),(s,g)=>(a(),o("div",{class:"justify-evenly text-center items-center h-auto lg:mb-0 mb-3 border border-gray-200 shadow",key:g},[e("div",ee,[e("div",{class:u(["flex items-center justify-center border-b relative",s.attendees==="Group"?"pt-[7px] cursor-pointer hover:bg-gray-300 px-5 hover:text-black bg-blue-200":"pt-[14px] "])},[e("div",te,[e("div",{class:"font-bold uppercase w-full",onClick:d=>R(s.id)},[c(l(s.attendees)+" ",1),e("i",{class:u(["fa fa-caret-down text-lg ml-2 -mt-[1px] h-[0px]",s.attendees==="Group"?"text-green-800":"hidden"])},null,2)],8,se),e("div",le,[t[7]||(t[7]=c(" TID: ")),e("span",oe,l(s.tracking_id),1)])]),e("div",ae,[e("a",{href:s.approved_activities_link,target:"_blank",class:u(["font-bold w-full block text-green-800",s.approved_activities_link==="-"?"hidden":""])},t[8]||(t[8]=[e("i",{class:"fa fa-file-pdf text-lg"},null,-1)]),10,re),e("a",{href:s.approved_gso_docs_link,target:"_blank",class:u(["font-bold w-full block text-green-800",s.approved_gso_docs_link==="-"?"hidden":""])},t[9]||(t[9]=[e("i",{class:"fa fa-soccer-ball text-lg"},null,-1)]),10,ie)]),e("div",ne,[e("div",de,[e("button",{onClick:d=>r.toggleDeleteBtn(s.id),class:"text-red-500 hover:text-white hover:bg-red-500 bg-white border border-red-500 px-1.5 py-0.5 rounded-md"},t[10]||(t[10]=[e("i",{class:"fa fa-close rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,ue)])])],2),e("div",ce,[e("div",pe,[e("span",fe,[t[11]||(t[11]=e("i",{class:"fa fa-user mr-2"},null,-1)),c(" "+l(s.incharge_firstname),1)]),e("span",{class:u([{hidden:s.incharge_middlename==="-",hidden:s.incharge_middlename==="n/a",hidden:s.incharge_middlename==="N/A",hidden:s.incharge_middlename===""},"mx-1"])},l(s.incharge_middlename),3),e("span",null,l(s.incharge_lastname),1)]),e("div",ve,[t[12]||(t[12]=e("i",{class:"fa fa-envelope mr-2"},null,-1)),c(" "+l(s.incharge_contact_email),1)]),e("div",ge,[t[13]||(t[13]=e("i",{class:"fa fa-phone mr-2"},null,-1)),c(" "+l(s.incharge_contact_number),1)])]),e("div",xe,[e("ul",me,[(a(!0),o(x,null,m(s.type_of_access,(d,y)=>(a(),o("li",{key:y,class:"shadow px-2 py-0.5 text-[10px] tracking-tighter w-full whitespace-nowrap"},l(d),1))),128))])]),e("div",he,[t[14]||(t[14]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),c(" "+l(s.schedule),1)]),e("div",_e,[e("div",be,[t[16]||(t[16]=e("label",{for:"remarks",class:"px-2 font-bold text-gray-800"},"Remarks:",-1)),v(e("input",{type:"text",class:"border w-full mx-auto py-1 px-1 shadow-sm","onUpdate:modelValue":d=>s.remarks=d,onChange:d=>r.requestChangeRemarks(s.id,s.remarks)},null,40,we),[[N,s.remarks]]),e("button",{onClick:d=>r.editRemarks(s.id),class:"flex text-green-500 hover:text-white hover:bg-green-500 bg-white border border-green-500 px-1 py-1.5 mr-2"},t[15]||(t[15]=[e("i",{class:"fa fa-save rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,ye)])]),e("div",ke,[e("div",{class:u(["flex w-full gap-5",{"bg-red-700":s.approval_status==="declined","bg-gray-700":s.approval_status==="pending","bg-yellow-500":s.approval_status==="for revision","bg-green-900":s.approval_status==="approved"}])},[e("div",Ce,[e("div",De,[t[18]||(t[18]=e("label",{class:"font-bold block text-white"},"Status:",-1)),v(e("select",{"onUpdate:modelValue":d=>s.approval_status=d,name:"borrower_category",class:"shadow block font-bold rounded-md w-fit border px-1 pb-0.5 border-[#e5e7eb] capitalize",required:"",onChange:d=>r.requestChangeStatus(s.id,s.approval_status)},t[17]||(t[17]=[e("option",{value:"approved"},"approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"pending"},"pending",-1),e("option",{value:"for revision"},"for revision",-1)]),40,Ne),[[G,s.approval_status]])])])],2)])])]))),128)),v(e("div",Se,[e("div",Ve,[e("div",Be,[t[19]||(t[19]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Remarks: ",-1)),e("div",$e,[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[1]||(t[1]=(...s)=>r.btnConfirm&&r.btnConfirm(...s))},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[2]||(t[2]=(...s)=>r.btnCloseModal&&r.btnCloseModal(...s))},"no")])])])],512),[[k,L.value]]),v(e("div",je,[t[20]||(t[20]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",Le,[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:t[3]||(t[3]=(...s)=>r.deleteItem&&r.deleteItem(...s))},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:t[4]||(t[4]=(...s)=>r.toggleDeleteBtn&&r.toggleDeleteBtn(...s))},"Cancel")])],512),[[k,C(j)]])])):_("",!0)]),p.value.length===0?(a(),o("div",Re," Please Wait ... ")):(a(),o("div",{key:1,class:u(["italic text-gray-400 text-center p-1 h-screen",p.value.length>0?"hidden":""])}," No Results Found! ",2))],2),f.value?(a(),o("div",Ie,[e("div",Te,[e("div",Ue,[t[22]||(t[22]=e("div",{class:"text-center border-b py-2 font-bold w-full"}," List of Names ",-1)),e("div",{onClick:t[5]||(t[5]=s=>f.value=!f.value),class:"bg-gray-600 hover:bg-white hover:text-gray-600 border-b border-l text-white px-2 py-[8px]"},t[21]||(t[21]=[e("i",{class:"fa fa-caret-left","aria-hidden":"true"},null,-1)]))]),e("div",Ae,[t[25]||(t[25]=P('<div class="flex text-left lg:px-4 px-2 py-1 font-bold bg-gray-700 mb-0.5 border-b-2 border-gray-600 text-white" data-v-e43034ff><div class="w-full" data-v-e43034ff> Full Name </div><div class="w-full" data-v-e43034ff> Email </div><div class="w-full" data-v-e43034ff> Tracking Id </div><div class="w-full" data-v-e43034ff> Type of Access </div><div class="w-full" data-v-e43034ff> Schedule </div><div class="w-full" data-v-e43034ff> Details </div><div class="w-[400px] text-center" data-v-e43034ff> Signature </div></div>',1)),e("div",Fe,[e("div",Me,l(i.value.incharge_firstname)+" "+l(i.value.incharge_lastname),1),e("div",qe,l(i.value.incharge_contact_email),1),e("div",Pe,l(i.value.tracking_id),1),e("div",ze,[(a(!0),o(x,null,m(i.value.type_of_access,(s,g)=>(a(),o("div",{key:g},l(s),1))),128))]),e("div",Ge,l(i.value.schedule),1),e("div",Ee,l(i.value.remarks),1),t[23]||(t[23]=e("div",{class:"w-[400px] text-center"},null,-1))]),(a(!0),o(x,null,m(i.value.name_list,(s,g)=>(a(),o("div",{key:g,class:"flex text-left lg:px-4 px-2 py-1 bg-gray-100 mb-0.5 border-b-2 border-gray-600"},[e("div",We,l(s.firstname)+" "+l(s.lastname),1),e("div",Ye,l(s.email),1),e("div",He,l(i.value.tracking_id),1),(a(!0),o(x,null,m(i.value.type_of_access,(d,y)=>(a(),o("div",{class:"w-full",key:y},l(d),1))),128)),e("div",Je,l(i.value.schedule),1),e("div",Ke,l(i.value.remarks),1),t[24]||(t[24]=e("div",{class:"w-[400px] text-center"},null,-1))]))),128))])])])):_("",!0)])],512),[[k,C($)]])])])):_("",!0)])]),e("div",Oe,[z(U)])])}}},ot=W(Qe,[["__scopeId","data-v-e43034ff"]]);export{ot as default};
