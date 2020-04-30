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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = (() => {\n  const getWeather = async (city, unit = 'F') => {\n    const key = '9d544eaf8bd4972c4fd9ee909e1f3381';\n    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${key}`,\n      { mode: 'cors' });\n    const weatherData = await getData.json();\n    return weatherData;\n  };\n  return { getWeather };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\nconsole.log(\"is the file running?\");\n// console.log(data.getWeather('Accra', 'imperial'));\n\nconst controller = ((data, ui) => {\n  let wD;\n  const units = 'F';\n  const toggleUnits = (s) => units == 'F' ? 'imperial' : 'metric';\n  const searchVal = document.getElementById('search');\n\n  const defaultWeather = async (city = 'Abuja', unit = 'imperial') => {\n    try {\n      const result = await data.getWeather(city, unit);\n      // console.log(weather[0].main);\n      console.log(result);\n      ui.renderPage(result, unit);\n      wD = await result;\n      return result;\n      \n    } catch (e) {\n      console.log('sorry we could not find your city');\n    }\n    return {\n      defaultWeather,\n    };\n  };\n\n  defaultWeather();\n\n  const handleClick = (event) => {\n    if (event.target.id === 'btnSearch') {\n      const val = document.getElementById('search').value;\n      const unit = 'F';\n      const sData = data.getWeather(val, unit);\n      console.log(sData);\n      resetValue(val);\n      ui.renderData(sData);\n    }\n  };\n\n  const resetValue = (s) => {\n    s = document.getElementById('search').value;\n    s = '';\n    return s;\n  };\n\n  defaultWeather();\n\n\n  \n  // document.getElementById('btnSearch').addEventListener('click', handleClick);\n})(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ui = (() => {\n  \n  const renderPage = (getData, unit = 'F') => {\n    console.log(\"checking\");\n    const root = document.getElementById('root');\n    console.log(root); \n    const {\n      feels_like, temp, temp_min, temp_max,\n    } = getData.main;\n    console.log(feels_like);\n    \n    const { name } = getData.name;\n    const { main, description, icon} = getData.weather[0];\n\n    const nav = document.createElement('nav');\n    console.log(nav)\n    nav.className = 'nav custom-nav';\n    nav.innerText = 'Weather App';\n    \n    const mainn = document.createElement('div');\n    console.log(mainn);\n    mainn.className = 'container';\n    mainn.style.backgroundImage = first;\n    \n    root.append(nav, mainn);\n     \n    const upper = document.createElement('div');\n    \n    \n    upper.className = 'row';\n    upper.setAttribute('id', 'apiData');\n    console.log(upper);\n    upper.innerHTML = `\n    <div class=\"col-sm-12\">\n      <div class=\"content text-center\">\n        <span>${date.toString()} - ${icon} </span>\n        <h3>${name}, ${data.sys.country} - ${Math.round(temp)} º${unit} </h3>\n        <div>${description}</div>\n        <div>Feels like ${feels_like} º${unit} </div>\n        <div>Min ${Math.round(temp_min)} º${unit} - Max ${Math.round(temp_max)} º${unit}</div>\n        <a href=\"\" id=\"toggeleUnits\">Change to º</a>\n      </div>\n    </div>\n    `;\n    \n    const lower = document.createElement('div');\n    lower.className = 'row col-12';\n    console.log(lower);\n    \n    const searchInput = document.createElement('INPUT');\n    searchInput.setAttribute('placeholder', 'enter city');\n    searchInput.setAttribute('id', 'search');\n    searchInput.className = 'form-control w-60';\n\n    const searchBtn = document.createElement('button');\n    searchBtn.className = 'btn btn-primary form-control mt-4 w-60';\n    searchBtn.innerText = 'Search';\n    searchBtn.setAttribute('id', 'btnSearch');\n\n    lower.append(searchInput, searchBtn);\n    \n\n    mainn.append(upper, lower);\n\n    return root;\n  };\n\n  return {\n    renderPage,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ui);\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });