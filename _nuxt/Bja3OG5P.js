import{_ as D}from"./B4CHoiw_.js";import{_ as R}from"./C2txWRc6.js";import{u as T,r as d,E as S,c as r,b as p,y as C,a as t,d as a,q as A,B,n as f,s as I,A as N,F as O,z as V,o as c,t as l}from"./CDTdWgub.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as z}from"./DlAUqK2U.js";const F={class:"bg-gray-50"},E={class:"border-t-2 border-green-700 shadow-lg lg:my-5 my-3 lg:pb-10 w-11/12 mx-auto"},M={class:""},$={class:"lg:p-5 p-2"},q={class:"lg:flex"},H={class:"flex w-fit shadow mx-auto my-3 text-center lg:rounded-lg rounded-md"},L={key:0,class:"lg:text-sm text-xs text-gray-800 text-center mt-10 mb-5 py-2 px-4 rounded-sm shadow lg:w-6/12 mx-auto"},P={class:"w-full"},U={class:"border-2 border-gray-300 shadow-lg mx-auto w-11/12"},G={class:""},J={class:"mx-auto w-fit text-center mt-3"},K={class:"font-light text-xs block px-5"},Q={class:"font-light text-xs block px-5"},W={class:"px-2 pt-3 pb-2 gap-3"},X={class:"w-full lg:mb-0 mb-5"},Y={class:"w-full gap-3"},Z={class:"gap-3 w-full"},j={class:"gap-3 lg:mb-2 w-full mx-auto border py-5 px-5"},tt={class:"lg:gap-x-2 gap-x-1 w-full"},st={class:"flex items-center w-full mb-2"},et={class:"w-full"},lt={class:"flex items-center w-full mb-2"},at={class:"w-full"},ot={class:"flex items-center w-full mb-2"},it={class:"w-full"},dt={class:"flex items-center w-full mb-2"},nt={class:"w-full"},rt={class:"flex items-center w-full mb-2"},ct={class:"w-full"},xt={class:"flex items-center w-full mb-2"},ft={class:"w-full"},mt={class:"flex items-center w-full mb-2"},pt={class:"w-full"},gt={class:"flex items-center w-full mb-2"},vt={class:"w-full"},ut=["href"],bt={class:"w-fit mx-auto my-5"},_t={class:"mx-auto w-fit"},wt={class:"p-2"},ht={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},yt={class:"lg:w-6/12 mb-2 block"},kt={class:"w-fit mx-auto"},Dt={class:"text-center flex"},Rt={class:"border-t-2 border-black text-center text-xs"},Tt={class:"lg:w-3/12 mb-2 block"},St={class:"w-full"},Ct={class:"w-full mb-2 block"},At={class:""},Bt={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},It={class:"lg:w-6/12 mb-2 block"},Nt={class:"w-fit mx-auto"},Ot={class:""},Vt={class:"border-t-2 border-black text-center text-xs"},zt={class:"lg:w-3/12 mb-2 block"},Ft={class:""},Et={class:"w-full mb-2 block"},Mt={class:""},$t={class:"flex lg:gap-x-2 gap-x-1 w-full border px-3 py-3 my-5"},qt={class:"w-full"},Ht={class:"flex gap-x-3"},Lt={class:"w-full mb-2 block"},Pt={class:"w-full mb-2 block"},Ut={class:"w-full mb-2 block"},Gt={class:""},Jt={class:"w-full mb-2 block"},Kt={class:""},Qt={__name:"index",async setup(Wt){let n,m;const g=T(),v=d(g.mainDevServer),u=([n,m]=S(()=>$fetch(v.value+"/api/drs/list").catch(o=>o.data)),n=await n,m(),n||0),i=d(""),x=d(),b=d(!1),_=d(!1),w=()=>{let o=i.value;x.value=null,_.value=!1,setTimeout(()=>{i.value="",o.length===12&&(x.value=u.filter(s=>{if(s.tracking_id===o)return s.tracking_id===o}))},500)};return(o,s)=>{const h=D,y=R;return c(),r("div",F,[p(h),s[25]||(s[25]=C('<div class="" data-v-01f4798c><div class="relative" data-v-01f4798c><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden" data-v-01f4798c><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block" data-v-01f4798c><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-01f4798c><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-01f4798c> DRS Track </h1></div><div class="shadow-lg text-green-700" data-v-01f4798c><div class="w-11/12 mx-auto flex justify-between" data-v-01f4798c><div class="flex capitalize text-xs pt-2.5 pb-2.5" data-v-01f4798c><div data-v-01f4798c><a href="/" class="mr-2 hover:underline" data-v-01f4798c>Home</a></div><div data-v-01f4798c><i class="fas fa-caret-right" data-v-01f4798c></i><a href="/drs" class="mx-2 hover:underline" data-v-01f4798c>Document Review Sheet</a></div><div data-v-01f4798c><i class="fas fa-caret-right" data-v-01f4798c></i><a href="/drs/track" class="mx-2 hover:underline" data-v-01f4798c>Track</a></div></div><div class="flex hover:text-green-800 text-white" data-v-01f4798c><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs border-r" data-v-01f4798c><a href="/drs/track" class="flex items-center" data-v-01f4798c><i class="fa fa-universal-access" aria-hidden="true" data-v-01f4798c></i><span class="ml-3" data-v-01f4798c>Track</span></a></div><div class="hover:bg-green-800 shadow-sm border bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs" data-v-01f4798c><a href="/drs/login" class="flex items-center" data-v-01f4798c><i class="fa fa-user" aria-hidden="true" data-v-01f4798c></i><span class="ml-3" data-v-01f4798c>Admin Login</span></a></div></div></div></div></div></div>',1)),t("div",null,[t("div",null,[t("div",E,[s[24]||(s[24]=t("div",{class:""},[t("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},[t("i",{class:"fa fa-certificate text-white mr-2"}),a(" DRS Document Status Tracker ")])],-1)),t("div",M,[t("div",$,[t("div",q,[t("div",H,[A(t("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 lg:rounded-tl-lg lg:rounded-bl-lg rounded-tl-md rounded-bl-md lg:text-sm text-xs",placeholder:"Transaction ID","onUpdate:modelValue":s[0]||(s[0]=e=>I(i)?i.value=e:null),required:"",maxlength:"18"},null,512),[[B,f(i)]]),t("button",{onClick:s[1]||(s[1]=e=>w()),class:"lg:px-5 px-2 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap lg:rounded-tr-lg lg:rounded-br-lg rounded-tr-md rounded-br-md lg:text-lg text-xs"},s[2]||(s[2]=[t("i",{class:"fa fa-search"},null,-1),a(" Track ")]))])]),f(b)?(c(),r("div",L," Can't Find Tracking ID! ")):N("",!0)])]),t("div",null,[(c(!0),r(O,null,V(f(x),(e,k)=>(c(),r("div",{key:k},[t("div",P,[t("div",null,[t("div",U,[t("div",G,[s[23]||(s[23]=t("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold text-green-900 text-center border-b bg-gray"}," Document Review Sheet ",-1)),t("div",J,[t("span",K,l(e.document_code),1),t("span",Q,l(e.tracking_id),1)]),t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("div",j,[t("div",tt,[t("div",st,[s[3]||(s[3]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Originating Office ")],-1)),t("div",et,l(e.originating_office),1)]),t("div",lt,[s[4]||(s[4]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Email ")],-1)),t("div",at,l(e.originating_email),1)]),t("div",ot,[s[5]||(s[5]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Document Title ")],-1)),t("div",it,l(e.document_title),1)]),t("div",dt,[s[6]||(s[6]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Document Type ")],-1)),t("div",nt,l(e.document_type),1)]),t("div",rt,[s[7]||(s[7]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Status ")],-1)),t("div",ct,l(e.status),1)]),t("div",xt,[s[8]||(s[8]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Date ")],-1)),t("div",ft,l(e.schedule),1)]),t("div",mt,[s[9]||(s[9]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Purpose ")],-1)),t("div",pt,l(e.purpose),1)]),t("div",gt,[s[11]||(s[11]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 font-bold whitespace-nowrap w-8/12"},[t("div",{class:"w-fit ml-auto pr-5"}," Reference Document ")],-1)),t("div",vt,[t("a",{href:e.document_attachment,class:"flex px-2 py-2 lg:w-fit w-full border-t-0 border-x-0 shadow-lg rounded-sm h-8 text-xs"},[s[10]||(s[10]=t("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/Google_Drive.png",class:"h-5 w-5 mr-3"},null,-1)),a(" "+l(e.document_attachment),1)],8,ut)])])])]),t("div",bt,[t("div",_t,l(e.originating_firstname)+" "+l(e.originating_lastname),1),s[12]||(s[12]=t("div",{class:"border-t-2 border-black text-center text-sm"},"Originator’s Printed Name",-1))])])])])]),t("div",wt,[t("div",ht,[t("div",yt,[s[13]||(s[13]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Reviewed By ",-1)),t("div",kt,[t("div",Dt,l(e.reviewed_by_name),1),t("div",Rt,l(e.reviewed_by_designation),1)])]),t("div",Tt,[s[14]||(s[14]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Action ",-1)),t("div",St,l(e.reviewed_by_action),1)]),t("div",Ct,[s[15]||(s[15]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Comments or Remarks ",-1)),t("div",At,l(e.reviewed_by_remarks),1)])]),t("div",Bt,[t("div",It,[s[16]||(s[16]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Approved By ",-1)),t("div",Nt,[t("div",Ot,l(e.approved_by_name),1),t("div",Vt,l(e.approved_by_designation),1)])]),t("div",zt,[s[17]||(s[17]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Action ",-1)),t("div",Ft,l(e.approved_by_action),1)]),t("div",Et,[s[18]||(s[18]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"}," Comments or Remarks ",-1)),t("div",Mt,l(e.approved_by_remarks),1)])]),t("div",$t,[t("div",qt,[t("div",Ht,[t("div",Lt,[s[19]||(s[19]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[a(" Other Comment and Remarks "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",null,l(e.other_comments_remarks),1)]),t("div",Pt,[s[20]||(s[20]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[a(" Document Code "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",null,l(e.document_code),1)]),t("div",Ut,[s[21]||(s[21]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[a(" Effectivity Date "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",Gt,l(e.effectivity_date),1)]),t("div",Jt,[s[22]||(s[22]=t("label",{class:"lg:text-xs text-[10px] text-gray-900 pb-2 font-bold"},[a(" Records Management Officer (RMO) "),t("span",{class:"text-red-600 font-normal text-sm lg:ml-1"},"*")],-1)),t("div",Kt,l(e.rmo_name),1)])])])])])])])])])]))),128))])])])]),p(y)])}}},es=z(Qt,[["__scopeId","data-v-01f4798c"]]);export{es as default};
