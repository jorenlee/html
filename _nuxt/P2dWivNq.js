import{_ as Y}from"./BrkXi1wW.js";import{_ as B}from"./B2vMaaMJ.js";import{r as d,l as I,m as L,c as i,b as y,e as V,j as g,a as e,d as r,t as m,f as o,v as u,x,n as H,h as X,F as R,g as N,q as G,o as n}from"./kn4BmnqY.js";import"./5JjjnmY2.js";import{X as W}from"./CL9hKZeg.js";/* empty css        */import{h as k}from"./C5S46NFB.js";import{a as J}from"./t--hEgTQ.js";import{_ as K}from"./DlAUqK2U.js";const Q={class:"bg-gray-50"},Z={key:0},ee={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 w-11/12 mx-auto"},te={class:""},le={class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},se={class:"font-light text-xs bg-green-900 text-white block"},ae={class:"w-fit mx-auto text-xs mt-4 px-4 font-montserrat tracking-tight"},oe={class:"border-b px-1"},de={class:"lg:p-5 px-2 pt-3 pb-2 gap-3"},re={class:"w-full lg:mb-0 mb-5"},ie={class:"w-full gap-3"},ne={class:"gap-3 w-full"},ue={class:"gap-3 lg:mb-2 lg:w-10/12 w-full mx-auto border shadow py-5 px-5"},pe={class:"lg:gap-x-2 gap-x-1 w-full"},me={class:"flex items-center w-full mb-2"},xe={class:"flex items-center w-full mb-2"},ce={class:"w-full"},ge={class:"flex items-center w-full mb-2"},fe={class:"flex items-center w-full mb-2"},ve={class:"w-full"},be={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},we={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},_e={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},he={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},ye={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},ke={class:"flex items-center w-full mb-2"},Fe={class:"w-full"},De={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},Ue={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Se={class:"flex items-center text-xs whitespace-nowrap lg:shadow-lg lg:mt-0 mt-2 px-2"},Ve={class:"ml-2 flex item w-full text-black text-xs items-center",for:"ForRevision"},Re={class:"mr-2"},Ne={class:"flex items-center w-full mb-2"},Te={class:"w-full"},Pe={class:"border-b-2 border-green-700 w-fit shadow-lg"},Me={class:"flex items-center w-full mb-2"},Ce={class:"flex items-center w-full mb-2"},qe={class:"lg:w-full w-[250px] my-2"},Oe={key:0},je=["src"],ze=["href"],$e=["href"],Ee={class:"ml-3 font-bold"},Ae={class:"w-fit mx-auto my-10"},Ye={class:"text-center flex"},Be={key:0,class:"my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"},Ie={key:1,class:""},Le={__name:"index_with_upload",setup(He){const T=d(!1),P=I(),v=d(P.mainDevServer),F=d(!0),D=d(!1),b=d(1),U=k().format("LL"),M=d(0),w=d(null),s=d({originating_firstname:"",originating_middlename:"-",originating_lastname:"",originating_office:"",originating_email:"",document_title:"",status:"",revision_number:"",document_type:"",schedule:"",purpose:"",reviewed_by_name:"Dr. Wenny Caseros",reviewed_by_designation:"University Chancellor",reviewed_by_date_checked:U,reviewed_by_action:"",reviewed_by_remarks:"",approved_by_name:"Br. Rey E. Mejias FSC",approved_by_designation:"University President",approved_by_date_checked:U,approved_by_action:"",approved_by_remarks:"",other_comments_remarks:"",document_code:"EOM-FM-01, Rev. 001",effectivity_date:"",rmo_name:"",document_attachment:[],tracking_id:"DRS-"+k().year()+"-"+String(M.value).padStart(3,"0")}),C=L(()=>new Date),q=a=>{s.value.schedule=k(a).format("MMMM DD, YYYY h:mm:ss A")},O=()=>{$()},j=async()=>{b.value===1&&(b.value=0,await $fetch(v.value+"/api/drs/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(a=>{F.value=!1,D.value=!0,b.value=0,console.log(a),E()}))},_=d(!1),S=()=>{s.value.status==="For Revision"?_.value=!0:_.value=!1},p=d([]),h=d([]),c=d(null),z=a=>{p.value=Array.from(a.target.files),console.log(a),p.value.forEach(t=>{console.log(`File: ${t.name}, Size: ${t.size} bytes`)})},$=async()=>{if(!p.value.length)return;const a=new FormData;p.value.forEach(t=>{a.append("file",t)});try{c.value="Uploading...";const t=await J.post(v.value+"/api/drs/upload/",a,{headers:{"Content-Type":"multipart/form-data"}});c.value="Upload successful!",console.log("Files uploaded:",t.data),h.value=t.data.map(f=>({name:f.name,url:f.url})),p.value=[],s.value.document_attachment=h.value,j(),console.log(s.value)}catch(t){console.error("File upload error:",t),c.value="Upload failed: "+t.message}},E=async()=>{await $fetch(v.value+"/api/drs/drs-notification-submit/",{method:"POST",headers:{"Content-Type":"application/json"},body:{originating_firstname:s.value.originating_firstname,originating_office:s.value.originating_office,originating_email:s.value.originating_email,document_title:s.value.document_title,schedule:s.value.schedule,tracking_id:s.value.tracking_id}}).then(a=>{console.log(a)})};return(a,t)=>{const f=Y,A=B;return n(),i("div",Q,[y(f),t[38]||(t[38]=V('<div class="" data-v-6efdddb1><div class="relative" data-v-6efdddb1><div class="shadow-lg pt-[70px]" data-v-6efdddb1><div class="w-11/12 mx-auto flex justify-between" data-v-6efdddb1><ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-2.5" data-v-6efdddb1><li data-v-6efdddb1><a href="/" class="mr-1" data-v-6efdddb1> Home </a></li><li data-v-6efdddb1><i class="fas fa-caret-right mr-1" data-v-6efdddb1></i><a href="/drs" class="mr-1" data-v-6efdddb1> Document Review Sheet </a></li></ul><ul class="flex hover:text-green-800 text-white" data-v-6efdddb1><li class="px-3 h-full flex items-center capitalize text-xs" data-v-6efdddb1><a href="/drs/login" class="flex items-center" data-v-6efdddb1></a></li><li class="hover:bg-green-800 bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-6efdddb1><a href="/drs/login" class="flex items-center" data-v-6efdddb1><i class="fa fa-user" aria-hidden="true" data-v-6efdddb1></i></a></li></ul></div></div></div></div>',1)),F.value?(n(),i("div",Z,[e("form",{onSubmit:G(O,["prevent"])},[e("div",ee,[e("div",te,[e("h2",le,[t[17]||(t[17]=r(" Document Review Sheet Form ")),e("span",se,m(s.value.document_code),1)]),e("div",ae,[t[18]||(t[18]=r(" DRS No. ")),e("span",oe,m(s.value.tracking_id),1)]),e("div",de,[e("div",re,[e("div",ie,[e("div",ne,[e("div",ue,[e("div",pe,[e("div",me,[t[19]||(t[19]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Originating Office "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),o(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Originating Office","onUpdate:modelValue":t[0]||(t[0]=l=>s.value.originating_office=l),required:""},null,512),[[u,s.value.originating_office]])]),e("div",xe,[t[20]||(t[20]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Email "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),e("div",ce,[o(e("input",{type:"email",class:"px-2 w-6/12 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=l=>s.value.originating_email=l),required:""},null,512),[[u,s.value.originating_email]])])]),e("div",ge,[t[21]||(t[21]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Document Title "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),o(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Document Title","onUpdate:modelValue":t[2]||(t[2]=l=>s.value.document_title=l),required:""},null,512),[[u,s.value.document_title]])]),e("div",fe,[t[26]||(t[26]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Document Type "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",ve,[e("div",be,[e("div",we,[o(e("input",{type:"radio",value:"Manual","onUpdate:modelValue":t[3]||(t[3]=l=>s.value.document_type=l),class:"mr-1",id:"Manual"},null,512),[[x,s.value.document_type]]),t[22]||(t[22]=e("label",{class:"ml-2",for:"Manual"},[e("span",{class:"font-bold mr-1"},"Manual")],-1))]),e("div",_e,[o(e("input",{type:"radio",value:"Procedure","onUpdate:modelValue":t[4]||(t[4]=l=>s.value.document_type=l),class:"mr-1",id:"Procedure"},null,512),[[x,s.value.document_type]]),t[23]||(t[23]=e("label",{class:"ml-2",for:"Procedure"},[e("span",{class:"font-bold mr-1"},"Procedure")],-1))]),e("div",he,[o(e("input",{type:"radio",value:"Policy","onUpdate:modelValue":t[5]||(t[5]=l=>s.value.document_type=l),class:"mr-1",id:"Policy"},null,512),[[x,s.value.document_type]]),t[24]||(t[24]=e("label",{class:"ml-2",for:"Policy"},[e("span",{class:"font-bold mr-1"},"Policy")],-1))]),e("div",ye,[o(e("input",{type:"radio",value:"Form or Template","onUpdate:modelValue":t[6]||(t[6]=l=>s.value.document_type=l),class:"mr-1",id:"FormTemplate"},null,512),[[x,s.value.document_type]]),t[25]||(t[25]=e("label",{class:"ml-2",for:"FormTemplate"},[e("span",{class:"font-bold mr-1"},"Form or Template")],-1))])])])]),e("div",ke,[t[30]||(t[30]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Status "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",Fe,[e("div",De,[e("div",Ue,[o(e("input",{type:"radio",value:"New","onUpdate:modelValue":t[7]||(t[7]=l=>s.value.status=l),onChange:t[8]||(t[8]=l=>S()),class:"mr-1",id:"New",ref:"fileInput"},null,544),[[x,s.value.status]]),t[27]||(t[27]=e("label",{class:"ml-2",for:"New"},[e("span",{class:"font-bold mr-1"},"New")],-1))]),e("div",Se,[e("label",Ve,[e("span",Re,[o(e("input",{type:"radio",value:"For Revision","onUpdate:modelValue":t[9]||(t[9]=l=>s.value.status=l),onChange:t[10]||(t[10]=l=>S()),class:"",id:"ForRevision"},null,544),[[x,s.value.status]])]),t[28]||(t[28]=e("span",{class:"font-bold mr-1"},"For Revision",-1)),t[29]||(t[29]=e("span",{class:"font-bold mr-2"},"No. ",-1)),o(e("input",{class:H([_.value?"":"hidden","px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg py-1 rounded-sm text-xs"]),type:"text",placeholder:"Revision Number","onUpdate:modelValue":t[11]||(t[11]=l=>s.value.revision_number=l),ref:"fileInput"},null,2),[[u,s.value.revision_number]])])])])])]),e("div",Ne,[t[31]||(t[31]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Date "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",Te,[e("div",Pe,[y(X(W),{modelValue:w.value,"onUpdate:modelValue":[t[12]||(t[12]=l=>w.value=l),t[13]||(t[13]=l=>q(w.value))],"enable-time-picker":!1,name:"date","auto-apply":"","year-range":[2025,2025],"week-start":"0","min-date":C.value},null,8,["modelValue","min-date"])])])]),e("div",Me,[t[32]||(t[32]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Purpose "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),o(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Purpose","onUpdate:modelValue":t[14]||(t[14]=l=>s.value.purpose=l),required:""},null,512),[[u,s.value.purpose]])]),e("div",Ce,[t[34]||(t[34]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Reference Document "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),e("div",qe,[t[33]||(t[33]=e("label",{for:"file-upload",class:"bg-green-600 text-white px-5 py-1 font-bold cursor-pointer rounded-md hover:bg-white hover:text-green-600 border-green-600 border"},[e("i",{class:"fa fa-upload mr-2","aria-hidden":"true"}),r(" Upload Document ")],-1)),e("input",{id:"file-upload",type:"file",onChange:z,class:"border shadow-lg"},null,32),c.value?(n(),i("div",Oe,m(c.value),1)):g("",!0),(n(!0),i(R,null,N(h.value,l=>(n(),i("div",{key:l.url},[l.url.includes("jpg")||l.url.includes("png")?(n(),i("img",{key:0,src:l.url,alt:"Uploaded File",class:"w-80"},null,8,je)):g("",!0),e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},m(l.name),9,ze)]))),128)),(n(!0),i(R,null,N(p.value,l=>(n(),i("div",{key:l.url,class:"my-4 shadow-lg px-2 py-3 border-2"},[e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",class:"tracking-tighter"},m(l.name),9,$e),e("span",Ee,m((l.size/1024/1024).toFixed(2))+" MB size ",1)]))),128))])])])]),e("div",Ae,[e("div",Ye,[o(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"First Name","onUpdate:modelValue":t[15]||(t[15]=l=>s.value.originating_firstname=l),required:""},null,512),[[u,s.value.originating_firstname]]),o(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"Last Name","onUpdate:modelValue":t[16]||(t[16]=l=>s.value.originating_lastname=l),required:""},null,512),[[u,s.value.originating_lastname]])]),t[35]||(t[35]=e("div",{class:"border-t-2 border-black text-center"},"Originator’s Printed Name",-1))])])])])]),T.value?(n(),i("div",Be," All fields are required information. Otherwise, type N/A if not applicable. ")):g("",!0),t[36]||(t[36]=e("div",{class:"pb-5 lg:px-5 px-3 mb-5"},[e("button",{class:"px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold lg:py-2 py-1.5 lg:w-fit w-full mx-auto block uppercase hover:bg-white border-2 border-green-900 hover:text-green-900 lg:text-sm text-xs"},[e("i",{class:"fa fa-paper-plane mr-2","aria-hidden":"true"}),r(" Submit ")])],-1))])])],32)])):g("",!0),D.value?(n(),i("div",Ie,t[37]||(t[37]=[V('<div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl" data-v-6efdddb1><div class="flex items-center" data-v-6efdddb1><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14" data-v-6efdddb1></div><div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5" data-v-6efdddb1><h1 class="font-bold text-3xl" data-v-6efdddb1>Thanks for submitting! </h1><p class="font-light pt-3 pb-10" data-v-6efdddb1> Your request has been sent! </p><p class="font-light text-xs italic mb-10" data-v-6efdddb1>Please check your email.</p><a href="https://lsu.edu.ph/drs" class="bg-green-800 text-white rounded-3xl py-1.5 px-10 lg:mb-0 mb-5 mx-auto w-fit lg:block hidden text-sm uppercase" data-v-6efdddb1><i class="fa fa-arrow-circle-left mr-4" data-v-6efdddb1></i> Document Review Sheet</a></div></div>',1)]))):g("",!0),y(A)])}}},lt=K(Le,[["__scopeId","data-v-6efdddb1"]]);export{lt as default};
