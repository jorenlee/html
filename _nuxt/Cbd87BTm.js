import{_ as Se}from"./pMKzPg5D.js";import{_ as Ve}from"./q98zGJpB.js";import{l as Ce,u as Ue,f as Ae,r as a,m as Q,g as De,c as r,a as e,h as n,v as Te,e as s,b as W,i as d,n as $,t as f,j as se,s as Me,p as Le,F as G,q as Y,k as b,d as Ne,A as J,x as ae,o as u,y as oe}from"./Dc5n3c8M.js";import{p as Oe}from"./BOCn3TFe.js";import{s as Re}from"./C1zSg28U.js";import{X as Pe}from"./D_d_KIyz.js";/* empty css        */import{h as ze}from"./C5S46NFB.js";import{_ as H}from"./vUEbHlag.js";import{u as Ee}from"./BNhfuAfe.js";import{_ as Fe}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const qe={class:""},je={class:"flex"},Be={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Ge={class:"w-full min-h-screen"},Ye={class:"bg-green-800"},He={class:"flex mx-auto justify-between py-2 px-3.5"},Ie={class:"flex items-center text-white gap-5"},Je={class:"flex -mt-1"},Xe={class:"text-sm"},Ze={class:""},Ke={class:"w-full p-5"},Qe={class:"shadow-lg"},We={class:"w-full mx-auto"},$e={class:""},et={class:"lg:grid grid-cols-4 lg:ml-3 ml-8 mt-3"},tt={class:"my-5"},lt={class:"ml-5 mr-5"},st={class:"space-y-5"},at={class:""},ot=["value","onClick"],it={class:"flex items-center ml-5 font-bold text-green-900 -mt-5 text-sm",style:{"font-size":"9px"}},dt={class:"pl-5 text-xs"},nt={class:"pb-3"},rt={class:"w-fit mx-auto"},ut={class:"pb-3"},mt={class:"w-full"},pt={class:""},ct={class:""},vt={class:"h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md"},ft={class:""},bt=["value"],gt=["value"],_t={key:2,class:"font-bold"},ht={class:"lg:flex mx-auto gap-20 px-8 w-full pb-3 text-xs"},xt={class:"mx-auto gap-20 w-full"},yt={class:"w-full"},wt={class:"mb-5"},kt={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},St={class:"mt-3"},Vt={class:"gap-5"},Ct={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},Ut={class:"w-full mt-3"},At={class:"mt-3"},Dt={class:"flex w-full mb-3"},Tt={class:"flex h-fit"},Mt={class:"w-fit lg:mx-0 mx-auto"},Lt={class:"w-56 shadow"},Nt=["src"],Ot={class:"mt-3"},Rt={class:"mt-3"},Pt={class:"border-gray-200 pt-2"},zt={class:"flex text-xs mb-2"},Et={class:"flex font-bold text-green-800 text-xs"},Ft={class:"lg:flex"},qt={class:"flex items-center"},jt={class:"flex items-center"},Bt={class:"flex items-center"},Gt={class:"flex items-center"},Yt={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},Ht={class:"w-10/12 mx-auto"},It={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},Jt={class:"mx-auto w-fit mb-10 mt-3"},Xt={class:"pt-10 ml-4"},Zt={class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},Kt={class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},Qt={class:"pb-2 text-base font-normal w-10/12 text-gray-500 dark:text-gray-400"},Wt={__name:"[id]",async setup($t){let m,y;const X=Ce(),C=Ue(),p=Ae(),ie=a(Oe.providerLists),de=a(Re.timeSelection),w=a(p.mainDevServer),{data:i}=([m,y]=Q(()=>Ee(w.value+"/api/appointments/"+X.params.id+"/","$LF2T00bNNE")),m=await m,y(),m),ne=([m,y]=Q(()=>$fetch(w.value+"/api/appointments/tracking/list/").catch(o=>o.data)),m=await m,y(),m),U=([m,y]=Q(()=>$fetch(w.value+"/api/schedules/list/").catch(o=>o.data)),m=await m,y(),m);let A=a(i.value.service),k=a(i.value.provider),g=a(i.value.referencecode),v=a(i.value.date),D=a(i.value.time),h=a(i.value.time),T=a(i.value.firstname),M=a(i.value.lastname),L=a(i.value.email),N=a(i.value.contactnumber),O=a(i.value.address),R=a(i.value.city),P=a(i.value.zipcode),z=a(i.value.notes);a(""),a(""),a("");let ee=a(i.value.banner_image),E=a(i.value.successful_request),F=a(i.value.appointment_confirm),q=a(i.value.payment),j=a(i.value.request_delivered),re=a(new Date().toDateString()),ue=a("Registrars Admin"),me=a(p.user.email);a("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png");let _=a([]),Z=a();a();let K=a(),c=a(),te=a(new Date().toDateString()),le=a(new Date().toLocaleTimeString()),S=a(),I=a([]),x=a(!0);const pe=a(p.user.registrarEmail),ce=a(p.user.developerEmail),ve=a(p.user.testEmail);De(()=>{p.user.isAuthenticated&&(p.user.email===pe.value||p.user.email===ce.value||p.user.email===ve.value)?(fe(),C.push("/_/panels/registrar/appointment/edit/"+X.params.id),U.filter(function(o){o.date===i.value.date&&(Z.value=o.id,c.value=o.time,c.value.push(D.value),K.value=o.provider)})):C.push("/_/unauthorized")});let fe=()=>{for(let o=0;o<U.length;o++)I.value.push(U[o].date)},be=o=>{I.value=[],setTimeout(()=>{U.filter(function(t){o===t.provider&&(k.value=t.provider,v.value=t.date,c.value=t.time,c.value.push(D.value),I.value.push(t.date))},100)})};const ge=()=>{C.push("/_/reg-admin"),p.removeToken()},_e=o=>{h.value=D.value,v.value=ze(o).format("MM-DD-YYYY"),U.filter(function(t){t.date===v.value&&(Z.value=t.id,c.value=t.time,c.value.push(D.value),K.value=t.provider)})},he=async()=>{c.value.length>1&&(H.pull(c.value,h.value),await $fetch(w.value+"/api/schedules/"+Z.value+"/edit/",{method:"PUT",body:{provider:K.value,date:v.value,time:c.value}}).then(o=>{}))},xe=async()=>{_.value=[],g.value==""&&te.value==""&&le.value==""&&S.value==""&&_.value.push("Please enter all Fields."),_.value.length==0&&await $fetch(w.value+"/api/appointments/tracking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{referencecode:g.value,date:te.value,time:le.value,description:S.value}}).then(o=>{C.go()})},ye=async()=>{_.value=[],he(),await $fetch(w.value+"/api/appointments/"+X.params.id+"/edit/",{method:"PUT",body:{service:A.value,provider:k.value,referencecode:g.value,date:v.value,time:h.value,firstname:T.value,lastname:M.value,email:L.value,contactnumber:N.value,address:O.value,city:R.value,zipcode:P.value,notes:z.value,banner_image:ee.value,successful_request:E.value,appointment_confirm:F.value,payment:q.value,request_delivered:j.value,updated_at:re.value,created_by_name:ue.value,created_by_email:me.value}}).then(o=>{C.push({path:"/_/panels/registrar/appointment"})})};return(o,t)=>{const we=Se,ke=Ve;return u(),r("div",qe,[e("div",je,[n(e("div",Be,[W(we)],512),[[Te,s(x)]]),e("div",Ge,[e("div",Ye,[e("div",He,[e("div",Ie,[e("div",{onClick:t[0]||(t[0]=l=>d(x)?x.value=!s(x):x=!s(x)),class:"w-10 px-1.5"},[e("i",{class:$(["fa text-3xl text-white",s(x)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Je,[t[21]||(t[21]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Xe,f(s(p).user.email),1)])]),e("button",{onClick:ge,class:"flex hover:font-bold pt-1"},t[22]||(t[22]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Ze,[e("div",Ke,[e("form",{onSubmit:se(ye,["prevent"])},[e("div",Qe,[e("div",We,[e("div",$e,[e("div",et,[e("div",tt,[t[24]||(t[24]=e("label",{class:"block mb-2 text-xs font-bold text-gray-900 uppercase"},"Service",-1)),n(e("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>d(A)?A.value=l:A=l),id:"service",name:"service",class:"shadow-md p-2 rounded-sm mb-2 w-full"},t[23]||(t[23]=[Le('<option value="" disabled data-v-6135b198> Please select the type of service. </option><optgroup label="University Registrar" data-v-6135b198><option value="CAV" data-v-6135b198>CAV Application</option><option value="Good Moral" data-v-6135b198> Certificate of Good Moral Character </option><option value="Honorable" data-v-6135b198>Honorable Dismissal</option><option value="TOR" data-v-6135b198>Transcipt of Records Application</option><option value="OTHERS" data-v-6135b198>Other Certificates Application</option></optgroup><optgroup label="SAO Office" data-v-6135b198><option value="Good Moral SAO" data-v-6135b198> Certificate of Good Moral Character </option></optgroup>',3)]),512),[[Me,s(A)]])]),e("div",lt,[t[25]||(t[25]=e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900"},"Provider",-1)),t[26]||(t[26]=e("div",{class:"text-xs mt-3 mb-3 font-bold"},[e("label",{class:""},"Please Select a Provider")],-1)),e("div",st,[(u(!0),r(G,null,Y(s(ie),(l,B)=>(u(),r("div",{key:B,class:"mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"},[e("div",at,[n(e("input",{class:"lg:flex items-center w-4 h-4 text-green-600 bg-white border-green-300 focus:ring-green-500",type:"radio",name:"provider",id:"provider",value:l.registrarsAssign,"onUpdate:modelValue":t[2]||(t[2]=V=>d(k)?k.value=V:k=V),onClick:V=>s(be)(l.registrarsAssign)},null,8,ot),[[oe,s(k)]]),e("label",it,f(l.title),1)]),e("p",dt,f(l.description),1)]))),128))])]),e("div",nt,[t[27]||(t[27]=e("h1",{class:"text-center mb-3 font-bold lasalle-green-text"}," Calendar ",-1)),e("div",rt,[W(s(Pe),{modelValue:s(v),"onUpdate:modelValue":[t[3]||(t[3]=l=>d(v)?v.value=l:v=l),t[4]||(t[4]=l=>_e(s(v)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(I),"year-range":[2025,2025],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",ut,[t[28]||(t[28]=e("h1",{class:"text-center mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"}," Available Time ",-1)),e("div",mt,[e("div",pt,[e("div",ct,[e("div",vt,[e("ul",ft,[(u(!0),r(G,null,Y(s(de)[0].time,(l,B)=>(u(),r("li",{class:"mb-3 lg:flex justify-center font-bold",key:B},[s(H).includes(s(c),l)?n((u(),r("input",{key:0,id:"time",type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":t[5]||(t[5]=V=>d(h)?h.value=V:h=V)},null,8,bt)),[[oe,s(h)]]):(u(),r("input",{key:1,id:"time",type:"checkbox",name:"time",value:l,class:"mr-2 mt-0.5",disabled:"",checked:""},null,8,gt)),s(H).includes(s(D),l)?(u(),r("label",_t,f(l),1)):(u(),r("label",{key:3,class:$(s(H).includes(s(c),l)?"text-green-500":"text-red-500")},f(l),3))]))),128))])])])])])])])]),e("div",ht,[e("div",xt,[e("div",yt,[e("div",wt,[e("div",null,[t[29]||(t[29]=e("h1",{class:"mb-3 font-bold lasalle-green-text"}," Primary Information ",-1)),e("div",kt,[n(e("input",{id:"firstname",name:"firstname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"First Name","onUpdate:modelValue":t[6]||(t[6]=l=>d(T)?T.value=l:T=l)},null,512),[[b,s(T)]]),n(e("input",{id:"lastname",name:"lastname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Last Name","onUpdate:modelValue":t[7]||(t[7]=l=>d(M)?M.value=l:M=l)},null,512),[[b,s(M)]]),n(e("input",{id:"email",name:"email",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Email","onUpdate:modelValue":t[8]||(t[8]=l=>d(L)?L.value=l:L=l)},null,512),[[b,s(L)]]),n(e("input",{id:"contactnumber",name:"contactnumber",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Contact Number","onUpdate:modelValue":t[9]||(t[9]=l=>d(N)?N.value=l:N=l)},null,512),[[b,s(N)]])])]),e("div",St,[t[30]||(t[30]=e("h1",{class:"lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text"}," Contact Address ",-1)),e("div",Vt,[n(e("input",{id:"address",name:"address",class:"shadow-md p-2 rounded-sm mb-3 w-full border",placeholder:"Address","onUpdate:modelValue":t[10]||(t[10]=l=>d(O)?O.value=l:O=l)},null,512),[[b,s(O)]]),e("div",Ct,[n(e("input",{id:"city",name:"city",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"City","onUpdate:modelValue":t[11]||(t[11]=l=>d(R)?R.value=l:R=l)},null,512),[[b,s(R)]]),n(e("input",{id:"zipcode",name:"zipcode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Zip Code","onUpdate:modelValue":t[12]||(t[12]=l=>d(P)?P.value=l:P=l)},null,512),[[b,s(P)]])])])])]),e("div",Ut,[n(e("input",{name:"notes",placeholder:"Notes",class:"shadow-md border rounded-sm p-2 w-full","onUpdate:modelValue":t[13]||(t[13]=l=>d(z)?z.value=l:z=l)},null,512),[[b,s(z)]])]),e("div",At,[e("div",Dt,[e("div",Tt,[e("input",{type:"file",onChange:t[14]||(t[14]=(...l)=>o.uploadedFile&&o.uploadedFile(...l)),accept:"image/*"},null,32)])]),e("div",Mt,[e("div",Lt,[e("img",{class:"lg:w-full h-56 object-contain",src:s(ee)},null,8,Nt)])])]),e("div",Ot,[n(e("input",{id:"referencecode",name:"referencecode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Reference Code","onUpdate:modelValue":t[15]||(t[15]=l=>d(g)?g.value=l:g=l),disabled:""},null,512),[[b,s(g)]])])]),e("div",Rt,[e("ul",Pt,[e("li",zt,[t[36]||(t[36]=e("label",{class:"pr-2"}," Status",-1)),e("h1",Et,[t[35]||(t[35]=Ne(" : ")),e("ul",Ft,[e("li",qt,[n(e("input",{type:"checkbox",id:"checking",name:"checking",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[16]||(t[16]=l=>d(E)?E.value=l:E=l)},null,512),[[J,s(E)]]),t[31]||(t[31]=e("label",{class:""},"Checking",-1))]),e("li",jt,[n(e("input",{type:"checkbox",id:"appointment_confirm",name:"appointment_confirm",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[17]||(t[17]=l=>d(F)?F.value=l:F=l)},null,512),[[J,s(F)]]),t[32]||(t[32]=e("label",{class:""},"Confirmed",-1))]),e("li",Bt,[n(e("input",{type:"checkbox",id:"payment",name:"payment",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[18]||(t[18]=l=>d(q)?q.value=l:q=l)},null,512),[[J,s(q)]]),t[33]||(t[33]=e("label",{class:""},"Payment",-1))]),e("li",Gt,[n(e("input",{type:"checkbox",id:"request_delivered",name:"request_delivered",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[19]||(t[19]=l=>d(j)?j.value=l:j=l)},null,512),[[J,s(j)]]),t[34]||(t[34]=e("label",{class:""},"Delivered",-1))])])])])])]),s(_).length?(u(),r("div",Yt,[(u(!0),r(G,null,Y(s(_),l=>(u(),r("p",{key:l},f(l),1))),128))])):ae("",!0),t[37]||(t[37]=e("div",{class:"lg:w-full mx-auto justify-between flex"},[e("button",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"}," Update ")],-1))])])])])],32)]),e("div",Ht,[e("form",{onSubmit:se(xe,["prevent"]),class:"lg:flex items-center"},[n(e("input",{id:"tracking_description",name:"tracking_description",class:"shadow-md p-2 rounded-sm border text-xs w-full",placeholder:"Remark Status","onUpdate:modelValue":t[20]||(t[20]=l=>d(S)?S.value=l:S=l)},null,512),[[b,s(S)]]),t[38]||(t[38]=e("button",{class:"lasalle-green text-xs hover:bg-green-700 text-white py-1.5 px-1.5 whitespace-nowrap rounded-lg uppercase ml-5 font-bold"}," Add Track Status ",-1)),s(_).length?(u(),r("div",It,[(u(!0),r(G,null,Y(s(_),l=>(u(),r("p",{key:l},f(l),1))),128))])):ae("",!0)],32)]),e("div",Jt,[(u(!0),r(G,null,Y(s(H).orderBy(s(ne),"date","time","asc"),(l,B)=>(u(),r("ol",{class:$(["relative border-l border-gray-200 dark:border-gray-700",l.referencecode===s(g)?"block":"hidden"]),key:B},[e("li",Xt,[t[39]||(t[39]=e("div",{class:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"},null,-1)),e("p",Zt,f(l.date),1),e("p",Kt,f(l.time),1),e("p",Qt,f(l.description),1)])],2))),128))])])])]),W(ke)])}}},pl=Fe(Wt,[["__scopeId","data-v-6135b198"]]);export{pl as default};