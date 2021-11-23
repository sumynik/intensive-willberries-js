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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_getGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getGoods */ \"./src/modules/getGoods.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n;(0,_modules_getGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\r\n;(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ29vZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFDSTtBQUNDO0FBQ1c7QUFDakQ7QUFDQSx5REFBSTtBQUNKO0FBQ0EsNERBQU07QUFDTjtBQUNBLDhEQUFLO0FBQ0w7QUFDQSxrRUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVuc2l2ZS13aWxsYmVycmllcy8uL3NyYy9nb29kcy5qcz83YmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYXJ0IGZyb20gJy4vbW9kdWxlcy9jYXJ0J1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vbW9kdWxlcy9zZWFyY2gnXHJcbmltcG9ydCBnb29kcyBmcm9tICcuL21vZHVsZXMvZ2V0R29vZHMnXHJcbmltcG9ydCBzbW9vdGhTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL3Ntb290aFNjcm9sbCdcclxuXHJcbmNhcnQoKVxyXG5cclxuc2VhcmNoKClcclxuXHJcbmdvb2RzKClcclxuXHJcbnNtb290aFNjcm9sbCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/goods.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = function() {\r\n    const cartBtn = document.querySelector('.button-cart')\r\n    // const cartModal = document.querySelector('#modal-cart')\r\n    const cartModal = document.getElementById('modal-cart')\r\n    const closeBtn = cartModal.querySelector('.modal-close');\r\n    const goodsContainer = document.querySelector('.long-goods-list')\r\n    const cartTable = document.querySelector('.cart-table__goods')\r\n    const modalForm = document.querySelector('.modal-form')\r\n\r\n    const addToCart = id => {\r\n        const goods = JSON.parse(localStorage.getItem('goods'))\r\n        const clickedGood = goods.find(good => good.id === id)\r\n        const cart = localStorage.getItem('cart') ?\r\n                    JSON.parse(localStorage.getItem('cart')) : []\r\n        cart.some(good => good.id === clickedGood.id)\r\n        if(cart.some(good => good.id === clickedGood.id)){\r\n            cart.map(good => {\r\n                if(good.id === clickedGood.id){\r\n                    good.count++\r\n                }\r\n                return good\r\n            })\r\n        } else {\r\n            clickedGood.count = 1\r\n            cart.push(clickedGood)\r\n        }\r\n\r\n        localStorage.setItem('cart', JSON.stringify(cart))\r\n    }\r\n    \r\n    const deleteCartItem = id => {\r\n        const cart = JSON.parse(localStorage.getItem('cart'))\r\n\r\n        const newCart = cart.filter(good => {\r\n            return good.id !== id\r\n        })\r\n\r\n        localStorage.setItem('cart', JSON.stringify(newCart))\r\n        renderCartGoods(newCart)\r\n    }\r\n        \r\n    const plusCartItem = id => {\r\n        const cart = JSON.parse(localStorage.getItem('cart'))\r\n        const newCart = cart.map(good => {\r\n            if(good.id === id){\r\n                good.count++\r\n            }\r\n            return good\r\n        })\r\n        localStorage.setItem('cart', JSON.stringify(newCart))\r\n        renderCartGoods(newCart)\r\n    }\r\n        \r\n    const minusCartItem = id => {\r\n        const cart = JSON.parse(localStorage.getItem('cart'))\r\n        const newCart = cart.map(good => {\r\n            if(good.id === id && good.count > 1){\r\n                good.count--\r\n            }\r\n            return good\r\n        })\r\n        localStorage.setItem('cart', JSON.stringify(newCart))\r\n        renderCartGoods(newCart)\r\n    }\r\n\r\n    const renderCartGoods = goods => {\r\n        cartTable.innerHTML = ''\r\n        goods.forEach(good => {\r\n            const tr = document.createElement('tr')\r\n            tr.innerHTML = `\r\n                <td>${good.name}</td>\r\n                <td>${good.price}$</td>\r\n                <td><button class=\"cart-btn-minus\" \"=\"\">-</button></td>\r\n                <td>${good.count}</td>\r\n                <td><button class=\"cart-btn-plus\" \"=\"\">+</button></td>\r\n                <td>${+good.price * +good.count}$</td>\r\n                <td><button class=\"cart-btn-delete\" \"=\"\">x</button></td>\r\n            `\r\n            cartTable.append(tr)\r\n\r\n            tr.addEventListener('click', evt => {\r\n                if (evt.target.classList.contains('cart-btn-minus')){\r\n                    minusCartItem(good.id)\r\n                } else if (evt.target.classList.contains('cart-btn-plus')) {\r\n                    plusCartItem(good.id)\r\n                } else if (evt.target.classList.contains('cart-btn-delete')) {\r\n                    deleteCartItem(good.id)\r\n                }\r\n            })\r\n        });\r\n    }\r\n\r\n    const sendForm = () => {\r\n        const cartData = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify({\r\n                    cart: cartData,\r\n                    name: '',\r\n                    phone: ''\r\n            })\r\n        }).then(() => {\r\n            cartModal.style.display = '';\r\n            localStorage.setItem('cart', JSON.stringify([]))\r\n        })\r\n    }\r\n\r\n    modalForm.addEventListener('submit', evt => {\r\n        evt.preventDefault();\r\n        sendForm()\r\n    })\r\n    \r\n    cartBtn.addEventListener('click', function () {\r\n        const cartArray = localStorage.getItem('cart') ?\r\n                    JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        renderCartGoods(cartArray)\r\n\r\n        cartModal.style.display = 'flex';\r\n    })\r\n    \r\n    closeBtn.addEventListener('click', function () {\r\n        cartModal.style.display = '';\r\n    })\r\n\r\n    if(goodsContainer) {\r\n        goodsContainer.addEventListener('click', evt => {\r\n            if(evt.target.closest('.add-to-cart')){\r\n                const buttonToCart = evt.target.closest('.add-to-cart')\r\n                const goodId = buttonToCart.dataset.id\r\n                addToCart(goodId)\r\n                \r\n            }\r\n        })\r\n    }\r\n\r\n    cartModal.addEventListener('click', evt => {\r\n        if(!evt.target.closest('.modal') && evt.target.classList.contains('overlay')){\r\n            cartModal.style.display = '';\r\n        }\r\n    })\r\n\r\n    window.addEventListener('keydown', evt => {\r\n        if(evt.key === 'Escape'){\r\n            cartModal.style.display = '';\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxzQkFBc0IsV0FBVztBQUNqQztBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnNpdmUtd2lsbGJlcnJpZXMvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY2FydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FydCcpXHJcbiAgICAvLyBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FydCcpXHJcbiAgICBjb25zdCBjYXJ0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY2FydCcpXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGNhcnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcclxuICAgIGNvbnN0IGdvb2RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvbmctZ29vZHMtbGlzdCcpXHJcbiAgICBjb25zdCBjYXJ0VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC10YWJsZV9fZ29vZHMnKVxyXG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0nKVxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBnb29kcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZEdvb2QgPSBnb29kcy5maW5kKGdvb2QgPT4gZ29vZC5pZCA9PT0gaWQpXHJcbiAgICAgICAgY29uc3QgY2FydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgP1xyXG4gICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgOiBbXVxyXG4gICAgICAgIGNhcnQuc29tZShnb29kID0+IGdvb2QuaWQgPT09IGNsaWNrZWRHb29kLmlkKVxyXG4gICAgICAgIGlmKGNhcnQuc29tZShnb29kID0+IGdvb2QuaWQgPT09IGNsaWNrZWRHb29kLmlkKSl7XHJcbiAgICAgICAgICAgIGNhcnQubWFwKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZ29vZC5pZCA9PT0gY2xpY2tlZEdvb2QuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdvb2QuY291bnQrK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdvb2RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGlja2VkR29vZC5jb3VudCA9IDFcclxuICAgICAgICAgICAgY2FydC5wdXNoKGNsaWNrZWRHb29kKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlQ2FydEl0ZW0gPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3Q2FydCA9IGNhcnQuZmlsdGVyKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZ29vZC5pZCAhPT0gaWRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICAgIHJlbmRlckNhcnRHb29kcyhuZXdDYXJ0KVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgY29uc3QgcGx1c0NhcnRJdGVtID0gaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpXHJcbiAgICAgICAgY29uc3QgbmV3Q2FydCA9IGNhcnQubWFwKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICBpZihnb29kLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBnb29kLmNvdW50KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ29vZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShuZXdDYXJ0KSlcclxuICAgICAgICByZW5kZXJDYXJ0R29vZHMobmV3Q2FydClcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGNvbnN0IG1pbnVzQ2FydEl0ZW0gPSBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuICAgICAgICBjb25zdCBuZXdDYXJ0ID0gY2FydC5tYXAoZ29vZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGdvb2QuaWQgPT09IGlkICYmIGdvb2QuY291bnQgPiAxKXtcclxuICAgICAgICAgICAgICAgIGdvb2QuY291bnQtLVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnb29kXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KG5ld0NhcnQpKVxyXG4gICAgICAgIHJlbmRlckNhcnRHb29kcyhuZXdDYXJ0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckNhcnRHb29kcyA9IGdvb2RzID0+IHtcclxuICAgICAgICBjYXJ0VGFibGUuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBnb29kcy5mb3JFYWNoKGdvb2QgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcclxuICAgICAgICAgICAgdHIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Z29vZC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtnb29kLnByaWNlfSQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJjYXJ0LWJ0bi1taW51c1wiIFwiPVwiXCI+LTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtnb29kLmNvdW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImNhcnQtYnRuLXBsdXNcIiBcIj1cIlwiPis8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7K2dvb2QucHJpY2UgKiArZ29vZC5jb3VudH0kPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiY2FydC1idG4tZGVsZXRlXCIgXCI9XCJcIj54PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBjYXJ0VGFibGUuYXBwZW5kKHRyKVxyXG5cclxuICAgICAgICAgICAgdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0LWJ0bi1taW51cycpKXtcclxuICAgICAgICAgICAgICAgICAgICBtaW51c0NhcnRJdGVtKGdvb2QuaWQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0LWJ0bi1wbHVzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbHVzQ2FydEl0ZW0oZ29vZC5pZClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnQtYnRuLWRlbGV0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FydEl0ZW0oZ29vZC5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgP1xyXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIDogW11cclxuXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShbXSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZ0ID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZW5kRm9ybSgpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjYXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykgP1xyXG4gICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgOiBbXVxyXG5cclxuICAgICAgICByZW5kZXJDYXJ0R29vZHMoY2FydEFycmF5KVxyXG5cclxuICAgICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKGdvb2RzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgZ29vZHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy5hZGQtdG8tY2FydCcpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvblRvQ2FydCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmFkZC10by1jYXJ0JylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RJZCA9IGJ1dHRvblRvQ2FydC5kYXRhc2V0LmlkXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoZ29vZElkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNhcnRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgaWYoIWV2dC50YXJnZXQuY2xvc2VzdCgnLm1vZGFsJykgJiYgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXknKSl7XHJcbiAgICAgICAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2dCA9PiB7XHJcbiAgICAgICAgaWYoZXZ0LmtleSA9PT0gJ0VzY2FwZScpe1xyXG4gICAgICAgICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/getGoods.js":
/*!*********************************!*\
  !*** ./src/modules/getGoods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getGoods = () => {\r\n    const links = document.querySelectorAll('.navigation-link')\r\n    const more = document.querySelector('.more')\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector('.long-goods-list')\r\n\r\n        goodsContainer.innerHTML = ''\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement('div')\r\n\r\n            goodBlock.classList.add('col-lg-3')\r\n            goodBlock.classList.add('col-sm-6')\r\n\r\n            goodBlock.innerHTML = `\r\n            <div class=\"goods-card\">\r\n                <span class=\"label ${good.label ? null : 'd-none'}\">${good.label}</span>\r\n                <img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\">\r\n                <h3 class=\"goods-title\">${good.name}</h3>\r\n                <p class=\"goods-description\">${good.description}</p>\r\n                <button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n                    <span class=\"button-price\">$${good.price}</span>\r\n                </button>\r\n            </div>\r\n            `\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n    }\r\n\r\n    const getData = (category, value) => {\r\n        // https://firebase.google.com/\r\n        fetch('https://test-js-willberries-default-rtdb.firebaseio.com/db.json')\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                const array = category ? data.filter((item) => item[category] === value) : data\r\n                localStorage.setItem('goods', JSON.stringify(array))\r\n\r\n                if(window.location.pathname !== '/goods.html') {\r\n                    window.location.href = '/goods.html'\r\n                } else {\r\n                    renderGoods(array)\r\n                }   \r\n            })\r\n    }\r\n\r\n    links.forEach((link) => {\r\n        link.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n            const linkValue = link.textContent\r\n            const category = link.dataset.field\r\n            // console.log(event.target.text);\r\n            getData(category, linkValue)\r\n        })\r\n    })\r\n\r\n    if (localStorage.getItem('goods') && window.location.pathname === '/goods.html'){\r\n        renderGoods(JSON.parse(localStorage.getItem('goods')))\r\n    }\r\n\r\n    try {\r\n        more.addEventListener('click', evt => {\r\n            evt.preventDefault()\r\n            getData();\r\n        })\r\n    } catch (e) {\r\n        \r\n    }\r\n\r\n    // localStorage.setItem('goods', JSON.stringify({name: 'all'}))\r\n\r\n    // const goods = JSON.parse(localStorage.getItem('goods'))\r\n    // console.log(goods);\r\n\r\n    // localStorage.removeItem('goods')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGoods);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRHb29kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsSUFBSSxXQUFXO0FBQ2pGLCtCQUErQixTQUFTLGdCQUFnQixVQUFVO0FBQ2xFLDBDQUEwQyxVQUFVO0FBQ3BELCtDQUErQyxpQkFBaUI7QUFDaEUsNkVBQTZFLFFBQVE7QUFDckYsa0RBQWtELFdBQVc7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVuc2l2ZS13aWxsYmVycmllcy8uL3NyYy9tb2R1bGVzL2dldEdvb2RzLmpzP2Q1OWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0R29vZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpbmsnKVxyXG4gICAgY29uc3QgbW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3JlJylcclxuXHJcbiAgICBjb25zdCByZW5kZXJHb29kcyA9IChnb29kcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdvb2RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvbmctZ29vZHMtbGlzdCcpXHJcblxyXG4gICAgICAgIGdvb2RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgICAgIGdvb2RzLmZvckVhY2goZ29vZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICBnb29kQmxvY2suY2xhc3NMaXN0LmFkZCgnY29sLWxnLTMnKVxyXG4gICAgICAgICAgICBnb29kQmxvY2suY2xhc3NMaXN0LmFkZCgnY29sLXNtLTYnKVxyXG5cclxuICAgICAgICAgICAgZ29vZEJsb2NrLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2RzLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgJHtnb29kLmxhYmVsID8gbnVsbCA6ICdkLW5vbmUnfVwiPiR7Z29vZC5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRiLyR7Z29vZC5pbWd9XCIgYWx0PVwiaW1hZ2U6ICR7Z29vZC5uYW1lfVwiIGNsYXNzPVwiZ29vZHMtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdvb2RzLXRpdGxlXCI+JHtnb29kLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZHMtZGVzY3JpcHRpb25cIj4ke2dvb2QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBnb29kcy1jYXJkLWJ0biBhZGQtdG8tY2FydFwiIGRhdGEtaWQ9XCIke2dvb2QuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tcHJpY2VcIj4kJHtnb29kLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBnb29kc0NvbnRhaW5lci5hcHBlbmQoZ29vZEJsb2NrKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IChjYXRlZ29yeSwgdmFsdWUpID0+IHtcclxuICAgICAgICAvLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdGVzdC1qcy13aWxsYmVycmllcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vZGIuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheSA9IGNhdGVnb3J5ID8gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW1bY2F0ZWdvcnldID09PSB2YWx1ZSkgOiBkYXRhXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ29vZHMnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL2dvb2RzLmh0bWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2dvb2RzLmh0bWwnXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckdvb2RzKGFycmF5KVxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgY29uc3QgbGlua1ZhbHVlID0gbGluay50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmsuZGF0YXNldC5maWVsZFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dCk7XHJcbiAgICAgICAgICAgIGdldERhdGEoY2F0ZWdvcnksIGxpbmtWYWx1ZSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2dvb2RzLmh0bWwnKXtcclxuICAgICAgICByZW5kZXJHb29kcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSlcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ29vZHMnLCBKU09OLnN0cmluZ2lmeSh7bmFtZTogJ2FsbCd9KSlcclxuXHJcbiAgICAvLyBjb25zdCBnb29kcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhnb29kcyk7XHJcblxyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2dvb2RzJylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0R29vZHNcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getGoods.js\n");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst search = function(){\r\n    const input = document.querySelector('.search-block > input')\r\n    const searchBtn = document.querySelector('.search-block > button')\r\n\r\n    // input.addEventListener('input', (event) => {\r\n    //     console.log(event.target.value);\r\n    // })\r\n\r\n    const renderGoods = (goods) => {\r\n        const goodsContainer = document.querySelector('.long-goods-list')\r\n\r\n        goodsContainer.innerHTML = ''\r\n\r\n        goods.forEach(good => {\r\n            const goodBlock = document.createElement('div')\r\n\r\n            goodBlock.classList.add('col-lg-3')\r\n            goodBlock.classList.add('col-sm-6')\r\n\r\n            goodBlock.innerHTML = `\r\n            <div class=\"goods-card\">\r\n                <span class=\"label ${good.label ? null : 'd-none'}\">${good.label}</span>\r\n                <img src=\"db/${good.img}\" alt=\"image: ${good.name}\" class=\"goods-image\">\r\n                <h3 class=\"goods-title\">${good.name}</h3>\r\n                <p class=\"goods-description\">${good.description}</p>\r\n                <button class=\"button goods-card-btn add-to-cart\" data-id=\"${good.id}\">\r\n                    <span class=\"button-price\">$${good.price}</span>\r\n                </button>\r\n            </div>\r\n            `\r\n            goodsContainer.append(goodBlock)\r\n        })\r\n    }\r\n\r\n    const getData = (value) => {\r\n        // https://firebase.google.com/\r\n        fetch('https://test-js-willberries-default-rtdb.firebaseio.com/db.json')\r\n            .then((res) => res.json())\r\n            .then((data) => {\r\n                const array = data.filter(good => good.name.toLowerCase().includes(value.toLowerCase()))\r\n\r\n                localStorage.setItem('goods', JSON.stringify(array))\r\n\r\n                if(window.location.pathname !== '/goods.html') {\r\n                    window.location.href = '/goods.html'\r\n                } else {\r\n                    renderGoods(array)\r\n                }   \r\n            })\r\n    }\r\n\r\n    try {\r\n        searchBtn.addEventListener('click', () => {\r\n            console.log(input.value);\r\n            getData(input.value)\r\n        })\r\n    } catch (e) {\r\n        console.error(e.message);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDZCQUE2QixJQUFJLFdBQVc7QUFDakYsK0JBQStCLFNBQVMsZ0JBQWdCLFVBQVU7QUFDbEUsMENBQTBDLFVBQVU7QUFDcEQsK0NBQStDLGlCQUFpQjtBQUNoRSw2RUFBNkUsUUFBUTtBQUNyRixrREFBa0QsV0FBVztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVuc2l2ZS13aWxsYmVycmllcy8uL3NyYy9tb2R1bGVzL3NlYXJjaC5qcz9lMDc1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmxvY2sgPiBpbnB1dCcpXHJcbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJsb2NrID4gYnV0dG9uJylcclxuXHJcbiAgICAvLyBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckdvb2RzID0gKGdvb2RzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29vZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZy1nb29kcy1saXN0JylcclxuXHJcbiAgICAgICAgZ29vZHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICAgICAgZ29vZHMuZm9yRWFjaChnb29kID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKCdjb2wtbGctMycpXHJcbiAgICAgICAgICAgIGdvb2RCbG9jay5jbGFzc0xpc3QuYWRkKCdjb2wtc20tNicpXHJcblxyXG4gICAgICAgICAgICBnb29kQmxvY2suaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZHMtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCAke2dvb2QubGFiZWwgPyBudWxsIDogJ2Qtbm9uZSd9XCI+JHtnb29kLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGIvJHtnb29kLmltZ31cIiBhbHQ9XCJpbWFnZTogJHtnb29kLm5hbWV9XCIgY2xhc3M9XCJnb29kcy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZ29vZHMtdGl0bGVcIj4ke2dvb2QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnb29kcy1kZXNjcmlwdGlvblwiPiR7Z29vZC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGdvb2RzLWNhcmQtYnRuIGFkZC10by1jYXJ0XCIgZGF0YS1pZD1cIiR7Z29vZC5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1wcmljZVwiPiQke2dvb2QucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGdvb2RzQ29udGFpbmVyLmFwcGVuZChnb29kQmxvY2spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3Rlc3QtanMtd2lsbGJlcnJpZXMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBkYXRhLmZpbHRlcihnb29kID0+IGdvb2QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKVxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnb29kcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09ICcvZ29vZHMuaHRtbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZ29vZHMuaHRtbCdcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyR29vZHMoYXJyYXkpXHJcbiAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgZ2V0RGF0YShpbnB1dC52YWx1ZSlcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/search.js\n");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const links = document.querySelectorAll('.scroll-link');\r\n\r\n    links.forEach(link => {\r\n        link.addEventListener('click', evt => {\r\n            evt.preventDefault()\r\n\r\n            window.scrollTo({\r\n                top: 0,\r\n                behavior: 'smooth'\r\n            })\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbW9vdGhTY3JvbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zaXZlLXdpbGxiZXJyaWVzLy4vc3JjL21vZHVsZXMvc21vb3RoU2Nyb2xsLmpzP2MwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsLWxpbmsnKTtcclxuXHJcbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbW9vdGhTY3JvbGwiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/smoothScroll.js\n");

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