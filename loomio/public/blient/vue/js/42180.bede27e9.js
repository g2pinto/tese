"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[42180,15525,45161,85071,85598,93509],{15525:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}},n=function(e,t,n){var o;n=n||{};var r=a[e];return o="string"===typeof r?r:1===t?n.addSuffix&&r.oneWithSuffix?r.oneWithSuffix:r.one:n.addSuffix&&r.otherWithSuffix?r.otherWithSuffix.replace("{{count}}",String(t)):r.other.replace("{{count}}",String(t)),n.addSuffix?n.comparison&&n.comparison>0?o+"後":o+"前":o},o=n;t["default"]=o,e.exports=t.default},45161:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(20289)),r={full:"y年M月d日EEEE",long:"y年M月d日",medium:"y/MM/dd",short:"y/MM/dd"},i={full:"H時mm分ss秒 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},d={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,o.default)({formats:r,defaultWidth:"full"}),time:(0,o.default)({formats:i,defaultWidth:"full"}),dateTime:(0,o.default)({formats:d,defaultWidth:"full"})},f=u;t["default"]=f,e.exports=t.default},85071:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lastWeek:"先週のeeeeのp",yesterday:"昨日のp",today:"今日のp",tomorrow:"明日のp",nextWeek:"翌週のeeeeのp",other:"P"},n=function(e,t,n,o){return a[e]},o=n;t["default"]=o,e.exports=t.default},85598:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(16245)),r={narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},d={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},u={narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},f={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},l={narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},s=function(e,t){var a=Number(e),n=String(null===t||void 0===t?void 0:t.unit);switch(n){case"year":return"".concat(a,"年");case"quarter":return"第".concat(a,"四半期");case"month":return"".concat(a,"月");case"week":return"第".concat(a,"週");case"date":return"".concat(a,"日");case"hour":return"".concat(a,"時");case"minute":return"".concat(a,"分");case"second":return"".concat(a,"秒");default:return"".concat(a)}},c={ordinalNumber:s,era:(0,o.default)({values:r,defaultWidth:"wide"}),quarter:(0,o.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide"}),day:(0,o.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},h=c;t["default"]=h,e.exports=t.default},93509:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(78926)),r=n(a(43421)),i=/^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,d=/\d+/i,u={narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(紀元[前後]|西暦)/i,wide:/^(紀元[前後]|西暦)/i},f={narrow:[/^B/i,/^A/i],any:[/^(紀元前)/i,/^(西暦|紀元後)/i]},l={narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^第[1234一二三四１２３４]四半期/i},s={any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},c={narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])月/i,wide:/^([123456789]|1[012])月/i},h={any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},m={narrow:/^[日月火水木金土]/,short:/^[日月火水木金土]/,abbreviated:/^[日月火水木金土]/,wide:/^[日月火水木金土]曜日/},v={any:[/^日/,/^月/,/^火/,/^水/,/^木/,/^金/,/^土/]},p={any:/^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i},b={any:{am:/^(A|午前)/i,pm:/^(P|午後)/i,midnight:/^深夜|真夜中/i,noon:/^正午/i,morning:/^朝/i,afternoon:/^午後/i,evening:/^夜/i,night:/^深夜/i}},g={ordinalNumber:(0,o.default)({matchPattern:i,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},w=g;t["default"]=w,e.exports=t.default},42180:function(e,t,a){var n=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(a(15525)),r=n(a(45161)),i=n(a(85071)),d=n(a(85598)),u=n(a(93509)),f={code:"ja",formatDistance:o.default,formatLong:r.default,formatRelative:i.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},l=f;t["default"]=l,e.exports=t.default}}]);
//# sourceMappingURL=42180.bede27e9.js.map