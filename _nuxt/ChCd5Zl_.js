import{e as k,u as C,g as S,r as c,i as E,h as L,c as i,a as e,j as v,v as w,f as s,q as R,k as A,n as D,t as j,F as B,s as T,d as z,o as n}from"./Dovn5ABk.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const O={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},$={class:"w-full min-h-screen"},N={class:"bg-green-800"},V={class:"lg:flex mx-auto justify-between py-2 px-3.5"},F={class:"lg:flex items-center text-white gap-5"},M={class:"flex -mt-1"},P={class:"text-sm"},q={class:"relative"},G={class:"w-11/12 mx-auto shadow lg:px-5 px-4 lg:pt-5 pt-3 my-10 rounded-lg"},H={key:0,class:"w-full rows"},Y={class:"lg:grid grid-cols-5 gap-5 lg:py-10"},I=["src"],J={class:"flex justify-between pt-3"},K={class:""},Q=["onClick"],W={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},X={key:1,class:"itallic text-gray-400 text-center p-10"},le={__name:"index",async setup(Z){let d,x;const u=k(),a=C();S();const h=c(a.mainDevServer),g=([d,x]=E(()=>$fetch(h.value+"/api/humanResource/list").catch(r=>r.data)),d=await d,x(),d);let l=c(!0),o=c(!1),m=c();L(()=>{a.user.isAuthenticated&&(a.user.email==="hr@lsu.edu.ph"||a.user.email==="jorenleeluna24@gmail.com")?u.push("/human-resource/dashboard/portal/lists"):u.push("/_/unauthorized")});const f=r=>{o.value=!o.value,m.value=r},b=async()=>{await $fetch(h.value+"/api/humanResource/"+m.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async r=>{u.go(),o.value=!o.value})},y=()=>{u.push("/human-resource"),a.removeToken()};return(r,t)=>(n(),i("div",null,[e("div",O,[v(e("div",U,t[1]||(t[1]=[R('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1)]),512),[[w,s(l)]]),e("div",$,[e("div",N,[e("div",V,[e("div",F,[e("div",{onClick:t[0]||(t[0]=p=>A(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5"},[e("i",{class:D(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",M,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",P,j(s(a).user.email),1)])]),e("button",{onClick:y,class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",q,[e("div",null,[e("div",G,[t[7]||(t[7]=e("h1",{class:"text-center text-green-700 font-bold lg:text-3xl text-lg"}," Career Opportunities ",-1)),s(g).length>0?(n(),i("div",H,[e("ul",Y,[(n(!0),i(B,null,T(s(g),(p,_)=>(n(),i("li",{key:_,class:"border p-3 rounded-lg hover:rounded-none shadow-md hover:shadow-none lg:my-0 my-5 bg-white hover:bg-green-800"},[e("img",{class:"lg:mx-0 mx-auto w-[500px] h-[200px]",src:`https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/humanResource/files/${p.image_link}`},null,8,I),e("div",J,[t[5]||(t[5]=e("div",{class:""},null,-1)),e("div",K,[e("button",{onClick:ee=>f(p.id)},t[4]||(t[4]=[e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,Q)])])]))),128))]),v(e("div",W,[t[6]||(t[6]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:b},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:f},"Cancel")])],512),[[w,s(o)]])])):(n(),i("div",X," Please Add Entry, No Results Found! "))])])])])]),t[8]||(t[8]=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[z(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1))]))}};export{le as default};
