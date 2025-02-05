import{_ as j}from"./D3YnI3Fy.js";import{_ as D}from"./DKDzRd4Z.js";import{m as S,u as T,r,q as C,c as P,a as e,v as d,x as U,n as s,b as g,z as L,t as B,A as E,B as u,C as F,d as b,o as V}from"./CN01ED5J.js";import"./5JjjnmY2.js";import{a as N}from"./upsvKRUO.js";/* empty css        */import{_ as O}from"./DlAUqK2U.js";import"./C5S46NFB.js";const q={class:"bg-gray-50"},I={class:"lg:flex"},M={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},A={class:"w-full"},$={class:"bg-green-800"},z={class:"lg:flex mx-auto justify-between py-2 px-3.5"},G={class:"lg:flex lg:items-center text-white gap-5"},H={class:"flex -mt-1"},R={class:"text-sm"},J={class:"text-xs mb-5"},K={class:"p-5"},Q={class:"shadow-lg w-full mx-auto p-3"},W={class:"lg:flex gap-3"},X={class:"w-full lg:mb-3 mt-1"},Y={class:"w-full lg:mb-3 mt-1"},Z={class:"w-full mt-1"},ee={class:"w-full lg:mb-3 mt-1"},te={class:"w-6/12 lg:mb-3 mt-1"},se={class:"lg:flex gap-3"},oe={class:"w-full lg:mb-3 mt-1"},le={class:"w-full lg:mb-3 mt-1"},ae={class:""},ie={class:"mt-3 w-full"},de={class:"mt-3"},ne={class:"shadow"},re=["src"],ue={__name:"index",setup(me){const n=S(),a=T(),_=r(a.mainDevServer);C(()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="procurement@lsu.edu.ph"||a.user.email==="jason.yap@lsu.edu.ph")?n.push("/_/panels/procurement/create"):n.push("/_/unauthorized")});const o=r({id:"",date_posted:"",deadline:"",project_budget:0,nature_of_project:"",bid_status:"",title:"",document_file:"https://pdfobject.com/pdf/sample.pdf",specifications:"# Hello Editor",banner_image:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG",updated_at:new Date().toDateString(),created_by_name:"Procurement Admin",created_by_email:a.user.email,created_at:new Date().toDateString()});r("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/procurement/files/");const m=r(!0),c=r(null);r("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg");const x=async()=>{let i=new FormData;i.append("image",c.value);let t={headers:{"Content-Type":"multipart/form-data"}};N.post("https://tech.lsu.edu.ph/api/image_url/file/list/files/",i,t).then(p=>{console.log(p)})},v=()=>{n.push("/_/proc-admin"),a.removeToken()},w=i=>{n.push("/_/panels/procurement"),i.preventDefault()},h=i=>{n.push("/_/panels/procurement/create"),i.preventDefault()},y=async i=>{await $fetch(_.value+"/api/procurements/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:o.value}).then(t=>{console.log("response",t)})},f=async()=>{y(),console.log("submitForm"),c.value!==null&&x(),n.push({path:"/_/panels/procurement"})};return(i,t)=>{const p=j,k=D;return V(),P("div",q,[e("div",null,[e("div",I,[d(e("div",M,[g(p,{goToList:w,goToCreate:h})],512),[[U,s(m)]]),e("div",A,[e("div",$,[e("div",z,[e("div",G,[e("div",{onClick:t[0]||(t[0]=l=>m.value=!s(m)),class:"w-10 px-1.5"},[e("i",{class:L(["fa text-3xl text-white",s(m)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",H,[t[8]||(t[8]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",R,B(s(a).user.email),1)])]),e("button",{onClick:v,class:"flex hover:font-bold pt-1"},t[9]||(t[9]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",J,[e("div",K,[e("div",Q,[t[20]||(t[20]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create Bid Post",-1)),e("form",{onSubmit:E(f,["prevent"]),class:""},[e("div",W,[e("div",X,[t[10]||(t[10]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate"}," DATE POSTED ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"startdate",type:"date","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).date_posted=l),placeholder:"Start Date",required:""},null,512),[[u,s(o).date_posted]])]),e("div",Y,[t[11]||(t[11]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," DEADLINE OF SUBMISSION ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"deadline",type:"date","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).deadline=l),placeholder:"Deadline",required:""},null,512),[[u,s(o).deadline]])]),e("div",Z,[t[12]||(t[12]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," PROJECT CEILING BUDGET ",-1)),d(e("input",{class:"shadow-md pt-2 pb-2.5 px-2 rounded-sm w-full border",id:"project","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).project_ceiling_budget=l),placeholder:"0.00",required:""},null,512),[[u,s(o).project_ceiling_budget]])]),e("div",ee,[t[13]||(t[13]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"nature_of_project"}," Nature of Project ",-1)),d(e("input",{class:"shadow-md pt-2 pb-2.5 px-2 rounded-sm w-full border",id:"nature_of_project","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).nature_of_project=l),placeholder:"Nature of Project",required:""},null,512),[[u,s(o).nature_of_project]])]),e("div",te,[t[15]||(t[15]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"nature_of_project"}," Bid Status ",-1)),d(e("select",{class:"shadow-md p-2 rounded-sm w-full border",id:"nature_of_project","onUpdate:modelValue":t[5]||(t[5]=l=>s(o).bid_status=l),required:""},t[14]||(t[14]=[e("option",{value:"announcement",selected:""},"Announcement",-1),e("option",{value:"on hold"},"On Hold",-1),e("option",{value:"ongoing"},"Ongoing",-1),e("option",{value:"completed"},"Completed",-1)]),512),[[F,s(o).bid_status]])])]),e("div",se,[e("div",oe,[t[16]||(t[16]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"}," TITLE ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":t[6]||(t[6]=l=>s(o).title=l),placeholder:"Title",required:""},null,512),[[u,s(o).title]])]),e("div",le,[t[17]||(t[17]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"},[b(" PDF Link "),e("i",{class:"fa fa-link"})],-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":t[7]||(t[7]=l=>s(o).document_file=l),placeholder:"Paste PDF File Link",required:""},null,512),[[u,s(o).document_file]])])]),e("div",ae,[e("div",ie,[t[18]||(t[18]=e("div",{class:""},[e("div")],-1)),e("div",de,[e("div",ne,[e("embed",{src:s(o).document_file,style:{width:"100%",height:"500px"}},null,8,re)])])])]),e("div",{class:"w-full justify-between flex mt-5"},[e("div",{type:"submit",onClick:f,class:"text-white cursor-pointer uppercase bg-green-800 hover:bg-white border border-green-700 hover:text-green-800 rounded-md text-sm w-fit mx-auto px-5 py-2.5 text-center hover:font-bold"},t[19]||(t[19]=[e("i",{class:"fa fa-paper-plane mr-3"},null,-1),b(" Submit ")]))])],32)])])])])])]),g(k)])}}},we=O(ue,[["__scopeId","data-v-4ca22ba5"]]);export{we as default};
