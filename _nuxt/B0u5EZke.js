import{_ as W}from"./B2reF6es.js";import{_ as Z}from"./CT43MlGv.js";import{u as ee,g as te,r as t,q as se,h as ae,c as f,a as e,i as u,v as w,f as s,b as P,j as Y,n as oe,t as V,k as le,F as N,s as O,z as ie,o as x,A as re,C as ne,p as de,e as ce}from"./BWTJpoTJ.js";import{p as ue}from"./DsCrdf0t.js";import{s as ve}from"./C1zSg28U.js";import{X as _e}from"./BDJVMOtv.js";/* empty css        */import{h as v}from"./C5S46NFB.js";import"./vUEbHlag.js";import{_ as pe}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const _=D=>(de("data-v-a1525927"),D=D(),ce(),D),me={class:""},he={class:"flex"},fe={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},xe={class:"w-full"},ge={class:"bg-green-800"},be={class:"flex mx-auto justify-between py-2 px-3.5"},we={class:"flex items-center text-white gap-5"},De={class:"flex -mt-1"},ye=_(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),Se={class:"text-sm"},ke=_(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),Ce=_(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),Ye=[ke,Ce],Me={class:""},Ae={class:"lg:w-full p-5"},Te={class:"h-full shadow-lg"},Pe={class:""},Ve={class:"w-full"},Be={class:""},Ee={class:"w-fit mx-auto"},Ie={class:"w-fit mx-auto"},Le=_(()=>e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 text-center lasalle-green-text"},"Provider",-1)),Ne={class:"border p-5 w-fit mx-auto"},Oe={class:"text-xs mb-3 font-bold"},Re=_(()=>e("label",{class:"text-red-900",for:"selectprovider"},"Please Select a Provider",-1)),je=[Re],ze={class:""},Fe={class:"flex"},Ue=["value","onClick"],$e={class:"ml-1",for:"provider"},Je={class:"w-fit mx-auto mb-10 h-full"},Xe=_(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),qe={class:""},Ge={class:"text-red-700"},He={class:"text-red-700"},Ke={class:"w-fit mx-auto"},Qe=_(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),We={class:"w-full"},Ze={class:""},et={class:""},tt={class:"flex h-full w-full px-5 py-2 shadow-sm border"},st={class:"text-xs"},at=["value"],ot={class:"",for:"time"},lt={class:"lg:py-80"},it={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"},rt={__name:"create",async setup(D){let y,B;const g=ee(),i=te(),E=t(i.mainServer),I=t(ve.timeSelection),R=t(ue.providerListsDepartment);t();let n=t(),o=t(),d=t(I._rawValue[0].time),M=t([]),A=t([]),p=t(!0),c=t(!0);const S=t(!1),k=t(!1),b=t(!0),C=t(!0),L=([y,B]=se(()=>$fetch(E.value+"/api/schedules/list/").catch(l=>l.data)),y=await y,B(),y),j=t(i.user.registrarEmail),z=t(i.user.developerEmail),F=t(i.user.testEmail),U=t(new Date);ae(()=>{i.user.isAuthenticated&&(i.user.email===j.value||i.user.email===z.value||i.user.email===F.value)?g.push("/_/panels/registrar/appointment/set-schedules/create"):g.push("/_/unauthorized")});const $=l=>{A.value=[],S.value=!1,k.value=!1,b.value=!0,p.value=!0,C.value=!1;let a=v(v().toDate()).format("MM-DD-YYYY");o.value=v(a).format("MM-DD-YYYY"),setTimeout(()=>{L.filter(function(m){l===m.provider&&(n.value=m.provider,o.value=m.date,A.value.push(m.date))},100)})},J=()=>{setTimeout(()=>{L.filter(function(l){l.provider===n.value&&(d.value=l.time,l.date===o.value&&(p.value=!1))})},100)},X=l=>{o.value=v(l).format("MM-DD-YYYY");let a=v(v().toDate()).format("MM-DD-YYYY");S.value=!1,k.value=!1,b.value=!0,p.value=!0,o.value===a?(p.value=!1,S.value=!0,b.value=!1,C.value=!0,n.value=""):v(o.value).isBefore(a)?(p.value=!1,k.value=!0,b.value=!1,C.value=!0,n.value=""):J()},q=()=>{g.go()},G=()=>{g.push("/_/panels/registrar/appointment/set-schedules")},H=()=>{g.push("/_/reg-admin"),i.removeToken()},K=async()=>{console.log("addDates"),M.value=[],o.value==""&&n.value==[]&&d.value==[]&&M.value.push("Please Input All Fields (date, provider, time)"),M.value.length===0&&await $fetch(E.value+"/api/schedules/create/",{method:"POST",headers:{Authorization:i.user.token,"Content-Type":"application/json"},body:{provider:n.value,date:o.value,time:d.value}}).then(async l=>{console.log("response",l),q()})};return(l,a)=>{const m=W,Q=Z;return x(),f("div",me,[e("div",he,[u(e("div",fe,[P(m)],512),[[w,s(c)]]),e("div",xe,[e("div",ge,[e("div",be,[e("div",we,[e("div",{onClick:a[0]||(a[0]=r=>Y(c)?c.value=!s(c):c=!s(c)),class:"w-10 px-1.5"},[e("i",{class:oe(["fa text-3xl text-white",s(c)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",De,[ye,e("h1",Se,V(s(i).user.email),1)])]),e("button",{onClick:H,class:"flex hover:font-bold pt-1"},Ye)])]),e("div",Me,[e("div",Ae,[e("div",Te,[e("div",Pe,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:G,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Browse Dates ")])]),e("div",Ve,[e("div",Be,[e("form",{class:"lg:flex p-5",onSubmit:le(K,["prevent"])},[e("div",Ee,[e("div",Ie,[Le,e("div",Ne,[u(e("div",Oe,je,512),[[w,s(C)]]),e("div",ze,[(x(!0),f(N,null,O(s(R),(r,T)=>(x(),f("div",{key:T,class:""},[e("div",Fe,[u(e("input",{id:"provider",type:"radio",name:"provider",value:r.department,class:"mr-2 mt-0.5","onUpdate:modelValue":a[1]||(a[1]=h=>Y(n)?n.value=h:n=h),onClick:h=>$(r.department)},null,8,Ue),[[re,s(n)]]),e("label",$e,V(r.department),1)])]))),128))])])])]),e("div",Je,[Xe,e("div",qe,[P(s(_e),{modelValue:s(o),"onUpdate:modelValue":[a[2]||(a[2]=r=>Y(o)?o.value=r:o=r),a[3]||(a[3]=r=>X(s(o)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(A),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":s(U)},null,8,["modelValue","highlight","min-date"])])]),u(e("div",Ge," Sorry! Can't Add Current Date ",512),[[w,s(S)]]),u(e("div",He," Sorry! Can't Add Previous Dates ",512),[[w,s(k)]]),u(e("div",Ke,[Qe,e("div",We,[e("div",Ze,[e("div",et,[e("div",tt,[e("ul",st,[(x(!0),f(N,null,O(s(I)[0].time,(r,T)=>(x(),f("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:T},[u(e("input",{id:"time",type:"checkbox",name:"time",value:r,class:"mr-2 mt-0.5 available","onUpdate:modelValue":a[4]||(a[4]=h=>Y(d)?d.value=h:d=h)},null,8,at),[[ne,s(d)]]),e("label",ot,V(r),1)]))),128))])])])])])],512),[[w,s(b)]]),e("div",lt,[s(p)?(x(),f("button",it," Add ")):ie("",!0)])],32)])])])])])])])]),P(Q)])}}},gt=pe(rt,[["__scopeId","data-v-a1525927"]]);export{gt as default};
