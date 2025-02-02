import{_ as B}from"./CixDCCxP.js";import{_ as G}from"./DqBNADsZ.js";import{r as m,u as O,c as r,b as v,G as w,n as s,a as e,d as i,v as g,B as b,C as T,x as M,E as f,F as R,D as I,A as L,o as n,t as E}from"./By_D9HbC.js";import{_ as z}from"./5JjjnmY2.js";import{X as _}from"./B6QOvX_b.js";import"./C5S46NFB.js";import"./DlAUqK2U.js";const H={class:"bg-gray-50"},q={key:0},W={class:"border-t-2 border-green-700 shadow-lg my-5 w-11/12 mx-auto"},$={class:""},j={class:"lg:p-5 px-2 pt-3 pb-2 gap-3"},X={class:"w-full lg:mb-0 mb-7"},J={class:"w-full gap-3"},Y={class:"gap-3 w-full"},K={class:"lg:flex gap-3 lg:mb-2 w-full mx-auto"},Q={class:"w-full mb-2"},Z={class:"w-full mb-2"},ee={class:"w-full mb-2"},le={class:"lg:flex gap-3 w-full mx-auto"},te={class:"lg:w-8/12 w-full mb-2"},se={class:"w-full"},ae={class:"lg:w-4/12 w-full"},oe={class:"lg:flex mb-2 w-full"},ie={class:"lg:block w-full lg:shadow-none border-green-500"},re={class:"w-full shadow-2xl border-gray-200"},ne={key:0,class:"border-b-2 border-green-700"},de={key:1,class:"border-b-2 border-green-700"},ue={key:2,class:"border-b-2 border-green-700"},pe={key:0,class:"w-full mx-auto lg:bg-white lg:shadow-2xl lg:border-2 lg:my-4 my-3"},me={class:"lg:flex mt-3 lg:pb-5 pb-3 lg:px-5 gap-3"},ge={class:"w-full lg:flex gap-3"},fe={class:"w-full lg:mb-4 mb-3 mx-auto"},ce={class:"w-full lg:mb-4 mb-3 mx-auto"},xe={key:0,class:"w-full"},be={key:0,class:"lg:pb-5 pb-3 lg:px-5"},ve={class:"gap-10"},he={class:"flex items-center justify-between"},we={class:"lg:text-[9px] text-[8px] lg:mr-3 mr-2 font-bold text-white bg-green-800 lg:px-[7px] px-1.5 py-1 h-5 lg:w-5 w-4 rounded-full mt-3"},_e={class:"flex lg:gap-3 gap-1.5 w-full"},ye={class:"w-full"},ke={class:"flex gap-3"},De=["onUpdate:modelValue"],Se={class:"w-full"},Ue={class:"flex gap-3"},Ve=["onUpdate:modelValue"],Ce=["onClick"],Ne={key:0,class:"my-10 text-white bg-red-800 font-bold text-center py-0.5 px-5 block lg:text-sm text-xs"},Ae={key:1,class:""},Ie={__name:"index",setup(Fe){const k=m(!1),D=O();m(D.mainDevServer);const S=m(!0),U=m(!1);m(null);const t=m({main_in_charge_fullname:"",email_address:"",mobile_phone_number:"",type_of_access:"",date:"",approved_activities_link:"",approved_booking_document_gso_link:"",lists_names_link:"",few_name_list:[{fullname:"",email:""}],approval_status:"pending",remarks:""}),d=m(!1),u=m(!1),p=m(!1),c=m(!1),x=m(!1),V=async o=>{t.value.few_name_list.push({fullname:o.fullname,email:o.email})},C=o=>{t.value.few_name_list.length>0&&z.pull(t.value.few_name_list,o)},N=async()=>{t.value.date===""?console.log("Please Input Date!"):(t.value.remarks="-",console.log(t.value.date))},A=()=>{t.value.date=null,t.value.type_of_access==="Individual Day Use"&&(p.value=!1,d.value=!1,u.value=!0),t.value.type_of_access==="Individual Overtime"&&(p.value=!1,d.value=!1,u.value=!0),t.value.type_of_access==="Individual Date Range"?(p.value=!1,d.value=!0,u.value=!1):t.value.type_of_access==="Small Group Day Use"||t.value.type_of_access==="Small Group Overtime"?(p.value=!1,d.value=!1,u.value=!0,c.value=!0,x.value=!1):t.value.type_of_access==="Small Group Date Range"?(p.value=!1,d.value=!0,u.value=!1,c.value=!0,x.value=!1):t.value.type_of_access==="Crowd Based Day Use"||t.value.type_of_access==="Crowd Based Overtime"?(p.value=!1,d.value=!1,u.value=!0,c.value=!1,x.value=!0):t.value.type_of_access==="Crowd Based Date Range"?(p.value=!1,d.value=!0,u.value=!1,c.value=!1,x.value=!0):t.value.type_of_access==="Short Urgent Access"&&(t.value.date=Date.now(),p.value=!0,d.value=!1,u.value=!1,c.value=!1,x.value=!1)};return(o,l)=>{const F=B,P=G;return n(),r("div",H,[v(F),l[29]||(l[29]=w('<div class=""><div class="relative"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/about.jpg" class="align-top w-full h-auto lg:object-fill lg:block hidden"><img src="https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/enrollment/enrollmentbg-mobile-lower-size.png" class="align-top w-full min-h-40 pt-12 lg:hidden block"><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full"><h1 class="lg:block hidden font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto"> Campus Pass </h1></div><div class="shadow-lg"><div class="w-11/12 mx-auto flex justify-between"><ul class="flex lasalle-green-text capitalize text-xs pt-2.5 pb-3"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/campus-pass" class="mr-1"> Campus Pass Form </a></li></ul><ul class="flex hover:text-green-800 text-white"><li class="px-3 h-full flex items-center capitalize text-xs"><a href="/_/campus-pass-admin" class="flex items-center"><span class="">Admin Login</span></a></li><li class="hover:bg-green-800 bg-white hover:text-white text-green-800 px-3 h-full flex items-center capitalize text-xs"><a href="/_/campus-pass-admin" class="flex items-center"><i class="fa fa-user" aria-hidden="true"></i></a></li></ul></div></div></div></div>',1)),s(S)?(n(),r("div",q,[e("form",{onSubmit:L(N,["prevent"])},[e("div",W,[e("div",$,[l[26]||(l[26]=e("h2",{class:"lg:text-base text-xs px-10 uppercase py-2 font-bold bg-green-900 text-white text-center"},[e("i",{class:"fa fa-address-card text-white mr-2"}),i(" Campus Pass Entry Form ")],-1)),e("div",j,[e("div",X,[e("div",J,[e("div",Y,[e("div",K,[e("div",Q,[l[11]||(l[11]=e("label",{class:"text-xs text-gray-900 lg:block pb-2 font-bold"},[e("i",{class:"text-md mr-2 ml-1 fa fa-id-badge text-green-800"}),i("Applicant Full Name ")],-1)),g(e("input",{type:"text",class:"px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"e.g Juan Dela Cruz","onUpdate:modelValue":l[0]||(l[0]=a=>s(t).main_in_charge_fullname=a)},null,512),[[b,s(t).main_in_charge_fullname]])]),e("div",Z,[l[12]||(l[12]=e("label",{class:"text-xs text-gray-900 lg:block pb-2 font-bold"},[e("i",{class:"text-md mr-2 ml-1 fa fa-envelope text-green-800"}),i(" LSU Email Address ")],-1)),g(e("input",{type:"email",class:"px-2 w-full border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"LSU Email e.g sample@lsu.edu.ph","onUpdate:modelValue":l[1]||(l[1]=a=>s(t).email_address=a)},null,512),[[b,s(t).email_address]])]),e("div",ee,[l[13]||(l[13]=e("label",{class:"text-xs text-gray-900 lg:block pb-2 font-bold"},[e("i",{class:"text-md mr-2 ml-1 fa fa-phone text-green-800"}),i(" Mobile Phone Number ")],-1)),g(e("input",{type:"text",class:"px-2 w-full capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Mobile Phone Number","onUpdate:modelValue":l[2]||(l[2]=a=>s(t).mobile_phone_number=a)},null,512),[[b,s(t).mobile_phone_number]])])]),e("div",le,[e("div",te,[e("div",se,[l[15]||(l[15]=e("label",{class:"text-xs text-gray-900 lg:block pb-2 font-bold"},[e("i",{class:"text-md mr-2 ml-1 fa fa-universal-access text-green-800"}),i(" Type of Access ")],-1)),g(e("select",{"onUpdate:modelValue":l[3]||(l[3]=a=>s(t).type_of_access=a),name:"type_of_access",class:"shadow-lg pl-2 pr-3 lg:py-2.5 py-0.5 text-xs w-full border-b-2 border-green-700 capitalize lg:h-[38px] h-8",required:"",onChange:l[4]||(l[4]=a=>A())},l[14]||(l[14]=[w('<option value="" disabled selected hidden> Select Category </option><option value="Short Urgent Access">Short Urgent Access to be accompanied by guard on duty</option><option value="Individual Day Use">Individual - Day Time Pass : From 3 AM to 10 PM</option><option value="Individual Overtime">Individual - Overtime Pass : Within 24 Hours 12 Noon to 12 Noon the Next Day</option><option value="Individual Date Range">Individual - More Than 24 Hours with Engr. Larubis Remarks For Time Schedule</option><option value="Small Group Day Use">Small Group - Day Time Pass : From 3 AM to 10 PM</option><option value="Small Group Overtime">Small Group - Overtime Pass : Within 24 Hours 12 Noon to 12 Noon the Next Day</option><option value="Small Group Date Range">Small Group - More Than 24 Hours with Engr. Larubis Remarks For Time Schedule</option><option value="Crowd Based Day Use">Crowd Based - Day Time Pass : From 3 AM to 10 PM</option><option value="Crowd Based Overtime">Crowd Based - Overtime Pass : Within 24 Hours 12 Noon to 12 Noon the Next Day</option><option value="Crowd Based Date Range">Crowd Based - More Than 24 Hours with Engr. Larubis Remarks For Time Schedule</option>',11)]),544),[[T,s(t).type_of_access]])])]),e("div",ae,[g(e("div",oe,[e("div",ie,[l[16]||(l[16]=e("label",{class:"text-xs text-gray-900 lg:block pb-2 lg:w-auto w-6/12 whitespace-nowrap lg:mr-0 mr-3 font-bold"},[e("i",{class:"text-md mr-2 ml-1 fa fa-calendar text-green-800"}),i(" Schedule ")],-1)),e("div",re,[s(d)?(n(),r("div",ne,[v(s(_),{modelValue:s(t).date,"onUpdate:modelValue":l[5]||(l[5]=a=>s(t).date=a),"enable-time-picker":!1,name:"date","auto-apply":"",highlight:o.highlightedDates,"year-range":[2025,2025],range:"","week-start":"0","allowed-dates":o.highlightedDates,"min-date":o.minDate},null,8,["modelValue","highlight","allowed-dates","min-date"])])):f("",!0),s(u)?(n(),r("div",de,[v(s(_),{modelValue:s(t).date,"onUpdate:modelValue":l[6]||(l[6]=a=>s(t).date=a),"enable-time-picker":!1,name:"date","auto-apply":"",highlight:o.highlightedDates,"year-range":[2025,2025],"week-start":"0","allowed-dates":o.highlightedDates,"min-date":o.minDate},null,8,["modelValue","highlight","allowed-dates","min-date"])])):f("",!0),s(p)?(n(),r("div",ue,[v(s(_),{modelValue:s(t).date,"onUpdate:modelValue":l[7]||(l[7]=a=>s(t).date=a),"enable-time-picker":!1,name:"date","auto-apply":"",highlight:o.highlightedDates,"year-range":[2025,2025],"week-start":"0","allowed-dates":o.highlightedDates,"min-date":o.minDate,disabled:""},null,8,["modelValue","highlight","allowed-dates","min-date"])])):f("",!0)])])],512),[[M,s(t).type_of_access!==""]])])])])])]),s(c)||s(x)?(n(),r("div",pe,[l[25]||(l[25]=e("div",{class:"border-y bg-white"},[e("div",{class:"w-fit flex items-center mx-auto gap-2 px-3 uppercase font-bold lg:text-sm text-xs text-center cursor-pointer py-2 text-green-800"},[e("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/Google_Drive.png",class:"h-5 w-5"}),i(" Supporting Documents ")])],-1)),e("div",me,[e("div",ge,[e("div",fe,[l[17]||(l[17]=e("label",{class:"text-xs text-gray-900 lg:block pb-1 whitespace-nowrap"},[e("i",{class:"fa fa-link mx-2 text-green-900"}),i("Approved Booking Document (From GSO) ")],-1)),e("div",null,[g(e("input",{type:"url",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Google Drive Link","onUpdate:modelValue":l[8]||(l[8]=a=>s(t).approved_booking_document_gso_link=a)},null,512),[[b,s(t).approved_booking_document_gso_link]])])]),e("div",ce,[l[18]||(l[18]=e("label",{class:"text-xs text-gray-900 lg:block pb-1"},[e("i",{class:"fa fa-link mx-2 text-green-900"}),i("Approved Activities ")],-1)),e("div",null,[g(e("input",{type:"url",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Google Drive Link","onUpdate:modelValue":l[9]||(l[9]=a=>s(t).approved_activities_link=a)},null,512),[[b,s(t).approved_activities_link]])])])]),s(x)?(n(),r("div",xe,[l[19]||(l[19]=e("label",{class:"text-xs text-gray-900 lg:block pb-1"},[e("i",{class:"fa fa-link mx-2 text-green-900"}),i("Lists of Names By Bulk ")],-1)),e("div",null,[g(e("input",{type:"url",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-8 text-xs",placeholder:"Google Drive Link","onUpdate:modelValue":l[10]||(l[10]=a=>s(t).lists_names_link=a)},null,512),[[b,s(t).lists_names_link]])])])):f("",!0)]),s(c)?(n(),r("div",be,[l[24]||(l[24]=e("h1",{class:"text-center uppercase font-bold lg:mb-5 mb-4 text-xs border-y py-2"},"List of Names",-1)),e("div",ve,[(n(!0),r(R,null,I(s(t).few_name_list,(a,y)=>(n(),r("div",{class:"gap-3 w-full lg:py-2 py-1",key:y},[e("div",he,[e("div",we,E(y+1),1),e("div",_e,[e("div",ye,[l[20]||(l[20]=e("label",{class:"text-xs text-gray-900 lg:block pb-1"},[e("i",{class:"fa fa-user mr-2 ml-1 text-green-900"}),i("Full Name ")],-1)),e("div",null,[e("div",ke,[g(e("input",{type:"text",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-7 text-xs","onUpdate:modelValue":h=>a.fullname=h,placeholder:"Full Name"},null,8,De),[[b,a.fullname]])])])]),e("div",Se,[l[21]||(l[21]=e("label",{class:"text-xs text-gray-900 lg:block pb-1"},[e("i",{class:"fa fa-envelope mr-2 ml-1 text-green-900"}),i("Email ")],-1)),e("div",null,[e("div",Ue,[g(e("input",{type:"email",class:"w-full px-2 border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm lg:h-9 h-7 text-xs","onUpdate:modelValue":h=>a.email=h,placeholder:"Email"},null,8,Ve),[[b,a.email]])])])])]),s(t).few_name_list.length>1?(n(),r("div",{key:0,onClick:h=>C(a),class:"cursor-pointer mt-5 ml-2 shadow-lg bg-white hover:bg-red-700 text-red-700 hover:text-white font-bold w-fit lg:px-1.5 px-1 py-1.5 flex items-center rounded-lg text-lg border border-red-700"},l[22]||(l[22]=[e("i",{class:"fa fa-close lg:text-sm text-xs"},null,-1)]),8,Ce)):f("",!0)])]))),128))]),e("div",{onClick:V,class:"mt-5 cursor-pointer shadow-lg bg-white hover:bg-yellow-500 text-yellow-500 hover:text-white font-bold w-fit mx-auto text-center py-1 px-4 rounded-lg lg:text-sm text-xs border border-yellow-500 mb-3"},l[23]||(l[23]=[e("i",{class:"fa fa-plus mr-2 font-bold"},null,-1),i(" ADD ")]))])):f("",!0)])):f("",!0)]),s(k)?(n(),r("div",Ne," All fields are required information. Otherwise, type N/A if not applicable. ")):f("",!0),l[27]||(l[27]=e("div",{class:"pb-5 lg:px-5 px-3 mb-5"},[e("button",{class:"px-10 lg:rounded-lg rounded-md bg-green-900 text-white font-bold lg:py-2 py-1.5 lg:w-fit w-full mx-auto block uppercase hover:bg-white border-2 border-green-900 hover:text-green-900 lg:text-sm text-xs"},[e("i",{class:"fa fa-paper-plane mr-2","aria-hidden":"true"}),i(" Submit ")])],-1))])])],32)])):f("",!0),s(U)?(n(),r("div",Ae,l[28]||(l[28]=[w('<div class="lg:flex gap-10 lg:rounded-4xl bg-white lg:px-14 px-3 py-1 w-fit mx-auto lg:my-10 shadow-sm rounded-xl"><div class="flex items-center"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/icons/check-mark-icon-isolated-on-white-background-vector-26464923.jpg" class="lg:w-44 w-20 mx-auto lg:mt-0 mt-14"></div><div class="text-xl text-green-900 text-center w-fit mx-auto lg:py-20 py-5"><h1 class="font-bold text-3xl">Thanks for submitting! </h1><p class="font-light pt-3 pb-10"> your request has been sent! </p><a href="https://lsu.edu.ph/campus-pass" class="bg-green-800 text-white rounded-3xl py-1.5 px-10 lg:mb-0 mb-5 mx-auto block w-fit">Campus Pass</a></div></div>',1)]))):f("",!0),v(P)])}}};export{Ie as default};
