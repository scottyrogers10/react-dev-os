(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["devOS"] = factory(require("react"));
	else
		root["devOS"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/generic-data-chamber/dist/bundle.js":
/*!**********************************************************!*\
  !*** ./node_modules/generic-data-chamber/dist/bundle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,"Store",(function(){return d}));var c={isPending:!1,isError:!1,error:null,shouldThrowErrors:!0,shouldTrackAsyncState:!0},a=function(e){return Object.entries(e).reduce((function(e,t){var r=s(t,2),n=r[0],o=r[1],u="function"!=typeof o;return e[n]={configs:u?i(i({},c),o.configs):c,reducer:u?o.reducer:o},e}),{})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=s(t,2),n=(r[0],r[1]),i=n.actions,o=void 0===i?{}:i,u=n.name,c=n.state,f=void 0===c?null:c;return e[u]={actions:a(o),state:f},e}),{})};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){var r=t.name,n=void 0===r?"":r,i=t.services,o=void 0===i?{}:i,s=t.types,u=void 0===s?{}:s;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastUid=0,this.name=n,this.services=o,this.subscribers={},this.types=f(u),this._typeConfigs=u}var t,r,n;return t=e,(r=[{key:"addType",value:function(e){if(this.types[e.name])throw new Error('ERROR (store.addType()): The type name "'.concat(e.name,'" is already in use in the "').concat(this.name,'" store.'));this.types=b(b({},this.types),f({type:e}))}},{key:"dispatch",value:function(e,t){var r=l(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],s=o.actions[i];return this._setState({typeName:n})(s.reducer({prevState:o.state,services:this.services},t)),this.types[n].state}},{key:"dispatchAsync",value:function(e,t){var r=l(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],s=o.actions[i],u=s.configs.shouldTrackAsyncState,c=this._setConfigs({actionName:i,typeName:n}),a=this._setState({typeName:n});return u&&c({isPending:!0,isError:!1,error:null}),Promise.resolve(s.reducer({prevState:o.state,services:this.services},t)).then((function(e){return u&&c({isPending:!1},!1),a(e),e})).catch((function(e){return u&&c({isPending:!1,isError:!0,error:e}),u?s.configs.shouldThrowErrors&&Promise.reject(e):Promise.reject(e)}))}},{key:"getError",value:function(e){var t=l(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.error}},{key:"getState",value:function(e){return e?this.types[e].state:Object.entries(this.types).reduce((function(e,t){var r=l(t,2),n=r[0],i=r[1].state;return e[n]=i,e}),{})}},{key:"isError",value:function(e){var t=l(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isError}},{key:"isPending",value:function(e){var t=l(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isPending}},{key:"reset",value:function(){this.lastUid=0,this.subscribers={},this.types=f(this._typeConfigs)}},{key:"subscribe",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r="uid_".concat(++this.lastUid);return this.subscribers[r]=t,t(this,{typeName:null}),{onNotify:t,token:r,unsubscribe:function(){return e._unsubscribe(r)}}}},{key:"_notify",value:function(e){var t=this;Object.values(this.subscribers).forEach((function(r){return r(t,{typeName:e})}))}},{key:"_setConfigs",value:function(e){var t=this,r=e.actionName,n=e.typeName;return function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.types[n].actions[r].configs;return t.types[n].actions[r].configs=b(b({},o),e),i&&t._notify(n)}}},{key:"_setState",value:function(e){var t=this,r=e.typeName;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.types[r].state=e,n&&t._notify(r)}}},{key:"_tokenizeAction",value:function(e){var t=l(e.split("."),1)[0];return[t,e.slice(t.length+1)]}},{key:"_unsubscribe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;delete this.subscribers[e]}}])&&v(t.prototype,r),n&&v(t,n),e}()}])}));

/***/ }),

/***/ "./node_modules/scr-pipe/dist/pipe.js":
/*!********************************************!*\
  !*** ./node_modules/scr-pipe/dist/pipe.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r={error:function(e,n){if(e instanceof Error)return e;try{return n(e)}catch(e){return e instanceof Error?e:Error(e)}},maybe:function(e,n){return null!=e?n(e):null},sync:function(e,n){return e instanceof Promise?e.then(function(e){return n(e)}):n(e)}};n.default=function(e){var n=function(e,n){return n(e)};return function e(t){return{bind:function(o){return n="string"==typeof o?r[o]:o,e(t)},flow:function(r){return e(n(t,r))},close:function(e){return e?e(t):t}}}(e)}}]).default});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Main = function Main(_ref) {
  var label = _ref.label,
      style = _ref.style,
      version = _ref.version;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].label
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].version
  }, "Version: ".concat(version)));
};

Main.defaultProps = {
  label: "",
  style: {},
  version: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/styles.js":
/*!******************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/styles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../library/styles */ "./src/library/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    height: "128px",
    width: "128px"
  },
  label: {
    fontSize: "20px",
    fontWeight: 600,
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].white
  },
  version: {
    fontSize: "12px",
    fontWeight: 500,
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[400]
  }
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/index.js":
/*!**********************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Secondary = function Secondary(_ref) {
  var description = _ref.description,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].description
  }, description));
};

Secondary.defaultProps = {
  description: "",
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Secondary);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/styles.js":
/*!***********************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/styles.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../library/styles */ "./src/library/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderTop: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700])
  },
  description: {
    fontSize: "11px",
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[400],
    textAlign: "center"
  }
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/index.js":
/*!************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/index.js");
/* harmony import */ var _Secondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Secondary */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Secondary/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/styles.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ToolInfo = function ToolInfo(_ref) {
  var selectedTool = _ref.selectedTool,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].main
  }, selectedTool)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Secondary__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].secondary
  }, selectedTool)));
};

ToolInfo.defaultProps = {
  selectedTool: {},
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ToolInfo);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/styles.js":
/*!*************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/styles.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex",
    flexDirection: "column"
  },
  main: {
    padding: "8px 0px 32px 0px"
  },
  secondary: {
    paddingTop: "18px"
  }
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Item = function Item(_ref) {
  var label = _ref.label,
      openWindow = _ref.openWindow,
      style = _ref.style,
      window = _ref.window;

  var handleClick = function handleClick() {
    return openWindow(window);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].view), style),
    onClick: handleClick
  }, label);
};

Item.defaultProps = {
  label: "",
  openWindow: function openWindow() {},
  style: {},
  window: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/styles.js":
/*!******************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/styles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../library/styles */ "./src/library/styles/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  view: _objectSpread(_objectSpread({
    fontSize: "12px",
    fontWeight: "600",
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].white
  }, _library_styles__WEBPACK_IMPORTED_MODULE_0__["css"].userSelect.none), _library_styles__WEBPACK_IMPORTED_MODULE_0__["css"].textOverflow.ellipsis)
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/index.js":
/*!************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolList/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/Item/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/styles.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ToolList = function ToolList(_ref) {
  var openWindow = _ref.openWindow,
      selectedIndex = _ref.selectedIndex,
      tools = _ref.tools,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].title
  }, "DEV-OS TOOL BROWSER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].list
  }, tools.map(function (tool, index) {
    var isSelected = selectedIndex === index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].item(isSelected),
      key: "ITEM_".concat(index),
      openWindow: openWindow
    }, tool));
  })));
};

ToolList.defaultProps = {
  openWindow: function openWindow() {},
  selectedIndex: 0,
  style: {},
  tools: []
};
/* harmony default export */ __webpack_exports__["default"] = (ToolList);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/styles.js":
/*!*************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolList/styles.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../library/styles */ "./src/library/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700])
  },
  title: {
    backgroundColor: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[800],
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].white,
    fontSize: "11px",
    fontWeight: "700",
    height: "28px",
    lineHeight: "28px",
    paddingLeft: "24px"
  },
  list: {
    flex: 1,
    overflowY: "auto",
    overflowX: "none"
  },
  item: function item(isSelected) {
    return {
      backgroundColor: isSelected && _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].blue[800],
      height: "28px",
      lineHeight: "28px",
      padding: "0px 24px"
    };
  }
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/index.js":
/*!***************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../library/hooks */ "./src/library/hooks/index.js");
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _procedures_windows_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../procedures/windows/create */ "./src/procedures/windows/create/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store */ "./src/store/index.js");
/* harmony import */ var _ToolInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolInfo */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/index.js");
/* harmony import */ var _ToolList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToolList */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolList/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ARROW_DOWN = 40;
var ARROW_UP = 38;
var ENTER = 13;
var ESCAPE = 27;

var ToolBrowser = function ToolBrowser(_ref) {
  var style = _ref.style,
      tools = _ref.tools;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var openWindow = function openWindow(configs) {
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("toolBrowser.close");
    setTimeout(function () {
      return Object(_procedures_windows_create__WEBPACK_IMPORTED_MODULE_3__["default"])(configs);
    }, 0);
  };

  var updateSelectedIndex = function updateSelectedIndex(index) {
    if (index >= 0 && index <= tools.length - 1) {
      setSelectedIndex(index);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    var keyCode = event.keyCode;
    keyCode === ARROW_DOWN && updateSelectedIndex(selectedIndex + 1);
    keyCode === ARROW_UP && updateSelectedIndex(selectedIndex - 1);
    keyCode === ENTER && openWindow(tools[selectedIndex].window);
    keyCode === ESCAPE && _store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("toolBrowser.close");
  };

  Object(_library_hooks__WEBPACK_IMPORTED_MODULE_1__["useOnWindowEvent"])("keyup", handleKeyUp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_2__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].view(window.innerWidth / 2)), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].toolList,
    openWindow: openWindow,
    selectedIndex: selectedIndex,
    tools: tools
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].toolInfo,
    selectedTool: tools[selectedIndex]
  }));
};

ToolBrowser.defaultProps = {
  style: {},
  tools: []
};
/* harmony default export */ __webpack_exports__["default"] = (ToolBrowser);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/styles.js":
/*!****************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/styles.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../library/styles */ "./src/library/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(center) {
    return {
      display: "flex",
      position: "absolute",
      left: "".concat(center - 340, "px"),
      top: "120px",
      height: "366px",
      width: "680px",
      borderRadius: "12px",
      boxShadow: "rgba(0, 0, 0, 0.38) 0px 20px 20px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      border: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700]),
      backgroundColor: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[900]
    };
  },
  toolList: {
    width: "290px",
    height: "100%"
  },
  toolInfo: {
    flex: 1,
    padding: "24px"
  }
});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/index.js":
/*!***************************************************!*\
  !*** ./src/components/DevOS/ToolManager/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/hooks */ "./src/library/hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _tools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tools/hooks */ "./src/tools/hooks/index.js");
/* harmony import */ var _ToolBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToolBrowser */ "./src/components/DevOS/ToolManager/ToolBrowser/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var T_KEYCODE = 84;

var ToolManager = function ToolManager(_ref) {
  var tools = _ref.tools,
      style = _ref.style;
  var formattedTools = tools.map(function (tool) {
    return typeof tool === "function" ? tool() : tool;
  });
  var isOpen = Object(_tools_hooks__WEBPACK_IMPORTED_MODULE_3__["useStore"])(function (store) {
    return store.getState("toolBrowser").isOpen;
  });

  var handleKeyUp = function handleKeyUp(event) {
    var keyCode = event.keyCode;
    var tagName = event.target.tagName.toUpperCase();

    if (tagName !== "INPUT" && tagName !== "TEXTAREA" && keyCode === T_KEYCODE) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("toolBrowser.toggle");
    }
  };

  Object(_library_hooks__WEBPACK_IMPORTED_MODULE_1__["useOnWindowEvent"])("keyup", handleKeyUp);
  return isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolBrowser__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_5__["default"].toolBrowser), style),
    tools: formattedTools
  });
};

ToolManager.defaultProps = {
  tools: [],
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ToolManager);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/styles.js":
/*!****************************************************!*\
  !*** ./src/components/DevOS/ToolManager/styles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  toolBrowser: {
    overflow: "hidden",
    pointerEvents: "auto",
    zIndex: 2147483647
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Content/index.js":
/*!********************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Content/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _procedures_windows_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../procedures/windows/close */ "./src/procedures/windows/close/index.js");
/* harmony import */ var _procedures_windows_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../procedures/windows/create */ "./src/procedures/windows/create/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store */ "./src/store/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/Content/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Content = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var contentRef = _ref.contentRef,
      id = _ref.id,
      style = _ref.style;
  var Component = _store__WEBPACK_IMPORTED_MODULE_4__["default"].getState("windows").byId[id].component;

  var handleClose = function handleClose() {
    return Object(_procedures_windows_close__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["ViewRef"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_5__["default"].view), style),
    ref: contentRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
    closeWindow: handleClose,
    createWindow: _procedures_windows_create__WEBPACK_IMPORTED_MODULE_3__["default"],
    __id: id
  }));
});
Content.defaultProps = {
  contentRef: null,
  id: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Content/styles.js":
/*!*********************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Content/styles.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../library/styles */ "./src/library/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    flex: 1,
    position: "relative",
    borderRight: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700]),
    borderBottom: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700]),
    borderLeft: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[700]),
    borderRadius: "0px 0px 6px 6px",
    backgroundColor: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[900],
    overflow: "hidden"
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/index.js":
/*!*******************************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ActionButton = function ActionButton(_ref) {
  var onClick = _ref.onClick,
      primaryColor = _ref.primaryColor,
      style = _ref.style;

  var handleDoubleClick = function handleDoubleClick(event) {
    return event.stopPropagation();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].view({
      primaryColor: primaryColor
    })), style),
    onClick: onClick,
    onDoubleClick: handleDoubleClick
  });
};

ActionButton.defaultProps = {
  onClick: function onClick() {},
  primaryColor: "",
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/styles.js":
/*!********************************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/styles.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(_ref) {
    var primaryColor = _ref.primaryColor;
    return {
      height: "12px",
      width: "12px",
      borderRadius: "50%",
      backgroundColor: primaryColor
    };
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/index.js":
/*!******************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../library/styles */ "./src/library/styles/index.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton */ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/ActionButton/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ActionButtons = function ActionButtons(_ref) {
  var isFocused = _ref.isFocused,
      onClose = _ref.onClose,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].marginRight,
    primaryColor: isFocused ? _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].red[500] : _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].gray[550],
    onClick: onClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_4__["default"].marginRight,
    primaryColor: isFocused ? _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].yellow[700] : _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].gray[550]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    primaryColor: isFocused ? _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].green[500] : _library_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].gray[550]
  }));
};

ActionButtons.defaultProps = {
  isFocused: false,
  onClose: function onClose() {},
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ActionButtons);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/styles.js":
/*!*******************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/styles.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex"
  },
  marginRight: {
    marginRight: "6px"
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/children/index.js":
/*!****************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/children/index.js ***!
  \****************************************************************************/
/*! exports provided: ActionButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionButtons */ "./src/components/DevOS/WindowManager/Window/Header/children/ActionButtons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButtons", function() { return _ActionButtons__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/helpers/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/helpers/index.js ***!
  \***************************************************************************/
/*! exports provided: onMoveHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on_move_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-move-handlers */ "./src/components/DevOS/WindowManager/Window/Header/helpers/on-move-handlers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMoveHandlers", function() { return _on_move_handlers__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/helpers/on-move-handlers/index.js":
/*!********************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/helpers/on-move-handlers/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _procedures_windows_move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../procedures/windows/move */ "./src/procedures/windows/move/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var contentRef = _ref.contentRef,
      id = _ref.id,
      windowRef = _ref.windowRef;

  var handleMove = function handleMove(event) {
    Object(_procedures_windows_move__WEBPACK_IMPORTED_MODULE_0__["default"])({
      elem: windowRef.current,
      event: event,
      id: id
    });
    event.stopPropagation();
    event.preventDefault();
  };

  var handleMoveEnd = function handleMoveEnd(event) {
    Object(_procedures_windows_move__WEBPACK_IMPORTED_MODULE_0__["default"])({
      elem: windowRef.current,
      event: event,
      id: id,
      shouldDispatch: true
    });
    contentRef.current && (contentRef.current.style.pointerEvents = "");
    event.stopPropagation();
    event.preventDefault();
  };

  var handleMoveStart = function handleMoveStart() {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return {
    onMove: handleMove,
    onMoveEnd: handleMoveEnd,
    onMoveStart: handleMoveStart
  };
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/index.js":
/*!*******************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _library_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../library/hooks */ "./src/library/hooks/index.js");
/* harmony import */ var _tools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/hooks */ "./src/tools/hooks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store */ "./src/store/index.js");
/* harmony import */ var _procedures_windows_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../procedures/windows/close */ "./src/procedures/windows/close/index.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./children */ "./src/components/DevOS/WindowManager/Window/Header/children/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./src/components/DevOS/WindowManager/Window/Header/helpers/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/Header/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Header = function Header(_ref) {
  var contentRef = _ref.contentRef,
      id = _ref.id,
      style = _ref.style,
      windowRef = _ref.windowRef;

  var _useOnMove = Object(_library_hooks__WEBPACK_IMPORTED_MODULE_2__["useOnMove"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["onMoveHandlers"])({
    contentRef: contentRef,
    id: id,
    windowRef: windowRef
  })),
      headerRef = _useOnMove.ref;

  var _useStore = Object(_tools_hooks__WEBPACK_IMPORTED_MODULE_3__["useStore"])(function (store) {
    return store.getState("windows").byId[id];
  }),
      isFocused = _useStore.isFocused,
      isOpaque = _useStore.isOpaque,
      title = _useStore.title;

  var handleClose = function handleClose() {
    return Object(_procedures_windows_close__WEBPACK_IMPORTED_MODULE_5__["default"])(id);
  };

  var handleDoubleClick = function handleDoubleClick() {
    return _store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch("windows.update", {
      id: id,
      isOpaque: !isOpaque
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["ViewRef"], {
    style: _objectSpread(_objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_8__["default"].view), style), _styles__WEBPACK_IMPORTED_MODULE_8__["default"].focused(isFocused)),
    onDoubleClick: handleDoubleClick,
    ref: headerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_6__["ActionButtons"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_8__["default"].actionButtons,
    isFocused: isFocused,
    onClose: handleClose
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_8__["default"].title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_8__["default"].flexSpacer
  }));
};

Header.defaultProps = {
  contentRef: null,
  id: null,
  style: {},
  windowRef: null
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Header/styles.js":
/*!********************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Header/styles.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../library/styles */ "./src/library/styles/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 6px",
    backgroundColor: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[750],
    overflow: "hidden",
    borderTop: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[600]),
    borderRight: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[600]),
    borderLeft: "1px solid ".concat(_library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[600]),
    borderRadius: "6px 6px 0px 0px"
  },
  focused: function focused(isFocused) {
    return isFocused && {
      backgroundColor: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[800]
    };
  },
  actionButtons: {
    flex: 1,
    paddingRight: "16px"
  },
  title: _objectSpread(_objectSpread({
    color: _library_styles__WEBPACK_IMPORTED_MODULE_0__["colors"].gray[50],
    fontSize: "13px",
    fontWeight: 700,
    paddingRight: "16px"
  }, _library_styles__WEBPACK_IMPORTED_MODULE_0__["css"].userSelect.none), _library_styles__WEBPACK_IMPORTED_MODULE_0__["css"].textOverflow.ellipsis),
  flexSpacer: {
    flex: 1
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Resizable/helpers/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Resizable/helpers/index.js ***!
  \******************************************************************************/
/*! exports provided: onResizeHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _on_resize_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-resize-handlers */ "./src/components/DevOS/WindowManager/Window/Resizable/helpers/on-resize-handlers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onResizeHandlers", function() { return _on_resize_handlers__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Resizable/helpers/on-resize-handlers/index.js":
/*!*************************************************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Resizable/helpers/on-resize-handlers/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _procedures_windows_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../procedures/windows/resize */ "./src/procedures/windows/resize/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var contentRef = _ref.contentRef,
      id = _ref.id,
      windowRef = _ref.windowRef;

  var handleResize = function handleResize(dimensions, event) {
    return Object(_procedures_windows_resize__WEBPACK_IMPORTED_MODULE_0__["default"])({
      dimensions: dimensions,
      elem: windowRef.current,
      event: event,
      id: id
    });
  };

  var handleResizeEnd = function handleResizeEnd(event) {
    if (windowRef.current) {
      var dimensions = windowRef.current.getBoundingClientRect();
      Object(_procedures_windows_resize__WEBPACK_IMPORTED_MODULE_0__["default"])({
        dimensions: dimensions,
        elem: windowRef.current,
        event: event,
        id: id,
        shouldDispatch: true
      });
    }

    contentRef.current && (contentRef.current.style.pointerEvents = "");
  };

  var handleResizeStart = function handleResizeStart() {
    contentRef.current && (contentRef.current.style.pointerEvents = "none");
  };

  return {
    handleResize: handleResize,
    handleResizeEnd: handleResizeEnd,
    handleResizeStart: handleResizeStart
  };
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Resizable/index.js":
/*!**********************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Resizable/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/components/DevOS/WindowManager/Window/Resizable/helpers/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/Resizable/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Resizable = function Resizable(_ref) {
  var children = _ref.children,
      contentRef = _ref.contentRef,
      id = _ref.id,
      windowRef = _ref.windowRef,
      style = _ref.style;

  var _onResizeHandlers = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["onResizeHandlers"])({
    contentRef: contentRef,
    id: id,
    windowRef: windowRef
  }),
      handleResize = _onResizeHandlers.handleResize,
      handleResizeEnd = _onResizeHandlers.handleResizeEnd,
      handleResizeStart = _onResizeHandlers.handleResizeStart;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Resizable"], {
    style: _objectSpread(_objectSpread({}, style), _styles__WEBPACK_IMPORTED_MODULE_3__["default"].resizable),
    minHeight: 24,
    minWidth: 95,
    onResize: handleResize,
    onResizeEnd: handleResizeEnd,
    onResizeStart: handleResizeStart
  }, children);
};

Resizable.defaultProps = {
  children: null,
  contentRef: null,
  id: null,
  windowRef: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Resizable);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/Resizable/styles.js":
/*!***********************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/Resizable/styles.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  resizable: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    minWidth: 0,
    minHeight: 0
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/index.js":
/*!************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store */ "./src/store/index.js");
/* harmony import */ var _tools_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../tools/hooks */ "./src/tools/hooks/index.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./src/components/DevOS/WindowManager/Window/Content/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./src/components/DevOS/WindowManager/Window/Header/index.js");
/* harmony import */ var _Resizable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Resizable */ "./src/components/DevOS/WindowManager/Window/Resizable/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/Window/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Window = function Window(_ref) {
  var id = _ref.id,
      style = _ref.style;
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var state = Object(_tools_hooks__WEBPACK_IMPORTED_MODULE_3__["useStore"])(function (store) {
    return store.getState("windows").byId[id];
  });

  var handleMouseDown = function handleMouseDown() {
    return !state.isFocused && _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("windows.focus", id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["ViewRef"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].view(state)), style),
    onMouseDown: handleMouseDown,
    ref: windowRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Resizable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: id,
    contentRef: contentRef,
    windowRef: windowRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].header,
    id: id,
    contentRef: contentRef,
    windowRef: windowRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    contentRef: contentRef
  })));
};

Window.defaultProps = {
  id: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Window);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/Window/styles.js":
/*!*************************************************************!*\
  !*** ./src/components/DevOS/WindowManager/Window/styles.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(_ref) {
    var _ref$position = _ref.position,
        x = _ref$position.x,
        y = _ref$position.y,
        _ref$size = _ref.size,
        width = _ref$size.width,
        height = _ref$size.height,
        isOpaque = _ref.isOpaque,
        renderIndex = _ref.renderIndex;
    return {
      position: "absolute",
      transform: "translate(".concat(x, "px, ").concat(y, "px)"),
      display: "flex",
      height: "".concat(height, "px"),
      width: "".concat(width, "px"),
      borderRadius: "6px",
      opacity: isOpaque ? 1.0 : 0.1,
      pointerEvents: isOpaque ? "auto" : "none",
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 15px -3px, 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      zIndex: renderIndex
    };
  },
  header: {
    pointerEvents: "auto",
    minHeight: "24px",
    height: "24px"
  }
});

/***/ }),

/***/ "./src/components/DevOS/WindowManager/index.js":
/*!*****************************************************!*\
  !*** ./src/components/DevOS/WindowManager/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _tools_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tools/hooks */ "./src/tools/hooks/index.js");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Window */ "./src/components/DevOS/WindowManager/Window/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/WindowManager/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var WindowManager = function WindowManager(_ref) {
  var style = _ref.style;
  var windowIds = Object(_tools_hooks__WEBPACK_IMPORTED_MODULE_2__["useStore"])(function (store) {
    return store.getState("windows").ids;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4___default.a.view), style)
  }, windowIds.map(function (windowId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "WINDOW_".concat(windowId),
      id: windowId
    });
  }));
};

WindowManager.defaultProps = {
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (WindowManager);

/***/ }),

/***/ "./src/components/DevOS/WindowManager/styles.js":
/*!******************************************************!*\
  !*** ./src/components/DevOS/WindowManager/styles.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/DevOS/index.js":
/*!***************************************!*\
  !*** ./src/components/DevOS/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _ToolManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolManager */ "./src/components/DevOS/ToolManager/index.js");
/* harmony import */ var _WindowManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WindowManager */ "./src/components/DevOS/WindowManager/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DevOS = function DevOS(_ref) {
  var style = _ref.style,
      tools = _ref.tools;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToolManager__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tools: tools
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WindowManager__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

DevOS.defaultProps = {
  style: {},
  tools: []
};
/* harmony default export */ __webpack_exports__["default"] = (DevOS);

/***/ }),

/***/ "./src/components/DevOS/styles.js":
/*!****************************************!*\
  !*** ./src/components/DevOS/styles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 2147483647,
    boxSizing: "border-box",
    verticalAlign: "baseline",
    lineHeight: "1.5",
    border: 0,
    margin: 0,
    padding: 0,
    overflow: "hidden",
    pointerEvents: "none"
  }
});

/***/ }),

/***/ "./src/factories/window/index.js":
/*!***************************************!*\
  !*** ./src/factories/window/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var currentId = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  create: function create() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _attrs$events = attrs.events,
        events = _attrs$events === void 0 ? {} : _attrs$events;
    return _objectSpread(_objectSpread({
      isOpaque: true,
      type: "",
      title: "",
      component: function component() {
        return null;
      },
      position: {
        x: 24,
        y: 24
      },
      size: {
        width: 300,
        height: 200
      }
    }, attrs), {}, {
      events: _objectSpread({
        onMove: function onMove() {},
        onResize: function onResize() {}
      }, events),
      id: currentId += 1,
      isFocused: false,
      renderIndex: 0
    });
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_DevOS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DevOS */ "./src/components/DevOS/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_DevOS__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/library/hooks/index.js":
/*!************************************!*\
  !*** ./src/library/hooks/index.js ***!
  \************************************/
/*! exports provided: useContextMenu, useHover, useMergeState, useOnMove, useStore, useOnWindowEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_context_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-context-menu */ "./src/library/hooks/use-context-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContextMenu", function() { return _use_context_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-hover */ "./src/library/hooks/use-hover/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _use_hover__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_merge_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-merge-state */ "./src/library/hooks/use-merge-state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMergeState", function() { return _use_merge_state__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_on_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-on-move */ "./src/library/hooks/use-on-move/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnMove", function() { return _use_on_move__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _use_on_window_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-on-window-event */ "./src/library/hooks/use-on-window-event/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnWindowEvent", function() { return _use_on_window_event__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-store */ "./src/library/hooks/use-store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _use_store__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/library/hooks/use-context-menu/index.js":
/*!*****************************************************!*\
  !*** ./src/library/hooks/use-context-menu/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.. */ "./src/library/hooks/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isActive = _ref.isActive;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useMergeState = Object(___WEBPACK_IMPORTED_MODULE_1__["useMergeState"])({
    event: null,
    isOpen: false,
    position: {
      x: 0,
      y: 0
    }
  }),
      _useMergeState2 = _slicedToArray(_useMergeState, 2),
      state = _useMergeState2[0],
      setState = _useMergeState2[1];

  var handleContextMenu = function handleContextMenu(event) {
    if (isActive && !state.isOpen) {
      setState({
        event: event,
        isOpen: true,
        position: {
          x: event.clientX,
          y: event.clientY
        }
      });
      event.preventDefault();
      event.stopPropagation();
    }
  };

  var closeMenu = function closeMenu() {
    return setState({
      isOpen: false
    });
  };

  var handleClick = function handleClick() {
    return closeMenu();
  };

  var handleMouseDown = function handleMouseDown() {
    return closeMenu();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("click", handleClick);
    return function () {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("click", handleClick);
    };
  }, [state.isOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elem = ref.current;

    if (elem) {
      elem.addEventListener("contextmenu", handleContextMenu);
      return function () {
        elem.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, [ref.current, isActive]);
  return _objectSpread({
    ref: ref
  }, state);
});

/***/ }),

/***/ "./src/library/hooks/use-hover/index.js":
/*!**********************************************!*\
  !*** ./src/library/hooks/use-hover/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  var handleMouseOver = function handleMouseOver() {
    return setIsHovered(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    return setIsHovered(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elem = ref.current;

    if (elem) {
      elem.addEventListener("mouseover", handleMouseOver);
      elem.addEventListener("mouseleave", handleMouseLeave);
      return function () {
        elem.removeEventListener("mouseover", handleMouseOver);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref.current]);
  return {
    isHovered: isHovered,
    ref: ref,
    setIsHovered: setIsHovered
  };
});

/***/ }),

/***/ "./src/library/hooks/use-merge-state/index.js":
/*!****************************************************!*\
  !*** ./src/library/hooks/use-merge-state/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var defaultState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var mergeState = function mergeState(updatedState) {
    if (updatedState instanceof Function) {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), updatedState(prevState));
      });
    } else {
      setState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), updatedState);
      });
    }
  };

  return [state, mergeState];
});

/***/ }),

/***/ "./src/library/hooks/use-on-move/index.js":
/*!************************************************!*\
  !*** ./src/library/hooks/use-on-move/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$onMove = _ref.onMove,
      onMove = _ref$onMove === void 0 ? function () {} : _ref$onMove,
      _ref$onMoveEnd = _ref.onMoveEnd,
      onMoveEnd = _ref$onMoveEnd === void 0 ? function () {} : _ref$onMoveEnd,
      _ref$onMoveStart = _ref.onMoveStart,
      onMoveStart = _ref$onMoveStart === void 0 ? function () {} : _ref$onMoveStart;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false),
      isMouseDown = _useRef.current;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleMouseMove = function handleMouseMove(event) {
    return isMouseDown && onMove(event);
  };

  var handleMouseUp = function handleMouseUp(event) {
    isMouseDown = false;
    onMoveEnd(event);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  var handleMouseDown = function handleMouseDown(event) {
    isMouseDown = true;
    onMoveStart(event);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elem = ref.current;

    if (elem) {
      elem.addEventListener("mousedown", handleMouseDown);
      return function () {
        elem.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [ref.current]);
  return {
    ref: ref
  };
});

/***/ }),

/***/ "./src/library/hooks/use-on-window-event/index.js":
/*!********************************************************!*\
  !*** ./src/library/hooks/use-on-window-event/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (eventName, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener(eventName, handler);
    return function () {
      return window.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
});

/***/ }),

/***/ "./src/library/hooks/use-store/index.js":
/*!**********************************************!*\
  !*** ./src/library/hooks/use-store/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function (store) {
  return function (mapStoreToState, defaultState) {
    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState === undefined ? mapStoreToState(store) : defaultState),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var isCanceled = false;
      var subscriber = store.subscribe(function (currentStore) {
        !isCanceled && setState(mapStoreToState(currentStore));
      });
      return function () {
        isCanceled = true;
        subscriber.unsubscribe();
      };
    }, []);
    return state;
  };
});

/***/ }),

/***/ "./src/library/styles/colors/index.js":
/*!********************************************!*\
  !*** ./src/library/styles/colors/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palettes_black__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palettes/black */ "./src/library/styles/colors/palettes/black.js");
/* harmony import */ var _palettes_blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palettes/blue */ "./src/library/styles/colors/palettes/blue.js");
/* harmony import */ var _palettes_gray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palettes/gray */ "./src/library/styles/colors/palettes/gray.js");
/* harmony import */ var _palettes_green__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./palettes/green */ "./src/library/styles/colors/palettes/green.js");
/* harmony import */ var _palettes_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palettes/red */ "./src/library/styles/colors/palettes/red.js");
/* harmony import */ var _palettes_white__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palettes/white */ "./src/library/styles/colors/palettes/white.js");
/* harmony import */ var _palettes_yellow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palettes/yellow */ "./src/library/styles/colors/palettes/yellow.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  black: _palettes_black__WEBPACK_IMPORTED_MODULE_0__["default"],
  blue: _palettes_blue__WEBPACK_IMPORTED_MODULE_1__["default"],
  gray: _palettes_gray__WEBPACK_IMPORTED_MODULE_2__["default"],
  green: _palettes_green__WEBPACK_IMPORTED_MODULE_3__["default"],
  red: _palettes_red__WEBPACK_IMPORTED_MODULE_4__["default"],
  white: _palettes_white__WEBPACK_IMPORTED_MODULE_5__["default"],
  yellow: _palettes_yellow__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/library/styles/colors/palettes/black.js":
/*!*****************************************************!*\
  !*** ./src/library/styles/colors/palettes/black.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#161616");

/***/ }),

/***/ "./src/library/styles/colors/palettes/blue.js":
/*!****************************************************!*\
  !*** ./src/library/styles/colors/palettes/blue.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1"
});

/***/ }),

/***/ "./src/library/styles/colors/palettes/gray.js":
/*!****************************************************!*\
  !*** ./src/library/styles/colors/palettes/gray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  550: "#898989",
  600: "#757575",
  700: "#616161",
  750: "#424242",
  800: "#323232",
  900: "#212121"
});

/***/ }),

/***/ "./src/library/styles/colors/palettes/green.js":
/*!*****************************************************!*\
  !*** ./src/library/styles/colors/palettes/green.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
});

/***/ }),

/***/ "./src/library/styles/colors/palettes/red.js":
/*!***************************************************!*\
  !*** ./src/library/styles/colors/palettes/red.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c"
});

/***/ }),

/***/ "./src/library/styles/colors/palettes/white.js":
/*!*****************************************************!*\
  !*** ./src/library/styles/colors/palettes/white.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ffffff");

/***/ }),

/***/ "./src/library/styles/colors/palettes/yellow.js":
/*!******************************************************!*\
  !*** ./src/library/styles/colors/palettes/yellow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  50: "#fffde7",
  100: "#fff9c4",
  200: "#fff59d",
  300: "#fff176",
  400: "#ffee58",
  500: "#ffeb3b",
  600: "#fdd835",
  700: "#fbc02d",
  800: "#f9a825",
  900: "#f57f17"
});

/***/ }),

/***/ "./src/library/styles/css/index.js":
/*!*****************************************!*\
  !*** ./src/library/styles/css/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textOverflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textOverflow */ "./src/library/styles/css/textOverflow/index.js");
/* harmony import */ var _userSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSelect */ "./src/library/styles/css/userSelect/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  textOverflow: _textOverflow__WEBPACK_IMPORTED_MODULE_0__["default"],
  userSelect: _userSelect__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/library/styles/css/textOverflow/index.js":
/*!******************************************************!*\
  !*** ./src/library/styles/css/textOverflow/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  ellipsis: ellipsis
});

/***/ }),

/***/ "./src/library/styles/css/userSelect/index.js":
/*!****************************************************!*\
  !*** ./src/library/styles/css/userSelect/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var none = {
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  MsUserSelect: "none",
  userSelect: "none"
};
var text = {
  WebkitUserSelect: "text",
  MozUserSelect: "text",
  MsUserSelect: "text",
  userSelect: "text"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  none: none,
  text: text
});

/***/ }),

/***/ "./src/library/styles/index.js":
/*!*************************************!*\
  !*** ./src/library/styles/index.js ***!
  \*************************************/
/*! exports provided: colors, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./src/library/styles/colors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _colors__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css */ "./src/library/styles/css/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/index.js":
/*!********************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ui */ "./src/library/ui/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ResizableHandle = function ResizableHandle(_ref) {
  var cursor = _ref.cursor,
      onResize = _ref.onResize,
      onResizeEnd = _ref.onResizeEnd,
      onResizeStart = _ref.onResizeStart,
      style = _ref.style;

  var _useRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false),
      isMouseDown = _useRef.current;

  var handleMouseUp = function handleMouseUp(event) {
    document.body.style.cursor = "auto";
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);

    if (isMouseDown) {
      isMouseDown = false;
      onResizeEnd(event);
    }
  };

  var handleMouseMove = function handleMouseMove(event) {
    if (isMouseDown) {
      event.stopImmediatePropagation();
      requestAnimationFrame(function () {
        return onResize(event);
      });
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    document.body.style.cursor = cursor;
    document.body.style.userSelect = "none";
    isMouseDown = true;
    onResizeStart(event);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_2__["default"].view(cursor)), style),
    draggable: false,
    onMouseDown: handleMouseDown
  });
};

ResizableHandle.defaultProps = {
  cursor: "nwse-resize",
  onResize: function onResize() {},
  onResizeEnd: function onResizeEnd() {},
  onResizeStart: function onResizeStart() {},
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ResizableHandle);

/***/ }),

/***/ "./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/styles.js":
/*!*********************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/styles.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  view: function view(cursor) {
    return {
      height: "5px",
      width: "5px",
      cursor: cursor
    };
  }
});

/***/ }),

/***/ "./src/library/ui/common/Resizable/children/ResizableHandles/index.js":
/*!****************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/children/ResizableHandles/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResizableHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResizableHandle */ "./src/library/ui/common/Resizable/children/ResizableHandles/ResizableHandle/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/library/ui/common/Resizable/children/ResizableHandles/styles.js");




var ResizableHandles = function ResizableHandles(_ref) {
  var _onResize = _ref.onResize,
      onResizeEnd = _ref.onResizeEnd,
      onResizeStart = _ref.onResizeStart;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].top,
    cursor: "ns-resize",
    onResize: function onResize(event) {
      return _onResize(event, "top");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].left,
    cursor: "ew-resize",
    onResize: function onResize(event) {
      return _onResize(event, "left");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].right,
    cursor: "ew-resize",
    onResize: function onResize(event) {
      return _onResize(event, "right");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].bottom,
    cursor: "ns-resize",
    onResize: function onResize(event) {
      return _onResize(event, "bottom");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].topLeft,
    cursor: "nwse-resize",
    onResize: function onResize(event) {
      return _onResize(event, "topLeft");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].topRight,
    cursor: "nesw-resize",
    onResize: function onResize(event) {
      return _onResize(event, "topRight");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].bottomLeft,
    cursor: "nesw-resize",
    onResize: function onResize(event) {
      return _onResize(event, "bottomLeft");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResizableHandle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].bottomRight,
    cursor: "nwse-resize",
    onResize: function onResize(event) {
      return _onResize(event, "bottomRight");
    },
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }));
};

ResizableHandles.defaultProps = {
  onResize: function onResize() {},
  onResizeEnd: function onResizeEnd() {},
  onResiseStart: function onResiseStart() {}
};
/* harmony default export */ __webpack_exports__["default"] = (ResizableHandles);

/***/ }),

/***/ "./src/library/ui/common/Resizable/children/ResizableHandles/styles.js":
/*!*****************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/children/ResizableHandles/styles.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  top: {
    position: "absolute",
    top: "-2px",
    left: "0px",
    width: "100%"
  },
  left: {
    position: "absolute",
    top: "0px",
    left: "-2px",
    height: "100%"
  },
  right: {
    position: "absolute",
    top: "0px",
    right: "-2px",
    height: "100%"
  },
  bottom: {
    position: "absolute",
    bottom: "-2px",
    left: "0px",
    width: "100%"
  },
  topLeft: {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    height: "10px",
    width: "10px"
  },
  topRight: {
    position: "absolute",
    top: "-2px",
    right: "-2px",
    height: "10px",
    width: "10px"
  },
  bottomLeft: {
    position: "absolute",
    bottom: "-2px",
    left: "-2px",
    height: "10px",
    width: "10px"
  },
  bottomRight: {
    position: "absolute",
    bottom: "-2px",
    right: "-2px",
    height: "10px",
    width: "10px"
  }
});

/***/ }),

/***/ "./src/library/ui/common/Resizable/children/index.js":
/*!***********************************************************!*\
  !*** ./src/library/ui/common/Resizable/children/index.js ***!
  \***********************************************************/
/*! exports provided: ResizableHandles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResizableHandles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResizableHandles */ "./src/library/ui/common/Resizable/children/ResizableHandles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizableHandles", function() { return _ResizableHandles__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-left/index.js":
/*!***************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-left/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bottomLeft = function bottomLeft(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width - event.movementX;
  var height = elem.height + event.movementY;
  return {
    width: width > minSize.width ? width : elem.width,
    height: height > minSize.height ? height : elem.height,
    top: elem.top,
    left: width > minSize.width ? elem.left + event.movementX : elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bottomLeft);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-right/index.js":
/*!****************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-right/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bottomRight = function bottomRight(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width + event.movementX;
  var height = elem.height + event.movementY;
  return {
    width: width > minSize.width ? width : elem.width,
    height: height > minSize.height ? height : elem.height,
    top: elem.top,
    left: elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bottomRight);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom/index.js":
/*!**********************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/bottom/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bottom = function bottom(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var height = elem.height + event.movementY;
  return {
    width: elem.width,
    height: height > minSize.height ? height : elem.height,
    top: elem.top,
    left: elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (bottom);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/index.js":
/*!***************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bottom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom */ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom/index.js");
/* harmony import */ var _bottom_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-left */ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-left/index.js");
/* harmony import */ var _bottom_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom-right */ "./src/library/ui/common/Resizable/helpers/calculate-resize/bottom-right/index.js");
/* harmony import */ var _left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./left */ "./src/library/ui/common/Resizable/helpers/calculate-resize/left/index.js");
/* harmony import */ var _right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right */ "./src/library/ui/common/Resizable/helpers/calculate-resize/right/index.js");
/* harmony import */ var _top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top */ "./src/library/ui/common/Resizable/helpers/calculate-resize/top/index.js");
/* harmony import */ var _top_left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-left */ "./src/library/ui/common/Resizable/helpers/calculate-resize/top-left/index.js");
/* harmony import */ var _top_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-right */ "./src/library/ui/common/Resizable/helpers/calculate-resize/top-right/index.js");








var calculators = {
  bottom: _bottom__WEBPACK_IMPORTED_MODULE_0__["default"],
  bottomLeft: _bottom_left__WEBPACK_IMPORTED_MODULE_1__["default"],
  bottomRight: _bottom_right__WEBPACK_IMPORTED_MODULE_2__["default"],
  left: _left__WEBPACK_IMPORTED_MODULE_3__["default"],
  right: _right__WEBPACK_IMPORTED_MODULE_4__["default"],
  top: _top__WEBPACK_IMPORTED_MODULE_5__["default"],
  topLeft: _top_left__WEBPACK_IMPORTED_MODULE_6__["default"],
  topRight: _top_right__WEBPACK_IMPORTED_MODULE_7__["default"]
};

var calculateResize = function calculateResize(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      handleType = _ref.handleType,
      minSize = _ref.minSize;
  return elem ? calculators[handleType]({
    elem: elem.getBoundingClientRect(),
    event: event,
    minSize: minSize
  }) : {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (calculateResize);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/left/index.js":
/*!********************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/left/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var left = function left(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width - event.movementX;
  return {
    width: width > minSize.width ? width : elem.width,
    height: elem.height,
    top: elem.top,
    left: width > minSize.width ? elem.left + event.movementX : elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (left);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/right/index.js":
/*!*********************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/right/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var right = function right(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width + event.movementX;
  return {
    width: width > minSize.width ? width : elem.width,
    height: elem.height,
    top: elem.top,
    left: elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (right);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/top-left/index.js":
/*!************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/top-left/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var topLeft = function topLeft(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width - event.movementX;
  var height = elem.height - event.movementY;
  return {
    width: width > minSize.width ? width : elem.width,
    height: height > minSize.height ? height : elem.height,
    top: height > minSize.height ? elem.top + event.movementY : elem.top,
    left: width > minSize.width ? elem.left + event.movementX : elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (topLeft);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/top-right/index.js":
/*!*************************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/top-right/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var topRight = function topRight(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var width = elem.width + event.movementX;
  var height = elem.height - event.movementY;
  return {
    width: width > minSize.width ? width : elem.width,
    height: height > minSize.height ? height : elem.height,
    top: height > minSize.height ? elem.top + event.movementY : elem.top,
    left: elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (topRight);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/calculate-resize/top/index.js":
/*!*******************************************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/calculate-resize/top/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var top = function top(_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      minSize = _ref.minSize;
  var height = elem.height - event.movementY;
  return {
    width: elem.width,
    height: height > minSize.height ? height : elem.height,
    top: height > minSize.height ? elem.top + event.movementY : elem.top,
    left: elem.left
  };
};

/* harmony default export */ __webpack_exports__["default"] = (top);

/***/ }),

/***/ "./src/library/ui/common/Resizable/helpers/index.js":
/*!**********************************************************!*\
  !*** ./src/library/ui/common/Resizable/helpers/index.js ***!
  \**********************************************************/
/*! exports provided: calculateResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculate_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-resize */ "./src/library/ui/common/Resizable/helpers/calculate-resize/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateResize", function() { return _calculate_resize__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/library/ui/common/Resizable/index.js":
/*!**************************************************!*\
  !*** ./src/library/ui/common/Resizable/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui */ "./src/library/ui/index.js");
/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./children */ "./src/library/ui/common/Resizable/children/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/library/ui/common/Resizable/helpers/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/library/ui/common/Resizable/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Resizable = function Resizable(_ref) {
  var children = _ref.children,
      isActive = _ref.isActive,
      minHeight = _ref.minHeight,
      minWidth = _ref.minWidth,
      onResize = _ref.onResize,
      onResizeEnd = _ref.onResizeEnd,
      onResizeStart = _ref.onResizeStart,
      style = _ref.style;
  var resizableRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleResize = function handleResize(event, handleType) {
    return onResize(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["calculateResize"])({
      elem: resizableRef.current,
      event: event,
      handleType: handleType,
      minSize: {
        height: minHeight,
        width: minWidth
      }
    }), event);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui__WEBPACK_IMPORTED_MODULE_1__["ViewRef"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_4___default.a.view), style),
    ref: resizableRef
  }, children, isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_children__WEBPACK_IMPORTED_MODULE_2__["ResizableHandles"], {
    onResize: handleResize,
    onResizeEnd: onResizeEnd,
    onResizeStart: onResizeStart
  }));
};

Resizable.defaultProps = {
  children: null,
  isActive: true,
  minHeight: 1,
  minWidth: 1,
  onResize: function onResize() {},
  onResizeEnd: function onResizeEnd() {},
  onResizeStart: function onResizeStart() {},
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Resizable);

/***/ }),

/***/ "./src/library/ui/common/Resizable/styles.js":
/*!***************************************************!*\
  !*** ./src/library/ui/common/Resizable/styles.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/library/ui/common/Text/index.js":
/*!*********************************************!*\
  !*** ./src/library/ui/common/Text/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/library/ui/common/Text/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Text = function Text(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_1___default.a.container), props.style),
    title: props.title
  }, props.children);
};

Text.defaultProps = {
  children: null,
  title: null
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/library/ui/common/Text/styles.js":
/*!**********************************************!*\
  !*** ./src/library/ui/common/Text/styles.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/library/ui/common/index.js":
/*!****************************************!*\
  !*** ./src/library/ui/common/index.js ***!
  \****************************************/
/*! exports provided: Resizable, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Resizable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resizable */ "./src/library/ui/common/Resizable/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resizable", function() { return _Resizable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./src/library/ui/common/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/library/ui/index.js":
/*!*********************************!*\
  !*** ./src/library/ui/index.js ***!
  \*********************************/
/*! exports provided: Resizable, Text, View, ViewRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/library/ui/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resizable", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Resizable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ "./src/library/ui/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _views__WEBPACK_IMPORTED_MODULE_1__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewRef", function() { return _views__WEBPACK_IMPORTED_MODULE_1__["ViewRef"]; });




/***/ }),

/***/ "./src/library/ui/views/View/index.js":
/*!********************************************!*\
  !*** ./src/library/ui/views/View/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var View = function View(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props);
};

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/library/ui/views/ViewRef/index.js":
/*!***********************************************!*\
  !*** ./src/library/ui/views/ViewRef/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var ViewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
    ref: ref
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (ViewRef);

/***/ }),

/***/ "./src/library/ui/views/index.js":
/*!***************************************!*\
  !*** ./src/library/ui/views/index.js ***!
  \***************************************/
/*! exports provided: View, ViewRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./src/library/ui/views/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ViewRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewRef */ "./src/library/ui/views/ViewRef/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewRef", function() { return _ViewRef__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/procedures/windows/close/get-next-focused-id/index.js":
/*!*******************************************************************!*\
  !*** ./src/procedures/windows/close/get-next-focused-id/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (byId) {
  var nextFocusedWindow = Object.values(byId).reduce(function (prevVal, currentVal) {
    if (currentVal.renderIndex >= prevVal.renderIndex) {
      prevVal = currentVal;
    }

    return prevVal;
  }, {
    renderIndex: 0
  });
  return nextFocusedWindow ? nextFocusedWindow.id : null;
});

/***/ }),

/***/ "./src/procedures/windows/close/index.js":
/*!***********************************************!*\
  !*** ./src/procedures/windows/close/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _get_next_focused_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-next-focused-id */ "./src/procedures/windows/close/get-next-focused-id/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  var _store$dispatch = _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.remove", id),
      byId = _store$dispatch.byId;

  var nextFocusedId = Object(_get_next_focused_id__WEBPACK_IMPORTED_MODULE_1__["default"])(byId);
  nextFocusedId && _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.focus", nextFocusedId);
});

/***/ }),

/***/ "./src/procedures/windows/create/index.js":
/*!************************************************!*\
  !*** ./src/procedures/windows/create/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _factories_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../factories/window */ "./src/factories/window/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var createdWindow = _factories_window__WEBPACK_IMPORTED_MODULE_1__["default"].create(attrs);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.add", createdWindow);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.focus", createdWindow.id);
});

/***/ }),

/***/ "./src/procedures/windows/move/calculate-move/index.js":
/*!*************************************************************!*\
  !*** ./src/procedures/windows/move/calculate-move/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scr_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scr-pipe */ "./node_modules/scr-pipe/dist/pipe.js");
/* harmony import */ var scr_pipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scr_pipe__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var checkWindowTop = function checkWindowTop(ctx) {
  var maxTop = 0;
  var position = {
    x: ctx.position.x,
    y: ctx.position.y < maxTop ? maxTop : ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowBottom = function checkWindowBottom(ctx) {
  var maxBottom = window.innerHeight - 24;
  var position = {
    x: ctx.position.x,
    y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowLeft = function checkWindowLeft(ctx) {
  var maxLeft = -(ctx.size.width - 24);
  var position = {
    x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x,
    y: ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowRight = function checkWindowRight(ctx) {
  var maxRight = window.innerWidth - 24;
  var position = {
    x: ctx.position.x > maxRight ? maxRight : ctx.position.x,
    y: ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      window = _ref.window;

  var _elem$getBoundingClie = elem.getBoundingClientRect(),
      prevTop = _elem$getBoundingClie.top,
      prevLeft = _elem$getBoundingClie.left;

  return scr_pipe__WEBPACK_IMPORTED_MODULE_0___default()({
    position: {
      x: prevLeft + event.movementX,
      y: prevTop + event.movementY
    },
    size: window.size
  }).flow(checkWindowTop).flow(checkWindowBottom).flow(checkWindowLeft).flow(checkWindowRight).close().position;
});

/***/ }),

/***/ "./src/procedures/windows/move/index.js":
/*!**********************************************!*\
  !*** ./src/procedures/windows/move/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _calculate_move__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-move */ "./src/procedures/windows/move/calculate-move/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var elem = _ref.elem,
      event = _ref.event,
      id = _ref.id,
      _ref$shouldDispatch = _ref.shouldDispatch,
      shouldDispatch = _ref$shouldDispatch === void 0 ? false : _ref$shouldDispatch;
  var window = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState("windows").byId[id];

  if (elem && window) {
    var position = Object(_calculate_move__WEBPACK_IMPORTED_MODULE_1__["default"])({
      elem: elem,
      event: event,
      window: window
    });
    elem.style.transform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
    window.events.onMove({
      position: position
    }, event);
    shouldDispatch && _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.update", {
      id: id,
      position: position
    });
  }
});

/***/ }),

/***/ "./src/procedures/windows/resize/calculate-resize/index.js":
/*!*****************************************************************!*\
  !*** ./src/procedures/windows/resize/calculate-resize/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scr_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scr-pipe */ "./node_modules/scr-pipe/dist/pipe.js");
/* harmony import */ var scr_pipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scr_pipe__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var checkWindowTop = function checkWindowTop(ctx) {
  var maxTop = 0;
  var position = {
    x: ctx.position.x,
    y: ctx.position.y < maxTop ? maxTop : ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowBottom = function checkWindowBottom(ctx) {
  var maxBottom = window.innerHeight - 24;
  var position = {
    x: ctx.position.x,
    y: ctx.position.y > maxBottom ? maxBottom : ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowLeft = function checkWindowLeft(ctx) {
  var maxLeft = -(ctx.size.width - 24);
  var position = {
    x: ctx.position.x < maxLeft ? maxLeft : ctx.position.x,
    y: ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

var checkWindowRight = function checkWindowRight(ctx) {
  var maxRight = window.innerWidth - 24;
  var position = {
    x: ctx.position.x > maxRight ? maxRight : ctx.position.x,
    y: ctx.position.y
  };
  return _objectSpread(_objectSpread({}, ctx), {}, {
    position: position
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (dimensions, shouldDispatch) {
  return shouldDispatch ? {
    position: {
      x: dimensions.left,
      y: dimensions.top
    },
    size: {
      height: dimensions.height,
      width: dimensions.width
    }
  } : scr_pipe__WEBPACK_IMPORTED_MODULE_0___default()({
    position: {
      x: dimensions.left,
      y: dimensions.top
    },
    size: {
      height: dimensions.height,
      width: dimensions.width
    }
  }).flow(checkWindowTop).flow(checkWindowBottom).flow(checkWindowLeft).flow(checkWindowRight).close();
});

/***/ }),

/***/ "./src/procedures/windows/resize/index.js":
/*!************************************************!*\
  !*** ./src/procedures/windows/resize/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _calculate_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-resize */ "./src/procedures/windows/resize/calculate-resize/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var dimensions = _ref.dimensions,
      elem = _ref.elem,
      event = _ref.event,
      id = _ref.id,
      _ref$shouldDispatch = _ref.shouldDispatch,
      shouldDispatch = _ref$shouldDispatch === void 0 ? false : _ref$shouldDispatch;
  var window = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState("windows").byId[id];

  if (elem && window) {
    var _calculateResize = Object(_calculate_resize__WEBPACK_IMPORTED_MODULE_1__["default"])(dimensions, shouldDispatch),
        position = _calculateResize.position,
        size = _calculateResize.size;

    elem.style.transform = "translate(".concat(position.x, "px, ").concat(position.y, "px)");
    elem.style.height = "".concat(size.height, "px");
    elem.style.width = "".concat(size.width, "px");
    window.events.onResize({
      position: position,
      size: size
    }, event);
    shouldDispatch && _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch("windows.update", {
      id: id,
      position: position,
      size: size
    });
  }
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generic-data-chamber */ "./node_modules/generic-data-chamber/dist/bundle.js");
/* harmony import */ var generic_data_chamber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tool_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-browser */ "./src/store/tool-browser/index.js");
/* harmony import */ var _windows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windows */ "./src/store/windows/index.js");
 // Store Types //



var store = new generic_data_chamber__WEBPACK_IMPORTED_MODULE_0__["Store"]({
  name: "dev-tools",
  types: {
    toolBrowser: _tool_browser__WEBPACK_IMPORTED_MODULE_1__["default"],
    windows: _windows__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/tool-browser/close/index.js":
/*!***********************************************!*\
  !*** ./src/store/tool-browser/close/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var prevState = _ref.prevState;
  return _objectSpread(_objectSpread({}, prevState), {}, {
    isOpen: false
  });
});

/***/ }),

/***/ "./src/store/tool-browser/index.js":
/*!*****************************************!*\
  !*** ./src/store/tool-browser/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close */ "./src/store/tool-browser/close/index.js");
/* harmony import */ var _open__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open */ "./src/store/tool-browser/open/index.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle */ "./src/store/tool-browser/toggle/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  actions: {
    close: _close__WEBPACK_IMPORTED_MODULE_0__["default"],
    open: _open__WEBPACK_IMPORTED_MODULE_1__["default"],
    toggle: _toggle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "toolBrowser",
  state: {
    isOpen: false
  }
});

/***/ }),

/***/ "./src/store/tool-browser/open/index.js":
/*!**********************************************!*\
  !*** ./src/store/tool-browser/open/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var prevState = _ref.prevState;
  return _objectSpread(_objectSpread({}, prevState), {}, {
    isOpen: true
  });
});

/***/ }),

/***/ "./src/store/tool-browser/toggle/index.js":
/*!************************************************!*\
  !*** ./src/store/tool-browser/toggle/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var prevState = _ref.prevState;
  return _objectSpread(_objectSpread({}, prevState), {}, {
    isOpen: !prevState.isOpen
  });
});

/***/ }),

/***/ "./src/store/windows/add/index.js":
/*!****************************************!*\
  !*** ./src/store/windows/add/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref, window) {
  var prevState = _ref.prevState;

  var byId = _objectSpread(_objectSpread({}, prevState.byId), {}, _defineProperty({}, window.id, _objectSpread({}, window)));

  var ids = [].concat(_toConsumableArray(prevState.ids), [window.id]);
  return _objectSpread(_objectSpread({}, prevState), {}, {
    byId: byId,
    ids: ids
  });
});

/***/ }),

/***/ "./src/store/windows/focus/index.js":
/*!******************************************!*\
  !*** ./src/store/windows/focus/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref, id) {
  var prevState = _ref.prevState;

  var prevById = _objectSpread({}, prevState.byId);

  var prevFocusedId = prevState.focusedId;
  var prevFocusedWindow = prevById[prevFocusedId];

  var byId = _objectSpread({}, prevById);

  var maxRenderIndex = prevState.maxRenderIndex + 1;
  var nextFocusedWindow = prevById[id];
  prevFocusedWindow && (byId[prevFocusedId] = _objectSpread(_objectSpread({}, prevFocusedWindow), {}, {
    isFocused: false
  }));
  byId[id] = _objectSpread(_objectSpread({}, nextFocusedWindow), {}, {
    isFocused: true,
    renderIndex: maxRenderIndex
  });
  return _objectSpread(_objectSpread({}, prevState), {}, {
    byId: byId,
    focusedId: id,
    maxRenderIndex: maxRenderIndex
  });
});

/***/ }),

/***/ "./src/store/windows/index.js":
/*!************************************!*\
  !*** ./src/store/windows/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./src/store/windows/add/index.js");
/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus */ "./src/store/windows/focus/index.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./src/store/windows/remove/index.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./src/store/windows/update/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  actions: {
    add: _add__WEBPACK_IMPORTED_MODULE_0__["default"],
    focus: _focus__WEBPACK_IMPORTED_MODULE_1__["default"],
    remove: _remove__WEBPACK_IMPORTED_MODULE_2__["default"],
    update: _update__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  name: "windows",
  state: {
    byId: {},
    focusedId: null,
    ids: [],
    maxRenderIndex: 0
  }
});

/***/ }),

/***/ "./src/store/windows/remove/index.js":
/*!*******************************************!*\
  !*** ./src/store/windows/remove/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref, id) {
  var prevState = _ref.prevState;
  var prevById = prevState.byId;

  var ids = _toConsumableArray(prevState.ids).filter(function (windowId) {
    return windowId !== id;
  });

  var byId = Object.values(prevById).reduce(function (prevVal, currentVal) {
    currentVal.id !== id && (prevVal[currentVal.id] = currentVal);
    return prevVal;
  }, {});
  return _objectSpread(_objectSpread({}, prevState), {}, {
    byId: byId,
    ids: ids
  });
});

/***/ }),

/***/ "./src/store/windows/update/index.js":
/*!*******************************************!*\
  !*** ./src/store/windows/update/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref, updatedWindow) {
  var prevState = _ref.prevState;
  var prevById = prevState.byId;
  var prevWindow = prevById[updatedWindow.id];

  var byId = _objectSpread({}, prevById);

  byId[prevWindow.id] = _objectSpread(_objectSpread({}, prevWindow), updatedWindow);
  return _objectSpread(_objectSpread({}, prevState), {}, {
    byId: byId
  });
});

/***/ }),

/***/ "./src/tools/hooks/index.js":
/*!**********************************!*\
  !*** ./src/tools/hooks/index.js ***!
  \**********************************/
/*! exports provided: useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-store */ "./src/tools/hooks/use-store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _use_store__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/tools/hooks/use-store/index.js":
/*!********************************************!*\
  !*** ./src/tools/hooks/use-store/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _library_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/hooks */ "./src/library/hooks/index.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_library_hooks__WEBPACK_IMPORTED_MODULE_1__["useStore"])(_store__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZPUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGV2T1Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9ub2RlX21vZHVsZXMvZ2VuZXJpYy1kYXRhLWNoYW1iZXIvZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9ub2RlX21vZHVsZXMvc2NyLXBpcGUvZGlzdC9waXBlLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vTWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL1Rvb2xJbmZvL01haW4vc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vU2Vjb25kYXJ5L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vU2Vjb25kYXJ5L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL1Rvb2xJbmZvL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbExpc3QvSXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL1Rvb2xMaXN0L0l0ZW0vc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sTGlzdC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvQ29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1dpbmRvd01hbmFnZXIvV2luZG93L0NvbnRlbnQvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2NoaWxkcmVuL0FjdGlvbkJ1dHRvbnMvQWN0aW9uQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2NoaWxkcmVuL0FjdGlvbkJ1dHRvbnMvQWN0aW9uQnV0dG9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1dpbmRvd01hbmFnZXIvV2luZG93L0hlYWRlci9jaGlsZHJlbi9BY3Rpb25CdXR0b25zL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2NoaWxkcmVuL0FjdGlvbkJ1dHRvbnMvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2NoaWxkcmVuL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvaGVscGVycy9vbi1tb3ZlLWhhbmRsZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1dpbmRvd01hbmFnZXIvV2luZG93L1Jlc2l6YWJsZS9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvUmVzaXphYmxlL2hlbHBlcnMvb24tcmVzaXplLWhhbmRsZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvUmVzaXphYmxlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvUmVzaXphYmxlL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1dpbmRvd01hbmFnZXIvV2luZG93L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1Mvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2ZhY3Rvcmllcy93aW5kb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1jb250ZXh0LW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9ob29rcy91c2UtaG92ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9ob29rcy91c2UtbWVyZ2Utc3RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9ob29rcy91c2Utb24tbW92ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1vbi13aW5kb3ctZXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9ob29rcy91c2Utc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9zdHlsZXMvY29sb3JzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2NvbG9ycy9wYWxldHRlcy9ibGFjay5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMvYmx1ZS5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMvZ3JheS5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9zdHlsZXMvY29sb3JzL3BhbGV0dGVzL3JlZC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMvd2hpdGUuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9zdHlsZXMvY29sb3JzL3BhbGV0dGVzL3llbGxvdy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9zdHlsZXMvY3NzL3RleHRPdmVyZmxvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jc3MvdXNlclNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvY2hpbGRyZW4vUmVzaXphYmxlSGFuZGxlcy9SZXNpemFibGVIYW5kbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2NoaWxkcmVuL1Jlc2l6YWJsZUhhbmRsZXMvUmVzaXphYmxlSGFuZGxlL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvY2hpbGRyZW4vUmVzaXphYmxlSGFuZGxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvY2hpbGRyZW4vUmVzaXphYmxlSGFuZGxlcy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2NoaWxkcmVuL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2NhbGN1bGF0ZS1yZXNpemUvYm90dG9tLWxlZnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS9ib3R0b20tcmlnaHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS9ib3R0b20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL2xlZnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS9yaWdodC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL3RvcC1sZWZ0L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2NhbGN1bGF0ZS1yZXNpemUvdG9wLXJpZ2h0L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2NhbGN1bGF0ZS1yZXNpemUvdG9wL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9UZXh0L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS92aWV3cy9WaWV3L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvdmlld3MvVmlld1JlZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9jbG9zZS9nZXQtbmV4dC1mb2N1c2VkLWlkL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9jbG9zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9wcm9jZWR1cmVzL3dpbmRvd3MvY3JlYXRlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9tb3ZlL2NhbGN1bGF0ZS1tb3ZlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9tb3ZlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9yZXNpemUvY2FsY3VsYXRlLXJlc2l6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9wcm9jZWR1cmVzL3dpbmRvd3MvcmVzaXplL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL3Rvb2wtYnJvd3Nlci9jbG9zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS90b29sLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvdG9vbC1icm93c2VyL29wZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvdG9vbC1icm93c2VyL3RvZ2dsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS93aW5kb3dzL2FkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS93aW5kb3dzL2ZvY3VzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL3dpbmRvd3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvd2luZG93cy9yZW1vdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvd2luZG93cy91cGRhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvdG9vbHMvaG9va3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvdG9vbHMvaG9va3MvdXNlLXN0b3JlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNYWluIiwibGFiZWwiLCJzdHlsZSIsInZlcnNpb24iLCJzdHlsZXMiLCJ2aWV3IiwiaWNvbiIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJ3aGl0ZSIsImdyYXkiLCJTZWNvbmRhcnkiLCJkZXNjcmlwdGlvbiIsImJvcmRlclRvcCIsInRleHRBbGlnbiIsIlRvb2xJbmZvIiwic2VsZWN0ZWRUb29sIiwibWFpbiIsInNlY29uZGFyeSIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiSXRlbSIsIm9wZW5XaW5kb3ciLCJ3aW5kb3ciLCJoYW5kbGVDbGljayIsImNzcyIsInVzZXJTZWxlY3QiLCJub25lIiwidGV4dE92ZXJmbG93IiwiZWxsaXBzaXMiLCJUb29sTGlzdCIsInNlbGVjdGVkSW5kZXgiLCJ0b29scyIsInRpdGxlIiwibGlzdCIsIm1hcCIsInRvb2wiLCJpbmRleCIsImlzU2VsZWN0ZWQiLCJpdGVtIiwiYm9yZGVyUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJmbGV4Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwiYmx1ZSIsIkFSUk9XX0RPV04iLCJBUlJPV19VUCIsIkVOVEVSIiwiRVNDQVBFIiwiVG9vbEJyb3dzZXIiLCJ1c2VTdGF0ZSIsInNldFNlbGVjdGVkSW5kZXgiLCJjb25maWdzIiwic3RvcmUiLCJkaXNwYXRjaCIsInNldFRpbWVvdXQiLCJjcmVhdGVXaW5kb3ciLCJ1cGRhdGVTZWxlY3RlZEluZGV4IiwibGVuZ3RoIiwiaGFuZGxlS2V5VXAiLCJldmVudCIsImtleUNvZGUiLCJ1c2VPbldpbmRvd0V2ZW50IiwiaW5uZXJXaWR0aCIsInRvb2xMaXN0IiwidG9vbEluZm8iLCJjZW50ZXIiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJUX0tFWUNPREUiLCJUb29sTWFuYWdlciIsImZvcm1hdHRlZFRvb2xzIiwiaXNPcGVuIiwidXNlU3RvcmUiLCJnZXRTdGF0ZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJ0b1VwcGVyQ2FzZSIsInRvb2xCcm93c2VyIiwib3ZlcmZsb3ciLCJwb2ludGVyRXZlbnRzIiwiekluZGV4IiwiQ29udGVudCIsIm1lbW8iLCJjb250ZW50UmVmIiwiaWQiLCJDb21wb25lbnQiLCJieUlkIiwiY29tcG9uZW50IiwiaGFuZGxlQ2xvc2UiLCJjbG9zZVdpbmRvdyIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJBY3Rpb25CdXR0b24iLCJvbkNsaWNrIiwicHJpbWFyeUNvbG9yIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJzdG9wUHJvcGFnYXRpb24iLCJBY3Rpb25CdXR0b25zIiwiaXNGb2N1c2VkIiwib25DbG9zZSIsIm1hcmdpblJpZ2h0IiwicmVkIiwieWVsbG93IiwiZ3JlZW4iLCJ3aW5kb3dSZWYiLCJoYW5kbGVNb3ZlIiwibW92ZVdpbmRvdyIsImVsZW0iLCJjdXJyZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNb3ZlRW5kIiwic2hvdWxkRGlzcGF0Y2giLCJoYW5kbGVNb3ZlU3RhcnQiLCJvbk1vdmUiLCJvbk1vdmVFbmQiLCJvbk1vdmVTdGFydCIsIkhlYWRlciIsInVzZU9uTW92ZSIsIm9uTW92ZUhhbmRsZXJzIiwiaGVhZGVyUmVmIiwicmVmIiwiaXNPcGFxdWUiLCJmb2N1c2VkIiwiYWN0aW9uQnV0dG9ucyIsImZsZXhTcGFjZXIiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdSaWdodCIsImhhbmRsZVJlc2l6ZSIsImRpbWVuc2lvbnMiLCJyZXNpemVXaW5kb3ciLCJoYW5kbGVSZXNpemVFbmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoYW5kbGVSZXNpemVTdGFydCIsIlJlc2l6YWJsZSIsImNoaWxkcmVuIiwib25SZXNpemVIYW5kbGVycyIsInJlc2l6YWJsZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiV2luZG93IiwidXNlUmVmIiwic3RhdGUiLCJoYW5kbGVNb3VzZURvd24iLCJoZWFkZXIiLCJ4IiwieSIsInNpemUiLCJyZW5kZXJJbmRleCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJXaW5kb3dNYW5hZ2VyIiwid2luZG93SWRzIiwiaWRzIiwid2luZG93SWQiLCJEZXZPUyIsImJveFNpemluZyIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJjdXJyZW50SWQiLCJjcmVhdGUiLCJhdHRycyIsImV2ZW50cyIsInR5cGUiLCJvblJlc2l6ZSIsImlzQWN0aXZlIiwidXNlTWVyZ2VTdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJjbGllbnRYIiwiY2xpZW50WSIsImNsb3NlTWVudSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRlZmF1bHRTdGF0ZSIsIm1lcmdlU3RhdGUiLCJ1cGRhdGVkU3RhdGUiLCJGdW5jdGlvbiIsInByZXZTdGF0ZSIsImlzTW91c2VEb3duIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJtYXBTdG9yZVRvU3RhdGUiLCJ1bmRlZmluZWQiLCJpc0NhbmNlbGVkIiwic3Vic2NyaWJlciIsInN1YnNjcmliZSIsImN1cnJlbnRTdG9yZSIsInVuc3Vic2NyaWJlIiwiYmxhY2siLCJ3aGl0ZVNwYWNlIiwiV2Via2l0VXNlclNlbGVjdCIsIk1velVzZXJTZWxlY3QiLCJNc1VzZXJTZWxlY3QiLCJ0ZXh0IiwiUmVzaXphYmxlSGFuZGxlIiwiY3Vyc29yIiwib25SZXNpemVFbmQiLCJvblJlc2l6ZVN0YXJ0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUmVzaXphYmxlSGFuZGxlcyIsInJpZ2h0IiwiYm90dG9tIiwidG9wTGVmdCIsInRvcFJpZ2h0IiwiYm90dG9tTGVmdCIsImJvdHRvbVJpZ2h0Iiwib25SZXNpc2VTdGFydCIsIm1pblNpemUiLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJjYWxjdWxhdG9ycyIsImNhbGN1bGF0ZVJlc2l6ZSIsImhhbmRsZVR5cGUiLCJyZXNpemFibGVSZWYiLCJUZXh0IiwicHJvcHMiLCJjb250YWluZXIiLCJWaWV3IiwiVmlld1JlZiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsIm5leHRGb2N1c2VkV2luZG93IiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwicHJldlZhbCIsImN1cnJlbnRWYWwiLCJuZXh0Rm9jdXNlZElkIiwiZ2V0TmV4dEZvY3VzZWRJZCIsImNyZWF0ZWRXaW5kb3ciLCJ3aW5kb3dGYWN0b3J5IiwiY2hlY2tXaW5kb3dUb3AiLCJjdHgiLCJtYXhUb3AiLCJjaGVja1dpbmRvd0JvdHRvbSIsIm1heEJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2hlY2tXaW5kb3dMZWZ0IiwibWF4TGVmdCIsImNoZWNrV2luZG93UmlnaHQiLCJtYXhSaWdodCIsInByZXZUb3AiLCJwcmV2TGVmdCIsInBpcGUiLCJmbG93IiwiY2xvc2UiLCJjYWxjdWxhdGVNb3ZlIiwiU3RvcmUiLCJuYW1lIiwidHlwZXMiLCJ3aW5kb3dzIiwiYWN0aW9ucyIsIm9wZW4iLCJ0b2dnbGUiLCJwcmV2QnlJZCIsInByZXZGb2N1c2VkSWQiLCJmb2N1c2VkSWQiLCJwcmV2Rm9jdXNlZFdpbmRvdyIsIm1heFJlbmRlckluZGV4IiwiYWRkIiwiZm9jdXMiLCJyZW1vdmUiLCJ1cGRhdGUiLCJmaWx0ZXIiLCJ1cGRhdGVkV2luZG93IiwicHJldldpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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RCxFQUFVQyxVQUFWLEVBQXlCO0FBQ25FQSxjQUFVLENBQUN4SixFQUFYLEtBQWtCQSxFQUFsQixLQUF5QnVKLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDeEosRUFBWixDQUFQLEdBQXlCd0osVUFBbEQ7QUFDQSxXQUFPRCxPQUFQO0FBQ0QsR0FIWSxFQUdWLEVBSFUsQ0FBYjtBQUtBLHlDQUFZckQsU0FBWjtBQUF1QmhHLFFBQUksRUFBSkEsSUFBdkI7QUFBNkJrRSxPQUFHLEVBQUhBO0FBQTdCO0FBQ0QsQ0FURCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWUsK0VBQWdCMEgsYUFBaEIsRUFBa0M7QUFBQSxNQUEvQjVGLFNBQStCLFFBQS9CQSxTQUErQjtBQUMvQyxNQUFNa0YsUUFBUSxHQUFHbEYsU0FBUyxDQUFDaEcsSUFBM0I7QUFDQSxNQUFNNkwsVUFBVSxHQUFHWCxRQUFRLENBQUNVLGFBQWEsQ0FBQzlMLEVBQWYsQ0FBM0I7O0FBQ0EsTUFBTUUsSUFBSSxxQkFBUWtMLFFBQVIsQ0FBVjs7QUFFQWxMLE1BQUksQ0FBQzZMLFVBQVUsQ0FBQy9MLEVBQVosQ0FBSixtQ0FBMkIrTCxVQUEzQixHQUEwQ0QsYUFBMUM7QUFFQSx5Q0FBWTVGLFNBQVo7QUFBdUJoRyxRQUFJLEVBQUpBO0FBQXZCO0FBQ0QsQ0FSRCxFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlZCw4SEFBUSxDQUFDeEIsOENBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7QUNIQSxtRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkZXZPU1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkZXZPU1wiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5kYXRhQ2hhbWJlcj10KCk6ZS5kYXRhQ2hhbWJlcj10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIGk9dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsciksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKXIuZChuLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCIvXCIscihyLnM9MCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gaShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9uKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7byhlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6bihPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBvKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBzKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciByPVtdLG49ITAsaT0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBzLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShzPXUubmV4dCgpKS5kb25lKSYmKHIucHVzaChzLnZhbHVlKSwhdHx8ci5sZW5ndGghPT10KTtuPSEwKTt9Y2F0Y2goZSl7aT0hMCxvPWV9ZmluYWxseXt0cnl7bnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihpKXRocm93IG99fXJldHVybiByfShlLHQpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gdShlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiB1KGUsdCl9KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiB1KGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ci5yKHQpLHIuZCh0LFwiU3RvcmVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZH0pKTt2YXIgYz17aXNQZW5kaW5nOiExLGlzRXJyb3I6ITEsZXJyb3I6bnVsbCxzaG91bGRUaHJvd0Vycm9yczohMCxzaG91bGRUcmFja0FzeW5jU3RhdGU6ITB9LGE9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcj1zKHQsMiksbj1yWzBdLG89clsxXSx1PVwiZnVuY3Rpb25cIiE9dHlwZW9mIG87cmV0dXJuIGVbbl09e2NvbmZpZ3M6dT9pKGkoe30sYyksby5jb25maWdzKTpjLHJlZHVjZXI6dT9vLnJlZHVjZXI6b30sZX0pLHt9KX0sZj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtyZXR1cm4gT2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciByPXModCwyKSxuPShyWzBdLHJbMV0pLGk9bi5hY3Rpb25zLG89dm9pZCAwPT09aT97fTppLHU9bi5uYW1lLGM9bi5zdGF0ZSxmPXZvaWQgMD09PWM/bnVsbDpjO3JldHVybiBlW3VdPXthY3Rpb25zOmEobyksc3RhdGU6Zn0sZX0pLHt9KX07ZnVuY3Rpb24gbChlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgU3ltYm9sfHwhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoZSkpKXJldHVybjt2YXIgcj1bXSxuPSEwLGk9ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgcyx1PWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0ocz11Lm5leHQoKSkuZG9uZSkmJihyLnB1c2gocy52YWx1ZSksIXR8fHIubGVuZ3RoIT09dCk7bj0hMCk7fWNhdGNoKGUpe2k9ITAsbz1lfWZpbmFsbHl7dHJ5e258fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYoaSl0aHJvdyBvfX1yZXR1cm4gcn0oZSx0KXx8ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHkoZSx0KTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJmUuY29uc3RydWN0b3ImJihyPWUuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKGUpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4geShlLHQpfShlLHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24geShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLG49bmV3IEFycmF5KHQpO3I8dDtyKyspbltyXT1lW3JdO3JldHVybiBufWZ1bmN0aW9uIHAoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIGIoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe2goZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnAoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gaChlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gdihlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19dmFyIGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3ZhciByPXQubmFtZSxuPXZvaWQgMD09PXI/XCJcIjpyLGk9dC5zZXJ2aWNlcyxvPXZvaWQgMD09PWk/e306aSxzPXQudHlwZXMsdT12b2lkIDA9PT1zP3t9OnM7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0aGlzLmxhc3RVaWQ9MCx0aGlzLm5hbWU9bix0aGlzLnNlcnZpY2VzPW8sdGhpcy5zdWJzY3JpYmVycz17fSx0aGlzLnR5cGVzPWYodSksdGhpcy5fdHlwZUNvbmZpZ3M9dX12YXIgdCxyLG47cmV0dXJuIHQ9ZSwocj1be2tleTpcImFkZFR5cGVcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLnR5cGVzW2UubmFtZV0pdGhyb3cgbmV3IEVycm9yKCdFUlJPUiAoc3RvcmUuYWRkVHlwZSgpKTogVGhlIHR5cGUgbmFtZSBcIicuY29uY2F0KGUubmFtZSwnXCIgaXMgYWxyZWFkeSBpbiB1c2UgaW4gdGhlIFwiJykuY29uY2F0KHRoaXMubmFtZSwnXCIgc3RvcmUuJykpO3RoaXMudHlwZXM9YihiKHt9LHRoaXMudHlwZXMpLGYoe3R5cGU6ZX0pKX19LHtrZXk6XCJkaXNwYXRjaFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9bCh0aGlzLl90b2tlbml6ZUFjdGlvbihlKSwyKSxuPXJbMF0saT1yWzFdLG89dGhpcy50eXBlc1tuXSxzPW8uYWN0aW9uc1tpXTtyZXR1cm4gdGhpcy5fc2V0U3RhdGUoe3R5cGVOYW1lOm59KShzLnJlZHVjZXIoe3ByZXZTdGF0ZTpvLnN0YXRlLHNlcnZpY2VzOnRoaXMuc2VydmljZXN9LHQpKSx0aGlzLnR5cGVzW25dLnN0YXRlfX0se2tleTpcImRpc3BhdGNoQXN5bmNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPWwodGhpcy5fdG9rZW5pemVBY3Rpb24oZSksMiksbj1yWzBdLGk9clsxXSxvPXRoaXMudHlwZXNbbl0scz1vLmFjdGlvbnNbaV0sdT1zLmNvbmZpZ3Muc2hvdWxkVHJhY2tBc3luY1N0YXRlLGM9dGhpcy5fc2V0Q29uZmlncyh7YWN0aW9uTmFtZTppLHR5cGVOYW1lOm59KSxhPXRoaXMuX3NldFN0YXRlKHt0eXBlTmFtZTpufSk7cmV0dXJuIHUmJmMoe2lzUGVuZGluZzohMCxpc0Vycm9yOiExLGVycm9yOm51bGx9KSxQcm9taXNlLnJlc29sdmUocy5yZWR1Y2VyKHtwcmV2U3RhdGU6by5zdGF0ZSxzZXJ2aWNlczp0aGlzLnNlcnZpY2VzfSx0KSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHUmJmMoe2lzUGVuZGluZzohMX0sITEpLGEoZSksZX0pKS5jYXRjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIHUmJmMoe2lzUGVuZGluZzohMSxpc0Vycm9yOiEwLGVycm9yOmV9KSx1P3MuY29uZmlncy5zaG91bGRUaHJvd0Vycm9ycyYmUHJvbWlzZS5yZWplY3QoZSk6UHJvbWlzZS5yZWplY3QoZSl9KSl9fSx7a2V5OlwiZ2V0RXJyb3JcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1sKHRoaXMuX3Rva2VuaXplQWN0aW9uKGUpLDIpLHI9dFswXSxuPXRbMV07cmV0dXJuIHRoaXMudHlwZXNbcl0uYWN0aW9uc1tuXS5jb25maWdzLmVycm9yfX0se2tleTpcImdldFN0YXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/dGhpcy50eXBlc1tlXS5zdGF0ZTpPYmplY3QuZW50cmllcyh0aGlzLnR5cGVzKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9bCh0LDIpLG49clswXSxpPXJbMV0uc3RhdGU7cmV0dXJuIGVbbl09aSxlfSkse30pfX0se2tleTpcImlzRXJyb3JcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1sKHRoaXMuX3Rva2VuaXplQWN0aW9uKGUpLDIpLHI9dFswXSxuPXRbMV07cmV0dXJuIHRoaXMudHlwZXNbcl0uYWN0aW9uc1tuXS5jb25maWdzLmlzRXJyb3J9fSx7a2V5OlwiaXNQZW5kaW5nXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9bCh0aGlzLl90b2tlbml6ZUFjdGlvbihlKSwyKSxyPXRbMF0sbj10WzFdO3JldHVybiB0aGlzLnR5cGVzW3JdLmFjdGlvbnNbbl0uY29uZmlncy5pc1BlbmRpbmd9fSx7a2V5OlwicmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGFzdFVpZD0wLHRoaXMuc3Vic2NyaWJlcnM9e30sdGhpcy50eXBlcz1mKHRoaXMuX3R5cGVDb25maWdzKX19LHtrZXk6XCJzdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06ZnVuY3Rpb24oKXt9LHI9XCJ1aWRfXCIuY29uY2F0KCsrdGhpcy5sYXN0VWlkKTtyZXR1cm4gdGhpcy5zdWJzY3JpYmVyc1tyXT10LHQodGhpcyx7dHlwZU5hbWU6bnVsbH0pLHtvbk5vdGlmeTp0LHRva2VuOnIsdW5zdWJzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm4gZS5fdW5zdWJzY3JpYmUocil9fX19LHtrZXk6XCJfbm90aWZ5XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztPYmplY3QudmFsdWVzKHRoaXMuc3Vic2NyaWJlcnMpLmZvckVhY2goKGZ1bmN0aW9uKHIpe3JldHVybiByKHQse3R5cGVOYW1lOmV9KX0pKX19LHtrZXk6XCJfc2V0Q29uZmlnc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmFjdGlvbk5hbWUsbj1lLnR5cGVOYW1lO3JldHVybiBmdW5jdGlvbihlKXt2YXIgaT0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdLG89dC50eXBlc1tuXS5hY3Rpb25zW3JdLmNvbmZpZ3M7cmV0dXJuIHQudHlwZXNbbl0uYWN0aW9uc1tyXS5jb25maWdzPWIoYih7fSxvKSxlKSxpJiZ0Ll9ub3RpZnkobil9fX0se2tleTpcIl9zZXRTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLnR5cGVOYW1lO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3JldHVybiB0LnR5cGVzW3JdLnN0YXRlPWUsbiYmdC5fbm90aWZ5KHIpfX19LHtrZXk6XCJfdG9rZW5pemVBY3Rpb25cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1sKGUuc3BsaXQoXCIuXCIpLDEpWzBdO3JldHVyblt0LGUuc2xpY2UodC5sZW5ndGgrMSldfX0se2tleTpcIl91bnN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGw7ZGVsZXRlIHRoaXMuc3Vic2NyaWJlcnNbZV19fV0pJiZ2KHQucHJvdG90eXBlLHIpLG4mJnYodCxuKSxlfSgpfV0pfSkpOyIsIiFmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMucGlwZT1uKCk6ZS5waXBlPW4oKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj17fTtmdW5jdGlvbiB0KHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyx0KSxvLmw9ITAsby5leHBvcnRzfXJldHVybiB0Lm09ZSx0LmM9bix0LmQ9ZnVuY3Rpb24oZSxuLHIpe3QubyhlLG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LHQucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSx0LnQ9ZnVuY3Rpb24oZSxuKXtpZigxJm4mJihlPXQoZSkpLDgmbilyZXR1cm4gZTtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZih0LnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpdC5kKHIsbyxmdW5jdGlvbihuKXtyZXR1cm4gZVtuXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBuPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQobixcImFcIixuKSxufSx0Lm89ZnVuY3Rpb24oZSxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbil9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSxuLHQpe1widXNlIHN0cmljdFwiO3QucihuKTt2YXIgcj17ZXJyb3I6ZnVuY3Rpb24oZSxuKXtpZihlIGluc3RhbmNlb2YgRXJyb3IpcmV0dXJuIGU7dHJ5e3JldHVybiBuKGUpfWNhdGNoKGUpe3JldHVybiBlIGluc3RhbmNlb2YgRXJyb3I/ZTpFcnJvcihlKX19LG1heWJlOmZ1bmN0aW9uKGUsbil7cmV0dXJuIG51bGwhPWU/bihlKTpudWxsfSxzeW5jOmZ1bmN0aW9uKGUsbil7cmV0dXJuIGUgaW5zdGFuY2VvZiBQcm9taXNlP2UudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gbihlKX0pOm4oZSl9fTtuLmRlZmF1bHQ9ZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbihlKX07cmV0dXJuIGZ1bmN0aW9uIGUodCl7cmV0dXJue2JpbmQ6ZnVuY3Rpb24obyl7cmV0dXJuIG49XCJzdHJpbmdcIj09dHlwZW9mIG8/cltvXTpvLGUodCl9LGZsb3c6ZnVuY3Rpb24ocil7cmV0dXJuIGUobih0LHIpKX0sY2xvc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIGU/ZSh0KTp0fX19KGUpfX1dKS5kZWZhdWx0fSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgTWFpbiA9ICh7IGxhYmVsLCBzdHlsZSwgdmVyc2lvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5pY29ufT48L1ZpZXc+XG4gICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmxhYmVsfT57bGFiZWx9PC9UZXh0PlxuICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy52ZXJzaW9ufT57YFZlcnNpb246ICR7dmVyc2lvbn1gfTwvVGV4dD5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5NYWluLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6IFwiXCIsXG4gIHN0eWxlOiB7fSxcbiAgdmVyc2lvbjogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiQGxpYnJhcnkvc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgaWNvbjoge1xuICAgIGhlaWdodDogXCIxMjhweFwiLFxuICAgIHdpZHRoOiBcIjEyOHB4XCIsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICB9LFxuICB2ZXJzaW9uOiB7XG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogY29sb3JzLmdyYXlbNDAwXSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBTZWNvbmRhcnkgPSAoeyBkZXNjcmlwdGlvbiwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuU2Vjb25kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZGFyeTtcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzcwMF19YCxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogXCIxMXB4XCIsXG4gICAgY29sb3I6IGNvbG9ycy5ncmF5WzQwMF0sXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcbmltcG9ydCBTZWNvbmRhcnkgZnJvbSBcIi4vU2Vjb25kYXJ5XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBUb29sSW5mbyA9ICh7IHNlbGVjdGVkVG9vbCwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIDxNYWluIHN0eWxlPXtzdHlsZXMubWFpbn0gey4uLnNlbGVjdGVkVG9vbH0gLz5cbiAgICAgIDxTZWNvbmRhcnkgc3R5bGU9e3N0eWxlcy5zZWNvbmRhcnl9IHsuLi5zZWxlY3RlZFRvb2x9IC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuVG9vbEluZm8uZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZFRvb2w6IHt9LFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sSW5mbztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIG1haW46IHtcbiAgICBwYWRkaW5nOiBcIjhweCAwcHggMzJweCAwcHhcIixcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgcGFkZGluZ1RvcDogXCIxOHB4XCIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgSXRlbSA9ICh7IGxhYmVsLCBvcGVuV2luZG93LCBzdHlsZSwgd2luZG93IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBvcGVuV2luZG93KHdpbmRvdyk7XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAge2xhYmVsfVxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogXCJcIixcbiAgb3BlbldpbmRvdzogKCkgPT4ge30sXG4gIHN0eWxlOiB7fSxcbiAgd2luZG93OiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG4iLCJpbXBvcnQgeyBjb2xvcnMsIGNzcyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXG4gICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICAuLi5jc3MudXNlclNlbGVjdC5ub25lLFxuICAgIC4uLmNzcy50ZXh0T3ZlcmZsb3cuZWxsaXBzaXMsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgVG9vbExpc3QgPSAoeyBvcGVuV2luZG93LCBzZWxlY3RlZEluZGV4LCB0b29scywgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudGl0bGV9PkRFVi1PUyBUT09MIEJST1dTRVI8L1RleHQ+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICB7dG9vbHMubWFwKCh0b29sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEluZGV4ID09PSBpbmRleDtcbiAgICAgICAgICByZXR1cm4gPEl0ZW0gc3R5bGU9e3N0eWxlcy5pdGVtKGlzU2VsZWN0ZWQpfSBrZXk9e2BJVEVNXyR7aW5kZXh9YH0gb3BlbldpbmRvdz17b3BlbldpbmRvd30gey4uLnRvb2x9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvVmlldz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5Ub29sTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wZW5XaW5kb3c6ICgpID0+IHt9LFxuICBzZWxlY3RlZEluZGV4OiAwLFxuICBzdHlsZToge30sXG4gIHRvb2xzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xMaXN0O1xuIiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNzAwXX1gLFxuICB9LFxuICB0aXRsZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyYXlbODAwXSxcbiAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICAgIGZvbnRTaXplOiBcIjExcHhcIixcbiAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxuICAgIGhlaWdodDogXCIyOHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyOHB4XCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMjRweFwiLFxuICB9LFxuICBsaXN0OiB7XG4gICAgZmxleDogMSxcbiAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxuICAgIG92ZXJmbG93WDogXCJub25lXCIsXG4gIH0sXG4gIGl0ZW06IChpc1NlbGVjdGVkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaXNTZWxlY3RlZCAmJiBjb2xvcnMuYmx1ZVs4MDBdLFxuICAgICAgaGVpZ2h0OiBcIjI4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMjhweFwiLFxuICAgICAgcGFkZGluZzogXCIwcHggMjRweFwiLFxuICAgIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VPbldpbmRvd0V2ZW50IH0gZnJvbSBcIkBsaWJyYXJ5L2hvb2tzXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgY3JlYXRlV2luZG93IGZyb20gXCJAcHJvY2VkdXJlcy93aW5kb3dzL2NyZWF0ZVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCBUb29sSW5mbyBmcm9tIFwiLi9Ub29sSW5mb1wiO1xuaW1wb3J0IFRvb2xMaXN0IGZyb20gXCIuL1Rvb2xMaXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBBUlJPV19ET1dOID0gNDA7XG5jb25zdCBBUlJPV19VUCA9IDM4O1xuY29uc3QgRU5URVIgPSAxMztcbmNvbnN0IEVTQ0FQRSA9IDI3O1xuXG5jb25zdCBUb29sQnJvd3NlciA9ICh7IHN0eWxlLCB0b29scyB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9wZW5XaW5kb3cgPSAoY29uZmlncykgPT4ge1xuICAgIHN0b3JlLmRpc3BhdGNoKFwidG9vbEJyb3dzZXIuY2xvc2VcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBjcmVhdGVXaW5kb3coY29uZmlncyksIDApO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNlbGVjdGVkSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0b29scy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBrZXlDb2RlID09PSBBUlJPV19ET1dOICYmIHVwZGF0ZVNlbGVjdGVkSW5kZXgoc2VsZWN0ZWRJbmRleCArIDEpO1xuICAgIGtleUNvZGUgPT09IEFSUk9XX1VQICYmIHVwZGF0ZVNlbGVjdGVkSW5kZXgoc2VsZWN0ZWRJbmRleCAtIDEpO1xuICAgIGtleUNvZGUgPT09IEVOVEVSICYmIG9wZW5XaW5kb3codG9vbHNbc2VsZWN0ZWRJbmRleF0ud2luZG93KTtcbiAgICBrZXlDb2RlID09PSBFU0NBUEUgJiYgc3RvcmUuZGlzcGF0Y2goXCJ0b29sQnJvd3Nlci5jbG9zZVwiKTtcbiAgfTtcblxuICB1c2VPbldpbmRvd0V2ZW50KFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcod2luZG93LmlubmVyV2lkdGggLyAyKSwgLi4uc3R5bGUgfX0+XG4gICAgICA8VG9vbExpc3Qgc3R5bGU9e3N0eWxlcy50b29sTGlzdH0gb3BlbldpbmRvdz17b3BlbldpbmRvd30gc2VsZWN0ZWRJbmRleD17c2VsZWN0ZWRJbmRleH0gdG9vbHM9e3Rvb2xzfSAvPlxuICAgICAgPFRvb2xJbmZvIHN0eWxlPXtzdHlsZXMudG9vbEluZm99IHNlbGVjdGVkVG9vbD17dG9vbHNbc2VsZWN0ZWRJbmRleF19IC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuVG9vbEJyb3dzZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIHRvb2xzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xCcm93c2VyO1xuIiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IChjZW50ZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogYCR7Y2VudGVyIC0gMzQwfXB4YCxcbiAgICAgIHRvcDogXCIxMjBweFwiLFxuICAgICAgaGVpZ2h0OiBcIjM2NnB4XCIsXG4gICAgICB3aWR0aDogXCI2ODBweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEycHhcIixcbiAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMzgpIDBweCAyMHB4IDIwcHggLTNweCwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNzAwXX1gLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JheVs5MDBdLFxuICAgIH07XG4gIH0sXG4gIHRvb2xMaXN0OiB7XG4gICAgd2lkdGg6IFwiMjkwcHhcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB9LFxuICB0b29sSW5mbzoge1xuICAgIGZsZXg6IDEsXG4gICAgcGFkZGluZzogXCIyNHB4XCIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlT25XaW5kb3dFdmVudCB9IGZyb20gXCJAbGlicmFyeS9ob29rc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkB0b29scy9ob29rc1wiO1xuaW1wb3J0IFRvb2xCcm93c2VyIGZyb20gXCIuL1Rvb2xCcm93c2VyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBUX0tFWUNPREUgPSA4NDtcblxuY29uc3QgVG9vbE1hbmFnZXIgPSAoeyB0b29scywgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBmb3JtYXR0ZWRUb29scyA9IHRvb2xzLm1hcCgodG9vbCkgPT4gKHR5cGVvZiB0b29sID09PSBcImZ1bmN0aW9uXCIgPyB0b29sKCkgOiB0b29sKSk7XG4gIGNvbnN0IGlzT3BlbiA9IHVzZVN0b3JlKChzdG9yZSkgPT4gc3RvcmUuZ2V0U3RhdGUoXCJ0b29sQnJvd3NlclwiKS5pc09wZW4pO1xuXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgdGFnTmFtZSA9IGV2ZW50LnRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAodGFnTmFtZSAhPT0gXCJJTlBVVFwiICYmIHRhZ05hbWUgIT09IFwiVEVYVEFSRUFcIiAmJiBrZXlDb2RlID09PSBUX0tFWUNPREUpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFwidG9vbEJyb3dzZXIudG9nZ2xlXCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VPbldpbmRvd0V2ZW50KFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuXG4gIHJldHVybiBpc09wZW4gJiYgPFRvb2xCcm93c2VyIHN0eWxlPXt7IC4uLnN0eWxlcy50b29sQnJvd3NlciwgLi4uc3R5bGUgfX0gdG9vbHM9e2Zvcm1hdHRlZFRvb2xzfSAvPjtcbn07XG5cblRvb2xNYW5hZ2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG9vbHM6IFtdLFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sTWFuYWdlcjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdG9vbEJyb3dzZXI6IHtcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBwb2ludGVyRXZlbnRzOiBcImF1dG9cIixcbiAgICB6SW5kZXg6IDIxNDc0ODM2NDcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdSZWYgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCBjbG9zZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9jbG9zZVwiO1xuaW1wb3J0IGNyZWF0ZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9jcmVhdGVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBDb250ZW50ID0gbWVtbygoeyBjb250ZW50UmVmLCBpZCwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuYnlJZFtpZF0uY29tcG9uZW50O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IGNsb3NlV2luZG93KGlkKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3UmVmIHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fSByZWY9e2NvbnRlbnRSZWZ9PlxuICAgICAgPENvbXBvbmVudCBjbG9zZVdpbmRvdz17aGFuZGxlQ2xvc2V9IGNyZWF0ZVdpbmRvdz17Y3JlYXRlV2luZG93fSBfX2lkPXtpZH0gLz5cbiAgICA8L1ZpZXdSZWY+XG4gICk7XG59KTtcblxuQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnRSZWY6IG51bGwsXG4gIGlkOiBudWxsLFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBmbGV4OiAxLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JheVs3MDBdfWAsXG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNzAwXX1gLFxuICAgIGJvcmRlckxlZnQ6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JheVs3MDBdfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjBweCAwcHggNnB4IDZweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyYXlbOTAwXSxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBBY3Rpb25CdXR0b24gPSAoeyBvbkNsaWNrLCBwcmltYXJ5Q29sb3IsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIHJldHVybiA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldyh7IHByaW1hcnlDb2xvciB9KSwgLi4uc3R5bGUgfX0gb25DbGljaz17b25DbGlja30gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IC8+O1xufTtcblxuQWN0aW9uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogKCkgPT4ge30sXG4gIHByaW1hcnlDb2xvcjogXCJcIixcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiAoeyBwcmltYXJ5Q29sb3IgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IFwiMTJweFwiLFxuICAgICAgd2lkdGg6IFwiMTJweFwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JcbiAgICB9O1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi9BY3Rpb25CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEFjdGlvbkJ1dHRvbnMgPSAoeyBpc0ZvY3VzZWQsIG9uQ2xvc2UsIHN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0+XG4gICAgICA8QWN0aW9uQnV0dG9uIHN0eWxlPXtzdHlsZXMubWFyZ2luUmlnaHR9IHByaW1hcnlDb2xvcj17aXNGb2N1c2VkID8gY29sb3JzLnJlZFs1MDBdIDogY29sb3JzLmdyYXlbNTUwXX0gb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgIDxBY3Rpb25CdXR0b24gc3R5bGU9e3N0eWxlcy5tYXJnaW5SaWdodH0gcHJpbWFyeUNvbG9yPXtpc0ZvY3VzZWQgPyBjb2xvcnMueWVsbG93WzcwMF0gOiBjb2xvcnMuZ3JheVs1NTBdfSAvPlxuICAgICAgPEFjdGlvbkJ1dHRvbiBwcmltYXJ5Q29sb3I9e2lzRm9jdXNlZCA/IGNvbG9ycy5ncmVlbls1MDBdIDogY29sb3JzLmdyYXlbNTUwXX0gLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5BY3Rpb25CdXR0b25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgb25DbG9zZTogKCkgPT4ge30sXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvbnM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIlxuICB9LFxuICBtYXJnaW5SaWdodDoge1xuICAgIG1hcmdpblJpZ2h0OiBcIjZweFwiXG4gIH1cbn07XG4iLCJpbXBvcnQgQWN0aW9uQnV0dG9ucyBmcm9tIFwiLi9BY3Rpb25CdXR0b25zXCI7XG5cbmV4cG9ydCB7IEFjdGlvbkJ1dHRvbnMgfTtcbiIsImltcG9ydCBvbk1vdmVIYW5kbGVycyBmcm9tIFwiLi9vbi1tb3ZlLWhhbmRsZXJzXCI7XG5cbmV4cG9ydCB7IG9uTW92ZUhhbmRsZXJzIH07XG4iLCJpbXBvcnQgbW92ZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9tb3ZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbnRlbnRSZWYsIGlkLCB3aW5kb3dSZWYgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgbW92ZVdpbmRvdyh7IGVsZW06IHdpbmRvd1JlZi5jdXJyZW50LCBldmVudCwgaWQgfSk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdmVFbmQgPSAoZXZlbnQpID0+IHtcbiAgICBtb3ZlV2luZG93KHsgZWxlbTogd2luZG93UmVmLmN1cnJlbnQsIGV2ZW50LCBpZCwgc2hvdWxkRGlzcGF0Y2g6IHRydWUgfSk7XG4gICAgY29udGVudFJlZi5jdXJyZW50ICYmIChjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCIpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlU3RhcnQgPSAoKSA9PiB7XG4gICAgY29udGVudFJlZi5jdXJyZW50ICYmIChjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiKTtcbiAgfTtcblxuICByZXR1cm4geyBvbk1vdmU6IGhhbmRsZU1vdmUsIG9uTW92ZUVuZDogaGFuZGxlTW92ZUVuZCwgb25Nb3ZlU3RhcnQ6IGhhbmRsZU1vdmVTdGFydCB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHQsIFZpZXcsIFZpZXdSZWYgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCB7IHVzZU9uTW92ZSB9IGZyb20gXCJAbGlicmFyeS9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiQHRvb2xzL2hvb2tzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IGNsb3NlV2luZG93IGZyb20gXCJAcHJvY2VkdXJlcy93aW5kb3dzL2Nsb3NlXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25zIH0gZnJvbSBcIi4vY2hpbGRyZW5cIjtcbmltcG9ydCB7IG9uTW92ZUhhbmRsZXJzIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgY29udGVudFJlZiwgaWQsIHN0eWxlLCB3aW5kb3dSZWYgfSkgPT4ge1xuICBjb25zdCB7IHJlZjogaGVhZGVyUmVmIH0gPSB1c2VPbk1vdmUob25Nb3ZlSGFuZGxlcnMoeyBjb250ZW50UmVmLCBpZCwgd2luZG93UmVmIH0pKTtcbiAgY29uc3QgeyBpc0ZvY3VzZWQsIGlzT3BhcXVlLCB0aXRsZSB9ID0gdXNlU3RvcmUoKHN0b3JlKSA9PiBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuYnlJZFtpZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gY2xvc2VXaW5kb3coaWQpO1xuICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy51cGRhdGVcIiwgeyBpZCwgaXNPcGFxdWU6ICFpc09wYXF1ZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3UmVmIHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSwgLi4uc3R5bGVzLmZvY3VzZWQoaXNGb2N1c2VkKSB9fSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gcmVmPXtoZWFkZXJSZWZ9PlxuICAgICAgPEFjdGlvbkJ1dHRvbnMgc3R5bGU9e3N0eWxlcy5hY3Rpb25CdXR0b25zfSBpc0ZvY3VzZWQ9e2lzRm9jdXNlZH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IC8+XG4gICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9UZXh0PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5mbGV4U3BhY2VyfSAvPlxuICAgIDwvVmlld1JlZj5cbiAgKTtcbn07XG5cbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnRSZWY6IG51bGwsXG4gIGlkOiBudWxsLFxuICBzdHlsZToge30sXG4gIHdpbmRvd1JlZjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7IGNvbG9ycywgY3NzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMHB4IDZweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyYXlbNzUwXSxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JheVs2MDBdfWAsXG4gICAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JheVs2MDBdfWAsXG4gICAgYm9yZGVyTGVmdDogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzYwMF19YCxcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4IDZweCAwcHggMHB4XCIsXG4gIH0sXG4gIGZvY3VzZWQ6IChpc0ZvY3VzZWQpID0+IHtcbiAgICByZXR1cm4gaXNGb2N1c2VkICYmIHsgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ3JheVs4MDBdIH07XG4gIH0sXG4gIGFjdGlvbkJ1dHRvbnM6IHtcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmdSaWdodDogXCIxNnB4XCIsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IGNvbG9ycy5ncmF5WzUwXSxcbiAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIHBhZGRpbmdSaWdodDogXCIxNnB4XCIsXG4gICAgLi4uY3NzLnVzZXJTZWxlY3Qubm9uZSxcbiAgICAuLi5jc3MudGV4dE92ZXJmbG93LmVsbGlwc2lzLFxuICB9LFxuICBmbGV4U3BhY2VyOiB7XG4gICAgZmxleDogMSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgb25SZXNpemVIYW5kbGVycyBmcm9tIFwiLi9vbi1yZXNpemUtaGFuZGxlcnNcIjtcblxuZXhwb3J0IHsgb25SZXNpemVIYW5kbGVycyB9O1xuIiwiaW1wb3J0IHJlc2l6ZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9yZXNpemVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgY29udGVudFJlZiwgaWQsIHdpbmRvd1JlZiB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChkaW1lbnNpb25zLCBldmVudCkgPT4gcmVzaXplV2luZG93KHsgZGltZW5zaW9ucywgZWxlbTogd2luZG93UmVmLmN1cnJlbnQsIGV2ZW50LCBpZCB9KTtcblxuICBjb25zdCBoYW5kbGVSZXNpemVFbmQgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAod2luZG93UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB3aW5kb3dSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJlc2l6ZVdpbmRvdyh7IGRpbWVuc2lvbnMsIGVsZW06IHdpbmRvd1JlZi5jdXJyZW50LCBldmVudCwgaWQsIHNob3VsZERpc3BhdGNoOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnRlbnRSZWYuY3VycmVudCAmJiAoY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNpemVTdGFydCA9ICgpID0+IHtcbiAgICBjb250ZW50UmVmLmN1cnJlbnQgJiYgKGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCIpO1xuICB9O1xuXG4gIHJldHVybiB7IGhhbmRsZVJlc2l6ZSwgaGFuZGxlUmVzaXplRW5kLCBoYW5kbGVSZXNpemVTdGFydCB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlc2l6YWJsZSBhcyBVSVJlc2l6YWJsZSB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHsgb25SZXNpemVIYW5kbGVycyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFJlc2l6YWJsZSA9ICh7IGNoaWxkcmVuLCBjb250ZW50UmVmLCBpZCwgd2luZG93UmVmLCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHsgaGFuZGxlUmVzaXplLCBoYW5kbGVSZXNpemVFbmQsIGhhbmRsZVJlc2l6ZVN0YXJ0IH0gPSBvblJlc2l6ZUhhbmRsZXJzKHsgY29udGVudFJlZiwgaWQsIHdpbmRvd1JlZiB9KTtcblxuICByZXR1cm4gKFxuICAgIDxVSVJlc2l6YWJsZVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIC4uLnN0eWxlcy5yZXNpemFibGUgfX1cbiAgICAgIG1pbkhlaWdodD17MjR9XG4gICAgICBtaW5XaWR0aD17OTV9XG4gICAgICBvblJlc2l6ZT17aGFuZGxlUmVzaXplfVxuICAgICAgb25SZXNpemVFbmQ9e2hhbmRsZVJlc2l6ZUVuZH1cbiAgICAgIG9uUmVzaXplU3RhcnQ9e2hhbmRsZVJlc2l6ZVN0YXJ0fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VJUmVzaXphYmxlPlxuICApO1xufTtcblxuUmVzaXphYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGNvbnRlbnRSZWY6IG51bGwsXG4gIGlkOiBudWxsLFxuICB3aW5kb3dSZWY6IG51bGwsXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVzaXphYmxlOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleDogMSxcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIG1pbkhlaWdodDogMCxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3UmVmIH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiQHRvb2xzL2hvb2tzXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9Db250ZW50XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFJlc2l6YWJsZSBmcm9tIFwiLi9SZXNpemFibGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFdpbmRvdyA9ICh7IGlkLCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgc3RhdGUgPSB1c2VTdG9yZSgoc3RvcmUpID0+IHN0b3JlLmdldFN0YXRlKFwid2luZG93c1wiKS5ieUlkW2lkXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKCkgPT4gIXN0YXRlLmlzRm9jdXNlZCAmJiBzdG9yZS5kaXNwYXRjaChcIndpbmRvd3MuZm9jdXNcIiwgaWQpO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXdSZWYgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcoc3RhdGUpLCAuLi5zdHlsZSB9fSBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufSByZWY9e3dpbmRvd1JlZn0+XG4gICAgICA8UmVzaXphYmxlIGlkPXtpZH0gY29udGVudFJlZj17Y29udGVudFJlZn0gd2luZG93UmVmPXt3aW5kb3dSZWZ9PlxuICAgICAgICA8SGVhZGVyIHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBpZD17aWR9IGNvbnRlbnRSZWY9e2NvbnRlbnRSZWZ9IHdpbmRvd1JlZj17d2luZG93UmVmfSAvPlxuICAgICAgICA8Q29udGVudCBpZD17aWR9IGNvbnRlbnRSZWY9e2NvbnRlbnRSZWZ9IC8+XG4gICAgICA8L1Jlc2l6YWJsZT5cbiAgICA8L1ZpZXdSZWY+XG4gICk7XG59O1xuXG5XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xuICBpZDogbnVsbCxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiAoeyBwb3NpdGlvbjogeyB4LCB5IH0sIHNpemU6IHsgd2lkdGgsIGhlaWdodCB9LCBpc09wYXF1ZSwgcmVuZGVySW5kZXggfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWAsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICBvcGFjaXR5OiBpc09wYXF1ZSA/IDEuMCA6IDAuMSxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGlzT3BhcXVlID8gXCJhdXRvXCIgOiBcIm5vbmVcIixcbiAgICAgIGJveFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDE1cHggLTNweCwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgekluZGV4OiByZW5kZXJJbmRleCxcbiAgICB9O1xuICB9LFxuICBoZWFkZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiBcImF1dG9cIixcbiAgICBtaW5IZWlnaHQ6IFwiMjRweFwiLFxuICAgIGhlaWdodDogXCIyNHB4XCIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiQHRvb2xzL2hvb2tzXCI7XG5pbXBvcnQgV2luZG93IGZyb20gXCIuL1dpbmRvd1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgV2luZG93TWFuYWdlciA9ICh7IHN0eWxlIH0pID0+IHtcbiAgY29uc3Qgd2luZG93SWRzID0gdXNlU3RvcmUoKHN0b3JlKSA9PiBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuaWRzKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIHt3aW5kb3dJZHMubWFwKCh3aW5kb3dJZCkgPT4ge1xuICAgICAgICByZXR1cm4gPFdpbmRvdyBrZXk9e2BXSU5ET1dfJHt3aW5kb3dJZH1gfSBpZD17d2luZG93SWR9IC8+O1xuICAgICAgfSl9XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuV2luZG93TWFuYWdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd01hbmFnZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgVG9vbE1hbmFnZXIgZnJvbSBcIi4vVG9vbE1hbmFnZXJcIjtcbmltcG9ydCBXaW5kb3dNYW5hZ2VyIGZyb20gXCIuL1dpbmRvd01hbmFnZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IERldk9TID0gKHsgc3R5bGUsIHRvb2xzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0+XG4gICAgICA8VG9vbE1hbmFnZXIgdG9vbHM9e3Rvb2xzfSAvPlxuICAgICAgPFdpbmRvd01hbmFnZXIgLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5EZXZPUy5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbiAgdG9vbHM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV2T1M7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHpJbmRleDogMjE0NzQ4MzY0NyxcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICAgIGJvcmRlcjogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgfSxcbn07XG4iLCJsZXQgY3VycmVudElkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6IChhdHRycyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBldmVudHMgPSB7fSB9ID0gYXR0cnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNPcGFxdWU6IHRydWUsXG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBjb21wb25lbnQ6ICgpID0+IG51bGwsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiAyNCxcbiAgICAgICAgeTogMjQsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgIH0sXG4gICAgICAuLi5hdHRycyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvbk1vdmU6ICgpID0+IHt9LFxuICAgICAgICBvblJlc2l6ZTogKCkgPT4ge30sXG4gICAgICAgIC4uLmV2ZW50cyxcbiAgICAgIH0sXG4gICAgICBpZDogKGN1cnJlbnRJZCArPSAxKSxcbiAgICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgICByZW5kZXJJbmRleDogMCxcbiAgICB9O1xuICB9LFxufTtcbiIsImltcG9ydCBEZXZPUyBmcm9tIFwiLi9jb21wb25lbnRzL0Rldk9TXCI7XG5cbmV4cG9ydCBkZWZhdWx0IERldk9TO1xuIiwiaW1wb3J0IHVzZUNvbnRleHRNZW51IGZyb20gXCIuL3VzZS1jb250ZXh0LW1lbnVcIjtcbmltcG9ydCB1c2VIb3ZlciBmcm9tIFwiLi91c2UtaG92ZXJcIjtcbmltcG9ydCB1c2VNZXJnZVN0YXRlIGZyb20gXCIuL3VzZS1tZXJnZS1zdGF0ZVwiO1xuaW1wb3J0IHVzZU9uTW92ZSBmcm9tIFwiLi91c2Utb24tbW92ZVwiO1xuaW1wb3J0IHVzZU9uV2luZG93RXZlbnQgZnJvbSBcIi4vdXNlLW9uLXdpbmRvdy1ldmVudFwiO1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuL3VzZS1zdG9yZVwiO1xuXG5leHBvcnQgeyB1c2VDb250ZXh0TWVudSwgdXNlSG92ZXIsIHVzZU1lcmdlU3RhdGUsIHVzZU9uTW92ZSwgdXNlU3RvcmUsIHVzZU9uV2luZG93RXZlbnQgfTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZVN0YXRlIH0gZnJvbSBcIkBsaWJyYXJ5L2hvb2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGlzQWN0aXZlIH0pID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZU1lcmdlU3RhdGUoeyBldmVudDogbnVsbCwgaXNPcGVuOiBmYWxzZSwgcG9zaXRpb246IHsgeDogMCwgeTogMCB9IH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzQWN0aXZlICYmICFzdGF0ZS5pc09wZW4pIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb246IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9LFxuICAgICAgfSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9ICgpID0+IHNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiBjbG9zZU1lbnUoKTtcbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKCkgPT4gY2xvc2VNZW51KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gICAgfTtcbiAgfSwgW3N0YXRlLmlzT3Blbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNvbnRleHRNZW51KTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNvbnRleHRNZW51KTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcmVmLmN1cnJlbnQsIGlzQWN0aXZlXSk7XG5cbiAgcmV0dXJuIHsgcmVmLCAuLi5zdGF0ZSB9O1xufTtcbiIsImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhhbmRsZU1vdXNlTGVhdmUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtyZWYuY3VycmVudF0pO1xuXG4gIHJldHVybiB7IGlzSG92ZXJlZCwgcmVmLCBzZXRJc0hvdmVyZWQgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZGVmYXVsdFN0YXRlID0ge30pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3RhdGUpO1xuXG4gIGNvbnN0IG1lcmdlU3RhdGUgPSAodXBkYXRlZFN0YXRlKSA9PiB7XG4gICAgaWYgKHVwZGF0ZWRTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIC4uLnVwZGF0ZWRTdGF0ZShwcmV2U3RhdGUpIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCAuLi51cGRhdGVkU3RhdGUgfSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW3N0YXRlLCBtZXJnZVN0YXRlXTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbk1vdmUgPSAoKSA9PiB7fSwgb25Nb3ZlRW5kID0gKCkgPT4ge30sIG9uTW92ZVN0YXJ0ID0gKCkgPT4ge30gfSkgPT4ge1xuICBsZXQgeyBjdXJyZW50OiBpc01vdXNlRG93biB9ID0gdXNlUmVmKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChldmVudCkgPT4gaXNNb3VzZURvd24gJiYgb25Nb3ZlKGV2ZW50KTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGV2ZW50KSA9PiB7XG4gICAgaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBvbk1vdmVFbmQoZXZlbnQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBvbk1vdmVTdGFydChldmVudCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbGVtID0gcmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoZWxlbSkge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcmVmLmN1cnJlbnRdKTtcblxuICByZXR1cm4geyByZWYgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGV2ZW50TmFtZSwgaGFuZGxlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfSwgW2V2ZW50TmFtZSwgaGFuZGxlcl0pO1xufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0b3JlKSA9PiB7XG4gIHJldHVybiAobWFwU3RvcmVUb1N0YXRlLCBkZWZhdWx0U3RhdGUpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRTdGF0ZSA9PT0gdW5kZWZpbmVkID8gbWFwU3RvcmVUb1N0YXRlKHN0b3JlKSA6IGRlZmF1bHRTdGF0ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGlzQ2FuY2VsZWQgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IHN0b3JlLnN1YnNjcmliZSgoY3VycmVudFN0b3JlKSA9PiB7XG4gICAgICAgICFpc0NhbmNlbGVkICYmIHNldFN0YXRlKG1hcFN0b3JlVG9TdGF0ZShjdXJyZW50U3RvcmUpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpc0NhbmNlbGVkID0gdHJ1ZTtcbiAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuIiwiaW1wb3J0IGJsYWNrIGZyb20gXCIuL3BhbGV0dGVzL2JsYWNrXCI7XG5pbXBvcnQgYmx1ZSBmcm9tIFwiLi9wYWxldHRlcy9ibHVlXCI7XG5pbXBvcnQgZ3JheSBmcm9tIFwiLi9wYWxldHRlcy9ncmF5XCI7XG5pbXBvcnQgZ3JlZW4gZnJvbSBcIi4vcGFsZXR0ZXMvZ3JlZW5cIjtcbmltcG9ydCByZWQgZnJvbSBcIi4vcGFsZXR0ZXMvcmVkXCI7XG5pbXBvcnQgd2hpdGUgZnJvbSBcIi4vcGFsZXR0ZXMvd2hpdGVcIjtcbmltcG9ydCB5ZWxsb3cgZnJvbSBcIi4vcGFsZXR0ZXMveWVsbG93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHsgYmxhY2ssIGJsdWUsIGdyYXksIGdyZWVuLCByZWQsIHdoaXRlLCB5ZWxsb3cgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiIzE2MTYxNlwiO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICA1MDogXCIjZTNmMmZkXCIsXG4gIDEwMDogXCIjYmJkZWZiXCIsXG4gIDIwMDogXCIjOTBjYWY5XCIsXG4gIDMwMDogXCIjNjRiNWY2XCIsXG4gIDQwMDogXCIjNDJhNWY1XCIsXG4gIDUwMDogXCIjMjE5NmYzXCIsXG4gIDYwMDogXCIjMWU4OGU1XCIsXG4gIDcwMDogXCIjMTk3NmQyXCIsXG4gIDgwMDogXCIjMTU2NWMwXCIsXG4gIDkwMDogXCIjMGQ0N2ExXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDUwOiBcIiNmYWZhZmFcIixcbiAgMTAwOiBcIiNmNWY1ZjVcIixcbiAgMjAwOiBcIiNlZWVlZWVcIixcbiAgMzAwOiBcIiNlMGUwZTBcIixcbiAgNDAwOiBcIiNiZGJkYmRcIixcbiAgNTAwOiBcIiM5ZTllOWVcIixcbiAgNTUwOiBcIiM4OTg5ODlcIixcbiAgNjAwOiBcIiM3NTc1NzVcIixcbiAgNzAwOiBcIiM2MTYxNjFcIixcbiAgNzUwOiBcIiM0MjQyNDJcIixcbiAgODAwOiBcIiMzMjMyMzJcIixcbiAgOTAwOiBcIiMyMTIxMjFcIixcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDUwOiBcIiNlOGY1ZTlcIixcbiAgMTAwOiBcIiNjOGU2YzlcIixcbiAgMjAwOiBcIiNhNWQ2YTdcIixcbiAgMzAwOiBcIiM4MWM3ODRcIixcbiAgNDAwOiBcIiM2NmJiNmFcIixcbiAgNTAwOiBcIiM0Y2FmNTBcIixcbiAgNjAwOiBcIiM0M2EwNDdcIixcbiAgNzAwOiBcIiMzODhlM2NcIixcbiAgODAwOiBcIiMyZTdkMzJcIixcbiAgOTAwOiBcIiMxYjVlMjBcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgNTA6IFwiI2ZmZWJlZVwiLFxuICAxMDA6IFwiI2ZmY2RkMlwiLFxuICAyMDA6IFwiI2VmOWE5YVwiLFxuICAzMDA6IFwiI2U1NzM3M1wiLFxuICA0MDA6IFwiI2VmNTM1MFwiLFxuICA1MDA6IFwiI2Y0NDMzNlwiLFxuICA2MDA6IFwiI2U1MzkzNVwiLFxuICA3MDA6IFwiI2QzMmYyZlwiLFxuICA4MDA6IFwiI2M2MjgyOFwiLFxuICA5MDA6IFwiI2I3MWMxY1wiXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIjZmZmZmZmXCI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDUwOiBcIiNmZmZkZTdcIixcbiAgMTAwOiBcIiNmZmY5YzRcIixcbiAgMjAwOiBcIiNmZmY1OWRcIixcbiAgMzAwOiBcIiNmZmYxNzZcIixcbiAgNDAwOiBcIiNmZmVlNThcIixcbiAgNTAwOiBcIiNmZmViM2JcIixcbiAgNjAwOiBcIiNmZGQ4MzVcIixcbiAgNzAwOiBcIiNmYmMwMmRcIixcbiAgODAwOiBcIiNmOWE4MjVcIixcbiAgOTAwOiBcIiNmNTdmMTdcIlxufTtcbiIsImltcG9ydCB0ZXh0T3ZlcmZsb3cgZnJvbSBcIi4vdGV4dE92ZXJmbG93XCI7XG5pbXBvcnQgdXNlclNlbGVjdCBmcm9tIFwiLi91c2VyU2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHsgdGV4dE92ZXJmbG93LCB1c2VyU2VsZWN0IH07XG4iLCJjb25zdCBlbGxpcHNpcyA9IHtcbiAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGVsbGlwc2lzXG59O1xuIiwiY29uc3Qgbm9uZSA9IHtcbiAgV2Via2l0VXNlclNlbGVjdDogXCJub25lXCIsXG4gIE1velVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICBNc1VzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICB1c2VyU2VsZWN0OiBcIm5vbmVcIlxufTtcblxuY29uc3QgdGV4dCA9IHtcbiAgV2Via2l0VXNlclNlbGVjdDogXCJ0ZXh0XCIsXG4gIE1velVzZXJTZWxlY3Q6IFwidGV4dFwiLFxuICBNc1VzZXJTZWxlY3Q6IFwidGV4dFwiLFxuICB1c2VyU2VsZWN0OiBcInRleHRcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBub25lLFxuICB0ZXh0XG59O1xuIiwiaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi9jb2xvcnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4vY3NzXCI7XG5cbmV4cG9ydCB7IGNvbG9ycywgY3NzIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3VpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBSZXNpemFibGVIYW5kbGUgPSAoeyBjdXJzb3IsIG9uUmVzaXplLCBvblJlc2l6ZUVuZCwgb25SZXNpemVTdGFydCwgc3R5bGUgfSkgPT4ge1xuICBsZXQgeyBjdXJyZW50OiBpc01vdXNlRG93biB9ID0gdXNlUmVmKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGV2ZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSBcIlwiO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuXG4gICAgaWYgKGlzTW91c2VEb3duKSB7XG4gICAgICBpc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgb25SZXNpemVFbmQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNNb3VzZURvd24pIHtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG9uUmVzaXplKGV2ZW50KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChldmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICAgIGlzTW91c2VEb3duID0gdHJ1ZTtcbiAgICBvblJlc2l6ZVN0YXJ0KGV2ZW50KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICB9O1xuXG4gIHJldHVybiA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldyhjdXJzb3IpLCAuLi5zdHlsZSB9fSBkcmFnZ2FibGU9e2ZhbHNlfSBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufT48L1ZpZXc+O1xufTtcblxuUmVzaXphYmxlSGFuZGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY3Vyc29yOiBcIm53c2UtcmVzaXplXCIsXG4gIG9uUmVzaXplOiAoKSA9PiB7fSxcbiAgb25SZXNpemVFbmQ6ICgpID0+IHt9LFxuICBvblJlc2l6ZVN0YXJ0OiAoKSA9PiB7fSxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlSGFuZGxlO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiAoY3Vyc29yKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogXCI1cHhcIixcbiAgICAgIHdpZHRoOiBcIjVweFwiLFxuICAgICAgY3Vyc29yLFxuICAgIH07XG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVzaXphYmxlSGFuZGxlIGZyb20gXCIuL1Jlc2l6YWJsZUhhbmRsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgUmVzaXphYmxlSGFuZGxlcyA9ICh7IG9uUmVzaXplLCBvblJlc2l6ZUVuZCwgb25SZXNpemVTdGFydCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLnRvcH1cbiAgICAgICAgY3Vyc29yPXtcIm5zLXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJ0b3BcIil9XG4gICAgICAgIG9uUmVzaXplRW5kPXtvblJlc2l6ZUVuZH1cbiAgICAgICAgb25SZXNpemVTdGFydD17b25SZXNpemVTdGFydH1cbiAgICAgIC8+XG4gICAgICA8UmVzaXphYmxlSGFuZGxlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMubGVmdH1cbiAgICAgICAgY3Vyc29yPXtcImV3LXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJsZWZ0XCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLnJpZ2h0fVxuICAgICAgICBjdXJzb3I9e1wiZXctcmVzaXplXCJ9XG4gICAgICAgIG9uUmVzaXplPXsoZXZlbnQpID0+IG9uUmVzaXplKGV2ZW50LCBcInJpZ2h0XCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLmJvdHRvbX1cbiAgICAgICAgY3Vyc29yPXtcIm5zLXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJib3R0b21cIil9XG4gICAgICAgIG9uUmVzaXplRW5kPXtvblJlc2l6ZUVuZH1cbiAgICAgICAgb25SZXNpemVTdGFydD17b25SZXNpemVTdGFydH1cbiAgICAgIC8+XG4gICAgICA8UmVzaXphYmxlSGFuZGxlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMudG9wTGVmdH1cbiAgICAgICAgY3Vyc29yPXtcIm53c2UtcmVzaXplXCJ9XG4gICAgICAgIG9uUmVzaXplPXsoZXZlbnQpID0+IG9uUmVzaXplKGV2ZW50LCBcInRvcExlZnRcIil9XG4gICAgICAgIG9uUmVzaXplRW5kPXtvblJlc2l6ZUVuZH1cbiAgICAgICAgb25SZXNpemVTdGFydD17b25SZXNpemVTdGFydH1cbiAgICAgIC8+XG4gICAgICA8UmVzaXphYmxlSGFuZGxlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMudG9wUmlnaHR9XG4gICAgICAgIGN1cnNvcj17XCJuZXN3LXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJ0b3BSaWdodFwiKX1cbiAgICAgICAgb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfVxuICAgICAgICBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fVxuICAgICAgLz5cbiAgICAgIDxSZXNpemFibGVIYW5kbGVcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5ib3R0b21MZWZ0fVxuICAgICAgICBjdXJzb3I9e1wibmVzdy1yZXNpemVcIn1cbiAgICAgICAgb25SZXNpemU9eyhldmVudCkgPT4gb25SZXNpemUoZXZlbnQsIFwiYm90dG9tTGVmdFwiKX1cbiAgICAgICAgb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfVxuICAgICAgICBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fVxuICAgICAgLz5cbiAgICAgIDxSZXNpemFibGVIYW5kbGVcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5ib3R0b21SaWdodH1cbiAgICAgICAgY3Vyc29yPXtcIm53c2UtcmVzaXplXCJ9XG4gICAgICAgIG9uUmVzaXplPXsoZXZlbnQpID0+IG9uUmVzaXplKGV2ZW50LCBcImJvdHRvbVJpZ2h0XCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5SZXNpemFibGVIYW5kbGVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25SZXNpemU6ICgpID0+IHt9LFxuICBvblJlc2l6ZUVuZDogKCkgPT4ge30sXG4gIG9uUmVzaXNlU3RhcnQ6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlSGFuZGxlcztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdG9wOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLTJweFwiLFxuICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBsZWZ0OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMHB4XCIsXG4gICAgbGVmdDogXCItMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCIwcHhcIixcbiAgICByaWdodDogXCItMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IFwiLTJweFwiLFxuICAgIGxlZnQ6IFwiMHB4XCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLTJweFwiLFxuICAgIGxlZnQ6IFwiLTJweFwiLFxuICAgIGhlaWdodDogXCIxMHB4XCIsXG4gICAgd2lkdGg6IFwiMTBweFwiLFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIi0ycHhcIixcbiAgICByaWdodDogXCItMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICB3aWR0aDogXCIxMHB4XCIsXG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGJvdHRvbTogXCItMnB4XCIsXG4gICAgbGVmdDogXCItMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICB3aWR0aDogXCIxMHB4XCIsXG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IFwiLTJweFwiLFxuICAgIHJpZ2h0OiBcIi0ycHhcIixcbiAgICBoZWlnaHQ6IFwiMTBweFwiLFxuICAgIHdpZHRoOiBcIjEwcHhcIixcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVzaXphYmxlSGFuZGxlcyBmcm9tIFwiLi9SZXNpemFibGVIYW5kbGVzXCI7XG5cbmV4cG9ydCB7IFJlc2l6YWJsZUhhbmRsZXMgfTtcbiIsImNvbnN0IGJvdHRvbUxlZnQgPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbS53aWR0aCAtIGV2ZW50Lm1vdmVtZW50WDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbS5oZWlnaHQgKyBldmVudC5tb3ZlbWVudFk7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGggPiBtaW5TaXplLndpZHRoID8gd2lkdGggOiBlbGVtLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBoZWlnaHQgOiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGVsZW0udG9wLFxuICAgIGxlZnQ6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IGVsZW0ubGVmdCArIGV2ZW50Lm1vdmVtZW50WCA6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJvdHRvbUxlZnQ7XG4iLCJjb25zdCBib3R0b21SaWdodCA9ICh7IGVsZW0sIGV2ZW50LCBtaW5TaXplIH0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtLndpZHRoICsgZXZlbnQubW92ZW1lbnRYO1xuICBjb25zdCBoZWlnaHQgPSBlbGVtLmhlaWdodCArIGV2ZW50Lm1vdmVtZW50WTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCA+IG1pblNpemUud2lkdGggPyB3aWR0aCA6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGhlaWdodCA6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogZWxlbS50b3AsXG4gICAgbGVmdDogZWxlbS5sZWZ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm90dG9tUmlnaHQ7XG4iLCJjb25zdCBib3R0b20gPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW0uaGVpZ2h0ICsgZXZlbnQubW92ZW1lbnRZO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGhlaWdodCA6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogZWxlbS50b3AsXG4gICAgbGVmdDogZWxlbS5sZWZ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm90dG9tO1xuIiwiaW1wb3J0IGJvdHRvbSBmcm9tIFwiLi9ib3R0b21cIjtcbmltcG9ydCBib3R0b21MZWZ0IGZyb20gXCIuL2JvdHRvbS1sZWZ0XCI7XG5pbXBvcnQgYm90dG9tUmlnaHQgZnJvbSBcIi4vYm90dG9tLXJpZ2h0XCI7XG5pbXBvcnQgbGVmdCBmcm9tIFwiLi9sZWZ0XCI7XG5pbXBvcnQgcmlnaHQgZnJvbSBcIi4vcmlnaHRcIjtcbmltcG9ydCB0b3AgZnJvbSBcIi4vdG9wXCI7XG5pbXBvcnQgdG9wTGVmdCBmcm9tIFwiLi90b3AtbGVmdFwiO1xuaW1wb3J0IHRvcFJpZ2h0IGZyb20gXCIuL3RvcC1yaWdodFwiO1xuXG5jb25zdCBjYWxjdWxhdG9ycyA9IHtcbiAgYm90dG9tLFxuICBib3R0b21MZWZ0LFxuICBib3R0b21SaWdodCxcbiAgbGVmdCxcbiAgcmlnaHQsXG4gIHRvcCxcbiAgdG9wTGVmdCxcbiAgdG9wUmlnaHQsXG59O1xuXG5jb25zdCBjYWxjdWxhdGVSZXNpemUgPSAoeyBlbGVtLCBldmVudCwgaGFuZGxlVHlwZSwgbWluU2l6ZSB9KSA9PiB7XG4gIHJldHVybiBlbGVtXG4gICAgPyBjYWxjdWxhdG9yc1toYW5kbGVUeXBlXSh7XG4gICAgICAgIGVsZW06IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtaW5TaXplLFxuICAgICAgfSlcbiAgICA6IHtcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVJlc2l6ZTtcbiIsImNvbnN0IGxlZnQgPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbS53aWR0aCAtIGV2ZW50Lm1vdmVtZW50WDtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCA+IG1pblNpemUud2lkdGggPyB3aWR0aCA6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGVsZW0udG9wLFxuICAgIGxlZnQ6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IGVsZW0ubGVmdCArIGV2ZW50Lm1vdmVtZW50WCA6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxlZnQ7XG4iLCJjb25zdCByaWdodCA9ICh7IGVsZW0sIGV2ZW50LCBtaW5TaXplIH0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtLndpZHRoICsgZXZlbnQubW92ZW1lbnRYO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IHdpZHRoIDogZWxlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogZWxlbS50b3AsXG4gICAgbGVmdDogZWxlbS5sZWZ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmlnaHQ7XG4iLCJjb25zdCB0b3BMZWZ0ID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IGVsZW0ud2lkdGggLSBldmVudC5tb3ZlbWVudFg7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW0uaGVpZ2h0IC0gZXZlbnQubW92ZW1lbnRZO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IHdpZHRoIDogZWxlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCA+IG1pblNpemUuaGVpZ2h0ID8gaGVpZ2h0IDogZWxlbS5oZWlnaHQsXG4gICAgdG9wOiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGVsZW0udG9wICsgZXZlbnQubW92ZW1lbnRZIDogZWxlbS50b3AsXG4gICAgbGVmdDogd2lkdGggPiBtaW5TaXplLndpZHRoID8gZWxlbS5sZWZ0ICsgZXZlbnQubW92ZW1lbnRYIDogZWxlbS5sZWZ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wTGVmdDtcbiIsImNvbnN0IHRvcFJpZ2h0ID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IGVsZW0ud2lkdGggKyBldmVudC5tb3ZlbWVudFg7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW0uaGVpZ2h0IC0gZXZlbnQubW92ZW1lbnRZO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IHdpZHRoIDogZWxlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCA+IG1pblNpemUuaGVpZ2h0ID8gaGVpZ2h0IDogZWxlbS5oZWlnaHQsXG4gICAgdG9wOiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGVsZW0udG9wICsgZXZlbnQubW92ZW1lbnRZIDogZWxlbS50b3AsXG4gICAgbGVmdDogZWxlbS5sZWZ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9wUmlnaHQ7XG4iLCJjb25zdCB0b3AgPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW0uaGVpZ2h0IC0gZXZlbnQubW92ZW1lbnRZO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGhlaWdodCA6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBlbGVtLnRvcCArIGV2ZW50Lm1vdmVtZW50WSA6IGVsZW0udG9wLFxuICAgIGxlZnQ6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvcDtcbiIsImltcG9ydCBjYWxjdWxhdGVSZXNpemUgZnJvbSBcIi4vY2FsY3VsYXRlLXJlc2l6ZVwiO1xuXG5leHBvcnQgeyBjYWxjdWxhdGVSZXNpemUgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdSZWYgfSBmcm9tIFwiLi4vLi4vLi4vdWlcIjtcbmltcG9ydCB7IFJlc2l6YWJsZUhhbmRsZXMgfSBmcm9tIFwiLi9jaGlsZHJlblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUmVzaXplIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgUmVzaXphYmxlID0gKHsgY2hpbGRyZW4sIGlzQWN0aXZlLCBtaW5IZWlnaHQsIG1pbldpZHRoLCBvblJlc2l6ZSwgb25SZXNpemVFbmQsIG9uUmVzaXplU3RhcnQsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgcmVzaXphYmxlUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZXZlbnQsIGhhbmRsZVR5cGUpID0+XG4gICAgb25SZXNpemUoY2FsY3VsYXRlUmVzaXplKHsgZWxlbTogcmVzaXphYmxlUmVmLmN1cnJlbnQsIGV2ZW50LCBoYW5kbGVUeXBlLCBtaW5TaXplOiB7IGhlaWdodDogbWluSGVpZ2h0LCB3aWR0aDogbWluV2lkdGggfSB9KSwgZXZlbnQpO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXdSZWYgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19IHJlZj17cmVzaXphYmxlUmVmfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtpc0FjdGl2ZSAmJiA8UmVzaXphYmxlSGFuZGxlcyBvblJlc2l6ZT17aGFuZGxlUmVzaXplfSBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9IG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9IC8+fVxuICAgIDwvVmlld1JlZj5cbiAgKTtcbn07XG5cblJlc2l6YWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBpc0FjdGl2ZTogdHJ1ZSxcbiAgbWluSGVpZ2h0OiAxLFxuICBtaW5XaWR0aDogMSxcbiAgb25SZXNpemU6ICgpID0+IHt9LFxuICBvblJlc2l6ZUVuZDogKCkgPT4ge30sXG4gIG9uUmVzaXplU3RhcnQ6ICgpID0+IHt9LFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNpemFibGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBUZXh0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmNvbnRhaW5lciwgLi4ucHJvcHMuc3R5bGUgfX0gdGl0bGU9e3Byb3BzLnRpdGxlfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgdGl0bGU6IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgUmVzaXphYmxlIGZyb20gXCIuL1Jlc2l6YWJsZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuXG5leHBvcnQgeyBSZXNpemFibGUsIFRleHQgfTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NvbW1vblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdmlld3NcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVmlldyA9IHByb3BzID0+IHtcbiAgcmV0dXJuIDxkaXYgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFZpZXdSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30gcmVmPXtyZWZ9IC8+O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdSZWY7XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XG5pbXBvcnQgVmlld1JlZiBmcm9tIFwiLi9WaWV3UmVmXCI7XG5cbmV4cG9ydCB7IFZpZXcsIFZpZXdSZWYgfTtcbiIsImV4cG9ydCBkZWZhdWx0IChieUlkKSA9PiB7XG4gIGNvbnN0IG5leHRGb2N1c2VkV2luZG93ID0gT2JqZWN0LnZhbHVlcyhieUlkKS5yZWR1Y2UoXG4gICAgKHByZXZWYWwsIGN1cnJlbnRWYWwpID0+IHtcbiAgICAgIGlmIChjdXJyZW50VmFsLnJlbmRlckluZGV4ID49IHByZXZWYWwucmVuZGVySW5kZXgpIHtcbiAgICAgICAgcHJldlZhbCA9IGN1cnJlbnRWYWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2VmFsO1xuICAgIH0sXG4gICAgeyByZW5kZXJJbmRleDogMCB9XG4gICk7XG5cbiAgcmV0dXJuIG5leHRGb2N1c2VkV2luZG93ID8gbmV4dEZvY3VzZWRXaW5kb3cuaWQgOiBudWxsO1xufTtcbiIsImltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgZ2V0TmV4dEZvY3VzZWRJZCBmcm9tIFwiLi9nZXQtbmV4dC1mb2N1c2VkLWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChpZCkgPT4ge1xuICBjb25zdCB7IGJ5SWQgfSA9IHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy5yZW1vdmVcIiwgaWQpO1xuICBjb25zdCBuZXh0Rm9jdXNlZElkID0gZ2V0TmV4dEZvY3VzZWRJZChieUlkKTtcblxuICBuZXh0Rm9jdXNlZElkICYmIHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy5mb2N1c1wiLCBuZXh0Rm9jdXNlZElkKTtcbn07XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IHdpbmRvd0ZhY3RvcnkgZnJvbSBcIkBmYWN0b3JpZXMvd2luZG93XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChhdHRycyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRXaW5kb3cgPSB3aW5kb3dGYWN0b3J5LmNyZWF0ZShhdHRycyk7XG5cbiAgc3RvcmUuZGlzcGF0Y2goXCJ3aW5kb3dzLmFkZFwiLCBjcmVhdGVkV2luZG93KTtcbiAgc3RvcmUuZGlzcGF0Y2goXCJ3aW5kb3dzLmZvY3VzXCIsIGNyZWF0ZWRXaW5kb3cuaWQpO1xufTtcbiIsImltcG9ydCBwaXBlIGZyb20gXCJzY3ItcGlwZVwiO1xuXG5jb25zdCBjaGVja1dpbmRvd1RvcCA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4VG9wID0gMDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSA8IG1heFRvcCA/IG1heFRvcCA6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93Qm90dG9tID0gKGN0eCkgPT4ge1xuICBjb25zdCBtYXhCb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSA+IG1heEJvdHRvbSA/IG1heEJvdHRvbSA6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93TGVmdCA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4TGVmdCA9IC0oY3R4LnNpemUud2lkdGggLSAyNCk7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCA8IG1heExlZnQgPyBtYXhMZWZ0IDogY3R4LnBvc2l0aW9uLngsIHk6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93UmlnaHQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heFJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSAyNDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54ID4gbWF4UmlnaHQgPyBtYXhSaWdodCA6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBlbGVtLCBldmVudCwgd2luZG93IH0pID0+IHtcbiAgY29uc3QgeyB0b3A6IHByZXZUb3AsIGxlZnQ6IHByZXZMZWZ0IH0gPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiBwaXBlKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgeDogcHJldkxlZnQgKyBldmVudC5tb3ZlbWVudFgsXG4gICAgICB5OiBwcmV2VG9wICsgZXZlbnQubW92ZW1lbnRZLFxuICAgIH0sXG4gICAgc2l6ZTogd2luZG93LnNpemUsXG4gIH0pXG4gICAgLmZsb3coY2hlY2tXaW5kb3dUb3ApXG4gICAgLmZsb3coY2hlY2tXaW5kb3dCb3R0b20pXG4gICAgLmZsb3coY2hlY2tXaW5kb3dMZWZ0KVxuICAgIC5mbG93KGNoZWNrV2luZG93UmlnaHQpXG4gICAgLmNsb3NlKCkucG9zaXRpb247XG59O1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCBjYWxjdWxhdGVNb3ZlIGZyb20gXCIuL2NhbGN1bGF0ZS1tb3ZlXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGVsZW0sIGV2ZW50LCBpZCwgc2hvdWxkRGlzcGF0Y2ggPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IHN0b3JlLmdldFN0YXRlKFwid2luZG93c1wiKS5ieUlkW2lkXTtcblxuICBpZiAoZWxlbSAmJiB3aW5kb3cpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZU1vdmUoeyBlbGVtLCBldmVudCwgd2luZG93IH0pO1xuICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgO1xuICAgIHdpbmRvdy5ldmVudHMub25Nb3ZlKHsgcG9zaXRpb24gfSwgZXZlbnQpO1xuXG4gICAgc2hvdWxkRGlzcGF0Y2ggJiYgc3RvcmUuZGlzcGF0Y2goXCJ3aW5kb3dzLnVwZGF0ZVwiLCB7IGlkLCBwb3NpdGlvbiB9KTtcbiAgfVxufTtcbiIsImltcG9ydCBwaXBlIGZyb20gXCJzY3ItcGlwZVwiO1xuXG5jb25zdCBjaGVja1dpbmRvd1RvcCA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4VG9wID0gMDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSA8IG1heFRvcCA/IG1heFRvcCA6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93Qm90dG9tID0gKGN0eCkgPT4ge1xuICBjb25zdCBtYXhCb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSA+IG1heEJvdHRvbSA/IG1heEJvdHRvbSA6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93TGVmdCA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4TGVmdCA9IC0oY3R4LnNpemUud2lkdGggLSAyNCk7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCA8IG1heExlZnQgPyBtYXhMZWZ0IDogY3R4LnBvc2l0aW9uLngsIHk6IGN0eC5wb3NpdGlvbi55IH07XG4gIHJldHVybiB7IC4uLmN0eCwgcG9zaXRpb24gfTtcbn07XG5cbmNvbnN0IGNoZWNrV2luZG93UmlnaHQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heFJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSAyNDtcbiAgY29uc3QgcG9zaXRpb24gPSB7IHg6IGN0eC5wb3NpdGlvbi54ID4gbWF4UmlnaHQgPyBtYXhSaWdodCA6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoZGltZW5zaW9ucywgc2hvdWxkRGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHNob3VsZERpc3BhdGNoXG4gICAgPyB7XG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IGRpbWVuc2lvbnMubGVmdCwgeTogZGltZW5zaW9ucy50b3AgfSxcbiAgICAgICAgc2l6ZTogeyBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0LCB3aWR0aDogZGltZW5zaW9ucy53aWR0aCB9LFxuICAgICAgfVxuICAgIDogcGlwZSh7XG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgeDogZGltZW5zaW9ucy5sZWZ0LFxuICAgICAgICAgIHk6IGRpbWVuc2lvbnMudG9wLFxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCxcbiAgICAgICAgICB3aWR0aDogZGltZW5zaW9ucy53aWR0aCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC5mbG93KGNoZWNrV2luZG93VG9wKVxuICAgICAgICAuZmxvdyhjaGVja1dpbmRvd0JvdHRvbSlcbiAgICAgICAgLmZsb3coY2hlY2tXaW5kb3dMZWZ0KVxuICAgICAgICAuZmxvdyhjaGVja1dpbmRvd1JpZ2h0KVxuICAgICAgICAuY2xvc2UoKTtcbn07XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IGNhbGN1bGF0ZVJlc2l6ZSBmcm9tIFwiLi9jYWxjdWxhdGUtcmVzaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGRpbWVuc2lvbnMsIGVsZW0sIGV2ZW50LCBpZCwgc2hvdWxkRGlzcGF0Y2ggPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHdpbmRvdyA9IHN0b3JlLmdldFN0YXRlKFwid2luZG93c1wiKS5ieUlkW2lkXTtcblxuICBpZiAoZWxlbSAmJiB3aW5kb3cpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBzaXplIH0gPSBjYWxjdWxhdGVSZXNpemUoZGltZW5zaW9ucywgc2hvdWxkRGlzcGF0Y2gpO1xuICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uLnh9cHgsICR7cG9zaXRpb24ueX1weClgO1xuICAgIGVsZW0uc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZS5oZWlnaHR9cHhgO1xuICAgIGVsZW0uc3R5bGUud2lkdGggPSBgJHtzaXplLndpZHRofXB4YDtcbiAgICB3aW5kb3cuZXZlbnRzLm9uUmVzaXplKHsgcG9zaXRpb24sIHNpemUgfSwgZXZlbnQpO1xuXG4gICAgc2hvdWxkRGlzcGF0Y2ggJiYgc3RvcmUuZGlzcGF0Y2goXCJ3aW5kb3dzLnVwZGF0ZVwiLCB7IGlkLCBwb3NpdGlvbiwgc2l6ZSB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcImdlbmVyaWMtZGF0YS1jaGFtYmVyXCI7XG4vLyBTdG9yZSBUeXBlcyAvL1xuaW1wb3J0IHRvb2xCcm93c2VyIGZyb20gXCIuL3Rvb2wtYnJvd3NlclwiO1xuaW1wb3J0IHdpbmRvd3MgZnJvbSBcIi4vd2luZG93c1wiO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSh7IG5hbWU6IFwiZGV2LXRvb2xzXCIsIHR5cGVzOiB7IHRvb2xCcm93c2VyLCB3aW5kb3dzIH0gfSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9KSA9PiB7XG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgaXNPcGVuOiBmYWxzZSB9O1xufTtcbiIsImltcG9ydCBjbG9zZSBmcm9tIFwiLi9jbG9zZVwiO1xuaW1wb3J0IG9wZW4gZnJvbSBcIi4vb3BlblwiO1xuaW1wb3J0IHRvZ2dsZSBmcm9tIFwiLi90b2dnbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3Rpb25zOiB7XG4gICAgY2xvc2UsXG4gICAgb3BlbixcbiAgICB0b2dnbGUsXG4gIH0sXG4gIG5hbWU6IFwidG9vbEJyb3dzZXJcIixcbiAgc3RhdGU6IHtcbiAgICBpc09wZW46IGZhbHNlLFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9KSA9PiB7XG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgaXNPcGVuOiB0cnVlIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgcHJldlN0YXRlIH0pID0+IHtcbiAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBpc09wZW46ICFwcmV2U3RhdGUuaXNPcGVuIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgcHJldlN0YXRlIH0sIHdpbmRvdykgPT4ge1xuICBjb25zdCBieUlkID0geyAuLi5wcmV2U3RhdGUuYnlJZCwgW3dpbmRvdy5pZF06IHsgLi4ud2luZG93IH0gfTtcbiAgY29uc3QgaWRzID0gWy4uLnByZXZTdGF0ZS5pZHMsIHdpbmRvdy5pZF07XG5cbiAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBieUlkLCBpZHMgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoeyBwcmV2U3RhdGUgfSwgaWQpID0+IHtcbiAgY29uc3QgcHJldkJ5SWQgPSB7IC4uLnByZXZTdGF0ZS5ieUlkIH07XG4gIGNvbnN0IHByZXZGb2N1c2VkSWQgPSBwcmV2U3RhdGUuZm9jdXNlZElkO1xuICBjb25zdCBwcmV2Rm9jdXNlZFdpbmRvdyA9IHByZXZCeUlkW3ByZXZGb2N1c2VkSWRdO1xuXG4gIGNvbnN0IGJ5SWQgPSB7IC4uLnByZXZCeUlkIH07XG4gIGNvbnN0IG1heFJlbmRlckluZGV4ID0gcHJldlN0YXRlLm1heFJlbmRlckluZGV4ICsgMTtcbiAgY29uc3QgbmV4dEZvY3VzZWRXaW5kb3cgPSBwcmV2QnlJZFtpZF07XG5cbiAgcHJldkZvY3VzZWRXaW5kb3cgJiYgKGJ5SWRbcHJldkZvY3VzZWRJZF0gPSB7IC4uLnByZXZGb2N1c2VkV2luZG93LCBpc0ZvY3VzZWQ6IGZhbHNlIH0pO1xuICBieUlkW2lkXSA9IHsgLi4ubmV4dEZvY3VzZWRXaW5kb3csIGlzRm9jdXNlZDogdHJ1ZSwgcmVuZGVySW5kZXg6IG1heFJlbmRlckluZGV4IH07XG5cbiAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBieUlkLCBmb2N1c2VkSWQ6IGlkLCBtYXhSZW5kZXJJbmRleCB9O1xufTtcbiIsImltcG9ydCBhZGQgZnJvbSBcIi4vYWRkXCI7XG5pbXBvcnQgZm9jdXMgZnJvbSBcIi4vZm9jdXNcIjtcbmltcG9ydCByZW1vdmUgZnJvbSBcIi4vcmVtb3ZlXCI7XG5pbXBvcnQgdXBkYXRlIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFjdGlvbnM6IHtcbiAgICBhZGQsXG4gICAgZm9jdXMsXG4gICAgcmVtb3ZlLFxuICAgIHVwZGF0ZSxcbiAgfSxcbiAgbmFtZTogXCJ3aW5kb3dzXCIsXG4gIHN0YXRlOiB7XG4gICAgYnlJZDoge30sXG4gICAgZm9jdXNlZElkOiBudWxsLFxuICAgIGlkczogW10sXG4gICAgbWF4UmVuZGVySW5kZXg6IDAsXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgcHJldlN0YXRlIH0sIGlkKSA9PiB7XG4gIGNvbnN0IHByZXZCeUlkID0gcHJldlN0YXRlLmJ5SWQ7XG4gIGNvbnN0IGlkcyA9IFsuLi5wcmV2U3RhdGUuaWRzXS5maWx0ZXIoKHdpbmRvd0lkKSA9PiB3aW5kb3dJZCAhPT0gaWQpO1xuICBjb25zdCBieUlkID0gT2JqZWN0LnZhbHVlcyhwcmV2QnlJZCkucmVkdWNlKChwcmV2VmFsLCBjdXJyZW50VmFsKSA9PiB7XG4gICAgY3VycmVudFZhbC5pZCAhPT0gaWQgJiYgKHByZXZWYWxbY3VycmVudFZhbC5pZF0gPSBjdXJyZW50VmFsKTtcbiAgICByZXR1cm4gcHJldlZhbDtcbiAgfSwge30pO1xuXG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYnlJZCwgaWRzIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgcHJldlN0YXRlIH0sIHVwZGF0ZWRXaW5kb3cpID0+IHtcbiAgY29uc3QgcHJldkJ5SWQgPSBwcmV2U3RhdGUuYnlJZDtcbiAgY29uc3QgcHJldldpbmRvdyA9IHByZXZCeUlkW3VwZGF0ZWRXaW5kb3cuaWRdO1xuICBjb25zdCBieUlkID0geyAuLi5wcmV2QnlJZCB9O1xuXG4gIGJ5SWRbcHJldldpbmRvdy5pZF0gPSB7IC4uLnByZXZXaW5kb3csIC4uLnVwZGF0ZWRXaW5kb3cgfTtcblxuICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGJ5SWQgfTtcbn07XG4iLCJpbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4vdXNlLXN0b3JlXCI7XG5cbmV4cG9ydCB7IHVzZVN0b3JlIH07XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiQGxpYnJhcnkvaG9va3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3RvcmUoc3RvcmUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==