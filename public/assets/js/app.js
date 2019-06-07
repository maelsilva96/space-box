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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resource/js/app.js":
/*!****************************!*\
  !*** ./resource/js/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data_person = {
  urlJSON: "/public/assets/json/dados.json",
  urlImages: "/public/assets/images/",
  dataPeople: [],
  containerModel: null,
  containerLoad: null,
  containerPeople: document.getElementById("data-people"),
  closeLoad: function closeLoad() {
    var container = document.getElementById("container-load");
    data_person.containerLoad = container.innerHTML;
    container.parentNode.removeChild(container);
  },
  isHidden: function isHidden(el) {
    var style = window.getComputedStyle(el);
    return style.display === 'none';
  },
  toggleMenuMobile: function toggleMenuMobile() {
    var menu = document.getElementById("menu");

    if (data_person.isHidden(menu)) {
      menu.classList.add("show");
    } else {
      menu.className = menu.className.replace("show", "");
    }
  },
  selectFirstItem: function selectFirstItem() {
    document.getElementById("data-people").children[0].click();
  },
  unSelectAllItems: function unSelectAllItems() {
    var containerItems = document.getElementById("data-people");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = containerItems.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var person = item.children[0];
        person.className = person.className.replace("is-active", "");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  selectItem: function selectItem() {
    var i = this.dataset.i;
    var person = data_person.dataPeople[i];
    document.getElementById("photo").src = data_person.urlImages + person.foto;
    document.getElementById("name").innerHTML = person.nome;
    document.getElementById("office").innerHTML = person.cargo;
    document.getElementById("yearsAge").innerHTML = person.idade;
    data_person.unSelectAllItems();
    this.children[0].classList.add("is-active");
  },
  insertDataPage: function insertDataPage(i) {
    var person = data_person.dataPeople[i];
    var element = document.createElement("div");
    element.className = "col-3-6-12";
    element.innerHTML = data_person.containerModel;
    element.dataset.i = i;
    element.innerHTML = element.innerHTML.replace("[id]", person.id);
    element.innerHTML = element.innerHTML.replace("data-src", "src").replace("[photo]", data_person.urlImages + person.foto);
    element.innerHTML = element.innerHTML.replace("[name]", person.nome);
    element.innerHTML = element.innerHTML.replace("[office]", person.cargo);
    element.onclick = data_person.selectItem;
    data_person.containerPeople.appendChild(element);
  },
  loadContainerModel: function loadContainerModel() {
    var container = document.getElementById("model-person");
    data_person.containerModel = container.innerHTML;
    container.parentNode.removeChild(container);
  },
  loadPage: function loadPage() {
    this.loadContainerModel();
    this.getData().then(function (data) {
      data_person.dataPeople = data;

      for (var i in data) {
        data_person.insertDataPage(i);
      }

      data_person.selectFirstItem();
      data_person.closeLoad();
    })["catch"](function (code) {
      if (code > 400 && code < 406) {
        alert("Arquivo de dados não encontrado!");
      } else {
        alert("Erro interno!");
      }

      data_person.closeLoad();
    });
  },
  getData: function getData() {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', data_person.urlJSON, true);
      xhr.responseType = 'json';

      xhr.onload = function () {
        var status = xhr.status;

        if (status == 200) {
          resolve(xhr.response);
        } else {
          reject(status);
        }
      };

      xhr.send();
    });
  },
  init: function init() {
    this.loadPage();
    document.getElementsByClassName("btn-menu")[0].onclick = data_person.toggleMenuMobile;
  }
};
data_person.init();

/***/ }),

/***/ "./resource/scss/base/_base.scss":
/*!***************************************!*\
  !*** ./resource/scss/base/_base.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./resource/js/app.js ./resource/scss/base/_base.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ismaelsilva/WebstormProjects/space-box/resource/js/app.js */"./resource/js/app.js");
module.exports = __webpack_require__(/*! /Users/ismaelsilva/WebstormProjects/space-box/resource/scss/base/_base.scss */"./resource/scss/base/_base.scss");


/***/ })

/******/ });