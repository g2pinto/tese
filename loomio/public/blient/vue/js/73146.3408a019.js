"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[73146],{73146:function(i,e,a){var d=a(42489)["default"];Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var t=d(a(43421)),r=d(a(78926)),n=/^(\d+)(è|r|n|r|t)?/i,s=/\d+/i,m={narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i},l={narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]},u={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i},b={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},v={narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},f={narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},h={narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},c={narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i},g={any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},w={ordinalNumber:(0,r.default)({matchPattern:n,parsePattern:s,valueCallback:function(i){return parseInt(i,10)}}),era:(0,t.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"wide"}),quarter:(0,t.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,t.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"wide"}),day:(0,t.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"wide"}),dayPeriod:(0,t.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"})},p=w;e["default"]=p,i.exports=e.default}}]);
//# sourceMappingURL=73146.3408a019.js.map