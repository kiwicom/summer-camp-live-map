module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([4],{

/***/ "./components/BlogPostPreview.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("./node_modules/react-relay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_relay__);
var _jsxFileName = "/Users/martingalajda/Work/HobbyProjects/kiwicamp/client/web/components/BlogPostPreview.js";



var BlogPostPreview = function BlogPostPreview(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    key: props.post.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.post.title);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_relay__["createFragmentContainer"])(BlogPostPreview, {
  post: function post() {
    var node = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/BlogPostPreview_post.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    if (node.hash && node.hash !== "8cb8861c94062f8169421aaffe852b84") {
      console.error("The definition of 'BlogPostPreview_post' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/BlogPostPreview_post.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
}));

/***/ }),

/***/ "./components/BlogPosts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("./node_modules/react-relay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_relay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BlogPostPreview__ = __webpack_require__("./components/BlogPostPreview.js");
var _jsxFileName = "/Users/martingalajda/Work/HobbyProjects/kiwicamp/client/web/components/BlogPosts.js";




var BlogPosts = function BlogPosts(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Blog posts"), props.viewer.allBlogPosts.edges.map(function (_ref) {
    var node = _ref.node;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BlogPostPreview__["a" /* default */], {
      key: node.id,
      post: node,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_relay__["createFragmentContainer"])(BlogPosts, {
  viewer: function viewer() {
    var node = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/BlogPosts_viewer.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    if (node.hash && node.hash !== "73b43dc2feadc9fe9b723a340f39bd27") {
      console.error("The definition of 'BlogPosts_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/BlogPosts_viewer.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
}));

/***/ }),

/***/ "./lib/RelayProvider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


 // Thank you https://github.com/robrichard
// https://github.com/robrichard/relay-context-provider

var RelayProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelayProvider, _React$Component);

  function RelayProvider() {
    _classCallCheck(this, RelayProvider);

    return _possibleConstructorReturn(this, (RelayProvider.__proto__ || Object.getPrototypeOf(RelayProvider)).apply(this, arguments));
  }

  _createClass(RelayProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        relay: {
          environment: this.props.environment,
          variables: this.props.variables
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return RelayProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

RelayProvider.childContextTypes = {
  relay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
RelayProvider.propTypes = {
  environment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  variables: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};
/* harmony default export */ __webpack_exports__["a"] = (RelayProvider);

/***/ }),

/***/ "./lib/createRelayEnvironment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = initEnvironment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_relay_runtime__ = __webpack_require__("./node_modules/relay-runtime/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_relay_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_relay_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);


var relayEnvironment = null; // Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()("https://api.graph.cool/relay/v1/next-js-with-relay-modern-example", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text,
      // GraphQL text from input
      variables: variables
    })
  }).then(function (response) {
    return response.json();
  });
}

function initEnvironment() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$records = _ref.records,
      records = _ref$records === void 0 ? {} : _ref$records;

  // Create a network layer from the fetch function
  var network = __WEBPACK_IMPORTED_MODULE_0_relay_runtime__["Network"].create(fetchQuery);
  var store = new __WEBPACK_IMPORTED_MODULE_0_relay_runtime__["Store"](new __WEBPACK_IMPORTED_MODULE_0_relay_runtime__["RecordSource"](records)); // Make sure to create a new Relay environment for every server-side request so that data
  // isn't shared between connections (which would be bad)

  if (!process.browser) {
    return new __WEBPACK_IMPORTED_MODULE_0_relay_runtime__["Environment"]({
      network: network,
      store: store
    });
  } // reuse Relay environment on client-side


  if (!relayEnvironment) {
    relayEnvironment = new __WEBPACK_IMPORTED_MODULE_0_relay_runtime__["Environment"]({
      network: network,
      store: store
    });
  }

  return relayEnvironment;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createRelayEnvironment__ = __webpack_require__("./lib/createRelayEnvironment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_relay__ = __webpack_require__("./node_modules/react-relay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_relay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_relay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RelayProvider__ = __webpack_require__("./lib/RelayProvider.js");

var _jsxFileName = "/Users/martingalajda/Work/HobbyProjects/kiwicamp/client/web/lib/withData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var composedInitialProps, queryProps, queryRecords, environment, variables;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Evaluate the composed component's getInitialProps()
                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  composedInitialProps = _context.sent;

                case 5:
                  queryProps = {};
                  queryRecords = {};
                  environment = Object(__WEBPACK_IMPORTED_MODULE_2__createRelayEnvironment__["a" /* default */])();

                  if (!options.query) {
                    _context.next = 14;
                    break;
                  }

                  // Provide the `url` prop data in case a graphql query uses it
                  // const url = { query: ctx.query, pathname: ctx.pathname }
                  variables = {}; // TODO: Consider RelayQueryResponseCache
                  // https://github.com/facebook/relay/issues/1687#issuecomment-302931855

                  _context.next = 12;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_relay__["fetchQuery"])(environment, options.query, variables);

                case 12:
                  queryProps = _context.sent;
                  queryRecords = environment.getStore().getSource().toJSON();

                case 14:
                  return _context.abrupt("return", _objectSpread({}, composedInitialProps, queryProps, {
                    queryRecords: queryRecords
                  }));

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));
      _this.environment = Object(__WEBPACK_IMPORTED_MODULE_2__createRelayEnvironment__["a" /* default */])({
        records: props.queryRecords
      });
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__RelayProvider__["a" /* default */], {
          environment: this.environment,
          variables: {},
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        })));
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(ComposedComponent.displayName, ")")
  }), _temp;
});

/***/ }),

/***/ "./node_modules/asap/browser-asap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__("./node_modules/asap/browser-raw.js");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/fbjs/lib/Promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = __webpack_require__("./node_modules/promise/index.js");

/***/ }),

/***/ "./node_modules/fbjs/lib/areEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var aStackPool = [];
var bStackPool = [];

/**
 * Checks if two values are equal. Values may be primitives, arrays, or objects.
 * Returns true if both arguments have the same keys and values.
 *
 * @see http://underscorejs.org
 * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * @license MIT
 */
function areEqual(a, b) {
  var aStack = aStackPool.length ? aStackPool.pop() : [];
  var bStack = bStackPool.length ? bStackPool.pop() : [];
  var result = eq(a, b, aStack, bStack);
  aStack.length = 0;
  bStack.length = 0;
  aStackPool.push(aStack);
  bStackPool.push(bStack);
  return result;
}

function eq(a, b, aStack, bStack) {
  if (a === b) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    return a !== 0 || 1 / a == 1 / b;
  }
  if (a == null || b == null) {
    // a or b can be `null` or `undefined`
    return false;
  }
  if (typeof a != 'object' || typeof b != 'object') {
    return false;
  }
  var objToStr = Object.prototype.toString;
  var className = objToStr.call(a);
  if (className != objToStr.call(b)) {
    return false;
  }
  switch (className) {
    case '[object String]':
      return a == String(b);
    case '[object Number]':
      return isNaN(a) || isNaN(b) ? false : a == Number(b);
    case '[object Date]':
    case '[object Boolean]':
      return +a == +b;
    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
  }
  // Assume equality for cyclic structures.
  var length = aStack.length;
  while (length--) {
    if (aStack[length] == a) {
      return bStack[length] == b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  var size = 0;
  // Recursively compare objects and arrays.
  if (className === '[object Array]') {
    size = a.length;
    if (size !== b.length) {
      return false;
    }
    // Deep compare the contents, ignoring non-numeric properties.
    while (size--) {
      if (!eq(a[size], b[size], aStack, bStack)) {
        return false;
      }
    }
  } else {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.hasOwnProperty('valueOf') && b.hasOwnProperty('valueOf')) {
      return a.valueOf() == b.valueOf();
    }
    var keys = Object.keys(a);
    if (keys.length != Object.keys(b).length) {
      return false;
    }
    for (var i = 0; i < keys.length; i++) {
      if (!eq(a[keys[i]], b[keys[i]], aStack, bStack)) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}

module.exports = areEqual;

/***/ }),

/***/ "./node_modules/fbjs/lib/mapObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/nullthrows.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }
  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;

/***/ }),

/***/ "./node_modules/fbjs/lib/removeFromArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/**
 * Removes an element from an array.
 */
function removeFromArray(array, element) {
  var index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

module.exports = removeFromArray;

/***/ }),

/***/ "./node_modules/fbjs/lib/resolveImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__("./node_modules/fbjs/lib/Promise.js");

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var resolvedPromise = Promise.resolve();

/**
 * An alternative to setImmediate based on Promise.
 */
function resolveImmediate(callback) {
  resolvedPromise.then(callback)["catch"](throwNext);
}

function throwNext(error) {
  setTimeout(function () {
    throw error;
  }, 0);
}

module.exports = resolveImmediate;

/***/ }),

/***/ "./node_modules/fbjs/lib/sprintf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 *
 * @param {string} format the base string
 * @param ...args the values to insert
 * @return {string} the replaced string
 */
function sprintf(format) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function (match) {
    return args[index++];
  });
}

module.exports = sprintf;

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/node_modules/unfetch/dist/unfetch.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ "./node_modules/promise/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/promise/lib/index.js")


/***/ }),

/***/ "./node_modules/promise/lib/core.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__("./node_modules/asap/browser-raw.js");

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._40 = 0;
  this._65 = 0;
  this._55 = null;
  this._72 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._65 === 3) {
    self = self._55;
  }
  if (Promise._37) {
    Promise._37(self);
  }
  if (self._65 === 0) {
    if (self._40 === 0) {
      self._40 = 1;
      self._72 = deferred;
      return;
    }
    if (self._40 === 1) {
      self._40 = 2;
      self._72 = [self._72, deferred];
      return;
    }
    self._72.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._65 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._65 === 1) {
        resolve(deferred.promise, self._55);
      } else {
        reject(deferred.promise, self._55);
      }
      return;
    }
    var ret = tryCallOne(cb, self._55);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._65 = 3;
      self._55 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._65 = 1;
  self._55 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._65 = 2;
  self._55 = newValue;
  if (Promise._87) {
    Promise._87(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._40 === 1) {
    handle(self, self._72);
    self._72 = null;
  }
  if (self._40 === 2) {
    for (var i = 0; i < self._72.length; i++) {
      handle(self, self._72[i]);
    }
    self._72 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),

/***/ "./node_modules/promise/lib/done.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__("./node_modules/promise/lib/core.js");

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};


/***/ }),

/***/ "./node_modules/promise/lib/es6-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__("./node_modules/promise/lib/core.js");

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._65 = 1;
  p._55 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._65 === 3) {
            val = val._55;
          }
          if (val._65 === 1) return res(i, val._55);
          if (val._65 === 2) reject(val._55);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),

/***/ "./node_modules/promise/lib/finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__("./node_modules/promise/lib/core.js");

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};


/***/ }),

/***/ "./node_modules/promise/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/promise/lib/core.js");
__webpack_require__("./node_modules/promise/lib/done.js");
__webpack_require__("./node_modules/promise/lib/finally.js");
__webpack_require__("./node_modules/promise/lib/es6-extensions.js");
__webpack_require__("./node_modules/promise/lib/node-extensions.js");
__webpack_require__("./node_modules/promise/lib/synchronous.js");


/***/ }),

/***/ "./node_modules/promise/lib/node-extensions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file contains then/promise specific extensions that are only useful
// for node.js interop

var Promise = __webpack_require__("./node_modules/promise/lib/core.js");
var asap = __webpack_require__("./node_modules/asap/browser-asap.js");

module.exports = Promise;

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  if (
    typeof argumentCount === 'number' && argumentCount !== Infinity
  ) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
};

var callbackFn = (
  'function (err, res) {' +
  'if (err) { rj(err); } else { rs(res); }' +
  '}'
);
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'return new Promise(function (rs, rj) {',
    'var res = fn.call(',
    ['self'].concat(args).concat([callbackFn]).join(','),
    ');',
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = [
    'return function (' + args.join(',') + ') {',
    'var self = this;',
    'var args;',
    'var argLength = arguments.length;',
    'if (arguments.length > ' + fnLength + ') {',
    'args = new Array(arguments.length + 1);',
    'for (var i = 0; i < arguments.length; i++) {',
    'args[i] = arguments[i];',
    '}',
    '}',
    'return new Promise(function (rs, rj) {',
    'var cb = ' + callbackFn + ';',
    'var res;',
    'switch (argLength) {',
    args.concat(['extra']).map(function (_, index) {
      return (
        'case ' + (index) + ':' +
        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
        'break;'
      );
    }).join(''),
    'default:',
    'args[argLength] = cb;',
    'res = fn.apply(self, args);',
    '}',
    
    'if (res &&',
    '(typeof res === "object" || typeof res === "function") &&',
    'typeof res.then === "function"',
    ') {rs(res);}',
    '});',
    '};'
  ].join('');

  return Function(
    ['Promise', 'fn'],
    body
  )(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback =
      typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        })
      }
    }
  }
};

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
};


/***/ }),

/***/ "./node_modules/promise/lib/synchronous.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__("./node_modules/promise/lib/core.js");

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function() {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function() {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function() {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._65 === 3) {
      return this._55.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._55;
  };

  Promise.prototype.getReason = function () {
    if (this._65 === 3) {
      return this._55.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._55;
  };

  Promise.prototype.getState = function () {
    if (this._65 === 3) {
      return this._55.getState();
    }
    if (this._65 === -1 || this._65 === -2) {
      return 0;
    }

    return this._65;
  };
};

Promise.disableSynchronous = function() {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};


/***/ }),

/***/ "./node_modules/react-relay/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Relay v1.6.0
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = __webpack_require__("./node_modules/react-relay/lib/ReactRelayPublic.js");

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayContainerProfiler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/index.js"),
    RelayProfiler = _require.RelayProfiler;

function profileContainer(Container, containerName) {
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  RelayProfiler.instrumentMethods(Container.prototype, {
    constructor: containerName + '.prototype.constructor',
    UNSAFE_componentWillReceiveProps: containerName + '.prototype.UNSAFE_componentWillReceiveProps',
    componentWillUnmount: containerName + '.prototype.componentWillUnmount',
    shouldComponentUpdate: containerName + '.prototype.shouldComponentUpdate'
  });

  // Copy static getDerivedStateFromProps() to the instrumented constructor.
  // This is necessary to support the react-lifecycle-compat poyfill.
  // This can be removed once react-relay requires React 16.3+.
  if (
  /* $FlowFixMe(>=0.68.0) This comment suppresses an error found when Flow
   * v0.68 was deployed. To see the error delete this comment and run Flow. */
  Container.prototype !== null && typeof Container.prototype === 'object' &&
  /* $FlowFixMe(>=0.68.0) This comment suppresses an error found when Flow
   * v0.68 was deployed. To see the error delete this comment and run Flow. */
  typeof Container.getDerivedStateFromProps === 'function') {
    Container.prototype.constructor.getDerivedStateFromProps = Container.getDerivedStateFromProps;
  }
}

module.exports = { profileContainer: profileContainer };

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayFragmentContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"));

var _inherits3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/react-relay/lib/RelayContainerUtils.js"),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__("./node_modules/react-relay/lib/RelayContext.js"),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__("./node_modules/react-relay/lib/ReactRelayContainerProfiler.js"),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__("./node_modules/relay-runtime/index.js"),
    RelayProfiler = _require4.RelayProfiler,
    isScalarAndEqual = _require4.isScalarAndEqual;

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayFragmentContainer.handleFragmentDataUpdate');
        var resolverFromThisUpdate = _this.state.resolver;
        _this.setState(function (updatedState) {
          // If this event belongs to the current data source, update.
          // Otherwise we should ignore it.
          if (resolverFromThisUpdate === updatedState.resolver) {
            return {
              data: updatedState.resolver.resolve(),
              relayProp: {
                isLoading: updatedState.resolver.isLoading(),
                environment: updatedState.relayProp.environment
              }
            };
          }

          return null;
        }, profiler.stop);
      };

      _this._legacyStringishRef = __webpack_require__("./node_modules/react-relay/lib/makeLegacyStringishComponentRef.js")(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;
      // Do not provide a subscription/callback here.
      // It is possible for this render to be interrupted or aborted,
      // In which case the subscription would cause a leak.
      // We will add the subscription in componentDidMount().

      var resolver = createFragmentSpecResolver(relay, containerName, fragments, props);
      _this.state = {
        data: resolver.resolve(),
        relay: relay,
        relayEnvironment: context.relay.environment,
        prevProps: _this.props,
        relayVariables: context.relay.variables,
        relayProp: {
          isLoading: resolver.isLoading(),
          environment: relay.environment
        },
        resolver: resolver
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      // Any props change could impact the query, so we mirror props in state.
      // This is an unusual pattern, but necessary for this container usecase.
      var prevProps = prevState.prevProps,
          relay = prevState.relay;
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, prevProps);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      var resolver = prevState.resolver;

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (prevState.relayEnvironment !== relay.environment || prevState.relayVariables !== relay.variables || !__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevIDs, nextIDs)) {
        // Do not provide a subscription/callback here.
        // It is possible for this render to be interrupted or aborted,
        // In which case the subscription would cause a leak.
        // We will add the subscription in componentDidUpdate().
        resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps);

        return {
          data: resolver.resolve(),
          relayEnvironment: relay.environment,
          prevProps: nextProps,
          relayVariables: relay.variables,
          relayProp: {
            isLoading: resolver.isLoading(),
            environment: relay.environment
          },
          resolver: resolver
        };
      } else {
        resolver.setProps(nextProps);

        var _data = resolver.resolve();
        if (_data !== prevState.data) {
          return {
            data: _data,
            relayEnvironment: relay.environment,
            prevProps: nextProps,
            relayVariables: relay.variables,
            relayProp: {
              isLoading: resolver.isLoading(),
              environment: relay.environment
            }
          };
        }
      }

      return null;
    };

    Container.prototype.componentDidMount = function componentDidMount() {
      this._subscribeToNewResolver();
    };

    Container.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.state.resolver !== prevState.resolver) {
        prevState.resolver.dispose();

        this._subscribeToNewResolver();
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this.state.resolver.dispose();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._subscribeToNewResolver = function _subscribeToNewResolver() {
      var _state = this.state,
          data = _state.data,
          resolver = _state.resolver;

      // Event listeners are only safe to add during the commit phase,
      // So they won't leak if render is interrupted or errors.

      resolver.setCallback(this._handleFragmentDataUpdate);

      // External values could change between render and commit.
      // Check for this case, even though it requires an extra store read.
      var maybeNewData = resolver.resolve();
      if (data !== maybeNewData) {
        this.setState({ data: maybeNewData });
      }
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__("./node_modules/react/index.js").createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__("./node_modules/react/index.js").createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__("./node_modules/react/index.js").Component);

  Container.displayName = containerName;
  Container.contextTypes = {
    relay: __webpack_require__("./node_modules/react-relay/lib/RelayPropTypes.js").Relay
  };

  profileContainer(Container, 'ReactRelayFragmentContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec) {
  return __webpack_require__("./node_modules/react-relay/lib/buildReactRelayContainer.js")(Component, fragmentSpec, createContainerWithFragments);
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayPaginationContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"));

var _inherits3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"));

var _defineProperty3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js"));

var _extends4 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/react-relay/lib/RelayContainerUtils.js"),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__("./node_modules/react-relay/lib/RelayContext.js"),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__("./node_modules/react-relay/lib/ReactRelayContainerProfiler.js"),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__("./node_modules/relay-runtime/index.js"),
    ConnectionInterface = _require4.ConnectionInterface,
    RelayProfiler = _require4.RelayProfiler,
    Observable = _require4.Observable,
    isScalarAndEqual = _require4.isScalarAndEqual;

var containerContextTypes = {
  relay: __webpack_require__("./node_modules/react-relay/lib/RelayPropTypes.js").Relay
};

var FORWARD = 'forward';

/**
 * Extends the functionality of RelayFragmentContainer by providing a mechanism
 * to load more data from a connection.
 *
 * # Configuring a PaginationContainer
 *
 * PaginationContainer accepts the standard FragmentContainer arguments and an
 * additional `connectionConfig` argument:
 *
 * - `Component`: the component to be wrapped/rendered.
 * - `fragments`: an object whose values are `graphql` fragments. The object
 *   keys determine the prop names by which fragment data is available.
 * - `connectionConfig`: an object that determines how to load more connection
 *   data. Details below.
 *
 * # Loading More Data
 *
 * Use `props.relay.hasMore()` to determine if there are more items to load.
 *
 * ```
 * hasMore(): boolean
 * ```
 *
 * Use `props.relay.isLoading()` to determine if a previous call to `loadMore()`
 * is still pending. This is convenient for avoiding duplicate load calls.
 *
 * ```
 * isLoading(): boolean
 * ```
 *
 * Use `props.relay.loadMore()` to load more items. This will return null if
 * there are no more items to fetch, otherwise it will fetch more items and
 * return a Disposable that can be used to cancel the fetch.
 *
 * `pageSize` should be the number of *additional* items to fetch (not the
 * total).
 *
 * ```
 * loadMore(pageSize: number, callback: ?(error: ?Error) => void): ?Disposable
 * ```
 *
 * A complete example:
 *
 * ```
 * class Foo extends React.Component {
 *   ...
 *   _onEndReached() {
 *     if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
 *       return;
 *     }
 *     this.props.relay.loadMore(10);
 *   }
 *   ...
 * }
 * ```
 *
 * # Connection Config
 *
 * Here's an example, followed by details of each config property:
 *
 * ```
 * ReactRelayPaginationContainer.createContainer(
 *   Component,
 *   {
 *     user: graphql`fragment FriendsFragment on User {
 *       friends(after: $afterCursor first: $count) @connection {
 *         edges { ... }
 *         pageInfo {
 *           startCursor
 *           endCursor
 *           hasNextPage
 *           hasPreviousPage
 *         }
 *       }
 *     }`,
 *   },
 *   {
 *     direction: 'forward',
 *     getConnectionFromProps(props) {
 *       return props.user && props.user.friends;
 *     },
 *     getFragmentVariables(vars, totalCount) {
 *       // The component presumably wants *all* edges, not just those after
 *       // the cursor, so notice that we don't set $afterCursor here.
 *       return {
 *         ...vars,
 *         count: totalCount,
 *       };
 *     },
 *     getVariables(props, {count, cursor}, fragmentVariables) {
 *       return {
 *         id: props.user.id,
 *         afterCursor: cursor,
 *         count,
 *       },
 *     },
 *     query: graphql`
 *       query FriendsQuery($id: ID!, $afterCursor: ID, $count: Int!) {
 *         node(id: $id) {
 *           ...FriendsFragment
 *         }
 *       }
 *     `,
 *   }
 * );
 * ```
 *
 * ## Config Properties
 *
 * - `direction`: Either "forward" to indicate forward pagination using
 *   after/first, or "backward" to indicate backward pagination using
 *   before/last.
 * - `getConnectionFromProps(props)`: PaginationContainer doesn't magically know
 *   which connection data you mean to fetch more of (a container might fetch
 *   multiple connections, but can only paginate one of them). This function is
 *   given the fragment props only (not full props), and should return the
 *   connection data. See the above example that returns the friends data via
 *   `props.user.friends`.
 * - `getFragmentVariables(previousVars, totalCount)`: Given the previous variables
 *   and the new total number of items, get the variables to use when reading
 *   your fragments. Typically this means setting whatever your local "count"
 *   variable is to the value of `totalCount`. See the example.
 * - `getVariables(props, {count, cursor})`: Get the variables to use when
 *   fetching the pagination `query`. You may determine the root object id from
 *   props (see the example that uses `props.user.id`) and may also set whatever
 *   variables you use for the after/first/before/last calls based on the count
 *   and cursor.
 * - `query`: A query to use when fetching more connection data. This should
 *   typically reference one of the container's fragment (as in the example)
 *   to ensure that all the necessary fields for sub-components are fetched.
 */

function createGetConnectionFromProps(metadata) {
  var path = metadata.path;
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(path, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getConnectionFromProps function.');
  return function (props) {
    var data = props[metadata.fragmentName];
    for (var i = 0; i < path.length; i++) {
      if (!data || typeof data !== 'object') {
        return null;
      }
      data = data[path[i]];
    }
    return data;
  };
}

function createGetFragmentVariables(metadata) {
  var countVariable = metadata.count;
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(countVariable, 'ReactRelayPaginationContainer: Unable to synthesize a ' + 'getFragmentVariables function.');
  return function (prevVars, totalCount) {
    return (0, _extends4['default'])({}, prevVars, (0, _defineProperty3['default'])({}, countVariable, totalCount));
  };
}

function findConnectionMetadata(fragments) {
  var foundConnectionMetadata = null;
  var isRelayModern = false;
  for (var _fragmentName in fragments) {
    var fragment = fragments[_fragmentName];
    var connectionMetadata = fragment.metadata && fragment.metadata.connection;
    // HACK: metadata is always set to `undefined` in classic. In modern, even
    // if empty, it is set to null (never undefined). We use that knowlege to
    // check if we're dealing with classic or modern
    if (fragment.metadata !== undefined) {
      isRelayModern = true;
    }
    if (connectionMetadata) {
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(connectionMetadata.length === 1, 'ReactRelayPaginationContainer: Only a single @connection is ' + 'supported, `%s` has %s.', _fragmentName, connectionMetadata.length);
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!foundConnectionMetadata, 'ReactRelayPaginationContainer: Only a single fragment with ' + '@connection is supported.');
      foundConnectionMetadata = (0, _extends4['default'])({}, connectionMetadata[0], {
        fragmentName: _fragmentName
      });
    }
  }
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!isRelayModern || foundConnectionMetadata !== null, 'ReactRelayPaginationContainer: A @connection directive must be present.');
  return foundConnectionMetadata || {};
}

function toObserver(observerOrCallback) {
  return typeof observerOrCallback === 'function' ? {
    error: observerOrCallback,
    complete: observerOrCallback,
    unsubscribe: function unsubscribe(subscription) {
      typeof observerOrCallback === 'function' && observerOrCallback();
    }
  } : observerOrCallback || {};
}

function createContainerWithFragments(Component, fragments, connectionConfig) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var metadata = findConnectionMetadata(fragments);

  var getConnectionFromProps = connectionConfig.getConnectionFromProps || createGetConnectionFromProps(metadata);

  var direction = connectionConfig.direction || metadata.direction;
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(direction, 'ReactRelayPaginationContainer: Unable to infer direction of the ' + 'connection, possibly because both first and last are provided.');

  var getFragmentVariables = connectionConfig.getFragmentVariables || createGetFragmentVariables(metadata);

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayPaginationContainer.handleFragmentDataUpdate');
        _this.setState({ data: _this._resolver.resolve() }, profiler.stop);
      };

      _this._hasMore = function () {
        var connectionData = _this._getConnectionData();
        return !!(connectionData && connectionData.hasMore && connectionData.cursor);
      };

      _this._isLoading = function () {
        return !!_this._refetchSubscription;
      };

      _this._refetchConnection = function (totalCount, observerOrCallback, refetchVariables) {
        var paginatingVariables = {
          count: totalCount,
          cursor: null,
          totalCount: totalCount
        };
        var fetch = _this._fetchPage(paginatingVariables, toObserver(observerOrCallback), { force: true }, refetchVariables);

        return { dispose: fetch.unsubscribe };
      };

      _this._loadMore = function (pageSize, observerOrCallback, options) {
        var observer = toObserver(observerOrCallback);
        var connectionData = _this._getConnectionData();
        if (!connectionData) {
          Observable.create(function (sink) {
            return sink.complete();
          }).subscribe(observer);
          return null;
        }
        var totalCount = connectionData.edgeCount + pageSize;
        if (options && options.force) {
          return _this._refetchConnection(totalCount, observerOrCallback);
        }

        var _ConnectionInterface$ = ConnectionInterface.get(),
            END_CURSOR = _ConnectionInterface$.END_CURSOR,
            START_CURSOR = _ConnectionInterface$.START_CURSOR;

        var cursor = connectionData.cursor;
        __webpack_require__("./node_modules/fbjs/lib/warning.js")(cursor, 'ReactRelayPaginationContainer: Cannot `loadMore` without valid `%s` (got `%s`)', direction === FORWARD ? END_CURSOR : START_CURSOR, cursor);
        var paginatingVariables = {
          count: pageSize,
          cursor: cursor,
          totalCount: totalCount
        };
        var fetch = _this._fetchPage(paginatingVariables, observer, options);
        return { dispose: fetch.unsubscribe };
      };

      _this._legacyStringishRef = __webpack_require__("./node_modules/react-relay/lib/makeLegacyStringishComponentRef.js")(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._isARequestInFlight = false;
      _this._localVariables = null;
      _this._refetchSubscription = null;
      _this._resolver = createFragmentSpecResolver(relay, containerName, fragments, props, _this._handleFragmentDataUpdate);
      _this._relayContext = {
        environment: relay.environment,
        variables: relay.variables
      };
      _this.state = {
        data: _this._resolver.resolve(),
        relayEnvironment: relay.environment,
        relayProp: _this._buildRelayProp(relay),
        relayVariables: relay.variables
      };
      return _this;
    }

    /**
     * When new props are received, read data for the new props and subscribe
     * for updates. Props may be the same in which case previous data and
     * subscriptions can be reused.
     */


    Container.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      var context = __webpack_require__("./node_modules/fbjs/lib/nullthrows.js")(nextContext);
      var relay = assertRelayContext(context.relay);
      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, this.props);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.state.relayEnvironment !== relay.environment || this.state.relayVariables !== relay.variables || !__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevIDs, nextIDs)) {
        this._release();
        this._localVariables = null;
        // Child containers rely on context.relay being mutated (for gDSFP).
        this._relayContext.environment = relay.environment;
        this._relayContext.variables = relay.variables;
        this._resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps, this._handleFragmentDataUpdate);
        this.setState({
          relayEnvironment: relay.environment,
          relayProp: this._buildRelayProp(relay),
          relayVariables: relay.variables
        });
      } else if (!this._localVariables) {
        this._resolver.setProps(nextProps);
      }
      var data = this._resolver.resolve();
      if (data !== this.state.data) {
        this.setState({ data: data });
      }
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this._release();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    Container.prototype._buildRelayProp = function _buildRelayProp(relay) {
      return {
        hasMore: this._hasMore,
        isLoading: this._isLoading,
        loadMore: this._loadMore,
        refetchConnection: this._refetchConnection,
        environment: relay.environment
      };
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getConnectionData = function _getConnectionData() {
      // Extract connection data and verify there are more edges to fetch
      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var connectionData = getConnectionFromProps(props);
      if (connectionData == null) {
        return null;
      }

      var _ConnectionInterface$2 = ConnectionInterface.get(),
          EDGES = _ConnectionInterface$2.EDGES,
          PAGE_INFO = _ConnectionInterface$2.PAGE_INFO,
          HAS_NEXT_PAGE = _ConnectionInterface$2.HAS_NEXT_PAGE,
          HAS_PREV_PAGE = _ConnectionInterface$2.HAS_PREV_PAGE,
          END_CURSOR = _ConnectionInterface$2.END_CURSOR,
          START_CURSOR = _ConnectionInterface$2.START_CURSOR;

      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof connectionData === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return `null` or a plain object with %s and %s properties, got `%s`.', componentName, EDGES, PAGE_INFO, connectionData);
      var edges = connectionData[EDGES];
      var pageInfo = connectionData[PAGE_INFO];
      if (edges == null || pageInfo == null) {
        return null;
      }
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(edges), 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Array, got `%s`.', componentName, EDGES, edges);
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof pageInfo === 'object', 'ReactRelayPaginationContainer: Expected `getConnectionFromProps()` in `%s`' + 'to return an object with %s: Object, got `%s`.', componentName, PAGE_INFO, pageInfo);
      var hasMore = direction === FORWARD ? pageInfo[HAS_NEXT_PAGE] : pageInfo[HAS_PREV_PAGE];
      var cursor = direction === FORWARD ? pageInfo[END_CURSOR] : pageInfo[START_CURSOR];
      if (typeof hasMore !== 'boolean' || edges.length !== 0 && typeof cursor === 'undefined') {
        __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'ReactRelayPaginationContainer: Cannot paginate without %s fields in `%s`. ' + 'Be sure to fetch %s (got `%s`) and %s (got `%s`).', PAGE_INFO, componentName, direction === FORWARD ? HAS_NEXT_PAGE : HAS_PREV_PAGE, hasMore, direction === FORWARD ? END_CURSOR : START_CURSOR, cursor);
        return null;
      }
      return {
        cursor: cursor,
        edgeCount: edges.length,
        hasMore: hasMore
      };
    };

    Container.prototype._getQueryFetcher = function _getQueryFetcher() {
      if (!this._queryFetcher) {
        this._queryFetcher = new (__webpack_require__("./node_modules/react-relay/lib/ReactRelayQueryFetcher.js"))();
      }
      return this._queryFetcher;
    };

    Container.prototype._fetchPage = function _fetchPage(paginatingVariables, observer, options, refetchVariables) {
      var _this2 = this;

      var _assertRelayContext = assertRelayContext(this.context.relay),
          environment = _assertRelayContext.environment;

      var _environment$unstable = environment.unstable_internal,
          createOperationSelector = _environment$unstable.createOperationSelector,
          getRequest = _environment$unstable.getRequest,
          getVariablesFromObject = _environment$unstable.getVariablesFromObject;

      var props = (0, _extends4['default'])({}, this.props, this.state.data);
      var fragmentVariables = getVariablesFromObject(this._relayContext.variables, fragments, this.props);
      fragmentVariables = (0, _extends4['default'])({}, fragmentVariables, refetchVariables);
      var fetchVariables = connectionConfig.getVariables(props, {
        count: paginatingVariables.count,
        cursor: paginatingVariables.cursor
      },
      // Pass the variables used to fetch the fragments initially
      fragmentVariables);
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof fetchVariables === 'object' && fetchVariables !== null, 'ReactRelayPaginationContainer: Expected `getVariables()` to ' + 'return an object, got `%s` in `%s`.', fetchVariables, componentName);
      fetchVariables = (0, _extends4['default'])({}, fetchVariables, refetchVariables);
      this._localVariables = fetchVariables;

      var cacheConfig = options ? { force: !!options.force } : undefined;
      if (cacheConfig && options && options.rerunParamExperimental) {
        cacheConfig.rerunParamExperimental = options.rerunParamExperimental;
      }
      var request = getRequest(connectionConfig.query);
      var operation = createOperationSelector(request, fetchVariables);

      var refetchSubscription = null;

      if (this._refetchSubscription) {
        this._refetchSubscription.unsubscribe();
      }

      var onNext = function onNext(payload, complete) {
        // Child containers rely on context.relay being mutated (for gDSFP).
        _this2._relayContext.environment = _this2.context.relay.environment;
        _this2._relayContext.variables = (0, _extends4['default'])({}, _this2.context.relay.variables, fragmentVariables);
        var prevData = _this2._resolver.resolve();
        _this2._resolver.setVariables(getFragmentVariables(fragmentVariables, paginatingVariables.totalCount));
        var nextData = _this2._resolver.resolve();

        // Workaround slightly different handling for connection in different
        // core implementations:
        // - Classic core requires the count to be explicitly incremented
        // - Modern core automatically appends new items, updating the count
        //   isn't required to see new data.
        //
        // `setState` is only required if changing the variables would change the
        // resolved data.
        // TODO #14894725: remove PaginationContainer equal check
        if (!__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevData, nextData)) {
          _this2.setState({ data: nextData }, complete);
        } else {
          complete();
        }
      };

      var cleanup = function cleanup() {
        if (_this2._refetchSubscription === refetchSubscription) {
          _this2._refetchSubscription = null;
          _this2._isARequestInFlight = false;
        }
      };

      this._isARequestInFlight = true;
      refetchSubscription = this._getQueryFetcher().execute({
        environment: environment,
        operation: operation,
        cacheConfig: cacheConfig,
        preservePreviousReferences: true
      }).mergeMap(function (payload) {
        return Observable.create(function (sink) {
          onNext(payload, function () {
            sink.next(); // pass void to public observer's `next`
            sink.complete();
          });
        });
      })
      // use do instead of finally so that observer's `complete` fires after cleanup
      ['do']({
        error: cleanup,
        complete: cleanup,
        unsubscribe: cleanup
      }).subscribe(observer || {});

      this._refetchSubscription = this._isARequestInFlight ? refetchSubscription : null;

      return refetchSubscription;
    };

    Container.prototype._release = function _release() {
      this._resolver.dispose();
      if (this._refetchSubscription) {
        this._refetchSubscription.unsubscribe();
        this._refetchSubscription = null;
        this._isARequestInFlight = false;
      }
      if (this._queryFetcher) {
        this._queryFetcher.dispose();
      }
    };

    Container.prototype.getChildContext = function getChildContext() {
      return { relay: this._relayContext };
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__("./node_modules/react/index.js").createElement(ComponentClass, (0, _extends4['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__("./node_modules/react/index.js").createElement(Component, (0, _extends4['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__("./node_modules/react/index.js").Component);

  Container.displayName = containerName;
  Container.contextTypes = containerContextTypes;

  profileContainer(Container, 'ReactRelayPaginationContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, connectionConfig) {
  var Container = __webpack_require__("./node_modules/react-relay/lib/buildReactRelayContainer.js")(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, connectionConfig);
  });
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  Container.childContextTypes = containerContextTypes;
  return Container;
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayPublic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * The public interface to React Relay.
 */
module.exports = {
  QueryRenderer: __webpack_require__("./node_modules/react-relay/lib/ReactRelayQueryRenderer.js"),

  MutationTypes: __webpack_require__("./node_modules/relay-runtime/index.js").MutationTypes,
  RangeOperations: __webpack_require__("./node_modules/relay-runtime/index.js").RangeOperations,

  commitLocalUpdate: __webpack_require__("./node_modules/relay-runtime/index.js").commitLocalUpdate,
  commitMutation: __webpack_require__("./node_modules/relay-runtime/index.js").commitMutation,
  createFragmentContainer: __webpack_require__("./node_modules/react-relay/lib/ReactRelayFragmentContainer.js").createContainer,
  createPaginationContainer: __webpack_require__("./node_modules/react-relay/lib/ReactRelayPaginationContainer.js").createContainer,
  createRefetchContainer: __webpack_require__("./node_modules/react-relay/lib/ReactRelayRefetchContainer.js").createContainer,
  fetchQuery: __webpack_require__("./node_modules/relay-runtime/index.js").fetchQuery,
  graphql: __webpack_require__("./node_modules/relay-runtime/index.js").graphql,
  requestSubscription: __webpack_require__("./node_modules/relay-runtime/index.js").requestSubscription
};

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayQueryFetcher.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ReactRelayQueryFetcher = function () {
  function ReactRelayQueryFetcher() {
    (0, _classCallCheck3['default'])(this, ReactRelayQueryFetcher);
    this._selectionReferences = [];
    this._callOnDataChangeWhenSet = false;
  } // results of the root fragment;
  // fetch error


  ReactRelayQueryFetcher.prototype.lookupInStore = function lookupInStore(environment, operation) {
    if (environment.check(operation.root)) {
      this._retainCachedOperation(environment, operation);
      return environment.lookup(operation.fragment);
    }
    return null;
  };

  ReactRelayQueryFetcher.prototype.execute = function execute(_ref) {
    var _this = this;

    var environment = _ref.environment,
        operation = _ref.operation,
        cacheConfig = _ref.cacheConfig,
        _ref$preservePrevious = _ref.preservePreviousReferences,
        preservePreviousReferences = _ref$preservePrevious === undefined ? false : _ref$preservePrevious;
    var createOperationSelector = environment.unstable_internal.createOperationSelector;

    var nextReferences = [];

    return environment.execute({ operation: operation, cacheConfig: cacheConfig }).map(function (payload) {
      var operationForPayload = createOperationSelector(operation.node, payload.variables, payload.operation);
      nextReferences.push(environment.retain(operationForPayload.root));
      return payload;
    })['do']({
      error: function error() {
        // We may have partially fulfilled the request, so let the next request
        // or the unmount dispose of the references.
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      },
      complete: function complete() {
        if (!preservePreviousReferences) {
          _this._disposeSelectionReferences();
        }
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      },
      unsubscribe: function unsubscribe() {
        // Let the next request or the unmount code dispose of the references.
        // We may have partially fulfilled the request.
        _this._selectionReferences = _this._selectionReferences.concat(nextReferences);
      }
    });
  };

  ReactRelayQueryFetcher.prototype.setOnDataChange = function setOnDataChange(onDataChange) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._fetchOptions, 'ReactRelayQueryFetcher: `setOnDataChange` should have been called after having called `fetch`');

    // Mutate the most recent fetchOptions in place,
    // So that in-progress requests can access the updated callback.
    this._fetchOptions.onDataChange = onDataChange;

    if (this._callOnDataChangeWhenSet && typeof onDataChange === 'function') {
      this._callOnDataChangeWhenSet = false;
      if (this._error != null) {
        onDataChange({ error: this._error });
      } else if (this._snapshot != null) {
        onDataChange({ snapshot: this._snapshot });
      }
    }
  };

  /**
   * `fetch` fetches the data for the given operation.
   * If a result is immediately available synchronously, it will be synchronously
   * returned by this function.
   *
   * Otherwise, the fetched result will be communicated via the `onDataChange` callback.
   * `onDataChange` will be called with the first result (**if it wasn't returned synchronously**),
   * and then subsequently whenever the data changes.
   */


  ReactRelayQueryFetcher.prototype.fetch = function fetch(fetchOptions) {
    var _this2 = this;

    var cacheConfig = fetchOptions.cacheConfig,
        environment = fetchOptions.environment,
        operation = fetchOptions.operation;

    var fetchHasReturned = false;
    var error = void 0;

    this._disposeRequest();
    this._fetchOptions = fetchOptions;

    var request = this.execute({
      environment: environment,
      operation: operation,
      cacheConfig: cacheConfig
    })['finally'](function () {
      _this2._pendingRequest = null;
    }).subscribe({
      next: function next() {
        var onDataChange = _this2._fetchOptions ? _this2._fetchOptions.onDataChange : null;

        // If we received a response when we didn't have a change callback,
        // Make a note that to notify the callback when it's later added.
        _this2._callOnDataChangeWhenSet = typeof onDataChange !== 'function';
        _this2._error = null;

        // Only notify of the first result if `next` is being called **asynchronously**
        // (i.e. after `fetch` has returned).
        _this2._onQueryDataAvailable({ notifyFirstResult: fetchHasReturned });
      },
      error: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }

        error.toString = function () {
          return _error.toString();
        };

        return error;
      }(function (err) {
        var onDataChange = _this2._fetchOptions ? _this2._fetchOptions.onDataChange : null;

        // If we received a response when we didn't have a change callback,
        // Make a note that to notify the callback when it's later added.
        _this2._callOnDataChangeWhenSet = typeof onDataChange !== 'function';
        _this2._error = err;
        _this2._snapshot = null;

        // Only notify of error if `error` is being called **asynchronously**
        // (i.e. after `fetch` has returned).
        if (fetchHasReturned) {
          if (typeof onDataChange === 'function') {
            onDataChange({ error: err });
          }
        } else {
          error = err;
        }
      })
    });

    this._pendingRequest = {
      dispose: function dispose() {
        request.unsubscribe();
      }
    };

    fetchHasReturned = true;

    if (error) {
      throw error;
    }

    return this._snapshot;
  };

  ReactRelayQueryFetcher.prototype.retry = function retry() {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._fetchOptions, 'ReactRelayQueryFetcher: `retry` should be called after having called `fetch`');
    return this.fetch(this._fetchOptions);
  };

  ReactRelayQueryFetcher.prototype.dispose = function dispose() {
    this._disposeRequest();
    this._disposeSelectionReferences();
  };

  ReactRelayQueryFetcher.prototype._disposeRequest = function _disposeRequest() {
    this._error = null;
    this._snapshot = null;

    // order is important, dispose of pendingFetch before selectionReferences
    if (this._pendingRequest) {
      this._pendingRequest.dispose();
    }
    if (this._rootSubscription) {
      this._rootSubscription.dispose();
      this._rootSubscription = null;
    }
  };

  ReactRelayQueryFetcher.prototype._retainCachedOperation = function _retainCachedOperation(environment, operation) {
    this._disposeCacheSelectionReference();
    this._cacheSelectionReference = environment.retain(operation.root);
  };

  ReactRelayQueryFetcher.prototype._disposeCacheSelectionReference = function _disposeCacheSelectionReference() {
    this._cacheSelectionReference && this._cacheSelectionReference.dispose();
    this._cacheSelectionReference = null;
  };

  ReactRelayQueryFetcher.prototype._disposeSelectionReferences = function _disposeSelectionReferences() {
    this._disposeCacheSelectionReference();
    this._selectionReferences.forEach(function (r) {
      return r.dispose();
    });
    this._selectionReferences = [];
  };

  ReactRelayQueryFetcher.prototype._onQueryDataAvailable = function _onQueryDataAvailable(_ref2) {
    var _this3 = this;

    var notifyFirstResult = _ref2.notifyFirstResult;

    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._fetchOptions, 'ReactRelayQueryFetcher: `_onQueryDataAvailable` should have been called after having called `fetch`');
    var _fetchOptions = this._fetchOptions,
        environment = _fetchOptions.environment,
        onDataChange = _fetchOptions.onDataChange,
        operation = _fetchOptions.operation;

    // `_onQueryDataAvailable` can be called synchronously the first time and can be called
    // multiple times by network layers that support data subscriptions.
    // Wait until the first payload to call `onDataChange` and subscribe for data updates.

    if (this._snapshot) {
      return;
    }

    this._snapshot = environment.lookup(operation.fragment);

    // Subscribe to changes in the data of the root fragment
    this._rootSubscription = environment.subscribe(this._snapshot, function (snapshot) {
      // Read from this._fetchOptions in case onDataChange() was lazily added.
      if (_this3._fetchOptions != null) {
        var maybeNewOnDataChange = _this3._fetchOptions.onDataChange;
        if (typeof maybeNewOnDataChange === 'function') {
          maybeNewOnDataChange({ snapshot: snapshot });
        }
      }
    });

    if (this._snapshot && notifyFirstResult && typeof onDataChange === 'function') {
      onDataChange({ snapshot: this._snapshot });
    }
  };

  return ReactRelayQueryFetcher;
}();

module.exports = ReactRelayQueryFetcher;

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayQueryRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"));

var _inherits3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/index.js"),
    deepFreeze = _require.deepFreeze;

var NETWORK_ONLY = 'NETWORK_ONLY';
var STORE_THEN_NETWORK = 'STORE_THEN_NETWORK';
var DataFromEnum = {
  NETWORK_ONLY: NETWORK_ONLY,
  STORE_THEN_NETWORK: STORE_THEN_NETWORK
};

/**
 * @public
 *
 * Orchestrates fetching and rendering data for a single view or view hierarchy:
 * - Fetches the query/variables using the given network implementation.
 * - Normalizes the response(s) to that query, publishing them to the given
 *   store.
 * - Renders the pending/fail/success states with the provided render function.
 * - Subscribes for updates to the root data and re-renders with any changes.
 */
var ReactRelayQueryRenderer = function (_React$Component) {
  (0, _inherits3['default'])(ReactRelayQueryRenderer, _React$Component);

  // TODO T25783053 Update this component to use the new React context API,
  // Once we have confirmed that it's okay to raise min React version to 16.3.
  function ReactRelayQueryRenderer(props, context) {
    (0, _classCallCheck3['default'])(this, ReactRelayQueryRenderer);

    // Callbacks are attached to the current instance and shared with static
    // lifecyles by bundling with state. This is okay to do because the
    // callbacks don't change in reaction to props. However we should not
    // "leak" them before mounting (since we would be unable to clean up). For
    // that reason, we define them as null initially and fill them in after
    // mounting to avoid leaking memory.
    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

    _this._relayContext = {
      // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.
      environment: _this.props.environment,
      variables: _this.props.variables
    };
    var retryCallbacks = {
      handleDataChange: null,
      handleRetryAfterError: null
    };

    var queryFetcher = new (__webpack_require__("./node_modules/react-relay/lib/ReactRelayQueryFetcher.js"))();

    _this.state = (0, _extends3['default'])({
      prevPropsEnvironment: props.environment,
      prevPropsVariables: props.variables,
      prevQuery: props.query,
      queryFetcher: queryFetcher,
      retryCallbacks: retryCallbacks
    }, fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks));
    return _this;
  }

  ReactRelayQueryRenderer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevQuery !== nextProps.query || prevState.prevPropsEnvironment !== nextProps.environment || !__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevState.prevPropsVariables, nextProps.variables)) {
      return (0, _extends3['default'])({
        prevQuery: nextProps.query,
        prevPropsEnvironment: nextProps.environment,
        prevPropsVariables: nextProps.variables
      }, fetchQueryAndComputeStateFromProps(nextProps, prevState.queryFetcher, prevState.retryCallbacks));
    }

    return null;
  };

  ReactRelayQueryRenderer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var _state = this.state,
        retryCallbacks = _state.retryCallbacks,
        queryFetcher = _state.queryFetcher;


    retryCallbacks.handleDataChange = function (params) {
      var error = params.error == null ? null : params.error;
      var snapshot = params.snapshot == null ? null : params.snapshot;

      _this2.setState(function (prevState) {
        // Don't update state if nothing has changed.
        if (snapshot === prevState.snapshot && error === prevState.error) {
          return null;
        }
        return {
          renderProps: getRenderProps(error, snapshot, queryFetcher, retryCallbacks),
          snapshot: snapshot
        };
      });
    };

    retryCallbacks.handleRetryAfterError = function (error) {
      return _this2.setState({ renderProps: getLoadingRenderProps() });
    };

    // Re-initialize the ReactRelayQueryFetcher with callbacks.
    // If data has changed since constructions, this will re-render.
    if (this.props.query) {
      queryFetcher.setOnDataChange(retryCallbacks.handleDataChange);
    }
  };

  ReactRelayQueryRenderer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.state.queryFetcher.dispose();
  };

  ReactRelayQueryRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.render !== this.props.render || nextState.renderProps !== this.state.renderProps;
  };

  ReactRelayQueryRenderer.prototype.getChildContext = function getChildContext() {
    return {
      relay: this._relayContext
    };
  };

  ReactRelayQueryRenderer.prototype.render = function render() {
    var _state2 = this.state,
        relayContextEnvironment = _state2.relayContextEnvironment,
        relayContextVariables = _state2.relayContextVariables,
        renderProps = _state2.renderProps;

    // HACK Mutate the context.relay object before updating children,
    // To account for any changes made by static gDSFP.
    // Updating this value in gDSFP would be less safe, since props changes
    // could be interrupted and we might re-render based on a setState call.
    // Child containers rely on context.relay being mutated (also for gDSFP).
    // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.

    this._relayContext.environment = relayContextEnvironment;
    this._relayContext.variables = relayContextVariables;

    // Note that the root fragment results in `renderProps.props` is already
    // frozen by the store; this call is to freeze the renderProps object and
    // error property if set.
    if (true) {
      deepFreeze(renderProps);
    }
    return this.props.render(renderProps);
  };

  return ReactRelayQueryRenderer;
}(__webpack_require__("./node_modules/react/index.js").Component);

ReactRelayQueryRenderer.childContextTypes = {
  relay: __webpack_require__("./node_modules/react-relay/lib/RelayPropTypes.js").Relay
};


function getLoadingRenderProps() {
  return {
    error: null,
    props: null, // `props: null` indicates that the data is being fetched (i.e. loading)
    retry: null
  };
}

function getEmptyRenderProps() {
  return {
    error: null,
    props: {}, // `props: {}` indicates no data available
    retry: null
  };
}

function getRenderProps(error, snapshot, queryFetcher, retryCallbacks) {
  return {
    error: error ? error : null,
    props: snapshot ? snapshot.data : null,
    retry: function retry() {
      var syncSnapshot = queryFetcher.retry();
      if (syncSnapshot && typeof retryCallbacks.handleDataChange === 'function') {
        retryCallbacks.handleDataChange({ snapshot: syncSnapshot });
      } else if (error && typeof retryCallbacks.handleRetryAfterError === 'function') {
        // If retrying after an error and no synchronous result available,
        // reset the render props
        retryCallbacks.handleRetryAfterError(error);
      }
    }
  };
}

function fetchQueryAndComputeStateFromProps(props, queryFetcher, retryCallbacks) {
  var environment = props.environment,
      query = props.query,
      variables = props.variables;

  if (query) {
    // $FlowFixMe TODO t16225453 QueryRenderer works with old+new environment.
    var genericEnvironment = environment;

    var _genericEnvironment$u = genericEnvironment.unstable_internal,
        createOperationSelector = _genericEnvironment$u.createOperationSelector,
        getRequest = _genericEnvironment$u.getRequest;

    var request = getRequest(query);
    var operation = createOperationSelector(request, variables);

    try {
      var storeSnapshot = props.dataFrom === STORE_THEN_NETWORK ? queryFetcher.lookupInStore(genericEnvironment, operation) : null;
      var querySnapshot = queryFetcher.fetch({
        cacheConfig: props.cacheConfig,
        dataFrom: props.dataFrom,
        environment: genericEnvironment,
        onDataChange: retryCallbacks.handleDataChange,
        operation: operation
      });
      // Use network data first, since it may be fresher
      var _snapshot = querySnapshot || storeSnapshot;
      if (!_snapshot) {
        return {
          error: null,
          relayContextEnvironment: environment,
          relayContextVariables: operation.variables,
          renderProps: getLoadingRenderProps(),
          snapshot: null
        };
      }

      return {
        error: null,
        relayContextEnvironment: environment,
        relayContextVariables: operation.variables,
        renderProps: getRenderProps(null, _snapshot, queryFetcher, retryCallbacks),
        snapshot: _snapshot
      };
    } catch (error) {
      return {
        error: error,
        relayContextEnvironment: environment,
        relayContextVariables: operation.variables,
        renderProps: getRenderProps(error, null, queryFetcher, retryCallbacks),
        snapshot: null
      };
    }
  } else {
    queryFetcher.dispose();

    return {
      error: null,
      relayContextEnvironment: environment,
      relayContextVariables: variables,
      renderProps: getEmptyRenderProps()
    };
  }
}

module.exports = ReactRelayQueryRenderer;

/***/ }),

/***/ "./node_modules/react-relay/lib/ReactRelayRefetchContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

var _possibleConstructorReturn3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"));

var _inherits3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/react-relay/lib/RelayContainerUtils.js"),
    getComponentName = _require.getComponentName,
    getReactComponent = _require.getReactComponent;

var _require2 = __webpack_require__("./node_modules/react-relay/lib/RelayContext.js"),
    assertRelayContext = _require2.assertRelayContext;

var _require3 = __webpack_require__("./node_modules/react-relay/lib/ReactRelayContainerProfiler.js"),
    profileContainer = _require3.profileContainer;

var _require4 = __webpack_require__("./node_modules/relay-runtime/index.js"),
    Observable = _require4.Observable,
    RelayProfiler = _require4.RelayProfiler,
    isScalarAndEqual = _require4.isScalarAndEqual;

var containerContextTypes = {
  relay: __webpack_require__("./node_modules/react-relay/lib/RelayPropTypes.js").Relay
};

/**
 * Composes a React component class, returning a new class that intercepts
 * props, resolving them with the provided fragments and subscribing for
 * updates.
 */
function createContainerWithFragments(Component, fragments, taggedNode) {
  var ComponentClass = getReactComponent(Component);
  var componentName = getComponentName(Component);
  var containerName = 'Relay(' + componentName + ')';

  var Container = function (_React$Component) {
    (0, _inherits3['default'])(Container, _React$Component);

    function Container(props, context) {
      (0, _classCallCheck3['default'])(this, Container);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));

      _this._handleFragmentDataUpdate = function () {
        var profiler = RelayProfiler.profile('ReactRelayRefetchContainer.handleFragmentDataUpdate');
        var resolverFromThisUpdate = _this.state.resolver;
        _this.setState(function (updatedState) {
          // If this event belongs to the current data source, update.
          // Otherwise we should ignore it.
          if (resolverFromThisUpdate === updatedState.resolver) {
            return {
              data: updatedState.resolver.resolve()
            };
          }

          return null;
        }, profiler.stop);
      };

      _this._refetch = function (refetchVariables, renderVariables, observerOrCallback, options) {
        var _assertRelayContext = assertRelayContext(_this.context.relay),
            environment = _assertRelayContext.environment,
            rootVariables = _assertRelayContext.variables;

        var fetchVariables = typeof refetchVariables === 'function' ? refetchVariables(_this._getFragmentVariables()) : refetchVariables;
        fetchVariables = (0, _extends3['default'])({}, rootVariables, fetchVariables);
        var fragmentVariables = renderVariables ? (0, _extends3['default'])({}, rootVariables, renderVariables) : fetchVariables;
        var cacheConfig = options ? { force: !!options.force } : undefined;

        var observer = typeof observerOrCallback === 'function' ? {
          // callback is not exectued on complete or unsubscribe
          // for backward compatibility
          next: observerOrCallback,
          error: observerOrCallback
        } : observerOrCallback || {};

        var _this$context$relay$e = _this.context.relay.environment.unstable_internal,
            createOperationSelector = _this$context$relay$e.createOperationSelector,
            getRequest = _this$context$relay$e.getRequest;

        var query = getRequest(taggedNode);
        var operation = createOperationSelector(query, fetchVariables);

        // TODO: T26288752 find a better way
        /* eslint-disable lint/react-state-props-mutation */
        _this.state.localVariables = fetchVariables;
        /* eslint-enable lint/react-state-props-mutation */

        // Cancel any previously running refetch.
        _this._refetchSubscription && _this._refetchSubscription.unsubscribe();

        // Declare refetchSubscription before assigning it in .start(), since
        // synchronous completion may call callbacks .subscribe() returns.
        var refetchSubscription = void 0;
        _this._getQueryFetcher().execute({
          environment: environment,
          operation: operation,
          cacheConfig: cacheConfig,
          // TODO (T26430099): Cleanup old references
          preservePreviousReferences: true
        }).mergeMap(function (response) {
          // Child containers rely on context.relay being mutated (for gDSFP).
          // TODO: T26288752 find a better way
          /* eslint-disable lint/react-state-props-mutation */
          _this.state.relayContext.environment = _this.context.relay.environment;
          _this.state.relayContext.variables = fragmentVariables;
          /* eslint-enable lint/react-state-props-mutation */
          _this.state.resolver.setVariables(fragmentVariables);
          return Observable.create(function (sink) {
            return _this.setState({ data: _this.state.resolver.resolve() }, function () {
              sink.next();
              sink.complete();
            });
          });
        })['finally'](function () {
          // Finalizing a refetch should only clear this._refetchSubscription
          // if the finizing subscription is the most recent call.
          if (_this._refetchSubscription === refetchSubscription) {
            _this._refetchSubscription = null;
          }
        }).subscribe((0, _extends3['default'])({}, observer, {
          start: function start(subscription) {
            _this._refetchSubscription = refetchSubscription = subscription;
            observer.start && observer.start(subscription);
          }
        }));

        return {
          dispose: function dispose() {
            refetchSubscription && refetchSubscription.unsubscribe();
          }
        };
      };

      _this._legacyStringishRef = __webpack_require__("./node_modules/react-relay/lib/makeLegacyStringishComponentRef.js")(_this, componentName);

      var relay = assertRelayContext(context.relay);
      var createFragmentSpecResolver = relay.environment.unstable_internal.createFragmentSpecResolver;

      _this._refetchSubscription = null;
      // Do not provide a subscription/callback here.
      // It is possible for this render to be interrupted or aborted,
      // In which case the subscription would cause a leak.
      // We will add the subscription in componentDidMount().
      var resolver = createFragmentSpecResolver(relay, containerName, fragments, props);
      _this.state = {
        data: resolver.resolve(),
        localVariables: null,
        relay: relay,
        relayContext: {
          environment: relay.environment,
          variables: relay.variables
        },
        relayEnvironment: relay.environment,
        relayProp: {
          environment: relay.environment,
          refetch: _this._refetch
        },
        prevProps: _this.props,
        relayVariables: relay.variables,
        resolver: resolver
      };
      return _this;
    }

    Container.prototype.componentDidMount = function componentDidMount() {
      this._subscribeToNewResolver();
    };

    Container.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (this.state.resolver !== prevState.resolver) {
        prevState.resolver.dispose();
        this._queryFetcher && this._queryFetcher.dispose();
        this._refetchSubscription && this._refetchSubscription.unsubscribe();

        this._subscribeToNewResolver();
      }
    };

    /**
     * When new props are received, read data for the new props and add it to
     * state. Props may be the same in which case previous data can be reused.
     */


    Container.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      // Any props change could impact the query, so we mirror props in state.
      // This is an unusual pattern, but necessary for this container usecase.
      var prevProps = prevState.prevProps;

      var relay = assertRelayContext(prevState.relay);

      var _relay$environment$un = relay.environment.unstable_internal,
          createFragmentSpecResolver = _relay$environment$un.createFragmentSpecResolver,
          getDataIDsFromObject = _relay$environment$un.getDataIDsFromObject;

      var prevIDs = getDataIDsFromObject(fragments, prevProps);
      var nextIDs = getDataIDsFromObject(fragments, nextProps);

      var resolver = prevState.resolver;

      // If the environment has changed or props point to new records then
      // previously fetched data and any pending fetches no longer apply:
      // - Existing references are on the old environment.
      // - Existing references are based on old variables.
      // - Pending fetches are for the previous records.
      if (prevState.relayEnvironment !== relay.environment || prevState.relayVariables !== relay.variables || !__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevIDs, nextIDs)) {
        // Child containers rely on context.relay being mutated (for gDSFP).
        var mutatedRelayContext = prevState.relayContext;
        mutatedRelayContext.environment = relay.environment;
        mutatedRelayContext.variables = relay.variables;

        // Do not provide a subscription/callback here.
        // It is possible for this render to be interrupted or aborted,
        // In which case the subscription would cause a leak.
        // We will add the subscription in componentDidUpdate().
        resolver = createFragmentSpecResolver(relay, containerName, fragments, nextProps);
        return {
          data: resolver.resolve(),
          localVariables: null,
          prevProps: nextProps,
          relayContext: mutatedRelayContext,
          relayEnvironment: relay.environment,
          relayProp: {
            environment: relay.environment,
            // refetch should never really change
            refetch: prevState.relayProp.refetch
          },
          relayVariables: relay.variables,
          resolver: resolver
        };
      } else if (!prevState.localVariables) {
        resolver.setProps(nextProps);
      }
      var data = resolver.resolve();
      if (data !== prevState.data) {
        return {
          data: data,
          prevProps: nextProps
        };
      }
      return null;
    };

    Container.prototype.componentWillUnmount = function componentWillUnmount() {
      this.state.resolver.dispose();
      this._queryFetcher && this._queryFetcher.dispose();
      this._refetchSubscription && this._refetchSubscription.unsubscribe();
    };

    Container.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
      // Short-circuit if any Relay-related data has changed
      if (nextState.data !== this.state.data || nextState.relayProp !== this.state.relayProp) {
        return true;
      }
      // Otherwise, for convenience short-circuit if all non-Relay props
      // are scalar and equal
      var keys = Object.keys(nextProps);
      for (var ii = 0; ii < keys.length; ii++) {
        var _key = keys[ii];
        if (_key === 'relay') {
          if (nextState.relayEnvironment !== this.state.relayEnvironment || nextState.relayVariables !== this.state.relayVariables) {
            return true;
          }
        } else {
          if (!fragments.hasOwnProperty(_key) && !isScalarAndEqual(nextProps[_key], this.props[_key])) {
            return true;
          }
        }
      }
      return false;
    };

    Container.prototype._subscribeToNewResolver = function _subscribeToNewResolver() {
      var _state = this.state,
          data = _state.data,
          resolver = _state.resolver;

      // Event listeners are only safe to add during the commit phase,
      // So they won't leak if render is interrupted or errors.

      resolver.setCallback(this._handleFragmentDataUpdate);

      // External values could change between render and commit.
      // Check for this case, even though it requires an extra store read.
      var maybeNewData = resolver.resolve();
      if (data !== maybeNewData) {
        this.setState({ data: maybeNewData });
      }
    };

    /**
     * Render new data for the existing props/context.
     */


    Container.prototype._getFragmentVariables = function _getFragmentVariables() {
      var getVariablesFromObject = this.context.relay.environment.unstable_internal.getVariablesFromObject;

      return getVariablesFromObject(this.context.relay.variables, fragments, this.props);
    };

    Container.prototype._getQueryFetcher = function _getQueryFetcher() {
      if (!this._queryFetcher) {
        this._queryFetcher = new (__webpack_require__("./node_modules/react-relay/lib/ReactRelayQueryFetcher.js"))();
      }
      return this._queryFetcher;
    };

    Container.prototype.getChildContext = function getChildContext() {
      return { relay: this.state.relayContext };
    };

    Container.prototype.render = function render() {
      if (ComponentClass) {
        return __webpack_require__("./node_modules/react/index.js").createElement(ComponentClass, (0, _extends3['default'])({}, this.props, this.state.data, {
          // @TODO (T28161354) Remove the string ref fallback
          ref: this.props.componentRef || this._legacyStringishRef,
          relay: this.state.relayProp
        }));
      } else {
        // Stateless functional, doesn't support `ref`
        return __webpack_require__("./node_modules/react/index.js").createElement(Component, (0, _extends3['default'])({}, this.props, this.state.data, {
          relay: this.state.relayProp
        }));
      }
    };

    // @TODO (T28161354) Remove this once string ref usage is gone.


    return Container;
  }(__webpack_require__("./node_modules/react/index.js").Component);

  Container.displayName = containerName;
  Container.contextTypes = containerContextTypes;

  profileContainer(Container, 'ReactRelayRefetchContainer');

  return Container;
}

/**
 * Wrap the basic `createContainer()` function with logic to adapt to the
 * `context.relay.environment` in which it is rendered. Specifically, the
 * extraction of the environment-specific version of fragments in the
 * `fragmentSpec` is memoized once per environment, rather than once per
 * instance of the container constructed/rendered.
 */
function createContainer(Component, fragmentSpec, taggedNode) {
  var Container = __webpack_require__("./node_modules/react-relay/lib/buildReactRelayContainer.js")(Component, fragmentSpec, function (ComponentClass, fragments) {
    return createContainerWithFragments(ComponentClass, fragments, taggedNode);
  });
  /* $FlowFixMe(>=0.53.0) This comment suppresses an error
   * when upgrading Flow's support for React. Common errors found when
   * upgrading Flow's React support are documented at
   * https://fburl.com/eq7bs81w */
  Container.childContextTypes = containerContextTypes;
  return Container;
}

module.exports = { createContainer: createContainer, createContainerWithFragments: createContainerWithFragments };

/***/ }),

/***/ "./node_modules/react-relay/lib/RelayContainerUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * @internal
 *
 * Helper for checking if this is a React Component
 * created with React.Component or React.createClass().
 */

function isReactComponent(component) {
  return !!(component && typeof component.prototype === 'object' && component.prototype && component.prototype.isReactComponent);
}

function getReactComponent(Component) {
  if (isReactComponent(Component)) {
    return Component;
  } else {
    return null;
  }
}

function getComponentName(Component) {
  var name = void 0;
  var ComponentClass = getReactComponent(Component);
  if (ComponentClass) {
    name = ComponentClass.displayName || ComponentClass.name;
  } else if (typeof Component === 'function') {
    // This is a stateless functional component.
    name = Component.displayName || Component.name || 'StatelessComponent';
  } else {
    name = 'ReactElement';
  }
  return String(name);
}

function getContainerName(Component) {
  return 'Relay(' + getComponentName(Component) + ')';
}

module.exports = {
  getComponentName: getComponentName,
  getContainerName: getContainerName,
  getReactComponent: getReactComponent
};

/***/ }),

/***/ "./node_modules/react-relay/lib/RelayContext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Asserts that the input is a matches the `RelayContext` type defined in
 * `RelayEnvironmentTypes` and returns it as that type.
 */
function assertRelayContext(relay) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(isRelayContext(relay), 'RelayContext: Expected `context.relay` to be an object conforming to ' + 'the `RelayContext` interface, got `%s`.', relay);
  return relay;
}

/**
 * Determine if the input is a plain object that matches the `RelayContext`
 * type defined in `RelayEnvironmentTypes`.
 */
function isRelayContext(context) {
  return typeof context === 'object' && context !== null && !Array.isArray(context) && __webpack_require__("./node_modules/react-relay/lib/isRelayEnvironment.js")(context.environment) && __webpack_require__("./node_modules/react-relay/lib/isRelayVariables.js")(context.variables);
}

module.exports = {
  assertRelayContext: assertRelayContext,
  isRelayContext: isRelayContext
};

/***/ }),

/***/ "./node_modules/react-relay/lib/RelayPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/react-relay/lib/RelayContext.js"),
    isRelayContext = _require.isRelayContext;

var RelayPropTypes = {
  Container: function Container(props, propName, componentName) {
    var component = props[propName];
    if (component == null) {
      return new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js")('Required prop `%s` was not specified in `%s`.', propName, componentName));
    } else if (!__webpack_require__("./node_modules/react-relay/lib/isRelayContainer.js")(component)) {
      return new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js")('Invalid prop `%s` supplied to `%s`, expected a RelayContainer.', propName, componentName));
    }
    return null;
  },
  Environment: function Environment(props, propName, componentName) {
    var context = props[propName];
    if (!__webpack_require__("./node_modules/react-relay/lib/isClassicRelayEnvironment.js")(context) || !__webpack_require__("./node_modules/react-relay/lib/isRelayEnvironment.js")(context)) {
      return new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js")('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object conforming to the `RelayEnvironment` interface.', propName, componentName, context));
    }
    return null;
  },


  QueryConfig: __webpack_require__("./node_modules/next/node_modules/prop-types/index.js").shape({
    name: __webpack_require__("./node_modules/next/node_modules/prop-types/index.js").string.isRequired,
    params: __webpack_require__("./node_modules/next/node_modules/prop-types/index.js").object.isRequired,
    queries: __webpack_require__("./node_modules/next/node_modules/prop-types/index.js").object.isRequired
  }),

  ClassicRelay: function ClassicRelay(props, propName, componentName) {
    var relay = props[propName];
    if (!isRelayContext(relay) || !__webpack_require__("./node_modules/react-relay/lib/isClassicRelayEnvironment.js")(relay.environment)) {
      return new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js")('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with a classic `environment` implementation and `variables`.', propName, componentName, relay));
    }
    return null;
  },
  Relay: function Relay(props, propName, componentName) {
    var relay = props[propName];
    if (!isRelayContext(relay)) {
      return new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js")('Invalid prop/context `%s` supplied to `%s`, expected `%s` to be ' + 'an object with an `environment` and `variables`.', propName, componentName, relay));
    }
    return null;
  }
};

module.exports = RelayPropTypes;

/***/ }),

/***/ "./node_modules/react-relay/lib/assertFragmentMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Fail fast if the user supplies invalid fragments as input.
 */
function assertFragmentMap(componentName, fragments) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(fragments && typeof fragments === 'object', 'Could not create Relay Container for `%s`. ' + 'Expected a set of GraphQL fragments, got `%s` instead.', componentName, fragments);

  for (var key in fragments) {
    if (fragments.hasOwnProperty(key)) {
      var fragment = fragments[key];
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(fragment && (typeof fragment === 'object' || typeof fragment === 'function'), 'Could not create Relay Container for `%s`. ' + 'The value of fragment `%s` was expected to be a fragment, got `%s` instead.', componentName, key, fragment);
    }
  }
}

module.exports = assertFragmentMap;

/***/ }),

/***/ "./node_modules/react-relay/lib/buildReactRelayContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/react-relay/lib/RelayContainerUtils.js"),
    getComponentName = _require.getComponentName,
    getContainerName = _require.getContainerName;

var containerContextTypes = {
  relay: __webpack_require__("./node_modules/react-relay/lib/RelayPropTypes.js").Relay
};

/**
 * Creates a component class whose instances adapt to the
 * `context.relay.environment` in which they are rendered and which have the
 * necessary static methods (`getFragment()` etc) to be composed within classic
 * `Relay.Containers`.
 */
function buildReactRelayContainer(ComponentClass, fragmentSpec, createContainerWithFragments) {
  // Sanity-check user-defined fragment input
  var containerName = getContainerName(ComponentClass);
  __webpack_require__("./node_modules/react-relay/lib/assertFragmentMap.js")(getComponentName(ComponentClass), fragmentSpec);

  // Memoize a container for the last environment instance encountered
  var environment = void 0;
  var Container = void 0;
  function ContainerConstructor(props, context) {
    if (Container == null || context.relay.environment !== environment) {
      environment = context.relay.environment;
      if (true) {
        var _require2 = __webpack_require__("./node_modules/relay-runtime/index.js"),
            isRelayModernEnvironment = _require2.isRelayModernEnvironment;

        if (!isRelayModernEnvironment(environment)) {
          throw new Error('RelayModernContainer: Can only use Relay Modern component ' + (containerName + ' in a Relay Modern environment!\n') + 'When using Relay Modern and Relay Classic in the same ' + 'application, ensure components use Relay Compat to work in ' + 'both environments.\n' + 'See: http://facebook.github.io/relay/docs/relay-compat.html');
        }
      }
      var getFragmentFromTag = environment.unstable_internal.getFragment;

      var _fragments = __webpack_require__("./node_modules/fbjs/lib/mapObject.js")(fragmentSpec, getFragmentFromTag);
      Container = createContainerWithFragments(ComponentClass, _fragments);

      // Attach static lifecycle to wrapper component so React can see it.
      ContainerConstructor.getDerivedStateFromProps = Container.getDerivedStateFromProps;
    }
    /* $FlowFixMe(>=0.53.0) This comment suppresses an
     * error when upgrading Flow's support for React. Common errors found when
     * upgrading Flow's React support are documented at
     * https://fburl.com/eq7bs81w */
    return new Container(props, context);
  }
  ContainerConstructor.contextTypes = containerContextTypes;
  ContainerConstructor.displayName = containerName;

  if (true) {
    ContainerConstructor.__ComponentClass = ComponentClass;
    // Classic container static methods.
    ContainerConstructor.getFragment = function getFragmentOnModernContainer() {
      throw new Error('RelayModernContainer: ' + containerName + '.getFragment() was called on ' + 'a Relay Modern component by a Relay Classic or Relay Compat ' + 'component.\n' + 'When using Relay Modern and Relay Classic in the same ' + 'application, ensure components use Relay Compat to work in ' + 'both environments.\n' + 'See: http://facebook.github.io/relay/docs/relay-compat.html');
    };
  }

  return ContainerConstructor;
}

module.exports = buildReactRelayContainer;

/***/ }),

/***/ "./node_modules/react-relay/lib/isClassicRelayEnvironment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `RelayEnvironment`
 * interface.
 */

function isClassicRelayEnvironment(environment) {
  return typeof environment === 'object' && environment !== null && typeof environment.applyMutation === 'function' && typeof environment.sendMutation === 'function' && typeof environment.forceFetch === 'function' && typeof environment.getFragmentResolver === 'function' && typeof environment.getStoreData === 'function' && typeof environment.primeCache === 'function';
}

module.exports = isClassicRelayEnvironment;

/***/ }),

/***/ "./node_modules/react-relay/lib/isRelayContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function isRelayContainer(component) {
  return !!(component && component.getFragmentNames && component.getFragment && component.hasFragment && component.hasVariable);
}

module.exports = isRelayContainer;

/***/ }),

/***/ "./node_modules/react-relay/lib/isRelayEnvironment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `Environment`
 * interface defined in `RelayEnvironmentTypes`.
 */

function isRelayEnvironment(environment) {
  return typeof environment === 'object' && environment !== null &&
  // TODO: add applyMutation/sendMutation once ready in both cores
  typeof environment.check === 'function' && typeof environment.lookup === 'function' && typeof environment.retain === 'function' && typeof environment.sendQuery === 'function' && typeof environment.execute === 'function' && typeof environment.subscribe === 'function';
}

module.exports = isRelayEnvironment;

/***/ }),

/***/ "./node_modules/react-relay/lib/isRelayVariables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if the object is a plain object that matches the `Variables` type.
 */

function isRelayVariables(variables) {
  return typeof variables === 'object' && variables !== null && !Array.isArray(variables);
}

module.exports = isRelayVariables;

/***/ }),

/***/ "./node_modules/react-relay/lib/makeLegacyStringishComponentRef.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Instead of ref="component", use this module to mimic a string ref.
 * This horrible hack lets us avoid string ref warnings in React strict mode
 * until we have time to clean up the various uses of .refs.component.
 *
 * Track usage at https://fburl.com/relay_containers_string_refs_dashboard
 *
 * @TODO (T28161354) Remove this hack once string refs have been removed.
 */
function makeLegacyStringishComponentRef(parentComponent, componentName) {
  var hasWarned = false;
  if (true) {
    return function ref(childComponent) {
      if (!Object.isExtensible(parentComponent.refs)) {
        // Probably emptyObject. >.>
        parentComponent.refs = {};
      }

      // RelayFBContainerProxy uses this getter to avoid triggering the warning.
      // This proxy component logs a separate warning to track its usage.
      parentComponent.refs.__INTERNAL__component = childComponent;

      // $FlowFixMe https://github.com/facebook/flow/issues/285
      Object.defineProperty(parentComponent.refs, 'component', {
        configurable: true,
        get: function get() {
          if (!hasWarned) {
            hasWarned = true;
            __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayContainer: Do not use `container.refs.component` for ' + 'RelayCompat or RelayModern containers. Instead pass ' + '`containerRef={ref}` to `%s`.', componentName);
          }
          return childComponent;
        }
      });
    };
  } else {
    return 'component';
  }
}

module.exports = makeLegacyStringishComponentRef;

/***/ }),

/***/ "./node_modules/relay-runtime/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Relay v1.6.0
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = __webpack_require__("./node_modules/relay-runtime/lib/RelayRuntime.js");

/***/ }),

/***/ "./node_modules/relay-runtime/lib/ConvertToExecuteFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Converts a FetchFunction into an ExecuteFunction for use by RelayNetwork.
 */
function convertFetch(fn) {
  return function fetch(request, variables, cacheConfig, uploadables) {
    var result = fn(request, variables, cacheConfig, uploadables);
    // Note: We allow FetchFunction to directly return Error to indicate
    // a failure to fetch. To avoid handling this special case throughout the
    // Relay codebase, it is explicitly handled here.
    if (result instanceof Error) {
      return __webpack_require__("./node_modules/relay-runtime/lib/RelayObservable.js").create(function (sink) {
        return sink.error(result);
      });
    }
    return __webpack_require__("./node_modules/relay-runtime/lib/RelayObservable.js").from(result).map(function (value) {
      return convertToExecutePayload(request, variables, value);
    });
  };
}

/**
 * Converts a SubscribeFunction into an ExecuteFunction for use by RelayNetwork.
 */
function convertSubscribe(fn) {
  return function subscribe(operation, variables, cacheConfig) {
    return __webpack_require__("./node_modules/relay-runtime/lib/RelayObservable.js").fromLegacy(function (observer) {
      return fn(operation, variables, cacheConfig, observer);
    }).map(function (value) {
      return convertToExecutePayload(operation, variables, value);
    });
  };
}

/**
 * Given a value which might be a plain GraphQLResponse, coerce to always return
 * an ExecutePayload. A GraphQLResponse may be returned directly from older or
 * simpler Relay Network implementations.
 */
function convertToExecutePayload(request, variables, value) {
  if (!value.data && !value.errors && value.response) {
    if (!value.operation) {
      __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'ConvertToExecuteFunction: execute payload contains response but ' + 'is missing operation.');
      return createExecutePayload(request, variables, value.response);
    }
    return value;
  }
  return createExecutePayload(request, variables, value);
}

function createExecutePayload(request, variables, response) {
  if (request.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").BATCH_REQUEST) {
    throw new Error('ConvertToExecuteFunction: Batch request must return ExecutePayload.');
  }
  return { operation: request.operation, variables: variables, response: response };
}

module.exports = {
  convertFetch: convertFetch,
  convertSubscribe: convertSubscribe
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayConcreteNode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Represents a common GraphQL request with `text` (or persisted `id`) can be
 * used to execute it, an `operation` containing information to normalize the
 * results, and a `fragment` derived from that operation to read the response
 * data (masking data from child fragments).
 */

/**
 * An experimental wrapper around many operations to request in a batched
 * network request. The composed indivual GraphQL requests should be submitted
 * as a single networked request, e.g. in the case of deferred nodes or
 * for streaming connections that are represented as distinct compiled concrete
 * operations but are still conceptually tied to one source operation.
 *
 * Individual requests within the batch may contain data describing their
 * dependencies on other requests or themselves.
 */
var RelayConcreteNode = {
  BATCH_REQUEST: 'BatchRequest',
  CONDITION: 'Condition',
  DEFERRABLE_FRAGMENT_SPREAD: 'DeferrableFragmentSpread',
  DEFERRABLE_OPERATION: 'DeferrableOperation',
  FRAGMENT: 'Fragment',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  LINKED_FIELD: 'LinkedField',
  LINKED_HANDLE: 'LinkedHandle',
  LITERAL: 'Literal',
  LOCAL_ARGUMENT: 'LocalArgument',
  OPERATION: 'Operation',
  ROOT_ARGUMENT: 'RootArgument',
  REQUEST: 'Request',
  SCALAR_FIELD: 'ScalarField',
  SCALAR_HANDLE: 'ScalarHandle',
  VARIABLE: 'Variable'
};
/**
 * Represents a single operation used to processing and normalize runtime
 * request results.
 */

/**
 * Argument in the provided operation to be derived via the results of
 * other requests in the batch.
 */


module.exports = RelayConcreteNode;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayConcreteVariables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Determines the variables that are in scope for a fragment given the variables
 * in scope at the root query as well as any arguments applied at the fragment
 * spread via `@arguments`.
 *
 * Note that this is analagous to determining function arguments given a function call.
 */
function getFragmentVariables(fragment, rootVariables, argumentVariables) {
  var variables = void 0;
  fragment.argumentDefinitions.forEach(function (definition) {
    if (argumentVariables.hasOwnProperty(definition.name)) {
      return;
    }
    variables = variables || (0, _extends3['default'])({}, argumentVariables);
    switch (definition.kind) {
      case 'LocalArgument':
        variables[definition.name] = definition.defaultValue;
        break;
      case 'RootArgument':
        if (!rootVariables.hasOwnProperty(definition.name)) {
          /*
           * A temporary fix to mute false alarm in cases where the root argument is stripped
           * off by the compiler due to a conditional directive, we do not need this argument
           * when tryiny to read the data from the store.
           */
          break;
        }
        variables[definition.name] = rootVariables[definition.name];
        break;
      default:
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.', definition.kind, fragment.name);
    }
  });
  return variables || argumentVariables;
}

/**
 * Determines the variables that are in scope for a given operation given values
 * for some/all of its arguments. Extraneous input variables are filtered from
 * the output, and missing variables are set to default values (if given in the
 * operation's definition).
 */
function getOperationVariables(operation, variables) {
  var operationVariables = {};
  operation.argumentDefinitions.forEach(function (def) {
    var value = def.defaultValue;
    if (variables[def.name] != null) {
      value = variables[def.name];
    }
    operationVariables[def.name] = value;
    if (true) {
      __webpack_require__("./node_modules/fbjs/lib/warning.js")(value != null || def.type[def.type.length - 1] !== '!', 'RelayConcreteVariables: Expected a value for non-nullable variable ' + '`$%s: %s` on operation `%s`, got `%s`. Make sure you supply a ' + 'value for all non-nullable arguments.', def.name, def.type, operation.name, JSON.stringify(value));
    }
  });
  return operationVariables;
}

module.exports = {
  getFragmentVariables: getFragmentVariables,
  getOperationVariables: getOperationVariables
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayConnectionHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var CONNECTION = 'connection';

// Per-instance incrementing index used to generate unique edge IDs
var NEXT_EDGE_INDEX = '__connection_next_edge_index';

/**
 * @public
 *
 * A default runtime handler for connection fields that appends newly fetched
 * edges onto the end of a connection, regardless of the arguments used to fetch
 * those edges.
 */
function update(store, payload) {
  var record = store.get(payload.dataID);
  if (!record) {
    return;
  }

  var _RelayConnectionInter = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      EDGES = _RelayConnectionInter.EDGES,
      END_CURSOR = _RelayConnectionInter.END_CURSOR,
      HAS_NEXT_PAGE = _RelayConnectionInter.HAS_NEXT_PAGE,
      HAS_PREV_PAGE = _RelayConnectionInter.HAS_PREV_PAGE,
      PAGE_INFO = _RelayConnectionInter.PAGE_INFO,
      PAGE_INFO_TYPE = _RelayConnectionInter.PAGE_INFO_TYPE,
      START_CURSOR = _RelayConnectionInter.START_CURSOR;

  var serverConnection = record.getLinkedRecord(payload.fieldKey);
  var serverPageInfo = serverConnection && serverConnection.getLinkedRecord(PAGE_INFO);
  if (!serverConnection) {
    record.setValue(null, payload.handleKey);
    return;
  }
  var clientConnection = record.getLinkedRecord(payload.handleKey);
  var clientPageInfo = clientConnection && clientConnection.getLinkedRecord(PAGE_INFO);
  if (!clientConnection) {
    // Initial fetch with data: copy fields from the server record
    var connection = store.create(__webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(record.getDataID(), payload.handleKey), serverConnection.getType());
    connection.setValue(0, NEXT_EDGE_INDEX);
    connection.copyFieldsFrom(serverConnection);
    var serverEdges = serverConnection.getLinkedRecords(EDGES);
    if (serverEdges) {
      serverEdges = serverEdges.map(function (edge) {
        return buildConnectionEdge(store, connection, edge);
      });
      connection.setLinkedRecords(serverEdges, EDGES);
    }
    record.setLinkedRecord(connection, payload.handleKey);

    clientPageInfo = store.create(__webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(connection.getDataID(), PAGE_INFO), PAGE_INFO_TYPE);
    clientPageInfo.setValue(false, HAS_NEXT_PAGE);
    clientPageInfo.setValue(false, HAS_PREV_PAGE);
    clientPageInfo.setValue(null, END_CURSOR);
    clientPageInfo.setValue(null, START_CURSOR);
    if (serverPageInfo) {
      clientPageInfo.copyFieldsFrom(serverPageInfo);
    }
    connection.setLinkedRecord(clientPageInfo, PAGE_INFO);
  } else {
    var _connection = clientConnection;
    // Subsequent fetches:
    // - updated fields on the connection
    // - merge prev/next edges, de-duplicating by node id
    // - synthesize page info fields
    var _serverEdges = serverConnection.getLinkedRecords(EDGES);
    if (_serverEdges) {
      _serverEdges = _serverEdges.map(function (edge) {
        return buildConnectionEdge(store, _connection, edge);
      });
    }
    var prevEdges = _connection.getLinkedRecords(EDGES);
    var prevPageInfo = _connection.getLinkedRecord(PAGE_INFO);
    _connection.copyFieldsFrom(serverConnection);
    // Reset EDGES and PAGE_INFO fields
    if (prevEdges) {
      _connection.setLinkedRecords(prevEdges, EDGES);
    }
    if (prevPageInfo) {
      _connection.setLinkedRecord(prevPageInfo, PAGE_INFO);
    }

    var nextEdges = [];
    var args = payload.args;
    if (prevEdges && _serverEdges) {
      if (args.after != null) {
        // Forward pagination from the end of the connection: append edges
        if (clientPageInfo && args.after === clientPageInfo.getValue(END_CURSOR)) {
          var nodeIDs = new Set();
          mergeEdges(prevEdges, nextEdges, nodeIDs);
          mergeEdges(_serverEdges, nextEdges, nodeIDs);
        } else {
          __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayConnectionHandler: Unexpected after cursor `%s`, edges must ' + 'be fetched from the end of the list (`%s`).', args.after, clientPageInfo && clientPageInfo.getValue(END_CURSOR));
          return;
        }
      } else if (args.before != null) {
        // Backward pagination from the start of the connection: prepend edges
        if (clientPageInfo && args.before === clientPageInfo.getValue(START_CURSOR)) {
          var _nodeIDs = new Set();
          mergeEdges(_serverEdges, nextEdges, _nodeIDs);
          mergeEdges(prevEdges, nextEdges, _nodeIDs);
        } else {
          __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayConnectionHandler: Unexpected before cursor `%s`, edges must ' + 'be fetched from the beginning of the list (`%s`).', args.before, clientPageInfo && clientPageInfo.getValue(START_CURSOR));
          return;
        }
      } else {
        // The connection was refetched from the beginning/end: replace edges
        nextEdges = _serverEdges;
      }
    } else if (_serverEdges) {
      nextEdges = _serverEdges;
    } else {
      nextEdges = prevEdges;
    }
    // Update edges only if they were updated, the null check is
    // for Flow (prevEdges could be null).
    if (nextEdges != null && nextEdges !== prevEdges) {
      _connection.setLinkedRecords(nextEdges, EDGES);
    }
    // Page info should be updated even if no new edge were returned.
    if (clientPageInfo && serverPageInfo) {
      if (args.before != null || args.after == null && args.last) {
        clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_PREV_PAGE), HAS_PREV_PAGE);
        var startCursor = serverPageInfo.getValue(START_CURSOR);
        if (typeof startCursor === 'string') {
          clientPageInfo.setValue(startCursor, START_CURSOR);
        }
      } else if (args.after != null || args.before == null && args.first) {
        clientPageInfo.setValue(!!serverPageInfo.getValue(HAS_NEXT_PAGE), HAS_NEXT_PAGE);
        var endCursor = serverPageInfo.getValue(END_CURSOR);
        if (typeof endCursor === 'string') {
          clientPageInfo.setValue(endCursor, END_CURSOR);
        }
      }
    }
  }
}

/**
 * @public
 *
 * Given a record and the name of the schema field for which a connection was
 * fetched, returns the linked connection record.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * The `friends` connection record can be accessed with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   // Access fields on the connection:
 *   const edges = friends.getLinkedRecords('edges');
 * }
 * ```
 *
 * TODO: t15733312
 * Currently we haven't run into this case yet, but we need to add a `getConnections`
 * that returns an array of the connections under the same `key` regardless of the variables.
 */
function getConnection(record, key, filters) {
  var handleKey = __webpack_require__("./node_modules/relay-runtime/lib/getRelayHandleKey.js")(CONNECTION, key, null);
  return record.getLinkedRecord(handleKey, filters);
}

/**
 * @public
 *
 * Inserts an edge after the given cursor, or at the end of the list if no
 * cursor is provided.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * An edge can be appended with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   const edge = store.create('<edge-id>', 'FriendsEdge');
 *   RelayConnectionHandler.insertEdgeAfter(friends, edge);
 * }
 * ```
 */
function insertEdgeAfter(record, newEdge, cursor) {
  var _RelayConnectionInter2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      CURSOR = _RelayConnectionInter2.CURSOR,
      EDGES = _RelayConnectionInter2.EDGES;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    record.setLinkedRecords([newEdge], EDGES);
    return;
  }
  var nextEdges = void 0;
  if (cursor == null) {
    nextEdges = edges.concat(newEdge);
  } else {
    nextEdges = [];
    var foundCursor = false;
    for (var ii = 0; ii < edges.length; ii++) {
      var edge = edges[ii];
      nextEdges.push(edge);
      if (edge == null) {
        continue;
      }
      var edgeCursor = edge.getValue(CURSOR);
      if (cursor === edgeCursor) {
        nextEdges.push(newEdge);
        foundCursor = true;
      }
    }
    if (!foundCursor) {
      nextEdges.push(newEdge);
    }
  }
  record.setLinkedRecords(nextEdges, EDGES);
}

/**
 * @public
 *
 * Creates an edge for a connection record, given a node and edge type.
 */
function createEdge(store, record, node, edgeType) {
  var _RelayConnectionInter3 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      NODE = _RelayConnectionInter3.NODE;

  // An index-based client ID could easily conflict (unless it was
  // auto-incrementing, but there is nowhere to the store the id)
  // Instead, construct a client ID based on the connection ID and node ID,
  // which will only conflict if the same node is added to the same connection
  // twice. This is acceptable since the `insertEdge*` functions ignore
  // duplicates.


  var edgeID = __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(record.getDataID(), node.getDataID());
  var edge = store.get(edgeID);
  if (!edge) {
    edge = store.create(edgeID, edgeType);
  }
  edge.setLinkedRecord(node, NODE);
  return edge;
}

/**
 * @public
 *
 * Inserts an edge before the given cursor, or at the beginning of the list if
 * no cursor is provided.
 *
 * Example:
 *
 * Given that data has already been fetched on some user `<id>` on the `friends`
 * field:
 *
 * ```
 * fragment FriendsFragment on User {
 *   friends(first: 10) @connection(key: "FriendsFragment_friends") {
 *    edges {
 *      node {
 *        id
 *        }
 *      }
 *   }
 * }
 * ```
 *
 * An edge can be prepended with:
 *
 * ```
 * store => {
 *   const user = store.get('<id>');
 *   const friends = RelayConnectionHandler.getConnection(user, 'FriendsFragment_friends');
 *   const edge = store.create('<edge-id>', 'FriendsEdge');
 *   RelayConnectionHandler.insertEdgeBefore(friends, edge);
 * }
 * ```
 */
function insertEdgeBefore(record, newEdge, cursor) {
  var _RelayConnectionInter4 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      CURSOR = _RelayConnectionInter4.CURSOR,
      EDGES = _RelayConnectionInter4.EDGES;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    record.setLinkedRecords([newEdge], EDGES);
    return;
  }
  var nextEdges = void 0;
  if (cursor == null) {
    nextEdges = [newEdge].concat(edges);
  } else {
    nextEdges = [];
    var foundCursor = false;
    for (var ii = 0; ii < edges.length; ii++) {
      var edge = edges[ii];
      if (edge != null) {
        var edgeCursor = edge.getValue(CURSOR);
        if (cursor === edgeCursor) {
          nextEdges.push(newEdge);
          foundCursor = true;
        }
      }
      nextEdges.push(edge);
    }
    if (!foundCursor) {
      nextEdges.unshift(newEdge);
    }
  }
  record.setLinkedRecords(nextEdges, EDGES);
}

/**
 * @public
 *
 * Remove any edges whose `node.id` matches the given id.
 */
function deleteNode(record, nodeID) {
  var _RelayConnectionInter5 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      EDGES = _RelayConnectionInter5.EDGES,
      NODE = _RelayConnectionInter5.NODE;

  var edges = record.getLinkedRecords(EDGES);
  if (!edges) {
    return;
  }
  var nextEdges = void 0;
  for (var ii = 0; ii < edges.length; ii++) {
    var edge = edges[ii];
    var node = edge && edge.getLinkedRecord(NODE);
    if (node != null && node.getDataID() === nodeID) {
      if (nextEdges === undefined) {
        nextEdges = edges.slice(0, ii);
      }
    } else if (nextEdges !== undefined) {
      nextEdges.push(edge);
    }
  }
  if (nextEdges !== undefined) {
    record.setLinkedRecords(nextEdges, EDGES);
  }
}

/**
 * @internal
 *
 * Creates a copy of an edge with a unique ID based on per-connection-instance
 * incrementing edge index. This is necessary to avoid collisions between edges,
 * which can occur because (edge) client IDs are assigned deterministically
 * based on the path from the nearest node with an id.
 *
 * Example: if the first N edges of the same connection are refetched, the edges
 * from the second fetch will be assigned the same IDs as the first fetch, even
 * though the nodes they point to may be different (or the same and in different
 * order).
 */
function buildConnectionEdge(store, connection, edge) {
  if (edge == null) {
    return edge;
  }

  var _RelayConnectionInter6 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      EDGES = _RelayConnectionInter6.EDGES;

  var edgeIndex = connection.getValue(NEXT_EDGE_INDEX);
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof edgeIndex === 'number', 'RelayConnectionHandler: Expected %s to be a number, got `%s`.', NEXT_EDGE_INDEX, edgeIndex);
  var edgeID = __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(connection.getDataID(), EDGES, edgeIndex);
  var connectionEdge = store.create(edgeID, edge.getType());
  connectionEdge.copyFieldsFrom(edge);
  connection.setValue(edgeIndex + 1, NEXT_EDGE_INDEX);
  return connectionEdge;
}

/**
 * @internal
 *
 * Adds the source edges to the target edges, skipping edges with
 * duplicate node ids.
 */
function mergeEdges(sourceEdges, targetEdges, nodeIDs) {
  var _RelayConnectionInter7 = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js").get(),
      NODE = _RelayConnectionInter7.NODE;

  for (var ii = 0; ii < sourceEdges.length; ii++) {
    var edge = sourceEdges[ii];
    if (!edge) {
      continue;
    }
    var node = edge.getLinkedRecord(NODE);
    var nodeID = node && node.getValue('id');
    if (nodeID) {
      if (nodeIDs.has(nodeID)) {
        continue;
      }
      nodeIDs.add(nodeID);
    }
    targetEdges.push(edge);
  }
}

module.exports = {
  buildConnectionEdge: buildConnectionEdge,
  createEdge: createEdge,
  deleteNode: deleteNode,
  getConnection: getConnection,
  insertEdgeAfter: insertEdgeAfter,
  insertEdgeBefore: insertEdgeBefore,
  update: update
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayConnectionInterface.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONNECTION_CALLS = {
  after: true,
  before: true,
  find: true,
  first: true,
  last: true,
  surrounds: true
};

var REQUIRED_RANGE_CALLS = {
  find: true,
  first: true,
  last: true
};

var config = {
  CLIENT_MUTATION_ID: 'clientMutationId',
  CURSOR: 'cursor',
  /**
   * Whether `edges` fields are expected to have `source` fields.
   */
  EDGES_HAVE_SOURCE_FIELD: false,
  EDGES: 'edges',
  END_CURSOR: 'endCursor',
  HAS_NEXT_PAGE: 'hasNextPage',
  HAS_PREV_PAGE: 'hasPreviousPage',
  NODE: 'node',
  PAGE_INFO_TYPE: 'PageInfo',
  PAGE_INFO: 'pageInfo',
  START_CURSOR: 'startCursor'
};

/**
 * @internal
 *
 * Defines logic relevant to the informal "Connection" GraphQL interface.
 */
var RelayConnectionInterface = {
  inject: function inject(newConfig) {
    config = newConfig;
  },
  get: function get() {
    return config;
  },


  /**
   * Checks whether a call exists strictly to encode which parts of a connection
   * to fetch. Fields that only differ by connection call values should have the
   * same identity.
   */
  isConnectionCall: function isConnectionCall(call) {
    return CONNECTION_CALLS.hasOwnProperty(call.name);
  },


  /**
   * Checks whether a set of calls on a connection supply enough information to
   * fetch the range fields (i.e. `edges` and `page_info`).
   */
  hasRangeCalls: function hasRangeCalls(calls) {
    return calls.some(function (call) {
      return REQUIRED_RANGE_CALLS.hasOwnProperty(call.name);
    });
  },


  /**
   * Gets a default record representing a connection's `PAGE_INFO`.
   */
  getDefaultPageInfo: function getDefaultPageInfo() {
    var _ref;

    return _ref = {}, (0, _defineProperty3['default'])(_ref, config.END_CURSOR, null), (0, _defineProperty3['default'])(_ref, config.HAS_NEXT_PAGE, false), (0, _defineProperty3['default'])(_ref, config.HAS_PREV_PAGE, false), (0, _defineProperty3['default'])(_ref, config.START_CURSOR, null), _ref;
  }
};

module.exports = RelayConnectionInterface;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayCore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js"),
    getFragment = _require.getFragment,
    getRequest = _require.getRequest;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernOperationSelector.js"),
    createOperationSelector = _require2.createOperationSelector;

var _require3 = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernSelector.js"),
    areEqualSelectors = _require3.areEqualSelectors,
    getDataIDsFromObject = _require3.getDataIDsFromObject,
    getSelector = _require3.getSelector,
    getSelectorList = _require3.getSelectorList,
    getSelectorsFromObject = _require3.getSelectorsFromObject,
    getVariablesFromObject = _require3.getVariablesFromObject;

function createFragmentSpecResolver(context, containerName, fragments, props, callback) {
  if (true) {
    var fragmentNames = Object.keys(fragments);
    fragmentNames.forEach(function (fragmentName) {
      var propValue = props[fragmentName];
      __webpack_require__("./node_modules/fbjs/lib/warning.js")(propValue !== undefined, 'createFragmentSpecResolver: Expected prop `%s` to be supplied to `%s`, but ' + 'got `undefined`. Pass an explicit `null` if this is intentional.', fragmentName, containerName);
    });
  }

  return new (__webpack_require__("./node_modules/relay-runtime/lib/RelayModernFragmentSpecResolver.js"))(context, fragments, props, callback);
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  createFragmentSpecResolver: createFragmentSpecResolver,
  createOperationSelector: createOperationSelector,
  getDataIDsFromObject: getDataIDsFromObject,
  getFragment: getFragment,
  getRequest: getRequest,
  getSelector: getSelector,
  getSelectorList: getSelectorList,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromObject: getVariablesFromObject
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayDataLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js"),
    EXISTENT = _require.EXISTENT,
    UNKNOWN = _require.UNKNOWN;

var CONDITION = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").CONDITION,
    INLINE_FRAGMENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_FIELD;

var getStorageKey = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getStorageKey,
    getArgumentValues = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getArgumentValues;

/**
 * Synchronously check whether the records required to fulfill the
 * given `selector` are present in `source`.
 *
 * If a field is missing, it uses the provided handlers to attempt to substitute
 * data. The `target` will store all records that are modified because of a
 * successful substitution.
 *
 * If all records are present, returns `true`, otherwise `false`.
 */


function check(source, target, selector, handlers) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var loader = new RelayDataLoader(source, target, variables, handlers);
  return loader.check(node, dataID);
}

/**
 * @private
 */

var RelayDataLoader = function () {
  function RelayDataLoader(source, target, variables, handlers) {
    (0, _classCallCheck3['default'])(this, RelayDataLoader);

    this._source = source;
    this._variables = variables;
    this._recordWasMissing = false;
    this._handlers = handlers;
    this._mutator = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceMutator.js"))(source, target);
  }

  RelayDataLoader.prototype.check = function check(node, dataID) {
    this._traverse(node, dataID);
    return !this._recordWasMissing;
  };

  RelayDataLoader.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._variables.hasOwnProperty(name), 'RelayAsyncLoader(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayDataLoader.prototype._handleMissing = function _handleMissing() {
    this._recordWasMissing = true;
  };

  RelayDataLoader.prototype._getDataForHandlers = function _getDataForHandlers(field, dataID) {
    return {
      args: field.args ? getArgumentValues(field.args, this._variables) : {},
      // Getting a snapshot of the record state is potentially expensive since
      // we will need to merge the sink and source records. Since we do not create
      // any new records in this process, it is probably reasonable to provide
      // handlers with a copy of the source record.
      // The only thing that the provided record will not contain is fields
      // added by previous handlers.
      record: this._source.get(dataID)
    };
  };

  RelayDataLoader.prototype._handleMissingScalarField = function _handleMissingScalarField(field, dataID) {
    var _getDataForHandlers2 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers2.args,
        record = _getDataForHandlers2.record;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var handler = _step.value;

        if (handler.kind === 'scalar') {
          var newValue = handler.handle(field, record, args);
          if (newValue !== undefined) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._handleMissingLinkField = function _handleMissingLinkField(field, dataID) {
    var _getDataForHandlers3 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers3.args,
        record = _getDataForHandlers3.record;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this._handlers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var handler = _step2.value;

        if (handler.kind === 'linked') {
          var newValue = handler.handle(field, record, args);
          if (newValue != null && this._mutator.getStatus(newValue) === EXISTENT) {
            return newValue;
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._handleMissingPluralLinkField = function _handleMissingPluralLinkField(field, dataID) {
    var _this = this;

    var _getDataForHandlers4 = this._getDataForHandlers(field, dataID),
        args = _getDataForHandlers4.args,
        record = _getDataForHandlers4.record;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this._handlers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var handler = _step3.value;

        if (handler.kind === 'pluralLinked') {
          var newValue = handler.handle(field, record, args);
          if (newValue != null) {
            return newValue.filter(function (linkedID) {
              return linkedID != null && _this._mutator.getStatus(linkedID) === EXISTENT;
            });
          }
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
          _iterator3['return']();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    this._handleMissing();
  };

  RelayDataLoader.prototype._traverse = function _traverse(node, dataID) {
    var status = this._mutator.getStatus(dataID);
    if (status === UNKNOWN) {
      this._handleMissing();
    }
    if (status === EXISTENT) {
      this._traverseSelections(node.selections, dataID);
    }
  };

  RelayDataLoader.prototype._traverseSelections = function _traverseSelections(selections, dataID) {
    var _this2 = this;

    selections.every(function (selection) {
      switch (selection.kind) {
        case SCALAR_FIELD:
          _this2._prepareScalar(selection, dataID);
          break;
        case LINKED_FIELD:
          if (selection.plural) {
            _this2._preparePluralLink(selection, dataID);
          } else {
            _this2._prepareLink(selection, dataID);
          }
          break;
        case CONDITION:
          var conditionValue = _this2._getVariableValue(selection.condition);
          if (conditionValue === selection.passingValue) {
            _this2._traverseSelections(selection.selections, dataID);
          }
          break;
        case INLINE_FRAGMENT:
          var typeName = _this2._mutator.getType(dataID);
          if (typeName != null && typeName === selection.type) {
            _this2._traverseSelections(selection.selections, dataID);
          }
          break;
        case LINKED_HANDLE:
          // Handles have no selections themselves; traverse the original field
          // where the handle was set-up instead.
          var handleField = __webpack_require__("./node_modules/relay-runtime/lib/cloneRelayHandleSourceField.js")(selection, selections, _this2._variables);
          if (handleField.plural) {
            _this2._preparePluralLink(handleField, dataID);
          } else {
            _this2._prepareLink(handleField, dataID);
          }
          break;
        default:
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(selection.kind === SCALAR_FIELD, 'RelayAsyncLoader(): Unexpected ast kind `%s`.', selection.kind);
      }
      return !_this2._done;
    });
  };

  RelayDataLoader.prototype._prepareScalar = function _prepareScalar(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);
    var fieldValue = this._mutator.getValue(dataID, storageKey);
    if (fieldValue === undefined) {
      fieldValue = this._handleMissingScalarField(field, dataID);
      if (fieldValue !== undefined) {
        this._mutator.setValue(dataID, storageKey, fieldValue);
      }
    }
  };

  RelayDataLoader.prototype._prepareLink = function _prepareLink(field, dataID) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = this._mutator.getLinkedRecordID(dataID, storageKey);

    if (linkedID === undefined) {
      linkedID = this._handleMissingLinkField(field, dataID);
      if (linkedID != null) {
        this._mutator.setLinkedRecordID(dataID, storageKey, linkedID);
      }
    }
    if (linkedID != null) {
      this._traverse(field, linkedID);
    }
  };

  RelayDataLoader.prototype._preparePluralLink = function _preparePluralLink(field, dataID) {
    var _this3 = this;

    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = this._mutator.getLinkedRecordIDs(dataID, storageKey);

    if (linkedIDs === undefined) {
      linkedIDs = this._handleMissingPluralLinkField(field, dataID);
      if (linkedIDs != null) {
        this._mutator.setLinkedRecordIDs(dataID, storageKey, linkedIDs);
      }
    }
    if (linkedIDs) {
      linkedIDs.forEach(function (linkedID) {
        if (linkedID != null) {
          _this3._traverse(field, linkedID);
        }
      });
    }
  };

  return RelayDataLoader;
}();

module.exports = {
  check: check
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var MutationTypes = Object.freeze({
  RANGE_ADD: 'RANGE_ADD',
  RANGE_DELETE: 'RANGE_DELETE',
  NODE_DELETE: 'NODE_DELETE',
  FIELDS_CHANGE: 'FIELDS_CHANGE',
  REQUIRED_CHILDREN: 'REQUIRED_CHILDREN'
});


var RangeOperations = Object.freeze({
  APPEND: 'append',
  IGNORE: 'ignore',
  PREPEND: 'prepend',
  REFETCH: 'refetch', // legacy only
  REMOVE: 'remove' // legacy only
});

// Unused in Relay Modern


// Unused in Relay Modern


function convert(configs, request, optimisticUpdater, updater) {
  var configOptimisticUpdates = optimisticUpdater ? [optimisticUpdater] : [];
  var configUpdates = updater ? [updater] : [];
  configs.forEach(function (config) {
    switch (config.type) {
      case 'NODE_DELETE':
        var nodeDeleteResult = nodeDelete(config, request);
        if (nodeDeleteResult) {
          configOptimisticUpdates.push(nodeDeleteResult);
          configUpdates.push(nodeDeleteResult);
        }
        break;
      case 'RANGE_ADD':
        var rangeAddResult = rangeAdd(config, request);
        if (rangeAddResult) {
          configOptimisticUpdates.push(rangeAddResult);
          configUpdates.push(rangeAddResult);
        }
        break;
      case 'RANGE_DELETE':
        var rangeDeleteResult = rangeDelete(config, request);
        if (rangeDeleteResult) {
          configOptimisticUpdates.push(rangeDeleteResult);
          configUpdates.push(rangeDeleteResult);
        }
        break;
    }
  });
  return {
    optimisticUpdater: function optimisticUpdater(store, data) {
      configOptimisticUpdates.forEach(function (eachOptimisticUpdater) {
        eachOptimisticUpdater(store, data);
      });
    },
    updater: function updater(store, data) {
      configUpdates.forEach(function (eachUpdater) {
        eachUpdater(store, data);
      });
    }
  };
}

function nodeDelete(config, request) {
  var deletedIDFieldName = config.deletedIDFieldName;

  var rootField = getRootField(request);
  if (!rootField) {
    return null;
  }
  return function (store, data) {
    var payload = store.getRootField(rootField);
    if (!payload) {
      return;
    }
    var deleteID = payload.getValue(deletedIDFieldName);
    var deleteIDs = Array.isArray(deleteID) ? deleteID : [deleteID];
    deleteIDs.forEach(function (id) {
      if (id && typeof id === 'string') {
        store['delete'](id);
      }
    });
  };
}

function rangeAdd(config, request) {
  var parentID = config.parentID,
      connectionInfo = config.connectionInfo,
      edgeName = config.edgeName;

  if (!parentID) {
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_ADD ' + 'to work you must include a parentID');
    return null;
  }
  var rootField = getRootField(request);
  if (!connectionInfo || !rootField) {
    return null;
  }
  return function (store, data) {
    var parent = store.get(parentID);
    if (!parent) {
      return;
    }
    var payload = store.getRootField(rootField);
    if (!payload) {
      return;
    }
    var serverEdge = payload.getLinkedRecord(edgeName);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = connectionInfo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var info = _step.value;

        if (!serverEdge) {
          continue;
        }
        var connection = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").getConnection(parent, info.key, info.filters);
        if (!connection) {
          continue;
        }
        var clientEdge = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").buildConnectionEdge(store, connection, serverEdge);
        if (!clientEdge) {
          continue;
        }
        switch (info.rangeBehavior) {
          case 'append':
            __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").insertEdgeAfter(connection, clientEdge);
            break;
          case 'ignore':
            // Do nothing
            break;
          case 'prepend':
            __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").insertEdgeBefore(connection, clientEdge);
            break;
          default:
            __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` ' + 'will not work as expected in RelayModern, supported range ' + "behaviors are 'append', 'prepend', and 'ignore'.", info.rangeBehavior);
            break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };
}

function rangeDelete(config, request) {
  var parentID = config.parentID,
      connectionKeys = config.connectionKeys,
      pathToConnection = config.pathToConnection,
      deletedIDFieldName = config.deletedIDFieldName;

  if (!parentID) {
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE ' + 'to work you must include a parentID');
    return null;
  }
  var rootField = getRootField(request);
  if (!rootField) {
    return null;
  }
  return function (store, data) {
    if (!data) {
      return;
    }
    var deleteIDs = [];
    var deletedIDField = data[rootField];
    if (deletedIDField && Array.isArray(deletedIDFieldName)) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = deletedIDFieldName[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var eachField = _step2.value;

          if (deletedIDField && typeof deletedIDField === 'object') {
            deletedIDField = deletedIDField[eachField];
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
            _iterator2['return']();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (idObject) {
          if (idObject && idObject.id && typeof idObject === 'object' && typeof idObject.id === 'string') {
            deleteIDs.push(idObject.id);
          }
        });
      } else if (deletedIDField && deletedIDField.id && typeof deletedIDField.id === 'string') {
        deleteIDs.push(deletedIDField.id);
      }
    } else if (deletedIDField && typeof deletedIDFieldName === 'string' && typeof deletedIDField === 'object') {
      deletedIDField = deletedIDField[deletedIDFieldName];
      if (typeof deletedIDField === 'string') {
        deleteIDs.push(deletedIDField);
      } else if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (id) {
          if (typeof id === 'string') {
            deleteIDs.push(id);
          }
        });
      }
    }
    deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs);
  };
}

function deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs) {
  __webpack_require__("./node_modules/fbjs/lib/warning.js")(connectionKeys, 'RelayDeclarativeMutationConfig: RANGE_DELETE must provide a ' + 'connectionKeys');
  var parent = store.get(parentID);
  if (!parent) {
    return;
  }
  if (pathToConnection.length < 2) {
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection must include at least parent and connection');
    return;
  }
  var recordProxy = parent;
  for (var i = 1; i < pathToConnection.length - 1; i++) {
    if (recordProxy) {
      recordProxy = recordProxy.getLinkedRecord(pathToConnection[i]);
    }
  }
  // Should never enter loop except edge cases
  if (!connectionKeys || !recordProxy) {
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection is incorrect. Unable to find connection with ' + 'parentID: %s and path: %s', parentID, pathToConnection.toString());
    return;
  }
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop = function _loop() {
      var key = _step3.value;

      var connection = __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").getConnection(recordProxy, key.key, key.filters);
      if (connection) {
        deleteIDs.forEach(function (deleteID) {
          __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js").deleteNode(connection, deleteID);
        });
      }
    };

    for (var _iterator3 = connectionKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function getRootField(request) {
  if (request.fragment.selections && request.fragment.selections.length > 0 && request.fragment.selections[0].kind === 'LinkedField') {
    return request.fragment.selections[0].name;
  }
  return null;
}

module.exports = {
  MutationTypes: MutationTypes,
  RangeOperations: RangeOperations,

  convert: convert
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayDefaultHandleKey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



module.exports = {
  DEFAULT_HANDLE_KEY: ''
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayDefaultHandlerProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function RelayDefaultHandlerProvider(handle) {
  switch (handle) {
    case 'connection':
      return __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js");
    case 'viewer':
      return __webpack_require__("./node_modules/relay-runtime/lib/RelayViewerHandler.js");
  }
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayDefaultHandlerProvider: No handler provided for `%s`.', handle);
}

module.exports = RelayDefaultHandlerProvider;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _toConsumableArray3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * @internal
 *
 * Factory methods for constructing errors in Relay.
 */
var RelayError = {
  create: function create(name, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return createError('mustfix', name, format, args);
  },
  createWarning: function createWarning(name, format) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return createError('warn', name, format, args);
  }
};

/**
 * @private
 */
function createError(type, name, format, args) {
  var error = new Error(__webpack_require__("./node_modules/fbjs/lib/sprintf.js").apply(undefined, [format].concat((0, _toConsumableArray3['default'])(args))));
  error.name = name;
  error.type = type;
  error.framesToPop = 2;
  return error;
}

module.exports = RelayError;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var EXISTENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js").EXISTENT,
    NONEXISTENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js").NONEXISTENT,
    UNKNOWN = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js").UNKNOWN;

/**
 * An implementation of the `MutableRecordSource` interface (defined in
 * `RelayStoreTypes`) that holds all records in memory.
 */


var RelayInMemoryRecordSource = function () {
  function RelayInMemoryRecordSource(records) {
    (0, _classCallCheck3['default'])(this, RelayInMemoryRecordSource);

    this._records = records || {};
  }

  RelayInMemoryRecordSource.prototype.clear = function clear() {
    this._records = {};
  };

  RelayInMemoryRecordSource.prototype['delete'] = function _delete(dataID) {
    this._records[dataID] = null;
  };

  RelayInMemoryRecordSource.prototype.get = function get(dataID) {
    return this._records[dataID];
  };

  RelayInMemoryRecordSource.prototype.getRecordIDs = function getRecordIDs() {
    return Object.keys(this._records);
  };

  RelayInMemoryRecordSource.prototype.getStatus = function getStatus(dataID) {
    if (!this._records.hasOwnProperty(dataID)) {
      return UNKNOWN;
    }
    return this._records[dataID] == null ? NONEXISTENT : EXISTENT;
  };

  RelayInMemoryRecordSource.prototype.has = function has(dataID) {
    return this._records.hasOwnProperty(dataID);
  };

  RelayInMemoryRecordSource.prototype.load = function load(dataID, callback) {
    callback(null, this.get(dataID));
  };

  RelayInMemoryRecordSource.prototype.remove = function remove(dataID) {
    delete this._records[dataID];
  };

  RelayInMemoryRecordSource.prototype.set = function set(dataID, record) {
    this._records[dataID] = record;
  };

  RelayInMemoryRecordSource.prototype.size = function size() {
    return Object.keys(this._records).length;
  };

  RelayInMemoryRecordSource.prototype.toJSON = function toJSON() {
    return this._records;
  };

  return RelayInMemoryRecordSource;
}();

module.exports = RelayInMemoryRecordSource;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayMarkSweepStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    UNPUBLISH_RECORD_SENTINEL = _require.UNPUBLISH_RECORD_SENTINEL;

/**
 * @public
 *
 * An implementation of the `Store` interface defined in `RelayStoreTypes`.
 *
 * Note that a Store takes ownership of all records provided to it: other
 * objects may continue to hold a reference to such records but may not mutate
 * them. The static Relay core is architected to avoid mutating records that may have been
 * passed to a store: operations that mutate records will either create fresh
 * records or clone existing records and modify the clones. Record immutability
 * is also enforced in development mode by freezing all records passed to a store.
 */
var RelayMarkSweepStore = function () {
  function RelayMarkSweepStore(source) {
    (0, _classCallCheck3['default'])(this, RelayMarkSweepStore);

    // Prevent mutation of a record from outside the store.
    if (true) {
      var storeIDs = source.getRecordIDs();
      for (var ii = 0; ii < storeIDs.length; ii++) {
        var record = source.get(storeIDs[ii]);
        if (record) {
          __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").freeze(record);
        }
      }
    }
    this._gcEnabled = true;
    this._hasScheduledGC = false;
    this._index = 0;
    this._recordSource = source;
    this._roots = new Map();
    this._subscriptions = new Set();
    this._updatedRecordIDs = {};
  }

  RelayMarkSweepStore.prototype.getSource = function getSource() {
    return this._recordSource;
  };

  RelayMarkSweepStore.prototype.check = function check(selector) {
    return __webpack_require__("./node_modules/relay-runtime/lib/RelayDataLoader.js").check(this._recordSource, this._recordSource, selector, []);
  };

  RelayMarkSweepStore.prototype.retain = function retain(selector) {
    var _this = this;

    var index = this._index++;
    var dispose = function dispose() {
      _this._roots['delete'](index);
      _this._scheduleGC();
    };
    this._roots.set(index, selector);
    return { dispose: dispose };
  };

  RelayMarkSweepStore.prototype.lookup = function lookup(selector) {
    var snapshot = __webpack_require__("./node_modules/relay-runtime/lib/RelayReader.js").read(this._recordSource, selector);
    if (true) {
      __webpack_require__("./node_modules/relay-runtime/lib/deepFreeze.js")(snapshot);
    }
    return snapshot;
  };

  RelayMarkSweepStore.prototype.notify = function notify() {
    var _this2 = this;

    this._subscriptions.forEach(function (subscription) {
      _this2._updateSubscription(subscription);
    });
    this._updatedRecordIDs = {};
  };

  RelayMarkSweepStore.prototype.publish = function publish(source) {
    updateTargetFromSource(this._recordSource, source, this._updatedRecordIDs);
  };

  RelayMarkSweepStore.prototype.subscribe = function subscribe(snapshot, callback) {
    var _this3 = this;

    var subscription = { callback: callback, snapshot: snapshot };
    var dispose = function dispose() {
      _this3._subscriptions['delete'](subscription);
    };
    this._subscriptions.add(subscription);
    return { dispose: dispose };
  };

  // Internal API


  RelayMarkSweepStore.prototype.__getUpdatedRecordIDs = function __getUpdatedRecordIDs() {
    return this._updatedRecordIDs;
  };

  RelayMarkSweepStore.prototype._updateSubscription = function _updateSubscription(subscription) {
    var callback = subscription.callback,
        snapshot = subscription.snapshot;

    if (!__webpack_require__("./node_modules/relay-runtime/lib/hasOverlappingIDs.js")(snapshot, this._updatedRecordIDs)) {
      return;
    }

    var _RelayReader$read = __webpack_require__("./node_modules/relay-runtime/lib/RelayReader.js").read(this._recordSource, snapshot),
        data = _RelayReader$read.data,
        seenRecords = _RelayReader$read.seenRecords;

    var nextData = __webpack_require__("./node_modules/relay-runtime/lib/recycleNodesInto.js")(snapshot.data, data);
    var nextSnapshot = (0, _extends3['default'])({}, snapshot, {
      data: nextData,
      seenRecords: seenRecords
    });
    if (true) {
      __webpack_require__("./node_modules/relay-runtime/lib/deepFreeze.js")(nextSnapshot);
    }
    subscription.snapshot = nextSnapshot;
    if (nextSnapshot.data !== snapshot.data) {
      callback(nextSnapshot);
    }
  };

  RelayMarkSweepStore.prototype._scheduleGC = function _scheduleGC() {
    var _this4 = this;

    if (!this._gcEnabled || this._hasScheduledGC) {
      return;
    }
    this._hasScheduledGC = true;
    __webpack_require__("./node_modules/fbjs/lib/resolveImmediate.js")(function () {
      _this4._gc();
      _this4._hasScheduledGC = false;
    });
  };

  RelayMarkSweepStore.prototype._gc = function _gc() {
    var _this5 = this;

    var references = new Set();
    // Mark all records that are traversable from a root
    this._roots.forEach(function (selector) {
      __webpack_require__("./node_modules/relay-runtime/lib/RelayReferenceMarker.js").mark(_this5._recordSource, selector, references);
    });
    // Short-circuit if *nothing* is referenced
    if (!references.size) {
      this._recordSource.clear();
      return;
    }
    // Evict any unreferenced nodes
    var storeIDs = this._recordSource.getRecordIDs();
    for (var ii = 0; ii < storeIDs.length; ii++) {
      var dataID = storeIDs[ii];
      if (!references.has(dataID)) {
        this._recordSource.remove(dataID);
      }
    }
  };

  // Internal hooks to enable/disable garbage collection for experimentation


  RelayMarkSweepStore.prototype.__enableGC = function __enableGC() {
    this._gcEnabled = true;
  };

  RelayMarkSweepStore.prototype.__disableGC = function __disableGC() {
    this._gcEnabled = false;
  };

  return RelayMarkSweepStore;
}();

/**
 * Updates the target with information from source, also updating a mapping of
 * which records in the target were changed as a result.
 */


function updateTargetFromSource(target, source, updatedRecordIDs) {
  var dataIDs = source.getRecordIDs();
  for (var ii = 0; ii < dataIDs.length; ii++) {
    var dataID = dataIDs[ii];
    var sourceRecord = source.get(dataID);
    var targetRecord = target.get(dataID);
    // Prevent mutation of a record from outside the store.
    if (true) {
      if (sourceRecord) {
        __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").freeze(sourceRecord);
      }
    }
    if (sourceRecord === UNPUBLISH_RECORD_SENTINEL) {
      // Unpublish a record
      target.remove(dataID);
      updatedRecordIDs[dataID] = true;
    } else if (sourceRecord && targetRecord) {
      var nextRecord = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").update(targetRecord, sourceRecord);
      if (nextRecord !== targetRecord) {
        // Prevent mutation of a record from outside the store.
        if (true) {
          __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").freeze(nextRecord);
        }
        updatedRecordIDs[dataID] = true;
        target.set(dataID, nextRecord);
      }
    } else if (sourceRecord === null) {
      target['delete'](dataID);
      if (targetRecord !== null) {
        updatedRecordIDs[dataID] = true;
      }
    } else if (sourceRecord) {
      target.set(dataID, sourceRecord);
      updatedRecordIDs[dataID] = true;
    } // don't add explicit undefined
  }
}

__webpack_require__("./node_modules/relay-runtime/lib/RelayProfiler.js").instrumentMethods(RelayMarkSweepStore.prototype, {
  lookup: 'RelayMarkSweepStore.prototype.lookup',
  notify: 'RelayMarkSweepStore.prototype.notify',
  publish: 'RelayMarkSweepStore.prototype.publish',
  retain: 'RelayMarkSweepStore.prototype.retain',
  subscribe: 'RelayMarkSweepStore.prototype.subscribe'
});

module.exports = RelayMarkSweepStore;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernEnvironment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteVariables.js"),
    getOperationVariables = _require.getOperationVariables;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernOperationSelector.js"),
    createOperationSelector = _require2.createOperationSelector;

var RelayModernEnvironment = function () {
  function RelayModernEnvironment(config) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, RelayModernEnvironment);
    this._deferrableSelections = new Set();

    this.configName = config.configName;
    var handlerProvider = config.handlerProvider ? config.handlerProvider : __webpack_require__("./node_modules/relay-runtime/lib/RelayDefaultHandlerProvider.js");
    this._network = config.network;
    this._publishQueue = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayPublishQueue.js"))(config.store, handlerProvider);
    this._store = config.store;
    this.unstable_internal = __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js");

    this.__setNet = function (newNet) {
      return _this._network = newNet;
    };

    // Register this Relay Environment with Relay DevTools if it exists.
    // Note: this must always be the last step in the constructor.
    var _global = typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : undefined;
    var devToolsHook = _global && _global.__RELAY_DEVTOOLS_HOOK__;
    if (devToolsHook) {
      devToolsHook.registerEnvironment(this);
    }
  }

  RelayModernEnvironment.prototype.getStore = function getStore() {
    return this._store;
  };

  RelayModernEnvironment.prototype.getNetwork = function getNetwork() {
    return this._network;
  };

  RelayModernEnvironment.prototype.applyUpdate = function applyUpdate(optimisticUpdate) {
    var _this2 = this;

    var dispose = function dispose() {
      _this2._publishQueue.revertUpdate(optimisticUpdate);
      _this2._publishQueue.run();
    };
    this._publishQueue.applyUpdate(optimisticUpdate);
    this._publishQueue.run();
    return { dispose: dispose };
  };

  RelayModernEnvironment.prototype.revertUpdate = function revertUpdate(update) {
    this._publishQueue.revertUpdate(update);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.replaceUpdate = function replaceUpdate(update, newUpdate) {
    this._publishQueue.revertUpdate(update);
    this._publishQueue.applyUpdate(newUpdate);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.applyMutation = function applyMutation(_ref) {
    var operation = _ref.operation,
        optimisticResponse = _ref.optimisticResponse,
        optimisticUpdater = _ref.optimisticUpdater;

    return this.applyUpdate({
      operation: operation,
      selectorStoreUpdater: optimisticUpdater,
      response: optimisticResponse || null
    });
  };

  RelayModernEnvironment.prototype.check = function check(readSelector) {
    return this._store.check(readSelector);
  };

  RelayModernEnvironment.prototype.commitPayload = function commitPayload(operationSelector, payload) {
    // Do not handle stripped nulls when commiting a payload
    var relayPayload = __webpack_require__("./node_modules/relay-runtime/lib/normalizeRelayPayload.js")(operationSelector.root, payload);
    this._publishQueue.commitPayload(operationSelector, relayPayload);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.commitUpdate = function commitUpdate(updater) {
    this._publishQueue.commitUpdate(updater);
    this._publishQueue.run();
  };

  RelayModernEnvironment.prototype.lookup = function lookup(readSelector) {
    return this._store.lookup(readSelector);
  };

  RelayModernEnvironment.prototype.subscribe = function subscribe(snapshot, callback) {
    return this._store.subscribe(snapshot, callback);
  };

  RelayModernEnvironment.prototype.retain = function retain(selector) {
    return this._store.retain(selector);
  };

  RelayModernEnvironment.prototype.isSelectorLoading = function isSelectorLoading(selector) {
    var key = __webpack_require__("./node_modules/relay-runtime/lib/deferrableFragmentKey.js")(selector.dataID, selector.node.name, selector.variables);
    return this._deferrableSelections.has(key);
  };
  /**
   * Returns an Observable of ExecutePayload resulting from executing the
   * provided Query or Subscription operation, each result of which is then
   * normalized and committed to the publish queue.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to: environment.execute({...}).subscribe({...}).
   */


  RelayModernEnvironment.prototype.execute = function execute(_ref2) {
    var _this3 = this;

    var operation = _ref2.operation,
        cacheConfig = _ref2.cacheConfig,
        updater = _ref2.updater;

    var optimisticResponse = void 0;
    return this._network.execute(operation.node, operation.variables, cacheConfig || {})['do']({
      next: function next(executePayload) {
        var responsePayload = __webpack_require__("./node_modules/relay-runtime/lib/normalizePayload.js")(executePayload);
        var source = responsePayload.source,
            fieldPayloads = responsePayload.fieldPayloads,
            deferrableSelections = responsePayload.deferrableSelections;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (deferrableSelections || new Set())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var selectionKey = _step.value;

            _this3._deferrableSelections.add(selectionKey);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (executePayload.isOptimistic) {
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(optimisticResponse == null, 'environment.execute: only support one optimistic respnose per ' + 'execute.');
          optimisticResponse = {
            source: source,
            fieldPayloads: fieldPayloads
          };
          _this3._publishQueue.applyUpdate(optimisticResponse);
          _this3._publishQueue.run();
        } else {
          if (optimisticResponse) {
            _this3._publishQueue.revertUpdate(optimisticResponse);
            optimisticResponse = undefined;
          }
          var writeSelector = createOperationSelector(operation.node, executePayload.variables, executePayload.operation);
          if (executePayload.operation.kind === 'DeferrableOperation') {
            var fragmentKey = __webpack_require__("./node_modules/relay-runtime/lib/deferrableFragmentKey.js")(executePayload.variables[executePayload.operation.rootFieldVariable], executePayload.operation.fragmentName, getOperationVariables(executePayload.operation, executePayload.variables));
            _this3._deferrableSelections['delete'](fragmentKey);
          }
          _this3._publishQueue.commitPayload(writeSelector, responsePayload, updater);
          _this3._publishQueue.run();
        }
      }
    })['finally'](function () {
      if (optimisticResponse) {
        _this3._publishQueue.revertUpdate(optimisticResponse);
        optimisticResponse = undefined;
        _this3._publishQueue.run();
      }
    });
  };

  /**
   * Returns an Observable of ExecutePayload resulting from executing the
   * provided Mutation operation, the result of which is then normalized and
   * committed to the publish queue along with an optional optimistic response
   * or updater.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to:
   * environment.executeMutation({...}).subscribe({...}).
   */


  RelayModernEnvironment.prototype.executeMutation = function executeMutation(_ref3) {
    var _this4 = this;

    var operation = _ref3.operation,
        optimisticResponse = _ref3.optimisticResponse,
        optimisticUpdater = _ref3.optimisticUpdater,
        updater = _ref3.updater,
        uploadables = _ref3.uploadables;

    var optimisticUpdate = void 0;
    if (optimisticResponse || optimisticUpdater) {
      optimisticUpdate = {
        operation: operation,
        selectorStoreUpdater: optimisticUpdater,
        response: optimisticResponse || null
      };
    }

    return this._network.execute(operation.node, operation.variables, { force: true }, uploadables)['do']({
      start: function start() {
        if (optimisticUpdate) {
          _this4._publishQueue.applyUpdate(optimisticUpdate);
          _this4._publishQueue.run();
        }
      },
      next: function next(payload) {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
        }
        _this4._publishQueue.commitPayload(operation, __webpack_require__("./node_modules/relay-runtime/lib/normalizePayload.js")(payload), updater);
        _this4._publishQueue.run();
      },
      error: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }

        error.toString = function () {
          return _error.toString();
        };

        return error;
      }(function (error) {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
          _this4._publishQueue.run();
        }
      }),
      unsubscribe: function unsubscribe() {
        if (optimisticUpdate) {
          _this4._publishQueue.revertUpdate(optimisticUpdate);
          optimisticUpdate = undefined;
          _this4._publishQueue.run();
        }
      }
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.sendQuery = function sendQuery(_ref4) {
    var cacheConfig = _ref4.cacheConfig,
        onCompleted = _ref4.onCompleted,
        onError = _ref4.onError,
        onNext = _ref4.onNext,
        operation = _ref4.operation;

    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'environment.sendQuery() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({ operation: operation, cacheConfig: cacheConfig }).subscribeLegacy({
      onNext: onNext,
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.streamQuery = function streamQuery(_ref5) {
    var cacheConfig = _ref5.cacheConfig,
        onCompleted = _ref5.onCompleted,
        onError = _ref5.onError,
        onNext = _ref5.onNext,
        operation = _ref5.operation;

    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'environment.streamQuery() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({ operation: operation, cacheConfig: cacheConfig }).subscribeLegacy({
      onNext: onNext,
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.executeMutation().subscribe()
   */


  RelayModernEnvironment.prototype.sendMutation = function sendMutation(_ref6) {
    var onCompleted = _ref6.onCompleted,
        onError = _ref6.onError,
        operation = _ref6.operation,
        optimisticResponse = _ref6.optimisticResponse,
        optimisticUpdater = _ref6.optimisticUpdater,
        updater = _ref6.updater,
        uploadables = _ref6.uploadables;

    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'environment.sendMutation() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.executeMutation().');
    return this.executeMutation({
      operation: operation,
      optimisticResponse: optimisticResponse,
      optimisticUpdater: optimisticUpdater,
      updater: updater,
      uploadables: uploadables
    }).subscribeLegacy({
      // NOTE: sendMutation has a non-standard use of onCompleted() by passing
      // it a value. When switching to use executeMutation(), the next()
      // Observer should be used to preserve behavior.
      onNext: function onNext(payload) {
        onCompleted && onCompleted(payload.response.errors);
      },
      onError: onError,
      onCompleted: onCompleted
    });
  };

  /**
   * @deprecated Use Environment.execute().subscribe()
   */


  RelayModernEnvironment.prototype.sendSubscription = function sendSubscription(_ref7) {
    var onCompleted = _ref7.onCompleted,
        onNext = _ref7.onNext,
        onError = _ref7.onError,
        operation = _ref7.operation,
        updater = _ref7.updater;

    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'environment.sendSubscription() is deprecated. Update to the latest ' + 'version of react-relay, and use environment.execute().');
    return this.execute({
      operation: operation,
      updater: updater,
      cacheConfig: { force: true }
    }).subscribeLegacy({ onNext: onNext, onError: onError, onCompleted: onCompleted });
  };

  return RelayModernEnvironment;
}();

// Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
// realm-specific instanceof check, and to aid in module tree-shaking to
// avoid requiring all of RelayRuntime just to detect its environment.


RelayModernEnvironment.prototype['@@RelayModernEnvironment'] = true;

module.exports = RelayModernEnvironment;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernFragmentSpecResolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernSelector.js"),
    areEqualSelectors = _require.areEqualSelectors,
    getSelectorsFromObject = _require.getSelectorsFromObject;

/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 *
 * This utility is implemented as an imperative, stateful API for performance
 * reasons: reusing previous resolvers, callback functions, and subscriptions
 * all helps to reduce object allocation and thereby decrease GC time.
 *
 * The `resolve()` function is also lazy and memoized: changes in the store mark
 * the resolver as stale and notify the caller, and the actual results are
 * recomputed the first time `resolve()` is called.
 */
var RelayModernFragmentSpecResolver = function () {
  function RelayModernFragmentSpecResolver(context, fragments, props, callback) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, RelayModernFragmentSpecResolver);

    this._onChange = function () {
      _this._stale = true;

      if (typeof _this._callback === 'function') {
        _this._callback();
      }
    };

    this._callback = callback;
    this._context = context;
    this._data = {};
    this._fragments = fragments;
    this._props = props;
    this._resolvers = {};
    this._stale = false;

    this.setProps(props);
  }

  RelayModernFragmentSpecResolver.prototype.dispose = function dispose() {
    for (var _key in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key)) {
        disposeCallback(this._resolvers[_key]);
      }
    }
  };

  RelayModernFragmentSpecResolver.prototype.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the object multiple times, which could occur if data for
      // multiple keys changes in the same event loop.
      var prevData = this._data;
      var nextData = void 0;
      for (var _key2 in this._resolvers) {
        if (this._resolvers.hasOwnProperty(_key2)) {
          var resolver = this._resolvers[_key2];
          var prevItem = prevData[_key2];
          if (resolver) {
            var nextItem = resolver.resolve();
            if (nextData || nextItem !== prevItem) {
              nextData = nextData || (0, _extends3['default'])({}, prevData);
              nextData[_key2] = nextItem;
            }
          } else {
            var prop = this._props[_key2];
            var _nextItem = prop !== undefined ? prop : null;
            if (nextData || !__webpack_require__("./node_modules/relay-runtime/lib/isScalarAndEqual.js")(_nextItem, prevItem)) {
              nextData = nextData || (0, _extends3['default'])({}, prevData);
              nextData[_key2] = _nextItem;
            }
          }
        }
      }
      this._data = nextData || prevData;
      this._stale = false;
    }
    return this._data;
  };

  RelayModernFragmentSpecResolver.prototype.isLoading = function isLoading() {
    for (var _key3 in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key3) && this._resolvers[_key3] && this._resolvers[_key3].isLoading()) {
        return true;
      }
    }
    return false;
  };

  RelayModernFragmentSpecResolver.prototype.setCallback = function setCallback(callback) {
    this._callback = callback;
  };

  RelayModernFragmentSpecResolver.prototype.setProps = function setProps(props) {
    var selectors = getSelectorsFromObject(this._context.variables, this._fragments, props);
    for (var _key4 in selectors) {
      if (selectors.hasOwnProperty(_key4)) {
        var selector = selectors[_key4];
        var resolver = this._resolvers[_key4];
        if (selector == null) {
          if (resolver != null) {
            resolver.dispose();
          }
          resolver = null;
        } else if (Array.isArray(selector)) {
          if (resolver == null) {
            resolver = new SelectorListResolver(this._context.environment, selector, this._onChange);
          } else {
            __webpack_require__("./node_modules/fbjs/lib/invariant.js")(resolver instanceof SelectorListResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.', _key4);
            resolver.setSelectors(selector);
          }
        } else {
          if (resolver == null) {
            resolver = new SelectorResolver(this._context.environment, selector, this._onChange);
          } else {
            __webpack_require__("./node_modules/fbjs/lib/invariant.js")(resolver instanceof SelectorResolver, 'RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.', _key4);
            resolver.setSelector(selector);
          }
        }
        this._resolvers[_key4] = resolver;
      }
    }
    this._props = props;
    this._stale = true;
  };

  RelayModernFragmentSpecResolver.prototype.setVariables = function setVariables(variables) {
    for (var _key5 in this._resolvers) {
      if (this._resolvers.hasOwnProperty(_key5)) {
        var resolver = this._resolvers[_key5];
        if (resolver) {
          resolver.setVariables(variables);
        }
      }
    }
    this._stale = true;
  };

  return RelayModernFragmentSpecResolver;
}();

/**
 * A resolver for a single Selector.
 */


var SelectorResolver = function () {
  function SelectorResolver(environment, selector, callback) {
    (0, _classCallCheck3['default'])(this, SelectorResolver);

    _initialiseProps.call(this);

    var snapshot = environment.lookup(selector);
    this._callback = callback;
    this._data = snapshot.data;
    this._environment = environment;
    this._selector = selector;
    this._subscription = environment.subscribe(snapshot, this._onChange);
  }

  SelectorResolver.prototype.dispose = function dispose() {
    if (this._subscription) {
      this._subscription.dispose();
      this._subscription = null;
    }
  };

  SelectorResolver.prototype.resolve = function resolve() {
    return this._data;
  };

  SelectorResolver.prototype.setSelector = function setSelector(selector) {
    if (this._subscription != null && areEqualSelectors(selector, this._selector)) {
      return;
    }
    this.dispose();
    var snapshot = this._environment.lookup(selector);
    this._data = snapshot.data;
    this._selector = selector;
    this._subscription = this._environment.subscribe(snapshot, this._onChange);
  };

  SelectorResolver.prototype.setVariables = function setVariables(variables) {
    var selector = (0, _extends3['default'])({}, this._selector, {
      variables: variables
    });
    this.setSelector(selector);
  };

  SelectorResolver.prototype.isLoading = function isLoading() {
    return this._environment.isSelectorLoading(this._selector);
  };

  return SelectorResolver;
}();

/**
 * A resolver for an array of Selectors.
 */


var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this._onChange = function (snapshot) {
    _this3._data = snapshot.data;
    _this3._callback();
  };
};

var SelectorListResolver = function () {
  function SelectorListResolver(environment, selectors, callback) {
    var _this2 = this;

    (0, _classCallCheck3['default'])(this, SelectorListResolver);

    this._onChange = function (data) {
      _this2._stale = true;
      _this2._callback();
    };

    this._callback = callback;
    this._data = [];
    this._environment = environment;
    this._resolvers = [];
    this._stale = true;

    this.setSelectors(selectors);
  }

  SelectorListResolver.prototype.dispose = function dispose() {
    this._resolvers.forEach(disposeCallback);
  };

  SelectorListResolver.prototype.resolve = function resolve() {
    if (this._stale) {
      // Avoid mapping the array multiple times, which could occur if data for
      // multiple indices changes in the same event loop.
      var prevData = this._data;
      var nextData = void 0;
      for (var ii = 0; ii < this._resolvers.length; ii++) {
        var prevItem = prevData[ii];
        var nextItem = this._resolvers[ii].resolve();
        if (nextData || nextItem !== prevItem) {
          nextData = nextData || prevData.slice(0, ii);
          nextData.push(nextItem);
        }
      }
      if (!nextData && this._resolvers.length !== prevData.length) {
        nextData = prevData.slice(0, this._resolvers.length);
      }
      this._data = nextData || prevData;
      this._stale = false;
    }
    return this._data;
  };

  SelectorListResolver.prototype.setSelectors = function setSelectors(selectors) {
    while (this._resolvers.length > selectors.length) {
      var resolver = this._resolvers.pop();
      resolver.dispose();
    }
    for (var ii = 0; ii < selectors.length; ii++) {
      if (ii < this._resolvers.length) {
        this._resolvers[ii].setSelector(selectors[ii]);
      } else {
        this._resolvers[ii] = new SelectorResolver(this._environment, selectors[ii], this._onChange);
      }
    }
    this._stale = true;
  };

  SelectorListResolver.prototype.setVariables = function setVariables(variables) {
    this._resolvers.forEach(function (resolver) {
      return resolver.setVariables(variables);
    });
    this._stale = true;
  };

  SelectorListResolver.prototype.isLoading = function isLoading() {
    return this._resolvers.some(function (resolver) {
      return resolver.isLoading();
    });
  };

  return SelectorListResolver;
}();

function disposeCallback(disposable) {
  disposable && disposable.dispose();
}

module.exports = RelayModernFragmentSpecResolver;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Runtime function to correspond to the `graphql` tagged template function.
 * All calls to this function should be transformed by the plugin.
 */


// The type of a graphql`...` tagged template expression.
function graphql(strings) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'graphql: Unexpected invocation at runtime. Either the Babel transform ' + 'was not set up, or it failed to identify this call site. Make sure it ' + 'is being used verbatim as `graphql`.');
}

function getNode(taggedNode) {
  var fn = typeof taggedNode === 'function' ? taggedNode : taggedNode.modern;
  // Support for classic raw nodes (used in test mock)
  if (typeof fn !== 'function') {
    return taggedNode;
  }
  return fn();
}

function getFragment(taggedNode) {
  var fragment = getNode(taggedNode);
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof fragment === 'object' && fragment !== null && fragment.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").FRAGMENT, 'RelayModernGraphQLTag: Expected a fragment, got `%s`.', JSON.stringify(fragment));
  return fragment;
}

function getRequest(taggedNode) {
  var request = getNode(taggedNode);
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof request === 'object' && request !== null && (request.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").REQUEST || request.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").BATCH_REQUEST), 'RelayModernGraphQLTag: Expected an request, got `%s`.', JSON.stringify(request));
  return request;
}

module.exports = {
  getFragment: getFragment,
  getRequest: getRequest,
  graphql: graphql
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernOperationSelector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteVariables.js"),
    getOperationVariables = _require.getOperationVariables;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ROOT_ID = _require2.ROOT_ID;

/**
 * Creates an instance of the `OperationSelector` type defined in
 * `RelayStoreTypes` given an operation and some variables. The input variables
 * are filtered to exclude variables that do not match defined arguments on the
 * operation, and default values are populated for null values.
 */
function createOperationSelector(request, variables, operationFromBatch) {
  var operation = operationFromBatch || (request.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").BATCH_REQUEST ? request.requests[0].operation : request.operation);

  var operationVariables = getOperationVariables(operation, variables);
  var dataID = ROOT_ID;
  return {
    fragment: {
      dataID: dataID,
      node: request.fragment,
      variables: operationVariables
    },
    node: request,
    root: {
      dataID: dataID,
      node: operation,
      variables: operationVariables
    },
    variables: operationVariables
  };
}

module.exports = {
  createOperationSelector: createOperationSelector
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernRecord.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ID_KEY = _require.ID_KEY,
    REF_KEY = _require.REF_KEY,
    REFS_KEY = _require.REFS_KEY,
    TYPENAME_KEY = _require.TYPENAME_KEY,
    UNPUBLISH_FIELD_SENTINEL = _require.UNPUBLISH_FIELD_SENTINEL;

/**
 * @public
 *
 * Low-level record manipulation methods.
 *
 * A note about perf: we use long-hand property access rather than computed
 * properties in this file for speed ie.
 *
 *    const object = {};
 *    object[KEY] = value;
 *    record[storageKey] = object;
 *
 * instead of:
 *
 *    record[storageKey] = {
 *      [KEY]: value,
 *    };
 *
 * The latter gets transformed by Babel into something like:
 *
 *    function _defineProperty(obj, key, value) {
 *      if (key in obj) {
 *        Object.defineProperty(obj, key, {
 *          value: value,
 *          enumerable: true,
 *          configurable: true,
 *          writable: true,
 *        });
 *      } else {
 *        obj[key] = value;
 *      }
 *      return obj;
 *    }
 *
 *    record[storageKey] = _defineProperty({}, KEY, value);
 *
 * A quick benchmark shows that computed property access is an order of
 * magnitude slower (times in seconds for 100,000 iterations):
 *
 *               best     avg     sd
 *    computed 0.02175 0.02292 0.00113
 *      manual 0.00110 0.00123 0.00008
 */

/**
 * @public
 *
 * Clone a record.
 */
function clone(record) {
  return (0, _extends3['default'])({}, record);
}

/**
 * @public
 *
 * Copies all fields from `source` to `sink`, excluding `__id` and `__typename`.
 *
 * NOTE: This function does not treat `id` specially. To preserve the id,
 * manually reset it after calling this function. Also note that values are
 * copied by reference and not value; callers should ensure that values are
 * copied on write.
 */
function copyFields(source, sink) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (key !== ID_KEY && key !== TYPENAME_KEY) {
        sink[key] = source[key];
      }
    }
  }
}

/**
 * @public
 *
 * Create a new record.
 */
function create(dataID, typeName) {
  // See perf note above for why we aren't using computed property access.
  var record = {};
  record[ID_KEY] = dataID;
  record[TYPENAME_KEY] = typeName;
  return record;
}

/**
 * @public
 *
 * Get the record's `id` if available or the client-generated identifier.
 */
function getDataID(record) {
  return record[ID_KEY];
}

/**
 * @public
 *
 * Get the concrete type of the record.
 */
function getType(record) {
  return record[TYPENAME_KEY];
}

/**
 * @public
 *
 * Get a scalar (non-link) field value.
 */
function getValue(record, storageKey) {
  var value = record[storageKey];
  if (value && typeof value === 'object') {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!value.hasOwnProperty(REF_KEY) && !value.hasOwnProperty(REFS_KEY), 'RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` ' + 'but found %s.', record[ID_KEY], storageKey, value.hasOwnProperty(REF_KEY) ? 'a linked record' : 'plural linked records');
  }
  return value;
}

/**
 * @public
 *
 * Get the value of a field as a reference to another record. Throws if the
 * field has a different type.
 */
function getLinkedRecordID(record, storageKey) {
  var link = record[storageKey];
  if (link == null) {
    return link;
  }
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof link === 'object' && link && typeof link[REF_KEY] === 'string', 'RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, ' + 'was `%s`.', record[ID_KEY], storageKey, link);
  return link[REF_KEY];
}

/**
 * @public
 *
 * Get the value of a field as a list of references to other records. Throws if
 * the field has a different type.
 */
function getLinkedRecordIDs(record, storageKey) {
  var links = record[storageKey];
  if (links == null) {
    return links;
  }
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof links === 'object' && Array.isArray(links[REFS_KEY]), 'RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array ' + 'of linked IDs, got `%s`.', record[ID_KEY], storageKey, JSON.stringify(links));
  // assume items of the array are ids
  return links[REFS_KEY];
}

/**
 * @public
 *
 * Compares the fields of a previous and new record, returning either the
 * previous record if all fields are equal or a new record (with merged fields)
 * if any fields have changed.
 */
function update(prevRecord, nextRecord) {
  var updated = void 0;
  var keys = Object.keys(nextRecord);
  for (var ii = 0; ii < keys.length; ii++) {
    var key = keys[ii];
    if (updated || !__webpack_require__("./node_modules/fbjs/lib/areEqual.js")(prevRecord[key], nextRecord[key])) {
      updated = updated || (0, _extends3['default'])({}, prevRecord);
      if (nextRecord[key] !== UNPUBLISH_FIELD_SENTINEL) {
        updated[key] = nextRecord[key];
      } else {
        delete updated[key];
      }
    }
  }
  return updated || prevRecord;
}

/**
 * @public
 *
 * Returns a new record with the contents of the given records. Fields in the
 * second record will overwrite identical fields in the first record.
 */
function merge(record1, record2) {
  return Object.assign({}, record1, record2);
}

/**
 * @public
 *
 * Prevent modifications to the record. Attempts to call `set*` functions on a
 * frozen record will fatal at runtime.
 */
function freeze(record) {
  __webpack_require__("./node_modules/relay-runtime/lib/deepFreeze.js")(record);
}

/**
 * @public
 *
 * Set the value of a storageKey to a scalar.
 */
function setValue(record, storageKey, value) {
  record[storageKey] = value;
}

/**
 * @public
 *
 * Set the value of a field to a reference to another record.
 */
function setLinkedRecordID(record, storageKey, linkedID) {
  // See perf note above for why we aren't using computed property access.
  var link = {};
  link[REF_KEY] = linkedID;
  record[storageKey] = link;
}

/**
 * @public
 *
 * Set the value of a field to a list of references other records.
 */
function setLinkedRecordIDs(record, storageKey, linkedIDs) {
  // See perf note above for why we aren't using computed property access.
  var links = {};
  links[REFS_KEY] = linkedIDs;
  record[storageKey] = links;
}

module.exports = {
  clone: clone,
  copyFields: copyFields,
  create: create,
  freeze: freeze,
  getDataID: getDataID,
  getLinkedRecordID: getLinkedRecordID,
  getLinkedRecordIDs: getLinkedRecordIDs,
  getType: getType,
  getValue: getValue,
  merge: merge,
  setValue: setValue,
  setLinkedRecordID: setLinkedRecordID,
  setLinkedRecordIDs: setLinkedRecordIDs,
  update: update
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayModernSelector.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteVariables.js"),
    getFragmentVariables = _require.getFragmentVariables;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    FRAGMENTS_KEY = _require2.FRAGMENTS_KEY,
    ID_KEY = _require2.ID_KEY;

/**
 * @public
 *
 * Given the result `item` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment for that item.
 *
 * Example:
 *
 * Given two fragments as follows:
 *
 * ```
 * fragment Parent on User {
 *   id
 *   ...Child
 * }
 * fragment Child on User {
 *   name
 * }
 * ```
 *
 * And given some object `parent` that is the results of `Parent` for id "4",
 * the results of `Child` can be accessed by first getting a selector and then
 * using that selector to `lookup()` the results against the environment:
 *
 * ```
 * const childSelector = getSelector(queryVariables, Child, parent);
 * const childData = environment.lookup(childSelector).data;
 * ```
 */
function getSelector(operationVariables, fragment, item) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item));
  var dataID = item[ID_KEY];
  var fragments = item[FRAGMENTS_KEY];
  if (typeof dataID === 'string' && typeof fragments === 'object' && fragments !== null && typeof fragments[fragment.name] === 'object' && fragments[fragment.name] !== null) {
    var argumentVariables = fragments[fragment.name];
    var fragmentVariables = getFragmentVariables(fragment, operationVariables, argumentVariables);
    return {
      dataID: dataID,
      node: fragment,
      variables: fragmentVariables
    };
  }
  __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`.', fragment.name, JSON.stringify(item), fragment.name);
  return null;
}

/**
 * @public
 *
 * Given the result `items` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment on those
 * items. This is similar to `getSelector` but for "plural" fragments that
 * expect an array of results and therefore return an array of selectors.
 */
function getSelectorList(operationVariables, fragment, items) {
  var selectors = null;
  items.forEach(function (item) {
    var selector = item != null ? getSelector(operationVariables, fragment, item) : null;
    if (selector != null) {
      selectors = selectors || [];
      selectors.push(selector);
    }
  });
  return selectors;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the selectors for those fragments from the results.
 *
 * The canonical use-case for this function is ReactRelayFragmentContainer, which
 * uses this function to convert (props, fragments) into selectors so that it
 * can read the results to pass to the inner component.
 */
function getSelectorsFromObject(operationVariables, fragments, object) {
  var selectors = {};
  for (var _key in fragments) {
    if (fragments.hasOwnProperty(_key)) {
      var fragment = fragments[_key];
      var item = object[_key];
      if (item == null) {
        selectors[_key] = item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key, JSON.stringify(item), fragment.name);
        selectors[_key] = getSelectorList(operationVariables, fragment, item);
      } else {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key, JSON.stringify(item), fragment.name);
        selectors[_key] = getSelector(operationVariables, fragment, item);
      }
    }
  }
  return selectors;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts a mapping of keys -> id(s) of the results.
 *
 * Similar to `getSelectorsFromObject()`, this function can be useful in
 * determining the "identity" of the props passed to a component.
 */
function getDataIDsFromObject(fragments, object) {
  var ids = {};
  for (var _key2 in fragments) {
    if (fragments.hasOwnProperty(_key2)) {
      var fragment = fragments[_key2];
      var item = object[_key2];
      if (item == null) {
        ids[_key2] = item;
      } else if (fragment.metadata && fragment.metadata.plural === true) {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key2, JSON.stringify(item), fragment.name);
        ids[_key2] = getDataIDs(fragment, item);
      } else {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key2, JSON.stringify(item), fragment.name);
        ids[_key2] = getDataID(fragment, item);
      }
    }
  }
  return ids;
}

/**
 * @internal
 */
function getDataIDs(fragment, items) {
  var ids = void 0;
  items.forEach(function (item) {
    var id = item != null ? getDataID(fragment, item) : null;
    if (id != null) {
      ids = ids || [];
      ids.push(id);
    }
  });
  return ids || null;
}

/**
 * @internal
 */
function getDataID(fragment, item) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof item === 'object' && item !== null && !Array.isArray(item), 'RelayModernSelector: Expected value for fragment `%s` to be an object, got ' + '`%s`.', fragment.name, JSON.stringify(item));
  var dataID = item[ID_KEY];
  if (typeof dataID === 'string') {
    return dataID;
  }
  __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'RelayModernSelector: Expected object to contain data for fragment `%s`, got ' + '`%s`. Make sure that the parent operation/fragment included fragment ' + '`...%s` without `@relay(mask: false)`.', fragment.name, JSON.stringify(item), fragment.name);
  return null;
}

/**
 * @public
 *
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the merged variables that would be in scope for those
 * fragments/results.
 *
 * This can be useful in determing what varaibles were used to fetch the data
 * for a Relay container, for example.
 */
function getVariablesFromObject(operationVariables, fragments, object) {
  var variables = {};
  for (var _key3 in fragments) {
    if (fragments.hasOwnProperty(_key3)) {
      var _ret = function () {
        var fragment = fragments[_key3];
        var item = object[_key3];
        if (item == null) {
          return 'continue';
        } else if (fragment.metadata && fragment.metadata.plural === true) {
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(item), 'RelayModernSelector: Expected value for key `%s` to be an array, got `%s`. ' + 'Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.', _key3, JSON.stringify(item), fragment.name);
          item.forEach(function (value) {
            if (value != null) {
              var itemVariables = getVariables(operationVariables, fragment, value);
              if (itemVariables) {
                Object.assign(variables, itemVariables);
              }
            }
          });
        } else {
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!Array.isArray(item), 'RelayModernFragmentSpecResolver: Expected value for key `%s` to be an object, got `%s`. ' + 'Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.', _key3, JSON.stringify(item), fragment.name);
          var itemVariables = getVariables(operationVariables, fragment, item);
          if (itemVariables) {
            Object.assign(variables, itemVariables);
          }
        }
      }();

      if (_ret === 'continue') continue;
    }
  }
  return variables;
}

/**
 * @internal
 */
function getVariables(operationVariables, fragment, item) {
  var selector = getSelector(operationVariables, fragment, item);
  return selector ? selector.variables : null;
}

/**
 * @public
 *
 * Determine if two selectors are equal (represent the same selection). Note
 * that this function returns `false` when the two queries/fragments are
 * different objects, even if they select the same fields.
 */
function areEqualSelectors(thisSelector, thatSelector) {
  return thisSelector.dataID === thatSelector.dataID && thisSelector.node === thatSelector.node && __webpack_require__("./node_modules/fbjs/lib/areEqual.js")(thisSelector.variables, thatSelector.variables);
}

module.exports = {
  areEqualSelectors: areEqualSelectors,
  getDataIDsFromObject: getDataIDsFromObject,
  getSelector: getSelector,
  getSelectorList: getSelectorList,
  getSelectorsFromObject: getSelectorsFromObject,
  getVariablesFromObject: getVariablesFromObject
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayNetwork.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/ConvertToExecuteFunction.js"),
    convertFetch = _require.convertFetch,
    convertSubscribe = _require.convertSubscribe;

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
 */
function create(fetchFn, subscribeFn) {
  // Convert to functions that returns RelayObservable.
  var observeFetch = convertFetch(fetchFn);
  var observeSubscribe = subscribeFn ? convertSubscribe(subscribeFn) : undefined;

  function execute(request, variables, cacheConfig, uploadables) {
    if (request.operationKind === 'subscription') {
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(observeSubscribe, 'RelayNetwork: This network layer does not support Subscriptions. ' + 'To use Subscriptions, provide a custom network layer.');

      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!uploadables, 'RelayNetwork: Cannot provide uploadables while subscribing.');
      return observeSubscribe(request, variables, cacheConfig);
    }

    var pollInterval = cacheConfig.poll;
    if (pollInterval != null) {
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!uploadables, 'RelayNetwork: Cannot provide uploadables while polling.');
      return observeFetch(request, variables, { force: true }).poll(pollInterval);
    }

    return observeFetch(request, variables, cacheConfig, uploadables);
  }

  return { execute: execute };
}

module.exports = { create: create };

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A Subscription object is returned from .subscribe(), which can be
 * unsubscribed or checked to see if the resulting subscription has closed.
 */


/**
 * An Observer is an object of optional callback functions provided to
 * .subscribe(). Each callback function is invoked when that event occurs.
 */


/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */


/**
 * A Source is the required argument when constructing a new Observable. Similar
 * to a Promise constructor, this is a function which is invoked with a Sink,
 * and may return either a cleanup function or a Subscription instance (for use
 * when composing Observables).
 */


/**
 * A Subscribable is an interface describing any object which can be subscribed.
 *
 * Note: A sink may be passed directly to .subscribe() as its observer,
 * allowing for easily composing Subscribables.
 */


// Note: This should accept Subscribable<T> instead of RelayObservable<T>,
// however Flow cannot yet distinguish it from T.
var hostReportError = swallowError;

/**
 * Limited implementation of ESObservable, providing the limited set of behavior
 * Relay networking requires.
 *
 * Observables retain the benefit of callbacks which can be called
 * synchronously, avoiding any UI jitter, while providing a compositional API,
 * which simplifies logic and prevents mishandling of errors compared to
 * the direct use of callback functions.
 *
 * ESObservable: https://github.com/tc39/proposal-observable
 */

var RelayObservable = function () {
  RelayObservable.create = function create(source) {
    return new RelayObservable(source);
  };

  // Use RelayObservable.create()


  function RelayObservable(source) {
    (0, _classCallCheck3['default'])(this, RelayObservable);

    if (true) {
      // Early runtime errors for ill-formed sources.
      if (!source || typeof source !== 'function') {
        throw new Error('Source must be a Function: ' + String(source));
      }
    }
    this._source = source;
  }

  /**
   * When an emitted error event is not handled by an Observer, it is reported
   * to the host environment (what the ESObservable spec refers to as
   * "HostReportErrors()").
   *
   * The default implementation in development rethrows thrown errors, and
   * logs emitted error events to the console, while in production does nothing
   * (swallowing unhandled errors).
   *
   * Called during application initialization, this method allows
   * application-specific handling of unhandled errors. Allowing, for example,
   * integration with error logging or developer tools.
   *
   * A second parameter `isUncaughtThrownError` is true when the unhandled error
   * was thrown within an Observer handler, and false when the unhandled error
   * was an unhandled emitted event.
   *
   *  - Uncaught thrown errors typically represent avoidable errors thrown from
   *    application code, which should be handled with a try/catch block, and
   *    usually have useful stack traces.
   *
   *  - Unhandled emitted event errors typically represent unavoidable events in
   *    application flow such as network failure, and may not have useful
   *    stack traces.
   */


  RelayObservable.onUnhandledError = function onUnhandledError(callback) {
    hostReportError = callback;
  };

  /**
   * Accepts various kinds of data sources, and always returns a RelayObservable
   * useful for accepting the result of a user-provided FetchFunction.
   */


  RelayObservable.from = function from(obj) {
    return isObservable(obj) ? fromObservable(obj) : __webpack_require__("./node_modules/relay-runtime/lib/isPromise.js")(obj) ? fromPromise(obj) : fromValue(obj);
  };

  /**
   * Creates a RelayObservable, given a function which expects a legacy
   * Relay Observer as the last argument and which returns a Disposable.
   *
   * To support migration to Observable, the function may ignore the
   * legacy Relay observer and directly return an Observable instead.
   */


  RelayObservable.fromLegacy = function fromLegacy(callback) {
    return RelayObservable.create(function (sink) {
      var result = callback({
        onNext: sink.next,
        onError: sink.error,
        onCompleted: sink.complete
      });
      return isObservable(result) ? result.subscribe(sink) : function () {
        return result.dispose();
      };
    });
  };

  /**
   * Similar to promise.catch(), observable.catch() handles error events, and
   * provides an alternative observable to use in it's place.
   *
   * If the catch handler throws a new error, it will appear as an error event
   * on the resulting Observable.
   */


  RelayObservable.prototype['catch'] = function _catch(fn) {
    var _this = this;

    return RelayObservable.create(function (sink) {
      var subscription = void 0;
      _this.subscribe({
        start: function start(sub) {
          subscription = sub;
        },
        next: sink.next,
        complete: sink.complete,
        error: function (_error2) {
          function error(_x) {
            return _error2.apply(this, arguments);
          }

          error.toString = function () {
            return _error2.toString();
          };

          return error;
        }(function (error) {
          try {
            fn(error).subscribe({
              start: function start(sub) {
                subscription = sub;
              },
              next: sink.next,
              complete: sink.complete,
              error: sink.error
            });
          } catch (error2) {
            sink.error(error2, true /* isUncaughtThrownError */);
          }
        })
      });
      return function () {
        return subscription.unsubscribe();
      };
    });
  };

  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the provided Observer is called to perform a side-effects
   * for all events emitted by the source.
   *
   * Any errors that are thrown in the side-effect Observer are unhandled, and
   * do not affect the source Observable or its Observer.
   *
   * This is useful for when debugging your Observables or performing other
   * side-effects such as logging or performance monitoring.
   */


  RelayObservable.prototype['do'] = function _do(observer) {
    var _this2 = this;

    return RelayObservable.create(function (sink) {
      var both = function both(action) {
        return function () {
          try {
            observer[action] && observer[action].apply(observer, arguments);
          } catch (error) {
            hostReportError(error, true /* isUncaughtThrownError */);
          }
          sink[action] && sink[action].apply(sink, arguments);
        };
      };
      return _this2.subscribe({
        start: both('start'),
        next: both('next'),
        error: both('error'),
        complete: both('complete'),
        unsubscribe: both('unsubscribe')
      });
    });
  };

  /**
   * Returns a new Observable which returns the same values as this one, but
   * modified so that the finally callback is performed after completion,
   * whether normal or due to error or unsubscription.
   *
   * This is useful for cleanup such as resource finalization.
   */


  RelayObservable.prototype['finally'] = function _finally(fn) {
    var _this3 = this;

    return RelayObservable.create(function (sink) {
      var subscription = _this3.subscribe(sink);
      return function () {
        subscription.unsubscribe();
        fn();
      };
    });
  };

  /**
   * Returns a new Observable which is identical to this one, unless this
   * Observable completes before yielding any values, in which case the new
   * Observable will yield the values from the alternate Observable.
   *
   * If this Observable does yield values, the alternate is never subscribed to.
   *
   * This is useful for scenarios where values may come from multiple sources
   * which should be tried in order, i.e. from a cache before a network.
   */


  RelayObservable.prototype.ifEmpty = function ifEmpty(alternate) {
    var _this4 = this;

    return RelayObservable.create(function (sink) {
      var hasValue = false;
      var current = _this4.subscribe({
        next: function next(value) {
          hasValue = true;
          sink.next(value);
        },

        error: sink.error,
        complete: function complete() {
          if (hasValue) {
            sink.complete();
          } else {
            current = alternate.subscribe(sink);
          }
        }
      });
      return function () {
        current.unsubscribe();
      };
    });
  };

  /**
   * Observable's primary API: returns an unsubscribable Subscription to the
   * source of this Observable.
   *
   * Note: A sink may be passed directly to .subscribe() as its observer,
   * allowing for easily composing Observables.
   */


  RelayObservable.prototype.subscribe = function subscribe(observer) {
    if (true) {
      // Early runtime errors for ill-formed observers.
      if (!observer || typeof observer !== 'object') {
        throw new Error('Observer must be an Object with callbacks: ' + String(observer));
      }
    }
    return _subscribe(this._source, observer);
  };

  /**
   * Supports subscription of a legacy Relay Observer, returning a Disposable.
   */


  RelayObservable.prototype.subscribeLegacy = function subscribeLegacy(legacyObserver) {
    var subscription = this.subscribe({
      next: legacyObserver.onNext,
      error: legacyObserver.onError,
      complete: legacyObserver.onCompleted
    });
    return {
      dispose: subscription.unsubscribe
    };
  };

  /**
   * Returns a new Observerable where each value has been transformed by
   * the mapping function.
   */


  RelayObservable.prototype.map = function map(fn) {
    return this.mergeMap(function (value) {
      return fromValue(fn(value));
    });
  };

  /**
   * Returns a new Observable where each value is replaced with a new Observable
   * by the mapping function, the results of which returned as a single
   * merged Observable.
   */


  RelayObservable.prototype.mergeMap = function mergeMap(fn) {
    var _this5 = this;

    return RelayObservable.create(function (sink) {
      var subscriptions = [];

      function start(subscription) {
        this._sub = subscription;
        subscriptions.push(subscription);
      }

      function complete() {
        subscriptions.splice(subscriptions.indexOf(this._sub), 1);
        if (subscriptions.length === 0) {
          sink.complete();
        }
      }

      _this5.subscribe({
        start: start,
        next: function next(value) {
          try {
            if (!sink.closed) {
              RelayObservable.from(fn(value)).subscribe({
                start: start,
                next: sink.next,
                error: sink.error,
                complete: complete
              });
            }
          } catch (error) {
            sink.error(error, true /* isUncaughtThrownError */);
          }
        },

        error: sink.error,
        complete: complete
      });

      return function () {
        subscriptions.forEach(function (sub) {
          return sub.unsubscribe();
        });
        subscriptions.length = 0;
      };
    });
  };

  /**
   * Returns a new Observable which first mirrors this Observable, then when it
   * completes, waits for `pollInterval` milliseconds before re-subscribing to
   * this Observable again, looping in this manner until unsubscribed.
   *
   * The returned Observable never completes.
   */


  RelayObservable.prototype.poll = function poll(pollInterval) {
    var _this6 = this;

    if (true) {
      if (typeof pollInterval !== 'number' || pollInterval <= 0) {
        throw new Error('RelayObservable: Expected pollInterval to be positive, got: ' + pollInterval);
      }
    }
    return RelayObservable.create(function (sink) {
      var subscription = void 0;
      var timeout = void 0;
      var poll = function poll() {
        subscription = _this6.subscribe({
          next: sink.next,
          error: sink.error,
          complete: function complete() {
            timeout = setTimeout(poll, pollInterval);
          }
        });
      };
      poll();
      return function () {
        clearTimeout(timeout);
        subscription.unsubscribe();
      };
    });
  };

  /**
   * Returns a Promise which resolves when this Observable yields a first value
   * or when it completes with no value.
   */


  RelayObservable.prototype.toPromise = function toPromise() {
    var _this7 = this;

    return new Promise(function (resolve, reject) {
      var subscription = void 0;
      _this7.subscribe({
        start: function start(sub) {
          subscription = sub;
        },
        next: function next(val) {
          resolve(val);
          subscription.unsubscribe();
        },

        error: reject,
        complete: resolve
      });
    });
  };

  return RelayObservable;
}();

// Use declarations to teach Flow how to check isObservable.


function isObservable(obj) {
  return typeof obj === 'object' && obj !== null && typeof obj.subscribe === 'function';
}

function fromObservable(obj) {
  return obj instanceof RelayObservable ? obj : RelayObservable.create(function (sink) {
    return obj.subscribe(sink);
  });
}

function fromPromise(promise) {
  return RelayObservable.create(function (sink) {
    // Since sink methods do not throw, the resulting Promise can be ignored.
    promise.then(function (value) {
      sink.next(value);
      sink.complete();
    }, sink.error);
  });
}

function fromValue(value) {
  return RelayObservable.create(function (sink) {
    sink.next(value);
    sink.complete();
  });
}

function _subscribe(source, observer) {
  var closed = false;
  var cleanup = void 0;

  // Ideally we would simply describe a `get closed()` method on the Sink and
  // Subscription objects below, however not all flow environments we expect
  // Relay to be used within will support property getters, and many minifier
  // tools still do not support ES5 syntax. Instead, we can use defineProperty.
  var withClosed = function withClosed(obj) {
    return Object.defineProperty(obj, 'closed', { get: function get() {
        return closed;
      } });
  };

  function doCleanup() {
    if (cleanup) {
      if (cleanup.unsubscribe) {
        cleanup.unsubscribe();
      } else {
        try {
          cleanup();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
      cleanup = undefined;
    }
  }

  // Create a Subscription.
  var subscription = withClosed({
    unsubscribe: function unsubscribe() {
      if (!closed) {
        closed = true;

        // Tell Observer that unsubscribe was called.
        try {
          observer.unsubscribe && observer.unsubscribe(subscription);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }
  });

  // Tell Observer that observation is about to begin.
  try {
    observer.start && observer.start(subscription);
  } catch (error) {
    hostReportError(error, true /* isUncaughtThrownError */);
  }

  // If closed already, don't bother creating a Sink.
  if (closed) {
    return subscription;
  }

  // Create a Sink respecting subscription state and cleanup.
  var sink = withClosed({
    next: function next(value) {
      if (!closed && observer.next) {
        try {
          observer.next(value);
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        }
      }
    },
    error: function (_error3) {
      function error(_x2, _x3) {
        return _error3.apply(this, arguments);
      }

      error.toString = function () {
        return _error3.toString();
      };

      return error;
    }(function (error, isUncaughtThrownError) {
      if (closed || !observer.error) {
        closed = true;
        hostReportError(error, isUncaughtThrownError || false);
        doCleanup();
      } else {
        closed = true;
        try {
          observer.error(error);
        } catch (error2) {
          hostReportError(error2, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }),
    complete: function complete() {
      if (!closed) {
        closed = true;
        try {
          observer.complete && observer.complete();
        } catch (error) {
          hostReportError(error, true /* isUncaughtThrownError */);
        } finally {
          doCleanup();
        }
      }
    }
  });

  // If anything goes wrong during observing the source, handle the error.
  try {
    cleanup = source(sink);
  } catch (error) {
    sink.error(error, true /* isUncaughtThrownError */);
  }

  if (true) {
    // Early runtime errors for ill-formed returned cleanup.
    if (cleanup !== undefined && typeof cleanup !== 'function' && (!cleanup || typeof cleanup.unsubscribe !== 'function')) {
      throw new Error('Returned cleanup function which cannot be called: ' + String(cleanup));
    }
  }

  // If closed before the source function existed, cleanup now.
  if (closed) {
    doCleanup();
  }

  return subscription;
}

function swallowError(_error, _isUncaughtThrownError) {
  // do nothing.
}

if (true) {
  // Default implementation of HostReportErrors() in development builds.
  // Can be replaced by the host application environment.
  RelayObservable.onUnhandledError(function (error, isUncaughtThrownError) {
    if (typeof fail === 'function') {
      // In test environments (Jest), fail() immediately fails the current test.
      fail(String(error));
    } else if (isUncaughtThrownError) {
      // Rethrow uncaught thrown errors on the next frame to avoid breaking
      // current logic.
      setTimeout(function () {
        throw error;
      });
    } else if (typeof console !== 'undefined') {
      // Otherwise, log the unhandled error for visibility.
      // eslint-ignore-next-line no-console
      console.error('RelayObservable: Unhandled Error', error);
    }
  });
}

module.exports = RelayObservable;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayProfiler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var aggregateHandlersByName = {
  '*': []
};
var profileHandlersByName = {
  '*': []
};

var NOT_INVOKED = {};
var defaultProfiler = { stop: __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js") };
var shouldInstrument = function shouldInstrument(name) {
  if (true) {
    return true;
  }
  return name.charAt(0) !== '@';
};

/**
 * @public
 *
 * Instruments methods to allow profiling various parts of Relay. Profiling code
 * in Relay consists of three steps:
 *
 *  - Instrument the function to be profiled.
 *  - Attach handlers to the instrumented function.
 *  - Run the code which triggers the handlers.
 *
 * Handlers attached to instrumented methods are called with an instrumentation
 * name and a callback that must be synchronously executed:
 *
 *   instrumentedMethod.attachHandler(function(name, callback) {
 *     const start = performance.now();
 *     callback();
 *     console.log('Duration', performance.now() - start);
 *   });
 *
 * Handlers for profiles are callbacks that return a stop method:
 *
 *   RelayProfiler.attachProfileHandler('profileName', (name, state) => {
 *     const start = performance.now();
 *     return function stop(name, state) {
 *       console.log(`Duration (${name})`, performance.now() - start);
 *     }
 *   });
 *
 * In order to reduce the impact on performance in production, instrumented
 * methods and profilers with names that begin with `@` will only be measured
 * if `__DEV__` is true. This should be used for very hot functions.
 */
var RelayProfiler = {
  /**
   * Instruments methods on a class or object. This re-assigns the method in
   * order to preserve function names in stack traces (which are detected by
   * modern debuggers via heuristics). Example usage:
   *
   *   const RelayStore = { primeCache: function() {...} };
   *   RelayProfiler.instrumentMethods(RelayStore, {
   *     primeCache: 'RelayStore.primeCache'
   *   });
   *
   *   RelayStore.primeCache.attachHandler(...);
   *
   * As a result, the methods will be replaced by wrappers that provide the
   * `attachHandler` and `detachHandler` methods.
   */
  instrumentMethods: function instrumentMethods(object, names) {
    for (var _key in names) {
      if (names.hasOwnProperty(_key)) {
        if (typeof object[_key] === 'function') {
          object[_key] = RelayProfiler.instrument(names[_key], object[_key]);
        }
      }
    }
  },


  /**
   * Wraps the supplied function with one that provides the `attachHandler` and
   * `detachHandler` methods. Example usage:
   *
   *   const printRelayQuery =
   *     RelayProfiler.instrument('printRelayQuery', printRelayQuery);
   *
   *   printRelayQuery.attachHandler(...);
   *
   * NOTE: The instrumentation assumes that no handlers are attached or detached
   * in the course of executing another handler.
   */
  instrument: function instrument(name, originalFunction) {
    if (!shouldInstrument(name)) {
      originalFunction.attachHandler = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
      originalFunction.detachHandler = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
      return originalFunction;
    }
    if (!aggregateHandlersByName.hasOwnProperty(name)) {
      aggregateHandlersByName[name] = [];
    }
    var catchallHandlers = aggregateHandlersByName['*'];
    var aggregateHandlers = aggregateHandlersByName[name];
    var handlers = [];
    var contexts = [];
    var invokeHandlers = function invokeHandlers() {
      var context = contexts[contexts.length - 1];
      if (context[0]) {
        context[0]--;
        catchallHandlers[context[0]](name, invokeHandlers);
      } else if (context[1]) {
        context[1]--;
        aggregateHandlers[context[1]](name, invokeHandlers);
      } else if (context[2]) {
        context[2]--;
        handlers[context[2]](name, invokeHandlers);
      } else {
        context[5] = originalFunction.apply(context[3], context[4]);
      }
    };
    var instrumentedCallback = function instrumentedCallback() {
      var returnValue = void 0;
      if (aggregateHandlers.length === 0 && handlers.length === 0 && catchallHandlers.length === 0) {
        returnValue = originalFunction.apply(this, arguments);
      } else {
        contexts.push([catchallHandlers.length, aggregateHandlers.length, handlers.length, this, arguments, NOT_INVOKED]);
        invokeHandlers();
        var context = contexts.pop();
        returnValue = context[5];
        if (returnValue === NOT_INVOKED) {
          throw new Error('RelayProfiler: Handler did not invoke original function.');
        }
      }
      return returnValue;
    };
    instrumentedCallback.attachHandler = function (handler) {
      handlers.push(handler);
    };
    instrumentedCallback.detachHandler = function (handler) {
      __webpack_require__("./node_modules/fbjs/lib/removeFromArray.js")(handlers, handler);
    };
    instrumentedCallback.displayName = '(instrumented ' + name + ')';
    return instrumentedCallback;
  },


  /**
   * Attaches a handler to all methods instrumented with the supplied name.
   *
   *   function createRenderer() {
   *     return RelayProfiler.instrument('render', function() {...});
   *   }
   *   const renderA = createRenderer();
   *   const renderB = createRenderer();
   *
   *   // Only profiles `renderA`.
   *   renderA.attachHandler(...);
   *
   *   // Profiles both `renderA` and `renderB`.
   *   RelayProfiler.attachAggregateHandler('render', ...);
   *
   */
  attachAggregateHandler: function attachAggregateHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (!aggregateHandlersByName.hasOwnProperty(name)) {
        aggregateHandlersByName[name] = [];
      }
      aggregateHandlersByName[name].push(handler);
    }
  },


  /**
   * Detaches a handler attached via `attachAggregateHandler`.
   */
  detachAggregateHandler: function detachAggregateHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (aggregateHandlersByName.hasOwnProperty(name)) {
        __webpack_require__("./node_modules/fbjs/lib/removeFromArray.js")(aggregateHandlersByName[name], handler);
      }
    }
  },


  /**
   * Instruments profiling for arbitrarily asynchronous code by a name.
   *
   *   const timerProfiler = RelayProfiler.profile('timeout');
   *   setTimeout(function() {
   *     timerProfiler.stop();
   *   }, 1000);
   *
   *   RelayProfiler.attachProfileHandler('timeout', ...);
   *
   * Arbitrary state can also be passed into `profile` as a second argument. The
   * attached profile handlers will receive this as the second argument.
   */
  profile: function profile(name, state) {
    var hasCatchAllHandlers = profileHandlersByName['*'].length > 0;
    var hasNamedHandlers = profileHandlersByName.hasOwnProperty(name);
    if (hasNamedHandlers || hasCatchAllHandlers) {
      var profileHandlers = hasNamedHandlers && hasCatchAllHandlers ? profileHandlersByName[name].concat(profileHandlersByName['*']) : hasNamedHandlers ? profileHandlersByName[name] : profileHandlersByName['*'];
      var stopHandlers = void 0;
      for (var ii = profileHandlers.length - 1; ii >= 0; ii--) {
        var profileHandler = profileHandlers[ii];
        var stopHandler = profileHandler(name, state);
        stopHandlers = stopHandlers || [];
        stopHandlers.unshift(stopHandler);
      }
      return {
        stop: function stop() {
          if (stopHandlers) {
            stopHandlers.forEach(function (stopHandler) {
              return stopHandler();
            });
          }
        }
      };
    }
    return defaultProfiler;
  },


  /**
   * Attaches a handler to profiles with the supplied name. You can also
   * attach to the special name '*' which is a catch all.
   */
  attachProfileHandler: function attachProfileHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (!profileHandlersByName.hasOwnProperty(name)) {
        profileHandlersByName[name] = [];
      }
      profileHandlersByName[name].push(handler);
    }
  },


  /**
   * Detaches a handler attached via `attachProfileHandler`.
   */
  detachProfileHandler: function detachProfileHandler(name, handler) {
    if (shouldInstrument(name)) {
      if (profileHandlersByName.hasOwnProperty(name)) {
        __webpack_require__("./node_modules/fbjs/lib/removeFromArray.js")(profileHandlersByName[name], handler);
      }
    }
  }
};

module.exports = RelayProfiler;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayPublishQueue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Coordinates the concurrent modification of a `Store` due to optimistic and
 * non-revertable client updates and server payloads:
 * - Applies optimistic updates.
 * - Reverts optimistic updates, rebasing any subsequent updates.
 * - Commits client updates (typically for client schema extensions).
 * - Commits server updates:
 *   - Normalizes query/mutation/subscription responses.
 *   - Executes handlers for "handle" fields.
 *   - Reverts and reapplies pending optimistic updates.
 */
var RelayPublishQueue = function () {
  // Optimistic updaters to add with the next `run()`.

  // Payloads to apply or Sources to publish to the store with the next `run()`.


  // A "negative" of all applied updaters. It can be published to the store to
  // undo them in order to re-apply some of them for a rebase.
  function RelayPublishQueue(store, handlerProvider) {
    (0, _classCallCheck3['default'])(this, RelayPublishQueue);

    this._backup = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"))();
    this._handlerProvider = handlerProvider || null;
    this._pendingBackupRebase = false;
    this._pendingUpdaters = new Set();
    this._pendingData = new Set();
    this._pendingOptimisticUpdates = new Set();
    this._store = store;
    this._appliedOptimisticUpdates = new Set();
  }

  /**
   * Schedule applying an optimistic updates on the next `run()`.
   */

  // Optimistic updaters that are already added and might be rerun in order to
  // rebase them.

  // Updaters to apply with the next `run()`. These mutate the store and should
  // typically only mutate client schema extensions.

  // True if the next `run()` should apply the backup and rerun all optimistic
  // updates performing a rebase.


  RelayPublishQueue.prototype.applyUpdate = function applyUpdate(updater) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(!this._appliedOptimisticUpdates.has(updater) && !this._pendingOptimisticUpdates.has(updater), 'RelayPublishQueue: Cannot apply the same update function more than ' + 'once concurrently.');
    this._pendingOptimisticUpdates.add(updater);
  };

  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */


  RelayPublishQueue.prototype.revertUpdate = function revertUpdate(updater) {
    if (this._pendingOptimisticUpdates.has(updater)) {
      // Reverted before it was applied
      this._pendingOptimisticUpdates['delete'](updater);
    } else if (this._appliedOptimisticUpdates.has(updater)) {
      this._pendingBackupRebase = true;
      this._appliedOptimisticUpdates['delete'](updater);
    }
  };

  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */


  RelayPublishQueue.prototype.revertAll = function revertAll() {
    this._pendingBackupRebase = true;
    this._pendingOptimisticUpdates.clear();
    this._appliedOptimisticUpdates.clear();
  };

  /**
   * Schedule applying a payload to the store on the next `run()`.
   */


  RelayPublishQueue.prototype.commitPayload = function commitPayload(operation, _ref, updater) {
    var fieldPayloads = _ref.fieldPayloads,
        source = _ref.source;

    this._pendingBackupRebase = true;
    this._pendingData.add({
      kind: 'payload',
      payload: { fieldPayloads: fieldPayloads, operation: operation, source: source, updater: updater }
    });
  };

  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */


  RelayPublishQueue.prototype.commitUpdate = function commitUpdate(updater) {
    this._pendingBackupRebase = true;
    this._pendingUpdaters.add(updater);
  };

  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */


  RelayPublishQueue.prototype.commitSource = function commitSource(source) {
    this._pendingBackupRebase = true;
    this._pendingData.add({ kind: 'source', source: source });
  };

  /**
   * Execute all queued up operations from the other public methods.
   */


  RelayPublishQueue.prototype.run = function run() {
    if (this._pendingBackupRebase && this._backup.size()) {
      this._store.publish(this._backup);
      this._backup = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"))();
    }
    this._commitData();
    this._commitUpdaters();
    this._applyUpdates();
    this._pendingBackupRebase = false;
    this._store.notify();
  };

  RelayPublishQueue.prototype._getSourceFromPayload = function _getSourceFromPayload(payload) {
    var _this = this;

    var fieldPayloads = payload.fieldPayloads,
        operation = payload.operation,
        source = payload.source,
        updater = payload.updater;

    var mutator = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceMutator.js"))(this._store.getSource(), source);
    var store = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceProxy.js"))(mutator);
    var selectorStore = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceSelectorProxy.js"))(store, operation.fragment);
    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(handler, 'RelayModernEnvironment: Expected a handler to be provided for ' + 'handle `%s`.', fieldPayload.handle);
        handler.update(store, fieldPayload);
      });
    }
    if (updater) {
      var selectorData = lookupSelector(source, operation.fragment);
      updater(selectorStore, selectorData);
    }
    return source;
  };

  RelayPublishQueue.prototype._commitData = function _commitData() {
    var _this2 = this;

    if (!this._pendingData.size) {
      return;
    }
    this._pendingData.forEach(function (data) {
      var source = void 0;
      if (data.kind === 'payload') {
        source = _this2._getSourceFromPayload(data.payload);
      } else {
        source = data.source;
      }
      _this2._store.publish(source);
    });
    this._pendingData.clear();
  };

  RelayPublishQueue.prototype._commitUpdaters = function _commitUpdaters() {
    var _this3 = this;

    if (!this._pendingUpdaters.size) {
      return;
    }
    var sink = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"))();
    this._pendingUpdaters.forEach(function (updater) {
      var mutator = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceMutator.js"))(_this3._store.getSource(), sink);
      var store = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceProxy.js"))(mutator);
      updater(store);
    });
    this._store.publish(sink);
    this._pendingUpdaters.clear();
  };

  RelayPublishQueue.prototype._applyUpdates = function _applyUpdates() {
    var _this4 = this;

    if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
      var sink = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"))();
      var mutator = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceMutator.js"))(this._store.getSource(), sink, this._backup);
      var store = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceProxy.js"))(mutator, this._handlerProvider);

      // rerun all updaters in case we are running a rebase
      if (this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
        this._appliedOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.operation) {
            var selectorStoreUpdater = optimisticUpdate.selectorStoreUpdater,
                _operation = optimisticUpdate.operation,
                response = optimisticUpdate.response;

            var selectorStore = store.commitPayload(_operation, response);
            // TODO: Fix commitPayload so we don't have to run normalize twice
            var selectorData = void 0,
                _source = void 0;
            if (response) {
              var _normalizeRelayPayloa = __webpack_require__("./node_modules/relay-runtime/lib/normalizeRelayPayload.js")(_operation.root, response);

              _source = _normalizeRelayPayloa.source;

              selectorData = lookupSelector(_source, _operation.fragment);
            }
            selectorStoreUpdater && selectorStoreUpdater(selectorStore, selectorData);
          } else if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;

            storeUpdater(store);
          } else {
            var _source2 = optimisticUpdate.source,
                _fieldPayloads = optimisticUpdate.fieldPayloads;

            store.publishSource(_source2, _fieldPayloads);
          }
        });
      }

      // apply any new updaters
      if (this._pendingOptimisticUpdates.size) {
        this._pendingOptimisticUpdates.forEach(function (optimisticUpdate) {
          if (optimisticUpdate.operation) {
            var selectorStoreUpdater = optimisticUpdate.selectorStoreUpdater,
                _operation2 = optimisticUpdate.operation,
                response = optimisticUpdate.response;

            var selectorStore = store.commitPayload(_operation2, response);
            // TODO: Fix commitPayload so we don't have to run normalize twice
            var selectorData = void 0,
                _source3 = void 0;
            if (response) {
              var _normalizeRelayPayloa2 = __webpack_require__("./node_modules/relay-runtime/lib/normalizeRelayPayload.js")(_operation2.root, response);

              _source3 = _normalizeRelayPayloa2.source;

              selectorData = lookupSelector(_source3, _operation2.fragment);
            }
            selectorStoreUpdater && selectorStoreUpdater(selectorStore, selectorData);
          } else if (optimisticUpdate.storeUpdater) {
            var storeUpdater = optimisticUpdate.storeUpdater;

            storeUpdater(store);
          } else {
            var _source4 = optimisticUpdate.source,
                _fieldPayloads2 = optimisticUpdate.fieldPayloads;

            store.publishSource(_source4, _fieldPayloads2);
          }
          _this4._appliedOptimisticUpdates.add(optimisticUpdate);
        });
        this._pendingOptimisticUpdates.clear();
      }

      this._store.publish(sink);
    }
  };

  return RelayPublishQueue;
}();

function lookupSelector(source, selector) {
  var selectorData = __webpack_require__("./node_modules/relay-runtime/lib/RelayReader.js").read(source, selector).data;
  if (true) {
    var deepFreeze = __webpack_require__("./node_modules/relay-runtime/lib/deepFreeze.js");
    if (selectorData) {
      deepFreeze(selectorData);
    }
  }
  return selectorData;
}

module.exports = RelayPublishQueue;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayQueryResponseCache.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * A cache for storing query responses, featuring:
 * - `get` with TTL
 * - cache size limiting, with least-recently *updated* entries purged first
 */
var RelayQueryResponseCache = function () {
  function RelayQueryResponseCache(_ref) {
    var size = _ref.size,
        ttl = _ref.ttl;
    (0, _classCallCheck3['default'])(this, RelayQueryResponseCache);

    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(size > 0, 'RelayQueryResponseCache: Expected the max cache size to be > 0, got ' + '`%s`.', size);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(ttl > 0, 'RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.', ttl);
    this._responses = new Map();
    this._size = size;
    this._ttl = ttl;
  }

  RelayQueryResponseCache.prototype.clear = function clear() {
    this._responses.clear();
  };

  RelayQueryResponseCache.prototype.get = function get(queryID, variables) {
    var _this = this;

    var cacheKey = getCacheKey(queryID, variables);
    this._responses.forEach(function (response, key) {
      if (!isCurrent(response.fetchTime, _this._ttl)) {
        _this._responses['delete'](key);
      }
    });
    var response = this._responses.get(cacheKey);
    return response != null ? response.payload : null;
  };

  RelayQueryResponseCache.prototype.set = function set(queryID, variables, payload) {
    var fetchTime = Date.now();
    var cacheKey = getCacheKey(queryID, variables);
    this._responses['delete'](cacheKey); // deletion resets key ordering
    this._responses.set(cacheKey, {
      fetchTime: fetchTime,
      payload: payload
    });
    // Purge least-recently updated key when max size reached
    if (this._responses.size > this._size) {
      var firstKey = this._responses.keys().next();
      if (!firstKey.done) {
        this._responses['delete'](firstKey.value);
      }
    }
  };

  return RelayQueryResponseCache;
}();

function getCacheKey(queryID, variables) {
  return JSON.stringify(__webpack_require__("./node_modules/relay-runtime/lib/stableCopy.js")({ queryID: queryID, variables: variables }));
}

/**
 * Determine whether a response fetched at `fetchTime` is still valid given
 * some `ttl`.
 */
function isCurrent(fetchTime, ttl) {
  return fetchTime + ttl >= Date.now();
}

module.exports = RelayQueryResponseCache;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayReader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js"));

var _extends4 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONDITION = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").CONDITION,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").DEFERRABLE_FRAGMENT_SPREAD,
    FRAGMENT_SPREAD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").FRAGMENT_SPREAD,
    INLINE_FRAGMENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_FIELD,
    SCALAR_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_FIELD;

var FRAGMENTS_KEY = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").FRAGMENTS_KEY,
    ID_KEY = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").ID_KEY,
    getArgumentValues = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getArgumentValues,
    getStorageKey = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getStorageKey;

function read(recordSource, selector) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var reader = new RelayReader(recordSource, variables);
  return reader.read(node, dataID);
}

/**
 * @private
 */

var RelayReader = function () {
  function RelayReader(recordSource, variables) {
    (0, _classCallCheck3['default'])(this, RelayReader);

    this._recordSource = recordSource;
    this._seenRecords = {};
    this._variables = variables;
  }

  RelayReader.prototype.read = function read(node, dataID) {
    var data = this._traverse(node, dataID, null);
    return {
      data: data,
      dataID: dataID,
      node: node,
      seenRecords: this._seenRecords,
      variables: this._variables
    };
  };

  RelayReader.prototype._traverse = function _traverse(node, dataID, prevData) {
    var record = this._recordSource.get(dataID);
    this._seenRecords[dataID] = record;
    if (record == null) {
      return record;
    }
    var data = prevData || {};
    this._traverseSelections(node.selections, record, data);
    return data;
  };

  RelayReader.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._variables.hasOwnProperty(name), 'RelayReader(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayReader.prototype._traverseSelections = function _traverseSelections(selections, record, data) {
    var _this = this;

    selections.forEach(function (selection) {
      if (selection.kind === SCALAR_FIELD) {
        _this._readScalar(selection, record, data);
      } else if (selection.kind === LINKED_FIELD) {
        if (selection.plural) {
          _this._readPluralLink(selection, record, data);
        } else {
          _this._readLink(selection, record, data);
        }
      } else if (selection.kind === CONDITION) {
        var conditionValue = _this._getVariableValue(selection.condition);
        if (conditionValue === selection.passingValue) {
          _this._traverseSelections(selection.selections, record, data);
        }
      } else if (selection.kind === INLINE_FRAGMENT) {
        var typeName = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record);
        if (typeName != null && typeName === selection.type) {
          _this._traverseSelections(selection.selections, record, data);
        }
      } else if (selection.kind === FRAGMENT_SPREAD) {
        _this._createFragmentPointer(selection, record, data, _this._variables);
      } else if (selection.kind === DEFERRABLE_FRAGMENT_SPREAD) {
        _this._createDeferrableFragmentPointer(selection, record, data);
      } else {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayReader(): Unexpected ast kind `%s`.', selection.kind);
      }
    });
  };

  RelayReader.prototype._readScalar = function _readScalar(field, record, data) {
    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var value = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getValue(record, storageKey);
    data[applicationName] = value;
  };

  RelayReader.prototype._readLink = function _readLink(field, record, data) {
    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      data[applicationName] = linkedID;
      return;
    }

    var prevData = data[applicationName];
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(prevData == null || typeof prevData === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), prevData);
    data[applicationName] = this._traverse(field, linkedID, prevData);
  };

  RelayReader.prototype._readPluralLink = function _readPluralLink(field, record, data) {
    var _this2 = this;

    var applicationName = field.alias || field.name;
    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      data[applicationName] = linkedIDs;
      return;
    }

    var prevData = data[applicationName];
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(prevData == null || Array.isArray(prevData), 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an array, got `%s`.', applicationName, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), prevData);
    var linkedArray = prevData || [];
    linkedIDs.forEach(function (linkedID, nextIndex) {
      if (linkedID == null) {
        linkedArray[nextIndex] = linkedID;
        return;
      }
      var prevItem = linkedArray[nextIndex];
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(prevItem == null || typeof prevItem === 'object', 'RelayReader(): Expected data for field `%s` on record `%s` ' + 'to be an object, got `%s`.', applicationName, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), prevItem);
      var linkedItem = _this2._traverse(field, linkedID, prevItem);
      linkedArray[nextIndex] = linkedItem;
    });
    data[applicationName] = linkedArray;
  };

  RelayReader.prototype._createFragmentPointer = function _createFragmentPointer(fragmentSpread, record, data, variables) {
    var fragmentPointers = data[FRAGMENTS_KEY];
    if (!fragmentPointers) {
      fragmentPointers = data[FRAGMENTS_KEY] = {};
    }
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof fragmentPointers === 'object' && fragmentPointers, 'RelayReader: Expected fragment spread data to be an object, got `%s`.', fragmentPointers);
    data[ID_KEY] = data[ID_KEY] || __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record);
    fragmentPointers[fragmentSpread.name] = fragmentSpread.args ? getArgumentValues(fragmentSpread.args, variables) : {};
  };

  RelayReader.prototype._createDeferrableFragmentPointer = function _createDeferrableFragmentPointer(deferrableFragment, record, data) {
    var rootFieldValue = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getValue(record, deferrableFragment.storageKey);
    var variables = (0, _extends4['default'])({}, this._variables, (0, _defineProperty3['default'])({}, deferrableFragment.rootFieldVariable, rootFieldValue));
    this._createFragmentPointer(deferrableFragment, record, data, variables);
  };

  return RelayReader;
}();

module.exports = { read: read };

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRecordProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    getStableStorageKey = _require.getStableStorageKey;

/**
 * @internal
 *
 * A helper class for manipulating a given record from a record source via an
 * imperative/OO-style API.
 */
var RelayRecordProxy = function () {
  function RelayRecordProxy(source, mutator, dataID) {
    (0, _classCallCheck3['default'])(this, RelayRecordProxy);

    this._dataID = dataID;
    this._mutator = mutator;
    this._source = source;
  }

  RelayRecordProxy.prototype.copyFieldsFrom = function copyFieldsFrom(source) {
    this._mutator.copyFields(source.getDataID(), this._dataID);
  };

  RelayRecordProxy.prototype.getDataID = function getDataID() {
    return this._dataID;
  };

  RelayRecordProxy.prototype.getType = function getType() {
    var type = this._mutator.getType(this._dataID);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(type != null, 'RelayRecordProxy: Cannot get the type of deleted record `%s`.', this._dataID);
    return type;
  };

  RelayRecordProxy.prototype.getValue = function getValue(name, args) {
    var storageKey = getStableStorageKey(name, args);
    return this._mutator.getValue(this._dataID, storageKey);
  };

  RelayRecordProxy.prototype.setValue = function setValue(value, name, args) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(isValidLeafValue(value), 'RelayRecordProxy#setValue(): Expected a scalar or array of scalars, ' + 'got `%s`.', JSON.stringify(value));
    var storageKey = getStableStorageKey(name, args);
    this._mutator.setValue(this._dataID, storageKey, value);
    return this;
  };

  RelayRecordProxy.prototype.getLinkedRecord = function getLinkedRecord(name, args) {
    var storageKey = getStableStorageKey(name, args);
    var linkedID = this._mutator.getLinkedRecordID(this._dataID, storageKey);
    return linkedID != null ? this._source.get(linkedID) : linkedID;
  };

  RelayRecordProxy.prototype.setLinkedRecord = function setLinkedRecord(record, name, args) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(record instanceof RelayRecordProxy, 'RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.', record);
    var storageKey = getStableStorageKey(name, args);
    var linkedID = record.getDataID();
    this._mutator.setLinkedRecordID(this._dataID, storageKey, linkedID);
    return this;
  };

  RelayRecordProxy.prototype.getOrCreateLinkedRecord = function getOrCreateLinkedRecord(name, typeName, args) {
    var linkedRecord = this.getLinkedRecord(name, args);
    if (!linkedRecord) {
      var storageKey = getStableStorageKey(name, args);
      var clientID = __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(this.getDataID(), storageKey);
      linkedRecord = this._source.create(clientID, typeName);
      this.setLinkedRecord(linkedRecord, name, args);
    }
    return linkedRecord;
  };

  RelayRecordProxy.prototype.getLinkedRecords = function getLinkedRecords(name, args) {
    var _this = this;

    var storageKey = getStableStorageKey(name, args);
    var linkedIDs = this._mutator.getLinkedRecordIDs(this._dataID, storageKey);
    if (linkedIDs == null) {
      return linkedIDs;
    }
    return linkedIDs.map(function (linkedID) {
      return linkedID != null ? _this._source.get(linkedID) : linkedID;
    });
  };

  RelayRecordProxy.prototype.setLinkedRecords = function setLinkedRecords(records, name, args) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(records), 'RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.', records);
    var storageKey = getStableStorageKey(name, args);
    var linkedIDs = records.map(function (record) {
      return record && record.getDataID();
    });
    this._mutator.setLinkedRecordIDs(this._dataID, storageKey, linkedIDs);
    return this;
  };

  return RelayRecordProxy;
}();

function isValidLeafValue(value) {
  return value == null || typeof value !== 'object' || Array.isArray(value) && value.every(isValidLeafValue);
}

module.exports = RelayRecordProxy;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRecordSourceMutator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js"),
    EXISTENT = _require.EXISTENT;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    UNPUBLISH_FIELD_SENTINEL = _require2.UNPUBLISH_FIELD_SENTINEL,
    UNPUBLISH_RECORD_SENTINEL = _require2.UNPUBLISH_RECORD_SENTINEL;

/**
 * @internal
 *
 * Wrapper API that is an amalgam of the `RelayModernRecord` API and
 * `MutableRecordSource` interface, implementing copy-on-write semantics for
 * records in a record source. If a `backup` is supplied, the mutator will
 * ensure that the backup contains sufficient information to revert all
 * modifications by publishing the backup.
 *
 * Modifications are applied to fresh copies of records with optional backups
 * created:
 * - Records in `base` are never modified.
 * - Modifications cause a fresh version of a record to be created in `sink`.
 *   These sink records contain only modified fields.
 * - If a `backup` is supplied, any modifications to a record will cause the
 *   sink version of the record to be added to the backup.
 * - Creation of a record causes a sentinel object to be added to the backup
 *   so that the new record can be removed from the store by publishing the
 *   backup.
 */
var RelayRecordSourceMutator = function () {
  function RelayRecordSourceMutator(base, sink, backup) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceMutator);

    this._backup = backup;
    this._base = base;
    this._sink = sink;
    this.__sources = [sink, base];
  }

  RelayRecordSourceMutator.prototype._createBackupRecord = function _createBackupRecord(dataID) {
    var backup = this._backup;
    if (backup && !backup.has(dataID)) {
      var baseRecord = this._base.get(dataID);
      if (baseRecord != null) {
        backup.set(dataID, baseRecord);
      } else if (baseRecord === null) {
        backup['delete'](dataID);
      }
    }
  };

  RelayRecordSourceMutator.prototype._setSentinelFieldsInBackupRecord = function _setSentinelFieldsInBackupRecord(dataID, record) {
    var backup = this._backup;
    if (backup) {
      var backupRecord = backup.get(dataID);
      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL) {
        var copy = null;
        for (var key in record) {
          if (record.hasOwnProperty(key)) {
            if (!(key in backupRecord)) {
              copy = copy || (0, _extends3['default'])({}, backupRecord);
              copy[key] = UNPUBLISH_FIELD_SENTINEL;
            }
          }
        }
        backup.set(dataID, copy || backupRecord);
      }
    }
  };

  RelayRecordSourceMutator.prototype._setSentinelFieldInBackupRecord = function _setSentinelFieldInBackupRecord(dataID, storageKey) {
    var backup = this._backup;
    if (backup) {
      var backupRecord = backup.get(dataID);
      if (backupRecord && backupRecord !== UNPUBLISH_RECORD_SENTINEL && !(storageKey in backupRecord)) {
        var copy = (0, _extends3['default'])({}, backupRecord);
        __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setValue(copy, storageKey, UNPUBLISH_FIELD_SENTINEL);
        backup.set(dataID, copy);
      }
    }
  };

  RelayRecordSourceMutator.prototype._getSinkRecord = function _getSinkRecord(dataID) {
    var sinkRecord = this._sink.get(dataID);
    if (!sinkRecord) {
      var baseRecord = this._base.get(dataID);
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(baseRecord, 'RelayRecordSourceMutator: Cannot modify non-existent record `%s`.', dataID);
      sinkRecord = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").create(dataID, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(baseRecord));
      this._sink.set(dataID, sinkRecord);
    }
    return sinkRecord;
  };

  RelayRecordSourceMutator.prototype.copyFields = function copyFields(sourceID, sinkID) {
    var sinkSource = this._sink.get(sourceID);
    var baseSource = this._base.get(sourceID);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(sinkSource || baseSource, 'RelayRecordSourceMutator#copyFields(): Cannot copy fields from ' + 'non-existent record `%s`.', sourceID);
    this._createBackupRecord(sinkID);
    var sink = this._getSinkRecord(sinkID);
    if (baseSource) {
      __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").copyFields(baseSource, sink);
    }
    if (sinkSource) {
      __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").copyFields(sinkSource, sink);
    }
    this._setSentinelFieldsInBackupRecord(sinkID, sink);
  };

  RelayRecordSourceMutator.prototype.copyFieldsFromRecord = function copyFieldsFromRecord(record, sinkID) {
    this.copyFields(__webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), sinkID);
    var sink = this._getSinkRecord(sinkID);
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").copyFields(record, sink);
    this._setSentinelFieldsInBackupRecord(sinkID, sink);
  };

  RelayRecordSourceMutator.prototype.create = function create(dataID, typeName) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._base.getStatus(dataID) !== EXISTENT && this._sink.getStatus(dataID) !== EXISTENT, 'RelayRecordSourceMutator#create(): Cannot create a record with id ' + '`%s`, this record already exists.', dataID);
    if (this._backup) {
      this._backup.set(dataID, UNPUBLISH_RECORD_SENTINEL);
    }
    var record = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").create(dataID, typeName);
    this._sink.set(dataID, record);
  };

  RelayRecordSourceMutator.prototype['delete'] = function _delete(dataID) {
    this._createBackupRecord(dataID);
    this._sink['delete'](dataID);
  };

  RelayRecordSourceMutator.prototype.getStatus = function getStatus(dataID) {
    return this._sink.has(dataID) ? this._sink.getStatus(dataID) : this._base.getStatus(dataID);
  };

  RelayRecordSourceMutator.prototype.getType = function getType(dataID) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        return __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record);
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.getValue = function getValue(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var value = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getValue(record, storageKey);
        if (value !== undefined) {
          return value;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setValue = function setValue(dataID, storageKey, value) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setValue(sinkRecord, storageKey, value);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  RelayRecordSourceMutator.prototype.getLinkedRecordID = function getLinkedRecordID(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var linkedID = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordID(record, storageKey);
        if (linkedID !== undefined) {
          return linkedID;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setLinkedRecordID = function setLinkedRecordID(dataID, storageKey, linkedID) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setLinkedRecordID(sinkRecord, storageKey, linkedID);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  RelayRecordSourceMutator.prototype.getLinkedRecordIDs = function getLinkedRecordIDs(dataID, storageKey) {
    for (var ii = 0; ii < this.__sources.length; ii++) {
      var record = this.__sources[ii].get(dataID);
      if (record) {
        var linkedIDs = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordIDs(record, storageKey);
        if (linkedIDs !== undefined) {
          return linkedIDs;
        }
      } else if (record === null) {
        return null;
      }
    }
  };

  RelayRecordSourceMutator.prototype.setLinkedRecordIDs = function setLinkedRecordIDs(dataID, storageKey, linkedIDs) {
    this._createBackupRecord(dataID);
    var sinkRecord = this._getSinkRecord(dataID);
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setLinkedRecordIDs(sinkRecord, storageKey, linkedIDs);
    this._setSentinelFieldInBackupRecord(dataID, storageKey);
  };

  return RelayRecordSourceMutator;
}();

module.exports = RelayRecordSourceMutator;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRecordSourceProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayRecordState.js"),
    EXISTENT = _require.EXISTENT,
    NONEXISTENT = _require.NONEXISTENT;

var _require2 = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ROOT_ID = _require2.ROOT_ID,
    ROOT_TYPE = _require2.ROOT_TYPE;

/**
 * @internal
 *
 * A helper for manipulating a `RecordSource` via an imperative/OO-style API.
 */
var RelayRecordSourceProxy = function () {
  function RelayRecordSourceProxy(mutator, handlerProvider) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceProxy);

    this.__mutator = mutator;
    this._handlerProvider = handlerProvider || null;
    this._proxies = {};
  }

  RelayRecordSourceProxy.prototype.publishSource = function publishSource(source, fieldPayloads) {
    var _this = this;

    var dataIDs = source.getRecordIDs();
    dataIDs.forEach(function (dataID) {
      var status = source.getStatus(dataID);
      if (status === EXISTENT) {
        var sourceRecord = source.get(dataID);
        if (sourceRecord) {
          if (_this.__mutator.getStatus(dataID) !== EXISTENT) {
            _this.create(dataID, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(sourceRecord));
          }
          _this.__mutator.copyFieldsFromRecord(sourceRecord, dataID);
          delete _this._proxies[dataID];
        }
      } else if (status === NONEXISTENT) {
        _this['delete'](dataID);
      }
    });

    if (fieldPayloads && fieldPayloads.length) {
      fieldPayloads.forEach(function (fieldPayload) {
        var handler = _this._handlerProvider && _this._handlerProvider(fieldPayload.handle);
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(handler, 'RelayModernEnvironment: Expected a handler to be provided for handle `%s`.', fieldPayload.handle);
        handler.update(_this, fieldPayload);
      });
    }
  };

  RelayRecordSourceProxy.prototype.commitPayload = function commitPayload(operation, response) {
    if (!response) {
      return new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceSelectorProxy.js"))(this, operation.fragment);
    }

    var _normalizeRelayPayloa = __webpack_require__("./node_modules/relay-runtime/lib/normalizeRelayPayload.js")(operation.root, response),
        source = _normalizeRelayPayloa.source,
        fieldPayloads = _normalizeRelayPayloa.fieldPayloads;

    this.publishSource(source, fieldPayloads);
    return new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordSourceSelectorProxy.js"))(this, operation.fragment);
  };

  RelayRecordSourceProxy.prototype.create = function create(dataID, typeName) {
    this.__mutator.create(dataID, typeName);
    delete this._proxies[dataID];
    var record = this.get(dataID);
    // For flow
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(record, 'RelayRecordSourceProxy#create(): Expected the created record to exist.');
    return record;
  };

  RelayRecordSourceProxy.prototype['delete'] = function _delete(dataID) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(dataID !== ROOT_ID, 'RelayRecordSourceProxy#delete(): Cannot delete the root record.');
    delete this._proxies[dataID];
    this.__mutator['delete'](dataID);
  };

  RelayRecordSourceProxy.prototype.get = function get(dataID) {
    if (!this._proxies.hasOwnProperty(dataID)) {
      var status = this.__mutator.getStatus(dataID);
      if (status === EXISTENT) {
        this._proxies[dataID] = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayRecordProxy.js"))(this, this.__mutator, dataID);
      } else {
        this._proxies[dataID] = status === NONEXISTENT ? null : undefined;
      }
    }
    return this._proxies[dataID];
  };

  RelayRecordSourceProxy.prototype.getRoot = function getRoot() {
    var root = this.get(ROOT_ID);
    if (!root) {
      root = this.create(ROOT_ID, ROOT_TYPE);
    }
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(root && root.getType() === ROOT_TYPE, 'RelayRecordSourceProxy#getRoot(): Expected the source to contain a ' + 'root record.');
    return root;
  };

  return RelayRecordSourceProxy;
}();

module.exports = RelayRecordSourceProxy;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRecordSourceSelectorProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    getStorageKey = _require.getStorageKey;

/**
 * @internal
 *
 * A subclass of RecordSourceProxy that provides convenience methods for
 * accessing the root fields of a given query/mutation. These fields accept
 * complex arguments and it can be tedious to re-construct the correct sets of
 * arguments to pass to e.g. `getRoot().getLinkedRecord()`.
 */
var RelayRecordSourceSelectorProxy = function () {
  function RelayRecordSourceSelectorProxy(recordSource, readSelector) {
    (0, _classCallCheck3['default'])(this, RelayRecordSourceSelectorProxy);

    this.__recordSource = recordSource;
    this._readSelector = readSelector;
  }

  RelayRecordSourceSelectorProxy.prototype.create = function create(dataID, typeName) {
    return this.__recordSource.create(dataID, typeName);
  };

  RelayRecordSourceSelectorProxy.prototype['delete'] = function _delete(dataID) {
    this.__recordSource['delete'](dataID);
  };

  RelayRecordSourceSelectorProxy.prototype.get = function get(dataID) {
    return this.__recordSource.get(dataID);
  };

  RelayRecordSourceSelectorProxy.prototype.getRoot = function getRoot() {
    return this.__recordSource.getRoot();
  };

  RelayRecordSourceSelectorProxy.prototype._getRootField = function _getRootField(selector, fieldName, plural) {
    var field = selector.node.selections.find(function (selection) {
      return selection.kind === 'LinkedField' && selection.name === fieldName;
    });
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(field && field.kind === 'LinkedField', 'RelayRecordSourceSelectorProxy#getRootField(): Cannot find root ' + 'field `%s`, no such field is defined on GraphQL document `%s`.', fieldName, selector.node.name);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(field.plural === plural, 'RelayRecordSourceSelectorProxy#getRootField(): Expected root field ' + '`%s` to be %s.', fieldName, plural ? 'plural' : 'singular');
    return field;
  };

  RelayRecordSourceSelectorProxy.prototype.getRootField = function getRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, false);
    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getRoot().getLinkedRecord(storageKey);
  };

  RelayRecordSourceSelectorProxy.prototype.getPluralRootField = function getPluralRootField(fieldName) {
    var field = this._getRootField(this._readSelector, fieldName, true);
    var storageKey = getStorageKey(field, this._readSelector.variables);
    return this.getRoot().getLinkedRecords(storageKey);
  };

  return RelayRecordSourceSelectorProxy;
}();

module.exports = RelayRecordSourceSelectorProxy;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRecordState.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var RelayRecordState = {
  /**
   * Record exists (either fetched from the server or produced by a local,
   * optimistic update).
   */
  EXISTENT: 'EXISTENT',

  /**
   * Record is known not to exist (either as the result of a mutation, or
   * because the server returned `null` when queried for the record).
   */
  NONEXISTENT: 'NONEXISTENT',

  /**
   * Record State is unknown because it has not yet been fetched from the
   * server.
   */
  UNKNOWN: 'UNKNOWN'
};

module.exports = RelayRecordState;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayReferenceMarker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONDITION = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").CONDITION,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").DEFERRABLE_FRAGMENT_SPREAD,
    FRAGMENT_SPREAD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").FRAGMENT_SPREAD,
    INLINE_FRAGMENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_FIELD,
    SCALAR_HANDLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_HANDLE;

var getStorageKey = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getStorageKey;

function mark(recordSource, selector, references) {
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var marker = new RelayReferenceMarker(recordSource, variables, references);
  marker.mark(node, dataID);
}

/**
 * @private
 */

var RelayReferenceMarker = function () {
  function RelayReferenceMarker(recordSource, variables, references) {
    (0, _classCallCheck3['default'])(this, RelayReferenceMarker);

    this._references = references;
    this._recordSource = recordSource;
    this._variables = variables;
  }

  RelayReferenceMarker.prototype.mark = function mark(node, dataID) {
    this._traverse(node, dataID);
  };

  RelayReferenceMarker.prototype._traverse = function _traverse(node, dataID) {
    this._references.add(dataID);
    var record = this._recordSource.get(dataID);
    if (record == null) {
      return;
    }
    this._traverseSelections(node.selections, record);
  };

  RelayReferenceMarker.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._variables.hasOwnProperty(name), 'RelayReferenceMarker(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayReferenceMarker.prototype._traverseSelections = function _traverseSelections(selections, record) {
    var _this = this;

    selections.forEach(function (selection) {
      /* eslint-disable no-fallthrough */
      switch (selection.kind) {
        case LINKED_FIELD:
          if (selection.plural) {
            _this._traversePluralLink(selection, record);
          } else {
            _this._traverseLink(selection, record);
          }
          break;
        case CONDITION:
          var conditionValue = _this._getVariableValue(selection.condition);
          if (conditionValue === selection.passingValue) {
            _this._traverseSelections(selection.selections, record);
          }
          break;
        case INLINE_FRAGMENT:
          var typeName = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record);
          if (typeName != null && typeName === selection.type) {
            _this._traverseSelections(selection.selections, record);
          }
          break;
        case FRAGMENT_SPREAD:
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayReferenceMarker(): Unexpected fragment spread `...%s`, ' + 'expected all fragments to be inlined.', selection.name);
        case LINKED_HANDLE:
          // The selections for a "handle" field are the same as those of the
          // original linked field where the handle was applied. Reference marking
          // therefore requires traversing the original field selections against
          // the synthesized client field.
          //
          // TODO: Instead of finding the source field in `selections`, change
          // the concrete structure to allow shared subtrees, and have the linked
          // handle directly refer to the same selections as the LinkedField that
          // it was split from.
          var handleField = __webpack_require__("./node_modules/relay-runtime/lib/cloneRelayHandleSourceField.js")(selection, selections, _this._variables);
          if (handleField.plural) {
            _this._traversePluralLink(handleField, record);
          } else {
            _this._traverseLink(handleField, record);
          }
          break;
        case SCALAR_FIELD:
        case SCALAR_HANDLE:
        case DEFERRABLE_FRAGMENT_SPREAD:
          break;
        default:
          selection;
          __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayReferenceMarker: Unknown AST node `%s`.', selection);
      }
    });
  };

  RelayReferenceMarker.prototype._traverseLink = function _traverseLink(field, record) {
    var storageKey = getStorageKey(field, this._variables);
    var linkedID = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordID(record, storageKey);

    if (linkedID == null) {
      return;
    }
    this._traverse(field, linkedID);
  };

  RelayReferenceMarker.prototype._traversePluralLink = function _traversePluralLink(field, record) {
    var _this2 = this;

    var storageKey = getStorageKey(field, this._variables);
    var linkedIDs = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordIDs(record, storageKey);

    if (linkedIDs == null) {
      return;
    }
    linkedIDs.forEach(function (linkedID) {
      if (linkedID != null) {
        _this2._traverse(field, linkedID);
      }
    });
  };

  return RelayReferenceMarker;
}();

module.exports = { mark: mark };

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayResponseNormalizer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _defineProperty3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js"));

var _extends4 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

var _classCallCheck3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    getArgumentValues = _require.getArgumentValues,
    getHandleStorageKey = _require.getHandleStorageKey,
    getStorageKey = _require.getStorageKey,
    TYPENAME_KEY = _require.TYPENAME_KEY;

var CONDITION = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").CONDITION,
    INLINE_FRAGMENT = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").INLINE_FRAGMENT,
    LINKED_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_FIELD,
    LINKED_HANDLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_HANDLE,
    SCALAR_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_FIELD,
    SCALAR_HANDLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").SCALAR_HANDLE,
    DEFERRABLE_FRAGMENT_SPREAD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").DEFERRABLE_FRAGMENT_SPREAD;

/**
 * Normalizes the results of a query and standard GraphQL response, writing the
 * normalized records/fields into the given MutableRecordSource.
 *
 * If handleStrippedNulls is true, will replace fields on the Selector that
 * are not present in the response with null. Otherwise will leave fields unset.
 */
function normalize(recordSource, selector, response) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };
  var dataID = selector.dataID,
      node = selector.node,
      variables = selector.variables;

  var normalizer = new RelayResponseNormalizer(recordSource, variables, options);
  return normalizer.normalizeResponse(node, dataID, response);
}

/**
 * @private
 *
 * Helper for handling payloads.
 */

var RelayResponseNormalizer = function () {
  function RelayResponseNormalizer(recordSource, variables, options) {
    (0, _classCallCheck3['default'])(this, RelayResponseNormalizer);
    this._handleFieldPayloads = [];
    this._deferrableSelections = new Set();

    this._recordSource = recordSource;
    this._variables = variables;
    this._handleStrippedNulls = options.handleStrippedNulls;
  }

  RelayResponseNormalizer.prototype.normalizeResponse = function normalizeResponse(node, dataID, data) {
    var record = this._recordSource.get(dataID);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(record, 'RelayResponseNormalizer(): Expected root record `%s` to exist.', dataID);
    this._traverseSelections(node, record, data);
    return {
      fieldPayloads: this._handleFieldPayloads,
      deferrableSelections: this._deferrableSelections
    };
  };

  RelayResponseNormalizer.prototype._getVariableValue = function _getVariableValue(name) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(this._variables.hasOwnProperty(name), 'RelayResponseNormalizer(): Undefined variable `%s`.', name);
    return this._variables[name];
  };

  RelayResponseNormalizer.prototype._getRecordType = function _getRecordType(data) {
    var typeName = data[TYPENAME_KEY];
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeName != null, 'RelayResponseNormalizer(): Expected a typename for record `%s`.', JSON.stringify(data, null, 2));
    return typeName;
  };

  RelayResponseNormalizer.prototype._traverseSelections = function _traverseSelections(node, record, data) {
    var _this = this;

    node.selections.forEach(function (selection) {
      if (selection.kind === SCALAR_FIELD || selection.kind === LINKED_FIELD) {
        _this._normalizeField(node, selection, record, data);
      } else if (selection.kind === CONDITION) {
        var conditionValue = _this._getVariableValue(selection.condition);
        if (conditionValue === selection.passingValue) {
          _this._traverseSelections(selection, record, data);
        }
      } else if (selection.kind === INLINE_FRAGMENT) {
        var typeName = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record);
        if (typeName === selection.type) {
          _this._traverseSelections(selection, record, data);
        }
      } else if (selection.kind === LINKED_HANDLE || selection.kind === SCALAR_HANDLE) {
        var args = selection.args ? getArgumentValues(selection.args, _this._variables) : {};
        var fieldKey = getStorageKey(selection, _this._variables);
        var handleKey = getHandleStorageKey(selection, _this._variables);
        _this._handleFieldPayloads.push({
          args: args,
          dataID: __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record),
          fieldKey: fieldKey,
          handle: selection.handle,
          handleKey: handleKey
        });
      } else if (selection.kind === DEFERRABLE_FRAGMENT_SPREAD) {
        var dataID = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record);
        var value = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getValue(record, selection.storageKey);
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof value === 'string', 'expected ID at %s', selection.storageKey);
        var variables = selection.args ? getArgumentValues(selection.args, (0, _extends4['default'])({}, _this._variables, (0, _defineProperty3['default'])({}, selection.rootFieldVariable, value))) : {};
        var key = __webpack_require__("./node_modules/relay-runtime/lib/deferrableFragmentKey.js")(dataID, selection.name, variables);
        _this._deferrableSelections.add(key);
      } else {
        __webpack_require__("./node_modules/fbjs/lib/invariant.js")(false, 'RelayResponseNormalizer(): Unexpected ast kind `%s`.', selection.kind);
      }
    });
  };

  RelayResponseNormalizer.prototype._normalizeField = function _normalizeField(parent, selection, record, data) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof data === 'object' && data, 'writeField(): Expected data for field `%s` to be an object.', selection.name);
    var responseKey = selection.alias || selection.name;
    var storageKey = getStorageKey(selection, this._variables);
    var fieldValue = data[responseKey];
    if (fieldValue == null) {
      if (fieldValue === undefined && !this._handleStrippedNulls) {
        // If we're not stripping nulls, undefined fields are unset
        return;
      }
      if (true) {
        __webpack_require__("./node_modules/fbjs/lib/warning.js")(parent.kind === LINKED_FIELD && parent.concreteType == null ? true : Object.prototype.hasOwnProperty.call(data, responseKey), 'RelayResponseNormalizer(): Payload did not contain a value ' + 'for field `%s: %s`. Check that you are parsing with the same ' + 'query that was used to fetch the payload.', responseKey, storageKey);
      }
      __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setValue(record, storageKey, null);
      return;
    }

    if (selection.kind === SCALAR_FIELD) {
      __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setValue(record, storageKey, fieldValue);
    } else if (selection.plural) {
      this._normalizePluralLink(selection, record, storageKey, fieldValue);
    } else {
      this._normalizeLink(selection, record, storageKey, fieldValue);
    }
  };

  RelayResponseNormalizer.prototype._normalizeLink = function _normalizeLink(field, record, storageKey, fieldValue) {
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof fieldValue === 'object' && fieldValue, 'RelayResponseNormalizer: Expected data for field `%s` to be an object.', storageKey);
    var nextID = fieldValue.id ||
    // Reuse previously generated client IDs
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordID(record, storageKey) || __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(__webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), storageKey);
    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id on field `%s` to be a string.', storageKey);
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setLinkedRecordID(record, storageKey, nextID);
    var nextRecord = this._recordSource.get(nextID);
    if (!nextRecord) {
      var typeName = field.concreteType || this._getRecordType(fieldValue);
      nextRecord = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").create(nextID, typeName);
      this._recordSource.set(nextID, nextRecord);
    } else if (true) {
      this._validateRecordType(nextRecord, field, fieldValue);
    }
    this._traverseSelections(field, nextRecord, fieldValue);
  };

  RelayResponseNormalizer.prototype._normalizePluralLink = function _normalizePluralLink(field, record, storageKey, fieldValue) {
    var _this2 = this;

    __webpack_require__("./node_modules/fbjs/lib/invariant.js")(Array.isArray(fieldValue), 'RelayResponseNormalizer: Expected data for field `%s` to be an array ' + 'of objects.', storageKey);
    var prevIDs = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getLinkedRecordIDs(record, storageKey);
    var nextIDs = [];
    fieldValue.forEach(function (item, nextIndex) {
      // validate response data
      if (item == null) {
        nextIDs.push(item);
        return;
      }
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof item === 'object', 'RelayResponseNormalizer: Expected elements for field `%s` to be ' + 'objects.', storageKey);

      var nextID = item.id || prevIDs && prevIDs[nextIndex] || // Reuse previously generated client IDs
      __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(__webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), storageKey, nextIndex);
      __webpack_require__("./node_modules/fbjs/lib/invariant.js")(typeof nextID === 'string', 'RelayResponseNormalizer: Expected id of elements of field `%s` to ' + 'be strings.', storageKey);

      nextIDs.push(nextID);
      var nextRecord = _this2._recordSource.get(nextID);
      if (!nextRecord) {
        var typeName = field.concreteType || _this2._getRecordType(item);
        nextRecord = __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").create(nextID, typeName);
        _this2._recordSource.set(nextID, nextRecord);
      } else if (true) {
        _this2._validateRecordType(nextRecord, field, item);
      }
      _this2._traverseSelections(field, nextRecord, item);
    });
    __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").setLinkedRecordIDs(record, storageKey, nextIDs);
  };

  /**
   * Warns if the type of the record does not match the type of the field/payload.
   */


  RelayResponseNormalizer.prototype._validateRecordType = function _validateRecordType(record, field, payload) {
    var typeName = field.concreteType || this._getRecordType(payload);
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(__webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record) === typeName, 'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be ' + 'be consistent, but the record was assigned conflicting types `%s` ' + 'and `%s`. The GraphQL server likely violated the globally unique ' + 'id requirement by returning the same id for different objects.', __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getDataID(record), TYPENAME_KEY, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").getType(record), typeName);
  };

  return RelayResponseNormalizer;
}();

// eslint-disable-next-line no-func-assign


normalize = __webpack_require__("./node_modules/relay-runtime/lib/RelayProfiler.js").instrument('RelayResponseNormalizer.normalize', normalize);

module.exports = { normalize: normalize };

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayRuntime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



// As early as possible, check for the existence of the JavaScript globals which
// Relay Runtime relies upon, and produce a clear message if they do not exist.
if (true) {
  if (typeof Map !== 'function' || typeof Set !== 'function' || typeof Promise !== 'function' || typeof Object.assign !== 'function') {
    throw new Error('relay-runtime requires Map, Set, Promise, and Object.assign to exist. ' + 'Use a polyfill to provide these for older browsers.');
  }
}

/**
 * The public interface to Relay Runtime.
 */
module.exports = {
  // Core API
  Environment: __webpack_require__("./node_modules/relay-runtime/lib/RelayModernEnvironment.js"),
  Network: __webpack_require__("./node_modules/relay-runtime/lib/RelayNetwork.js"),
  Observable: __webpack_require__("./node_modules/relay-runtime/lib/RelayObservable.js"),
  QueryResponseCache: __webpack_require__("./node_modules/relay-runtime/lib/RelayQueryResponseCache.js"),
  RecordSource: __webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"),
  Store: __webpack_require__("./node_modules/relay-runtime/lib/RelayMarkSweepStore.js"),

  areEqualSelectors: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").areEqualSelectors,
  createFragmentSpecResolver: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").createFragmentSpecResolver,
  createOperationSelector: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").createOperationSelector,
  getDataIDsFromObject: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").getDataIDsFromObject,
  getFragment: __webpack_require__("./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js").getFragment,
  getRequest: __webpack_require__("./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js").getRequest,
  // TODO (T23201154) remove in a future Relay release.
  getOperation: function getOperation() {
    if (true) {
      __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'getOperation() deprecated. Use getRequest().');
    }
    return __webpack_require__("./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js").getRequest.apply(null, arguments);
  },
  getSelector: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").getSelector,
  getSelectorList: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").getSelectorList,
  getSelectorsFromObject: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").getSelectorsFromObject,
  getStorageKey: __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").getStorageKey,
  getVariablesFromObject: __webpack_require__("./node_modules/relay-runtime/lib/RelayCore.js").getVariablesFromObject,
  graphql: __webpack_require__("./node_modules/relay-runtime/lib/RelayModernGraphQLTag.js").graphql,

  // Declarative mutation API
  MutationTypes: __webpack_require__("./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js").MutationTypes,
  RangeOperations: __webpack_require__("./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js").RangeOperations,

  // Extensions
  ConnectionHandler: __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionHandler.js"),
  ViewerHandler: __webpack_require__("./node_modules/relay-runtime/lib/RelayViewerHandler.js"),

  // Helpers (can be implemented via the above API)
  applyOptimisticMutation: __webpack_require__("./node_modules/relay-runtime/lib/applyRelayModernOptimisticMutation.js"),
  commitLocalUpdate: __webpack_require__("./node_modules/relay-runtime/lib/commitLocalUpdate.js"),
  commitMutation: __webpack_require__("./node_modules/relay-runtime/lib/commitRelayModernMutation.js"),
  fetchQuery: __webpack_require__("./node_modules/relay-runtime/lib/fetchRelayModernQuery.js"),
  isRelayModernEnvironment: __webpack_require__("./node_modules/relay-runtime/lib/isRelayModernEnvironment.js"),
  requestSubscription: __webpack_require__("./node_modules/relay-runtime/lib/requestRelaySubscription.js"),

  // Configuration interface for legacy or special uses
  ConnectionInterface: __webpack_require__("./node_modules/relay-runtime/lib/RelayConnectionInterface.js"),

  // Utilities
  RelayProfiler: __webpack_require__("./node_modules/relay-runtime/lib/RelayProfiler.js"),

  // INTERNAL-ONLY: These exports might be removed at any point.
  RelayConcreteNode: __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js"),
  DEFAULT_HANDLE_KEY: __webpack_require__("./node_modules/relay-runtime/lib/RelayDefaultHandleKey.js").DEFAULT_HANDLE_KEY,
  ROOT_ID: __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js").ROOT_ID,

  deepFreeze: __webpack_require__("./node_modules/relay-runtime/lib/deepFreeze.js"),
  getRelayHandleKey: __webpack_require__("./node_modules/relay-runtime/lib/getRelayHandleKey.js"),
  isScalarAndEqual: __webpack_require__("./node_modules/relay-runtime/lib/isScalarAndEqual.js"),
  recycleNodesInto: __webpack_require__("./node_modules/relay-runtime/lib/recycleNodesInto.js"),
  simpleClone: __webpack_require__("./node_modules/relay-runtime/lib/simpleClone.js"),
  stableCopy: __webpack_require__("./node_modules/relay-runtime/lib/stableCopy.js")
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayStoreUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var VARIABLE = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").VARIABLE;

/**
 * Returns the values of field/fragment arguments as an object keyed by argument
 * names. Guaranteed to return a result with stable ordered nested values.
 */


function getArgumentValues(args, variables) {
  var values = {};
  args.forEach(function (arg) {
    if (arg.kind === VARIABLE) {
      // Variables are provided at runtime and are not guaranteed to be stable.
      values[arg.name] = getStableVariableValue(arg.variableName, variables);
    } else {
      // The Relay compiler generates stable ConcreteArgument values.
      values[arg.name] = arg.value;
    }
  });
  return values;
}

/**
 * Given a handle field and variable values, returns a key that can be used to
 * uniquely identify the combination of the handle name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getHandleStorageKey(handleField, variables) {
  var handle = handleField.handle,
      key = handleField.key,
      name = handleField.name,
      args = handleField.args,
      filters = handleField.filters;

  var handleName = __webpack_require__("./node_modules/relay-runtime/lib/getRelayHandleKey.js")(handle, key, name);
  if (!args || !filters || args.length === 0 || filters.length === 0) {
    return handleName;
  }
  var filterArgs = args.filter(function (arg) {
    return filters.indexOf(arg.name) > -1;
  });
  return formatStorageKey(handleName, getArgumentValues(filterArgs, variables));
}

/**
 * Given a field and variable values, returns a key that can be used to
 * uniquely identify the combination of the field name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getStorageKey(field, variables) {
  if (field.storageKey) {
    // TODO T23663664: Handle nodes do not yet define a static storageKey.
    return field.storageKey;
  }
  var args = field.args,
      name = field.name;

  return args && args.length !== 0 ? formatStorageKey(name, getArgumentValues(args, variables)) : name;
}

/**
 * Given a `name` (eg. "foo") and an object representing argument values
 * (eg. `{orberBy: "name", first: 10}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 *
 * This differs from getStorageKey which requires a ConcreteNode where arguments
 * are assumed to already be sorted into a stable order.
 */
function getStableStorageKey(name, args) {
  return formatStorageKey(name, __webpack_require__("./node_modules/relay-runtime/lib/stableCopy.js")(args));
}

/**
 * Given a name and argument values, format a storage key.
 *
 * Arguments and the values within them are expected to be ordered in a stable
 * alphabetical ordering.
 */
function formatStorageKey(name, argValues) {
  if (!argValues) {
    return name;
  }
  var values = [];
  for (var _argName in argValues) {
    if (argValues.hasOwnProperty(_argName)) {
      var value = argValues[_argName];
      if (value != null) {
        values.push(_argName + ':' + JSON.stringify(value));
      }
    }
  }
  return values.length === 0 ? name : name + ('(' + values.join(',') + ')');
}

/**
 * Given Variables and a variable name, return a variable value with
 * all values in a stable order.
 */
function getStableVariableValue(name, variables) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(variables.hasOwnProperty(name), 'getVariableValue(): Undefined variable `%s`.', name);
  return __webpack_require__("./node_modules/relay-runtime/lib/stableCopy.js")(variables[name]);
}

/**
 * Constants shared by all implementations of RecordSource/MutableRecordSource/etc.
 */
var RelayStoreUtils = {
  FRAGMENTS_KEY: '__fragments',
  ID_KEY: '__id',
  REF_KEY: '__ref',
  REFS_KEY: '__refs',
  ROOT_ID: 'client:root',
  ROOT_TYPE: '__Root',
  TYPENAME_KEY: '__typename',
  UNPUBLISH_RECORD_SENTINEL: Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: true }),
  UNPUBLISH_FIELD_SENTINEL: Object.freeze({ __UNPUBLISH_FIELD_SENTINEL: true }),

  getArgumentValues: getArgumentValues,
  getHandleStorageKey: getHandleStorageKey,
  getStorageKey: getStorageKey,
  getStableStorageKey: getStableStorageKey
};

module.exports = RelayStoreUtils;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/RelayViewerHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ROOT_ID = _require.ROOT_ID;

var VIEWER_ID = __webpack_require__("./node_modules/relay-runtime/lib/generateRelayClientID.js")(ROOT_ID, 'viewer');
var VIEWER_TYPE = 'Viewer';

/**
 * A runtime handler for the `viewer` field. The actual viewer record will
 * *never* be accessed at runtime because all fragments that reference it will
 * delegate to the handle field. So in order to prevent GC from having to check
 * both the original server field *and* the handle field (which would be almost
 * duplicate work), the handler copies server fields and then deletes the server
 * record.
 *
 * NOTE: This means other handles may not be added on viewer, since they may
 * execute after this handle when the server record is already deleted.
 */
function update(store, payload) {
  var record = store.get(payload.dataID);
  if (!record) {
    return;
  }
  var serverViewer = record.getLinkedRecord(payload.fieldKey);
  if (!serverViewer) {
    // If `serverViewer` is null, `viewer` key for `client:root` should already
    // be null, so no need to `setValue` again.
    return;
  }
  // Server data already has viewer data at `client:root:viewer`, so link the
  // handle field to the server viewer record.
  if (serverViewer.getDataID() === VIEWER_ID) {
    record.setValue(null, payload.fieldKey);
    record.setLinkedRecord(serverViewer, payload.handleKey);
    return;
  }
  // Other ways to access viewer such as mutations may have a different id for
  // viewer: synthesize a record at the canonical viewer id, copy its fields
  // from the server record, and delete the server record link to speed up GC.
  var clientViewer = store.get(VIEWER_ID) || store.create(VIEWER_ID, VIEWER_TYPE);
  clientViewer.copyFieldsFrom(serverViewer);
  record.setValue(null, payload.fieldKey);
  record.setLinkedRecord(clientViewer, payload.handleKey);

  // Make sure the root object points to the viewer object as well
  var root = store.getRoot();
  root.setLinkedRecord(clientViewer, payload.handleKey);
}

module.exports = {
  VIEWER_ID: VIEWER_ID,
  update: update
};

/***/ }),

/***/ "./node_modules/relay-runtime/lib/applyRelayModernOptimisticMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function applyRelayModernOptimisticMutation(environment, config) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(__webpack_require__("./node_modules/relay-runtime/lib/isRelayModernEnvironment.js")(environment), 'commitRelayModernMutation: expect `environment` to be an instance of ' + '`RelayModernEnvironment`.');
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var mutation = getRequest(config.mutation);
  if (mutation.operationKind !== 'mutation') {
    throw new Error('commitRelayModernMutation: Expected mutation operation');
  }
  var optimisticUpdater = config.optimisticUpdater;
  var configs = config.configs,
      optimisticResponse = config.optimisticResponse,
      variables = config.variables;

  var operation = createOperationSelector(mutation, variables);
  if (configs) {
    var _RelayDeclarativeMuta = __webpack_require__("./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js").convert(configs, mutation, optimisticUpdater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
  }

  return environment.applyUpdate({
    operation: operation,
    selectorStoreUpdater: optimisticUpdater,
    response: optimisticResponse
  });
}

module.exports = applyRelayModernOptimisticMutation;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/cloneRelayHandleSourceField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _extends3 = _interopRequireDefault(__webpack_require__("./node_modules/babel-runtime/helpers/extends.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    getHandleStorageKey = _require.getHandleStorageKey;

var LINKED_FIELD = __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").LINKED_FIELD;

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original linked
 * field (on which the handle was declared) among the sibling `selections`, and
 * copying its selections into the clone.
 */


function cloneRelayHandleSourceField(handleField, selections, variables) {
  var sourceField = selections.find(function (source) {
    return source.kind === LINKED_FIELD && source.name === handleField.name && source.alias === handleField.alias && __webpack_require__("./node_modules/fbjs/lib/areEqual.js")(source.args, handleField.args);
  });
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(sourceField && sourceField.kind === LINKED_FIELD, 'cloneRelayHandleSourceField: Expected a corresponding source field for ' + 'handle `%s`.', handleField.handle);
  var handleKey = getHandleStorageKey(handleField, variables);
  var clonedField = (0, _extends3['default'])({}, sourceField, {
    args: null,
    name: handleKey,
    storageKey: handleKey
  });
  return clonedField;
}

module.exports = cloneRelayHandleSourceField;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/commitLocalUpdate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function commitLocalUpdate(environment, updater) {
  environment.commitUpdate(updater);
}

module.exports = commitLocalUpdate;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/commitRelayModernMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
function commitRelayModernMutation(environment, config) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(__webpack_require__("./node_modules/relay-runtime/lib/isRelayModernEnvironment.js")(environment), 'commitRelayModernMutation: expect `environment` to be an instance of ' + '`RelayModernEnvironment`.');
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var mutation = getRequest(config.mutation);
  if (mutation.operationKind !== 'mutation') {
    throw new Error('commitRelayModernMutation: Expected mutation operation');
  }
  var optimisticResponse = config.optimisticResponse,
      optimisticUpdater = config.optimisticUpdater,
      updater = config.updater;
  var configs = config.configs,
      onError = config.onError,
      variables = config.variables,
      uploadables = config.uploadables;

  var operation = createOperationSelector(mutation, variables);
  // TODO: remove this check after we fix flow.
  if (typeof optimisticResponse === 'function') {
    optimisticResponse = optimisticResponse();
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(false, 'commitRelayModernMutation: Expected `optimisticResponse` to be an object, ' + 'received a function.');
  }
  if (optimisticResponse && mutation.fragment.selections && mutation.fragment.selections.length === 1 && mutation.fragment.selections[0].kind === 'LinkedField') {
    var mutationRoot = mutation.fragment.selections[0].name;
    __webpack_require__("./node_modules/fbjs/lib/warning.js")(optimisticResponse[mutationRoot], 'commitRelayModernMutation: Expected `optimisticResponse` to be wrapped ' + 'in mutation name `%s`', mutationRoot);
  }
  if (configs) {
    var _RelayDeclarativeMuta = __webpack_require__("./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js").convert(configs, mutation, optimisticUpdater, updater);

    optimisticUpdater = _RelayDeclarativeMuta.optimisticUpdater;
    updater = _RelayDeclarativeMuta.updater;
  }
  return environment.executeMutation({
    operation: operation,
    optimisticResponse: optimisticResponse,
    optimisticUpdater: optimisticUpdater,
    updater: updater,
    uploadables: uploadables
  }).subscribeLegacy({
    onNext: function onNext(payload) {
      // NOTE: commitRelayModernMutation has a non-standard use of
      // onCompleted() by calling it on every next value. It may be called
      // multiple times if a network request produces multiple responses.
      var onCompleted = config.onCompleted;

      if (onCompleted) {
        var snapshot = environment.lookup(operation.fragment);
        onCompleted(snapshot.data, payload.response.errors);
      }
    },
    onError: onError
  });
}

module.exports = commitRelayModernMutation;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/deepFreeze.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Recursively "deep" freezes the supplied object.
 *
 * For convenience, and for consistency with the behavior of `Object.freeze`,
 * returns the now-frozen original object.
 */

function deepFreeze(object) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(function (name) {
    var property = object[name];
    if (property && typeof property === 'object' && !Object.isFrozen(property)) {
      deepFreeze(property);
    }
  });
  return object;
}

module.exports = deepFreeze;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/deferrableFragmentKey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function deferrableFragmentKey(dataID, fragmentName, variables) {
  var variablesString = Object.keys(variables).reduce(function (acc, key) {
    return '' + acc + (acc ? ',' : '') + key + ':' + variables[key];
  }, '');
  return 'path:' + dataID + ',key:' + fragmentName + ',request:' + variablesString;
}

module.exports = deferrableFragmentKey;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/fetchRelayModernQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A helper function to fetch the results of a query. Note that results for
 * fragment spreads are masked: fields must be explicitly listed in the query in
 * order to be accessible in the result object.
 *
 * NOTE: This module is primarily intended for integrating with classic APIs.
 * Most product code should use a Renderer or Container.
 *
 * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
 * that's not really helpful as `SelectorData` is essentially just `mixed`. We
 * can probably leverage generated flow types here to return the real expected
 * shape.
 */
function fetchRelayModernQuery(environment, taggedNode, variables, cacheConfig) {
  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(environment.unstable_internal, 'fetchRelayModernQuery: Expected a valid Relay environment, got `%s`.', environment);
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var query = getRequest(taggedNode);
  if (query.kind === __webpack_require__("./node_modules/relay-runtime/lib/RelayConcreteNode.js").BATCH_REQUEST) {
    throw new Error('fetchRelayModernQuery: Batch request not supported in this API.');
  }
  if (query.operationKind !== 'query') {
    throw new Error('fetchRelayModernQuery: Expected query operation');
  }
  var operation = createOperationSelector(query, variables);

  return environment.execute({ operation: operation, cacheConfig: cacheConfig }).map(function () {
    return environment.lookup(operation.fragment).data;
  }).toPromise();
}

module.exports = fetchRelayModernQuery;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/generateRelayClientID.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var PREFIX = 'client:';

function generateRelayClientID(id, storageKey, index) {
  var key = id + ':' + storageKey;
  if (index != null) {
    key += ':' + index;
  }
  if (key.indexOf(PREFIX) !== 0) {
    key = PREFIX + key;
  }
  return key;
}

module.exports = generateRelayClientID;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/getRelayHandleKey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayDefaultHandleKey.js"),
    DEFAULT_HANDLE_KEY = _require.DEFAULT_HANDLE_KEY;

/**
 * @internal
 *
 * Helper to create a unique name for a handle field based on the handle name, handle key and
 * source field.
 */


function getRelayHandleKey(handleName, key, fieldName) {
  if (key && key !== DEFAULT_HANDLE_KEY) {
    return '__' + key + '_' + handleName;
  }

  __webpack_require__("./node_modules/fbjs/lib/invariant.js")(fieldName != null, 'getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided');
  return '__' + fieldName + '_' + handleName;
}

module.exports = getRelayHandleKey;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/hasOverlappingIDs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function hasOverlappingIDs(snapshot, updatedRecordIDs) {
  var keys = Object.keys(snapshot.seenRecords);
  for (var ii = 0; ii < keys.length; ii++) {
    if (updatedRecordIDs.hasOwnProperty(keys[ii])) {
      return true;
    }
  }
  return false;
}

module.exports = hasOverlappingIDs;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/isPromise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

module.exports = isPromise;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/isRelayModernEnvironment.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Determine if a given value is an object that implements the `Environment`
 * interface defined in `RelayStoreTypes`.
 *
 * Use a sigil for detection to avoid a realm-specific instanceof check, and to
 * aid in module tree-shaking to avoid requiring all of RelayRuntime just to
 * detect its environment.
 */

function isRelayModernEnvironment(environment) {
  return Boolean(environment && environment['@@RelayModernEnvironment']);
}

module.exports = isRelayModernEnvironment;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/isScalarAndEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A fast test to determine if two values are equal scalars:
 * - compares scalars such as booleans, strings, numbers by value
 * - compares functions by identity
 * - returns false for complex values, since these cannot be cheaply tested for
 *   equality (use `areEquals` instead)
 */

function isScalarAndEqual(valueA, valueB) {
  return valueA === valueB && (valueA === null || typeof valueA !== 'object');
}

module.exports = isScalarAndEqual;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/normalizePayload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ROOT_ID = _require.ROOT_ID;

function normalizePayload(payload) {
  var operation = payload.operation,
      variables = payload.variables,
      response = payload.response;
  var data = response.data,
      errors = response.errors;

  if (data != null) {
    return __webpack_require__("./node_modules/relay-runtime/lib/normalizeRelayPayload.js")({
      dataID: ROOT_ID,
      node: operation,
      variables: variables
    }, data, errors, { handleStrippedNulls: true });
  }
  var error = __webpack_require__("./node_modules/relay-runtime/lib/RelayError.js").create('RelayNetwork', 'No data returned for operation `%s`, got error(s):\n%s\n\nSee the error ' + '`source` property for more information.', operation.name, errors ? errors.map(function (_ref) {
    var message = _ref.message;
    return message;
  }).join('\n') : '(No errors)');
  error.source = { errors: errors, operation: operation, variables: variables };
  throw error;
}

module.exports = normalizePayload;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/normalizeRelayPayload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



var _require = __webpack_require__("./node_modules/relay-runtime/lib/RelayStoreUtils.js"),
    ROOT_ID = _require.ROOT_ID,
    ROOT_TYPE = _require.ROOT_TYPE;

function normalizeRelayPayload(selector, payload, errors) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { handleStrippedNulls: false };

  var source = new (__webpack_require__("./node_modules/relay-runtime/lib/RelayInMemoryRecordSource.js"))();
  source.set(ROOT_ID, __webpack_require__("./node_modules/relay-runtime/lib/RelayModernRecord.js").create(ROOT_ID, ROOT_TYPE));

  var _RelayResponseNormali = __webpack_require__("./node_modules/relay-runtime/lib/RelayResponseNormalizer.js").normalize(source, selector, payload, options),
      fieldPayloads = _RelayResponseNormali.fieldPayloads,
      deferrableSelections = _RelayResponseNormali.deferrableSelections;

  return {
    errors: errors,
    fieldPayloads: fieldPayloads,
    deferrableSelections: deferrableSelections,
    source: source
  };
}

module.exports = normalizeRelayPayload;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/recycleNodesInto.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Recycles subtrees from `prevData` by replacing equal subtrees in `nextData`.
 */

function recycleNodesInto(prevData, nextData) {
  if (prevData === nextData || typeof prevData !== 'object' || !prevData || typeof nextData !== 'object' || !nextData) {
    return nextData;
  }
  var canRecycle = false;

  // Assign local variables to preserve Flow type refinement.
  var prevArray = Array.isArray(prevData) ? prevData : null;
  var nextArray = Array.isArray(nextData) ? nextData : null;
  if (prevArray && nextArray) {
    canRecycle = nextArray.reduce(function (wasEqual, nextItem, ii) {
      var prevValue = prevArray[ii];
      var nextValue = recycleNodesInto(prevValue, nextItem);
      if (nextValue !== nextArray[ii]) {
        nextArray[ii] = nextValue;
      }
      return wasEqual && nextArray[ii] === prevArray[ii];
    }, true) && prevArray.length === nextArray.length;
  } else if (!prevArray && !nextArray) {
    // Assign local variables to preserve Flow type refinement.
    var prevObject = prevData;
    var nextObject = nextData;
    var prevKeys = Object.keys(prevObject);
    var nextKeys = Object.keys(nextObject);
    canRecycle = nextKeys.reduce(function (wasEqual, key) {
      var prevValue = prevObject[key];
      var nextValue = recycleNodesInto(prevValue, nextObject[key]);
      if (nextValue !== nextObject[key]) {
        nextObject[key] = nextValue;
      }
      return wasEqual && nextObject[key] === prevObject[key];
    }, true) && prevKeys.length === nextKeys.length;
  }
  return canRecycle ? prevData : nextData;
}

module.exports = recycleNodesInto;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/requestRelaySubscription.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



function requestRelaySubscription(environment, config) {
  var _environment$unstable = environment.unstable_internal,
      createOperationSelector = _environment$unstable.createOperationSelector,
      getRequest = _environment$unstable.getRequest;

  var subscription = getRequest(config.subscription);
  if (subscription.operationKind !== 'subscription') {
    throw new Error('requestRelaySubscription: Must use Subscription operation');
  }
  var configs = config.configs,
      onCompleted = config.onCompleted,
      onError = config.onError,
      onNext = config.onNext,
      variables = config.variables;

  var operation = createOperationSelector(subscription, variables);

  __webpack_require__("./node_modules/fbjs/lib/warning.js")(!(config.updater && configs), 'requestRelaySubscription: Expected only one of `updater` and `configs` to be provided');

  var _ref = configs ? __webpack_require__("./node_modules/relay-runtime/lib/RelayDeclarativeMutationConfig.js").convert(configs, subscription, null /* optimisticUpdater */
  , config.updater) : config,
      updater = _ref.updater;

  return environment.execute({
    operation: operation,
    updater: updater,
    cacheConfig: { force: true }
  }).map(function () {
    return environment.lookup(operation.fragment).data;
  }).subscribeLegacy({
    onNext: onNext,
    onError: onError,
    onCompleted: onCompleted
  });
}

module.exports = requestRelaySubscription;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/simpleClone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * A helper to create a deep clone of a value, plain Object, or array of such.
 *
 * Does not support RegExp, Date, other classes, or self-referential values.
 */
function simpleClone(value) {
  if (Array.isArray(value)) {
    return value.map(simpleClone);
  } else if (value && typeof value === 'object') {
    return __webpack_require__("./node_modules/fbjs/lib/mapObject.js")(value, simpleClone);
  } else {
    return value;
  }
}

module.exports = simpleClone;

/***/ }),

/***/ "./node_modules/relay-runtime/lib/stableCopy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */



/**
 * Creates a copy of the provided value, ensuring any nested objects have their
 * keys sorted such that equivalent values would have identical JSON.stringify
 * results.
 */

function stableCopy(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(stableCopy);
  }
  var keys = Object.keys(value).sort();
  var stable = {};
  for (var i = 0; i < keys.length; i++) {
    stable[keys[i]] = stableCopy(value[keys[i]]);
  }
  return stable;
}

module.exports = stableCopy;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("./node_modules/react-relay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_relay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlogPosts__ = __webpack_require__("./components/BlogPosts.js");
var _jsxFileName = "/Users/martingalajda/Work/HobbyProjects/kiwicamp/client/web/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render(props) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlogPosts__["a" /* default */], {
        viewer: this.props.viewer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Object.defineProperty(Index, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "Index"
});
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__lib_withData__["a" /* default */])(Index, {
  query: function query() {
    var node = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/pages_indexQuery.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    if (node.hash && node.hash !== "cf1ef336b38ff173d892fa48d2501e5c") {
      console.error("The definition of 'pages_indexQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./__generated__/pages_indexQuery.graphql\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
}));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map