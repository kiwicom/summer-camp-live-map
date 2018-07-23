module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BlogPostPreview.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("react-relay");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("react-relay");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
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
/* harmony export (immutable) */ __webpack_exports__["a"] = initEnvironment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_relay_runtime__ = __webpack_require__("relay-runtime");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_relay_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_relay_runtime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
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

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createRelayEnvironment__ = __webpack_require__("./lib/createRelayEnvironment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_relay__ = __webpack_require__("react-relay");
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_relay__ = __webpack_require__("react-relay");
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-relay":
/***/ (function(module, exports) {

module.exports = require("react-relay");

/***/ }),

/***/ "relay-runtime":
/***/ (function(module, exports) {

module.exports = require("relay-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map