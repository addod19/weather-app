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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/images/first.jpeg":
/*!********************************!*\
  !*** ./dist/images/first.jpeg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ebef2714af6ee18d31fa72751c9af138.jpeg\");\n\n//# sourceURL=webpack:///./dist/images/first.jpeg?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = ( () => {\n  // console.log('this is data');\n  const getWeather = (async (city) => {\n    const key = '9d544eaf8bd4972c4fd9ee909e1f3381';\n    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`,\n    {mode: 'cors'});\n    const weatherData = getData.json();\n    return weatherData;\n  });\n  \n\n  return { getWeather };\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nconst controller = ( (data, ui) => {\n\n  ui.renderPage();\n  ui.renderData();\n  const defaultWeather = async (city = 'Accra') => {\n    try {\n      const res = await data.getWeather('Accra');\n      ui.renderData(res);\n      console.log(res);\n    }catch(e) {\n      console.log('sorry we could not find your city');\n    }\n    return {\n        defaultWeather,\n    }\n\n  }\n\n  const handleClick = (event) => {\n    //   console.log(event.target.id === 'btnSearch');\n    if (event.target.id === 'btnSearch') {\n        const val = document.getElementById('search').value;\n        \n\n        const sData = data.getWeather(val);\n        console.log(sData.then());\n        \n        ui.renderData(sData);\n\n    }\n  }\n\n  document.getElementById('btnSearch').addEventListener('click', handleClick);\n//   handleClick();\n  console.log('hi it is me');\n})(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_images_first_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/images/first.jpeg */ \"./dist/images/first.jpeg\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\nconst ui = ( () => {\n  const renderPage = () => {\n    const root = document.getElementById('root');\n\n    const nav = document.createElement('NAV');\n    nav.className = 'nav custom-nav';\n    nav.innerText = 'Weather App';\n\n    const main = document.createElement('DIV');\n    main.className = 'container';\n    main.style.backgroundImage = _dist_images_first_jpeg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    console.log(main);\n\n    root.append(nav, main);\n\n    const upper = document.createElement('DIV');\n    upper.className = 'row col-12';\n    upper.setAttribute('id', 'apiData');\n\n    const lower = document.createElement('DIV');\n    lower.className = 'row col-12';\n\n    const searchInput = document.createElement('INPUT');\n    searchInput.setAttribute('placeholder', 'enter city');\n    searchInput.setAttribute('id', 'search');\n    searchInput.className = 'form-control';\n\n    const searchBtn = document.createElement('button');\n    searchBtn.className = 'btn btn-primary form-control mt-4';\n    searchBtn.innerText = 'Search';\n    searchBtn.setAttribute('id', 'btnSearch');\n\n    lower.append(searchInput, searchBtn);\n\n\n    main.append(upper, lower);\n  }\n\n  const renderData = (weather, unit = 'F') => {\n    let feels_like, temp, min_temp, max_temp;\n    const name = weather;\n    const getData = () => {\n      console.log('heyyyyyyy');\n      // data.getWeather('Accra');\n    }\n    // document.getElementById('btnSearch').addEventListener('click', getData);\n\n    return getData;\n  }\n\n  return {\n    renderPage,\n    renderData,\n  }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ui);\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });