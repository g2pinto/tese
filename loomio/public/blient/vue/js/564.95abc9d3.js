"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[564],{564:function(n,i){function u(n,i){if(void 0!==n.one&&1===i)return n.one;var u=i%10,e=i%100;return 1===u&&11!==e?n.singularNominative.replace("{{count}}",String(i)):u>=2&&u<=4&&(e<10||e>20)?n.singularGenitive.replace("{{count}}",String(i)):n.pluralGenitive.replace("{{count}}",String(i))}function e(n){return function(i,e){return e&&e.addSuffix?e.comparison&&e.comparison>0?n.future?u(n.future,i):"праз "+u(n.regular,i):n.past?u(n.past,i):u(n.regular,i)+" таму":u(n.regular,i)}}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=void 0;var t=function(n,i){return i&&i.addSuffix?i.comparison&&i.comparison>0?"праз паўхвіліны":"паўхвіліны таму":"паўхвіліны"},r={lessThanXSeconds:e({regular:{one:"менш за секунду",singularNominative:"менш за {{count}} секунду",singularGenitive:"менш за {{count}} секунды",pluralGenitive:"менш за {{count}} секунд"},future:{one:"менш, чым праз секунду",singularNominative:"менш, чым праз {{count}} секунду",singularGenitive:"менш, чым праз {{count}} секунды",pluralGenitive:"менш, чым праз {{count}} секунд"}}),xSeconds:e({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду таму",singularGenitive:"{{count}} секунды таму",pluralGenitive:"{{count}} секунд таму"},future:{singularNominative:"праз {{count}} секунду",singularGenitive:"праз {{count}} секунды",pluralGenitive:"праз {{count}} секунд"}}),halfAMinute:t,lessThanXMinutes:e({regular:{one:"менш за хвіліну",singularNominative:"менш за {{count}} хвіліну",singularGenitive:"менш за {{count}} хвіліны",pluralGenitive:"менш за {{count}} хвілін"},future:{one:"менш, чым праз хвіліну",singularNominative:"менш, чым праз {{count}} хвіліну",singularGenitive:"менш, чым праз {{count}} хвіліны",pluralGenitive:"менш, чым праз {{count}} хвілін"}}),xMinutes:e({regular:{singularNominative:"{{count}} хвіліна",singularGenitive:"{{count}} хвіліны",pluralGenitive:"{{count}} хвілін"},past:{singularNominative:"{{count}} хвіліну таму",singularGenitive:"{{count}} хвіліны таму",pluralGenitive:"{{count}} хвілін таму"},future:{singularNominative:"праз {{count}} хвіліну",singularGenitive:"праз {{count}} хвіліны",pluralGenitive:"праз {{count}} хвілін"}}),aboutXHours:e({regular:{singularNominative:"каля {{count}} гадзіны",singularGenitive:"каля {{count}} гадзін",pluralGenitive:"каля {{count}} гадзін"},future:{singularNominative:"прыблізна праз {{count}} гадзіну",singularGenitive:"прыблізна праз {{count}} гадзіны",pluralGenitive:"прыблізна праз {{count}} гадзін"}}),xHours:e({regular:{singularNominative:"{{count}} гадзіна",singularGenitive:"{{count}} гадзіны",pluralGenitive:"{{count}} гадзін"},past:{singularNominative:"{{count}} гадзіну таму",singularGenitive:"{{count}} гадзіны таму",pluralGenitive:"{{count}} гадзін таму"},future:{singularNominative:"праз {{count}} гадзіну",singularGenitive:"праз {{count}} гадзіны",pluralGenitive:"праз {{count}} гадзін"}}),xDays:e({regular:{singularNominative:"{{count}} дзень",singularGenitive:"{{count}} дні",pluralGenitive:"{{count}} дзён"}}),aboutXWeeks:e({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xWeeks:e({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXMonths:e({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xMonths:e({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXYears:e({regular:{singularNominative:"каля {{count}} года",singularGenitive:"каля {{count}} гадоў",pluralGenitive:"каля {{count}} гадоў"},future:{singularNominative:"прыблізна праз {{count}} год",singularGenitive:"прыблізна праз {{count}} гады",pluralGenitive:"прыблізна праз {{count}} гадоў"}}),xYears:e({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} гады",pluralGenitive:"{{count}} гадоў"}}),overXYears:e({regular:{singularNominative:"больш за {{count}} год",singularGenitive:"больш за {{count}} гады",pluralGenitive:"больш за {{count}} гадоў"},future:{singularNominative:"больш, чым праз {{count}} год",singularGenitive:"больш, чым праз {{count}} гады",pluralGenitive:"больш, чым праз {{count}} гадоў"}}),almostXYears:e({regular:{singularNominative:"амаль {{count}} год",singularGenitive:"амаль {{count}} гады",pluralGenitive:"амаль {{count}} гадоў"},future:{singularNominative:"амаль праз {{count}} год",singularGenitive:"амаль праз {{count}} гады",pluralGenitive:"амаль праз {{count}} гадоў"}})},a=function(n,i,u){return u=u||{},r[n](i,u)},o=a;i["default"]=o,n.exports=i.default}}]);
//# sourceMappingURL=564.95abc9d3.js.map