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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scripts/contact-form.js":
/*!*************************************!*\
  !*** ./src/scripts/contact-form.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formInput = document.querySelectorAll('.field-validation');
var email = document.querySelector('.mail-validation');
var submitButton = document.querySelector('.contact-form__btn');
var contactSuccess = document.querySelector('.contact-form__message');
var reg = /^\w+@\w+\.\w{2,4}$/i;
formInput.forEach(function (element) {
  element.oninput = function () {
    element.classList.remove('invalid');
  };

  element.addEventListener('focusout', function () {
    if (!element.value) {
      element.classList.add('invalid');
    }
  });
});

if (email) {
  email.addEventListener('focusout', function () {
    var emailValue = email.value;

    email.oninput = function () {
      email.classList.remove('invalid');
    };

    if (!reg.test(emailValue)) {
      email.classList.add('invalid');
    } else {
      email.classList.remove('invalid');
    }
  });
}

if (submitButton) {
  submitButton.addEventListener('click', function () {
    var btnTriger = true;
    formInput.forEach(function (element) {
      if (!element.value) {
        element.classList.add('invalid');
      }

      if (element.classList.contains('invalid')) {
        btnTriger = false;
      }
    });

    if (btnTriger) {
      setTimeout(function () {
        formInput.forEach(function (element) {
          element.value = '';
          element.classList.remove('invalid');
          contactSuccess.classList.add('visible');
          setTimeout(function () {
            contactSuccess.classList.remove('visible');
          }, 3000);
        });
      }, 1000);
    }
  });
}

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./input-field.js */ "./src/scripts/input-field.js");

__webpack_require__(/*! ./like.js */ "./src/scripts/like.js");

__webpack_require__(/*! ./contact-form.js */ "./src/scripts/contact-form.js");

__webpack_require__(/*! ./subscribe-form.js */ "./src/scripts/subscribe-form.js");

__webpack_require__(/*! ../sass/index.scss */ "./src/sass/index.scss");

/***/ }),

/***/ "./src/scripts/input-field.js":
/*!************************************!*\
  !*** ./src/scripts/input-field.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dandruff = document.querySelector('.input-block__dandruff');
var btn = document.querySelector('.input-block__btn');
var animationFields = document.querySelectorAll('.input-animation');
var input = document.querySelector('.input-block__input');

if (dandruff) {
  dandruff.addEventListener('click', addClassOpen);
  btn.addEventListener('click', removeClassOpen);
  btn.addEventListener('click', clearInput);
}

function addClassOpen() {
  animationFields.forEach(function (element) {
    element.classList.add('open');
  });
}

function removeClassOpen() {
  animationFields.forEach(function (element) {
    element.classList.remove('open');
  });
}

function clearInput() {
  input.value = '';
}

/***/ }),

/***/ "./src/scripts/like.js":
/*!*****************************!*\
  !*** ./src/scripts/like.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var likeButton = document.querySelectorAll('.publication-footer__like-btn');
var likesCount = document.querySelectorAll('.publication-footer__likes-count');
var svgHeart = document.querySelectorAll('.publication-footer__svg');

var _loop = function _loop(i) {
  likeButton[i].addEventListener('click', function () {
    svgHeart[i].classList.toggle('like');
    likesCount[i].classList.toggle('like');
  });
};

for (var i = 0; i < likeButton.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/scripts/subscribe-form.js":
/*!***************************************!*\
  !*** ./src/scripts/subscribe-form.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var subscribeEmail = document.querySelector('.subscribe-form__input');
var subscribeButton = document.querySelector('.subscribe-form__btn');
var subscribeSuccess = document.querySelector('.subscribe-form__message');
var reg = /^\w+@\w+\.\w{2,4}$/i;

if (subscribeEmail) {
  subscribeEmail.oninput = function () {
    subscribeEmail.classList.remove('invalid');
  };

  subscribeEmail.addEventListener('focusout', function () {
    var subscribeEmailValue = subscribeEmail.value;

    if (!reg.test(subscribeEmailValue)) {
      subscribeEmail.classList.add('invalid');
    } else {
      subscribeEmail.classList.remove('invalid');
    }
  });
}

if (subscribeButton) {
  subscribeButton.addEventListener('click', function () {
    var btnTriger = true;

    if (!subscribeEmail.value) {
      subscribeEmail.classList.add('invalid');
    }

    if (subscribeEmail.classList.contains('invalid')) {
      btnTriger = false;
    }

    if (btnTriger) {
      setTimeout(function () {
        subscribeEmail.value = '';
        subscribeEmail.classList.remove('invalid');
        subscribeSuccess.classList.add('visible');
        setTimeout(function () {
          subscribeSuccess.classList.remove('visible');
        }, 3000);
      }, 1000);
    }
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map