"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[37233],{37233:function(e,t,a){var r=a(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=a(47292),c=r(a(44507)),n=["нядзелю","панядзелак","аўторак","сераду","чацьвер","пятніцу","суботу"];function s(e){var t=n[e];switch(e){case 0:case 3:case 5:case 6:return"'у мінулую "+t+" а' p";case 1:case 2:case 4:return"'у мінулы "+t+" а' p"}}function o(e){var t=n[e];return"'у "+t+" а' p"}function f(e){var t=n[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступную "+t+" а' p";case 1:case 2:case 4:return"'у наступны "+t+" а' p"}}var p=function(e,t,a){var r=(0,u.toDate)(e),n=r.getUTCDay();return(0,c.default)(r,t,a)?o(n):s(n)},i=function(e,t,a){var r=(0,u.toDate)(e),n=r.getUTCDay();return(0,c.default)(r,t,a)?o(n):f(n)},v={lastWeek:p,yesterday:"'учора а' p",today:"'сёньня а' p",tomorrow:"'заўтра а' p",nextWeek:i,other:"P"},d=function(e,t,a,r){var u=v[e];return"function"===typeof u?u(t,a,r):u},l=d;t["default"]=l,e.exports=t.default}}]);
//# sourceMappingURL=37233.27f6172d.js.map