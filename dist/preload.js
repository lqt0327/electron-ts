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

/***/ "./preload.ts":
/*!********************!*\
  !*** ./preload.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nwindow.addEventListener('contextmenu', (e) => {\n    e.preventDefault();\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('show-context-menu');\n});\nwindow.addEventListener('click', () => {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('screen-capture');\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electronAPI', {\n    outputDatabase: () => {\n    },\n    importDatabase: (file) => {\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('db:import', file.path);\n    },\n    createTable: (tableName, schema) => __awaiter(void 0, void 0, void 0, function* () {\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:createTable', tableName);\n    }),\n    getClassify: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', 'tb_name'),\n    getCollectList: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', 'tb_name', { skip: 1 }),\n    openApp: (link) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('action:open-app', link),\n    getQuickLinkData: (table = 'tb_list', sort) => __awaiter(void 0, void 0, void 0, function* () {\n        const data = yield electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', table, { sort: { createTime: -1 } });\n        return {\n            status: {\n                code: 0,\n            },\n            result: data\n        };\n    }),\n    deleteQuickLinkData: (id) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:deleteOne', id),\n    cancelCollect: (id, table) => __awaiter(void 0, void 0, void 0, function* () { return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:cancelCollect', table, id); }),\n    collect: (id, table) => __awaiter(void 0, void 0, void 0, function* () { return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:collect', table, id); }),\n    updateQuickLinkData: (id, newData) => __awaiter(void 0, void 0, void 0, function* () {\n        const _newData = JSON.parse(newData);\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:updateData', id, _newData);\n    }),\n    searchQuickLinkData: (keywords) => __awaiter(void 0, void 0, void 0, function* () {\n        const data = yield electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:find', 'tb_list', 'title_cn', keywords);\n        return {\n            status: {\n                code: 0,\n            },\n            result: data\n        };\n    }),\n    captureImage() {\n    },\n    selectImage: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('dialog:selectImage'),\n    selectFile: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('dialog:selectFile'),\n    pathBasename: (pathname, ext) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:pathBasename', pathname, ext),\n    encodeById: (id) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:encodeById', id),\n    pathJoin: (...target) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:pathJoin', ...target),\n    addQuickLinkData: (newData) => {\n        const _newData = JSON.parse(newData);\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:insertData', _newData);\n    },\n});\n\n\n//# sourceURL=webpack:///./preload.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./preload.ts");
/******/ 	
/******/ })()
;