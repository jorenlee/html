import{_ as C}from"./Cq65nL5y.js";import{_ as T}from"./Bsetu9yB.js";import{u as S,g as j,m as B,r as c,h as M,q as R,c as U,a as e,i as u,v as V,f as n,b as f,j as $,n as D,t as E,k as L,l as h,o as z}from"./BWwZjhPc.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const A={class:""},F={class:"flex"},N={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},O={class:"w-full lg:h-screen"},q={class:"bg-green-800"},I={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex lg:items-center text-white gap-5"},G={class:"flex -mt-1"},H=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),J={class:"text-sm"},K=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),Q=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),W=[K,Q],X={class:"text-xs mb-5"},Y={class:"p-5"},Z=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create CITS",-1),ee={class:"lg:flex"},te={class:"w-full md:w-1/2 mt-1"},se=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Email ",-1),ae={class:"w-full md:w-1/2 mt-1 lg:ml-3"},oe=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Role ",-1),le=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Update ")],-1),_e={__name:"[id]",async setup(ie){let r,m;const l=S(),s=j(),_=B(),p=c(s.mainServer);M(()=>{s.user.isAuthenticated&&(s.user.email==="jorenleeluna24@gmail.com"||s.user.email==="procurement@lsu.edu.ph")?l.push("/_/panels/cits/edit/"+_.params.id):l.push("/_/unauthorized")});const t=([r,m]=R(()=>$fetch(p.value+"/api/cits/"+_.params.id+"/").catch(o=>o.data)),r=await r,m(),r),v=c({firstname:t.value.firstname,middlename:t.value.middlename,lastname:t.value.lastname,lsu_email:s.user.email,admin_level_role:s.user.email,lsu_partner_category:t.value.lsu_partner_category,office:t.value.office,office_abbr:t.value.office_abbr,department:t.value.department,department_abbr:t.value.department_abbr,created_at:t.value.created_at});let a=c(!0);const b=()=>{l.push("/_/cits-admin"),s.removeToken()},g=()=>{l.push("/_/panels/cits")},x=()=>{l.push("/_/panels/cits/create")},w=async()=>{await $fetch(p.value+"/api/cits/"+id.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:v.value}).then(o=>{l.push({path:"/_/panels/cits"})})};return(o,i)=>{const y=C,k=T;return z(),U("div",A,[e("div",F,[u(e("div",N,[f(y,{goToList:g,goToCreate:x})],512),[[V,n(a)]]),e("div",O,[e("div",q,[e("div",I,[e("div",P,[e("div",{onClick:i[0]||(i[0]=d=>$(a)?a.value=!n(a):a=!n(a)),class:"w-10 px-1.5"},[e("i",{class:D(["fa text-3xl text-white",n(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",G,[H,e("h1",J,E(n(s).user.email),1)])]),e("button",{onClick:b,class:"flex hover:font-bold pt-1"},W)])]),e("div",X,[e("div",Y,[Z,e("form",{onSubmit:L(w,["prevent"])},[e("div",ee,[e("div",te,[se,u(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":i[1]||(i[1]=d=>o.email=d),placeholder:"Email"},null,512),[[h,o.email]])]),e("div",ae,[oe,u(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":i[2]||(i[2]=d=>o.role=d),placeholder:"Role"},null,512),[[h,o.role]])])]),le],32)])])])]),f(k)])}}};export{_e as default};
