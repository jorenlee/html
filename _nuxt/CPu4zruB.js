import{_ as g}from"./BImOGcEu.js";import{_ as w}from"./DR2gKwrO.js";import{m as y,u as k,r as n,q as C,c as S,a as e,v as d,x as T,n as i,b as u,y as B,z as M,t as j,A as D,B as m,o as R}from"./LLT7leoD.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const V={class:""},$={class:"flex"},z={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},E={class:"w-full lg:h-screen"},L={class:"bg-green-800"},O={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex lg:items-center text-white gap-5"},U={class:"flex -mt-1"},A={class:"text-sm"},F={class:"text-xs mb-5"},N={class:"p-5"},q={class:"w-2/5 mt-1"},H={class:"w-2/5 mt-1"},X={__name:"index",setup(I){const a=y(),s=k(),p=n(s.mainDevServer);C(()=>{s.user.isAuthenticated&&(s.user.email==="jorenleeluna24@gmail.com"||s.user.email==="procurement@lsu.edu.ph")?a.push("/_/panels/cits/create"):a.push("/_/unauthorized")});const c=n({firstname:"",middlename:"",lastname:"",lsu_email:s.user.email,admin_level_role:"",lsu_partner_category:"",office:"",office_abbr:"",department:"",department_abbr:"",created_at:""});let o=n(!0);const f=()=>{a.push("/_/cits-admin"),s.removeToken()},_=()=>{a.push("/_/panels/cits")},v=()=>{a.push("/_/panels/cits/create")},x=async()=>{errors.value=[],email==""&&role==""&&errors.value.push("Please fill in all fields."),errors.value.length==0&&await $fetch(p.value+"/api/cits/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:c.value}).then(l=>{a.push({path:"/_/panels/cits"})})};return(l,t)=>{const h=g,b=w;return R(),S("div",V,[e("div",$,[d(e("div",z,[u(h,{goToList:_,goToCreate:v})],512),[[T,i(o)]]),e("div",E,[e("div",L,[e("div",O,[e("div",P,[e("div",{onClick:t[0]||(t[0]=r=>B(o)?o.value=!i(o):o=!i(o)),class:"w-10 px-1.5"},[e("i",{class:M(["fa text-3xl text-white",i(o)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",U,[t[3]||(t[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",A,j(i(s).user.email),1)])]),e("button",{onClick:f,class:"flex hover:font-bold pt-1"},t[4]||(t[4]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",F,[e("div",N,[t[8]||(t[8]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create CITS",-1)),e("form",{onSubmit:D(x,["prevent"])},[e("div",null,[e("div",q,[t[5]||(t[5]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Email ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-5/12 border",id:"field_1","onUpdate:modelValue":t[1]||(t[1]=r=>l.email=r),placeholder:"Email Here"},null,512),[[m,l.email]])]),e("div",H,[t[6]||(t[6]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2 mt-2",for:"startdate-1"}," Role ",-1)),d(e("input",{class:"shadow-md p-2 rounded-sm w-5/12 border",id:"field_2","onUpdate:modelValue":t[2]||(t[2]=r=>l.role=r),placeholder:"Role"},null,512),[[m,l.role]])])]),t[7]||(t[7]=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1))],32)])])])]),u(b)])}}};export{X as default};
