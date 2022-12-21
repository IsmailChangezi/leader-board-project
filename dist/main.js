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

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listScore = document.querySelector(\".scorelist\");\r\n\r\nconst displayScore = (data) => {\r\n  listScore.innerHTML = \"\";\r\n  data.forEach((item) => {\r\n    const li = document.createElement(\"li\");\r\n    li.innerHTML = `👤 ⭐${item.user} : ${item.score}`;\r\n    listScore.appendChild(li);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayScore);\r\n\n\n//# sourceURL=webpack://leader-board-project/./src/crud.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _working__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./working */ \"./src/working.js\");\n\r\n\r\nconst postData = async (score) => {\r\n  await fetch(`${_working__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(score),\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://leader-board-project/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud */ \"./src/crud.js\");\n/* harmony import */ var _working__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./working */ \"./src/working.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n// import \"./styles.css\";\r\n\r\n\r\n\r\n\r\nconst formAdd = document.querySelector(\"#form-add\");\r\nconst refresh = document.querySelector(\"#refresh-btn\");\r\nconst { name, score } = formAdd.elements;\r\n\r\nconst addScore = (e) => {\r\n  e.preventDefault();\r\n  if (!name.value || !score.value) return;\r\n  const scoreData = {\r\n    user: name.value,\r\n    score: score.value,\r\n  };\r\n  (0,_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(scoreData);\r\n};\r\n\r\nconst renderAPI = async () => {\r\n  const fetchData = await fetch(_working__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  const data = await fetchData.json();\r\n  (0,_crud__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.result);\r\n};\r\n\r\nformAdd.addEventListener(\"submit\", addScore);\r\nrefresh.addEventListener(\"click\", renderAPI);\r\n\n\n//# sourceURL=webpack://leader-board-project/./src/index.js?");

/***/ }),

/***/ "./src/working.js":
/*!************************!*\
  !*** ./src/working.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_URL =\r\n  \"https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/te26qsUr40fYafV4DxvK/scores/\";\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_URL);\r\n\n\n//# sourceURL=webpack://leader-board-project/./src/working.js?");

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