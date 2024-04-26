"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[77356,67580,3381,5895,79557,74390],{67580:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}},n=function(a,e,n){var t,r=i[a];return t="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?t+" sonra":t+" əvvəl":t},t=n;e["default"]=t,a.exports=e.default},3381:function(a,e,i){var n=i(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var t=n(i(20289)),r={full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},d={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},o={full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,t.default)({formats:r,defaultWidth:"full"}),time:(0,t.default)({formats:d,defaultWidth:"full"}),dateTime:(0,t.default)({formats:o,defaultWidth:"full"})},l=u;e["default"]=l,a.exports=e.default},5895:function(a,e){Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"},n=function(a,e,n,t){return i[a]},t=n;e["default"]=t,a.exports=e.default},79557:function(a,e,i){var n=i(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var t=n(i(16245)),r={narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},d={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},o={narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},u={narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},l={narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},m={narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},s={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},c=function(a){if(0===a)return a+"-ıncı";var e=a%10,i=a%100-e,n=a>=100?100:null;return s[e]?s[e]:s[i]?s[i]:null!==n?s[n]:""},f=function(a,e){var i=Number(a),n=c(i);return i+n},h={ordinalNumber:f,era:(0,t.default)({values:r,defaultWidth:"wide"}),quarter:(0,t.default)({values:d,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,t.default)({values:o,defaultWidth:"wide"}),day:(0,t.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:l,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},$=h;e["default"]=$,a.exports=e.default},74390:function(a,e,i){var n=i(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var t=n(i(43421)),r=n(i(78926)),d=/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,o=/\d+/i,u={narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},l={any:[/^b$/i,/^(a|c)$/i]},m={narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},s={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},f={narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},h={narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},$={narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},v={narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},y={any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},b={ordinalNumber:(0,r.default)({matchPattern:d,parsePattern:o,valueCallback:function(a){return parseInt(a,10)}}),era:(0,t.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,t.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"narrow"}),day:(0,t.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:$,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:y,defaultParseWidth:"any"})},g=b;e["default"]=g,a.exports=e.default},77356:function(a,e,i){var n=i(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var t=n(i(67580)),r=n(i(3381)),d=n(i(5895)),o=n(i(79557)),u=n(i(74390)),l={code:"az",formatDistance:t.default,formatLong:r.default,formatRelative:d.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},m=l;e["default"]=m,a.exports=e.default}}]);
//# sourceMappingURL=77356.a47fdf94.js.map