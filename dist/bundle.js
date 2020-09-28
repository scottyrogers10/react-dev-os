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

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,"Store",(function(){return d}));var c={isPending:!1,isError:!1,error:null,shouldThrowErrors:!0,shouldTrackAsyncState:!0},a=function(e){return Object.entries(e).reduce((function(e,t){var r=u(t,2),n=r[0],o=r[1],s="function"!=typeof o;return e[n]={configs:s?i({},c,{},o.configs):c,reducer:s?o.reducer:o},e}),{})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((function(e,t){var r=u(t,2),n=(r[0],r[1]),i=n.actions,o=void 0===i?{}:i,s=n.name,c=n.state,f=void 0===c?null:c;return e[s]={actions:a(o),state:f},e}),{})};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=function(){function e(t){var r=t.name,n=void 0===r?"":r,i=t.services,o=void 0===i?{}:i,u=t.types;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.lastUid=0,this.name=n,this.services=o,this.subscribers={},this.types=f(u),this._typeConfigs=u}var t,r,n;return t=e,(r=[{key:"dispatch",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],u=o.actions[i];return this._setState({typeName:n})(u.reducer({prevState:o.state,services:this.services},t)),this.types[n].state}},{key:"dispatchAsync",value:function(e,t){var r=b(this._tokenizeAction(e),2),n=r[0],i=r[1],o=this.types[n],u=o.actions[i],s=u.configs.shouldTrackAsyncState,c=this._setConfigs({actionName:i,typeName:n}),a=this._setState({typeName:n});return s&&c({isPending:!0,isError:!1,error:null}),Promise.resolve(u.reducer({prevState:o.state,services:this.services},t)).then((function(e){return s&&c({isPending:!1},!1),a(e),e})).catch((function(e){return s&&c({isPending:!1,isError:!0,error:e}),s?u.configs.shouldThrowErrors&&Promise.reject(e):Promise.reject(e)}))}},{key:"getError",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.error}},{key:"getState",value:function(e){return e?this.types[e].state:Object.entries(this.types).reduce((function(e,t){var r=b(t,2),n=r[0],i=r[1].state;return e[n]=i,e}),{})}},{key:"isError",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isError}},{key:"isPending",value:function(e){var t=b(this._tokenizeAction(e),2),r=t[0],n=t[1];return this.types[r].actions[n].configs.isPending}},{key:"subscribe",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r="uid_".concat(++this.lastUid);return this.subscribers[r]=t,t(this),{onNotify:t,token:r,unsubscribe:function(){return e._unsubscribe(r)}}}},{key:"_notify",value:function(){var e=this;Object.values(this.subscribers).forEach((function(t){return t(e)}))}},{key:"reset",value:function(){this.lastUid=0,this.subscribers={},this.types=f(this._typeConfigs)}},{key:"_setConfigs",value:function(e){var t=this,r=e.actionName,n=e.typeName;return function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.types[n].actions[r].configs;return t.types[n].actions[r].configs=y({},o,{},e),i&&t._notify()}}},{key:"_setState",value:function(e){var t=this,r=e.typeName;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.types[r].state=e,n&&t._notify()}}},{key:"_tokenizeAction",value:function(e){var t=b(e.split("."),1)[0];return[t,e.slice(t.length+1)]}},{key:"_unsubscribe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;delete this.subscribers[e]}}])&&h(t.prototype,r),n&&h(t,n),e}()}])}));

/***/ }),

/***/ "./node_modules/scr-pipe/dist/pipe.js":
/*!********************************************!*\
  !*** ./node_modules/scr-pipe/dist/pipe.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():undefined}(this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r={error:function(e,n){if(e instanceof Error)return e;try{return n(e)}catch(e){return e instanceof Error?e:Error(e)}},maybe:function(e,n){return null!=e?n(e):null},sync:function(e,n){return e instanceof Promise?e.then(function(e){return n(e)}):n(e)}};n.default=function(e){var n=function(e,n){return n(e)};return function e(t){return{bind:function(o){return n="string"==typeof o?r[o]:o,e(t)},flow:function(r){return e(n(t,r))},close:function(e){return e?e(t):t}}}(e)}}]).default});

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/assets/icon-128x128.png":
/*!********************************************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/assets/icon-128x128.png ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/index.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../library/ui */ "./src/library/ui/index.js");
/* harmony import */ var _assets_icon_128x128_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon-128x128.png */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/assets/icon-128x128.png");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/styles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var DefaultIcon = function DefaultIcon(_ref) {
  var style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3___default.a.view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "96px",
    width: "96px",
    src: _assets_icon_128x128_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
};

DefaultIcon.defaultProps = {
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultIcon);

/***/ }),

/***/ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/styles.js":
/*!******************************************************************************************!*\
  !*** ./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/styles.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _DefaultIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultIcon */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/DefaultIcon/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/DevOS/ToolManager/ToolBrowser/ToolInfo/Main/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Main = function Main(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      style = _ref.style,
      version = _ref.version;
  var Icon = icon || _DefaultIcon__WEBPACK_IMPORTED_MODULE_2__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _objectSpread(_objectSpread({}, _styles__WEBPACK_IMPORTED_MODULE_3__["default"].view), style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].label
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_library_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__["default"].version
  }, "Version: ".concat(version)));
};

Main.defaultProps = {
  icon: null,
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
    height: "96px",
    width: "96px",
    marginBottom: "8px"
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
    padding: "16px 0px 32px 0px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZPUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGV2T1Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9ub2RlX21vZHVsZXMvZ2VuZXJpYy1kYXRhLWNoYW1iZXIvZGlzdC9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9ub2RlX21vZHVsZXMvc2NyLXBpcGUvZGlzdC9waXBlLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vTWFpbi9EZWZhdWx0SWNvbi9hc3NldHMvaWNvbi0xMjh4MTI4LnBuZyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL1Rvb2xJbmZvL01haW4vRGVmYXVsdEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sSW5mby9NYWluL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vTWFpbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sSW5mby9TZWNvbmRhcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sSW5mby9TZWNvbmRhcnkvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbEluZm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sSW5mby9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sTGlzdC9JdGVtL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvVG9vbExpc3QvSXRlbS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9Ub29sQnJvd3Nlci9Ub29sTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL1Rvb2xMaXN0L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1Rvb2xNYW5hZ2VyL1Rvb2xCcm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvVG9vbEJyb3dzZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvVG9vbE1hbmFnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9Ub29sTWFuYWdlci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvQ29udGVudC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvY2hpbGRyZW4vQWN0aW9uQnV0dG9ucy9BY3Rpb25CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvY2hpbGRyZW4vQWN0aW9uQnV0dG9ucy9BY3Rpb25CdXR0b24vc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvSGVhZGVyL2NoaWxkcmVuL0FjdGlvbkJ1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvY2hpbGRyZW4vQWN0aW9uQnV0dG9ucy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvY2hpbGRyZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9jb21wb25lbnRzL0Rldk9TL1dpbmRvd01hbmFnZXIvV2luZG93L0hlYWRlci9oZWxwZXJzL29uLW1vdmUtaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9IZWFkZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvUmVzaXphYmxlL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9SZXNpemFibGUvaGVscGVycy9vbi1yZXNpemUtaGFuZGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9SZXNpemFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9SZXNpemFibGUvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvV2luZG93TWFuYWdlci9XaW5kb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL1dpbmRvdy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9XaW5kb3dNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2NvbXBvbmVudHMvRGV2T1MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvY29tcG9uZW50cy9EZXZPUy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvZmFjdG9yaWVzL3dpbmRvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvaG9va3MvdXNlLWNvbnRleHQtbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1ob3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1tZXJnZS1zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1vbi1tb3ZlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvaG9va3MvdXNlLW9uLXdpbmRvdy1ldmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L2hvb2tzL3VzZS1zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS9zdHlsZXMvY29sb3JzL3BhbGV0dGVzL2JsYWNrLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2NvbG9ycy9wYWxldHRlcy9ibHVlLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2NvbG9ycy9wYWxldHRlcy9ncmF5LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2NvbG9ycy9wYWxldHRlcy9ncmVlbi5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMvcmVkLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2NvbG9ycy9wYWxldHRlcy93aGl0ZS5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jb2xvcnMvcGFsZXR0ZXMveWVsbG93LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3N0eWxlcy9jc3MvdGV4dE92ZXJmbG93L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2Nzcy91c2VyU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9jaGlsZHJlbi9SZXNpemFibGVIYW5kbGVzL1Jlc2l6YWJsZUhhbmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvY2hpbGRyZW4vUmVzaXphYmxlSGFuZGxlcy9SZXNpemFibGVIYW5kbGUvc3R5bGVzLmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9jaGlsZHJlbi9SZXNpemFibGVIYW5kbGVzL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9jaGlsZHJlbi9SZXNpemFibGVIYW5kbGVzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvY2hpbGRyZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS9ib3R0b20tbGVmdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL2JvdHRvbS1yaWdodC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL2JvdHRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2NhbGN1bGF0ZS1yZXNpemUvbGVmdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL2NvbW1vbi9SZXNpemFibGUvaGVscGVycy9jYWxjdWxhdGUtcmVzaXplL3JpZ2h0L2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1Jlc2l6YWJsZS9oZWxwZXJzL2NhbGN1bGF0ZS1yZXNpemUvdG9wLWxlZnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS90b3AtcmlnaHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvY2FsY3VsYXRlLXJlc2l6ZS90b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vUmVzaXphYmxlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvY29tbW9uL1RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9saWJyYXJ5L3VpL3ZpZXdzL1ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvbGlicmFyeS91aS92aWV3cy9WaWV3UmVmL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL2xpYnJhcnkvdWkvdmlld3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvcHJvY2VkdXJlcy93aW5kb3dzL2Nsb3NlL2dldC1uZXh0LWZvY3VzZWQtaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvcHJvY2VkdXJlcy93aW5kb3dzL2Nsb3NlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9jcmVhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvcHJvY2VkdXJlcy93aW5kb3dzL21vdmUvY2FsY3VsYXRlLW1vdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvcHJvY2VkdXJlcy93aW5kb3dzL21vdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvcHJvY2VkdXJlcy93aW5kb3dzL3Jlc2l6ZS9jYWxjdWxhdGUtcmVzaXplL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3Byb2NlZHVyZXMvd2luZG93cy9yZXNpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvdG9vbC1icm93c2VyL2Nsb3NlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL3Rvb2wtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS90b29sLWJyb3dzZXIvb3Blbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS90b29sLWJyb3dzZXIvdG9nZ2xlL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL3dpbmRvd3MvYWRkL2luZGV4LmpzIiwid2VicGFjazovL2Rldk9TLy4vc3JjL3N0b3JlL3dpbmRvd3MvZm9jdXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvLi9zcmMvc3RvcmUvd2luZG93cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS93aW5kb3dzL3JlbW92ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy9zdG9yZS93aW5kb3dzL3VwZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy90b29scy9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZPUy8uL3NyYy90b29scy9ob29rcy91c2Utc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2T1MvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkRlZmF1bHRJY29uIiwic3R5bGUiLCJzdHlsZXMiLCJ2aWV3IiwiaWNvbiIsImRlZmF1bHRQcm9wcyIsIk1haW4iLCJsYWJlbCIsInZlcnNpb24iLCJJY29uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiZ3JheSIsIlNlY29uZGFyeSIsImRlc2NyaXB0aW9uIiwiYm9yZGVyVG9wIiwidGV4dEFsaWduIiwiVG9vbEluZm8iLCJzZWxlY3RlZFRvb2wiLCJtYWluIiwic2Vjb25kYXJ5IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJJdGVtIiwib3BlbldpbmRvdyIsIndpbmRvdyIsImhhbmRsZUNsaWNrIiwiY3NzIiwidXNlclNlbGVjdCIsIm5vbmUiLCJ0ZXh0T3ZlcmZsb3ciLCJlbGxpcHNpcyIsIlRvb2xMaXN0Iiwic2VsZWN0ZWRJbmRleCIsInRvb2xzIiwidGl0bGUiLCJsaXN0IiwibWFwIiwidG9vbCIsImluZGV4IiwiaXNTZWxlY3RlZCIsIml0ZW0iLCJib3JkZXJSaWdodCIsImJhY2tncm91bmRDb2xvciIsImxpbmVIZWlnaHQiLCJwYWRkaW5nTGVmdCIsImZsZXgiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJibHVlIiwiQVJST1dfRE9XTiIsIkFSUk9XX1VQIiwiRU5URVIiLCJFU0NBUEUiLCJUb29sQnJvd3NlciIsInVzZVN0YXRlIiwic2V0U2VsZWN0ZWRJbmRleCIsImNvbmZpZ3MiLCJzdG9yZSIsImRpc3BhdGNoIiwic2V0VGltZW91dCIsImNyZWF0ZVdpbmRvdyIsInVwZGF0ZVNlbGVjdGVkSW5kZXgiLCJsZW5ndGgiLCJoYW5kbGVLZXlVcCIsImV2ZW50Iiwia2V5Q29kZSIsInVzZU9uV2luZG93RXZlbnQiLCJpbm5lcldpZHRoIiwidG9vbExpc3QiLCJ0b29sSW5mbyIsImNlbnRlciIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImJvcmRlciIsIlRfS0VZQ09ERSIsIlRvb2xNYW5hZ2VyIiwiZm9ybWF0dGVkVG9vbHMiLCJpc09wZW4iLCJ1c2VTdG9yZSIsImdldFN0YXRlIiwidGFnTmFtZSIsInRhcmdldCIsInRvVXBwZXJDYXNlIiwidG9vbEJyb3dzZXIiLCJvdmVyZmxvdyIsInBvaW50ZXJFdmVudHMiLCJ6SW5kZXgiLCJDb250ZW50IiwibWVtbyIsImNvbnRlbnRSZWYiLCJpZCIsIkNvbXBvbmVudCIsImJ5SWQiLCJjb21wb25lbnQiLCJoYW5kbGVDbG9zZSIsImNsb3NlV2luZG93IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsIkFjdGlvbkJ1dHRvbiIsIm9uQ2xpY2siLCJwcmltYXJ5Q29sb3IiLCJoYW5kbGVEb3VibGVDbGljayIsInN0b3BQcm9wYWdhdGlvbiIsIkFjdGlvbkJ1dHRvbnMiLCJpc0ZvY3VzZWQiLCJvbkNsb3NlIiwibWFyZ2luUmlnaHQiLCJyZWQiLCJ5ZWxsb3ciLCJncmVlbiIsIndpbmRvd1JlZiIsImhhbmRsZU1vdmUiLCJtb3ZlV2luZG93IiwiZWxlbSIsImN1cnJlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZU1vdmVFbmQiLCJzaG91bGREaXNwYXRjaCIsImhhbmRsZU1vdmVTdGFydCIsIm9uTW92ZSIsIm9uTW92ZUVuZCIsIm9uTW92ZVN0YXJ0IiwiSGVhZGVyIiwidXNlT25Nb3ZlIiwib25Nb3ZlSGFuZGxlcnMiLCJoZWFkZXJSZWYiLCJyZWYiLCJpc09wYXF1ZSIsImZvY3VzZWQiLCJhY3Rpb25CdXR0b25zIiwiZmxleFNwYWNlciIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1JpZ2h0IiwiaGFuZGxlUmVzaXplIiwiZGltZW5zaW9ucyIsInJlc2l6ZVdpbmRvdyIsImhhbmRsZVJlc2l6ZUVuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZVJlc2l6ZVN0YXJ0IiwiUmVzaXphYmxlIiwiY2hpbGRyZW4iLCJvblJlc2l6ZUhhbmRsZXJzIiwicmVzaXphYmxlIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJXaW5kb3ciLCJ1c2VSZWYiLCJzdGF0ZSIsImhhbmRsZU1vdXNlRG93biIsImhlYWRlciIsIngiLCJ5Iiwic2l6ZSIsInJlbmRlckluZGV4IiwidHJhbnNmb3JtIiwib3BhY2l0eSIsIldpbmRvd01hbmFnZXIiLCJ3aW5kb3dJZHMiLCJpZHMiLCJ3aW5kb3dJZCIsIkRldk9TIiwiYm94U2l6aW5nIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsImN1cnJlbnRJZCIsImNyZWF0ZSIsImF0dHJzIiwiZXZlbnRzIiwidHlwZSIsIm9uUmVzaXplIiwiaXNBY3RpdmUiLCJ1c2VNZXJnZVN0YXRlIiwic2V0U3RhdGUiLCJoYW5kbGVDb250ZXh0TWVudSIsImNsaWVudFgiLCJjbGllbnRZIiwiY2xvc2VNZW51IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZGVmYXVsdFN0YXRlIiwibWVyZ2VTdGF0ZSIsInVwZGF0ZWRTdGF0ZSIsIkZ1bmN0aW9uIiwicHJldlN0YXRlIiwiaXNNb3VzZURvd24iLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsIm1hcFN0b3JlVG9TdGF0ZSIsInVuZGVmaW5lZCIsImlzQ2FuY2VsZWQiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlIiwiY3VycmVudFN0b3JlIiwidW5zdWJzY3JpYmUiLCJibGFjayIsIndoaXRlU3BhY2UiLCJXZWJraXRVc2VyU2VsZWN0IiwiTW96VXNlclNlbGVjdCIsIk1zVXNlclNlbGVjdCIsInRleHQiLCJSZXNpemFibGVIYW5kbGUiLCJjdXJzb3IiLCJvblJlc2l6ZUVuZCIsIm9uUmVzaXplU3RhcnQiLCJkb2N1bWVudCIsImJvZHkiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJSZXNpemFibGVIYW5kbGVzIiwicmlnaHQiLCJib3R0b20iLCJ0b3BMZWZ0IiwidG9wUmlnaHQiLCJib3R0b21MZWZ0IiwiYm90dG9tUmlnaHQiLCJvblJlc2lzZVN0YXJ0IiwibWluU2l6ZSIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImNhbGN1bGF0b3JzIiwiY2FsY3VsYXRlUmVzaXplIiwiaGFuZGxlVHlwZSIsInJlc2l6YWJsZVJlZiIsIlRleHQiLCJwcm9wcyIsImNvbnRhaW5lciIsIlZpZXciLCJWaWV3UmVmIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwibmV4dEZvY3VzZWRXaW5kb3ciLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJwcmV2VmFsIiwiY3VycmVudFZhbCIsIm5leHRGb2N1c2VkSWQiLCJnZXROZXh0Rm9jdXNlZElkIiwiY3JlYXRlZFdpbmRvdyIsIndpbmRvd0ZhY3RvcnkiLCJjaGVja1dpbmRvd1RvcCIsImN0eCIsIm1heFRvcCIsImNoZWNrV2luZG93Qm90dG9tIiwibWF4Qm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjaGVja1dpbmRvd0xlZnQiLCJtYXhMZWZ0IiwiY2hlY2tXaW5kb3dSaWdodCIsIm1heFJpZ2h0IiwicHJldlRvcCIsInByZXZMZWZ0IiwicGlwZSIsImZsb3ciLCJjbG9zZSIsImNhbGN1bGF0ZU1vdmUiLCJTdG9yZSIsIm5hbWUiLCJ0eXBlcyIsIndpbmRvd3MiLCJhY3Rpb25zIiwib3BlbiIsInRvZ2dsZSIsInByZXZCeUlkIiwicHJldkZvY3VzZWRJZCIsImZvY3VzZWRJZCIsInByZXZGb2N1c2VkV2luZG93IiwibWF4UmVuZGVySW5kZXgiLCJhZGQiLCJmb2N1cyIsInJlbW92ZSIsInVwZGF0ZSIsImZpbHRlciIsInVwZGF0ZWRXaW5kb3ciLCJwcmV2V2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQXFILENBQUMsb0JBQW9CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUs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RCxTQUFaO0FBQXVCaEcsUUFBSSxFQUFKQSxJQUF2QjtBQUE2QmtFLE9BQUcsRUFBSEE7QUFBN0I7QUFDRCxDQVRELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZSwrRUFBZ0IwSCxhQUFoQixFQUFrQztBQUFBLE1BQS9CNUYsU0FBK0IsUUFBL0JBLFNBQStCO0FBQy9DLE1BQU1rRixRQUFRLEdBQUdsRixTQUFTLENBQUNoRyxJQUEzQjtBQUNBLE1BQU02TCxVQUFVLEdBQUdYLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDOUwsRUFBZixDQUEzQjs7QUFDQSxNQUFNRSxJQUFJLHFCQUFRa0wsUUFBUixDQUFWOztBQUVBbEwsTUFBSSxDQUFDNkwsVUFBVSxDQUFDL0wsRUFBWixDQUFKLG1DQUEyQitMLFVBQTNCLEdBQTBDRCxhQUExQztBQUVBLHlDQUFZNUYsU0FBWjtBQUF1QmhHLFFBQUksRUFBSkE7QUFBdkI7QUFDRCxDQVJELEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVkLDhIQUFRLENBQUN4Qiw4Q0FBRCxDQUF2QixFOzs7Ozs7Ozs7OztBQ0hBLG1EIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRldk9TXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRldk9TXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmRhdGFDaGFtYmVyPXQoKTplLmRhdGFDaGFtYmVyPXQoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgaT10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxyKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LG4pe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpci5kKG4saSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGkpKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIi9cIixyKHIucz0wKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBpKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP24oT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtvKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpuKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIG8oZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIHUoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIHI9W10sbj0hMCxpPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIHUscz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KHU9cy5uZXh0KCkpLmRvbmUpJiYoci5wdXNoKHUudmFsdWUpLCF0fHxyLmxlbmd0aCE9PXQpO249ITApO31jYXRjaChlKXtpPSEwLG89ZX1maW5hbGx5e3RyeXtufHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgb319cmV0dXJuIHJ9KGUsdCl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBzKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShyKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIHMoZSx0KX0oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHMoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1yLnIodCksci5kKHQsXCJTdG9yZVwiLChmdW5jdGlvbigpe3JldHVybiBkfSkpO3ZhciBjPXtpc1BlbmRpbmc6ITEsaXNFcnJvcjohMSxlcnJvcjpudWxsLHNob3VsZFRocm93RXJyb3JzOiEwLHNob3VsZFRyYWNrQXN5bmNTdGF0ZTohMH0sYT1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciByPXUodCwyKSxuPXJbMF0sbz1yWzFdLHM9XCJmdW5jdGlvblwiIT10eXBlb2YgbztyZXR1cm4gZVtuXT17Y29uZmlnczpzP2koe30sYyx7fSxvLmNvbmZpZ3MpOmMscmVkdWNlcjpzP28ucmVkdWNlcjpvfSxlfSkse30pfSxmPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3JldHVybiBPYmplY3QuZW50cmllcyhlKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9dSh0LDIpLG49KHJbMF0sclsxXSksaT1uLmFjdGlvbnMsbz12b2lkIDA9PT1pP3t9Omkscz1uLm5hbWUsYz1uLnN0YXRlLGY9dm9pZCAwPT09Yz9udWxsOmM7cmV0dXJuIGVbc109e2FjdGlvbnM6YShvKSxzdGF0ZTpmfSxlfSkse30pfTtmdW5jdGlvbiBsKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiB5KGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP2woT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtwKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpsKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIHAoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIGIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKSlyZXR1cm47dmFyIHI9W10sbj0hMCxpPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIHUscz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KHU9cy5uZXh0KCkpLmRvbmUpJiYoci5wdXNoKHUudmFsdWUpLCF0fHxyLmxlbmd0aCE9PXQpO249ITApO31jYXRjaChlKXtpPSEwLG89ZX1maW5hbGx5e3RyeXtufHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgb319cmV0dXJuIHJ9KGUsdCl8fGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiB2KGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShyKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIHYoZSx0KX0oZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHYoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBoKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIHI9dC5uYW1lLG49dm9pZCAwPT09cj9cIlwiOnIsaT10LnNlcnZpY2VzLG89dm9pZCAwPT09aT97fTppLHU9dC50eXBlczshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMubGFzdFVpZD0wLHRoaXMubmFtZT1uLHRoaXMuc2VydmljZXM9byx0aGlzLnN1YnNjcmliZXJzPXt9LHRoaXMudHlwZXM9Zih1KSx0aGlzLl90eXBlQ29uZmlncz11fXZhciB0LHIsbjtyZXR1cm4gdD1lLChyPVt7a2V5OlwiZGlzcGF0Y2hcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPWIodGhpcy5fdG9rZW5pemVBY3Rpb24oZSksMiksbj1yWzBdLGk9clsxXSxvPXRoaXMudHlwZXNbbl0sdT1vLmFjdGlvbnNbaV07cmV0dXJuIHRoaXMuX3NldFN0YXRlKHt0eXBlTmFtZTpufSkodS5yZWR1Y2VyKHtwcmV2U3RhdGU6by5zdGF0ZSxzZXJ2aWNlczp0aGlzLnNlcnZpY2VzfSx0KSksdGhpcy50eXBlc1tuXS5zdGF0ZX19LHtrZXk6XCJkaXNwYXRjaEFzeW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1iKHRoaXMuX3Rva2VuaXplQWN0aW9uKGUpLDIpLG49clswXSxpPXJbMV0sbz10aGlzLnR5cGVzW25dLHU9by5hY3Rpb25zW2ldLHM9dS5jb25maWdzLnNob3VsZFRyYWNrQXN5bmNTdGF0ZSxjPXRoaXMuX3NldENvbmZpZ3Moe2FjdGlvbk5hbWU6aSx0eXBlTmFtZTpufSksYT10aGlzLl9zZXRTdGF0ZSh7dHlwZU5hbWU6bn0pO3JldHVybiBzJiZjKHtpc1BlbmRpbmc6ITAsaXNFcnJvcjohMSxlcnJvcjpudWxsfSksUHJvbWlzZS5yZXNvbHZlKHUucmVkdWNlcih7cHJldlN0YXRlOm8uc3RhdGUsc2VydmljZXM6dGhpcy5zZXJ2aWNlc30sdCkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBzJiZjKHtpc1BlbmRpbmc6ITF9LCExKSxhKGUpLGV9KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3JldHVybiBzJiZjKHtpc1BlbmRpbmc6ITEsaXNFcnJvcjohMCxlcnJvcjplfSkscz91LmNvbmZpZ3Muc2hvdWxkVGhyb3dFcnJvcnMmJlByb21pc2UucmVqZWN0KGUpOlByb21pc2UucmVqZWN0KGUpfSkpfX0se2tleTpcImdldEVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9Yih0aGlzLl90b2tlbml6ZUFjdGlvbihlKSwyKSxyPXRbMF0sbj10WzFdO3JldHVybiB0aGlzLnR5cGVzW3JdLmFjdGlvbnNbbl0uY29uZmlncy5lcnJvcn19LHtrZXk6XCJnZXRTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlP3RoaXMudHlwZXNbZV0uc3RhdGU6T2JqZWN0LmVudHJpZXModGhpcy50eXBlcykucmVkdWNlKChmdW5jdGlvbihlLHQpe3ZhciByPWIodCwyKSxuPXJbMF0saT1yWzFdLnN0YXRlO3JldHVybiBlW25dPWksZX0pLHt9KX19LHtrZXk6XCJpc0Vycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9Yih0aGlzLl90b2tlbml6ZUFjdGlvbihlKSwyKSxyPXRbMF0sbj10WzFdO3JldHVybiB0aGlzLnR5cGVzW3JdLmFjdGlvbnNbbl0uY29uZmlncy5pc0Vycm9yfX0se2tleTpcImlzUGVuZGluZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWIodGhpcy5fdG9rZW5pemVBY3Rpb24oZSksMikscj10WzBdLG49dFsxXTtyZXR1cm4gdGhpcy50eXBlc1tyXS5hY3Rpb25zW25dLmNvbmZpZ3MuaXNQZW5kaW5nfX0se2tleTpcInN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpmdW5jdGlvbigpe30scj1cInVpZF9cIi5jb25jYXQoKyt0aGlzLmxhc3RVaWQpO3JldHVybiB0aGlzLnN1YnNjcmliZXJzW3JdPXQsdCh0aGlzKSx7b25Ob3RpZnk6dCx0b2tlbjpyLHVuc3Vic2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJuIGUuX3Vuc3Vic2NyaWJlKHIpfX19fSx7a2V5OlwiX25vdGlmeVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztPYmplY3QudmFsdWVzKHRoaXMuc3Vic2NyaWJlcnMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0KGUpfSkpfX0se2tleTpcInJlc2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxhc3RVaWQ9MCx0aGlzLnN1YnNjcmliZXJzPXt9LHRoaXMudHlwZXM9Zih0aGlzLl90eXBlQ29uZmlncyl9fSx7a2V5OlwiX3NldENvbmZpZ3NcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9ZS5hY3Rpb25OYW1lLG49ZS50eXBlTmFtZTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIGk9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXSxvPXQudHlwZXNbbl0uYWN0aW9uc1tyXS5jb25maWdzO3JldHVybiB0LnR5cGVzW25dLmFjdGlvbnNbcl0uY29uZmlncz15KHt9LG8se30sZSksaSYmdC5fbm90aWZ5KCl9fX0se2tleTpcIl9zZXRTdGF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLnR5cGVOYW1lO3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3JldHVybiB0LnR5cGVzW3JdLnN0YXRlPWUsbiYmdC5fbm90aWZ5KCl9fX0se2tleTpcIl90b2tlbml6ZUFjdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWIoZS5zcGxpdChcIi5cIiksMSlbMF07cmV0dXJuW3QsZS5zbGljZSh0Lmxlbmd0aCsxKV19fSx7a2V5OlwiX3Vuc3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbDtkZWxldGUgdGhpcy5zdWJzY3JpYmVyc1tlXX19XSkmJmgodC5wcm90b3R5cGUsciksbiYmaCh0LG4pLGV9KCl9XSl9KSk7IiwiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sbik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5waXBlPW4oKTplLnBpcGU9bigpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPXt9O2Z1bmN0aW9uIHQocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHQubT1lLHQuYz1uLHQuZD1mdW5jdGlvbihlLG4scil7dC5vKGUsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4se2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHQudD1mdW5jdGlvbihlLG4pe2lmKDEmbiYmKGU9dChlKSksOCZuKXJldHVybiBlO2lmKDQmbiYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHQucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZuJiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSl0LmQocixvLGZ1bmN0aW9uKG4pe3JldHVybiBlW25dfS5iaW5kKG51bGwsbykpO3JldHVybiByfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIG49ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChuLFwiYVwiLG4pLG59LHQubz1mdW5jdGlvbihlLG4pe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dC5yKG4pO3ZhciByPXtlcnJvcjpmdW5jdGlvbihlLG4pe2lmKGUgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gZTt0cnl7cmV0dXJuIG4oZSl9Y2F0Y2goZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvcj9lOkVycm9yKGUpfX0sbWF5YmU6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbnVsbCE9ZT9uKGUpOm51bGx9LHN5bmM6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZSBpbnN0YW5jZW9mIFByb21pc2U/ZS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBuKGUpfSk6bihlKX19O24uZGVmYXVsdD1mdW5jdGlvbihlKXt2YXIgbj1mdW5jdGlvbihlLG4pe3JldHVybiBuKGUpfTtyZXR1cm4gZnVuY3Rpb24gZSh0KXtyZXR1cm57YmluZDpmdW5jdGlvbihvKXtyZXR1cm4gbj1cInN0cmluZ1wiPT10eXBlb2Ygbz9yW29dOm8sZSh0KX0sZmxvdzpmdW5jdGlvbihyKXtyZXR1cm4gZShuKHQscikpfSxjbG9zZTpmdW5jdGlvbihlKXtyZXR1cm4gZT9lKHQpOnR9fX0oZSl9fV0pLmRlZmF1bHR9KTsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBWUFBQUREUG1ITEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBRGRnQUFBM1lCZmRXQ3pBQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQmNmU1VSQlZIaWM3WjE1bEJ4VnZjYy90NnE2ZTZaN0psR1VJT0U4U0lLRWJNT2lzdS94Q1JJWFFKWk1NZ3Jkd0VRV2JlQUlvazk1aUNzcUQ3RWZQQitMZEFOT0ZoWTNqcWc4RlJWRWVBOFFDUmdRSTRGZ0pMT1J6RXozVEhkWDFYMS9WTStrcDlmcTdxcGVKbnpPbVJQb3F2clZuZmwrdStyV3ZiLzdLeUdseEExQ3dmQWNZSDlnUWVabi82eC8zdzVzQlY0dDhQUDNhQ3p5dWl1TmVvczhoTk1HQ0FYRG5jRER3SkUxaFBrTGNEOXdYelFXZWQ2UmhyMUZRZHd3d0xuQVhRNkcvQlB3RGVDQmFDeGlPaGozTFFERmhaZ2JBU2VGT2hTNEYzZ2hGQXgvSWhRTUN3ZGo3L1k0Ym9Cb0xQSW5vQmR3dW5PeENMZ2JlQ1FVREwvYjRkaTdMWTdmQWlZSkJjUG5BM2NBYm54ang0RnJnTys4ZFZ1b0RUZHVBUUJFWTVFN2dRdHgva29BMEE3Y0FOeTM4cHhncHd2eFc1Yis0ZEdqdG04Zm0yTjNmOWNNQUs2YkFPQmpIcTN0cVo3VmE1YTRGTCtsNkI4Y3ZRR1R4NFVxdHcwTWpWNXQ1eGpYYmdIWnVIazdrRktTaU1lVEhwOTJURi9mYlU4N0hiOVZlR05vNUhCRmlpZXpQeE9DeisvNWpzN3JTeDNuNmhWZ0VqZXZCRUlJTkkvSGwwN3FqM2F2dk9oZFRzZHZGUlRKMTNNL2s1SnZEQXlOZnE3a2NlNDFhVHB1bXNEcjlXRktzMTJhcWVkNmVzNzNPaDIvMmRrK0ZIOC9pUGNYMmxiT0JIVXpBTGhuQWlFc0V4aUdzYWVSRnJ2ZGJVQklNKy9ibjAwcEU5VFZBT0NlQ2J4ZUwwSUlkRjFmdG1wVjc3Vk94bTVtK29kR3p3QU9MN2RmTVJQVXBSTllDRGM2aHNtSmNWS3BGRUlvdXJlTmZmcjZvdjFPeFc1U2xQN0IwWTJBN2FjZ0tZMXI5OXJ6YlYrZUN1QktzMnpneHBWQVVUVUFwRFExUTFkKzRWVGNacVYvYU9UalZDQSt3TWhvNHJvWE5yM3lzOG4vYjVnQndIa1RxS282OWQ5NldqOTAxYW8xcHprUnR4bjVDM2hCWEZmSk1SUEpKRy91Mk1Ib1dIekY4eTlhSm1pb0FjQlpFeWlLZ2hDN2ZpWFRNTDVWYTh4bVpjK2gwYzhnbVdkbjMzUXF6ZmIrQWJadGV3UFRzRWJPNDJPSkZTKzgvT3FpaGhzQXBwbWdabFJ0MTFYQTBQV0ZQVDBYTFhZaWJqUFJQelIyc1pSOHJkeCt1cTR6TURqSTFuOXNJeDVQVE5zbXBVU1ZZbmxUR0FDbVRIQjdyWEd5YndNQVJscS9wZGFZelVULzBOakZTSGtMSlRyUGhtRXdORFRNYTY5dlkzUTBYbkNmOXZhMkZ4Y3QzUGUvbXNZQUdUNUxqYmtFcWpMZEFLYXBIMTlMdkdhaW5QaW1hVEw4NWc1ZTIvb1BkbzZNUW9FblBLL0hNelo3MXF3ckQxNzI3c1dRZVF3TUJjUHZCRzRENWdLZmk4WWl2M1h2MXloTktCamVoRFgzWHhYU05Ca2JHNTMybWNmbk8yUGR1dHQrWEd2YkdrazU4ZVB4QkFORFExUDMrRncwajViMCs5dHVYTEp3M3I5bGZ6NTVCYmdLT0FNNEF2aDVLQmcreGJtbTE1ZENQVWtwemZQcjNoQUhLU3QrSWtIL3dHQkI4VFZOMDJmTjZyajFmWWNzNnNnVkgzWVpZRm5XWjIzQVQwTEI4QWNkYUh0RmhJTGh0d0VMblk0ckRmTVlwMlBXaS82aHNVdktpdDgvU082QW5xcXFabWRueDRhNWU4MmF2ZVRBZVJjQmVxSGpKdzJ3Zjg3blB1REhEVERCdDZqeDBWUVd1QWFZcHZuMlZzd2x6SWgvTXhXSzcvZjduNWpkb2U2MWRORzg3cmx6NXlZS0hUdUprdm5EekN1d3JhNG15QXdOOTlZY3FNQTlRRW9wa3NtSlpmbGJtcGR5My95eGVMeWcrSjBkL2w4ZXRIVEJVUXNYTGh5MGN4NEYyQWRMN0VMVXhRUlo4d0x1WVpxMXJGT29LMW5pRjJRc0htZGdZS2lnK0VzWEw2aElLNFg4eTM4dXJwckE2VW1oWWtFazRoQW40cnROUGNVSHl3QUxiT3puaWduY21CRTB6TUtQUVZMSWZadzZoMXZVVzN5d2J3QncyQVJ1NVFrYWVzSE9MazZmeDJrR2hzWXVyVWI4UUVmZzRXckZCOHNBRXhYczc0Z0ozRXdTMVlzYm9HblhEd3dNalYwcXJkNStRVXFKMzdWNGZrMWpOZ3JXaXR4S3FNa0Vib3B2bWlaU0Z0VzVLUTNRU1BHaE9nTkFsU1p3ZWJWUXFXOC9Rb3JSb2hzYlJLUEZCOHNBVzZvOHRpSVR1QzArbEx6L0l4VGx6MjZkdHhxYVFYeXdETENOSXNPRU5yQmxnbnFJRDlZMGFERk1hVHppNXJrcllXQm81RlBOSUQ3c21nMThoY0tqZ1haSkFzRm9MTEkrKzhQTUtPTmx3STNVb1JldUd6b1Q4VVNCNFdBaDcvOWhyQ21tdmkzeHhYOFcyMTVVL0VEZ2Y3cVd6RC9aNmZab21YOWZwVFlEK0lCMW9XRDRIS3kxL0p1eGtoV0R3SWsxeEswSVRkVm83d2d3SG85UCt3TXFxakpTcnphVW90bkVoMTBHMkFpYzRFQzhNekkvRFVOVlZQeUJEc1lUY2N6TW9KQWlsUDl0Wkp1Z09jV0hYVE52RDdoMWdrYWdLQXIrUUFkS0pqMU1LT0o3ald4UE9mSGpEUklmZGhuZ1VXQkdMYUlRUXVBUEJOQThucEYxNjIvL1VhUGFZVWY4L2dhSkR4a0RSR01SQS9paDJ5ZXJOd0pCZTdzLzJxanpEd3lNZkxvcThmMkJYOVZEZkppZWZIRUw3aFZ5YUNTaFVEQjhVcjFQT2pBdzhta3BSS1RZOXBMaUw1My9BZGNibUdIS0FKbDZmRCtwMTRucnlDemdGNWtubExyUUt1SkRmdnBWMmNVR0xZb1g2ekgxMDI2ZnFKWEVoeHdEUkdPUnA0Q0dkWmhjUmdFaW9XQzQ1RnI2V21nMThhSEE4dkJRTUx3M1Zxbld0eldpUVhVaUNxeUp4aUxWRG9IbjBZcmlRNEVNM0dnczhrL1ROSzRybEYwN2d3aGh6V0g0blFnMk1EQVNya2I4amtEZzE0MFVIMG9VaUZqZDNidko0L0V1VW5MVzJzMHduZ0ErSEkxRmhxb05rQkgvdThXMmx4Si8yWkw1LzFydGVaMmk2QVJKdTk5M3pNVEUrRmd5bWF4bmUrck5rY0Jqb1dCNDMyb09iblh4b1V5Sm1ITzdlN3ZHZGYwWmdkUzh2alk4bmhsYmdHc2I4TUZvTExMUjdnRXpRWHdvc3dybjd2VzNiL1I0UFdkTGlUa3hQazQ4UGtvNm5TcTQ2clRGbVF2OFBoUU0yMXBKUEZQRUI1dEZvbGF2dXVpRWREcjVzRFJOTDFoRHJKcEh3K1Axb2lnYW9zcVpmdE0wMEhVZFV6ZFFOUldQdDlqNmxMb3hBZlJFWTVHaXcrTGx4QitMSnhnWXlGK3gweEh3LzJiWmtnVUZhL2sxRXR0VnducDZMdDVmVHlhZk5reGpkazRJRkZWQlV6VVVWUUVoRU5hbklHVG1YMENBYVppWWhvNWhHQmlHa2ZkSGFtOXZSMnY4YmNZRUxvM0dJditkdTJIN3dNaGxRb2liaWgzWWF1SkRoV1hpZW5yTzd6RFN5dU82bnU1eXFUbTBCL3hvcWxaK1YvZjVjalFXbWFvM09CUEZoeXJyQlBaMHIrbE42K21JYVpwdGpqZElDTnI5Z2J4U0x3M2lkdURpNjcvOTFVL05SUEdoaGtLUkYxNTRpWDlzSlAwajNVaC9BQ2tkemZkVEZJVjJmd0JGY1M2TnIydC9nd1AzTTlsckQ4bkFEc0htMXhXZWZyRzh5VDY0NHVTTkp5MC9vZWdWcjVYRkJ3Y3FoWjUzNXBvNUtVM2ViQmo2NmFacGVoeHExMVJXajZpMmg1bWh3eTg1YjBXYTl5M096eGgrZnJQSzl4LzBzR08wOERtT09lNW9QbnJhaDRyR2JuWHh3Y0ZTc1ZkY2ZyVzIvWi9EMTVoU2RodUd2citVc3VwcnVLSUlYVkcwVFpwSGU4RGo4WDRHcU9xdElMTTdKRmQvSXNuZTd5eitPdzd0RkZ4L3Q0L0JIZE5OVUZiOHNUZ0RnNFV5ZWZ5UGRDMVpzTHlhOWpZQzEyb0Y5Nno4NU1kTXpIT2xsQWRLMDl4TFlzNHl6WHhUS0VMUmhhTHNGRUpzUStFbFZYSjMzNFk3SHB6Y0hncUdsd01QVWJ5R1FVSHNpRDlKcmdtT1BlNW9QckliaUE5MUxoWjl4dWtyMi95QmdKYUl4L1Y1OCticDM3bnBtN1ptNDBMQjhGbkFCbXlXajZsRS9Fa0dkOEEzNzJsalVkY3h1NDM0ME1CcTRaVVNDb1kvQ2VROW0rZFNqZmlUakk3N1NNMjVDa1BabytEMm1TWStORUd0WUx0RVk1RmJnWDh2dDk4VjNhbXF4QWZvYkUvU3VUT0NhZzduYlp1SjRrTUxHUUFnR290OEJTaWFaUXVRcUhIeTBxdU01Sm1nbVBnRC9mMTgvYnF2dDhZbHRBZ3RaWUFNbHdIcmkyMzg2MnUxLzByWkppZ2wvbDNmdjR0ME9yMjhlK1VGejE5eCtkVk5NWHhaS1MxbmdHZ3NJb0Z6c2Q1UW5zZkxXNTBaUVp3MHdjandLMFhGbjBSUDYwdTMvV053eTlsbmgyYzVjdkk2MG5JR0FJakdJbW5nWTBEZW1yK2huYzROU25xVkVSWjMzb2N2YTIxcHJ2aVRHSWErajZaT2JBd0Z3N1B6TmpZeExXa0FnR2dzRWdkV0FDOW1mOTdtZGZhVzdGTkdXVExyZm56S1NGSHhBVFJOdytkcjJ4ZDROQlFNejNXMEVTN1NzZ1lBeU9UeW5ReThQdm1aMy9IcEtjc0VCN2F2NDZsZnhRcHVWeldOZHI5L01pK2lDM2c4RkF3ZjZIeExuS2VsRFFBUWpVVzJZcGxnQ01EZjVrNm4zTzlKY0cxM25DWDdUWTh2QkxTMXQ1TlQvMkkvNEEraFlQZ0lWeHJqSUMxdkFJQm9MTElKK0JBUVh6TGZ2V0pnQ2laZjZvNnplTjlkSnRBMEw0b28rR2Q4Qi9DYlVEQzh3clVHT2NDTU1BQkFOQlo1TXRBbVZ4NjJwSGlkb0pySUZLQlNNUG5TcWpnTDlyWk1VQ1p2d1k5VmVqL29UcU5xWjhZWUFPRG1xeWFVam5hWHhtWGl1OTY5bzJMeXhWV1Q5VFhMbms4RG9xRmd1T1JMbkJ0Rnk4d0ZsR1Z6cndCK0RUaS9GRHlSc0g1eStPRlRBZTU3dEoyMnRuYTdrU0xBRmRGWXBHbUtWczZrSzhEVnVDSCsrSGhCOFFFT21XK1FUcVV4VGR1M25UQ3dOaFFNTnp6emRaS1pZWUROdlVjQlgzRTg3dmo0dEV0L0x1L29OQURKeFBoNHdUZVZGR0VsMW51Wm1tTFVzUFVOc0xsM0tkYmNnTE5qOFdYRUJ4Z2N0VHFBaG1HUVNxWXFpYjRjK0Ywb0dINVgxZTF6aU5ZMndPYmVYdUQvQVB0cis2U0VaSExYcFQwZXQvNU5aYTE0c2lFK3dETi8yL1VFa0VwVlBBMTVDTmFBMFFHVkh1Z2tyZGtKM053N0Q3Z2U2M0pxajFUS0VqNVZabW1icWtLSmtyT1Q3RWg2dVBDbTZaMC9mMGRIM29zcmJUQUFyTWdVNTZnN3pXT0F6YjN2QXE0Rm5nWWVZLy9iWDh6YXBnQjdZUldoN0FHT3RoM1hOR0YwRk5KcHg1cHFvSEpWTE1CcjI2ZC83ZzhFVUt0YjFESUduQldOUlg3cFFQTXFvamtNWUluL0NOUGZHRG9FSklEWldGbkJsVS96cGRPVytFVmVJMU1OQmlwZnVNZlAzN2JsTjZlemN4WlZMNVNFTkhCK05CYjVRUzN0cTVUR0c2Q3crTFdUU3NHSXN5V0NEUlMrMkJmZzVkZnpSVlkxRGI4L1VPc3BKUERaYUN4eVE2MkI3TkpZQTdnbHZtbkNtMjg2dW96ZFFPR2F2Z0IvTFNDK0VJSkFSd2VpOEp4QU5kd0lYSmxKZm5HVnhobkFMZkVCZHV5WUdyc3ZpeEJzSC9QeTNCYVZIV09DblFuWU1TYlliNDdrNEFVRy83S0hqa2VWWEx2V3owdGJDMS9lMndNQk54YTByc1Vxd2U5YzU2VUFqVEdBbStKUFRNRFlXUG45TkczczZiKzNiYm41eDJMWjZIaTE5MjFCdTkrUHBybVdEdmd3Y0dZMEZySHhDMVZIL2NjQjNCUWZMQU9Vdyt2OUkxN3ZudTg5KzU2dWNjUDdZUGtEQ2lCY0Z4K3NQSWZmaG9MaE9XNmRvTDVYQUxmRk53enIzbDhNUlRIeGVqL1B3ZXUrbGYzeHFwVVhQSkZPNnpuSkc4SjY3cENRUGVNbmhFRFRQUGphMm1wZXVGb0Jmd05PaWNZaWYzYzZjUDBNNExiNFVIVFdib3IyOWlBSHJjMUw2Z3NGd3lLUmlMOGtUZk1BVGZPZ2VqUTBWYVhKM2pXNUhUZzFHb3Y4eWNtZzlURkFwZUtid0lDRU9hSXlEVVpIcmRHK1F2aDhEM0xJK284V096UVVER3RZSmZNL1VzRVo2ODBvY0VZMEZ2bTFVd0hkN3dOVUt2NnJKdHllaExWSnVDZFoyZXNlaTVsWjB3WlExZE5MSFpvcEc3c1NlS3lDTTlhYlR1Q2hVRERjN1ZSQWR3MVFxZmhiVFBoSkNoSVpJWWNrdkZLQkE0b1p3T081Z0s2K3NvR2lzY2c0MWhYQWRyM0FCdURGeWltNHpJbGc3aG1nR3ZGL21vTHNlUmdGNnpaUUM2bzZ6a0ZyYmZmMG83SElEdUFVcW4raFpqMFF3RTJoWVBqNm1nTzUwZ2R3UW55QVl6VTRySUxIckhqY21zck5wc3k5dnhpWmFkckhBTmNld1J6aWJ1Q0NhaXVmTzM4RmNFcjhZeW9VSDZEUU03bWlWRFd1SG8xRlhnWk94ZXA0TlRQbkFqOE5CY05WVFVRNGF3REh2dmtlT0x5S0FSWlBnUnBWUWp4WGVTQ0xhQ3p5REhBYTFwdFJtNWxUc2RZZ3ZMUFNBNTB6Z0pQaUgxWW1xV0pIa2Y1Y29VZkFycjRkdHRwVGhHZ3M4Z2hXRGtMVFpQSVc0WENzMVVqektqbklHUVBVUy94QkUrNUtRalFGZHljaE93MnZVQnFYb2pnaVdqUVdlUUM0MklsWUxyTVFLODNzSUxzSDFHNEFSKy81cGNTWGNIOEtock1lRVYvSzlIdUs1ZkJKS2RqWTQ4aGdmVFFXdVEyNHhvbFlMck0zVnVYekUrM3NYSnNCbkJTLzFEMS9VTUw5U2NqcDRMT0hVanFCVTBxQmxDVUhnQ29oR290OGxUSWxhcHFFMlZpdnlqdXIzSTdWRzZEUjRpOVdZWTlrK2V4ZDB5ejdSNmlReTRCMURzZDBBeCt3NGVPclAxbTB4akZVYTRCbUVQOTQzVmJxTnFiNVhsdHR0RWttUytjOG9PNEpuRldnU0NrdjYxN1orL3VpTzFRY3NsN2lENVVSUDJGRGZFWFIwYlNRclhaV1FDWkw1MHpnU2Fkak80M0g2MFZQcDQ3clB1ZUNwd3R0cjh3QVRvbC90QjN4VS9uaUw2cFFmSi92SkE1YTY4cmtUcVpFelllQVRXN0Vkd29oRkZSVlE5ZjE5M1NmYytIUGNyZmJONENUNGg5aFEveEV6aEQxSWhWT2FBN3hKOG1VcURrRjJPcm1lV3JGNDdVR3lIUTl2V0xWeXQ1cG5WaDdjd0diZXdQQTQ0Qzk1OHRpNGgrbHdaRlZpTDlZZ2VPTnBoSS9tMUF3dkJoNEZLc3FTTk5obUFhSlRKNmtFRUo2MjlvUDZPdjczbWF3Y3dXdzF0M2ZoZHZpRDdlbStEQzlSRTA5ejJzWGtaVlZJNlVVUmpvOTlYNW9PN2VBejJCMWVNcFRpL2ozdGFiNGswUmprU2V4L2s2dXBuRlhSYzZNdXE2bnU3cTcxNXdFNVF5d3VYY1A0SXUyVHVLMCtFdlVsaEYva3N6YXZ2T3dVVGVtbmhUTXFERE5MMEQ1SzhEbnNVYVZTalBnZ3ZqSE5WZUh6eTdSV0dRZDFtQ1JXNHdEL3dHY2hWVm40RXJnaFpKSEZNaGVOazN6YUNqVkNkemM2OE5hb0ZsK252bmhOTHlRby82Um1tV0FZc3hBOGJNSkJjTmZ3ZTdWMHo2YmdOTXl1UXJaNS9KaExTZTdwTkJCcG1FUWorZXZMZkg2UE1lVXVnSWNqeDN4QVFJNUR0dk54UWVJeGlMWEFMYzZHRElOck00VlAzT3VKRmI5b1lJRFU3cFJPRmxJSWs0c1pRRDdCUTRQVmVFZ0ZmWVdjS3FuWHVLZjJLemlaM0VKOElCRHNSNk14aUxQRnRzWWpVVU00R3VGdHVsNmtYNnBLWmVWTXNEQnRwdm1GL0IrRDNUN3JBR2JZamo3emYrRDdmWTFpRXc1dUI2c0FiUmFzVk5CSkc4ZktTV21Yamd0UXNMOFVnYlkyMmJEN0RGc1dtUDd1ZUl2blRtWC9VSmtMcytuQWMvVUdNcE9lblRlUHJxaGw2aGdKbEtsRE9CY0JhdGgweHJreWRWNHFRckh6bHp4SjRuR0lxTlllWHQ1OSs4S09LenlmU1NwWWl1bEFBRkRwUXlRT3hWVEhRbTVXNHMvU1RRVzZjZGE3ZnZQS2tOOEpCUU1GelZCWm1uYnRJeWw1RVFTczFUQkt5SDdTeG5nalVwYldKRG5qTjFlL0VtaXNjZ1dyTW1qYWhKVlZhQXZGQXd2emQwUUNvYmJzVjZwTjVYN1lPaDYyZEoxUXFnL0xUVU84Q0R3NFNvYU9wMm5ESGcwcXhkYXVmZ250a0tIcnhKQ3dmQ3hXTVVmYkJjWnppSUozQUg4RVJnRzNvTTEramhWYjFCS1NTSStpbWtXSDVCVUZLSGZlMy9NVStvSzhHZ1ZqY3RubVdMMTh0OHU0RGl0bW0vK2pCSWZJQnFMUEdZWVpnZ3BxMW5ONHdNdUJYNkE5VXJkcjVJai9zUjRvcVQ0QUlxaS9SVktEd1UvVkVYajhta1RjSW9IZ2o1WW10N3RMdnZGdVB1ZW16ZWtkUDFyWmptbEtzQTBUUkx4TVhRYjlaRlVSZjB5bE1zSDJOejdNdkJ1UjFwWGFOMWVJWFlEOGJOWjNiMW1yYUlxcXp5ZTJncUk2K2tVRXhNVGVhKzRLNFNxYXRzMjNQZjlmYURjWkZBcWRXdk5GVFpORTNidWZFdjhJcXhkZjl0cVhkZWZpTWZIaW8vWWxVRFhkUkx4TWNiSHgyMkpENkJxNnRSa1Zia3JnTUxJeURCU3pzYnZMN3oycmhoU1dxS1BqOXVyMTdjYmlwOU45OG9MWHRMVCtrS0V3T1B4b0trYWlxSWdWR1Vxb1VNaXdaUVlob0Z1NkJocEhWTld0dmhKMHp3UHJiLzNqcW5YbzVkUENYc3hlQ3Fqb3ovRE5BVWVEN1MxZ2FKWVA5bnZ5NUhTcXMyWFR1LzZzY3R1TGo3QXB5NjkwanN3TUx6RjBJMjhFZGpKMmR4YVYvS3JtcnBsdzcxM3pzLytySHhHMEtMWXoybHIreTZ3cS9idXpwMVdOYTdCUVJnZXRnb3pEZzFabnljU2I0bGZCVGZmY2tPcXM3UDlBRTNWdHVSdWs5SUI4VlZ0eU8vM0hKcjd1ZjBDRWM5MlAwRXk2ZXg3OEZRMWpkZTdmSGNYUDV0RER6bENXWFJnMXgvVDZmVGhUc1hVUE5xenFpYVA2T3U3TSsrdEZwVlZDSG0yK3dja2t6M090RW9ieE90OUgxMTlyem9TYjRheGF1V2FiK3RHK25KcG1sVXZiaFZDbUpybXVYUGRodHQ3aSs1VGNZbVk1MVpmUWlwMUk0YmhxN0pWNFBYK0RsVTltYTYraXQ2enNydHg5dG5oV1pxU1dLL3IraWxTU3R0ck9JUVFVdFcwaDMyNmN1NWREOXpXWDNMZnFtb0ViZXpSTU0wSTZmUUZHSWE5QjFnaHdPUDVNNXIyY2JyNm5xLzhwTHN2VjF4K3RmYkc5amN2bHFaeG9XbVlCMGdwMjZTVVdWTy9Ba1VSS1VWUk55bENQQ0EwNDVhK3ZqdUg3Y1N1dlVqVWM2dFB4elF2eGpEZWk1UWRtS1lYRUFpaG95ampLTXBXRk9VK0ZDVkNWNSt0UnIxRmVjNDdjODJjbEZmT2JmTXBXNkt4VzZ1dWd2TC9pOHp4U0VMb3BOOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgaWNvbiBmcm9tIFwiLi9hc3NldHMvaWNvbi0xMjh4MTI4LnBuZ1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgRGVmYXVsdEljb24gPSAoeyBzdHlsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19PlxuICAgICAgPGltZyBoZWlnaHQ9e1wiOTZweFwifSB3aWR0aD17XCI5NnB4XCJ9IHNyYz17aWNvbn0gLz5cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5EZWZhdWx0SWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRJY29uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dCwgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IERlZmF1bHRJY29uIGZyb20gXCIuL0RlZmF1bHRJY29uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBNYWluID0gKHsgaWNvbiwgbGFiZWwsIHN0eWxlLCB2ZXJzaW9uIH0pID0+IHtcbiAgY29uc3QgSWNvbiA9IGljb24gfHwgRGVmYXVsdEljb247XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0+XG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmljb259PlxuICAgICAgICA8SWNvbiAvPlxuICAgICAgPC9WaWV3PlxuICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5sYWJlbH0+e2xhYmVsfTwvVGV4dD5cbiAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMudmVyc2lvbn0+e2BWZXJzaW9uOiAke3ZlcnNpb259YH08L1RleHQ+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuTWFpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGljb246IG51bGwsXG4gIGxhYmVsOiBcIlwiLFxuICBzdHlsZToge30sXG4gIHZlcnNpb246IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIkBsaWJyYXJ5L3N0eWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZpZXc6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGljb246IHtcbiAgICBoZWlnaHQ6IFwiOTZweFwiLFxuICAgIHdpZHRoOiBcIjk2cHhcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjb2xvcjogY29sb3JzLndoaXRlLFxuICB9LFxuICB2ZXJzaW9uOiB7XG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogY29sb3JzLmdyYXlbNDAwXSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBWaWV3IH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBTZWNvbmRhcnkgPSAoeyBkZXNjcmlwdGlvbiwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuU2Vjb25kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVzY3JpcHRpb246IFwiXCIsXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZGFyeTtcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzcwMF19YCxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogXCIxMXB4XCIsXG4gICAgY29sb3I6IGNvbG9ycy5ncmF5WzQwMF0sXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcbmltcG9ydCBTZWNvbmRhcnkgZnJvbSBcIi4vU2Vjb25kYXJ5XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBUb29sSW5mbyA9ICh7IHNlbGVjdGVkVG9vbCwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fT5cbiAgICAgIDxNYWluIHN0eWxlPXtzdHlsZXMubWFpbn0gey4uLnNlbGVjdGVkVG9vbH0gLz5cbiAgICAgIDxTZWNvbmRhcnkgc3R5bGU9e3N0eWxlcy5zZWNvbmRhcnl9IHsuLi5zZWxlY3RlZFRvb2x9IC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuVG9vbEluZm8uZGVmYXVsdFByb3BzID0ge1xuICBzZWxlY3RlZFRvb2w6IHt9LFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sSW5mbztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIG1haW46IHtcbiAgICBwYWRkaW5nOiBcIjE2cHggMHB4IDMycHggMHB4XCIsXG4gIH0sXG4gIHNlY29uZGFyeToge1xuICAgIHBhZGRpbmdUb3A6IFwiMThweFwiLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEl0ZW0gPSAoeyBsYWJlbCwgb3BlbldpbmRvdywgc3R5bGUsIHdpbmRvdyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gb3BlbldpbmRvdyh3aW5kb3cpO1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHtsYWJlbH1cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6IFwiXCIsXG4gIG9wZW5XaW5kb3c6ICgpID0+IHt9LFxuICBzdHlsZToge30sXG4gIHdpbmRvdzoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xuIiwiaW1wb3J0IHsgY29sb3JzLCBjc3MgfSBmcm9tIFwiQGxpYnJhcnkvc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzoge1xuICAgIGZvbnRTaXplOiBcIjEycHhcIixcbiAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxuICAgIGNvbG9yOiBjb2xvcnMud2hpdGUsXG4gICAgLi4uY3NzLnVzZXJTZWxlY3Qubm9uZSxcbiAgICAuLi5jc3MudGV4dE92ZXJmbG93LmVsbGlwc2lzLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHQsIFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFRvb2xMaXN0ID0gKHsgb3BlbldpbmRvdywgc2VsZWN0ZWRJbmRleCwgdG9vbHMsIHN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0+XG4gICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLnRpdGxlfT5ERVYtT1MgVE9PTCBCUk9XU0VSPC9UZXh0PlxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAge3Rvb2xzLm1hcCgodG9vbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIDxJdGVtIHN0eWxlPXtzdHlsZXMuaXRlbShpc1NlbGVjdGVkKX0ga2V5PXtgSVRFTV8ke2luZGV4fWB9IG9wZW5XaW5kb3c9e29wZW5XaW5kb3d9IHsuLi50b29sfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L1ZpZXc+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuVG9vbExpc3QuZGVmYXVsdFByb3BzID0ge1xuICBvcGVuV2luZG93OiAoKSA9PiB7fSxcbiAgc2VsZWN0ZWRJbmRleDogMCxcbiAgc3R5bGU6IHt9LFxuICB0b29sczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sTGlzdDtcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzcwMF19YCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmF5WzgwMF0sXG4gICAgY29sb3I6IGNvbG9ycy53aGl0ZSxcbiAgICBmb250U2l6ZTogXCIxMXB4XCIsXG4gICAgZm9udFdlaWdodDogXCI3MDBcIixcbiAgICBoZWlnaHQ6IFwiMjhweFwiLFxuICAgIGxpbmVIZWlnaHQ6IFwiMjhweFwiLFxuICAgIHBhZGRpbmdMZWZ0OiBcIjI0cHhcIixcbiAgfSxcbiAgbGlzdDoge1xuICAgIGZsZXg6IDEsXG4gICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcbiAgICBvdmVyZmxvd1g6IFwibm9uZVwiLFxuICB9LFxuICBpdGVtOiAoaXNTZWxlY3RlZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzU2VsZWN0ZWQgJiYgY29sb3JzLmJsdWVbODAwXSxcbiAgICAgIGhlaWdodDogXCIyOHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjI4cHhcIixcbiAgICAgIHBhZGRpbmc6IFwiMHB4IDI0cHhcIixcbiAgICB9O1xuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlT25XaW5kb3dFdmVudCB9IGZyb20gXCJAbGlicmFyeS9ob29rc1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IGNyZWF0ZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9jcmVhdGVcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgVG9vbEluZm8gZnJvbSBcIi4vVG9vbEluZm9cIjtcbmltcG9ydCBUb29sTGlzdCBmcm9tIFwiLi9Ub29sTGlzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgQVJST1dfRE9XTiA9IDQwO1xuY29uc3QgQVJST1dfVVAgPSAzODtcbmNvbnN0IEVOVEVSID0gMTM7XG5jb25zdCBFU0NBUEUgPSAyNztcblxuY29uc3QgVG9vbEJyb3dzZXIgPSAoeyBzdHlsZSwgdG9vbHMgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBvcGVuV2luZG93ID0gKGNvbmZpZ3MpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaChcInRvb2xCcm93c2VyLmNsb3NlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY3JlYXRlV2luZG93KGNvbmZpZ3MpLCAwKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVTZWxlY3RlZEluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gdG9vbHMubGVuZ3RoIC0gMSkge1xuICAgICAgc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleVVwID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAga2V5Q29kZSA9PT0gQVJST1dfRE9XTiAmJiB1cGRhdGVTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggKyAxKTtcbiAgICBrZXlDb2RlID09PSBBUlJPV19VUCAmJiB1cGRhdGVTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggLSAxKTtcbiAgICBrZXlDb2RlID09PSBFTlRFUiAmJiBvcGVuV2luZG93KHRvb2xzW3NlbGVjdGVkSW5kZXhdLndpbmRvdyk7XG4gICAga2V5Q29kZSA9PT0gRVNDQVBFICYmIHN0b3JlLmRpc3BhdGNoKFwidG9vbEJyb3dzZXIuY2xvc2VcIik7XG4gIH07XG5cbiAgdXNlT25XaW5kb3dFdmVudChcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3IHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3KHdpbmRvdy5pbm5lcldpZHRoIC8gMiksIC4uLnN0eWxlIH19PlxuICAgICAgPFRvb2xMaXN0IHN0eWxlPXtzdHlsZXMudG9vbExpc3R9IG9wZW5XaW5kb3c9e29wZW5XaW5kb3d9IHNlbGVjdGVkSW5kZXg9e3NlbGVjdGVkSW5kZXh9IHRvb2xzPXt0b29sc30gLz5cbiAgICAgIDxUb29sSW5mbyBzdHlsZT17c3R5bGVzLnRvb2xJbmZvfSBzZWxlY3RlZFRvb2w9e3Rvb2xzW3NlbGVjdGVkSW5kZXhdfSAvPlxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cblRvb2xCcm93c2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9LFxuICB0b29sczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sQnJvd3NlcjtcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiAoY2VudGVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGxlZnQ6IGAke2NlbnRlciAtIDM0MH1weGAsXG4gICAgICB0b3A6IFwiMTIwcHhcIixcbiAgICAgIGhlaWdodDogXCIzNjZweFwiLFxuICAgICAgd2lkdGg6IFwiNjgwcHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMnB4XCIsXG4gICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjM4KSAwcHggMjBweCAyMHB4IC0zcHgsIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzcwMF19YCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyYXlbOTAwXSxcbiAgICB9O1xuICB9LFxuICB0b29sTGlzdDoge1xuICAgIHdpZHRoOiBcIjI5MHB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbiAgdG9vbEluZm86IHtcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmc6IFwiMjRweFwiLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU9uV2luZG93RXZlbnQgfSBmcm9tIFwiQGxpYnJhcnkvaG9va3NcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJAdG9vbHMvaG9va3NcIjtcbmltcG9ydCBUb29sQnJvd3NlciBmcm9tIFwiLi9Ub29sQnJvd3NlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgVF9LRVlDT0RFID0gODQ7XG5cbmNvbnN0IFRvb2xNYW5hZ2VyID0gKHsgdG9vbHMsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgZm9ybWF0dGVkVG9vbHMgPSB0b29scy5tYXAoKHRvb2wpID0+ICh0eXBlb2YgdG9vbCA9PT0gXCJmdW5jdGlvblwiID8gdG9vbCgpIDogdG9vbCkpO1xuICBjb25zdCBpc09wZW4gPSB1c2VTdG9yZSgoc3RvcmUpID0+IHN0b3JlLmdldFN0YXRlKFwidG9vbEJyb3dzZXJcIikuaXNPcGVuKTtcblxuICBjb25zdCBoYW5kbGVLZXlVcCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IHRhZ05hbWUgPSBldmVudC50YXJnZXQudGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKHRhZ05hbWUgIT09IFwiSU5QVVRcIiAmJiB0YWdOYW1lICE9PSBcIlRFWFRBUkVBXCIgJiYga2V5Q29kZSA9PT0gVF9LRVlDT0RFKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChcInRvb2xCcm93c2VyLnRvZ2dsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlT25XaW5kb3dFdmVudChcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcblxuICByZXR1cm4gaXNPcGVuICYmIDxUb29sQnJvd3NlciBzdHlsZT17eyAuLi5zdHlsZXMudG9vbEJyb3dzZXIsIC4uLnN0eWxlIH19IHRvb2xzPXtmb3JtYXR0ZWRUb29sc30gLz47XG59O1xuXG5Ub29sTWFuYWdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvb2xzOiBbXSxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbE1hbmFnZXI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvb2xCcm93c2VyOiB7XG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJhdXRvXCIsXG4gICAgekluZGV4OiAyMTQ3NDgzNjQ3LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3UmVmIH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgY2xvc2VXaW5kb3cgZnJvbSBcIkBwcm9jZWR1cmVzL3dpbmRvd3MvY2xvc2VcIjtcbmltcG9ydCBjcmVhdGVXaW5kb3cgZnJvbSBcIkBwcm9jZWR1cmVzL3dpbmRvd3MvY3JlYXRlXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgQ29udGVudCA9IG1lbW8oKHsgY29udGVudFJlZiwgaWQsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gc3RvcmUuZ2V0U3RhdGUoXCJ3aW5kb3dzXCIpLmJ5SWRbaWRdLmNvbXBvbmVudDtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBjbG9zZVdpbmRvdyhpZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Vmlld1JlZiBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0gcmVmPXtjb250ZW50UmVmfT5cbiAgICAgIDxDb21wb25lbnQgY2xvc2VXaW5kb3c9e2hhbmRsZUNsb3NlfSBjcmVhdGVXaW5kb3c9e2NyZWF0ZVdpbmRvd30gX19pZD17aWR9IC8+XG4gICAgPC9WaWV3UmVmPlxuICApO1xufSk7XG5cbkNvbnRlbnQuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50UmVmOiBudWxsLFxuICBpZDogbnVsbCxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZmxleDogMSxcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNzAwXX1gLFxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke2NvbG9ycy5ncmF5WzcwMF19YCxcbiAgICBib3JkZXJMZWZ0OiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNzAwXX1gLFxuICAgIGJvcmRlclJhZGl1czogXCIwcHggMHB4IDZweCA2cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmF5WzkwMF0sXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgQWN0aW9uQnV0dG9uID0gKHsgb25DbGljaywgcHJpbWFyeUNvbG9yLCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICByZXR1cm4gPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcoeyBwcmltYXJ5Q29sb3IgfSksIC4uLnN0eWxlIH19IG9uQ2xpY2s9e29uQ2xpY2t9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSAvPjtcbn07XG5cbkFjdGlvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxuICBwcmltYXJ5Q29sb3I6IFwiXCIsXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvbjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzogKHsgcHJpbWFyeUNvbG9yIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBcIjEycHhcIixcbiAgICAgIHdpZHRoOiBcIjEycHhcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yXG4gICAgfTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4vQWN0aW9uQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBBY3Rpb25CdXR0b25zID0gKHsgaXNGb2N1c2VkLCBvbkNsb3NlLCBzdHlsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19PlxuICAgICAgPEFjdGlvbkJ1dHRvbiBzdHlsZT17c3R5bGVzLm1hcmdpblJpZ2h0fSBwcmltYXJ5Q29sb3I9e2lzRm9jdXNlZCA/IGNvbG9ycy5yZWRbNTAwXSA6IGNvbG9ycy5ncmF5WzU1MF19IG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICA8QWN0aW9uQnV0dG9uIHN0eWxlPXtzdHlsZXMubWFyZ2luUmlnaHR9IHByaW1hcnlDb2xvcj17aXNGb2N1c2VkID8gY29sb3JzLnllbGxvd1s3MDBdIDogY29sb3JzLmdyYXlbNTUwXX0gLz5cbiAgICAgIDxBY3Rpb25CdXR0b24gcHJpbWFyeUNvbG9yPXtpc0ZvY3VzZWQgPyBjb2xvcnMuZ3JlZW5bNTAwXSA6IGNvbG9ycy5ncmF5WzU1MF19IC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuQWN0aW9uQnV0dG9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzRm9jdXNlZDogZmFsc2UsXG4gIG9uQ2xvc2U6ICgpID0+IHt9LFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b25zO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCJcbiAgfSxcbiAgbWFyZ2luUmlnaHQ6IHtcbiAgICBtYXJnaW5SaWdodDogXCI2cHhcIlxuICB9XG59O1xuIiwiaW1wb3J0IEFjdGlvbkJ1dHRvbnMgZnJvbSBcIi4vQWN0aW9uQnV0dG9uc1wiO1xuXG5leHBvcnQgeyBBY3Rpb25CdXR0b25zIH07XG4iLCJpbXBvcnQgb25Nb3ZlSGFuZGxlcnMgZnJvbSBcIi4vb24tbW92ZS1oYW5kbGVyc1wiO1xuXG5leHBvcnQgeyBvbk1vdmVIYW5kbGVycyB9O1xuIiwiaW1wb3J0IG1vdmVXaW5kb3cgZnJvbSBcIkBwcm9jZWR1cmVzL3dpbmRvd3MvbW92ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjb250ZW50UmVmLCBpZCwgd2luZG93UmVmIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlTW92ZSA9IChldmVudCkgPT4ge1xuICAgIG1vdmVXaW5kb3coeyBlbGVtOiB3aW5kb3dSZWYuY3VycmVudCwgZXZlbnQsIGlkIH0pO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3ZlRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgbW92ZVdpbmRvdyh7IGVsZW06IHdpbmRvd1JlZi5jdXJyZW50LCBldmVudCwgaWQsIHNob3VsZERpc3BhdGNoOiB0cnVlIH0pO1xuICAgIGNvbnRlbnRSZWYuY3VycmVudCAmJiAoY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiKTtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW92ZVN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnRlbnRSZWYuY3VycmVudCAmJiAoY29udGVudFJlZi5jdXJyZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgb25Nb3ZlOiBoYW5kbGVNb3ZlLCBvbk1vdmVFbmQ6IGhhbmRsZU1vdmVFbmQsIG9uTW92ZVN0YXJ0OiBoYW5kbGVNb3ZlU3RhcnQgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBWaWV3LCBWaWV3UmVmIH0gZnJvbSBcIkBsaWJyYXJ5L3VpXCI7XG5pbXBvcnQgeyB1c2VPbk1vdmUgfSBmcm9tIFwiQGxpYnJhcnkvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkB0b29scy9ob29rc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCBjbG9zZVdpbmRvdyBmcm9tIFwiQHByb2NlZHVyZXMvd2luZG93cy9jbG9zZVwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuL2NoaWxkcmVuXCI7XG5pbXBvcnQgeyBvbk1vdmVIYW5kbGVycyB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGNvbnRlbnRSZWYsIGlkLCBzdHlsZSwgd2luZG93UmVmIH0pID0+IHtcbiAgY29uc3QgeyByZWY6IGhlYWRlclJlZiB9ID0gdXNlT25Nb3ZlKG9uTW92ZUhhbmRsZXJzKHsgY29udGVudFJlZiwgaWQsIHdpbmRvd1JlZiB9KSk7XG4gIGNvbnN0IHsgaXNGb2N1c2VkLCBpc09wYXF1ZSwgdGl0bGUgfSA9IHVzZVN0b3JlKChzdG9yZSkgPT4gc3RvcmUuZ2V0U3RhdGUoXCJ3aW5kb3dzXCIpLmJ5SWRbaWRdKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IGNsb3NlV2luZG93KGlkKTtcbiAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiBzdG9yZS5kaXNwYXRjaChcIndpbmRvd3MudXBkYXRlXCIsIHsgaWQsIGlzT3BhcXVlOiAhaXNPcGFxdWUgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Vmlld1JlZiBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUsIC4uLnN0eWxlcy5mb2N1c2VkKGlzRm9jdXNlZCkgfX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IHJlZj17aGVhZGVyUmVmfT5cbiAgICAgIDxBY3Rpb25CdXR0b25zIHN0eWxlPXtzdHlsZXMuYWN0aW9uQnV0dG9uc30gaXNGb2N1c2VkPXtpc0ZvY3VzZWR9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSAvPlxuICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvVGV4dD5cbiAgICAgIDxWaWV3IHN0eWxlPXtzdHlsZXMuZmxleFNwYWNlcn0gLz5cbiAgICA8L1ZpZXdSZWY+XG4gICk7XG59O1xuXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50UmVmOiBudWxsLFxuICBpZDogbnVsbCxcbiAgc3R5bGU6IHt9LFxuICB3aW5kb3dSZWY6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgeyBjb2xvcnMsIGNzcyB9IGZyb20gXCJAbGlicmFyeS9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjBweCA2cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5ncmF5Wzc1MF0sXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNjAwXX1gLFxuICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7Y29sb3JzLmdyYXlbNjAwXX1gLFxuICAgIGJvcmRlckxlZnQ6IGAxcHggc29saWQgJHtjb2xvcnMuZ3JheVs2MDBdfWAsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweCA2cHggMHB4IDBweFwiLFxuICB9LFxuICBmb2N1c2VkOiAoaXNGb2N1c2VkKSA9PiB7XG4gICAgcmV0dXJuIGlzRm9jdXNlZCAmJiB7IGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdyYXlbODAwXSB9O1xuICB9LFxuICBhY3Rpb25CdXR0b25zOiB7XG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiBjb2xvcnMuZ3JheVs1MF0sXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiLFxuICAgIC4uLmNzcy51c2VyU2VsZWN0Lm5vbmUsXG4gICAgLi4uY3NzLnRleHRPdmVyZmxvdy5lbGxpcHNpcyxcbiAgfSxcbiAgZmxleFNwYWNlcjoge1xuICAgIGZsZXg6IDEsXG4gIH0sXG59O1xuIiwiaW1wb3J0IG9uUmVzaXplSGFuZGxlcnMgZnJvbSBcIi4vb24tcmVzaXplLWhhbmRsZXJzXCI7XG5cbmV4cG9ydCB7IG9uUmVzaXplSGFuZGxlcnMgfTtcbiIsImltcG9ydCByZXNpemVXaW5kb3cgZnJvbSBcIkBwcm9jZWR1cmVzL3dpbmRvd3MvcmVzaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbnRlbnRSZWYsIGlkLCB3aW5kb3dSZWYgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZGltZW5zaW9ucywgZXZlbnQpID0+IHJlc2l6ZVdpbmRvdyh7IGRpbWVuc2lvbnMsIGVsZW06IHdpbmRvd1JlZi5jdXJyZW50LCBldmVudCwgaWQgfSk7XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplRW5kID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHdpbmRvd1JlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBkaW1lbnNpb25zID0gd2luZG93UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXNpemVXaW5kb3coeyBkaW1lbnNpb25zLCBlbGVtOiB3aW5kb3dSZWYuY3VycmVudCwgZXZlbnQsIGlkLCBzaG91bGREaXNwYXRjaDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb250ZW50UmVmLmN1cnJlbnQgJiYgKGNvbnRlbnRSZWYuY3VycmVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplU3RhcnQgPSAoKSA9PiB7XG4gICAgY29udGVudFJlZi5jdXJyZW50ICYmIChjb250ZW50UmVmLmN1cnJlbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiKTtcbiAgfTtcblxuICByZXR1cm4geyBoYW5kbGVSZXNpemUsIGhhbmRsZVJlc2l6ZUVuZCwgaGFuZGxlUmVzaXplU3RhcnQgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZXNpemFibGUgYXMgVUlSZXNpemFibGUgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCB7IG9uUmVzaXplSGFuZGxlcnMgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBSZXNpemFibGUgPSAoeyBjaGlsZHJlbiwgY29udGVudFJlZiwgaWQsIHdpbmRvd1JlZiwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCB7IGhhbmRsZVJlc2l6ZSwgaGFuZGxlUmVzaXplRW5kLCBoYW5kbGVSZXNpemVTdGFydCB9ID0gb25SZXNpemVIYW5kbGVycyh7IGNvbnRlbnRSZWYsIGlkLCB3aW5kb3dSZWYgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VUlSZXNpemFibGVcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCAuLi5zdHlsZXMucmVzaXphYmxlIH19XG4gICAgICBtaW5IZWlnaHQ9ezI0fVxuICAgICAgbWluV2lkdGg9ezk1fVxuICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cbiAgICAgIG9uUmVzaXplRW5kPXtoYW5kbGVSZXNpemVFbmR9XG4gICAgICBvblJlc2l6ZVN0YXJ0PXtoYW5kbGVSZXNpemVTdGFydH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9VSVJlc2l6YWJsZT5cbiAgKTtcbn07XG5cblJlc2l6YWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBjb250ZW50UmVmOiBudWxsLFxuICBpZDogbnVsbCxcbiAgd2luZG93UmVmOiBudWxsLFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNpemFibGU7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlc2l6YWJsZToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtaW5XaWR0aDogMCxcbiAgICBtaW5IZWlnaHQ6IDAsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld1JlZiB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkB0b29scy9ob29rc1wiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBSZXNpemFibGUgZnJvbSBcIi4vUmVzaXphYmxlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBXaW5kb3cgPSAoeyBpZCwgc3R5bGUgfSkgPT4ge1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB3aW5kb3dSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHN0YXRlID0gdXNlU3RvcmUoKHN0b3JlKSA9PiBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuYnlJZFtpZF0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9ICgpID0+ICFzdGF0ZS5pc0ZvY3VzZWQgJiYgc3RvcmUuZGlzcGF0Y2goXCJ3aW5kb3dzLmZvY3VzXCIsIGlkKTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3UmVmIHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3KHN0YXRlKSwgLi4uc3R5bGUgfX0gb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn0gcmVmPXt3aW5kb3dSZWZ9PlxuICAgICAgPFJlc2l6YWJsZSBpZD17aWR9IGNvbnRlbnRSZWY9e2NvbnRlbnRSZWZ9IHdpbmRvd1JlZj17d2luZG93UmVmfT5cbiAgICAgICAgPEhlYWRlciBzdHlsZT17c3R5bGVzLmhlYWRlcn0gaWQ9e2lkfSBjb250ZW50UmVmPXtjb250ZW50UmVmfSB3aW5kb3dSZWY9e3dpbmRvd1JlZn0gLz5cbiAgICAgICAgPENvbnRlbnQgaWQ9e2lkfSBjb250ZW50UmVmPXtjb250ZW50UmVmfSAvPlxuICAgICAgPC9SZXNpemFibGU+XG4gICAgPC9WaWV3UmVmPlxuICApO1xufTtcblxuV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcbiAgaWQ6IG51bGwsXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzogKHsgcG9zaXRpb246IHsgeCwgeSB9LCBzaXplOiB7IHdpZHRoLCBoZWlnaHQgfSwgaXNPcGFxdWUsIHJlbmRlckluZGV4IH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgICAgb3BhY2l0eTogaXNPcGFxdWUgPyAxLjAgOiAwLjEsXG4gICAgICBwb2ludGVyRXZlbnRzOiBpc09wYXF1ZSA/IFwiYXV0b1wiIDogXCJub25lXCIsXG4gICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAxNXB4IC0zcHgsIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICAgIHpJbmRleDogcmVuZGVySW5kZXgsXG4gICAgfTtcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogXCJhdXRvXCIsXG4gICAgbWluSGVpZ2h0OiBcIjI0cHhcIixcbiAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiQGxpYnJhcnkvdWlcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkB0b29scy9ob29rc1wiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9XaW5kb3dcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFdpbmRvd01hbmFnZXIgPSAoeyBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHdpbmRvd0lkcyA9IHVzZVN0b3JlKChzdG9yZSkgPT4gc3RvcmUuZ2V0U3RhdGUoXCJ3aW5kb3dzXCIpLmlkcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8VmlldyBzdHlsZT17eyAuLi5zdHlsZXMudmlldywgLi4uc3R5bGUgfX0+XG4gICAgICB7d2luZG93SWRzLm1hcCgod2luZG93SWQpID0+IHtcbiAgICAgICAgcmV0dXJuIDxXaW5kb3cga2V5PXtgV0lORE9XXyR7d2luZG93SWR9YH0gaWQ9e3dpbmRvd0lkfSAvPjtcbiAgICAgIH0pfVxuICAgIDwvVmlldz5cbiAgKTtcbn07XG5cbldpbmRvd01hbmFnZXIuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dNYW5hZ2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJAbGlicmFyeS91aVwiO1xuaW1wb3J0IFRvb2xNYW5hZ2VyIGZyb20gXCIuL1Rvb2xNYW5hZ2VyXCI7XG5pbXBvcnQgV2luZG93TWFuYWdlciBmcm9tIFwiLi9XaW5kb3dNYW5hZ2VyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBEZXZPUyA9ICh7IHN0eWxlLCB0b29scyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcsIC4uLnN0eWxlIH19PlxuICAgICAgPFRvb2xNYW5hZ2VyIHRvb2xzPXt0b29sc30gLz5cbiAgICAgIDxXaW5kb3dNYW5hZ2VyIC8+XG4gICAgPC9WaWV3PlxuICApO1xufTtcblxuRGV2T1MuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIHRvb2xzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldk9TO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2aWV3OiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB6SW5kZXg6IDIxNDc0ODM2NDcsXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgICBib3JkZXI6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gIH0sXG59O1xuIiwibGV0IGN1cnJlbnRJZCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlOiAoYXR0cnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgZXZlbnRzID0ge30gfSA9IGF0dHJzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzT3BhcXVlOiB0cnVlLFxuICAgICAgdHlwZTogXCJcIixcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgY29tcG9uZW50OiAoKSA9PiBudWxsLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogMjQsXG4gICAgICAgIHk6IDI0LFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICB9LFxuICAgICAgLi4uYXR0cnMsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7fSxcbiAgICAgICAgb25SZXNpemU6ICgpID0+IHt9LFxuICAgICAgICAuLi5ldmVudHMsXG4gICAgICB9LFxuICAgICAgaWQ6IChjdXJyZW50SWQgKz0gMSksXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgcmVuZGVySW5kZXg6IDAsXG4gICAgfTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgRGV2T1MgZnJvbSBcIi4vY29tcG9uZW50cy9EZXZPU1wiO1xuXG5leHBvcnQgZGVmYXVsdCBEZXZPUztcbiIsImltcG9ydCB1c2VDb250ZXh0TWVudSBmcm9tIFwiLi91c2UtY29udGV4dC1tZW51XCI7XG5pbXBvcnQgdXNlSG92ZXIgZnJvbSBcIi4vdXNlLWhvdmVyXCI7XG5pbXBvcnQgdXNlTWVyZ2VTdGF0ZSBmcm9tIFwiLi91c2UtbWVyZ2Utc3RhdGVcIjtcbmltcG9ydCB1c2VPbk1vdmUgZnJvbSBcIi4vdXNlLW9uLW1vdmVcIjtcbmltcG9ydCB1c2VPbldpbmRvd0V2ZW50IGZyb20gXCIuL3VzZS1vbi13aW5kb3ctZXZlbnRcIjtcbmltcG9ydCB1c2VTdG9yZSBmcm9tIFwiLi91c2Utc3RvcmVcIjtcblxuZXhwb3J0IHsgdXNlQ29udGV4dE1lbnUsIHVzZUhvdmVyLCB1c2VNZXJnZVN0YXRlLCB1c2VPbk1vdmUsIHVzZVN0b3JlLCB1c2VPbldpbmRvd0V2ZW50IH07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VTdGF0ZSB9IGZyb20gXCJAbGlicmFyeS9ob29rc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBpc0FjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VNZXJnZVN0YXRlKHsgZXZlbnQ6IG51bGwsIGlzT3BlbjogZmFsc2UsIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSB9KTtcblxuICBjb25zdCBoYW5kbGVDb250ZXh0TWVudSA9IChldmVudCkgPT4ge1xuICAgIGlmIChpc0FjdGl2ZSAmJiAhc3RhdGUuaXNPcGVuKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfSxcbiAgICAgIH0pO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbG9zZU1lbnUgPSAoKSA9PiBzZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gY2xvc2VNZW51KCk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9ICgpID0+IGNsb3NlTWVudSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAgIH07XG4gIH0sIFtzdGF0ZS5pc09wZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSByZWYuY3VycmVudDtcblxuICAgIGlmIChlbGVtKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDb250ZXh0TWVudSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDb250ZXh0TWVudSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3JlZi5jdXJyZW50LCBpc0FjdGl2ZV0pO1xuXG4gIHJldHVybiB7IHJlZiwgLi4uc3RhdGUgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpO1xuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW0gPSByZWYuY3VycmVudDtcblxuICAgIGlmIChlbGVtKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlTW91c2VPdmVyKTtcbiAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcmVmLmN1cnJlbnRdKTtcblxuICByZXR1cm4geyBpc0hvdmVyZWQsIHJlZiwgc2V0SXNIb3ZlcmVkIH07XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGRlZmF1bHRTdGF0ZSA9IHt9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGVmYXVsdFN0YXRlKTtcblxuICBjb25zdCBtZXJnZVN0YXRlID0gKHVwZGF0ZWRTdGF0ZSkgPT4ge1xuICAgIGlmICh1cGRhdGVkU3RhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgLi4ucHJldlN0YXRlLCAuLi51cGRhdGVkU3RhdGUocHJldlN0YXRlKSB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgLi4udXBkYXRlZFN0YXRlIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtzdGF0ZSwgbWVyZ2VTdGF0ZV07XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHsgb25Nb3ZlID0gKCkgPT4ge30sIG9uTW92ZUVuZCA9ICgpID0+IHt9LCBvbk1vdmVTdGFydCA9ICgpID0+IHt9IH0pID0+IHtcbiAgbGV0IHsgY3VycmVudDogaXNNb3VzZURvd24gfSA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZXZlbnQpID0+IGlzTW91c2VEb3duICYmIG9uTW92ZShldmVudCk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIGlzTW91c2VEb3duID0gZmFsc2U7XG4gICAgb25Nb3ZlRW5kKGV2ZW50KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpc01vdXNlRG93biA9IHRydWU7XG4gICAgb25Nb3ZlU3RhcnQoZXZlbnQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZWxlbSA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3JlZi5jdXJyZW50XSk7XG5cbiAgcmV0dXJuIHsgcmVmIH07XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChldmVudE5hbWUsIGhhbmRsZXIpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH0sIFtldmVudE5hbWUsIGhhbmRsZXJdKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZSkgPT4ge1xuICByZXR1cm4gKG1hcFN0b3JlVG9TdGF0ZSwgZGVmYXVsdFN0YXRlKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShkZWZhdWx0U3RhdGUgPT09IHVuZGVmaW5lZCA/IG1hcFN0b3JlVG9TdGF0ZShzdG9yZSkgOiBkZWZhdWx0U3RhdGUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBpc0NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBzdG9yZS5zdWJzY3JpYmUoKGN1cnJlbnRTdG9yZSkgPT4ge1xuICAgICAgICAhaXNDYW5jZWxlZCAmJiBzZXRTdGF0ZShtYXBTdG9yZVRvU3RhdGUoY3VycmVudFN0b3JlKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaXNDYW5jZWxlZCA9IHRydWU7XG4gICAgICAgIHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcbiIsImltcG9ydCBibGFjayBmcm9tIFwiLi9wYWxldHRlcy9ibGFja1wiO1xuaW1wb3J0IGJsdWUgZnJvbSBcIi4vcGFsZXR0ZXMvYmx1ZVwiO1xuaW1wb3J0IGdyYXkgZnJvbSBcIi4vcGFsZXR0ZXMvZ3JheVwiO1xuaW1wb3J0IGdyZWVuIGZyb20gXCIuL3BhbGV0dGVzL2dyZWVuXCI7XG5pbXBvcnQgcmVkIGZyb20gXCIuL3BhbGV0dGVzL3JlZFwiO1xuaW1wb3J0IHdoaXRlIGZyb20gXCIuL3BhbGV0dGVzL3doaXRlXCI7XG5pbXBvcnQgeWVsbG93IGZyb20gXCIuL3BhbGV0dGVzL3llbGxvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7IGJsYWNrLCBibHVlLCBncmF5LCBncmVlbiwgcmVkLCB3aGl0ZSwgeWVsbG93IH07XG4iLCJleHBvcnQgZGVmYXVsdCBcIiMxNjE2MTZcIjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgNTA6IFwiI2UzZjJmZFwiLFxuICAxMDA6IFwiI2JiZGVmYlwiLFxuICAyMDA6IFwiIzkwY2FmOVwiLFxuICAzMDA6IFwiIzY0YjVmNlwiLFxuICA0MDA6IFwiIzQyYTVmNVwiLFxuICA1MDA6IFwiIzIxOTZmM1wiLFxuICA2MDA6IFwiIzFlODhlNVwiLFxuICA3MDA6IFwiIzE5NzZkMlwiLFxuICA4MDA6IFwiIzE1NjVjMFwiLFxuICA5MDA6IFwiIzBkNDdhMVwiXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICA1MDogXCIjZmFmYWZhXCIsXG4gIDEwMDogXCIjZjVmNWY1XCIsXG4gIDIwMDogXCIjZWVlZWVlXCIsXG4gIDMwMDogXCIjZTBlMGUwXCIsXG4gIDQwMDogXCIjYmRiZGJkXCIsXG4gIDUwMDogXCIjOWU5ZTllXCIsXG4gIDU1MDogXCIjODk4OTg5XCIsXG4gIDYwMDogXCIjNzU3NTc1XCIsXG4gIDcwMDogXCIjNjE2MTYxXCIsXG4gIDc1MDogXCIjNDI0MjQyXCIsXG4gIDgwMDogXCIjMzIzMjMyXCIsXG4gIDkwMDogXCIjMjEyMTIxXCIsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICA1MDogXCIjZThmNWU5XCIsXG4gIDEwMDogXCIjYzhlNmM5XCIsXG4gIDIwMDogXCIjYTVkNmE3XCIsXG4gIDMwMDogXCIjODFjNzg0XCIsXG4gIDQwMDogXCIjNjZiYjZhXCIsXG4gIDUwMDogXCIjNGNhZjUwXCIsXG4gIDYwMDogXCIjNDNhMDQ3XCIsXG4gIDcwMDogXCIjMzg4ZTNjXCIsXG4gIDgwMDogXCIjMmU3ZDMyXCIsXG4gIDkwMDogXCIjMWI1ZTIwXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIDUwOiBcIiNmZmViZWVcIixcbiAgMTAwOiBcIiNmZmNkZDJcIixcbiAgMjAwOiBcIiNlZjlhOWFcIixcbiAgMzAwOiBcIiNlNTczNzNcIixcbiAgNDAwOiBcIiNlZjUzNTBcIixcbiAgNTAwOiBcIiNmNDQzMzZcIixcbiAgNjAwOiBcIiNlNTM5MzVcIixcbiAgNzAwOiBcIiNkMzJmMmZcIixcbiAgODAwOiBcIiNjNjI4MjhcIixcbiAgOTAwOiBcIiNiNzFjMWNcIlxufTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiI2ZmZmZmZlwiO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICA1MDogXCIjZmZmZGU3XCIsXG4gIDEwMDogXCIjZmZmOWM0XCIsXG4gIDIwMDogXCIjZmZmNTlkXCIsXG4gIDMwMDogXCIjZmZmMTc2XCIsXG4gIDQwMDogXCIjZmZlZTU4XCIsXG4gIDUwMDogXCIjZmZlYjNiXCIsXG4gIDYwMDogXCIjZmRkODM1XCIsXG4gIDcwMDogXCIjZmJjMDJkXCIsXG4gIDgwMDogXCIjZjlhODI1XCIsXG4gIDkwMDogXCIjZjU3ZjE3XCJcbn07XG4iLCJpbXBvcnQgdGV4dE92ZXJmbG93IGZyb20gXCIuL3RleHRPdmVyZmxvd1wiO1xuaW1wb3J0IHVzZXJTZWxlY3QgZnJvbSBcIi4vdXNlclNlbGVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7IHRleHRPdmVyZmxvdywgdXNlclNlbGVjdCB9O1xuIiwiY29uc3QgZWxsaXBzaXMgPSB7XG4gIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIlxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbGxpcHNpc1xufTtcbiIsImNvbnN0IG5vbmUgPSB7XG4gIFdlYmtpdFVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICBNb3pVc2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgTXNVc2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgdXNlclNlbGVjdDogXCJub25lXCJcbn07XG5cbmNvbnN0IHRleHQgPSB7XG4gIFdlYmtpdFVzZXJTZWxlY3Q6IFwidGV4dFwiLFxuICBNb3pVc2VyU2VsZWN0OiBcInRleHRcIixcbiAgTXNVc2VyU2VsZWN0OiBcInRleHRcIixcbiAgdXNlclNlbGVjdDogXCJ0ZXh0XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9uZSxcbiAgdGV4dFxufTtcbiIsImltcG9ydCBjb2xvcnMgZnJvbSBcIi4vY29sb3JzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL2Nzc1wiO1xuXG5leHBvcnQgeyBjb2xvcnMsIGNzcyB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91aVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgUmVzaXphYmxlSGFuZGxlID0gKHsgY3Vyc29yLCBvblJlc2l6ZSwgb25SZXNpemVFbmQsIG9uUmVzaXplU3RhcnQsIHN0eWxlIH0pID0+IHtcbiAgbGV0IHsgY3VycmVudDogaXNNb3VzZURvd24gfSA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gXCJcIjtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcblxuICAgIGlmIChpc01vdXNlRG93bikge1xuICAgICAgaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICAgIG9uUmVzaXplRW5kKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzTW91c2VEb3duKSB7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvblJlc2l6ZShldmVudCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9IGN1cnNvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICBpc01vdXNlRG93biA9IHRydWU7XG4gICAgb25SZXNpemVTdGFydChldmVudCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbiAgfTtcblxuICByZXR1cm4gPFZpZXcgc3R5bGU9e3sgLi4uc3R5bGVzLnZpZXcoY3Vyc29yKSwgLi4uc3R5bGUgfX0gZHJhZ2dhYmxlPXtmYWxzZX0gb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn0+PC9WaWV3Pjtcbn07XG5cblJlc2l6YWJsZUhhbmRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnNvcjogXCJud3NlLXJlc2l6ZVwiLFxuICBvblJlc2l6ZTogKCkgPT4ge30sXG4gIG9uUmVzaXplRW5kOiAoKSA9PiB7fSxcbiAgb25SZXNpemVTdGFydDogKCkgPT4ge30sXG4gIHN0eWxlOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZUhhbmRsZTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmlldzogKGN1cnNvcikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IFwiNXB4XCIsXG4gICAgICB3aWR0aDogXCI1cHhcIixcbiAgICAgIGN1cnNvcixcbiAgICB9O1xuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlc2l6YWJsZUhhbmRsZSBmcm9tIFwiLi9SZXNpemFibGVIYW5kbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFJlc2l6YWJsZUhhbmRsZXMgPSAoeyBvblJlc2l6ZSwgb25SZXNpemVFbmQsIG9uUmVzaXplU3RhcnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSZXNpemFibGVIYW5kbGVcbiAgICAgICAgc3R5bGU9e3N0eWxlcy50b3B9XG4gICAgICAgIGN1cnNvcj17XCJucy1yZXNpemVcIn1cbiAgICAgICAgb25SZXNpemU9eyhldmVudCkgPT4gb25SZXNpemUoZXZlbnQsIFwidG9wXCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLmxlZnR9XG4gICAgICAgIGN1cnNvcj17XCJldy1yZXNpemVcIn1cbiAgICAgICAgb25SZXNpemU9eyhldmVudCkgPT4gb25SZXNpemUoZXZlbnQsIFwibGVmdFwiKX1cbiAgICAgICAgb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfVxuICAgICAgICBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fVxuICAgICAgLz5cbiAgICAgIDxSZXNpemFibGVIYW5kbGVcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5yaWdodH1cbiAgICAgICAgY3Vyc29yPXtcImV3LXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJyaWdodFwiKX1cbiAgICAgICAgb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfVxuICAgICAgICBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fVxuICAgICAgLz5cbiAgICAgIDxSZXNpemFibGVIYW5kbGVcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5ib3R0b219XG4gICAgICAgIGN1cnNvcj17XCJucy1yZXNpemVcIn1cbiAgICAgICAgb25SZXNpemU9eyhldmVudCkgPT4gb25SZXNpemUoZXZlbnQsIFwiYm90dG9tXCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLnRvcExlZnR9XG4gICAgICAgIGN1cnNvcj17XCJud3NlLXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJ0b3BMZWZ0XCIpfVxuICAgICAgICBvblJlc2l6ZUVuZD17b25SZXNpemVFbmR9XG4gICAgICAgIG9uUmVzaXplU3RhcnQ9e29uUmVzaXplU3RhcnR9XG4gICAgICAvPlxuICAgICAgPFJlc2l6YWJsZUhhbmRsZVxuICAgICAgICBzdHlsZT17c3R5bGVzLnRvcFJpZ2h0fVxuICAgICAgICBjdXJzb3I9e1wibmVzdy1yZXNpemVcIn1cbiAgICAgICAgb25SZXNpemU9eyhldmVudCkgPT4gb25SZXNpemUoZXZlbnQsIFwidG9wUmlnaHRcIil9XG4gICAgICAgIG9uUmVzaXplRW5kPXtvblJlc2l6ZUVuZH1cbiAgICAgICAgb25SZXNpemVTdGFydD17b25SZXNpemVTdGFydH1cbiAgICAgIC8+XG4gICAgICA8UmVzaXphYmxlSGFuZGxlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMuYm90dG9tTGVmdH1cbiAgICAgICAgY3Vyc29yPXtcIm5lc3ctcmVzaXplXCJ9XG4gICAgICAgIG9uUmVzaXplPXsoZXZlbnQpID0+IG9uUmVzaXplKGV2ZW50LCBcImJvdHRvbUxlZnRcIil9XG4gICAgICAgIG9uUmVzaXplRW5kPXtvblJlc2l6ZUVuZH1cbiAgICAgICAgb25SZXNpemVTdGFydD17b25SZXNpemVTdGFydH1cbiAgICAgIC8+XG4gICAgICA8UmVzaXphYmxlSGFuZGxlXG4gICAgICAgIHN0eWxlPXtzdHlsZXMuYm90dG9tUmlnaHR9XG4gICAgICAgIGN1cnNvcj17XCJud3NlLXJlc2l6ZVwifVxuICAgICAgICBvblJlc2l6ZT17KGV2ZW50KSA9PiBvblJlc2l6ZShldmVudCwgXCJib3R0b21SaWdodFwiKX1cbiAgICAgICAgb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfVxuICAgICAgICBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuUmVzaXphYmxlSGFuZGxlcy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUmVzaXplOiAoKSA9PiB7fSxcbiAgb25SZXNpemVFbmQ6ICgpID0+IHt9LFxuICBvblJlc2lzZVN0YXJ0OiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6YWJsZUhhbmRsZXM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHRvcDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIi0ycHhcIixcbiAgICBsZWZ0OiBcIjBweFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgbGVmdDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIjBweFwiLFxuICAgIGxlZnQ6IFwiLTJweFwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiMHB4XCIsXG4gICAgcmlnaHQ6IFwiLTJweFwiLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiBcIi0ycHhcIixcbiAgICBsZWZ0OiBcIjBweFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiBcIi0ycHhcIixcbiAgICBsZWZ0OiBcIi0ycHhcIixcbiAgICBoZWlnaHQ6IFwiMTBweFwiLFxuICAgIHdpZHRoOiBcIjEwcHhcIixcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCItMnB4XCIsXG4gICAgcmlnaHQ6IFwiLTJweFwiLFxuICAgIGhlaWdodDogXCIxMHB4XCIsXG4gICAgd2lkdGg6IFwiMTBweFwiLFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IFwiLTJweFwiLFxuICAgIGxlZnQ6IFwiLTJweFwiLFxuICAgIGhlaWdodDogXCIxMHB4XCIsXG4gICAgd2lkdGg6IFwiMTBweFwiLFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiBcIi0ycHhcIixcbiAgICByaWdodDogXCItMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICB3aWR0aDogXCIxMHB4XCIsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlc2l6YWJsZUhhbmRsZXMgZnJvbSBcIi4vUmVzaXphYmxlSGFuZGxlc1wiO1xuXG5leHBvcnQgeyBSZXNpemFibGVIYW5kbGVzIH07XG4iLCJjb25zdCBib3R0b21MZWZ0ID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IGVsZW0ud2lkdGggLSBldmVudC5tb3ZlbWVudFg7XG4gIGNvbnN0IGhlaWdodCA9IGVsZW0uaGVpZ2h0ICsgZXZlbnQubW92ZW1lbnRZO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IHdpZHRoIDogZWxlbS53aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCA+IG1pblNpemUuaGVpZ2h0ID8gaGVpZ2h0IDogZWxlbS5oZWlnaHQsXG4gICAgdG9wOiBlbGVtLnRvcCxcbiAgICBsZWZ0OiB3aWR0aCA+IG1pblNpemUud2lkdGggPyBlbGVtLmxlZnQgKyBldmVudC5tb3ZlbWVudFggOiBlbGVtLmxlZnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBib3R0b21MZWZ0O1xuIiwiY29uc3QgYm90dG9tUmlnaHQgPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbS53aWR0aCArIGV2ZW50Lm1vdmVtZW50WDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbS5oZWlnaHQgKyBldmVudC5tb3ZlbWVudFk7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGggPiBtaW5TaXplLndpZHRoID8gd2lkdGggOiBlbGVtLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBoZWlnaHQgOiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGVsZW0udG9wLFxuICAgIGxlZnQ6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJvdHRvbVJpZ2h0O1xuIiwiY29uc3QgYm90dG9tID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCBoZWlnaHQgPSBlbGVtLmhlaWdodCArIGV2ZW50Lm1vdmVtZW50WTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbGVtLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBoZWlnaHQgOiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGVsZW0udG9wLFxuICAgIGxlZnQ6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJvdHRvbTtcbiIsImltcG9ydCBib3R0b20gZnJvbSBcIi4vYm90dG9tXCI7XG5pbXBvcnQgYm90dG9tTGVmdCBmcm9tIFwiLi9ib3R0b20tbGVmdFwiO1xuaW1wb3J0IGJvdHRvbVJpZ2h0IGZyb20gXCIuL2JvdHRvbS1yaWdodFwiO1xuaW1wb3J0IGxlZnQgZnJvbSBcIi4vbGVmdFwiO1xuaW1wb3J0IHJpZ2h0IGZyb20gXCIuL3JpZ2h0XCI7XG5pbXBvcnQgdG9wIGZyb20gXCIuL3RvcFwiO1xuaW1wb3J0IHRvcExlZnQgZnJvbSBcIi4vdG9wLWxlZnRcIjtcbmltcG9ydCB0b3BSaWdodCBmcm9tIFwiLi90b3AtcmlnaHRcIjtcblxuY29uc3QgY2FsY3VsYXRvcnMgPSB7XG4gIGJvdHRvbSxcbiAgYm90dG9tTGVmdCxcbiAgYm90dG9tUmlnaHQsXG4gIGxlZnQsXG4gIHJpZ2h0LFxuICB0b3AsXG4gIHRvcExlZnQsXG4gIHRvcFJpZ2h0LFxufTtcblxuY29uc3QgY2FsY3VsYXRlUmVzaXplID0gKHsgZWxlbSwgZXZlbnQsIGhhbmRsZVR5cGUsIG1pblNpemUgfSkgPT4ge1xuICByZXR1cm4gZWxlbVxuICAgID8gY2FsY3VsYXRvcnNbaGFuZGxlVHlwZV0oe1xuICAgICAgICBlbGVtOiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBldmVudCxcbiAgICAgICAgbWluU2l6ZSxcbiAgICAgIH0pXG4gICAgOiB7XG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVSZXNpemU7XG4iLCJjb25zdCBsZWZ0ID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCB3aWR0aCA9IGVsZW0ud2lkdGggLSBldmVudC5tb3ZlbWVudFg7XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGggPiBtaW5TaXplLndpZHRoID8gd2lkdGggOiBlbGVtLndpZHRoLFxuICAgIGhlaWdodDogZWxlbS5oZWlnaHQsXG4gICAgdG9wOiBlbGVtLnRvcCxcbiAgICBsZWZ0OiB3aWR0aCA+IG1pblNpemUud2lkdGggPyBlbGVtLmxlZnQgKyBldmVudC5tb3ZlbWVudFggOiBlbGVtLmxlZnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsZWZ0O1xuIiwiY29uc3QgcmlnaHQgPSAoeyBlbGVtLCBldmVudCwgbWluU2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbS53aWR0aCArIGV2ZW50Lm1vdmVtZW50WDtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCA+IG1pblNpemUud2lkdGggPyB3aWR0aCA6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGVsZW0udG9wLFxuICAgIGxlZnQ6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJpZ2h0O1xuIiwiY29uc3QgdG9wTGVmdCA9ICh7IGVsZW0sIGV2ZW50LCBtaW5TaXplIH0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtLndpZHRoIC0gZXZlbnQubW92ZW1lbnRYO1xuICBjb25zdCBoZWlnaHQgPSBlbGVtLmhlaWdodCAtIGV2ZW50Lm1vdmVtZW50WTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCA+IG1pblNpemUud2lkdGggPyB3aWR0aCA6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGhlaWdodCA6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBlbGVtLnRvcCArIGV2ZW50Lm1vdmVtZW50WSA6IGVsZW0udG9wLFxuICAgIGxlZnQ6IHdpZHRoID4gbWluU2l6ZS53aWR0aCA/IGVsZW0ubGVmdCArIGV2ZW50Lm1vdmVtZW50WCA6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvcExlZnQ7XG4iLCJjb25zdCB0b3BSaWdodCA9ICh7IGVsZW0sIGV2ZW50LCBtaW5TaXplIH0pID0+IHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtLndpZHRoICsgZXZlbnQubW92ZW1lbnRYO1xuICBjb25zdCBoZWlnaHQgPSBlbGVtLmhlaWdodCAtIGV2ZW50Lm1vdmVtZW50WTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCA+IG1pblNpemUud2lkdGggPyB3aWR0aCA6IGVsZW0ud2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQgPiBtaW5TaXplLmhlaWdodCA/IGhlaWdodCA6IGVsZW0uaGVpZ2h0LFxuICAgIHRvcDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBlbGVtLnRvcCArIGV2ZW50Lm1vdmVtZW50WSA6IGVsZW0udG9wLFxuICAgIGxlZnQ6IGVsZW0ubGVmdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvcFJpZ2h0O1xuIiwiY29uc3QgdG9wID0gKHsgZWxlbSwgZXZlbnQsIG1pblNpemUgfSkgPT4ge1xuICBjb25zdCBoZWlnaHQgPSBlbGVtLmhlaWdodCAtIGV2ZW50Lm1vdmVtZW50WTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbGVtLndpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0ID4gbWluU2l6ZS5oZWlnaHQgPyBoZWlnaHQgOiBlbGVtLmhlaWdodCxcbiAgICB0b3A6IGhlaWdodCA+IG1pblNpemUuaGVpZ2h0ID8gZWxlbS50b3AgKyBldmVudC5tb3ZlbWVudFkgOiBlbGVtLnRvcCxcbiAgICBsZWZ0OiBlbGVtLmxlZnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b3A7XG4iLCJpbXBvcnQgY2FsY3VsYXRlUmVzaXplIGZyb20gXCIuL2NhbGN1bGF0ZS1yZXNpemVcIjtcblxuZXhwb3J0IHsgY2FsY3VsYXRlUmVzaXplIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3UmVmIH0gZnJvbSBcIi4uLy4uLy4uL3VpXCI7XG5pbXBvcnQgeyBSZXNpemFibGVIYW5kbGVzIH0gZnJvbSBcIi4vY2hpbGRyZW5cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJlc2l6ZSB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IFJlc2l6YWJsZSA9ICh7IGNoaWxkcmVuLCBpc0FjdGl2ZSwgbWluSGVpZ2h0LCBtaW5XaWR0aCwgb25SZXNpemUsIG9uUmVzaXplRW5kLCBvblJlc2l6ZVN0YXJ0LCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHJlc2l6YWJsZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGV2ZW50LCBoYW5kbGVUeXBlKSA9PlxuICAgIG9uUmVzaXplKGNhbGN1bGF0ZVJlc2l6ZSh7IGVsZW06IHJlc2l6YWJsZVJlZi5jdXJyZW50LCBldmVudCwgaGFuZGxlVHlwZSwgbWluU2l6ZTogeyBoZWlnaHQ6IG1pbkhlaWdodCwgd2lkdGg6IG1pbldpZHRoIH0gfSksIGV2ZW50KTtcblxuICByZXR1cm4gKFxuICAgIDxWaWV3UmVmIHN0eWxlPXt7IC4uLnN0eWxlcy52aWV3LCAuLi5zdHlsZSB9fSByZWY9e3Jlc2l6YWJsZVJlZn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNBY3RpdmUgJiYgPFJlc2l6YWJsZUhhbmRsZXMgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX0gb25SZXNpemVFbmQ9e29uUmVzaXplRW5kfSBvblJlc2l6ZVN0YXJ0PXtvblJlc2l6ZVN0YXJ0fSAvPn1cbiAgICA8L1ZpZXdSZWY+XG4gICk7XG59O1xuXG5SZXNpemFibGUuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgaXNBY3RpdmU6IHRydWUsXG4gIG1pbkhlaWdodDogMSxcbiAgbWluV2lkdGg6IDEsXG4gIG9uUmVzaXplOiAoKSA9PiB7fSxcbiAgb25SZXNpemVFbmQ6ICgpID0+IHt9LFxuICBvblJlc2l6ZVN0YXJ0OiAoKSA9PiB7fSxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzaXphYmxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgVGV4dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jb250YWluZXIsIC4uLnByb3BzLnN0eWxlIH19IHRpdGxlPXtwcm9wcy50aXRsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIHRpdGxlOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlc2l6YWJsZSBmcm9tIFwiLi9SZXNpemFibGVcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcblxuZXhwb3J0IHsgUmVzaXphYmxlLCBUZXh0IH07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jb21tb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZXdzXCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFZpZXcgPSBwcm9wcyA9PiB7XG4gIHJldHVybiA8ZGl2IHsuLi5wcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBWaWV3UmVmID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gPGRpdiB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3UmVmO1xuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IFZpZXdSZWYgZnJvbSBcIi4vVmlld1JlZlwiO1xuXG5leHBvcnQgeyBWaWV3LCBWaWV3UmVmIH07XG4iLCJleHBvcnQgZGVmYXVsdCAoYnlJZCkgPT4ge1xuICBjb25zdCBuZXh0Rm9jdXNlZFdpbmRvdyA9IE9iamVjdC52YWx1ZXMoYnlJZCkucmVkdWNlKFxuICAgIChwcmV2VmFsLCBjdXJyZW50VmFsKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFZhbC5yZW5kZXJJbmRleCA+PSBwcmV2VmFsLnJlbmRlckluZGV4KSB7XG4gICAgICAgIHByZXZWYWwgPSBjdXJyZW50VmFsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldlZhbDtcbiAgICB9LFxuICAgIHsgcmVuZGVySW5kZXg6IDAgfVxuICApO1xuXG4gIHJldHVybiBuZXh0Rm9jdXNlZFdpbmRvdyA/IG5leHRGb2N1c2VkV2luZG93LmlkIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgc3RvcmUgZnJvbSBcIkBzdG9yZVwiO1xuaW1wb3J0IGdldE5leHRGb2N1c2VkSWQgZnJvbSBcIi4vZ2V0LW5leHQtZm9jdXNlZC1pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoaWQpID0+IHtcbiAgY29uc3QgeyBieUlkIH0gPSBzdG9yZS5kaXNwYXRjaChcIndpbmRvd3MucmVtb3ZlXCIsIGlkKTtcbiAgY29uc3QgbmV4dEZvY3VzZWRJZCA9IGdldE5leHRGb2N1c2VkSWQoYnlJZCk7XG5cbiAgbmV4dEZvY3VzZWRJZCAmJiBzdG9yZS5kaXNwYXRjaChcIndpbmRvd3MuZm9jdXNcIiwgbmV4dEZvY3VzZWRJZCk7XG59O1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCB3aW5kb3dGYWN0b3J5IGZyb20gXCJAZmFjdG9yaWVzL3dpbmRvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoYXR0cnMgPSB7fSkgPT4ge1xuICBjb25zdCBjcmVhdGVkV2luZG93ID0gd2luZG93RmFjdG9yeS5jcmVhdGUoYXR0cnMpO1xuXG4gIHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy5hZGRcIiwgY3JlYXRlZFdpbmRvdyk7XG4gIHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy5mb2N1c1wiLCBjcmVhdGVkV2luZG93LmlkKTtcbn07XG4iLCJpbXBvcnQgcGlwZSBmcm9tIFwic2NyLXBpcGVcIjtcblxuY29uc3QgY2hlY2tXaW5kb3dUb3AgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heFRvcCA9IDA7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgPCBtYXhUb3AgPyBtYXhUb3AgOiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd0JvdHRvbSA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4Qm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjQ7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgPiBtYXhCb3R0b20gPyBtYXhCb3R0b20gOiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd0xlZnQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heExlZnQgPSAtKGN0eC5zaXplLndpZHRoIC0gMjQpO1xuICBjb25zdCBwb3NpdGlvbiA9IHsgeDogY3R4LnBvc2l0aW9uLnggPCBtYXhMZWZ0ID8gbWF4TGVmdCA6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd1JpZ2h0ID0gKGN0eCkgPT4ge1xuICBjb25zdCBtYXhSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjQ7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCA+IG1heFJpZ2h0ID8gbWF4UmlnaHQgOiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgfTtcbiAgcmV0dXJuIHsgLi4uY3R4LCBwb3NpdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZWxlbSwgZXZlbnQsIHdpbmRvdyB9KSA9PiB7XG4gIGNvbnN0IHsgdG9wOiBwcmV2VG9wLCBsZWZ0OiBwcmV2TGVmdCB9ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4gcGlwZSh7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIHg6IHByZXZMZWZ0ICsgZXZlbnQubW92ZW1lbnRYLFxuICAgICAgeTogcHJldlRvcCArIGV2ZW50Lm1vdmVtZW50WSxcbiAgICB9LFxuICAgIHNpemU6IHdpbmRvdy5zaXplLFxuICB9KVxuICAgIC5mbG93KGNoZWNrV2luZG93VG9wKVxuICAgIC5mbG93KGNoZWNrV2luZG93Qm90dG9tKVxuICAgIC5mbG93KGNoZWNrV2luZG93TGVmdClcbiAgICAuZmxvdyhjaGVja1dpbmRvd1JpZ2h0KVxuICAgIC5jbG9zZSgpLnBvc2l0aW9uO1xufTtcbiIsImltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgY2FsY3VsYXRlTW92ZSBmcm9tIFwiLi9jYWxjdWxhdGUtbW92ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBlbGVtLCBldmVudCwgaWQsIHNob3VsZERpc3BhdGNoID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCB3aW5kb3cgPSBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuYnlJZFtpZF07XG5cbiAgaWYgKGVsZW0gJiYgd2luZG93KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBjYWxjdWxhdGVNb3ZlKHsgZWxlbSwgZXZlbnQsIHdpbmRvdyB9KTtcbiAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpYDtcbiAgICB3aW5kb3cuZXZlbnRzLm9uTW92ZSh7IHBvc2l0aW9uIH0sIGV2ZW50KTtcblxuICAgIHNob3VsZERpc3BhdGNoICYmIHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy51cGRhdGVcIiwgeyBpZCwgcG9zaXRpb24gfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgcGlwZSBmcm9tIFwic2NyLXBpcGVcIjtcblxuY29uc3QgY2hlY2tXaW5kb3dUb3AgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heFRvcCA9IDA7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgPCBtYXhUb3AgPyBtYXhUb3AgOiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd0JvdHRvbSA9IChjdHgpID0+IHtcbiAgY29uc3QgbWF4Qm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjQ7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgPiBtYXhCb3R0b20gPyBtYXhCb3R0b20gOiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd0xlZnQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IG1heExlZnQgPSAtKGN0eC5zaXplLndpZHRoIC0gMjQpO1xuICBjb25zdCBwb3NpdGlvbiA9IHsgeDogY3R4LnBvc2l0aW9uLnggPCBtYXhMZWZ0ID8gbWF4TGVmdCA6IGN0eC5wb3NpdGlvbi54LCB5OiBjdHgucG9zaXRpb24ueSB9O1xuICByZXR1cm4geyAuLi5jdHgsIHBvc2l0aW9uIH07XG59O1xuXG5jb25zdCBjaGVja1dpbmRvd1JpZ2h0ID0gKGN0eCkgPT4ge1xuICBjb25zdCBtYXhSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMjQ7XG4gIGNvbnN0IHBvc2l0aW9uID0geyB4OiBjdHgucG9zaXRpb24ueCA+IG1heFJpZ2h0ID8gbWF4UmlnaHQgOiBjdHgucG9zaXRpb24ueCwgeTogY3R4LnBvc2l0aW9uLnkgfTtcbiAgcmV0dXJuIHsgLi4uY3R4LCBwb3NpdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGRpbWVuc2lvbnMsIHNob3VsZERpc3BhdGNoKSA9PiB7XG4gIHJldHVybiBzaG91bGREaXNwYXRjaFxuICAgID8ge1xuICAgICAgICBwb3NpdGlvbjogeyB4OiBkaW1lbnNpb25zLmxlZnQsIHk6IGRpbWVuc2lvbnMudG9wIH0sXG4gICAgICAgIHNpemU6IHsgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCwgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGggfSxcbiAgICAgIH1cbiAgICA6IHBpcGUoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHg6IGRpbWVuc2lvbnMubGVmdCxcbiAgICAgICAgICB5OiBkaW1lbnNpb25zLnRvcCxcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgIGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAuZmxvdyhjaGVja1dpbmRvd1RvcClcbiAgICAgICAgLmZsb3coY2hlY2tXaW5kb3dCb3R0b20pXG4gICAgICAgIC5mbG93KGNoZWNrV2luZG93TGVmdClcbiAgICAgICAgLmZsb3coY2hlY2tXaW5kb3dSaWdodClcbiAgICAgICAgLmNsb3NlKCk7XG59O1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCBjYWxjdWxhdGVSZXNpemUgZnJvbSBcIi4vY2FsY3VsYXRlLXJlc2l6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBkaW1lbnNpb25zLCBlbGVtLCBldmVudCwgaWQsIHNob3VsZERpc3BhdGNoID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCB3aW5kb3cgPSBzdG9yZS5nZXRTdGF0ZShcIndpbmRvd3NcIikuYnlJZFtpZF07XG5cbiAgaWYgKGVsZW0gJiYgd2luZG93KSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgc2l6ZSB9ID0gY2FsY3VsYXRlUmVzaXplKGRpbWVuc2lvbnMsIHNob3VsZERpc3BhdGNoKTtcbiAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvbi54fXB4LCAke3Bvc2l0aW9uLnl9cHgpYDtcbiAgICBlbGVtLnN0eWxlLmhlaWdodCA9IGAke3NpemUuaGVpZ2h0fXB4YDtcbiAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7c2l6ZS53aWR0aH1weGA7XG4gICAgd2luZG93LmV2ZW50cy5vblJlc2l6ZSh7IHBvc2l0aW9uLCBzaXplIH0sIGV2ZW50KTtcblxuICAgIHNob3VsZERpc3BhdGNoICYmIHN0b3JlLmRpc3BhdGNoKFwid2luZG93cy51cGRhdGVcIiwgeyBpZCwgcG9zaXRpb24sIHNpemUgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJnZW5lcmljLWRhdGEtY2hhbWJlclwiO1xuLy8gU3RvcmUgVHlwZXMgLy9cbmltcG9ydCB0b29sQnJvd3NlciBmcm9tIFwiLi90b29sLWJyb3dzZXJcIjtcbmltcG9ydCB3aW5kb3dzIGZyb20gXCIuL3dpbmRvd3NcIjtcblxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoeyBuYW1lOiBcImRldi10b29sc1wiLCB0eXBlczogeyB0b29sQnJvd3Nlciwgd2luZG93cyB9IH0pO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJleHBvcnQgZGVmYXVsdCAoeyBwcmV2U3RhdGUgfSkgPT4ge1xuICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGlzT3BlbjogZmFsc2UgfTtcbn07XG4iLCJpbXBvcnQgY2xvc2UgZnJvbSBcIi4vY2xvc2VcIjtcbmltcG9ydCBvcGVuIGZyb20gXCIuL29wZW5cIjtcbmltcG9ydCB0b2dnbGUgZnJvbSBcIi4vdG9nZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWN0aW9uczoge1xuICAgIGNsb3NlLFxuICAgIG9wZW4sXG4gICAgdG9nZ2xlLFxuICB9LFxuICBuYW1lOiBcInRvb2xCcm93c2VyXCIsXG4gIHN0YXRlOiB7XG4gICAgaXNPcGVuOiBmYWxzZSxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoeyBwcmV2U3RhdGUgfSkgPT4ge1xuICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGlzT3BlbjogdHJ1ZSB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9KSA9PiB7XG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgaXNPcGVuOiAhcHJldlN0YXRlLmlzT3BlbiB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9LCB3aW5kb3cpID0+IHtcbiAgY29uc3QgYnlJZCA9IHsgLi4ucHJldlN0YXRlLmJ5SWQsIFt3aW5kb3cuaWRdOiB7IC4uLndpbmRvdyB9IH07XG4gIGNvbnN0IGlkcyA9IFsuLi5wcmV2U3RhdGUuaWRzLCB3aW5kb3cuaWRdO1xuXG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYnlJZCwgaWRzIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHsgcHJldlN0YXRlIH0sIGlkKSA9PiB7XG4gIGNvbnN0IHByZXZCeUlkID0geyAuLi5wcmV2U3RhdGUuYnlJZCB9O1xuICBjb25zdCBwcmV2Rm9jdXNlZElkID0gcHJldlN0YXRlLmZvY3VzZWRJZDtcbiAgY29uc3QgcHJldkZvY3VzZWRXaW5kb3cgPSBwcmV2QnlJZFtwcmV2Rm9jdXNlZElkXTtcblxuICBjb25zdCBieUlkID0geyAuLi5wcmV2QnlJZCB9O1xuICBjb25zdCBtYXhSZW5kZXJJbmRleCA9IHByZXZTdGF0ZS5tYXhSZW5kZXJJbmRleCArIDE7XG4gIGNvbnN0IG5leHRGb2N1c2VkV2luZG93ID0gcHJldkJ5SWRbaWRdO1xuXG4gIHByZXZGb2N1c2VkV2luZG93ICYmIChieUlkW3ByZXZGb2N1c2VkSWRdID0geyAuLi5wcmV2Rm9jdXNlZFdpbmRvdywgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgYnlJZFtpZF0gPSB7IC4uLm5leHRGb2N1c2VkV2luZG93LCBpc0ZvY3VzZWQ6IHRydWUsIHJlbmRlckluZGV4OiBtYXhSZW5kZXJJbmRleCB9O1xuXG4gIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgYnlJZCwgZm9jdXNlZElkOiBpZCwgbWF4UmVuZGVySW5kZXggfTtcbn07XG4iLCJpbXBvcnQgYWRkIGZyb20gXCIuL2FkZFwiO1xuaW1wb3J0IGZvY3VzIGZyb20gXCIuL2ZvY3VzXCI7XG5pbXBvcnQgcmVtb3ZlIGZyb20gXCIuL3JlbW92ZVwiO1xuaW1wb3J0IHVwZGF0ZSBmcm9tIFwiLi91cGRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3Rpb25zOiB7XG4gICAgYWRkLFxuICAgIGZvY3VzLFxuICAgIHJlbW92ZSxcbiAgICB1cGRhdGUsXG4gIH0sXG4gIG5hbWU6IFwid2luZG93c1wiLFxuICBzdGF0ZToge1xuICAgIGJ5SWQ6IHt9LFxuICAgIGZvY3VzZWRJZDogbnVsbCxcbiAgICBpZHM6IFtdLFxuICAgIG1heFJlbmRlckluZGV4OiAwLFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9LCBpZCkgPT4ge1xuICBjb25zdCBwcmV2QnlJZCA9IHByZXZTdGF0ZS5ieUlkO1xuICBjb25zdCBpZHMgPSBbLi4ucHJldlN0YXRlLmlkc10uZmlsdGVyKCh3aW5kb3dJZCkgPT4gd2luZG93SWQgIT09IGlkKTtcbiAgY29uc3QgYnlJZCA9IE9iamVjdC52YWx1ZXMocHJldkJ5SWQpLnJlZHVjZSgocHJldlZhbCwgY3VycmVudFZhbCkgPT4ge1xuICAgIGN1cnJlbnRWYWwuaWQgIT09IGlkICYmIChwcmV2VmFsW2N1cnJlbnRWYWwuaWRdID0gY3VycmVudFZhbCk7XG4gICAgcmV0dXJuIHByZXZWYWw7XG4gIH0sIHt9KTtcblxuICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGJ5SWQsIGlkcyB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh7IHByZXZTdGF0ZSB9LCB1cGRhdGVkV2luZG93KSA9PiB7XG4gIGNvbnN0IHByZXZCeUlkID0gcHJldlN0YXRlLmJ5SWQ7XG4gIGNvbnN0IHByZXZXaW5kb3cgPSBwcmV2QnlJZFt1cGRhdGVkV2luZG93LmlkXTtcbiAgY29uc3QgYnlJZCA9IHsgLi4ucHJldkJ5SWQgfTtcblxuICBieUlkW3ByZXZXaW5kb3cuaWRdID0geyAuLi5wcmV2V2luZG93LCAuLi51cGRhdGVkV2luZG93IH07XG5cbiAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBieUlkIH07XG59O1xuIiwiaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuL3VzZS1zdG9yZVwiO1xuXG5leHBvcnQgeyB1c2VTdG9yZSB9O1xuIiwiaW1wb3J0IHN0b3JlIGZyb20gXCJAc3RvcmVcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIkBsaWJyYXJ5L2hvb2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JlKHN0b3JlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJzb3VyY2VSb290IjoiIn0=