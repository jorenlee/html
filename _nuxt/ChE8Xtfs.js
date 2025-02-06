import{_ as L}from"./qm00G-hE.js";import{_ as z}from"./rIpI2Aa0.js";import{m as T,u as Y,r as u,E as F,p as O,c as l,a as e,q as R,v as U,n as i,b as g,s as y,x as M,t as _,F as h,z as v,o,A as S}from"./D1X0cGgz.js";import{h as X}from"./C5S46NFB.js";import{_ as q}from"./5JjjnmY2.js";import{X as G}from"./B2Baphbl.js";/* empty css        */import{_ as I}from"./DlAUqK2U.js";const J=[{time:["07:00 AM - 07:20 AM","07:20 AM - 07:40 AM","08:40 AM - 08:00 AM","08:00 AM - 08:20 AM","08:20 AM - 08:40 AM","08:40 AM - 09:00 AM","09:00 AM - 09:20 AM","09:20 AM - 09:40 AM","09:40 AM - 10:00 AM","10:00 AM - 10:20 AM","10:20 AM - 10:40 AM","10:40 AM - 11:00 AM","11:00 AM - 11:20 AM","11:20 AM - 11:40 AM","11:40 AM - 12:00 NN","12:00 NN - 12:20 PM","12:20 PM - 12:40 PM","12:40 PM - 01:00 PM","01:00 PM - 01:20 PM","01:20 PM - 01:40 PM","01:40 PM - 02:00 PM","02:00 PM - 02:20 PM","02:20 PM - 02:40 PM","02:40 PM - 03:00 PM","03:00 PM - 03:20 PM","03:20 PM - 03:40 PM","03:40 PM - 04:00 PM","04:00 PM - 04:20 PM","04:20 PM - 04:40 PM","04:40 PM - 05:00 PM","05:00 PM - 05:20 PM","05:20 PM - 05:40 PM","05:40 PM - 06:00 PM","06:00 PM - 06:20 PM","06:20 PM - 06:40 PM","06:40 PM - 07:00 PM","07:00 PM - 07:20 PM","07:20 PM - 07:40 PM","07:40 PM - 08:00 PM"]}],H={timeSelection:J},K={class:""},Q={class:"flex"},W={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},Z={class:"w-full"},ee={class:"bg-green-700"},te={class:"lg:flex mx-auto justify-between py-2 px-3.5"},se={class:"lg:flex items-center text-white gap-5"},ie={class:"flex -mt-1"},le={class:"text-sm"},oe={class:"border pb-5 m-5"},ae={class:"w-11/12 mx-auto lg:flex gap-10"},ne={class:"w-4/12 mb-1"},re={class:""},ue={class:"mx-auto w-fit"},de={class:"w-full relative"},ce={class:"w-full border rounded-md"},me={class:"flex flex-wrap pt-4 justify-center"},pe={class:""},Me={class:"flex justify-between w-full"},_e={class:""},he={key:0},ve={class:"text-xs -mt-0.5 mb-3 block"},fe={class:"text-xs"},xe={class:"relative"},be={key:0},ge={class:""},Pe=["onClick"],ke={__name:"index",async setup(Ae){let f,P;const x=T(),a=Y(),D=u(a.mainDevServer),k=([f,P]=F(()=>$fetch(D.value+"/api/library/booking/list/").catch(r=>r.data)),f=await f,P(),f);let d=u(),b=u([]),A=u([]),p=u([]);const N=u(H.timeSelection),C=u(a.user.developerEmail);O(()=>{a.user.isAuthenticated&&(a.user.email===C.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph")?(k.filter(function(r){A.value.push(r.booking_date)}),x.push("/_/panels/library/appointment"),w()):x.push("/_/unauthorized")});const w=r=>{d.value=X(r).format("MM-DD-YYYY"),b.value=[],p.value=["-"],setTimeout(()=>{k.filter(function(t){t.booking_date===d.value&&(b.value.push(t.booking_time),p.value.push(t))})},100)},j=r=>{x.push("/_/panels/library/appointment/edit/"+r)};let c=u(!0);const V=()=>{x.push("/_/lib-admin"),a.removeToken()};return(r,t)=>{const $=L,B=z;return o(),l("div",K,[e("div",Q,[R(e("div",W,[g($)],512),[[U,i(c)]]),e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[e("div",{onClick:t[0]||(t[0]=n=>y(c)?c.value=!i(c):c=!i(c)),class:"w-10 px-1.5"},[e("i",{class:M(["fa text-3xl text-white",i(c)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ie,[t[4]||(t[4]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",le,_(i(a).user.email),1)])]),e("button",{onClick:t[1]||(t[1]=n=>V()),class:"flex hover:font-bold pt-1"},t[5]||(t[5]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",oe,[e("div",null,[t[8]||(t[8]=e("div",{class:"py-2 mb-5 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},"Appointments ",-1)),e("div",ae,[e("div",ne,[e("div",re,[e("div",ue,[g(i(G),{modelValue:i(d),"onUpdate:modelValue":[t[2]||(t[2]=n=>y(d)?d.value=n:d=n),t[3]||(t[3]=n=>w(i(d)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:i(A),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0"},null,8,["modelValue","highlight"])])])]),e("div",de,[e("div",ce,[e("ul",me,[(o(!0),l(h,null,v(N.value[0].time,(n,E)=>(o(),l("li",{class:"mb-3 font-bold mx-2 border p-3 w-[240px] min-h-[110px]",key:E},[e("div",pe,[e("div",Me,[e("div",_e,[(o(!0),l(h,null,v(i(p),(s,m)=>(o(),l("div",{key:m,class:M({"text-red-700":s.status==="pending","text-yellow-500":s.status==="reserved","text-green-900":s.status==="received","text-blue-300":s.status==="returned"})},[n===s.booking_time?(o(),l("span",he,[e("span",ve,_(s.booking_time),1)])):S("",!0)],2))),128)),e("div",{class:M(["text-xs w-full",i(q).includes(i(b),n)?"hidden":""])},_(n),3)])]),e("div",fe,[e("div",xe,[(o(!0),l(h,null,v(i(p),(s,m)=>(o(),l("p",{key:m},[e("span",{class:M(n===s.booking_time?"":"hidden")},_(s.booking_date),3)]))),128))]),(o(!0),l(h,null,v(i(p),(s,m)=>(o(),l("p",{key:m},[n===s.booking_time?(o(),l("span",be,[e("span",null,_(s.email),1),t[6]||(t[6]=e("br",null,null,-1)),e("span",null,_(s.borrower_category),1)])):S("",!0)]))),128)),(o(!0),l(h,null,v(i(p),(s,m)=>(o(),l("div",{key:m,class:""},[e("span",{class:M(["",n===s.booking_time?"":"hidden"])},[e("div",ge,[e("button",{onClick:we=>j(s.id),class:M(["w-full py-0.5 rounded-sm flex items-center gap-10 px-10 mt-3",{"bg-red-700":s.status==="pending","bg-yellow-500":s.status==="reserved","bg-green-900":s.status==="received","bg-blue-300":s.status==="returned"}])},t[7]||(t[7]=[e("span",{class:"text-white"}," Go To Details",-1),e("i",{class:"fa fa-chevron-circle-right text-white rounded-lg uppercase text-sm","aria-hidden":"true"},null,-1)]),10,Pe)])],2)]))),128))])])]))),128))])])])])])])])]),g(B)])}}},Be=I(ke,[["__scopeId","data-v-fed916aa"]]);export{Be as default};
