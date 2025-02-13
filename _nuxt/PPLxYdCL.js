import{_ as j}from"./lMtHfr4y.js";import{_ as A}from"./idGGfO7z.js";import{r as o,u as E,I,c as i,b as _,y as D,a as e,d as r,t as v,q as a,B as p,H as u,x as Y,n as z,A as x,F as B,z as L,G as $,o as d}from"./BzRidp79.js";import"./5JjjnmY2.js";import{X as H}from"./Cq_CJe7C.js";/* empty css        */import{h as y}from"./C5S46NFB.js";import{a as X}from"./upsvKRUO.js";import{_ as G}from"./DlAUqK2U.js";const W={class:"bg-gray-50"},J={key:0},K={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 w-11/12 mx-auto"},Q={class:""},Z={class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},ee={class:"font-light text-xs bg-green-900 text-white block"},te={class:"w-fit mx-auto text-xs mt-4 px-4 font-montserrat tracking-tight"},le={class:"border-b px-1"},se={class:"lg:p-5 px-2 pt-3 pb-2 gap-3"},ae={class:"w-full lg:mb-0 mb-5"},oe={class:"w-full gap-3"},re={class:"gap-3 w-full"},ne={class:"gap-3 lg:mb-2 lg:w-10/12 w-full mx-auto border shadow py-5 px-5"},ie={class:"lg:gap-x-2 gap-x-1 w-full"},de={class:"flex items-center w-full mb-2"},pe={class:"flex items-center w-full mb-2"},ue={class:"w-full"},me={class:"flex items-center w-full mb-2"},xe={class:"flex items-center w-full mb-2"},ce={class:"w-full"},ge={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},ve={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},fe={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},be={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},we={class:"lg:shadow-lg lg:mt-0 mt-2 px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},_e={class:"flex items-center w-full mb-2"},ye={class:"w-full"},he={class:"lg:flex gap-x-3 w-fit px-3 lg:px-0 lg:shadow lg:pt-[2px] pt-3 bg-white border-green-700 border-b-2"},ke={class:"lg:shadow-lg px-2 lg:pt-[8px] lg:pb-[9px] pb-2.5 text-black text-xs items-center flex"},Fe={class:"flex items-center text-xs whitespace-nowrap lg:shadow-lg lg:mt-0 mt-2 px-2"},Ue={class:"ml-2 flex item w-full text-black text-xs items-center",for:"ForRevision"},Ve={class:"mr-2"},De={class:"flex items-center w-full mb-2"},Se={class:"w-full"},Ne={class:"border-b-2 border-green-700 w-fit shadow-lg"},Re={class:"flex items-center w-full mb-2"},Pe={class:"flex items-center w-full mb-2"},Me={class:"lg:w-full w-[250px]"},Te={key:0},Ce=["src"],qe=["href"],Oe={class:"w-fit mx-auto my-10"},je={class:"text-center flex"},Ae={key:0,class:"my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"},Ee={key:1,class:""},Ie={__name:"index",setup(Ye){const S=o(!1),N=E(),h=o(N.mainDevServer),k=o(!0),F=o(!1),f=o(1),U=y().format("LL"),R=o(0),s=o({originating_firstname:"",originating_middlename:"-",originating_lastname:"",originating_office:"",originating_email:"",document_title:"",status:"",revision_number:"",document_type:"",schedule:y().format("MMMM Do YYYY, h:mm:ss a"),purpose:"",reviewed_by_name:"Dr. Wenny Caseros",reviewed_by_designation:"University Chancellor",reviewed_by_date_checked:U,reviewed_by_action:"",reviewed_by_remarks:"",approved_by_name:"Br. Rey E. Mejias FSC",approved_by_designation:"University President",approved_by_date_checked:U,approved_by_action:"",approved_by_remarks:"",other_comments_remarks:"",document_code:"EOM-FM-01, Rev. 001",effectivity_date:"",rmo_name:"",document_attachment:[],tracking_id:"DRS-"+y().year()+"-"+String(R.value).padStart(3,"0")}),P=I(()=>new Date),M=()=>{q()},T=async()=>{f.value===1&&(f.value=0,await $fetch(h.value+"/api/drs/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(n=>{k.value=!1,F.value=!0,f.value=0,console.log(n)}))},b=o(!1),V=()=>{s.value.status==="For Revision"?b.value=!0:b.value=!1},c=o([]),w=o([]),m=o(null);o(null);const C=n=>{c.value=Array.from(n.target.files)},q=async()=>{if(!c.value.length)return;const n=new FormData;c.value.forEach(t=>{n.append("file",t)});try{m.value="Uploading...";const t=await X.post(h.value+"/api/drs/upload/",n,{headers:{"Content-Type":"multipart/form-data"}});m.value="Upload successful!",console.log("Files uploaded:",t.data),w.value=t.data.map(g=>({name:g.name,url:g.url})),c.value=[],s.value.document_attachment=w.value,T()}catch(t){console.error("File upload error:",t),m.value="Upload failed: "+t.message}};return(n,t)=>{const g=j,O=A;return d(),i("div",W,[_(g),t[36]||(t[36]=D('<div class="" data-v-98043459><div class="relative" data-v-98043459><div class="shadow-lg pt-[70px]" data-v-98043459><div class="w-11/12 mx-auto flex justify-between" data-v-98043459><ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-2.5" data-v-98043459><li data-v-98043459><a href="/" class="mr-1" data-v-98043459> Home </a></li><li data-v-98043459><i class="fas fa-caret-right mr-1" data-v-98043459></i><a href="/campus-pass" class="mr-1" data-v-98043459> Document Review Sheet </a></li></ul><ul class="flex hover:text-green-800 text-white" data-v-98043459><li class="px-3 h-full flex items-center capitalize text-xs" data-v-98043459><a href="/_/campus-pass-admin" class="flex items-center" data-v-98043459></a></li><li class="hover:bg-green-800 bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-98043459><a href="/_/campus-pass-admin" class="flex items-center" data-v-98043459><i class="fa fa-user" aria-hidden="true" data-v-98043459></i></a></li></ul></div></div></div></div>',1)),k.value?(d(),i("div",J,[e("form",{onSubmit:$(M,["prevent"])},[e("div",K,[e("div",Q,[e("h2",Z,[t[16]||(t[16]=r(" Document Review Sheet Form ")),e("span",ee,v(s.value.document_code),1)]),e("div",te,[t[17]||(t[17]=r(" DRS No. ")),e("span",le,v(s.value.tracking_id),1)]),e("div",se,[e("div",ae,[e("div",oe,[e("div",re,[e("div",ne,[e("div",ie,[e("div",de,[t[18]||(t[18]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Originating Office "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),a(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Originating Office","onUpdate:modelValue":t[0]||(t[0]=l=>s.value.originating_office=l),required:""},null,512),[[p,s.value.originating_office]])]),e("div",pe,[t[19]||(t[19]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Email "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),e("div",ue,[a(e("input",{type:"email",class:"px-2 w-6/12 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=l=>s.value.originating_email=l),required:""},null,512),[[p,s.value.originating_email]])])]),e("div",me,[t[20]||(t[20]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Document Title "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),a(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Document Title","onUpdate:modelValue":t[2]||(t[2]=l=>s.value.document_title=l),required:""},null,512),[[p,s.value.document_title]])]),e("div",xe,[t[25]||(t[25]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Document Type "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",ce,[e("div",ge,[e("div",ve,[a(e("input",{type:"radio",value:"Manual","onUpdate:modelValue":t[3]||(t[3]=l=>s.value.document_type=l),class:"mr-1",id:"Manual"},null,512),[[u,s.value.document_type]]),t[21]||(t[21]=e("label",{class:"ml-2",for:"Manual"},[e("span",{class:"font-bold mr-1"},"Manual")],-1))]),e("div",fe,[a(e("input",{type:"radio",value:"Procedure","onUpdate:modelValue":t[4]||(t[4]=l=>s.value.document_type=l),class:"mr-1",id:"Procedure"},null,512),[[u,s.value.document_type]]),t[22]||(t[22]=e("label",{class:"ml-2",for:"Procedure"},[e("span",{class:"font-bold mr-1"},"Procedure")],-1))]),e("div",be,[a(e("input",{type:"radio",value:"Policy","onUpdate:modelValue":t[5]||(t[5]=l=>s.value.document_type=l),class:"mr-1",id:"Policy"},null,512),[[u,s.value.document_type]]),t[23]||(t[23]=e("label",{class:"ml-2",for:"Policy"},[e("span",{class:"font-bold mr-1"},"Policy")],-1))]),e("div",we,[a(e("input",{type:"radio",value:"Form or Template","onUpdate:modelValue":t[6]||(t[6]=l=>s.value.document_type=l),class:"mr-1",id:"FormTemplate"},null,512),[[u,s.value.document_type]]),t[24]||(t[24]=e("label",{class:"ml-2",for:"FormTemplate"},[e("span",{class:"font-bold mr-1"},"Form or Template")],-1))])])])]),e("div",_e,[t[29]||(t[29]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Status "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",ye,[e("div",he,[e("div",ke,[a(e("input",{type:"radio",value:"New","onUpdate:modelValue":t[7]||(t[7]=l=>s.value.status=l),onChange:t[8]||(t[8]=l=>V()),class:"mr-1",id:"New",ref:"fileInput"},null,544),[[u,s.value.status]]),t[26]||(t[26]=e("label",{class:"ml-2",for:"New"},[e("span",{class:"font-bold mr-1"},"New")],-1))]),e("div",Fe,[e("label",Ue,[e("span",Ve,[a(e("input",{type:"radio",value:"For Revision","onUpdate:modelValue":t[9]||(t[9]=l=>s.value.status=l),onChange:t[10]||(t[10]=l=>V()),class:"",id:"ForRevision"},null,544),[[u,s.value.status]])]),t[27]||(t[27]=e("span",{class:"font-bold mr-1"},"For Revision",-1)),t[28]||(t[28]=e("span",{class:"font-bold mr-2"},"No. ",-1)),a(e("input",{class:Y([b.value?"":"hidden","px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg py-1 rounded-sm text-xs"]),type:"text",placeholder:"Revision Number","onUpdate:modelValue":t[11]||(t[11]=l=>s.value.revision_number=l),ref:"fileInput"},null,2),[[p,s.value.revision_number]])])])])])]),e("div",De,[t[30]||(t[30]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Date "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),e("div",Se,[e("div",Ne,[_(z(H),{modelValue:s.value.schedule,"onUpdate:modelValue":t[12]||(t[12]=l=>s.value.schedule=l),"enable-time-picker":!1,name:"date","auto-apply":"","year-range":[2025,2025],"week-start":"0","min-date":P.value},null,8,["modelValue","min-date"])])])]),e("div",Re,[t[31]||(t[31]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Purpose "),e("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")])],-1)),a(e("input",{type:"text",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Purpose","onUpdate:modelValue":t[13]||(t[13]=l=>s.value.purpose=l),required:""},null,512),[[p,s.value.purpose]])]),e("div",Pe,[t[32]||(t[32]=e("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold whitespace-nowrap w-4/12"},[e("div",{class:"w-fit ml-auto pr-5"},[r(" Reference Document "),e("span",{class:"text-red-600 font-normal text-sm"},"*")])],-1)),e("div",Me,[e("input",{type:"file",multiple:"",onChange:C},null,32),m.value?(d(),i("div",Te,v(m.value),1)):x("",!0),(d(!0),i(B,null,L(w.value,l=>(d(),i("div",{key:l.url},[l.url.includes("jpg")||l.url.includes("png")?(d(),i("img",{key:0,src:l.url,alt:"Uploaded File",class:"w-80"},null,8,Ce)):x("",!0),e("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},v(l.name),9,qe)]))),128))])])])]),e("div",Oe,[e("div",je,[a(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"First Name","onUpdate:modelValue":t[14]||(t[14]=l=>s.value.originating_firstname=l),required:""},null,512),[[p,s.value.originating_firstname]]),a(e("input",{type:"text",class:"px-2 w-full rounded-sm lg:h-9 h-8 text-xs",placeholder:"Last Name","onUpdate:modelValue":t[15]||(t[15]=l=>s.value.originating_lastname=l),required:""},null,512),[[p,s.value.originating_lastname]])]),t[33]||(t[33]=e("div",{class:"border-t-2 border-black text-center"},"Originator’s Printed Name",-1))])])])])]),S.value?(d(),i("div",Ae," All fields are required information. Otherwise, type N/A if not applicable. ")):x("",!0),t[34]||(t[34]=e("div",{class:"pb-5 lg:px-5 px-3 mb-5"},[e("button",{class:"px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold lg:py-2 py-1.5 lg:w-fit w-full mx-auto block uppercase hover:bg-white border-2 border-green-900 hover:text-green-900 lg:text-sm text-xs"},[e("i",{class:"fa fa-paper-plane mr-2","aria-hidden":"true"}),r(" Submit ")])],-1))])])],32)])):x("",!0),F.value?(d(),i("div",Ee,t[35]||(t[35]=[D('<div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl" data-v-98043459><div class="flex items-center" data-v-98043459><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14" data-v-98043459></div><div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5" data-v-98043459><h1 class="font-bold text-3xl" data-v-98043459>Thanks for submitting! </h1><p class="font-light pt-3 pb-10" data-v-98043459> Your request has been sent! </p><p class="font-light text-xs italic mb-10" data-v-98043459>Please check your email.</p></div></div>',1)]))):x("",!0),_(O)])}}},Ke=G(Ie,[["__scopeId","data-v-98043459"]]);export{Ke as default};
