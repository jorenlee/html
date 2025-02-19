import{_ as ee}from"./B8WyS218.js";import{_ as te}from"./BI3HLUyk.js";import{r as p,u as le,I as se,c as r,b as S,y as F,a as e,d as a,q as i,B as b,J as _,x as g,v as ae,n as oe,A as m,H as P,F as G,z as I,G as de,o as n,t as y}from"./DshvmW_w.js";import{_ as re}from"./5JjjnmY2.js";import{X as ne}from"./BX7iWjEv.js";import{h as k}from"./C5S46NFB.js";import{_ as ie}from"./DlAUqK2U.js";const pe={class:"bg-gray-50"},ue={key:0},ge={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 w-11/12 mx-auto"},me={class:""},xe={class:"lg:p-5 px-2 pt-3 pb-2 gap-3"},ce={class:"w-full lg:mb-0 mb-5"},be={class:"w-full gap-3"},ve={class:"gap-3 w-full"},fe={class:"lg:flex gap-3 lg:mb-2 w-full mx-auto"},he={class:"flex lg:gap-x-2 gap-x-1 w-full"},we={class:"w-full mb-2"},_e={class:"w-full mb-2 block"},ye={class:"lg:w-10/12 w-full mb-2"},ke={class:"lg:w-7/12 w-full mb-2"},De={class:"lg:flex gap-3 w-full mx-auto"},Ae={class:"lg:w-fit mb-2"},Ce={class:"w-full"},Ve={class:"lg:flex gap-x-3 w-full px-3 lg:px-0 mx-auto lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},Ne={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Ue={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Se={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Fe={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Te={class:"lg:flex mb-2 w-full"},Le={class:"lg:block w-full lg:shadow-none border-green-500"},Oe={class:"w-full shadow-lg border-gray-200"},$e={class:"border-b-2 border-green-700"},Me={class:"w-full mx-auto lg:bg-white shadow-2xl lg:border-2 lg:my-4 my-3"},Pe={key:0,class:"border-y bg-white"},Ge={class:"w-full lg:flex gap-3"},Ie={key:0,class:"w-full lg:mb-4 lg:mt-0 my-3 mx-auto"},qe={key:1,class:"w-full lg:mb-4 mb-3 mx-auto"},Be={class:"flex w-full gap-x-1"},ze={class:"w-full"},Ee={class:"flex justify-center py-2 text-center shadow-xl lg:border-x lg:border-t text-xs lg:block font-bold lg:pb-[6px] lg:pt-[6px] lg:border w-full hover:bg-green-700 border-green-700 hover:text-white text-green-800",for:"individual"},Ye={class:"flex items-center w-fit mx-auto"},Re={class:"w-full"},He={class:"flex justify-center py-2 text-center shadow-xl lg:border-x lg:border-t text-xs lg:block font-bold lg:pb-[6px] lg:pt-[6px] lg:border w-full hover:bg-green-700 border-green-700 hover:text-white text-green-800",for:"group"},Xe={class:"flex items-center w-fit mx-auto"},Je={key:1,class:"lg:py-5 py-3 lg:px-5"},Ke={key:0},Qe={class:"border mx-auto lg:w-fit w-[250px] mt-5 shadow"},We={key:0},Ze={class:"w-full flex"},je={class:"lg:w-6/12 w-full flex lg:border lg:px-3"},et={key:1,class:"w-11/12 mx-auto text-xs text-center mt-3"},tt={key:1,class:"gap-10 lg:px-0 px-2"},lt={class:"flex items-center justify-between"},st={class:"lg:text-[9px] text-[8px] lg:mr-3 mr-2 font-bold text-white bg-green-800 lg:px-[7px] px-1.5 py-1 h-5 lg:w-5 w-4 rounded-full mt-3"},at={class:"lg:flex lg:gap-3 gap-1.5 w-full"},ot={class:"w-full flex gap-x-1 lg:mb-0 mb-1"},dt={class:"w-full lg:mt-0 mt-1"},rt={class:"flex gap-3"},nt=["onUpdate:modelValue"],it={class:"w-full"},pt={class:"flex gap-3"},ut=["onUpdate:modelValue"],gt={class:"w-full"},mt={class:"flex gap-3"},xt=["onUpdate:modelValue"],ct=["onClick"],bt={key:0,class:"my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"},vt={key:1,class:""},ft={__name:"index",setup(ht){const q=p(!1),B=le(),T=p(B.mainDevServer),L=p(!0),O=p(!1),$=p(),D=p(1),A=p(!1),C=p(!1),z=()=>{A.value=!0,C.value=!1,l.value.name_list=[{firstname:"",middlename:"-",lastname:"",email:""}]},E=()=>{A.value=!1,C.value=!0,v.value=null},Y=se(()=>{const o=new Date,t=new Date(o);t.setDate(t.getDate()+1);const d=new Date(t);d.setDate(d.getDate()+1);const u=new Date(d);return u.setDate(u.getDate()+1),[t,d,$.value=u]}),V=p(!1),N=p(),R=o=>{let t=k(o[0]).format("LL"),d=k(o[1]).format("LL");l.value.schedule=t+" to "+d,console.log("range:",l.value.schedule),t===d&&(l.value.schedule=t,console.log("solo:",l.value.schedule))},H=p(null),v=p(null),X=o=>{const t=o.target.files[0];if(!t){console.error("No file selected.");return}const d=new FileReader;d.onload=u=>{const s=u.target.result;v.value=J(s),console.log("Parsed CSV Data:",v.value)},d.onerror=u=>{console.error("Error reading file:",u)},d.readAsText(t)};function J(o){const t=[],d=o.split(/\r\n|\n/);if(d.length<=1)return[];const u=d[0].split(",");for(let s=1;s<d.length-1;s++){const f=d[s].split(","),c={};for(let h=0;h<u.length;h++)c[u[h].trim()]=f[h]?f[h].trim():"";t.push(c)}return t}const l=p({incharge_firstname:"",incharge_middlename:"-",incharge_lastname:"",incharge_contact_email:"",incharge_contact_number:"",type_of_access:["Urgent Access"],schedule:k().format("MMMM Do YYYY, h:mm:ss a"),approved_activities_link:"",approved_gso_docs_link:"",attendees:"Individual",name_list:[{firstname:"",middlename:"-",lastname:"",email:""}],approval_status:"pending",remarks:"",tracking_id:"LSUCP"+k().valueOf()}),U=p(!1),x=p(!1),K=async o=>{l.value.name_list.push({firstname:o.firstname,middlename:"-",lastname:o.lastname,email:o.email})},Q=o=>{l.value.name_list.length>0&&re.pull(l.value.name_list,o)},w=()=>{console.log(l.value.type_of_access),l.value.type_of_access.includes("Day Access")||l.value.type_of_access.includes("Night Access")||l.value.type_of_access.includes("Overnight")?(x.value=!0,V.value=!0):l.value.type_of_access.length===0?l.value.type_of_access=["Urgent Access"]:(x.value=!1,V.value=!1)},W=()=>{v.value!==null&&(l.value.name_list=v.value),console.log(l.value),Z()},Z=async()=>{l.value.remarks="N/A",l.value.date===""&&console.log("Please Input Date!"),l.value.approved_activities_link===""&&(l.value.approved_activities_link="-"),l.value.approved_gso_docs_link===""&&(l.value.approved_gso_docs_link="-"),l.value.incharge_middlename===""?l.value.incharge_middlename="N/A":D.value===1&&(D.value=0,await $fetch(T.value+"/api/campus-pass/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:l.value}).then(o=>{L.value=!1,O.value=!0,D.value=0,console.log(o),j()}))},M=()=>{l.value.attendees==="Individual"&&(U.value=!1,l.value.name_list=[{firstname:"",middlename:"-",lastname:"",email:""}]),l.value.attendees==="Group"&&(U.value=!0)},j=async()=>{await $fetch(T.value+"/api/campus-pass/to-gmail-pending/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:l.value.incharge_firstname,incharge_contact_email:l.value.incharge_contact_email,schedule:l.value.schedule,approval_status:l.value.approval_status,remarks:l.value.remarks,tracking_id:l.value.tracking_id}}).then(o=>{console.log(o)})};return(o,t)=>{const d=ee,u=te;return n(),r("div",pe,[S(d),t[49]||(t[49]=F('<div class="" data-v-eded5ab5><div class="relative" data-v-eded5ab5><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-eded5ab5><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-eded5ab5><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-eded5ab5><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-eded5ab5> Campus Pass </h1></div><div class="shadow-lg" data-v-eded5ab5><div class="w-11/12 mx-auto flex justify-between" data-v-eded5ab5><ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-2.5" data-v-eded5ab5><li data-v-eded5ab5><a href="/" class="mr-1" data-v-eded5ab5> Home </a></li><li data-v-eded5ab5><i class="fas fa-caret-right mr-1" data-v-eded5ab5></i><a href="/campus-pass" class="mr-1" data-v-eded5ab5> Campus Pass Form </a></li></ul><ul class="flex hover:text-green-800 text-white" data-v-eded5ab5><li class="px-3 h-full flex items-center capitalize text-xs" data-v-eded5ab5><a href="/_/campus-pass-admin" class="flex items-center" data-v-eded5ab5></a></li><li class="hover:bg-green-800 bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-eded5ab5><a href="/_/campus-pass-admin" class="flex items-center" data-v-eded5ab5><i class="fa fa-user" aria-hidden="true" data-v-eded5ab5></i></a></li></ul></div></div></div></div>',1)),L.value?(n(),r("div",ue,[e("form",{onSubmit:de(W,["prevent"])},[e("div",ge,[e("div",me,[t[46]||(t[46]=e("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},[e("i",{class:"fa fa-address-card text-white mr-2"}),a(" Campus Pass Entry Form ")],-1)),e("div",xe,[e("div",ce,[e("div",be,[e("div",ve,[e("div",fe,[e("div",he,[e("div",we,[t[20]||(t[20]=e("label",{class:"text-gray-900 pb-2 font-bold"},[e("i",{class:"lg:text-md text-xs ml-1 mr-1.5 fa fa-id-badge text-green-800"}),e("span",{class:"lg:text-xs text-[10px]"},[a("First Name"),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),i(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"First Name","onUpdate:modelValue":t[0]||(t[0]=s=>l.value.incharge_firstname=s),required:""},null,512),[[b,l.value.incharge_firstname]])]),e("div",_e,[t[21]||(t[21]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[a(" Last Name"),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),i(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Last Name","onUpdate:modelValue":t[1]||(t[1]=s=>l.value.incharge_lastname=s),required:""},null,512),[[b,l.value.incharge_lastname]])])]),e("div",ye,[t[22]||(t[22]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 lg:block lg:pb-1 pb-2 font-bold"},[e("i",{class:"text-md mr-1 ml-1 fa fa-envelope text-green-800"}),a(" Contact Email"),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),i(e("input",{type:"email",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"e.g sample@lsu.edu.ph","onUpdate:modelValue":t[2]||(t[2]=s=>l.value.incharge_contact_email=s),required:""},null,512),[[b,l.value.incharge_contact_email]])]),e("div",ke,[t[23]||(t[23]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 lg:block lg:pb-1 pb-2 font-bold"},[e("i",{class:"text-md mr-1 ml-1 fa fa-phone text-green-800"}),a(" Contact Number"),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),i(e("input",{type:"tel",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",required:"",pattern:"((^(\\+)(\\d){12}$)|(^\\d{11}$))",id:"incharge_contact_number",name:"incharge_contact_number",placeholder:"e.g +639201004020","onUpdate:modelValue":t[3]||(t[3]=s=>l.value.incharge_contact_number=s),maxlength:"13"},null,512),[[b,l.value.incharge_contact_number]])])]),e("div",De,[e("div",Ae,[e("div",Ce,[t[28]||(t[28]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 lg:block pb-1.5 font-bold"},[e("i",{class:"text-md mr-1 ml-1 fa fa-universal-access text-green-800"}),a(" Access Type"),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),e("div",Ve,[e("div",Ne,[i(e("input",{type:"checkbox",value:"Urgent Access","onUpdate:modelValue":t[4]||(t[4]=s=>l.value.type_of_access=s),onChange:t[5]||(t[5]=s=>w()),class:"mr-1",id:"UrgentAccess"},null,544),[[_,l.value.type_of_access]]),t[24]||(t[24]=e("label",{for:"UrgentAccess"},[e("span",{class:"font-bold mr-1"},"Urgent Access"),e("span",{class:"capitalize text-[10px] lg:ml-0 ml-1"},"(Accompanied By Guard)")],-1))]),e("div",Ue,[i(e("input",{type:"checkbox",value:"Day Access","onUpdate:modelValue":t[6]||(t[6]=s=>l.value.type_of_access=s),onChange:t[7]||(t[7]=s=>w()),class:"mr-1",id:"DayAccess"},null,544),[[_,l.value.type_of_access]]),t[25]||(t[25]=e("label",{for:"DayAccess"},[e("span",{class:"font-bold mr-1"},"Day Access"),e("span",{class:"uppercase text-[10px] lg:ml-0 ml-1"},"(3am - 6pm)")],-1))]),e("div",Se,[i(e("input",{type:"checkbox",value:"Night Access","onUpdate:modelValue":t[8]||(t[8]=s=>l.value.type_of_access=s),class:"mr-1",id:"NightAccess",onChange:t[9]||(t[9]=s=>w())},null,544),[[_,l.value.type_of_access]]),t[26]||(t[26]=e("label",{for:"NightAccess"},[e("span",{class:"font-bold mr-1"},"Night Access"),e("span",{class:"uppercase text-[10px] lg:ml-0 ml-1"},"(6pm - 10pm)")],-1))]),e("div",Fe,[i(e("input",{type:"checkbox",value:"Overnight","onUpdate:modelValue":t[10]||(t[10]=s=>l.value.type_of_access=s),onChange:t[11]||(t[11]=s=>w()),class:"mr-1",id:"Overnight"},null,544),[[_,l.value.type_of_access]]),t[27]||(t[27]=e("label",{for:"Overnight"},[e("span",{class:"font-bold mr-1"},"Overnight Access"),e("span",{class:"uppercase text-[10px] lg:ml-0 ml-1"},"(10 pm - 6am)")],-1))])])])]),e("div",{class:g(["lg:min-w-[260px]",V.value?"":"hidden"])},[i(e("div",Te,[e("div",Le,[t[29]||(t[29]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 lg:block pb-1.5 lg:w-auto w-6/12 whitespace-nowrap lg:mr-0 mr-3 font-bold"},[e("i",{class:"text-md mr-1 ml-1 fa fa-calendar text-green-800"}),a(" Schedule "),e("span",{class:"text-[10px] font-light"},"(Double Click if 1 Day Only)"),e("span",{class:"text-red-600 text-sm ml-1"},"*")],-1)),e("div",Oe,[e("div",$e,[S(oe(ne),{modelValue:N.value,"onUpdate:modelValue":[t[12]||(t[12]=s=>N.value=s),t[13]||(t[13]=s=>R(N.value))],"enable-time-picker":!1,name:"schedule",range:"","auto-apply":"","year-range":[2025,2025],"week-start":"0","disabled-dates":Y.value,"min-date":$.value},null,8,["modelValue","disabled-dates","min-date"])])])])],512),[[ae,l.value.type_of_access!==""]])],2)])])])]),e("div",Me,[x.value?(n(),r("div",Pe,t[30]||(t[30]=[e("div",{class:"w-fit flex items-center mx-auto gap-2 px-3 uppercase font-bold lg:text-sm text-xs text-center cursor-pointer py-2 text-green-800"},[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/Google_Drive.png",class:"h-5 w-5"}),a(" Supporting Documents ")],-1)]))):m("",!0),e("div",{class:g(["w-full lg:flex lg:my-3 lg:px-5 lg:pb-0 pb-3 gap-3",x.value?"px-2":""])},[e("div",Ge,[x.value?(n(),r("div",Ie,[t[31]||(t[31]=e("label",{class:"lg:text-xs text-[10px] font-bold text-gray-900 lg:block pb-1 whitespace-nowrap"},[e("i",{class:"fa fa-link lg:mx-2 mr-2 text-green-900"}),a("Approved Booking Document (From GSO) ")],-1)),e("div",null,[i(e("input",{type:"url",class:"w-full px-2 border border-b-2 shadow-xl border-green-700 rounded-sm lg:h-[34px] h-8 text-xs",placeholder:"Google Drive Link","onUpdate:modelValue":t[14]||(t[14]=s=>l.value.approved_gso_docs_link=s)},null,512),[[b,l.value.approved_gso_docs_link]])])])):m("",!0),x.value?(n(),r("div",qe,[t[32]||(t[32]=e("label",{class:"lg:text-xs text-[10px] font-bold text-gray-900 lg:block pb-1"},[e("i",{class:"fa fa-link lg:mx-2 mr-2 text-green-900"}),a("Approved Activities ")],-1)),e("div",null,[i(e("input",{type:"url",class:"w-full px-2 border border-b-2 shadow-xl border-green-700 rounded-sm lg:h-[34px] h-8 text-xs",placeholder:"Google Drive Link","onUpdate:modelValue":t[15]||(t[15]=s=>l.value.approved_activities_link=s)},null,512),[[b,l.value.approved_activities_link]])])])):m("",!0),e("div",{class:g(x.value?"w-full":"lg:w-4/12 mx-auto")},[e("label",{class:g(["lg:text-xs text-[10px] font-bold text-gray-900 lg:block pb-1",x.value?"":"text-center"])},t[33]||(t[33]=[e("i",{class:"text-md mr-2 fa fa-address-card text-green-800"},null,-1),a("Attendees ")]),2),e("div",{class:g(["flex bg-white shadow border-green-700",x.value?"border-b":"border-b-2"])},[e("div",Be,[e("div",ze,[e("label",Ee,[e("span",Ye,[i(e("input",{type:"radio",class:"w-4 h-4 mr-2",id:"individual",value:"Individual","onUpdate:modelValue":t[16]||(t[16]=s=>l.value.attendees=s),onChange:t[17]||(t[17]=s=>M())},null,544),[[P,l.value.attendees]]),t[34]||(t[34]=e("span",{class:"mt-0.5"},[e("i",{class:"text-md mr-2 ml-3 fa fa-user"}),a("Individual ")],-1))])])]),e("div",Re,[e("label",He,[e("span",Xe,[i(e("input",{type:"radio",class:"w-4 h-4 mr-2",id:"group",value:"Group","onUpdate:modelValue":t[18]||(t[18]=s=>l.value.attendees=s),onChange:t[19]||(t[19]=s=>M())},null,544),[[P,l.value.attendees]]),t[35]||(t[35]=e("span",{class:"mt-0.5"},[e("i",{class:"text-md mr-2 ml-3 fa fa-users"}),a("Group ")],-1))])])])])],2)],2)])],2),U.value?(n(),r("div",Je,[t[45]||(t[45]=e("h1",{class:"text-center uppercase font-bold lg:mb-5 mb-4 text-xs border-y py-2"}," List of Names of Other Members ",-1)),e("div",{class:"flex lg:gap-x-10 gap-x-3 w-fit mx-auto"},[e("div",{onClick:z,class:"cursor-pointer shadow-lg bg-white hover:bg-orange-500 text-orange-500 hover:text-white font-bold w-fit mx-auto text-center py-1 lg:px-4 px-3 rounded-lg lg:text-sm text-xs border border-orange-500 mb-3"},t[36]||(t[36]=[e("i",{class:"fas fa-file-csv lg:mr-3 mr-1"},null,-1),a(" CSV Upload ")])),e("div",{onClick:E,class:"cursor-pointer shadow-lg bg-white hover:bg-orange-500 text-orange-500 hover:text-white font-bold w-fit mx-auto text-center py-1 lg:px-4 px-3 rounded-lg lg:text-sm text-xs border border-orange-500 mb-3"},t[37]||(t[37]=[e("i",{class:"fas fa-list lg:mr-3 mr-1"},null,-1),a(" Add Manually ")]))]),A.value?(n(),r("div",Ke,[t[39]||(t[39]=e("a",{href:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/public/campus-pass/template.csv",download:"template.csv",class:"py-1 hover:bg-white border border-green-600 bg-green-600 hover:text-green-600 text-white font-bold mx-auto block w-fit mt-7 px-7 rounded-md"},[e("i",{class:"fa fa-download mr-2"}),a(" Download CSV Template")],-1)),e("div",Qe,[e("input",{type:"file",onChange:X,ref_key:"fileInput",ref:H,class:"lg:w-full w-[250px]"},null,544)]),v.value?(n(),r("div",We,[t[38]||(t[38]=F('<h2 class="text-center border uppercase font-bold w-11/12 mx-auto mt-5 lg:text-sm text-xs" data-v-eded5ab5>CSV Data</h2><div class="lg:flex hidden font-bold w-11/12 mx-auto lg:text-sm text-[10px]" data-v-eded5ab5><div class="w-full border px-3" data-v-eded5ab5>First Name </div><div class="w-full border px-3" data-v-eded5ab5> Last Name </div><div class="w-full border px-[18px]" data-v-eded5ab5> Email Address</div></div>',2)),(n(!0),r(G,null,I(v.value,(s,f)=>(n(),r("div",{key:f,class:"lg:flex w-11/12 mx-auto text-xs lg:border-0 border-2 lg:p-0 p-3"},[e("div",Ze,[e("i",{class:g(["fa fa-user mr-2 lg:hidden flex",s[0]===""||s[0]===null?"hidden":""])},null,2),e("div",{class:g(["lg:w-full lg:px-3 px-0.5 lg:border",s[0]===""||s[0]===null?"hidden":""])},y(s.firstname),3),e("div",{class:g(["lg:w-full lg:px-3 px-0.5 lg:border",s[2]===""?"hidden":""])},y(s.lastname),3)]),e("div",je,[e("i",{class:g(["fa fa-envelope mr-2 mt-1 lg:hidden flex",s[3]===""?"hidden":""])},null,2),e("div",{class:g(["",s[3]===""?"hidden":""])},y(s.email),3)])]))),128))])):(n(),r("div",et,"No CSV Data"))])):m("",!0),C.value?(n(),r("div",tt,[(n(!0),r(G,null,I(l.value.name_list,(s,f)=>(n(),r("div",{class:"gap-3 w-full lg:py-2 py-1 lg:mb-0 mb-3",key:f},[e("div",lt,[e("div",st,y(f+1),1),e("div",at,[e("div",ot,[e("div",dt,[t[40]||(t[40]=e("label",{class:"lg:text-xs text-[10px] tracking-tighter text-gray-900 font-bold lg:flex block"},[e("i",{class:"fa fa-user mr-1 lg:ml-1 text-green-900"}),a("First Name"),e("span",{class:"text-red-600 text-sm lg:mr-1"},"*")],-1)),e("div",null,[e("div",rt,[i(e("input",{type:"text",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-7 lg:text-xs text-[10px]","onUpdate:modelValue":c=>s.firstname=c,placeholder:"First Name"},null,8,nt),[[b,s.firstname]])])])]),e("div",it,[t[41]||(t[41]=e("label",{class:"lg:text-xs text-[10px] tracking-tighter text-gray-900 lg:block font-bold"},[a(" Last Name"),e("span",{class:"text-red-600 text-sm lg:ml-1"},"*")],-1)),e("div",null,[e("div",pt,[i(e("input",{type:"text",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-7 lg:text-xs text-[10px]","onUpdate:modelValue":c=>s.lastname=c,placeholder:"Last Name"},null,8,ut),[[b,s.lastname]])])])])]),e("div",gt,[t[42]||(t[42]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 lg:block font-bold"},[e("i",{class:"fa fa-envelope mr-2 lg:ml-1 text-green-900"}),a("Email"),e("span",{class:"text-red-600 text-sm lg:mr-1"},"*")],-1)),e("div",null,[e("div",mt,[i(e("input",{type:"email",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-7 lg:text-xs text-[10px]","onUpdate:modelValue":c=>s.email=c,placeholder:"Email"},null,8,xt),[[b,s.email]])])])])]),l.value.name_list.length>1?(n(),r("div",{key:0,onClick:c=>Q(s),class:"cursor-pointer mt-5 ml-2 shadow-lg bg-white hover:bg-red-700 text-red-700 hover:text-white font-bold w-fit lg:px-1.5 px-1 py-1.5 flex items-center rounded-lg text-lg border border-red-700"},t[43]||(t[43]=[e("i",{class:"fa fa-close lg:text-sm text-xs"},null,-1)]),8,ct)):m("",!0)])]))),128)),e("div",{class:"flex gap-x-5 w-fit mx-auto"},[e("div",{onClick:K,class:"mt-5 cursor-pointer shadow-lg bg-white hover:bg-yellow-500 text-yellow-500 hover:text-white font-bold w-fit mx-auto text-center py-1 px-4 rounded-lg lg:text-sm text-xs border border-yellow-500 mb-3"},t[44]||(t[44]=[e("i",{class:"fa fa-plus mr-2 font-bold"},null,-1),a(" ADD ")]))])])):m("",!0)])):m("",!0)])]),q.value?(n(),r("div",bt," All fields are required information. Otherwise, type N/A if not applicable. ")):m("",!0),t[47]||(t[47]=e("div",{class:"pb-5 lg:px-5 px-3 mb-5"},[e("button",{class:"px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold lg:py-2 py-1.5 lg:w-fit w-full mx-auto block uppercase hover:bg-white border-2 border-green-900 hover:text-green-900 lg:text-sm text-xs"},[e("i",{class:"fa fa-paper-plane mr-2","aria-hidden":"true"}),a(" Submit ")])],-1))])])],32)])):m("",!0),O.value?(n(),r("div",vt,t[48]||(t[48]=[F('<div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl" data-v-eded5ab5><div class="flex items-center" data-v-eded5ab5><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14" data-v-eded5ab5></div><div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5" data-v-eded5ab5><h1 class="font-bold text-3xl" data-v-eded5ab5>Thanks for submitting! </h1><p class="font-light pt-3 pb-10" data-v-eded5ab5> Your request has been sent! </p><p class="font-light text-xs italic mb-10" data-v-eded5ab5>Please check your email.</p><a href="https://lsu.edu.ph/campus-pass" class="bg-green-800 text-white rounded-3xl py-1.5 px-10 lg:mb-0 mb-5 mx-auto w-fit lg:block hidden" data-v-eded5ab5>Campus Pass</a></div></div>',1)]))):m("",!0),S(u)])}}},Vt=ie(ft,[["__scopeId","data-v-eded5ab5"]]);export{Vt as default};
