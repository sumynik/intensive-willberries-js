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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n;(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlDO0FBQ0k7QUFDQztBQUN0QztBQUNBLHlEQUFJO0FBQ0o7QUFDQSw0REFBTTtBQUNOO0FBQ0EsOERBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnNpdmUtd2lsbGJlcnJpZXMvLi9zcmMvbWFpbi5qcz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJ0IGZyb20gJy4vbW9kdWxlcy9jYXJ0J1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXHJcbmltcG9ydCBnb29kcyBmcm9tICcuL21vZHVsZXMvZ2V0R29vZHMnXHJcblxyXG5jYXJ0KClcclxuXHJcbnNlYXJjaCgpXHJcblxyXG5nb29kcygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = function() {\r\n    const cartBtn = document.querySelector('.button-cart')\r\n    // const cartModal = document.querySelector('#modal-cart')\r\n    const cartModal = document.getElementById('modal-cart')\r\n    const closeBtn = cartModal.querySelector('.modal-close');\r\n    \r\n    // console.dir(cartBtn)\r\n    // cartBtn.onclick = function () {\r\n    //     console.log('click');\r\n    // }\r\n    \r\n    cartBtn.addEventListener('click', function () {\r\n        cartModal.style.display = 'flex';\r\n    })\r\n    \r\n    closeBtn.addEventListener('click', function () {\r\n        cartModal.style.display = '';\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnNpdmUtd2lsbGJlcnJpZXMvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FydCcpXHJcbiAgICAvLyBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FydCcpXHJcbiAgICBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FydCcpXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGNhcnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5kaXIoY2FydEJ0bilcclxuICAgIC8vIGNhcnRCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgY2FydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGoods = () => {\r\n    const links = document.querySelectorAll('.navigation-link')\r\n\r\n    const getData = () => {\r\n        // https://firebase.google.com/\r\n        fetch('https://test-js-willberries-default-rtdb.firebaseio.com/db.json')\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                // console.log(data)\r\n                localStorage.setItem('goods', JSON.stringify(data))\r\n            })\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            // console.log(event.target.text);\r\n            getData()\r\n        })\r\n    })\r\n\r\n    // localStorage.setItem('goods', JSON.stringify({name: 'all'}))\r\n\r\n    // const goods = JSON.parse(localStorage.getItem('goods'))\r\n    // console.log(goods);\r\n\r\n    // localStorage.removeItem('goods')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoods);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zaXZlLXdpbGxiZXJyaWVzLy4vc3JjL21vZHVsZXMvZ2V0R29vZHMuanM/ZDU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRHb29kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tbGluaycpXHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICAvLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdGVzdC1qcy13aWxsYmVycmllcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dvb2RzJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dCk7XHJcbiAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KHtuYW1lOiAnYWxsJ30pKVxyXG5cclxuICAgIC8vIGNvbnN0IGdvb2RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGdvb2RzKTtcclxuXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ29vZHMnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRHb29kc1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst search = function(){\r\n    const input = document.querySelector('.search-block > input')\r\n    const searchBtn = document.querySelector('.search-block > button')\r\n    \r\n    // input.addEventListener('input', (event) => {\r\n    //     console.log(event.target.value);\r\n    // })\r\n\r\n    searchBtn.addEventListener('click', () => {\r\n        console.log(input.value);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zaXZlLXdpbGxiZXJyaWVzLy4vc3JjL21vZHVsZXMvc2VhcmNoLmpzP2UwNzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ibG9jayA+IGlucHV0JylcclxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBidXR0b24nKVxyXG4gICAgXHJcbiAgICAvLyBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2giXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/search.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;