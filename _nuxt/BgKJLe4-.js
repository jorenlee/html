import{_ as I}from"./BkvYFy9y.js";import{_ as R}from"./Cn2dl77j.js";import{u as O,g as U,r as o,q as X,h as q,c as r,a as e,i as C,v as E,f as t,b as g,j as J,n as j,t as b,z as P,F as G,s as H,o as u,p as K,e as Q}from"./Bf26CSRI.js";import{s as W}from"./BEx1_QdV.js";import{X as Z}from"./Wt3gAF-i.js";/* empty css        */import{h as ee}from"./C5S46NFB.js";import{_ as te}from"./vUEbHlag.js";import{_ as se}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const m=h=>(K("data-v-50cf25b3"),h=h(),Q(),h),ae={class:""},le={class:"flex"},oe={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ie={class:"w-full"},ne={class:"bg-green-800"},de={class:"flex mx-auto justify-between py-2 px-3.5"},ce={class:"flex items-center text-white gap-5"},re={class:"flex -mt-1"},ue=m(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),me={class:"text-sm"},pe=m(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),he=m(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),_e=[pe,he],fe={class:""},xe={class:"lg:w-full p-5"},ve={class:"h-full shadow-lg pb-10"},ge={class:"relative"},be={class:"w-full mb-10"},we={class:"flex shadow px-3 justify-between"},ye={key:0,class:""},ke={key:0,class:""},Se={class:"w-11/12 mx-auto"},De={class:"lg:flex"},Ce={class:"lg:w-fit mr-14 mb-10 w-fitmx-auto h-full"},Ee=m(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Calendar ",-1)),je={class:""},Te={class:"lg:w-full"},Ae=m(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Select Time ",-1)),Be={class:"border mx-auto px-5 py-5 rounded-md"},Le={class:"lg:grid grid-cols-3"},Ve=["for"],$e={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Me=m(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),Ne={key:1,class:"text-center"},Ye={__name:"index",async setup(h){let _,w;const c=O(),s=U(),y=o(s.mainServer),T=o(W.timeSelection),f=([_,w]=X(()=>$fetch(y.value+"/api/library/schedule/booking/list/").catch(a=>a.data)),_=await _,w(),_),i=o({date:null,time:null,updated_at:new Date});let x=o(),k=o([]),v=o(!1),d=o(!0),p=o(!1);const A=o(new Date);let B=o();o(s.user.registrarEmail);const L=o(s.user.developerEmail);o(s.user.testEmail),q(()=>{s.user.isAuthenticated&&(s.user.email===L.value||s.user.email==="monaliza.mugot@lsu.edu.ph"||s.user.email==="marilyn.bejec@lsu.edu.ph"||s.user.email==="applejane.ebarle@lsu.edu.ph"||s.user.email==="janekaren.gudmalin@lsu.edu.ph"||s.user.email==="macy.beniola@lsu.edu.ph"||s.user.email==="lynn.lumacad@lsu.edu.ph")?(f.filter(function(a){i.value.date=a.date,k.value.push(a.date)}),c.push("/_/panels/library/appointment/set-schedules")):c.push("/_/unauthorized")});const V=a=>{i.value.date=ee(a).format("MM-DD-YYYY"),v.value=!1,i.value.time=["-"],setTimeout(()=>{f.filter(function(l){l.date===i.value.date&&(x.value=l.id,i.value.time=l.time,B.value=l.time,v.value=!0)})},100)},S=a=>{p.value=!p.value,a.value=a},$=async()=>{await $fetch(y.value+"/api/library/schedule/booking/"+x.value+"/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(async a=>{console.log("response",a),c.go(),p.value=!p.value})},M=()=>{c.push("/_/panels/library/appointment/set-schedules/create")},N=()=>{c.push("/_/lib-admin"),s.removeToken()},Y=a=>{c.push("/_/panels/library/appointment/set-schedules/edit/"+a)};return(a,l)=>{const z=I,F=R;return u(),r("div",ae,[e("div",le,[C(e("div",oe,[g(z)],512),[[E,t(d)]]),e("div",ie,[e("div",ne,[e("div",de,[e("div",ce,[e("div",{onClick:l[0]||(l[0]=n=>J(d)?d.value=!t(d):d=!t(d)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",t(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",re,[ue,e("h1",me,b(t(s).user.email),1)])]),e("button",{onClick:N,class:"flex hover:font-bold pt-1"},_e)])]),e("div",fe,[e("div",xe,[e("div",ve,[e("div",ge,[e("div",be,[e("div",we,[e("button",{onClick:M,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Schedules "),t(v)?(u(),r("div",ye,[e("button",{onClick:l[1]||(l[1]=n=>Y(t(x))),class:"shadow text-center mx-5 uppercase my-3 px-4 py-1 bg-yellow-500 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Edit Time "),e("button",{onClick:S,class:"shadow text-center uppercase my-3 px-4 py-1 bg-red-800 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Removed / Disable ")])):P("",!0)])]),t(f).length>0?(u(),r("div",ke,[e("div",Se,[e("div",De,[e("div",Ce,[Ee,e("div",je,[g(t(Z),{modelValue:t(i).date,"onUpdate:modelValue":[l[2]||(l[2]=n=>t(i).date=n),l[3]||(l[3]=n=>V(t(i).date))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:t(k),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":t(A)},null,8,["modelValue","highlight","min-date"])])]),e("div",Te,[Ae,e("div",Be,[e("ul",Le,[(u(!0),r(G,null,H(t(T)[0].time,(n,D)=>(u(),r("li",{class:"flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5",key:D},[e("label",{for:D,class:j(["lg:text-xs text-[10px]",t(te).find(t(i).time,n)?"text-[#087830]":" text-gray-400"])},b(n._12_hour_format_from)+" - "+b(n._12_hour_format_to),11,Ve)]))),128))])])])])]),C(e("div",$e,[Me,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:$},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:S},"Cancel")])],512),[[E,t(p)]])])):(u(),r("div",Ne," Please Add Schedules, No Results Found! "))])])])])])]),g(F)])}}},Ge=se(Ye,[["__scopeId","data-v-50cf25b3"]]);export{Ge as default};
