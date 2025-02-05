import{m as v,u as b,p as w,r as o,q as _,c as y,a as e,v as S,x as L,n as r,G as j,y as k,z as C,t as R,A as U,d as T,o as D}from"./VQorOMFX.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import{a as O}from"./upsvKRUO.js";const z={class:"flex"},B={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},E={class:"w-full min-h-screen"},F={class:"bg-green-800"},A={class:"lg:flex mx-auto justify-between py-2 px-3.5"},M={class:"lg:flex items-center text-white gap-5"},V={class:"flex -mt-1"},N={class:"text-sm"},P={class:"w-full p-5"},G={class:"w-full lg:mb-0 mb-2"},$={class:"mt-3"},q={class:"flex w-full mb-3"},H={class:"flex h-fit"},I={class:"w-fit lg:mx-0 mx-auto"},J={class:"w-56 shadow"},K=["src"],ee={__name:"index",setup(Q){const l=v(),i=b();w();const u=o(i.mainDevServer);_(()=>{setTimeout(()=>{i.user.isAuthenticated&&(i.user.email==="hr@lsu.edu.ph"||i.user.email==="jorenleeluna24@gmail.com")?l.push("/human-resource/dashboard/portal/create"):l.push("/_/unauthorized")},3e3)});let s=o(!0);o(!1);const n=o(),c=o({image_link:""}),d=o("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"),m=a=>{n.value=a.target.files[0],d.value=URL.createObjectURL(n.value),c.value.image_link=a.target.files[0].name},p=async()=>{let a=new FormData;a.append("image",n.value);let t={headers:{"Content-Type":"multipart/form-data"}};O.post(u.value+"/api/humanResource/file/list/files/",a,t).then(g=>{l.push("/human-resource/dashboard/portal/lists")})},h=()=>{x(),p()},x=async()=>{await $fetch(u.value+"/api/humanResource/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:c.value}).then(a=>{l.push({path:"/human-resource/dashboard/portal/lists"})})},f=()=>{l.push("/human-resource"),i.removeToken()};return(a,t)=>(D(),y("div",null,[e("div",z,[S(e("div",B,t[1]||(t[1]=[j('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-address-card mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1)]),512),[[L,r(s)]]),e("div",E,[e("div",F,[e("div",A,[e("div",M,[e("div",{onClick:t[0]||(t[0]=g=>k(s)?s.value=!r(s):s=!r(s)),class:"w-10 px-1.5"},[e("i",{class:C(["fa text-3xl text-white",r(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",V,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",N,R(r(i).user.email),1)])]),e("button",{onClick:f,class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",P,[e("form",{onSubmit:U(h,["prevent"]),class:"px-3 flex flex-wrap"},[e("div",G,[t[4]||(t[4]=e("label",{class:"text-[10px] text-gray-300"}," Banner ",-1)),e("div",$,[e("div",q,[e("div",H,[e("input",{type:"file",onChange:m,accept:"image/png, image/jpeg"},null,32)])]),e("div",I,[e("div",J,[e("img",{class:"lg:w-full h-56 object-contain",src:d.value},null,8,K)])])])]),t[5]||(t[5]=e("div",{class:"w-fit mt-5"},[e("button",{class:"w-fit mx-auto block bg-green-800 px-8 py-1.5 rounded-lg text-white"},"Submit")],-1))],32)])])])]),t[6]||(t[6]=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[T(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1))]))}};export{ee as default};
