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
/******/ 		"menu/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/menu/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/menu/template/App.vue":
/*!***************************************!*\
  !*** ./Samples/menu/template/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=097eef50& */ \"./Samples/menu/template/App.vue?vue&type=template&id=097eef50&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/menu/template/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=script&lang=ts&":
/*!****************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=script&lang=ts& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/App.vue?vue&type=template&id=097eef50&":
/*!**********************************************************************!*\
  !*** ./Samples/menu/template/App.vue?vue&type=template&id=097eef50& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=097eef50& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=template&id=097eef50&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_097eef50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?");

/***/ }),

/***/ "./Samples/menu/template/main.js":
/*!***************************************!*\
  !*** ./Samples/menu/template/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/menu/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/menu/template/main.js?");

/***/ }),

/***/ "./Samples/menu/template/menu-template.vue":
/*!*************************************************!*\
  !*** ./Samples/menu/template/menu-template.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-template.vue?vue&type=template&id=35886d3f& */ \"./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f&\");\n/* harmony import */ var _menu_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-template.vue?vue&type=script&lang=js& */ \"./Samples/menu/template/menu-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _menu_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/menu/template/menu-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/menu/template/menu-template.vue?");

/***/ }),

/***/ "./Samples/menu/template/menu-template.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/menu/template/menu-template.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_menu_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./menu-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/menu-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/menu/template/menu-template.vue?");

/***/ }),

/***/ "./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f&":
/*!********************************************************************************!*\
  !*** ./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./menu-template.vue?vue&type=template&id=35886d3f& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_template_vue_vue_type_template_id_35886d3f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/menu/template/menu-template.vue?");

/***/ }),

/***/ "./Samples/menu/template/template-data.json":
/*!**************************************************!*\
  !*** ./Samples/menu/template/template-data.json ***!
  \**************************************************/
/*! exports provided: templateData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"templateData\\\":[{\\\"category\\\":\\\"Products\\\",\\\"options\\\":[{\\\"value\\\":\\\"JavaScript\\\",\\\"url\\\":\\\"javascript\\\"},{\\\"value\\\":\\\"Angular\\\",\\\"url\\\":\\\"angular\\\"},{\\\"value\\\":\\\"ASP.NET Core\\\",\\\"url\\\":\\\"core\\\"},{\\\"value\\\":\\\"ASP.NET MVC\\\",\\\"url\\\":\\\"mvc\\\"}]},{\\\"category\\\":\\\"Services\\\",\\\"options\\\":[{\\\"value\\\":\\\"Application Development\\\",\\\"count\\\":\\\"1200+\\\"},{\\\"value\\\":\\\"Maintenance & Support\\\",\\\"count\\\":\\\"3700+\\\"},{\\\"value\\\":\\\"Quality Assurance\\\"},{\\\"value\\\":\\\"Cloud Integration\\\",\\\"count\\\":\\\"900+\\\"}]},{\\\"category\\\":\\\"About Us\\\",\\\"options\\\":[{\\\"id\\\":\\\"about\\\",\\\"about\\\":{\\\"value\\\":\\\"We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses.\\\"}}]},{\\\"category\\\":\\\"Careers\\\"},{\\\"category\\\":\\\"Sign In\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/menu/template/template-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* EJ2 Menu - template sample styles */\\n.template-menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* Common ul & li styles */\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul,\\n.e-template-menu.e-menu-wrapper ul.e-ul {\\n    padding: 0;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item,\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item {\\n    display: flex;\\n    padding: 0 10px;\\n    outline-color: transparent;\\n}\\n.e-template-menu.e-menu-wrapper .e-ul .e-menu-item{\\n    height: 36px;\\n    line-height: 36px;\\n}\\n\\n/** Avatar customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    background-color: inherit;\\n    font-size: 8px;\\n    margin-right: 8px;\\n    align-self: center;\\n    width: auto;\\n    overflow: visible;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    font-size: 10px;\\n}\\n\\n/** Badge customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-badge {\\n    margin-left: 10px;\\n    align-self: center;\\n    overflow: visible;\\n}\\n\\n/** Card customization */\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 290px;\\n    font-size: inherit;\\n    background-color: inherit;\\n    border-color: transparent;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 320px;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {\\n    white-space: normal;\\n    color: inherit;\\n    padding-top: 0;\\n    text-align: justify;\\n    font-size: inherit;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about {\\n    height: auto;\\n    padding: 0;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about.e-focused {\\n    background-color: transparent;\\n    outline-color: transparent;\\n    pointer-events: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-2E2MRSC7SP7V7IM76F2KPJPXVFW37UHSKZ2QZ3LIXAY6AYHCILIQ/Samples/menu/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCA,uCAAuC;AACvC;IACI,iBAAiB;IACjB,mBAAmB;CACtB;AACD,2BAA2B;AAC3B;;IAEI,WAAW;CACd;AACD;;IAEI,cAAc;IACd,gBAAgB;IAChB,2BAA2B;CAC9B;AACD;IACI,aAAa;IACb,kBAAkB;CACrB;;AAED,2BAA2B;AAC3B;IACI,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;CACrB;AACD;IACI,gBAAgB;CACnB;;AAED,0BAA0B;AAC1B;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;CACrB;;AAED,yBAAyB;AACzB;IACI,aAAa;IACb,mBAAmB;IACnB,0BAA0B;IAC1B,0BAA0B;CAC7B;AACD;IACI,aAAa;CAChB;AACD;IACI,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,WAAW;CACd;AACD;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,qBAAqB;CACxB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* EJ2 Menu - template sample styles */\\n.template-menu-control {\\n    margin-top: 45px;\\n    text-align: center;\\n}\\n/* Common ul & li styles */\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul,\\n.e-template-menu.e-menu-wrapper ul.e-ul {\\n    padding: 0;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item,\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item {\\n    display: flex;\\n    padding: 0 10px;\\n    outline-color: transparent;\\n}\\n.e-template-menu.e-menu-wrapper .e-ul .e-menu-item{\\n    height: 36px;\\n    line-height: 36px;\\n}\\n\\n/** Avatar customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    background-color: inherit;\\n    font-size: 8px;\\n    margin-right: 8px;\\n    align-self: center;\\n    width: auto;\\n    overflow: visible;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul .e-menu-item .e-avatar {\\n    font-size: 10px;\\n}\\n\\n/** Badge customization */\\n.e-template-menu.e-menu-wrapper ul .e-menu-item .e-badge {\\n    margin-left: 10px;\\n    align-self: center;\\n    overflow: visible;\\n}\\n\\n/** Card customization */\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 290px;\\n    font-size: inherit;\\n    background-color: inherit;\\n    border-color: transparent;\\n}\\n.e-bigger .e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card {\\n    width: 320px;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item .e-card .e-card-content {\\n    white-space: normal;\\n    color: inherit;\\n    padding-top: 0;\\n    text-align: justify;\\n    font-size: inherit;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about {\\n    height: auto;\\n    padding: 0;\\n}\\n.e-template-menu.e-menu-wrapper ul.e-ul .e-menu-item#about.e-focused {\\n    background-color: transparent;\\n    outline-color: transparent;\\n    pointer-events: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _template_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-data.json */ \"./Samples/menu/template/template-data.json\");\nvar _template_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./template-data.json */ \"./Samples/menu/template/template-data.json\", 1);\n/* harmony import */ var _menu_template_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-template.vue */ \"./Samples/menu/template/menu-template.vue\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"MenuPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            data: _template_data_json__WEBPACK_IMPORTED_MODULE_2__.templateData,\n            menuFields: {\n                text: ['category', 'value'],\n                children: ['options']\n            },\n            menuTemplate: function () {\n                return {\n                    template: _menu_template_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                };\n            }\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/menu-template.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/menu-template.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n \n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  },\n  computed: {\n    image: function() {\n      return `src/menu/images/${this.data.url}.png`\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/menu/template/menu-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/App.vue?vue&type=template&id=097eef50&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/App.vue?vue&type=template&id=097eef50& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section\"},[_c('div',{staticClass:\"template-menu-control\"},[_c('ejs-menu',{attrs:{\"items\":_vm.data,\"fields\":_vm.menuFields,\"template\":_vm.menuTemplate,\"cssClass\":\"e-template-menu\"}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This sample demonstrates the template functionalities of the \"),_c('code',[_vm._v(\"menu\")]),_vm._v(\" component. Interact with \"),_c('code',[_vm._v(\"menu\")]),_vm._v(\" using hover / click to display sub menu pop-up items with its customized templates.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            The menu component has an option to customize menu items using the \"),_c('code',[_vm._v(\"template\")]),_vm._v(\" property, so that the menu items can be rendered according to the requirement.\\n        \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            In this demo, the below customization are demonstrated.\\n        \\n        \")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Header menu items and the Products sub menu items represents the customization of default rendering of li elements i.e. \"),_c('b',[_vm._v(\"data.category\")]),_vm._v(\" in template.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Services sub menu item represent the customization of li element with \"),_c('code',[_vm._v(\"badge\")]),_vm._v(\" component.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"About Us sub menu item showed with \"),_c('code',[_vm._v(\"card\")]),_vm._v(\" component in a single li.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            For more information, you can refer to the \\n            \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/menu/data-source-binding-and-custom-menu-items/#custom-menu-items\"}},[_vm._v(\"\\n            templates\")]),_vm._v(\" section from the documentation.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/menu/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/menu/template/menu-template.vue?vue&type=template&id=35886d3f& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.data.category)?_c('span',[_vm._v(\"\\n  \"+_vm._s(_vm.data.category)+\"\\n\")]):(_vm.data.value)?_c('div',{staticStyle:{\"width\":\"100%\",\"display\":\"flex\",\"justify-content\":\"space-between\"}},[(_vm.data.url)?_c('img',{staticClass:\"e-avatar e-avatar-small\",attrs:{\"src\":_vm.image}}):_vm._e(),_vm._v(\" \"),_c('span',{staticStyle:{\"width\":\"100%\"}},[_vm._v(_vm._s(_vm.data.value))]),_vm._v(\" \"),(_vm.data.count)?_c('span',{staticClass:\"e-badge e-badge-success\"},[_vm._v(_vm._s(_vm.data.count))]):_vm._e()]):_c('div',{staticClass:\"e-card\",attrs:{\"tabindex\":\"0\"}},[_vm._m(0),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content\"},[_vm._v(\"\\n        \"+_vm._s(_vm.data.about.value)+\"\\n    \")]),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"e-card-header\"},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"About Us\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"e-card-actions\"},[_c('button',{staticClass:\"e-btn e-outline\",staticStyle:{\"pointer-events\":\"auto\"}},[_vm._v(\"\\n            Read More\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/menu/template/menu-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });