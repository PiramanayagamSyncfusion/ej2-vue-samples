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
/******/ 		"bullet-chart/bar-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/bullet-chart/bar-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/bullet-chart/bar-customization/App.vue":
/*!********************************************************!*\
  !*** ./Samples/bullet-chart/bar-customization/App.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=713a737a&scoped=true& */ \"./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css& */ \"./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"713a737a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/bullet-chart/bar-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_713a737a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=713a737a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_713a737a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/bullet-chart/bar-customization/main.js":
/*!********************************************************!*\
  !*** ./Samples/bullet-chart/bar-customization/main.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/bullet-chart/bar-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\n#actualValue > *[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\n#targetValue > *[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\nlabel[data-v-713a737a] {\\n  height: 32px !important;\\n}\\n.property-text[data-v-713a737a] {\\n  font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n  font-size: 13px !important;\\n  font-weight: 400 !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-YPYCZ6ICKIFGKOUJZLBQV2O6FRFR7A44PRVKNO4Y5LFLMOPDSKQQ/Samples/bullet-chart/bar-customization/App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,uFAAuF;EACvF,2BAA2B;EAC3B,4BAA4B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&id=713a737a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\n#actualValue > *[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\n#targetValue > *[data-v-713a737a] {\\n  padding: 0px !important;\\n}\\nlabel[data-v-713a737a] {\\n  height: 32px !important;\\n}\\n.property-text[data-v-713a737a] {\\n  font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n  font-size: 13px !important;\\n  font-weight: 400 !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/bullet-chart/bar-customization/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BulletChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"ColorPickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))\n  .replace(/-dark/i, \"Dark\")\n  .replace(/light/i, \"Light\")\n  .replace(/contrast/i, \"Contrast\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      theme: theme,\n      tooltip: {\n        enable: true\n      },\n      data: [{ value: 270, target: 250 }],\n      animation: { enable: false },\n      minimum: 0,\n      maximum: 300,\n      interval: 50,\n      titleStyle: { textAlignment: \"Center\" },\n      titlePosition: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"Top\" : \"Left\",\n      sliderTooltip: { isVisible: true },\n      typeData: [\"Rect\", \"Dot\"],\n      colorValue: \"#000000\",\n      mode: \"Palette\",\n      value1: 270,\n      min: 0,\n      step: 10,\n      max: 300,\n      value2: 250,\n      type: \"MinRange\"\n    };\n  },\n\n  provide: {\n    bulletChart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BulletTooltip\"]]\n  },\n  methods: {\n    actualValueChange: function(args) {\n      this.$refs.bulletchart.ej2Instances.dataSource[0].value = args.value;\n      this.$refs.bulletchart.ej2Instances.refresh();\n    },\n    targetValueChange: function(args) {\n      this.$refs.bulletchart.ej2Instances.dataSource[0].target = args.value;\n      this.$refs.bulletchart.ej2Instances.refresh();\n    },\n    typeChange: function(args) {\n      this.$refs.bulletchart.ej2Instances.type = args.value;\n      this.$refs.bulletchart.ej2Instances.refresh();\n    },\n    colorChange1: function(args) {\n      this.$refs.bulletchart.ej2Instances.valueFill = args.currentValue.hex;\n      this.$refs.bulletchart.ej2Instances.refresh();\n    },\n    colorChange2: function(args) {\n      this.$refs.bulletchart.ej2Instances.targetColor = args.currentValue.hex;\n      this.$refs.bulletchart.ej2Instances.refresh();\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/bullet-chart/bar-customization/App.vue?vue&type=template&id=713a737a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-bulletchart',{ref:\"bulletchart\",attrs:{\"id\":\"targetbar\",\"theme\":_vm.theme,\"tooltip\":_vm.tooltip,\"dataSource\":_vm.data,\"valueField\":\"value\",\"targetField\":\"target\",\"animation\":_vm.animation,\"width\":_vm.width,\"minimum\":_vm.minimum,\"maximum\":_vm.maximum,\"interval\":_vm.interval,\"title\":\"New Customers\",\"subtitle\":\"in Thousands\",\"titlePosition\":_vm.titlePosition,\"titleStyle\":_vm.titleStyle}},[_c('e-bullet-range-collection',[_c('e-bullet-range',{attrs:{\"end\":\"150\"}}),_vm._v(\" \"),_c('e-bullet-range',{attrs:{\"end\":\"250\"}}),_vm._v(\" \"),_c('e-bullet-range',{attrs:{\"end\":\"300\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"col-md-4 property-section\"},[_c('div',{staticClass:\"property-panel-header\"},[_vm._v(\"Properties\")]),_vm._v(\" \"),_c('table',{staticStyle:{\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"title\":\"Properties\"}},[_c('tr',[_vm._m(0),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"40%\"}},[_c('ejs-slider',{attrs:{\"id\":\"actualValue\",\"value\":_vm.value1,\"min\":_vm.min,\"step\":_vm.step,\"max\":_vm.max,\"tooltip\":_vm.sliderTooltip,\"change\":_vm.actualValueChange}})],1)]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"40%\"}},[_c('ejs-slider',{attrs:{\"id\":\"targetValue\",\"value\":_vm.value2,\"min\":_vm.min,\"step\":_vm.step,\"max\":_vm.max,\"tooltip\":_vm.sliderTooltip,\"change\":_vm.targetValueChange}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(2),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"60%\"}},[_c('ejs-dropdownlist',{attrs:{\"id\":\"featureType\",\"change\":_vm.typeChange,\"dataSource\":_vm.typeData,\"index\":\"0\",\"width\":\"120\"}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(3),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"40%\"}},[_c('ejs-colorpicker',{attrs:{\"id\":\"barColor\",\"value\":_vm.colorValue,\"mode\":_vm.mode,\"change\":_vm.colorChange1}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(4),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"40%\"}},[_c('ejs-colorpicker',{attrs:{\"id\":\"targetColor\",\"value\":_vm.colorValue,\"mode\":_vm.mode,\"change\":_vm.colorChange2}})],1)])])]),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',{staticClass:\"prop-text\"},[_vm._v(\"Actual Value:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',{staticClass:\"prop-text\"},[_vm._v(\"Target Value:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"40%\"}},[_c('div',[_vm._v(\"Feature Bar Type:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',[_vm._v(\"Feature Bar Color:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',[_vm._v(\"Target Color:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample illustrates a customization of feature bar and comparative bar type in terms of color and width.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Tooltip is enabled in this example, to see the tooltip in action, hover a feature bar or comparative bar on the bullet chart.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/bullet-chart/bar-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });