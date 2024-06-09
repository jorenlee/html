import{_ as I}from"./UO9udFxC.js";import{_ as T}from"./BwWvUXU6.js";import{u as Y,g as F,r as u,q as O,h as R,c as o,a as e,i as U,v as X,f as s,b as w,j as D,n as h,t as v,F as b,s as M,o as i,z as N,p as q,e as G}from"./BzQWnDbm.js";import{h as J}from"./C5S46NFB.js";import{_ as H}from"./vUEbHlag.js";import{X as K}from"./CooioVKd.js";/* empty css        */import{_ as Q}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const W=[{time:["08:00 AM - 08:20 AM","08:20 AM - 08:40 AM","08:40 AM - 09:00 AM","09:00 AM - 09:20 AM","09:20 AM - 09:40 AM","09:40 AM - 10:00 AM","10:00 AM - 10:20 AM","10:20 AM - 10:40 AM","10:40 AM - 11:00 AM","11:00 AM - 11:20 AM","11:20 AM - 11:40 AM","11:40 AM - 12:00 NN","12:00 NN - 12:20 PM","12:20 PM - 12:40 PM","12:40 PM - 01:00 PM","01:00 PM - 01:20 PM","01:20 PM - 01:40 PM","01:40 PM - 02:00 PM","02:00 PM - 02:20 PM","02:20 PM - 02:40 PM","02:40 PM - 03:00 PM","03:00 PM - 03:20 PM","03:20 PM - 03:40 PM","03:40 PM - 04:00 PM","04:00 PM - 04:20 PM","04:20 PM - 04:40 PM","04:40 PM - 05:00 PM"]}],Z={timeSelection:W},p=f=>(q("data-v-8242ebb7"),f=f(),G(),f),ee={class:""},te={class:"flex"},se={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},oe={class:"w-full"},ie={class:"bg-green-700"},ae={class:"lg:flex mx-auto justify-between py-2 px-3.5"},le={class:"lg:flex items-center text-white gap-5"},ne={class:"flex -mt-1"},re=p(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ue={class:"text-sm"},de=p(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ce=p(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),_e=[de,ce],pe={class:"border pb-5 m-5"},me=p(()=>e("div",{class:"py-2 mb-5 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},"Appointments ",-1)),he={class:"w-11/12 mx-auto lg:flex gap-10"},ve={class:"w-4/12 mb-1"},be={class:""},Me={class:"mx-auto w-fit"},fe={class:"w-full relative"},xe={class:"w-full border rounded-md"},ge={class:"flex flex-wrap pt-4 justify-center"},ke={class:""},we={class:"flex justify-between w-full"},ye={class:""},Pe={key:0},Ae={class:"text-xs -mt-0.5 mb-3 block"},Se={class:"text-xs"},De={class:"relative"},Ne={key:0},je=p(()=>e("br",null,null,-1)),Ce={class:""},Ve=["onClick"],Be=p(()=>e("span",{class:"text-white"}," Go To Details",-1)),Le=p(()=>e("i",{class:"fa fa-chevron-circle-right text-white rounded-lg uppercase text-sm","aria-hidden":"true"},null,-1)),$e=[Be,Le],ze={__name:"index",async setup(f){let x,y;const g=Y(),a=F(),j=u(a.mainServer),P=([x,y]=O(()=>$fetch(j.value+"/api/library/booking/list/").catch(r=>r.data)),x=await x,y(),x);let d=u(),k=u([]),A=u([]),m=u([]);const C=u(Z.timeSelection),V=u(a.user.developerEmail);R(()=>{a.user.isAuthenticated&&(a.user.email===V.value||a.user.email==="monaliza.mugot@lsu.edu.ph"||a.user.email==="marilyn.bejec@lsu.edu.ph"||a.user.email==="applejane.ebarle@lsu.edu.ph"||a.user.email==="janekaren.gudmalin@lsu.edu.ph"||a.user.email==="macy.beniola@lsu.edu.ph"||a.user.email==="lynn.lumacad@lsu.edu.ph")?(P.filter(function(r){A.value.push(r.booking_date)}),g.push("/_/panels/library/appointment"),S()):g.push("/_/unauthorized")});const S=r=>{d.value=J(r).format("MM-DD-YYYY"),k.value=[],m.value=["-"],setTimeout(()=>{P.filter(function(l){l.booking_date===d.value&&(k.value.push(l.booking_time),m.value.push(l))})},100)},B=r=>{g.push("/_/panels/library/appointment/edit/"+r)};let c=u(!0);const L=()=>{g.push("/_/lib-admin"),a.removeToken()};return(r,l)=>{const $=I,z=T;return i(),o("div",ee,[e("div",te,[U(e("div",se,[w($)],512),[[X,s(c)]]),e("div",oe,[e("div",ie,[e("div",ae,[e("div",le,[e("div",{onClick:l[0]||(l[0]=n=>D(c)?c.value=!s(c):c=!s(c)),class:"w-10 px-1.5"},[e("i",{class:h(["fa text-3xl text-white",s(c)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ne,[re,e("h1",ue,v(s(a).user.email),1)])]),e("button",{onClick:l[1]||(l[1]=n=>L()),class:"flex hover:font-bold pt-1"},_e)])]),e("div",pe,[e("div",null,[me,e("div",he,[e("div",ve,[e("div",be,[e("div",Me,[w(s(K),{modelValue:s(d),"onUpdate:modelValue":[l[2]||(l[2]=n=>D(d)?d.value=n:d=n),l[3]||(l[3]=n=>S(s(d)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:s(A),"year-range":[2024,2024],"disabled-week-days":[6,7,0],"week-start":"0"},null,8,["modelValue","highlight"])])])]),e("div",fe,[e("div",xe,[e("ul",ge,[(i(!0),o(b,null,M(C.value[0].time,(n,E)=>(i(),o("li",{class:"mb-3 font-bold mx-2 border p-3 w-[240px] min-h-[110px]",key:E},[e("div",ke,[e("div",we,[e("div",ye,[(i(!0),o(b,null,M(s(m),(t,_)=>(i(),o("div",{key:_,class:h({"text-red-700":t.status==="pending","text-yellow-500":t.status==="reserved","text-green-900":t.status==="received","text-blue-300":t.status==="returned"})},[n===t.booking_time?(i(),o("span",Pe,[e("span",Ae,v(t.booking_time),1)])):N("",!0)],2))),128)),e("div",{class:h(["text-xs w-full",s(H).includes(s(k),n)?"hidden":""])},v(n),3)])]),e("div",Se,[e("div",De,[(i(!0),o(b,null,M(s(m),(t,_)=>(i(),o("p",{key:_},[e("span",{class:h(n===t.booking_time?"":"hidden")},v(t.booking_date),3)]))),128))]),(i(!0),o(b,null,M(s(m),(t,_)=>(i(),o("p",{key:_},[n===t.booking_time?(i(),o("span",Ne,[e("span",null,v(t.email),1),je,e("span",null,v(t.borrower_category),1)])):N("",!0)]))),128)),(i(!0),o(b,null,M(s(m),(t,_)=>(i(),o("div",{key:_,class:""},[e("span",{class:h(["",n===t.booking_time?"":"hidden"])},[e("div",Ce,[e("button",{onClick:Ee=>B(t.id),class:h(["w-full py-0.5 rounded-sm flex items-center gap-10 px-10 mt-3",{"bg-red-700":t.status==="pending","bg-yellow-500":t.status==="reserved","bg-green-900":t.status==="received","bg-blue-300":t.status==="returned"}])},$e,10,Ve)])],2)]))),128))])])]))),128))])])])])])])])]),w(z)])}}},Ge=Q(ze,[["__scopeId","data-v-8242ebb7"]]);export{Ge as default};
