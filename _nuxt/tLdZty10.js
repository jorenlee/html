import{q as u,r as p,c as t,a as e,F as o,l as d,o as n,O as g,n as _,f as b}from"./2IV8EIEV.js";import{_ as f}from"./DlAUqK2U.js";const h={class:"slider-wrapper"},y={class:"slider"},k=["id"],v={class:"dots"},C=["href","onClick"],x={__name:"community-calendar",setup($){u();const l=[{id:1,image:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m3.png"},{id:2,image:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m2.png"},{id:3,image:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/m1.png"}],i=p(3),m=r=>{i.value=r};return(r,c)=>(n(),t("div",null,[e("div",h,[e("div",y,[(n(),t(o,null,d(l,(s,a)=>e("div",{id:`calendar-${s.id}`,key:a,class:"calendar",style:g(`background-image: url(${s.image});`)},null,12,k)),64))]),e("div",v,[(n(),t(o,null,d(l,(s,a)=>e("a",{href:`#calendar-${s.id}`,key:a,onClick:B=>m(s.id),class:_([s.id===b(i)?"bg-green-600":"bg-black"])},null,10,C)),64))])]),c[0]||(c[0]=e("p",{class:"mb-10 text-center"},"Use the arrow keys or dots to navigate",-1))]))}},z=f(x,[["__scopeId","data-v-dfa357ab"]]);export{z as default};
