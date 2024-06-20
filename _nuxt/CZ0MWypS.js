import{r as _,H as V,h as F,R as P,S as f,D as W,E as S,U as I,B as X,o as Y,c as Z,Q as ee,f as c}from"./DDRVD3IU.js";const w=Symbol(),E=_(!1),C=_(!1),R=_(!1),x=_(0);let b=null;const ne=()=>{const n=document.createElement("script");return n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n},oe=()=>{C.value=!0,b=ne(),document.head.appendChild(b),b.onload=()=>{C.value=!1,E.value=!0},b.onerror=()=>{C.value=!1,R.value=!0}};V(()=>x.value,(n,t)=>{n>0&&!E.value&&!C.value&&oe()});function A(){return F(()=>{x.value++}),P(()=>{x.value--}),{scriptLoaded:f(E),scriptLoadError:f(R)}}const te=W({__name:"GoogleSignInButton",props:{oneTap:{type:Boolean},autoSelect:{type:Boolean},loginUri:{},cancelOnTapOutside:{type:Boolean},promptParentId:{},nonce:{},context:{},stateCookieDomain:{},uxMode:{},allowedParentOrigin:{},itpSupport:{type:Boolean},type:{},theme:{},size:{},text:{},shape:{},logoAlignment:{},width:{},locale:{}},emits:["success","error","intermediateIframeCloseCallback","nativeCallback","promptMomentNotification"],setup(n,{emit:t}){const o={large:40,medium:32,small:20},e=n,a=t,v=S(w),d=_(null),{scriptLoaded:s}=A();I(()=>{var i,r,m,u;s.value&&((i=window.google)==null||i.accounts.id.initialize({client_id:v,callback:l=>{if(!l.clientId||!l.credential){a("error");return}a("success",l)},allowed_parent_origin:e.allowedParentOrigin,auto_select:e.autoSelect,cancel_on_tap_outside:e.cancelOnTapOutside,context:e.context,intermediate_iframe_close_callback:()=>{a("intermediateIframeCloseCallback")},itp_support:e.itpSupport,login_uri:e.loginUri,native_callback:l=>{a("nativeCallback",l)},nonce:e.nonce,prompt_parent_id:e.promptParentId,state_cookie_domain:e.stateCookieDomain,ux_mode:e.uxMode}),(m=window.google)==null||m.accounts.id.renderButton(d.value,{type:e.type,theme:e.theme,size:e.size,text:e.text,shape:e.shape,logo_alignment:e.logoAlignment,width:(r=e.width)==null?void 0:r.toString(),locale:e.locale}),e.oneTap&&((u=window.google)==null||u.accounts.id.prompt(l=>{a("promptMomentNotification",l)})))}),P(()=>{var i;e.oneTap&&((i=window.google)==null||i.accounts.id.cancel())});const p=X(()=>o[e.size||"large"]);return(i,r)=>(Y(),Z("div",{ref_key:"targetElement",ref:d,style:ee({display:"inline-flex",height:p.value})},null,4))}});function re(n,t,...o){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAllScopes(n,t,...o))||!1}function ce(n,t,...o){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAnyScope(n,t,...o))||!1}function se(n,t){var o;(o=window.google)==null||o.accounts.oauth2.revoke(n,()=>{t==null||t()})}function ae(n){const t="https://accounts.google.com/o/oauth2/v2/auth",o=new URLSearchParams({gsiwebsdk:"3",client_id:n.client_id,scope:n.scope,include_granted_scopes:"true",access_type:"offline",response_type:"code",prompt:"consent"});return n.hint&&o.append("hint",n.hint),n.hosted_domain&&o.append("hosted_domain",n.hosted_domain),n.redirect_uri===void 0?o.append("redirect_uri",window.origin):o.append("redirect_uri",n.redirect_uri),n.select_account===void 0?o.append("select_account","false"):o.append("select_account",`${n.select_account}`),n.enable_serial_consent===void 0?o.append("enable_serial_consent","false"):o.append("enable_serial_consent",`${n.enable_serial_consent}`),n.state&&o.append("state",n.state),`${t}?${o.toString()}`}function ue(n={}){const{scope:t="",onError:o,onSuccess:e,...a}=n,{scriptLoaded:v}=A(),d=S(w),s=_(!1),p=_(null);let i;return I(()=>{var r;if(s.value=!1,!v.value)return;const m=c(t),u=`openid email profile ${Array.isArray(m)?m.join(" "):m}`;p.value=ae({client_id:d,scope:u,...a}),i=(r=window.google)==null?void 0:r.accounts.oauth2.initCodeClient({client_id:d,scope:u,callback:l=>{if(l.error)return o==null?void 0:o(l);e==null||e(l)},...a}),s.value=!0}),{isReady:f(s),login:()=>i==null?void 0:i.requestCode(),codeRequestRedirectUrl:f(p)}}function de(n){const{disableAutomaticPrompt:t=!1,onSuccess:o,onError:e,onPromptMomentNotification:a,onNativeCallback:v,onIntermediateIframeCloseCallback:d,autoSelect:s,loginUri:p,cancelOnTapOutside:i,promptParentId:r,nonce:m,context:u,stateCookieDomain:l,allowedParentOrigin:T,itpSupport:G}=n||{},{scriptLoaded:U}=A(),$=S(w),h=_(!1),z=()=>{var k;return h.value&&((k=window.google)==null?void 0:k.accounts.id.prompt(y=>a==null?void 0:a(y)))};return I(k=>{var y,B;if(h.value=!1,!U.value)return;const L=!c(t),M=c(s),N=c(p),j=c(r),q=c(m),D=c(u),H=c(l),J=c(T),K=c(G),Q=c(i);(y=window.google)==null||y.accounts.id.initialize({client_id:$,callback:g=>{if(!g.clientId||!g.credential){e==null||e();return}o==null||o(g)},native_callback:g=>{v==null||v(g)},intermediate_iframe_close_callback:()=>{d==null||d()},auto_select:M,allowed_parent_origin:J,context:D,itp_support:K,login_uri:N,nonce:q,prompt_parent_id:j,state_cookie_domain:H,cancel_on_tap_outside:Q}),h.value=!0,L&&((B=window.google)==null||B.accounts.id.prompt(g=>a==null?void 0:a(g))),k(()=>{var g;(g=window.google)==null||g.accounts.id.cancel()})}),{isReady:f(h),login:z}}function pe(n={}){const{scope:t="",onError:o,onSuccess:e,...a}=n,{scriptLoaded:v}=A(),d=S(w),s=_(!1);let p;return I(()=>{var i;if(s.value=!1,!v.value)return;const r=c(t),m=Array.isArray(r)?r.join(" "):r;p=(i=window.google)==null?void 0:i.accounts.oauth2.initTokenClient({client_id:d,scope:`openid email profile ${m}`,callback:u=>{if(u.error)return o==null?void 0:o(u);e==null||e(u)},...a}),s.value=!0}),{isReady:f(s),login:i=>p==null?void 0:p.requestAccessToken(i)}}function me(n,t){var o;(o=window.google)==null||o.accounts.id.revoke(n,e=>{t==null||t(e)})}function ge(n){const t=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(window.atob(t).split("").map(a=>`%${("00"+a.charCodeAt(0).toString(16)).slice(-2)}`).join("")),e=JSON.parse(o);return{email:e.email,email_verified:e.email_verified,hd:e.hd,family_name:e.family_name,given_name:e.given_name,name:e.name,picture:e.picture,id:e.sub}}const ie="GoogleSignInPlugin",O=n=>`[${ie}]: ${n}`,_e={install(n,t){if(!t)throw new Error(O("initialize plugin by passing an options object"));if(!t.clientId||t.clientId&&t.clientId.trim().length===0)throw new Error(O("clientId is required to initialize"));n.provide(w,t.clientId),n.component("GoogleSignInButton",te)}};export{te as GoogleSignInButton,ie as PLUGIN_NAME,ae as buildCodeRequestRedirectUrl,ge as decodeCredential,_e as default,re as hasGrantedAllScopes,ce as hasGrantedAnyScopes,me as idRevoke,se as revokeAccessToken,ue as useCodeClient,A as useGsiScript,de as useOneTap,pe as useTokenClient};
