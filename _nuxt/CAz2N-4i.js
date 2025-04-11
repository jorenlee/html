import{k as A,l as R,Z as Y,r as d,Y as B,p as T,c as o,a as e,f,i as v,h as s,e as j,X as z,n as O,t as w,F as b,g as y,d as U,o as r}from"./kn4BmnqY.js";import"./5JjjnmY2.js";import{h as N}from"./C5S46NFB.js";const V={class:"flex"},$={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},F={class:"w-full min-h-screen"},M={class:"bg-green-800"},P={class:"lg:flex mx-auto justify-between py-2 px-3.5"},G={class:"lg:flex items-center text-white gap-5"},H={class:"flex -mt-1"},X={class:"text-sm"},Z={class:"relative"},q={class:"w-11/12 mx-auto shadow lg:px-5 px-4 lg:pt-5 pt-3 my-10 rounded-lg"},I={key:0,class:"w-full rows"},J={class:"lg:grid grid-cols-5 gap-x-3 lg:py-10"},K=["src"],Q={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},W={key:1,class:"italic text-gray-400 text-center p-10"},ee={class:"fixed bg-green-900 py-4 bottom-0 w-full"},te={class:"text-center text-white lg:text-sm text-xs"},re={__name:"index",async setup(se){let u,p;const c=A(),a=R();Y();const _=d(N(new Date).format("YYYY")),x=d(a.mainDevServer),h=([u,p]=B(()=>$fetch(x.value+"/api/humanResource/list").catch(n=>n.data)),u=await u,p(),u||0);console.log(h);let l=d(!0),i=d(!1),g=d();T(()=>{a.user.isAuthenticated&&(a.user.email==="hr@lsu.edu.ph"||a.user.email==="jorenleeluna24@gmail.com")?c.push("/hr/dashboard/portal/lists"):c.push("/unauthorized")});const k=n=>{i.value=!i.value,g.value=n},C=async()=>{await $fetch(x.value+"/api/humanResource/"+g.value+"/delete/",{method:"DELETE",headers:{Authorization:a.user.token,"Content-Type":"application/json"}}).then(async n=>{c.go(),i.value=!i.value})},S=()=>{c.push("/hr"),a.removeToken()};return(n,t)=>(r(),o("div",null,[e("div",V,[f(e("div",$,t[1]||(t[1]=[j('<div><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg" class="lg:w-28 w-24 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg uppercase">hr dashboard</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/hr/dashboard/portal/lists" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> View Lists </a><a href="/hr/dashboard/portal/create" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-plus-circle mr-3" aria-hidden="true"></i> CREATE </a><a href="/hr" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-address-card mr-3" aria-hidden="true"></i> LSU Recruitment </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1)]),512),[[v,s(l)]]),e("div",F,[e("div",M,[e("div",P,[e("div",G,[e("div",{onClick:t[0]||(t[0]=m=>z(l)?l.value=!s(l):l=!s(l)),class:"w-10 px-1.5"},[e("i",{class:O(["fa text-3xl text-white",s(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",H,[t[2]||(t[2]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",X,w(s(a).user.email),1)])]),e("button",{onClick:S,class:"flex hover:font-bold pt-1"},t[3]||(t[3]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Z,[e("div",null,[e("div",q,[t[5]||(t[5]=e("h1",{class:"text-center text-green-700 font-bold lg:text-3xl text-lg"}," Career Opportunities ",-1)),s(h).length>0?(r(),o("div",I,[e("ul",J,[(r(!0),o(b,null,y(s(h),(m,D)=>(r(),o("li",{key:D,class:"border p-x-3 rounded-lg hover:rounded-none shadow-md hover:shadow-none lg:my-0 my-5 bg-white hover:bg-green-800"},[(r(!0),o(b,null,y(m.image_link,(E,L)=>(r(),o("div",{key:L},[e("img",{class:"lg:mx-0 mx-auto w-full h-[200px]",src:`${E.url}`},null,8,K)]))),128))]))),128))]),f(e("div",Q,[t[4]||(t[4]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:C},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:k},"Cancel")])],512),[[v,s(i)]])])):(r(),o("div",W," Please Add Entry, No Results Found! "))])])])])]),e("div",ee,[e("h1",te,[U(" Copyright © "+w(_.value)+" ",1),t[6]||(t[6]=e("span",null,"La Salle University Ozamiz",-1))])])]))}};export{re as default};
