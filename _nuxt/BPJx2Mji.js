import{_ as he}from"./BPZ_FVFP.js";import{_ as fe}from"./C_kbrGxy.js";import{u as ge,g as be,r as l,q as xe,h as we,c as n,a as e,i as r,v as ye,f as a,b as G,j as i,n as Se,t as O,k as ke,y as Ce,F as Y,s as H,l as _,z as Ae,o as u,A as ee,p as Ve,e as Ue,x as De}from"./Dl-oWLyK.js";import{p as Oe}from"./BOCn3TFe.js";import{s as Pe}from"./C1zSg28U.js";import{X as Te}from"./D99JNIhC.js";/* empty css        */import{h as ze}from"./C5S46NFB.js";import{_ as J}from"./vUEbHlag.js";import{_ as Le}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const c=P=>(Ve("data-v-c216c4c5"),P=P(),Ue(),P),Me={class:""},Re={class:"flex"},je={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Ne={class:"w-full"},Ee={class:"bg-green-800"},Fe={class:"lg:flex mx-auto justify-between py-2 px-3.5"},qe={class:"lg:flex items-center text-white gap-5"},Ie={class:"flex -mt-1"},Be=c(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),Ge={class:"text-sm"},Ye=c(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),He=c(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),Je=[Ye,He],Xe={class:""},Ze={class:"w-full p-5"},Ke=c(()=>e("h1",{class:"font-bold text-gray-200 text-center text-base py-1 px-4 bg-green-900"}," Add Appointment ",-1)),Qe={class:"shadow-lg mb-5"},We={class:"w-full mx-auto"},$e={class:"lg:grid grid-cols-2"},et={class:"my-5 ml-5 mr-5"},tt=c(()=>e("label",{for:"service",class:"block mb-2 text-xs font-bold text-gray-900 uppercase"},"Service",-1)),st=De('<option value="" disabled data-v-c216c4c5> Please select the type of service </option><optgroup label="University Registrar" data-v-c216c4c5><option value="CAV" data-v-c216c4c5>CAV Application</option><option value="Good Moral" data-v-c216c4c5> Certificate of Good Moral Character </option><option value="Honorable" data-v-c216c4c5>Honorable Dismissal</option><option value="TOR" data-v-c216c4c5>Transcipt of Records Application</option><option value="OTHERS" data-v-c216c4c5>Other Certificates Application</option></optgroup><optgroup label="SAO Office" data-v-c216c4c5><option value="Good Moral SAO" data-v-c216c4c5> Certificate of Good Moral Character </option></optgroup>',3),lt=[st],at={class:"ml-5 mr-5"},ot=c(()=>e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900"},"Provider",-1)),it=c(()=>e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),dt={class:"space-y-5"},nt={class:""},rt=["value","onClick"],ut={class:"flex items-center ml-5 font-bold text-green-900 -mt-5 text-sm",style:{"font-size":"9px"},for:"provider"},ct={class:"pl-5 text-xs"},mt={class:"mx-auto gap-20 w-full text-xs mt-3"},pt={class:"lg:w-full lg:px-10 lg:pt-2"},vt={class:""},_t={class:"pb-3"},ht=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text text-center"}," Calendar ",-1)),ft={class:"w-fit mb-10 border mx-auto"},gt={class:"pb-3"},bt=c(()=>e("h1",{class:"text-center lg:mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"}," Available Time ",-1)),xt={class:"w-full"},wt={class:""},yt={class:""},St={class:"h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md"},kt={class:""},Ct=["value"],At=["value"],Vt={for:"time"},Ut={class:"lg:flex mx-auto gap-20 px-8 w-full py-3 text-xs"},Dt={class:"mx-auto gap-20 w-full"},Ot={class:"w-full"},Pt={class:"lg:grid grid-cols-1 gap-5 mb-5"},Tt={class:"mt-5"},zt=c(()=>e("h1",{class:"mb-3 font-bold lasalle-green-text"}," Primary Information ",-1)),Lt={class:"lg:grid grid-cols-2 gap-3"},Mt=c(()=>e("h1",{class:"lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text"}," Contact Address ",-1)),Rt={class:"gap-5"},jt={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},Nt={class:"w-full"},Et={class:"mt-3"},Ft={class:"flex w-full mb-3"},qt={class:"flex h-fit"},It={class:"w-fit lg:mx-0 mx-auto"},Bt={class:"w-56 shadow"},Gt=["src"],Yt=["src"],Ht={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},Jt=c(()=>e("div",{class:"w-1/2 justify-between flex"},[e("button",{class:"lasalle-green text-xs text-white font-bold py-2.5 px-5 rounded-lg mt-3 uppercase"}," Submit ")],-1)),Xt={__name:"index",async setup(P){let T,X;const z=ge(),m=be(),te=l(Oe.providerLists),se=l(Pe.timeSelection),L=l(m.mainServer),M=([T,X]=xe(()=>$fetch(L.value+"/api/schedules/list/").catch(o=>o.data)),T=await T,X(),T);let h=l(!0),Z=l(),f=l(""),g=l(""),j=l("APS"+Date.now()),d=l(),p=l(""),b=l("Jo Renlee"),x=l("Luna"),v=l("jorenleeluna24@gmail.com"),w=l("09210689089"),y=l("Philippines"),S=l("Ozamiz City"),k=l("7200"),C=l("Sample");l("");const N=l(""),K=l("");let U=l("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png"),R=l(!1),E=l(!1),F=l(!1),q=l(!1),Q=l(new Date().toDateString()),W=l("Registrars Admin"),le=l("admin@gmail.com"),D=l([]),A=l(),$=l(),I=l([]);l(!0),l(!1);const ae=l(m.user.registrarEmail),oe=l(m.user.developerEmail),ie=l(m.user.testEmail);we(()=>{m.user.isAuthenticated&&(m.user.email===ae.value||m.user.email===oe.value||m.user.email===ie.value)?z.push("/_/panels/registrar/appointment/create"):z.push("/_/unauthorized")});let de=o=>{I.value=[];for(let s=0;s<M.length;s++)J.includes(M[s].provider,o)&&I.value.push(M[s].date)};const ne=o=>{K.value=o.target.files[0],N.value=URL.createObjectURL(K.value),console.log(o.target.files[0]),U.value="http://127.0.0.1:8000/media/files/images/"+o.target.files[0].name},re=o=>{d.value=ze(o).format("MM-DD-YYYY"),M.filter(function(s){d.value===s.date&&(Z.value=s.id,d.value=s.date,A.value=s.time,$.value=s.provider)})},ue=()=>{z.push("/_/reg-admin"),m.removeToken()},ce=async()=>{A.value.length===1&&(A.value=["-"]),J.pull(A.value,p.value),await $fetch(L.value+"/api/schedules/"+Z.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{provider:$.value,date:d.value,time:A.value}}).then(o=>{console.log("response",o)})},me=async()=>{await $fetch(L.value+"/api/appointments/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:f.value,provider:g.value,referencecode:j.value,date:d.value,time:p.value,firstname:b.value,lastname:x.value,email:v.value,contactnumber:w.value,address:y.value,city:S.value,zipcode:k.value,notes:C.value,banner_image:U.value,successful_request:R.value,appointment_confirm:E.value,payment:F.value,request_delivered:q.value,updated_at:Q.value,created_by_name:W.value,created_by_email:v.value}}).then(o=>{})},pe=async()=>{console.log("submitForm"),D.value=[],f.value==""&&g.value==""&&j.value==""&&d.value==""&&p.value==""&&b.value==""&&x.value==""&&v.value==""&&w.value==""&&y.value==""&&S.value==""&&k.value==""&&C.value==""&&U.value==""&&R.value==""&&E.value==""&&F.value==""&&q.value==""&&D.value.push("Please enter all Fields."),D.value.length==0&&(R.value=!0,ce(),me(),await $fetch(L.value+"/api/appointments/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:f.value,provider:g.value,referencecode:j.value,date:d.value,time:p.value,firstname:b.value,lastname:x.value,email:v.value,contactnumber:w.value,address:y.value,city:S.value,zipcode:k.value,notes:C.value,banner_image:U.value,successful_request:R.value,appointment_confirm:E.value,payment:F.value,request_delivered:q.value,updated_at:Q.value,created_by_name:W.value,created_by_email:le.value}}).then(o=>{console.log("response",o),z.push({path:"/_/panels/registrar/appointment"})}))};return(o,s)=>{const ve=he,_e=fe;return u(),n("div",Me,[e("div",Re,[r(e("div",je,[G(ve)],512),[[ye,a(h)]]),e("div",Ne,[e("div",Ee,[e("div",Fe,[e("div",qe,[e("div",{onClick:s[0]||(s[0]=t=>i(h)?h.value=!a(h):h=!a(h)),class:"w-10 px-1.5"},[e("i",{class:Se(["fa text-3xl text-white",a(h)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Ie,[Be,e("h1",Ge,O(a(m).user.email),1)])]),e("button",{onClick:ue,class:"flex hover:font-bold pt-1"},Je)])]),e("div",Xe,[e("div",Ze,[Ke,e("form",{onSubmit:ke(pe,["prevent"])},[e("div",Qe,[e("div",We,[e("div",$e,[e("div",null,[e("div",et,[tt,r(e("select",{id:"service",name:"service","onUpdate:modelValue":s[1]||(s[1]=t=>i(f)?f.value=t:f=t),class:"shadow-md px-2 py-1 rounded-sm mb-2 w-full"},lt,512),[[Ce,a(f)]])]),e("div",at,[ot,it,e("div",dt,[(u(!0),n(Y,null,H(te.value,(t,B)=>(u(),n("div",{key:B,class:"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"},[e("div",nt,[r(e("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500",type:"radio",name:"provider",id:"provider",value:t.registrarsAssign,"onUpdate:modelValue":s[2]||(s[2]=V=>i(g)?g.value=V:g=V),onClick:V=>a(de)(t.registrarsAssign)},null,8,rt),[[ee,a(g)]]),e("label",ut,O(t.title),1)]),e("p",ct,O(t.description),1)]))),128))])])]),e("div",mt,[e("div",pt,[e("div",vt,[e("div",_t,[ht,e("div",ft,[G(a(Te),{modelValue:a(d),"onUpdate:modelValue":[s[3]||(s[3]=t=>i(d)?d.value=t:d=t),s[4]||(s[4]=t=>re(a(d)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:a(I),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",gt,[bt,e("div",xt,[e("div",wt,[e("div",yt,[e("div",St,[e("ul",kt,[(u(!0),n(Y,null,H(se.value[0].time,(t,B)=>(u(),n("li",{class:"mb-3 lg:flex justify-center font-bold",key:B},[a(J).includes(a(A),t)?r((u(),n("input",{key:0,id:"time",type:"radio",name:"time",value:t,class:"mr-2 mt-0.5","onUpdate:modelValue":s[5]||(s[5]=V=>i(p)?p.value=V:p=V)},null,8,Ct)),[[ee,a(p)]]):(u(),n("input",{key:1,id:"time",type:"radio",name:"time",value:t,class:"mr-2 mt-0.5",disabled:""},null,8,At)),e("label",Vt,O(t),1)]))),128))])])])])])])])])])]),e("div",Ut,[e("div",Dt,[e("div",Ot,[e("div",Pt,[e("div",Tt,[zt,e("div",Lt,[r(e("input",{id:"firstname",name:"firstname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"First Name","onUpdate:modelValue":s[6]||(s[6]=t=>i(b)?b.value=t:b=t)},null,512),[[_,a(b)]]),r(e("input",{id:"lastname",name:"lastname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Last Name","onUpdate:modelValue":s[7]||(s[7]=t=>i(x)?x.value=t:x=t)},null,512),[[_,a(x)]]),r(e("input",{id:"email",name:"email",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Email","onUpdate:modelValue":s[8]||(s[8]=t=>i(v)?v.value=t:v=t)},null,512),[[_,a(v)]]),r(e("input",{id:"contactnumber",name:"contactnumber",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Contact Number","onUpdate:modelValue":s[9]||(s[9]=t=>i(w)?w.value=t:w=t)},null,512),[[_,a(w)]])])]),e("div",null,[Mt,e("div",Rt,[r(e("input",{id:"address",name:"address",class:"shadow-md p-2 rounded-sm mb-3 w-full border",placeholder:"Address","onUpdate:modelValue":s[10]||(s[10]=t=>i(y)?y.value=t:y=t)},null,512),[[_,a(y)]]),e("div",jt,[r(e("input",{id:"city",name:"city",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"City","onUpdate:modelValue":s[11]||(s[11]=t=>i(S)?S.value=t:S=t)},null,512),[[_,a(S)]]),r(e("input",{id:"zipcode",name:"zipcode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Zip Code","onUpdate:modelValue":s[12]||(s[12]=t=>i(k)?k.value=t:k=t)},null,512),[[_,a(k)]])])])])]),e("div",Nt,[r(e("input",{name:"notes",placeholder:"Notes",class:"shadow-md border rounded-sm p-2 w-full","onUpdate:modelValue":s[13]||(s[13]=t=>i(C)?C.value=t:C=t)},null,512),[[_,a(C)]])]),e("div",Et,[e("div",Ft,[e("div",qt,[e("input",{type:"file",onChange:ne,accept:"image/*"},null,32)])]),e("div",It,[e("div",Bt,[N.value===""?(u(),n("img",{key:0,class:"lg:w-full h-56 object-contain",src:a(U)},null,8,Gt)):(u(),n("img",{key:1,class:"lg:w-full h-56 object-contain",src:N.value},null,8,Yt))])])])]),a(D).length?(u(),n("div",Ht,[(u(!0),n(Y,null,H(a(D),t=>(u(),n("p",{key:t},O(t),1))),128))])):Ae("",!0),Jt])])])])],32)])])])]),G(_e)])}}},is=Le(Xt,[["__scopeId","data-v-c216c4c5"]]);export{is as default};
