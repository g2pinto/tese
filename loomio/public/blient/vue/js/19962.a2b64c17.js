"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[19962,17308,19983,54011,389,71365],{17308:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},o=function(e,a,o){var d,n=t[e];return d="string"===typeof n?n:1===a?n.one:n.other.replace("{{count}}",a.toString()),null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?"en "+d:"hace "+d:d},d=o;a["default"]=d,e.exports=a.default},19983:function(e,a,t){var o=t(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var d=o(t(20289)),n={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},i={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},r={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s={date:(0,d.default)({formats:n,defaultWidth:"full"}),time:(0,d.default)({formats:i,defaultWidth:"full"}),dateTime:(0,d.default)({formats:r,defaultWidth:"full"})},u=s;a["default"]=u,e.exports=a.default},54011:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var t={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},o={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},d=function(e,a,d,n){return 1!==a.getUTCHours()?o[e]:t[e]},n=d;a["default"]=n,e.exports=a.default},389:function(e,a,t){var o=t(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var d=o(t(16245)),n={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},i={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},r={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},s={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},u={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},m={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},l=function(e,a){var t=Number(e);return t+"º"},f={ordinalNumber:l,era:(0,d.default)({values:n,defaultWidth:"wide"}),quarter:(0,d.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,d.default)({values:r,defaultWidth:"wide"}),day:(0,d.default)({values:s,defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:u,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},c=f;a["default"]=c,e.exports=a.default},71365:function(e,a,t){var o=t(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var d=o(t(78926)),n=o(t(43421)),i=/^(\d+)(º)?/i,r=/\d+/i,s={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},u={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},m={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},l={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},c={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},h={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},v={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},b={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},g={ordinalNumber:(0,d.default)({matchPattern:i,parsePattern:r,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},y=g;a["default"]=y,e.exports=a.default},19962:function(e,a,t){var o=t(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var d=o(t(17308)),n=o(t(19983)),i=o(t(54011)),r=o(t(389)),s=o(t(71365)),u={code:"es",formatDistance:d.default,formatLong:n.default,formatRelative:i.default,localize:r.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},m=u;a["default"]=m,e.exports=a.default}}]);
//# sourceMappingURL=19962.a2b64c17.js.map