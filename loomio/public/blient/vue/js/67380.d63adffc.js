"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[67380],{67380:function(e,u){function n(e){return e.replace(/sekuntia?/,"sekunnin")}function t(e){return e.replace(/minuuttia?/,"minuutin")}function o(e){return e.replace(/tuntia?/,"tunnin")}function i(e){return e.replace(/päivää?/,"päivän")}function r(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function a(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function s(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(u,"__esModule",{value:!0}),u["default"]=void 0;var c={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:n},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:n},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:t},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:t},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:o},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:o},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:i},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:r},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:r},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:a},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:a},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:s},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:s},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:s},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:s}},k=function(e,u,n){var t=c[e],o=1===u?t.one:t.other.replace("{{count}}",String(u));return null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?t.futureTense(o)+" kuluttua":o+" sitten":o},l=k;u["default"]=l,e.exports=u.default}}]);
//# sourceMappingURL=67380.d63adffc.js.map