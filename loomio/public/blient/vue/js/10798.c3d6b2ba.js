"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[10798],{10798:function(a,e,i){var t=i(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=t(i(43421)),n=t(i(78926)),s=/^ke-(\d+)?/i,u=/\d+/i,m={narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},d={any:[/^s/i,/^(m|e)/i]},l={narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},h={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},f={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},b={narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},p={narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},g={narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},c={any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},j={ordinalNumber:(0,n.default)({matchPattern:s,parsePattern:u,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:g,defaultMatchWidth:"any",parsePatterns:c,defaultParseWidth:"any"})},w=j;e["default"]=w,a.exports=e.default}}]);
//# sourceMappingURL=10798.c3d6b2ba.js.map