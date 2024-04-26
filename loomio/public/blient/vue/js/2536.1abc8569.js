"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[2536,42067,83573,63963,16687,79884],{42067:function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var a={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"},t=function(e,i,a,t){return i?t?"kelių sekundžių":"kelias sekundes":"kelios sekundės"},r=function(e,i,a,t){return i?t?o(a)[1]:o(a)[2]:o(a)[0]},n=function(e,i,a,t){var n=e+" ";return 1===e?n+r(e,i,a,t):i?t?n+o(a)[1]:n+(s(e)?o(a)[1]:o(a)[2]):n+(s(e)?o(a)[1]:o(a)[0])};function s(e){return e%10===0||e>10&&e<20}function o(e){return a[e].split("_")}var d={lessThanXSeconds:{one:t,other:n},xSeconds:{one:t,other:n},halfAMinute:"pusė minutės",lessThanXMinutes:{one:r,other:n},xMinutes:{one:r,other:n},aboutXHours:{one:r,other:n},xHours:{one:r,other:n},xDays:{one:r,other:n},aboutXWeeks:{one:r,other:n},xWeeks:{one:r,other:n},aboutXMonths:{one:r,other:n},xMonths:{one:r,other:n},aboutXYears:{one:r,other:n},xYears:{one:r,other:n},overXYears:{one:r,other:n},almostXYears:{one:r,other:n}},u=function(e,i,t){var r,n=e.match(/about|over|almost|lessthan/i),s=n?e.replace(n[0],""):e,o=void 0!==(null===t||void 0===t?void 0:t.comparison)&&t.comparison>0,u=d[e];if(r="string"===typeof u?u:1===i?u.one(i,!0===(null===t||void 0===t?void 0:t.addSuffix),s.toLowerCase()+"_one",o):u.other(i,!0===(null===t||void 0===t?void 0:t.addSuffix),s.toLowerCase()+"_other",o),n){var p=n[0].toLowerCase();r=a[p]+" "+r}return null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"po "+r:"prieš "+r:r},p=u;i["default"]=p,e.exports=i.default},83573:function(e,i,a){var t=a(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(a(20289)),n={full:"y 'm'. MMMM d 'd'., EEEE",long:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd",short:"y-MM-dd"},s={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},o={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,r.default)({formats:n,defaultWidth:"full"}),time:(0,r.default)({formats:s,defaultWidth:"full"}),dateTime:(0,r.default)({formats:o,defaultWidth:"full"})},u=d;i["default"]=u,e.exports=i.default},63963:function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var a={lastWeek:"'Praėjusį' eeee p",yesterday:"'Vakar' p",today:"'Šiandien' p",tomorrow:"'Rytoj' p",nextWeek:"eeee p",other:"P"},t=function(e,i,t,r){return a[e]},r=t;i["default"]=r,e.exports=i.default},16687:function(e,i,a){var t=a(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(a(16245)),n={narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prieš Kristų","po Kristaus"]},s={narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},o={narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},d={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},u={narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"]},p={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"]},l={narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienį","pirmadienį","antradienį","trečiadienį","ketvirtadienį","penktadienį","šeštadienį"]},v={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},m={narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"}},f=function(e,i){var a=Number(e);return a+"-oji"},k={ordinalNumber:f,era:(0,r.default)({values:n,defaultWidth:"wide"}),quarter:(0,r.default)({values:s,defaultWidth:"wide",formattingValues:o,defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:d,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,r.default)({values:p,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),dayPeriod:(0,r.default)({values:v,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},h=k;i["default"]=h,e.exports=i.default},79884:function(e,i,a){var t=a(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(a(43421)),n=t(a(78926)),s=/^(\d+)(-oji)?/i,o=/\d+/i,d={narrow:/^p(r|o)\.?\s?(kr\.?|me)/i,abbreviated:/^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,wide:/^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i},u={wide:[/prieš/i,/(po|mūsų)/i],any:[/^pr/i,/^(po|m)/i]},p={narrow:/^([1234])/i,abbreviated:/^(I|II|III|IV)\s?ketv?\.?/i,wide:/^(I|II|III|IV)\s?ketvirtis/i},l={narrow:[/1/i,/2/i,/3/i,/4/i],any:[/I$/i,/II$/i,/III/i,/IV/i]},v={narrow:/^[svkbglr]/i,abbreviated:/^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,wide:/^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i},m={narrow:[/^s/i,/^v/i,/^k/i,/^b/i,/^g/i,/^b/i,/^l/i,/^r/i,/^r/i,/^s/i,/^l/i,/^g/i],any:[/^saus/i,/^vas/i,/^kov/i,/^bal/i,/^geg/i,/^birž/i,/^liep/i,/^rugp/i,/^rugs/i,/^spal/i,/^lapkr/i,/^gruod/i]},f={narrow:/^[spatkš]/i,short:/^(sk|pr|an|tr|kt|pn|št)/i,abbreviated:/^(sk|pr|an|tr|kt|pn|št)/i,wide:/^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i},k={narrow:[/^s/i,/^p/i,/^a/i,/^t/i,/^k/i,/^p/i,/^š/i],wide:[/^se/i,/^pi/i,/^an/i,/^tr/i,/^ke/i,/^pe/i,/^še/i],any:[/^sk/i,/^pr/i,/^an/i,/^tr/i,/^kt/i,/^pn/i,/^št/i]},h={narrow:/^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,any:/^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i},g={narrow:{am:/^pr/i,pm:/^pop./i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i},any:{am:/^pr/i,pm:/^popiet$/i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i}},b={ordinalNumber:(0,n.default)({matchPattern:s,parsePattern:o,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})},w=b;i["default"]=w,e.exports=i.default},2536:function(e,i,a){var t=a(42489)["default"];Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var r=t(a(42067)),n=t(a(83573)),s=t(a(63963)),o=t(a(16687)),d=t(a(79884)),u={code:"lt",formatDistance:r.default,formatLong:n.default,formatRelative:s.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}},p=u;i["default"]=p,e.exports=i.default}}]);
//# sourceMappingURL=2536.1abc8569.js.map