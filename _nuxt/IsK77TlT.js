import{u as k,g as C,m as S,r as d,q as E,h as L,c as i,a as e,i as f,v,f as t,j as R,n as A,t as j,F as D,s as B,d as T,o as r,x as z}from"./BAZbkzMV.js";import"./vUEbHlag.js";import"./C5S46NFB.js";import"./Cpj98o6Y.js";const O={class:"flex"},U={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},$=z('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/human-resource/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/human-resource/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/human-resource" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1),N=[$],V={class:"w-full min-h-screen"},F={class:"bg-green-800"},M={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex items-center text-white gap-5"},q={class:"flex -mt-1"},G=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),H={class:"text-sm"},Y=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),I=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),J=[Y,I],K={class:"relative"},Q={class:"w-11/12 mx-auto shadow lg:px-5 px-4 lg:pt-5 pt-3 my-10 rounded-lg"},W=e("h1",{class:"text-center text-green-700 font-bold lg:text-3xl text-lg"}," Career Opportunities ",-1),X={key:0,class:"w-full rows"},Z={class:"lg:grid grid-cols-5 gap-5 lg:py-10"},ee=["src"],te={class:"flex justify-between pt-3"},se=e("div",{class:""},null,-1),ae={class:""},oe=["onClick"],le=e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1),ie=[le],re={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ne=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1),ce={key:1,class:"itallic text-gray-400 text-center p-10"},de=e("div",{class:"bg-green-900 py-4"},[e("h1",{class:"text-center text-white lg:text-sm text-xs"},[T(" Copyright © 2023 "),e("span",null,"La Salle University Ozamiz")])],-1),_e={__name:"index",async setup(ue){let n,p;const c=k(),s=C();S();const x=d(s.mainServer),u=([n,p]=E(()=>$fetch(x.value+"/api/humanResource/list").catch(o=>o.data)),n=await n,p(),n);console.log(u);let a=d(!0),l=d(!1),g=d();L(()=>{s.user.isAuthenticated&&(s.user.email==="hr@lsu.edu.ph"||s.user.email==="jorenleeluna24@gmail.com")?c.push("/human-resource/dashboard/portal/lists"):c.push("/_/unauthorized")});const m=o=>{l.value=!l.value,g.value=o},w=async()=>{await $fetch(x.value+"/api/humanResource/"+g.value+"/delete/",{method:"DELETE",headers:{Authorization:s.user.token,"Content-Type":"application/json"}}).then(async o=>{console.log("response",o),c.go(),l.value=!l.value})},b=()=>{c.push("/human-resource"),s.removeToken()};return(o,_)=>(r(),i("div",null,[e("div",O,[f(e("div",U,N,512),[[v,t(a)]]),e("div",V,[e("div",F,[e("div",M,[e("div",P,[e("div",{onClick:_[0]||(_[0]=h=>R(a)?a.value=!t(a):a=!t(a)),class:"w-10 px-1.5"},[e("i",{class:A(["fa text-3xl text-white",t(a)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",q,[G,e("h1",H,j(t(s).user.email),1)])]),e("button",{onClick:b,class:"flex hover:font-bold pt-1"},J)])]),e("div",K,[e("div",null,[e("div",Q,[W,t(u).length>0?(r(),i("div",X,[e("ul",Z,[(r(!0),i(D,null,B(t(u),(h,y)=>(r(),i("li",{key:y,class:"border p-3 rounded-lg hover:rounded-none shadow-md hover:shadow-none lg:my-0 my-5 bg-white hover:bg-green-800"},[e("img",{class:"lg:mx-0 mx-auto w-[500px] h-[200px]",src:`https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/humanResource/files/${h.image_link}`},null,8,ee),e("div",te,[se,e("div",ae,[e("button",{onClick:he=>m(h.id)},ie,8,oe)])])]))),128))]),f(e("div",re,[ne,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:w},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:m},"Cancel")])],512),[[v,t(l)]])])):(r(),i("div",ce," Please Add Entry, No Results Found! "))])])])])]),de]))}};export{_e as default};
