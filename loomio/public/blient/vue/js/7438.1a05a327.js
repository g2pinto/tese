"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[7438],{7438:function(a,i,e){var t=e(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(e(43421)),n=t(e(78926)),l=/^(\d+)(º)?/i,d=/\d+/i,s={narrow:/^(q|w)/i,abbreviated:/^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,wide:/^(qabel kristu|before common era|wara kristu|common era)/i},u={any:[/^(q|b)/i,/^(w|c)/i]},f={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](\.)? kwart/i},o={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[jfmaglsond]/i,abbreviated:/^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,wide:/^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i},m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^ġ/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mej/i,/^ġ/i,/^l/i,/^aw/i,/^s/i,/^o/i,/^n/i,/^d/i]},w={narrow:/^[ħteġs]/i,short:/^(ħa|tn|tl|er|ħa|ġi|si)/i,abbreviated:/^(ħad|tne|tli|erb|ħam|ġim|sib)/i,wide:/^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i},b={narrow:[/^ħ/i,/^t/i,/^t/i,/^e/i,/^ħ/i,/^ġ/i,/^s/i],any:[/^(il-)?ħad/i,/^(it-)?tn/i,/^(it-)?tl/i,/^(l-)?er/i,/^(il-)?ham/i,/^(il-)?ġi/i,/^(is-)?si/i]},c={narrow:/^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,any:/^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i},j={any:{am:/^a/i,pm:/^p/i,midnight:/^f'nofsillejl/i,noon:/^f'nofsinhar/i,morning:/għodwa/i,afternoon:/wara(\s.*)nofsinhar/i,evening:/filgħaxija/i,night:/lejl/i}},p={ordinalNumber:(0,n.default)({matchPattern:l,parsePattern:d,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:c,defaultMatchWidth:"any",parsePatterns:j,defaultParseWidth:"any"})},P=p;i["default"]=P,a.exports=i.default}}]);
//# sourceMappingURL=7438.1a05a327.js.map