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
/******/ 		"rich-text-editor/paste-cleanup/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/paste-cleanup/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/paste-cleanup/App.vue":
/*!********************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/App.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3f0ecb9d&scoped=true& */ \"./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css& */ \"./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3f0ecb9d\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/paste-cleanup/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3f0ecb9d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3f0ecb9d&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3f0ecb9d_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/paste-cleanup/data-source.json":
/*!*****************************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/data-source.json ***!
  \*****************************************************************/
/*! exports provided: formatData, saveFormat, enterData, shiftEnterData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}],\\\"enterData\\\":[{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"}],\\\"shiftEnterData\\\":[{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/paste-cleanup/main.js":
/*!********************************************************!*\
  !*** ./Samples/rich-text-editor/paste-cleanup/main.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/paste-cleanup/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control_wrapper[data-v-3f0ecb9d] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-3f0ecb9d] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-N3DMRJFTGMDOQHUK5D3TTEQIIZVZ4HAU46IUKQUA4R4A7BR67LFA/Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,qBAAqB;IACrB,mBAAmB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=3f0ecb9d&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control_wrapper[data-v-3f0ecb9d] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-3f0ecb9d] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/paste-cleanup/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/paste-cleanup/data-source.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"TextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            pasteCleanupSettings: {\n                prompt: true,\n                plainText: false,\n                keepFormat: false\n            },\n            height: '200px',\n            formatData: _data_source_json__WEBPACK_IMPORTED_MODULE_5__[\"formatData\"],\n            fields: { text: 'format', value: 'Id' }, \n            value: 'prompt'\n        };\n    },\n    methods: {\n        formatChange: function() {\n            if (this.$refs.formatOptionInstance.ej2Instances.value === 'prompt') {\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = true;\n            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'plainTextFormatting') {\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = true;\n            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'keepFormating') {\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = false;\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.keepFormat = true;\n            } else if (this.$refs.formatOptionInstance.ej2Instances.value === 'cleanFormatting') {\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.prompt = false;\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.plainText = false;\n                this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.keepFormat = false;\n            }\n        },\n        deniedTagChange: function() {\n            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.deniedTags = (eval)('[' + this.$refs.deniedTagsInstance.ej2Instances.value + ']');\n        },\n        deniedAttrsChange: function() {\n            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.deniedAttrs = (eval)('[' + this.$refs.deniedAttributesInstance.ej2Instances.value + ']');\n        },\n        allowStyleChange: function() {\n            this.$refs.rteInstance.ej2Instances.pasteCleanupSettings.allowedStyleProps = (eval)('[' + this.$refs.allowedStylePropertiesInstance.ej2Instances.value + ']');\n        }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"PasteCleanup\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/paste-cleanup/App.vue?vue&type=template&id=3f0ecb9d&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\",staticStyle:{\"overflow\":\"hidden\"}},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"control-wrapper\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"default-section\"},[_c('ejs-richtexteditor',{ref:\"rteInstance\",attrs:{\"pasteCleanupSettings\":_vm.pasteCleanupSettings}},[_c('p',[_vm._v(\"Rich Text Editor is a WYSIWYG editing control that will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.\")]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Paste cleanup properties:\")])]),_vm._v(\" \"),_c('ul',[_c('li',[_c('p',[_vm._v(\"prompt - specifies whether to enable the prompt when pasting in Rich Text Editor.\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"plainText - specifies whether to paste as plain text or not in Rich Text Editor.\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"keepFormat- specifies whether to keep or remove the format when pasting in Rich Text Editor.\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"deniedTags - specifies the tags to restrict when pasting in Rich Text Editor.\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"deniedAttributes - specifies the attributes to restrict when pasting in Rich Text Editor.\")])]),_vm._v(\" \"),_c('li',[_c('p',[_vm._v(\"allowedStyleProperties - specifies the allowed style properties when pasting in Rich Text Editor.\")])])])])],1)])])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('div',{attrs:{\"title\":\"Properties\",\"id\":\"property\"}},[_c('table',{attrs:{\"title\":\"Properties\",\"id\":\"property\"}},[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{ref:\"formatOptionInstance\",attrs:{\"dataSource\":_vm.formatData,\"fields\":_vm.fields,\"popupHeight\":_vm.height,\"change\":_vm.formatChange,\"value\":_vm.value}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-textbox',{ref:\"deniedTagsInstance\",staticClass:\"e-input\",attrs:{\"type\":\"text\",\"placeholder\":\"'img[!href]', 'h1'\",\"blur\":_vm.deniedTagChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(2),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-textbox',{ref:\"deniedAttributesInstance\",staticClass:\"e-input\",attrs:{\"type\":\"text\",\"placeholder\":\"'id', 'title'\",\"blur\":_vm.deniedAttrsChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(3),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-textbox',{ref:\"allowedStylePropertiesInstance\",staticClass:\"e-input\",attrs:{\"type\":\"text\",\"placeholder\":\"'href', 'style'\",\"blur\":_vm.allowStyleChange}})],1)])])])])])]),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_vm._m(5)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Format Option \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Denied Tags \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Denied Attributes \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Allowed Style Properties \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This example demonstrates the paste cleanup feature of the Rich Text Editor control. Copy your content from MS Word or other website, and paste it within the editor to cleanup.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The Rich Text Editor allows to paste the HTML content from MS Word or other websites. The editor cleanup the pasted HTML content by considering the following items.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"The unformatted HTML element (MOS XML format) content to standard HTML elements.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"The MS Office prefixed style properties is converted to proper CSS style properties.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"The unwanted tags, CSS styles, and comments are removed from the copied content.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The following settings are available to cleanup the content in pasteCleanup settings property:\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Select any option in \"),_c('code',[_vm._v(\"Format Option\")]),_vm._v(\" drop down list for the paste content.\\n            \"),_c('ul',[_c('li',[_vm._v(\"Select the \"),_c('code',[_vm._v(\"Prompt\")]),_vm._v(\" option to invoke prompt dialog with paste options on pasting the content in editor.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Select the \"),_c('code',[_vm._v(\"Plain Text\")]),_vm._v(\" option to paste the content as plain text.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Select the \"),_c('code',[_vm._v(\"Keep Format\")]),_vm._v(\" option to keep the same format in the copied content.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Select the \"),_c('code',[_vm._v(\"Clean Format\")]),_vm._v(\" option to remove the style format in the copied content.\")])])]),_vm._v(\" \"),_c('li',[_vm._v(\"Fill the \"),_c('code',[_vm._v(\"denied tags\")]),_vm._v(\" text box to ignore the tags when pasting HTML content. For example:\\n            \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"['a[!href]']\")]),_vm._v(\" - paste the content by filtering anchor tags that don’t have the 'href' attribute.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"['a[href, target]']\")]),_vm._v(\" - paste the content by filtering anchor tags that have the 'href' and 'target' attributes.\")])])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('li',[_vm._v(\"Fill the \"),_c('code',[_vm._v(\"denied attributes\")]),_vm._v(\" to paste the content by filtering out these attributes from the content. For example:\\n            \"),_c('ul',[_c('code',[_vm._v(\"['id', 'title']\")]),_vm._v(\" - This will remove the attributes 'id' and 'title' from all tags.\\n            \")])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('li',[_vm._v(\"Fill the \"),_c('code',[_vm._v(\"allowed style properties\")]),_vm._v(\" to paste the content by accepting these style attributes and removing other attributes. For example:\\n            \"),_c('ul',[_c('code',[_vm._v(\"['color', 'margin']\")]),_vm._v(\" - This will allow only the style properties 'color' and 'margin' in each pasted element.\\n            \")])])]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Injecting Module\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The previous features were built as modules to be included in your application. For example, inject the \"),_c('code',[_vm._v(\"'PasteCleanup'\")]),_vm._v(\" module using \"),_c('code',[_vm._v(\"RichTextEditor.Inject (Toolbar, Link, Image, Count, HtmlEditor, PasteCleanup)\")]),_vm._v(\" to use the paste cleanup feature.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/paste-cleanup/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });