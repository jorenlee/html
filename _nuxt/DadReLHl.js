import{C as G,E as A,s as N,t as g,b as I,L as Y,i as j,f as U,u as Z,a as B,o as D,g as k,p as M}from"./CVGsxPRv.js";import"./ug6darJv.js";import"./CE4Lklnx.js";import"./Zh2z4y1s.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import"./upsvKRUO.js";/* empty css        */import"./DlAUqK2U.js";const h=1,F=2,L=3,K=4,H=5,J=36,ee=37,te=38,Oe=11,oe=13;function ne(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function re(e){return e==9||e==10||e==13||e==32}let Q=null,V=null,X=0;function W(e,t){let o=e.pos+t;if(V==e&&X==o)return Q;for(;re(e.peek(t));)t++;let O="";for(;;){let n=e.peek(t);if(!ne(n))break;O+=String.fromCharCode(n),t++}return V=e,X=o,Q=O||null}function _(e,t){this.name=e,this.parent=t}const ae=new G({start:null,shift(e,t,o,O){return t==h?new _(W(O,1)||"",e):e},reduce(e,t){return t==Oe&&e?e.parent:e},reuse(e,t,o,O){let n=t.type.id;return n==h||n==oe?new _(W(O,1)||"",e):e},strict:!1}),le=new A((e,t)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let o=W(e,0);if(!o)return e.acceptToken(H);if(t.context&&o==t.context.name)return e.acceptToken(F);for(let O=t.context;O;O=O.parent)if(O.name==o)return e.acceptToken(L,-2);e.acceptToken(K)}else if(e.next!=33&&e.next!=63)return e.acceptToken(h)}},{contextual:!0});function y(e,t){return new A(o=>{let O=0,n=t.charCodeAt(0);e:for(;!(o.next<0);o.advance(),O++)if(o.next==n){for(let a=1;a<t.length;a++)if(o.peek(a)!=t.charCodeAt(a))continue e;break}O&&o.acceptToken(e)})}const se=y(J,"-->"),ie=y(ee,"?>"),ce=y(te,"]]>"),me=N({Text:g.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":g.angleBracket,TagName:g.tagName,"MismatchedCloseTag/TagName":[g.tagName,g.invalid],AttributeName:g.attributeName,AttributeValue:g.attributeValue,Is:g.definitionOperator,"EntityReference CharacterReference":g.character,Comment:g.blockComment,ProcessingInst:g.processingInstruction,DoctypeDecl:g.documentMeta,Cdata:g.special(g.string)}),ue=I.deserialize({version:14,states:",lOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DT'#DTOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C|'#C|O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C}'#C}O$dOrO,59^OOOP,59^,59^OOOS'#DO'#DOO$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6z-E6zOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6{-E6{OOOP1G.x1G.xOOOS-E6|-E6|OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'mO!bO,59eOOOO-E6w-E6wO'{OpO1G.uO'{OpO1G.uOOOP1G.u1G.uO(TOpO7+$fOOOP7+$f7+$fO(]O!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(hO#tO'#CnO(vO&jO'#CnOOOO1G.q1G.qO)UOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO)^O#tO,59YOOOO,59Y,59YOOOO'#C{'#C{O)lO&jO,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.tOOOO-E6y-E6y",stateData:")z~OPQOSVOTWOVWOWWOXWOiXOyPO!QTO!SUO~OvZOx]O~O^`Oz^O~OPQOQcOSVOTWOVWOWWOXWOyPO!QTO!SUO~ORdO~P!SOteO!PgO~OuhO!RjO~O^lOz^O~OvZOxoO~O^qOz^O~O[vO`sOdwOz^O~ORyO~P!SO^{Oz^O~OteO!P}O~OuhO!R!PO~O^!QOz^O~O[!SOz^O~O[!VO`sOd!WOz^O~Oa!YOz^O~Oz^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oz^O~O[!_Oz^O~O[!aOz^O~O[!cO`sOd!dOz^O~O[!cO`sOd!dO~Oa!eOz^O~Oz^O{!gO}!hO~Oz^O[ma`madma~O[!kOz^O~O[!lOz^O~O[!mO`sOd!nO~OW!qOX!qO{!sO|!qO~OW!tOX!tO}!sO!O!tO~O[!vOz^O~OW!qOX!qO{!yO|!qO~OW!tOX!tO}!yO!O!tO~O",goto:"%cxPPPPPPPPPPyyP!PP!VPP!`!jP!pyyyP!v!|#S$[$k$q$w$}%TPPPP%ZXWORYbXRORYb_t`qru!T!U!bQ!i!YS!p!e!fR!w!oQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!j!oQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!j!]R!o!eQu`S!UqrU![u!U!bR!b!TQ!r!gR!x!rQ!u!hR!z!uQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:50,context:ae,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[me],skippedNodes:[0],repeatNodeCount:9,tokenData:"!)v~R!YOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs*vsv$qvw+fwx/ix}$q}!O0[!O!P$q!P!Q2z!Q![$q![!]4n!]!^$q!^!_8U!_!`!#t!`!a!$l!a!b!%d!b!c$q!c!}4n!}#P$q#P#Q!'W#Q#R$q#R#S4n#S#T$q#T#o4n#o%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U$q4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qi$zXVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qa%nVVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%gP&YTVPOv&Tw!^&T!_;'S&T;'S;=`&i<%lO&TP&lP;=`<%l&T`&tS!O`Ov&ox;'S&o;'S;=`'Q<%lO&o`'TP;=`<%l&oa'ZP;=`<%l%gX'eWVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^W(ST|WOr'}sv'}w;'S'};'S;=`(c<%lO'}W(fP;=`<%l'}X(lP;=`<%l'^h(vV|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oh)`P;=`<%l(oi)fP;=`<%l$qo)t`VP|W!O`zUOX$qXY)iYZ)iZ]$q]^)i^p$qpq)iqr$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk+PV{YVP!O`Ov%gwx&Tx!^%g!^!_&o!_;'S%g;'S;=`'W<%lO%g~+iast,n![!]-r!c!}-r#R#S-r#T#o-r%W%o-r%p&a-r&b1p-r4U4d-r4e$IS-r$I`$Ib-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~,qQ!Q![,w#l#m-V~,zQ!Q![,w!]!^-Q~-VOX~~-YR!Q![-c!c!i-c#T#Z-c~-fS!Q![-c!]!^-Q!c!i-c#T#Z-c~-ug}!O-r!O!P-r!Q![-r![!]-r!]!^/^!c!}-r#R#S-r#T#o-r$}%O-r%W%o-r%p&a-r&b1p-r1p4U-r4U4d-r4e$IS-r$I`$Ib-r$Je$Jg-r$Kh%#t-r&/x&Et-r&FV;'S-r;'S;:j/c?&r?Ah-r?BY?Mn-r~/cOW~~/fP;=`<%l-rk/rW}bVP|WOr'^rs&Tsv'^w!^'^!^!_'}!_;'S'^;'S;=`(i<%lO'^k0eZVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O1W!O!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk1aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a2S!a;'S$q;'S;=`)c<%lO$qk2_X!PQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qm3TZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a3v!a;'S$q;'S;=`)c<%lO$qm4RXdSVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo4{!P`S^QVP|W!O`Or$qrs%gsv$qwx'^x}$q}!O4n!O!P4n!P!Q$q!Q![4n![!]4n!]!^$q!^!_(o!_!c$q!c!}4n!}#R$q#R#S4n#S#T$q#T#o4n#o$}$q$}%O4n%O%W$q%W%o4n%o%p$q%p&a4n&a&b$q&b1p4n1p4U4n4U4d4n4d4e$q4e$IS4n$IS$I`$q$I`$Ib4n$Ib$Je$q$Je$Jg4n$Jg$Kh$q$Kh%#t4n%#t&/x$q&/x&Et4n&Et&FV$q&FV;'S4n;'S;:j8O;:j;=`)c<%l?&r$q?&r?Ah4n?Ah?BY$q?BY?Mn4n?MnO$qo8RP;=`<%l4ni8]Y|W!O`Oq(oqr8{rs&osv(owx'}x!a(o!a!b!#U!b;'S(o;'S;=`)]<%lO(oi9S_|W!O`Or(ors&osv(owx'}x}(o}!O:R!O!f(o!f!g;e!g!}(o!}#ODh#O#W(o#W#XLp#X;'S(o;'S;=`)]<%lO(oi:YX|W!O`Or(ors&osv(owx'}x}(o}!O:u!O;'S(o;'S;=`)]<%lO(oi;OV!QP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oi;lX|W!O`Or(ors&osv(owx'}x!q(o!q!r<X!r;'S(o;'S;=`)]<%lO(oi<`X|W!O`Or(ors&osv(owx'}x!e(o!e!f<{!f;'S(o;'S;=`)]<%lO(oi=SX|W!O`Or(ors&osv(owx'}x!v(o!v!w=o!w;'S(o;'S;=`)]<%lO(oi=vX|W!O`Or(ors&osv(owx'}x!{(o!{!|>c!|;'S(o;'S;=`)]<%lO(oi>jX|W!O`Or(ors&osv(owx'}x!r(o!r!s?V!s;'S(o;'S;=`)]<%lO(oi?^X|W!O`Or(ors&osv(owx'}x!g(o!g!h?y!h;'S(o;'S;=`)]<%lO(oi@QY|W!O`Or?yrs@psv?yvwA[wxBdx!`?y!`!aCr!a;'S?y;'S;=`Db<%lO?ya@uV!O`Ov@pvxA[x!`@p!`!aAy!a;'S@p;'S;=`B^<%lO@pPA_TO!`A[!`!aAn!a;'SA[;'S;=`As<%lOA[PAsOiPPAvP;=`<%lA[aBQSiP!O`Ov&ox;'S&o;'S;=`'Q<%lO&oaBaP;=`<%l@pXBiX|WOrBdrsA[svBdvwA[w!`Bd!`!aCU!a;'SBd;'S;=`Cl<%lOBdXC]TiP|WOr'}sv'}w;'S'};'S;=`(c<%lO'}XCoP;=`<%lBdiC{ViP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiDeP;=`<%l?yiDoZ|W!O`Or(ors&osv(owx'}x!e(o!e!fEb!f#V(o#V#WIr#W;'S(o;'S;=`)]<%lO(oiEiX|W!O`Or(ors&osv(owx'}x!f(o!f!gFU!g;'S(o;'S;=`)]<%lO(oiF]X|W!O`Or(ors&osv(owx'}x!c(o!c!dFx!d;'S(o;'S;=`)]<%lO(oiGPX|W!O`Or(ors&osv(owx'}x!v(o!v!wGl!w;'S(o;'S;=`)]<%lO(oiGsX|W!O`Or(ors&osv(owx'}x!c(o!c!dH`!d;'S(o;'S;=`)]<%lO(oiHgX|W!O`Or(ors&osv(owx'}x!}(o!}#OIS#O;'S(o;'S;=`)]<%lO(oiI]V|W!O`yPOr(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(oiIyX|W!O`Or(ors&osv(owx'}x#W(o#W#XJf#X;'S(o;'S;=`)]<%lO(oiJmX|W!O`Or(ors&osv(owx'}x#T(o#T#UKY#U;'S(o;'S;=`)]<%lO(oiKaX|W!O`Or(ors&osv(owx'}x#h(o#h#iK|#i;'S(o;'S;=`)]<%lO(oiLTX|W!O`Or(ors&osv(owx'}x#T(o#T#UH`#U;'S(o;'S;=`)]<%lO(oiLwX|W!O`Or(ors&osv(owx'}x#c(o#c#dMd#d;'S(o;'S;=`)]<%lO(oiMkX|W!O`Or(ors&osv(owx'}x#V(o#V#WNW#W;'S(o;'S;=`)]<%lO(oiN_X|W!O`Or(ors&osv(owx'}x#h(o#h#iNz#i;'S(o;'S;=`)]<%lO(oi! RX|W!O`Or(ors&osv(owx'}x#m(o#m#n! n#n;'S(o;'S;=`)]<%lO(oi! uX|W!O`Or(ors&osv(owx'}x#d(o#d#e!!b#e;'S(o;'S;=`)]<%lO(oi!!iX|W!O`Or(ors&osv(owx'}x#X(o#X#Y?y#Y;'S(o;'S;=`)]<%lO(oi!#_V!SP|W!O`Or(ors&osv(owx'}x;'S(o;'S;=`)]<%lO(ok!$PXaQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qo!$wX[UVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!%mZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!&`!a;'S$q;'S;=`)c<%lO$qk!&kX!RQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$qk!'aZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_#P$q#P#Q!(S#Q;'S$q;'S;=`)c<%lO$qk!(]ZVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_!`$q!`!a!)O!a;'S$q;'S;=`)c<%lO$qk!)ZXxQVP|W!O`Or$qrs%gsv$qwx'^x!^$q!^!_(o!_;'S$q;'S;=`)c<%lO$q",tokenizers:[le,se,ie,ce,0,1,2,3,4],topRules:{Document:[0,6]},tokenPrec:0});function T(e,t){let o=t&&t.getChild("TagName");return o?e.sliceString(o.from,o.to):""}function C(e,t){let o=t&&t.firstChild;return!o||o.name!="OpenTag"?"":T(e,o)}function $e(e,t,o){let O=t&&t.getChildren("Attribute").find(a=>a.from<=o&&a.to>=o),n=O&&O.getChild("AttributeName");return n?e.sliceString(n.from,n.to):""}function b(e){for(let t=e&&e.parent;t;t=t.parent)if(t.name=="Element")return t;return null}function fe(e,t){var o;let O=k(e).resolveInner(t,-1),n=null;for(let a=O;!n&&a.parent;a=a.parent)(a.name=="OpenTag"||a.name=="CloseTag"||a.name=="SelfClosingTag"||a.name=="MismatchedCloseTag")&&(n=a);if(n&&(n.to>t||n.lastChild.type.isError)){let a=n.parent;if(O.name=="TagName")return n.name=="CloseTag"||n.name=="MismatchedCloseTag"?{type:"closeTag",from:O.from,context:a}:{type:"openTag",from:O.from,context:b(a)};if(O.name=="AttributeName")return{type:"attrName",from:O.from,context:n};if(O.name=="AttributeValue")return{type:"attrValue",from:O.from,context:n};let s=O==n||O.name=="Attribute"?O.childBefore(t):O;return(s==null?void 0:s.name)=="StartTag"?{type:"openTag",from:t,context:b(a)}:(s==null?void 0:s.name)=="StartCloseTag"&&s.to<=t?{type:"closeTag",from:t,context:a}:(s==null?void 0:s.name)=="Is"?{type:"attrValue",from:t,context:n}:s?{type:"attrName",from:t,context:n}:null}else if(O.name=="StartCloseTag")return{type:"closeTag",from:t,context:O.parent};for(;O.parent&&O.to==t&&!(!((o=O.lastChild)===null||o===void 0)&&o.type.isError);)O=O.parent;return O.name=="Element"||O.name=="Text"||O.name=="Document"?{type:"tag",from:t,context:O.name=="Element"?O:b(O)}:null}class Se{constructor(t,o,O){this.attrs=o,this.attrValues=O,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map(n=>({label:n,type:"text"})):[]}}const v=/^[:\-\.\w\u00b7-\uffff]*$/;function E(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function R(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function ge(e,t){let o=[],O=[],n=Object.create(null);for(let r of t){let u=E(r);o.push(u),r.global&&O.push(u),r.values&&(n[r.name]=r.values.map(R))}let a=[],s=[],d=Object.create(null);for(let r of e){let u=O,c=n;r.attributes&&(u=u.concat(r.attributes.map(l=>typeof l=="string"?o.find(p=>p.label==l)||{label:l,type:"property"}:(l.values&&(c==n&&(c=Object.create(c)),c[l.name]=l.values.map(R)),E(l)))));let S=new Se(r,u,c);d[S.name]=S,a.push(S),r.top&&s.push(S)}s.length||(s=a);for(let r=0;r<a.length;r++){let u=e[r],c=a[r];if(u.children)for(let S of u.children)d[S]&&c.children.push(d[S]);else c.children=a}return r=>{var u;let{doc:c}=r.state,S=fe(r.state,r.pos);if(!S||S.type=="tag"&&!r.explicit)return null;let{type:l,from:p,context:$}=S;if(l=="openTag"){let i=s,m=C(c,$);if(m){let f=d[m];i=(f==null?void 0:f.children)||a}return{from:p,options:i.map(f=>f.completion),validFor:v}}else if(l=="closeTag"){let i=C(c,$);return i?{from:p,to:r.pos+(c.sliceString(r.pos,r.pos+1)==">"?1:0),options:[((u=d[i])===null||u===void 0?void 0:u.closeNameCompletion)||{label:i+">",type:"type"}],validFor:v}:null}else if(l=="attrName"){let i=d[T(c,$)];return{from:p,options:(i==null?void 0:i.attrs)||O,validFor:v}}else if(l=="attrValue"){let i=$e(c,$,p);if(!i)return null;let m=d[T(c,$)],f=((m==null?void 0:m.attrValues)||n)[i];return!f||!f.length?null:{from:p,to:r.pos+(c.sliceString(r.pos,r.pos+1)=='"'?1:0),options:f,validFor:/^"[^"]*"?$/}}else if(l=="tag"){let i=C(c,$),m=d[i],f=[],q=$&&$.lastChild;i&&(!q||q.name!="CloseTag"||T(c,q)!=i)&&f.push(m?m.closeCompletion:{label:"</"+i+">",type:"type",boost:2});let P=f.concat(((m==null?void 0:m.children)||($?a:s)).map(x=>x.openCompletion));if($&&(m!=null&&m.text.length)){let x=$.firstChild;x.to>r.pos-20&&!/\S/.test(r.state.sliceDoc(x.to,r.pos))&&(P=P.concat(m.text))}return{from:p,options:P,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const w=Y.define({name:"xml",parser:ue.configure({props:[j.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),U.add({Element(e){let t=e.firstChild,o=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:o.name=="CloseTag"?o.from:e.to}}}),Z.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function We(e={}){let t=[w.data.of({autocomplete:ge(e.elements||[],e.attributes||[])})];return e.autoCloseTags!==!1&&t.push(de),new B(w,t)}function z(e,t,o=e.length){if(!t)return"";let O=t.firstChild,n=O&&O.getChild("TagName");return n?e.sliceString(n.from,Math.min(n.to,o)):""}const de=D.inputHandler.of((e,t,o,O,n)=>{if(e.composing||e.state.readOnly||t!=o||O!=">"&&O!="/"||!w.isActiveAt(e.state,t,-1))return!1;let a=n(),{state:s}=a,d=s.changeByRange(r=>{var u,c,S;let{head:l}=r,p=s.doc.sliceString(l-1,l)==O,$=k(s).resolveInner(l,-1),i;if(p&&O==">"&&$.name=="EndTag"){let m=$.parent;if(((c=(u=m.parent)===null||u===void 0?void 0:u.lastChild)===null||c===void 0?void 0:c.name)!="CloseTag"&&(i=z(s.doc,m.parent,l))){let f=l+(s.doc.sliceString(l,l+1)===">"?1:0),q=`</${i}>`;return{range:r,changes:{from:l,to:f,insert:q}}}}else if(p&&O=="/"&&$.name=="StartCloseTag"){let m=$.parent;if($.from==l-2&&((S=m.lastChild)===null||S===void 0?void 0:S.name)!="CloseTag"&&(i=z(s.doc,m,l))){let f=l+(s.doc.sliceString(l,l+1)===">"?1:0),q=`${i}>`;return{range:M.cursor(l+q.length,-1),changes:{from:l,to:f,insert:q}}}}return{range:r}});return d.changes.empty?!1:(e.dispatch([a,s.update(d,{userEvent:"input.complete",scrollIntoView:!0})]),!0)});export{de as autoCloseTags,ge as completeFromSchema,We as xml,w as xmlLanguage};
