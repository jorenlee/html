import{_ as ne}from"./BLJ17aN2.js";import{_ as ue}from"./DirbKhnx.js";import{e as me,u as pe,r as a,i as be,h as ce,c as r,b as F,a as e,t as A,q as ge,l as ve,f as o,k as h,F as Y,s as E,j as p,p as fe,m as w,x as N,d as y,o as i,y as xe,n as he}from"./BJD4BkOF.js";import{h as we}from"./C5S46NFB.js";import{_ as U}from"./5JjjnmY2.js";import{s as _e}from"./DYi_7lNG.js";import{X as ye}from"./3Y-mrisH.js";import{_ as ke}from"./DlAUqK2U.js";const Ce={class:"bg-gray-50"},Se={class:""},Ve={class:""},Te={class:"relative"},Be={class:"pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"},De={class:"font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"},Ne={class:"text-xs lg:mb-5 bg-white w-11/12 mx-auto lg:mt-5 shadow-xl rounded-xl"},Ue={class:""},je={class:"lg:w-fit w-auto mx-auto lg:flex lg:gap-20"},qe={class:"lg:w-fit mb-1"},ze={class:""},Le={class:"mx-auto w-fit"},Re={class:"mx-auto shadow lg:h-fit lg:my-auto border rounded-sm my-3"},Fe={class:"w-full rounded-md justify-center"},Ae={class:"grid lg:grid-cols-3 grid-cols-2"},Me=["value","id"],Pe=["value"],Ie=["for"],Oe={class:"lg:w-10/12 mx-auto lg:p-5"},He={class:"flex gap-2 lg:mb-3 lg:mt-0 mt-3"},Ye={class:"lg:w-fit w-[170px] lg:mb-0 mb-2"},Ee={key:0,class:"lg:w-3/12 w-full lg:mb-0 mb-2"},Je={class:"lg:flex gap-2 lg:mb-3"},Xe={class:"w-full lg:mb-0 mb-2"},Ge={class:"w-full lg:mb-0 mb-2"},$e={class:"w-full lg:mb-0 mb-2"},Ke={class:"shadow rounded-lg px-2 py-3"},Qe={class:"flex items-center"},We={class:"flex items-center lg:mr-3 mt-3 font-bold justify-center bg-green-900 text-white rounded-full h-8 w-8 py-2 px-2.5 text-sm mb-2"},Ze={class:"w-full lg:mb-0 mb-2"},et=["onUpdate:modelValue"],tt={class:"w-full lg:mb-0 mb-2"},lt=["onUpdate:modelValue"],at={class:"w-full lg:mb-0 mb-2"},ot=["onUpdate:modelValue"],st={key:0,class:"flex items-center lg:static absolute top-3 right-0"},rt=["onClick"],it={class:"lg:w-10/12 lg:mx-auto"},dt={key:0,class:"text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center"},nt={__name:"backup",async setup(ut){let k,M;const J=["LRC Book Thru","(lrc)","Book Thru"],X=me(),G=pe(),C=a(G.mainDevServer),P=([k,M]=be(()=>$fetch(C.value+"/api/library/schedule/booking/list/").catch(s=>s.data)),k=await k,M(),k),I=a(_e.timeSelection);let j=a([]);const $=a(new Date);let O=a(),n=a(),g=a(I._rawValue[0].time);ce(()=>{P.filter(function(s){j.value.push(s.date)})});let d=a(""),b=a(""),v=a(""),f=a(""),c=a(),u=a([]),S=a(),V=a(),q=a("pending"),T=a(),B=a("Jan 1, 2024"),_=a(0),K=a(""),Q=a(""),W=a(""),z=a(!1),L=a([]),x=a(),H=a(!1);const R=()=>{H.value=!0,b.value=""},Z=()=>{d.value==="Faculty"&&(_.value=20,R()),d.value==="Staff"&&(_.value=20,R()),d.value==="Student"&&(_.value=15,R()),u.value=[{book_title:null,book_author:null,book_call_number:null}]},ee=()=>{u.value.push({book_title:K.value,book_author:Q.value,book_call_number:W.value}),_.value--},te=s=>{u.value.length>1&&(U.pull(u.value,s),_.value++)},le=s=>{n.value=we(s).format("MM-DD-YYYY"),g.value=["-"],setTimeout(()=>{P.filter(function(t){t.date===n.value&&(O.value=t.id,x.value=t.time)})},100)},ae=async()=>{x.value.length===1&&(x.value=["-"]),U.pull(x.value,g.value),await $fetch(C.value+"/api/library/schedule/booking/"+O.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{date:n.value,time:x.value,updated_at:B.value}}).then(s=>{})},oe=()=>{se(),re()},se=async()=>{L.value=[],S.value=n.value,V.value=g.value,T.value=c.value,d.value===""&&b.value===""&&v.value===""&&f.value===""&&c.value===""&&u.value===""&&S.value===""&&V.value===""&&q.value===""&&T.value===""&&B.value===""&&L.value.push("Please fill in all fields."),L.value.length==0&&await $fetch(C.value+"/api/library/booking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{borrower_category:d.value,id_number:b.value,firstname:v.value,lastname:f.value,email:c.value,books:u.value,booking_date:S.value,booking_time:V.value,status:q.value,created_by_email:T.value,updated_at:B.value}}).then(s=>{s.status==="errors"?(z.value=!0,setTimeout(()=>{z.value=!1},1e4)):(ae(),X.push({path:"/library/LRCBookThru/ConfirmationPage"}))})},re=async()=>{await $fetch(C.value+"/api/library/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:{borrower_category:d.value,id_number:b.value,firstname:v.value,lastname:f.value,email:c.value,books:u.value,booking_date:S.value,booking_time:V.value,status:q.value,created_by_email:T.value,updated_at:B.value}}).then(s=>{})};return(s,t)=>{const ie=ne,de=ue;return i(),r("div",Ce,[F(ie),e("div",Se,[e("div",Ve,[e("div",Te,[t[9]||(t[9]=e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg",class:"align-top w-full h-auto lg:object-fill lg:block hidden"},null,-1)),t[10]||(t[10]=e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png",class:"align-top w-full h-36 object-none lg:hidden block"},null,-1)),e("div",Be,[e("h1",De,A(J[0]),1)]),t[11]||(t[11]=ge('<div class="pt-2.5 pb-3 shadow-lg" data-v-ce13993f><div class="w-11/12 mx-auto flex justify-between" data-v-ce13993f><ul class="flex lasalle-green-text capitalize text-xs" data-v-ce13993f><li data-v-ce13993f><a href="/" class="" data-v-ce13993f> Home </a></li><li class="flex items-center" data-v-ce13993f><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-ce13993f></i><a href="/library" class="mr-1 flex" data-v-ce13993f> Library </a></li><li class="flex items-center" data-v-ce13993f><i class="fas fa-caret-right mx-1.5 mt-0.5" data-v-ce13993f></i><a href="/library/LRCBookThru" class="mr-1 flex" data-v-ce13993f><span class="lg:flex hidden ml-1" data-v-ce13993f> LRC Book Thru</span><span class="lg:hidden flex" data-v-ce13993f> LRC Book Thru</span></a></li></ul></div></div>',1))])]),e("div",Ne,[e("div",Ue,[t[29]||(t[29]=e("div",{class:"bg-green-900 py-1 mt-4 lg:mb-10 mb-4 text-base font-medium text-white text-center uppercase tracking-tight"}," Book an Appointment ",-1)),e("form",{onSubmit:ve(oe,["prevent"]),class:"px-3"},[e("div",je,[e("div",qe,[e("div",ze,[t[12]||(t[12]=e("h1",{class:"font-bold lasalle-green-text text-xs text-center capitalize mb-3"}," Date ",-1)),e("div",Le,[F(o(ye),{modelValue:o(n),"onUpdate:modelValue":[t[0]||(t[0]=l=>h(n)?n.value=l:n=l),t[1]||(t[1]=l=>le(o(n)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:o(j),"year-range":[2025,2025],"disabled-week-days":[6,7,0],"week-start":"0","allowed-dates":o(j),"min-date":o($)},null,8,["modelValue","highlight","allowed-dates","min-date"])])])]),e("div",Re,[t[13]||(t[13]=e("h1",{class:"border-b-2 border-green-900 text-center font-bold text-green-900 lg:whitespace-nowrap capitalize pt-3 pb-3 mb-3"}," Time ",-1)),e("div",Fe,[e("ul",Ae,[(i(!0),r(Y,null,E(o(I)[0].time,(l,D)=>(i(),r("li",{class:"flex items-center mb-3 font-semibold whitespace-nowrap lg:w-[170px] lg:text-left text-center lg:pl-6 pl-3.5",key:D},[o(U).includes(o(x),l)?p((i(),r("input",{key:0,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":t[2]||(t[2]=m=>h(g)?g.value=m:g=m),id:l,required:""},null,8,Me)),[[xe,o(g)]]):(i(),r("input",{key:1,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5",disabled:""},null,8,Pe)),e("label",{for:l,class:he(["lg:text-xs text-[10px]",o(U).includes(o(x),l)?"text-[#087830] font-bold":" text-gray-400 font-light"])},A(l),11,Ie)]))),128))])])])]),e("div",Oe,[e("div",He,[e("div",Ye,[t[15]||(t[15]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Borrower Category ",-1)),p(e("select",{"onUpdate:modelValue":t[3]||(t[3]=l=>h(d)?d.value=l:d=l),name:"borrower_category",class:"shadow-md px-2 py-2 rounded-md w-full lg:border-2 border border-[#225c21] capitalize",required:"",onChange:t[4]||(t[4]=l=>Z())},t[14]||(t[14]=[e("option",{value:"",disabled:"",selected:"",hidden:""}," Select Borrower Category ",-1),e("option",{value:"Faculty"},"Faculty",-1),e("option",{value:"Staff"},"Staff",-1),e("option",{value:"Student"},"Student",-1)]),544),[[fe,o(d)]])]),o(H)?(i(),r("div",Ee,[t[16]||(t[16]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," ID Number ",-1)),p(e("input",{class:"shadow-md text-green-800 px-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":t[5]||(t[5]=l=>h(b)?b.value=l:b=l),placeholder:"ID Number",type:"text",required:""},null,512),[[w,o(b)]])])):N("",!0)]),e("div",Je,[e("div",Xe,[t[17]||(t[17]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," First Name ",-1)),p(e("input",{class:"shadow-md text-xs text-green-800 px-2 py-2 rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":t[6]||(t[6]=l=>h(v)?v.value=l:v=l),placeholder:"first Name",type:"text",required:""},null,512),[[w,o(v)]])]),e("div",Ge,[t[18]||(t[18]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Last Name ",-1)),p(e("input",{class:"shadow-md text-xs text-green-800 px-2 py-2 rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":t[7]||(t[7]=l=>h(f)?f.value=l:f=l),placeholder:"last Name",type:"text",required:""},null,512),[[w,o(f)]])]),e("div",$e,[t[19]||(t[19]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Email ",-1)),p(e("input",{class:"shadow-md text-xs text-green-800 px-2 py-2 rounded-md w-full lg:border-2 border border-[#225c21]","onUpdate:modelValue":t[8]||(t[8]=l=>h(c)?c.value=l:c=l),placeholder:"Email",type:"email",required:""},null,512),[[w,o(c)]])])]),e("div",Ke,[t[27]||(t[27]=e("div",{class:"text-green-900 text-sm text-center lg:mb-3 px-3"},[y(" Open this link "),e("a",{class:"font-bold cursor-pointer",target:"_blank",href:"http://203.177.51.122:443/common/servlet/presenthomeform.do?l2m=Home&tm=Home"}," OPAC "),y(" for the available resources and copy the book details in the input boxes "),e("span",{class:""}," (please select first the borrower category above)"),y(". ")],-1)),(i(!0),r(Y,null,E(o(u),(l,D)=>(i(),r("div",{class:"lg:flex lg:shadow lg:p-5 gap-2 mb-3 relative",key:D},[e("div",Qe,[t[20]||(t[20]=e("div",{class:"mr-2 lg:hidden block mt-1"},"Book",-1)),e("div",We,A(D+1),1)]),e("div",Ze,[t[21]||(t[21]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Book Title ",-1)),p(e("input",{class:"shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":m=>l.book_title=m,placeholder:"book title",type:"text",required:""},null,8,et),[[w,l.book_title]])]),e("div",tt,[t[22]||(t[22]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Book Author ",-1)),p(e("input",{class:"shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":m=>l.book_author=m,placeholder:"book author",type:"text",required:""},null,8,lt),[[w,l.book_author]])]),e("div",at,[t[23]||(t[23]=e("label",{class:"text-[10px] text-gray-300 lg:block hidden"}," Book Call Number ",-1)),p(e("input",{class:"shadow-md px-2 py-2 text-xs rounded-md w-full lg:border-2 border border-[#225c21] capitalize","onUpdate:modelValue":m=>l.book_call_number=m,placeholder:"book call number",type:"text",required:""},null,8,ot),[[w,l.book_call_number]])]),o(u).length>1?(i(),r("div",st,[t[25]||(t[25]=e("div",{class:"mr-2 lg:hidden block"},"Remove",-1)),e("div",{class:"flex items-center lg:ml-5 lg:mt-5 justify-center hover:bg-white bg-red-900 border border-red-900 hover:text-red-900 text-white rounded-full h-8 w-8 pt-2 pb-1.5 px-2.5 text-sm",onClick:m=>te(l)},t[24]||(t[24]=[e("i",{class:"fa fa-close"},null,-1)]),8,rt)])):N("",!0)]))),128)),e("div",it,[o(_)>1?(i(),r("button",{key:0,class:"hover:text-[#f4ca16] border border-[#f4ca16] text-white cursor-pointer w-fit mb-3 hover:bg-white bg-[#f4ca16] font-bold uppercase text-xs rounded-md px-3 py-2 text-center lg:-ml-2",onClick:ee},t[26]||(t[26]=[e("i",{class:"fa fa-plus mr-1"},null,-1),y(" Add Book ")]))):N("",!0)])]),o(z)?(i(),r("div",dt," Date and Time and other fields are required! ")):N("",!0),t[28]||(t[28]=e("div",{class:"mt-5 mb-3 w-fit lg:mx-auto mr-0 ml-auto"},[e("button",{class:"hover:text-green-800 border border-green-800 text-white hover:bg-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center font-bold lg:mb-0 mb-5"},[y(" Submit "),e("i",{class:"fa fa-paper-plane","aria-hidden":"true"})])],-1))])],32)])])]),t[30]||(t[30]=e("div",null,null,-1)),t[31]||(t[31]=e("div",null,[e("div",{id:"fb-root"}),e("div",{id:"fb-customer-chat-library",class:"fb-customerchat"})],-1)),F(de)])}}},ht=ke(nt,[["__scopeId","data-v-ce13993f"]]);export{ht as default};
