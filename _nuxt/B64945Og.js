import{_}from"./B5o8oL3p.js";import{e as S,u as q,r as u,g as C,c as k,a as e,b as U,h as o,v as b,f as l,i as z,t as V,j as c,n as g,x as A,m as d,o as B}from"./CIMSVYR2.js";import"./5JjjnmY2.js";import{_ as j}from"./DlAUqK2U.js";import"./C5S46NFB.js";const T={class:""},D={class:"flex"},E={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},R={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},L={class:"flex items-center w-full px-2"},N={class:"text-sm"},F={class:"w-full"},M={class:"bg-green-800"},O={class:"lg:flex mx-auto justify-between py-2 px-3.5"},$={class:"lg:flex lg:items-center text-white gap-5"},H={class:"text-xs lg:mb-5"},P={class:"lg:p-5 p-2"},Y={class:"lg:w-11/12 mx-auto shadow-lg lg:p-5 border mt-5 rounded-lg"},G={class:"lg:flex gap-2 lg:mb-3"},I={class:"lg:w-full lg:mb-0 mb-2"},J={class:"lg:w-full lg:mb-0 mb-2"},K={class:"lg:w-full lg:mb-0 mb-2"},Q={class:"lg:flex gap-2 lg:mb-3"},W={class:"lg:w-full lg:mb-0 mb-2"},X={class:"lg:w-full lg:mb-0 mb-2"},Z={class:"lg:w-full lg:mb-0 mb-2"},ee={class:"lg:w-6/12 lg:mb-0 mb-2"},te={class:"lg:flex gap-2 lg:mb-3"},le={class:"lg:w-6/12 lg:mb-0 mb-2"},se={class:"lg:w-full lg:mb-0 mb-2"},ae={class:"lg:w-5/12 lg:mb-0 mb-2"},re={class:"lg:w-5/12 lg:mb-0 mb-2"},oe={class:"text-center w-full p-2 bg-red-700 text-white uppercase mt-10"},ie={class:"text-center w-full p-2 bg-green-900 text-white uppercase mt-10"},de={__name:"index",setup(ue){const m=S(),r=q(),f=u(r.mainDevServer),v=u(r.user.developerEmail);C(()=>{r.user.isAuthenticated&&(r.user.email===v.value||r.user.email==="monaliza.mugot@lsu.edu.ph"||r.user.email==="marilyn.bejec@lsu.edu.ph"||r.user.email==="applejane.ebarle@lsu.edu.ph"||r.user.email==="janekaren.gudmalin@lsu.edu.ph"||r.user.email==="macy.beniola@lsu.edu.ph"||r.user.email==="lynn.lumacad@lsu.edu.ph"||r.user.email==="zosette.salas@lsu.edu.ph")&&m.push("/library/dashboard/appointment/reports/books/create")});const s=u({call_number:"",author:"",title:"",barcode:"",year:"",date_acquired:"",status:"",sublocation:"",circulation:"",number_of_copies:"",created_by_email:""});let n=u(!1),p=u(!1),i=u(!0);const w=()=>{m.push("/_/lib-admin"),r.removeToken()},h=async()=>{console.log("submitForm"),s.value.created_by_email=r.user.email,await $fetch(f.value+"/api/library/reports/book/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:s.value}).then(async x=>{x.status==="errors"?(p.value=!0,setTimeout(()=>{p.value=!1},1e4)):(n.value=!0,setTimeout(()=>{n.value=!1,s.value={}},2e3))})};return(x,t)=>{const y=_;return B(),k("div",T,[e("div",D,[o(e("div",E,[e("div",R,[e("div",L,[t[13]||(t[13]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",N,V(l(r).user.email),1)]),e("div",{onClick:t[0]||(t[0]=a=>c(i)?i.value=!l(i):i=!l(i)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:g(["fa text-3xl text-white",l(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[14]||(t[14]=z('<div class="min-h-[570px]" data-v-85ebcdf2><div class="w-fit mx-auto mt-5 mb-3" data-v-85ebcdf2><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full" data-v-85ebcdf2></div><div class="text-center" data-v-85ebcdf2><h2 class="font-bold text-green-800 text-lg" data-v-85ebcdf2>Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-85ebcdf2><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-85ebcdf2><i class="fa fa-list mr-3" aria-hidden="true" data-v-85ebcdf2></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-85ebcdf2><i class="fa fa-book mr-3" aria-hidden="true" data-v-85ebcdf2></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-85ebcdf2><i class="fa fa-calendar mr-3.5" aria-hidden="true" data-v-85ebcdf2></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-85ebcdf2><i class="fa fa-globe mr-3" aria-hidden="true" data-v-85ebcdf2></i> LSU HOME PAGE </a></div></div>',1))],512),[[b,l(i)]]),e("div",F,[e("div",M,[e("div",O,[e("div",$,[e("div",{onClick:t[1]||(t[1]=a=>c(i)?i.value=!l(i):i=!l(i)),class:"w-10 px-1.5"},[e("i",{class:g(["fa text-3xl text-white",l(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:w,class:"flex hover:font-bold pt-1"},t[15]||(t[15]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",H,[e("div",P,[t[28]||(t[28]=e("div",{class:"mt-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter"}," Record Book Details ",-1)),e("form",{onSubmit:A(h,["prevent"])},[e("div",Y,[e("div",G,[e("div",I,[t[16]||(t[16]=e("label",{class:"text-[10px] text-gray-600"}," Call Number ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Call Number","onUpdate:modelValue":t[2]||(t[2]=a=>l(s).call_number=a),required:""},null,512),[[d,l(s).call_number]])]),e("div",J,[t[17]||(t[17]=e("label",{class:"text-[10px] text-gray-600"}," Author ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Author","onUpdate:modelValue":t[3]||(t[3]=a=>l(s).author=a),required:""},null,512),[[d,l(s).author]])]),e("div",K,[t[18]||(t[18]=e("label",{class:"text-[10px] text-gray-600"}," Title ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Title","onUpdate:modelValue":t[4]||(t[4]=a=>l(s).title=a),required:""},null,512),[[d,l(s).title]])])]),e("div",Q,[e("div",W,[t[19]||(t[19]=e("label",{class:"text-[10px] text-gray-600"}," Barcode ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Barcode","onUpdate:modelValue":t[5]||(t[5]=a=>l(s).barcode=a),required:""},null,512),[[d,l(s).barcode]])]),e("div",X,[t[20]||(t[20]=e("label",{class:"text-[10px] text-gray-600"}," Date Acquired ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Date Acquired","onUpdate:modelValue":t[6]||(t[6]=a=>l(s).date_acquired=a),required:""},null,512),[[d,l(s).date_acquired]])]),e("div",Z,[t[21]||(t[21]=e("label",{class:"text-[10px] text-gray-600"}," Sublocation ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Sublocation","onUpdate:modelValue":t[7]||(t[7]=a=>l(s).sublocation=a),required:""},null,512),[[d,l(s).sublocation]])]),e("div",ee,[t[22]||(t[22]=e("label",{class:"text-[10px] text-gray-600"}," Year ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Year","onUpdate:modelValue":t[8]||(t[8]=a=>l(s).year=a),required:""},null,512),[[d,l(s).year]])])]),e("div",te,[e("div",le,[t[23]||(t[23]=e("label",{class:"text-[10px] text-gray-600"}," Status ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Status","onUpdate:modelValue":t[9]||(t[9]=a=>l(s).status=a),required:""},null,512),[[d,l(s).status]])]),e("div",se,[t[24]||(t[24]=e("label",{class:"text-[10px] text-gray-600"}," Created By ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 lowercase",placeholder:"Created By","onUpdate:modelValue":t[10]||(t[10]=a=>l(r).user.email=a),disabled:""},null,512),[[d,l(r).user.email]])]),e("div",ae,[t[25]||(t[25]=e("label",{class:"text-[10px] text-gray-600"}," Circulation ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Circulation","onUpdate:modelValue":t[11]||(t[11]=a=>l(s).circulation=a),required:""},null,512),[[d,l(s).circulation]])]),e("div",re,[t[26]||(t[26]=e("label",{class:"text-[10px] text-gray-600"}," Number of Copies ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Number of Copies","onUpdate:modelValue":t[12]||(t[12]=a=>l(s).number_of_copies=a),required:""},null,512),[[d,l(s).number_of_copies]])])]),o(e("div",oe," All Fields are Required! ",512),[[b,l(p)]]),o(e("div",ie," Record Added! ",512),[[b,l(n)]]),t[27]||(t[27]=e("div",{class:"mt-5 w-fit mx-auto"},[e("button",{class:"text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"}," Submit ")],-1))])],32)])])])]),U(y)])}}},ce=j(de,[["__scopeId","data-v-85ebcdf2"]]);export{ce as default};
