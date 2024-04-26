"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[13537,87201,81884,91912,97188,43043],{87201:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lessThanXSeconds:{one:"کمتر از یک ثانیه",other:"کمتر از {{count}} ثانیه"},xSeconds:{one:"1 ثانیه",other:"{{count}} ثانیه"},halfAMinute:"نیم دقیقه",lessThanXMinutes:{one:"کمتر از یک دقیقه",other:"کمتر از {{count}} دقیقه"},xMinutes:{one:"1 دقیقه",other:"{{count}} دقیقه"},aboutXHours:{one:"حدود 1 ساعت",other:"حدود {{count}} ساعت"},xHours:{one:"1 ساعت",other:"{{count}} ساعت"},xDays:{one:"1 روز",other:"{{count}} روز"},aboutXWeeks:{one:"حدود 1 هفته",other:"حدود {{count}} هفته"},xWeeks:{one:"1 هفته",other:"{{count}} هفته"},aboutXMonths:{one:"حدود 1 ماه",other:"حدود {{count}} ماه"},xMonths:{one:"1 ماه",other:"{{count}} ماه"},aboutXYears:{one:"حدود 1 سال",other:"حدود {{count}} سال"},xYears:{one:"1 سال",other:"{{count}} سال"},overXYears:{one:"بیشتر از 1 سال",other:"بیشتر از {{count}} سال"},almostXYears:{one:"نزدیک 1 سال",other:"نزدیک {{count}} سال"}},i=function(e,t,i){var n,o=a[e];return n="string"===typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),null!==i&&void 0!==i&&i.addSuffix?i.comparison&&i.comparison>0?"در "+n:n+" قبل":n},n=i;t["default"]=n,e.exports=t.default},81884:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(20289)),o={full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"yyyy/MM/dd"},r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} 'در' {{time}}",long:"{{date}} 'در' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:o,defaultWidth:"full"}),time:(0,n.default)({formats:r,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},l=u;t["default"]=l,e.exports=t.default},91912:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lastWeek:"eeee 'گذشته در' p",yesterday:"'دیروز در' p",today:"'امروز در' p",tomorrow:"'فردا در' p",nextWeek:"eeee 'در' p",other:"P"},i=function(e,t,i,n){return a[e]},n=i;t["default"]=n,e.exports=t.default},97188:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(16245)),o={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل از میلاد","بعد از میلاد"]},r={narrow:["1","2","3","4"],abbreviated:["س‌م1","س‌م2","س‌م3","س‌م4"],wide:["سه‌ماهه 1","سه‌ماهه 2","سه‌ماهه 3","سه‌ماهه 4"]},d={narrow:["ژ","ف","م","آ","م","ج","ج","آ","س","ا","ن","د"],abbreviated:["ژانـ","فور","مارس","آپر","می","جون","جولـ","آگو","سپتـ","اکتـ","نوامـ","دسامـ"],wide:["ژانویه","فوریه","مارس","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},u={narrow:["ی","د","س","چ","پ","ج","ش"],short:["1ش","2ش","3ش","4ش","5ش","ج","ش"],abbreviated:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],wide:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},l={narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},f={narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},s=function(e,t){return String(e)},h={ordinalNumber:s,era:(0,n.default)({values:o,defaultWidth:"wide"}),quarter:(0,n.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:d,defaultWidth:"wide"}),day:(0,n.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},m=h;t["default"]=m,e.exports=t.default},43043:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(43421)),o=i(a(78926)),r=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,u={narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,wide:/^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i},l={any:[/^قبل/i,/^بعد/i]},f={narrow:/^[1234]/i,abbreviated:/^س‌م[1234]/i,wide:/^سه‌ماهه [1234]/i},s={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[جژفمآاماسند]/i,abbreviated:/^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,wide:/^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i},m={narrow:[/^(ژ|ج)/i,/^ف/i,/^م/i,/^(آ|ا)/i,/^م/i,/^(ژ|ج)/i,/^(ج|ژ)/i,/^(آ|ا)/i,/^س/i,/^ا/i,/^ن/i,/^د/i],any:[/^ژا/i,/^ف/i,/^ما/i,/^آپ/i,/^(می|مه)/i,/^(ژوئن|جون)/i,/^(ژوئی|جول)/i,/^(اوت|آگ)/i,/^س/i,/^(اوک|اک)/i,/^ن/i,/^د/i]},c={narrow:/^[شیدسچپج]/i,short:/^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,abbreviated:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,wide:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i},v={narrow:[/^ی/i,/^دو/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^(ی|1ش|یکشنبه)/i,/^(د|2ش|دوشنبه)/i,/^(س|3ش|سه‌شنبه)/i,/^(چ|4ش|چهارشنبه)/i,/^(پ|5ش|پنجشنبه)/i,/^(ج|جمعه)/i,/^(ش|شنبه)/i]},b={narrow:/^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,abbreviated:/^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,wide:/^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i},p={any:{am:/^(ق|ق.ظ.|قبل‌ازظهر)/i,pm:/^(ب|ب.ظ.|بعدازظهر)/i,midnight:/^(‌نیمه‌شب|ن)/i,noon:/^(ظ|ظهر)/i,morning:/(ص|صبح)/i,afternoon:/(ب|ب.ظ.|بعدازظهر)/i,evening:/(ع|عصر)/i,night:/(ش|شب)/i}},w={ordinalNumber:(0,o.default)({matchPattern:r,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"})},g=w;t["default"]=g,e.exports=t.default},13537:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(87201)),o=i(a(81884)),r=i(a(91912)),d=i(a(97188)),u=i(a(43043)),l={code:"fa-IR",formatDistance:n.default,formatLong:o.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:6,firstWeekContainsDate:1}},f=l;t["default"]=f,e.exports=t.default}}]);
//# sourceMappingURL=13537.c5722000.js.map