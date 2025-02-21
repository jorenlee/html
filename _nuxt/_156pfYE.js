import{_ as B}from"./BWljSBQe.js";import{_ as S}from"./L5336v4R.js";import{u as F,r as x,E as V,c as a,b as w,y as M,a as e,d,q as P,B as $,n as o,s as E,A as y,F as v,z as _,x as i,o as r,t as l}from"./BLPVfswi.js";import{h as k}from"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as U}from"./DlAUqK2U.js";const Y={class:"bg-gray-50"},L={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 lg:pb-10 w-11/12 mx-auto"},q={class:""},H={class:"lg:p-5 p-2"},G={class:"lg:flex"},O={class:"flex w-fit shadow mx-auto lg:my-7 my-3 text-center lg:rounded-lg rounded-md"},R={key:0,class:"lg:text-sm text-xs text-gray-800 text-center mt-10 mb-5 py-2 px-4 rounded-sm shadow lg:w-6/12 mx-auto"},J={class:"justify-evenly lg:w-10/12 mx-auto text-center items-center h-auto lg:mb-0 mb-3 border border-gray-200 shadow"},K={class:"flex items-center justify-center lg:text-base text-xs"},Q={class:"w-fit mx-auto py-1 flex items-center gap-3"},W={class:"flex items-center gap-x-1 w-full"},X={class:"uppercase font-bold"},Z={class:"w-full"},j={class:"flex items-center justify-center border-b relative"},ee={class:"my-2 font-bold lg:text-sm text-xs"},te={class:"hover:font-bold"},se={class:"lg:flex"},le={class:"w-full"},ae={class:"flex gap-x-0.5 w-full lg:border-0 border-b"},ie={class:"py-1 flex lg:w-full text-center justify-center w-fit mx-auto"},re={class:"lg:flex items-center"},de={class:"w-full"},oe={class:"lg:flex"},ne={class:"w-full text-left lg:px-0 px-2 lg:pb-0 pb-3"},ce={class:"w-full py-0.5 lg:text-xs text-[10px] uppercase"},pe={class:"mr-1"},xe={class:"py-0.5 lg:text-sm text-xs"},ge={class:"py-0.5 lg:text-sm text-xs"},ue={class:"lg:flex border-t lg:my-0 lg:py-0 py-3"},me={class:"py-1 flex items-center justify-center lg:text-sm text-xs lg:px-0 px-2"},fe={class:"flex items-center gap-x-3 w-fit mx-auto my-5 left-3 text-xs"},ve=["href"],_e=["href"],be={key:0},he={class:"w-full lg:border-b px-3 lg:border-x"},we={class:"w-full lg:border-b px-3"},ye={__name:"index",async setup(ke){let u,h;const D=F(),A=x(D.mainDevServer),C=([u,h]=V(()=>$fetch(A.value+"/api/campus-pass/list").catch(c=>c.data)),u=await u,h(),u||0),g=x(""),m=x(),T=x(!1),n=x(!1),z=()=>{let c=g.value;m.value=null,n.value=!1,setTimeout(()=>{g.value="",c.length===18&&(m.value=C.filter(t=>{if(t.tracking_id===c)return t.tracking_id===c}))},500)};return x({incharge_firstname:"",incharge_middlename:"",incharge_lastname:"",incharge_contact_email:"",incharge_contact_number:"",type_of_access:["Urgent Access"],schedule:k().format("MMMM Do YYYY, h:mm:ss a"),approved_activities_link:"",approved_gso_docs_link:"",attendees:"Individual",name_list:[{firstname:"",middlename:"",lastname:"",email:""}],approval_status:"pending",remarks:"",tracking_id:"LSUCP"+k().valueOf()}),(c,t)=>{const I=B,N=S;return r(),a("div",Y,[w(I),t[21]||(t[21]=M('<div class="" data-v-76d40c28><div class="relative" data-v-76d40c28><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-76d40c28><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-76d40c28><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-76d40c28><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-76d40c28> Campus Pass </h1></div><div class="shadow-lg" data-v-76d40c28><div class="w-11/12 mx-auto flex justify-between" data-v-76d40c28><ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-2.5" data-v-76d40c28><li data-v-76d40c28><a href="/" class="mr-1" data-v-76d40c28> Home </a></li><li data-v-76d40c28><i class="fas fa-caret-right mr-1" data-v-76d40c28></i><a href="/campus-pass" class="mr-1" data-v-76d40c28> Campus Pass </a></li><li data-v-76d40c28><i class="fas fa-caret-right mr-1" data-v-76d40c28></i><a href="/campus-pass/track" class="mr-1" data-v-76d40c28> Track </a></li></ul><ul class="flex hover:text-green-800 text-white" data-v-76d40c28><li class="px-3 h-full flex items-center capitalize text-xs" data-v-76d40c28><a href="/_/campus-pass-admin" class="flex items-center" data-v-76d40c28></a></li><li class="hover:bg-green-800 bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-76d40c28><a href="/_/campus-pass-admin" class="flex items-center" data-v-76d40c28><i class="fa fa-user" aria-hidden="true" data-v-76d40c28></i></a></li></ul></div></div></div></div>',1)),e("div",null,[e("div",null,[e("div",L,[t[20]||(t[20]=e("div",{class:""},[e("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},[e("i",{class:"fa fa-certificate text-white mr-2"}),d(" Campus Pass Tracker ")])],-1)),e("div",q,[e("div",H,[e("div",G,[e("div",O,[P(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-md rounded-bl-md lg:text-sm text-xs",placeholder:"Transaction ID","onUpdate:modelValue":t[0]||(t[0]=s=>E(g)?g.value=s:null),required:"",maxlength:"18"},null,512),[[$,o(g)]]),e("button",{onClick:t[1]||(t[1]=s=>z()),class:"lg:px-5 px-2 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap lg:rounded-tr-lg lg:rounded-br-lg rounded-tr-md rounded-br-md lg:text-lg text-xs"},t[4]||(t[4]=[e("i",{class:"fa fa-search"},null,-1),d(" Track ")]))])]),o(T)?(r(),a("div",R," Can't Find Tracking ID! ")):y("",!0)])]),(r(!0),a(v,null,_(o(m),(s,b)=>(r(),a("div",{class:"",key:b},[e("div",J,[e("div",K,[e("div",{class:i(["flex w-full gap-5",{"bg-red-700 text-white":s.approval_status==="declined","bg-gray-700 text-white":s.approval_status==="pending","bg-yellow-500 text-black":s.approval_status==="for revision","bg-green-900 text-white":s.approval_status==="approved"}])},[e("div",Q,[e("div",W,[e("span",X,l(s.approval_status),1),e("span",{class:i([s.remarks==="N/A"?"hidden":"",""])}," : "+l(s.remarks),3)])])],2)]),e("div",Z,[e("div",j,[e("div",null,[e("div",ee,[t[5]||(t[5]=d(" TID: ")),e("span",te,l(s.tracking_id),1)])])]),e("div",se,[e("div",le,[e("div",{class:i(["lg:flex items-center capitalize whitespace-nowrap",s.approved_activities_link==="-"||s.approved_gso_docs_link==="-"?"":"border-b"])},[t[6]||(t[6]=e("div",{class:"flex items-center justify-center"},[e("span",{class:"lg:px-3.5 px-2.5 lg:text-sm text-xs lg:py-0 py-1"},"Access Type:"),e("i",{class:"text-md lg:ml-2.5 fa fa-universal-access mr-2"})],-1)),e("ul",ae,[(r(!0),a(v,null,_(s.type_of_access,(p,f)=>(r(),a("li",{key:f,class:i(["lg:py-1 lg:text-sm text-[10px] whitespace-nowrap capitalize lg:border-t-0 border-t lg:w-fit w-full",f===0?"border-0 lg:pr-3 pr-2 pl-2 lg:pl-1":"border-l lg:px-3 px-2"])},[e("span",ie,l(p),1)],2))),128))])],2),e("div",re,[e("div",de,[e("div",oe,[t[10]||(t[10]=e("div",{class:"lg:pl-3 pl-2 lg:pr-5 pr-4 whitespace-nowrap lg:text-sm text-xs lg:py-0 py-3"}," Processed By: ",-1)),e("div",ne,[e("div",ce,[e("span",pe,[t[7]||(t[7]=e("i",{class:"fa fa-user ml-0.5 mr-2"},null,-1)),d(" "+l(s.incharge_firstname),1)]),e("span",{class:i([[s.incharge_middlename==="N/A"||s.incharge_middlename===""||s.incharge_middlename==="-"?"hidden":""],"mr-1"])},l(s.incharge_middlename),3),e("span",null,l(s.incharge_lastname),1)]),e("div",xe,[t[8]||(t[8]=e("i",{class:"fa fa-envelope mr-2 lg:mt-1"},null,-1)),d(" "+l(s.incharge_contact_email),1)]),e("div",ge,[t[9]||(t[9]=e("i",{class:"fa fa-phone mr-1"},null,-1)),d(" "+l(s.incharge_contact_number),1)])])]),e("div",ue,[t[12]||(t[12]=e("div",{class:"lg:px-3 px-2 lg:text-sm text-xs"}," Date of Access: ",-1)),e("div",me,[t[11]||(t[11]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),d(" "+l(s.schedule),1)])])])])]),e("div",{class:i(["lg:w-7/12 w-full border-l",s.approved_activities_link==="-"||s.approved_gso_docs_link==="-"?"hidden":"lg:border-t-0 border-t lg:pt-1 pt-4"])},[t[15]||(t[15]=e("div",{class:"whitespace-nowrap lg:text-left px-2 lg:pt-1 lg:text-sm text-xs text-center"}," Supplementary Document: ",-1)),e("div",fe,[e("a",{href:s.approved_activities_link,target:"_blank",class:i(["font-bold w-full block text-green-800",s.approved_activities_link==="-"?"hidden":""])},t[13]||(t[13]=[e("i",{class:"fa fa-file-pdf text-xl"},null,-1),e("span",{class:"block"},[d("Approved "),e("br"),d(" Activity ")],-1)]),10,ve),e("a",{href:s.approved_gso_docs_link,target:"_blank",class:i(["font-bold w-full block text-green-800",s.approved_gso_docs_link==="-"?"hidden":""])},t[14]||(t[14]=[e("i",{class:"fa fa-file-pdf text-xl"},null,-1),e("span",{class:"block"},"Approved Booking",-1)]),10,_e)])],2)])])]),e("div",{class:i([s.attendees==="Group"?"":"hidden","lg:pt-5 pt-2 pb-5"])},[e("div",{class:i([o(n)?"hidden":"","px-3 py-2 w-fit mx-auto cursor-pointer"]),onClick:t[2]||(t[2]=p=>n.value=!o(n))},t[16]||(t[16]=[e("i",{class:"fa fa-angle-double-down text-4xl text-center"},null,-1)]),2)],2)]))),128)),o(n)?(r(),a("div",be,[(r(!0),a(v,null,_(o(m),(s,b)=>(r(),a("div",{class:"shadow overflow-y-scroll h-32 border-t-2 lg:w-10/12 mx-auto",key:b},[t[17]||(t[17]=e("div",{class:"bg-gray-200 uppercase text-center text-sm font-bold py-1"}," Entry List ",-1)),t[18]||(t[18]=e("div",{class:"w-full lg:flex hidden"},[e("div",{class:"w-full font-bold border-b-2 border-black px-3"}," Full Name "),e("div",{class:"w-full font-bold border-b-2 border-black px-3 lg:border-l"}," Email ")],-1)),(r(!0),a(v,null,_(s.name_list,(p,f)=>(r(),a("div",{key:f,class:"w-full lg:flex lg:border-b border lg:text-sm text-[10px] lg:py-0 py-2"},[e("div",he,l(p.firstname)+" "+l(p.lastname),1),e("div",we,l(p.email),1)]))),128))]))),128))])):y("",!0),e("div",{class:i([o(n)?"":"hidden","cursor-pointer w-fit mx-auto block pt-5 pb-5"]),onClick:t[3]||(t[3]=s=>n.value=!o(n))},t[19]||(t[19]=[e("i",{class:"fa fa-angle-double-up text-4xl text-center"},null,-1)]),2)])])]),w(N)])}}},Ne=U(ye,[["__scopeId","data-v-76d40c28"]]);export{Ne as default};
