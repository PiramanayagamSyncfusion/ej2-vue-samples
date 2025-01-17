/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"rich-text-editor/blog-posting/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/rich-text-editor/blog-posting/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/blog-posting/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/rich-text-editor/blog-posting/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ac94dd8&scoped=true& */ \"./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css& */ \"./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0ac94dd8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/blog-posting/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ac94dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ac94dd8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ac94dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/blog-posting/main.js":
/*!*******************************************************!*\
  !*** ./Samples/rich-text-editor/blog-posting/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/blog-posting/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.tagSection[data-v-0ac94dd8] {\\n    float: left;\\n}\\n.likeAnswer span.e-icon[data-v-0ac94dd8] {\\n    float: left;\\n}\\nimg.e-icon[data-v-0ac94dd8] {\\n    width: 13px;\\n    height: 25px;\\n}\\nspan.questionSide[data-v-0ac94dd8] {\\n    margin-left: 24px;\\n    float: left;\\n}\\n.e-dislike[data-v-0ac94dd8] {\\n    margin-left: 16px;\\n    float: left;\\n}\\n.questionHeader[data-v-0ac94dd8] {\\n    margin-top: 12px;\\n    margin-bottom: 5px;\\n}\\n.header[data-v-0ac94dd8] {\\n    font-size: 16px;\\n    font-family: roboto-Semibold, SegoeUI-Semibold;\\n    color: #000000;\\n    font-weight: bold;\\n    clear: both;\\n}\\n.highcontrast .header[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n@media (max-width: 550px) {\\n.forum[data-v-0ac94dd8] {\\n        padding: 20px 20px 60px 20px;\\n}\\n}\\n@media (min-width: 550px) {\\n.forum[data-v-0ac94dd8] {\\n        margin: 0 auto;\\n        width: 80%;\\n        border: 1px solid #d8d8c0;\\n        padding: 10px 90px 60px 90px;\\n        box-shadow: 2px 2px 2px 2px #f5f5ef;\\n}\\n.highcontrast .forum[data-v-0ac94dd8] {\\n        border: 1px solid #fff;\\n}\\n}\\n.e-like span[data-v-0ac94dd8] {\\n    font-family: Helvetica, Times New Roman;\\n    color: #E3175A;\\n    font-size: 12px;\\n}\\n.e-dislike span[data-v-0ac94dd8] {\\n    font-family: Helvetica, Times New Roman;\\n    color: #717171;\\n    font-size: 12px;\\n}\\n.detailsQuestion[data-v-0ac94dd8] {\\n    font-size: 12px;\\n    font-family: roboto, SegoeUI;\\n    color: #575757;\\n    margin-top: 8px;\\n}\\n.explain[data-v-0ac94dd8] {\\n    margin-top: 16px;\\n    font-size: 13px;\\n    font-family: roboto, SegoeUI;\\n    color: #000000;\\n}\\n.highcontrast .explain[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.separator[data-v-0ac94dd8] {\\n    margin-top: 5px;\\n    border-bottom: 1px solid #DADADA;\\n    margin-bottom: 5px;\\n}\\n.tags td:first-child div[data-v-0ac94dd8] {\\n    margin-left: 0px;\\n}\\n.tag[data-v-0ac94dd8] {\\n    color: #000000;\\n    padding: 3px 14px;\\n    background-color: #DDDDDD;\\n    font-size: 13px;\\n    margin-left: 8px;\\n    border-radius: 6px;\\n    float: left;\\n    text-transform: lowercase;\\n    font-family: roboto, SegoeUI;\\n}\\n.answerCount[data-v-0ac94dd8] {\\n    color: #575757;\\n    margin-top: 24px;\\n    margin-bottom: 24px;\\n    font-family: roboto-Semibold, SegoeUI-Semibold;\\n    width: 63px;\\n}\\n.likeAnswer[data-v-0ac94dd8] {\\n    margin-top: 13px;\\n}\\n.tags[data-v-0ac94dd8] {\\n    margin-top: 10px;\\n    margin-bottom: 24px;\\n}\\n.questionar[data-v-0ac94dd8] {\\n    width: 32px;\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/emp1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    height: 32px;\\n    float: left;\\n    -ms-flex-line-pack: center;\\n    align-content: center;\\n    -ms-flex-align: center;\\n    align-items: center;\\n    background-color: #bcbcbc;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 50%;\\n    color: #fff;\\n    margin-top: 2px;\\n}\\n.raiser[data-v-0ac94dd8] {\\n    height: 34px;\\n}\\n.Questionarname[data-v-0ac94dd8] {\\n    margin-top: 13px;\\n    float: left;\\n    font-weight: 500;\\n    margin-left: 10px;\\n}\\n.your-answer[data-v-0ac94dd8] {\\n    color: #3b3b3b;\\n    font-weight: 300;\\n}\\n.rating[data-v-0ac94dd8] {\\n    padding-left: 10px;\\n    margin-top: -95px;\\n}\\n.logos[data-v-0ac94dd8] {\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/emp2.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    height: 32px;\\n    -ms-flex-line-pack: center;\\n    align-content: center;\\n    -ms-flex-align: center;\\n    align-items: center;\\n    background-color: #bcbcbc;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 50%;\\n    color: #fff;\\n    width: 32px;\\n}\\n.logo[data-v-0ac94dd8] {\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/author.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp1[data-v-0ac94dd8] {\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp2[data-v-0ac94dd8] {\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/2.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp3[data-v-0ac94dd8] {\\n    background: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/3.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.author[data-v-0ac94dd8] {\\n    margin-bottom: 5px;\\n    height: 50px;\\n    margin-top: 5px;\\n}\\n.name[data-v-0ac94dd8] {\\n    margin: 5px;\\n    float: left;\\n    color: blue;\\n}\\n.posting[data-v-0ac94dd8] {\\n    clear: both;\\n    color: #000;\\n    line-height: 24px;\\n    margin-top: 12px;\\n    font-family: roboto, SegoeUI;\\n    font-size: 13px;\\n     overflow-wrap: break-word;\\n}\\n.highcontrast .posting[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.authorname[data-v-0ac94dd8] {\\n    font-family: SegoeUI-Semibold;\\n    color: #000000;\\n    font-size: 13px;\\n}\\n.highcontrast .authorname[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.detailsAnswer[data-v-0ac94dd8] {\\n    color: #575757;\\n    font-size: 12px;\\n    font-family: roboto, SegoeUI;\\n    margin-top: 7px;\\n}\\n#buttonSection[data-v-0ac94dd8] {\\n    float: right;\\n    margin-top: 11px;\\n}\\n#buttonSection input[data-v-0ac94dd8] {\\n    margin-right: 11px;\\n}\\n.authorname[data-v-0ac94dd8],\\n.detailsAnswer[data-v-0ac94dd8] {\\n    margin-left: 11px;\\n}\\n.answerCount[data-v-0ac94dd8] {\\n    color: #76766f;\\n    margin-top: 20px;\\n    margin-bottom: 12px;\\n}\\n.questDesc[data-v-0ac94dd8] {\\n    min-height: 120px;\\n    width: 100%;\\n}\\n.answerHeader[data-v-0ac94dd8] {\\n    border-bottom: 1px solid #ced1d1;\\n    margin-bottom: 20px;\\n    margin-top: -40px;\\n}\\n.answer[data-v-0ac94dd8] {\\n    margin-top: 15px;\\n}\\n.editorholder h4[data-v-0ac94dd8] {\\n    padding: 15px 0;\\n}\\n#createpostholder[data-v-0ac94dd8] {\\n    margin-top: 25px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-N3DMRJFTGMDOQHUK5D3TTEQIIZVZ4HAU46IUKQUA4R4A7BR67LFA/Samples/rich-text-editor/blog-posting/App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;CACf;AACD;IACI,YAAY;CACf;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,YAAY;CACf;AACD;IACI,kBAAkB;IAClB,YAAY;CACf;AACD;IACI,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,gBAAgB;IAChB,+CAA+C;IAC/C,eAAe;IACf,kBAAkB;IAClB,YAAY;CACf;AACD;IACI,YAAY;CACf;AACD;AACA;QACQ,6BAA6B;CACpC;CACA;AACD;AACA;QACQ,eAAe;QACf,WAAW;QACX,0BAA0B;QAC1B,6BAA6B;QAC7B,oCAAoC;CAC3C;AACD;QACQ,uBAAuB;CAC9B;CACA;AACD;IACI,wCAAwC;IACxC,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,wCAAwC;IACxC,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,iBAAiB;IACjB,gBAAgB;IAChB,6BAA6B;IAC7B,eAAe;CAClB;AACD;IACI,YAAY;CACf;AACD;IACI,gBAAgB;IAChB,iCAAiC;IACjC,mBAAmB;CACtB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,0BAA0B;IAC1B,6BAA6B;CAChC;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;IACpB,+CAA+C;IAC/C,YAAY;CACf;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;IACjB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,0CAAmC;IACnC,aAAa;IACb,YAAY;IACZ,2BAA2B;IAC3B,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,0BAA0B;IAC1B,4BAA4B;IAC5B,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;CACnB;AACD;IACI,aAAa;CAChB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;CACrB;AACD;IACI,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,kBAAkB;CACrB;AACD;IACI,0CAAmC;IACnC,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,0BAA0B;IAC1B,4BAA4B;IAC5B,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,YAAY;CACf;AACD;IACI,2EAAsE;IACtE,aAAa;IACb,YAAY;CACf;AACD;IACI,2EAAiE;IACjE,aAAa;IACb,YAAY;CACf;AACD;IACI,2EAAiE;IACjE,aAAa;IACb,YAAY;CACf;AACD;IACI,2EAAiE;IACjE,aAAa;IACb,YAAY;CACf;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,gBAAgB;CACnB;AACD;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;KACf,0BAA0B;CAC9B;AACD;IACI,YAAY;CACf;AACD;IACI,8BAA8B;IAC9B,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,YAAY;CACf;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,6BAA6B;IAC7B,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,iBAAiB;CACpB;AACD;IACI,mBAAmB;CACtB;AACD;;IAEI,kBAAkB;CACrB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,oBAAoB;CACvB;AACD;IACI,kBAAkB;IAClB,YAAY;CACf;AACD;IACI,iCAAiC;IACjC,oBAAoB;IACpB,kBAAkB;CACrB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=0ac94dd8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.tagSection[data-v-0ac94dd8] {\\n    float: left;\\n}\\n.likeAnswer span.e-icon[data-v-0ac94dd8] {\\n    float: left;\\n}\\nimg.e-icon[data-v-0ac94dd8] {\\n    width: 13px;\\n    height: 25px;\\n}\\nspan.questionSide[data-v-0ac94dd8] {\\n    margin-left: 24px;\\n    float: left;\\n}\\n.e-dislike[data-v-0ac94dd8] {\\n    margin-left: 16px;\\n    float: left;\\n}\\n.questionHeader[data-v-0ac94dd8] {\\n    margin-top: 12px;\\n    margin-bottom: 5px;\\n}\\n.header[data-v-0ac94dd8] {\\n    font-size: 16px;\\n    font-family: roboto-Semibold, SegoeUI-Semibold;\\n    color: #000000;\\n    font-weight: bold;\\n    clear: both;\\n}\\n.highcontrast .header[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n@media (max-width: 550px) {\\n.forum[data-v-0ac94dd8] {\\n        padding: 20px 20px 60px 20px;\\n}\\n}\\n@media (min-width: 550px) {\\n.forum[data-v-0ac94dd8] {\\n        margin: 0 auto;\\n        width: 80%;\\n        border: 1px solid #d8d8c0;\\n        padding: 10px 90px 60px 90px;\\n        box-shadow: 2px 2px 2px 2px #f5f5ef;\\n}\\n.highcontrast .forum[data-v-0ac94dd8] {\\n        border: 1px solid #fff;\\n}\\n}\\n.e-like span[data-v-0ac94dd8] {\\n    font-family: Helvetica, Times New Roman;\\n    color: #E3175A;\\n    font-size: 12px;\\n}\\n.e-dislike span[data-v-0ac94dd8] {\\n    font-family: Helvetica, Times New Roman;\\n    color: #717171;\\n    font-size: 12px;\\n}\\n.detailsQuestion[data-v-0ac94dd8] {\\n    font-size: 12px;\\n    font-family: roboto, SegoeUI;\\n    color: #575757;\\n    margin-top: 8px;\\n}\\n.explain[data-v-0ac94dd8] {\\n    margin-top: 16px;\\n    font-size: 13px;\\n    font-family: roboto, SegoeUI;\\n    color: #000000;\\n}\\n.highcontrast .explain[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.separator[data-v-0ac94dd8] {\\n    margin-top: 5px;\\n    border-bottom: 1px solid #DADADA;\\n    margin-bottom: 5px;\\n}\\n.tags td:first-child div[data-v-0ac94dd8] {\\n    margin-left: 0px;\\n}\\n.tag[data-v-0ac94dd8] {\\n    color: #000000;\\n    padding: 3px 14px;\\n    background-color: #DDDDDD;\\n    font-size: 13px;\\n    margin-left: 8px;\\n    border-radius: 6px;\\n    float: left;\\n    text-transform: lowercase;\\n    font-family: roboto, SegoeUI;\\n}\\n.answerCount[data-v-0ac94dd8] {\\n    color: #575757;\\n    margin-top: 24px;\\n    margin-bottom: 24px;\\n    font-family: roboto-Semibold, SegoeUI-Semibold;\\n    width: 63px;\\n}\\n.likeAnswer[data-v-0ac94dd8] {\\n    margin-top: 13px;\\n}\\n.tags[data-v-0ac94dd8] {\\n    margin-top: 10px;\\n    margin-bottom: 24px;\\n}\\n.questionar[data-v-0ac94dd8] {\\n    width: 32px;\\n    background: url(./images/emp1.png);\\n    height: 32px;\\n    float: left;\\n    -ms-flex-line-pack: center;\\n    align-content: center;\\n    -ms-flex-align: center;\\n    align-items: center;\\n    background-color: #bcbcbc;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 50%;\\n    color: #fff;\\n    margin-top: 2px;\\n}\\n.raiser[data-v-0ac94dd8] {\\n    height: 34px;\\n}\\n.Questionarname[data-v-0ac94dd8] {\\n    margin-top: 13px;\\n    float: left;\\n    font-weight: 500;\\n    margin-left: 10px;\\n}\\n.your-answer[data-v-0ac94dd8] {\\n    color: #3b3b3b;\\n    font-weight: 300;\\n}\\n.rating[data-v-0ac94dd8] {\\n    padding-left: 10px;\\n    margin-top: -95px;\\n}\\n.logos[data-v-0ac94dd8] {\\n    background: url(./images/emp2.png);\\n    height: 32px;\\n    -ms-flex-line-pack: center;\\n    align-content: center;\\n    -ms-flex-align: center;\\n    align-items: center;\\n    background-color: #bcbcbc;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 50%;\\n    color: #fff;\\n    width: 32px;\\n}\\n.logo[data-v-0ac94dd8] {\\n    background: url(./images/author.png) no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp1[data-v-0ac94dd8] {\\n    background: url(./images/1.png) no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp2[data-v-0ac94dd8] {\\n    background: url(./images/2.png) no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.emp3[data-v-0ac94dd8] {\\n    background: url(./images/3.png) no-repeat scroll 0 0 transparent;\\n    height: 32px;\\n    width: 32px;\\n}\\n.author[data-v-0ac94dd8] {\\n    margin-bottom: 5px;\\n    height: 50px;\\n    margin-top: 5px;\\n}\\n.name[data-v-0ac94dd8] {\\n    margin: 5px;\\n    float: left;\\n    color: blue;\\n}\\n.posting[data-v-0ac94dd8] {\\n    clear: both;\\n    color: #000;\\n    line-height: 24px;\\n    margin-top: 12px;\\n    font-family: roboto, SegoeUI;\\n    font-size: 13px;\\n     overflow-wrap: break-word;\\n}\\n.highcontrast .posting[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.authorname[data-v-0ac94dd8] {\\n    font-family: SegoeUI-Semibold;\\n    color: #000000;\\n    font-size: 13px;\\n}\\n.highcontrast .authorname[data-v-0ac94dd8] {\\n    color: #fff;\\n}\\n.detailsAnswer[data-v-0ac94dd8] {\\n    color: #575757;\\n    font-size: 12px;\\n    font-family: roboto, SegoeUI;\\n    margin-top: 7px;\\n}\\n#buttonSection[data-v-0ac94dd8] {\\n    float: right;\\n    margin-top: 11px;\\n}\\n#buttonSection input[data-v-0ac94dd8] {\\n    margin-right: 11px;\\n}\\n.authorname[data-v-0ac94dd8],\\n.detailsAnswer[data-v-0ac94dd8] {\\n    margin-left: 11px;\\n}\\n.answerCount[data-v-0ac94dd8] {\\n    color: #76766f;\\n    margin-top: 20px;\\n    margin-bottom: 12px;\\n}\\n.questDesc[data-v-0ac94dd8] {\\n    min-height: 120px;\\n    width: 100%;\\n}\\n.answerHeader[data-v-0ac94dd8] {\\n    border-bottom: 1px solid #ced1d1;\\n    margin-bottom: 20px;\\n    margin-top: -40px;\\n}\\n.answer[data-v-0ac94dd8] {\\n    margin-top: 15px;\\n}\\n.editorholder h4[data-v-0ac94dd8] {\\n    padding: 15px 0;\\n}\\n#createpostholder[data-v-0ac94dd8] {\\n    margin-top: 25px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n        isPrimary: true,\n        value: ''\n        };\n    },\n    methods: {\n        clickCancel: function() {\n            var answerElement = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');\n            answerElement.innerHTML = '';\n            this.value = '';\n            setTimeout(() => { this.$refs.rteInstance.ej2Instances.refresh(); } );\n            },\n            clickSubmit: function() {\n                var empCount = 0\n                var answerElement = this.$refs.rteInstance.$el.parentNode.querySelector('.e-content');\n                var comment = answerElement.innerHTML;\n                var empList = ['emp1','emp2','emp3'];\n                var nameList = ['Anne Dodsworth', 'Janet Leverling', 'Laura Callahan'];\n                if (comment !== null && comment.trim() !== '' && (answerElement.innerText.trim() !== '' ||\n                !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(answerElement.querySelector('img')) || !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"isNullOrUndefined\"])(answerElement.querySelector('table')))) {\n                    var answer = document.querySelector('.answer');\n                    var cloneAnswer = answer.cloneNode(true);\n                     var authorName = cloneAnswer.querySelector('.authorname');\n                    var logo =  cloneAnswer.querySelector('.logos');\n                     logo.classList.remove('logos');\n                     if (empCount < 3) {\n                logo.classList.add(empList[empCount]);\n                authorName.innerHTML = nameList[empCount];\n                empCount++;\n            } else {\n                logo.classList.add('logo');\n                authorName.innerHTML = 'User';\n            }\n            var timeZone = cloneAnswer.querySelector('.detailsAnswer');\n             var day = this.getMonthName(new Date().getMonth()) + ' ' + new Date().getDate();\n             var hr = new Date().getHours() + ':' + new Date().getMinutes();\n             if (new Date().getHours() > 12) {\n                hr = hr + ' PM';\n            } else {\n                hr = hr + ' AM';\n            }\n            timeZone.innerHTML = 'Answered on ' + day + ', ' + new Date().getFullYear() + ' ' + hr;\n            var postContent = cloneAnswer.querySelector('.posting');\n            postContent.innerHTML = comment;\n            var postElement = document.querySelector('.answerSection');\n            postElement.appendChild(cloneAnswer);\n            var countEle = document.querySelector('.answerCount');\n            var count = parseInt(countEle.innerHTML, null);\n            count = count + 1;\n            countEle.innerHTML = count.toString() + ' Answers';\n            answerElement.innerHTML = '';\n            this.value = '';\n            setTimeout(() => { this.$refs.rteInstance.ej2Instances.refresh(); } );\n                }\n            },\n            getMonthName: function(index) {\n        var month = [];\n        month[0] = 'January';\n        month[1] = 'February';\n        month[2] = 'March';\n        month[3] = 'April';\n        month[4] = 'May';\n        month[5] = 'June';\n        month[6] = 'July';\n        month[7] = 'August';\n        month[8] = 'September';\n        month[9] = 'October';\n        month[10] = 'November';\n        month[11] = 'December';\n        return month[index];\n    }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/blog-posting/App.vue?vue&type=template&id=0ac94dd8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"control-wrapper\"},[_c('div',{staticClass:\"default-section\"},[_c('div',{staticClass:\"forum\"},[_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"createpostholder\"}},[_c('form',{attrs:{\"novalidate\":\"novalidate\"}},[_c('ejs-richtexteditor',{ref:\"rteInstance\",attrs:{\"value\":_vm.value,\"placeholder\":\"Write a reply\"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:\"value\"}}),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"buttonSection\"}},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_c('ejs-button',{attrs:{\"isPrimary\":_vm.isPrimary,\"id\":\"rteSubmit\",\"type\":\"button\",\"value\":\"Reply\"},nativeOn:{\"click\":function($event){return _vm.clickSubmit.apply(null, arguments)}}},[_vm._v(\"Reply\")])],1),_vm._v(\" \"),_c('td',[_c('ejs-button',{attrs:{\"id\":\"rteCancel\",\"value\":\"Cancel\",\"type\":\"button\"},nativeOn:{\"click\":function($event){return _vm.clickCancel.apply(null, arguments)}}},[_vm._v(\"Cancel\")])],1)])])])])],1)])])])])]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"questionSection\"},[_c('div',{staticClass:\"raiser\"},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_c('div',{staticClass:\"questionar\"})]),_vm._v(\" \"),_c('td',[_c('div',{staticClass:\"Questionarname\"},[_vm._v(\" Kimberly \")])])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"questionHeader\"},[_c('div',{staticClass:\"header\"},[_vm._v(\"\\n                            How to add a custom item to the toolbar of RichTextEditor\\n                        \")]),_vm._v(\" \"),_c('div',{staticClass:\"detailsQuestion\"},[_vm._v(\"Posted on May 7, 2018 6.10 PM\")]),_vm._v(\" \"),_c('div',{staticClass:\"explain\"},[_vm._v(\"\\n                            I want to add a custom icon, “code-mirror” to the toolbar of RichTextEditor and display the RichTextEditor content in code-mirror format.\\n                        \")]),_vm._v(\" \"),_c('div',{staticClass:\"tags\"},[_c('div',{staticClass:\"tagSection\"},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_c('div',{staticClass:\"tag\"},[_vm._v(\" HTML \")])]),_vm._v(\" \"),_c('td',[_c('div',{staticClass:\"tag\"},[_vm._v(\" JavaScript \")])])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"questionLikes\"},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_c('span',{staticClass:\"e-icon e-like questionSide\"},[_c('img',{staticClass:\"e-icon\",attrs:{\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/like.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\"alt\":\"like\"}}),_vm._v(\" \"),_c('span',[_vm._v(\"Like\")])])]),_vm._v(\" \"),_c('td',[_c('span',{staticClass:\"e-icon e-dislike\"},[_c('img',{staticClass:\"e-icon\",attrs:{\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/dislike.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\"alt\":\"dislike\"}}),_vm._v(\" \"),_c('span',[_vm._v(\"Dislike\")])])])])])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"separator\"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"answerSection\"},[_c('div',{staticClass:\"answerCount\"},[_vm._v(\"1 Answer\")]),_vm._v(\" \"),_c('div',{staticClass:\"answer\"},[_c('table',[_c('tbody',[_c('tr',[_c('td',{attrs:{\"rowspan\":\"2\"}},[_c('div',{staticClass:\"logos\"})]),_vm._v(\" \"),_c('td',[_c('div',{staticClass:\"authorname\"},[_vm._v(\"Mabel Weber\")])])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('div',{staticClass:\"detailsAnswer\"},[_vm._v(\"Answered on May 7, 2018 6.30 PM\")])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"posting\"},[_vm._v(\"\\n                            To add a custom icon\\n                            \"),_c('b',[_vm._v(\"code-mirror\")]),_vm._v(\" to the Toolbar, you have to use template option of the\\n                            \"),_c('b',[_vm._v(\"toolbarSettings\")]),_vm._v(\". To know more about adding custom icons, refer to\\n                            \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/home/\",\"target\":\"_blank\"}},[_vm._v(\"custom tool\")]),_vm._v(\" sample of RTE.\\n                        \")]),_vm._v(\" \"),_c('div',{staticClass:\"likeAnswer\"},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_c('span',{staticClass:\"e-icon e-like\"},[_c('img',{staticClass:\"e-icon\",attrs:{\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/like.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))}}),_vm._v(\" \"),_c('span',[_vm._v(\"Like\")])])]),_vm._v(\" \"),_c('td',[_c('span',{staticClass:\"e-icon e-dislike\"},[_c('img',{staticClass:\"e-icon\",attrs:{\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/dislike.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))}}),_vm._v(\" \"),_c('span',[_vm._v(\"Dislike\")])])])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"separator\"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates how to design forum application using Rich Text Editor. You can type the content and click reply\\n        button to post it. \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"RichTextEditor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting\\n        word content as HTML or Markdown format. So, RichTextEditor can easily customized to use for blog posting, forums\\n        as an editor for response.\")]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Injecting Module\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"),_c('code',[_vm._v(\"Toolbar, Link, Image, HtmlEditor\")]),_vm._v(\" into the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/blog-posting/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });