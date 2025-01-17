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
/******/ 		"schedule/year/main": 0
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
/******/ 	deferredModules.push(["./Samples/schedule/year/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/schedule/year/App.vue":
/*!***************************************!*\
  !*** ./Samples/schedule/year/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=34c3323a& */ \"./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/schedule/year/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/schedule/year/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&":
/*!**********************************************************************!*\
  !*** ./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=34c3323a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_34c3323a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?");

/***/ }),

/***/ "./Samples/schedule/year/main.js":
/*!***************************************!*\
  !*** ./Samples/schedule/year/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/schedule/year/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.year-view.e-schedule .e-timeline-year-view .e-resource-column-table,\\n.year-view.e-schedule .e-timeline-year-view .e-resource-left-td {\\n  width: 120px;\\n}\\n.year-property-panel td {\\n  padding-bottom: 1rem;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-ZO73A2NVGTRKXV4VOCPYTT5DRH723N5LRVOMZ25F6MDAXYLULLLA/Samples/schedule/year/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;EAEE,aAAa;CACd;AACD;EACE,qBAAqB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.year-view.e-schedule .e-timeline-year-view .e-resource-column-table,\\n.year-view.e-schedule .e-timeline-year-view .e-resource-left-td {\\n  width: 120px;\\n}\\n.year-property-panel td {\\n  padding-bottom: 1rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"SchedulePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"NumericTextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      eventSettings: {\n        dataSource: this.generateEvents()\n      },\n      categoriesData: [\n        { text: \"Nancy\", id: 1, color: \"#df5286\" },\n        { text: \"Steven\", id: 2, color: \"#7fa900\" },\n        { text: \"Robert\", id: 3, color: \"#ea7a57\" },\n        { text: \"Smith\", id: 4, color: \"#5978ee\" },\n        { text: \"Michael\", id: 5, color: \"#df5286\" }\n      ],\n      groupSettings: { resources: [\"Categories\"] },\n      months: [\n        { text: 'January', value: 0 },\n        { text: 'February', value: 1 },\n        { text: 'March', value: 2 },\n        { text: 'April', value: 3 },\n        { text: 'May', value: 4 },\n        { text: 'June', value: 5 },\n        { text: 'July', value: 6 },\n        { text: 'August', value: 7 },\n        { text: 'September', value: 8 },\n        { text: 'October', value: 9 },\n        { text: 'November', value: 10 },\n        { text: 'December', value: 11 }\n      ],\n      fields: { text: 'text', value: 'value' },\n      firstMonthValue: 0,\n      monthsCount: 12,\n      min: 1,\n      max: 24,\n    };\n  },\n  provide: {\n    schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Year\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"TimelineYear\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Resize\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"DragAndDrop\"]]\n  },\n  methods: {\n    onEventRendered: function(args) {\n      let eventColor = args.data.EventColor;\n      if (!args.element || !eventColor) {\n        return;\n      }\n      args.element.style.backgroundColor = eventColor;\n    },\n    firstMonthOfYear: function(args) {\n      this.$refs.ScheduleObj.ej2Instances.firstMonthOfYear = args.value;\n    },\n    numberOfMonths: function(args) {\n      this.$refs.ScheduleObj.ej2Instances.monthsCount = args.value;\n    },\n    generateEvents(count = 250, date = new Date()) {\n      const names = [\n        \"Bering Sea Gold\", \"Technology\", \"Maintenance\", \"Meeting\", \"Travelling\", \"Annual Conference\",\n        \"Birthday Celebration\", \"Farewell Celebration\", \"Wedding Anniversary\", \"Alaska: The Last Frontier\",\n        \"Deadliest Catch\", \"Sports Day\", \"MoonShiners\", \"Close Encounters\", \"HighWay Thru Hell\", \"Daily Planet\",\n        \"Cash Cab\", \"Basketball Practice\", \"Rugby Match\", \"Guitar Class\", \"Music Lessons\", \"Doctor checkup\",\n        \"Brazil - Mexico\", \"Opening ceremony\", \"Final presentation\"\n      ];\n      const colors = [\n        \"#ff8787\", \"#9775fa\", \"#748ffc\", \"#3bc9db\", \"#69db7c\", \"#fdd835\", \"#748ffc\", \n        \"#9775fa\", \"#df5286\", \"#7fa900\", \"#fec200\", \"#5978ee\", \"#00bdae\", \"#ea80fc\"\n      ];\n      const startDate = new Date(date.getFullYear() - 2, 0, 1);\n      const endDate = new Date(date.getFullYear() + 2, 11, 31);\n      const dateCollections = [];\n      for (let a = 0, id = 1; a < count; a++) {\n        const start = new Date(Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime());\n        const end = new Date(new Date(start.getTime()).setHours(start.getHours() + 1));\n        const nCount = Math.floor(Math.random() * names.length);\n        const n = Math.floor(Math.random() * colors.length);\n        dateCollections.push({\n          Id: id,\n          Subject: names[nCount],\n          StartTime: new Date(start.getTime()),\n          EndTime: new Date(end.getTime()),\n          IsAllDay: id % 10 ? true : false,\n          EventColor: colors[n],\n          TaskId: (id % 5) + 1\n        });\n        id++;\n      }\n      return dateCollections;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/year/App.vue?vue&type=template&id=34c3323a& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"schedule-vue-sample\"},[_c('div',{staticClass:\"col-md-9 control-section\"},[_c('div',{staticClass:\"content-wrapper\"},[_c('ejs-schedule',{ref:\"ScheduleObj\",attrs:{\"id\":\"Schedule\",\"cssClass\":\"year-view\",\"height\":\"650px\",\"firstMonthOfYear\":_vm.firstMonthValue,\"monthsCount\":_vm.monthsCount,\"eventSettings\":_vm.eventSettings,\"eventRendered\":_vm.onEventRendered}},[_c('e-views',[_c('e-view',{attrs:{\"option\":\"Year\",\"isSelected\":\"true\"}}),_vm._v(\" \"),_c('e-view',{attrs:{\"option\":\"TimelineYear\",\"displayName\":\"Horizontal TimelineYear\"}}),_vm._v(\" \"),_c('e-view',{attrs:{\"option\":\"TimelineYear\",\"displayName\":\"Vertical TimelineYear\",\"orientation\":\"Vertical\",\"group\":_vm.groupSettings}})],1),_vm._v(\" \"),_c('e-resources',[_c('e-resource',{attrs:{\"field\":\"TaskId\",\"title\":\"Category\",\"name\":\"Categories\",\"allowMultiple\":\"true\",\"dataSource\":_vm.categoriesData,\"textField\":\"text\",\"idField\":\"id\",\"colorField\":\"color\"}})],1)],1)],1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 property-section\"},[_c('table',{staticClass:\"year-property-panel\",attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',[_c('td',[_c('ejs-dropdownlist',{attrs:{\"id\":\"firstMonthElement\",\"placeholder\":\"First month of year\",\"floatLabelType\":\"Always\",\"dataSource\":_vm.months,\"value\":_vm.firstMonthValue,\"fields\":_vm.fields,\"change\":_vm.firstMonthOfYear}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',[_c('ejs-numerictextbox',{attrs:{\"id\":\"numberOfMonthsElement\",\"placeholder\":\"Number of months\",\"floatLabelType\":\"Always\",\"min\":_vm.min,\"max\":_vm.max,\"value\":_vm.monthsCount,\"format\":\"###.##\",\"change\":_vm.numberOfMonths}})],1)])])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This example showcases the year and timeline year views of the Scheduler with the firstMonthOfYear and monthCount properties customizations.\\n      Once the property value has been changed in the properties, it will be reflected in the Scheduler.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this demo, we have showcased the\\n      \"),_c('code',[_vm._v(\"Year\")]),_vm._v(\" and\\n      \"),_c('code',[_vm._v(\"TimelineYear\")]),_vm._v(\" views that help to view the appointment in an annual calendar view. The view options are enabled by using the views property.\\n      In the\\n      \"),_c('code',[_vm._v(\"TimelineYear\")]),_vm._v(\",\\n      \"),_c('code',[_vm._v(\"Horizontal\")]),_vm._v(\" and\\n      \"),_c('code',[_vm._v(\"Vertical\")]),_vm._v(\" orientations are available to view the events with a different layout. Also this demo explains the customization of the different\\n      starting month of the year using \"),_c('code',[_vm._v(\"firstMonthOfYear\")]),_vm._v(\" property and the number of months using the \"),_c('code',[_vm._v(\"monthsCount\")]),_vm._v(\" property.\\n    \")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Module Injection\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      To work with Year and TimelineYear views on Scheduler – it is necessary to inject the\\n      \"),_c('code',[_vm._v(\"Year\")]),_vm._v(\" and\\n      \"),_c('code',[_vm._v(\"TimelineYear\")]),_vm._v(\" module into the\\n      \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/schedule/year/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });