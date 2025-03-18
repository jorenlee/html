import{_ as S}from"./BJK7jvqU.js";import{e as M,u as N,r as d,g as E,c as m,a as e,h as o,v as f,f as i,i as w,t as j,j as _,n as g,k as A,F as z,l as T,b as B,o as p,m as r}from"./BsKHL9Zt.js";import"./C5S46NFB.js";import{_ as I}from"./5JjjnmY2.js";import{_ as R}from"./DlAUqK2U.js";const $={class:"lg:flex min-h-screen"},q={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute lg:min-h-auto min-h-[700px] lg:h-auto h-screen"},O={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},F={class:"flex items-center w-full px-2"},P={class:"text-sm"},G={class:"w-full"},H={class:"bg-green-800"},W={class:"flex mx-auto justify-between py-2 px-3.5"},Y={class:"w-full lg:p-5 px-2 py-2"},J={class:"relative"},K={class:"appointment-lists mx-auto text-xs"},Q={class:""},X={key:0,class:"lg:border text-xs lg:rounded-none rounded-lg lg:shadow"},Z={class:"w-full mx-auto lg:my-2 mb-2"},ee=["onUpdate:modelValue"],te={class:"w-full mx-auto lg:my-2 mb-2"},ae=["onUpdate:modelValue"],se={class:"w-full mx-auto lg:my-2 mb-2"},le={class:"lg:block flex gap-x-2"},oe=["onUpdate:modelValue"],de=["onUpdate:modelValue"],ie={class:"w-full mx-auto lg:my-2 mb-2"},ne={class:"lg:block flex gap-x-2"},re=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],ce={class:"w-full mx-auto lg:my-2 mb-2"},me={class:""},pe=["onUpdate:modelValue"],xe=["onUpdate:modelValue"],fe={class:"w-full mx-auto"},ve={class:""},he=["onUpdate:modelValue"],ge={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},be={class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},we={class:"flex items-center"},_e={class:"flex gap-10 mr-10"},ye={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ke={key:0,class:"italic text-gray-400 text-center p-1 h-screen"},Ce={class:"static bottom-0 w-full"},Ve={__name:"index",setup(Ue){const v=M(),u=N(),h=d(u.mainDevServer),c=d(0);let b=d();d();let y=d(!0),l=d(!1),x=d(!1);const k=d(!1);d(null),d(!1),d([]),E(()=>{setTimeout(async()=>{u.user.isAuthenticated&&(u.user.email==="jorenleeluna24@gmail.com"||u.user.email==="jorenlee.luna@lsu.edu.ph")?(c.value=await $fetch(h.value+"/api/cits/directory/list").catch(n=>n.data)||0,v.push("/cits/admin"),console.log(c.value)):v.push("/_/unauthorized")},5e3)});const C=n=>{x.value=!x.value,b.value=n},V=async()=>{await $fetch(h.value+"/api/campus-pass/"+b.value+"/delete/",{method:"DELETE",headers:{Authorization:u.user.token,"Content-Type":"application/json"}}).then(async n=>{console.log("response",n),c.value=await $fetch(h.value+"/api/campus-pass/list").catch(t=>t.data)||0,x.value=!x.value})},U=()=>{u.removeToken(),v.push("/_/campus-pass-admin")};return(n,t)=>{const D=S;return p(),m("div",null,[e("div",$,[o(e("div",q,[e("div",O,[e("div",F,[t[4]||(t[4]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",P,j(i(u).user.email),1)]),e("div",{onClick:t[0]||(t[0]=a=>_(l)?l.value=!i(l):l=!i(l)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:g(["fa text-3xl text-white",i(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[5]||(t[5]=w('<div class="" data-v-1ad30aa5><div class="w-fit mx-auto mt-5 mb-3" data-v-1ad30aa5><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG" class="lg:w-24 w-20 mx-auto" data-v-1ad30aa5></div><div class="text-center" data-v-1ad30aa5><h1 class="font-bold text-green-800 text-2xl" data-v-1ad30aa5>Dashboard</h1></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1 lg:tracking-tight font-bold" data-v-1ad30aa5><a href="/cits/admin" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 text-left text-black hover:bg-black hover:text-white" data-v-1ad30aa5><i class="fa fa-list mr-3" aria-hidden="true" data-v-1ad30aa5></i> All Request Lists </a><a href="/cits/admin/main-campus" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 text-left hover:bg-black hover:text-white" data-v-1ad30aa5><i class="fa fa-square mr-0.5" aria-hidden="true" data-v-1ad30aa5></i> Campus 1 (Main Campus) </a><a href="/cits/admin/is-campus" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 text-left hover:bg-black hover:text-white" data-v-1ad30aa5><i class="fa fa-square mr-0.5" aria-hidden="true" data-v-1ad30aa5></i> Campus 2 (IS Campus) </a><a href="/cits/admin/hotline" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 text-left hover:bg-black hover:text-white" data-v-1ad30aa5><i class="fa fa-square mr-0.5" aria-hidden="true" data-v-1ad30aa5></i> Emergency Hotline </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 text-left hover:bg-black hover:text-white" data-v-1ad30aa5><i class="fa fa-globe mr-3" aria-hidden="true" data-v-1ad30aa5></i> LSU HOME PAGE </a></div></div>',1))],512),[[f,i(l)]]),e("div",G,[e("div",H,[e("div",W,[e("div",{onClick:t[1]||(t[1]=a=>_(l)?l.value=!i(l):l=!i(l)),class:"w-10 px-1.5"},[e("i",{class:g(["fa text-3xl text-white",i(l)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("button",{onClick:U,class:"flex hover:font-bold pt-1"},t[6]||(t[6]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",Y,[o(e("div",null,[t[16]||(t[16]=e("div",{class:"w-full shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase"}," All Request Lists ",-1)),e("div",J,[e("div",K,[e("div",Q,[t[15]||(t[15]=w('<div class="lg:flex hidden bg-green-800 text-white pb-2 pt-2.5 gap-x-7 px-3" data-v-1ad30aa5><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Office </div><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Location </div><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Local Tel No. </div><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Mobile No. </div><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Email </div><div class="w-full mx-auto text-center font-bold text-sm" data-v-1ad30aa5> Campus </div></div>',1)),c.value.length>0?(p(),m("div",X,[(p(!0),m(z,null,T(i(I).orderBy(c.value,"id","asc"),(a,L)=>(p(),m("div",{class:"lg:flex justify-evenly text-left items-center h-auto px-3 gap-x-7 border-gray-200 lg:py-1 py-3 lg:mb-0 mb-5 lg:border-y border lg:shadow-none shadow-md lg:bg-gray-50 bg-gray-100",key:L},[e("div",Z,[t[7]||(t[7]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Office ",-1)),o(e("textarea",{"onUpdate:modelValue":s=>a.office=s,disabled:"",class:"shadow-md rounded-sm h-[25px] w-full mx-auto py-1.5 px-2"},null,8,ee),[[r,a.office]])]),e("div",te,[t[8]||(t[8]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Location ",-1)),o(e("textarea",{"onUpdate:modelValue":s=>a.location=s,class:"shadow-md rounded-sm h-[25px] w-full mx-auto lg:py-1 py-0.5 px-2"},null,8,ae),[[r,a.location]])]),e("div",se,[t[9]||(t[9]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Local Tel No. ",-1)),e("div",le,[o(e("input",{"onUpdate:modelValue":s=>a.local_tel_no[0]=s,class:"rounded-sm shadow-md lg:py-1 py-0.5 h-6 px-2 w-full mb-1"},null,8,oe),[[r,a.local_tel_no[0]]]),o(e("input",{"onUpdate:modelValue":s=>a.local_tel_no[1]=s,class:"rounded-sm shadow-md lg:py-1 py-0.5 h-6 px-2 w-full"},null,8,de),[[r,a.local_tel_no[1]]])])]),e("div",ie,[t[10]||(t[10]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Mobile Number ",-1)),e("div",ne,[o(e("input",{"onUpdate:modelValue":s=>a.mobile_no[0]=s,class:"rounded-sm shadow-md lg:py-1 py-0.5 h-6 px-2 w-full mb-1"},null,8,re),[[r,a.mobile_no[0]]]),o(e("input",{"onUpdate:modelValue":s=>a.mobile_no[1]=s,class:"rounded-sm shadow-md lg:py-1 py-0.5 h-6 px-2 w-full"},null,8,ue),[[r,a.mobile_no[1]]])])]),e("div",ce,[t[11]||(t[11]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Email Address ",-1)),e("div",me,[o(e("input",{"onUpdate:modelValue":s=>a.email_address[0]=s,class:"rounded-sm shadow-md py-1 px-2 w-full mb-1"},null,8,pe),[[r,a.email_address[0]]]),o(e("input",{"onUpdate:modelValue":s=>a.email_address[1]=s,class:"rounded-sm shadow-md py-1 px-2 w-full"},null,8,xe),[[r,a.email_address[1]]])])]),e("div",fe,[t[12]||(t[12]=e("div",{class:"mb-1 lg:hidden block font-bold"}," Area ",-1)),e("div",ve,[o(e("textarea",{"onUpdate:modelValue":s=>a.campus=s,disabled:"",class:"shadow-md rounded-sm h-[25px] w-full mx-auto py-1.5 px-2"},null,8,he),[[r,a.campus]])])])]))),128)),o(e("div",ge,[e("div",be,[e("div",we,[t[13]||(t[13]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Remarks: ",-1)),e("div",_e,[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[2]||(t[2]=(...a)=>n.btnConfirm&&n.btnConfirm(...a))},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[3]||(t[3]=(...a)=>n.btnCloseModal&&n.btnCloseModal(...a))},"no")])])])],512),[[f,k.value]]),o(e("div",ye,[t[14]||(t[14]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:V},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:C},"Cancel")])],512),[[f,i(x)]])])):A("",!0)]),c.value.length===0?(p(),m("div",ke," Please Wait ... ")):(p(),m("div",{key:1,class:g(["italic text-gray-400 text-center p-1 h-screen",c.value.length>0?"hidden":""])}," No Results Found! ",2))])])],512),[[f,i(y)]])])])])]),e("div",Ce,[B(D)])])}}},Ee=R(Ve,[["__scopeId","data-v-1ad30aa5"]]);export{Ee as default};
