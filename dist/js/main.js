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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_playButtonStyler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/playButtonStyler */ \"./modules/playButtonStyler.js\");\n/* harmony import */ var _modules_videoChanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videoChanger */ \"./modules/videoChanger.js\");\n/* harmony import */ var _modules_modalShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modalShower */ \"./modules/modalShower.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\r\n    \"DOMContentLoaded\",\r\n    () => {\r\n        (0,_modules_modalShower__WEBPACK_IMPORTED_MODULE_2__.modalShower)();\r\n        (0,_modules_videoChanger__WEBPACK_IMPORTED_MODULE_1__.videoChanger)();\r\n        (0,_modules_playButtonStyler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    },\r\n    { once: true }\r\n);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/buttonMover.js":
/*!********************************!*\
  !*** ./modules/buttonMover.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonMover\": () => (/* binding */ buttonMover)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst buttonMover = (duration) => {\r\n    const button = document.querySelector(\".vjs-big-play-button\");\r\n\r\n    const windowWidthUsable = window.outerWidth * 0.6;\r\n    const windowHeightUsable = window.outerHeight * 0.8;\r\n\r\n    let buttonMovingInterval = setInterval(() => {\r\n        (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: duration,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw: function (progress) {\r\n                button.style.top = (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-windowHeightUsable, windowHeightUsable) * progress + \"px\";\r\n                button.style.left = (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandom)(-windowWidthUsable, windowWidthUsable) * progress + \"px\";\r\n            },\r\n        });\r\n    }, 1250);\r\n\r\n    button.addEventListener(\r\n        \"click\",\r\n        () => {\r\n            clearInterval(buttonMovingInterval);\r\n            console.log(\"hello\");\r\n        },\r\n        { once: true }\r\n    );\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/buttonMover.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction);\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n};\r\n\r\nconst getRandom = (min, max) => {\r\n    const index = parseInt(Math.random() * (max - min + 1)) + min;\r\n    return index;\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector(\".modal\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n\r\n    modal.style.display = 'block'\r\n    overlay.style.display = 'block'\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/modalShower.js":
/*!********************************!*\
  !*** ./modules/modalShower.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalShower\": () => (/* binding */ modalShower)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./modules/modal.js\");\n\r\n\r\nconst modalShower = () => {\r\n    const video = document.querySelector(\".vjs-tech\");\r\n\r\n    video.addEventListener(\r\n        \"ended\",\r\n        () => {\r\n            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\r\n            video.pause();\r\n        },\r\n        { once: true }\r\n    );\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modalShower.js?");

/***/ }),

/***/ "./modules/playButtonStyler.js":
/*!*************************************!*\
  !*** ./modules/playButtonStyler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playButtonStyler = () => {\r\n    const playBtn = document.querySelector(\".vjs-big-play-button\");\r\n\r\n    playBtn.style.position = \"relative\";\r\n    playBtn.style.backgroundColor = \"transparent\";\r\n    playBtn.innerHTML =\r\n        '<img class=\"video-play__button\" src=\"./images/vector1.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector2.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector3.svg\" alt=\"/\"><img class=\"video-play__button\" src=\"./images/vector4.svg\" alt=\"/\">';\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playButtonStyler);\r\n\n\n//# sourceURL=webpack:///./modules/playButtonStyler.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst timer = (duration) => {\r\n    const text = document.querySelectorAll(\".percentage\");\r\n    const leftScale = document.getElementById(\"left-scale__path\");\r\n    const rightScale = document.querySelector(\".right-scale__path\");\r\n\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: duration * 1000,\r\n        timing(timeFraction) {\r\n            return timeFraction;\r\n        },\r\n        draw(progress) {\r\n            const percentsRemain = Math.round(100 - progress * 100);\r\n            text.forEach((item) => {\r\n                if (percentsRemain < 30) {\r\n                    item.style.color = \"red\";\r\n                    leftScale.style.stroke = \"red\";\r\n                    rightScale.style.stroke = \"red\";\r\n                }\r\n                item.textContent = percentsRemain;\r\n            });\r\n        },\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/videoChanger.js":
/*!*********************************!*\
  !*** ./modules/videoChanger.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"videoChanger\": () => (/* binding */ videoChanger)\n/* harmony export */ });\n/* harmony import */ var _videoPlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoPlay */ \"./modules/videoPlay.js\");\n\r\n\r\nconst videoChanger = () => {\r\n    let counter = 2;\r\n    const button = document.querySelector(\".vjs-big-play-button\");\r\n    const video = document.querySelector(\".vjs-tech\");\r\n\r\n    video.addEventListener(\"loadedmetadata\", () => {\r\n        (0,_videoPlay__WEBPACK_IMPORTED_MODULE_0__.videoPlay)(video.duration);\r\n    });\r\n\r\n    button.addEventListener(\"click\", () => {\r\n        video.src = `./videos/video${counter}.mp4`;\r\n        counter++;\r\n        counter > 5 ? (counter = 1) : null;\r\n    });\r\n\r\n    video.addEventListener(\"pause\", () => {\r\n        video.play();\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/videoChanger.js?");

/***/ }),

/***/ "./modules/videoPlay.js":
/*!******************************!*\
  !*** ./modules/videoPlay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"videoPlay\": () => (/* binding */ videoPlay)\n/* harmony export */ });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./modules/timer.js\");\n/* harmony import */ var _buttonMover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonMover */ \"./modules/buttonMover.js\");\n\r\n\r\n\r\nconst videoPlay = (duration) => {\r\n    const leftScale = document.getElementById(\"left-scale__path\");\r\n    const rightScale = document.querySelector(\".right-scale__path\");\r\n\r\n    let length = leftScale.getTotalLength();\r\n\r\n    leftScale.style.animationDuration = `${duration.toFixed(2)}s`;\r\n    rightScale.style.animationDuration = `${duration.toFixed(2)}s`;\r\n\r\n    leftScale.setAttribute(\"stroke-dasharray\", length);\r\n    leftScale.setAttribute(\"stroke-dashoffset\", length);\r\n\r\n    rightScale.style.strokeDasharray = length;\r\n    rightScale.style.strokeDashoffset = length;\r\n\r\n    (0,_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(duration.toFixed(2));\r\n    (0,_buttonMover__WEBPACK_IMPORTED_MODULE_1__.buttonMover)(duration);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/videoPlay.js?");

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