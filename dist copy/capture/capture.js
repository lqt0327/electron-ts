/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./module/capture/screen_capture.node":
/*!********************************************!*\
  !*** ./module/capture/screen_capture.node ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\ntry {\n  process.dlopen(module, __dirname + (__webpack_require__(/*! path */ \"path\").sep) + __webpack_require__.p + \"fefca27bac2fe7db4a211e2a1c066a2a.node\");\n} catch (error) {\n  throw new Error('node-loader:\\n' + error);\n}\n\n\n//# sourceURL=webpack:///./module/capture/screen_capture.node?");

/***/ }),

/***/ "./module/capture/index.ts":
/*!*********************************!*\
  !*** ./module/capture/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst addon = __webpack_require__(/*! ./screen_capture.node */ \"./module/capture/screen_capture.node\");\nclass Capture {\n    constructor() {\n        this.wins = [];\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('capture-ok', (event, params) => {\n            const point = electron__WEBPACK_IMPORTED_MODULE_0__.screen.getCursorScreenPoint();\n            console.log(point, '??>>>----');\n            const d = electron__WEBPACK_IMPORTED_MODULE_0__.screen.getDisplayNearestPoint(point);\n            console.log(d, '???nnbbbbb');\n            const { x, y, width, height } = params;\n            console.log(x, y, width, height, '???;;;;---', typeof x);\n            const res = addon.captureScreen(x, y, width, height);\n            console.log(res, '???;;;;');\n            return { x, y };\n        });\n    }\n    capture() {\n        const displays = electron__WEBPACK_IMPORTED_MODULE_0__.screen.getAllDisplays();\n        electron__WEBPACK_IMPORTED_MODULE_0__.globalShortcut.register('Esc', () => {\n            console.log('退出截屏');\n            this.close();\n        });\n        console.log(displays, 'displays');\n        for (let display of displays) {\n            let win = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n                x: display.bounds.x,\n                y: display.bounds.y,\n                width: display.bounds.width,\n                height: display.bounds.height,\n                transparent: true,\n                frame: false,\n                skipTaskbar: true,\n                autoHideMenuBar: true,\n                movable: false,\n                resizable: false,\n                enableLargerThanScreen: true,\n                hasShadow: false,\n                webPreferences: {\n                    preload: path__WEBPACK_IMPORTED_MODULE_1___default().join(\"/Users/luoqintai/Desktop/electron-ts/dist/capture\", 'preload.capture.js')\n                }\n            });\n            win.loadFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(\"/Users/luoqintai/Desktop/electron-ts/dist/capture\", 'capture.html'));\n            this.wins.push(win);\n        }\n    }\n    close() {\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.removeHandler('capture-ok');\n        electron__WEBPACK_IMPORTED_MODULE_0__.globalShortcut.unregister('Esc');\n        for (let win of this.wins) {\n            win.close();\n        }\n        this.wins = [];\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Capture);\n\n\n//# sourceURL=webpack:///./module/capture/index.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module/capture/index.ts");
/******/ 	
/******/ })()
;