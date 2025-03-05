import{r as f,g as W,p as X,W as T,X as v,H as F,I as S,e as I,M as Q,o as Y,c as Z,V as ee,n as c}from"./Cy7AKqhU.js";const w=Symbol(),E=f(!1),C=f(!1),B=f(!1),A=f(0);let b=null;const ne=()=>{const n=document.createElement("script");return n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n},te=()=>{C.value=!0,b=ne(),document.head.appendChild(b),b.onload=()=>{C.value=!1,E.value=!0},b.onerror=()=>{C.value=!1,B.value=!0}};W(()=>A.value,(n,o)=>{n>0&&!E.value&&!C.value&&te()});function x(){return X(()=>{A.value++}),T(()=>{A.value--}),{scriptLoaded:v(E),scriptLoadError:v(B)}}const oe=F({__name:"GoogleSignInButton",props:{oneTap:{type:Boolean},autoSelect:{type:Boolean},loginUri:{},cancelOnTapOutside:{type:Boolean},promptParentId:{},nonce:{},context:{},stateCookieDomain:{},uxMode:{},allowedParentOrigin:{},itpSupport:{type:Boolean},type:{},theme:{},size:{},text:{},shape:{},logoAlignment:{},width:{},locale:{}},emits:["success","error","intermediateIframeCloseCallback","nativeCallback","promptMomentNotification"],setup(n,{emit:o}){const t={large:40,medium:32,small:20},e=n,a=o,_=S(w),d=f(null),{scriptLoaded:s}=x();I(()=>{var l,i,m,u;s.value&&((l=window.google)==null||l.accounts.id.initialize({client_id:_,callback:r=>{if(!r.credential){a("error");return}a("success",r)},allowed_parent_origin:e.allowedParentOrigin,auto_select:e.autoSelect,cancel_on_tap_outside:e.cancelOnTapOutside,context:e.context,intermediate_iframe_close_callback:()=>{a("intermediateIframeCloseCallback")},itp_support:e.itpSupport,login_uri:e.loginUri,native_callback:r=>{a("nativeCallback",r)},nonce:e.nonce,prompt_parent_id:e.promptParentId,state_cookie_domain:e.stateCookieDomain,ux_mode:e.uxMode}),(m=window.google)==null||m.accounts.id.renderButton(d.value,{type:e.type,theme:e.theme,size:e.size,text:e.text,shape:e.shape,logo_alignment:e.logoAlignment,width:(i=e.width)==null?void 0:i.toString(),locale:e.locale}),e.oneTap&&((u=window.google)==null||u.accounts.id.prompt(r=>{a("promptMomentNotification",r)})))}),T(()=>{var l;e.oneTap&&((l=window.google)==null||l.accounts.id.cancel())});const p=Q(()=>t[e.size||"large"]);return(l,i)=>(Y(),Z("div",{ref_key:"targetElement",ref:d,style:ee({display:"inline-flex",height:p.value})},null,4))}});function re(n,o,...t){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAllScopes(n,o,...t))||!1}function ce(n,o,...t){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAnyScope(n,o,...t))||!1}function se(n,o){var t;(t=window.google)==null||t.accounts.oauth2.revoke(n,()=>{o==null||o()})}function ae(n){const o="https://accounts.google.com/o/oauth2/v2/auth",t=new URLSearchParams({gsiwebsdk:"3",client_id:n.client_id,scope:n.scope,include_granted_scopes:"true",access_type:"offline",response_type:"code",prompt:"consent"});return n.hint&&t.append("hint",n.hint),n.hosted_domain&&t.append("hosted_domain",n.hosted_domain),n.redirect_uri===void 0?t.append("redirect_uri",window.origin):t.append("redirect_uri",n.redirect_uri),n.select_account===void 0?t.append("select_account","false"):t.append("select_account",`${n.select_account}`),n.enable_serial_consent===void 0?t.append("enable_serial_consent","false"):t.append("enable_serial_consent",`${n.enable_serial_consent}`),n.state&&t.append("state",n.state),`${o}?${t.toString()}`}function ue(n={}){const{scope:o="",onError:t,onSuccess:e,...a}=n,{scriptLoaded:_}=x(),d=S(w),s=f(!1),p=f(null);let l;return I(()=>{var i;if(s.value=!1,!_.value)return;const m=c(o),u=`openid email profile ${Array.isArray(m)?m.join(" "):m}`;p.value=ae({client_id:d,scope:u,...a}),l=(i=window.google)==null?void 0:i.accounts.oauth2.initCodeClient({client_id:d,scope:u,callback:r=>{if(r.error)return t==null?void 0:t(r);e==null||e(r)},...a}),s.value=!0}),{isReady:v(s),login:()=>l==null?void 0:l.requestCode(),codeRequestRedirectUrl:v(p)}}function de(n){const{disableAutomaticPrompt:o=!1,onSuccess:t,onError:e,onPromptMomentNotification:a,onNativeCallback:_,onIntermediateIframeCloseCallback:d,autoSelect:s,loginUri:p,cancelOnTapOutside:l,promptParentId:i,nonce:m,context:u,stateCookieDomain:r,allowedParentOrigin:G,itpSupport:R}=n||{},{scriptLoaded:U}=x(),$=S(w),h=f(!1),z=()=>{var k;return h.value&&((k=window.google)==null?void 0:k.accounts.id.prompt(y=>a==null?void 0:a(y)))};return I(k=>{var y,O;if(h.value=!1,!U.value)return;const L=!c(o),M=c(s),N=c(p),j=c(i),q=c(m),D=c(u),H=c(r),J=c(G),V=c(R),K=c(l);(y=window.google)==null||y.accounts.id.initialize({client_id:$,callback:g=>{if(!g.credential){e==null||e();return}t==null||t(g)},native_callback:g=>{_==null||_(g)},intermediate_iframe_close_callback:()=>{d==null||d()},auto_select:M,allowed_parent_origin:J,context:D,itp_support:V,login_uri:N,nonce:q,prompt_parent_id:j,state_cookie_domain:H,cancel_on_tap_outside:K}),h.value=!0,L&&((O=window.google)==null||O.accounts.id.prompt(g=>a==null?void 0:a(g))),k(()=>{var g;(g=window.google)==null||g.accounts.id.cancel()})}),{isReady:v(h),login:z}}function pe(n={}){const{scope:o="",onError:t,onSuccess:e,...a}=n,{scriptLoaded:_}=x(),d=S(w),s=f(!1);let p;return I(()=>{var l;if(s.value=!1,!_.value)return;const i=c(o),m=Array.isArray(i)?i.join(" "):i;p=(l=window.google)==null?void 0:l.accounts.oauth2.initTokenClient({client_id:d,scope:`openid email profile ${m}`,callback:u=>{if(u.error)return t==null?void 0:t(u);e==null||e(u)},...a}),s.value=!0}),{isReady:v(s),login:l=>p==null?void 0:p.requestAccessToken(l)}}function me(n,o){var t;(t=window.google)==null||t.accounts.id.revoke(n,e=>{o==null||o(e)})}function ge(n){const o=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),t=decodeURIComponent(window.atob(o).split("").map(a=>`%${("00"+a.charCodeAt(0).toString(16)).slice(-2)}`).join("")),e=JSON.parse(t);return{email:e.email,email_verified:e.email_verified,hd:e.hd,family_name:e.family_name,given_name:e.given_name,name:e.name,picture:e.picture,id:e.sub,iat:e.iat,exp:e.exp}}const le="GoogleSignInPlugin",P=n=>`[${le}]: ${n}`,fe={install(n,o){if(!o)throw new Error(P("initialize plugin by passing an options object"));if(!o.clientId||o.clientId&&o.clientId.trim().length===0)throw new Error(P("clientId is required to initialize"));n.provide(w,o.clientId),n.component("GoogleSignInButton",oe)}};export{oe as GoogleSignInButton,le as PLUGIN_NAME,ae as buildCodeRequestRedirectUrl,ge as decodeCredential,fe as default,re as hasGrantedAllScopes,ce as hasGrantedAnyScopes,me as idRevoke,se as revokeAccessToken,ue as useCodeClient,x as useGsiScript,de as useOneTap,pe as useTokenClient};
