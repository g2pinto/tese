"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[77390],{77390:function(a,n,e){var i=e(42489)["default"];Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var r=i(e(16245)),t={narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chrìosta","anno domini"]},d={narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an dàrna cairteal","an treas cairteal","an ceathramh cairteal"]},h={narrow:["F","G","M","G","C","Ò","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],wide:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]},o={narrow:["D","L","M","C","A","H","S"],short:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},m={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},l={narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},u=function(a){var n=Number(a),e=n%100;if(e>20||e<10)switch(e%10){case 1:return n+"d";case 2:return n+"na"}return 12===e?n+"na":n+"mh"},f={ordinalNumber:u,era:(0,r.default)({values:t,defaultWidth:"wide"}),quarter:(0,r.default)({values:d,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,r.default)({values:h,defaultWidth:"wide"}),day:(0,r.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:m,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},g=f;n["default"]=g,a.exports=n.default}}]);
//# sourceMappingURL=77390.8e152958.js.map