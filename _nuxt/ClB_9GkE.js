import{_ as D}from"./CZqXgP0S.js";import{_ as S}from"./H0M4CirM.js";import{m as T,u as C,D as E,p as U,r as c,E as P,c as V,a as e,q as d,v as B,n as s,b as _,s as q,x as F,t as L,G as N,B as u,C as O,d as x,o as I}from"./BRUhIFhN.js";import"./5JjjnmY2.js";/* empty css        */import{_ as M}from"./DlAUqK2U.js";import"./C5S46NFB.js";const A={class:"bg-gray-50"},$={class:"lg:flex"},R={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},G={class:"w-full"},z={class:"bg-green-800"},H={class:"lg:flex mx-auto justify-between py-2 px-3.5"},J={class:"lg:flex lg:items-center text-white gap-5"},K={class:"flex -mt-1"},Q={class:"text-sm"},W={class:"w-full text-xs mb-5"},X={class:"p-5"},Y={class:"shadow-lg w-full mx-auto p-3"},Z={class:"lg:flex gap-3"},ee={class:"w-full lg:mb-3 mt-1"},te={class:"w-full lg:mb-3 mt-1"},se={class:"w-full mt-1"},oe={class:"w-full lg:mb-3 mt-1"},le={class:"w-6/12 lg:mb-3 mt-1"},de={class:"lg:flex gap-3"},ae={class:"w-full lg:mb-3 mt-1"},ie={class:"w-full lg:mb-3 mt-1"},re={class:""},ne={class:"mt-3 w-full"},ue={class:"mt-3"},me={class:"shadow"},pe=["src"],ce={__name:"[id]",async setup(fe){let m,f;const r=T(),a=C(),p=E();U(()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="procurement@lsu.edu.ph"||a.user.email==="jason.yap@lsu.edu.ph")?r.push("/_/panels/procurement/edit/"+p.params.id):r.push("/_/unauthorized")});const b=c(a.mainDevServer),o=([m,f]=P(()=>$fetch(b.value+"/api/procurements/"+p.params.id+"/").catch(n=>n.data)),m=await m,f(),m);let i=c(!0);c("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/");const v=()=>{r.push("/_/proc-admin"),a.removeToken()},w=()=>{r.push("/_/panels/procurement")},h=()=>{r.push("/_/panels/procurement/create")},k=async()=>{console.log("submitForm"),await $fetch(b.value+"/api/procurements/"+p.params.id+"/edit/",{method:"PUT",body:o}).then(n=>{console.log("response",n),r.push({path:"/_/panels/procurement"})})},g=async n=>{k(),n.preventDefault()};return(n,t)=>{const y=D,j=S;return I(),V("div",A,[e("div",null,[e("div",$,[d(e("div",R,[_(y,{goToList:w,goToCreate:h})],512),[[B,s(i)]]),e("div",G,[e("div",z,[e("div",H,[e("div",J,[e("div",{onClick:t[0]||(t[0]=l=>q(i)?i.value=!s(i):i=!s(i)),class:"w-10 px-1.5"},[e("i",{class:F(["fa text-3xl text-white",s(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",K,[t[8]||(t[8]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Q,L(s(a).user.email),1)])]),e("button",{onClick:v,class:"flex hover:font-bold pt-1"},t[9]||(t[9]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",W,[e("div",X,[e("div",Y,[t[20]||(t[20]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Edit Procurement",-1)),e("form",{onSubmit:N(g,["prevent"]),class:""},[e("div",Z,[e("div",ee,[t[10]||(t[10]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate"}," DATE POSTED ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"startdate",type:"date","onUpdate:modelValue":t[1]||(t[1]=l=>s(o).date_posted=l),placeholder:"Start Date",required:""},null,512),[[u,s(o).date_posted]])]),e("div",te,[t[11]||(t[11]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," DEADLINE OF SUBMISSION ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"deadline",type:"date","onUpdate:modelValue":t[2]||(t[2]=l=>s(o).deadline=l),placeholder:"Deadline",required:""},null,512),[[u,s(o).deadline]])]),e("div",se,[t[12]||(t[12]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," PROJECT CEILING BUDGET ",-1)),d(e("input",{class:"shadow-md pt-2 pb-2.5 px-2 rounded-sm w-full border",id:"project","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).project_budget=l),placeholder:"0.00",required:""},null,512),[[u,s(o).project_budget]])]),e("div",oe,[t[13]||(t[13]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"nature_of_project"}," Nature of Project ",-1)),d(e("input",{class:"shadow-md pt-2 pb-2.5 px-2 rounded-sm w-full border",id:"nature_of_project","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).nature_of_project=l),placeholder:"Nature of Project",required:""},null,512),[[u,s(o).nature_of_project]])]),e("div",le,[t[15]||(t[15]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"nature_of_project"}," Bid Status ",-1)),d(e("select",{class:"shadow-md p-2 rounded-sm w-full border",id:"nature_of_project","onUpdate:modelValue":t[5]||(t[5]=l=>s(o).bid_status=l),required:""},t[14]||(t[14]=[e("option",{value:"announcement",selected:""},"Announcement",-1),e("option",{value:"on hold"},"On Hold",-1),e("option",{value:"ongoing"},"Ongoing",-1),e("option",{value:"completed"},"Completed",-1)]),512),[[O,s(o).bid_status]])])]),e("div",de,[e("div",ae,[t[16]||(t[16]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"}," TITLE ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":t[6]||(t[6]=l=>s(o).title=l),placeholder:"Title",required:""},null,512),[[u,s(o).title]])]),e("div",ie,[t[17]||(t[17]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"},[x(" PDF Link "),e("i",{class:"fa fa-link"})],-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":t[7]||(t[7]=l=>s(o).document_file=l),placeholder:"Paste PDF File Link",required:""},null,512),[[u,s(o).document_file]])])]),e("div",re,[e("div",ne,[t[18]||(t[18]=e("div",{class:""},[e("div")],-1)),e("div",ue,[e("div",me,[e("embed",{src:s(o).document_file,style:{width:"100%",height:"500px"}},null,8,pe)])])])]),e("div",{class:"w-full justify-between flex mt-5"},[e("div",{type:"submit",onClick:g,class:"text-white cursor-pointer uppercase bg-green-800 hover:bg-white border border-green-700 hover:text-green-800 rounded-md text-sm w-fit mx-auto px-5 py-2.5 text-center hover:font-bold"},t[19]||(t[19]=[e("i",{class:"fa fa-save mr-2"},null,-1),x(" Save ")]))])],32)])])])])])]),_(j)])}}},ke=M(ce,[["__scopeId","data-v-1e4f6eda"]]);export{ke as default};
