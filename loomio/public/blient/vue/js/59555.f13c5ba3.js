"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[59555],{59555:function(i,a,e){var t=e(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(e(43421)),n=t(e(78926)),d=/^(\d+)\./i,u=/\d+/i,s={narrow:/^(пр\.н\.е\.|АД)/i,abbreviated:/^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,wide:/^(Пре Христа|пре нове ере|После Христа|нова ера)/i},l={any:[/^пр/i,/^(по|нова)/i]},h={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?кв\.?/i,wide:/^[1234]\. квартал/i},f={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,wide:/^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i},c={narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ја/i,/^ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^авг/i,/^с/i,/^о/i,/^н/i,/^д/i]},P={narrow:/^[пусчн]/i,short:/^(нед|пон|уто|сре|чет|пет|суб)/i,abbreviated:/^(нед|пон|уто|сре|чет|пет|суб)/i,wide:/^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i},w={narrow:[/^п/i,/^у/i,/^с/i,/^ч/i,/^п/i,/^с/i,/^н/i],any:[/^нед/i,/^пон/i,/^уто/i,/^сре/i,/^чет/i,/^пет/i,/^суб/i]},y={any:/^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^поно/i,noon:/^под/i,morning:/ујутру/i,afternoon:/(после\s|по)+подне/i,evening:/(увече)/i,night:/(ноћу)/i}},p={ordinalNumber:(0,n.default)({matchPattern:d,parsePattern:u,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:y,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},v=p;a["default"]=v,i.exports=a.default}}]);
//# sourceMappingURL=59555.f13c5ba3.js.map