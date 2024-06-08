import{_ as F}from"./CHtoPok-.js";import{_ as U}from"./BfliI1SF.js";import{_ as O}from"./BH6wt2Dg.js";import{g as D,r as f,m as I,q as R,c as l,b as g,a as e,f as s,d as b,t,k as L,F as c,s as m,z as q,x as P,o,i as y,A as k,n as B,l as z}from"./x1u01mbb.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const W={class:""},$={class:""},H={class:"relative"},K=P('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Evaluation </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/evaluation" class="mr-1"> Evaluation </a></li></ul></div>',3),Y={key:0,class:"w-11/12 mx-auto"},G={class:"hidden"},J=e("br",null,null,-1),Q=e("br",null,null,-1),X=e("br",null,null,-1),Z=e("br",null,null,-1),j=e("br",null,null,-1),ee={class:"text-center lg:mt-10 mt-5"},te={class:"uppercase font-bold text-green-900 mb-3"},se={class:"text-center text-xs"},ne={class:"text-center text-xs mb-5"},le={class:"lg:text-left text-xs lg:w-full w-10/12 mx-auto"},oe={class:"lg:text-left text-xs lg:w-full w-10/12 mx-auto mb-3"},ae={class:"border mb-10"},ie={class:"w-full"},re={class:"font-bold text-white bg-green-900 py-1 px-2"},de={class:"w-full"},ue={class:"lg:flex gap-20 border-b-2 border-green-900 py-4"},ce={class:"lg:w-7/12 flex items-center font-bold text-sm px-3 lg:mb-0 mb-2"},me={class:"w-full flex items-center"},be={class:"block text-white py-1 px-2.5 mb-2 font-bold w-fit mx-auto rounded-full bg-green-900"},fe={class:"justify-center w-full mx-auto lg:text-sm text-[8px] leading-tight font-semibold text-green-900 flex lg:h-10 h-6"},xe={class:"shadow"},_e={class:"lg:w-7/12 flex items-center text-sm px-3 lg:border-none border-b-2 lg:pb-0 pb-3"},pe={class:"font-bold text-white bg-green-900 px-2 text-xs rounded-full py-1 mr-3 w-fit h-fit"},he={class:"lg:text-sm text-xs"},ge={class:"flex items-center w-full lg:pt-0 pt-2"},ye={class:"block lg:hidden text-xs text-green-900 font-bold"},Se={class:"block"},we=["onUpdate:modelValue","value"],ve={class:"border"},Ne={class:"w-full"},qe={class:"font-bold text-white bg-green-900 py-1 px-2"},ke={class:"w-full"},Ce={class:"lg:flex gap-20 border-b-2 border-green-900 py-4"},Ve={class:"lg:w-7/12 flex items-center font-bold text-sm px-3 lg:mb-0 mb-2"},Ae={class:"w-full flex items-center"},Me={class:"block text-white py-1 px-2.5 mb-2 font-bold w-fit mx-auto rounded-full bg-green-900"},Ee={class:"justify-center w-full mx-auto lg:text-sm text-[8px] leading-tight font-semibold text-green-900 flex lg:h-10 h-6"},Te={class:"shadow"},Fe={class:"lg:w-7/12 flex items-center text-sm px-3 lg:border-none border-b-2 lg:pb-0 pb-3"},Ue={class:"font-bold text-white bg-green-900 px-2 text-xs rounded-full py-1 mr-3 w-fit h-fit"},Oe={class:"lg:text-sm text-xs"},De={class:"flex items-center w-full lg:pt-0 pt-2"},Ie={class:"block lg:hidden text-xs text-green-900 font-bold"},Re={class:"block"},Le=["onUpdate:modelValue","value"],Pe={class:"shadow border my-10 py-5 lg:px-3 px-2"},Be={class:"lg:py-3"},ze={class:"text-green-900 lg:leading-normal leading-tight font-bold mb-2 block lg:w-8/12 lg:text-sm text-xs"},We=["onUpdate:modelValue"],$e=e("div",null,[e("button",{type:"submit",class:"bg-green-800 hover:bg-white font-bold uppercase border-4 border-green-800 rounded-lg mx-auto block mb-10 px-3 py-1 hover:text-green-800 text-white"}," Submit ")],-1),He={key:1},et={__name:"[id]",async setup(Ke){let x,S;const C=D(),w=f(C.mainDevServer),V=I(),a=([x,S]=R(()=>$fetch(w.value+"/api/admissions/"+V.params.id+"/").catch(_=>_.data)),x=await x,S(),x),v=f(!0),N=f(!1),r=f({header_title:["CLIENT FEEDBACK","Online Enrollment Procedures","We value your feedback!","Please help us understand how we can best serve you during the online enrollment.","Together, let us foster productive and respectful conversations."],heading:{question:"Check out the continuum below and assess your level of satisfaction during the online enrollment process in terms of:",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}]}});console.log(a);let d=f({tracking_id:a.tracking_id,firstname:a.student_personal_info.firstname,middlename:a.student_personal_info.middlename||"-",lastname:a.student_personal_info.lastname||"-",student_lsu_id_number:a.student_lsu_id_number,lsu_email_address:a.student_contact_info.contact.lsu_email_address,personal_email_address:a.student_contact_info.contact.personal_email_address,evaluation_form:{main_question:[{question_heading:"I - ENROLLMENT PROCEDURES",question_list:[{question:"Facilitation of assessment test, guiding you on what program to take, interview for shiftees, etc. at the Career & Counseling Center.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Submission of requirements, interview for data verification and facilitation of other matters (e.g. assessment test, promissory note application, career re-assessment interview for shiftees, etc.).",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Payment process at the Finance & Accounting Services Office",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Advising and approving of course load at your respective college.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Activation of online credentials and issuance of ID and COR.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"In general, how satisfied are you with the enrollment procedures?",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""}]},{question_heading:"II - ONLINE ENROLLMENT SYSTEM",question_list:[{question:"User friendliness of the system.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Organization of information on the screen.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Features of the system.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Reading characters on the screen and prompts for inputs are clear.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Use of terms throughout the system is consistent.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"System always informs about the progress of the task.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Client support availablity.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"In general, how satisfied are you with the online enrollment system?",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""}]}],sub_question:[{question:"What challenges have you faced while using the online enrollment system?",answer:""},{question:"What improvements or additional features would you like to see in the online enrollment system in the future?",answer:""}]}});const A=async()=>{await $fetch(w.value+"/api/admissions/submit-evaluation-form/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:d.value}).then(_=>{console.log(_),v.value=!1,N.value=!0}),console.log("evaluationData",d)};return(_,Ye)=>{const M=F,E=U,T=O;return o(),l("div",null,[g(M),e("div",W,[e("div",$,[e("div",H,[g(E),K])]),s(v)?(o(),l("div",Y,[e("div",G,[b(t(s(a).tracking_id)+" ",1),J,b(" "+t(s(a).student_personal_info.firstname)+" "+t(s(a).student_personal_info.middlename)+" "+t(s(a).student_personal_info.lastname)+" ",1),Q,b(" "+t(s(a).student_lsu_id_number)+" ",1),X,b(" "+t(s(a).student_contact_info.contact.lsu_email_address)+" ",1),Z,b(" "+t(s(a).student_contact_info.contact.personal_email_address)+" ",1),j,b(" "+t(s(a).evaluation.submitted),1)]),e("div",ee,[e("h1",te,t(s(r).header_title[0]),1),e("p",se,t(s(r).header_title[1]),1),e("p",ne,t(s(r).header_title[2]),1),e("p",le,t(s(r).header_title[3]),1),e("p",oe,t(s(r).header_title[4]),1)]),e("form",{onSubmit:L(A,["prevent"])},[e("div",null,[e("div",ae,[e("div",ie,[e("p",re,t(s(d).evaluation_form.main_question[0].question_heading),1)]),e("div",de,[e("div",ue,[e("p",ce,t(s(r).heading.question),1),e("ul",me,[(o(!0),l(c,null,m(s(r).heading.score,(n,i)=>(o(),l("li",{class:"justify-center text-center w-full text-sm lg:pt-0 pt-2 lg:px-3 px-1",key:i},[e("span",be,t(n.number),1),e("span",fe,t(n.text),1)]))),128))])]),e("div",xe,[e("ul",null,[(o(!0),l(c,null,m(s(d).evaluation_form.main_question[0].question_list,(n,i)=>(o(),l("li",{key:i,class:"lg:flex items-center gap-20 border-b py-3"},[e("p",_e,[e("span",pe,t(i+1),1),e("span",he,t(n.question),1)]),e("ul",ge,[(o(!0),l(c,null,m(n.score,(u,p)=>(o(),l("li",{key:p,class:"text-sm justify-center text-center w-full"},[e("span",ye,t(u.number),1),e("span",Se,[y(e("input",{type:"radio","onUpdate:modelValue":h=>n.answer=h,value:u.text},null,8,we),[[k,n.answer]])])]))),128))])]))),128))])])])]),e("div",ve,[e("div",Ne,[e("p",qe,t(s(d).evaluation_form.main_question[1].question_heading),1)]),e("div",ke,[e("div",Ce,[e("p",Ve,t(s(r).heading.question),1),e("ul",Ae,[(o(!0),l(c,null,m(s(r).heading.score,(n,i)=>(o(),l("li",{class:"justify-center text-center w-full text-sm lg:pt-0 pt-2 lg:px-3 px-1",key:i},[e("span",Me,t(n.number),1),e("span",Ee,t(n.text),1)]))),128))])]),e("div",Te,[e("ul",null,[(o(!0),l(c,null,m(s(d).evaluation_form.main_question[1].question_list,(n,i)=>(o(),l("li",{key:i,class:"lg:flex items-center gap-20 border-b py-3"},[e("p",Fe,[e("span",Ue,t(i+1),1),e("span",Oe,t(n.question),1)]),e("ul",De,[(o(!0),l(c,null,m(n.score,(u,p)=>(o(),l("li",{key:p,class:"text-sm justify-center text-center w-full"},[e("span",Ie,t(u.number),1),e("span",Re,[y(e("input",{type:"radio","onUpdate:modelValue":h=>n.answer=h,value:u.text},null,8,Le),[[k,n.answer]])])]))),128))])]))),128))])])])]),e("div",Pe,[e("ul",Be,[(o(!0),l(c,null,m(s(d).evaluation_form.sub_question,(n,i)=>(o(),l("li",{key:i,class:B(i===0?"lg:mb-7 mb-5":"")},[e("label",ze,t(n.question),1),y(e("textarea",{class:"py-1 w-full lg:h-auto h-40 px-2 border-b-2 border-t border-t-gray-100 border-x-0 border-green-700 shadow-lg rounded-sm text-xs",id:"answer",name:"answer",rows:"1","onUpdate:modelValue":u=>n.answer=u,placeholder:"answer here ..."},`\r
                  `,8,We),[[z,n.answer]])],2))),128))])])]),$e],32)])):q("",!0),s(N)?(o(),l("div",He," Please Check your email and check the tracking page ")):q("",!0)]),g(T)])}}};export{et as default};
