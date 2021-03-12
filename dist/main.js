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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_frontPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/frontPage */ \"./src/modules/frontPage.js\");\n\r\n//import { loadContactPage } from './modules/contactPage';\r\n\r\n(0,_modules_frontPage__WEBPACK_IMPORTED_MODULE_0__.loadFrontPage)();\r\n\n\n//# sourceURL=webpack://restaurant_pagev2/./src/index.js?");

/***/ }),

/***/ "./src/modules/contactPage.js":
/*!************************************!*\
  !*** ./src/modules/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage(e) {\r\n  e.path[4].children[2].remove();\r\n  const div = document.createElement('div');\r\n\r\n  div.id = 'contactPage';\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.id = 'contactH3';\r\n  h3.innerHTML = 'Contact us here:';\r\n  const para = document.createElement('p');\r\n  para.innerHTML = 'To make a reservation by phone, call: 123456789';\r\n\r\n  content.appendChild(div);\r\n  div.appendChild(h3);\r\n  div.appendChild(para);\r\n  return div;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant_pagev2/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/frontPage.js":
/*!**********************************!*\
  !*** ./src/modules/frontPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFrontPage\": () => (/* binding */ loadFrontPage)\n/* harmony export */ });\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/modules/navBar.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage */ \"./src/modules/contactPage.js\");\n\r\n\r\n\r\n(0,_navBar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\r\n\r\nfunction loadFrontPage(e) {\r\n  if (e) {\r\n    e.path[4].children[2].remove();\r\n  }\r\n\r\n  const div = document.createElement('div');\r\n  div.id = 'frontPage';\r\n  content.appendChild(div);\r\n  div.appendChild(image());\r\n  div.appendChild(h1());\r\n  div.appendChild(p());\r\n  return div;\r\n}\r\n\r\nfunction image() {\r\n  const img = document.createElement('img');\r\n\r\n  img.src =\r\n    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80';\r\n\r\n  return img;\r\n}\r\n\r\nfunction h1() {\r\n  const h1 = document.createElement('h1');\r\n\r\n  h1.innerHTML = 'Lorem Ipsum';\r\n  return h1;\r\n}\r\n\r\nfunction p() {\r\n  const p = document.createElement('p');\r\n\r\n  p.innerHTML =\r\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus mauris non orci auctor malesuada. Suspendisse eu nibh non erat facilisis sagittis sed sed neque. Sed in diam porttitor, accumsan dui sed, aliquam leo. Vestibulum tortor magna, egestas ac imperdiet nec, ultrices vel enim. Suspendisse a orci sit amet turpis ultrices blandit non eget ipsum. Cras neque orci, hendrerit non pellentesque in, dignissim id erat. Sed accumsan tristique mauris, vitae consequat dui laoreet vitae. Vivamus ex massa, sagittis vitae vestibulum eget, pellentesque et leo. Maecenas vehicula, sapien vel facilisis interdum, ligula est lobortis diam, vitae maximus ligula ipsum vel libero.';\r\n\r\n  return p;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant_pagev2/./src/modules/frontPage.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage(e) {\r\n  e.path[4].children[2].remove();\r\n  const div = document.createElement('div');\r\n\r\n  div.id = 'menuPage';\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.id = 'menuH3';\r\n  h3.innerHTML = 'Menu:';\r\n\r\n  const para = document.createElement('p');\r\n  para.innerHTML = 'Here is our menu: ';\r\n\r\n  const para2 = document.createElement('p');\r\n  para2.innerHTML = 'Burgers';\r\n\r\n  content.appendChild(div);\r\n  div.appendChild(para);\r\n  div.appendChild(para2);\r\n  return div;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant_pagev2/./src/modules/menuPage.js?");

/***/ }),

/***/ "./src/modules/navBar.js":
/*!*******************************!*\
  !*** ./src/modules/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactPage */ \"./src/modules/contactPage.js\");\n/* harmony import */ var _frontPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontPage */ \"./src/modules/frontPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/modules/menuPage.js\");\n\r\n\r\n\r\n\r\nfunction navBar() {\r\n  content.appendChild(nav());\r\n  navbar.appendChild(ul());\r\n  ul1.appendChild(li('Front Page'));\r\n  ul1.appendChild(li('Menu'));\r\n  ul1.appendChild(li('Contact Us'));\r\n}\r\n\r\nfunction nav() {\r\n  const nav = document.createElement('nav');\r\n  nav.id = 'navbar';\r\n  return nav;\r\n}\r\n\r\nfunction ul() {\r\n  const ul = document.createElement('ul');\r\n  ul.id = 'ul1';\r\n  return ul;\r\n}\r\n\r\nfunction li(name) {\r\n  const li = document.createElement('li');\r\n  const button = document.createElement('button');\r\n  button.innerHTML = name;\r\n  if (name == 'Contact Us') {\r\n    button.addEventListener('click', _contactPage__WEBPACK_IMPORTED_MODULE_0__.loadContactPage);\r\n  }\r\n  if (name == 'Front Page') {\r\n    button.addEventListener('click', _frontPage__WEBPACK_IMPORTED_MODULE_1__.loadFrontPage);\r\n  }\r\n  if (name == 'Menu') {\r\n    button.addEventListener('click', _menuPage__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage);\r\n  }\r\n  li.appendChild(button);\r\n\r\n  return li;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_pagev2/./src/modules/navBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;