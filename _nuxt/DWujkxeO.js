import{_ as de}from"./B0nNc3Oi.js";import{_ as ue}from"./CchEo5-U.js";import{m as me,u as pe,r as l,q as ce,I as A,c as i,a as e,v as s,x as xe,n as m,b as L,y as ge,z as ve,t as w,d as o,A as fe,B as u,H as R,C as b,F as N,D as C,G as we,E as y,o as n}from"./VQorOMFX.js";import{a as be}from"./upsvKRUO.js";import"./5JjjnmY2.js";import{c as ye,a as he,b as ke}from"./CGM_rvn_.js";import{_ as Se}from"./DlAUqK2U.js";import"./C5S46NFB.js";const _e={class:""},ze={class:"flex"},Ne={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Ce={class:"w-full min-h-screen"},Ye={class:"bg-green-800"},De={class:"lg:flex mx-auto justify-between py-2 px-3.5"},Ve={class:"lg:flex items-center text-white lg:gap-5"},Ee={class:"flex -mt-1"},Oe={class:"text-sm"},Me={class:""},Ie={class:"lg:w-full p-5"},Ue={class:"h-full shadow-lg pb-10"},Fe={class:"relative"},je={class:"lg:w-fit mx-auto"},Be={class:"lg:w-11/12 mx-auto lg:px-5 px-2 my-2 shadow-sm py-4 text-xs"},Pe={class:"w-full lg:flex my-3"},Te={class:"w-full lg:flex my-3"},Ae={class:"flex"},Le={class:"w-full lg:flex my-3"},Re={class:"w-full lg:flex my-3"},Xe={class:"w-full lg:flex my-3"},Ge={class:"w-full lg:flex my-3"},qe={class:"w-full lg:flex my-3"},He={class:"w-full flex my-3 md:justify-normal justify-between"},Je={class:"w-full lg:flex my-3"},$e={class:"w-full lg:flex my-3"},We={class:""},Ke=["value"],Qe={class:"w-full lg:flex my-3"},Ze=["value"],et={class:"w-full lg:flex my-3"},tt=["value"],lt={key:0},at={class:"w-full lg:flex my-3"},st={class:""},ot={class:"w-full lg:flex my-3"},rt={class:"w-full lg:flex mt-3"},it={class:"lg:mt-3"},nt={key:0,class:"flex lg:mb-5 mb-2"},dt={class:"flex h-fit"},ut={class:"w-fit lg:mx-0 mx-auto"},mt={class:"w-56 shadow"},pt=["src"],ct=["src"],xt={key:0,class:"mt-5"},gt={key:1,class:"capitalize border border-green-800 my-10 px-3 py-1 text-sm bg-green-800 hover:font-bold text-white rounded mx-auto block",type:"submit"},vt={__name:"index",setup(ft){const c=me(),d=pe(),h=l(d.mainDevServer),X=l(d.user.registrarEmail),G=l(d.user.developerEmail),q=l(d.user.testEmail);l();const Y=l("EN"+Date.now()),D=l("-"),V=l("-"),E=l("-"),O=l("-"),M=l("N/A"),I=l(""),v=l(""),U=l("-"),k=l("-"),S=l("-"),F=l("-"),j=l("-"),x=l("-");l("-"),l("-"),l("-"),l("-"),l("-"),l("-"),l(!1);const B=l(""),_=l(""),z=l(""),P=l("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png");l(!1);const f=l(!1);l(!1),l("-"),l("-"),l("-"),l(!1),l(!1),l(!1),l("-"),l("https://upload.wikimedia.org/wikipedia/en/b/b0/LSU-Ozamiz_Seal.png"),l(!1),l(!1),l(!1),l(Date.now()),l(x.value),l(Date.now()),l(x.value),l(x.value),l([]);let p=l(!0);ce(()=>{setTimeout(()=>{d.user.isAuthenticated&&(d.user.email===X.value||d.user.email===G.value||d.user.email===q.value)?c.push("/_/panels/registrar/enrollment/create"):c.push("/_/unauthorized")},5e3)});const H=l(ye),J=l(he),$=l(ke);let W=H._rawValue,K=J._rawValue,Q=$._rawValue,Z=A(()=>K.filter(function(r){if(r.college_or_school_id===k.value)return r.name})),ee=A(()=>Q.filter(function(r){if(r.course_program_id===S.value)return r.name}));const te=()=>{c.push("/_/panels/registrar/enrollment")},le=()=>{c.push("/_/reg-admin"),d.removeToken()},ae=r=>{z.value=r.target.files[0],_.value=URL.createObjectURL(z.value),P.value="http://127.0.0.1:8000/media/files/images/"+r.target.files[0].name},se=async()=>{let r=new FormData;r.append("image",z.value);let t={headers:{Authorization:d.user.token,"Content-Type":"multipart/form-data"}};be.post(h.value+"/api/enrollment/image/list/images/",r,t).then(T=>{B.value="success"}).catch(()=>{B.value="error"})},oe=()=>{f.value=!0,ie(),re(),se()},re=async()=>{await $fetch(h.value+"/api/enrollment/submit-enrollment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"}}).then(r=>{}).catch(r=>{})},ie=async()=>{await $fetch(h.value+"/api/enrollment/create/",{method:"POST",headers:{"Content-Type":"application/json"}}).then(r=>{c.push({path:"/_/panels/registrar/enrollment"})})};return(r,t)=>{const T=de,ne=ue;return n(),i("div",_e,[e("div",ze,[s(e("div",Ne,[L(T)],512),[[xe,m(p)]]),e("div",Ce,[e("div",Ye,[e("div",De,[e("div",Ve,[e("div",{onClick:t[0]||(t[0]=a=>ge(p)?p.value=!m(p):p=!m(p)),class:"w-10 px-1.5"},[e("i",{class:ve(["fa text-3xl text-white",m(p)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Ee,[t[16]||(t[16]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Oe,w(m(d).user.email),1)])]),e("button",{onClick:le,class:"flex hover:font-boldn pt-1"},t[17]||(t[17]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Me,[e("div",Ie,[e("div",Ue,[e("div",Fe,[e("div",{class:"shadow w-full mb-10"},[e("button",{onClick:te,class:"shadow text-center uppercase m-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Enrollment List ")]),t[46]||(t[46]=e("h1",{class:"font-bold mt-5 mb-5 text-center lg:text-3xl text-xl block px-3 whitespace-nowrap lasalle-green-text capitalize"}," online enrollment ",-1)),e("div",je,[t[45]||(t[45]=e("h1",{class:"text-xl text-green-800 lg:ml-5 ml-2"},[o(" Step 1. "),e("span",{class:"font-bold"},"Admission")],-1)),e("div",Be,[t[44]||(t[44]=e("div",{class:"flex"},[e("h2",{class:"font-bold lg:text-base text-xs capitalize text-green-800"}," 1.1 Fill Out Admission Form "),e("h1",{class:"ml-1 lg:mt-1 text-xs lowercase italic font-semibold"},[o(" ("),e("span",{class:"text-red-600 font-bold"},"*"),o(" - is required) ")])],-1)),e("form",{class:"lg:w-fit mx-auto",onSubmit:fe(oe,["prevent"])},[e("div",Pe,[t[18]||(t[18]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},"Enrollment ID",-1)),s(e("input",{id:"enrollmentId",name:"enrollmentId",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Enrollment Id","onUpdate:modelValue":t[1]||(t[1]=a=>Y.value=a),disabled:""},null,512),[[u,Y.value]])]),e("div",Te,[t[20]||(t[20]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o(" Student ID "),e("span",{class:"text-slate-400 text-xs mb-2 lg:hidden block"}," (For Continuing Student)")],-1)),e("div",Ae,[s(e("input",{id:"studentId",name:"studentId",class:"capitalize rounded border py-0.5 px-2 w-full",placeholder:"Student Id","onUpdate:modelValue":t[2]||(t[2]=a=>D.value=a)},null,512),[[u,D.value]]),t[19]||(t[19]=e("span",{class:"text-slate-400 whitespace-nowrap text-xs mt-1 ml-2 lg:block hidden"}," (For Continuing Student)",-1))])]),e("div",Le,[t[21]||(t[21]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o(" First Name"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>V.value=a),name:"firstName",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"First Name"},null,512),[[u,V.value]])]),e("div",Re,[t[22]||(t[22]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o("Middle Name"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{id:"middlename",name:"middlename",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Middle Name","onUpdate:modelValue":t[4]||(t[4]=a=>E.value=a)},null,512),[[u,E.value]])]),e("div",Xe,[t[23]||(t[23]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o("Last Name"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{id:"lastname",name:"lastname",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Last Name","onUpdate:modelValue":t[5]||(t[5]=a=>O.value=a)},null,512),[[u,O.value]])]),e("div",Ge,[t[24]||(t[24]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},"Suffix",-1)),s(e("input",{id:"suffixName",name:"suffixName",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"e.g SR. JR. II","onUpdate:modelValue":t[6]||(t[6]=a=>M.value=a)},null,512),[[u,M.value]])]),e("div",qe,[t[25]||(t[25]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o(" Date of Birth"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{id:"dateOfBirth",name:"dateOfBirth",type:"date",class:"lowercase rounded py-0 px-2 lg:w-fit w-full border border-gray-200",placeholder:"Date of Birth","onUpdate:modelValue":t[7]||(t[7]=a=>I.value=a)},null,512),[[u,I.value]])]),e("div",He,[t[26]||(t[26]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o("Gender"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{type:"radio",id:"male",name:"male",value:"male",class:"mr-1 my-1 block","onUpdate:modelValue":t[8]||(t[8]=a=>v.value=a)},null,512),[[R,v.value]]),t[27]||(t[27]=e("label",{class:"mr-3 py-1"},"Male",-1)),s(e("input",{type:"radio",class:"mr-1 my-1 block",id:"female",name:"female",value:"female","onUpdate:modelValue":t[9]||(t[9]=a=>v.value=a)},null,512),[[R,v.value]]),t[28]||(t[28]=e("label",{class:"lg:mr-3 py-1"},"Female",-1))]),e("div",Je,[t[29]||(t[29]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o(" Contact Number"),e("span",{class:"text-red-500"},"*")],-1)),s(e("input",{id:"contactNumber",name:"contactNumber",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"e.g 09XXXXXXXXX","onUpdate:modelValue":t[10]||(t[10]=a=>U.value=a)},null,512),[[u,U.value]])]),e("div",$e,[t[34]||(t[34]=e("label",{class:"text-gray-400 text-xs mt-1.5 whitespace-nowrap block lg:text-right mx-3 capitalize w-32"},[o(" College/School"),e("span",{class:"text-red-500"},"*")],-1)),e("div",We,[s(e("select",{id:"college","onUpdate:modelValue":t[11]||(t[11]=a=>k.value=a),name:"college",class:"capitalize rounded border py-0.5 px-2 border-slate-300 w-full",required:""},[t[30]||(t[30]=e("option",{value:"N/A",disabled:"",selected:""}," Select College or School ",-1)),t[31]||(t[31]=e("option",{value:"",disabled:""}," CON (College of Nursing) - Walk In Enrollment ",-1)),t[32]||(t[32]=e("option",{value:"",disabled:""}," CTHM (College of Tourism and Hospitality Management) - Walk In Enrollment ",-1)),t[33]||(t[33]=e("option",{value:"",disabled:""},"BEd (Basic Education)",-1)),(n(!0),i(N,null,C(m(W),(a,g)=>(n(),i("option",{value:a.name,key:g},w(a.name),9,Ke))),128))],512),[[b,k.value]])])]),e("div",Qe,[t[36]||(t[36]=e("label",{class:"text-gray-400 text-xs mt-1.5 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o("Course/Program"),e("span",{class:"text-red-500"},"*")],-1)),s(e("select",{id:"courseProgram","onUpdate:modelValue":t[12]||(t[12]=a=>S.value=a),name:"courseProgram",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-9/12 w-full",required:""},[t[35]||(t[35]=e("option",{value:"N/A",disabled:"",selected:""}," Select Course Program ",-1)),(n(!0),i(N,null,C(m(Z),(a,g)=>(n(),i("option",{value:a.name,key:g},w(a.name),9,Ze))),128))],512),[[b,S.value]])]),e("div",et,[t[38]||(t[38]=e("label",{class:"text-gray-400 text-xs mt-1.5 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"}," Course Major",-1)),s(e("select",{id:"courseMajor","onUpdate:modelValue":t[13]||(t[13]=a=>j.value=a),name:"courseMajor",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-9/12 w-full"},[t[37]||(t[37]=e("option",{value:"N/A",disabled:"",selected:""}," Select Course Major ",-1)),(n(!0),i(N,null,C(m(ee),(a,g)=>(n(),i("option",{value:a.name,key:g},[a?(n(),i("span",lt,w(a.name),1)):y("",!0)],8,tt))),128))],512),[[b,j.value]])]),e("div",at,[t[40]||(t[40]=e("label",{class:"text-gray-400 text-xs mt-1.5 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[o(" Course Year/Grade"),e("span",{class:"text-red-500"},"*")],-1)),e("div",st,[s(e("select",{id:"courseYear","onUpdate:modelValue":t[14]||(t[14]=a=>F.value=a),name:"courseYear",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-auto w-full",required:""},t[39]||(t[39]=[we('<option value="N/A" disabled data-v-2dd400a4>Select Course Year</option><option value="1st Year" data-v-2dd400a4>1st Year</option><option value="2nd Year" data-v-2dd400a4>2nd Year</option><option value="3rd Year" data-v-2dd400a4>3rd Year</option><option value="4th Year" data-v-2dd400a4>4th Year</option><option value="5th Year" data-v-2dd400a4>5th Year</option><option value="6th Year" data-v-2dd400a4>6th Year</option><option value="7th Year" data-v-2dd400a4>7th Year</option><option value="8th Year" data-v-2dd400a4>8th Year</option><option value="9th Year" data-v-2dd400a4>9th Year</option><option value="10th Year" data-v-2dd400a4>10th Year</option>',11)]),512),[[b,F.value]])])]),e("div",ot,[t[41]||(t[41]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},"Contact Email",-1)),s(e("input",{id:"contactEmail",name:"contactEmail",class:"lowercase rounded border py-0.5 px-2 border-slate-300 lg:w-7/12 w-full","onUpdate:modelValue":t[15]||(t[15]=a=>x.value=a),type:"email"},null,512),[[u,x.value]])]),e("div",rt,[t[42]||(t[42]=e("label",{class:"text-gray-400 lg:pt-3 text-xs lg:mt-2 whitespace-nowrap lg:block lg:text-right mr-3 capitalize w-32 flex"},[e("span",{class:"block pr-1"},"Valid Government ID or"),e("span",{class:"lg:block flex"},[o("School ID "),e("span",{class:"text-red-500"},"*")])],-1)),e("div",it,[f.value?y("",!0):(n(),i("div",nt,[e("div",dt,[e("input",{type:"file",onChange:ae,accept:"image/*"},null,32)])])),e("div",ut,[e("div",mt,[_.value===""?(n(),i("img",{key:0,class:"lg:w-full h-56 object-contain",src:P.value},null,8,pt)):(n(),i("img",{key:1,class:"lg:w-full h-56 object-contain",src:_.value},null,8,ct))])])])]),f.value?y("",!0):(n(),i("div",xt,t[43]||(t[43]=[e("sup",{class:"w-full lg:mx-auto block text-xs text-gray-500 pt-2"},[o(" *For Continuing Students: Upload softcopy of Student ID/Any valid ID (IMAGE/PNG/PDF)."),e("br"),o(" *For New Students: Submit Required Documents (Orginal Hard Copies) at registrar's office. ")],-1)]))),f.value?y("",!0):(n(),i("button",gt," submit "))],32)])])])])])])])]),L(ne)])}}},Nt=Se(vt,[["__scopeId","data-v-2dd400a4"]]);export{Nt as default};
