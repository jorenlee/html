import{_ as Ye}from"./BLSVmfmh.js";import{_ as Me}from"./DeouVnHy.js";import{m as Ie,u as je,p as _e,r as s,s as Be,q as Te,I as le,c as m,a as e,v as i,x as De,n as a,b as xe,y as n,z as Fe,t as S,A as Le,d as r,B as d,H as ge,C as K,F as se,D as ae,G as Xe,E as ce,J as v,X as qe,o as p}from"./mxn6a8Zp.js";import"./5JjjnmY2.js";import{c as Ge,a as Je,b as He}from"./CGM_rvn_.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const We={class:""},Ke={class:"flex"},Qe={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},Ze={class:"w-full min-h-screen"},$e={class:"bg-green-800"},et={class:"lg:flex mx-auto justify-between py-2 px-3.5"},tt={class:"lg:flex items-center text-white lg:gap-5"},lt={class:"flex -mt-1"},st={class:"text-sm"},at={class:""},ot={class:"lg:w-full p-5"},it={class:"h-full shadow-lg pb-10"},nt={class:"lg:w-11/12 mx-auto border-l-4 border-green-800 lg:px-5 px-2 my-2 shadow-sm py-4 text-xs"},rt={class:"flex"},dt={class:"font-bold lg:text-base text-xs capitalize text-green-800"},ut={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},mt={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},pt={class:"w-full lg:flex my-3"},xt={class:"w-full lg:flex my-3"},gt={class:"w-full lg:flex my-3"},ct={class:"w-full lg:flex my-3"},ft={class:"w-full lg:flex my-3"},vt={class:"w-full lg:flex my-3"},bt={class:"w-full lg:flex my-3"},wt={class:"w-full lg:flex my-3"},yt={class:"w-full lg:flex my-3"},ht={class:"w-full lg:flex my-3"},kt={class:"w-full"},St=["value"],Ct={class:"lg:flex"},zt=["value"],Vt={class:"w-full lg:flex my-3"},Ut=["value"],Et={class:"w-full lg:flex my-3"},Nt={class:"w-full"},Pt={class:"w-full lg:flex my-3"},Rt={class:"lg:flex mt-3"},Ot={key:0,class:"w-fit shadow"},At=["src"],Yt={class:"font-bold lg:text-base text-xs capitalize text-green-800 py-2"},Mt={class:"font-bold lg:text-base text-xs capitalize text-slate-400 py-2"},It={class:"flex"},jt={class:"lg:w-11/12 mx-auto border-l-4 lg:px-5 px-2 my-2 shadow-sm py-4"},_t={class:"flex"},Bt={class:"font-bold lg:text-base text-xs capitalize text-slate-400 py-2"},Tt={class:"flex"},Dt={class:"lg:text-base text-xs font-bold capitalize text-slate-400 py-2"},Ft={class:"flex"},Lt={class:"lg:w-11/12 mx-auto lg:px-5 px-2 my-2 shadow-sm py-4 border-l-4"},Xt={class:"mt-3"},qt={class:"flex"},Gt={class:"flex h-fit"},Jt={class:"w-5/12 ml-10 text-center pt-3"},Ht={class:"mx-auto"},Wt={class:"w-fit my-5"},Kt={key:0,class:"w-full shadow"},Qt=["src"],Zt={key:1,class:"w-full shadow"},$t=["src"],el={class:"flex"},tl={class:"lg:text-base text-xs font-bold capitalize text-slate-400 py-2"},ll={class:"flex"},sl={class:"lg:w-11/12 mx-auto border-l-4 shadow-sm lg:px-5 px-2 my-2 py-4"},al={class:"grid grid-cols-3"},ol={class:"block"},il={class:"flex"},nl={class:"flex mt-3 w-fit"},rl={class:""},dl={class:"block"},ul={class:"flex"},ml={class:"flex mt-3"},pl={class:"block"},xl={class:"flex"},gl={class:"flex mt-3"},cl={class:"lg:text-base text-xs font-bold capitalize text-slate-400 py-2"},fl={key:0,class:"bg-green-700 text-white py-2 px-5 my-2"},zl={__name:"[id]",async setup(vl){let C,oe;const z=Ie(),x=je(),ie=_e(),Q=s(x.mainDevServer),o=([C,oe]=Be(()=>$fetch(Q.value+"/api/enrollment/"+ie.params.id+"/").catch(u=>u.data)),C=await C,oe(),C),fe=s(x.user.registrarEmail),ve=s(x.user.developerEmail),be=s(x.user.testEmail);Te(()=>{x.user.isAuthenticated&&(x.user.email===fe.value||x.user.email===ve.value||x.user.email===be.value)?z.push("/_/panels/registrar/enrollment/edit/"+ie.params.id):z.push("/_/unauthorized")});let we=s(o.value.id),V=s(o.value.enrollmentId),U=s(o.value.studentId),E=s(o.value.firstName),N=s(o.value.middleName),P=s(o.value.lastName),R=s(o.value.suffixName),O=s(o.value.dateOfBirth),c=s(o.value.gender),A=s(o.value.contactNumber),b=s(o.value.college),w=s(o.value.courseProgram),Y=s(o.value.courseYear),M=s(o.value.courseMajor),I=s(o.value.contactEmail),j=s(o.value.lsuEmail),_=s(o.value.lsuEmailPassword),B=s(o.value.canvasEmail),T=s(o.value.canvasPassword),D=s(o.value.schoolAutomateUsername),F=s(o.value.schoolAutomatePassword);s(o.value.admissionStatus);let Z=s(o.value.proofOfPayment);s(o.value.allowEnrollment);let y=s(o.value.isFormSubmitted),L=s(o.value.isAdmissionConfirmed),X=s(o.value.admissionRemarks),q=s(o.value.advisingRemarks),G=s(o.value.paymentRemarks),J=s(o.value.isAssigningSubjectsOrCourse),H=s(o.value.isSubjectsOrCoursesSuccessfullyAssigned);s(o.value.subjectLoadAndAssessment),s(o.value.modeOfPayment);let ne=s(o.value.documents);s(o.value.isSubmitReceipt);let W=s(o.value.isPaymentConfirm),h=s(o.value.enrollmentIsValidated);s(o.value.dateOfEnrollment),s(o.value.updatedBy),s(o.value.lastUpdatedOn),s(x.user.email),s(x.user.email),s([]);let $=s(!1),f=s(!0);const ye=()=>{z.push("/_/panels/registrar/enrollment")},he=()=>{z.push("/_/reg-admin"),x.removeToken()},ke=s(Ge),Se=s(Je),Ce=s(He);let ze=ke._rawValue,Ve=Se._rawValue,Ue=Ce._rawValue,Ee=le(()=>Ve.filter(function(u){if(u.college_or_school_id===b.value)return u.name})),Ne=le(()=>Ue.filter(function(u){if(u.course_program_id===w.value)return u.name}));const ee=s(null),Pe=s(!0),re=s(0);let de=s(""),ue=s("https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2");const me=le(()=>Math.round(re.value));function Re(u){const t=getStorage();de.value=u.target.files[0].lastModified;const te=storageReference(t,"receipt/"+de.value);ee.value=uploadBytesResumable(te,u.target.files[0]),ee.value.on("state_changed",g=>{switch(re.value=g.bytesTransferred/g.totalBytes*100,g.state){}},g=>{},()=>{getDownloadURL(ee.value.snapshot.ref).then(g=>{Z.value=g,ue.value=g})}),Pe.value=!1}const Oe=()=>{Ae(),pe()},pe=async()=>{await $fetch(Q.value+"/api/enrollment/"+we.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"}}).then(u=>{})},Ae=async()=>{$.value=!0,setTimeout(()=>{$.value=!1},1e3),h.value=!0,await $fetch(Q.value+"/api/enrollment/submit-credentials-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"}}).then(u=>{})};return(u,t)=>{const te=Ye,g=Me;return p(),m("div",We,[e("div",Ke,[i(e("div",Qe,[xe(te)],512),[[De,a(f)]]),e("div",Ze,[e("div",$e,[e("div",et,[e("div",tt,[e("div",{onClick:t[0]||(t[0]=l=>n(f)?f.value=!a(f):f=!a(f)),class:"w-10 px-1.5"},[e("i",{class:Fe(["fa text-3xl text-white",a(f)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",lt,[t[31]||(t[31]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",st,S(a(x).user.email),1)])]),e("button",{onClick:he,class:"flex hover:font-boldn pt-1"},t[32]||(t[32]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",at,[e("div",ot,[e("div",it,[e("div",{class:"relative"},[e("div",{class:"shadow"},[e("button",{onClick:ye,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap mx-3"}," Enrollment List ")])]),t[83]||(t[83]=e("h1",{class:"font-bold lg:mb-5 text-center lg:text-3xl text-3xl block mt-10 px-3 capitalize whitespace-nowrap lasalle-green-text"}," online enrollment ",-1)),e("form",{onSubmit:Le(pe,["prevent"])},[e("div",null,[t[64]||(t[64]=e("h1",{class:"text-xl text-green-800 ml-5"},[r(" Step 1. "),e("span",{class:"font-bold"},"Admission")],-1)),e("div",nt,[e("div",rt,[e("h2",dt,[a(y)?(p(),m("i",mt)):(p(),m("i",ut)),t[33]||(t[33]=r(" 1.1 Fill Out Admission Form "))]),t[34]||(t[34]=e("h1",{class:"ml-1 lg:mt-1 text-xs lowercase italic font-semibold"},[r(" ("),e("span",{class:"text-red-600 font-bold"},"*"),r(" - is required) ")],-1))]),e("div",pt,[t[35]||(t[35]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},"Enrollment ID",-1)),i(e("input",{id:"enrollmentId",name:"enrollmentId",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Enrollment Id","onUpdate:modelValue":t[1]||(t[1]=l=>n(V)?V.value=l:V=l),disabled:""},null,512),[[d,a(V)]])]),e("div",xt,[t[36]||(t[36]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"}," Student ID ",-1)),i(e("input",{id:"studentId",name:"studentId",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Student Id","onUpdate:modelValue":t[2]||(t[2]=l=>n(U)?U.value=l:U=l)},null,512),[[d,a(U)]]),t[37]||(t[37]=e("span",{class:"text-slate-400 text-xs mt-2 ml-2"}," (For Continuing Student)",-1))]),e("div",gt,[t[38]||(t[38]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize lg:ml-16"},[r(" First Name"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{"onUpdate:modelValue":t[3]||(t[3]=l=>n(E)?E.value=l:E=l),name:"firstName",class:"capitalize rounded border py-0.5 px-2 w-full",placeholder:"First Name"},null,512),[[d,a(E)]])]),e("div",ct,[t[39]||(t[39]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize lg:ml-16"},[r("Middle Name"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{id:"middlename",name:"middlename",class:"capitalize rounded border py-0.5 px-2 w-full",placeholder:"Middle Name","onUpdate:modelValue":t[4]||(t[4]=l=>n(N)?N.value=l:N=l)},null,512),[[d,a(N)]])]),e("div",ft,[t[40]||(t[40]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize lg:ml-16"},[r("Last Name"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{id:"lastname",name:"lastname",class:"capitalize rounded border py-0.5 px-2 w-full",placeholder:"Last Name","onUpdate:modelValue":t[5]||(t[5]=l=>n(P)?P.value=l:P=l)},null,512),[[d,a(P)]])]),e("div",vt,[t[41]||(t[41]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},"Suffix",-1)),i(e("input",{id:"suffixName",name:"suffixName",class:"rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"e.g SR. JR. II","onUpdate:modelValue":t[6]||(t[6]=l=>n(R)?R.value=l:R=l)},null,512),[[d,a(R)]])]),e("div",bt,[t[42]||(t[42]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r(" Date of Birth"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{id:"dateOfBirth",name:"dateOfBirth",type:"date",class:"rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Date of Birth","onUpdate:modelValue":t[7]||(t[7]=l=>n(O)?O.value=l:O=l)},null,512),[[d,a(O)]])]),e("div",wt,[t[43]||(t[43]=e("label",{class:"text-gray-400 text-xs mt-1 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r("Gender"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{type:"radio",id:"male",name:"male",value:"male",class:"mr-1 my-1 block","onUpdate:modelValue":t[8]||(t[8]=l=>n(c)?c.value=l:c=l)},null,512),[[ge,a(c)]]),t[44]||(t[44]=e("label",{class:"mr-3 py-1"},"Male",-1)),i(e("input",{type:"radio",class:"mr-1 my-1 block",id:"female",name:"female",value:"female","onUpdate:modelValue":t[9]||(t[9]=l=>n(c)?c.value=l:c=l)},null,512),[[ge,a(c)]]),t[45]||(t[45]=e("label",{class:"mr-3 py-1"},"Female",-1))]),e("div",yt,[t[46]||(t[46]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r(" Contact Number"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{id:"contactNumber",name:"contactNumber",class:"rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"e.g 09XXXXXXXXX","onUpdate:modelValue":t[10]||(t[10]=l=>n(A)?A.value=l:A=l)},null,512),[[d,a(A)]])]),e("div",ht,[t[51]||(t[51]=e("label",{class:"text-gray-400 text-xs mt-1.5 lg:w-4/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r(" College/School"),e("span",{class:"text-red-500"},"*")],-1)),e("div",kt,[i(e("select",{id:"college","onUpdate:modelValue":t[11]||(t[11]=l=>n(b)?b.value=l:b=l),name:"college",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-8/12 w-full",required:""},[t[47]||(t[47]=e("option",{value:"",disabled:""},"Select College or School",-1)),t[48]||(t[48]=e("option",{value:"",disabled:""}," CON (College of Nursing) - Walk In Enrollment ",-1)),t[49]||(t[49]=e("option",{value:"",disabled:""}," CTHM (College of Tourism and Hospitality Management) - Walk In Enrollment ",-1)),t[50]||(t[50]=e("option",{value:"",disabled:""},"BEd (Basic Education)",-1)),(p(!0),m(se,null,ae(a(ze),(l,k)=>(p(),m("option",{value:l.name,key:k},S(l.name),9,St))),128))],512),[[K,a(b)]])])]),e("div",Ct,[t[53]||(t[53]=e("label",{class:"text-gray-400 text-xs mt-1.5 whitespace-nowrap block lg:text-right mr-3 capitalize lg:w-3/12"},[r("Course/Program"),e("span",{class:"text-red-500"},"*")],-1)),i(e("select",{id:"courseProgram","onUpdate:modelValue":t[12]||(t[12]=l=>n(w)?w.value=l:w=l),name:"courseProgram",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-6/12",required:""},[t[52]||(t[52]=e("option",{value:"",disabled:""},"Select Course Program",-1)),(p(!0),m(se,null,ae(a(Ee),(l,k)=>(p(),m("option",{value:l.name,key:k},S(l.name),9,zt))),128))],512),[[K,a(w)]])]),e("div",Vt,[t[56]||(t[56]=e("label",{class:"text-gray-400 text-xs mt-1.5 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r(" Course Major"),e("span",{class:"text-red-500"},"*")],-1)),i(e("select",{id:"courseMajor","onUpdate:modelValue":t[13]||(t[13]=l=>n(M)?M.value=l:M=l),name:"courseMajor",class:"capitalize rounded border py-0.5 border-slate-300 lg:w-6/12 w-full",required:""},[t[54]||(t[54]=e("option",{value:"",disabled:""},"Select Course Major",-1)),t[55]||(t[55]=e("option",{value:""},"N/A",-1)),(p(!0),m(se,null,ae(a(Ne),(l,k)=>(p(),m("option",{value:l.name,key:k},S(l.name),9,Ut))),128))],512),[[K,a(M)]])]),e("div",Et,[t[58]||(t[58]=e("label",{class:"text-gray-400 text-xs mt-1.5 lg:w-4/12 whitespace-nowrap block lg:text-right mr-3 capitalize"},[r(" Course Year/Grade"),e("span",{class:"text-red-500"},"*")],-1)),e("div",Nt,[i(e("select",{id:"courseYear","onUpdate:modelValue":t[14]||(t[14]=l=>n(Y)?Y.value=l:Y=l),name:"courseYear",class:"capitalize rounded border py-0.5 px-2 border-slate-300 lg:w-8/12 w-full",required:""},t[57]||(t[57]=[Xe('<option value="" disabled>Select Course Year</option><option value="1st Year">1st Year</option><option value="2nd Year">2nd Year</option><option value="3rd Year">3rd Year</option><option value="4th Year">4th Year</option><option value="5th Year">5th Year</option><option value="6th Year">6th Year</option><option value="7th Year">7th Year</option><option value="8th Year">8th Year</option><option value="9th Year">9th Year</option><option value="10th Year">10th Year</option>',11)]),512),[[K,a(Y)]])])]),e("div",Pt,[t[59]||(t[59]=e("label",{class:"text-gray-400 text-xs lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 capitalize mt-1.5 lg:ml-16"},[r("Contact Email"),e("span",{class:"text-red-500"},"*")],-1)),i(e("input",{id:"contactEmail",name:"contactEmail",class:"lowercase rounded border py-0.5 px-2 w-full text-sm",placeholder:"jorenluna@lsu.edu.ph","onUpdate:modelValue":t[15]||(t[15]=l=>n(I)?I.value=l:I=l)},null,512),[[d,a(I)]])]),e("div",Rt,[t[60]||(t[60]=e("label",{class:"text-gray-400 text-xs mt-2 lg:w-3/12 whitespace-nowrap block lg:text-right mr-3 mt-1 capitalize lg:ml-16"},[r("Valid Government ID / Student ID"),e("span",{class:"text-red-500"},"*")],-1)),a(ne)?(p(),m("div",Ot,[e("img",{class:"w-full h-56",src:a(ne)},null,8,At)])):ce("",!0)]),e("h2",Yt,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[16]||(t[16]=l=>n(y)?y.value=l:y=l),disabled:""},null,512),[[v,a(y)]]),t[61]||(t[61]=r(" 1.2 Form Submitted "))]),e("h2",Mt,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[17]||(t[17]=l=>n(L)?L.value=l:L=l)},null,512),[[v,a(L)]]),t[62]||(t[62]=r(" 1.3 Admission Confirmed "))]),e("div",It,[t[63]||(t[63]=e("h1",{class:"whitespace-nowrap text-green-800 font-bold text-sm py-1"}," Admission Remarks: ",-1)),i(e("input",{"onUpdate:modelValue":t[18]||(t[18]=l=>n(X)?X.value=l:X=l),class:"capitalize rounded border py-0.5 px-2 w-4/12 ml-3"},null,512),[[d,a(X)]])])])]),t[79]||(t[79]=e("h1",{class:"text-xl ml-5"},[r(" Step 2. "),e("span",{class:"font-bold"},"Advising")],-1)),e("div",jt,[e("div",_t,[e("h2",Bt,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[19]||(t[19]=l=>n(J)?J.value=l:J=l)},null,512),[[v,a(J)]]),t[65]||(t[65]=r(" 2.1 Assigning Subjects or Courses "))])]),e("div",Tt,[e("h2",Dt,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[20]||(t[20]=l=>n(H)?H.value=l:H=l)},null,512),[[v,a(H)]]),t[66]||(t[66]=r(" 2.2 Successfully Added Subjects or Courses "))])]),e("div",Ft,[t[67]||(t[67]=e("h1",{class:"whitespace-nowrap text-green-800 font-bold text-sm py-1"}," Advising Remarks: ",-1)),i(e("input",{"onUpdate:modelValue":t[21]||(t[21]=l=>n(q)?q.value=l:q=l),class:"capitalize rounded border py-0.5 px-2 w-4/12 ml-3"},null,512),[[d,a(q)]])])]),t[80]||(t[80]=e("h1",{class:"text-xl ml-5"},[r(" Step 3. "),e("span",{class:"font-bold"},"Payment")],-1)),e("div",Lt,[t[70]||(t[70]=e("h2",{class:"lg:text-base text-xs font-bold capitalize text-slate-400 py-2"}," 3. 1 Payment Receipt ",-1)),e("div",Xt,[e("div",qt,[e("div",Gt,[e("input",{class:"border",type:"file",onChange:Re,accept:"image/*"},null,32)]),e("div",Jt,[e("div",{class:"text-white bg-green-900 transition-all ease-in-out duration-200 h-5 flex items-center",style:qe(`width:${a(me)}%`)},[e("p",Ht,S(a(me))+" %",1)],4)])]),e("div",Wt,[a(Z)===""?(p(),m("div",Kt,[e("img",{class:"w-full h-56",src:a(ue)},null,8,Qt)])):(p(),m("div",Zt,[e("img",{class:"w-full h-56",src:a(Z)},null,8,$t)]))])]),e("div",el,[e("h2",tl,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[22]||(t[22]=l=>n(W)?W.value=l:W=l)},null,512),[[v,a(W)]]),t[68]||(t[68]=r(" 3.2 Payment Confirmed "))])]),e("div",ll,[t[69]||(t[69]=e("h1",{class:"whitespace-nowrap text-green-800 font-bold text-sm py-1"}," Payment Remarks: ",-1)),i(e("input",{"onUpdate:modelValue":t[23]||(t[23]=l=>n(G)?G.value=l:G=l),class:"capitalize rounded border py-0.5 px-2 w-4/12 ml-3"},null,512),[[d,a(G)]])])]),t[81]||(t[81]=e("h1",{class:"text-xl ml-5"},[r(" Step 4. "),e("span",{class:"font-bold"},"Validation")],-1)),e("div",sl,[t[78]||(t[78]=e("h2",{class:"lg:text-base text-xs font-bold capitalize text-slate-400 py-2"}," 4.1 Enrollees online accounts ",-1)),e("div",null,[e("div",al,[e("div",ol,[e("div",il,[t[71]||(t[71]=e("label",{class:"text-sm"},"LSU Email :",-1)),i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[24]||(t[24]=l=>n(j)?j.value=l:j=l)},null,512),[[d,a(j)]])]),e("div",nl,[t[72]||(t[72]=e("label",{class:"text-sm"},"LSU Email Password:",-1)),e("div",rl,[i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[25]||(t[25]=l=>n(_)?_.value=l:_=l)},null,512),[[d,a(_)]])])])]),e("div",dl,[e("div",ul,[t[73]||(t[73]=e("label",{class:"text-sm"},"Canvas Email:",-1)),i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[26]||(t[26]=l=>n(B)?B.value=l:B=l)},null,512),[[d,a(B)]])]),e("div",ml,[t[74]||(t[74]=e("label",{class:"text-sm"},"Canvas Password:",-1)),i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[27]||(t[27]=l=>n(T)?T.value=l:T=l)},null,512),[[d,a(T)]])])]),e("div",pl,[e("div",xl,[t[75]||(t[75]=e("label",{class:"text-sm"},"Automate Username:",-1)),i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[28]||(t[28]=l=>n(D)?D.value=l:D=l)},null,512),[[d,a(D)]])]),e("div",gl,[t[76]||(t[76]=e("label",{class:"text-sm"},"Automate Password:",-1)),i(e("input",{id:"email",name:"email",class:"capitalize rounded border px-2 w-fit ml-3","onUpdate:modelValue":t[29]||(t[29]=l=>n(F)?F.value=l:F=l)},null,512),[[d,a(F)]])])])]),e("div",{class:"border w-fit bg-green-900 py-1 px-3 text-white mt-3 mb-3",onClick:Oe}," Send Credentials ")]),e("h2",cl,[i(e("input",{id:"status",type:"checkbox",value:"true",name:"status",class:"","onUpdate:modelValue":t[30]||(t[30]=l=>n(h)?h.value=l:h=l)},null,512),[[v,a(h)]]),t[77]||(t[77]=r(" 4.2 Enrollment Complete "))])]),a($)?(p(),m("div",fl," Sent! ")):ce("",!0),t[82]||(t[82]=e("button",{class:"capitalize border border-green-800 lg:mt-10 mt-1 px-3 py-1 text-sm bg-green-800 text-white rounded mx-auto block",type:"submit"}," Update ",-1))],32)])])])])]),xe(g)])}}};export{zl as default};
