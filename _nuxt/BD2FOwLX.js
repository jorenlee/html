import{_ as b}from"./DQ20af-2.js";import{_ as w}from"./BHzKnAnp.js";import{u as y,g as k,r,h as C,c as S,a as e,i as d,v as T,f as i,b as c,j,n as B,t as M,k as R,l as u,o as V}from"./DV0xYwsX.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const D={class:""},E={class:"flex"},L={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},O={class:"w-full lg:h-screen"},P={class:"bg-green-800"},U={class:"lg:flex mx-auto justify-between py-2 px-3.5"},$={class:"lg:flex lg:items-center text-white gap-5"},z={class:"flex -mt-1"},F=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),N={class:"text-sm"},A=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),H=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),I=[A,H],q={class:"text-xs mb-5"},G={class:"p-5"},J=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create CITS",-1),K={class:"w-2/5 mt-1"},Q=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Email ",-1),W={class:"w-2/5 mt-1"},X=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2 mt-2",for:"startdate-1"}," Role ",-1),Y=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1),ie={__name:"index",setup(Z){const o=y(),t=k(),m=r(t.mainServer);C(()=>{t.user.isAuthenticated&&(t.user.email==="jorenleeluna24@gmail.com"||t.user.email==="procurement@lsu.edu.ph")?o.push("/_/panels/cits/create"):o.push("/_/unauthorized")});const _=r({firstname:"",middlename:"",lastname:"",lsu_email:t.user.email,admin_level_role:"",lsu_partner_category:"",office:"",office_abbr:"",department:"",department_abbr:"",created_at:""});let s=r(!0);const p=()=>{o.push("/_/cits-admin"),t.removeToken()},h=()=>{o.push("/_/panels/cits")},f=()=>{o.push("/_/panels/cits/create")},x=async()=>{errors.value=[],email==""&&role==""&&errors.value.push("Please fill in all fields."),errors.value.length==0&&await $fetch(m.value+"/api/cits/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(l=>{o.push({path:"/_/panels/cits"})})};return(l,a)=>{const g=b,v=w;return V(),S("div",D,[e("div",E,[d(e("div",L,[c(g,{goToList:h,goToCreate:f})],512),[[T,i(s)]]),e("div",O,[e("div",P,[e("div",U,[e("div",$,[e("div",{onClick:a[0]||(a[0]=n=>j(s)?s.value=!i(s):s=!i(s)),class:"w-10 px-1.5"},[e("i",{class:B(["fa text-3xl text-white",i(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",z,[F,e("h1",N,M(i(t).user.email),1)])]),e("button",{onClick:p,class:"flex hover:font-bold pt-1"},I)])]),e("div",q,[e("div",G,[J,e("form",{onSubmit:R(x,["prevent"])},[e("div",null,[e("div",K,[Q,d(e("input",{class:"shadow-md p-2 rounded-sm w-5/12 border",id:"field_1","onUpdate:modelValue":a[1]||(a[1]=n=>l.email=n),placeholder:"Email Here"},null,512),[[u,l.email]])]),e("div",W,[X,d(e("input",{class:"shadow-md p-2 rounded-sm w-5/12 border",id:"field_2","onUpdate:modelValue":a[2]||(a[2]=n=>l.role=n),placeholder:"Role"},null,512),[[u,l.role]])])]),Y],32)])])])]),c(v)])}}};export{ie as default};
