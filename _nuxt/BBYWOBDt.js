import{_ as T}from"./BKPruLR1.js";import{_ as z}from"./BdhKFwOR.js";import{_ as B}from"./Cxqj-oh8.js";import{g as E,r,u as V,c as o,b as d,a as t,i as F,l as N,f as c,j as C,F as D,s as $,x as P,o as n,n as a,t as m,d as R,z as u}from"./D-TxO_i8.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const H={class:""},U={class:""},I={class:"relative"},L=P('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment Tracking </a></li></ul></div>',3),M={class:"flex w-fit shadow mx-auto mt-10 text-center rounded-lg"},q=t("i",{class:"fa fa-search"},null,-1),A=[q],G={class:"lg:flex w-10/12 min-h-screen mx-auto pt-10 mb-5"},J={class:"flex lg:items-center w-full lg:ml-36 relative"},K={class:"font-bold capitalize underline"},O={key:0,class:"pt-10 lg:-ml-12 -ml-36 lg:mt-0 mt-[250px]"},Q=t("p",{class:"text-sm lg:ml-8 pb-2"},"Please Submit Proof of Payment:",-1),W=["src"],X=t("div",{class:"py-1 px-10 border-2 border-green-900 w-fit rounded-md ml-8 my-3 hover:bg-green-900 hover:text-white cursor-pointer"}," Submit",-1),Y={key:2,class:"font-bold text-lg text-green-900 uppercase lg:-ml-4 -ml-16 lg:mt-3 mt-4"},ne={__name:"index",setup(Z){const f=E(),h=r(f.mainDevServer),v=V(),i=r(),p=r();let x=r("");const _=r(null),b=async()=>{(await $fetch(h.value+"/api/admissions/list/").catch(s=>s.data)).filter(function(s){i.value===s.tracking_id&&setTimeout(()=>{p.value=s.enrollment_tracking_status,x.value=s.receipt,_.value=s.id},100)})},y=g=>{v.push("/enrollment/evaluation/"+g)};return(g,s)=>{const k=T,w=z,S=B;return n(),o("div",null,[d(k),t("div",H,[t("div",U,[t("div",I,[d(w),L])]),t("div",M,[F(t("input",{class:"py-1 pl-2 pr-4 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID","onUpdate:modelValue":s[0]||(s[0]=e=>C(i)?i.value=e:null)},null,512),[[N,c(i)]]),t("button",{onClick:s[1]||(s[1]=e=>b()),class:"px-5 bg-green-900 text-white rounded-tr-lg rounded-br-lg"},A)]),t("div",G,[(n(!0),o(D,null,$(c(p),(e,l)=>(n(),o("div",{class:"relative w-full",key:l},[t("div",J,[t("p",{class:a(["text-white lg:px-3 px-4 py-2 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[e.status==="yes"?"bg-green-900":"bg-gray-300"],[l===4?"ml-0":""]])},m(l+1),3),t("div",{class:a(["lg:rotate-0 rotate-90 lg:h-[10px] h-[20px] lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px]",[l===3?"hidden":"lg:w-full w-[80px]"],[e.status==="yes"?"bg-green-900":"bg-gray-300"]])},null,2)]),t("div",{class:a(["lg:static absolute top-0 lg:w-fit mx-auto left-44",""])},[t("p",{class:a(["uppercase font-bold lg:mt-4",[e.status==="yes"?"text-green-900":"text-gray-300"],[l===0?"lg:-ml-2 -ml-16":""],[l===1?"lg:-ml-6 -ml-16":""],[l===2?"lg:ml-0 -ml-16":""],[l===3?"lg:-ml-4 -ml-16":""]])},m(e.track_name),3),t("span",{class:a(["text-xs capitalize block",[e.status==="yes"?"text-green-900":"text-gray-300"],[l===0?"lg:-ml-2 -ml-16":""],[l===1?"lg:-ml-6 -ml-16":""],[l===2?"lg:ml-0 -ml-16":""],[l===3?"lg:-ml-4 -ml-16":""]])},m(e.details),3),t("span",{class:a(["text-xs capitalize block",[e.status==="yes"?"text-green-900":"text-gray-300"],[e.remarks===""?"hidden":""],[l===3?"lg:-ml-20 -ml-16":"-ml-16"]])},[R(" Remarks: "),t("span",K,m(e.remarks),1)],2),e.status==="yes"&&e.track_name==="advising"?(n(),o("div",O,[Q,t("img",{src:c(x),class:a(["w-[200px]",e.status==="yes"&&e.track_name==="advising"?"lg:ml-8":""])},null,10,W),X])):u("",!0),e.status==="yes"&&e.track_name==="accounting"?(n(),o("div",{key:1,class:a([[e.status==="yes"?"text-green-900":"text-gray-300"],"text-center -ml-32 lg:mt-14 mt-[500px] font-bold cursor-pointer bg-green-800 text-white hover:bg-white hover:text-green-900 block border-2 border-green-800 lg:ml-9 leading-[15px] lg:text-sm text-xs px-3 py-2 rounded-lg"]),onClick:s[2]||(s[2]=j=>y(c(_)))},"Fill up Evaluation Form",2)):u("",!0),e.status==="yes"&&e.track_name==="evaluation"?(n(),o("div",Y," Enrolled! ")):u("",!0)],2)]))),128))])]),d(S)])}}};export{ne as default};
