/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"header, footer, .main-wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  height: 100vh;\\n}\\n\\nbody {\\n  background-color: #d3ab55;\\n}\\n\\n.main-wrapper {\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n.main-wrapper .form-wrapper {\\n  background-color: aqua;\\n}\\n\\nheader {\\n  width: 100%;\\n  background-color: #bbb;\\n  border-bottom: 1px solid gray;\\n}\\nheader h1 {\\n  font-size: 6rem;\\n  margin: 1rem;\\n  padding: 1rem;\\n}\\n\\nmain {\\n  flex: 1 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nfooter {\\n  width: 100%;\\n  word-break: break-word;\\n  background-color: #bbb;\\n  margin-top: 2rem;\\n  border-top: 1px solid gray;\\n}\\nfooter div {\\n  font-size: 1.6rem;\\n}\\nfooter .github-logo {\\n  display: block;\\n  width: 32px;\\n  height: auto;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://form-validation-practice/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://form-validation-practice/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://form-validation-practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", _ui__WEBPACK_IMPORTED_MODULE_0__.renderPage);\n\n\n//# sourceURL=webpack://form-validation-practice/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.png */ \"./src/github.png\");\n\n\n\n\nconst createWrapper = () => {\n  const mainWrapper = document.createElement(\"div\");\n  mainWrapper.classList.add(\"main-wrapper\");\n  return mainWrapper;\n};\n\nconst createHeader = () => {\n  const header = document.createElement(\"header\");\n  const headerTitle = document.createElement(\"h1\");\n  headerTitle.textContent = \"Form Validation Practice\";\n  header.appendChild(headerTitle);\n  return header;\n};\n\nconst createMain = () => {\n  const main = document.createElement(\"main\");\n  main.appendChild(createForm());\n  return main;\n};\n\nconst createForm = () => {\n  const formWrapper = document.createElement(\"div\");\n  formWrapper.classList.add(\"form-wrapper\");\n  const formContainer = document.createElement(\"form\");\n\n  const formFirstName = document.createElement(\"label\");\n  const formFirstNamePara = document.createElement(\"p\");\n  formFirstNamePara.textContent = \"First Name\";\n  const formFirstNameInput = document.createElement(\"input\");\n  formFirstNameInput.setAttribute(\"type\", \"text\");\n  formFirstNameInput.setAttribute(\"id\", \"first-name\");\n  formFirstNameInput.setAttribute(\"name\", \"first-name\");\n  formFirstNameInput.setAttribute(\"maxlength\", \"30\");\n  formFirstNameInput.setAttribute(\"placeholder\", \"Steve\");\n  formFirstNameInput.setAttribute(\"required\", \"\");\n  const formFirstNameErrorPara = document.createElement(\"p\");\n  formFirstNameErrorPara.classList.add(\"hidden\");\n  formFirstNameErrorPara.setAttribute(\"id\", \"first-name-error-p\");\n  formFirstNameErrorPara.textContent = \"Everything OK!\";\n  formFirstName.appendChild(formFirstNamePara);\n  formFirstName.appendChild(formFirstNameInput);\n  formFirstName.appendChild(formFirstNameErrorPara);\n\n  const formLastName = document.createElement(\"label\");\n  const formLastNamePara = document.createElement(\"p\");\n  formLastNamePara.textContent = \"Last Name\";\n  const formLastNameInput = document.createElement(\"input\");\n  formLastNameInput.setAttribute(\"type\", \"text\");\n  formLastNameInput.setAttribute(\"id\", \"last-name\");\n  formLastNameInput.setAttribute(\"name\", \"last-name\");\n  formLastNameInput.setAttribute(\"maxlength\", \"30\");\n  formLastNameInput.setAttribute(\"placeholder\", \"Jobs\");\n  formLastNameInput.setAttribute(\"required\", \"\");\n  const formLastNameErrorPara = document.createElement(\"p\");\n  formLastNameErrorPara.classList.add(\"hidden\");\n  formLastNameErrorPara.setAttribute(\"id\", \"last-name-error-p\");\n  formLastNameErrorPara.textContent = \"Everything OK!\";\n  formLastName.appendChild(formLastNamePara);\n  formLastName.appendChild(formLastNameInput);\n  formLastName.appendChild(formLastNameErrorPara);\n\n  const formEmail = document.createElement(\"label\");\n  const formEmailPara = document.createElement(\"p\");\n  formEmailPara.textContent = \"E-mail\";\n  const formEmailInput = document.createElement(\"input\");\n  formEmailInput.setAttribute(\"type\", \"email\");\n  formEmailInput.setAttribute(\"id\", \"last-name\");\n  formEmailInput.setAttribute(\"name\", \"last-name\");\n  formEmailInput.setAttribute(\"maxlength\", \"30\");\n  formEmailInput.setAttribute(\"placeholder\", \"stevejobs@apple.com\");\n  formEmailInput.setAttribute(\"required\", \"\");\n  const formEmailErrorPara = document.createElement(\"p\");\n  formEmailErrorPara.classList.add(\"hidden\");\n  formEmailErrorPara.setAttribute(\"id\", \"email-error-p\");\n  formEmailErrorPara.textContent = \"Everything OK!\";\n  formEmail.appendChild(formEmailPara);\n  formEmail.appendChild(formEmailInput);\n  formEmail.appendChild(formEmailErrorPara);\n\n  const formCountry = document.createElement(\"label\");\n  const formCountryPara = document.createElement(\"p\");\n  formCountryPara.textContent = \"Country\";\n  const formCountryInput = document.createElement(\"input\");\n  formCountryInput.setAttribute(\"type\", \"text\");\n  formCountryInput.setAttribute(\"id\", \"country\");\n  formCountryInput.setAttribute(\"name\", \"country\");\n  formCountryInput.setAttribute(\"maxlength\", \"30\");\n  formCountryInput.setAttribute(\"placeholder\", \"Murica\");\n  formCountryInput.setAttribute(\"required\", \"\");\n  const formCountryErrorPara = document.createElement(\"p\");\n  formCountryErrorPara.classList.add(\"hidden\");\n  formCountryErrorPara.setAttribute(\"id\", \"country-error-p\");\n  formCountryErrorPara.textContent = \"Everything OK!\";\n  formCountry.appendChild(formCountryPara);\n  formCountry.appendChild(formCountryInput);\n  formCountry.appendChild(formCountryErrorPara);\n\n  const formZipCode = document.createElement(\"label\");\n  const formZipCodePara = document.createElement(\"p\");\n  formZipCodePara.textContent = \"Zip Code\";\n  const formZipCodeInput = document.createElement(\"input\");\n  formZipCodeInput.setAttribute(\"type\", \"number\");\n  formZipCodeInput.setAttribute(\"id\", \"zip-code\");\n  formZipCodeInput.setAttribute(\"name\", \"zip-code\");\n  formZipCodeInput.setAttribute(\"maxlength\", \"30\");\n  formZipCodeInput.setAttribute(\"placeholder\", \"96162\");\n  formZipCodeInput.setAttribute(\"required\", \"\");\n  const formZipCodeErrorPara = document.createElement(\"p\");\n  formZipCodeErrorPara.classList.add(\"hidden\");\n  formZipCodeErrorPara.setAttribute(\"id\", \"zip-code-error-p\");\n  formZipCodeErrorPara.textContent = \"Everything OK!\";\n  formZipCode.appendChild(formZipCodePara);\n  formZipCode.appendChild(formZipCodeInput);\n  formZipCode.appendChild(formZipCodeErrorPara);\n\n  const formPassword = document.createElement(\"label\");\n  const formPasswordPara = document.createElement(\"p\");\n  formPasswordPara.textContent = \"Password\";\n  const formPasswordInput = document.createElement(\"input\");\n  formPasswordInput.setAttribute(\"type\", \"password\");\n  formPasswordInput.setAttribute(\"id\", \"password\");\n  formPasswordInput.setAttribute(\"name\", \"password\");\n  formPasswordInput.setAttribute(\"maxlength\", \"30\");\n  formPasswordInput.setAttribute(\"placeholder\", \"kek-123\");\n  formPasswordInput.setAttribute(\"required\", \"\");\n  const formPasswordErrorPara = document.createElement(\"p\");\n  formPasswordErrorPara.classList.add(\"hidden\");\n  formPasswordErrorPara.setAttribute(\"id\", \"password-error-p\");\n  formPasswordErrorPara.textContent = \"Everything OK!\";\n  formPassword.appendChild(formPasswordPara);\n  formPassword.appendChild(formPasswordInput);\n  formPassword.appendChild(formPasswordErrorPara);\n\n  const formPasswordConfirmation = document.createElement(\"label\");\n  const formPasswordConfirmationPara = document.createElement(\"p\");\n  formPasswordConfirmationPara.textContent = \"Password Confirmation\";\n  const formPasswordConfirmationInput = document.createElement(\"input\");\n  formPasswordConfirmationInput.setAttribute(\"type\", \"password\");\n  formPasswordConfirmationInput.setAttribute(\"id\", \"password-confirmation\");\n  formPasswordConfirmationInput.setAttribute(\"name\", \"password-confirmation\");\n  formPasswordConfirmationInput.setAttribute(\"maxlength\", \"30\");\n  formPasswordConfirmationInput.setAttribute(\"placeholder\", \"kek-123\");\n  formPasswordConfirmationInput.setAttribute(\"required\", \"\");\n  const formPasswordConfirmationErrorPara = document.createElement(\"p\");\n  formPasswordConfirmationErrorPara.classList.add(\"hidden\");\n  formPasswordConfirmationErrorPara.setAttribute(\n    \"id\",\n    \"password-confirmation-error-p\"\n  );\n  formPasswordConfirmationErrorPara.textContent = \"Everything OK!\";\n  formPasswordConfirmation.appendChild(formPasswordConfirmationPara);\n  formPasswordConfirmation.appendChild(formPasswordConfirmationInput);\n  formPasswordConfirmation.appendChild(formPasswordConfirmationErrorPara);\n\n  const formButtonWrapper = document.createElement(\"div\");\n  formButtonWrapper.classList.add(\"form-btn-wrapper\");\n  const formSubmitButton = document.createElement(\"button\");\n  formSubmitButton.textContent = \"Submit\";\n  formSubmitButton.classList.add(\"submit-form-button\");\n  formSubmitButton.setAttribute(\"type\", \"submit\");\n  formButtonWrapper.appendChild(formSubmitButton);\n\n  formContainer.appendChild(formFirstName);\n  formContainer.appendChild(formLastName);\n  formContainer.appendChild(formEmail);\n  formContainer.appendChild(formCountry);\n  formContainer.appendChild(formZipCode);\n  formContainer.appendChild(formPassword);\n  formContainer.appendChild(formPasswordConfirmation);\n  formContainer.appendChild(formButtonWrapper);\n  formWrapper.appendChild(formContainer);\n\n  return formWrapper;\n};\n\nconst createFooter = () => {\n  const footer = document.createElement(\"footer\");\n  const footerDiv = document.createElement(\"div\");\n  const footerLink = document.createElement(\"a\");\n  const footerLinkImg = document.createElement(\"img\");\n  footerLinkImg.classList.add(\"github-logo\");\n  footerLinkImg.setAttribute(\"src\", _github_png__WEBPACK_IMPORTED_MODULE_1__);\n  footerDiv.textContent = \"Developed by miroslav-zarenkov\";\n  footerLink.setAttribute(\"href\", \"https://github.com/miroslav-zarenkov\");\n  footerLink.setAttribute(\"target\", \"_blank\");\n  footerLink.setAttribute(\"rel\", \"noopener noreferrer\");\n  footer.appendChild(footerDiv);\n  footer.appendChild(footerLink);\n  footerLink.appendChild(footerLinkImg);\n  return footer;\n};\n\nconst createPage = (event) => {\n  document.body.appendChild(createWrapper());\n  document.querySelector(\".main-wrapper\").appendChild(createHeader());\n  document.querySelector(\".main-wrapper\").appendChild(createMain());\n  document.querySelector(\".main-wrapper\").appendChild(createFooter());\n};\n\nconst initialiseEventListeners = () => {\n  console.log(\"initialiseEventListeners\");\n};\n\nconst renderPage = (event) => {\n  createPage(event);\n  initialiseEventListeners();\n};\n\n\n//# sourceURL=webpack://form-validation-practice/./src/ui.js?");

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a38fb992fc0b988f234.png\";\n\n//# sourceURL=webpack://form-validation-practice/./src/github.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;