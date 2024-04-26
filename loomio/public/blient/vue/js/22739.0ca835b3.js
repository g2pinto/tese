"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[22739,56716,92086,79302,89105,18092],{56716:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={lessThanXSeconds:{one:"أقل من ثانية واحدة",two:"أقل من ثانتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية واحدة",two:"ثانتين",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقائق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",two:"دقيقتين",threeToTen:"{{count}} دقائق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة واحدة تقريباً",two:"ساعتين تقريباً",threeToTen:"{{count}} ساعات تقريباً",other:"{{count}} ساعة تقريباً"},xHours:{one:"ساعة واحدة",two:"ساعتين",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم واحد",two:"يومين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"أسبوع واحد تقريباً",two:"أسبوعين تقريباً",threeToTen:"{{count}} أسابيع تقريباً",other:"{{count}} أسبوع تقريباً"},xWeeks:{one:"أسبوع واحد",two:"أسبوعين",threeToTen:"{{count}} أسابيع",other:"{{count}} أسبوع"},aboutXMonths:{one:"شهر واحد تقريباً",two:"شهرين تقريباً",threeToTen:"{{count}} أشهر تقريباً",other:"{{count}} شهر تقريباً"},xMonths:{one:"شهر واحد",two:"شهرين",threeToTen:"{{count}} أشهر",other:"{{count}} شهر"},aboutXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"},xYears:{one:"عام واحد",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من عام",two:"أكثر من عامين",threeToTen:"أكثر من {{count}} أعوام",other:"أكثر من {{count}} عام"},almostXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"}},a=function(e,t,a){a=a||{};var o,i=n[e];return o="string"===typeof i?i:1===t?i.one:2===t?i.two:t<=10?i.threeToTen.replace("{{count}}",String(t)):i.other.replace("{{count}}",String(t)),a.addSuffix?a.comparison&&a.comparison>0?"في خلال "+o:"منذ "+o:o},o=a;t["default"]=o,e.exports=t.default},92086:function(e,t,n){var a=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(n(20289)),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} 'عند' {{time}}",long:"{{date}} 'عند' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,o.default)({formats:i,defaultWidth:"full"}),time:(0,o.default)({formats:r,defaultWidth:"full"}),dateTime:(0,o.default)({formats:d,defaultWidth:"full"})},l=u;t["default"]=l,e.exports=t.default},79302:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={lastWeek:"'أخر' eeee 'عند' p",yesterday:"'أمس عند' p",today:"'اليوم عند' p",tomorrow:"'غداً عند' p",nextWeek:"eeee 'عند' p",other:"P"},a=function(e,t,a,o){return n[e]},o=a;t["default"]=o,e.exports=t.default},89105:function(e,t,n){var a=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(n(16245)),i={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},r={narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},d={narrow:["ي","ف","م","أ","م","ي","ي","غ","ش","أ","ن","د"],abbreviated:["ينا","فبر","مارس","أبريل","ماي","يونـ","يولـ","غشت","شتنـ","أكتـ","نونـ","دجنـ"],wide:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"]},u={narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنـ","ثلا","أربـ","خميـ","جمعة","سبت"],wide:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},l={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"}},f={narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"في الصباح",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"}},h=function(e){return String(e)},s={ordinalNumber:h,era:(0,o.default)({values:i,defaultWidth:"wide"}),quarter:(0,o.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide"}),day:(0,o.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:l,defaultWidth:"wide",formattingValues:f,defaultFormattingWidth:"wide"})},m=s;t["default"]=m,e.exports=t.default},18092:function(e,t,n){var a=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(n(78926)),i=a(n(43421)),r=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,u={narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},l={any:[/^قبل/i,/^بعد/i]},f={narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},h={any:[/1/i,/2/i,/3/i,/4/i]},s={narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i},m={narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^غ/i,/^ش/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^فب/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^غشت/i,/^ش/i,/^أك/i,/^ن/i,/^د/i]},c={narrow:/^[حنثرخجس]/i,short:/^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},v={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الإثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^إث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},w={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},g={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},p={ordinalNumber:(0,o.default)({matchPattern:r,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(e){return Number(e)+1}}),month:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})},b=p;t["default"]=b,e.exports=t.default},22739:function(e,t,n){var a=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(n(56716)),i=a(n(92086)),r=a(n(79302)),d=a(n(89105)),u=a(n(18092)),l={code:"ar-MA",formatDistance:o.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},f=l;t["default"]=f,e.exports=t.default}}]);
//# sourceMappingURL=22739.0ca835b3.js.map