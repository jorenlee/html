import{u as _,g as v,m as b,r as o,h as w,c as y,a as e,i as S,v as j,f as r,j as L,n as k,t as C,k as R,d as U,o as T,x as O}from"./DDu6Fbxf.js";import"./C5S46NFB.js";import"./vUEbHlag.js";import{a as B}from"./B6xwUs71.js";import"./Cpj98o6Y.js";const D={class:"flex"},E={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},F=O('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-address-card mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1),z=[F],M={class:"w-full min-h-screen"},V={class:"bg-green-800"},A={class:"lg:flex mx-auto justify-between py-2 px-3.5"},N={class:"lg:flex items-center text-white gap-5"},P={class:"flex -mt-1"},$=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),G={class:"text-sm"},H=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),q=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),I=[H,q],J={class:"w-full p-5"},K={class:"w-full lg:mb-0 mb-2"},Q=e("label",{class:"text-[10px] text-gray-300"}," Banner ",-1),W={class:"mt-3"},X={class:"flex w-full mb-3"},Y={class:"flex h-fit"},Z={class:"w-fit lg:mx-0 mx-auto"},ee={class:"w-56 shadow"},te=["src"],se=e("div",{class:"w-fit mt-5"},[e("button",{class:"w-fit mx-auto block bg-green-800 px-8 py-1.5 rounded-lg text-white"},"Submit")],-1),ae=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[U(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1),ue={__name:"index",setup(oe){const i=_(),a=v();b();const c=o(a.mainServer);w(()=>{setTimeout(()=>{a.user.isAuthenticated&&(a.user.email==="hr@lsu.edu.ph"||a.user.email==="jorenleeluna24@gmail.com")?i.push("/human-resource/dashboard/portal/create"):i.push("/_/unauthorized")},3e3)});let s=o(!0);o(!1);const l=o(),u=o({image_link:""}),d=o("https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"),m=t=>{l.value=t.target.files[0],d.value=URL.createObjectURL(l.value),console.log(l.value),console.log(t.target.files[0].name),u.value.image_link=t.target.files[0].name},p=async()=>{let t=new FormData;t.append("image",l.value),console.log(l.value);let n={headers:{"Content-Type":"multipart/form-data"}};B.post(c.value+"/api/humanResource/file/list/files/",t,n).then(h=>{console.log(h),i.push("/human-resource/dashboard/portal/lists")})},g=()=>{x(),p()},x=async()=>{await $fetch(c.value+"/api/humanResource/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:u.value}).then(t=>{console.log("response",t),i.push({path:"/human-resource/dashboard/portal/lists"})})},f=()=>{i.push("/human-resource"),a.removeToken()};return(t,n)=>(T(),y("div",null,[e("div",D,[S(e("div",E,z,512),[[j,r(s)]]),e("div",M,[e("div",V,[e("div",A,[e("div",N,[e("div",{onClick:n[0]||(n[0]=h=>L(s)?s.value=!r(s):s=!r(s)),class:"w-10 px-1.5"},[e("i",{class:k(["fa text-3xl text-white",r(s)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",P,[$,e("h1",G,C(r(a).user.email),1)])]),e("button",{onClick:f,class:"flex hover:font-bold pt-1"},I)])]),e("div",null,[e("div",J,[e("form",{onSubmit:R(g,["prevent"]),class:"px-3 flex flex-wrap"},[e("div",K,[Q,e("div",W,[e("div",X,[e("div",Y,[e("input",{type:"file",onChange:m,accept:"image/png, image/jpeg"},null,32)])]),e("div",Z,[e("div",ee,[e("img",{class:"lg:w-full h-56 object-contain",src:d.value},null,8,te)])])])]),se],32)])])])]),ae]))}};export{ue as default};
