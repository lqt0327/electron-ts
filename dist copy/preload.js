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

/***/ "../node_modules/downloadjs/download.js":
/*!**********************************************!*\
  !*** ../node_modules/downloadjs/download.js ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage\n// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime\n// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs\n// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.\n// v4 adds AMD/UMD, commonJS, and plain browser support\n// v4.1 adds url download capability via solo URL argument (same domain/CORS only)\n// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors\n// https://github.com/rndme/download\n\n(function (root, factory) {\n\tif (true) {\n\t\t// AMD. Register as an anonymous module.\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}(this, function () {\n\n\treturn function download(data, strFileName, strMimeType) {\n\n\t\tvar self = window, // this script is only for browsers anyway...\n\t\t\tdefaultMime = \"application/octet-stream\", // this default mime also triggers iframe downloads\n\t\t\tmimeType = strMimeType || defaultMime,\n\t\t\tpayload = data,\n\t\t\turl = !strFileName && !strMimeType && payload,\n\t\t\tanchor = document.createElement(\"a\"),\n\t\t\ttoString = function(a){return String(a);},\n\t\t\tmyBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),\n\t\t\tfileName = strFileName || \"download\",\n\t\t\tblob,\n\t\t\treader;\n\t\t\tmyBlob= myBlob.call ? myBlob.bind(self) : Blob ;\n\t  \n\t\tif(String(this)===\"true\"){ //reverse arguments, allowing download.bind(true, \"text/xml\", \"export.xml\") to act as a callback\n\t\t\tpayload=[payload, mimeType];\n\t\t\tmimeType=payload[0];\n\t\t\tpayload=payload[1];\n\t\t}\n\n\n\t\tif(url && url.length< 2048){ // if no filename and no mime, assume a url was passed as the only argument\n\t\t\tfileName = url.split(\"/\").pop().split(\"?\")[0];\n\t\t\tanchor.href = url; // assign href prop to temp anchor\n\t\t  \tif(anchor.href.indexOf(url) !== -1){ // if the browser determines that it's a potentially valid url path:\n        \t\tvar ajax=new XMLHttpRequest();\n        \t\tajax.open( \"GET\", url, true);\n        \t\tajax.responseType = 'blob';\n        \t\tajax.onload= function(e){ \n\t\t\t\t  download(e.target.response, fileName, defaultMime);\n\t\t\t\t};\n        \t\tsetTimeout(function(){ ajax.send();}, 0); // allows setting custom ajax headers using the return:\n\t\t\t    return ajax;\n\t\t\t} // end if valid url?\n\t\t} // end if url?\n\n\n\t\t//go ahead and download dataURLs right away\n\t\tif(/^data:([\\w+-]+\\/[\\w+.-]+)?[,;]/.test(payload)){\n\t\t\n\t\t\tif(payload.length > (1024*1024*1.999) && myBlob !== toString ){\n\t\t\t\tpayload=dataUrlToBlob(payload);\n\t\t\t\tmimeType=payload.type || defaultMime;\n\t\t\t}else{\t\t\t\n\t\t\t\treturn navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:\n\t\t\t\t\tnavigator.msSaveBlob(dataUrlToBlob(payload), fileName) :\n\t\t\t\t\tsaver(payload) ; // everyone else can save dataURLs un-processed\n\t\t\t}\n\t\t\t\n\t\t}else{//not data url, is it a string with special needs?\n\t\t\tif(/([\\x80-\\xff])/.test(payload)){\t\t\t  \n\t\t\t\tvar i=0, tempUiArr= new Uint8Array(payload.length), mx=tempUiArr.length;\n\t\t\t\tfor(i;i<mx;++i) tempUiArr[i]= payload.charCodeAt(i);\n\t\t\t \tpayload=new myBlob([tempUiArr], {type: mimeType});\n\t\t\t}\t\t  \n\t\t}\n\t\tblob = payload instanceof myBlob ?\n\t\t\tpayload :\n\t\t\tnew myBlob([payload], {type: mimeType}) ;\n\n\n\t\tfunction dataUrlToBlob(strUrl) {\n\t\t\tvar parts= strUrl.split(/[:;,]/),\n\t\t\ttype= parts[1],\n\t\t\tdecoder= parts[2] == \"base64\" ? atob : decodeURIComponent,\n\t\t\tbinData= decoder( parts.pop() ),\n\t\t\tmx= binData.length,\n\t\t\ti= 0,\n\t\t\tuiArr= new Uint8Array(mx);\n\n\t\t\tfor(i;i<mx;++i) uiArr[i]= binData.charCodeAt(i);\n\n\t\t\treturn new myBlob([uiArr], {type: type});\n\t\t }\n\n\t\tfunction saver(url, winMode){\n\n\t\t\tif ('download' in anchor) { //html5 A[download]\n\t\t\t\tanchor.href = url;\n\t\t\t\tanchor.setAttribute(\"download\", fileName);\n\t\t\t\tanchor.className = \"download-js-link\";\n\t\t\t\tanchor.innerHTML = \"downloading...\";\n\t\t\t\tanchor.style.display = \"none\";\n\t\t\t\tdocument.body.appendChild(anchor);\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\tanchor.click();\n\t\t\t\t\tdocument.body.removeChild(anchor);\n\t\t\t\t\tif(winMode===true){setTimeout(function(){ self.URL.revokeObjectURL(anchor.href);}, 250 );}\n\t\t\t\t}, 66);\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t// handle non-a[download] safari as best we can:\n\t\t\tif(/(Version)\\/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari\\//.test(navigator.userAgent)) {\n\t\t\t\tif(/^data:/.test(url))\turl=\"data:\"+url.replace(/^data:([\\w\\/\\-\\+]+)/, defaultMime);\n\t\t\t\tif(!window.open(url)){ // popup blocked, offer direct download:\n\t\t\t\t\tif(confirm(\"Displaying New Document\\n\\nUse Save As... to download, then click back to return to this page.\")){ location.href=url; }\n\t\t\t\t}\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\t//do iframe dataURL download (old ch+FF):\n\t\t\tvar f = document.createElement(\"iframe\");\n\t\t\tdocument.body.appendChild(f);\n\n\t\t\tif(!winMode && /^data:/.test(url)){ // force a mime that will download:\n\t\t\t\turl=\"data:\"+url.replace(/^data:([\\w\\/\\-\\+]+)/, defaultMime);\n\t\t\t}\n\t\t\tf.src=url;\n\t\t\tsetTimeout(function(){ document.body.removeChild(f); }, 333);\n\n\t\t}//end saver\n\n\n\n\n\t\tif (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)\n\t\t\treturn navigator.msSaveBlob(blob, fileName);\n\t\t}\n\n\t\tif(self.URL){ // simple fast and modern way using Blob and URL:\n\t\t\tsaver(self.URL.createObjectURL(blob), true);\n\t\t}else{\n\t\t\t// handle non-Blob()+non-URL browsers:\n\t\t\tif(typeof blob === \"string\" || blob.constructor===toString ){\n\t\t\t\ttry{\n\t\t\t\t\treturn saver( \"data:\" +  mimeType   + \";base64,\"  +  self.btoa(blob)  );\n\t\t\t\t}catch(y){\n\t\t\t\t\treturn saver( \"data:\" +  mimeType   + \",\" + encodeURIComponent(blob)  );\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Blob but not URL support:\n\t\t\treader=new FileReader();\n\t\t\treader.onload=function(e){\n\t\t\t\tsaver(this.result);\n\t\t\t};\n\t\t\treader.readAsDataURL(blob);\n\t\t}\n\t\treturn true;\n\t}; /* end download() */\n}));\n\n\n//# sourceURL=webpack:///../node_modules/downloadjs/download.js?");

/***/ }),

/***/ "./preload.ts":
/*!********************!*\
  !*** ./preload.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! downloadjs */ \"../node_modules/downloadjs/download.js\");\n/* harmony import */ var downloadjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(downloadjs__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nwindow.addEventListener('contextmenu', (e) => {\n    e.preventDefault();\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('show-context-menu');\n});\nwindow.addEventListener('click', () => {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('screen-capture');\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electronAPI', {\n    exportDatabase: () => __awaiter(void 0, void 0, void 0, function* () {\n        const data = yield electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:export');\n        downloadjs__WEBPACK_IMPORTED_MODULE_1___default()(new Blob([JSON.stringify(data)]), \"database-export.json\", \"application/json;charset=utf-8\");\n    }),\n    importDatabase: (file) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('db:import', file.path),\n    createTable: (tableName, schema) => __awaiter(void 0, void 0, void 0, function* () {\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:createTable', tableName);\n    }),\n    getClassify: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', 'tb_name', { sort: { sort: 1 } }),\n    updateClassify: (table, data) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:updateAll', table, data),\n    getCollectList: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', 'tb_name', { skip: 1 }),\n    openApp: (link) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('action:open-app', link),\n    getQuickLinkData: (table = 'tb_list', sort) => __awaiter(void 0, void 0, void 0, function* () {\n        const data = yield electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:findAll', table, { sort: { createTime: -1 } });\n        return {\n            status: {\n                code: 0,\n            },\n            result: data\n        };\n    }),\n    deleteQuickLinkData: (id) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:deleteOne', id),\n    cancelCollect: (id, table) => __awaiter(void 0, void 0, void 0, function* () { return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:cancelCollect', table, id); }),\n    collect: (id, table) => __awaiter(void 0, void 0, void 0, function* () { return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:collect', table, id); }),\n    updateQuickLinkData: (id, newData) => __awaiter(void 0, void 0, void 0, function* () {\n        const _newData = JSON.parse(newData);\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:updateData', id, _newData);\n    }),\n    searchQuickLinkData: (keywords) => __awaiter(void 0, void 0, void 0, function* () {\n        const data = yield electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:find', 'tb_list', 'title_cn', keywords);\n        return {\n            status: {\n                code: 0,\n            },\n            result: data\n        };\n    }),\n    captureImage() {\n    },\n    selectImage: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('dialog:selectImage'),\n    selectFile: () => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('dialog:selectFile'),\n    pathBasename: (pathname, ext) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:pathBasename', pathname, ext),\n    encodeById: (id) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:encodeById', id),\n    pathJoin: (...target) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('tools:pathJoin', ...target),\n    addQuickLinkData: (newData) => {\n        const _newData = JSON.parse(newData);\n        return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('db:insertData', _newData);\n    },\n    showItemInFolder: (link) => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke('action:showItemInFolder', link)\n});\n\n\n//# sourceURL=webpack:///./preload.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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