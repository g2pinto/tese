"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[16436],{16436:function(a,i,e){var t=e(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(e(43421)),n=t(e(78926)),o=/^(\d+)\./i,s=/\d+/i,u={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,wide:/^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i},d={any:[/^pr/i,/^(po|nova)/i]},l={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},p={any:[/1/i,/2/i,/3/i,/4/i]},j={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,wide:/^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},v={narrow:[/1/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i,/8/i,/9/i,/10/i,/11/i,/12/i],abbreviated:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i],wide:[/^sij/i,/^velj/i,/^(ožu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i]},c={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i},f={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h={any:/^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i},k={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(navece|naveče)/i,night:/(nocu|noću)/i}},b={ordinalNumber:(0,n.default)({matchPattern:o,parsePattern:s,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"wide"}),day:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:k,defaultParseWidth:"any"})},P=b;i["default"]=P,a.exports=i.default}}]);
//# sourceMappingURL=16436.85ab9ab4.js.map