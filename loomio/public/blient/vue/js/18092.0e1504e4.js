"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[18092],{18092:function(i,a,e){var t=e(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(e(78926)),r=t(e(43421)),d=/^(\d+)(th|st|nd|rd)?/i,u=/\d+/i,s={narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},h={any:[/^قبل/i,/^بعد/i]},o={narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i},c={narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^غ/i,/^ش/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^فب/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^غشت/i,/^ش/i,/^أك/i,/^ن/i,/^د/i]},m={narrow:/^[حنثرخجس]/i,short:/^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},P={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الإثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^إث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},w={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},v={ordinalNumber:(0,n.default)({matchPattern:d,parsePattern:u,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(i){return Number(i)+1}}),month:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},b=v;a["default"]=b,i.exports=a.default}}]);
//# sourceMappingURL=18092.0e1504e4.js.map