import{_ as q}from"./5Rh4jcVL.js";import{_ as H}from"./CSC6CTWR.js";import{_ as G}from"./caGIbE6H.js";import{u as J,r as l,q as K,e as Q,c as o,b as w,a as e,k as i,i as y,d as c,h as W,m as X,f as r,j as Y,F as Z,l as j,o as n,n as u,t as f}from"./b0bLhGgk.js";import{a as ee}from"./BtuGy7By.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const te={class:"relative"},se={class:""},le={class:"relative"},ae={class:"lg:flex gap-10"},oe={class:"lg:w-9/12 lg:overflow-hidden lg:min-h-screen pb-80 px-5 lg:order-2 order-1"},ne={class:"lg:flex"},re={class:"flex lg:w-5/12 w-fit shadow mx-auto mt-10 text-center rounded-lg"},ie={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},ue={key:1,class:"mx-auto w-fit my-20"},ge={key:2,class:"lg:flex lg:w-10/12 w-full mx-auto pt-10 lg:h-screen mb-5"},ce={class:"flex lg:items-center w-full lg:ml-20"},pe={class:"lg:absolute top-8 lg:left-20 right-0 bottom-0"},de={key:0,class:"font-bold text-lg text-green-900 uppercase ml-0 lg:mt-0 mt-20 lg:text-left text-center lg:px-0 px-3"},me={key:0,class:"lg:mb-10"},fe={key:0,class:"absolute lg:left-[50%] lg:top-[130px] top-[370px] w-full lg:shadow mt-5 py-5 px-5"},xe={key:0,src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/sample.jpg",class:"w-[100px] h-[100px] mx-auto"},be=["src"],he={key:1},we={key:0,class:"absolute lg:left-[50%] lg:top-[100px] top-[340px] w-full lg:shadow lg:mt-10 py-5 px-3"},ye={key:3},ve={key:0,class:"font-bold text-center w-11/12 mx-auto my-10"},ke={class:"lg:w-3/12 shadow-lg lg:order-1 order-2 pb-5 lg:border-t-0 border-t-2"},_e={class:"w-11/12 mx-auto text-center my-5"},Se={class:"w-full justify-between"},Te={class:"w-full mb-5 border text-white"},Ne={key:0,class:"block w-full h-full shadow-4xl"},Ae={__name:"backup",setup(Ce){const T=J(),N=l(T.mainDevServer);K();const C=Q();l("");const x=l(""),F=l();let v=l("");const k=l(null),P=l(!1);l(!1);const E=l(!1),O=l(!1),p=l(!1);l(!1);const D=l(!1),R=l("https://lsu-media-styles.sgp1.digitaloceanspaces.com/storage-bucket-name/folder-location/files/admissions/files/"),d=l("");let b=l("");l();let V=l(!1),I=l(!1),m=l();const _=l(!0),h=l(!1),A=g=>{d.value=g.target.files[0],b.value=URL.createObjectURL(d.value),v.value=R.value+""+g.target.files[0].name},L=async()=>{let g=new FormData;g.append("image",d.value);let t={headers:{"Content-Type":"multipart/form-data"}};ee.post("https://api.lsu.edu.ph/api/admissions/file/list/files/",g,t).then(S=>{})},M=async()=>{d.value!==null&&(L(),B(),_.value=!1,h.value=!0)},B=async()=>{m.value.receipt.image_url=v.value,m.value.receipt.submitted=!0,m.value.enrollment_tracking_status[2]={track_name:"accounting",label:"payment",details:"payment",date_checked:"-",check_by:"-",status:"ongoing",remarks:"ongoing"},await $fetch(N.value+"/api/admissions/"+k.value+"/edit/",{method:"PUT",body:m.value}).then(g=>{setTimeout(()=>{h.value=!1},7e3)})},U=()=>{C.push("/enrollment/evaluation/")};return(g,t)=>{const S=q,$=H,z=G;return n(),o("div",null,[w(S),e("div",te,[e("div",se,[e("div",le,[w($),t[4]||(t[4]=y('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Enrollment Tracking </h1></div><div class="pt-2.5 pb-3 shadow-lg"><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment" class="mr-1"> Enrollment </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/enrollment/tracking" class="mr-1">Tracking </a></li></ul></div>',3))])]),e("div",ae,[e("div",oe,[t[11]||(t[11]=e("p",{class:"text-center mt-10 text-green-900 text-sm lg:px-4 mx-auto"},[e("span",{class:"text-gray-600"},[c("If you need any further assistance or have any more questions, feel free to email at "),e("span",{class:"font-bold"},"dev@lsu.edu.ph"),c(". Thank you!")])],-1)),t[12]||(t[12]=e("p",{class:"lg:text-base text-xs text-red-800 text-center px-10"}," (Ongoing updates, you can track your progress at 4:00 PM) ",-1)),e("div",ne,[e("div",re,[W(e("input",{class:"py-1 pl-2 pr-2 uppercase w-full border-2 border-gray-700 rounded-tl-lg rounded-bl-lg",placeholder:"Tracking ID",maxlength:"16","onUpdate:modelValue":t[0]||(t[0]=s=>Y(x)?x.value=s:null),required:""},null,512),[[X,r(x)]]),t[5]||(t[5]=e("button",{class:"px-5 bg-gray-400 text-white cursor-not-allowed border-4 border-gray-900 whitespace-nowrap rounded-tr-lg rounded-br-lg"},[e("i",{class:"fa fa-search"}),c(" Track ")],-1))])]),r(E)?(n(),o("div",ie," Please Add Correct Tracking ID ")):i("",!0),r(P)?(n(),o("div",ue,t[6]||(t[6]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):i("",!0),r(O)?(n(),o("div",ge,[(n(!0),o(Z,null,j(r(F),(s,a)=>(n(),o("div",{class:"w-full relative lg:h-auto h-[120px]",key:a},[e("div",ce,[e("p",{class:u(["text-white lg:px-3 px-4 py-2 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-lg mt-1 lg:mt-0 font-bold",[s.status==="yes"?"text-white bg-green-900":""],[s.status==="no"?"text-white bg-red-700":""],[s.status===""?"text-white bg-gray-300":""],[s.status==="ongoing"?"text-white bg-blue-800":""]])},f(a+1),3),e("div",{class:u(["lg:rotate-0 rotate-90 lg:h-[10px] h-[10px] lg:my-auto lg:mx-auto lg:mt-[16px] mt-[79px] lg:ml-0 -ml-[60px] w-[100px]",[s.status==="yes"?"bg-green-900":""],[s.status==="no"?"bg-red-700":""],[s.status===""?"bg-gray-300":""],[s.status==="ongoing"?"bg-blue-800":""],[a===3?"hidden h-0 w-0":"lg:w-full w-[80px]"]])},null,2)]),e("div",pe,[e("p",{class:u(["uppercase font-bold lg:mt-4",[s.status==="yes"?"text-green-900":""],[s.status==="no"?"text-red-700":""],[s.status===""?"text-gray-300":""],[s.status==="ongoing"?"text-blue-800":""],[a===0?"lg:ml-0 lg:static absolute left-28 top-0":""],[a===1?"lg:ml-0 lg:static absolute left-28 top-0":""],[a===2?"lg:ml-0 lg:static absolute left-28 top-0":""],[a===3?"lg:ml-0 lg:static absolute left-28 top-0":""]])},f(s.track_name),3),e("span",{class:u(["text-xs capitalize block",[s.status==="yes"?"text-green-900":""],[s.status==="no"?"text-red-700":""],[s.status===""?"text-gray-300":""],[s.status==="ongoing"?"text-blue-800":""],[a===0?"lg:ml-0 lg:static absolute left-28 top-6":""],[a===1?"lg:ml-0 lg:static absolute left-28 top-6":""],[a===2?"lg:ml-0 lg:static absolute left-28 top-6":""],[a===3?"lg:ml-0 lg:static absolute left-28 top-6":""]])},f(s.details),3),e("div",{class:u(["text-xs capitalize block w-[130px] left-28 leading-tight",[s.status==="yes"?"text-green-900":""],[s.status==="no"?"text-red-700":""],[s.status===""?"text-gray-300":""],[s.status==="ongoing"?"text-blue-800":""],[a===0?"lg:ml-0 lg:static absolute left-28 top-10":""],[a===1?"lg:ml-0 lg:static absolute left-28 top-10":""],[a===2?"lg:ml-0 lg:static absolute left-28 top-10":""],[a===3?"lg:ml-0 lg:static absolute left-28 top-10":""],[s.remarks===""?"hidden":""]])},[t[7]||(t[7]=c(" Remarks: ")),e("div",{class:u(["font-bold underline lg:w-[200px] w-[200px]",[a===2?"w-[230px]":""][a===3?"lg:ml-0 -ml-16 lg:mt-0 mt-7 lg:w-[230px]":""]])},f(s.remarks),3)],2),e("div",{class:u(r(I)?"hidden":"")},[s.status==="ongoing"&&s.track_name==="verification"?(n(),o("div",{key:0,class:u([[s.status==="yes"?"text-green-900":"text-gray-300"],"text-center lg:mt-5 mt-[100px] w-fit lg:mx-0 mx-auto font-bold cursor-pointer bg-green-800 text-white hover:bg-white hover:text-green-900 block border-2 border-green-800 leading-[15px] lg:text-sm text-xs px-3 py-2 rounded-lg"]),onClick:t[1]||(t[1]=Fe=>U(r(k)))}," Evaluation Form",2)):i("",!0)],2),s.status==="yes"&&s.track_name==="verification"?(n(),o("div",de,t[8]||(t[8]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"lg:w-20 w-[70px] lg:mx-12 mx-auto lg:mt-6 mt-14 mb-2"},null,-1),c(" Congratulations! ")]))):i("",!0)]),e("div",{class:u(r(V)?"hidden":"")},[r(_)?(n(),o("div",me,[s.status==="yes"&&s.track_name==="advising"?(n(),o("div",fe,[t[9]||(t[9]=e("p",{class:"text-sm pb-2 text-center"},"Please Submit Proof of Payment:",-1)),r(b)===""?(n(),o("img",xe)):(n(),o("img",{key:1,src:r(b),class:"w-[100px] h-[100px] mx-auto"},null,8,be)),e("input",{type:"file",onChange:A,accept:"capture=camera, image/*, image/png, image/jpeg",capture:"",class:"my-5 w-full border"},null,32),e("div",{onClick:M,class:"py-1 px-10 border-2 border-green-900 w-fit mx-auto rounded-md my-2 hover:bg-green-900 hover:text-white cursor-pointer"}," Submit")])):i("",!0)])):i("",!0),r(h)?(n(),o("div",he,[s.status==="yes"&&s.track_name==="advising"?(n(),o("div",we,t[10]||(t[10]=[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg",class:"w-[100px] mx-auto lg:mt-0 mt-14"},null,-1),e("p",{class:"text-center mt-5 leading-tight lg:text-sm text-xs"},"Please check later while the accounting officer verify your receipt, Thank you!",-1)]))):i("",!0)])):i("",!0)],2)]))),128))])):(n(),o("div",ye,[r(D)?(n(),o("div",ve," Sorry, No results Found! ")):i("",!0)]))]),e("div",ke,[e("div",_e,[t[18]||(t[18]=e("p",{class:"font-bold text-green-900 text-3xl mb-10 mt-10"},"Enrollment Steps",-1)),e("ul",Se,[t[16]||(t[16]=y('<li class="w-full mb-5 border"><span class="justify-evenly flex bg-green-800 text-white py-1 font-bold"><span class="w-full">Step One:</span><span class="w-full uppercase">Admissions</span></span><span class="block relative text-center"><a href="https://lsu.edu.ph/admissions/form" class="font-bold w-full flex justify-center py-4 cursor-pointer bg-white text-green-800 hover:text-white hover:bg-green-800"> ONLINE : Admissions Online Form </a></span></li><li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Step Two:</span><span class="w-full uppercase">Advising</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONSITE : Visit College Offices | Campus </span></li>',2)),e("li",Te,[t[14]||(t[14]=e("span",{class:"justify-between flex bg-green-800 py-1 font-bold"},[e("span",{class:"w-full"},"Step Three:"),e("span",{class:"w-full uppercase"},"Payment")],-1)),t[15]||(t[15]=e("span",{class:"bg-white border-b text-green-800 font-bold w-full flex justify-center py-4"},[c(" ONSITE Accounting Office or "),e("br"),c(" Via Online Payment Methods ")],-1)),e("div",{onClick:t[2]||(t[2]=s=>p.value=!r(p))},t[13]||(t[13]=[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"hover:border-4 hover:rounded-lg border-green-800"},null,-1)]))]),t[17]||(t[17]=y('<li class="w-full mb-5 border text-white"><span class="justify-between flex bg-green-800 py-1 font-bold"><span class="w-full">Last Step:</span><span class="w-full uppercase">Verification</span></span><span class="bg-white text-green-800 font-bold w-full flex justify-center py-4"> ONLINE : Verification | Email Notification </span></li>',1))])])])]),r(p)?(n(),o("div",Ne,[e("img",{onClick:t[3]||(t[3]=s=>p.value=!r(p)),src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/PaymentMethods.jpg",class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] border-[40px] hover:border-4 hover:border-red-500 border-green-900 rounded-2xl"})])):i("",!0)]),w(z)])}}};export{Ae as default};
