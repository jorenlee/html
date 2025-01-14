import{_ as I}from"./gumo_XmD.js";import{_ as L}from"./DqSBVv7g.js";import{_ as P}from"./D6NR1FdH.js";import{f as R,r as f,l as D,m as B,c as i,b as S,a as e,p as C,e as s,d as b,t,j as z,F as m,q as c,x as V,o as a,h as w,y as M,n as W,k as $}from"./Za2wGT4t.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const j={class:""},H={class:""},K={class:"relative"},Y={key:0,class:"w-11/12 mx-auto"},G={class:"hidden"},J={class:"text-center lg:mt-10 mt-5"},Q={class:"uppercase font-bold text-green-900 mb-3"},X={class:"text-center text-xs"},Z={class:"text-center text-xs mb-5"},ee={class:"lg:text-left text-xs lg:w-full w-10/12 mx-auto"},te={class:"lg:text-left text-xs lg:w-full w-10/12 mx-auto mb-3"},se={class:"border mb-10"},ne={class:"w-full"},le={class:"font-bold text-white bg-green-900 py-1 px-2"},ie={class:"w-full"},ae={class:"lg:flex gap-20 border-b-2 border-green-900 py-4"},oe={class:"lg:w-7/12 flex items-center font-bold text-sm px-3 lg:mb-0 mb-2"},re={class:"w-full flex items-center"},de={class:"block text-white py-1 px-2.5 mb-2 font-bold w-fit mx-auto rounded-full bg-green-900"},ue={class:"justify-center w-full mx-auto lg:text-sm text-[8px] leading-tight font-semibold text-green-900 flex lg:h-10 h-6"},me={class:"shadow"},ce={class:"lg:w-7/12 flex items-center text-sm px-3 lg:border-none border-b-2 lg:pb-0 pb-3"},xe={class:"font-bold text-white bg-green-900 px-2 text-xs rounded-full py-1 mr-3 w-fit h-fit"},be={class:"lg:text-sm text-xs"},fe={class:"flex items-center w-full lg:pt-0 pt-2"},pe={class:"block lg:hidden text-xs text-green-900 font-bold"},_e={class:"block"},he=["onUpdate:modelValue","value"],ge={class:"border"},ye={class:"w-full"},Se={class:"font-bold text-white bg-green-900 py-1 px-2"},we={class:"w-full"},ve={class:"lg:flex gap-20 border-b-2 border-green-900 py-4"},Ne={class:"lg:w-7/12 flex items-center font-bold text-sm px-3 lg:mb-0 mb-2"},ke={class:"w-full flex items-center"},qe={class:"block text-white py-1 px-2.5 mb-2 font-bold w-fit mx-auto rounded-full bg-green-900"},Ce={class:"justify-center w-full mx-auto lg:text-sm text-[8px] leading-tight font-semibold text-green-900 flex lg:h-10 h-6"},Ve={class:"shadow"},Me={class:"lg:w-7/12 flex items-center text-sm px-3 lg:border-none border-b-2 lg:pb-0 pb-3"},Ae={class:"font-bold text-white bg-green-900 px-2 text-xs rounded-full py-1 mr-3 w-fit h-fit"},Ee={class:"lg:text-sm text-xs"},Te={class:"flex items-center w-full lg:pt-0 pt-2"},Ue={class:"block lg:hidden text-xs text-green-900 font-bold"},Fe={class:"block"},Oe=["onUpdate:modelValue","value"],Ie={class:"shadow border my-10 py-5 lg:px-3 px-2"},Le={class:"lg:py-3"},Pe={class:"text-green-900 lg:leading-normal leading-tight font-bold mb-2 block lg:w-8/12 lg:text-sm text-xs"},Re=["onUpdate:modelValue"],De={key:1,class:"lg:my-10 my-5"},Ye={__name:"[id]",async setup(Be){let p,v;const A=R(),h=f(A.mainDevServer),N=D(),l=([p,v]=B(()=>$fetch(h.value+"/api/admissions/"+N.params.id+"/").catch(_=>_.data)),p=await p,v(),p),k=f(!0),q=f(!1),d=f({header_title:["CLIENT FEEDBACK","Online Enrollment Procedures","We value your feedback!","Please help us understand how we can best serve you during the online enrollment.","Together, let us foster productive and respectful conversations."],heading:{question:"Check out the continuum below and assess your level of satisfaction during the online enrollment process in terms of:",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}]}});let x=f({tracking_id:l.tracking_id,firstname:l.student_personal_info.firstname||"-",middlename:l.student_personal_info.middlename||"-",lastname:l.student_personal_info.lastname||"-",student_lsu_id_number:l.student_lsu_id_number,lsu_email_address:l.student_contact_info.contact.lsu_email_address,personal_email_address:l.student_contact_info.contact.personal_email_address,evaluation_form:{main_question:[{question_heading:"I - ENROLLMENT PROCEDURES",question_list:[{question:"Facilitation of assessment test, guiding you on what program to take, interview for shiftees, etc. at the Career & Counseling Center.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Submission of requirements, interview for data verification and facilitation of other matters (e.g. assessment test, promissory note application, career re-assessment interview for shiftees, etc.).",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Payment process at the Finance & Accounting Services Office",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Advising and approving of course load at your respective college.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Activation of online credentials and issuance of ID and COR.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"In general, how satisfied are you with the enrollment procedures?",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""}]},{question_heading:"II - ONLINE ENROLLMENT SYSTEM",question_list:[{question:"User friendliness of the system.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Organization of information on the screen.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Features of the system.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Reading characters on the screen and prompts for inputs are clear.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Use of terms throughout the system is consistent.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"System always informs about the progress of the task.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"Client support availablity.",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""},{question:"In general, how satisfied are you with the online enrollment system?",score:[{number:5,text:"Completely Satisfied"},{number:4,text:"Very Satisfied"},{number:3,text:"Moderately Satisfied"},{number:2,text:"Slightly Satisfied"},{number:1,text:"Not at all Satisfied"},{number:0,text:"Not Applicable"}],answer:""}]}],sub_question:[{question:"What challenges have you faced while using the online enrollment system?",answer:""},{question:"What improvements or additional features would you like to see in the online enrollment system in the future?",answer:""}]}});const E=async()=>{l.evaluation.submitted=!0,await $fetch(h.value+"/api/admissions/"+N.params.id+"/edit/",{method:"PUT",body:l}).then(_=>{})},T=async()=>{await $fetch(h.value+"/api/admissions/submit-evaluation-form/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:x.value}).then(_=>{k.value=!1,q.value=!0,E()})};return(_,o)=>{const U=I,F=L,O=P;return a(),i("div",null,[S(U),e("div",j,[e("div",H,[e("div",K,[S(F),o[0]||(o[0]=C('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Evaluation </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/evaluation" class="mr-1"> Evaluation </a></li></ul></div>',3))])]),s(k)?(a(),i("div",Y,[e("div",G,[b(t(s(l).tracking_id)+" ",1),o[1]||(o[1]=e("br",null,null,-1)),b(" "+t(s(l).student_personal_info.firstname)+" "+t(s(l).student_personal_info.middlename)+" "+t(s(l).student_personal_info.lastname)+" ",1),o[2]||(o[2]=e("br",null,null,-1)),b(" "+t(s(l).student_lsu_id_number)+" ",1),o[3]||(o[3]=e("br",null,null,-1)),b(" "+t(s(l).student_contact_info.contact.lsu_email_address)+" ",1),o[4]||(o[4]=e("br",null,null,-1)),b(" "+t(s(l).student_contact_info.contact.personal_email_address)+" ",1),o[5]||(o[5]=e("br",null,null,-1)),b(" "+t(s(l).evaluation.submitted),1)]),e("div",J,[e("h1",Q,t(s(d).header_title[0]),1),e("p",X,t(s(d).header_title[1]),1),e("p",Z,t(s(d).header_title[2]),1),e("p",ee,t(s(d).header_title[3]),1),e("p",te,t(s(d).header_title[4]),1)]),e("form",{onSubmit:z(T,["prevent"])},[e("div",null,[e("div",se,[e("div",ne,[e("p",le,t(s(x).evaluation_form.main_question[0].question_heading),1)]),e("div",ie,[e("div",ae,[e("p",oe,t(s(d).heading.question),1),e("ul",re,[(a(!0),i(m,null,c(s(d).heading.score,(n,r)=>(a(),i("li",{class:"justify-center text-center w-full text-sm lg:pt-0 pt-2 lg:px-3 px-1",key:r},[e("span",de,t(n.number),1),e("span",ue,t(n.text),1)]))),128))])]),e("div",me,[e("ul",null,[(a(!0),i(m,null,c(s(x).evaluation_form.main_question[0].question_list,(n,r)=>(a(),i("li",{key:r,class:"lg:flex items-center gap-20 border-b py-3"},[e("p",ce,[e("span",xe,t(r+1),1),e("span",be,t(n.question),1)]),e("ul",fe,[(a(!0),i(m,null,c(n.score,(u,g)=>(a(),i("li",{key:g,class:"text-sm justify-center text-center w-full"},[e("span",pe,t(u.number),1),e("span",_e,[w(e("input",{type:"radio","onUpdate:modelValue":y=>n.answer=y,value:u.text},null,8,he),[[M,n.answer]])])]))),128))])]))),128))])])])]),e("div",ge,[e("div",ye,[e("p",Se,t(s(x).evaluation_form.main_question[1].question_heading),1)]),e("div",we,[e("div",ve,[e("p",Ne,t(s(d).heading.question),1),e("ul",ke,[(a(!0),i(m,null,c(s(d).heading.score,(n,r)=>(a(),i("li",{class:"justify-center text-center w-full text-sm lg:pt-0 pt-2 lg:px-3 px-1",key:r},[e("span",qe,t(n.number),1),e("span",Ce,t(n.text),1)]))),128))])]),e("div",Ve,[e("ul",null,[(a(!0),i(m,null,c(s(x).evaluation_form.main_question[1].question_list,(n,r)=>(a(),i("li",{key:r,class:"lg:flex items-center gap-20 border-b py-3"},[e("p",Me,[e("span",Ae,t(r+1),1),e("span",Ee,t(n.question),1)]),e("ul",Te,[(a(!0),i(m,null,c(n.score,(u,g)=>(a(),i("li",{key:g,class:"text-sm justify-center text-center w-full"},[e("span",Ue,t(u.number),1),e("span",Fe,[w(e("input",{type:"radio","onUpdate:modelValue":y=>n.answer=y,value:u.text},null,8,Oe),[[M,n.answer]])])]))),128))])]))),128))])])])]),e("div",Ie,[e("ul",Le,[(a(!0),i(m,null,c(s(x).evaluation_form.sub_question,(n,r)=>(a(),i("li",{key:r,class:W(r===0?"lg:mb-7 mb-5":"")},[e("label",Pe,t(n.question),1),w(e("textarea",{class:"py-1 w-full lg:h-auto h-40 px-2 border-b-2 border-t border-t-gray-100 border-x-0 border-green-700 shadow-lg rounded-sm text-xs",id:"answer",name:"answer",rows:"1","onUpdate:modelValue":u=>n.answer=u,placeholder:"answer here ..."},"                  ",8,Re),[[$,n.answer]])],2))),128))])])]),o[6]||(o[6]=e("div",null,[e("button",{type:"submit",class:"bg-green-800 hover:bg-white font-bold uppercase border-4 border-green-800 rounded-lg mx-auto block mb-10 px-3 py-1 hover:text-green-800 text-white"}," Submit ")],-1))],32)])):V("",!0),s(q)?(a(),i("div",De,o[7]||(o[7]=[C('<div class="lg:px-10 px-4"><div class="lg:flex gap-10 rounded-4xl bg-white lg:px-14 px-3 py-1 lg:w-6/12 mx-auto lg:my-5 shadow-sm rounded-xl"><div class="flex items-center"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14"></div><div class="text-xl text-green-900 text-center lg:py-20 py-5 lg:w-8/12 mx-auto"><h1 class="font-bold text-3xl mb-10">Congratulations! </h1><p class="font-light text-xs mb-10">Please Check your email and check the tracking page. Thank you and Welcome back to LSU!</p><a href="https://lsu.edu.ph/enrollment" class="bg-green-800 text-white rounded-3xl py-1.5 px-5 lg:mb-0 mb-5 mx-auto block w-fit capitalize text-xs"> Back to Main Page</a></div></div></div>',1)]))):V("",!0)]),S(O)])}}};export{Ye as default};