import{g as l,r as s,h as i,c,t as p,f as _,o as u}from"./Dg5c85YJ.js";import"./vUEbHlag.js";/* empty css        */import{_ as m}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const d={class:""},f={__name:"index",setup(v){const a=l(),n=s(a.mainDevServer);let e=s(null),r=s(0);return i(async()=>{let t=await $fetch(n.value+"/api/admissions/list/").catch(o=>o.data);e.value=t,console.log("enrolleesList.value",e.value),r.value=t.length||0}),(t,o)=>(u(),c("div",d,p(JSON.stringify(_(e))),1))}},k=m(f,[["__scopeId","data-v-ec110563"]]);export{k as default};
