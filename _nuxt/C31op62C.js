import{_ as ie}from"./CknhQX1W.js";import{_ as ne}from"./vT--njmT.js";import{e as de,u as ue,r,s as P,g as me,c as i,b as L,a as t,i as H,t as h,x as pe,f as l,F as A,l as $,k as m,h as p,p as ge,m as _,d as f,j as I,o as n,N as be,n as O}from"./uy1oxFq_.js";import{s as ce}from"./DKACnJIE.js";import{X as fe}from"./v_nm0HpS.js";import{h as D}from"./C5S46NFB.js";import{_ as C}from"./5JjjnmY2.js";import{_ as xe}from"./DlAUqK2U.js";const ve={class:"bg-gray-50"},he={class:""},_e={class:""},ye={class:"relative"},we={class:"pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"},ke={class:"font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"},Ce={class:"text-xs lg:mb-5 bg-white w-11/12 mx-auto lg:mt-5 shadow-xl rounded-xl"},Te={class:""},Be={class:"lg:w-fit w-auto mx-auto lg:flex lg:gap-20"},De={class:"lg:w-fit mb-1"},Se={class:""},Ve={class:"mx-auto w-fit"},Ne={class:"mx-auto shadow lg:h-fit lg:my-auto border rounded-sm my-3"},Ue={class:"w-full rounded-md justify-center"},je={class:"grid lg:grid-cols-3 grid-cols-2 pr-6"},Fe=["value","id"],Le=["value"],Ae=["for"],$e={class:"lg:w-11/12 mx-auto lg:p-5"},Re={class:"lg:flex gap-2 lg:mb-3 lg:mt-0 mt-3"},qe={class:"flex lg:w-9/12 mx-auto gap-2"},ze={class:"lg:w-fit w-full mx-auto lg:mb-0 mb-2"},Me={key:0,class:"w-full lg:mb-0 mb-2"},Ye={key:0,class:"flex lg:w-full gap-2"},Pe={class:"w-full lg:mb-0 mb-2"},He={class:"w-full lg:mb-0 mb-2"},Ie={key:1,class:"lg:w-10/12 w-full lg:mb-0 mb-2"},Oe={class:"lg:shadow lg:rounded-lg lg:px-2 lg:py-3 lg:mt-0 mt-5"},Ee={key:0},Xe={class:"lg:w-6/12 mx-auto lg:my-5 flex"},Ge={class:"lg:mb-10 mb-3 lg:bg-white bg-green-700 lg:text-black text-white shadow-xl"},Je={class:"appointment-lists shadow mx-auto text-xs"},Ke={class:""},Qe={key:0,class:"header w-full bg-green-800 text-white lg:flex hidden items-center"},We={key:1,class:"w-full rows"},Ze={class:"px-2 lg:w-6/12 lg:flex items-center justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-2 lg:gap-0 gap-5"},et={class:"px-2 lg:w-40 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5"},tt={class:"px-2 lg:w-44 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:gap-0 gap-5"},lt={class:"px-2 lg:w-32 flex items-center lg:justify-evenly lg:border-r border-gray-200 lg:h-10 lg:mb-0 mb-5 lg:gap-0 gap-5"},ot={key:0,class:"px-2 lg:w-52 lg:h-10 flex items-center justify-center gap-3"},at=["onClick"],st={key:1,class:"px-2 lg:w-52 lg:h-10 lg:mb-0 mb-3 flex items-center justify-center"},rt={key:2,class:"italic text-gray-400 text-center p-1"},it={key:1,class:"shadow-lg p-2 lg:border-0 border-t"},nt={class:"flex items-center"},dt={class:"flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2"},ut={class:"w-full lg:mb-0 mb-2"},mt=["onUpdate:modelValue"],pt={class:"lg:w-6/12 lg:mb-0 mb-2"},gt=["onUpdate:modelValue"],bt={class:"lg:w-4/12 lg:mb-0 mb-2"},ct=["onUpdate:modelValue"],ft={class:"flex items-center lg:static absolute top-3 right-0"},xt=["onClick"],vt={key:0,class:"lg:w-10/12 lg:mx-auto"},ht={key:0,class:"text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center"},_t={__name:"index",async setup(yt){let x,T;const E=de(),X=ue(),g=r(X.mainDevServer),G=["LRC Book Thru","(lrc)","Book Thru"],J=r(ce.timeSelection),R=([x,T]=P(()=>$fetch(g.value+"/api/library/schedule/booking/list/").catch(a=>a.data)),x=await x,T(),x),y=r("");let S=r([]);const K=r(new Date);let Q=r(D(new Date).format("HH:MM")),q=r(),w=r(0),V=r(!1);r([]);let N=r([]);const k=r();r(),r(!1);const d=r({date:"",time:"",updated_at:new Date}),s=r({borrower_category:"",id_number:"",firstname:"",lastname:"",email:"",books:[],booking_date:"",booking_time:"",status:"pending",created_by_email:"",updated_at:new Date});me(()=>{R.filter(function(a){S.value.push(a.date)})});let B=r(!1);r(null),r(null);const z=async a=>{console.log("select one obj",a),a.number_of_copies&&a.number_of_copies--,s.value.books.push({book_title:a.title,book_author:a.author,book_call_number:a.call_number}),w.value--,W(a),v.value=[],y.value=""};let M=([x,T]=P(()=>$fetch(g.value+"/api/library/reports/book/list/").catch(a=>a.data)),x=await x,T(),x||0),U=r(!1),v=r([]),Y=()=>{U.value=!0,setTimeout(()=>{U.value=!1},2e3),y.value.toLowerCase()!==""?v.value=M.filter(function(a){return a.title.toLowerCase().includes(y.value)}):v.value=0};const W=async a=>{let e=await $fetch(g.value+"/api/library/reports/book/"+a.id+"/").catch(u=>u.data)||0;e.number_of_copies--,console.log(e),await $fetch(g.value+"/api/library/reports/book/edit/"+a.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:e}).then(u=>{console.log(u)})},Z=a=>{M.filter(function(e){e.call_number===a.book_call_number&&(e.number_of_copies++,ee(e),console.log(e.number_of_copies)),s.value.books.length>2&&(C.pull(s.value.books,a),w.value++,v.value=[])})},ee=async a=>{let e=await $fetch(g.value+"/api/library/reports/book/"+a.id+"/").catch(u=>u.data)||0;e.number_of_copies++,console.log(e),await $fetch(g.value+"/api/library/reports/book/edit/"+a.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:e}).then(u=>{console.log(u)})},j=()=>{B.value=!0,s.value.id_number=""},te=()=>{s.value.borrower_category==="Faculty"&&(w.value=20,j()),s.value.borrower_category==="Staff"&&(w.value=20,j()),s.value.borrower_category==="Student"&&(w.value=15,j()),s.value.books=[{book_title:null,book_author:null,book_call_number:null}]},le=a=>{d.value.date=D(a).format("MM-DD-YYYY");let e=D(D().toDate()).format("MM-DD-YYYY");d.value.time=["-"],setTimeout(()=>{R.filter(function(u){u.date===d.value.date&&(q.value=u.id,d.value.time=u.time),u.date===e&&u.date===d.value.date&&(d.value.time=u.time.filter(F=>Q.value.slice(0,2)<F.range_from_time.slice(0,2)))})},100)},oe=async()=>{d.value.time.length===1?N.value=[{range_from_time:"",range_to_time:"",_12_hour_format_from:"",_12_hour_format_to:""}]:N.value=C.filter(d.value.time,function(a){return a.range_from_time!==k.value.range_from_time&&a.range_to_time!==k.value.range_to_time}),await $fetch(g.value+"/api/library/schedule/booking/"+q.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{date:d.value.date,time:N.value,updated_at:d.value.updated_at}}).then(a=>{})},ae=()=>{se(),re()},se=async()=>{s.value.booking_date=d.value.date,s.value.booking_time=k.value._12_hour_format_from+" - "+k.value._12_hour_format_to,s.value.created_by_email=s.value.email,await $fetch(g.value+"/api/library/booking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(a=>{a.status==="errors"?(V.value=!0,setTimeout(()=>{V.value=!1},1e4)):(oe(),E.push({path:"/library/LRCBookThru/ConfirmationPage"}))})},re=async()=>{await $fetch(g.value+"/api/library/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(a=>{})};return(a,e)=>{const u=ie,F=ne;return n(),i("div",ve,[L(u),t("div",he,[t("div",_e,[t("div",ye,[e[11]||(e[11]=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg",class:"align-top w-full h-auto lg:object-fill lg:block hidden"},null,-1)),e[12]||(e[12]=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png",class:"align-top w-full h-36 object-none lg:hidden block"},null,-1)),t("div",we,[t("h1",ke,h(G[0]),1)]),e[13]||(e[13]=H('<div class="pt-2.5 pb-3 shadow-lg" data-v-8a90f42e><div class="w-11/12 mx-auto flex justify-between" data-v-8a90f42e><ul class="flex lasalle-green-text capitalize text-xs" data-v-8a90f42e><li data-v-8a90f42e><a href="/" class="" data-v-8a90f42e> Home </a></li><li class="flex items-center" data-v-8a90f42e><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-8a90f42e></i><a href="/library" class="mr-1 flex" data-v-8a90f42e> Library </a></li><li class="flex items-center" data-v-8a90f42e><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-8a90f42e></i><a href="/library/LRCBookThru" class="mr-1 flex" data-v-8a90f42e><span class="lg:flex hidden ml-1" data-v-8a90f42e> LRC Book Thru</span><span class="lg:hidden flex" data-v-8a90f42e> LRC Book Thru</span></a></li></ul></div></div>',1))])]),t("div",Ce,[t("div",Te,[e[40]||(e[40]=t("div",{class:"bg-green-900 py-1 mt-4 lg:mb-10 mb-4 text-base font-medium text-white text-center uppercase tracking-tight"}," Book an Appointment ",-1)),t("form",{onSubmit:pe(ae,["prevent"]),class:"px-3"},[t("div",Be,[t("div",De,[t("div",Se,[e[14]||(e[14]=t("h1",{class:"font-bold lasalle-green-text text-xs text-center capitalize mb-3"}," Date ",-1)),t("div",Ve,[L(l(fe),{modelValue:l(d).date,"onUpdate:modelValue":[e[0]||(e[0]=o=>l(d).date=o),e[1]||(e[1]=o=>le(l(d).date))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:l(S),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","allowed-dates":l(S),"min-date":l(K)},null,8,["modelValue","highlight","allowed-dates","min-date"])])])]),t("div",Ne,[e[15]||(e[15]=t("h1",{class:"border-b-2 border-green-900 text-center font-bold text-green-900 lg:whitespace-nowrap capitalize pt-3 pb-3 mb-3"}," Time ",-1)),t("div",Ue,[t("ul",je,[(n(!0),i(A,null,$(l(J)[0].time,(o,b)=>(n(),i("li",{class:"flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5",key:b},[l(C).find(l(d).time,o)?p((n(),i("input",{key:0,type:"radio",name:"time",value:o,class:"mr-2 mt-0.5","onUpdate:modelValue":e[2]||(e[2]=c=>I(k)?k.value=c:null),id:b,required:""},null,8,Fe)),[[be,l(k)]]):(n(),i("input",{key:1,type:"radio",name:"time",value:o,class:"mr-2 mt-0.5",disabled:""},null,8,Le)),t("label",{for:b,class:O(["lg:text-xs text-[10px]",l(C).find(l(d).time,o)?"text-[#087830] font-bold":" text-gray-400 font-light"])},h(o._12_hour_format_from)+" - "+h(o._12_hour_format_to),11,Ae)]))),128))])])])]),t("div",$e,[t("div",Re,[t("div",qe,[t("div",ze,[e[17]||(e[17]=t("label",{class:"text-[10px] text-gray-800"}," Borrower Category ",-1)),p(t("select",{"onUpdate:modelValue":e[3]||(e[3]=o=>l(s).borrower_category=o),name:"borrower_category",class:"shadow-lg pl-2 pr-3 pt-2 pb-[6.5px] w-full border-b-2 border-green-800 capitalize",required:"",onChange:e[4]||(e[4]=o=>te())},e[16]||(e[16]=[t("option",{value:"",disabled:"",selected:"",hidden:""}," Select Borrower Category ",-1),t("option",{value:"Faculty"},"Faculty",-1),t("option",{value:"Staff"},"Staff",-1),t("option",{value:"Student"},"Student",-1)]),544),[[ge,l(s).borrower_category]])]),l(B)?(n(),i("div",Me,[e[18]||(e[18]=t("label",{class:"text-[10px] text-gray-800"}," ID Number ",-1)),p(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[5]||(e[5]=o=>l(s).id_number=o),placeholder:"ID Number",type:"text",required:""},null,512),[[_,l(s).id_number]])])):m("",!0)]),l(B)?(n(),i("div",Ye,[t("div",Pe,[e[19]||(e[19]=t("label",{class:"text-[10px] text-gray-800"}," First Name ",-1)),p(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[6]||(e[6]=o=>l(s).firstname=o),placeholder:"first Name",type:"text",required:""},null,512),[[_,l(s).firstname]])]),t("div",He,[e[20]||(e[20]=t("label",{class:"text-[10px] text-gray-800"}," Last Name ",-1)),p(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800 capitalize","onUpdate:modelValue":e[7]||(e[7]=o=>l(s).lastname=o),placeholder:"last Name",type:"text",required:""},null,512),[[_,l(s).lastname]])])])):m("",!0),l(B)?(n(),i("div",Ie,[e[21]||(e[21]=t("label",{class:"text-[10px] text-gray-800"}," Email ",-1)),p(t("input",{class:"shadow-lg text-xs px-2 py-2 w-full border-b-2 border-green-800","onUpdate:modelValue":e[8]||(e[8]=o=>l(s).email=o),placeholder:"Email",type:"email",required:""},null,512),[[_,l(s).email]])])):m("",!0)]),t("div",Oe,[e[38]||(e[38]=t("div",{class:"text-green-900 text-sm text-center lg:mb-3 tracking-tight"},[f(" Open this link "),t("a",{class:"font-bold cursor-pointer",target:"_blank",href:"https://lsu-opac.follettdestiny.com"}," OPAC "),f(" for the available resources and copy the book details in the input boxes "),t("span",{class:""}," (please select first the borrower category above)"),f(". ")],-1)),l(w)>0?(n(),i("div",Ee,[t("div",Xe,[p(t("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>I(y)?y.value=o:null),placeholder:"Search for a Book Title ... ",class:"shadow-xl text-xs text-green-800 px-2 py-1 w-full lg:border-b-4 border-2 lg:border-b-[#225c21] border-[#225c21] lg:mb-0 mb-3"},null,512),[[_,l(y)]]),t("span",{onClick:e[10]||(e[10]=(...o)=>l(Y)&&l(Y)(...o)),class:"bg-green-800 hover:bg-white hover:text-green-800 text-white px-3.5 h-full lg:py-1 py-[3px] lg:mt-0 cursor-pointer border-green-800 border"},e[22]||(e[22]=[t("i",{class:"fa fa-search text-lg"},null,-1)]))]),t("div",Ge,[t("div",Je,[t("div",Ke,[l(v).length>0?(n(),i("div",Qe,e[23]||(e[23]=[H('<ul class="lg:flex w-full justify-center text-center whitespace-nowrap uppercase" data-v-8a90f42e><li class="border-r border-green-700 py-2 px-1 lg:w-6/12" data-v-8a90f42e>Title</li><li class="border-r border-green-700 py-2 px-1 lg:w-40" data-v-8a90f42e>Author</li><li class="border-r border-green-700 py-2 px-1 lg:w-44" data-v-8a90f42e>Call Number</li><li class="border-r border-green-700 py-2 px-1 lg:w-32" data-v-8a90f42e>Remaining Copies</li><li class="py-2 px-1 lg:w-52" data-v-8a90f42e>Status</li></ul>',1)]))):m("",!0),l(v).length>0?(n(),i("div",We,[(n(!0),i(A,null,$(l(C).orderBy(l(v),"id","asc"),(o,b)=>(n(),i("ul",{class:O(["lg:flex w-full justify-center lg:text-center h-auto border-b border-gray-100 lg:py-0 py-5",b%2?"lg:bg-gray-100":""]),key:b},[t("li",Ze,[e[24]||(e[24]=t("span",{class:"font-bold lg:hidden"},"Title:",-1)),f(" "+h(o.title),1)]),t("li",et,[e[25]||(e[25]=t("span",{class:"font-bold lg:hidden"},"Author:",-1)),f(h(o.author),1)]),t("li",tt,[e[26]||(e[26]=t("span",{class:"font-bold lg:hidden"},"Call Number:",-1)),f(h(o.call_number),1)]),t("li",lt,[e[27]||(e[27]=t("span",{class:"font-bold lg:hidden"},"Number of Copies:",-1)),f(h(o.number_of_copies),1)]),o.number_of_copies>0?(n(),i("li",ot,[e[28]||(e[28]=t("span",{class:"bg-green-500 text-white font-bold px-2 py-1 lg:border-0 border-white border"},"Available",-1)),t("span",{onClick:c=>z(o),class:"bg-yellow-500 text-white hover:bg-yellow-700 hover:white font-bold px-2 py-1 rounded-xl uppercase shadow-lg cursor-pointer text-[10px]"}," + Add to Lists ",8,at)])):m("",!0),o.number_of_copies===0?(n(),i("li",st,e[29]||(e[29]=[t("span",{class:"bg-red-500 text-white font-bold px-2 py-1 whitespace-nowrap border border-white"},"Not Available",-1)]))):m("",!0)],2))),128))])):m("",!0),l(v).length===0&&l(y)!==""&&l(U)?(n(),i("div",rt," No Results Found! ")):m("",!0)])])])])):m("",!0),l(s).books.length>0?(n(),i("div",it,[e[37]||(e[37]=t("div",null,[t("p",{class:"text-center mb-3 text-green-800 py-2 font-bold"}," Final Lists of Books to be Borrowed: ")],-1)),(n(!0),i(A,null,$(l(s).books,(o,b)=>(n(),i("div",{class:"lg:flex lg:shadow lg:p-5 gap-2 mb-3 relative",key:b},[t("div",nt,[e[30]||(e[30]=t("div",{class:"mr-2 lg:hidden block mt-1"},"Book",-1)),t("div",dt,h(b+1),1)]),t("div",ut,[e[31]||(e[31]=t("label",{class:"text-[10px] text-gray-800"}," Book Title ",-1)),p(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>o.book_title=c,placeholder:"book title",type:"text",required:""},null,8,mt),[[_,o.book_title]])]),t("div",pt,[e[32]||(e[32]=t("label",{class:"text-[10px] text-gray-800"}," Book Author ",-1)),p(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>o.book_author=c,placeholder:"book author",type:"text",required:""},null,8,gt),[[_,o.book_author]])]),t("div",bt,[e[33]||(e[33]=t("label",{class:"text-[10px] text-gray-800"}," Book Call Number ",-1)),p(t("input",{class:"shadow-lg px-2 py-2 text-xs w-full border-b-2 border-[#225c21] capitalize","onUpdate:modelValue":c=>o.book_call_number=c,placeholder:"book call number",type:"text",required:""},null,8,ct),[[_,o.book_call_number]])]),t("div",ft,[e[35]||(e[35]=t("div",{class:"mr-2 lg:hidden block"},"Remove",-1)),t("div",{class:"flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm",onClick:c=>Z(o)},e[34]||(e[34]=[t("i",{class:"fa fa-close"},null,-1)]),8,xt)])]))),128)),l(w)>0?(n(),i("div",vt,[t("div",{class:"hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2",onClick:z},e[36]||(e[36]=[t("i",{class:"fa fa-plus mr-1"},null,-1),f(" Add Book ")]))])):m("",!0)])):m("",!0)]),l(V)?(n(),i("div",ht," Date and Time and other fields are required! ")):m("",!0),e[39]||(e[39]=t("div",{class:"mt-5 mb-3 w-fit lg:mx-auto mx-auto"},[t("button",{class:"hover:text-green-800 border border-green-800 text-white hover:bg-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center font-bold lg:mb-0 mb-5"},[f(" Submit "),t("i",{class:"fa fa-paper-plane","aria-hidden":"true"})])],-1))])],32)])])]),e[41]||(e[41]=t("div",null,null,-1)),e[42]||(e[42]=t("div",null,[t("div",{id:"fb-root"}),t("div",{id:"fb-customer-chat-library",class:"fb-customerchat"})],-1)),L(F)])}}},Nt=xe(_t,[["__scopeId","data-v-8a90f42e"]]);export{Nt as default};
