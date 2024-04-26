"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[81590,65047,44818,20942,97031,71636],{65047:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lessThanXSeconds:{one:"1びょうみまん",other:"{{count}}びょうみまん",oneWithSuffix:"やく1びょう",otherWithSuffix:"やく{{count}}びょう"},xSeconds:{one:"1びょう",other:"{{count}}びょう"},halfAMinute:"30びょう",lessThanXMinutes:{one:"1ぷんみまん",other:"{{count}}ふんみまん",oneWithSuffix:"やく1ぷん",otherWithSuffix:"やく{{count}}ふん"},xMinutes:{one:"1ぷん",other:"{{count}}ふん"},aboutXHours:{one:"やく1じかん",other:"やく{{count}}じかん"},xHours:{one:"1じかん",other:"{{count}}じかん"},xDays:{one:"1にち",other:"{{count}}にち"},aboutXWeeks:{one:"やく1しゅうかん",other:"やく{{count}}しゅうかん"},xWeeks:{one:"1しゅうかん",other:"{{count}}しゅうかん"},aboutXMonths:{one:"やく1かげつ",other:"やく{{count}}かげつ"},xMonths:{one:"1かげつ",other:"{{count}}かげつ"},aboutXYears:{one:"やく1ねん",other:"やく{{count}}ねん"},xYears:{one:"1ねん",other:"{{count}}ねん"},overXYears:{one:"1ねんいじょう",other:"{{count}}ねんいじょう"},almostXYears:{one:"1ねんちかく",other:"{{count}}ねんちかく"}},n=function(e,t,n){var o;n=n||{};var r=a[e];return o="string"===typeof r?r:1===t?n.addSuffix&&r.oneWithSuffix?r.oneWithSuffix:r.one:n.addSuffix&&r.otherWithSuffix?r.otherWithSuffix.replace("{{count}}",String(t)):r.other.replace("{{count}}",String(t)),n.addSuffix?n.comparison&&n.comparison>0?o+"あと":o+"まえ":o},o=n;t["default"]=o,e.exports=t.default},44818:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(20289)),r={full:"yねんMがつdにちEEEE",long:"yねんMがつdにち",medium:"y/MM/dd",short:"y/MM/dd"},i={full:"Hじmmふんssびょう zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},d={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,o.default)({formats:r,defaultWidth:"full"}),time:(0,o.default)({formats:i,defaultWidth:"full"}),dateTime:(0,o.default)({formats:d,defaultWidth:"full"})},f=u;t["default"]=f,e.exports=t.default},20942:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lastWeek:"せんしゅうのeeeeのp",yesterday:"きのうのp",today:"きょうのp",tomorrow:"あしたのp",nextWeek:"よくしゅうのeeeeのp",other:"P"},n=function(e,t,n,o){return a[e]},o=n;t["default"]=o,e.exports=t.default},97031:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(16245)),r={narrow:["BC","AC"],abbreviated:["きげんぜん","せいれき"],wide:["きげんぜん","せいれき"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["だい1しはんき","だい2しはんき","だい3しはんき","だい4しはんき"]},d={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"],wide:["1がつ","2がつ","3がつ","4がつ","5がつ","6がつ","7がつ","8がつ","9がつ","10がつ","11がつ","12がつ"]},u={narrow:["にち","げつ","か","すい","もく","きん","ど"],short:["にち","げつ","か","すい","もく","きん","ど"],abbreviated:["にち","げつ","か","すい","もく","きん","ど"],wide:["にちようび","げつようび","かようび","すいようび","もくようび","きんようび","どようび"]},f={narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},l={narrow:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},abbreviated:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"},wide:{am:"ごぜん",pm:"ごご",midnight:"しんや",noon:"しょうご",morning:"あさ",afternoon:"ごご",evening:"よる",night:"しんや"}},s=function(e,t){var a=Number(e),n=String(null===t||void 0===t?void 0:t.unit);switch(n){case"year":return"".concat(a,"ねん");case"quarter":return"だい".concat(a,"しはんき");case"month":return"".concat(a,"がつ");case"week":return"だい".concat(a,"しゅう");case"date":return"".concat(a,"にち");case"hour":return"".concat(a,"じ");case"minute":return"".concat(a,"ふん");case"second":return"".concat(a,"びょう");default:return"".concat(a)}},c={ordinalNumber:s,era:(0,o.default)({values:r,defaultWidth:"wide"}),quarter:(0,o.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide"}),day:(0,o.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},h=c;t["default"]=h,e.exports=t.default},71636:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(43421)),r=n(a(78926)),i=/^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i,d=/\d+/i,u={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(きげん[前後]|せいれき)/i,wide:/^(きげん[前後]|せいれき)/i},f={narrow:[/^B/i,/^A/i],any:[/^(きげんぜん)/i,/^(せいれき|きげんご)/i]},l={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^だい[1234一二三四１２３４]しはんき/i},s={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},c={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])がつ/i,wide:/^([123456789]|1[012])がつ/i},h={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},m={narrow:/^(にち|げつ|か|すい|もく|きん|ど)/,short:/^(にち|げつ|か|すい|もく|きん|ど)/,abbreviated:/^(にち|げつ|か|すい|もく|きん|ど)/,wide:/^(にち|げつ|か|すい|もく|きん|ど)ようび/},v={any:[/^にち/,/^げつ/,/^か/,/^すい/,/^もく/,/^きん/,/^ど/]},p={any:/^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i},b={any:{am:/^(A|ごぜん)/i,pm:/^(P|ごご)/i,midnight:/^しんや|まよなか/i,noon:/^しょうご/i,morning:/^あさ/i,afternoon:/^ごご/i,evening:/^よる/i,night:/^しんや/i}},g={ordinalNumber:(0,r.default)({matchPattern:i,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=g;t["default"]=w,e.exports=t.default},81590:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(65047)),r=n(a(44818)),i=n(a(20942)),d=n(a(97031)),u=n(a(71636)),f={code:"ja-Hira",formatDistance:o.default,formatLong:r.default,formatRelative:i.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},l=f;t["default"]=l,e.exports=t.default}}]);
//# sourceMappingURL=81590.86c66606.js.map