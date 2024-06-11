import{_ as H}from"./BF_owfKp.js";import{u as J,m as P,g as q,r as h,h as W,B as Y,c as i,a as t,t as w,f as r,F as V,s as A,i as G,v as K,d as B,z as _,b as Q,x as X,o,n as S,p as Z,e as ee}from"./5grvFswh.js";import{_ as te}from"./vUEbHlag.js";/* empty css        */import{a as le}from"./B6xwUs71.js";import"./BSfbFBv9.js";import"./C5S46NFB.js";import{_ as se}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const n=C=>(Z("data-v-1f926968"),C=C(),ee(),C),ae={class:""},ie={class:"flex min-h-screen"},oe={class:"w-full"},re={class:"bg-green-800"},ne={class:"lg:flex mx-auto justify-between py-2"},ue={class:"lg:flex items-center text-white gap-5"},de=n(()=>t("div",{class:"lg:p-0 pt-1 pb-3 mx-3.5"},[t("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),ce={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},he=n(()=>t("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ge={class:"text-sm pt-1"},pe=n(()=>t("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),me=n(()=>t("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),_e=[pe,me],fe={class:"px-3 pt-5"},xe={class:"lg:flex items-center mb-5"},ve={class:"w-full"},be=n(()=>t("label",{class:"text-xs mr-4 lg:mb-0 mb-2 block lg:flex font-bold text-green-900"}," Filters : ",-1)),we=[be],ye=n(()=>t("div",{class:"w-full flex items-center lg:mt-0 mt-5"},[t("input",{type:"text",class:"shadow-lg search capitalize w-full border border-b-4 border-green-800 rounded-sm h-8",value:"",placeholder:"Search"})],-1)),ke={key:0},Ce={class:"w-full"},Ve={class:""},Ae={class:"shadow mx-auto text-xs"},Se={class:""},ze=X('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-1f926968><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-1f926968><li class="lg:w-2/12" data-v-1f926968>Tracking ID</li><li class="lg:w-2/12" data-v-1f926968>LSU ID</li><li class="text-center lg:w-7/12" data-v-1f926968>Status</li><li class="px-1 lg:w-1/12 text-center" data-v-1f926968>Action</li></ul></div>',1),De={key:0,class:"w-full"},Ee={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-2/12 uppercase"},Me={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase"},Te={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},Be={class:"flex lg:items-center lg:h-fit h-0 lg:w-full w-3/12 lg:ml-4 relative"},Le={class:"lg:flex hidden"},je={class:"lg:hidden flex pl-7"},Ne={key:0},Ie=n(()=>t("i",{class:"fa fa-address-card"},null,-1)),Fe=[Ie],Oe={key:1},$e=n(()=>t("i",{class:"fa fa-calendar-check"},null,-1)),Re=[$e],Ue={key:2},He=n(()=>t("i",{class:"fa fa-money-bill-alt"},null,-1)),Je=[He],Pe={key:3},qe=n(()=>t("i",{class:"fa fa-star"},null,-1)),We=[qe],Ye={class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},Ge={class:"w-auto px-1 flex gap-10"},Ke={class:""},Qe=["onClick"],Xe=n(()=>t("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),Ze=[Xe],et={key:0,class:""},tt=["onClick"],lt=n(()=>t("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),st=[lt],at={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},it=n(()=>t("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),ot={key:1,class:"itallic text-gray-700 text-center p-1"},rt={key:0,class:"flex items-center justify-center w-fit mx-auto font-bold text-sm rounded-lg my-5"},nt=n(()=>t("i",{class:"fa fa-angle-left px-2","aria-hidden":"true"},null,-1)),ut={class:"border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2"},dt=["onClick"],ct=n(()=>t("i",{class:"fa fa-angle-right px-2","aria-hidden":"true"},null,-1)),ht={key:1,class:"mx-auto w-fit my-20"},gt=n(()=>t("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1)),pt=n(()=>t("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)),mt=[gt,pt],_t={__name:"index",setup(C){const x=J(),L=P(),e=q(),z=h(e.mainDevServer);let l=h(0);const D=h(!1);W(async()=>{let s=await le.get(z.value+"/api/admissions/list/");if(e.user.isAuthenticated&&(e.user.email==="saodirector@lsu.edu.ph"||e.user.email==="ascdirector@lsu.edu.ph"||e.user.email==="admissions@lsu.edu.ph"||e.user.email==="scholarships@lsu.edu.ph"||e.user.email==="katerijunine.tabernero@lsu.edu.ph"||e.user.email==="sherryl.origenes@lsu.edu.ph"||e.user.email==="lourdes_niebla@lsu.edu.ph"||e.user.email==="lindakj11196@gmail.com"||e.user.email==="jorenleeluna24@gmail.com"||e.user.email==="jayharold.reazol@lsu.edu.ph"||e.user.email==="cheryl.osorio@lsu.edu.ph"||e.user.email==="cte.registrar@lsu.edu.ph"||e.user.email==="onlinerequest@lsu.edu.ph"||e.user.email==="ccsea.registrar@lsu.edu.ph"||e.user.email==="cba.registrar@lsu.edu.ph"||e.user.email==="patrick.obut@lsu.edu.ph"||e.user.email==="maryeloise.pilvera@lsu.edu.ph"||e.user.email==="johny14_gonzaga@lsu.edu.ph"||e.user.email==="denzelroy.suarez@lsu.edu.ph"||e.user.email==="jason.yap@lsu.edu.ph"))console.log(s),l.value=s.data||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length;else if(e.user.isAuthenticated&&(e.user.email==="ramel.recentes@lsu.edu.ph"||e.user.email==="markkrisli.delapena@lsu.edu.ph"||e.user.email==="grace.dolloso@lsu.edu.ph"||e.user.email==="ladyvi.tagailo@lsu.edu.ph"||e.user.email==="earl.gangoso@lsu.edu.ph"||e.user.email==="honimar.panganiban@lsu.edu.ph"||e.user.email==="olaira.imbong@lsu.edu.ph"||e.user.email==="jorenlee.luna@lsu.edu.ph")){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CCSEA (College of Computer Studies, Engineering, and Architecture)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="anilou.dilao@lsu.edu.ph"||e.user.email==="marvel.deromol@lsu.edu.ph"||e.user.email==="nizel.apas@lsu.edu.ph"||e.user.email==="noel.alamin@lsu.edu.ph")){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CAS (College of Arts and Sciences)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="emma.suana@lsu.edu.ph"||e.user.email==="jenel.cruz@lsu.edu.ph"||e.user.email==="johnmark.saldivar@lsu.edu.ph"||e.user.email==="kenneth.yagong@lsu.edu.ph")){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CTE (College of Teacher Education)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="lowelle.pacot@lsu.edu.ph"||e.user.email==="jennifer.aguanta@lsu.edu.ph"||e.user.email==="jaysavelle.tubigon@lsu.edu.ph")){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CBA (College of Business and Accountancy)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="arlene.apao@lsu.edu.ph"){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CON (College of Nursing)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="joed.layna@lsu.edu.ph"||e.user.email==="michael.angelo.pagara@lsu.edu.ph"||e.user.email==="karen.linganay@lsu.edu.ph")){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CTHM (College of Tourism and Hospitality Management)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="estephanie.zamora@lsu.edu.ph"){console.log(s);let u=s.data.filter(function(c){return c.admissions_list_filter.college==="CCJE (College of Criminal Justice Education)"});l.value=u||0,g=Math.ceil(l._rawValue.length/d.value),p=l._rawValue.length}else(e.user.email===""||e.user.email===void 0)&&x.push("/enrollment/admin/login"),x.push("/_/unauthorized");x.push("/enrollment/admin/dashboard")});const E=h(!0),f=h(25),d=h(25),v=h(0);let M=h(),g,p,y=h(!1),j=Y(()=>l.value.slice(v.value,d.value));const N=()=>{v.value>0&&(v.value-=f.value,d.value-=f.value,console.log("prev"))},I=()=>{d.value<p&&(v.value+=f.value,d.value+=f.value,console.log("next"))},F=s=>{v.value=0,d.value=f.value,s>1&&(d.value*=s,v.value=d.value-f.value)},O=h([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),$=async s=>{x.push("/enrollment/admin/dashboard/update-student/"+s),await $fetch(z.value+"/api/admissions/"+L.params.id+"/").catch(u=>u.data),E.value=!1,D.value=!0},R=()=>{x.push("/enrollment"),e.removeToken()},T=s=>{y.value=!y.value,M.value=s},U=async()=>{await $fetch(z.value+"/api/admissions/"+M.value+"/delete/",{method:"DELETE",headers:{Authorization:e.user.token,"Content-Type":"application/json"}}).then(async s=>{x.go(),y.value=!y.value})};return(s,u)=>{const c=H;return o(),i("div",ae,[t("div",ie,[t("div",oe,[t("div",re,[t("div",ne,[t("div",ue,[de,t("div",ce,[he,t("h1",ge,w(r(e).user.email),1)])]),t("button",{onClick:R,class:"flex hover:font-bold pt-3 lg:static absolute top-2 right-2 lg:pt-1.5"},_e)])]),t("div",fe,[t("div",xe,[t("div",ve,[(o(!0),i(V,null,A(O.value,(m,k)=>(o(),i("div",{class:"lg:flex items-center block lg:text-left text-center",key:k},we))),128))]),ye]),E.value?(o(),i("div",ke,[t("div",Ce,[t("div",Ve,[t("div",Ae,[t("div",Se,[ze,r(l).length>0?(o(),i("div",De,[(o(!0),i(V,null,A(r(te).orderBy(r(j),"created_at","asc"),(m,k)=>(o(),i("ul",{class:"lg:flex w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative",key:k},[t("li",Ee,w(m.tracking_id),1),t("li",Me,w(m.student_lsu_id_number),1),t("li",Te,[(o(!0),i(V,null,A(m.enrollment_tracking_status,(a,b)=>(o(),i("div",{class:"relative w-full lg:py-2 py-1 block",key:b},[t("div",Be,[t("p",{class:S(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[a.status==="yes"?"bg-green-900":""],[a.status==="ongoing"?"bg-blue-700":""],[a.status==="no"?"bg-gray-300":""],[a.status===""?"bg-gray-300":""],[b===3?"ml-0":""]])},w(b+1),3),t("div",{class:S(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[b===3?"hidden":"lg:w-full w-5"],[a.status==="yes"?"bg-green-900":""],[a.status==="no"?"bg-gray-300":""],[a.status===""?"bg-gray-300":""],[a.status==="ongoing"?"bg-blue-700":""]])},null,2)]),t("div",{class:S(["lg:static lg:text-center lg:w-auto w-full",""])},[t("p",{class:S(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[a.status==="yes"?" lg:bg-white bg-green-800 text-white lg:text-black":""],[a.status==="no"?"text-gray-300":""],[a.status===""?"lg:bg-transparent bg-gray-300 lg:text-gray-300 text-white":""],[a.status==="ongoing"?"text-white bg-blue-700":""],[b===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[t("div",Le,[t("span",null,w(a.track_name),1)]),t("div",je,[a.track_name==="admissions"?(o(),i("span",Ne,Fe)):_("",!0),a.track_name==="advising"?(o(),i("span",Oe,Re)):_("",!0),a.track_name==="accounting"?(o(),i("span",Ue,Je)):_("",!0),a.track_name==="evaluation"||a.track_name==="verification"?(o(),i("span",Pe,We)):_("",!0)])],2)],2)]))),128))]),t("li",Ye,[t("div",Ge,[t("div",Ke,[t("button",{onClick:a=>$(m.id)},Ze,8,Qe)]),r(e).user.email==="saodirector@lsu.edu.ph"||r(e).user.email==="ascdirector@lsu.edu.ph"||r(e).user.email==="admissions@lsu.edu.ph"||r(e).user.email==="scholarships@lsu.edu.ph"||r(e).user.email==="katerijunine.tabernero@lsu.edu.ph"||r(e).user.email==="sherryl.origenes@lsu.edu.ph"||r(e).user.email==="lourdes.niebla@lsu.edu.ph"||r(e).user.email==="lindakj11196@gmail.com"||r(e).user.email==="jorenleeluna24@gmail.com"||r(e).user.email==="jayharold.reazol@lsu.edu.ph"?(o(),i("div",et,[t("button",{onClick:a=>T(m.id)},st,8,tt)])):_("",!0)])])]))),128)),G(t("div",at,[it,t("div",{class:"flex gap-5 mx-auto w-fit my-5"},[t("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:U},"Yes"),t("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:T},"Cancel")])],512),[[K,r(y)]])])):(o(),i("div",ot," Loading Please Wait ... "))])]),r(l).length>f.value?(o(),i("div",rt,[t("div",{onClick:N,class:"mt-[1px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[nt,B(" Prev ")]),t("ul",ut,[(o(!0),i(V,null,A(r(g),(m,k)=>(o(),i("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:k,onClick:a=>F(m)},w(m),9,dt))),128))]),t("div",{onClick:I,class:"mt-[1px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[B(" Next "),ct])])):_("",!0)])])])):_("",!0),D.value?(o(),i("div",ht,mt)):_("",!0)])])]),Q(c)])}}},At=se(_t,[["__scopeId","data-v-1f926968"]]);export{At as default};