"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[93509],{93509:function(a,e,t){var i=t(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=i(t(78926)),n=i(t(43421)),d=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,u=/\d+/i,l={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},s={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},h={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},f={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},o={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},P={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},c={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},w={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},y={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},b={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},p={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:u,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:w,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:y,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},v=p;e["default"]=v,a.exports=e.default}}]);
//# sourceMappingURL=93509.ea961356.js.map