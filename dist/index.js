(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePanel"] = factory();
	else
		root["VuePanel"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/panel-bar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\n//\n//\n//\n//\n//\n\nvar resolveValue = __webpack_require__(/*! ../resolveAlias */ \"./src/resolveAlias.js\").value,\n    spec = __webpack_require__(/*! ../const/panel-bar */ \"./src/const/panel-bar.js\");\n\nmodule.exports = {\n\n  props: spec.props,\n\n  data: function () {\n    return {\n      style: {}\n    }\n  },\n\n  computed: {\n\n    parsedAlignItems: function () {\n      return resolveValue('align-items', this.$data.alignItems);\n    },\n\n    parsedJustifyContent: function () {\n      return resolveValue('align-items', this.$data.justify);\n    },\n\n    _style: function () {\n      return {\n        'align-items': this.parsedAlignItems,\n        'display': this.display,\n        'flex-basis': this.size,\n        'flex-direction': this.direction,\n        'flex-shrink': this.shrink,\n        'justify-content': this.parsedJustifyContent,\n      };\n    }\n\n  },\n\n  watch: {\n    direction: function () {\n      this.$broadcast('v-panel-bar:direction', this.direction);\n    }\n  }\n\n};\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-bar.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/panel-content.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel-content.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\n//\n//\n//\n//\n//\n\nvar spec = __webpack_require__(/*! ../const/panel-content */ \"./src/const/panel-content.js\");\n\nmodule.exports = {\n\n  props: spec.props,\n\n  data: function () {\n    return {\n      style: {}\n    }\n  },\n\n  computed: {\n    _style: function () {\n      return {\n        'flex': this.flex,\n        'flex-grow': this.grow,\n        'flex-shrink': this.shrink,\n        'flex-basis': this.basis\n      };\n    }\n  }\n\n};\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-content.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/panel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\n//\n//\n//\n//\n//\n\nvar resolveValue = __webpack_require__(/*! ../resolveAlias */ \"./src/resolveAlias.js\").value,\n    spec = __webpack_require__(/*! ../const/panel */ \"./src/const/panel.js\");\n\nmodule.exports = {\n\n  props: spec.props,\n\n  data: function () {\n    return {\n      style: {}\n    }\n  },\n\n  computed: {\n\n    parsedAlignSelf: function () {\n      return resolveValue('align-self', this.$data.alignSelf);\n    },\n\n    parsedAlignItems: function () {\n      return resolveValue('align-items', this.$data.alignItems);\n    },\n\n    parsedJustifyContent: function () {\n      return resolveValue('align-items', this.$data.justify);\n    },\n\n    _style: function () {\n      return {\n        'display': this.display,\n        'align-self': this.parsedAlignSelf,\n        'align-items': this.parsedAlignItems,\n        'justify-content': this.parsedJustifyContent,\n        'order': this.order,\n        'flex': this.flex,\n        'flex-grow': this.grow,\n        'flex-shrink': this.shrink,\n        'flex-basis': this.basis,\n        'flex-direction': this.direction\n      };\n    }\n  }\n\n};\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel-bar.vue?vue&type=template&id=01f0a82c&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel-bar.vue?vue&type=template&id=01f0a82c& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { class: _vm.className, style: [_vm._style, _vm.style] },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-bar.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel-content.vue?vue&type=template&id=133349d0&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel-content.vue?vue&type=template&id=133349d0& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { class: _vm.className, style: [_vm._style, _vm.style] },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-content.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel.vue?vue&type=template&id=1ef73424&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/panel.vue?vue&type=template&id=1ef73424& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { class: _vm.className, style: [_vm._style, _vm.style] },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VuePanel/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = [\r\n  {\r\n    name: 'v-panel-bar',\r\n    module: __webpack_require__(/*! ./panel-bar.vue */ \"./src/components/panel-bar.vue\")\r\n  },\r\n  {\r\n    name: 'v-panel-content',\r\n    module: __webpack_require__(/*! ./panel-content.vue */ \"./src/components/panel-content.vue\")\r\n  },\r\n  {\r\n    name: 'v-panel',\r\n    module: __webpack_require__(/*! ./panel.vue */ \"./src/components/panel.vue\")\r\n  }\r\n];\n\n//# sourceURL=webpack://VuePanel/./src/components/index.js?");

/***/ }),

/***/ "./src/components/panel-bar.vue":
/*!**************************************!*\
  !*** ./src/components/panel-bar.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-bar.vue?vue&type=template&id=01f0a82c& */ \"./src/components/panel-bar.vue?vue&type=template&id=01f0a82c&\");\n/* harmony import */ var _panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-bar.vue?vue&type=script&lang=js& */ \"./src/components/panel-bar.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/panel-bar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-bar.vue?");

/***/ }),

/***/ "./src/components/panel-bar.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/panel-bar.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./panel-bar.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/panel-bar.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://VuePanel/./src/components/panel-bar.vue?");

/***/ }),

/***/ "./src/components/panel-bar.vue?vue&type=template&id=01f0a82c&":
/*!*********************************************************************!*\
  !*** ./src/components/panel-bar.vue?vue&type=template&id=01f0a82c& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./panel-bar.vue?vue&type=template&id=01f0a82c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel-bar.vue?vue&type=template&id=01f0a82c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_bar_vue_vue_type_template_id_01f0a82c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-bar.vue?");

/***/ }),

/***/ "./src/components/panel-content.vue":
/*!******************************************!*\
  !*** ./src/components/panel-content.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-content.vue?vue&type=template&id=133349d0& */ \"./src/components/panel-content.vue?vue&type=template&id=133349d0&\");\n/* harmony import */ var _panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-content.vue?vue&type=script&lang=js& */ \"./src/components/panel-content.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/panel-content.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-content.vue?");

/***/ }),

/***/ "./src/components/panel-content.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/panel-content.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./panel-content.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/panel-content.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://VuePanel/./src/components/panel-content.vue?");

/***/ }),

/***/ "./src/components/panel-content.vue?vue&type=template&id=133349d0&":
/*!*************************************************************************!*\
  !*** ./src/components/panel-content.vue?vue&type=template&id=133349d0& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./panel-content.vue?vue&type=template&id=133349d0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel-content.vue?vue&type=template&id=133349d0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_content_vue_vue_type_template_id_133349d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel-content.vue?");

/***/ }),

/***/ "./src/components/panel.vue":
/*!**********************************!*\
  !*** ./src/components/panel.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.vue?vue&type=template&id=1ef73424& */ \"./src/components/panel.vue?vue&type=template&id=1ef73424&\");\n/* harmony import */ var _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.vue?vue&type=script&lang=js& */ \"./src/components/panel.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/panel.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VuePanel/./src/components/panel.vue?");

/***/ }),

/***/ "./src/components/panel.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/panel.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/panel.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://VuePanel/./src/components/panel.vue?");

/***/ }),

/***/ "./src/components/panel.vue?vue&type=template&id=1ef73424&":
/*!*****************************************************************!*\
  !*** ./src/components/panel.vue?vue&type=template&id=1ef73424& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=template&id=1ef73424& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/panel.vue?vue&type=template&id=1ef73424&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_1ef73424___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VuePanel/./src/components/panel.vue?");

/***/ }),

/***/ "./src/const/panel-bar.js":
/*!********************************!*\
  !*** ./src/const/panel-bar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var resolveAlias = __webpack_require__(/*! ../resolveAlias */ \"./src/resolveAlias.js\");\r\n\r\nvar spec = {    \r\n  props: {\r\n    alignItems: {\r\n      type: String,\r\n      default: 'stretch'\r\n    },\r\n    direction: {\r\n      type: String,\r\n      default: 'row'\r\n    },\r\n    display: {\r\n      type: String,\r\n      default: 'flex'\r\n    },\r\n    justify: String,\r\n    shrink: {\r\n      type: String,\r\n      default: 0\r\n    },\r\n    size: {\r\n      type: String,\r\n      default: '30px'\r\n    }\r\n  }\r\n};\r\n\r\nspec.params = Object.keys(spec.props);\r\nspec.defaults = spec.params.reduce(function (a, x) {\r\n  var def = spec.props[x].default;\r\n  if (def)\r\n    a[x] = def; \r\n  return a;\r\n}, {});\r\n\r\nmodule.exports = spec;\n\n//# sourceURL=webpack://VuePanel/./src/const/panel-bar.js?");

/***/ }),

/***/ "./src/const/panel-content.js":
/*!************************************!*\
  !*** ./src/const/panel-content.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var spec = {\r\n  props: {\r\n    flex: String,\r\n    grow: {\r\n      type: String,\r\n      default: 1\r\n    },\r\n    shrink: String,\r\n    basis: {\r\n      default: 0\r\n    }\r\n  }\r\n};\r\n\r\nspec.params = Object.keys(spec.props);\r\nspec.defaults = spec.params.reduce(function (a, x) {\r\n  var def = spec.props[x].default;\r\n  if (def)\r\n    a[x] = def; \r\n  return a;\r\n}, {});\r\n\r\nmodule.exports = spec;\n\n//# sourceURL=webpack://VuePanel/./src/const/panel-content.js?");

/***/ }),

/***/ "./src/const/panel.js":
/*!****************************!*\
  !*** ./src/const/panel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var resolveAlias = __webpack_require__(/*! ../resolveAlias */ \"./src/resolveAlias.js\");\r\n\r\nvar spec = {    \r\n  props: {\r\n    alignItems: String,\r\n    alignSelf: String,\r\n    basis: null,\r\n    direction: String,\r\n    display: {\r\n      type: String,\r\n      default: 'flex'\r\n    },\r\n    flex: String,\r\n    grow: String,\r\n    justify: String,\r\n    order: String,\r\n    shrink: String\r\n  }\r\n};\r\n\r\nspec.params = Object.keys(spec.props);\r\nspec.defaults = spec.params.reduce(function (a, x) {\r\n  var def = spec.props[x] && spec.props[x].default;\r\n  if (def)\r\n    a[x] = def; \r\n  return a;\r\n}, {});\r\n\r\nmodule.exports = spec;\n\n//# sourceURL=webpack://VuePanel/./src/const/panel.js?");

/***/ }),

/***/ "./src/directives/directive.js":
/*!*************************************!*\
  !*** ./src/directives/directive.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var applyStyleSingle = __webpack_require__(/*! ../util */ \"./src/util.js\").applyStyleSingle,\r\n    resolveAlias = __webpack_require__(/*! ../resolveAlias */ \"./src/resolveAlias.js\"),\r\n    spec = __webpack_require__(/*! ../const/panel-bar */ \"./src/const/panel-bar.js\");\r\n    \r\nfunction buildParamWatchers(params) {\r\n  return params.reduce(function (a, x) {\r\n    a[x] = function (val) {\r\n      applyStyleSingle(this.el, resolveAlias.property(x), val);\r\n    };\r\n    return a;\r\n  }, Object.create(null));\r\n}\r\n\r\nmodule.exports = function (spec) {\r\n  return {\r\n    params: spec.params,\r\n\r\n    bind: function () {\r\n      var _this = this;\r\n      var params = Object.keys(this.params);\r\n\r\n      for (var prop in spec.defaults) {\r\n        this.el.style.setProperty(\r\n          resolveAlias.property(prop),\r\n          resolveAlias.value(prop, spec.defaults[prop])\r\n        );\r\n      } \r\n\r\n      for (var watcher in this.paramWatchers) {\r\n        this.paramWatchers[watcher] = this.paramWatchers[watcher].bind(this);\r\n      }\r\n\r\n      params.forEach(function (param) {\r\n        _this.paramWatchers[param](_this.params[param]);\r\n      });\r\n    },\r\n\r\n    paramWatchers: buildParamWatchers(spec.params)\r\n  };\r\n};\n\n//# sourceURL=webpack://VuePanel/./src/directives/directive.js?");

/***/ }),

/***/ "./src/directives/index.js":
/*!*********************************!*\
  !*** ./src/directives/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var directive = __webpack_require__(/*! ./directive */ \"./src/directives/directive.js\");\r\n\r\nmodule.exports = [\r\n  {\r\n    name: 'panel',\r\n    module: directive(__webpack_require__(/*! ../const/panel */ \"./src/const/panel.js\")) \r\n  },\r\n  {\r\n    name: 'panel-bar',\r\n    module: directive(__webpack_require__(/*! ../const/panel-bar */ \"./src/const/panel-bar.js\"))\r\n  },\r\n  {\r\n    name: 'panel-content',\r\n    module: directive(__webpack_require__(/*! ../const/panel-content */ \"./src/const/panel-content.js\"))\r\n  }\r\n];\n\n//# sourceURL=webpack://VuePanel/./src/directives/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var components = __webpack_require__(/*! ./components */ \"./src/components/index.js\"),\r\n    directives = __webpack_require__(/*! ./directives */ \"./src/directives/index.js\");\r\n\r\nmodule.exports = {\r\n\r\n  install: function (Vue, options) {\r\n    var component;\r\n\r\n    options = options || {};\r\n\r\n    components.forEach(function (spec) {\r\n      var component = spec.module;\r\n\r\n      component.mixins = component.mixins || [];\r\n\r\n      component.mixins.push({\r\n        data: function () {\r\n          return Object.assign({}, options[spec.name] || options[Vue.util.camelize(spec.name)]);\r\n        }\r\n      });\r\n\r\n      Vue.component(spec.name, component);\r\n    });\r\n\r\n    directives.forEach(function (spec) {\r\n      Vue.directive(spec.name, spec.module);\r\n    });\r\n  }\r\n\r\n};\r\n\n\n//# sourceURL=webpack://VuePanel/./src/main.js?");

/***/ }),

/***/ "./src/resolveAlias.js":
/*!*****************************!*\
  !*** ./src/resolveAlias.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var commonValueAliases = {\r\n  'flex-start': ['start'],\r\n  'flex-end': ['end']\r\n};\r\n\r\nvar valueAliases = {\r\n  'align-items': commonValueAliases,\r\n  'align-self': commonValueAliases,\r\n  'justify-content': commonValueAliases\r\n};\r\n\r\nvar propertyAliases = {\r\n  'flex-grow': ['grow'],\r\n  'flex-shrink': ['shrink'],\r\n  'flex-basis': ['basis', 'size'],\r\n  'align-items': ['alignItems'],\r\n  'align-self': ['alignSelf'],\r\n  'flex-direction': ['direction'],\r\n  'justify-content': ['justify']\r\n};\r\n\r\nfunction resolvePropertyAlias(name) {\r\n  for (var prop in propertyAliases) {\r\n    if (propertyAliases[prop].indexOf(name) > -1) {\r\n      return prop;\r\n    }\r\n  }\r\n  return name;\r\n}\r\n\r\nfunction resolveValueAlias(name, value) {\r\n  var spec = valueAliases[name],\r\n      arr, i;\r\n\r\n  for (var prop in spec) {\r\n    arr = spec[prop];\r\n    for (i = arr.length - 1; i >= 0; i--) {\r\n      if (value == arr[i]) return prop;\r\n    }\r\n  }\r\n\r\n  return value;\r\n};\r\n\r\nmodule.exports = {\r\n  property: resolvePropertyAlias,\r\n  value: resolveValueAlias\r\n};\n\n//# sourceURL=webpack://VuePanel/./src/resolveAlias.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const prefixes = ['-webkit-', '-moz-', '-ms-']\r\nconst camelPrefixes = ['Webkit', 'Moz', 'ms']\r\nconst importantRE = /!important;?$/\r\nconst propCache = Object.create(null);\r\nconst camelizeRE = /-(\\w)/g;\r\nconst hyphenateRE = /([a-z\\d])([A-Z])/g;\r\n\r\nvar testEl;\r\n\r\nfunction toUpper (_, c) {\r\n  return c ? c.toUpperCase() : '';\r\n}\r\n\r\nfunction camelize (str) {\r\n  return str.replace(camelizeRE, toUpper);\r\n}\r\n\r\nfunction hyphenate (str) {\r\n  return str\r\n    .replace(hyphenateRE, '$1-$2')\r\n    .toLowerCase();\r\n}\r\n\r\nfunction normalize (prop) {\r\n  if (propCache[prop]) {\r\n    return propCache[prop];\r\n  }\r\n  var res = prefix(prop);\r\n  propCache[prop] = propCache[res] = res;\r\n  return res;\r\n}\r\n\r\nfunction prefix (prop) {\r\n  prop = hyphenate(prop);\r\n  var camel = camelize(prop);\r\n  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);\r\n  if (!testEl) {\r\n    testEl = document.createElement('div');\r\n  }\r\n  if (camel in testEl.style) {\r\n    return prop;\r\n  }\r\n  var i = prefixes.length;\r\n  var prefixed;\r\n  while (i--) {\r\n    prefixed = camelPrefixes[i] + upper;\r\n    if (prefixed in testEl.style) {\r\n      return prefixes[i] + prop;\r\n    }\r\n  }\r\n}\r\n\r\nfunction handleSingle (el, prop, value) {\r\n  prop = normalize(prop);\r\n  if (!prop) return;\r\n  if (value != null) value += '';\r\n  if (value) {\r\n    var isImportant = importantRE.test(value)\r\n      ? 'important'\r\n      : '';\r\n    if (isImportant) {\r\n      value = value.replace(importantRE, '').trim();\r\n    }\r\n    el.style.setProperty(prop, value, isImportant);\r\n  } else {\r\n    el.style.removeProperty(prop);\r\n  }\r\n}\r\n\r\nmodule.exports = {\r\n\tprefix: prefix,\r\n\tnormalize: normalize,\r\n\tapplyStyleSingle: handleSingle\r\n};\n\n//# sourceURL=webpack://VuePanel/./src/util.js?");

/***/ })

/******/ });
});