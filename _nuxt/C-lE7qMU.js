import{_ as T}from"./BiZOqz9U.js";import{_ as R}from"./irOmZdHn.js";import{u as S,r as c,s as B,c as a,b as p,i as C,a as t,d as r,k as d,h as A,m as O,f as m,j as I,F as N,l as V,o,t as l}from"./EHKfy-mk.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as F}from"./DlAUqK2U.js";const z={class:"bg-gray-50"},M={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 lg:pb-10 w-11/12 mx-auto"},E={class:""},$={class:"lg:p-5 p-2"},H={class:"lg:flex"},L={class:"flex w-fit shadow mx-auto my-3 text-center lg:rounded-lg rounded-md"},U={key:0,class:"lg:text-sm text-xs text-gray-800 text-center mt-10 mb-5 py-2 px-4 rounded-sm shadow lg:w-6/12 mx-auto"},q={class:"w-full"},P={class:"border-2 border-gray-300 shadow-lg mx-auto w-11/12"},G={class:""},J={class:"mx-auto w-fit text-center mt-3"},K={class:"font-light text-xs block px-5"},Q={class:"px-2 pt-3 pb-2 gap-3"},W={class:"w-full lg:mb-0 mb-5"},X={class:"w-full gap-3"},Y={class:"gap-3 w-full"},Z={class:"gap-3 lg:mb-2 w-full mx-auto border py-5 px-5"},j={class:"lg:gap-x-2 gap-x-1 w-full"},tt={class:"flex items-center w-full mb-2"},et={class:"w-full"},st={class:"flex items-center w-full mb-2"},lt={class:"w-full"},at={class:"flex items-center w-full mb-2"},ot={class:"w-full"},dt={class:"flex items-center w-full mb-2"},it={class:"w-full"},rt={class:"flex items-center w-full mb-2"},nt={class:"w-full"},ct={class:"flex items-center w-full mb-2"},xt={class:"w-full"},ft={class:"w-fit mx-auto my-5"},mt={class:"mx-auto w-fit"},vt={class:"p-2"},pt={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},gt={class:"lg:w-full mb-2 block"},ut={class:"w-fit mx-auto"},bt={class:"text-center flex"},_t={class:"border-t-2 border-black text-center text-xs"},wt={key:0,class:"lg:w-full mb-2 block"},ht={class:"w-full"},yt={key:1,class:"w-full mb-2 block"},kt={class:""},Dt={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},Tt={class:"lg:w-full mb-2 block"},Rt={class:"w-fit mx-auto"},St={class:""},Bt={class:"border-t-2 border-black text-center text-xs"},Ct={key:0,class:"lg:w-3/12 mb-2 block"},At={class:""},Ot={key:1,class:"w-full mb-2 block"},It={class:""},Nt={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},Vt={class:"w-full"},Ft={class:"flex gap-x-3"},zt={key:0,class:"w-full mb-2 block"},Mt={key:1,class:"w-full mb-2 block"},Et={key:2,class:"w-full mb-2 block"},$t={class:""},Ht={key:3,class:"w-full mb-2 block"},Lt={class:""},Ut={__name:"index",async setup(qt){let x,v;const g=S(),u=c(g.mainDevServer),b=([x,v]=B(()=>$fetch(u.value+"/api/drs/list").catch(i=>i.data)),x=await x,v(),x||0),n=c(""),f=c(),_=c(!1),w=c(!1),h=()=>{let i=n.value;f.value=null,w.value=!1,setTimeout(()=>{n.value="",i.length===12&&(f.value=b.filter(e=>{if(e.tracking_id===i)return e.tracking_id===i}))},500)};return(i,e)=>{const y=T,k=R;return o(),a("div",z,[p(y),e[22]||(e[22]=C('<div class="" data-v-1fc0d471><div class="relative" data-v-1fc0d471><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-1fc0d471><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-1fc0d471><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-1fc0d471><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-1fc0d471> DRS Track </h1></div><div class="shadow-lg text-green-700" data-v-1fc0d471><div class="w-11/12 mx-auto flex justify-between" data-v-1fc0d471><div class="flex capitalize text-xs pt-2.5 pb-2.5" data-v-1fc0d471><div data-v-1fc0d471><a href="/" class="mr-2 hover:underline" data-v-1fc0d471>Home</a></div><div data-v-1fc0d471><i class="fas fa-caret-right" data-v-1fc0d471></i><a href="/drs" class="mx-2 hover:underline" data-v-1fc0d471>Document Review Sheet</a></div><div data-v-1fc0d471><i class="fas fa-caret-right" data-v-1fc0d471></i><a href="/drs/track" class="mx-2 hover:underline" data-v-1fc0d471>Track</a></div></div><div class="flex hover:text-green-800 text-white" data-v-1fc0d471><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs border-r" data-v-1fc0d471><a href="/drs/track" class="flex items-center" data-v-1fc0d471><i class="fa fa-universal-access" aria-hidden="true" data-v-1fc0d471></i><span class="ml-3" data-v-1fc0d471>Track</span></a></div><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-1fc0d471><a href="/drs/login" class="flex items-center" data-v-1fc0d471><i class="fa fa-user" aria-hidden="true" data-v-1fc0d471></i><span class="ml-3" data-v-1fc0d471>Admin Login</span></a></div></div></div></div></div></div>',1)),t("div",null,[t("div",null,[t("div",M,[e[21]||(e[21]=t("div",{class:""},[t("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},[t("i",{class:"fa fa-certificate text-white mr-2"}),r(" DRS Document Status Tracker ")])],-1)),t("div",E,[t("div",$,[t("div",H,[t("div",L,[A(t("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-md rounded-bl-md lg:text-sm text-xs",placeholder:"Transaction ID","onUpdate:modelValue":e[0]||(e[0]=s=>I(n)?n.value=s:null),required:"",maxlength:"18"},null,512),[[O,m(n)]]),t("button",{onClick:e[1]||(e[1]=s=>h()),class:"lg:px-5 px-2 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap lg:rounded-tr-lg lg:rounded-br-lg rounded-tr-md rounded-br-md lg:text-lg text-xs"},e[2]||(e[2]=[t("i",{class:"fa fa-search"},null,-1),r(" Track ")]))])]),m(_)?(o(),a("div",U," Can't Find Tracking ID! ")):d("",!0)])]),t("div",null,[(o(!0),a(N,null,V(m(f),(s,D)=>(o(),a("div",{key:D},[t("div",q,[t("div",null,[t("div",P,[t("div",G,[e[20]||(e[20]=t("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold text-green-900 text-center border-b bg-gray"}," Document Review Sheet ",-1)),t("div",J,[t("span",K,l(s.tracking_id),1)]),t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("div",j,[t("div",tt,[e[3]||(e[3]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Originating Office ")],-1)),t("div",et,l(s.originating_office),1)]),t("div",st,[e[4]||(e[4]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Email ")],-1)),t("div",lt,l(s.originating_email),1)]),t("div",at,[e[5]||(e[5]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Document Title ")],-1)),t("div",ot,l(s.document_title),1)]),t("div",dt,[e[6]||(e[6]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Document Type ")],-1)),t("div",it,l(s.document_type),1)]),t("div",rt,[e[7]||(e[7]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Status ")],-1)),t("div",nt,l(s.status),1)]),t("div",ct,[e[8]||(e[8]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Date ")],-1)),t("div",xt,l(s.schedule),1)])])]),t("div",ft,[t("div",mt,l(s.originating_firstname)+" "+l(s.originating_lastname),1),e[9]||(e[9]=t("div",{class:"border-t-2 border-black text-center text-sm"},"Originator’s Printed Name",-1))])])])])]),t("div",vt,[t("div",pt,[t("div",gt,[e[10]||(e[10]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Reviewed By ",-1)),t("div",ut,[t("div",bt,l(s.reviewed_by_name),1),t("div",_t,l(s.reviewed_by_designation),1)])]),s.reviewed_by_action?(o(),a("div",wt,[e[11]||(e[11]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Action ",-1)),t("div",ht,l(s.reviewed_by_action),1)])):d("",!0),s.reviewed_by_remarks?(o(),a("div",yt,[e[12]||(e[12]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Comments or Remarks ",-1)),t("div",kt,l(s.reviewed_by_remarks),1)])):d("",!0)]),t("div",Dt,[t("div",Tt,[e[13]||(e[13]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Approved By ",-1)),t("div",Rt,[t("div",St,l(s.approved_by_name),1),t("div",Bt,l(s.approved_by_designation),1)])]),s.approved_by_action?(o(),a("div",Ct,[e[14]||(e[14]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Action ",-1)),t("div",At,l(s.approved_by_action),1)])):d("",!0),s.approved_by_remarks?(o(),a("div",Ot,[e[15]||(e[15]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Comments or Remarks ",-1)),t("div",It,l(s.approved_by_remarks),1)])):d("",!0)]),t("div",Nt,[t("div",Vt,[t("div",Ft,[s.other_comments_remarks?(o(),a("div",zt,[e[16]||(e[16]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[r(" Other Comment and Remarks "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",null,l(s.other_comments_remarks),1)])):d("",!0),s.document_code!=="To Be Assigned By RMO"?(o(),a("div",Mt,[e[17]||(e[17]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[r(" Document Code "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",null,l(s.document_code),1)])):d("",!0),s.effectivity_date?(o(),a("div",Et,[e[18]||(e[18]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[r(" Effectivity Date "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",$t,l(s.effectivity_date),1)])):d("",!0),s.rmo_name?(o(),a("div",Ht,[e[19]||(e[19]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[r(" Records Management Officer (RMO) "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",Lt,l(s.rmo_name),1)])):d("",!0)])])])])])])])])]))),128))])])])]),p(k)])}}},Xt=F(Ut,[["__scopeId","data-v-1fc0d471"]]);export{Xt as default};
