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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 324);
/******/ })
/************************************************************************/
/******/ ({

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_js__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cache_js__);


var cacheName = 'v1.0';
var cacheFiles = ['/', '/img/icons/mpb-icon152.png', '/img/icons/mpb-icon144.png', '/img/icons/mpb-icon192.png'];

self.addEventListener('beforeinstallprompt', function (e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise.
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function (choiceResult) {
    console.log(choiceResult.outcome);
    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled home screen install');
    } else {
      console.log('User added to home screen');
    }
  });
});

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(cacheName).then(function (cache) {
    console.log('ServiceWorker installed');
    return cache.addAll(cacheFiles).then(function () {
      return self.skipWaiting();
    });
  }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (thisCacheName) {
      if (thisCacheName !== cacheName) {
        console.log('ServiceWorker removing cached files from', sthisCacheName);
        return caches.delete(thisCacheName);
      }
    }));
  }));
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request, { ignoreSearch: true }).then(function (response) {
    return response || fetch(event.request);
  }));
});

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License')
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
if (!Cache.prototype.add) {
  Cache.prototype.add = function add(request) {
    return this.addAll([request]);
  };
}

if (!Cache.prototype.addAll) {
  Cache.prototype.addAll = function addAll(requests) {
    var cache = this;

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(function () {
      if (arguments.length < 1) throw new TypeError();

      requests = requests.map(function (request) {
        if (request instanceof Request) {
          return request;
        } else {
          return String(request); // may throw TypeError
        }
      });

      return Promise.all(requests.map(function (request) {
        if (typeof request === 'string') {
          request = new Request(request);
        }

        var scheme = new URL(request.url).protocol;

        if (scheme !== 'http:' && scheme !== 'https:') {
          throw new NetworkError('Invalid scheme');
        }

        return fetch(request.clone());
      }));
    }).then(function (responses) {
      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(responses.map(function (response, i) {
        return cache.put(requests[i], response);
      }));
    }).then(function () {
      return undefined;
    });
  };
}

if (!CacheStorage.prototype.match) {
  // This is probably vulnerable to race conditions (removing caches etc)
  CacheStorage.prototype.match = function match(request, opts) {
    var caches = this;

    return this.keys().then(function (cacheNames) {
      var match = void 0;

      return cacheNames.reduce(function (chain, cacheName) {
        return chain.then(function () {
          return match || caches.open(cacheName).then(function (cache) {
            return cache.match(request, opts);
          }).then(function (response) {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}

/***/ })

/******/ });