import{l,r as t,p as i,c,t as p,h as _,o as d}from"./kn4BmnqY.js";import"./5JjjnmY2.js";/* empty css        */import{_ as u}from"./DlAUqK2U.js";const m={class:""},f={__name:"index",setup(v){const o=l(),n=t(o.mainDevServer);let s=t(null),r=t(0);return i(async()=>{let e=await $fetch(n.value+"/api/admissions/list/").catch(a=>a.data);s.value=e,r.value=e.length||0}),(e,a)=>(d(),c("div",m,p(JSON.stringify(_(s))),1))}},y=u(f,[["__scopeId","data-v-d8428e8e"]]);export{y as default};
