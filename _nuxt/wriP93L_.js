import{s as p,t as e,L as u,a as l,b as m,l as r,q as b,r as n,v as S}from"./CNLhirA4.js";import"./C9Vucxff.js";import"./CFRatIu_.js";import"./YD0WXFwI.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import"./upsvKRUO.js";/* empty css        */import"./DlAUqK2U.js";const c=m.deserialize({version:14,states:"%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",stateData:"$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",goto:"!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",nodeNames:"⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",maxTerm:36,nodeProps:[["isolate",-3,3,13,17,""]],skippedNodes:[0],repeatNodeCount:4,tokenData:"'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",tokenizers:[6,7,new r("b~RP#q#rU~XP#q#r[~aOT~~",17,4),new r("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~",72,2),new r("[~RPwxU~ZOp~~",11,15),new r("[~RPrsU~ZOn~~",11,14),new r("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~",66,35),new r("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~",66,33)],topRules:{Content:[0,1],Attribute:[1,7]},tokenPrec:157}),P=S.parser.configure({top:"SingleExpression"}),o=c.configure({props:[p({Text:e.content,Is:e.definitionOperator,AttributeName:e.attributeName,VueAttributeName:e.keyword,Identifier:e.variableName,"AttributeValue ScriptAttributeValue":e.attributeValue,Entity:e.character,"{{ }}":e.brace,"@ :":e.punctuation})]}),s={parser:P},Q=o.configure({wrap:n((O,t)=>O.name=="InterpolationContent"?s:null)}),g=o.configure({wrap:n((O,t)=>O.name=="AttributeScript"?s:null),top:"Attribute"}),y={parser:Q},R={parser:g},a=b();function i(O){return O.configure({dialect:"selfClosing",wrap:n(X)},"vue")}const T=i(a.language);function X(O,t){switch(O.name){case"Attribute":return/^(@|:|v-)/.test(t.read(O.from,O.from+2))?R:null;case"Text":return y}return null}function j(O={}){let t=a;if(O.base){if(O.base.language.name!="html"||!(O.base.language instanceof u))throw new RangeError("The base option must be the result of calling html(...)");t=O.base}return new l(t.language==a.language?T:i(t.language),[t.support,t.language.data.of({closeBrackets:{brackets:["{",'"']}})])}export{j as vue,T as vueLanguage};
