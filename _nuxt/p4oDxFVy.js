import{_ as mt}from"./Cj4f94yn.js";import{_ as ut}from"./DTqEFzdT.js";import{_ as pt}from"./DQzG3zhd.js";import{u as xt,r as n,m as bt,c as _,b as A,a as e,G as F,n as t,d as u,v as h,B as k,y,E as m,z as r,o as c}from"./CRLB1uP6.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const ft={class:"relative"},wt={class:""},vt={class:"relative"},ht={class:"lg:flex"},kt={class:"tracking-side lg:order-2 order-1 lg:w-9/12"},yt={class:"grid xl:grid-cols-4 grid-cols-2 w-full bg-green-900 text-white xl:px-4 lg:py-5 py-4 lg:justify-between lg:order-1 order-2 lg:gap-4 gap-3 px-2"},Tt={class:"lg:order-2 order-1"},St={key:0,class:"overflow-hidden"},Dt={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5"},Ct={class:"lg:flex"},Nt={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},zt={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},At={key:1,class:"mx-auto w-fit my-20"},Ft={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},It={key:0,class:"lg:flex items-center h-fit lg:w-full w-fit mx-auto"},Bt={key:1,class:"overflow-hidden"},Vt={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},Pt={class:"lg:flex"},Et={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},$t={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},jt={key:1,class:"mx-auto w-fit my-20"},Ht={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},Yt={key:0,class:"lg:flex items-center h-fit lg:w-full w-fit mx-auto"},Ot={key:2,class:"overflow-hidden"},qt={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},Lt={class:"lg:flex"},Ut={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},Rt={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},Gt={key:1,class:"mx-auto w-fit my-20"},Mt={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},Jt={key:0,class:"lg:flex items-center h-fit lg:w-full w-fit mx-auto"},Kt={key:3,class:"overflow-hidden"},Qt={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},Wt={class:"lg:flex"},Xt={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},Zt={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},te={key:1,class:"mx-auto w-fit my-20"},ee={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},le={key:0,class:"lg:flex items-center h-fit lg:w-full w-fit mx-auto"},ne={class:"lg:w-3/12 shadow-lg lg:order-1 order-2 pb-5 lg:border-t-0 border-t-2"},se={class:"w-11/12 mx-auto text-center my-5"},ie={class:"w-full justify-between"},oe={class:"w-full mb-5 border text-white"},ue={__name:"index",setup(ae){const L=xt(),w=n(L.mainDevServer);bt();const I=n(!1),B=n(!0),p=n(""),U=n();n(null);const V=n(!1),R=n(!1),P=n(!1),G=n(!1);let M=n(),s=n();n(!1);const E=n(!1),x=n(""),J=n();n(null);const T=n(!1),K=n(!1),$=n(!1),S=n(!1);let Q=n(),i=n();n(!1);const j=n(!1),b=n(""),W=n();n(null);const D=n(!1),X=n(!1),H=n(!1),C=n(!1);let Z=n(),o=n();n(!1);const Y=n(!1),f=n(""),tt=n();n(null);const O=n(!1),et=n(!1),q=n(!1),lt=n(!1);let nt=n(),a=n();n(!1);const v=(g,l,N,z)=>{B.value=g,E.value=l,j.value=N,Y.value=z},st=async()=>{P.value=!1,G.value=!1,p.value.length>0&&(M.value=await $fetch(w.value+"/api/admissions-second-sem-dev/list/",{method:"GET"}).then(g=>{console.log("response",g),console.log(g.length),g.filter(function(l){p.value===l.tracking_id&&(console.log(l),s.value=l)})}).catch(g=>{g.data,console.log(g.data),V.value=!1,P.value=!1}))},it=async()=>{$.value=!1,S.value=!1,x.value.length>0&&(Q.value=await $fetch(w.value+"/api/admissions-second-sem-dev/transferee/list/",{method:"GET"}).then(g=>{console.log("response",g),console.log(g.length),g.filter(function(l){x.value===l.tracking_id?(console.log(l),i.value=l):(S.value=!0,setTimeout(()=>{S.value=!1},3e3),T.value=!1)})}).catch(g=>{g.data,console.log(g.data),T.value=!1,$.value=!1}))},ot=async()=>{H.value=!1,C.value=!1,b.value.length>0&&(Z.value=await $fetch(w.value+"/api/admissions-second-sem-dev/second-degree-holder/list/",{method:"GET"}).then(g=>{console.log("response",g),console.log(g.length),g.filter(function(l){b.value===l.tracking_id?(console.log(l),o.value=l):(C.value=!0,setTimeout(()=>{C.value=!1},3e3),D.value=!1)})}).catch(g=>{g.data,D.value=!1,H.value=!1}))},at=async()=>{q.value=!1,lt.value=!1,f.value.length>0&&(nt.value=await $fetch(w.value+"/api/admissions-second-sem-dev/new-student/list/",{method:"GET"}).then(g=>{g.filter(function(l){f.value===l.tracking_id&&(console.log("params.tracking_id",l.tracking_id),console.log(l),a.value=l)})}).catch(g=>{g.data,O.value=!1,q.value=!1}))},rt=()=>{v(!0,!1,!1,!1),U.value=null},gt=()=>{v(!1,!0,!1,!1),J.value=null},_t=()=>{v(!1,!1,!0,!1),W.value=null},ct=()=>{v(!1,!1,!1,!0),tt.value=null};return(g,l)=>{const N=mt,z=ut,dt=pt;return c(),_("div",null,[A(N),e("div",ft,[e("div",wt,[e("div",vt,[A(z),l[13]||(l[13]=F('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/tracking" class="mr-1">Tracking </a></li></ul></div>',3))])]),e("div",ht,[e("div",kt,[e("div",yt,[e("div",{onClick:l[0]||(l[0]=d=>rt()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Continuing "),e("div",{onClick:l[1]||(l[1]=d=>gt()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Transferee "),e("div",{onClick:l[2]||(l[2]=d=>_t()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Second Degree Student "),e("div",{onClick:l[3]||(l[3]=d=>ct()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center rounded-2xl px-2 lg:py-1.5 py-2"}," New First Year ")]),e("div",Tt,[t(B)?(c(),_("div",St,[l[18]||(l[18]=e("p",{class:"text-center font-bold lg:mt-10 mt-7"},"Status: Continuing / Shiftee / Returnee",-1)),e("div",Dt,[l[17]||(l[17]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[u("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),u(". Thank you! ")])],-1)),e("div",Ct,[e("div",Nt,[h(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[4]||(l[4]=d=>y(p)?p.value=d:null),required:""},null,512),[[k,t(p)]]),e("button",{onClick:l[5]||(l[5]=d=>st()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[14]||(l[14]=[e("i",{class:"fa fa-search"},null,-1),u(" Track ")]))])]),t(R)?(c(),_("div",zt," Please Add Correct Tracking ID ")):m("",!0),t(V)?(c(),_("div",At,l[15]||(l[15]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):m("",!0),e("div",Ft,[t(s)?(c(),_("div",It,[e("div",{class:r(["h-fit w-fit rounded-lg px-2 py-1 font-bold relative z-10",[t(s).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 1. Admissions ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(s).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(s).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 2. Advising ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(s).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(s).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 3. Payment ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3 relative z-10",[t(s).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(s).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 4. Validation ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(s).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["w-fit h-fit lg:mx-0 mx-auto rounded-full px-3 py-2 lg:mt-0 mt-10 relative z-10",[t(s).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(s).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(s).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(s).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},l[16]||(l[16]=[e("i",{class:"fa fa-check text-3xl"},null,-1)]),2)])):m("",!0)])])])):m("",!0),t(E)?(c(),_("div",Bt,[l[23]||(l[23]=e("p",{class:"text-center font-bold mt-10"},"Status: Transferee",-1)),l[24]||(l[24]=e("p",{class:"text-center text-sm text-green-800 px-5"}," An undergraduate student known to have attended a different college/university prior to seeking admission to the University.",-1)),e("div",Vt,[l[22]||(l[22]=e("p",{class:"text-center lg:mt-10 mt-5 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[u("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),u(". Thank you! ")])],-1)),e("div",Pt,[e("div",Et,[h(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[6]||(l[6]=d=>y(x)?x.value=d:null),required:""},null,512),[[k,t(x)]]),e("button",{onClick:l[7]||(l[7]=d=>it()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[19]||(l[19]=[e("i",{class:"fa fa-search"},null,-1),u(" Track ")]))])]),t(K)?(c(),_("div",$t," Please Add Correct Tracking ID ")):m("",!0),t(T)?(c(),_("div",jt,l[20]||(l[20]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):m("",!0),e("div",Ht,[t(i)?(c(),_("div",Yt,[e("div",{class:r(["h-fit w-fit rounded-lg px-2 py-1 font-bold relative z-10",[t(i).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 1. Admissions ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(i).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(i).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 2. Advising ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(i).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(i).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 3. Payment ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3 relative z-10",[t(i).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(i).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 4. Validation ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(i).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["w-fit h-fit lg:mx-0 mx-auto rounded-full px-3 py-2 lg:mt-0 mt-10 relative z-10",[t(i).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(i).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(i).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(i).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},l[21]||(l[21]=[e("i",{class:"fa fa-check text-3xl"},null,-1)]),2)])):m("",!0)])])])):m("",!0),t(j)?(c(),_("div",Ot,[l[29]||(l[29]=e("p",{class:"text-center font-bold mt-10"},"Status: Second Degree Holder",-1)),l[30]||(l[30]=e("p",{class:"text-center text-sm text-green-800 px-5"},"A student who have already completed a bachelor's degree but is seeking admission to another degree program as a second degree.",-1)),e("div",qt,[l[28]||(l[28]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[u("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),u(". Thank you! ")])],-1)),e("div",Lt,[e("div",Ut,[h(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[8]||(l[8]=d=>y(b)?b.value=d:null),required:""},null,512),[[k,t(b)]]),e("button",{onClick:l[9]||(l[9]=d=>ot()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[25]||(l[25]=[e("i",{class:"fa fa-search"},null,-1),u(" Track ")]))])]),t(X)?(c(),_("div",Rt," Please Add Correct Tracking ID ")):m("",!0),t(D)?(c(),_("div",Gt,l[26]||(l[26]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):m("",!0),e("div",Mt,[t(o)?(c(),_("div",Jt,[e("div",{class:r(["h-fit w-fit rounded-lg px-2 py-1 font-bold relative z-10",[t(o).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 1. Admissions ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(o).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(o).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 2. Advising ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(o).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(o).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 3. Payment ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3 relative z-10",[t(o).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(o).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 4. Validation ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(o).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["w-fit h-fit lg:mx-0 mx-auto rounded-full px-3 py-2 lg:mt-0 mt-10 relative z-10",[t(o).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(o).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(o).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(o).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},l[27]||(l[27]=[e("i",{class:"fa fa-check text-3xl"},null,-1)]),2)])):m("",!0)])])])):m("",!0),t(Y)?(c(),_("div",Kt,[l[35]||(l[35]=e("p",{class:"text-center font-bold mt-10"},"Status: New First Year",-1)),l[36]||(l[36]=e("p",{class:"text-center text-sm text-green-800 px-5"}," A student who is eligible for admission to an undergaduate program after the completion of the K to 12 curriculum or its equivalent.",-1)),e("div",Qt,[l[34]||(l[34]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[u("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),u(". Thank you! ")])],-1)),e("div",Wt,[e("div",Xt,[h(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[10]||(l[10]=d=>y(f)?f.value=d:null),required:""},null,512),[[k,t(f)]]),e("button",{onClick:l[11]||(l[11]=d=>at()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[31]||(l[31]=[e("i",{class:"fa fa-search"},null,-1),u(" Track ")]))])]),t(et)?(c(),_("div",Zt," Please Add Correct Tracking ID ")):m("",!0),t(O)?(c(),_("div",te,l[32]||(l[32]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):m("",!0),e("div",ee,[t(a)?(c(),_("div",le,[e("div",{class:r(["h-fit w-fit rounded-lg px-2 py-1 font-bold relative z-10",[t(a).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 1. Admissions ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(a).enrollment_tracking_status_admissions_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_admissions_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_admissions_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_admissions_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(a).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 2. Advising ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(a).enrollment_tracking_status_advising_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_advising_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_advising_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_advising_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(a).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 3. Payment ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3 relative z-10",[t(a).enrollment_tracking_status_accounting_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_accounting_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_accounting_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_accounting_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["h-fit w-fit lg:mx-0 mx-auto rounded-lg px-2 py-1 font-bold lg:mt-0 mt-10 relative z-10",[t(a).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])}," 4. Validation ",2),e("div",{class:r(["h-[6px] lg:rotate-0 rotate-90 w-[100px] lg:mt-0 mt-10 lg:ml-0 ml-3",[t(a).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},null,2),e("div",{class:r(["w-fit h-fit lg:mx-0 mx-auto rounded-full px-3 py-2 lg:mt-0 mt-10 relative z-10",[t(a).enrollment_tracking_status_validation_is_complete==="yes"?"text-white bg-green-900":""],[t(a).enrollment_tracking_status_validation_is_complete==="no"?"text-white bg-red-700":""],[t(a).enrollment_tracking_status_validation_is_complete==="-"?"text-white bg-gray-300":""],[t(a).enrollment_tracking_status_validation_is_complete==="ongoing"?"text-white bg-blue-800":""]])},l[33]||(l[33]=[e("i",{class:"fa fa-check text-3xl"},null,-1)]),2)])):m("",!0)])])])):m("",!0)])]),e("div",ne,[e("div",se,[l[42]||(l[42]=e("p",{class:"font-bold text-green-900 text-3xl mb-10 mt-10"},"Enrollment Steps",-1)),e("ul",ie,[l[40]||(l[40]=F('<li class="w-full mb-5 border"><span class="justify-evenly flex bg-green-800 text-white py-1 font-bold"><span class="w-full">Step 1:</span><span class="w-full uppercase">Admissions</span></span><span class="block relative text-center"><a href="https://lsu.edu.ph/admissions/form" class="font-bold w-full flex justify-center py-4 cursor-pointer bg-white text-green-800 hover:text-white hover:bg-green-800"> ONLINE : Admissions Online Form </a></span></li><li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Step 2:</span><span class="w-full uppercase">Advising</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONSITE : Visit SJ Building <br> LSU Campus </span></li>',2)),e("li",oe,[l[38]||(l[38]=e("span",{class:"justify-between flex bg-green-800 py-1 font-bold"},[e("span",{class:"w-full"},"Step 3:"),e("span",{class:"w-full uppercase"},"Payment")],-1)),l[39]||(l[39]=e("span",{class:"bg-white border-b text-green-800 font-bold w-full flex justify-center py-4"},[u(" ONSITE Accounting Office or "),e("br"),u(" Via Online Payment Methods ")],-1)),e("div",{onClick:l[12]||(l[12]=d=>I.value=!t(I))},l[37]||(l[37]=[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"hover:border-4 hover:rounded-lg border-green-800"},null,-1)]))]),l[41]||(l[41]=F('<li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Step 4:</span><span class="w-full uppercase">Validation</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONLINE : Validation <br> LSU Email Activation </span><div class="text-red-700 lg:text-sm text-sm font-bold bg-red-50 lg:px-5 px-3 lg:py-14 py-3 border-0 lg:border-y-4 border-y-2 border-red-800"><p class="lg:mb-10 mb-4 lg:text-sm text-xs"> For the Final Step, the LSU ASC Team will <span class="font-bold">Validate</span> all the information and activate your LSU Gmail. </p><p class="lg:text-sm text-xs">All students are required to complete their detailed student profile; otherwise, it will be deactivated.</p></div></li>',1))])])])])]),A(dt)])}}};export{ue as default};
