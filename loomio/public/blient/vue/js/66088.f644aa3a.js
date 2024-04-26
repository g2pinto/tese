"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[66088,6666,60333,67125,39408,9480],{6666:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i={lessThanXSeconds:{one:"mai puțin de o secundă",other:"mai puțin de {{count}} secunde"},xSeconds:{one:"1 secundă",other:"{{count}} secunde"},halfAMinute:"jumătate de minut",lessThanXMinutes:{one:"mai puțin de un minut",other:"mai puțin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 oră",other:"circa {{count}} ore"},xHours:{one:"1 oră",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o săptămână",other:"circa {{count}} săptămâni"},xWeeks:{one:"1 săptămână",other:"{{count}} săptămâni"},aboutXMonths:{one:"circa 1 lună",other:"circa {{count}} luni"},xMonths:{one:"1 lună",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}},t=function(e,a,t){var n,r=i[e];return n="string"===typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"în "+n:n+" în urmă":n},n=t;a["default"]=n,e.exports=a.default},60333:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(i(20289)),r={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},o={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},u={full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,n.default)({formats:r,defaultWidth:"full"}),time:(0,n.default)({formats:o,defaultWidth:"full"}),dateTime:(0,n.default)({formats:u,defaultWidth:"full"})},m=d;a["default"]=m,e.exports=a.default},67125:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i={lastWeek:"eeee 'trecută la' p",yesterday:"'ieri la' p",today:"'astăzi la' p",tomorrow:"'mâine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"},t=function(e,a,t,n){return i[e]},n=t;a["default"]=n,e.exports=a.default},39408:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(i(16245)),r={narrow:["Î","D"],abbreviated:["Î.d.C.","D.C."],wide:["Înainte de Cristos","După Cristos"]},o={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},u={narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},d={narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","sâ"],abbreviated:["dum","lun","mar","mie","joi","vin","sâm"],wide:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"]},m={narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},l={narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},s=function(e,a){return String(e)},f={ordinalNumber:s,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:u,defaultWidth:"wide"}),day:(0,n.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:m,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},p=f;a["default"]=p,e.exports=a.default},9480:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(i(43421)),r=t(i(78926)),o=/^(\d+)?/i,u=/\d+/i,d={narrow:/^(Î|D)/i,abbreviated:/^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i},m={any:[/^ÎC/i,/^DC/i],wide:[/^(Înainte de Cristos|Înaintea erei noastre)/i,/^(După Cristos|Era noastră)/i]},l={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},s={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},p={narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},c={narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|sâ)/i,wide:/^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},v={narrow:/^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/dimineaţa/i,afternoon:/după-amiaza/i,evening:/seara/i,night:/noaptea/i}},y={ordinalNumber:(0,r.default)({matchPattern:o,parsePattern:u,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},g=y;a["default"]=g,e.exports=a.default},66088:function(e,a,i){var t=i(42489)["default"];Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var n=t(i(6666)),r=t(i(60333)),o=t(i(67125)),u=t(i(39408)),d=t(i(9480)),m={code:"ro",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},l=m;a["default"]=l,e.exports=a.default}}]);
//# sourceMappingURL=66088.f644aa3a.js.map