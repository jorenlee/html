import{_ as L}from"./D7vPCk_Z.js";import{_ as A}from"./i-NoGekX.js";import{u as I,g as B,m as P,h as R,r as p,q,c as M,a as e,i as n,v as O,f as t,b as v,j as F,n as N,t as $,k as z,C as G,l as m,o as Q,p as J,e as Y}from"./65A31KfU.js";import"./vUEbHlag.js";import{a as H}from"./B6xwUs71.js";import{E as K}from"./-5zQ-okO.js";import{_ as W}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const d=_=>(J("data-v-b0a90847"),_=_(),Y(),_),X={class:"bg-gray-50"},Z={class:"lg:flex"},ee={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},te={class:"w-full"},se={class:"bg-green-800"},ae={class:"lg:flex mx-auto justify-between py-2 px-3.5"},oe={class:"lg:flex lg:items-center text-white gap-5"},le={class:"flex -mt-1"},ie=d(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),de={class:"text-sm"},ne=d(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),re=d(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ce=[ne,re],ue={class:"w-full text-xs mb-5"},me={class:"p-5"},pe={class:"shadow-lg w-full mx-auto p-3"},_e=d(()=>e("div",{class:"lg:mb-4 text-lg font-medium"},"Edit Procurement",-1)),fe={class:"mt-3"},ge={class:"flex text-xs mb-3"},he={class:""},be={class:"lg:flex items-center"},xe=d(()=>e("label",{class:""},"Open for Bids",-1)),ve={class:"lg:flex gap-3"},we={class:"w-full mt-1"},ye=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate"}," START DATE ",-1)),ke={class:"w-full mt-1"},Se=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," DEADLINE ",-1)),Te={class:"w-full lg:mb-3 mt-1"},Ue=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"leadtime"}," LEAD TIME ",-1)),De={class:"w-full lg:mb-3 mt-1"},je=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"project"}," PROJECT CEILING BUDGET ",-1)),Ce={class:"lg:w-1/2 lg:mb-3 mt-1"},Ee=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"quantity"}," QUANTITY ",-1)),Ve={class:"lg:flex gap-3"},Le={class:"w-full lg:mb-3 mt-1"},Ae=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"title"}," TITLE ",-1)),Ie={class:"w-full mt-1"},Be=d(()=>e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"lsuadd"}," LSU ADDRESS ",-1)),Pe={class:"mt-2 pb-3"},Re={class:"lg:flex mt-3"},qe={class:"flex w-full"},Me={class:"w-fit lg:mx-0 mx-auto"},Oe={class:"w-56 shadow"},Fe=["src"],Ne={__name:"[id]",async setup(_){let f,w;const c=I(),r=B(),g=P();R(()=>{r.user.isAuthenticated&&(r.user.email==="jorenleeluna24@gmail.com"||r.user.email==="procurement@lsu.edu.ph"||r.user.email==="jason.yap@lsu.edu.ph")?c.push("/_/panels/procurement/edit/"+g.params.id):c.push("/_/unauthorized")});const h=p(r.mainServer),l=([f,w]=q(()=>$fetch(h.value+"/api/procurements/"+g.params.id+"/").catch(i=>i.data)),f=await f,w(),f),a=p({id:l.id,open_for_bids:l.open_for_bids,title:l.title,start_date:l.start_date,lead_time:l.lead_time,deadline:l.deadline,quantity:l.quantity,project_ceiling_budget:l.project_ceiling_budget,lsu_address:l.lsu_address,specifications:l.specifications,banner_image:l.banner_image,updated_at:new Date().toDateString(),created_by_name:"Procurement Admin",created_by_email:r.user.email,created_at:l.updated_at});let y=p(l.banner_image),u=p(!0);const b=p(),S=p("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/"),T=i=>{b.value=i.target.files[0],y.value=URL.createObjectURL(b.value),a.value.banner_image=S.value+""+i.target.files[0].name},U=async()=>{let i=new FormData;i.append("image",b.value);let s={headers:{"Content-Type":"multipart/form-data"}};H.post(h.value+"/api/procurements/file/list/files/",i,s).then(x=>{console.log(x),c.push({path:"/_/panels/procurement"})})},D=()=>{c.push("/_/proc-admin"),r.removeToken()},j=()=>{c.push("/_/panels/procurement")},C=()=>{c.push("/_/panels/procurement/create")},E=async()=>{await $fetch(h.value+"/api/procurements/"+g.params.id+"/edit/",{method:"PUT",body:a.value}).then(i=>{console.log("response",i),c.push({path:"/_/panels/procurement"})})},k=async i=>{E(),U(),i.preventDefault()};return(i,s)=>{const x=L,V=A;return Q(),M("div",X,[e("div",null,[e("div",Z,[n(e("div",ee,[v(x,{goToList:j,goToCreate:C})],512),[[O,t(u)]]),e("div",te,[e("div",se,[e("div",ae,[e("div",oe,[e("div",{onClick:s[0]||(s[0]=o=>F(u)?u.value=!t(u):u=!t(u)),class:"w-10 px-1.5"},[e("i",{class:N(["fa text-3xl text-white",t(u)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",le,[ie,e("h1",de,$(t(r).user.email),1)])]),e("button",{onClick:D,class:"flex hover:font-bold pt-1"},ce)])]),e("div",ue,[e("div",me,[e("div",pe,[_e,e("form",{onSubmit:z(k,["prevent"]),class:""},[e("div",fe,[e("ul",null,[e("li",ge,[e("ul",he,[e("li",be,[n(e("input",{type:"checkbox",id:"checking",name:"checking",value:"",class:"mt-0.5 mr-1","onUpdate:modelValue":s[1]||(s[1]=o=>t(a).open_for_bids=o)},null,512),[[G,t(a).open_for_bids]]),xe])])])])]),e("div",ve,[e("div",we,[ye,n(e("input",{class:"shadow-md py-1 px-2 rounded-sm w-full border-gray-200",id:"startdate",type:"date","onUpdate:modelValue":s[2]||(s[2]=o=>t(a).start_date=o),placeholder:"Start Date"},null,512),[[m,t(a).start_date]])]),e("div",ke,[Se,n(e("input",{class:"shadow-md px-2 py-1 rounded-sm w-full border-gray-200",id:"deadline",type:"date","onUpdate:modelValue":s[3]||(s[3]=o=>t(a).deadline=o),placeholder:"Deadline"},null,512),[[m,t(a).deadline]])]),e("div",Te,[Ue,n(e("input",{class:"shadow-md px-2 py-1 rounded-sm w-full border-gray-200 capitalize",id:"leadtime",type:"text","onUpdate:modelValue":s[4]||(s[4]=o=>t(a).lead_time=o),placeholder:"Lead Time"},null,512),[[m,t(a).lead_time]])]),e("div",De,[je,n(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"project","onUpdate:modelValue":s[5]||(s[5]=o=>t(a).project_ceiling_budget=o),placeholder:"Project Ceiling Budget"},null,512),[[m,t(a).project_ceiling_budget]])]),e("div",Ce,[Ee,n(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"quantity","onUpdate:modelValue":s[6]||(s[6]=o=>t(a).quantity=o),placeholder:"Quantity"},null,512),[[m,t(a).quantity]])])]),e("div",Ve,[e("div",Le,[Ae,n(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"title","onUpdate:modelValue":s[7]||(s[7]=o=>t(a).title=o),placeholder:"Title"},null,512),[[m,t(a).title]])]),e("div",Ie,[Be,n(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"lsuadd","onUpdate:modelValue":s[8]||(s[8]=o=>t(a).lsu_address=o),placeholder:"LSU Address"},null,512),[[m,t(a).lsu_address]])])]),e("div",Pe,[v(t(K),{modelValue:t(a).specifications,"onUpdate:modelValue":s[9]||(s[9]=o=>t(a).specifications=o),language:"en-US",toolbarsExclude:"github",onOnSave:i.onSave},null,8,["modelValue","onOnSave"])]),e("div",Re,[e("div",qe,[e("div",null,[e("input",{type:"file",onChange:T,accept:"image/png, image/jpeg"},null,32)])]),e("div",Me,[e("div",Oe,[e("img",{class:"lg:w-full h-56 object-contain",src:t(y)},null,8,Fe)])])]),e("div",{class:"w-full justify-between flex mt-5"},[e("div",{type:"submit",onClick:k,class:"text-white bg-green-800 rounded-md text-sm w-auto mr-0 ml-auto px-5 py-2.5 text-center"}," Update ")])],32)])])])])])]),v(V)])}}},We=W(Ne,[["__scopeId","data-v-b0a90847"]]);export{We as default};
