import{_ as X}from"./CzVWmkhp.js";import{_ as q}from"./Dx6M404x.js";import{D as H,m as I,u as G,r as l,E as K,p as Q,c as d,a as e,q as _,v as N,n as s,b as C,s as f,x as W,t as D,F as R,z as T,A as Z,o as r,H as ee,J as te}from"./3r6RbeVI.js";import{p as se}from"./DsCrdf0t.js";import{s as le}from"./C1zSg28U.js";import{X as oe}from"./C6mLYXvt.js";/* empty css        */import{h as ae}from"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as ie}from"./DlAUqK2U.js";const ne={class:""},de={class:"flex h-screen"},re={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},ue={class:"w-full"},ce={class:"bg-green-800"},me={class:"flex mx-auto justify-between py-2 px-3.5"},pe={class:"flex items-center text-white gap-5"},ve={class:"flex -mt-1"},he={class:"text-sm"},xe={class:""},_e={class:"lg:w-full p-5"},fe={class:"h-full shadow-lg pb-10"},ge={class:"relative"},we={key:0,class:""},be={class:"w-full"},ye={class:"lg:flex"},ke={class:"lg:w-1/3 mx-auto"},Ce={class:"lg:w-8/12 mx-auto ml-5"},De={class:"border p-5 w-fit mx-auto"},Se={class:"lg:py-2"},Ae={class:"flex"},Ee=["value","onClick"],Me={class:"ml-1"},Ne={class:"w-1/3 mb-10 w-fitmx-auto h-full mr-10"},Re={class:"w-fit mx-auto"},Te={class:"lg:w-1/3 mx-auto"},Ve={class:"w-full"},Le={class:""},Be={class:""},Oe={class:"flex h-full w-fit mx-auto px-5 py-2 shadow-sm border"},Ue={class:"text-xs"},Ye=["value"],Fe={class:"",for:"time"},$e={key:0,class:"ml-10"},je={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ze={key:1,class:"text-center"},Je={__name:"index",async setup(Pe){let x,S;H();const c=I(),i=G(),A=l(i.mainDevServer),V=l(le.timeSelection),L=l(se.providerListsDepartment),g=([x,S]=K(()=>$fetch(A.value+"/api/schedules/list/").catch(o=>o.data)),x=await x,S(),x);let w=l(),m=l("CAS / CON"),n=l(),p=l([]);l([]);let b=l(!1),y=l([]),u=l(!0),h=l(!1);const B=l(i.user.registrarEmail),O=l(i.user.developerEmail),U=l(i.user.testEmail);Q(()=>{i.user.isAuthenticated&&(i.user.email===B.value||i.user.email===O.value||i.user.email===U.value)?c.push("/_/panels/registrar/appointment/set-schedules"):c.push("/_/unauthorized"),E("CAS / CON")});let E=o=>{y.value=[],setTimeout(()=>{g.filter(function(t){o===t.provider&&(m.value=t.provider,n.value=t.date,y.value.push(t.date))},100)})};const Y=o=>{n.value=ae(o).format("MM-DD-YYYY"),b.value=!1,p.value=["-"],setTimeout(()=>{g.filter(function(t){t.provider===m.value&&t.date===n.value&&(w.value=t.id,p.value=t.time,b.value=!0)})},100)},M=o=>{h.value=!h.value,o.value=o},F=async()=>{await $fetch(A.value+"/api/schedules/"+w.value+"/delete/",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(async o=>{c.go(),h.value=!h.value})},$=()=>{c.push("/_/panels/registrar/appointment/set-schedules/create")},j=()=>{c.push("/_/reg-admin"),i.removeToken()},z=o=>{c.push("/_/panels/registrar/appointment/set-schedules/edit/"+o)};return(o,t)=>{const J=X,P=q;return r(),d("div",ne,[e("div",de,[_(e("div",re,[C(J)],512),[[N,s(u)]]),e("div",ue,[e("div",ce,[e("div",me,[e("div",pe,[e("div",{onClick:t[0]||(t[0]=a=>f(u)?u.value=!s(u):u=!s(u)),class:"w-10 px-1.5"},[e("i",{class:W(["fa text-3xl text-white",s(u)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ve,[t[6]||(t[6]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",he,D(s(i).user.email),1)])]),e("button",{onClick:j,class:"flex hover:font-bold pt-1"},t[7]||(t[7]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",xe,[e("div",_e,[e("div",fe,[e("div",ge,[e("div",{class:"w-full mb-10"},[e("div",{class:"shadow px-3"},[e("button",{onClick:$,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Add Schedules ")])]),s(g).length>0?(r(),d("div",we,[e("div",be,[e("div",ye,[e("div",ke,[e("div",Ce,[t[8]||(t[8]=e("p",{class:"uppercase block mb-2 text-xs font-bold text-gray-900 lasalle-green-text text-center"},"Provider",-1)),e("div",De,[e("div",Se,[(r(!0),d(R,null,T(s(L),(a,k)=>(r(),d("div",{key:k},[e("div",Ae,[_(e("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500 mt-1",type:"radio",name:"provider",value:a.department,"onUpdate:modelValue":t[1]||(t[1]=v=>f(m)?m.value=v:m=v),onClick:v=>s(E)(a.department)},null,8,Ee),[[ee,s(m)]]),e("div",Me,D(a.department),1)])]))),128))])])])]),e("div",Ne,[t[9]||(t[9]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs ml-5 text-center uppercase"}," Calendar ",-1)),e("div",Re,[C(s(oe),{modelValue:s(n),"onUpdate:modelValue":[t[2]||(t[2]=a=>f(n)?n.value=a:n=a),t[3]||(t[3]=a=>Y(s(n)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(y),"year-range":[2025,2025],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",Te,[t[10]||(t[10]=e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),e("div",Ve,[e("div",Le,[e("div",Be,[e("div",Oe,[e("ul",Ue,[(r(!0),d(R,null,T(s(V)[0].time,(a,k)=>(r(),d("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:k},[_(e("input",{type:"checkbox",name:"time",value:a,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[4]||(t[4]=v=>f(p)?p.value=v:p=v),disabled:""},null,8,Ye),[[te,s(p)]]),e("p",Fe,D(a),1)]))),128))])])])])])])])]),s(b)?(r(),d("div",$e,[e("button",{onClick:t[5]||(t[5]=a=>z(s(w))),class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900 whitespace-nowrap"}," Update Time "),e("button",{onClick:M,class:"mx-4 uppercase text-sm rounded-sm my-2 shadow px-5 py-1 text-green-900"}," Removed / Disable ")])):Z("",!0),_(e("div",je,[t[11]||(t[11]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:F},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:M},"Cancel")])],512),[[N,s(h)]])])):(r(),d("div",ze," Please Add Schedules, No Results Found! "))])])])])])]),C(P)])}}},tt=ie(Je,[["__scopeId","data-v-4bcdfecb"]]);export{tt as default};
