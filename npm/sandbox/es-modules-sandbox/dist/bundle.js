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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoices_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoices/users-service */ \"./invoices/users-service.js\");\n/* harmony import */ var _invoices_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoices/users */ \"./invoices/users.js\");\n\n\nconst resultElement = document.getElementById('result');\nObject(_invoices_users_service__WEBPACK_IMPORTED_MODULE_0__[\"generateUsersDOMElements\"])(_invoices_users__WEBPACK_IMPORTED_MODULE_1__[\"users\"]).map(userElement => {\n  resultElement.appendChild(userElement);\n});\n\n//# sourceURL=webpack:///./index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _invoices_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoices/users */ \"./invoices/users.js\");\n/* harmony import */ var _invoices_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoices/users-service */ \"./invoices/users-service.js\");\n\n\nconst resultElement = document.getElementById('result');\nObject(_invoices_users_service__WEBPACK_IMPORTED_MODULE_1__[\"generateUsersDOMElements\"])(_invoices_users__WEBPACK_IMPORTED_MODULE_0__[\"users\"]).map(userElement => {\n  resultElement.appendChild(userElement);\n});\n\n//# sourceURL=webpack:///./index.js?");
>>>>>>> 0b965f12e3fed8cb33b7eee3a71244089a7055a6

/***/ }),

/***/ "./invoices/user-formater.js":
/*!***********************************!*\
  !*** ./invoices/user-formater.js ***!
  \***********************************/
/*! exports provided: formatUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatUser\", function() { return formatUser; });\nconst formatUser = user => {\n  return `${user.id}: ${user.name} ${user.surname}`;\n};\n\n//# sourceURL=webpack:///./invoices/user-formater.js?");

/***/ }),

/***/ "./invoices/users-service.js":
/*!***********************************!*\
  !*** ./invoices/users-service.js ***!
  \***********************************/
/*! exports provided: generateUsersDOMElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateUsersDOMElements\", function() { return generateUsersDOMElements; });\n/* harmony import */ var _user_formater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-formater */ \"./invoices/user-formater.js\");\n\n\nconst createUserElement = user => {\n  const element = document.createElement('li');\n  element.textContent = Object(_user_formater__WEBPACK_IMPORTED_MODULE_0__[\"formatUser\"])(user);\n  return element;\n};\n\nconst generateUsersDOMElements = users => {\n  return users.map(user => createUserElement(user));\n};\n\n//# sourceURL=webpack:///./invoices/users-service.js?");

/***/ }),

/***/ "./invoices/users.js":
/*!***************************!*\
  !*** ./invoices/users.js ***!
  \***************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\n// Ex.: Rozbij ten plik na wiele modułów.\n//    formatUser --> do modułu `user-formater.js`\n//    generateUsersDOMElements --> do modułu `user-service.js`\n//    createUserElement --> do modułu `user-service.js` (czy musimy go eksportować?)\n// Pamiętaj aby poprawić plik `index.js` !!\nconst users = [{\n  id: 1,\n  name: 'Marian',\n  surname: 'Kowalski'\n}, {\n  id: 2,\n  name: 'Anna',\n  surname: 'Nowak'\n}, {\n  id: 3,\n  name: 'Szymon',\n  surname: 'Wiergowski'\n}];\n\n//# sourceURL=webpack:///./invoices/users.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\n// Ex.: Rozbij ten plik na wiele modułów.\n//    formatUser --> do modułu `user-formater.js`\n//    generateUsersDOMElements --> do modułu `user-service.js`\n//    createUserElement --> do modułu `user-service.js`\n//             (czy musimy go eksportować?)\n// Pamiętaj aby poprawić plik `index.js` !!\nconst users = [{\n  id: 1,\n  name: 'Marian',\n  surname: 'Kowalski'\n}, {\n  id: 2,\n  name: 'Anna',\n  surname: 'Nowak'\n}, {\n  id: 3,\n  name: 'Maria',\n  surname: 'Awaria'\n}];\n\n//# sourceURL=webpack:///./invoices/users.js?");
>>>>>>> 0b965f12e3fed8cb33b7eee3a71244089a7055a6

/***/ })

/******/ });