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

/***/ "../node_modules/ieee754/index.js":
/*!****************************************!*\
  !*** ../node_modules/ieee754/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */\nexports.read = function (buffer, offset, isLE, mLen, nBytes) {\n  var e, m\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var nBits = -7\n  var i = isLE ? (nBytes - 1) : 0\n  var d = isLE ? -1 : 1\n  var s = buffer[offset + i]\n\n  i += d\n\n  e = s & ((1 << (-nBits)) - 1)\n  s >>= (-nBits)\n  nBits += eLen\n  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  m = e & ((1 << (-nBits)) - 1)\n  e >>= (-nBits)\n  nBits += mLen\n  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}\n\n  if (e === 0) {\n    e = 1 - eBias\n  } else if (e === eMax) {\n    return m ? NaN : ((s ? -1 : 1) * Infinity)\n  } else {\n    m = m + Math.pow(2, mLen)\n    e = e - eBias\n  }\n  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)\n}\n\nexports.write = function (buffer, value, offset, isLE, mLen, nBytes) {\n  var e, m, c\n  var eLen = (nBytes * 8) - mLen - 1\n  var eMax = (1 << eLen) - 1\n  var eBias = eMax >> 1\n  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)\n  var i = isLE ? 0 : (nBytes - 1)\n  var d = isLE ? 1 : -1\n  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0\n\n  value = Math.abs(value)\n\n  if (isNaN(value) || value === Infinity) {\n    m = isNaN(value) ? 1 : 0\n    e = eMax\n  } else {\n    e = Math.floor(Math.log(value) / Math.LN2)\n    if (value * (c = Math.pow(2, -e)) < 1) {\n      e--\n      c *= 2\n    }\n    if (e + eBias >= 1) {\n      value += rt / c\n    } else {\n      value += rt * Math.pow(2, 1 - eBias)\n    }\n    if (value * c >= 2) {\n      e++\n      c /= 2\n    }\n\n    if (e + eBias >= eMax) {\n      m = 0\n      e = eMax\n    } else if (e + eBias >= 1) {\n      m = ((value * c) - 1) * Math.pow(2, mLen)\n      e = e + eBias\n    } else {\n      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)\n      e = 0\n    }\n  }\n\n  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}\n\n  e = (e << mLen) | m\n  eLen += mLen\n  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}\n\n  buffer[offset + i - d] |= s * 128\n}\n\n\n//# sourceURL=webpack:///../node_modules/ieee754/index.js?");

/***/ }),

/***/ "../node_modules/lodash/_Hash.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_Hash.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"../node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"../node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"../node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"../node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"../node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "../node_modules/lodash/_ListCache.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_ListCache.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"../node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"../node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"../node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"../node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"../node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "../node_modules/lodash/_Map.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Map.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"../node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_Map.js?");

/***/ }),

/***/ "../node_modules/lodash/_MapCache.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_MapCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"../node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"../node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"../node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"../node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"../node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "../node_modules/lodash/_Stack.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"../node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"../node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"../node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"../node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"../node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"../node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "../node_modules/lodash/_Symbol.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_Symbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "../node_modules/lodash/_Uint8Array.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "../node_modules/lodash/_apply.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_apply.js?");

/***/ }),

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"../node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"../node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"../node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"../node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"../node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"../node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "../node_modules/lodash/_assignMergeValue.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_assignMergeValue.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"../node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"../node_modules/lodash/eq.js\");\n\n/**\n * This function is like `assignValue` except that it doesn't assign\n * `undefined` values.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignMergeValue(object, key, value) {\n  if ((value !== undefined && !eq(object[key], value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignMergeValue;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_assignMergeValue.js?");

/***/ }),

/***/ "../node_modules/lodash/_assignValue.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_assignValue.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"../node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"../node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "../node_modules/lodash/_assocIndexOf.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_assocIndexOf.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"../node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseAssignValue.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseAssignValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"../node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseCreate.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseCreate.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\");\n\n/** Built-in value references. */\nvar objectCreate = Object.create;\n\n/**\n * The base implementation of `_.create` without support for assigning\n * properties to the created object.\n *\n * @private\n * @param {Object} proto The object to inherit from.\n * @returns {Object} Returns the new object.\n */\nvar baseCreate = (function() {\n  function object() {}\n  return function(proto) {\n    if (!isObject(proto)) {\n      return {};\n    }\n    if (objectCreate) {\n      return objectCreate(proto);\n    }\n    object.prototype = proto;\n    var result = new object;\n    object.prototype = undefined;\n    return result;\n  };\n}());\n\nmodule.exports = baseCreate;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseCreate.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseFor.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"../node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseGetTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseGetTag.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"../node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"../node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"../node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseIsArguments.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsArguments.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"../node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"../node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseIsNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIsNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"../node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"../node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"../node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"../node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"../node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"../node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseKeysIn.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"../node_modules/lodash/_isPrototype.js\"),\n    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ \"../node_modules/lodash/_nativeKeysIn.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeysIn(object) {\n  if (!isObject(object)) {\n    return nativeKeysIn(object);\n  }\n  var isProto = isPrototype(object),\n      result = [];\n\n  for (var key in object) {\n    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeysIn;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseKeysIn.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseMerge.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseMerge.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"../node_modules/lodash/_Stack.js\"),\n    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"../node_modules/lodash/_assignMergeValue.js\"),\n    baseFor = __webpack_require__(/*! ./_baseFor */ \"../node_modules/lodash/_baseFor.js\"),\n    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ \"../node_modules/lodash/_baseMergeDeep.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"../node_modules/lodash/keysIn.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"../node_modules/lodash/_safeGet.js\");\n\n/**\n * The base implementation of `_.merge` without support for multiple sources.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} [customizer] The function to customize merged values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMerge(object, source, srcIndex, customizer, stack) {\n  if (object === source) {\n    return;\n  }\n  baseFor(source, function(srcValue, key) {\n    stack || (stack = new Stack);\n    if (isObject(srcValue)) {\n      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);\n    }\n    else {\n      var newValue = customizer\n        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)\n        : undefined;\n\n      if (newValue === undefined) {\n        newValue = srcValue;\n      }\n      assignMergeValue(object, key, newValue);\n    }\n  }, keysIn);\n}\n\nmodule.exports = baseMerge;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseMerge.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseMergeDeep.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseMergeDeep.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ \"../node_modules/lodash/_assignMergeValue.js\"),\n    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ \"../node_modules/lodash/_cloneBuffer.js\"),\n    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ \"../node_modules/lodash/_cloneTypedArray.js\"),\n    copyArray = __webpack_require__(/*! ./_copyArray */ \"../node_modules/lodash/_copyArray.js\"),\n    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ \"../node_modules/lodash/_initCloneObject.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"../node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"../node_modules/lodash/isArray.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"../node_modules/lodash/isArrayLikeObject.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"../node_modules/lodash/isBuffer.js\"),\n    isFunction = __webpack_require__(/*! ./isFunction */ \"../node_modules/lodash/isFunction.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\"),\n    isPlainObject = __webpack_require__(/*! ./isPlainObject */ \"../node_modules/lodash/isPlainObject.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"../node_modules/lodash/isTypedArray.js\"),\n    safeGet = __webpack_require__(/*! ./_safeGet */ \"../node_modules/lodash/_safeGet.js\"),\n    toPlainObject = __webpack_require__(/*! ./toPlainObject */ \"../node_modules/lodash/toPlainObject.js\");\n\n/**\n * A specialized version of `baseMerge` for arrays and objects which performs\n * deep merges and tracks traversed objects enabling objects with circular\n * references to be merged.\n *\n * @private\n * @param {Object} object The destination object.\n * @param {Object} source The source object.\n * @param {string} key The key of the value to merge.\n * @param {number} srcIndex The index of `source`.\n * @param {Function} mergeFunc The function to merge values.\n * @param {Function} [customizer] The function to customize assigned values.\n * @param {Object} [stack] Tracks traversed source values and their merged\n *  counterparts.\n */\nfunction baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {\n  var objValue = safeGet(object, key),\n      srcValue = safeGet(source, key),\n      stacked = stack.get(srcValue);\n\n  if (stacked) {\n    assignMergeValue(object, key, stacked);\n    return;\n  }\n  var newValue = customizer\n    ? customizer(objValue, srcValue, (key + ''), object, source, stack)\n    : undefined;\n\n  var isCommon = newValue === undefined;\n\n  if (isCommon) {\n    var isArr = isArray(srcValue),\n        isBuff = !isArr && isBuffer(srcValue),\n        isTyped = !isArr && !isBuff && isTypedArray(srcValue);\n\n    newValue = srcValue;\n    if (isArr || isBuff || isTyped) {\n      if (isArray(objValue)) {\n        newValue = objValue;\n      }\n      else if (isArrayLikeObject(objValue)) {\n        newValue = copyArray(objValue);\n      }\n      else if (isBuff) {\n        isCommon = false;\n        newValue = cloneBuffer(srcValue, true);\n      }\n      else if (isTyped) {\n        isCommon = false;\n        newValue = cloneTypedArray(srcValue, true);\n      }\n      else {\n        newValue = [];\n      }\n    }\n    else if (isPlainObject(srcValue) || isArguments(srcValue)) {\n      newValue = objValue;\n      if (isArguments(objValue)) {\n        newValue = toPlainObject(objValue);\n      }\n      else if (!isObject(objValue) || isFunction(objValue)) {\n        newValue = initCloneObject(srcValue);\n      }\n    }\n    else {\n      isCommon = false;\n    }\n  }\n  if (isCommon) {\n    // Recursively merge objects and arrays (susceptible to call stack limits).\n    stack.set(srcValue, newValue);\n    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);\n    stack['delete'](srcValue);\n  }\n  assignMergeValue(object, key, newValue);\n}\n\nmodule.exports = baseMergeDeep;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseMergeDeep.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var identity = __webpack_require__(/*! ./identity */ \"../node_modules/lodash/identity.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"../node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"../node_modules/lodash/_setToString.js\");\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\nmodule.exports = baseRest;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseRest.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseSetToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var constant = __webpack_require__(/*! ./constant */ \"../node_modules/lodash/constant.js\"),\n    defineProperty = __webpack_require__(/*! ./_defineProperty */ \"../node_modules/lodash/_defineProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"../node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\nmodule.exports = baseSetToString;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseSetToString.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "../node_modules/lodash/_cloneArrayBuffer.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_cloneArrayBuffer.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"../node_modules/lodash/_Uint8Array.js\");\n\n/**\n * Creates a clone of `arrayBuffer`.\n *\n * @private\n * @param {ArrayBuffer} arrayBuffer The array buffer to clone.\n * @returns {ArrayBuffer} Returns the cloned array buffer.\n */\nfunction cloneArrayBuffer(arrayBuffer) {\n  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);\n  new Uint8Array(result).set(new Uint8Array(arrayBuffer));\n  return result;\n}\n\nmodule.exports = cloneArrayBuffer;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_cloneArrayBuffer.js?");

/***/ }),

/***/ "../node_modules/lodash/_cloneBuffer.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneBuffer.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined,\n    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;\n\n/**\n * Creates a clone of  `buffer`.\n *\n * @private\n * @param {Buffer} buffer The buffer to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Buffer} Returns the cloned buffer.\n */\nfunction cloneBuffer(buffer, isDeep) {\n  if (isDeep) {\n    return buffer.slice();\n  }\n  var length = buffer.length,\n      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);\n\n  buffer.copy(result);\n  return result;\n}\n\nmodule.exports = cloneBuffer;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_cloneBuffer.js?");

/***/ }),

/***/ "../node_modules/lodash/_cloneTypedArray.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_cloneTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ \"../node_modules/lodash/_cloneArrayBuffer.js\");\n\n/**\n * Creates a clone of `typedArray`.\n *\n * @private\n * @param {Object} typedArray The typed array to clone.\n * @param {boolean} [isDeep] Specify a deep clone.\n * @returns {Object} Returns the cloned typed array.\n */\nfunction cloneTypedArray(typedArray, isDeep) {\n  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;\n  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);\n}\n\nmodule.exports = cloneTypedArray;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_cloneTypedArray.js?");

/***/ }),

/***/ "../node_modules/lodash/_copyArray.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_copyArray.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Copies the values of `source` to `array`.\n *\n * @private\n * @param {Array} source The array to copy values from.\n * @param {Array} [array=[]] The array to copy values to.\n * @returns {Array} Returns `array`.\n */\nfunction copyArray(source, array) {\n  var index = -1,\n      length = source.length;\n\n  array || (array = Array(length));\n  while (++index < length) {\n    array[index] = source[index];\n  }\n  return array;\n}\n\nmodule.exports = copyArray;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_copyArray.js?");

/***/ }),

/***/ "../node_modules/lodash/_copyObject.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_copyObject.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"../node_modules/lodash/_assignValue.js\"),\n    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"../node_modules/lodash/_baseAssignValue.js\");\n\n/**\n * Copies properties of `source` to `object`.\n *\n * @private\n * @param {Object} source The object to copy properties from.\n * @param {Array} props The property identifiers to copy.\n * @param {Object} [object={}] The object to copy properties to.\n * @param {Function} [customizer] The function to customize copied values.\n * @returns {Object} Returns `object`.\n */\nfunction copyObject(source, props, object, customizer) {\n  var isNew = !object;\n  object || (object = {});\n\n  var index = -1,\n      length = props.length;\n\n  while (++index < length) {\n    var key = props[index];\n\n    var newValue = customizer\n      ? customizer(object[key], source[key], key, object, source)\n      : undefined;\n\n    if (newValue === undefined) {\n      newValue = source[key];\n    }\n    if (isNew) {\n      baseAssignValue(object, key, newValue);\n    } else {\n      assignValue(object, key, newValue);\n    }\n  }\n  return object;\n}\n\nmodule.exports = copyObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_copyObject.js?");

/***/ }),

/***/ "../node_modules/lodash/_coreJsData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_coreJsData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "../node_modules/lodash/_createAssigner.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createAssigner.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseRest = __webpack_require__(/*! ./_baseRest */ \"../node_modules/lodash/_baseRest.js\"),\n    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ \"../node_modules/lodash/_isIterateeCall.js\");\n\n/**\n * Creates a function like `_.assign`.\n *\n * @private\n * @param {Function} assigner The function to assign values.\n * @returns {Function} Returns the new assigner function.\n */\nfunction createAssigner(assigner) {\n  return baseRest(function(object, sources) {\n    var index = -1,\n        length = sources.length,\n        customizer = length > 1 ? sources[length - 1] : undefined,\n        guard = length > 2 ? sources[2] : undefined;\n\n    customizer = (assigner.length > 3 && typeof customizer == 'function')\n      ? (length--, customizer)\n      : undefined;\n\n    if (guard && isIterateeCall(sources[0], sources[1], guard)) {\n      customizer = length < 3 ? undefined : customizer;\n      length = 1;\n    }\n    object = Object(object);\n    while (++index < length) {\n      var source = sources[index];\n      if (source) {\n        assigner(object, source, index, customizer);\n      }\n    }\n    return object;\n  });\n}\n\nmodule.exports = createAssigner;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_createAssigner.js?");

/***/ }),

/***/ "../node_modules/lodash/_createBaseFor.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "../node_modules/lodash/_defineProperty.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_defineProperty.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"../node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "../node_modules/lodash/_freeGlobal.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_freeGlobal.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "../node_modules/lodash/_getMapData.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getMapData.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"../node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "../node_modules/lodash/_getNative.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getNative.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"../node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"../node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "../node_modules/lodash/_getPrototype.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getPrototype.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"../node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "../node_modules/lodash/_getRawTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_getRawTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"../node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "../node_modules/lodash/_getValue.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_getValue.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "../node_modules/lodash/_hashClear.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_hashClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"../node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "../node_modules/lodash/_hashDelete.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_hashDelete.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "../node_modules/lodash/_hashGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashGet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"../node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "../node_modules/lodash/_hashHas.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashHas.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"../node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "../node_modules/lodash/_hashSet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_hashSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"../node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "../node_modules/lodash/_initCloneObject.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_initCloneObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseCreate = __webpack_require__(/*! ./_baseCreate */ \"../node_modules/lodash/_baseCreate.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"../node_modules/lodash/_getPrototype.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"../node_modules/lodash/_isPrototype.js\");\n\n/**\n * Initializes an object clone.\n *\n * @private\n * @param {Object} object The object to clone.\n * @returns {Object} Returns the initialized clone.\n */\nfunction initCloneObject(object) {\n  return (typeof object.constructor == 'function' && !isPrototype(object))\n    ? baseCreate(getPrototype(object))\n    : {};\n}\n\nmodule.exports = initCloneObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_initCloneObject.js?");

/***/ }),

/***/ "../node_modules/lodash/_isIndex.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_isIndex.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "../node_modules/lodash/_isIterateeCall.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"../node_modules/lodash/eq.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"../node_modules/lodash/isArrayLike.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"../node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\");\n\n/**\n * Checks if the given arguments are from an iteratee call.\n *\n * @private\n * @param {*} value The potential iteratee value argument.\n * @param {*} index The potential iteratee index or key argument.\n * @param {*} object The potential iteratee object argument.\n * @returns {boolean} Returns `true` if the arguments are from an iteratee call,\n *  else `false`.\n */\nfunction isIterateeCall(value, index, object) {\n  if (!isObject(object)) {\n    return false;\n  }\n  var type = typeof index;\n  if (type == 'number'\n        ? (isArrayLike(object) && isIndex(index, object.length))\n        : (type == 'string' && index in object)\n      ) {\n    return eq(object[index], value);\n  }\n  return false;\n}\n\nmodule.exports = isIterateeCall;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_isIterateeCall.js?");

/***/ }),

/***/ "../node_modules/lodash/_isKeyable.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_isKeyable.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "../node_modules/lodash/_isMasked.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_isMasked.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"../node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "../node_modules/lodash/_listCacheClear.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_listCacheClear.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "../node_modules/lodash/_listCacheDelete.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_listCacheDelete.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"../node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "../node_modules/lodash/_listCacheGet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheGet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"../node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "../node_modules/lodash/_listCacheHas.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheHas.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"../node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "../node_modules/lodash/_listCacheSet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_listCacheSet.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"../node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "../node_modules/lodash/_mapCacheClear.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_mapCacheClear.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"../node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"../node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"../node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "../node_modules/lodash/_mapCacheDelete.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_mapCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"../node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "../node_modules/lodash/_mapCacheGet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"../node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "../node_modules/lodash/_mapCacheHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"../node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "../node_modules/lodash/_mapCacheSet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_mapCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"../node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "../node_modules/lodash/_nativeCreate.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeCreate.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"../node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "../node_modules/lodash/_nativeKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/**\n * This function is like\n * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * except that it includes inherited enumerable properties.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction nativeKeysIn(object) {\n  var result = [];\n  if (object != null) {\n    for (var key in Object(object)) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = nativeKeysIn;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_nativeKeysIn.js?");

/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"../node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "../node_modules/lodash/_objectToString.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_objectToString.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "../node_modules/lodash/_overArg.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "../node_modules/lodash/_overRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var apply = __webpack_require__(/*! ./_apply */ \"../node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "../node_modules/lodash/_root.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/_root.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"../node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_root.js?");

/***/ }),

/***/ "../node_modules/lodash/_safeGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_safeGet.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key`, unless `key` is \"__proto__\" or \"constructor\".\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction safeGet(object, key) {\n  if (key === 'constructor' && typeof object[key] === 'function') {\n    return;\n  }\n\n  if (key == '__proto__') {\n    return;\n  }\n\n  return object[key];\n}\n\nmodule.exports = safeGet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_safeGet.js?");

/***/ }),

/***/ "../node_modules/lodash/_setToString.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ \"../node_modules/lodash/_baseSetToString.js\"),\n    shortOut = __webpack_require__(/*! ./_shortOut */ \"../node_modules/lodash/_shortOut.js\");\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\nmodule.exports = setToString;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "../node_modules/lodash/_shortOut.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeNow = Date.now;\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\nmodule.exports = shortOut;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_shortOut.js?");

/***/ }),

/***/ "../node_modules/lodash/_stackClear.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"../node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "../node_modules/lodash/_stackDelete.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "../node_modules/lodash/_stackGet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "../node_modules/lodash/_stackHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "../node_modules/lodash/_stackSet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"../node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"../node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"../node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "../node_modules/lodash/_toSource.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_toSource.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "../node_modules/lodash/constant.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/constant.js?");

/***/ }),

/***/ "../node_modules/lodash/eq.js":
/*!************************************!*\
  !*** ../node_modules/lodash/eq.js ***!
  \************************************/
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/eq.js?");

/***/ }),

/***/ "../node_modules/lodash/identity.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/identity.js?");

/***/ }),

/***/ "../node_modules/lodash/isArguments.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArguments.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"../node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"../node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "../node_modules/lodash/isArray.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isArray.js?");

/***/ }),

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"../node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"../node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "../node_modules/lodash/isArrayLikeObject.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/isArrayLikeObject.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"../node_modules/lodash/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"../node_modules/lodash/isObjectLike.js\");\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\nmodule.exports = isArrayLikeObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isArrayLikeObject.js?");

/***/ }),

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar root = __webpack_require__(/*! ./_root */ \"../node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"../node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "../node_modules/lodash/isFunction.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/isFunction.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"../node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"../node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "../node_modules/lodash/isLength.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isLength.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isLength.js?");

/***/ }),

/***/ "../node_modules/lodash/isObject.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isObject.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isObject.js?");

/***/ }),

/***/ "../node_modules/lodash/isObjectLike.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isObjectLike.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "../node_modules/lodash/isPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/isPlainObject.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"../node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"../node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"../node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"../node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"../node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"../node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "../node_modules/lodash/keysIn.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"../node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ \"../node_modules/lodash/_baseKeysIn.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"../node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own and inherited enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keysIn(new Foo);\n * // => ['a', 'b', 'c'] (iteration order is not guaranteed)\n */\nfunction keysIn(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);\n}\n\nmodule.exports = keysIn;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/keysIn.js?");

/***/ }),

/***/ "../node_modules/lodash/merge.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/merge.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseMerge = __webpack_require__(/*! ./_baseMerge */ \"../node_modules/lodash/_baseMerge.js\"),\n    createAssigner = __webpack_require__(/*! ./_createAssigner */ \"../node_modules/lodash/_createAssigner.js\");\n\n/**\n * This method is like `_.assign` except that it recursively merges own and\n * inherited enumerable string keyed properties of source objects into the\n * destination object. Source properties that resolve to `undefined` are\n * skipped if a destination value exists. Array and plain object properties\n * are merged recursively. Other objects and value types are overridden by\n * assignment. Source objects are applied from left to right. Subsequent\n * sources overwrite property assignments of previous sources.\n *\n * **Note:** This method mutates `object`.\n *\n * @static\n * @memberOf _\n * @since 0.5.0\n * @category Object\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n * @example\n *\n * var object = {\n *   'a': [{ 'b': 2 }, { 'd': 4 }]\n * };\n *\n * var other = {\n *   'a': [{ 'c': 3 }, { 'e': 5 }]\n * };\n *\n * _.merge(object, other);\n * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }\n */\nvar merge = createAssigner(function(object, source, srcIndex) {\n  baseMerge(object, source, srcIndex);\n});\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/merge.js?");

/***/ }),

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "../node_modules/lodash/toPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/toPlainObject.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var copyObject = __webpack_require__(/*! ./_copyObject */ \"../node_modules/lodash/_copyObject.js\"),\n    keysIn = __webpack_require__(/*! ./keysIn */ \"../node_modules/lodash/keysIn.js\");\n\n/**\n * Converts `value` to a plain object flattening inherited enumerable string\n * keyed properties of `value` to own properties of the plain object.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {Object} Returns the converted plain object.\n * @example\n *\n * function Foo() {\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.assign({ 'a': 1 }, new Foo);\n * // => { 'a': 1, 'b': 2 }\n *\n * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));\n * // => { 'a': 1, 'b': 2, 'c': 3 }\n */\nfunction toPlainObject(value) {\n  return copyObject(value, keysIn(value));\n}\n\nmodule.exports = toPlainObject;\n\n\n//# sourceURL=webpack:///../node_modules/lodash/toPlainObject.js?");

/***/ }),

/***/ "./controllers/base.controller.ts":
/*!****************************************!*\
  !*** ./controllers/base.controller.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/tool */ \"./utils/tool.ts\");\n\nclass BaseController {\n    constructor() {\n    }\n    queryAllQuickLinkData(callback) {\n        const filePaths = (0,_utils_tool__WEBPACK_IMPORTED_MODULE_0__.iterationStep)(__dirname);\n        for (let pathname of filePaths) {\n            if (pathname.match(/quickLinkData_(.)*\\.json/)) {\n                callback(pathname);\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseController);\n\n\n//# sourceURL=webpack:///./controllers/base.controller.ts?");

/***/ }),

/***/ "./controllers/data.controller.ts":
/*!****************************************!*\
  !*** ./controllers/data.controller.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _base_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.controller */ \"./controllers/base.controller.ts\");\n\n\n\nconst cwd = process.cwd();\nclass DataController extends _base_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(id) {\n        super();\n        this.id = id;\n    }\n    updateQuickLinkData(newData) {\n        const self = this;\n        return this.queryAllQuickLinkData((pathname) => {\n            const content = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(pathname, { encoding: 'utf8' }));\n            let keys = Object.keys(content);\n            for (let v of keys) {\n                if (content[v][self.id]) {\n                    content[v][self.id] = newData;\n                    break;\n                }\n            }\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(pathname, JSON.stringify(content), { encoding: 'utf8' });\n        });\n    }\n    deleteQuickLinkData() {\n        const self = this;\n        return this.queryAllQuickLinkData((pathname) => {\n            const content = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(pathname, { encoding: 'utf8' }));\n            let keys = Object.keys(content);\n            for (let v of keys) {\n                if (content[v][self.id]) {\n                    delete content[v][self.id];\n                    break;\n                }\n            }\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(pathname, JSON.stringify(content), { encoding: 'utf8' });\n        });\n    }\n    searchQuickLinkData(keywords) {\n        let result = [];\n        const file = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'quickLinkData_default.json');\n        if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(file).isFile()) {\n            const content = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(file, { encoding: 'utf8' }));\n            const keys = Object.keys(content.default);\n            for (let v of keys) {\n                if (content['default'][v].title.includes(keywords)) {\n                    result.push(v);\n                }\n            }\n        }\n        return {\n            status: {\n                code: 0,\n            },\n            result\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataController);\n\n\n//# sourceURL=webpack:///./controllers/data.controller.ts?");

/***/ }),

/***/ "./controllers/dialog.controller.ts":
/*!******************************************!*\
  !*** ./controllers/dialog.controller.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var file_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-type */ \"../node_modules/file-type/index.js\");\n/* harmony import */ var _utils_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tool */ \"./utils/tool.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _DialogController_instances, _DialogController_getOneFileMessage, _DialogController_getMoreFileMessage;\n\n\n\n\nfunction formatTime(time) {\n    try {\n        return (new Date(time)).getFullYear();\n    }\n    catch (err) {\n        console.log('时间格式化异常：', err);\n        return null;\n    }\n}\nclass DialogController {\n    constructor(properties = ['multiSelections', 'openFile', 'openDirectory']) {\n        _DialogController_instances.add(this);\n        this.properties = properties;\n    }\n    handleFileOpen(selfFileType) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let { filePaths: dir, canceled } = yield electron__WEBPACK_IMPORTED_MODULE_0__.dialog.showOpenDialog({ properties: this.properties });\n            const pathname = dir[0];\n            if (pathname && fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(pathname).isFile()) {\n                return __classPrivateFieldGet(this, _DialogController_instances, \"m\", _DialogController_getOneFileMessage).call(this, pathname, selfFileType);\n            }\n            else if (pathname && fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(pathname).isDirectory()) {\n                return __classPrivateFieldGet(this, _DialogController_instances, \"m\", _DialogController_getMoreFileMessage).call(this, pathname, selfFileType);\n            }\n            return {\n                status: {\n                    code: 0,\n                },\n                result: null\n            };\n        });\n    }\n    formatOpenFileData(selfFileType) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const { result: fileList, status } = yield this.handleFileOpen(selfFileType);\n            let map_title = { 'default': {} }, map_factory = {}, map_time = {};\n            if (!fileList)\n                return { title: map_title, time: map_time };\n            for (let item of fileList) {\n                let title = '';\n                if (process.platform === 'win32') {\n                    title = item.path.split('\\\\').pop();\n                }\n                else if (process.platform === 'darwin') {\n                    title = item.path.split('/').pop();\n                }\n                let key = `llscw_${(0,_utils_tool__WEBPACK_IMPORTED_MODULE_2__.encodeByBase64)(title)}`;\n                let time = formatTime(item.cTime);\n                map_title.default[key] = {\n                    id: key,\n                    title: title,\n                    img: item.path,\n                    factory: '测试数据',\n                    createTime: time,\n                    banner: item.path,\n                    about: '测试数据',\n                    startLink: 'https://www.baidu.com'\n                };\n                if (map_time[time]) {\n                    map_time[time][key] = {\n                        id: key,\n                        title: title,\n                        img: item.path,\n                        factory: '测试数据',\n                        createTime: time,\n                        banner: item.path,\n                        about: '测试数据',\n                        startLink: 'https://www.baidu.com'\n                    };\n                }\n                else {\n                    map_time[time] = {\n                        [key]: {\n                            id: key,\n                            title: title,\n                            img: item.path,\n                            factory: '测试数据',\n                            createTime: time,\n                            banner: item.path,\n                            about: '测试数据',\n                            startLink: 'https://www.baidu.com'\n                        }\n                    };\n                }\n            }\n            return { title: map_title, time: map_time };\n        });\n    }\n}\n_DialogController_instances = new WeakSet(), _DialogController_getOneFileMessage = function _DialogController_getOneFileMessage(pathname, selfFileType) {\n    var _a;\n    return __awaiter(this, void 0, void 0, function* () {\n        let type = yield (0,file_type__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromFile)(pathname);\n        if (((_a = type === null || type === void 0 ? void 0 : type.mime) === null || _a === void 0 ? void 0 : _a.includes(selfFileType)) || (type === null || type === void 0 ? void 0 : type.ext) === selfFileType) {\n            return {\n                status: {\n                    code: 0\n                },\n                result: {\n                    path: pathname,\n                    cTime: fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(pathname).ctime,\n                    mTime: fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(pathname).mtime\n                }\n            };\n        }\n        else {\n            return {\n                status: {\n                    code: -1,\n                    message: '所选文件类型错误，请重新选择'\n                },\n                result: null\n            };\n        }\n    });\n}, _DialogController_getMoreFileMessage = function _DialogController_getMoreFileMessage(pathname, selfFileType) {\n    var _a;\n    return __awaiter(this, void 0, void 0, function* () {\n        const filePaths = (0,_utils_tool__WEBPACK_IMPORTED_MODULE_2__.iterationStep)(pathname);\n        const selfFiles = [];\n        console.log(filePaths, '?????你好回家都发');\n        for (let item of filePaths) {\n            let type = yield (0,file_type__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromFile)(item);\n            if (((_a = type === null || type === void 0 ? void 0 : type.mime) === null || _a === void 0 ? void 0 : _a.includes(selfFileType)) || (type === null || type === void 0 ? void 0 : type.ext) === selfFileType) {\n                selfFiles.push({\n                    path: item,\n                    cTime: fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(item).ctime,\n                    mTime: fs__WEBPACK_IMPORTED_MODULE_3___default().statSync(item).mtime\n                });\n            }\n        }\n        return {\n            status: {\n                code: 0\n            },\n            result: selfFiles\n        };\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogController);\n\n\n//# sourceURL=webpack:///./controllers/dialog.controller.ts?");

/***/ }),

/***/ "./controllers/file.controller.ts":
/*!****************************************!*\
  !*** ./controllers/file.controller.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"../node_modules/lodash/merge.js\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass FileController {\n    constructor() {\n    }\n    getQuickLinkData(dir) {\n        try {\n            if (!fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(dir).isFile()) {\n                return {\n                    status: {\n                        code: 0,\n                    },\n                    result: {}\n                };\n            }\n            let fileData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(dir, { encoding: 'utf8' }));\n            if (typeof fileData === 'object') {\n                return {\n                    status: {\n                        code: 0,\n                    },\n                    result: fileData\n                };\n            }\n            else {\n                return {\n                    status: {\n                        code: 0,\n                    },\n                    result: {}\n                };\n            }\n        }\n        catch (err) {\n            return {\n                status: {\n                    code: -1,\n                    message: err\n                },\n                result: {}\n            };\n        }\n    }\n    createQuickLinkMap(data, sort = \"default\") {\n        if (typeof data !== 'object')\n            return false;\n        let dir = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, `quickLinkData_${sort}.json`);\n        let quickLinkData = this.getQuickLinkData(dir).result;\n        try {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(dir, JSON.stringify(lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()(quickLinkData, data)), { encoding: 'utf8' });\n            return true;\n        }\n        catch (err) {\n            return false;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileController);\n\n\n//# sourceURL=webpack:///./controllers/file.controller.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option */ \"./option.ts\");\n/* harmony import */ var _controllers_dialog_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/dialog.controller */ \"./controllers/dialog.controller.ts\");\n/* harmony import */ var _controllers_data_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/data.controller */ \"./controllers/data.controller.ts\");\n/* harmony import */ var _controllers_file_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/file.controller */ \"./controllers/file.controller.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\n\n\nconst createWindow = () => {\n    const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n        height: 600,\n        width: 800,\n        webPreferences: {\n            preload: path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, './preload.js'),\n        },\n    });\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('show-context-menu', (event) => (0,_option__WEBPACK_IMPORTED_MODULE_3__.showContextMenu)(event, mainWindow));\n    mainWindow.loadFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'view/index.html'));\n};\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady().then(() => {\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('dialog:openFile', (event, selfFileType) => __awaiter(void 0, void 0, void 0, function* () {\n        const dialog = new _controllers_dialog_controller__WEBPACK_IMPORTED_MODULE_4__[\"default\"](['multiSelections', 'openDirectory']);\n        let fileList = yield dialog.formatOpenFileData(selfFileType);\n        console.log(fileList, '??Zzz');\n        const file = new _controllers_file_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        file.createQuickLinkMap(fileList.title);\n        file.createQuickLinkMap(fileList.time, 'time');\n        return fileList;\n    }));\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('getQuickLinkData', (event, sort) => {\n        let dir = path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, `./quickLinkData_${sort}.json`);\n        const file = new _controllers_file_controller__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n        return file.getQuickLinkData(dir);\n    });\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('deleteQuickLinkData', (event, id) => {\n        const data = new _controllers_data_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"](id);\n        return data.deleteQuickLinkData();\n    });\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('updateQuickLinkData', (event, id, newData) => {\n        const data = new _controllers_data_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"](id);\n        return data.updateQuickLinkData(newData);\n    });\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle('searchQuickLinkData', (event, keywords) => {\n        const data = new _controllers_data_controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n        return data.searchQuickLinkData(keywords);\n    });\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('open-exe', (event, link) => __awaiter(void 0, void 0, void 0, function* () {\n        if (process.platform !== 'win32')\n            return false;\n        child_process__WEBPACK_IMPORTED_MODULE_2___default().exec(`\"${link}\"`, (err) => {\n            if (err) {\n                console.log('程序启动出错：', err);\n            }\n        });\n    }));\n    createWindow();\n    electron__WEBPACK_IMPORTED_MODULE_0__.app.on('activate', () => {\n        if (electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow.getAllWindows().length === 0)\n            createWindow();\n    });\n});\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('window-all-closed', () => {\n    if (process.platform !== 'darwin') {\n        electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n    }\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./option.ts":
/*!*******************!*\
  !*** ./option.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContextMenu\": () => (/* binding */ showContextMenu)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction showContextMenu(event, win) {\n    const template = [\n        {\n            label: '重新加载',\n            click: () => {\n                win.reload();\n            }\n        },\n        {\n            label: '返回',\n            click: () => {\n                if (win.webContents.canGoBack()) {\n                    win.webContents.goBack();\n                }\n            }\n        },\n        { label: 'Menu Item 2', type: 'checkbox', checked: true }\n    ];\n    const menu = electron__WEBPACK_IMPORTED_MODULE_0__.Menu.buildFromTemplate(template);\n    menu.popup(electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow.fromWebContents(event.sender));\n}\n\n\n\n//# sourceURL=webpack:///./option.ts?");

/***/ }),

/***/ "./utils/tool.ts":
/*!***********************!*\
  !*** ./utils/tool.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodeByBase64\": () => (/* binding */ decodeByBase64),\n/* harmony export */   \"encodeByBase64\": () => (/* binding */ encodeByBase64),\n/* harmony export */   \"iterationStep\": () => (/* binding */ iterationStep),\n/* harmony export */   \"travel\": () => (/* binding */ travel)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction travel(dir, callback) {\n    let file = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir, { encoding: 'utf8' });\n    for (let i = 0; i < file.length; i++) {\n        const pathname = path__WEBPACK_IMPORTED_MODULE_1___default().join(dir, file[i]);\n        if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(pathname).isDirectory()) {\n            travel(pathname, callback);\n        }\n        else if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(pathname).isFile()) {\n            callback(i === file.length - 1, pathname);\n        }\n    }\n}\nfunction iterationStep(dir) {\n    if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(dir).isFile()) {\n        return dir;\n    }\n    let arr = [];\n    let res = [];\n    let file = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir, { encoding: 'utf8' });\n    while (file.length || arr.length) {\n        for (let i = 0; i < file.length; i++) {\n            const pathname = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(dir, file[i]);\n            if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(pathname).isDirectory()) {\n                arr.push(pathname);\n            }\n            else if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(pathname).isFile()) {\n                res.push(pathname);\n            }\n        }\n        dir = arr.pop();\n        file = dir ? fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir, { encoding: 'utf8' }) : [];\n    }\n    return res;\n}\nfunction encodeByBase64(str) {\n    return Buffer.from(str).toString('base64');\n}\nfunction decodeByBase64(str) {\n    return Buffer.from(str, 'base64').toString();\n}\n\n\n\n//# sourceURL=webpack:///./utils/tool.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "../node_modules/file-type/core.js":
/*!*****************************************!*\
  !*** ../node_modules/file-type/core.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fileTypeFromBuffer\": () => (/* binding */ fileTypeFromBuffer),\n/* harmony export */   \"fileTypeFromStream\": () => (/* binding */ fileTypeFromStream),\n/* harmony export */   \"fileTypeFromTokenizer\": () => (/* binding */ fileTypeFromTokenizer),\n/* harmony export */   \"fileTypeStream\": () => (/* binding */ fileTypeStream),\n/* harmony export */   \"supportedExtensions\": () => (/* binding */ supportedExtensions),\n/* harmony export */   \"supportedMimeTypes\": () => (/* binding */ supportedMimeTypes)\n/* harmony export */ });\n/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:buffer */ \"node:buffer\");\n/* harmony import */ var token_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! token-types */ \"../node_modules/token-types/lib/index.js\");\n/* harmony import */ var strtok3_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strtok3/core */ \"../node_modules/strtok3/lib/core.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ \"../node_modules/file-type/util.js\");\n/* harmony import */ var _supported_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supported.js */ \"../node_modules/file-type/supported.js\");\n\n\n // eslint-disable-line n/file-extension-in-import\n\n\n\nconst minimumBytes = 4100; // A fair amount of file-types are detectable within this range.\n\nasync function fileTypeFromStream(stream) {\n\tconst tokenizer = await strtok3_core__WEBPACK_IMPORTED_MODULE_2__.fromStream(stream);\n\ttry {\n\t\treturn await fileTypeFromTokenizer(tokenizer);\n\t} finally {\n\t\tawait tokenizer.close();\n\t}\n}\n\nasync function fileTypeFromBuffer(input) {\n\tif (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {\n\t\tthrow new TypeError(`Expected the \\`input\\` argument to be of type \\`Uint8Array\\` or \\`Buffer\\` or \\`ArrayBuffer\\`, got \\`${typeof input}\\``);\n\t}\n\n\tconst buffer = input instanceof Uint8Array ? input : new Uint8Array(input);\n\n\tif (!(buffer?.length > 1)) {\n\t\treturn;\n\t}\n\n\treturn fileTypeFromTokenizer(strtok3_core__WEBPACK_IMPORTED_MODULE_2__.fromBuffer(buffer));\n}\n\nfunction _check(buffer, headers, options) {\n\toptions = {\n\t\toffset: 0,\n\t\t...options,\n\t};\n\n\tfor (const [index, header] of headers.entries()) {\n\t\t// If a bitmask is set\n\t\tif (options.mask) {\n\t\t\t// If header doesn't equal `buf` with bits masked off\n\t\t\tif (header !== (options.mask[index] & buffer[index + options.offset])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else if (header !== buffer[index + options.offset]) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n}\n\nasync function fileTypeFromTokenizer(tokenizer) {\n\ttry {\n\t\treturn new FileTypeParser().parse(tokenizer);\n\t} catch (error) {\n\t\tif (!(error instanceof strtok3_core__WEBPACK_IMPORTED_MODULE_2__.EndOfStreamError)) {\n\t\t\tthrow error;\n\t\t}\n\t}\n}\n\nclass FileTypeParser {\n\tcheck(header, options) {\n\t\treturn _check(this.buffer, header, options);\n\t}\n\n\tcheckString(header, options) {\n\t\treturn this.check((0,_util_js__WEBPACK_IMPORTED_MODULE_3__.stringToBytes)(header), options);\n\t}\n\n\tasync parse(tokenizer) {\n\t\tthis.buffer = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(minimumBytes);\n\n\t\t// Keep reading until EOF if the file size is unknown.\n\t\tif (tokenizer.fileInfo.size === undefined) {\n\t\t\ttokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;\n\t\t}\n\n\t\tthis.tokenizer = tokenizer;\n\n\t\tawait tokenizer.peekBuffer(this.buffer, {length: 12, mayBeLess: true});\n\n\t\t// -- 2-byte signatures --\n\n\t\tif (this.check([0x42, 0x4D])) {\n\t\t\treturn {\n\t\t\t\text: 'bmp',\n\t\t\t\tmime: 'image/bmp',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x0B, 0x77])) {\n\t\t\treturn {\n\t\t\t\text: 'ac3',\n\t\t\t\tmime: 'audio/vnd.dolby.dd-raw',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x78, 0x01])) {\n\t\t\treturn {\n\t\t\t\text: 'dmg',\n\t\t\t\tmime: 'application/x-apple-diskimage',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x4D, 0x5A])) {\n\t\t\treturn {\n\t\t\t\text: 'exe',\n\t\t\t\tmime: 'application/x-msdownload',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x25, 0x21])) {\n\t\t\tawait tokenizer.peekBuffer(this.buffer, {length: 24, mayBeLess: true});\n\n\t\t\tif (\n\t\t\t\tthis.checkString('PS-Adobe-', {offset: 2})\n\t\t\t\t&& this.checkString(' EPSF-', {offset: 14})\n\t\t\t) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'eps',\n\t\t\t\t\tmime: 'application/eps',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\text: 'ps',\n\t\t\t\tmime: 'application/postscript',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.check([0x1F, 0xA0])\n\t\t\t|| this.check([0x1F, 0x9D])\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'Z',\n\t\t\t\tmime: 'application/x-compress',\n\t\t\t};\n\t\t}\n\n\t\t// -- 3-byte signatures --\n\n\t\tif (this.check([0xEF, 0xBB, 0xBF])) { // UTF-8-BOM\n\t\t\t// Strip off UTF-8-BOM\n\t\t\tthis.tokenizer.ignore(3);\n\t\t\treturn this.parse(tokenizer);\n\t\t}\n\n\t\tif (this.check([0x47, 0x49, 0x46])) {\n\t\t\treturn {\n\t\t\t\text: 'gif',\n\t\t\t\tmime: 'image/gif',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x49, 0x49, 0xBC])) {\n\t\t\treturn {\n\t\t\t\text: 'jxr',\n\t\t\t\tmime: 'image/vnd.ms-photo',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x1F, 0x8B, 0x8])) {\n\t\t\treturn {\n\t\t\t\text: 'gz',\n\t\t\t\tmime: 'application/gzip',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x42, 0x5A, 0x68])) {\n\t\t\treturn {\n\t\t\t\text: 'bz2',\n\t\t\t\tmime: 'application/x-bzip2',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('ID3')) {\n\t\t\tawait tokenizer.ignore(6); // Skip ID3 header until the header size\n\t\t\tconst id3HeaderLength = await tokenizer.readToken(_util_js__WEBPACK_IMPORTED_MODULE_3__.uint32SyncSafeToken);\n\t\t\tif (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {\n\t\t\t\t// Guess file type based on ID3 header for backward compatibility\n\t\t\t\treturn {\n\t\t\t\t\text: 'mp3',\n\t\t\t\t\tmime: 'audio/mpeg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tawait tokenizer.ignore(id3HeaderLength);\n\t\t\treturn fileTypeFromTokenizer(tokenizer); // Skip ID3 header, recursion\n\t\t}\n\n\t\t// Musepack, SV7\n\t\tif (this.checkString('MP+')) {\n\t\t\treturn {\n\t\t\t\text: 'mpc',\n\t\t\t\tmime: 'audio/x-musepack',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\t(this.buffer[0] === 0x43 || this.buffer[0] === 0x46)\n\t\t\t&& this.check([0x57, 0x53], {offset: 1})\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'swf',\n\t\t\t\tmime: 'application/x-shockwave-flash',\n\t\t\t};\n\t\t}\n\n\t\t// -- 4-byte signatures --\n\n\t\t// Requires a sample size of 4 bytes\n\t\tif (this.check([0xFF, 0xD8, 0xFF])) {\n\t\t\tif (this.check([0xF7], {offset: 3})) { // JPG7/SOF55, indicating a ISO/IEC 14495 / JPEG-LS file\n\t\t\t\treturn {\n\t\t\t\t\text: 'jls',\n\t\t\t\t\tmime: 'image/jls',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\text: 'jpg',\n\t\t\t\tmime: 'image/jpeg',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('FLIF')) {\n\t\t\treturn {\n\t\t\t\text: 'flif',\n\t\t\t\tmime: 'image/flif',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('8BPS')) {\n\t\t\treturn {\n\t\t\t\text: 'psd',\n\t\t\t\tmime: 'image/vnd.adobe.photoshop',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('WEBP', {offset: 8})) {\n\t\t\treturn {\n\t\t\t\text: 'webp',\n\t\t\t\tmime: 'image/webp',\n\t\t\t};\n\t\t}\n\n\t\t// Musepack, SV8\n\t\tif (this.checkString('MPCK')) {\n\t\t\treturn {\n\t\t\t\text: 'mpc',\n\t\t\t\tmime: 'audio/x-musepack',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('FORM')) {\n\t\t\treturn {\n\t\t\t\text: 'aif',\n\t\t\t\tmime: 'audio/aiff',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('icns', {offset: 0})) {\n\t\t\treturn {\n\t\t\t\text: 'icns',\n\t\t\t\tmime: 'image/icns',\n\t\t\t};\n\t\t}\n\n\t\t// Zip-based file formats\n\t\t// Need to be before the `zip` check\n\t\tif (this.check([0x50, 0x4B, 0x3, 0x4])) { // Local file header signature\n\t\t\ttry {\n\t\t\t\twhile (tokenizer.position + 30 < tokenizer.fileInfo.size) {\n\t\t\t\t\tawait tokenizer.readBuffer(this.buffer, {length: 30});\n\n\t\t\t\t\t// https://en.wikipedia.org/wiki/Zip_(file_format)#File_headers\n\t\t\t\t\tconst zipHeader = {\n\t\t\t\t\t\tcompressedSize: this.buffer.readUInt32LE(18),\n\t\t\t\t\t\tuncompressedSize: this.buffer.readUInt32LE(22),\n\t\t\t\t\t\tfilenameLength: this.buffer.readUInt16LE(26),\n\t\t\t\t\t\textraFieldLength: this.buffer.readUInt16LE(28),\n\t\t\t\t\t};\n\n\t\t\t\t\tzipHeader.filename = await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(zipHeader.filenameLength, 'utf-8'));\n\t\t\t\t\tawait tokenizer.ignore(zipHeader.extraFieldLength);\n\n\t\t\t\t\t// Assumes signed `.xpi` from addons.mozilla.org\n\t\t\t\t\tif (zipHeader.filename === 'META-INF/mozilla.rsa') {\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'xpi',\n\t\t\t\t\t\t\tmime: 'application/x-xpinstall',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\tif (zipHeader.filename.endsWith('.rels') || zipHeader.filename.endsWith('.xml')) {\n\t\t\t\t\t\tconst type = zipHeader.filename.split('/')[0];\n\t\t\t\t\t\tswitch (type) {\n\t\t\t\t\t\t\tcase '_rels':\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'word':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'docx',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tcase 'ppt':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'pptx',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tcase 'xl':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'xlsx',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (zipHeader.filename.startsWith('xl/')) {\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'xlsx',\n\t\t\t\t\t\t\tmime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\tif (zipHeader.filename.startsWith('3D/') && zipHeader.filename.endsWith('.model')) {\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: '3mf',\n\t\t\t\t\t\t\tmime: 'model/3mf',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\t// The docx, xlsx and pptx file types extend the Office Open XML file format:\n\t\t\t\t\t// https://en.wikipedia.org/wiki/Office_Open_XML_file_formats\n\t\t\t\t\t// We look for:\n\t\t\t\t\t// - one entry named '[Content_Types].xml' or '_rels/.rels',\n\t\t\t\t\t// - one entry indicating specific type of file.\n\t\t\t\t\t// MS Office, OpenOffice and LibreOffice may put the parts in different order, so the check should not rely on it.\n\t\t\t\t\tif (zipHeader.filename === 'mimetype' && zipHeader.compressedSize === zipHeader.uncompressedSize) {\n\t\t\t\t\t\tlet mimeType = await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(zipHeader.compressedSize, 'utf-8'));\n\t\t\t\t\t\tmimeType = mimeType.trim();\n\n\t\t\t\t\t\tswitch (mimeType) {\n\t\t\t\t\t\t\tcase 'application/epub+zip':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'epub',\n\t\t\t\t\t\t\t\t\tmime: 'application/epub+zip',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tcase 'application/vnd.oasis.opendocument.text':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'odt',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.oasis.opendocument.text',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tcase 'application/vnd.oasis.opendocument.spreadsheet':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'ods',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.oasis.opendocument.spreadsheet',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tcase 'application/vnd.oasis.opendocument.presentation':\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\text: 'odp',\n\t\t\t\t\t\t\t\t\tmime: 'application/vnd.oasis.opendocument.presentation',\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Try to find next header manually when current one is corrupted\n\t\t\t\t\tif (zipHeader.compressedSize === 0) {\n\t\t\t\t\t\tlet nextHeaderIndex = -1;\n\n\t\t\t\t\t\twhile (nextHeaderIndex < 0 && (tokenizer.position < tokenizer.fileInfo.size)) {\n\t\t\t\t\t\t\tawait tokenizer.peekBuffer(this.buffer, {mayBeLess: true});\n\n\t\t\t\t\t\t\tnextHeaderIndex = this.buffer.indexOf('504B0304', 0, 'hex');\n\t\t\t\t\t\t\t// Move position to the next header if found, skip the whole buffer otherwise\n\t\t\t\t\t\t\tawait tokenizer.ignore(nextHeaderIndex >= 0 ? nextHeaderIndex : this.buffer.length);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tawait tokenizer.ignore(zipHeader.compressedSize);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\tif (!(error instanceof strtok3_core__WEBPACK_IMPORTED_MODULE_2__.EndOfStreamError)) {\n\t\t\t\t\tthrow error;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\text: 'zip',\n\t\t\t\tmime: 'application/zip',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('OggS')) {\n\t\t\t// This is an OGG container\n\t\t\tawait tokenizer.ignore(28);\n\t\t\tconst type = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(8);\n\t\t\tawait tokenizer.readBuffer(type);\n\n\t\t\t// Needs to be before `ogg` check\n\t\t\tif (_check(type, [0x4F, 0x70, 0x75, 0x73, 0x48, 0x65, 0x61, 0x64])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'opus',\n\t\t\t\t\tmime: 'audio/opus',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// If ' theora' in header.\n\t\t\tif (_check(type, [0x80, 0x74, 0x68, 0x65, 0x6F, 0x72, 0x61])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'ogv',\n\t\t\t\t\tmime: 'video/ogg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// If '\\x01video' in header.\n\t\t\tif (_check(type, [0x01, 0x76, 0x69, 0x64, 0x65, 0x6F, 0x00])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'ogm',\n\t\t\t\t\tmime: 'video/ogg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// If ' FLAC' in header  https://xiph.org/flac/faq.html\n\t\t\tif (_check(type, [0x7F, 0x46, 0x4C, 0x41, 0x43])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'oga',\n\t\t\t\t\tmime: 'audio/ogg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// 'Speex  ' in header https://en.wikipedia.org/wiki/Speex\n\t\t\tif (_check(type, [0x53, 0x70, 0x65, 0x65, 0x78, 0x20, 0x20])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'spx',\n\t\t\t\t\tmime: 'audio/ogg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// If '\\x01vorbis' in header\n\t\t\tif (_check(type, [0x01, 0x76, 0x6F, 0x72, 0x62, 0x69, 0x73])) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'ogg',\n\t\t\t\t\tmime: 'audio/ogg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// Default OGG container https://www.iana.org/assignments/media-types/application/ogg\n\t\t\treturn {\n\t\t\t\text: 'ogx',\n\t\t\t\tmime: 'application/ogg',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.check([0x50, 0x4B])\n\t\t\t&& (this.buffer[2] === 0x3 || this.buffer[2] === 0x5 || this.buffer[2] === 0x7)\n\t\t\t&& (this.buffer[3] === 0x4 || this.buffer[3] === 0x6 || this.buffer[3] === 0x8)\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'zip',\n\t\t\t\tmime: 'application/zip',\n\t\t\t};\n\t\t}\n\n\t\t//\n\n\t\t// File Type Box (https://en.wikipedia.org/wiki/ISO_base_media_file_format)\n\t\t// It's not required to be first, but it's recommended to be. Almost all ISO base media files start with `ftyp` box.\n\t\t// `ftyp` box must contain a brand major identifier, which must consist of ISO 8859-1 printable characters.\n\t\t// Here we check for 8859-1 printable characters (for simplicity, it's a mask which also catches one non-printable character).\n\t\tif (\n\t\t\tthis.checkString('ftyp', {offset: 4})\n\t\t\t&& (this.buffer[8] & 0x60) !== 0x00 // Brand major, first character ASCII?\n\t\t) {\n\t\t\t// They all can have MIME `video/mp4` except `application/mp4` special-case which is hard to detect.\n\t\t\t// For some cases, we're specific, everything else falls to `video/mp4` with `mp4` extension.\n\t\t\tconst brandMajor = this.buffer.toString('binary', 8, 12).replace('\\0', ' ').trim();\n\t\t\tswitch (brandMajor) {\n\t\t\t\tcase 'avif':\n\t\t\t\tcase 'avis':\n\t\t\t\t\treturn {ext: 'avif', mime: 'image/avif'};\n\t\t\t\tcase 'mif1':\n\t\t\t\t\treturn {ext: 'heic', mime: 'image/heif'};\n\t\t\t\tcase 'msf1':\n\t\t\t\t\treturn {ext: 'heic', mime: 'image/heif-sequence'};\n\t\t\t\tcase 'heic':\n\t\t\t\tcase 'heix':\n\t\t\t\t\treturn {ext: 'heic', mime: 'image/heic'};\n\t\t\t\tcase 'hevc':\n\t\t\t\tcase 'hevx':\n\t\t\t\t\treturn {ext: 'heic', mime: 'image/heic-sequence'};\n\t\t\t\tcase 'qt':\n\t\t\t\t\treturn {ext: 'mov', mime: 'video/quicktime'};\n\t\t\t\tcase 'M4V':\n\t\t\t\tcase 'M4VH':\n\t\t\t\tcase 'M4VP':\n\t\t\t\t\treturn {ext: 'm4v', mime: 'video/x-m4v'};\n\t\t\t\tcase 'M4P':\n\t\t\t\t\treturn {ext: 'm4p', mime: 'video/mp4'};\n\t\t\t\tcase 'M4B':\n\t\t\t\t\treturn {ext: 'm4b', mime: 'audio/mp4'};\n\t\t\t\tcase 'M4A':\n\t\t\t\t\treturn {ext: 'm4a', mime: 'audio/x-m4a'};\n\t\t\t\tcase 'F4V':\n\t\t\t\t\treturn {ext: 'f4v', mime: 'video/mp4'};\n\t\t\t\tcase 'F4P':\n\t\t\t\t\treturn {ext: 'f4p', mime: 'video/mp4'};\n\t\t\t\tcase 'F4A':\n\t\t\t\t\treturn {ext: 'f4a', mime: 'audio/mp4'};\n\t\t\t\tcase 'F4B':\n\t\t\t\t\treturn {ext: 'f4b', mime: 'audio/mp4'};\n\t\t\t\tcase 'crx':\n\t\t\t\t\treturn {ext: 'cr3', mime: 'image/x-canon-cr3'};\n\t\t\t\tdefault:\n\t\t\t\t\tif (brandMajor.startsWith('3g')) {\n\t\t\t\t\t\tif (brandMajor.startsWith('3g2')) {\n\t\t\t\t\t\t\treturn {ext: '3g2', mime: 'video/3gpp2'};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn {ext: '3gp', mime: 'video/3gpp'};\n\t\t\t\t\t}\n\n\t\t\t\t\treturn {ext: 'mp4', mime: 'video/mp4'};\n\t\t\t}\n\t\t}\n\n\t\tif (this.checkString('MThd')) {\n\t\t\treturn {\n\t\t\t\text: 'mid',\n\t\t\t\tmime: 'audio/midi',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.checkString('wOFF')\n\t\t\t&& (\n\t\t\t\tthis.check([0x00, 0x01, 0x00, 0x00], {offset: 4})\n\t\t\t\t|| this.checkString('OTTO', {offset: 4})\n\t\t\t)\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'woff',\n\t\t\t\tmime: 'font/woff',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.checkString('wOF2')\n\t\t\t&& (\n\t\t\t\tthis.check([0x00, 0x01, 0x00, 0x00], {offset: 4})\n\t\t\t\t|| this.checkString('OTTO', {offset: 4})\n\t\t\t)\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'woff2',\n\t\t\t\tmime: 'font/woff2',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xD4, 0xC3, 0xB2, 0xA1]) || this.check([0xA1, 0xB2, 0xC3, 0xD4])) {\n\t\t\treturn {\n\t\t\t\text: 'pcap',\n\t\t\t\tmime: 'application/vnd.tcpdump.pcap',\n\t\t\t};\n\t\t}\n\n\t\t// Sony DSD Stream File (DSF)\n\t\tif (this.checkString('DSD ')) {\n\t\t\treturn {\n\t\t\t\text: 'dsf',\n\t\t\t\tmime: 'audio/x-dsf', // Non-standard\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('LZIP')) {\n\t\t\treturn {\n\t\t\t\text: 'lz',\n\t\t\t\tmime: 'application/x-lzip',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('fLaC')) {\n\t\t\treturn {\n\t\t\t\text: 'flac',\n\t\t\t\tmime: 'audio/x-flac',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x42, 0x50, 0x47, 0xFB])) {\n\t\t\treturn {\n\t\t\t\text: 'bpg',\n\t\t\t\tmime: 'image/bpg',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('wvpk')) {\n\t\t\treturn {\n\t\t\t\text: 'wv',\n\t\t\t\tmime: 'audio/wavpack',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('%PDF')) {\n\t\t\ttry {\n\t\t\t\tawait tokenizer.ignore(1350);\n\t\t\t\tconst maxBufferSize = 10 * 1024 * 1024;\n\t\t\t\tconst buffer = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(Math.min(maxBufferSize, tokenizer.fileInfo.size));\n\t\t\t\tawait tokenizer.readBuffer(buffer, {mayBeLess: true});\n\n\t\t\t\t// Check if this is an Adobe Illustrator file\n\t\t\t\tif (buffer.includes(node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from('AIPrivateData'))) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'ai',\n\t\t\t\t\t\tmime: 'application/postscript',\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\t// Swallow end of stream error if file is too small for the Adobe AI check\n\t\t\t\tif (!(error instanceof strtok3_core__WEBPACK_IMPORTED_MODULE_2__.EndOfStreamError)) {\n\t\t\t\t\tthrow error;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Assume this is just a normal PDF\n\t\t\treturn {\n\t\t\t\text: 'pdf',\n\t\t\t\tmime: 'application/pdf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x00, 0x61, 0x73, 0x6D])) {\n\t\t\treturn {\n\t\t\t\text: 'wasm',\n\t\t\t\tmime: 'application/wasm',\n\t\t\t};\n\t\t}\n\n\t\t// TIFF, little-endian type\n\t\tif (this.check([0x49, 0x49])) {\n\t\t\tconst fileType = await this.readTiffHeader(false);\n\t\t\tif (fileType) {\n\t\t\t\treturn fileType;\n\t\t\t}\n\t\t}\n\n\t\t// TIFF, big-endian type\n\t\tif (this.check([0x4D, 0x4D])) {\n\t\t\tconst fileType = await this.readTiffHeader(true);\n\t\t\tif (fileType) {\n\t\t\t\treturn fileType;\n\t\t\t}\n\t\t}\n\n\t\tif (this.checkString('MAC ')) {\n\t\t\treturn {\n\t\t\t\text: 'ape',\n\t\t\t\tmime: 'audio/ape',\n\t\t\t};\n\t\t}\n\n\t\t// https://github.com/threatstack/libmagic/blob/master/magic/Magdir/matroska\n\t\tif (this.check([0x1A, 0x45, 0xDF, 0xA3])) { // Root element: EBML\n\t\t\tasync function readField() {\n\t\t\t\tconst msb = await tokenizer.peekNumber(token_types__WEBPACK_IMPORTED_MODULE_1__.UINT8);\n\t\t\t\tlet mask = 0x80;\n\t\t\t\tlet ic = 0; // 0 = A, 1 = B, 2 = C, 3\n\t\t\t\t// = D\n\n\t\t\t\twhile ((msb & mask) === 0 && mask !== 0) {\n\t\t\t\t\t++ic;\n\t\t\t\t\tmask >>= 1;\n\t\t\t\t}\n\n\t\t\t\tconst id = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(ic + 1);\n\t\t\t\tawait tokenizer.readBuffer(id);\n\t\t\t\treturn id;\n\t\t\t}\n\n\t\t\tasync function readElement() {\n\t\t\t\tconst id = await readField();\n\t\t\t\tconst lengthField = await readField();\n\t\t\t\tlengthField[0] ^= 0x80 >> (lengthField.length - 1);\n\t\t\t\tconst nrLength = Math.min(6, lengthField.length); // JavaScript can max read 6 bytes integer\n\t\t\t\treturn {\n\t\t\t\t\tid: id.readUIntBE(0, id.length),\n\t\t\t\t\tlen: lengthField.readUIntBE(lengthField.length - nrLength, nrLength),\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tasync function readChildren(children) {\n\t\t\t\twhile (children > 0) {\n\t\t\t\t\tconst element = await readElement();\n\t\t\t\t\tif (element.id === 0x42_82) {\n\t\t\t\t\t\tconst rawValue = await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(element.len, 'utf-8'));\n\t\t\t\t\t\treturn rawValue.replace(/\\00.*$/g, ''); // Return DocType\n\t\t\t\t\t}\n\n\t\t\t\t\tawait tokenizer.ignore(element.len); // ignore payload\n\t\t\t\t\t--children;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tconst re = await readElement();\n\t\t\tconst docType = await readChildren(re.len);\n\n\t\t\tswitch (docType) {\n\t\t\t\tcase 'webm':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'webm',\n\t\t\t\t\t\tmime: 'video/webm',\n\t\t\t\t\t};\n\n\t\t\t\tcase 'matroska':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'mkv',\n\t\t\t\t\t\tmime: 'video/x-matroska',\n\t\t\t\t\t};\n\n\t\t\t\tdefault:\n\t\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\t// RIFF file format which might be AVI, WAV, QCP, etc\n\t\tif (this.check([0x52, 0x49, 0x46, 0x46])) {\n\t\t\tif (this.check([0x41, 0x56, 0x49], {offset: 8})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'avi',\n\t\t\t\t\tmime: 'video/vnd.avi',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tif (this.check([0x57, 0x41, 0x56, 0x45], {offset: 8})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'wav',\n\t\t\t\t\tmime: 'audio/vnd.wave',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// QLCM, QCP file\n\t\t\tif (this.check([0x51, 0x4C, 0x43, 0x4D], {offset: 8})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'qcp',\n\t\t\t\t\tmime: 'audio/qcelp',\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\tif (this.checkString('SQLi')) {\n\t\t\treturn {\n\t\t\t\text: 'sqlite',\n\t\t\t\tmime: 'application/x-sqlite3',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x4E, 0x45, 0x53, 0x1A])) {\n\t\t\treturn {\n\t\t\t\text: 'nes',\n\t\t\t\tmime: 'application/x-nintendo-nes-rom',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('Cr24')) {\n\t\t\treturn {\n\t\t\t\text: 'crx',\n\t\t\t\tmime: 'application/x-google-chrome-extension',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.checkString('MSCF')\n\t\t\t|| this.checkString('ISc(')\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'cab',\n\t\t\t\tmime: 'application/vnd.ms-cab-compressed',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xED, 0xAB, 0xEE, 0xDB])) {\n\t\t\treturn {\n\t\t\t\text: 'rpm',\n\t\t\t\tmime: 'application/x-rpm',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xC5, 0xD0, 0xD3, 0xC6])) {\n\t\t\treturn {\n\t\t\t\text: 'eps',\n\t\t\t\tmime: 'application/eps',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x28, 0xB5, 0x2F, 0xFD])) {\n\t\t\treturn {\n\t\t\t\text: 'zst',\n\t\t\t\tmime: 'application/zstd',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x7F, 0x45, 0x4C, 0x46])) {\n\t\t\treturn {\n\t\t\t\text: 'elf',\n\t\t\t\tmime: 'application/x-elf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x21, 0x42, 0x44, 0x4E])) {\n\t\t\treturn {\n\t\t\t\text: 'pst',\n\t\t\t\tmime: 'application/vnd.ms-outlook',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('PAR1')) {\n\t\t\treturn {\n\t\t\t\text: 'parquet',\n\t\t\t\tmime: 'application/x-parquet',\n\t\t\t};\n\t\t}\n\n\t\t// -- 5-byte signatures --\n\n\t\tif (this.check([0x4F, 0x54, 0x54, 0x4F, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'otf',\n\t\t\t\tmime: 'font/otf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('#!AMR')) {\n\t\t\treturn {\n\t\t\t\text: 'amr',\n\t\t\t\tmime: 'audio/amr',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('{\\\\rtf')) {\n\t\t\treturn {\n\t\t\t\text: 'rtf',\n\t\t\t\tmime: 'application/rtf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x46, 0x4C, 0x56, 0x01])) {\n\t\t\treturn {\n\t\t\t\text: 'flv',\n\t\t\t\tmime: 'video/x-flv',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('IMPM')) {\n\t\t\treturn {\n\t\t\t\text: 'it',\n\t\t\t\tmime: 'audio/x-it',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.checkString('-lh0-', {offset: 2})\n\t\t\t|| this.checkString('-lh1-', {offset: 2})\n\t\t\t|| this.checkString('-lh2-', {offset: 2})\n\t\t\t|| this.checkString('-lh3-', {offset: 2})\n\t\t\t|| this.checkString('-lh4-', {offset: 2})\n\t\t\t|| this.checkString('-lh5-', {offset: 2})\n\t\t\t|| this.checkString('-lh6-', {offset: 2})\n\t\t\t|| this.checkString('-lh7-', {offset: 2})\n\t\t\t|| this.checkString('-lzs-', {offset: 2})\n\t\t\t|| this.checkString('-lz4-', {offset: 2})\n\t\t\t|| this.checkString('-lz5-', {offset: 2})\n\t\t\t|| this.checkString('-lhd-', {offset: 2})\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'lzh',\n\t\t\t\tmime: 'application/x-lzh-compressed',\n\t\t\t};\n\t\t}\n\n\t\t// MPEG program stream (PS or MPEG-PS)\n\t\tif (this.check([0x00, 0x00, 0x01, 0xBA])) {\n\t\t\t//  MPEG-PS, MPEG-1 Part 1\n\t\t\tif (this.check([0x21], {offset: 4, mask: [0xF1]})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'mpg', // May also be .ps, .mpeg\n\t\t\t\t\tmime: 'video/MP1S',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// MPEG-PS, MPEG-2 Part 1\n\t\t\tif (this.check([0x44], {offset: 4, mask: [0xC4]})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'mpg', // May also be .mpg, .m2p, .vob or .sub\n\t\t\t\t\tmime: 'video/MP2P',\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\tif (this.checkString('ITSF')) {\n\t\t\treturn {\n\t\t\t\text: 'chm',\n\t\t\t\tmime: 'application/vnd.ms-htmlhelp',\n\t\t\t};\n\t\t}\n\n\t\t// -- 6-byte signatures --\n\n\t\tif (this.check([0xFD, 0x37, 0x7A, 0x58, 0x5A, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'xz',\n\t\t\t\tmime: 'application/x-xz',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('<?xml ')) {\n\t\t\treturn {\n\t\t\t\text: 'xml',\n\t\t\t\tmime: 'application/xml',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x37, 0x7A, 0xBC, 0xAF, 0x27, 0x1C])) {\n\t\t\treturn {\n\t\t\t\text: '7z',\n\t\t\t\tmime: 'application/x-7z-compressed',\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.check([0x52, 0x61, 0x72, 0x21, 0x1A, 0x7])\n\t\t\t&& (this.buffer[6] === 0x0 || this.buffer[6] === 0x1)\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'rar',\n\t\t\t\tmime: 'application/x-rar-compressed',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('solid ')) {\n\t\t\treturn {\n\t\t\t\text: 'stl',\n\t\t\t\tmime: 'model/stl',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('AC')) {\n\t\t\tconst version = this.buffer.toString('binary', 2, 6);\n\t\t\tif (version.match('^d*') && version >= 1000 && version <= 1050) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'dwg',\n\t\t\t\t\tmime: 'image/vnd.dwg',\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\t// -- 7-byte signatures --\n\n\t\tif (this.checkString('BLENDER')) {\n\t\t\treturn {\n\t\t\t\text: 'blend',\n\t\t\t\tmime: 'application/x-blender',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('!<arch>')) {\n\t\t\tawait tokenizer.ignore(8);\n\t\t\tconst string = await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(13, 'ascii'));\n\t\t\tif (string === 'debian-binary') {\n\t\t\t\treturn {\n\t\t\t\t\text: 'deb',\n\t\t\t\t\tmime: 'application/x-deb',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\text: 'ar',\n\t\t\t\tmime: 'application/x-unix-archive',\n\t\t\t};\n\t\t}\n\n\t\t// -- 8-byte signatures --\n\n\t\tif (this.check([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) {\n\t\t\t// APNG format (https://wiki.mozilla.org/APNG_Specification)\n\t\t\t// 1. Find the first IDAT (image data) chunk (49 44 41 54)\n\t\t\t// 2. Check if there is an \"acTL\" chunk before the IDAT one (61 63 54 4C)\n\n\t\t\t// Offset calculated as follows:\n\t\t\t// - 8 bytes: PNG signature\n\t\t\t// - 4 (length) + 4 (chunk type) + 13 (chunk data) + 4 (CRC): IHDR chunk\n\n\t\t\tawait tokenizer.ignore(8); // ignore PNG signature\n\n\t\t\tasync function readChunkHeader() {\n\t\t\t\treturn {\n\t\t\t\t\tlength: await tokenizer.readToken(token_types__WEBPACK_IMPORTED_MODULE_1__.INT32_BE),\n\t\t\t\t\ttype: await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(4, 'binary')),\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tdo {\n\t\t\t\tconst chunk = await readChunkHeader();\n\t\t\t\tif (chunk.length < 0) {\n\t\t\t\t\treturn; // Invalid chunk length\n\t\t\t\t}\n\n\t\t\t\tswitch (chunk.type) {\n\t\t\t\t\tcase 'IDAT':\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'png',\n\t\t\t\t\t\t\tmime: 'image/png',\n\t\t\t\t\t\t};\n\t\t\t\t\tcase 'acTL':\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'apng',\n\t\t\t\t\t\t\tmime: 'image/apng',\n\t\t\t\t\t\t};\n\t\t\t\t\tdefault:\n\t\t\t\t\t\tawait tokenizer.ignore(chunk.length + 4); // Ignore chunk-data + CRC\n\t\t\t\t}\n\t\t\t} while (tokenizer.position + 8 < tokenizer.fileInfo.size);\n\n\t\t\treturn {\n\t\t\t\text: 'png',\n\t\t\t\tmime: 'image/png',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x41, 0x52, 0x52, 0x4F, 0x57, 0x31, 0x00, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'arrow',\n\t\t\t\tmime: 'application/x-apache-arrow',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x67, 0x6C, 0x54, 0x46, 0x02, 0x00, 0x00, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'glb',\n\t\t\t\tmime: 'model/gltf-binary',\n\t\t\t};\n\t\t}\n\n\t\t// `mov` format variants\n\t\tif (\n\t\t\tthis.check([0x66, 0x72, 0x65, 0x65], {offset: 4}) // `free`\n\t\t\t|| this.check([0x6D, 0x64, 0x61, 0x74], {offset: 4}) // `mdat` MJPEG\n\t\t\t|| this.check([0x6D, 0x6F, 0x6F, 0x76], {offset: 4}) // `moov`\n\t\t\t|| this.check([0x77, 0x69, 0x64, 0x65], {offset: 4}) // `wide`\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'mov',\n\t\t\t\tmime: 'video/quicktime',\n\t\t\t};\n\t\t}\n\n\t\t// -- 9-byte signatures --\n\n\t\tif (this.check([0x49, 0x49, 0x52, 0x4F, 0x08, 0x00, 0x00, 0x00, 0x18])) {\n\t\t\treturn {\n\t\t\t\text: 'orf',\n\t\t\t\tmime: 'image/x-olympus-orf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('gimp xcf ')) {\n\t\t\treturn {\n\t\t\t\text: 'xcf',\n\t\t\t\tmime: 'image/x-xcf',\n\t\t\t};\n\t\t}\n\n\t\t// -- 12-byte signatures --\n\n\t\tif (this.check([0x49, 0x49, 0x55, 0x00, 0x18, 0x00, 0x00, 0x00, 0x88, 0xE7, 0x74, 0xD8])) {\n\t\t\treturn {\n\t\t\t\text: 'rw2',\n\t\t\t\tmime: 'image/x-panasonic-rw2',\n\t\t\t};\n\t\t}\n\n\t\t// ASF_Header_Object first 80 bytes\n\t\tif (this.check([0x30, 0x26, 0xB2, 0x75, 0x8E, 0x66, 0xCF, 0x11, 0xA6, 0xD9])) {\n\t\t\tasync function readHeader() {\n\t\t\t\tconst guid = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(16);\n\t\t\t\tawait tokenizer.readBuffer(guid);\n\t\t\t\treturn {\n\t\t\t\t\tid: guid,\n\t\t\t\t\tsize: Number(await tokenizer.readToken(token_types__WEBPACK_IMPORTED_MODULE_1__.UINT64_LE)),\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tawait tokenizer.ignore(30);\n\t\t\t// Search for header should be in first 1KB of file.\n\t\t\twhile (tokenizer.position + 24 < tokenizer.fileInfo.size) {\n\t\t\t\tconst header = await readHeader();\n\t\t\t\tlet payload = header.size - 24;\n\t\t\t\tif (_check(header.id, [0x91, 0x07, 0xDC, 0xB7, 0xB7, 0xA9, 0xCF, 0x11, 0x8E, 0xE6, 0x00, 0xC0, 0x0C, 0x20, 0x53, 0x65])) {\n\t\t\t\t\t// Sync on Stream-Properties-Object (B7DC0791-A9B7-11CF-8EE6-00C00C205365)\n\t\t\t\t\tconst typeId = node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(16);\n\t\t\t\t\tpayload -= await tokenizer.readBuffer(typeId);\n\n\t\t\t\t\tif (_check(typeId, [0x40, 0x9E, 0x69, 0xF8, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {\n\t\t\t\t\t\t// Found audio:\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'asf',\n\t\t\t\t\t\t\tmime: 'audio/x-ms-asf',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\tif (_check(typeId, [0xC0, 0xEF, 0x19, 0xBC, 0x4D, 0x5B, 0xCF, 0x11, 0xA8, 0xFD, 0x00, 0x80, 0x5F, 0x5C, 0x44, 0x2B])) {\n\t\t\t\t\t\t// Found video:\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'asf',\n\t\t\t\t\t\t\tmime: 'video/x-ms-asf',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\n\t\t\t\tawait tokenizer.ignore(payload);\n\t\t\t}\n\n\t\t\t// Default to ASF generic extension\n\t\t\treturn {\n\t\t\t\text: 'asf',\n\t\t\t\tmime: 'application/vnd.ms-asf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A])) {\n\t\t\treturn {\n\t\t\t\text: 'ktx',\n\t\t\t\tmime: 'image/ktx',\n\t\t\t};\n\t\t}\n\n\t\tif ((this.check([0x7E, 0x10, 0x04]) || this.check([0x7E, 0x18, 0x04])) && this.check([0x30, 0x4D, 0x49, 0x45], {offset: 4})) {\n\t\t\treturn {\n\t\t\t\text: 'mie',\n\t\t\t\tmime: 'application/x-mie',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x27, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], {offset: 2})) {\n\t\t\treturn {\n\t\t\t\text: 'shp',\n\t\t\t\tmime: 'application/x-esri-shape',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x00, 0x00, 0x00, 0x0C, 0x6A, 0x50, 0x20, 0x20, 0x0D, 0x0A, 0x87, 0x0A])) {\n\t\t\t// JPEG-2000 family\n\n\t\t\tawait tokenizer.ignore(20);\n\t\t\tconst type = await tokenizer.readToken(new token_types__WEBPACK_IMPORTED_MODULE_1__.StringType(4, 'ascii'));\n\t\t\tswitch (type) {\n\t\t\t\tcase 'jp2 ':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'jp2',\n\t\t\t\t\t\tmime: 'image/jp2',\n\t\t\t\t\t};\n\t\t\t\tcase 'jpx ':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'jpx',\n\t\t\t\t\t\tmime: 'image/jpx',\n\t\t\t\t\t};\n\t\t\t\tcase 'jpm ':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'jpm',\n\t\t\t\t\t\tmime: 'image/jpm',\n\t\t\t\t\t};\n\t\t\t\tcase 'mjp2':\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'mj2',\n\t\t\t\t\t\tmime: 'image/mj2',\n\t\t\t\t\t};\n\t\t\t\tdefault:\n\t\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tif (\n\t\t\tthis.check([0xFF, 0x0A])\n\t\t\t|| this.check([0x00, 0x00, 0x00, 0x0C, 0x4A, 0x58, 0x4C, 0x20, 0x0D, 0x0A, 0x87, 0x0A])\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'jxl',\n\t\t\t\tmime: 'image/jxl',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xFE, 0xFF])) { // UTF-16-BOM-LE\n\t\t\tif (this.check([0, 60, 0, 63, 0, 120, 0, 109, 0, 108], {offset: 2})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'xml',\n\t\t\t\t\tmime: 'application/xml',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn undefined; // Some unknown text based format\n\t\t}\n\n\t\t// -- Unsafe signatures --\n\n\t\tif (\n\t\t\tthis.check([0x0, 0x0, 0x1, 0xBA])\n\t\t\t|| this.check([0x0, 0x0, 0x1, 0xB3])\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'mpg',\n\t\t\t\tmime: 'video/mpeg',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x00, 0x01, 0x00, 0x00, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'ttf',\n\t\t\t\tmime: 'font/ttf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x00, 0x00, 0x01, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'ico',\n\t\t\t\tmime: 'image/x-icon',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x00, 0x00, 0x02, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'cur',\n\t\t\t\tmime: 'image/x-icon',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xD0, 0xCF, 0x11, 0xE0, 0xA1, 0xB1, 0x1A, 0xE1])) {\n\t\t\t// Detected Microsoft Compound File Binary File (MS-CFB) Format.\n\t\t\treturn {\n\t\t\t\text: 'cfb',\n\t\t\t\tmime: 'application/x-cfb',\n\t\t\t};\n\t\t}\n\n\t\t// Increase sample size from 12 to 256.\n\t\tawait tokenizer.peekBuffer(this.buffer, {length: Math.min(256, tokenizer.fileInfo.size), mayBeLess: true});\n\n\t\t// -- 15-byte signatures --\n\n\t\tif (this.checkString('BEGIN:')) {\n\t\t\tif (this.checkString('VCARD', {offset: 6})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'vcf',\n\t\t\t\t\tmime: 'text/vcard',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tif (this.checkString('VCALENDAR', {offset: 6})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'ics',\n\t\t\t\t\tmime: 'text/calendar',\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\n\t\t// `raf` is here just to keep all the raw image detectors together.\n\t\tif (this.checkString('FUJIFILMCCD-RAW')) {\n\t\t\treturn {\n\t\t\t\text: 'raf',\n\t\t\t\tmime: 'image/x-fujifilm-raf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('Extended Module:')) {\n\t\t\treturn {\n\t\t\t\text: 'xm',\n\t\t\t\tmime: 'audio/x-xm',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('Creative Voice File')) {\n\t\t\treturn {\n\t\t\t\text: 'voc',\n\t\t\t\tmime: 'audio/x-voc',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x04, 0x00, 0x00, 0x00]) && this.buffer.length >= 16) { // Rough & quick check Pickle/ASAR\n\t\t\tconst jsonSize = this.buffer.readUInt32LE(12);\n\t\t\tif (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {\n\t\t\t\ttry {\n\t\t\t\t\tconst header = this.buffer.slice(16, jsonSize + 16).toString();\n\t\t\t\t\tconst json = JSON.parse(header);\n\t\t\t\t\t// Check if Pickle is ASAR\n\t\t\t\t\tif (json.files) { // Final check, assuring Pickle/ASAR format\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\text: 'asar',\n\t\t\t\t\t\t\tmime: 'application/x-asar',\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\t\t\t\t} catch {}\n\t\t\t}\n\t\t}\n\n\t\tif (this.check([0x06, 0x0E, 0x2B, 0x34, 0x02, 0x05, 0x01, 0x01, 0x0D, 0x01, 0x02, 0x01, 0x01, 0x02])) {\n\t\t\treturn {\n\t\t\t\text: 'mxf',\n\t\t\t\tmime: 'application/mxf',\n\t\t\t};\n\t\t}\n\n\t\tif (this.checkString('SCRM', {offset: 44})) {\n\t\t\treturn {\n\t\t\t\text: 's3m',\n\t\t\t\tmime: 'audio/x-s3m',\n\t\t\t};\n\t\t}\n\n\t\t// Raw MPEG-2 transport stream (188-byte packets)\n\t\tif (this.check([0x47]) && this.check([0x47], {offset: 188})) {\n\t\t\treturn {\n\t\t\t\text: 'mts',\n\t\t\t\tmime: 'video/mp2t',\n\t\t\t};\n\t\t}\n\n\t\t// Blu-ray Disc Audio-Video (BDAV) MPEG-2 transport stream has 4-byte TP_extra_header before each 188-byte packet\n\t\tif (this.check([0x47], {offset: 4}) && this.check([0x47], {offset: 196})) {\n\t\t\treturn {\n\t\t\t\text: 'mts',\n\t\t\t\tmime: 'video/mp2t',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x42, 0x4F, 0x4F, 0x4B, 0x4D, 0x4F, 0x42, 0x49], {offset: 60})) {\n\t\t\treturn {\n\t\t\t\text: 'mobi',\n\t\t\t\tmime: 'application/x-mobipocket-ebook',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x44, 0x49, 0x43, 0x4D], {offset: 128})) {\n\t\t\treturn {\n\t\t\t\text: 'dcm',\n\t\t\t\tmime: 'application/dicom',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x4C, 0x00, 0x00, 0x00, 0x01, 0x14, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x46])) {\n\t\t\treturn {\n\t\t\t\text: 'lnk',\n\t\t\t\tmime: 'application/x.ms.shortcut', // Invented by us\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x62, 0x6F, 0x6F, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x61, 0x72, 0x6B, 0x00, 0x00, 0x00, 0x00])) {\n\t\t\treturn {\n\t\t\t\text: 'alias',\n\t\t\t\tmime: 'application/x.apple.alias', // Invented by us\n\t\t\t};\n\t\t}\n\n\t\tif (\n\t\t\tthis.check([0x4C, 0x50], {offset: 34})\n\t\t\t&& (\n\t\t\t\tthis.check([0x00, 0x00, 0x01], {offset: 8})\n\t\t\t\t|| this.check([0x01, 0x00, 0x02], {offset: 8})\n\t\t\t\t|| this.check([0x02, 0x00, 0x02], {offset: 8})\n\t\t\t)\n\t\t) {\n\t\t\treturn {\n\t\t\t\text: 'eot',\n\t\t\t\tmime: 'application/vnd.ms-fontobject',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0x06, 0x06, 0xED, 0xF5, 0xD8, 0x1D, 0x46, 0xE5, 0xBD, 0x31, 0xEF, 0xE7, 0xFE, 0x74, 0xB7, 0x1D])) {\n\t\t\treturn {\n\t\t\t\text: 'indd',\n\t\t\t\tmime: 'application/x-indesign',\n\t\t\t};\n\t\t}\n\n\t\t// Increase sample size from 256 to 512\n\t\tawait tokenizer.peekBuffer(this.buffer, {length: Math.min(512, tokenizer.fileInfo.size), mayBeLess: true});\n\n\t\t// Requires a buffer size of 512 bytes\n\t\tif ((0,_util_js__WEBPACK_IMPORTED_MODULE_3__.tarHeaderChecksumMatches)(this.buffer)) {\n\t\t\treturn {\n\t\t\t\text: 'tar',\n\t\t\t\tmime: 'application/x-tar',\n\t\t\t};\n\t\t}\n\n\t\tif (this.check([0xFF, 0xFE])) { // UTF-16-BOM-BE\n\t\t\tif (this.check([60, 0, 63, 0, 120, 0, 109, 0, 108, 0], {offset: 2})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'xml',\n\t\t\t\t\tmime: 'application/xml',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tif (this.check([0xFF, 0x0E, 0x53, 0x00, 0x6B, 0x00, 0x65, 0x00, 0x74, 0x00, 0x63, 0x00, 0x68, 0x00, 0x55, 0x00, 0x70, 0x00, 0x20, 0x00, 0x4D, 0x00, 0x6F, 0x00, 0x64, 0x00, 0x65, 0x00, 0x6C, 0x00], {offset: 2})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'skp',\n\t\t\t\t\tmime: 'application/vnd.sketchup.skp',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\treturn undefined; // Some text based format\n\t\t}\n\n\t\tif (this.checkString('-----BEGIN PGP MESSAGE-----')) {\n\t\t\treturn {\n\t\t\t\text: 'pgp',\n\t\t\t\tmime: 'application/pgp-encrypted',\n\t\t\t};\n\t\t}\n\n\t\t// Check MPEG 1 or 2 Layer 3 header, or 'layer 0' for ADTS (MPEG sync-word 0xFFE)\n\t\tif (this.buffer.length >= 2 && this.check([0xFF, 0xE0], {offset: 0, mask: [0xFF, 0xE0]})) {\n\t\t\tif (this.check([0x10], {offset: 1, mask: [0x16]})) {\n\t\t\t\t// Check for (ADTS) MPEG-2\n\t\t\t\tif (this.check([0x08], {offset: 1, mask: [0x08]})) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'aac',\n\t\t\t\t\t\tmime: 'audio/aac',\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\t// Must be (ADTS) MPEG-4\n\t\t\t\treturn {\n\t\t\t\t\text: 'aac',\n\t\t\t\t\tmime: 'audio/aac',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// MPEG 1 or 2 Layer 3 header\n\t\t\t// Check for MPEG layer 3\n\t\t\tif (this.check([0x02], {offset: 1, mask: [0x06]})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'mp3',\n\t\t\t\t\tmime: 'audio/mpeg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// Check for MPEG layer 2\n\t\t\tif (this.check([0x04], {offset: 1, mask: [0x06]})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'mp2',\n\t\t\t\t\tmime: 'audio/mpeg',\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// Check for MPEG layer 1\n\t\t\tif (this.check([0x06], {offset: 1, mask: [0x06]})) {\n\t\t\t\treturn {\n\t\t\t\t\text: 'mp1',\n\t\t\t\t\tmime: 'audio/mpeg',\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\t}\n\n\tasync readTiffTag(bigEndian) {\n\t\tconst tagId = await this.tokenizer.readToken(bigEndian ? token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_BE : token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_LE);\n\t\tthis.tokenizer.ignore(10);\n\t\tswitch (tagId) {\n\t\t\tcase 50_341:\n\t\t\t\treturn {\n\t\t\t\t\text: 'arw',\n\t\t\t\t\tmime: 'image/x-sony-arw',\n\t\t\t\t};\n\t\t\tcase 50_706:\n\t\t\t\treturn {\n\t\t\t\t\text: 'dng',\n\t\t\t\t\tmime: 'image/x-adobe-dng',\n\t\t\t\t};\n\t\t\tdefault:\n\t\t}\n\t}\n\n\tasync readTiffIFD(bigEndian) {\n\t\tconst numberOfTags = await this.tokenizer.readToken(bigEndian ? token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_BE : token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_LE);\n\t\tfor (let n = 0; n < numberOfTags; ++n) {\n\t\t\tconst fileType = await this.readTiffTag(bigEndian);\n\t\t\tif (fileType) {\n\t\t\t\treturn fileType;\n\t\t\t}\n\t\t}\n\t}\n\n\tasync readTiffHeader(bigEndian) {\n\t\tconst version = (bigEndian ? token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_BE : token_types__WEBPACK_IMPORTED_MODULE_1__.UINT16_LE).get(this.buffer, 2);\n\t\tconst ifdOffset = (bigEndian ? token_types__WEBPACK_IMPORTED_MODULE_1__.UINT32_BE : token_types__WEBPACK_IMPORTED_MODULE_1__.UINT32_LE).get(this.buffer, 4);\n\n\t\tif (version === 42) {\n\t\t\t// TIFF file header\n\t\t\tif (ifdOffset >= 6) {\n\t\t\t\tif (this.checkString('CR', {offset: 8})) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'cr2',\n\t\t\t\t\t\tmime: 'image/x-canon-cr2',\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tif (ifdOffset >= 8 && (this.check([0x1C, 0x00, 0xFE, 0x00], {offset: 8}) || this.check([0x1F, 0x00, 0x0B, 0x00], {offset: 8}))) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\text: 'nef',\n\t\t\t\t\t\tmime: 'image/x-nikon-nef',\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tawait this.tokenizer.ignore(ifdOffset);\n\t\t\tconst fileType = await this.readTiffIFD(bigEndian);\n\t\t\treturn fileType ?? {\n\t\t\t\text: 'tif',\n\t\t\t\tmime: 'image/tiff',\n\t\t\t};\n\t\t}\n\n\t\tif (version === 43) {\t// Big TIFF file header\n\t\t\treturn {\n\t\t\t\text: 'tif',\n\t\t\t\tmime: 'image/tiff',\n\t\t\t};\n\t\t}\n\t}\n}\n\nasync function fileTypeStream(readableStream, {sampleSize = minimumBytes} = {}) {\n\tconst {default: stream} = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! node:stream */ \"node:stream\", 19));\n\n\treturn new Promise((resolve, reject) => {\n\t\treadableStream.on('error', reject);\n\n\t\treadableStream.once('readable', () => {\n\t\t\t(async () => {\n\t\t\t\ttry {\n\t\t\t\t\t// Set up output stream\n\t\t\t\t\tconst pass = new stream.PassThrough();\n\t\t\t\t\tconst outputStream = stream.pipeline ? stream.pipeline(readableStream, pass, () => {}) : readableStream.pipe(pass);\n\n\t\t\t\t\t// Read the input stream and detect the filetype\n\t\t\t\t\tconst chunk = readableStream.read(sampleSize) ?? readableStream.read() ?? node_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(0);\n\t\t\t\t\ttry {\n\t\t\t\t\t\tconst fileType = await fileTypeFromBuffer(chunk);\n\t\t\t\t\t\tpass.fileType = fileType;\n\t\t\t\t\t} catch (error) {\n\t\t\t\t\t\tif (error instanceof strtok3_core__WEBPACK_IMPORTED_MODULE_2__.EndOfStreamError) {\n\t\t\t\t\t\t\tpass.fileType = undefined;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\treject(error);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tresolve(outputStream);\n\t\t\t\t} catch (error) {\n\t\t\t\t\treject(error);\n\t\t\t\t}\n\t\t\t})();\n\t\t});\n\t});\n}\n\nconst supportedExtensions = new Set(_supported_js__WEBPACK_IMPORTED_MODULE_4__.extensions);\nconst supportedMimeTypes = new Set(_supported_js__WEBPACK_IMPORTED_MODULE_4__.mimeTypes);\n\n\n//# sourceURL=webpack:///../node_modules/file-type/core.js?");

/***/ }),

/***/ "../node_modules/file-type/index.js":
/*!******************************************!*\
  !*** ../node_modules/file-type/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fileTypeFromBuffer\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromBuffer),\n/* harmony export */   \"fileTypeFromFile\": () => (/* binding */ fileTypeFromFile),\n/* harmony export */   \"fileTypeFromStream\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromStream),\n/* harmony export */   \"fileTypeFromTokenizer\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromTokenizer),\n/* harmony export */   \"fileTypeStream\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.fileTypeStream),\n/* harmony export */   \"supportedExtensions\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.supportedExtensions),\n/* harmony export */   \"supportedMimeTypes\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.supportedMimeTypes)\n/* harmony export */ });\n/* harmony import */ var strtok3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! strtok3 */ \"../node_modules/strtok3/lib/index.js\");\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"../node_modules/file-type/core.js\");\n\n\n\nasync function fileTypeFromFile(path) {\n\tconst tokenizer = await strtok3__WEBPACK_IMPORTED_MODULE_0__.fromFile(path);\n\ttry {\n\t\treturn await (0,_core_js__WEBPACK_IMPORTED_MODULE_1__.fileTypeFromTokenizer)(tokenizer);\n\t} finally {\n\t\tawait tokenizer.close();\n\t}\n}\n\n\n\n\n//# sourceURL=webpack:///../node_modules/file-type/index.js?");

/***/ }),

/***/ "../node_modules/file-type/supported.js":
/*!**********************************************!*\
  !*** ../node_modules/file-type/supported.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extensions\": () => (/* binding */ extensions),\n/* harmony export */   \"mimeTypes\": () => (/* binding */ mimeTypes)\n/* harmony export */ });\nconst extensions = [\n\t'jpg',\n\t'png',\n\t'apng',\n\t'gif',\n\t'webp',\n\t'flif',\n\t'xcf',\n\t'cr2',\n\t'cr3',\n\t'orf',\n\t'arw',\n\t'dng',\n\t'nef',\n\t'rw2',\n\t'raf',\n\t'tif',\n\t'bmp',\n\t'icns',\n\t'jxr',\n\t'psd',\n\t'indd',\n\t'zip',\n\t'tar',\n\t'rar',\n\t'gz',\n\t'bz2',\n\t'7z',\n\t'dmg',\n\t'mp4',\n\t'mid',\n\t'mkv',\n\t'webm',\n\t'mov',\n\t'avi',\n\t'mpg',\n\t'mp2',\n\t'mp3',\n\t'm4a',\n\t'oga',\n\t'ogg',\n\t'ogv',\n\t'opus',\n\t'flac',\n\t'wav',\n\t'spx',\n\t'amr',\n\t'pdf',\n\t'epub',\n\t'elf',\n\t'exe',\n\t'swf',\n\t'rtf',\n\t'wasm',\n\t'woff',\n\t'woff2',\n\t'eot',\n\t'ttf',\n\t'otf',\n\t'ico',\n\t'flv',\n\t'ps',\n\t'xz',\n\t'sqlite',\n\t'nes',\n\t'crx',\n\t'xpi',\n\t'cab',\n\t'deb',\n\t'ar',\n\t'rpm',\n\t'Z',\n\t'lz',\n\t'cfb',\n\t'mxf',\n\t'mts',\n\t'blend',\n\t'bpg',\n\t'docx',\n\t'pptx',\n\t'xlsx',\n\t'3gp',\n\t'3g2',\n\t'jp2',\n\t'jpm',\n\t'jpx',\n\t'mj2',\n\t'aif',\n\t'qcp',\n\t'odt',\n\t'ods',\n\t'odp',\n\t'xml',\n\t'mobi',\n\t'heic',\n\t'cur',\n\t'ktx',\n\t'ape',\n\t'wv',\n\t'dcm',\n\t'ics',\n\t'glb',\n\t'pcap',\n\t'dsf',\n\t'lnk',\n\t'alias',\n\t'voc',\n\t'ac3',\n\t'm4v',\n\t'm4p',\n\t'm4b',\n\t'f4v',\n\t'f4p',\n\t'f4b',\n\t'f4a',\n\t'mie',\n\t'asf',\n\t'ogm',\n\t'ogx',\n\t'mpc',\n\t'arrow',\n\t'shp',\n\t'aac',\n\t'mp1',\n\t'it',\n\t's3m',\n\t'xm',\n\t'ai',\n\t'skp',\n\t'avif',\n\t'eps',\n\t'lzh',\n\t'pgp',\n\t'asar',\n\t'stl',\n\t'chm',\n\t'3mf',\n\t'zst',\n\t'jxl',\n\t'vcf',\n\t'jls',\n\t'pst',\n\t'dwg',\n\t'parquet',\n];\n\nconst mimeTypes = [\n\t'image/jpeg',\n\t'image/png',\n\t'image/gif',\n\t'image/webp',\n\t'image/flif',\n\t'image/x-xcf',\n\t'image/x-canon-cr2',\n\t'image/x-canon-cr3',\n\t'image/tiff',\n\t'image/bmp',\n\t'image/vnd.ms-photo',\n\t'image/vnd.adobe.photoshop',\n\t'application/x-indesign',\n\t'application/epub+zip',\n\t'application/x-xpinstall',\n\t'application/vnd.oasis.opendocument.text',\n\t'application/vnd.oasis.opendocument.spreadsheet',\n\t'application/vnd.oasis.opendocument.presentation',\n\t'application/vnd.openxmlformats-officedocument.wordprocessingml.document',\n\t'application/vnd.openxmlformats-officedocument.presentationml.presentation',\n\t'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\n\t'application/zip',\n\t'application/x-tar',\n\t'application/x-rar-compressed',\n\t'application/gzip',\n\t'application/x-bzip2',\n\t'application/x-7z-compressed',\n\t'application/x-apple-diskimage',\n\t'application/x-apache-arrow',\n\t'video/mp4',\n\t'audio/midi',\n\t'video/x-matroska',\n\t'video/webm',\n\t'video/quicktime',\n\t'video/vnd.avi',\n\t'audio/vnd.wave',\n\t'audio/qcelp',\n\t'audio/x-ms-asf',\n\t'video/x-ms-asf',\n\t'application/vnd.ms-asf',\n\t'video/mpeg',\n\t'video/3gpp',\n\t'audio/mpeg',\n\t'audio/mp4', // RFC 4337\n\t'audio/opus',\n\t'video/ogg',\n\t'audio/ogg',\n\t'application/ogg',\n\t'audio/x-flac',\n\t'audio/ape',\n\t'audio/wavpack',\n\t'audio/amr',\n\t'application/pdf',\n\t'application/x-elf',\n\t'application/x-msdownload',\n\t'application/x-shockwave-flash',\n\t'application/rtf',\n\t'application/wasm',\n\t'font/woff',\n\t'font/woff2',\n\t'application/vnd.ms-fontobject',\n\t'font/ttf',\n\t'font/otf',\n\t'image/x-icon',\n\t'video/x-flv',\n\t'application/postscript',\n\t'application/eps',\n\t'application/x-xz',\n\t'application/x-sqlite3',\n\t'application/x-nintendo-nes-rom',\n\t'application/x-google-chrome-extension',\n\t'application/vnd.ms-cab-compressed',\n\t'application/x-deb',\n\t'application/x-unix-archive',\n\t'application/x-rpm',\n\t'application/x-compress',\n\t'application/x-lzip',\n\t'application/x-cfb',\n\t'application/x-mie',\n\t'application/mxf',\n\t'video/mp2t',\n\t'application/x-blender',\n\t'image/bpg',\n\t'image/jp2',\n\t'image/jpx',\n\t'image/jpm',\n\t'image/mj2',\n\t'audio/aiff',\n\t'application/xml',\n\t'application/x-mobipocket-ebook',\n\t'image/heif',\n\t'image/heif-sequence',\n\t'image/heic',\n\t'image/heic-sequence',\n\t'image/icns',\n\t'image/ktx',\n\t'application/dicom',\n\t'audio/x-musepack',\n\t'text/calendar',\n\t'text/vcard',\n\t'model/gltf-binary',\n\t'application/vnd.tcpdump.pcap',\n\t'audio/x-dsf', // Non-standard\n\t'application/x.ms.shortcut', // Invented by us\n\t'application/x.apple.alias', // Invented by us\n\t'audio/x-voc',\n\t'audio/vnd.dolby.dd-raw',\n\t'audio/x-m4a',\n\t'image/apng',\n\t'image/x-olympus-orf',\n\t'image/x-sony-arw',\n\t'image/x-adobe-dng',\n\t'image/x-nikon-nef',\n\t'image/x-panasonic-rw2',\n\t'image/x-fujifilm-raf',\n\t'video/x-m4v',\n\t'video/3gpp2',\n\t'application/x-esri-shape',\n\t'audio/aac',\n\t'audio/x-it',\n\t'audio/x-s3m',\n\t'audio/x-xm',\n\t'video/MP1S',\n\t'video/MP2P',\n\t'application/vnd.sketchup.skp',\n\t'image/avif',\n\t'application/x-lzh-compressed',\n\t'application/pgp-encrypted',\n\t'application/x-asar',\n\t'model/stl',\n\t'application/vnd.ms-htmlhelp',\n\t'model/3mf',\n\t'image/jxl',\n\t'application/zstd',\n\t'image/jls',\n\t'application/vnd.ms-outlook',\n\t'image/vnd.dwg',\n\t'application/x-parquet',\n];\n\n\n//# sourceURL=webpack:///../node_modules/file-type/supported.js?");

/***/ }),

/***/ "../node_modules/file-type/util.js":
/*!*****************************************!*\
  !*** ../node_modules/file-type/util.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringToBytes\": () => (/* binding */ stringToBytes),\n/* harmony export */   \"tarHeaderChecksumMatches\": () => (/* binding */ tarHeaderChecksumMatches),\n/* harmony export */   \"uint32SyncSafeToken\": () => (/* binding */ uint32SyncSafeToken)\n/* harmony export */ });\nfunction stringToBytes(string) {\n\treturn [...string].map(character => character.charCodeAt(0)); // eslint-disable-line unicorn/prefer-code-point\n}\n\n/**\nChecks whether the TAR checksum is valid.\n\n@param {Buffer} buffer - The TAR header `[offset ... offset + 512]`.\n@param {number} offset - TAR header offset.\n@returns {boolean} `true` if the TAR checksum is valid, otherwise `false`.\n*/\nfunction tarHeaderChecksumMatches(buffer, offset = 0) {\n\tconst readSum = Number.parseInt(buffer.toString('utf8', 148, 154).replace(/\\0.*$/, '').trim(), 8); // Read sum in header\n\tif (Number.isNaN(readSum)) {\n\t\treturn false;\n\t}\n\n\tlet sum = 8 * 0x20; // Initialize signed bit sum\n\n\tfor (let index = offset; index < offset + 148; index++) {\n\t\tsum += buffer[index];\n\t}\n\n\tfor (let index = offset + 156; index < offset + 512; index++) {\n\t\tsum += buffer[index];\n\t}\n\n\treturn readSum === sum;\n}\n\n/**\nID3 UINT32 sync-safe tokenizer token.\n28 bits (representing up to 256MB) integer, the msb is 0 to avoid \"false syncsignals\".\n*/\nconst uint32SyncSafeToken = {\n\tget: (buffer, offset) => (buffer[offset + 3] & 0x7F) | ((buffer[offset + 2]) << 7) | ((buffer[offset + 1]) << 14) | ((buffer[offset]) << 21),\n\tlen: 4,\n};\n\n\n//# sourceURL=webpack:///../node_modules/file-type/util.js?");

/***/ }),

/***/ "../node_modules/peek-readable/lib/Deferred.js":
/*!*****************************************************!*\
  !*** ../node_modules/peek-readable/lib/Deferred.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deferred\": () => (/* binding */ Deferred)\n/* harmony export */ });\nclass Deferred {\n    constructor() {\n        this.resolve = () => null;\n        this.reject = () => null;\n        this.promise = new Promise((resolve, reject) => {\n            this.reject = reject;\n            this.resolve = resolve;\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/peek-readable/lib/Deferred.js?");

/***/ }),

/***/ "../node_modules/peek-readable/lib/EndOfFileStream.js":
/*!************************************************************!*\
  !*** ../node_modules/peek-readable/lib/EndOfFileStream.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndOfStreamError\": () => (/* binding */ EndOfStreamError),\n/* harmony export */   \"defaultMessages\": () => (/* binding */ defaultMessages)\n/* harmony export */ });\nconst defaultMessages = 'End-Of-Stream';\n/**\n * Thrown on read operation of the end of file or stream has been reached\n */\nclass EndOfStreamError extends Error {\n    constructor() {\n        super(defaultMessages);\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/peek-readable/lib/EndOfFileStream.js?");

/***/ }),

/***/ "../node_modules/peek-readable/lib/StreamReader.js":
/*!*********************************************************!*\
  !*** ../node_modules/peek-readable/lib/StreamReader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndOfStreamError\": () => (/* reexport safe */ _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError),\n/* harmony export */   \"StreamReader\": () => (/* binding */ StreamReader)\n/* harmony export */ });\n/* harmony import */ var _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndOfFileStream.js */ \"../node_modules/peek-readable/lib/EndOfFileStream.js\");\n/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deferred.js */ \"../node_modules/peek-readable/lib/Deferred.js\");\n\n\n\nconst maxStreamReadSize = 1 * 1024 * 1024; // Maximum request length on read-stream operation\nclass StreamReader {\n    constructor(s) {\n        this.s = s;\n        /**\n         * Deferred used for postponed read request (as not data is yet available to read)\n         */\n        this.deferred = null;\n        this.endOfStream = false;\n        /**\n         * Store peeked data\n         * @type {Array}\n         */\n        this.peekQueue = [];\n        if (!s.read || !s.once) {\n            throw new Error('Expected an instance of stream.Readable');\n        }\n        this.s.once('end', () => this.reject(new _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError()));\n        this.s.once('error', err => this.reject(err));\n        this.s.once('close', () => this.reject(new Error('Stream closed')));\n    }\n    /**\n     * Read ahead (peek) from stream. Subsequent read or peeks will return the same data\n     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in\n     * @param offset - Offset target\n     * @param length - Number of bytes to read\n     * @returns Number of bytes peeked\n     */\n    async peek(uint8Array, offset, length) {\n        const bytesRead = await this.read(uint8Array, offset, length);\n        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer\n        return bytesRead;\n    }\n    /**\n     * Read chunk from stream\n     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in\n     * @param offset - Offset target\n     * @param length - Number of bytes to read\n     * @returns Number of bytes read\n     */\n    async read(buffer, offset, length) {\n        if (length === 0) {\n            return 0;\n        }\n        if (this.peekQueue.length === 0 && this.endOfStream) {\n            throw new _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        }\n        let remaining = length;\n        let bytesRead = 0;\n        // consume peeked data first\n        while (this.peekQueue.length > 0 && remaining > 0) {\n            const peekData = this.peekQueue.pop(); // Front of queue\n            if (!peekData)\n                throw new Error('peekData should be defined');\n            const lenCopy = Math.min(peekData.length, remaining);\n            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);\n            bytesRead += lenCopy;\n            remaining -= lenCopy;\n            if (lenCopy < peekData.length) {\n                // remainder back to queue\n                this.peekQueue.push(peekData.subarray(lenCopy));\n            }\n        }\n        // continue reading from stream if required\n        while (remaining > 0 && !this.endOfStream) {\n            const reqLen = Math.min(remaining, maxStreamReadSize);\n            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);\n            bytesRead += chunkLen;\n            if (chunkLen < reqLen)\n                break;\n            remaining -= chunkLen;\n        }\n        return bytesRead;\n    }\n    /**\n     * Read chunk from stream\n     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in\n     * @param offset Offset target\n     * @param length Number of bytes to read\n     * @returns Number of bytes read\n     */\n    async readFromStream(buffer, offset, length) {\n        const readBuffer = this.s.read(length);\n        if (readBuffer) {\n            buffer.set(readBuffer, offset);\n            return readBuffer.length;\n        }\n        else {\n            const request = {\n                buffer,\n                offset,\n                length,\n                deferred: new _Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred()\n            };\n            this.deferred = request.deferred;\n            this.s.once('readable', () => {\n                this.readDeferred(request);\n            });\n            return request.deferred.promise;\n        }\n    }\n    /**\n     * Process deferred read request\n     * @param request Deferred read request\n     */\n    readDeferred(request) {\n        const readBuffer = this.s.read(request.length);\n        if (readBuffer) {\n            request.buffer.set(readBuffer, request.offset);\n            request.deferred.resolve(readBuffer.length);\n            this.deferred = null;\n        }\n        else {\n            this.s.once('readable', () => {\n                this.readDeferred(request);\n            });\n        }\n    }\n    reject(err) {\n        this.endOfStream = true;\n        if (this.deferred) {\n            this.deferred.reject(err);\n            this.deferred = null;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/peek-readable/lib/StreamReader.js?");

/***/ }),

/***/ "../node_modules/peek-readable/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/peek-readable/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndOfStreamError\": () => (/* reexport safe */ _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError),\n/* harmony export */   \"StreamReader\": () => (/* reexport safe */ _StreamReader_js__WEBPACK_IMPORTED_MODULE_1__.StreamReader)\n/* harmony export */ });\n/* harmony import */ var _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndOfFileStream.js */ \"../node_modules/peek-readable/lib/EndOfFileStream.js\");\n/* harmony import */ var _StreamReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamReader.js */ \"../node_modules/peek-readable/lib/StreamReader.js\");\n\n\n\n\n//# sourceURL=webpack:///../node_modules/peek-readable/lib/index.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/AbstractTokenizer.js":
/*!********************************************************!*\
  !*** ../node_modules/strtok3/lib/AbstractTokenizer.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AbstractTokenizer\": () => (/* binding */ AbstractTokenizer)\n/* harmony export */ });\n/* harmony import */ var peek_readable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peek-readable */ \"../node_modules/peek-readable/lib/index.js\");\n/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:buffer */ \"node:buffer\");\n\n\n/**\n * Core tokenizer\n */\nclass AbstractTokenizer {\n    constructor(fileInfo) {\n        /**\n         * Tokenizer-stream position\n         */\n        this.position = 0;\n        this.numBuffer = new Uint8Array(8);\n        this.fileInfo = fileInfo ? fileInfo : {};\n    }\n    /**\n     * Read a token from the tokenizer-stream\n     * @param token - The token to read\n     * @param position - If provided, the desired position in the tokenizer-stream\n     * @returns Promise with token data\n     */\n    async readToken(token, position = this.position) {\n        const uint8Array = node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.alloc(token.len);\n        const len = await this.readBuffer(uint8Array, { position });\n        if (len < token.len)\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        return token.get(uint8Array, 0);\n    }\n    /**\n     * Peek a token from the tokenizer-stream.\n     * @param token - Token to peek from the tokenizer-stream.\n     * @param position - Offset where to begin reading within the file. If position is null, data will be read from the current file position.\n     * @returns Promise with token data\n     */\n    async peekToken(token, position = this.position) {\n        const uint8Array = node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.alloc(token.len);\n        const len = await this.peekBuffer(uint8Array, { position });\n        if (len < token.len)\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        return token.get(uint8Array, 0);\n    }\n    /**\n     * Read a numeric token from the stream\n     * @param token - Numeric token\n     * @returns Promise with number\n     */\n    async readNumber(token) {\n        const len = await this.readBuffer(this.numBuffer, { length: token.len });\n        if (len < token.len)\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        return token.get(this.numBuffer, 0);\n    }\n    /**\n     * Read a numeric token from the stream\n     * @param token - Numeric token\n     * @returns Promise with number\n     */\n    async peekNumber(token) {\n        const len = await this.peekBuffer(this.numBuffer, { length: token.len });\n        if (len < token.len)\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        return token.get(this.numBuffer, 0);\n    }\n    /**\n     * Ignore number of bytes, advances the pointer in under tokenizer-stream.\n     * @param length - Number of bytes to ignore\n     * @return resolves the number of bytes ignored, equals length if this available, otherwise the number of bytes available\n     */\n    async ignore(length) {\n        if (this.fileInfo.size !== undefined) {\n            const bytesLeft = this.fileInfo.size - this.position;\n            if (length > bytesLeft) {\n                this.position += bytesLeft;\n                return bytesLeft;\n            }\n        }\n        this.position += length;\n        return length;\n    }\n    async close() {\n        // empty\n    }\n    normalizeOptions(uint8Array, options) {\n        if (options && options.position !== undefined && options.position < this.position) {\n            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');\n        }\n        if (options) {\n            return {\n                mayBeLess: options.mayBeLess === true,\n                offset: options.offset ? options.offset : 0,\n                length: options.length ? options.length : (uint8Array.length - (options.offset ? options.offset : 0)),\n                position: options.position ? options.position : this.position\n            };\n        }\n        return {\n            mayBeLess: false,\n            offset: 0,\n            length: uint8Array.length,\n            position: this.position\n        };\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/AbstractTokenizer.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/BufferTokenizer.js":
/*!******************************************************!*\
  !*** ../node_modules/strtok3/lib/BufferTokenizer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BufferTokenizer\": () => (/* binding */ BufferTokenizer)\n/* harmony export */ });\n/* harmony import */ var peek_readable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peek-readable */ \"../node_modules/peek-readable/lib/index.js\");\n/* harmony import */ var _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractTokenizer.js */ \"../node_modules/strtok3/lib/AbstractTokenizer.js\");\n\n\nclass BufferTokenizer extends _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.AbstractTokenizer {\n    /**\n     * Construct BufferTokenizer\n     * @param uint8Array - Uint8Array to tokenize\n     * @param fileInfo - Pass additional file information to the tokenizer\n     */\n    constructor(uint8Array, fileInfo) {\n        super(fileInfo);\n        this.uint8Array = uint8Array;\n        this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : uint8Array.length;\n    }\n    /**\n     * Read buffer from tokenizer\n     * @param uint8Array - Uint8Array to tokenize\n     * @param options - Read behaviour options\n     * @returns {Promise<number>}\n     */\n    async readBuffer(uint8Array, options) {\n        if (options && options.position) {\n            if (options.position < this.position) {\n                throw new Error('`options.position` must be equal or greater than `tokenizer.position`');\n            }\n            this.position = options.position;\n        }\n        const bytesRead = await this.peekBuffer(uint8Array, options);\n        this.position += bytesRead;\n        return bytesRead;\n    }\n    /**\n     * Peek (read ahead) buffer from tokenizer\n     * @param uint8Array\n     * @param options - Read behaviour options\n     * @returns {Promise<number>}\n     */\n    async peekBuffer(uint8Array, options) {\n        const normOptions = this.normalizeOptions(uint8Array, options);\n        const bytes2read = Math.min(this.uint8Array.length - normOptions.position, normOptions.length);\n        if ((!normOptions.mayBeLess) && bytes2read < normOptions.length) {\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        }\n        else {\n            uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read), normOptions.offset);\n            return bytes2read;\n        }\n    }\n    async close() {\n        // empty\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/BufferTokenizer.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/FileTokenizer.js":
/*!****************************************************!*\
  !*** ../node_modules/strtok3/lib/FileTokenizer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileTokenizer\": () => (/* binding */ FileTokenizer),\n/* harmony export */   \"fromFile\": () => (/* binding */ fromFile)\n/* harmony export */ });\n/* harmony import */ var _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTokenizer.js */ \"../node_modules/strtok3/lib/AbstractTokenizer.js\");\n/* harmony import */ var peek_readable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peek-readable */ \"../node_modules/peek-readable/lib/index.js\");\n/* harmony import */ var _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FsPromise.js */ \"../node_modules/strtok3/lib/FsPromise.js\");\n\n\n\nclass FileTokenizer extends _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTokenizer {\n    constructor(fd, fileInfo) {\n        super(fileInfo);\n        this.fd = fd;\n    }\n    /**\n     * Read buffer from file\n     * @param uint8Array - Uint8Array to write result to\n     * @param options - Read behaviour options\n     * @returns Promise number of bytes read\n     */\n    async readBuffer(uint8Array, options) {\n        const normOptions = this.normalizeOptions(uint8Array, options);\n        this.position = normOptions.position;\n        const res = await _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);\n        this.position += res.bytesRead;\n        if (res.bytesRead < normOptions.length && (!options || !options.mayBeLess)) {\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError();\n        }\n        return res.bytesRead;\n    }\n    /**\n     * Peek buffer from file\n     * @param uint8Array - Uint8Array (or Buffer) to write data to\n     * @param options - Read behaviour options\n     * @returns Promise number of bytes read\n     */\n    async peekBuffer(uint8Array, options) {\n        const normOptions = this.normalizeOptions(uint8Array, options);\n        const res = await _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__.read(this.fd, uint8Array, normOptions.offset, normOptions.length, normOptions.position);\n        if ((!normOptions.mayBeLess) && res.bytesRead < normOptions.length) {\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError();\n        }\n        return res.bytesRead;\n    }\n    async close() {\n        return _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__.close(this.fd);\n    }\n}\nasync function fromFile(sourceFilePath) {\n    const stat = await _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__.stat(sourceFilePath);\n    if (!stat.isFile) {\n        throw new Error(`File not a file: ${sourceFilePath}`);\n    }\n    const fd = await _FsPromise_js__WEBPACK_IMPORTED_MODULE_2__.open(sourceFilePath, 'r');\n    return new FileTokenizer(fd, { path: sourceFilePath, size: stat.size });\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/FileTokenizer.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/FsPromise.js":
/*!************************************************!*\
  !*** ../node_modules/strtok3/lib/FsPromise.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"close\": () => (/* binding */ close),\n/* harmony export */   \"createReadStream\": () => (/* binding */ createReadStream),\n/* harmony export */   \"open\": () => (/* binding */ open),\n/* harmony export */   \"pathExists\": () => (/* binding */ pathExists),\n/* harmony export */   \"read\": () => (/* binding */ read),\n/* harmony export */   \"readFile\": () => (/* binding */ readFile),\n/* harmony export */   \"stat\": () => (/* binding */ stat),\n/* harmony export */   \"writeFile\": () => (/* binding */ writeFile),\n/* harmony export */   \"writeFileSync\": () => (/* binding */ writeFileSync)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n/**\n * Module convert fs functions to promise based functions\n */\n\nconst pathExists = node_fs__WEBPACK_IMPORTED_MODULE_0__.existsSync;\nconst createReadStream = node_fs__WEBPACK_IMPORTED_MODULE_0__.createReadStream;\nasync function stat(path) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.stat(path, (err, stats) => {\n            if (err)\n                reject(err);\n            else\n                resolve(stats);\n        });\n    });\n}\nasync function close(fd) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.close(fd, err => {\n            if (err)\n                reject(err);\n            else\n                resolve();\n        });\n    });\n}\nasync function open(path, mode) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.open(path, mode, (err, fd) => {\n            if (err)\n                reject(err);\n            else\n                resolve(fd);\n        });\n    });\n}\nasync function read(fd, buffer, offset, length, position) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.read(fd, buffer, offset, length, position, (err, bytesRead, _buffer) => {\n            if (err)\n                reject(err);\n            else\n                resolve({ bytesRead, buffer: _buffer });\n        });\n    });\n}\nasync function writeFile(path, data) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(path, data, err => {\n            if (err)\n                reject(err);\n            else\n                resolve();\n        });\n    });\n}\nfunction writeFileSync(path, data) {\n    node_fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync(path, data);\n}\nasync function readFile(path) {\n    return new Promise((resolve, reject) => {\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.readFile(path, (err, buffer) => {\n            if (err)\n                reject(err);\n            else\n                resolve(buffer);\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/FsPromise.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/ReadStreamTokenizer.js":
/*!**********************************************************!*\
  !*** ../node_modules/strtok3/lib/ReadStreamTokenizer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReadStreamTokenizer\": () => (/* binding */ ReadStreamTokenizer)\n/* harmony export */ });\n/* harmony import */ var _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTokenizer.js */ \"../node_modules/strtok3/lib/AbstractTokenizer.js\");\n/* harmony import */ var peek_readable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peek-readable */ \"../node_modules/peek-readable/lib/index.js\");\n\n\nconst maxBufferSize = 256000;\nclass ReadStreamTokenizer extends _AbstractTokenizer_js__WEBPACK_IMPORTED_MODULE_0__.AbstractTokenizer {\n    constructor(stream, fileInfo) {\n        super(fileInfo);\n        this.streamReader = new peek_readable__WEBPACK_IMPORTED_MODULE_1__.StreamReader(stream);\n    }\n    /**\n     * Get file information, an HTTP-client may implement this doing a HEAD request\n     * @return Promise with file information\n     */\n    async getFileInfo() {\n        return this.fileInfo;\n    }\n    /**\n     * Read buffer from tokenizer\n     * @param uint8Array - Target Uint8Array to fill with data read from the tokenizer-stream\n     * @param options - Read behaviour options\n     * @returns Promise with number of bytes read\n     */\n    async readBuffer(uint8Array, options) {\n        const normOptions = this.normalizeOptions(uint8Array, options);\n        const skipBytes = normOptions.position - this.position;\n        if (skipBytes > 0) {\n            await this.ignore(skipBytes);\n            return this.readBuffer(uint8Array, options);\n        }\n        else if (skipBytes < 0) {\n            throw new Error('`options.position` must be equal or greater than `tokenizer.position`');\n        }\n        if (normOptions.length === 0) {\n            return 0;\n        }\n        const bytesRead = await this.streamReader.read(uint8Array, normOptions.offset, normOptions.length);\n        this.position += bytesRead;\n        if ((!options || !options.mayBeLess) && bytesRead < normOptions.length) {\n            throw new peek_readable__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError();\n        }\n        return bytesRead;\n    }\n    /**\n     * Peek (read ahead) buffer from tokenizer\n     * @param uint8Array - Uint8Array (or Buffer) to write data to\n     * @param options - Read behaviour options\n     * @returns Promise with number of bytes peeked\n     */\n    async peekBuffer(uint8Array, options) {\n        const normOptions = this.normalizeOptions(uint8Array, options);\n        let bytesRead = 0;\n        if (normOptions.position) {\n            const skipBytes = normOptions.position - this.position;\n            if (skipBytes > 0) {\n                const skipBuffer = new Uint8Array(normOptions.length + skipBytes);\n                bytesRead = await this.peekBuffer(skipBuffer, { mayBeLess: normOptions.mayBeLess });\n                uint8Array.set(skipBuffer.subarray(skipBytes), normOptions.offset);\n                return bytesRead - skipBytes;\n            }\n            else if (skipBytes < 0) {\n                throw new Error('Cannot peek from a negative offset in a stream');\n            }\n        }\n        if (normOptions.length > 0) {\n            try {\n                bytesRead = await this.streamReader.peek(uint8Array, normOptions.offset, normOptions.length);\n            }\n            catch (err) {\n                if (options && options.mayBeLess && err instanceof peek_readable__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError) {\n                    return 0;\n                }\n                throw err;\n            }\n            if ((!normOptions.mayBeLess) && bytesRead < normOptions.length) {\n                throw new peek_readable__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError();\n            }\n        }\n        return bytesRead;\n    }\n    async ignore(length) {\n        // debug(`ignore ${this.position}...${this.position + length - 1}`);\n        const bufSize = Math.min(maxBufferSize, length);\n        const buf = new Uint8Array(bufSize);\n        let totBytesRead = 0;\n        while (totBytesRead < length) {\n            const remaining = length - totBytesRead;\n            const bytesRead = await this.readBuffer(buf, { length: Math.min(bufSize, remaining) });\n            if (bytesRead < 0) {\n                return bytesRead;\n            }\n            totBytesRead += bytesRead;\n        }\n        return totBytesRead;\n    }\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/ReadStreamTokenizer.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/core.js":
/*!*******************************************!*\
  !*** ../node_modules/strtok3/lib/core.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndOfStreamError\": () => (/* reexport safe */ peek_readable__WEBPACK_IMPORTED_MODULE_2__.EndOfStreamError),\n/* harmony export */   \"fromBuffer\": () => (/* binding */ fromBuffer),\n/* harmony export */   \"fromStream\": () => (/* binding */ fromStream)\n/* harmony export */ });\n/* harmony import */ var _ReadStreamTokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadStreamTokenizer.js */ \"../node_modules/strtok3/lib/ReadStreamTokenizer.js\");\n/* harmony import */ var _BufferTokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BufferTokenizer.js */ \"../node_modules/strtok3/lib/BufferTokenizer.js\");\n/* harmony import */ var peek_readable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! peek-readable */ \"../node_modules/peek-readable/lib/index.js\");\n\n\n\n/**\n * Construct ReadStreamTokenizer from given Stream.\n * Will set fileSize, if provided given Stream has set the .path property/\n * @param stream - Read from Node.js Stream.Readable\n * @param fileInfo - Pass the file information, like size and MIME-type of the corresponding stream.\n * @returns ReadStreamTokenizer\n */\nfunction fromStream(stream, fileInfo) {\n    fileInfo = fileInfo ? fileInfo : {};\n    return new _ReadStreamTokenizer_js__WEBPACK_IMPORTED_MODULE_0__.ReadStreamTokenizer(stream, fileInfo);\n}\n/**\n * Construct ReadStreamTokenizer from given Buffer.\n * @param uint8Array - Uint8Array to tokenize\n * @param fileInfo - Pass additional file information to the tokenizer\n * @returns BufferTokenizer\n */\nfunction fromBuffer(uint8Array, fileInfo) {\n    return new _BufferTokenizer_js__WEBPACK_IMPORTED_MODULE_1__.BufferTokenizer(uint8Array, fileInfo);\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/core.js?");

/***/ }),

/***/ "../node_modules/strtok3/lib/index.js":
/*!********************************************!*\
  !*** ../node_modules/strtok3/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EndOfStreamError\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.EndOfStreamError),\n/* harmony export */   \"fromBuffer\": () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_1__.fromBuffer),\n/* harmony export */   \"fromFile\": () => (/* reexport safe */ _FileTokenizer_js__WEBPACK_IMPORTED_MODULE_2__.fromFile),\n/* harmony export */   \"fromStream\": () => (/* binding */ fromStream)\n/* harmony export */ });\n/* harmony import */ var _FsPromise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FsPromise.js */ \"../node_modules/strtok3/lib/FsPromise.js\");\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"../node_modules/strtok3/lib/core.js\");\n/* harmony import */ var _FileTokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileTokenizer.js */ \"../node_modules/strtok3/lib/FileTokenizer.js\");\n\n\n\n\n/**\n * Construct ReadStreamTokenizer from given Stream.\n * Will set fileSize, if provided given Stream has set the .path property.\n * @param stream - Node.js Stream.Readable\n * @param fileInfo - Pass additional file information to the tokenizer\n * @returns Tokenizer\n */\nasync function fromStream(stream, fileInfo) {\n    fileInfo = fileInfo ? fileInfo : {};\n    if (stream.path) {\n        const stat = await _FsPromise_js__WEBPACK_IMPORTED_MODULE_0__.stat(stream.path);\n        fileInfo.path = stream.path;\n        fileInfo.size = stat.size;\n    }\n    return _core_js__WEBPACK_IMPORTED_MODULE_1__.fromStream(stream, fileInfo);\n}\n\n\n//# sourceURL=webpack:///../node_modules/strtok3/lib/index.js?");

/***/ }),

/***/ "../node_modules/token-types/lib/index.js":
/*!************************************************!*\
  !*** ../node_modules/token-types/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnsiStringType\": () => (/* binding */ AnsiStringType),\n/* harmony export */   \"BufferType\": () => (/* binding */ BufferType),\n/* harmony export */   \"Float16_BE\": () => (/* binding */ Float16_BE),\n/* harmony export */   \"Float16_LE\": () => (/* binding */ Float16_LE),\n/* harmony export */   \"Float32_BE\": () => (/* binding */ Float32_BE),\n/* harmony export */   \"Float32_LE\": () => (/* binding */ Float32_LE),\n/* harmony export */   \"Float64_BE\": () => (/* binding */ Float64_BE),\n/* harmony export */   \"Float64_LE\": () => (/* binding */ Float64_LE),\n/* harmony export */   \"Float80_BE\": () => (/* binding */ Float80_BE),\n/* harmony export */   \"Float80_LE\": () => (/* binding */ Float80_LE),\n/* harmony export */   \"INT16_BE\": () => (/* binding */ INT16_BE),\n/* harmony export */   \"INT16_LE\": () => (/* binding */ INT16_LE),\n/* harmony export */   \"INT24_BE\": () => (/* binding */ INT24_BE),\n/* harmony export */   \"INT24_LE\": () => (/* binding */ INT24_LE),\n/* harmony export */   \"INT32_BE\": () => (/* binding */ INT32_BE),\n/* harmony export */   \"INT32_LE\": () => (/* binding */ INT32_LE),\n/* harmony export */   \"INT64_BE\": () => (/* binding */ INT64_BE),\n/* harmony export */   \"INT64_LE\": () => (/* binding */ INT64_LE),\n/* harmony export */   \"INT8\": () => (/* binding */ INT8),\n/* harmony export */   \"IgnoreType\": () => (/* binding */ IgnoreType),\n/* harmony export */   \"StringType\": () => (/* binding */ StringType),\n/* harmony export */   \"UINT16_BE\": () => (/* binding */ UINT16_BE),\n/* harmony export */   \"UINT16_LE\": () => (/* binding */ UINT16_LE),\n/* harmony export */   \"UINT24_BE\": () => (/* binding */ UINT24_BE),\n/* harmony export */   \"UINT24_LE\": () => (/* binding */ UINT24_LE),\n/* harmony export */   \"UINT32_BE\": () => (/* binding */ UINT32_BE),\n/* harmony export */   \"UINT32_LE\": () => (/* binding */ UINT32_LE),\n/* harmony export */   \"UINT64_BE\": () => (/* binding */ UINT64_BE),\n/* harmony export */   \"UINT64_LE\": () => (/* binding */ UINT64_LE),\n/* harmony export */   \"UINT8\": () => (/* binding */ UINT8),\n/* harmony export */   \"Uint8ArrayType\": () => (/* binding */ Uint8ArrayType)\n/* harmony export */ });\n/* harmony import */ var ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ieee754 */ \"../node_modules/ieee754/index.js\");\n/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:buffer */ \"node:buffer\");\n\n\n// Primitive types\nfunction dv(array) {\n    return new DataView(array.buffer, array.byteOffset);\n}\n/**\n * 8-bit unsigned integer\n */\nconst UINT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getUint8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit unsigned integer, Little Endian byte order\n */\nconst UINT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit unsigned integer, Big Endian byte order\n */\nconst UINT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit unsigned integer, Little Endian byte order\n */\nconst UINT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit unsigned integer, Big Endian byte order\n */\nconst UINT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit unsigned integer, Little Endian byte order\n */\nconst UINT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit unsigned integer, Big Endian byte order\n */\nconst UINT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 8-bit signed integer\n */\nconst INT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getInt8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit signed integer, Big Endian byte order\n */\nconst INT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit signed integer, Little Endian byte order\n */\nconst INT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit signed integer, Little Endian byte order\n */\nconst INT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_LE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit signed integer, Big Endian byte order\n */\nconst INT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_BE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 64-bit unsigned integer, Little Endian byte order\n */\nconst UINT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Little Endian byte order\n */\nconst INT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit unsigned integer, Big Endian byte order\n */\nconst UINT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Big Endian byte order\n */\nconst INT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, big endian\n */\nconst Float16_BE = {\n    len: 2,\n    get(dataView, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(dataView, offset, false, 10, this.len);\n    },\n    put(dataView, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(dataView, value, offset, false, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, little endian\n */\nconst Float16_LE = {\n    len: 2,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 10, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, big endian\n */\nconst Float32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, little endian\n */\nconst Float32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, big endian\n */\nconst Float64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, little endian\n */\nconst Float64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, big endian\n */\nconst Float80_BE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, false, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, false, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, little endian\n */\nconst Float80_LE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * Ignore a given number of bytes\n */\nclass IgnoreType {\n    /**\n     * @param len number of bytes to ignore\n     */\n    constructor(len) {\n        this.len = len;\n    }\n    // ToDo: don't read, but skip data\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    get(array, off) {\n    }\n}\nclass Uint8ArrayType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(array, offset) {\n        return array.subarray(offset, offset + this.len);\n    }\n}\nclass BufferType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(uint8Array, off) {\n        return node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(uint8Array.subarray(off, off + this.len));\n    }\n}\n/**\n * Consume a fixed number of bytes from the stream and return a string with a specified encoding.\n */\nclass StringType {\n    constructor(len, encoding) {\n        this.len = len;\n        this.encoding = encoding;\n    }\n    get(uint8Array, offset) {\n        return node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(uint8Array).toString(this.encoding, offset, offset + this.len);\n    }\n}\n/**\n * ANSI Latin 1 String\n * Using windows-1252 / ISO 8859-1 decoding\n */\nclass AnsiStringType {\n    constructor(len) {\n        this.len = len;\n    }\n    static decode(buffer, offset, until) {\n        let str = '';\n        for (let i = offset; i < until; ++i) {\n            str += AnsiStringType.codePointToString(AnsiStringType.singleByteDecoder(buffer[i]));\n        }\n        return str;\n    }\n    static inRange(a, min, max) {\n        return min <= a && a <= max;\n    }\n    static codePointToString(cp) {\n        if (cp <= 0xFFFF) {\n            return String.fromCharCode(cp);\n        }\n        else {\n            cp -= 0x10000;\n            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);\n        }\n    }\n    static singleByteDecoder(bite) {\n        if (AnsiStringType.inRange(bite, 0x00, 0x7F)) {\n            return bite;\n        }\n        const codePoint = AnsiStringType.windows1252[bite - 0x80];\n        if (codePoint === null) {\n            throw Error('invaliding encoding');\n        }\n        return codePoint;\n    }\n    get(buffer, offset = 0) {\n        return AnsiStringType.decode(buffer, offset, offset + this.len);\n    }\n}\nAnsiStringType.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,\n    8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,\n    8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,\n    169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,\n    185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,\n    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,\n    217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,\n    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,\n    248, 249, 250, 251, 252, 253, 254, 255];\n\n\n//# sourceURL=webpack:///../node_modules/token-types/lib/index.js?");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;