"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[72495,49714,29983,35458,87563,12324],{49714:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},n=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],r=function(e,t,r){var i,d=a[e];return i="string"===typeof d?d:1===t?d.one:r&&r.onlyNumeric?d.other.replace("{{count}}",String(t)):d.other.replace("{{count}}",t<13?n[t]:String(t)),null!==r&&void 0!==r&&r.addSuffix?r.comparison&&r.comparison>0?"om "+i:i+" sidan":i},i=r;t["default"]=i,e.exports=t.default},29983:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(a(20289)),i={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},d={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:d,defaultWidth:"full"}),dateTime:(0,r.default)({formats:o,defaultWidth:"full"})},l=u;t["default"]=l,e.exports=t.default},35458:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},n=function(e,t,n,r){return a[e]},r=n;t["default"]=r,e.exports=t.default},87563:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(a(16245)),i={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},d={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},o={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},u={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},l={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},m=function(e,t){var a=Number(e);return a+"."},s={ordinalNumber:m,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:o,defaultWidth:"wide"}),day:(0,r.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide"})},f=s;t["default"]=f,e.exports=t.default},12324:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(a(43421)),i=n(a(78926)),d=/^(\d+)\.?/i,o=/\d+/i,u={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},l={any:[/^f/i,/^e/i]},m={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},s={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},v={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},h={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},p={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},c={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},g={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},b={ordinalNumber:(0,i.default)({matchPattern:d,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:c,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})},k=b;t["default"]=k,e.exports=t.default},72495:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(a(49714)),i=n(a(29983)),d=n(a(35458)),o=n(a(87563)),u=n(a(12324)),l={code:"nn",formatDistance:r.default,formatLong:i.default,formatRelative:d.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},m=l;t["default"]=m,e.exports=t.default}}]);
//# sourceMappingURL=72495.f4a7bd2f.js.map