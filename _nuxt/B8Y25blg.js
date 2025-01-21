import{_ as h}from"./B-3OALYq.js";import{_ as q}from"./CYKallNo.js";import{e as S,u as V,r as u,h as k,c as z,a as e,j as r,v as b,f as t,b as g,k as C,n as U,t as B,l as A,m as i,o as T}from"./BrIoDVT1.js";import"./5JjjnmY2.js";import{_ as D}from"./DlAUqK2U.js";import"./C5S46NFB.js";const j={class:""},N={class:"flex"},R={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},F={class:"w-full"},M={class:"bg-green-800"},$={class:"lg:flex mx-auto justify-between py-2 px-3.5"},E={class:"lg:flex lg:items-center text-white gap-5"},O={class:"flex -mt-1"},L={class:"text-sm"},Y={class:"text-xs lg:mb-5"},I={class:"lg:p-5 p-2"},P={class:"lg:w-11/12 mx-auto shadow-lg lg:p-5 border mt-5 rounded-lg"},G={class:"lg:flex gap-2 lg:mb-3"},H={class:"lg:w-full lg:mb-0 mb-2"},J={class:"lg:w-full lg:mb-0 mb-2"},K={class:"lg:w-full lg:mb-0 mb-2"},Q={class:"lg:flex gap-2 lg:mb-3"},W={class:"lg:w-full lg:mb-0 mb-2"},X={class:"lg:w-full lg:mb-0 mb-2"},Z={class:"lg:w-full lg:mb-0 mb-2"},ee={class:"lg:w-6/12 lg:mb-0 mb-2"},le={class:"lg:flex gap-2 lg:mb-3"},te={class:"lg:w-6/12 lg:mb-0 mb-2"},se={class:"lg:w-full lg:mb-0 mb-2"},ae={class:"lg:w-5/12 lg:mb-0 mb-2"},oe={class:"lg:w-5/12 lg:mb-0 mb-2"},re={class:"text-center w-full p-2 bg-red-700 text-white uppercase mt-10"},ie={class:"text-center w-full p-2 bg-green-900 text-white uppercase mt-10"},de={__name:"index",setup(ue){const m=S(),o=V(),c=u(o.mainDevServer),f=u(o.user.developerEmail);k(()=>{o.user.isAuthenticated&&(o.user.email===f.value||o.user.email==="monaliza.mugot@lsu.edu.ph"||o.user.email==="marilyn.bejec@lsu.edu.ph"||o.user.email==="applejane.ebarle@lsu.edu.ph"||o.user.email==="janekaren.gudmalin@lsu.edu.ph"||o.user.email==="macy.beniola@lsu.edu.ph"||o.user.email==="lynn.lumacad@lsu.edu.ph")&&m.push("/_/panels/library/appointment/reports/books/create")});const s=u({call_number:"",author:"",title:"",barcode:"",year:"",date_acquired:"",status:"",sublocation:"",circulation:"",number_of_copies:"",created_by_email:""});let n=u(!1),p=u(!1),d=u(!0);const y=()=>{m.push("/_/lib-admin"),o.removeToken()},w=async()=>{console.log("submitForm"),s.value.created_by_email=o.user.email,await $fetch(c.value+"/api/library/reports/book/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(async x=>{x.status==="errors"?(p.value=!0,setTimeout(()=>{p.value=!1},1e4)):(n.value=!0,setTimeout(()=>{n.value=!1,s.value={}},2e3))})};return(x,l)=>{const v=h,_=q;return T(),z("div",j,[e("div",N,[r(e("div",R,[g(v)],512),[[b,t(d)]]),e("div",F,[e("div",M,[e("div",$,[e("div",E,[e("div",{onClick:l[0]||(l[0]=a=>C(d)?d.value=!t(d):d=!t(d)),class:"w-10 px-1.5"},[e("i",{class:U(["fa text-3xl text-white",t(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",O,[l[12]||(l[12]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",L,B(t(o).user.email),1)])]),e("button",{onClick:y,class:"flex hover:font-bold pt-1"},l[13]||(l[13]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Y,[e("div",I,[l[26]||(l[26]=e("div",{class:"mt-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter"}," Record Book Details ",-1)),e("form",{onSubmit:A(w,["prevent"])},[e("div",P,[e("div",G,[e("div",H,[l[14]||(l[14]=e("label",{class:"text-[10px] text-gray-600"}," Call Number ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Call Number","onUpdate:modelValue":l[1]||(l[1]=a=>t(s).call_number=a),required:""},null,512),[[i,t(s).call_number]])]),e("div",J,[l[15]||(l[15]=e("label",{class:"text-[10px] text-gray-600"}," Author ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Author","onUpdate:modelValue":l[2]||(l[2]=a=>t(s).author=a),required:""},null,512),[[i,t(s).author]])]),e("div",K,[l[16]||(l[16]=e("label",{class:"text-[10px] text-gray-600"}," Title ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Title","onUpdate:modelValue":l[3]||(l[3]=a=>t(s).title=a),required:""},null,512),[[i,t(s).title]])])]),e("div",Q,[e("div",W,[l[17]||(l[17]=e("label",{class:"text-[10px] text-gray-600"}," Barcode ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Barcode","onUpdate:modelValue":l[4]||(l[4]=a=>t(s).barcode=a),required:""},null,512),[[i,t(s).barcode]])]),e("div",X,[l[18]||(l[18]=e("label",{class:"text-[10px] text-gray-600"}," Date Acquired ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Date Acquired","onUpdate:modelValue":l[5]||(l[5]=a=>t(s).date_acquired=a),required:""},null,512),[[i,t(s).date_acquired]])]),e("div",Z,[l[19]||(l[19]=e("label",{class:"text-[10px] text-gray-600"}," Sublocation ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Sublocation","onUpdate:modelValue":l[6]||(l[6]=a=>t(s).sublocation=a),required:""},null,512),[[i,t(s).sublocation]])]),e("div",ee,[l[20]||(l[20]=e("label",{class:"text-[10px] text-gray-600"}," Year ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Year","onUpdate:modelValue":l[7]||(l[7]=a=>t(s).year=a),required:""},null,512),[[i,t(s).year]])])]),e("div",le,[e("div",te,[l[21]||(l[21]=e("label",{class:"text-[10px] text-gray-600"}," Status ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Status","onUpdate:modelValue":l[8]||(l[8]=a=>t(s).status=a),required:""},null,512),[[i,t(s).status]])]),e("div",se,[l[22]||(l[22]=e("label",{class:"text-[10px] text-gray-600"}," Created By ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 lowercase",placeholder:"Created By","onUpdate:modelValue":l[9]||(l[9]=a=>t(o).user.email=a),disabled:""},null,512),[[i,t(o).user.email]])]),e("div",ae,[l[23]||(l[23]=e("label",{class:"text-[10px] text-gray-600"}," Circulation ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Circulation","onUpdate:modelValue":l[10]||(l[10]=a=>t(s).circulation=a),required:""},null,512),[[i,t(s).circulation]])]),e("div",oe,[l[24]||(l[24]=e("label",{class:"text-[10px] text-gray-600"}," Number of Copies ",-1)),r(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Number of Copies","onUpdate:modelValue":l[11]||(l[11]=a=>t(s).number_of_copies=a),required:""},null,512),[[i,t(s).number_of_copies]])])]),r(e("div",re," All Fields are Required! ",512),[[b,t(p)]]),r(e("div",ie," Record Added! ",512),[[b,t(n)]]),l[25]||(l[25]=e("div",{class:"mt-5 w-fit mx-auto"},[e("button",{class:"text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"}," Submit ")],-1))])],32)])])])]),g(_)])}}},ce=D(de,[["__scopeId","data-v-c840004f"]]);export{ce as default};
