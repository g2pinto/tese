Object.defineProperty(exports, '__esModule', { value: true });

const browser = require('@sentry/browser');
const core = require('@sentry/core');
const utils = require('@sentry/utils');
const constants = require('./constants.js');
const errorhandler = require('./errorhandler.js');
const tracing = require('./tracing.js');

const globalWithVue = utils.GLOBAL_OBJ ;

const DEFAULT_CONFIG = {
  Vue: globalWithVue.Vue,
  attachProps: true,
  logErrors: true,
  hooks: constants.DEFAULT_HOOKS,
  timeout: 2000,
  trackComponents: false,
  _metadata: {
    sdk: {
      name: 'sentry.javascript.vue',
      packages: [
        {
          name: 'npm:@sentry/vue',
          version: browser.SDK_VERSION,
        },
      ],
      version: browser.SDK_VERSION,
    },
  },
};

/**
 * Inits the Vue SDK
 */
function init(
  config = {},
) {
  const options = {
    ...DEFAULT_CONFIG,
    ...config,
  };

  browser.init(options);

  if (!options.Vue && !options.app) {
    // eslint-disable-next-line no-console
    console.warn(
      `[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.
Update your \`Sentry.init\` call with an appropriate config option:
\`app\` (Application Instance - Vue 3) or \`Vue\` (Vue Constructor - Vue 2).`,
    );
    return;
  }

  if (options.app) {
    const apps = utils.arrayify(options.app);
    apps.forEach(app => vueInit(app, options));
  } else if (options.Vue) {
    vueInit(options.Vue, options);
  }
}

const vueInit = (app, options) => {
  // Check app is not mounted yet - should be mounted _after_ init()!
  // This is _somewhat_ private, but in the case that this doesn't exist we simply ignore it
  // See: https://github.com/vuejs/core/blob/eb2a83283caa9de0a45881d860a3cbd9d0bdd279/packages/runtime-core/src/component.ts#L394
  const appWithInstance = app

;

  const isMounted = appWithInstance._instance && appWithInstance._instance.isMounted;
  if (isMounted === true) {
    // eslint-disable-next-line no-console
    console.warn(
      '[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`.',
    );
  }

  errorhandler.attachErrorHandler(app, options);

  if (core.hasTracingEnabled(options)) {
    app.mixin(
      tracing.createTracingMixins({
        ...options,
        ...options.tracingOptions,
      }),
    );
  }
};

exports.init = init;
//# sourceMappingURL=sdk.js.map
