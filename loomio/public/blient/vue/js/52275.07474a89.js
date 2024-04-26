"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[52275,15919,23003,15927,28739,46028],{15919:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={lessThanXSeconds:{standalone:{one:"సెకను కన్నా తక్కువ",other:"{{count}} సెకన్ల కన్నా తక్కువ"},withPreposition:{one:"సెకను",other:"{{count}} సెకన్ల"}},xSeconds:{standalone:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"},withPreposition:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"}},halfAMinute:{standalone:"అర నిమిషం",withPreposition:"అర నిమిషం"},lessThanXMinutes:{standalone:{one:"ఒక నిమిషం కన్నా తక్కువ",other:"{{count}} నిమిషాల కన్నా తక్కువ"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},xMinutes:{standalone:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాలు"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},aboutXHours:{standalone:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటలు"},withPreposition:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటల"}},xHours:{standalone:{one:"ఒక గంట",other:"{{count}} గంటలు"},withPreposition:{one:"ఒక గంట",other:"{{count}} గంటల"}},xDays:{standalone:{one:"ఒక రోజు",other:"{{count}} రోజులు"},withPreposition:{one:"ఒక రోజు",other:"{{count}} రోజుల"}},aboutXWeeks:{standalone:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలు"},withPreposition:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలల"}},xWeeks:{standalone:{one:"ఒక వారం",other:"{{count}} వారాలు"},withPreposition:{one:"ఒక వారం",other:"{{count}} వారాలల"}},aboutXMonths:{standalone:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలలు"},withPreposition:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలల"}},xMonths:{standalone:{one:"ఒక నెల",other:"{{count}} నెలలు"},withPreposition:{one:"ఒక నెల",other:"{{count}} నెలల"}},aboutXYears:{standalone:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాలు"},withPreposition:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాల"}},xYears:{standalone:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాలు"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},overXYears:{standalone:{one:"ఒక సంవత్సరం పైగా",other:"{{count}} సంవత్సరాలకు పైగా"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},almostXYears:{standalone:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాలు"},withPreposition:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాల"}}},o=function(e,t,o){var a,i=null!==o&&void 0!==o&&o.addSuffix?n[e].withPreposition:n[e].standalone;return a="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!==o&&void 0!==o&&o.addSuffix?o.comparison&&o.comparison>0?a+"లో":a+" క్రితం":a},a=o;t["default"]=a,e.exports=t.default},23003:function(e,t,n){var o=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=o(n(20289)),i={full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} {{time}}'కి'",long:"{{date}} {{time}}'కి'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},u={date:(0,a.default)({formats:i,defaultWidth:"full"}),time:(0,a.default)({formats:r,defaultWidth:"full"}),dateTime:(0,a.default)({formats:d,defaultWidth:"full"})},l=u;t["default"]=l,e.exports=t.default},15927:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={lastWeek:"'గత' eeee p",yesterday:"'నిన్న' p",today:"'ఈ రోజు' p",tomorrow:"'రేపు' p",nextWeek:"'తదుపరి' eeee p",other:"P"},o=function(e,t,o,a){return n[e]},a=o;t["default"]=a,e.exports=t.default},28739:function(e,t,n){var o=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=o(n(16245)),i={narrow:["క్రీ.పూ.","క్రీ.శ."],abbreviated:["క్రీ.పూ.","క్రీ.శ."],wide:["క్రీస్తు పూర్వం","క్రీస్తుశకం"]},r={narrow:["1","2","3","4"],abbreviated:["త్రై1","త్రై2","త్రై3","త్రై4"],wide:["1వ త్రైమాసికం","2వ త్రైమాసికం","3వ త్రైమాసికం","4వ త్రైమాసికం"]},d={narrow:["జ","ఫి","మా","ఏ","మే","జూ","జు","ఆ","సె","అ","న","డి"],abbreviated:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],wide:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},u={narrow:["ఆ","సో","మ","బు","గు","శు","శ"],short:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],abbreviated:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],wide:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]},l={narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},s={narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},h=function(e,t){var n=Number(e);return n+"వ"},f={ordinalNumber:h,era:(0,a.default)({values:i,defaultWidth:"wide"}),quarter:(0,a.default)({values:r,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,a.default)({values:d,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},c=f;t["default"]=c,e.exports=t.default},46028:function(e,t,n){var o=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=o(n(43421)),i=o(n(78926)),r=/^(\d+)(వ)?/i,d=/\d+/i,u={narrow:/^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,abbreviated:/^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,wide:/^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i},l={any:[/^(పూ|శ)/i,/^సా/i]},s={narrow:/^[1234]/i,abbreviated:/^త్రై[1234]/i,wide:/^[1234](వ)? త్రైమాసికం/i},h={any:[/1/i,/2/i,/3/i,/4/i]},f={narrow:/^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,abbreviated:/^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,wide:/^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i},c={narrow:[/^జ/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూ/i,/^జు/i,/^ఆ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i],any:[/^జన/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూన్/i,/^జులై/i,/^ఆగ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i]},m={narrow:/^(ఆ|సో|మ|బు|గు|శు|శ)/i,short:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,abbreviated:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,wide:/^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i},p={narrow:[/^ఆ/i,/^సో/i,/^మ/i,/^బు/i,/^గు/i,/^శు/i,/^శ/i],any:[/^ఆది/i,/^సోమ/i,/^మం/i,/^బుధ/i,/^గురు/i,/^శుక్ర/i,/^శని/i]},v={narrow:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,any:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i},w={any:{am:/^పూర్వాహ్నం/i,pm:/^అపరాహ్నం/i,midnight:/^అర్ధ/i,noon:/^మిట్ట/i,morning:/ఉదయం/i,afternoon:/మధ్యాహ్నం/i,evening:/సాయంత్రం/i,night:/రాత్రి/i}},P={ordinalNumber:(0,i.default)({matchPattern:r,parsePattern:d,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,a.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:v,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},b=P;t["default"]=b,e.exports=t.default},52275:function(e,t,n){var o=n(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=o(n(15919)),i=o(n(23003)),r=o(n(15927)),d=o(n(28739)),u=o(n(46028)),l={code:"te",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},s=l;t["default"]=s,e.exports=t.default}}]);
//# sourceMappingURL=52275.07474a89.js.map