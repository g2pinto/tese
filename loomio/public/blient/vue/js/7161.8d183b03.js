"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[7161],{7161:function(i,a,t){var e=t(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=e(t(43421)),r=e(t(78926)),d=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,u={narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},h={any:[/^قبل/i,/^بعد/i]},o={narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i},c={narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^ف/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^أغ/i,/^س/i,/^أك/i,/^ن/i,/^د/i]},m={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},P={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},w={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},v={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:s,valueCallback:function(i){return parseInt(i,10)}}),era:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},y=v;a["default"]=y,i.exports=a.default}}]);
//# sourceMappingURL=7161.8d183b03.js.map