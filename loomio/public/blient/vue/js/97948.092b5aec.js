"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[97948],{97948:function(a,e,t){var i=t(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var d=i(t(43421)),r=i(t(78926)),n=/^(\d+)(일|번째)?/i,s=/\d+/i,u={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},l={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},h={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},c={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},o={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},b={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},P={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},m={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},p={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},y={ordinalNumber:(0,r.default)({matchPattern:n,parsePattern:s,valueCallback:function(a){return parseInt(a,10)}}),era:(0,d.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,d.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,d.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),day:(0,d.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,d.default)({matchPatterns:m,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},w=y;e["default"]=w,a.exports=e.default}}]);
//# sourceMappingURL=97948.092b5aec.js.map