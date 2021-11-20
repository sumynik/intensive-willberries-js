/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/goods.js":
/*!**********************!*\
  !*** ./src/goods.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n\r\n\r\n(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFDekM7QUFDQSw2REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVuc2l2ZS13aWxsYmVycmllcy8uL3NyYy9nb29kcy5qcz83YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRHb29kcyBmcm9tICcuL21vZHVsZXMvZ2V0R29vZHMnXHJcblxyXG5nZXRHb29kcygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/goods.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGoods = () => {\r\n    const links = document.querySelectorAll('.navigation-link')\r\n\r\n    const getData = () => {\r\n        // https://firebase.google.com/\r\n        fetch('https://test-js-willberries-default-rtdb.firebaseio.com/db.json')\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                // console.log(data)\r\n                localStorage.setItem('goods', JSON.stringify(data))\r\n            })\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            // console.log(event.target.text);\r\n            getData()\r\n        })\r\n    })\r\n\r\n    // localStorage.setItem('goods', JSON.stringify({name: 'all'}))\r\n\r\n    // const goods = JSON.parse(localStorage.getItem('goods'))\r\n    // console.log(goods);\r\n\r\n    // localStorage.removeItem('goods')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoods);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zaXZlLXdpbGxiZXJyaWVzLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRHb29kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tbGluaycpXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAvLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdGVzdC1qcy13aWxsYmVycmllcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvb2RzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dCk7XHJcbiAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiAnYWxsJ30pKVxyXG5cclxuICAgIC8vIGNvbnN0IGdvb2RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGdvb2RzKTtcclxuXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ29vZHMnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRHb29kc1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/goods.js");
/******/ 	
/******/ })()
;