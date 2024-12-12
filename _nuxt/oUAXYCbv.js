import{_ as ie}from"./CtfJqJwn.js";import{_ as ne}from"./1nJATuF7.js";import{u as de,f as ue,r,m as Y,g as be,c as i,b as F,a as t,t as v,p as P,j as me,e as o,F as L,q as $,h as m,s as pe,k as h,x as b,d as _,i as H,o as n,y as ge,n as I}from"./CnGEHsJx.js";import{s as ce}from"./DYi_7lNG.js";import{X as fe}from"./CD_BD3Fo.js";import{h as D}from"./C5S46NFB.js";import{_ as C}from"./vUEbHlag.js";import{_ as xe}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const ve={class:"bg-gray-50"},he={class:""},_e={class:""},ye={class:"relative"},we={class:"pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"},ke={class:"font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"},Ce={class:"text-xs lg:mb-5 bg-white w-11/12 mx-auto lg:mt-5 shadow-xl rounded-xl"},Te={class:""},Be={class:"lg:w-fit w-auto mx-auto lg:flex lg:gap-20"},De={class:"lg:w-fit mb-1"},Se={class:""},Ve={class:"mx-auto w-fit"},Ne={class:"mx-auto shadow lg:h-fit lg:my-auto border rounded-sm my-3"},Ue={class:"w-full rounded-md justify-center"},je={class:"grid lg:grid-cols-3 grid-cols-2 pr-6"},Fe=["value","id"],Le=["value"],$e=["for"],Ae={class:"lg:w-11/12 mx-auto lg:p-5"},Re={class:"lg:flex gap-2 lg:mb-3 lg:mt-0 mt-3"},qe={class:"flex lg:w-9/12 mx-auto gap-2"},ze={class:"max-w-fit w-9/12 mx-auto lg:mb-0 mb-2"},Me={key:0,class:"w-full lg:mb-0 mb-2"},Ye={key:0,class:"flex lg:w-full gap-2"},Pe={class:"w-full lg:mb-0 mb-2"},He={class:"w-full lg:mb-0 mb-2"},Ie={key:1,class:"lg:w-10/12 w-full lg:mb-0 mb-2"},Oe={class:"lg:shadow lg:rounded-lg lg:px-2 lg:py-3 lg:mt-0 mt-5"},Ee={key:0},Xe={class:"lg:w-6/12 mx-auto lg:my-5 flex"},Ge={class:"lg:mb-10 mb-3 lg:bg-white bg-green-700 lg:text-black text-white shadow-xl"},Je={class:"appointment-lists shadow mx-auto text-xs"},Ke={class:""},Qe={key:0,class:"header w-full bg-green-800 text-white lg:flex hidden items-center"},We={key:1,class:"w-full rows"},Ze={class:"px-2 lg:w-6/12 lg:flex items-center justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-2 lg:gap-0 gap-5"},et={class:"px-2 lg:w-40 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5"},tt={class:"px-2 lg:w-44 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5"},lt={class:"px-2 lg:w-32 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-5 lg:gap-0 gap-5"},ot={key:0,class:"px-2 lg:w-52 lg:h-10 flex items-center justify-center gap-3"},st=["onClick"],at={key:1,class:"px-2 lg:w-52 lg:h-10 lg:mb-0 mb-3 flex items-center justify-center"},rt={key:2,class:"itallic text-gray-400 text-center p-1"},it={key:1,class:"shadow-lg p-2 lg:border-0 border-t"},nt={class:"flex items-center"},dt={class:"flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2"},ut={class:"w-full lg:mb-0 mb-2"},bt=["onUpdate:modelValue"],mt={class:"lg:w-6/12 lg:mb-0 mb-2"},pt=["onUpdate:modelValue"],gt={class:"lg:w-4/12 lg:mb-0 mb-2"},ct=["onUpdate:modelValue"],ft={class:"flex items-center lg:static absolute top-3 right-0"},xt=["onClick"],vt={key:0,class:"text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center"},ht={__name:"index",async setup(_t){let f,T;const O=de(),E=ue(),p=r(E.mainDevServer),X=["LRC Book Thru","(lrc)","Book Thru"],G=r(ce.timeSelection),A=([f,T]=Y(()=>$fetch(p.value+"/api/library/schedule/booking/list/").catch(s=>s.data)),f=await f,T(),f),y=r("");let S=r([]);const J=r(new Date);let K=r(D(new Date).format("HH:MM")),R=r(),k=r(0),V=r(!1);r([]);let N=r([]);const w=r();r(),r(!1);const d=r({date:"",time:"",updated_at:new Date}),a=r({borrower_category:"",id_number:"",firstname:"",lastname:"",email:"",books:[],booking_date:"",booking_time:"",status:"pending",created_by_email:"",updated_at:new Date});be(()=>{A.filter(function(s){S.value.push(s.date)})});let B=r(!1);r(null),r(null);const Q=async s=>{console.log("select one obj",s),s.number_of_copies--,a.value.books.push({book_title:s.title,book_author:s.author,book_call_number:s.call_number}),k.value--,W(s),x.value=[],y.value=""};let q=([f,T]=Y(()=>$fetch(p.value+"/api/library/reports/book/list/").catch(s=>s.data)),f=await f,T(),f||0),z=r(!1),x=r([]),M=()=>{z=!0,y.value.toLowerCase()!==""?x.value=q.filter(function(s){return s.title.toLowerCase().includes(y.value)}):x.value=0};const W=async s=>{let e=await $fetch(p.value+"/api/library/reports/book/"+s.id+"/").catch(u=>u.data)||0;e.number_of_copies--,console.log(e),await $fetch(p.value+"/api/library/reports/book/edit/"+s.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:e}).then(u=>{console.log(u)})},Z=s=>{q.filter(function(e){e.call_number===s.book_call_number&&(e.number_of_copies++,ee(e),console.log(e.number_of_copies),a.value.books.length>0&&(C.pull(a.value.books,s),k.value++,x.value=[]))})},ee=async s=>{let e=await $fetch(p.value+"/api/library/reports/book/"+s.id+"/").catch(u=>u.data)||0;e.number_of_copies++,console.log(e),await $fetch(p.value+"/api/library/reports/book/edit/"+s.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:e}).then(u=>{console.log(u)})},U=()=>{B.value=!0,a.value.id_number=""},te=()=>{a.value.borrower_category==="Faculty"&&(k.value=20,U()),a.value.borrower_category==="Staff"&&(k.value=20,U()),a.value.borrower_category==="Student"&&(k.value=15,U()),a.value.books=[{book_title:null,book_author:null,book_call_number:null}]},le=s=>{d.value.date=D(s).format("MM-DD-YYYY");let e=D(D().toDate()).format("MM-DD-YYYY");d.value.time=["-"],setTimeout(()=>{A.filter(function(u){u.date===d.value.date&&(R.value=u.id,d.value.time=u.time),u.date===e&&u.date===d.value.date&&(d.value.time=u.time.filter(j=>K.value.slice(0,2)<j.range_from_time.slice(0,2)))})},100)},oe=async()=>{d.value.time.length===1?N.value=[{range_from_time:"",range_to_time:"",_12_hour_format_from:"",_12_hour_format_to:""}]:N.value=C.filter(d.value.time,function(s){return s.range_from_time!==w.value.range_from_time&&s.range_to_time!==w.value.range_to_time}),await $fetch(p.value+"/api/library/schedule/booking/"+R.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{date:d.value.date,time:N.value,updated_at:d.value.updated_at}}).then(s=>{})},se=()=>{ae(),re()},ae=async()=>{a.value.booking_date=d.value.date,a.value.booking_time=w.value._12_hour_format_from+" - "+w.value._12_hour_format_to,a.value.created_by_email=a.value.email,await $fetch(p.value+"/api/library/booking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:a.value}).then(s=>{s.status==="errors"?(V.value=!0,setTimeout(()=>{V.value=!1},1e4)):(oe(),O.push({path:"/library/LRCBookThru/ConfirmationPage"}))})},re=async()=>{await $fetch(p.value+"/api/library/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:a.value}).then(s=>{})};return(s,e)=>{const u=ie,j=ne;return n(),i("div",ve,[F(u),t("div",he,[t("div",_e,[t("div",ye,[e[11]||(e[11]=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg",class:"align-top w-full h-auto lg:object-fill lg:block hidden"},null,-1)),e[12]||(e[12]=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png",class:"align-top w-full h-36 object-none lg:hidden block"},null,-1)),t("div",we,[t("h1",ke,v(X[0]),1)]),e[13]||(e[13]=P('<div class="pt-2.5 pb-3 shadow-lg" data-v-81eb9222><div class="w-11/12 mx-auto flex justify-between" data-v-81eb9222><ul class="flex lasalle-green-text capitalize text-xs" data-v-81eb9222><li data-v-81eb9222><a href="/" class="" data-v-81eb9222> Home </a></li><li class="flex items-center" data-v-81eb9222><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-81eb9222></i><a href="/library" class="mr-1 flex" data-v-81eb9222> Library </a></li><li class="flex items-center" data-v-81eb9222><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-81eb9222></i><a href="/library/LRCBookThru" class="mr-1 flex" data-v-81eb9222><span class="lg:flex hidden ml-1" data-v-81eb9222> LRC Book Thru</span><span class="lg:hidden flex" data-v-81eb9222> LRC Book Thru</span></a></li></ul></div></div>',1))])]),t("div",Ce,[t("div",Te,[e[39]||(e[39]=t("div",{class:"bg-green-900 py-1 mt-4 lg:mb-10 mb-4 text-base font-medium text-white text-center uppercase tracking-tight"}," Book an Appointment ",-1)),t("form",{onSubmit:me(se,["prevent"]),class:"px-3"},[t("div",Be,[t("div",De,[t("div",Se,[e[14]||(e[14]=t("h1",{class:"font-bold lasalle-green-text text-xs text-center capitalize mb-3"}," Date ",-1)),t("div",Ve,[F(o(fe),{modelValue:o(d).date,"onUpdate:modelValue":[e[0]||(e[0]=l=>o(d).date=l),e[1]||(e[1]=l=>le(o(d).date))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:o(S),"year-range":[2024,2024],"disabled-week-days":[0,7],"week-start":"0","allowed-dates":o(S),"min-date":o(J)},null,8,["modelValue","highlight","allowed-dates","min-date"])])])]),t("div",Ne,[e[15]||(e[15]=t("h1",{class:"border-b-2 border-green-900 text-center font-bold text-green-900 lg:whitespace-nowrap capitalize pt-3 pb-3 mb-3"}," Time ",-1)),t("div",Ue,[t("ul",je,[(n(!0),i(L,null,$(o(G)[0].time,(l,g)=>(n(),i("li",{class:"flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5",key:g},[o(C).find(o(d).time,l)?m((n(),i("input",{key:0,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":e[2]||(e[2]=c=>H(w)?w.value=c:null),id:g,required:""},null,8,Fe)),[[ge,o(w)]]):(n(),i("input",{key:1,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5",disabled:""},null,8,Le)),t("label",{for:g,class:I(["lg:text-xs text-[10px]",o(C).find(o(d).time,l)?"text-[#087830] font-bold":" text-gray-400 font-light"])},v(l._12_hour_format_from)+" - "+v(l._12_hour_format_to),11,$e)]))),128))])])])]),t("div",Ae,[t("div",Re,[t("div",qe,[t("div",ze,[e[17]||(e[17]=t("label",{class:"text-[10px] text-gray-800"}," Borrower Category ",-1)),m(t("select",{"onUpdate:modelValue":e[3]||(e[3]=l=>o(a).borrower_category=l),name:"borrower_category",class:"shadow-lg pl-2 pr-3 pt-2 pb-[6.5px] w-full border-b-2 border-green-800 capitalize",required:"",onChange:e[4]||(e[4]=l=>te())},e[16]||(e[16]=[t("option",{value:"",disabled:"",selected:"",hidden:""}," Select Borrower Category ",-1),t("option",{value:"Faculty"},"Faculty",-1),t("option",{value:"Staff"},"Staff",-1),t("option",{value:"Student"},"Student",-1)]),544),[[pe,o(a).borrower_category]])]),o(B)?(n(),i("div",Me,[e[18]||(e[18]=t("label",{class:"text-[10px] text-gray-800"}," ID Number ",-1)),m(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[5]||(e[5]=l=>o(a).id_number=l),placeholder:"ID Number",type:"text",required:""},null,512),[[h,o(a).id_number]])])):b("",!0)]),o(B)?(n(),i("div",Ye,[t("div",Pe,[e[19]||(e[19]=t("label",{class:"text-[10px] text-gray-800"}," First Name ",-1)),m(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[6]||(e[6]=l=>o(a).firstname=l),placeholder:"first Name",type:"text",required:""},null,512),[[h,o(a).firstname]])]),t("div",He,[e[20]||(e[20]=t("label",{class:"text-[10px] text-gray-800"}," Last Name ",-1)),m(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[7]||(e[7]=l=>o(a).lastname=l),placeholder:"last Name",type:"text",required:""},null,512),[[h,o(a).lastname]])])])):b("",!0),o(B)?(n(),i("div",Ie,[e[21]||(e[21]=t("label",{class:"text-[10px] text-gray-800"}," Email ",-1)),m(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800","onUpdate:modelValue":e[8]||(e[8]=l=>o(a).email=l),placeholder:"Email",type:"email",required:""},null,512),[[h,o(a).email]])])):b("",!0)]),t("div",Oe,[e[37]||(e[37]=t("div",{class:"text-green-900 text-sm text-center lg:mb-3 px-3"},[_(" Open this link "),t("a",{class:"font-bold cursor-pointer",target:"_blank",href:"https://lsu-opac.follettdestiny.com"}," OPAC "),_(" for the available resources and copy the book details in the input boxes "),t("span",{class:""}," (please select first the borrower category above)"),_(". ")],-1)),o(k)>1?(n(),i("div",Ee,[t("div",Xe,[m(t("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>H(y)?y.value=l:null),placeholder:"Search for a Book Title ... ",class:"shadow-xl text-xs text-green-800 px-2 py-2 w-full lg:border-b-4 border-2 lg:border-b-[#225c21] border-[#225c21] lg:mb-0 mb-3"},null,512),[[h,o(y)]]),t("span",{onClick:e[10]||(e[10]=(...l)=>o(M)&&o(M)(...l)),class:"bg-green-800 hover:bg-white hover:text-green-800 text-white px-3.5 h-full lg:py-2 py-[3px] lg:mt-0 cursor-pointer border-green-800 border"},e[22]||(e[22]=[t("i",{class:"fa fa-search text-lg"},null,-1)]))]),t("div",Ge,[t("div",Je,[t("div",Ke,[o(x).length>0?(n(),i("div",Qe,e[23]||(e[23]=[P('<ul class="lg:flex w-full justify-center text-center whitespace-nowrap uppercase" data-v-81eb9222><li class="border-r border-green-700 py-2 px-1 lg:w-6/12" data-v-81eb9222>Title</li><li class="border-r border-green-700 py-2 px-1 lg:w-40" data-v-81eb9222>Author</li><li class="border-r border-green-700 py-2 px-1 lg:w-44" data-v-81eb9222>Call Number</li><li class="border-r border-green-700 py-2 px-1 lg:w-32" data-v-81eb9222>Remaining Copies</li><li class="py-2 px-1 lg:w-52" data-v-81eb9222>Status</li></ul>',1)]))):b("",!0),o(x).length>0?(n(),i("div",We,[(n(!0),i(L,null,$(o(C).orderBy(o(x),"id","asc"),(l,g)=>(n(),i("ul",{class:I(["lg:flex w-full justify-center lg:text-center h-auto border-b border-gray-100 lg:py-0 py-5",g%2?"lg:bg-gray-100":""]),key:g},[t("li",Ze,[e[24]||(e[24]=t("span",{class:"font-bold lg:hidden"},"Title:",-1)),_(" "+v(l.title),1)]),t("li",et,[e[25]||(e[25]=t("span",{class:"font-bold lg:hidden"},"Author:",-1)),_(v(l.author),1)]),t("li",tt,[e[26]||(e[26]=t("span",{class:"font-bold lg:hidden"},"Call Number:",-1)),_(v(l.call_number),1)]),t("li",lt,[e[27]||(e[27]=t("span",{class:"font-bold lg:hidden"},"Number of Copies:",-1)),_(v(l.number_of_copies),1)]),l.number_of_copies>0?(n(),i("li",ot,[e[28]||(e[28]=t("span",{class:"bg-green-500 text-white font-bold px-2 py-1 lg:border-0 border-white border"},"Available",-1)),t("span",{onClick:c=>Q(l),class:"bg-yellow-500 text-white hover:bg-yellow-700 hover:white font-bold px-2 py-1 rounded-xl uppercase shadow-lg cursor-pointer text-[10px]"}," + Add to Lists ",8,st)])):b("",!0),l.number_of_copies===0?(n(),i("li",at,e[29]||(e[29]=[t("span",{class:"bg-red-500 text-white font-bold px-2 py-1 whitespace-nowrap border border-white"},"Not Available",-1)]))):b("",!0)],2))),128))])):b("",!0),o(x).length===0&&o(y)!==""&&o(z)?(n(),i("div",rt," No Results Found! ")):b("",!0)])])])])):b("",!0),o(a).books.length>0?(n(),i("div",it,[e[36]||(e[36]=t("div",null,[t("p",{class:"text-center mb-3 text-green-800 py-2 font-bold"}," Final Lists of Books to be Borrowed: ")],-1)),(n(!0),i(L,null,$(o(a).books,(l,g)=>(n(),i("div",{class:"lg:flex lg:shadow lg:p-5 gap-2 mb-3 relative",key:g},[t("div",nt,[e[30]||(e[30]=t("div",{class:"mr-2 lg:hidden block mt-1"},"Book",-1)),t("div",dt,v(g+1),1)]),t("div",ut,[e[31]||(e[31]=t("label",{class:"text-[10px] text-gray-800"}," Book Title ",-1)),m(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>l.book_title=c,placeholder:"book title",type:"text",required:""},null,8,bt),[[h,l.book_title]])]),t("div",mt,[e[32]||(e[32]=t("label",{class:"text-[10px] text-gray-800"}," Book Author ",-1)),m(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>l.book_author=c,placeholder:"book author",type:"text",required:""},null,8,pt),[[h,l.book_author]])]),t("div",gt,[e[33]||(e[33]=t("label",{class:"text-[10px] text-gray-800"}," Book Call Number ",-1)),m(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>l.book_call_number=c,placeholder:"book call number",type:"text",required:""},null,8,ct),[[h,l.book_call_number]])]),t("div",ft,[e[35]||(e[35]=t("div",{class:"mr-2 lg:hidden block"},"Remove",-1)),t("div",{class:"flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm",onClick:c=>Z(l)},e[34]||(e[34]=[t("i",{class:"fa fa-close"},null,-1)]),8,xt)])]))),128))])):b("",!0)]),o(V)?(n(),i("div",vt," Date and Time and other fields are required! ")):b("",!0),e[38]||(e[38]=t("div",{class:"mt-5 mb-3 w-fit lg:mx-auto mx-auto"},[t("button",{class:"hover:text-green-800 border border-green-800 text-white hover:bg-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center font-bold lg:mb-0 mb-5"},[_(" Submit "),t("i",{class:"fa fa-paper-plane","aria-hidden":"true"})])],-1))])],32)])])]),e[40]||(e[40]=t("div",null,null,-1)),e[41]||(e[41]=t("div",null,[t("div",{id:"fb-root"}),t("div",{id:"fb-customer-chat-library",class:"fb-customerchat"})],-1)),F(j)])}}},Nt=xe(ht,[["__scopeId","data-v-81eb9222"]]);export{Nt as default};
