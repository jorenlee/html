import{o as r,c as l,a as e,d as a,x as i}from"./BAZbkzMV.js";const n=i('<div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG" class="lg:w-24 w-20 mx-auto"></div><div class="text-center"><h1 class="font-bold text-green-800 text-3xl">Welcome!</h1><h2 class="font-bold text-green-800 text-lg"> Procurement&#39;s Admin Portal </h2></div>',2),c={class:"mx-auto mt-10 mb-5 grid grid-cols-1"},x=e("i",{class:"fa fa-list mr-3","aria-hidden":"true"},null,-1),m=e("i",{class:"fa fa-plus-circle mr-3","aria-hidden":"true"},null,-1),u=e("a",{href:"/",class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[e("i",{class:"fa fa-globe mr-3","aria-hidden":"true"}),a(" LSU HOME PAGE ")],-1),h={__name:"ProcurementMenuBar",props:["goToList","goToCreate"],setup(t){return(d,o)=>(r(),l("div",null,[n,e("div",c,[e("button",{onClick:o[0]||(o[0]=(...s)=>t.goToList&&t.goToList(...s)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[x,a(" procurement list ")]),e("button",{onClick:o[1]||(o[1]=(...s)=>t.goToCreate&&t.goToCreate(...s)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[m,a(" CREATE ")]),u])]))}};export{h as _};
