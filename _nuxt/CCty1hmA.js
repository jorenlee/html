import{_ as we}from"./nT_hd0Y4.js";import{D as ye,m as ke,u as Se,r as a,E as J,p as Ce,c as d,a as e,q as r,v as Ue,n as s,b as ee,s as n,x as K,t as b,G as te,C as Ve,y as De,F as B,z as j,B as v,d as le,S as G,A as se,o as u,U as Ae}from"./BSp0laWV.js";import{s as Me}from"./C6_mW4WU.js";import{X as Te}from"./CUwUn9pS.js";/* empty css        */import{h as Oe}from"./C5S46NFB.js";import{_ as q}from"./5JjjnmY2.js";import{u as Re}from"./BZoQOz1C.js";import"./DlAUqK2U.js";const ze={class:""},Pe={class:"flex"},Ee={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Ne={class:"w-full min-h-screen"},qe={class:"bg-green-800"},Le={class:"flex mx-auto justify-between py-2 px-3.5"},Fe={class:"flex items-center text-white gap-5"},Be={class:"flex -mt-1"},je={class:"text-sm"},Ge={class:""},Ye={class:"w-full p-5"},He={class:"shadow-lg"},Ie={class:"w-full mx-auto"},Xe={class:""},Je={class:"lg:grid grid-cols-4 lg:ml-3 ml-8 mt-3"},Ke={class:"my-5"},Ze={class:"pb-3"},Qe={class:"w-fit mx-auto"},We={class:"pb-3"},$e={class:"w-full"},et={class:""},tt={class:""},lt={class:"h-60 w-10/12 mx-auto px-5 py-2 mt-1 rounded-md"},st={class:""},at=["value"],ot=["value"],it={key:2,class:"font-bold"},nt={class:"lg:flex mx-auto gap-20 px-8 w-full pb-3 text-xs"},dt={class:"mx-auto gap-20 w-full"},rt={class:"w-full"},ut={class:"mb-5"},mt={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},pt={class:"mt-3"},ct={class:"gap-5"},vt={class:"lg:grid lg:grid-cols-2 grid-cols-1 gap-3"},ft={class:"w-full mt-3"},gt={class:"mt-3"},bt={class:"flex w-full mb-3"},ht={class:"flex h-fit"},_t={class:"w-fit lg:mx-0 mx-auto"},xt={class:"w-56 shadow"},wt=["src"],yt=["src"],kt={class:"mt-3"},St={class:"mt-3"},Ct={class:"border-gray-200 pt-2"},Ut={class:"flex text-xs mb-2"},Vt={class:"flex font-bold text-green-800 text-xs"},Dt={class:"lg:flex"},At={class:"flex items-center"},Mt={class:"flex items-center"},Tt={class:"flex items-center"},Ot={class:"flex items-center"},Rt={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},zt={class:"w-10/12 mx-auto"},Pt={key:0,class:"mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"},Et={class:"mx-auto w-fit mb-10 mt-3"},Nt={class:"pt-10 ml-4"},qt={class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},Lt={class:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},Ft={class:"pb-2 text-base font-normal w-10/12 text-gray-500 dark:text-gray-400"},Qt={__name:"[id]",async setup(Bt){let m,w;const Y=ye(),S=ke(),c=Se(),ae=a(Me.timeSelection),y=a(c.mainDevServer),{data:i}=([m,w]=J(()=>Re(y.value+"/api/appointments/"+Y.params.id+"/","$ms3CoU6KEY")),m=await m,w(),m),oe=([m,w]=J(()=>$fetch(y.value+"/api/appointments/tracking/list/").catch(o=>o.data)),m=await m,w(),m),L=([m,w]=J(()=>$fetch(y.value+"/api/schedules/list/").catch(o=>o.data)),m=await m,w(),m);let C=a(i.value.service),h=a(i.value.referencecode),f=a(i.value.date),F=a(i.value.time),_=a(i.value.time),U=a(i.value.firstname),V=a(i.value.lastname),D=a(i.value.email),A=a(i.value.contactnumber),M=a(i.value.address),T=a(i.value.city),O=a(i.value.zipcode),R=a(i.value.notes);a("");const ie=a("");a("");let H=a(i.value.banner_image),z=a(i.value.successful_request),P=a(i.value.appointment_confirm),E=a(i.value.payment),N=a(i.value.request_delivered),ne=a(new Date().toDateString()),de=a("Registrars Admin"),re=a(c.user.email),ue=a("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png"),p=a([]),I=a();a();let g=a(),Z=a(new Date().toDateString()),Q=a(new Date().toLocaleTimeString()),k=a(),W=a([]),x=a(!0);const me=a(c.user.registrarEmail),pe=a(c.user.developerEmail),ce=a(c.user.testEmail);Ce(()=>{c.user.isAuthenticated&&(c.user.email===me.value||c.user.email===pe.value||c.user.email===ce.value)?(ve(),S.push("/_/panels/registrar/appointment/edit/"+Y.params.id),L.filter(function(o){o.date===i.value.date&&(I.value=o.id,g.value=o.time,g.value.push(F.value))})):S.push("/_/unauthorized")});let ve=()=>{for(let o=0;o<L.length;o++)W.value.push(L[o].date)};const fe=()=>{S.push("/_/reg-admin"),c.removeToken()},ge=o=>{_.value=F.value,f.value=Oe(o).format("MM-DD-YYYY"),L.filter(function(t){t.date===f.value&&(I.value=t.id,g.value=t.time,g.value.push(F.value))})},be=async()=>{g.value.length>1&&(q.pull(g.value,_.value),await $fetch(y.value+"/api/schedules/"+I.value+"/edit/",{method:"PUT",body:{date:f.value,time:g.value}}).then(o=>{}).catch(o=>{if(o.response)for(const t in o.response._data)p.value.push(`${t}: ${o.response._data[t]}`);else o.message&&p.value.push("Something went wrong. Please try again")}))},he=async()=>{p.value=[],h.value==""&&Z.value==""&&Q.value==""&&k.value==""&&p.value.push("Please enter all Fields."),p.value.length==0&&await $fetch(y.value+"/api/appointments/tracking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{referencecode:h.value,date:Z.value,time:Q.value,description:k.value}}).then(o=>{S.go()}).catch(o=>{if(o.response)for(const t in o.response._data)p.value.push(`${t}: ${o.response._data[t]}`);else o.message&&p.value.push("Something went wrong. Please try again")})},_e=async()=>{p.value=[],be(),await $fetch(y.value+"/api/appointments/"+Y.params.id+"/edit/",{method:"PUT",body:{service:C.value,referencecode:h.value,date:f.value,time:_.value,firstname:U.value,lastname:V.value,email:D.value,contactnumber:A.value,address:M.value,city:T.value,zipcode:O.value,notes:R.value,banner_image:H.value,successful_request:z.value,appointment_confirm:P.value,payment:E.value,request_delivered:N.value,updated_at:ne.value,created_by_name:de.value,created_by_email:re.value}}).then(o=>{S.push({path:"/_/panels/registrar/appointment"})}).catch(o=>{})};return(o,t)=>{const xe=we;return u(),d("div",ze,[e("div",Pe,[r(e("div",Ee,[ee(xe)],512),[[Ue,s(x)]]),e("div",Ne,[e("div",qe,[e("div",Le,[e("div",Fe,[e("div",{onClick:t[0]||(t[0]=l=>n(x)?x.value=!s(x):x=!s(x)),class:"w-10 px-1.5"},[e("i",{class:K(["fa text-3xl text-white",s(x)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Be,[t[20]||(t[20]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",je,b(s(c).user.email),1)])]),e("button",{onClick:fe,class:"flex hover:font-bold pt-1"},t[21]||(t[21]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Ge,[e("div",Ye,[e("form",{onSubmit:te(_e,["prevent"])},[e("div",He,[e("div",Ie,[e("div",Xe,[e("div",Je,[e("div",Ke,[t[23]||(t[23]=e("label",{class:"block mb-2 text-xs font-bold text-gray-900 uppercase"},"Service",-1)),r(e("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>n(C)?C.value=l:C=l),id:"service",name:"service",class:"shadow-md p-2 rounded-sm mb-2 w-full"},t[22]||(t[22]=[De('<option value="" disabled> Please select the type of service. </option><optgroup label="University Registrar"><option value="CAV">CAV Application</option><option value="Good Moral"> Certificate of Good Moral Character </option><option value="Honorable">Honorable Dismissal</option><option value="TOR">Transcipt of Records Application</option><option value="OTHERS">Other Certificates Application</option></optgroup><optgroup label="SAO Office"><option value="Good Moral SAO"> Certificate of Good Moral Character </option></optgroup>',3)]),512),[[Ve,s(C)]])]),e("div",Ze,[t[24]||(t[24]=e("h1",{class:"text-center mb-3 font-bold lasalle-green-text"}," Calendar ",-1)),e("div",Qe,[ee(s(Te),{modelValue:s(f),"onUpdate:modelValue":[t[2]||(t[2]=l=>n(f)?f.value=l:f=l),t[3]||(t[3]=l=>ge(s(f)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:s(W),"year-range":[2025,2025],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":o.minDate},null,8,["modelValue","highlight","min-date"])])]),e("div",We,[t[25]||(t[25]=e("h1",{class:"text-center mt-5 mb-3 font-bold lasalle-green-text lg:whitespace-nowrap"}," Available Time ",-1)),e("div",$e,[e("div",et,[e("div",tt,[e("div",lt,[e("ul",st,[(u(!0),d(B,null,j(s(ae)[0].time,(l,X)=>(u(),d("li",{class:"mb-3 lg:flex justify-center font-bold",key:X},[s(q).includes(s(g),l)?r((u(),d("input",{key:0,id:"time",type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":t[4]||(t[4]=$=>n(_)?_.value=$:_=$)},null,8,at)),[[Ae,s(_)]]):(u(),d("input",{key:1,id:"time",type:"checkbox",name:"time",value:l,class:"mr-2 mt-0.5",disabled:"",checked:""},null,8,ot)),s(q).includes(s(F),l)?(u(),d("label",it,b(l),1)):(u(),d("label",{key:3,class:K(s(q).includes(s(g),l)?"text-green-500":"text-red-500")},b(l),3))]))),128))])])])])])])])]),e("div",nt,[e("div",dt,[e("div",rt,[e("div",ut,[e("div",null,[t[26]||(t[26]=e("h1",{class:"mb-3 font-bold lasalle-green-text"}," Primary Information ",-1)),e("div",mt,[r(e("input",{id:"firstname",name:"firstname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"First Name","onUpdate:modelValue":t[5]||(t[5]=l=>n(U)?U.value=l:U=l)},null,512),[[v,s(U)]]),r(e("input",{id:"lastname",name:"lastname",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Last Name","onUpdate:modelValue":t[6]||(t[6]=l=>n(V)?V.value=l:V=l)},null,512),[[v,s(V)]]),r(e("input",{id:"email",name:"email",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Email","onUpdate:modelValue":t[7]||(t[7]=l=>n(D)?D.value=l:D=l)},null,512),[[v,s(D)]]),r(e("input",{id:"contactnumber",name:"contactnumber",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Contact Number","onUpdate:modelValue":t[8]||(t[8]=l=>n(A)?A.value=l:A=l)},null,512),[[v,s(A)]])])]),e("div",pt,[t[27]||(t[27]=e("h1",{class:"lg:mb-3 mb-2 lg:mt-0 mt-3 font-bold lasalle-green-text"}," Contact Address ",-1)),e("div",ct,[r(e("input",{id:"address",name:"address",class:"shadow-md p-2 rounded-sm mb-3 w-full border",placeholder:"Address","onUpdate:modelValue":t[9]||(t[9]=l=>n(M)?M.value=l:M=l)},null,512),[[v,s(M)]]),e("div",vt,[r(e("input",{id:"city",name:"city",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"City","onUpdate:modelValue":t[10]||(t[10]=l=>n(T)?T.value=l:T=l)},null,512),[[v,s(T)]]),r(e("input",{id:"zipcode",name:"zipcode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Zip Code","onUpdate:modelValue":t[11]||(t[11]=l=>n(O)?O.value=l:O=l)},null,512),[[v,s(O)]])])])])]),e("div",ft,[r(e("input",{name:"notes",placeholder:"Notes",class:"shadow-md border rounded-sm p-2 w-full","onUpdate:modelValue":t[12]||(t[12]=l=>n(R)?R.value=l:R=l)},null,512),[[v,s(R)]])]),e("div",gt,[e("div",bt,[e("div",ht,[e("input",{type:"file",onChange:t[13]||(t[13]=(...l)=>o.uploadedFile&&o.uploadedFile(...l)),accept:"image/*"},null,32)])]),e("div",_t,[e("div",xt,[s(ie)===""?(u(),d("img",{key:0,class:"lg:w-full h-56 object-contain",src:s(ue)},null,8,wt)):(u(),d("img",{key:1,class:"lg:w-full h-56 object-contain",src:s(H)},null,8,yt)),le(" "+b(s(H)),1)])])]),e("div",kt,[r(e("input",{id:"referencecode",name:"referencecode",class:"shadow-md p-2 rounded-sm w-full border",placeholder:"Reference Code","onUpdate:modelValue":t[14]||(t[14]=l=>n(h)?h.value=l:h=l),disabled:""},null,512),[[v,s(h)]])])]),e("div",St,[e("ul",Ct,[e("li",Ut,[t[33]||(t[33]=e("label",{class:"pr-2"}," Status",-1)),e("h1",Vt,[t[32]||(t[32]=le(" : ")),e("ul",Dt,[e("li",At,[r(e("input",{type:"checkbox",id:"checking",name:"checking",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[15]||(t[15]=l=>n(z)?z.value=l:z=l)},null,512),[[G,s(z)]]),t[28]||(t[28]=e("label",{class:""},"Checking",-1))]),e("li",Mt,[r(e("input",{type:"checkbox",id:"appointment_confirm",name:"appointment_confirm",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[16]||(t[16]=l=>n(P)?P.value=l:P=l)},null,512),[[G,s(P)]]),t[29]||(t[29]=e("label",{class:""},"Confirmed",-1))]),e("li",Tt,[r(e("input",{type:"checkbox",id:"payment",name:"payment",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[17]||(t[17]=l=>n(E)?E.value=l:E=l)},null,512),[[G,s(E)]]),t[30]||(t[30]=e("label",{class:""},"Payment",-1))]),e("li",Ot,[r(e("input",{type:"checkbox",id:"request_delivered",name:"request_delivered",value:"",class:"mt-0.5 mr-1 ml-2","onUpdate:modelValue":t[18]||(t[18]=l=>n(N)?N.value=l:N=l)},null,512),[[G,s(N)]]),t[31]||(t[31]=e("label",{class:""},"Delivered",-1))])])])])])]),s(p).length?(u(),d("div",Rt,[(u(!0),d(B,null,j(s(p),l=>(u(),d("p",{key:l},b(l),1))),128))])):se("",!0),t[34]||(t[34]=e("div",{class:"lg:w-full mx-auto justify-between flex"},[e("button",{class:"lasalle-green text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"}," Update ")],-1))])])])])],32)]),e("div",zt,[e("form",{onSubmit:te(he,["prevent"]),class:"lg:flex items-center"},[r(e("input",{id:"tracking_description",name:"tracking_description",class:"shadow-md p-2 rounded-sm border text-xs w-full",placeholder:"Remark Status","onUpdate:modelValue":t[19]||(t[19]=l=>n(k)?k.value=l:k=l)},null,512),[[v,s(k)]]),t[35]||(t[35]=e("button",{class:"lasalle-green text-xs hover:bg-green-700 text-white py-1.5 px-1.5 whitespace-nowrap rounded-lg uppercase ml-5 font-bold"}," Add Track Status ",-1)),s(p).length?(u(),d("div",Pt,[(u(!0),d(B,null,j(s(p),l=>(u(),d("p",{key:l},b(l),1))),128))])):se("",!0)],32)]),e("div",Et,[(u(!0),d(B,null,j(s(q).orderBy(s(oe),"date","time","asc"),(l,X)=>(u(),d("ol",{class:K(["relative border-l border-gray-200 dark:border-gray-700",l.referencecode===s(h)?"block":"hidden"]),key:X},[e("li",Nt,[t[36]||(t[36]=e("div",{class:"absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"},null,-1)),e("p",qt,b(l.date),1),e("p",Lt,b(l.time),1),e("p",Ft,b(l.description),1)])],2))),128))])])])]),t[37]||(t[37]=e("div",{class:"bg-green-900 p-3"},[e("h1",{class:"text-center text-white text-xs"},[e("span",{class:"font-bold"},"Copyright © 2023 "),e("span",null,"La Salle University - Ozamiz")])],-1))])}}};export{Qt as default};
