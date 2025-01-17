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
/******/ 		"chart/strip-line/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/strip-line/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/strip-line/App.vue":
/*!******************************************!*\
  !*** ./Samples/chart/strip-line/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4c2916c0&scoped=true& */ \"./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/strip-line/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css& */ \"./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4c2916c0\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/strip-line/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/strip-line/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/chart/strip-line/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4c2916c0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4c2916c0&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4c2916c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/strip-line/main.js":
/*!******************************************!*\
  !*** ./Samples/chart/strip-line/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/strip-line/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-4c2916c0] {\\n  padding: 0px !important;\\n}\\n#winter stop[data-v-4c2916c0] {\\n  stop-color: #4ca1af;\\n}\\n#winter stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #c4e0e5;\\n}\\n#winter stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #4ca1af;\\n}\\n#summer stop[data-v-4c2916c0] {\\n  stop-color: #ffa751;\\n}\\n#summer stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #ffe259;\\n}\\n#summer stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #ffa751;\\n}\\n#spring stop[data-v-4c2916c0] {\\n  stop-color: #1d976c;\\n}\\n#spring stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #93f9b9;\\n}\\n#spring stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #1d976c;\\n}\\n#autumn stop[data-v-4c2916c0] {\\n  stop-color: #603813;\\n}\\n#autumn stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #b29f94;\\n}\\n#autumn stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #603813;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-YPYCZ6ICKIFGKOUJZLBQV2O6FRFR7A44PRVKNO4Y5LFLMOPDSKQQ/Samples/chart/strip-line/App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=4c2916c0&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-4c2916c0] {\\n  padding: 0px !important;\\n}\\n#winter stop[data-v-4c2916c0] {\\n  stop-color: #4ca1af;\\n}\\n#winter stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #c4e0e5;\\n}\\n#winter stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #4ca1af;\\n}\\n#summer stop[data-v-4c2916c0] {\\n  stop-color: #ffa751;\\n}\\n#summer stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #ffe259;\\n}\\n#summer stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #ffa751;\\n}\\n#spring stop[data-v-4c2916c0] {\\n  stop-color: #1d976c;\\n}\\n#spring stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #93f9b9;\\n}\\n#spring stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #1d976c;\\n}\\n#autumn stop[data-v-4c2916c0] {\\n  stop-color: #603813;\\n}\\n#autumn stop[offset=\\\"0\\\"][data-v-4c2916c0] {\\n  stop-color: #b29f94;\\n}\\n#autumn stop[offset=\\\"1\\\"][data-v-4c2916c0] {\\n  stop-color: #603813;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/strip-line/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ChartPlugin\"]);\n\nlet fontSize = _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"14px\" : \"18px\";\nlet xAxisStripLine = [\n  {\n    start: -1,\n    end: 1.5,\n    text: \"Winter\",\n    color: \"url(#winter)\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: -90,\n    visible: true\n  },\n  {\n    start: 1.5,\n    end: 3.5,\n    text: \"Summer\",\n    color: \"url(#summer)\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: -90,\n    visible: true\n  },\n  {\n    start: 3.5,\n    end: 4.5,\n    text: \"Spring\",\n    color: \"url(#spring)\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: -90,\n    visible: true\n  },\n  {\n    start: 4.5,\n    end: 5.5,\n    text: \"Autumn\",\n    color: \"url(#autumn)\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: -90,\n    visible: true\n  },\n  {\n    start: 5.5,\n    end: 7,\n    text: \"Winter\",\n    color: \"url(#winter)\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: -90,\n    visible: true\n  },\n  {\n    startFromAxis: true,\n    size: 2,\n    isSegmented: true,\n    segmentStart: 22.5,\n    text: \"Average Temperature\",\n    segmentEnd: 27.5,\n    visible: false,\n    color: \"#fc902a\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: 0\n  },\n  {\n    start: 3.5,\n    size: 3,\n    isSegmented: true,\n    segmentStart: 22.5,\n    text: \"Average Temperature\",\n    segmentEnd: 27.5,\n    visible: false,\n    color: \"#fc902a\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: 0\n  },\n  {\n    start: 1.5,\n    size: 2,\n    isSegmented: true,\n    segmentStart: 32.5,\n    text: \"High Temperature\",\n    segmentEnd: 37.5,\n    visible: false,\n    color: \"#ff512f\",\n    textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n    border: { width: 0 },\n    rotation: 0\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      seriesData: [\n        { x: \"Sun\", y: 25 },\n        { x: \"Mon\", y: 27 },\n        { x: \"Tue\", y: 33 },\n        { x: \"Wed\", y: 36 },\n        { x: \"Thu\", y: 26 },\n        { x: \"Fri\", y: 27.5 },\n        { x: \"Sat\", y: 23 }\n      ],\n      fill:'#ffffff',\n      stripdata: [\"Vertical\", \"Horizontal\", \"Segment\"],\n      stripwidth: 120,\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: \"Category\",\n        majorGridLines: { width: 0 },\n        //Initializing Striplines\n        stripLines: xAxisStripLine\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        minimum: 10,\n        maximum: 40,\n        interval: 5,\n        lineStyle: { color: \"#808080\" },\n        labelFormat: \"{value} °C\",\n        rangePadding: \"None\",\n        //Initializing Striplines\n        stripLines: [\n          {\n            start: 30,\n            end: 40,\n            text: \"High Temperature\",\n            color: \"#ff512f\",\n            visible: false,\n            textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n            border: { width: 0 }\n          },\n          {\n            start: 20,\n            end: 30,\n            text: \"Average Temperature\",\n            color: \"#fc902a\",\n            visible: false,\n            textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n            border: { width: 0 }\n          },\n          {\n            start: 10,\n            end: 20,\n            text: \"Low Temperature\",\n            visible: false,\n            textStyle: { size: fontSize, color: \"#ffffff\", fontWeight: \"600\" },\n            border: { width: 0 },\n            color: \"#f9d423\"\n          }\n        ]\n      },\n\n      legendSettings: { visible: false },\n\n      tooltip: { enable: true },\n\n      marker: {\n        visible: true,\n        width: 10,\n        height: 10,\n        border: { width: 2, color: \"#ffffff\" },\n        fill: \"#666666\"\n      },\n      width: \"100%\",\n      title: \"Weather Report\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"LineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"StripLine\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n      this.$refs.chart.ej2Instances.refresh();\n    });\n  },\n  methods: {\n    stripChange: function(args) {\n      let mode = document.getElementById(\"selmode\").value;\n      let primaryYAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryYAxis);\n      let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.primaryXAxis);\n      let marker = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.marker);\n      let fill = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({}, this.fill);\n      fill = \"white\";\n      marker.fill = 'black';\n      marker.border.color ='white';\n      for (let i = 0; i < 3; i++) {\n        primaryYAxis.stripLines[i].visible = false;\n      }\n      if (mode === \"Vertical\") {\n        for (let i = 0; i <= 4; i++) {\n          primaryXAxis.stripLines[i].visible = true;\n        }\n        for (let i = 5; i <= 7; i++) {\n          primaryXAxis.stripLines[i].visible = false;\n        }\n      } else if (mode === 'Horizontal') {\n        for (let i = 0; i < 3; i++) {\n          primaryYAxis.stripLines[i].visible = true;\n        }\n        for (let i = 0; i <= 7; i++) {\n          primaryXAxis.stripLines[i].visible = false;\n        }\n      } else {\n        for (let i = 0; i <= 7; i++) {\n          primaryXAxis.stripLines[i].visible = false;\n        }\n        for (let i = 5; i <= 7; i++) {\n          primaryXAxis.stripLines[i].visible = true;\n        }\n        marker.fill = 'white';\n        marker.border.color ='black';\n        fill = 'black';\n      }\n      this.marker = marker;\n      this.fill = fill;\n      this.primaryYAxis = primaryYAxis;\n      this.primaryXAxis = primaryXAxis;\n    },\n    load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n      selectedTheme = selectedTheme ? selectedTheme : 'Material';\n      args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/strip-line/App.vue?vue&type=template&id=4c2916c0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"load\":_vm.load,\"align\":\"center\",\"id\":\"chartcontainer\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"width\":_vm.width,\"tooltip\":_vm.tooltip,\"legendSettings\":_vm.legendSettings}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Line\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Weather\",\"marker\":_vm.marker,\"fill\":_vm.fill}})],1)],1)],1),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-md-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('br'),_c('br'),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"selmode\",\"change\":_vm.stripChange,\"dataSource\":_vm.stripdata,\"index\":\"0\",\"width\":_vm.stripwidth}})],1)])])])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_c('svg',{staticStyle:{\"height\":\"0\"}},[_c('defs',[_c('linearGradient',{attrs:{\"id\":\"winter\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{attrs:{\"id\":\"summer\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{attrs:{\"id\":\"spring\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{attrs:{\"id\":\"autumn\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1)],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"StripLine Types\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample highlights certain range in an axis by using stripline feature.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render and configure the stripline charts. You can use stripline by enable the\\n        \"),_c('code',[_vm._v(\"visible\")]),_vm._v(\" property. Striplines are rendered in the specified\\n        \"),_c('code',[_vm._v(\"start\")]),_vm._v(\" and\\n        \"),_c('code',[_vm._v(\"end\")]),_vm._v(\" range and you can add more than one stripline for an axis.\\n\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        Chart component features are segregated into individual feature-wise modules. To use strip line, we need to inject\\n        \"),_c('code',[_vm._v(\"StripLine\")]),_vm._v(\" module using\\n        \"),_c('code',[_vm._v(\"Chart.Inject(StripLine)\")]),_vm._v(\" method.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information on the strip line can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/strip-line/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });