"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[50560],{44507:function(e,t,u){var r=u(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(u(68734)),o=r(u(69209));function n(e,t,u){(0,a.default)(2,arguments);var r=(0,o.default)(e,u),n=(0,o.default)(t,u);return r.getTime()===n.getTime()}e.exports=t.default},50560:function(e,t,u){var r=u(42489)["default"];Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=r(u(44507)),o=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function n(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}function f(e){var t=o[e];return 4===e?"'vo' eeee 'o' p":"'v "+t+" o' p"}function d(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'budúcu "+t+" o' p";default:return"'budúci' eeee 'o' p"}}var c={lastWeek:function(e,t,u){var r=e.getUTCDay();return(0,a.default)(e,t,u)?f(r):n(r)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,u){var r=e.getUTCDay();return(0,a.default)(e,t,u)?f(r):d(r)},other:"P"},l=function(e,t,u,r){var a=c[e];return"function"===typeof a?a(t,u,r):a},i=l;t["default"]=i,e.exports=t.default}}]);
//# sourceMappingURL=50560.1da8fa0e.js.map