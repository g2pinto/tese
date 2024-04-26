Object.defineProperty(exports, '__esModule', { value: true });

const browser = require('@sentry/browser');
const sdk = require('./sdk.js');
const router = require('./router.js');
const errorhandler = require('./errorhandler.js');
const tracing = require('./tracing.js');



exports.init = sdk.init;
exports.vueRouterInstrumentation = router.vueRouterInstrumentation;
exports.attachErrorHandler = errorhandler.attachErrorHandler;
exports.createTracingMixins = tracing.createTracingMixins;
for (const k in browser) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = browser[k];
}
//# sourceMappingURL=index.js.map
