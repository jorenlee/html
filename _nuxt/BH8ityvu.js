import{_ as P}from"./oA0fVnmF.js";import{_ as V}from"./BNTuQeL2.js";import{_ as N}from"./BiH5k01k.js";import{g as U,r as n,m as $,u as L,c as a,b as h,a as e,i as H,l as I,f as i,j as M,F as O,s as q,x as A,o,n as c,t as d,d as G,z as m}from"./BzQWnDbm.js";import{a as J}from"./B6xwUs71.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const K={class:""},Q={class:""},W={class:"relative"},X=A('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment Tracking </a></li></ul></div>',3),Y={class:"overflow-hidden"},Z={class:"flex w-fit shadow mx-auto mt-10 text-center rounded-lg"},j=e("i",{class:"fa fa-search"},null,-1),ee=[j],te={class:"lg:flex w-10/12 mx-auto pt-10 lg:pb-[300px] pb-[470px] mb-5"},se={class:"flex lg:items-center w-full lg:ml-36"},le={class:"font-bold capitalize underline"},ae={key:1,class:"font-bold text-lg text-green-900 uppercase lg:-ml-4 -ml-16 lg:mt-3 mt-4"},oe={key:0,class:"lg:mb-10"},ne={key:0,class:"absolute lg:left-[50%] lg:top-[100px] top-[340px] w-full shadow mt-5 py-5 px-5"},re=e("p",{class:"text-sm pb-2 text-center"},"Please Submit Proof of Payment:",-1),ie={key:0,src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/sample.jpg",class:"w-[100px] h-[100px] mx-auto"},ce=["src"],me={key:1},ue={key:0,class:"absolute lg:left-[50%] lg:top-[100px] top-[340px] w-full shadow lg:mt-10 py-5 px-3"},ge=e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"w-[100px] mx-auto lg:mt-0 mt-14"},null,-1),de=e("p",{class:"text-center mt-5 leading-tight"},"Please check later while the accounting officer verify your receipt, Thank you!",-1),pe=[ge,de],Fe={__name:"index",setup(xe){const w=U(),k=n(w.mainDevServer);$();const F=L(),u=n(),_=n();let f=n("");const v=n(null),S=n("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/"),g=n("");let p=n("");const T=async()=>{(await $fetch(k.value+"/api/admissions/list/").catch(s=>s.data)).filter(function(s){u.value===s.tracking_id&&setTimeout(()=>{_.value=s.enrollment_tracking_status,f.value=s.receipt,v.value=s.id},100)})},b=n(!0),y=n(!1),C=r=>{g.value=r.target.files[0],p.value=URL.createObjectURL(g.value),f.value=S.value+""+r.target.files[0].name},R=async()=>{let r=new FormData;r.append("image",g.value);let s={headers:{"Content-Type":"multipart/form-data"}};J.post("https://api.lsu.edu.ph/api/admissions/file/list/files/",r,s).then(x=>{console.log(x)})},D=async()=>{g.value!==null&&(R(),b.value=!1,y.value=!0)},z=r=>{F.push("/enrollment/evaluation/"+r)};return(r,s)=>{const x=P,B=V,E=N;return o(),a("div",null,[h(x),e("div",K,[e("div",Q,[e("div",W,[h(B),X])]),e("div",Y,[e("div",Z,[H(e("input",{class:"py-1 pl-2 pr-4 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID",maxlength:"16","onUpdate:modelValue":s[0]||(s[0]=t=>M(u)?u.value=t:null)},null,512),[[I,i(u)]]),e("button",{onClick:s[1]||(s[1]=t=>T()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 rounded-tr-lg rounded-br-lg"},ee)]),e("div",te,[(o(!0),a(O,null,q(i(_),(t,l)=>(o(),a("div",{class:"w-full relative",key:l},[e("div",se,[e("p",{class:c(["text-white lg:px-3 px-4 py-2 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[t.status==="yes"?"bg-green-900":"bg-gray-300"],[l===4?"ml-0":""]])},d(l+1),3),e("div",{class:c(["lg:rotate-0 rotate-90 lg:h-[10px] h-[20px] lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px]",[l===3?"hidden":"lg:w-full w-[80px]"],[t.status==="yes"?"bg-green-900":"bg-gray-300"]])},null,2)]),e("div",{class:c(["lg:static absolute top-0 lg:w-fit mx-auto left-44",""])},[e("p",{class:c(["uppercase font-bold lg:mt-4",[t.status==="yes"?"text-green-900":"text-gray-300"],[l===0?"lg:-ml-2 -ml-16":""],[l===1?"lg:-ml-6 -ml-16":""],[l===2?"lg:ml-36 -ml-16":""],[l===3?"lg:-ml-4 -ml-16":""]])},d(t.track_name),3),e("span",{class:c(["text-xs capitalize block",[t.status==="yes"?"text-green-900":"text-gray-300"],[l===0?"lg:-ml-2 -ml-16":""],[l===1?"lg:-ml-6 -ml-16":""],[l===2?"lg:ml-36 -ml-16":""],[l===3?"lg:-ml-4 -ml-16":""]])},d(t.details),3),e("span",{class:c(["text-xs capitalize block",[t.status==="yes"?"text-green-900":"text-gray-300"],[t.remarks===""?"hidden":""],[l===3?"lg:-ml-20 -ml-16":"-ml-16"]])},[G(" Remarks: "),e("span",le,d(t.remarks),1)],2),t.status==="yes"&&t.track_name==="accounting"?(o(),a("div",{key:0,class:c([[t.status==="yes"?"text-green-900":"text-gray-300"],"text-center lg:ml-44 -ml-32 lg:mt-5 mt-[150px] font-bold cursor-pointer bg-green-800 text-white hover:bg-white hover:text-green-900 block border-2 border-green-800 leading-[15px] lg:text-sm text-xs px-3 py-2 rounded-lg whitespace-nowrap"]),onClick:s[2]||(s[2]=he=>z(i(v)))},"Fill out Evaluation Form",2)):m("",!0),t.status==="yes"&&t.track_name==="evaluation"?(o(),a("div",ae," Enrolled! ")):m("",!0)],2),i(b)?(o(),a("div",oe,[t.status==="yes"&&t.track_name==="advising"?(o(),a("div",ne,[re,i(p)===""?(o(),a("img",ie)):(o(),a("img",{key:1,src:i(p),class:"w-[100px] h-[100px] mx-auto"},null,8,ce)),e("input",{type:"file",onChange:C,accept:"image/png, image/jpeg",class:"my-5 w-full border"},null,32),e("div",{onClick:D,class:"py-1 px-10 border-2 border-green-900 w-fit mx-auto rounded-md my-2 hover:bg-green-900 hover:text-white cursor-pointer"}," Submit")])):m("",!0)])):m("",!0),i(y)?(o(),a("div",me,[t.status==="yes"&&t.track_name==="advising"?(o(),a("div",ue,pe)):m("",!0)])):m("",!0)]))),128))])])]),h(E)])}}};export{Fe as default};
