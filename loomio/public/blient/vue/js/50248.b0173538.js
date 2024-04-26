"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[50248,65282],{65282:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0,a.localeToNumber=s,a.numberToLocale=b;var n=t(i(16245)),r={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}},d={narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},o={narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},u={narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्टू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्टू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"]},l={narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},f={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},h={narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},m=function(e,a){var i=Number(e);return b(i)};function s(e){var a=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return r.number[e]}));return Number(a)}function b(e){return e.toString().replace(/\d/g,(function(e){return r.locale[e]}))}var v={ordinalNumber:m,era:(0,n.default)({values:d,defaultWidth:"wide"}),quarter:(0,n.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:u,defaultWidth:"wide"}),day:(0,n.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:f,defaultWidth:"wide",formattingValues:h,defaultFormattingWidth:"wide"})},c=v;a["default"]=c},50248:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(i(43421)),r=t(i(78926)),d=i(65282),o=/^[०१२३४५६७८९]+/i,u=/^[०१२३४५६७८९]+/i,l={narrow:/^(ईसा-पूर्व|ईस्वी)/i,abbreviated:/^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,wide:/^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i},f={any:[/^b/i,/^(a|c)/i]},h={narrow:/^[1234]/i,abbreviated:/^ति[1234]/i,wide:/^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i},m={any:[/1/i,/2/i,/3/i,/4/i]},s={narrow:/^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,abbreviated:/^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,wide:/^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i},b={narrow:[/^ज/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^न/i,/^दि/i],any:[/^जन/i,/^फ़/i,/^मा/i,/^अप्/i,/^मई/i,/^जू/i,/^जु/i,/^अग/i,/^सि/i,/^अक्तू/i,/^नव/i,/^दिस/i]},v={narrow:/^[रविसोममंगलबुधगुरुशुक्रशनि]/i,short:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,abbreviated:/^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,wide:/^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i},c={narrow:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i],any:[/^रवि/i,/^सोम/i,/^मंगल/i,/^बुध/i,/^गुरु/i,/^शुक्र/i,/^शनि/i]},g={narrow:/^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,any:/^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i},w={any:{am:/^पूर्वाह्न/i,pm:/^अपराह्न/i,midnight:/^मध्य/i,noon:/^दो/i,morning:/सु/i,afternoon:/दो/i,evening:/शा/i,night:/रा/i}},p={ordinalNumber:(0,r.default)({matchPattern:o,parsePattern:u,valueCallback:d.localeToNumber}),era:(0,n.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:g,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},P=p;a["default"]=P,e.exports=a.default}}]);
//# sourceMappingURL=50248.b0173538.js.map