import{m as S,u as C,r as x,p as j,c as i,a as e,t as g,n as l,d as r,x as d,G as b,q as c,B as p,A as _,O as P,o as a}from"./3r6RbeVI.js";import"./5JjjnmY2.js";import{_ as R}from"./DlAUqK2U.js";const F={class:""},V={class:"lasalle-green shadow-lg lg:h-16"},N={class:"lg:w-11/12 mx-auto lg:px-4"},U={class:"lg:flex lg:justify-between"},E={class:"flex lg:pb-0 justify-between lg:px-0 px-2"},A={class:"text-gray-300 text-base py-5 block"},I={class:"w-full min-h-screen"},T={class:""},O={class:"lg:w-full lg:p-5 bg-gray-50"},D={class:"xl:w-8/12 lg:10/12 w-full lg:px-0 px-2 mx-auto h-full bg-white shadow-lg pt-1 lg:pb-10 pb-5"},B={class:"relative"},M={class:"flex"},L={class:"font-bold lg:text-base text-xs capitalize text-green-800"},$={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},q={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},G={class:"w-full lg:flex my-3"},H={class:"w-full lg:flex my-3"},J=["disabled"],K={class:"w-full lg:flex my-3"},Q=["disabled"],W={class:"w-full lg:flex my-3"},X=["disabled"],Y={class:"w-full lg:flex my-3"},Z=["disabled"],ee={class:"w-full lg:flex my-3"},se={key:0,class:"capitalize border border-green-800 my-10 px-3 py-1 text-sm bg-green-800 text-white rounded mx-auto block hover:font-bold",type:"submit"},te={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},le={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},ie={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},ae={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},oe={class:"flex"},ne={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},re={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},de={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},me={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},ce={class:"flex"},pe={key:0,class:"fa-solid fa-circle-check mr-1 text-green-800"},ue={key:1,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},xe={class:"flex"},fe={class:"flex h-fit"},ge={class:"w-5/12 ml-10 text-center pt-3"},be={class:"mx-auto"},_e={class:"w-fit my-5"},ye={key:0,class:"w-full shadow"},we=["src"],he={key:1,class:"w-full shadow"},ve=["src"],ke={key:0,class:"fa-solid fa-circle-check mr-1 text-green-800"},ze={key:1,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},Se={class:"flex"},Ce={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},je={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},Pe={key:0,class:"fa-solid fa-circle-minus mr-1 text-gray-500"},Re={key:1,class:"fa-solid fa-circle-check mr-1 text-green-800"},Fe={__name:"index",setup(Ve){const u=S(),m=C(),f=x(m.mainDevServer);j(()=>{m.user.isAuthenticated&&m.user.email!==null?u.push("/enrollment/portal"):u.push("/enrollment")});const y=x(null),t=x({enrollment_id:"EN"+Date.now(),student_id:"-",firstname:"-",middlename:"-",lastname:"-",suffixname:"-",contact_number:"-",contact_email:m.user.email,admission_status:!1,allow_enrollment:!1,is_form_submitted:!1,is_admission_confirmed:!1,admission_remarks:"-",advising_remarks:"-",payment_remarks:"-",is_assigning_subjects_or_course:!1,is_subjects_or_courses_successfully_assigned:!1,subject_load_and_assessment:!1,mode_of_payment:"-",proof_of_payment:"https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2",is_submit_receipt:!1,documents:"https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2",is_payment_confirm:!1,enrollment_is_validated:!1,date_of_enrollment:Date.now(),updated_by:m.user.email,last_updated_on:Date.now(),created_by_name:m.user.email,created_by_email:m.user.email});x("https://firebasestorage.googleapis.com/v0/b/public-images-cbecf.appspot.com/o/public%2F1684826293302?alt=media&token=6bd368c2-5a1b-4d13-9c83-eafccfee8fd2");const w=()=>{u.push("/enrollment"),m.removeToken()},h=()=>{isFormSubmitted.value=!0,v(),k()},v=async()=>{await $fetch(f.value+"/api/enrollment/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:t.value}).then(o=>{u.push("/enrollment/portal")})},k=async()=>{await $fetch(f.value+"/api/enrollment/submit-enrollment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:t.value}).then(o=>{})};async function z(){await $fetch(f.value+"/api/enrollment/"+y.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:t.value}).then(o=>{})}return(o,s)=>(a(),i("div",F,[e("div",V,[e("div",N,[e("div",U,[s[10]||(s[10]=e("a",{href:"/",class:"flex lg:border-0 border-b"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/lsu-w-h.png",class:"lg:w-48 h-10 my-3 lg:mx-0 mx-auto"})],-1)),e("div",E,[e("h1",A,g(l(m).user.email),1),e("p",{class:"text-white whitespace-nowrap py-5 font-bold text-base cursor-pointer hover:underline lg:pl-5",onClick:w}," Log Out ")])])])]),e("div",I,[e("div",T,[e("div",O,[e("div",D,[e("div",B,[s[23]||(s[23]=e("h1",{class:"font-bold mt-5 mb-5 text-center lg:text-3xl text-xl block px-3 whitespace-nowrap lasalle-green-text capitalize"}," online enrollment ",-1)),s[24]||(s[24]=e("p",null,"Continuing Student",-1)),e("div",null,[s[22]||(s[22]=e("h1",{class:"text-xl text-green-800 lg:ml-5"},[r(" Step 1. "),e("span",{class:"font-bold"},"Admission")],-1)),e("div",{class:d(["lg:w-11/12 mx-auto lg:px-5 px-2 border-l-4 my-2 shadow-sm py-4 text-xs",l(t).is_form_submitted?"border-green-800":""])},[e("div",M,[e("h2",L,[l(t).is_form_submitted?(a(),i("i",q)):(a(),i("i",$)),s[11]||(s[11]=r(" 1.1 Fill Out Admission Form "))]),s[12]||(s[12]=e("h1",{class:"ml-1 lg:mt-1 text-xs lowercase italic font-semibold"},[r(" ("),e("span",{class:"text-red-600 font-bold"},"*"),r(" - is required) ")],-1))]),e("form",{class:"lg:w-fit mx-auto",onSubmit:b(h,["prevent"])},[e("div",G,[s[13]||(s[13]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},"Enrollment ID",-1)),c(e("input",{id:"enrollmentId",name:"enrollmentId",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Enrollment Id","onUpdate:modelValue":s[0]||(s[0]=n=>l(t).enrollment_id=n),disabled:""},null,512),[[p,l(t).enrollment_id]])]),e("div",H,[s[15]||(s[15]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[r(" Student ID "),e("span",{class:"text-slate-400 text-xs mb-2 lg:hidden block"}," (For Continuing Student)")],-1)),e("div",null,[c(e("input",{id:"studentId",name:"studentId",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Student Id","onUpdate:modelValue":s[1]||(s[1]=n=>l(t).student_id=n),disabled:l(t).is_form_submitted},null,8,J),[[p,l(t).student_id]]),s[14]||(s[14]=e("span",{class:"text-slate-400 text-xs mt-2 ml-2 lg:block hidden"}," (For Continuing Student)",-1))])]),e("div",K,[s[16]||(s[16]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[r(" First Name"),e("span",{class:"text-red-500"},"*")],-1)),c(e("input",{"onUpdate:modelValue":s[2]||(s[2]=n=>l(t).firstname=n),name:"firstName",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"First Name",disabled:l(t).is_form_submitted},null,8,Q),[[p,l(t).firstname]])]),e("div",W,[s[17]||(s[17]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[r("Middle Name"),e("span",{class:"text-red-500"},"*")],-1)),c(e("input",{name:"middlename",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Middle Name","onUpdate:modelValue":s[3]||(s[3]=n=>l(t).firstname=n),disabled:l(t).is_form_submitted},null,8,X),[[p,l(t).firstname]])]),e("div",Y,[s[18]||(s[18]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},[r("Last Name"),e("span",{class:"text-red-500"},"*")],-1)),c(e("input",{name:"lastname",class:"capitalize rounded border py-0.5 px-2 lg:w-1/3 w-full",placeholder:"Last Name","onUpdate:modelValue":s[4]||(s[4]=n=>l(t).lastname=n),disabled:l(t).is_form_submitted},null,8,Z),[[p,l(t).lastname]])]),e("div",ee,[s[19]||(s[19]=e("label",{class:"text-gray-400 text-xs mt-2 whitespace-nowrap block lg:text-right mr-3 capitalize w-32"},"Contact Email",-1)),c(e("input",{name:"contactEmail",class:"lowercase rounded border py-0.5 px-2 border-slate-300 lg:w-7/12 w-full",disabled:"","onUpdate:modelValue":s[5]||(s[5]=n=>l(t).contact_number=n)},null,512),[[p,l(t).contact_number]])]),l(t).is_form_submitted?_("",!0):(a(),i("button",se," submit "))],32),e("h2",{class:d(["font-bold lg:text-base text-xs capitalize py-2",l(t).is_form_submitted?"text-green-800":"text-slate-400"])},[l(t).is_form_submitted?(a(),i("i",le)):(a(),i("i",te)),s[20]||(s[20]=r(" 1.2 Form Submitted "))],2),e("h2",{class:d(["font-bold lg:text-base text-xs capitalize py-2",l(t).is_form_submitted?"text-green-800":"text-slate-400"])},[l(t).is_admission_confirmed?(a(),i("i",ae)):(a(),i("i",ie)),s[21]||(s[21]=r(" 1.3 Admission Confirmed "))],2),e("div",oe,[e("h1",{class:d(["font-bold whitespace-nowrap lg:text-base text-xs capitalize py-1",l(t).is_admission_confirmed?"text-green-800":"text-slate-400"])}," Admission Remarks: ",2),c(e("input",{type:"text",class:"mt-0.5 ml-2 shadow border-0 rounded w-8/12 py-0",disabled:"","onUpdate:modelValue":s[6]||(s[6]=n=>o.admissionRemarks=n)},null,512),[[p,o.admissionRemarks]])])],2)])]),e("h1",{class:d(["text-xl lg:ml-5",l(t).is_admission_confirmed?"text-green-800":"text-slate-400"])},s[25]||(s[25]=[r(" Step 2. "),e("span",{class:"font-bold"},"Advising",-1)]),2),e("div",{class:d(["lg:w-11/12 mx-auto lg:px-5 px-2 border-l-4 my-2 shadow-sm py-4 text-xs",l(t).is_form_submitted?"border-green-800":""])},[e("h2",{class:d(["font-bold lg:text-base text-xs capitalize py-2",l(t).is_assigning_subjects_or_course?"text-green-800":"text-slate-400"])},[l(t).is_assigning_subjects_or_course?(a(),i("i",re)):(a(),i("i",ne)),s[26]||(s[26]=r(" 2.1 Assigning Subjects or Courses "))],2),e("h2",{class:d(["lg:text-base text-xs font-bold capitalize py-2",l(t).is_subjects_or_courses_successfully_assigned?"text-green-800":"text-slate-400"])},[l(t).is_subjects_or_courses_successfully_assigned?(a(),i("i",me)):(a(),i("i",de)),s[27]||(s[27]=r(" 2.2 Successfully Added Subjects or Courses "))],2),e("div",ce,[e("h1",{class:d(["whitespace-nowrap font-bold text-sm py-1",l(t).is_subjects_or_courses_successfully_assigned?"text-green-800":"text-slate-400"])}," Advising Remarks: ",2),c(e("input",{type:"text",class:"mt-0.5 ml-2 shadow border-0 rounded w-8/12 py-0",disabled:"","onUpdate:modelValue":s[7]||(s[7]=n=>l(t).advising_remarks=n)},null,512),[[p,l(t).advising_remarks]])])],2),e("h1",{class:d(["text-xl lg:ml-5",l(t).is_subjects_or_courses_successfully_assigned?"text-green-800":"text-slate-400"])},s[28]||(s[28]=[r(" Step 3. "),e("span",{class:"font-bold"},"Payment",-1)]),2),e("div",{class:d(["lg:w-11/12 mx-auto lg:px-5 px-2 border-l-4 my-2 shadow-sm py-4 text-xs",l(t).is_form_submitted?"border-green-800":""])},[e("h2",{class:d(["lg:text-base text-xs font-bold capitalize py-2",l(t).is_submit_receipt?"text-green-800":"text-slate-400"])},[l(t).is_payment_confirm?(a(),i("i",pe)):(a(),i("i",ue)),s[29]||(s[29]=r(" 3.1 Payment Receipt "))],2),l(t).is_subjects_or_courses_successfully_assigned?(a(),i("div",{key:0,class:d(["mt-3",l(t).is_payment_confirm?"hidden":""])},[e("div",xe,[e("div",fe,[e("form",{onSubmit:b(z,["prevent"])},[e("input",{class:"border",type:"file",onChange:s[8]||(s[8]=(...n)=>o.handleChangeReceipt&&o.handleChangeReceipt(...n)),accept:"image/*"},null,32),s[30]||(s[30]=e("button",null,"Submit Receipt",-1))],32)]),e("div",ge,[e("div",{class:"text-white bg-green-900 transition-all ease-in-out duration-200 h-5 flex items-center",style:P(`width:${o.progressPercentReceipt}%`)},[e("p",be,g(o.progressPercentReceipt)+" %",1)],4)])]),e("div",_e,[o.proofOfPayment===""?(a(),i("div",ye,[e("img",{class:"w-full h-56",src:o.bannerImagePreviewReceipt},null,8,we)])):(a(),i("div",he,[e("img",{class:"w-full h-56",src:o.proofOfPayment},null,8,ve)]))])],2)):_("",!0),e("h2",{class:d(["lg:text-base text-xs font-bold capitalize py-2",o.isPaymentConfirm?"text-green-800":"text-slate-400"])},[o.isPaymentConfirm?(a(),i("i",ke)):(a(),i("i",ze)),s[31]||(s[31]=r(" 3.2 Payment Confirmed "))],2),e("div",Se,[e("h1",{class:d(["whitespace-nowrap font-bold text-sm py-1",o.isPaymentConfirm?"text-green-800":"text-slate-400"])}," Payment Remarks: ",2),c(e("input",{type:"text",class:"mt-0.5 ml-2 shadow border-0 rounded w-8/12 py-0",disabled:"","onUpdate:modelValue":s[9]||(s[9]=n=>o.paymentRemarks=n)},null,512),[[p,o.paymentRemarks]])])],2),e("h1",{class:d(["text-xl lg:ml-5",o.isPaymentConfirm?"text-green-800":"text-slate-400"])},s[32]||(s[32]=[r(" Step 4. "),e("span",{class:"font-bold"},"Validation",-1)]),2),e("div",{class:d(["lg:w-11/12 mx-auto lg:px-5 px-2 border-l-4 my-2 shadow-sm py-4 text-xs",o.isFormSubmitted?"border-green-800":""])},[e("h2",{class:d(["lg:text-base text-xs font-bold capitalize py-2",l(t).enrollment_is_validated?"text-green-800":"text-slate-400"])},[l(t).enrollment_is_validated?(a(),i("i",je)):(a(),i("i",Ce)),s[33]||(s[33]=r(" 4.1 Enrollees online accounts "))],2),e("h2",{class:d(["lg:text-base text-xs font-bold capitalize py-2",l(t).enrollment_is_validated?"text-green-800":"text-slate-400"])},[l(t).enrollment_is_validated?(a(),i("i",Re)):(a(),i("i",Pe)),s[34]||(s[34]=r(" 4.2 Enrollment Complete "))],2)],2)])])])]),s[35]||(s[35]=e("div",{class:"bg-green-900 p-3"},[e("h1",{class:"text-center text-white text-xs"},[e("span",{class:"font-bold"},"Copyright © 2023 "),e("span",null,"La Salle University - Ozamiz")])],-1))]))}},Ae=R(Fe,[["__scopeId","data-v-79373d8d"]]);export{Ae as default};
