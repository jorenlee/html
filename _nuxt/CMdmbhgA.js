import{_ as q}from"./CpQY5hjE.js";import{u as M,g as P,r as c,q as Y,h as G,B as H,c as l,a as e,t as h,f as o,F as b,s as w,i as J,v as K,d as S,z as p,b as Q,x as W,o as a,n as C,p as X,e as Z}from"./zp95O9kB.js";import"./Bd-anoa3.js";/* empty css        */import"./C5S46NFB.js";import{_ as ee}from"./vUEbHlag.js";import{_ as te}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const i=y=>(X("data-v-db14f0ab"),y=y(),Z(),y),se={class:""},le={class:"flex min-h-screen"},ae={class:"w-full"},oe={class:"bg-green-800"},ie={class:"lg:flex mx-auto justify-between py-2"},re={class:"lg:flex items-center text-white gap-5"},ne=i(()=>e("div",{class:"lg:p-0 pt-1 pb-3 mx-3.5"},[e("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),ue={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},de=i(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ce={class:"text-sm pt-1"},he=i(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ge=i(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),pe=[he,ge],me={class:"px-3 pt-5"},_e={class:"lg:flex items-center mb-5"},xe={class:"w-full"},fe={class:"text-xs mr-4 lg:mb-0 mb-2 block lg:flex font-bold text-green-900"},ve=i(()=>e("div",{class:"w-full flex items-center lg:mt-0 mt-5"},[e("input",{type:"text",class:"shadow-lg search capitalize w-full border border-b-4 border-green-800 rounded-sm h-8",value:"",placeholder:"Search"})],-1)),be={class:""},we={class:"w-full"},ye={class:""},ke={class:"shadow mx-auto text-xs"},Ce={class:""},Se=W('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-db14f0ab><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-db14f0ab><li class="lg:w-2/12" data-v-db14f0ab>Tracking ID</li><li class="lg:w-2/12" data-v-db14f0ab>LSU ID</li><li class="text-center lg:w-7/12" data-v-db14f0ab>Status</li><li class="px-1 lg:w-1/12" data-v-db14f0ab>Action</li></ul></div>',1),De={key:0,class:"w-full"},ze={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-2/12 uppercase"},Le={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase"},Ae={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},Be={class:"flex lg:items-center lg:h-fit h-0 lg:w-full w-3/12 lg:ml-4 relative"},Ie={class:"lg:flex hidden"},Ne={class:"lg:hidden flex pl-7"},Te={key:0},Fe=i(()=>e("i",{class:"fa fa-address-card"},null,-1)),Ve=[Fe],je={key:1},Ee=i(()=>e("i",{class:"fa fa-calendar-check"},null,-1)),$e=[Ee],Oe={key:2},Re=i(()=>e("i",{class:"fa fa-money-bill-alt"},null,-1)),Ue=[Re],qe={key:3},Me=i(()=>e("i",{class:"fa fa-star"},null,-1)),Pe=[Me],Ye=i(()=>e("li",{class:"flex justify-center font-bold text-xs text-green-800 lg:w-2/12 text-center"},[e("div",{class:"py-1 w-fit whitespace-nowrap text-center"},[S(" Filters - Available at 3 a.m. "),e("br"),S(" Testing in Progress ")])],-1)),Ge={key:0,class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},He={class:"w-fit px-1 flex gap-5"},Je={class:""},Ke=["onClick"],Qe=i(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),We=[Qe],Xe={key:0,class:""},Ze=["onClick"],et=i(()=>e("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),tt=[et],st={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},lt=i(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),at={key:1,class:"itallic text-gray-400 text-center p-1"},ot={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg my-5"},it=i(()=>e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1)),rt={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},nt=["onClick"],ut=i(()=>e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)),dt={__name:"index",async setup(y){let k,D;const x=M(),t=P(),z=c(t.mainDevServer),L=([k,D]=Y(()=>$fetch(z.value+"/api/admissions/list/").catch(n=>n.data)),k=await k,D(),k);let m=c(0);G(()=>{t.user.isAuthenticated&&(t.user.email==="saodirector@lsu.edu.ph"||t.user.email==="ascdirector@lsu.edu.ph"||t.user.email==="admissions@lsu.edu.ph"||t.user.email==="scholarships@lsu.edu.ph"||t.user.email==="katerijunine.tabernero@lsu.edu.ph"||t.user.email==="sherryl.origenes@lsu.edu.ph"||t.user.email==="lourdes.niebla@lsu.edu.ph"||t.user.email==="lindakj11196@gmail.com"||t.user.email==="jorenleeluna24@gmail.com"||t.user.email==="jayharold.reazol@lsu.edu.ph"||t.user.email==="lowelle.pacot@lsu.edu.ph"||t.user.email==="jennifer.aguanta@lsu.edu.ph"||t.user.email==="jaysavelle.tubigon@lsu.edu.ph"||t.user.email==="anilou.dilao@lsu.edu.ph"||t.user.email==="marvel.deromol@lsu.edu.ph"||t.user.email==="nizel.apas@lsu.edu.ph"||t.user.email==="noel.alamin@lsu.edu.ph"||t.user.email==="estephanie.zamora@lsu.edu.ph"||t.user.email==="arlene.apao@lsu.edu.ph"||t.user.email==="ramel.recentes@lsu.edu.ph"||t.user.email==="markkrisli.delapena@lsu.edu.ph"||t.user.email==="grace.dolloso@lsu.edu.ph"||t.user.email==="ladyvi.tagailo@lsu.edu.ph"||t.user.email==="earl.gangoso@lsu.edu.ph"||t.user.email==="honimar.panganiban@lsu.edu.ph"||t.user.email==="olaira.imbong@lsu.edu.ph"||t.user.email==="emma.suana@lsu.edu.ph"||t.user.email==="jenel.cruz@lsu.edu.ph"||t.user.email==="johnmark.saldivar@lsu.edu.ph"||t.user.email==="joed.layna@lsu.edu.ph"||t.user.email==="karen.linganay@lsu.edu.ph"||t.user.email==="cheryl.osorio@lsu.edu.ph"||t.user.email==="cte.registrar@lsu.edu.ph"||t.user.email==="onlinerequest@lsu.edu.ph"||t.user.email==="ccsea.registrar@lsu.edu.ph"||t.user.email==="cba.registrar@lsu.edu.ph"||t.user.email==="patrick.obut@lsu.edu.ph"||t.user.email==="maryeloise.pilvera@lsu.edu.ph")?(x.push("/enrollment/admin/dashboard"),console.log("enrollees",L),m.value=L||0,B=Math.ceil(m._rawValue.length/u.value),I=m._rawValue.length):x.push("/_/unauthorized")});const g=c(10),u=c(10),_=c(0);let A=c(),B,I,f=c(!1),T=H(()=>m.value.slice(_.value,u.value));const F=()=>{_.value>0&&(_.value-=g.value,u.value-=g.value,console.log("prev"))},V=()=>{u.value<I&&(_.value+=g.value,u.value+=g.value,console.log("next"))},j=n=>{_.value=0,u.value=g.value,n>1&&(u.value*=n,_.value=u.value-g.value)},E=n=>{x.push("/enrollment/admin/dashboard/update-student/"+n)},$=c([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),O=()=>{x.push("/enrollment"),t.removeToken()},N=n=>{f.value=!f.value,A.value=n},R=async()=>{await $fetch(z.value+"/api/admissions/"+A.value+"/delete/",{method:"DELETE",headers:{Authorization:t.user.token,"Content-Type":"application/json"}}).then(async n=>{x.go(),f.value=!f.value})};return(n,ct)=>{const U=q;return a(),l("div",se,[e("div",le,[e("div",ae,[e("div",oe,[e("div",ie,[e("div",re,[ne,e("div",ue,[de,e("h1",ce,h(o(t).user.email),1)])]),e("button",{onClick:O,class:"flex hover:font-bold pt-3 lg:static absolute top-2 right-2 lg:pt-1.5"},pe)])]),e("div",me,[e("div",_e,[e("div",xe,[(a(!0),l(b,null,w($.value,(r,v)=>(a(),l("div",{class:"lg:flex items-center block lg:text-left text-center",key:v},[e("label",fe,h(r.category_title)+" : ",1),(a(!0),l(b,null,w(r.list,(s,d)=>(a(),l("button",{key:d,class:"bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs"},h(s),1))),128))]))),128))]),ve]),e("div",be,[e("div",we,[e("div",ye,[e("div",ke,[e("div",Ce,[Se,o(m).length>0?(a(),l("div",De,[(a(!0),l(b,null,w(o(ee).orderBy(o(T),"created_at","asc"),(r,v)=>(a(),l("ul",{class:"lg:flex w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative",key:v},[e("li",ze,h(r.tracking_id),1),e("li",Le,h(r.student_lsu_id_number),1),e("li",Ae,[(a(!0),l(b,null,w(r.enrollment_tracking_status,(s,d)=>(a(),l("div",{class:"relative w-full lg:py-2 py-1 block",key:d},[e("div",Be,[e("p",{class:C(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[s.status==="yes"?"bg-green-900":""],[s.status==="ongoing"?"bg-blue-700":""],[s.status==="no"?"bg-gray-300":""],[s.status===""?"bg-gray-300":""],[d===3?"ml-0":""]])},h(d+1),3),e("div",{class:C(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[d===3?"hidden":"lg:w-full w-5"],[s.status==="yes"?"bg-green-900":""],[s.status==="no"?"bg-gray-300":""],[s.status===""?"bg-gray-300":""],[s.status==="ongoing"?"bg-blue-700":""]])},null,2)]),e("div",{class:C(["lg:static lg:text-center lg:w-auto w-full",""])},[e("p",{class:C(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[s.status==="yes"?" lg:bg-white bg-green-800 text-white lg:text-black":""],[s.status==="no"?"text-gray-300":""],[s.status===""?"lg:bg-transparent bg-gray-300 lg:text-gray-300 text-white":""],[s.status==="ongoing"?"text-white bg-blue-700":""],[d===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[e("div",Ie,[e("span",null,h(s.track_name),1)]),e("div",Ne,[s.track_name==="admissions"?(a(),l("span",Te,Ve)):p("",!0),s.track_name==="advising"?(a(),l("span",je,$e)):p("",!0),s.track_name==="accounting"?(a(),l("span",Oe,Ue)):p("",!0),s.track_name==="evaluation"?(a(),l("span",qe,Pe)):p("",!0)])],2)],2)]))),128))]),Ye,o(t).user.email==="saodirector@lsu.edu.ph"||o(t).user.email==="ascdirector@lsu.edu.ph"||o(t).user.email==="admissions@lsu.edu.ph"||o(t).user.email==="scholarships@lsu.edu.ph"||o(t).user.email==="katerijunine.tabernero@lsu.edu.ph"||o(t).user.email==="sherryl.origenes@lsu.edu.ph"||o(t).user.email==="lourdes.niebla@lsu.edu.ph"||o(t).user.email==="jorenleeluna24@gmail.com"||o(t).user.email==="jayharold.reazol@lsu.edu.ph"?(a(),l("li",Ge,[e("div",He,[e("div",Je,[e("button",{onClick:s=>E(r.id)},We,8,Ke)]),o(t).user.email==="jorenleeluna24@gmail.com"?(a(),l("div",Xe,[e("button",{onClick:s=>N(r.id)},tt,8,Ze)])):p("",!0)])])):p("",!0)]))),128)),J(e("div",st,[lt,e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:R},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:N},"Cancel")])],512),[[K,o(f)]])])):(a(),l("div",at," No Results Found! "))])]),o(m).length>g.value?(a(),l("div",ot,[e("div",{onClick:F,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[it,S(" Prev ")]),e("ul",rt,[(a(!0),l(b,null,w(o(B),(r,v)=>(a(),l("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:v,onClick:s=>j(r)},h(r),9,nt))),128))]),e("div",{onClick:V,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[S(" Next "),ut])])):p("",!0)])])])])])]),Q(U)])}}},bt=te(dt,[["__scopeId","data-v-db14f0ab"]]);export{bt as default};
