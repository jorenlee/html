import{_ as G}from"./BvUfq8nL.js";import{_ as M}from"./B7Y6tnD6.js";import{_ as J}from"./C5cQ435z.js";import{g as K,r as s,m as Q,u as W,c as a,b as T,a as t,i as X,l as Y,f as r,j as Z,d as x,z as c,F as j,s as ee,x as te,o,n as u,t as v}from"./CBhFgaxQ.js";import{a as se}from"./B6xwUs71.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const le={class:""},ae={class:""},oe={class:"relative"},ne=te('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/tracking" class="mr-1">Tracking </a></li></ul></div>',3),ie={class:"lg:overflow-hidden lg:min-h-screen pb-80"},re=t("p",{class:"text-center mt-10 text-green-900 text-sm px-4 lg:w-6/12 w-11/12 mx-auto"},[t("span",{class:"text-gray-600"},[x("If you need any further assistance or have any more questions, feel free to email at "),t("span",{class:"font-bold"},"dev@lsu.edu.ph"),x(". Thank you!")])],-1),ce={class:"lg:flex w-11/12 mx-auto"},ue={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},ge=t("i",{class:"fa fa-search"},null,-1),me={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},de={key:1,class:"mx-auto w-fit my-20"},pe=t("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),xe=t("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1),fe=[pe,xe],he={key:2,class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},ve={class:"flex lg:items-center w-full lg:ml-20"},be={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},_e={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},we=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),ye={key:0,class:"lg:mb-10"},ke={key:0,class:"absolute lg:left-[50%] lg:top-[130px] top-[370px] w-full lg:shadow mt-5 py-5 px-5"},Te=t("p",{class:"text-sm pb-2 text-center"},"Please Submit Proof of Payment:",-1),Fe={key:0,src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/sample.jpg",class:"w-[100px] h-[100px] mx-auto"},Se=["src"],Ce={key:1},Re={key:0,class:"absolute lg:left-[50%] lg:top-[100px] top-[340px] w-full lg:shadow lg:mt-10 py-5 px-3"},De=t("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"w-[100px] mx-auto lg:mt-0 mt-14"},null,-1),Ne=t("p",{class:"text-center mt-5 leading-tight lg:text-sm text-xs"},"Please check later while the accounting officer verify your receipt, Thank you!",-1),Pe=[De,Ne],Ee={key:3},Be={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},He={__name:"index",setup(Ve){const E=K(),F=s(E.mainServer);Q();const B=W();s("");const g=s(""),S=s();let C=s("");const b=s(null),m=s(!1);s(!1);const _=s(!1),f=s(!1),R=s(!1),d=s(!1),V=s("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/"),h=s("");let w=s(""),z=s(),D=s(!1),N=s(!1),p=s();const U=async()=>{f.value=!1,R.value=!1,d.value=!1,g.value.length===16?(m.value=!0,z.value=await $fetch(F.value+"/api/admissions/list/",{method:"GET"}).then(i=>{console.log(i.length),i.filter(function(n){g.value===n.tracking_id?(S.value=n.enrollment_tracking_status,D.value=n.receipt.submitted,N.value=n.evaluation.submitted,b.value=n.id,R.value=!1,d.value=!1,f.value=!0,p.value=n):(d.value=!0,setTimeout(()=>{d.value=!1},3e3),m.value=!1)})}).catch(i=>{i.data,console.log(i.data),m.value=!1,f.value=!1})):(g.value.length<15||g.value.length>0)&&(_.value=!0,setTimeout(()=>{_.value=!1,m.value=!1},3e3))},P=s(!0),y=s(!1),$=i=>{h.value=i.target.files[0],w.value=URL.createObjectURL(h.value),C.value=V.value+""+i.target.files[0].name},I=async()=>{let i=new FormData;i.append("image",h.value);let n={headers:{"Content-Type":"multipart/form-data"}};se.post("https://api.lsu.edu.ph/api/admissions/file/list/files/",i,n).then(k=>{console.log(k)})},L=async()=>{h.value!==null&&(I(),A(),P.value=!1,y.value=!0)},A=async()=>{p.value.receipt.image_url=C.value,p.value.receipt.submitted=!0,p.value.enrollment_tracking_status[2]={track_name:"accounting",label:"payment",details:"payment",date_checked:"-",check_by:"-",status:"ongoing",remarks:"ongoing"},console.log("submitForm"),await $fetch(F.value+"/api/admissions/"+b.value+"/edit/",{method:"PUT",body:p.value}).then(i=>{console.log("response",i),setTimeout(()=>{y.value=!1},7e3)})},O=()=>{B.push("/enrollment/evaluation/")};return(i,n)=>{const k=G,q=M,H=J;return o(),a("div",null,[T(k),t("div",le,[t("div",ae,[t("div",oe,[T(q),ne])]),t("div",ie,[re,t("div",ce,[t("div",ue,[X(t("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-green-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID",maxlength:"16","onUpdate:modelValue":n[0]||(n[0]=e=>Z(g)?g.value=e:null),required:""},null,512),[[Y,r(g)]]),t("button",{onClick:n[1]||(n[1]=e=>U()),class:"px-5 bg-green-900 text-white cursor-pointer hover:bg-white hover:text-green-900 border-4 border-green-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},[ge,x(" Track ")])])]),r(_)?(o(),a("div",me," Please Add Correct Tracking ID ")):c("",!0),r(m)?(o(),a("div",de,fe)):c("",!0),r(f)?(o(),a("div",he,[(o(!0),a(j,null,ee(r(S),(e,l)=>(o(),a("div",{class:"w-full relative lg:h-auto h-[120px]",key:l},[t("div",ve,[t("p",{class:u(["text-white lg:px-3 px-4 py-2 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[e.status==="yes"?"text-white bg-green-900":""],[e.status==="no"?"text-white bg-red-700":""],[e.status===""?"text-white bg-gray-300":""],[e.status==="ongoing"?"text-white bg-blue-800":""]])},v(l+1),3),t("div",{class:u(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[e.status==="yes"?"bg-green-900":""],[e.status==="no"?"bg-red-700":""],[e.status===""?"bg-gray-300":""],[e.status==="ongoing"?"bg-blue-800":""],[l===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),t("div",be,[t("p",{class:u(["uppercase font-bold lg:mt-4",[e.status==="yes"?"text-green-900":""],[e.status==="no"?"text-red-700":""],[e.status===""?"text-gray-300":""],[e.status==="ongoing"?"text-blue-800":""],[l===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[l===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[l===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[l===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},v(e.track_name),3),t("span",{class:u(["text-xs capitalize block",[e.status==="yes"?"text-green-900":""],[e.status==="no"?"text-red-700":""],[e.status===""?"text-gray-300":""],[e.status==="ongoing"?"text-blue-800":""],[l===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[l===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[l===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[l===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},v(e.details),3),t("div",{class:u(["text-xs capitalize block w-[130px] left-28 leading-tight",[e.status==="yes"?"text-green-900":""],[e.status==="no"?"text-red-700":""],[e.status===""?"text-gray-300":""],[e.status==="ongoing"?"text-blue-800":""],[l===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[l===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[l===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[l===3?"lg:ml-0 lg:static absolute left-28 top-10":""],[e.remarks===""?"hidden":""]])},[x(" Remarks: "),t("div",{class:u(["font-bold underline lg:w-[200px] w-[200px]",[l===2?"w-[230px]":""][l===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},v(e.remarks),3)],2),t("div",{class:u(r(N)?"hidden":"")},[e.status==="ongoing"&&e.track_name==="verification"?(o(),a("div",{key:0,class:u([[e.status==="yes"?"text-green-900":"text-gray-300"],"text-center lg:mt-5 mt-[100px] w-fit lg:mx-0 mx-auto font-bold cursor-pointer bg-green-800 text-white hover:bg-white hover:text-green-900 block border-2 border-green-800 leading-[15px] lg:text-sm text-xs px-3 py-2 rounded-lg"]),onClick:n[2]||(n[2]=ze=>O(r(b)))}," Evaluation Form",2)):c("",!0)],2),e.status==="yes"&&e.track_name==="verification"?(o(),a("div",_e,[we,x(" Congratulations! ")])):c("",!0)]),t("div",{class:u(r(D)?"hidden":"")},[r(P)?(o(),a("div",ye,[e.status==="yes"&&e.track_name==="advising"?(o(),a("div",ke,[Te,r(w)===""?(o(),a("img",Fe)):(o(),a("img",{key:1,src:r(w),class:"w-[100px] h-[100px] mx-auto"},null,8,Se)),t("input",{type:"file",onChange:$,accept:"capture=camera, image/*, image/png, image/jpeg",capture:"",class:"my-5 w-full border"},null,32),t("div",{onClick:L,class:"py-1 px-10 border-2 border-green-900 w-fit mx-auto rounded-md my-2 hover:bg-green-900 hover:text-white cursor-pointer"}," Submit")])):c("",!0)])):c("",!0),r(y)?(o(),a("div",Ce,[e.status==="yes"&&e.track_name==="advising"?(o(),a("div",Re,Pe)):c("",!0)])):c("",!0)],2)]))),128))])):(o(),a("div",Ee,[r(d)?(o(),a("div",Be," Sorry, No results Found! ")):c("",!0)]))])]),T(H)])}}};export{He as default};