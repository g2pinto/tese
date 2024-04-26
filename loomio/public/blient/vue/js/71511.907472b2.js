"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[71511,96170,22761,5093,79919,20320],{96170:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lessThanXSeconds:{one:"λιγότερο από ένα δευτερόλεπτο",other:"λιγότερο από {{count}} δευτερόλεπτα"},xSeconds:{one:"1 δευτερόλεπτο",other:"{{count}} δευτερόλεπτα"},halfAMinute:"μισό λεπτό",lessThanXMinutes:{one:"λιγότερο από ένα λεπτό",other:"λιγότερο από {{count}} λεπτά"},xMinutes:{one:"1 λεπτό",other:"{{count}} λεπτά"},aboutXHours:{one:"περίπου 1 ώρα",other:"περίπου {{count}} ώρες"},xHours:{one:"1 ώρα",other:"{{count}} ώρες"},xDays:{one:"1 ημέρα",other:"{{count}} ημέρες"},aboutXWeeks:{one:"περίπου 1 εβδομάδα",other:"περίπου {{count}} εβδομάδες"},xWeeks:{one:"1 εβδομάδα",other:"{{count}} εβδομάδες"},aboutXMonths:{one:"περίπου 1 μήνας",other:"περίπου {{count}} μήνες"},xMonths:{one:"1 μήνας",other:"{{count}} μήνες"},aboutXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"},xYears:{one:"1 χρόνο",other:"{{count}} χρόνια"},overXYears:{one:"πάνω από 1 χρόνο",other:"πάνω από {{count}} χρόνια"},almostXYears:{one:"περίπου 1 χρόνο",other:"περίπου {{count}} χρόνια"}},i=function(e,t,i){var n,r=a[e];return n="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==i&&void 0!==i&&i.addSuffix?i.comparison&&i.comparison>0?"σε "+n:n+" πριν":n},n=i;t["default"]=n,e.exports=t.default},22761:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(20289)),r={full:"EEEE, d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"d/M/yy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} - {{time}}",long:"{{date}} - {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u={date:(0,n.default)({formats:r,defaultWidth:"full"}),time:(0,n.default)({formats:o,defaultWidth:"full"}),dateTime:(0,n.default)({formats:d,defaultWidth:"full"})},l=u;t["default"]=l,e.exports=t.default},5093:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a={lastWeek:function(e){switch(e.getUTCDay()){case 6:return"'το προηγούμενο' eeee 'στις' p";default:return"'την προηγούμενη' eeee 'στις' p"}},yesterday:"'χθες στις' p",today:"'σήμερα στις' p",tomorrow:"'αύριο στις' p",nextWeek:"eeee 'στις' p",other:"P"},i=function(e,t){var i=a[e];return"function"===typeof i?i(t):i},n=i;t["default"]=n,e.exports=t.default},79919:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(16245)),r={narrow:["πΧ","μΧ"],abbreviated:["π.Χ.","μ.Χ."],wide:["προ Χριστού","μετά Χριστόν"]},o={narrow:["1","2","3","4"],abbreviated:["Τ1","Τ2","Τ3","Τ4"],wide:["1ο τρίμηνο","2ο τρίμηνο","3ο τρίμηνο","4ο τρίμηνο"]},d={narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],wide:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},u={narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],wide:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},l={narrow:["Κ","Δ","T","Τ","Π","Π","Σ"],short:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],abbreviated:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],wide:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},f={narrow:{am:"πμ",pm:"μμ",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},abbreviated:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},wide:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"}},s=function(e,t){var a,i=Number(e),n=null===t||void 0===t?void 0:t.unit;return a="year"===n||"month"===n?"ος":"week"===n||"dayOfYear"===n||"day"===n||"hour"===n||"date"===n?"η":"ο",i+a},h={ordinalNumber:s,era:(0,n.default)({values:r,defaultWidth:"wide"}),quarter:(0,n.default)({values:o,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:d,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,n.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:f,defaultWidth:"wide"})},c=h;t["default"]=c,e.exports=t.default},20320:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(43421)),r=i(a(78926)),o=/^(\d+)(ος|η|ο)?/i,d=/\d+/i,u={narrow:/^(πΧ|μΧ)/i,abbreviated:/^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,wide:/^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i},l={any:[/^π/i,/^(μ|κ)/i]},f={narrow:/^[1234]/i,abbreviated:/^τ[1234]/i,wide:/^[1234]ο? τρ(ί|ι)μηνο/i},s={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[ιφμαμιιασονδ]/i,abbreviated:/^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,wide:/^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i},c={narrow:[/^ι/i,/^φ/i,/^μ/i,/^α/i,/^μ/i,/^ι/i,/^ι/i,/^α/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i],any:[/^ια/i,/^φ/i,/^μ[άα]ρ/i,/^απ/i,/^μ[άα][ιΐ]/i,/^ιο[ύυ]ν/i,/^ιο[ύυ]λ/i,/^α[ύυ]/i,/^σ/i,/^ο/i,/^ν/i,/^δ/i]},m={narrow:/^[κδτπσ]/i,short:/^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,abbreviated:/^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,wide:/^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i},v={narrow:[/^κ/i,/^δ/i,/^τ/i,/^τ/i,/^π/i,/^π/i,/^σ/i],any:[/^κ/i,/^δ/i,/^τρ/i,/^τε/i,/^π[εέ]/i,/^π[αά]/i,/^σ/i]},w={narrow:/^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,any:/^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i},b={any:{am:/^πμ|π\.\s?μ\./i,pm:/^μμ|μ\.\s?μ\./i,midnight:/^μεσάν/i,noon:/^μεσημ(έ|ε)/i,morning:/πρω(ί|ι)/i,afternoon:/απ(ό|ο)γευμα/i,evening:/βρ(ά|α)δυ/i,night:/ν(ύ|υ)χτα/i}},p={ordinalNumber:(0,r.default)({matchPattern:o,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:w,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})},y=p;t["default"]=y,e.exports=t.default},71511:function(e,t,a){var i=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(a(96170)),r=i(a(22761)),o=i(a(5093)),d=i(a(79919)),u=i(a(20320)),l={code:"el",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=l;t["default"]=f,e.exports=t.default}}]);
//# sourceMappingURL=71511.907472b2.js.map