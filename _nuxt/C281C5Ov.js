import{_ as C}from"./D4izQ9AT.js";import{_ as T}from"./CBDeNYcL.js";import{m as S,u as B,D,r as u,p as M,E as R,c as U,a as e,q as m,v as $,n,b as _,s as j,x as E,t as V,G as L,B as v,o as z}from"./KAqmhyXQ.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const A={class:""},F={class:"flex"},N={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},O={class:"w-full lg:h-screen"},q={class:"bg-green-800"},G={class:"lg:flex mx-auto justify-between py-2 px-3.5"},I={class:"lg:flex lg:items-center text-white gap-5"},P={class:"flex -mt-1"},H={class:"text-sm"},J={class:"text-xs mb-5"},K={class:"p-5"},Q={class:"lg:flex"},W={class:"w-full md:w-1/2 mt-1"},X={class:"w-full md:w-1/2 mt-1 lg:ml-3"},le={__name:"[id]",async setup(Y){let r,c;const i=S(),a=B(),p=D(),f=u(a.mainDevServer);M(()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="procurement@lsu.edu.ph")?i.push("/_/panels/cits/edit/"+p.params.id):i.push("/_/unauthorized")});const s=([r,c]=R(()=>$fetch(f.value+"/api/cits/"+p.params.id+"/").catch(o=>o.data)),r=await r,c(),r),b=u({firstname:s.value.firstname,middlename:s.value.middlename,lastname:s.value.lastname,lsu_email:a.user.email,admin_level_role:a.user.email,lsu_partner_category:s.value.lsu_partner_category,office:s.value.office,office_abbr:s.value.office_abbr,department:s.value.department,department_abbr:s.value.department_abbr,created_at:s.value.created_at});let l=u(!0);const h=()=>{i.push("/_/cits-admin"),a.removeToken()},x=()=>{i.push("/_/panels/cits")},g=()=>{i.push("/_/panels/cits/create")},w=async()=>{await $fetch(f.value+"/api/cits/"+id.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:b.value}).then(o=>{i.push({path:"/_/panels/cits"})})};return(o,t)=>{const y=C,k=T;return z(),U("div",A,[e("div",F,[m(e("div",N,[_(y,{goToList:x,goToCreate:g})],512),[[$,n(l)]]),e("div",O,[e("div",q,[e("div",G,[e("div",I,[e("div",{onClick:t[0]||(t[0]=d=>j(l)?l.value=!n(l):l=!n(l)),class:"w-10 px-1.5"},[e("i",{class:E(["fa text-3xl text-white",n(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",P,[t[3]||(t[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",H,V(n(a).user.email),1)])]),e("button",{onClick:h,class:"flex hover:font-bold pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",J,[e("div",K,[t[8]||(t[8]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create CITS",-1)),e("form",{onSubmit:L(w,["prevent"])},[e("div",Q,[e("div",W,[t[5]||(t[5]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Email ",-1)),m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":t[1]||(t[1]=d=>o.email=d),placeholder:"Email"},null,512),[[v,o.email]])]),e("div",X,[t[6]||(t[6]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Role ",-1)),m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":t[2]||(t[2]=d=>o.role=d),placeholder:"Role"},null,512),[[v,o.role]])])]),t[7]||(t[7]=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Update ")],-1))],32)])])])]),_(k)])}}};export{le as default};
