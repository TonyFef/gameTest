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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_firstModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/firstModule */ \"./modules/firstModule.js\");\n/* harmony import */ var _modules_videoPlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videoPlay */ \"./modules/videoPlay.js\");\n\r\n\r\n// import { buttonMover } from \"./modules/buttonMover\";\r\n\r\n(0,_modules_firstModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_videoPlay__WEBPACK_IMPORTED_MODULE_1__.videoPlay)();\r\n// buttonMover();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/buttonMover.js":
/*!********************************!*\
  !*** ./modules/buttonMover.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonMover\": () => (/* binding */ buttonMover)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst buttonMover = (duration) => {\r\n    const button = document.querySelector(\".vjs-big-play-button\");\r\n    // console.log(button);\r\n\r\n    // console.log(duration);\r\n\r\n    setTimeout(() => {\r\n        const rightString = button.style.bottom.toString();\r\n        const rightNumber = rightString.substring(0, rightString.length - 2);\r\n        console.log(rightNumber);\r\n    }, 3000);\r\n\r\n    (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: duration * 1000,\r\n        timing(timeFraction) {\r\n            return timeFraction;\r\n        },\r\n        draw(progress) {\r\n            const string = button.style.right.toString();\r\n            const rightNumber = string.substring(0, string.length - 2);\r\n\r\n            if (rightNumber < 1200) {\r\n                button.style.right = progress * 1000 + \"px\";\r\n                button.style.bottom = progress * 1000 + \"px\";\r\n            }\r\n            // if (button.style.right < \"1200px\") {\r\n            //     button.style.right = progress * 5000 + \"px\";\r\n            // }\r\n            // console.log(button.style.right);\r\n        },\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/buttonMover.js?");

/***/ }),

/***/ "./modules/firstModule.js":
/*!********************************!*\
  !*** ./modules/firstModule.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstModule = () => {\r\n    const rootDiv = document.querySelector(\".root\");\r\n    const _API_KEY = \"563492ad6f917000010000019e2d093c109e4a508be5b655a984aef2\";\r\n    const link = '\"https://api.pexels.com/videos/popular\"';\r\n\r\n    const videojs = document.querySelector(\".vjs-control-bar\");\r\n    const playBtn = document.querySelector(\".vjs-big-play-button\");\r\n    playBtn.style.position = \"relative\";\r\n    playBtn.style.backgroundColor = \"transparent\";\r\n    playBtn.innerHTML =\r\n        '<img class=\"video-play__button\" src=\"./images/vector1.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector2.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector3.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector4.svg\" alt=\"/\">';\r\n    // videojs.style.display = \"none\";\r\n    // console.log(playBtn);\r\n\r\n    const leftWing = document.querySelector(\".left-scale\");\r\n    // leftWing.style.strokeOpacity = \"35%\";\r\n    // console.log(leftWing);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstModule);\r\n\n\n//# sourceURL=webpack:///./modules/firstModule.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst timer = (duration) => {\r\n    const text = document.querySelectorAll(\".percentage\");\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: duration * 1000,\r\n        timing(timeFraction) {\r\n            return timeFraction;\r\n        },\r\n        draw(progress) {\r\n            text.forEach((item) => {\r\n                item.textContent = Math.round(100 - progress * 100);\r\n            });\r\n        },\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/videoPlay.js":
/*!******************************!*\
  !*** ./modules/videoPlay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"videoPlay\": () => (/* binding */ videoPlay)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./modules/timer.js\");\n/* harmony import */ var _buttonMover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonMover */ \"./modules/buttonMover.js\");\n\r\n\r\n\r\nconst videoPlay = () => {\r\n    const leftScale = document.querySelector(\".left-scale__path\");\r\n    const rightScale = document.querySelector(\".right-scale__path\");\r\n    const video = document.querySelector(\".vjs-tech\");\r\n\r\n    const duration = video.duration;\r\n    const length = leftScale.getTotalLength();\r\n    const currentTime = video.currentTime;\r\n\r\n    if (currentTime > 0) {\r\n        leftScale.style.animationDuration = `${duration}s`;\r\n        rightScale.style.animationDuration = `${duration}s`;\r\n\r\n        leftScale.style.strokeDasharray = length;\r\n        rightScale.style.strokeDasharray = length;\r\n\r\n        leftScale.style.strokeDashoffset = length;\r\n        rightScale.style.strokeDashoffset = length;\r\n\r\n        (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(duration);\r\n    }\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(duration);\r\n    (0,_buttonMover__WEBPACK_IMPORTED_MODULE_1__.buttonMover)(duration)\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/videoPlay.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;