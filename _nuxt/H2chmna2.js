import{_ as ve}from"./Cidde4vp.js";import{_ as fe}from"./BFVI4S4y.js";import{u as ge,f as _e,r as s,m as he,g as be,c as n,a as e,h as r,v as xe,e as a,b as B,i,n as we,t as D,j as ye,s as Se,p as ke,F as G,q as Y,k as v,x as Ce,o as u,y as W}from"./Du9xBp9R.js";import{p as Ae}from"./BOCn3TFe.js";import{s as Ve}from"./C1zSg28U.js";import{X as Ue}from"./mVUZ_de6.js";/* empty css        */import{h as De}from"./C5S46NFB.js";import{_ as H}from"./vUEbHlag.js";import{_ as Oe}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const Pe={class:""},Te={class:"flex"},Le={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Me={class:"w-full"},Re={class:"bg-green-800"},ze={class:"lg:flex mx-auto justify-between py-2 px-3.5"},je={class:"lg:flex items-center text-white gap-5"},Ne={class:"flex -mt-1"},Ee={class:"text-sm"},qe={class:""},Fe={class:"w-full p-5"},Be={class:"shadow-lg mb-5"},Ge={class:"w-full mx-auto"},Ye={class:"lg:grid grid-cols-2"},He={class:"my-5 ml-5 mr-5"},Ie={class:"ml-5 mr-5"},Je={class:"space-y-5"},Xe={class:""},Ze=["value","onClick"],Ke={class:"flex items-center ml-5 font-bold text-green-900 -mt-5 text-sm",style:{"font-size":"9px"},for:"provider"},Qe={class:"pl-5 text-xs"},We={class:"mx-auto gap-20 w-full text-xs mt-3"},$e={class:"lg:w-full lg:px-10 lg:pt-2"},et={class:""},tt={class:"pb-3"},lt={class:"w-fit mb-10 border mx-auto"},st={class:"pb-3"},at={class:"w-full"},ot={class:""},it={class:""},dt={class:"h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md"},nt={class:""},rt=["value"],ut=["value"],mt={for:"time"},ct={class:"lg:flex mx-auto gap-20 px-8 w-full py-3 text-xs"},pt={class:"mx-auto gap-20 w-full"},vt={class:"w-full"},ft={class:"lg:grid grid-cols-1 gap-5 mb-5"},gt={class:"mt-5"},_t={class:"lg:grid grid-cols-2 gap-3"},ht={class:"gap-5"},bt={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},xt={class:"w-full"},wt={class:"mt-3"},yt={class:"flex w-full mb-3"},St={class:"flex h-fit"},kt={class:"w-fit lg:mx-0 mx-auto"},Ct={class:"w-56 shadow"},At=["src"],Vt=["src"],Ut={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},Dt={__name:"index",async setup(Ot){let O,I;const P=ge(),m=_e(),$=s(Ae.providerLists),ee=s(Ve.timeSelection),T=s(m.mainDevServer),L=([O,I]=he(()=>$fetch(T.value+"/api/schedules/list/").catch(o=>o.data)),O=await O,I(),O);let f=s(!0),J=s(),g=s(""),_=s(""),R=s("APS"+Date.now()),d=s(),c=s(""),h=s("Jo Renlee"),b=s("Luna"),p=s("jorenleeluna24@gmail.com"),x=s("09210689089"),w=s("Philippines"),y=s("Ozamiz City"),S=s("7200"),k=s("Sample");s("");const z=s(""),X=s("");let V=s("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png"),M=s(!1),j=s(!1),N=s(!1),E=s(!1),Z=s(new Date().toDateString()),K=s("Registrars Admin"),te=s("admin@gmail.com"),U=s([]),C=s(),Q=s(),q=s([]);s(!0),s(!1);const le=s(m.user.registrarEmail),se=s(m.user.developerEmail),ae=s(m.user.testEmail);be(()=>{m.user.isAuthenticated&&(m.user.email===le.value||m.user.email===se.value||m.user.email===ae.value)?P.push("/_/panels/registrar/appointment/create"):P.push("/_/unauthorized")});let oe=o=>{q.value=[];for(let t=0;t<L.length;t++)H.includes(L[t].provider,o)&&q.value.push(L[t].date)};const ie=o=>{X.value=o.target.files[0],z.value=URL.createObjectURL(X.value),V.value="http://127.0.0.1:8000/media/files/images/"+o.target.files[0].name},de=o=>{d.value=De(o).format("MM-DD-YYYY"),L.filter(function(t){d.value===t.date&&(J.value=t.id,d.value=t.date,C.value=t.time,Q.value=t.provider)})},ne=()=>{P.push("/_/reg-admin"),m.removeToken()},re=async()=>{C.value.length===1&&(C.value=["-"]),H.pull(C.value,c.value),await $fetch(T.value+"/api/schedules/"+J.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{provider:Q.value,date:d.value,time:C.value}}).then(o=>{})},ue=async()=>{await $fetch(T.value+"/api/appointments/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:g.value,provider:_.value,referencecode:R.value,date:d.value,time:c.value,firstname:h.value,lastname:b.value,email:p.value,contactnumber:x.value,address:w.value,city:y.value,zipcode:S.value,notes:k.value,banner_image:V.value,successful_request:M.value,appointment_confirm:j.value,payment:N.value,request_delivered:E.value,updated_at:Z.value,created_by_name:K.value,created_by_email:p.value}}).then(o=>{})},me=async()=>{U.value=[],g.value==""&&_.value==""&&R.value==""&&d.value==""&&c.value==""&&h.value==""&&b.value==""&&p.value==""&&x.value==""&&w.value==""&&y.value==""&&S.value==""&&k.value==""&&V.value==""&&M.value==""&&j.value==""&&N.value==""&&E.value==""&&U.value.push("Please enter all Fields."),U.value.length==0&&(M.value=!0,re(),ue(),await $fetch(T.value+"/api/appointments/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{service:g.value,provider:_.value,referencecode:R.value,date:d.value,time:c.value,firstname:h.value,lastname:b.value,email:p.value,contactnumber:x.value,address:w.value,city:y.value,zipcode:S.value,notes:k.value,banner_image:V.value,successful_request:M.value,appointment_confirm:j.value,payment:N.value,request_delivered:E.value,updated_at:Z.value,created_by_name:K.value,created_by_email:te.value}}).then(o=>{P.push({path:"/_/panels/registrar/appointment"})}))};return(o,t)=>{const ce=ve,pe=fe;return u(),n("div",Pe,[e("div",Te,[r(e("div",Le,[B(ce)],512),[[xe,a(f)]]),e("div",Me,[e("div",Re,[e("div",ze,[e("div",je,[e("div",{onClick:t[0]||(t[0]=l=>i(f)?f.value=!a(f):f=!a(f)),class:"w-10 px-1.5"},[e("i",{class:we(["fa text-3xl text-white",a(f)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Ne,[t[14]||(t[14]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Ee,D(a(m).user.email),1)])]),e("button",{onClick:ne,class:"flex hover:font-bold pt-1"},t[15]||(t[15]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",qe,[e("div",Fe,[t[25]||(t[25]=e("h1",{class:"font-bold text-gray-200 text-center text-base py-1 px-4 bg-green-900"}," Add Appointment ",-1)),e("form",{onSubmit:ye(me,["prevent"])},[e("div",Be,[e("div",Ge,[e("div",Ye,[e("div",null,[e("div",He,[t[17]||(t[17]=e("label",{for:"service",class:"block mb-2 text-xs font-bold text-gray-900 uppercase"},"Service",-1)),r(e("select",{id:"service",name:"service","onUpdate:modelValue":t[1]||(t[1]=l=>i(g)?g.value=l:g=l),class:"shadow-md px-2 py-1 rounded-sm mb-2 w-full"},t[16]||(t[16]=[ke('<option value="" disabled data-v-ec7f6c56> Please select the type of service </option><optgroup label="University Registrar" data-v-ec7f6c56><option value="CAV" data-v-ec7f6c56>CAV Application</option><option value="Good Moral" data-v-ec7f6c56> Certificate of Good Moral Character </option><option value="Honorable" data-v-ec7f6c56>Honorable Dismissal</option><option value="TOR" data-v-ec7f6c56>Transcipt of Records Application</option><option value="OTHERS" data-v-ec7f6c56>Other Certificates Application</option></optgroup><optgroup label="SAO Office" data-v-ec7f6c56><option value="Good Moral SAO" data-v-ec7f6c56> Certificate of Good Moral Character </option></optgroup>',3)]),512),[[Se,a(g)]])]),e("div",Ie,[t[18]||(t[18]=e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900"},"Provider",-1)),t[19]||(t[19]=e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:"",for:"PleaseSelectTheProvider"},"Please Select a Provider")],-1)),e("div",Je,[(u(!0),n(G,null,Y($.value,(l,F)=>(u(),n("div",{key:F,class:"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"},[e("div",Xe,[r(e("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500",type:"radio",name:"provider",id:"provider",value:l.registrarsAssign,"onUpdate:modelValue":t[2]||(t[2]=A=>i(_)?_.value=A:_=A),onClick:A=>a(oe)(l.registrarsAssign)},null,8,Ze),[[W,a(_)]]),e("label",Ke,D(l.title),1)]),e("p",Qe,D(l.description),1)]))),128))])])]),e("div",We,[e("div",$e,[e("div",et,[e("div",tt,[t[20]||(t[20]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-center"}," Calendar ",-1)),e("div",lt,[B(a(Ue),{modelValue:a(d),"onUpdate:modelValue":[t[3]||(t[3]=l=>i(d)?d.value=l:d=l),t[4]||(t[4]=l=>de(a(d)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:a(q),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",st,[t[21]||(t[21]=e("h1",{class:"text-center lg:mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"}," Available Time ",-1)),e("div",at,[e("div",ot,[e("div",it,[e("div",dt,[e("ul",nt,[(u(!0),n(G,null,Y(ee.value[0].time,(l,F)=>(u(),n("li",{class:"mb-3 lg:flex justify-center font-bold",key:F},[a(H).includes(a(C),l)?r((u(),n("input",{key:0,id:"time",type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":t[5]||(t[5]=A=>i(c)?c.value=A:c=A)},null,8,rt)),[[W,a(c)]]):(u(),n("input",{key:1,id:"time",type:"radio",name:"time",value:l,class:"mr-2 mt-0.5",disabled:""},null,8,ut)),e("label",mt,D(l),1)]))),128))])])])])])])])])])]),e("div",ct,[e("div",pt,[e("div",vt,[e("div",ft,[e("div",gt,[t[22]||(t[22]=e("h1",{class:"mb-3 font-bold lasalle-green-text"}," Primary Information ",-1)),e("div",_t,[r(e("input",{id:"firstname",name:"firstname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"First Name","onUpdate:modelValue":t[6]||(t[6]=l=>i(h)?h.value=l:h=l)},null,512),[[v,a(h)]]),r(e("input",{id:"lastname",name:"lastname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Last Name","onUpdate:modelValue":t[7]||(t[7]=l=>i(b)?b.value=l:b=l)},null,512),[[v,a(b)]]),r(e("input",{id:"email",name:"email",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Email","onUpdate:modelValue":t[8]||(t[8]=l=>i(p)?p.value=l:p=l)},null,512),[[v,a(p)]]),r(e("input",{id:"contactnumber",name:"contactnumber",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Contact Number","onUpdate:modelValue":t[9]||(t[9]=l=>i(x)?x.value=l:x=l)},null,512),[[v,a(x)]])])]),e("div",null,[t[23]||(t[23]=e("h1",{class:"lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text"}," Contact Address ",-1)),e("div",ht,[r(e("input",{id:"address",name:"address",class:"shadow-md p-2 rounded-sm mb-3 w-full border",placeholder:"Address","onUpdate:modelValue":t[10]||(t[10]=l=>i(w)?w.value=l:w=l)},null,512),[[v,a(w)]]),e("div",bt,[r(e("input",{id:"city",name:"city",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"City","onUpdate:modelValue":t[11]||(t[11]=l=>i(y)?y.value=l:y=l)},null,512),[[v,a(y)]]),r(e("input",{id:"zipcode",name:"zipcode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Zip Code","onUpdate:modelValue":t[12]||(t[12]=l=>i(S)?S.value=l:S=l)},null,512),[[v,a(S)]])])])])]),e("div",xt,[r(e("input",{name:"notes",placeholder:"Notes",class:"shadow-md border rounded-sm p-2 w-full","onUpdate:modelValue":t[13]||(t[13]=l=>i(k)?k.value=l:k=l)},null,512),[[v,a(k)]])]),e("div",wt,[e("div",yt,[e("div",St,[e("input",{type:"file",onChange:ie,accept:"image/*"},null,32)])]),e("div",kt,[e("div",Ct,[z.value===""?(u(),n("img",{key:0,class:"lg:w-full h-56 object-contain",src:a(V)},null,8,At)):(u(),n("img",{key:1,class:"lg:w-full h-56 object-contain",src:z.value},null,8,Vt))])])])]),a(U).length?(u(),n("div",Ut,[(u(!0),n(G,null,Y(a(U),l=>(u(),n("p",{key:l},D(l),1))),128))])):Ce("",!0),t[24]||(t[24]=e("div",{class:"w-1/2 justify-between flex"},[e("button",{class:"lasalle-green text-xs text-white font-bold py-2.5 px-5 rounded-lg mt-3 uppercase"}," Submit ")],-1))])])])])],32)])])])]),B(pe)])}}},Bt=Oe(Dt,[["__scopeId","data-v-ec7f6c56"]]);export{Bt as default};