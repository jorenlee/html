import{_ as St}from"./B4Gzfrej.js";import{_ as Ct}from"./DvHhVz2r.js";import{_ as Dt}from"./CXf9W_ns.js";import{u as Ft,r as a,e as Nt,c as o,b as P,a as e,i as R,k as d,f as u,d as i,h as D,m as F,j as N,F as I,l as A,o as r,n,t as c}from"./DZAxJrbz.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const It={class:"relative"},At={class:""},Bt={class:"relative"},Et={class:"lg:flex"},Ht={class:"tracking-side lg:order-2 order-1 lg:w-9/12"},Yt={class:"grid xl:grid-cols-4 grid-cols-2 w-full bg-green-900 text-white xl:px-4 lg:py-5 py-4 lg:justify-between lg:order-1 order-2 lg:gap-4 gap-3 px-2"},qt={class:"lg:order-2 order-1"},Vt={key:0,class:"overflow-hidden"},$t={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5"},Lt={class:"lg:flex"},Ot={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},Pt={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},Rt={key:1,class:"mx-auto w-fit my-20"},zt={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},Ut={class:"flex lg:items-center w-full lg:ml-20"},Gt={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},Mt={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},Jt={key:1,class:"overflow-hidden"},Kt={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},Qt={class:"lg:flex"},Wt={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},Xt={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},Zt={key:1,class:"mx-auto w-fit my-20"},jt={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},te={class:"flex lg:items-center w-full lg:ml-20"},ee={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},le={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},se={key:2,class:"overflow-hidden"},ae={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},ne={class:"lg:flex"},oe={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},re={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},ie={key:1,class:"mx-auto w-fit my-20"},ue={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},ge={class:"flex lg:items-center w-full lg:ml-20"},de={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},ce={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},pe={key:3,class:"overflow-hidden"},xe={class:"lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},fe={class:"lg:flex"},me={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},be={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},ve={key:1,class:"mx-auto w-fit my-20"},we={class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},he={class:"flex lg:items-center w-full lg:ml-20"},ye={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},ke={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},_e={class:"lg:w-3/12 shadow-lg lg:order-1 order-2 pb-5 lg:border-t-0 border-t-2"},Te={class:"w-11/12 mx-auto text-center my-5"},Se={class:"w-full justify-between"},Ce={class:"w-full mb-5 border text-white"},He={__name:"backup2",setup(De){const W=Ft(),b=a(W.mainDevServer);Nt();const z=a(!1),U=a(!0),p=a(""),G=a(),X=a(null),v=a(!1),Z=a(!1),B=a(!1),w=a(!1);let j=a(),M=a(),tt=a(!1);const J=a(!1),x=a(""),E=a(),et=a(null),h=a(!1),lt=a(!1),H=a(!1),y=a(!1);let st=a(),at=a(),nt=a(!1);const K=a(!1),f=a(""),Y=a(),ot=a(null),k=a(!1),rt=a(!1),q=a(!1),_=a(!1);let it=a(),ut=a(),gt=a(!1);const Q=a(!1),m=a(""),V=a(),dt=a(null),T=a(!1),ct=a(!1),$=a(!1),S=a(!1);let pt=a(),xt=a(),ft=a(!1);const C=(g,l,L,O)=>{U.value=g,J.value=l,K.value=L,Q.value=O},mt=async()=>{B.value=!1,w.value=!1,p.value.length>0&&(v.value=!0,j.value=await $fetch(b.value+"/api/admissions-second-sem-dev/list/",{method:"GET"}).then(g=>{g.filter(function(l){p.value===l.tracking_id?(tt.value=l.evaluation.submitted,X.value=l.id,w.value=!1,B.value=!0,M.value=l,console.log(M.value)):(w.value=!0,setTimeout(()=>{w.value=!1},3e3),v.value=!1)})}).catch(g=>{g.data,console.log(g.data),v.value=!1,B.value=!1}))},bt=async()=>{H.value=!1,y.value=!1,x.value.length>0&&(h.value=!0,st.value=await $fetch(b.value+"/api/admissions-second-sem-dev/transferee/list/",{method:"GET"}).then(g=>{g.filter(function(l){x.value===l.tracking_id?(E.value=l.enrollment_tracking_status,nt.value=l.evaluation.submitted,et.value=l.id,y.value=!1,H.value=!0,at.value=l):(y.value=!0,setTimeout(()=>{y.value=!1},3e3),h.value=!1)})}).catch(g=>{g.data,h.value=!1,H.value=!1}))},vt=async()=>{q.value=!1,_.value=!1,f.value.length>0&&(k.value=!0,it.value=await $fetch(b.value+"/api/admissions-second-sem-dev/second-degree-holder/list/",{method:"GET"}).then(g=>{g.filter(function(l){f.value===l.tracking_id?(Y.value=l.enrollment_tracking_status,gt.value=l.evaluation.submitted,ot.value=l.id,_.value=!1,q.value=!0,ut.value=l):(_.value=!0,setTimeout(()=>{_.value=!1},3e3),k.value=!1)})}).catch(g=>{g.data,k.value=!1,q.value=!1}))},wt=async()=>{$.value=!1,S.value=!1,m.value.length>0&&(T.value=!0,pt.value=await $fetch(b.value+"/api/admissions-second-sem-dev/new-student/list/",{method:"GET"}).then(g=>{g.filter(function(l){m.value===l.tracking_id?(V.value=l.enrollment_tracking_status,ft.value=l.evaluation.submitted,dt.value=l.id,S.value=!1,$.value=!0,xt.value=l):(S.value=!0,setTimeout(()=>{S.value=!1},3e3),T.value=!1)})}).catch(g=>{g.data,T.value=!1,$.value=!1}))},ht=()=>{C(!0,!1,!1,!1),G.value=null},yt=()=>{C(!1,!0,!1,!1),E.value=null},kt=()=>{C(!1,!1,!0,!1),Y.value=null},_t=()=>{C(!1,!1,!1,!0),V.value=null};return(g,l)=>{const L=St,O=Ct,Tt=Dt;return r(),o("div",null,[P(L),e("div",It,[e("div",At,[e("div",Bt,[P(O),l[13]||(l[13]=R('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/tracking" class="mr-1">Tracking </a></li></ul></div>',3))])]),e("div",Et,[e("div",Ht,[e("div",Yt,[e("div",{onClick:l[0]||(l[0]=t=>ht()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Continuing "),e("div",{onClick:l[1]||(l[1]=t=>yt()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Transferee "),e("div",{onClick:l[2]||(l[2]=t=>kt()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center lg:mb-0 rounded-2xl px-2 lg:py-1.5 py-2"}," Second Degree Student "),e("div",{onClick:l[3]||(l[3]=t=>_t()),class:"lg:text-base text-[10px] uppercase cursor-pointer bg-green-700 text-white hover:bg-white hover:text-green-800 font-bold border text-center rounded-2xl px-2 lg:py-1.5 py-2"}," New First Year ")]),e("div",qt,[u(U)?(r(),o("div",Vt,[l[19]||(l[19]=e("p",{class:"text-center font-bold lg:mt-10 mt-7"},"Status: Continuing / Shiftee / Returnee",-1)),e("div",$t,[l[18]||(l[18]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[i("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),i(". Thank you! ")])],-1)),e("div",Lt,[e("div",Ot,[D(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[4]||(l[4]=t=>N(p)?p.value=t:null),required:""},null,512),[[F,u(p)]]),e("button",{onClick:l[5]||(l[5]=t=>mt()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[14]||(l[14]=[e("i",{class:"fa fa-search"},null,-1),i(" Track ")]))])]),u(Z)?(r(),o("div",Pt," Please Add Correct Tracking ID ")):d("",!0),u(v)?(r(),o("div",Rt,l[15]||(l[15]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):d("",!0),e("div",zt,[(r(!0),o(I,null,A(u(G),(t,s)=>(r(),o("div",{class:"w-full relative lg:h-auto h-[120px]",key:s},[e("div",Ut,[e("p",{class:n(["text-white lg:px-1 px-2 py-1 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[t.status==="yes"?"text-white bg-green-900":""],[t.status==="no"?"text-white bg-red-700":""],[t.status===""?"text-white bg-gray-300":""],[t.status==="ongoing"?"text-white bg-blue-800":""]])},[e("i",{class:n(["fa fa-clock text-2xl",t.status===""?"":"hidden"])},null,2),e("i",{class:n(["fa fa-question-circle text-2xl",t.status==="no"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-clock text-2xl",t.status==="ongoing"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-check text-2xl",t.status==="yes"?"":"hidden"])},null,2)],2),e("div",{class:n(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-red-700":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-800":""],[s===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),e("div",Gt,[e("p",{class:n(["uppercase font-bold lg:mt-4",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},c(t.track_name),3),e("span",{class:n(["text-xs capitalize block",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},c(t.details),3),e("div",{class:n(["text-xs capitalize block w-[130px] left-28 leading-tight",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-10 lg:mt-0 mt-5":""],[t.remarks===""?"hidden":""]])},[l[16]||(l[16]=i(" Remarks: ")),e("div",{class:n(["font-bold underline lg:w-[200px] w-[200px]",[s===2?"w-[230px]":""][s===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},c(t.remarks),3)],2),t.status==="yes"&&t.track_name==="validation"?(r(),o("div",Mt,l[17]||(l[17]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),i(" Congratulations! ")]))):d("",!0)])]))),128))])])])):d("",!0),u(J)?(r(),o("div",Jt,[l[25]||(l[25]=e("p",{class:"text-center font-bold mt-10"},"Status: Transferee",-1)),l[26]||(l[26]=e("p",{class:"text-center text-sm text-green-800 px-5"}," An undergraduate student known to have attended a different college/university prior to seeking admission to the University.",-1)),e("div",Kt,[l[24]||(l[24]=e("p",{class:"text-center lg:mt-10 mt-5 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[i("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),i(". Thank you! ")])],-1)),e("div",Qt,[e("div",Wt,[D(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[6]||(l[6]=t=>N(x)?x.value=t:null),required:""},null,512),[[F,u(x)]]),e("button",{onClick:l[7]||(l[7]=t=>bt()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[20]||(l[20]=[e("i",{class:"fa fa-search"},null,-1),i(" Track ")]))])]),u(lt)?(r(),o("div",Xt," Please Add Correct Tracking ID ")):d("",!0),u(h)?(r(),o("div",Zt,l[21]||(l[21]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):d("",!0),e("div",jt,[(r(!0),o(I,null,A(u(E),(t,s)=>(r(),o("div",{class:"w-full relative lg:h-auto h-[120px]",key:s},[e("div",te,[e("p",{class:n(["text-white lg:px-1 px-2 py-1 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[t.status==="yes"?"text-white bg-green-900":""],[t.status==="no"?"text-white bg-red-700":""],[t.status===""?"text-white bg-gray-300":""],[t.status==="ongoing"?"text-white bg-blue-800":""]])},[e("i",{class:n(["fa fa-clock text-2xl",t.status===""?"":"hidden"])},null,2),e("i",{class:n(["fa fa-question-circle text-2xl",t.status==="no"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-clock text-2xl",t.status==="ongoing"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-check text-2xl",t.status==="yes"?"":"hidden"])},null,2)],2),e("div",{class:n(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-red-700":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-800":""],[s===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),e("div",ee,[e("p",{class:n(["uppercase font-bold lg:mt-4",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},c(t.track_name),3),e("span",{class:n(["text-xs capitalize block",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},c(t.details),3),e("div",{class:n(["text-xs capitalize block w-[130px] left-28 leading-tight",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-10":""],[t.remarks===""?"hidden":""]])},[l[22]||(l[22]=i(" Remarks: ")),e("div",{class:n(["font-bold underline lg:w-[200px] w-[200px]",[s===2?"w-[230px]":""][s===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},c(t.remarks),3)],2),t.status==="yes"&&t.track_name==="validation"?(r(),o("div",le,l[23]||(l[23]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),i(" Congratulations! ")]))):d("",!0)])]))),128))])])])):d("",!0),u(K)?(r(),o("div",se,[l[32]||(l[32]=e("p",{class:"text-center font-bold mt-10"},"Status: Second Degree Holder",-1)),l[33]||(l[33]=e("p",{class:"text-center text-sm text-green-800 px-5"},"A student who have already completed a bachelor's degree but is seeking admission to another degree program as a second degree.",-1)),e("div",ae,[l[31]||(l[31]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[i("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),i(". Thank you! ")])],-1)),e("div",ne,[e("div",oe,[D(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[8]||(l[8]=t=>N(f)?f.value=t:null),required:""},null,512),[[F,u(f)]]),e("button",{onClick:l[9]||(l[9]=t=>vt()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[27]||(l[27]=[e("i",{class:"fa fa-search"},null,-1),i(" Track ")]))])]),u(rt)?(r(),o("div",re," Please Add Correct Tracking ID ")):d("",!0),u(k)?(r(),o("div",ie,l[28]||(l[28]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):d("",!0),e("div",ue,[(r(!0),o(I,null,A(u(Y),(t,s)=>(r(),o("div",{class:"w-full relative lg:h-auto h-[120px]",key:s},[e("div",ge,[e("p",{class:n(["text-white lg:px-1 px-2 py-1 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[t.status==="yes"?"text-white bg-green-900":""],[t.status==="no"?"text-white bg-red-700":""],[t.status===""?"text-white bg-gray-300":""],[t.status==="ongoing"?"text-white bg-blue-800":""]])},[e("i",{class:n(["fa fa-clock text-2xl",t.status===""?"":"hidden"])},null,2),e("i",{class:n(["fa fa-question-circle text-2xl",t.status==="no"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-clock text-2xl",t.status==="ongoing"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-check text-2xl",t.status==="yes"?"":"hidden"])},null,2)],2),e("div",{class:n(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-red-700":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-800":""],[s===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),e("div",de,[e("p",{class:n(["uppercase font-bold lg:mt-4",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},c(t.track_name),3),e("span",{class:n(["text-xs capitalize block",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},c(t.details),3),e("div",{class:n(["text-xs capitalize block w-[130px] left-28 leading-tight",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-10":""],[t.remarks===""?"hidden":""]])},[l[29]||(l[29]=i(" Remarks: ")),e("div",{class:n(["font-bold underline lg:w-[200px] w-[200px]",[s===2?"w-[230px]":""][s===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},c(t.remarks),3)],2),t.status==="yes"&&t.track_name==="validation"?(r(),o("div",ce,l[30]||(l[30]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),i(" Congratulations! ")]))):d("",!0)])]))),128))])])])):d("",!0),u(Q)?(r(),o("div",pe,[l[39]||(l[39]=e("p",{class:"text-center font-bold mt-10"},"Status: New First Year",-1)),l[40]||(l[40]=e("p",{class:"text-center text-sm text-green-800 px-5"}," A student who is eligible for admission to an undergaduate program after the completion of the K to 12 curriculum or its equivalent.",-1)),e("div",xe,[l[38]||(l[38]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[i("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"admissions@lsu.edu.ph"),i(". Thank you! ")])],-1)),e("div",fe,[e("div",me,[D(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":l[10]||(l[10]=t=>N(m)?m.value=t:null),required:""},null,512),[[F,u(m)]]),e("button",{onClick:l[11]||(l[11]=t=>wt()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},l[34]||(l[34]=[e("i",{class:"fa fa-search"},null,-1),i(" Track ")]))])]),u(ct)?(r(),o("div",be," Please Add Correct Tracking ID ")):d("",!0),u(T)?(r(),o("div",ve,l[35]||(l[35]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):d("",!0),e("div",we,[(r(!0),o(I,null,A(u(V),(t,s)=>(r(),o("div",{class:"w-full relative lg:h-auto h-[120px]",key:s},[e("div",he,[e("p",{class:n(["text-white lg:px-1 px-2 py-1 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[t.status==="yes"?"text-white bg-green-900":""],[t.status==="no"?"text-white bg-red-700":""],[t.status===""?"text-white bg-gray-300":""],[t.status==="ongoing"?"text-white bg-blue-800":""]])},[e("i",{class:n(["fa fa-clock text-2xl",t.status===""?"":"hidden"])},null,2),e("i",{class:n(["fa fa-question-circle text-2xl",t.status==="no"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-clock text-2xl",t.status==="ongoing"?"":"hidden"])},null,2),e("i",{class:n(["fa fa-check text-2xl",t.status==="yes"?"":"hidden"])},null,2)],2),e("div",{class:n(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-red-700":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-800":""],[s===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),e("div",ye,[e("p",{class:n(["uppercase font-bold lg:mt-4",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},c(t.track_name),3),e("span",{class:n(["text-xs capitalize block",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},c(t.details),3),e("div",{class:n(["text-xs capitalize block w-[130px] left-28 leading-tight",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-red-700":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-800":""],[s===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[s===3?"lg:ml-0 lg:static absolute left-28 top-10":""],[t.remarks===""?"hidden":""]])},[l[36]||(l[36]=i(" Remarks: ")),e("div",{class:n(["font-bold underline lg:w-[200px] w-[200px]",[s===2?"w-[230px]":""][s===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},c(t.remarks),3)],2),t.status==="yes"&&t.track_name==="validation"?(r(),o("div",ke,l[37]||(l[37]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),i(" Congratulations! ")]))):d("",!0)])]))),128))])])])):d("",!0)])]),e("div",_e,[e("div",Te,[l[46]||(l[46]=e("p",{class:"font-bold text-green-900 text-3xl mb-10 mt-10"},"Enrollment Steps",-1)),e("ul",Se,[l[44]||(l[44]=R('<li class="w-full mb-5 border"><span class="justify-evenly flex bg-green-800 text-white py-1 font-bold"><span class="w-full">Step 1:</span><span class="w-full uppercase">Admissions</span></span><span class="block relative text-center"><a href="https://lsu.edu.ph/admissions/form" class="font-bold w-full flex justify-center py-4 cursor-pointer bg-white text-green-800 hover:text-white hover:bg-green-800"> ONLINE : Admissions Online Form </a></span></li><li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Step 2:</span><span class="w-full uppercase">Advising</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONSITE : Visit SJ Building <br> LSU Campus </span></li>',2)),e("li",Ce,[l[42]||(l[42]=e("span",{class:"justify-between flex bg-green-800 py-1 font-bold"},[e("span",{class:"w-full"},"Step 3:"),e("span",{class:"w-full uppercase"},"Payment")],-1)),l[43]||(l[43]=e("span",{class:"bg-white border-b text-green-800 font-bold w-full flex justify-center py-4"},[i(" ONSITE Accounting Office or "),e("br"),i(" Via Online Payment Methods ")],-1)),e("div",{onClick:l[12]||(l[12]=t=>z.value=!u(z))},l[41]||(l[41]=[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"hover:border-4 hover:rounded-lg border-green-800"},null,-1)]))]),l[45]||(l[45]=R('<li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Last Step:</span><span class="w-full uppercase">Validation</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONLINE : Validation <br> LSU Email Activation </span><div class="text-red-700 lg:text-sm text-sm font-bold bg-red-50 lg:px-5 px-3 lg:py-14 py-3 border-0 lg:border-y-4 border-y-2 border-red-800"><p class="lg:mb-10 mb-4 lg:text-sm text-xs"> For the Final Step, the LSU ASC Team will <span class="font-bold">Validate</span> all the information and activate your LSU Gmail. </p><p class="lg:text-sm text-xs">All students are required to complete their detailed student profile; otherwise, it will be deactivated.</p></div></li>',1))])])])])]),P(Tt)])}}};export{He as default};
