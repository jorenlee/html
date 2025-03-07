import{_ as q}from"./Ce_9mb3z.js";import{_ as C}from"./BERca3JY.js";import{r,u as O,M as I,c as u,b as w,y as U,a as e,d as i,t as A,q as s,B as n,U as d,x as $,n as j,A as h,G as L,o as m}from"./BSp0laWV.js";import"./5JjjnmY2.js";import{X as Y}from"./CUwUn9pS.js";/* empty css        */import{h as x}from"./C5S46NFB.js";import{_ as B}from"./DlAUqK2U.js";const E={class:"bg-gray-50"},z={key:0},G={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 w-11/12 mx-auto"},H={class:""},X={class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},W={class:"font-light text-xs bg-green-900 text-white block"},J={class:"lg:p-5 px-2 pt-3 pb-2 gap-3"},K={class:"w-full lg:mb-0 mb-5"},Q={class:"w-full gap-3"},Z={class:"gap-3 w-full"},ee={class:"gap-3 lg:mb-2 lg:w-10/12 w-full mx-auto border shadow py-5 px-5"},te={class:"lg:gap-x-2 gap-x-1 w-full"},le={class:"flex items-center w-full mb-2"},ae={class:"flex items-center w-full mb-2"},se={class:"w-full"},oe={class:"flex items-center w-full mb-2"},ie={class:"flex items-center w-full mb-2"},re={class:"w-full"},ne={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},de={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},pe={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},ue={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},me={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},xe={class:"flex items-center w-full mb-2"},ge={class:"w-full"},ve={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},ce={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},fe={class:"flex items-center text-xs whitespace-nowrap lg:shadow-lg lg:mt-0 mt-2 px-2"},be={class:"ml-2 flex item w-full text-black text-xs items-center",for:"ForRevision"},we={class:"mr-2"},he={class:"flex items-center w-full mb-2"},_e={class:"w-full"},ye={class:"border-b-2 border-green-700 w-fit shadow-lg"},ke={class:"flex items-center w-full mb-2"},De={class:"flex items-center w-full mb-2"},Ve={class:"w-fit mx-auto my-10"},Se={class:"text-center flex"},Ue={key:0,class:"my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"},Fe={key:1,class:""},Re={__name:"index",setup(Ne){const F=r(!1),R=O(),g=r(R.mainDevServer),_=r(!0),y=r(!1),v=r(1),k=x().format("LL"),D=r(0),c=r(null),l=r({originating_firstname:"",originating_middlename:"-",originating_lastname:"",originating_office:"",originating_email:"",document_title:"",status:"",revision_number:"",document_type:"",schedule:"",purpose:"",reviewed_by_name:"Dr. Wenny Caseros",reviewed_by_designation:"University Chancellor",reviewed_by_date_checked:k,reviewed_by_action:"",reviewed_by_remarks:"",approved_by_name:"Br. Rey E. Mejias FSC",approved_by_designation:"University President",approved_by_date_checked:k,approved_by_action:"",approved_by_remarks:"",other_comments_remarks:"",document_code:"EOM-FM-01, Rev. 001",effectivity_date:"",rmo_name:"",document_attachment:"",tracking_id:""}),N=I(()=>new Date),T=o=>{l.value.schedule=x(o).format("MMMM DD, YYYY h:mm:ss A")},M=async()=>{let o=await $fetch(g.value+"/api/drs/list").catch(t=>t.data)||0;if(o.length===0)l.value.tracking_id="DRS-"+x().year()+"-001",V();else{let t=[];o.filter(b=>{t.push(parseInt(b.tracking_id.slice(-3)))});let p=Math.max(...t);console.log(p),D.value=p+1,l.value.tracking_id="DRS-"+x().year()+"-"+String(D.value).padStart(3,"0"),V()}},V=async()=>{v.value===1&&(v.value=0,await $fetch(g.value+"/api/drs/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:l.value}).then(o=>{_.value=!1,y.value=!0,v.value=0,console.log(o),P()}))},f=r(!1),S=()=>{l.value.status==="For Revision"?f.value=!0:f.value=!1},P=async()=>{await $fetch(g.value+"/api/drs/drs-notification-submit/",{method:"POST",headers:{"Content-Type":"application/json"},body:{originating_firstname:l.value.originating_firstname,originating_office:l.value.originating_office,originating_email:l.value.originating_email,document_title:l.value.document_title,schedule:l.value.schedule,tracking_id:l.value.tracking_id}}).then(o=>{console.log(o)})};return(o,t)=>{const p=q,b=C;return m(),u("div",E,[w(p),t[37]||(t[37]=U('<div class="" data-v-074717a0><div class="relative" data-v-074717a0><div class="shadow-lg pt-[70px] text-green-700" data-v-074717a0><div class="w-11/12 mx-auto flex justify-between" data-v-074717a0><div class="flex capitalize text-xs pt-2.5 pb-2.5" data-v-074717a0><div data-v-074717a0><a href="/" class="mr-2 hover:underline" data-v-074717a0>Home</a></div><div data-v-074717a0><i class="fas fa-caret-right" data-v-074717a0></i><a href="/drs" class="mr-2 hover:underline" data-v-074717a0>Document Review Sheet</a></div></div><div class="flex hover:text-green-800 text-white" data-v-074717a0><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs border-r" data-v-074717a0><a href="/drs/track" class="flex items-center" data-v-074717a0><i class="fa fa-universal-access" aria-hidden="true" data-v-074717a0></i><span class="ml-3" data-v-074717a0>Track</span></a></div><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-074717a0><a href="/drs/login" class="flex items-center" data-v-074717a0><i class="fa fa-user" aria-hidden="true" data-v-074717a0></i><span class="ml-3" data-v-074717a0>Admin Login</span></a></div></div></div></div></div></div>',1)),_.value?(m(),u("div",z,[e("form",{onSubmit:L(M,["prevent"])},[e("div",G,[e("div",H,[e("h2",X,[t[18]||(t[18]=i(" Document Review Sheet Form ")),e("span",W,A(l.value.document_code),1)]),e("div",J,[e("div",K,[e("div",Q,[e("div",Z,[e("div",ee,[e("div",te,[e("div",le,[t[19]||(t[19]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Originating Office "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),s(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Originating Office","onUpdate:modelValue":t[0]||(t[0]=a=>l.value.originating_office=a),required:""},null,512),[[n,l.value.originating_office]])]),e("div",ae,[t[20]||(t[20]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Email "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),e("div",se,[s(e("input",{type:"email",class:"px-2 w-6/12 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=a=>l.value.originating_email=a),required:""},null,512),[[n,l.value.originating_email]])])]),e("div",oe,[t[21]||(t[21]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Document Title "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),s(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Document Title","onUpdate:modelValue":t[2]||(t[2]=a=>l.value.document_title=a),required:""},null,512),[[n,l.value.document_title]])]),e("div",ie,[t[26]||(t[26]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Document Type "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",re,[e("div",ne,[e("div",de,[s(e("input",{type:"radio",value:"Manual","onUpdate:modelValue":t[3]||(t[3]=a=>l.value.document_type=a),class:"mr-1",id:"Manual"},null,512),[[d,l.value.document_type]]),t[22]||(t[22]=e("label",{class:"ml-2",for:"Manual"},[e("span",{class:"font-bold mr-1"},"Manual")],-1))]),e("div",pe,[s(e("input",{type:"radio",value:"Procedure","onUpdate:modelValue":t[4]||(t[4]=a=>l.value.document_type=a),class:"mr-1",id:"Procedure"},null,512),[[d,l.value.document_type]]),t[23]||(t[23]=e("label",{class:"ml-2",for:"Procedure"},[e("span",{class:"font-bold mr-1"},"Procedure")],-1))]),e("div",ue,[s(e("input",{type:"radio",value:"Policy","onUpdate:modelValue":t[5]||(t[5]=a=>l.value.document_type=a),class:"mr-1",id:"Policy"},null,512),[[d,l.value.document_type]]),t[24]||(t[24]=e("label",{class:"ml-2",for:"Policy"},[e("span",{class:"font-bold mr-1"},"Policy")],-1))]),e("div",me,[s(e("input",{type:"radio",value:"Form or Template","onUpdate:modelValue":t[6]||(t[6]=a=>l.value.document_type=a),class:"mr-1",id:"FormTemplate"},null,512),[[d,l.value.document_type]]),t[25]||(t[25]=e("label",{class:"ml-2",for:"FormTemplate"},[e("span",{class:"font-bold mr-1"},"Form or Template")],-1))])])])]),e("div",xe,[t[30]||(t[30]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Status "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",ge,[e("div",ve,[e("div",ce,[s(e("input",{type:"radio",value:"New","onUpdate:modelValue":t[7]||(t[7]=a=>l.value.status=a),onChange:t[8]||(t[8]=a=>S()),class:"mr-1",id:"New",ref:"fileInput"},null,544),[[d,l.value.status]]),t[27]||(t[27]=e("label",{class:"ml-2",for:"New"},[e("span",{class:"font-bold mr-1"},"New")],-1))]),e("div",fe,[e("label",be,[e("span",we,[s(e("input",{type:"radio",value:"For Revision","onUpdate:modelValue":t[9]||(t[9]=a=>l.value.status=a),onChange:t[10]||(t[10]=a=>S()),class:"",id:"ForRevision"},null,544),[[d,l.value.status]])]),t[28]||(t[28]=e("span",{class:"font-bold mr-1"},"For Revision",-1)),t[29]||(t[29]=e("span",{class:"font-bold mr-2"},"No. ",-1)),s(e("input",{class:$([f.value?"":"hidden","px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg py-1 rounded-sm text-xs"]),type:"text",placeholder:"Revision Number","onUpdate:modelValue":t[11]||(t[11]=a=>l.value.revision_number=a),ref:"fileInput"},null,2),[[n,l.value.revision_number]])])])])])]),e("div",he,[t[31]||(t[31]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Date "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",_e,[e("div",ye,[w(j(Y),{modelValue:c.value,"onUpdate:modelValue":[t[12]||(t[12]=a=>c.value=a),t[13]||(t[13]=a=>T(c.value))],"enable-time-picker":!1,name:"date","auto-apply":"","year-range":[2025,2025],"week-start":"0","min-date":N.value},null,8,["modelValue","min-date"])])])]),e("div",ke,[t[32]||(t[32]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Purpose "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),s(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Purpose","onUpdate:modelValue":t[14]||(t[14]=a=>l.value.purpose=a),required:""},null,512),[[n,l.value.purpose]])]),e("div",De,[t[33]||(t[33]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[i(" Reference Document "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),s(e("input",{type:"url",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Google Drink Link","onUpdate:modelValue":t[15]||(t[15]=a=>l.value.document_attachment=a),required:""},null,512),[[n,l.value.document_attachment]])])])]),e("div",Ve,[e("div",Se,[s(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"First Name","onUpdate:modelValue":t[16]||(t[16]=a=>l.value.originating_firstname=a),required:""},null,512),[[n,l.value.originating_firstname]]),s(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"Last Name","onUpdate:modelValue":t[17]||(t[17]=a=>l.value.originating_lastname=a),required:""},null,512),[[n,l.value.originating_lastname]])]),t[34]||(t[34]=e("div",{class:"border-t-2 border-black text-center"},"Originator’s Printed Name",-1))])])])])]),F.value?(m(),u("div",Ue," All fields are required information. Otherwise, type N/A if not applicable. ")):h("",!0),t[35]||(t[35]=e("div",{class:"pb-5 lg:px-5 px-3 mb-5"},[e("button",{class:"px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold lg:py-2 py-1.5 lg:w-fit w-full mx-auto block uppercase hover:bg-white border-2 border-green-900 hover:text-green-900 lg:text-sm text-xs"},[e("i",{class:"fa fa-paper-plane mr-2","aria-hidden":"true"}),i(" Submit ")])],-1))])])],32)])):h("",!0),y.value?(m(),u("div",Fe,t[36]||(t[36]=[U('<div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl" data-v-074717a0><div class="flex items-center" data-v-074717a0><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14" data-v-074717a0></div><div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5" data-v-074717a0><h1 class="font-bold text-3xl" data-v-074717a0>Thanks for submitting! </h1><p class="font-light pt-3 pb-10" data-v-074717a0> Your request has been sent! </p><p class="font-light text-xs italic mb-10" data-v-074717a0>Please check your email.</p><a href="https://lsu.edu.ph/drs" class="bg-green-800 text-white rounded-3xl py-1.5 px-10 lg:mb-0 mb-5 mx-auto w-fit lg:block hidden text-sm uppercase" data-v-074717a0><i class="fa fa-arrow-circle-left mr-4" data-v-074717a0></i> Document Review Sheet</a></div></div>',1)]))):h("",!0),w(b)])}}},$e=B(Re,[["__scopeId","data-v-074717a0"]]);export{$e as default};
