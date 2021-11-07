/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: error, first, inject, isFailed, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return first; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inject\", function() { return inject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFailed\", function() { return isFailed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\nconst error = \"empty source\";\r\nconst first = \r\n/** ↑ 类型签名 ↓ 实现 */\r\n(source) => {\r\n    if (typeof source === \"string\" && source !== \"\") {\r\n        return [source[0], source.slice(1)];\r\n    }\r\n    else {\r\n        return error;\r\n    }\r\n};\r\nconst inject = \r\n/** ↑ 类型签名 ↓ 实现 */\r\n(value) => (source) => {\r\n    if (typeof source === \"string\" && source !== \"\") {\r\n        return [value, source];\r\n    }\r\n    else {\r\n        return error;\r\n    }\r\n};\r\nconst isFailed = \r\n/** ↑ 类型签名 ↓ 实现 */\r\n(result) => typeof result === \"string\";\r\nconst map = \r\n/** ↑ 类型签名 ↓ 实现 */\r\n(parser, f) => (source) => {\r\n    const result = parser(source);\r\n    if (isFailed(result)) {\r\n        return result;\r\n    }\r\n    else {\r\n        const [data, rest_source] = result;\r\n        return [f(data), rest_source];\r\n    }\r\n};\r\nconst a = inject((n) => n + 1);\r\nconst apply = \r\n/** ↑ 类型签名 ↓ 实现 */\r\n(parserFn, parserArg) => (source) => {\r\n    const resultFn = parserFn(source);\r\n    if (isFailed(resultFn)) {\r\n        return resultFn;\r\n    }\r\n    const [fn, rest_source_fn] = resultFn;\r\n    const resultArg = parserArg(rest_source_fn);\r\n    if (isFailed(resultArg)) {\r\n        return resultArg;\r\n    }\r\n    const [arg, rest_source_arg] = resultArg;\r\n    return [fn(arg), rest_source_arg];\r\n};\r\n// type pppp = \r\nconst applyAll = (...args) => args.reduce(apply);\r\nconst r2 = apply(inject((n) => '1' === n), inject('3'))(\"123\");\r\nconst r3 = applyAll(inject((x) => (y) => x + y), inject('3'), inject('2'))(\"123\");\r\nconsole.log('map', r3);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzPzc5NGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVycm9yID0gXCJlbXB0eSBzb3VyY2VcIjtcclxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gXHJcbi8qKiDihpEg57G75Z6L562+5ZCNIOKGkyDlrp7njrAgKi9cclxuKHNvdXJjZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgPT09IFwic3RyaW5nXCIgJiYgc291cmNlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFtzb3VyY2VbMF0sIHNvdXJjZS5zbGljZSgxKV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBpbmplY3QgPSBcclxuLyoqIOKGkSDnsbvlnovnrb7lkI0g4oaTIOWunueOsCAqL1xyXG4odmFsdWUpID0+IChzb3VyY2UpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSBcInN0cmluZ1wiICYmIHNvdXJjZSAhPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUsIHNvdXJjZV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBpc0ZhaWxlZCA9IFxyXG4vKiog4oaRIOexu+Wei+etvuWQjSDihpMg5a6e546wICovXHJcbihyZXN1bHQpID0+IHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCI7XHJcbmV4cG9ydCBjb25zdCBtYXAgPSBcclxuLyoqIOKGkSDnsbvlnovnrb7lkI0g4oaTIOWunueOsCAqL1xyXG4ocGFyc2VyLCBmKSA9PiAoc291cmNlKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIoc291cmNlKTtcclxuICAgIGlmIChpc0ZhaWxlZChyZXN1bHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IFtkYXRhLCByZXN0X3NvdXJjZV0gPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0dXJuIFtmKGRhdGEpLCByZXN0X3NvdXJjZV07XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IGEgPSBpbmplY3QoKG4pID0+IG4gKyAxKTtcclxuY29uc3QgYXBwbHkgPSBcclxuLyoqIOKGkSDnsbvlnovnrb7lkI0g4oaTIOWunueOsCAqL1xyXG4ocGFyc2VyRm4sIHBhcnNlckFyZykgPT4gKHNvdXJjZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0Rm4gPSBwYXJzZXJGbihzb3VyY2UpO1xyXG4gICAgaWYgKGlzRmFpbGVkKHJlc3VsdEZuKSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHRGbjtcclxuICAgIH1cclxuICAgIGNvbnN0IFtmbiwgcmVzdF9zb3VyY2VfZm5dID0gcmVzdWx0Rm47XHJcbiAgICBjb25zdCByZXN1bHRBcmcgPSBwYXJzZXJBcmcocmVzdF9zb3VyY2VfZm4pO1xyXG4gICAgaWYgKGlzRmFpbGVkKHJlc3VsdEFyZykpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0QXJnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2FyZywgcmVzdF9zb3VyY2VfYXJnXSA9IHJlc3VsdEFyZztcclxuICAgIHJldHVybiBbZm4oYXJnKSwgcmVzdF9zb3VyY2VfYXJnXTtcclxufTtcclxuLy8gdHlwZSBwcHBwID0gXHJcbmNvbnN0IGFwcGx5QWxsID0gKC4uLmFyZ3MpID0+IGFyZ3MucmVkdWNlKGFwcGx5KTtcclxuY29uc3QgcjIgPSBhcHBseShpbmplY3QoKG4pID0+ICcxJyA9PT0gbiksIGluamVjdCgnMycpKShcIjEyM1wiKTtcclxuY29uc3QgcjMgPSBhcHBseUFsbChpbmplY3QoKHgpID0+ICh5KSA9PiB4ICsgeSksIGluamVjdCgnMycpLCBpbmplY3QoJzInKSkoXCIxMjNcIik7XHJcbmNvbnNvbGUubG9nKCdtYXAnLCByMyk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ });