"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[7325],{7325:function(o,n){Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var t={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godziny",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXWeeks:{one:"około tygodnia",twoFour:"około {{count}} tygodni",other:"około {{count}} tygodni"},xWeeks:{one:"tydzień",twoFour:"{{count}} tygodnie",other:"{{count}} tygodni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};function e(o,n){if(1===n)return o.one;var t=n%100;if(t<=20&&t>10)return o.other;var e=t%10;return e>=2&&e<=4?o.twoFour:o.other}function u(o,n,t){var u=e(o,n),r="string"===typeof u?u:u[t];return r.replace("{{count}}",String(n))}var r=function(o,n,e){var r=t[o];return null!==e&&void 0!==e&&e.addSuffix?e.comparison&&e.comparison>0?"za "+u(r,n,"future"):u(r,n,"past")+" temu":u(r,n,"regular")},i=r;n["default"]=i,o.exports=n.default}}]);
//# sourceMappingURL=7325.bb36d1d9.js.map