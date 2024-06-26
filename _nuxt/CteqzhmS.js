import{_ as j}from"./DEs9S_KI.js";import{_ as C}from"./Dw1dB_kK.js";import{u as L,g as E,r as u,h as q,c as V,a as e,i as d,v as P,f as s,b as f,n as A,t as I,k as B,C as M,l as r,o as O,p as F,e as N}from"./nj72hF3q.js";import"./vUEbHlag.js";import{a as R}from"./B6xwUs71.js";import{E as z}from"./MRqeYFZm.js";import{_ as G}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const a=m=>(F("data-v-41597b40"),m=m(),N(),m),$={class:"bg-gray-50"},Q={class:"lg:flex"},H={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},J={class:"w-full"},Y={class:"bg-green-800"},K={class:"lg:flex mx-auto justify-between py-2 px-3.5"},W={class:"lg:flex lg:items-center text-white gap-5"},X={class:"flex -mt-1"},Z=a(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ee={class:"text-sm"},te=a(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),se=a(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),le=[te,se],oe={class:"text-xs mb-5"},ae={class:"p-5"},ie={class:"shadow-lg w-full mx-auto p-3"},de=a(()=>e("div",{class:"lg:mb-4 text-lg font-medium"},"Create Procurement",-1)),ne={class:"mt-3"},re={class:"flex text-xs mb-3"},ce={class:""},ue={class:"lg:flex items-center"},me=a(()=>e("label",{class:""},"Open for Bids",-1)),pe={class:"lg:flex gap-3"},_e={class:"w-full mt-1"},ge=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate"}," START DATE ",-1)),fe={class:"w-full mt-1"},he=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," DEADLINE ",-1)),be={class:"w-full lg:mb-3 mt-1"},xe=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"leadtime"}," LEAD TIME ",-1)),ve={class:"w-full lg:mb-3 mt-1"},we=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," PROJECT CEILING BUDGET ",-1)),ye={class:"lg:w-1/2 w-full lg:mb-3 mt-1"},ke=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"quantity"}," QUANTITY ",-1)),Se={class:"lg:flex gap-3"},De={class:"w-full lg:mb-3 mt-1"},Te=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"}," TITLE ",-1)),Ue={class:"w-full mt-1"},je=a(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"lsuadd"}," LSU ADDRESS ",-1)),Ce={class:"mt-2 pb-3"},Le={class:"lg:flex mt-3"},Ee={class:"flex w-full"},qe={class:"w-fit lg:mx-0 mx-auto"},Ve={class:"w-56 shadow"},Pe=["src"],Ae={__name:"index",setup(m){const c=L(),n=E(),h=u(n.mainServer);q(()=>{n.user.isAuthenticated&&(n.user.email==="jorenleeluna24@gmail.com"||n.user.email==="procurement@lsu.edu.ph"||n.user.email==="jason.yap@lsu.edu.ph")?c.push("/_/panels/procurement/create"):c.push("/_/unauthorized")});const l=u({id:"",open_for_bids:"",title:"",start_date:"",lead_time:"",deadline:"",quantity:"",project_ceiling_budget:0,lsu_address:"La Salle University, La Salle St. Barangay Aguada Ozamiz City, Misamis Occidental, Philippines",specifications:"# Hello Editor",banner_image:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG",updated_at:new Date().toDateString(),created_by_name:"Procurement Admin",created_by_email:n.user.email,created_at:new Date().toDateString()}),v=u("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/procurement/files/"),p=u(!0),_=u(null),b=u("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"),w=i=>{_.value=i.target.files[0],b.value=URL.createObjectURL(_.value),l.value.banner_image=v.value+""+i.target.files[0].name},y=async()=>{let i=new FormData;i.append("image",_.value);let t={headers:{"Content-Type":"multipart/form-data"}};R.post(h.value+"/api/procurements/file/list/files/",i,t).then(g=>{console.log(g)})},k=()=>{c.push("/_/proc-admin"),n.removeToken()},S=i=>{c.push("/_/panels/procurement"),i.preventDefault()},D=i=>{c.push("/_/panels/procurement/create"),i.preventDefault()},T=async i=>{await $fetch(h.value+"/api/procurements/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:l.value}).then(t=>{console.log("response",t)})},x=async()=>{T(),_.value!==null&&y(),c.push({path:"/_/panels/procurement"})};return(i,t)=>{const g=j,U=C;return O(),V("div",$,[e("div",null,[e("div",Q,[d(e("div",H,[f(g,{goToList:S,goToCreate:D})],512),[[P,s(p)]]),e("div",J,[e("div",Y,[e("div",K,[e("div",W,[e("div",{onClick:t[0]||(t[0]=o=>p.value=!s(p)),class:"w-10 px-1.5"},[e("i",{class:A(["fa text-3xl text-white",s(p)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",X,[Z,e("h1",ee,I(s(n).user.email),1)])]),e("button",{onClick:k,class:"flex hover:font-bold pt-1"},le)])]),e("div",oe,[e("div",ae,[e("div",ie,[de,e("form",{onSubmit:B(x,["prevent"]),class:""},[e("div",ne,[e("ul",null,[e("li",re,[e("ul",ce,[e("li",ue,[d(e("input",{type:"checkbox",id:"checking",name:"checking",value:"",class:"mt-0.5 mr-1","onUpdate:modelValue":t[1]||(t[1]=o=>s(l).open_for_bids=o),required:""},null,512),[[M,s(l).open_for_bids]]),me])])])])]),e("div",pe,[e("div",_e,[ge,d(e("input",{class:"shadow-md py-1 px-2 rounded-sm w-full border-gray-200",id:"startdate",type:"date","onUpdate:modelValue":t[2]||(t[2]=o=>s(l).start_date=o),placeholder:"Start Date",required:""},null,512),[[r,s(l).start_date]])]),e("div",fe,[he,d(e("input",{class:"shadow-md px-2 py-1 rounded-sm w-full border-gray-200",id:"deadline",type:"date","onUpdate:modelValue":t[3]||(t[3]=o=>s(l).deadline=o),placeholder:"Deadline",required:""},null,512),[[r,s(l).deadline]])]),e("div",be,[xe,d(e("input",{class:"shadow-md px-2 py-1 rounded-sm w-full border-gray-200 capitalize",id:"leadtime",type:"text","onUpdate:modelValue":t[4]||(t[4]=o=>s(l).lead_time=o),placeholder:"Lead Time",required:""},null,512),[[r,s(l).lead_time]])]),e("div",ve,[we,d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"project","onUpdate:modelValue":t[5]||(t[5]=o=>s(l).project_ceiling_budget=o),placeholder:"Project Ceiling Budget",required:""},null,512),[[r,s(l).project_ceiling_budget]])]),e("div",ye,[ke,d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"quantity","onUpdate:modelValue":t[6]||(t[6]=o=>s(l).quantity=o),placeholder:"Quantity",required:""},null,512),[[r,s(l).quantity]])])]),e("div",Se,[e("div",De,[Te,d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":t[7]||(t[7]=o=>s(l).title=o),placeholder:"Title",required:""},null,512),[[r,s(l).title]])]),e("div",Ue,[je,d(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"lsuadd","onUpdate:modelValue":t[8]||(t[8]=o=>s(l).lsu_address=o),placeholder:"LSU Address",required:""},null,512),[[r,s(l).lsu_address]])])]),e("div",Ce,[f(s(z),{modelValue:s(l).specifications,"onUpdate:modelValue":t[9]||(t[9]=o=>s(l).specifications=o),language:"en-US",toolbarsExclude:"github"},null,8,["modelValue"])]),e("div",Le,[e("div",Ee,[e("div",null,[e("input",{type:"file",onChange:w,accept:"image/png, image/jpeg"},null,32)])]),e("div",qe,[e("div",Ve,[e("img",{class:"lg:w-full h-56 object-contain",src:s(b)},null,8,Pe)])])]),e("div",{class:"w-full justify-between flex mt-5"},[e("div",{type:"submit",onClick:x,class:"text-white bg-green-800 rounded-md text-sm w-auto mr-0 ml-auto px-5 py-2.5 text-center"}," Create Post ")])],32)])])])])])]),f(U)])}}},Ge=G(Ae,[["__scopeId","data-v-41597b40"]]);export{Ge as default};
