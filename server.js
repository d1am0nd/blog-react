module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("radium");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchPosts;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchPostBySlug;
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchMyPosts;
/* harmony export (immutable) */ __webpack_exports__["e"] = newPost;
/* harmony export (immutable) */ __webpack_exports__["f"] = updatePost;
/* harmony export (immutable) */ __webpack_exports__["a"] = deletePost;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_posts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_posts__ = __webpack_require__(15);




function fetchPosts() {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      if (state().posts.posts.length > 0) {
        resolve(state().posts.posts);
        return;
      }
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].getPublished().then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["e" /* SET_POSTS */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('err fetching posts', err);
        reject(err);
      });
    });
  };
};

function fetchPostBySlug(slug) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["d" /* SET_POST */], payload: {} });
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].findBySlug(slug).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["d" /* SET_POST */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('err fetchinig a post', err);
        reject(err);
      });
    });
  };
};

function fetchMyPosts() {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].getMine().then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["c" /* SET_MY_POSTS */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('err fetching my posts', err);
        reject(err);
      });
    });
  };
};

function newPost(post) {
  return function (dispatch, store) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].new(post).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["b" /* NEW_POST */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err updating the user', err);
        reject(err);
      });
    });
  };
};

function updatePost(post) {
  return function (dispatch, store) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].update(post).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["f" /* UPDATE_POST */], payload: post });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err updating the user', err);
        reject(err);
      });
    });
  };
};

function deletePost(id) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_posts__["a" /* default */].delete(id).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_posts__["a" /* DELETE_POST */], payload: id });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err deleting a post', err);
        reject(err);
      });
    });
  };
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);




var GET_PUBLISHED_URL = '/api/posts/all';
var GET_BY_SLUG_URL = '/api/posts/single/';
var GET_MINE_URL = '/api/posts/my/all';
var POST_EDIT_URL = '/api/posts/edit/';
var POST_NEW_URL = '/api/posts/create';
var DELETE_ID = '/api/posts/delete/';

/* harmony default export */ __webpack_exports__["a"] = ({
  new: function _new(post) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(POST_NEW_URL, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(post), {
      headers: {
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  update: function update(post) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(POST_EDIT_URL + post.id, __WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(post), {
      headers: {
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  delete: function _delete(id) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(DELETE_ID + id, {}, {
      headers: {
        Authorization: __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  getPublished: function getPublished() {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_PUBLISHED_URL);
  },
  findBySlug: function findBySlug(slug) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_BY_SLUG_URL + slug, {
      headers: {
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  getMine: function getMine() {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_MINE_URL, {
      headers: {
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_const_users__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var USER_SESS = 'user';
var TOKEN_SESS = 'bearer';

var Auth = function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.user = null;
    this.token = null;
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(USER_SESS) !== null && sessionStorage.getItem(TOKEN_SESS) !== null) {
      this.user = JSON.parse(sessionStorage.getItem(USER_SESS));
      this.token = sessionStorage.getItem(TOKEN_SESS);
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__store_const_users__["a" /* SET_USER */], payload: this.user });
    }
  }

  _createClass(Auth, [{
    key: 'loggedIn',
    value: function loggedIn() {
      return this.user !== null;
    }
  }, {
    key: 'user',
    value: function user() {
      return this.user;
    }
  }, {
    key: 'token',
    value: function token() {
      return this.token;
    }
  }, {
    key: 'login',
    value: function login(user, token) {
      this.user = user;
      this.token = token;
      if (typeof sessionStorage === 'undefined') {
        return;
      }
      sessionStorage.setItem(USER_SESS, JSON.stringify(user));
      sessionStorage.setItem(TOKEN_SESS, token);
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.user = null;
      this.token = null;
      if (typeof sessionStorage === 'undefined') {
        return;
      }
      sessionStorage.removeItem(USER_SESS);
      sessionStorage.removeItem(TOKEN_SESS);
    }
  }]);

  return Auth;
}();

;

/* harmony default export */ __webpack_exports__["a"] = (new Auth());

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_USER; });
var SET_USER = 'SET_USER';

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  validateYyyyMmDd: function validateYyyyMmDd(string) {
    var r = string.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (r === null) {
      return false;
    }
    var d = new Date(string);
    if (Object.prototype.toString.call(d) === '[object Date]') {
      // it is a date
      if (!isNaN(d.getTime())) {
        // d.valueOf() could also work
        return true;
      }
    }
    return false;
  },
  slugify: function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchImages;
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchImage;
/* harmony export (immutable) */ __webpack_exports__["d"] = newImage;
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteImage;
/* harmony export (immutable) */ __webpack_exports__["e"] = updateImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_images__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_images__ = __webpack_require__(16);




function fetchImages() {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      if (state().images.images.length > 0) {
        return;
      }
      __WEBPACK_IMPORTED_MODULE_0__api_images__["a" /* default */].getImages().then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_images__["c" /* SET_IMAGES */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err fetching images', err);
        reject(err);
      });
    });
  };
};

function fetchImage(id) {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_images__["a" /* default */].getById(id).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_images__["b" /* SET_IMAGE */], payload: res.data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err fetching image', id, err);
        reject(err);
      });
    });
  };
};

function newImage(data) {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_images__["a" /* default */].new(data).then(function (res) {
        console.log('added');
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err updating image', id, err);
        reject(err);
      });
    });
  };
};

function deleteImage(id) {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_images__["a" /* default */].deleteById(id).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_images__["a" /* DELETE_IMAGE */], payload: id });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err deleting image', id, err);
        reject(err);
      });
    });
  };
};

function updateImage(data, id) {
  return function (dispatch, state) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0__api_images__["a" /* default */].update(data, id).then(function (res) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__const_images__["d" /* UPDATE_IMAGE */], payload: data });
        resolve(res.data);
      }).catch(function (err) {
        console.log('Err updating image', id, err);
        reject(err);
      });
    });
  };
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Routes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_Title__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Partials_AdminHeader__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_actions_postsActions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions_userActions__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_posts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__meta_meta__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styles_layout__ = __webpack_require__(51);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






















var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    __WEBPACK_IMPORTED_MODULE_13__meta_meta__["a" /* default */].setTitle(null);
    __WEBPACK_IMPORTED_MODULE_13__meta_meta__["a" /* default */].setDescription(null);

    _this.styles = new __WEBPACK_IMPORTED_MODULE_14__styles_layout__["a" /* default */]();
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (__WEBPACK_IMPORTED_MODULE_12__auth_auth__["a" /* default */].loggedIn()) {
        this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__store_actions_postsActions__["b" /* fetchMyPosts */])());
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles(title) {
      return this.styles.layoutStyles();
    }
  }, {
    key: 'logout',
    value: function logout(e) {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__store_actions_userActions__["b" /* logout */])());
    }
  }, {
    key: 'login',
    value: function login(e, creds) {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__store_actions_userActions__["a" /* login */])(creds));
    }
  }, {
    key: 'onPostDelete',
    value: function onPostDelete(postId) {
      if (!confirm('Really delete post with id ' + postId + '?')) {
        return;
      }
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__store_actions_postsActions__["a" /* deletePost */])(postId));
    }
  }, {
    key: 'renderAdminPanel',
    value: function renderAdminPanel() {
      var _this2 = this;

      if (!__WEBPACK_IMPORTED_MODULE_12__auth_auth__["a" /* default */].loggedIn()) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Partials_AdminHeader__["a" /* default */], {
        onPostDelete: function onPostDelete(id) {
          return _this2.onPostDelete(id);
        },
        logout: function logout(e) {
          return _this2.logout(e);
        },
        posts: this.props.posts.myPosts,
        user: this.props.users.user, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: this.getStyles(), __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Layout_Title__["a" /* default */], { text: 'My Programming Blog', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }),
        this.renderAdminPanel(),
        __WEBPACK_IMPORTED_MODULE_4__Routes__["a" /* default */]
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(store) {
      return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__store_actions_postsActions__["b" /* fetchMyPosts */])());
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (store) {
  return Object.assign({}, store);
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Layout))));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pages_Index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Pages_Show__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pages_Auth_Login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pages_Auth_Edit__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pages_Auth_NewPost__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Pages_Auth_Images__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Pages_Auth_NewImage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Pages_Auth_EditImage__ = __webpack_require__(48);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Routes.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var routes = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '0', path: '/', component: __WEBPACK_IMPORTED_MODULE_3__Pages_Index__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '1', path: '/posts/write', component: __WEBPACK_IMPORTED_MODULE_7__Pages_Auth_NewPost__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '2', path: '/posts/:slug', component: __WEBPACK_IMPORTED_MODULE_4__Pages_Show__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '3', path: '/posts/edit/:slug', component: __WEBPACK_IMPORTED_MODULE_6__Pages_Auth_Edit__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '4', path: '/admin/images', component: __WEBPACK_IMPORTED_MODULE_8__Pages_Auth_Images__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, key: '5', path: '/admin/images/new', component: __WEBPACK_IMPORTED_MODULE_9__Pages_Auth_NewImage__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], {
  exact: true,
  key: '6',
  path: '/admin/images/edit/:id',
  component: __WEBPACK_IMPORTED_MODULE_10__Pages_Auth_EditImage__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: this
}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], {
  exact: true,
  key: '7',
  path: '/login',
  component: __WEBPACK_IMPORTED_MODULE_5__Pages_Auth_Login__["a" /* default */], __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: this
})];

/* harmony default export */ __webpack_exports__["a"] = (routes);

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return routes;
    }
  }]);

  return Routes;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

var routesArray2 = [{
  component: __WEBPACK_IMPORTED_MODULE_2__Layout__["a" /* default */],
  routes: [{
    path: '/',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_3__Pages_Index__["a" /* default */]
  }, {
    path: '/posts/write',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_7__Pages_Auth_NewPost__["a" /* default */]
  }, {
    path: '/posts/:slug',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_4__Pages_Show__["a" /* default */]
  }, {
    path: '/posts/edit/:slug',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_6__Pages_Auth_Edit__["a" /* default */]
  }, {
    path: '/admin/images',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_8__Pages_Auth_Images__["a" /* default */]
  }, {
    path: '/admin/images/new',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_9__Pages_Auth_NewImage__["a" /* default */]
  }, {
    path: '/admin/images/edit/:id',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_10__Pages_Auth_EditImage__["a" /* default */]
  }, {
    path: '/login',
    exact: true,
    component: __WEBPACK_IMPORTED_MODULE_5__Pages_Auth_Login__["a" /* default */]
  }]
}];
// export default routesArray;

// export default Routes;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_promise_middleware__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_postsReducer__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_userReducer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_imagesReducer__ = __webpack_require__(38);






// import {imagesReducer} from './reducers/imagesReducer';




var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  posts: __WEBPACK_IMPORTED_MODULE_4__reducers_postsReducer__["a" /* postsReducer */],
  users: __WEBPACK_IMPORTED_MODULE_5__reducers_userReducer__["a" /* userReducer */],
  images: __WEBPACK_IMPORTED_MODULE_6__reducers_imagesReducer__["a" /* imagesReducer */]
});
var middleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_promise_middleware___default()(), __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a, Object(__WEBPACK_IMPORTED_MODULE_1_redux_logger__["createLogger"])());
var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducers, middleware);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_MY_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_POST; });
var NEW_POST = 'NEW_POST';
var SET_POSTS = 'SET_POSTS';
var SET_POST = 'SET_POST';
var SET_MY_POSTS = 'SET_MY_POSTS';
var DELETE_POST = 'DELETE_POST';
var UPDATE_POST = 'UPDATE_POST';

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_IMAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_IMAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_IMAGE; });
var ADD_IMAGE = 'ADD_IMAGE';
var SET_IMAGE = 'SET_IMAGE';
var SET_IMAGES = 'SET_IMAGES';
var UPDATE_IMAGE = 'UPDATE_IMAGE';
var DELETE_IMAGE = 'DELETE_IMAGE';

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meta = function () {
  function Meta() {
    _classCallCheck(this, Meta);

    this.defaultTitle = 'My Programming Blog';
    this.separator = ' | ';
    this.meta = {
      title: '',
      desc: '',
      img: ''
    };

    this.setTitle(null);
  }

  _createClass(Meta, [{
    key: 'setTitle',
    value: function setTitle(title) {
      if (!title) {
        this.meta.title = this.defaultTitle;
      } else {
        this.meta.title = title + this.separator + this.defaultTitle;
      }

      if (typeof document === 'undefined') return;
      document.getElementById('meta-title').innerHTML = this.meta.title;
      document.getElementById('meta-og-title').setAttribute('content', this.meta.title);
    }
  }, {
    key: 'setDescription',
    value: function setDescription(desc) {
      if (!desc) {
        this.meta.desc = 'My programming blog';
      } else {
        this.meta.desc = desc;
      }

      if (typeof document === 'undefined') return;
      document.getElementById('meta-description').setAttribute('content', this.meta.desc);
      document.getElementById('meta-og-description').setAttribute('content', this.meta.desc);
    }
  }, {
    key: 'setImage',
    value: function setImage(img) {
      if (!image) {
        this.meta.img = '';
      } else {
        this.meta.img = img;
      }

      if (typeof document === 'undefined') return;
      document.getElementById('meta-og-image').setAttribute('content', this.meta.img);
    }
  }]);

  return Meta;
}();

;

/* harmony default export */ __webpack_exports__["a"] = (new Meta());

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = login;
/* harmony export (immutable) */ __webpack_exports__["b"] = logout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_auth__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_users__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postsActions__ = __webpack_require__(4);





function login(creds) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_1__api_auth__["a" /* default */].login(creds).then(function (res) {
        var user = res.data;
        var token = res.headers.authorization;
        __WEBPACK_IMPORTED_MODULE_0__auth_auth__["a" /* default */].login(user, token);

        dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__const_users__["a" /* SET_USER */], payload: user });
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__postsActions__["b" /* fetchMyPosts */])());
        resolve(user);
      }).catch(function (err) {
        console.log('Err logging in', err);
        reject(err);
      });
    });
  };
};

function logout() {
  return function (dispatch) {
    __WEBPACK_IMPORTED_MODULE_0__auth_auth__["a" /* default */].logout();
    dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__const_users__["a" /* SET_USER */], payload: {} });
  };
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params__ = __webpack_require__(22);




var LOGIN_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/users/login';
// const REGISTER_URL = p.apiUrl + '/api/users/register'
var LOGOUT_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/users/logout';
var REFRESH_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/users/current';

/* harmony default export */ __webpack_exports__["a"] = ({
  login: function login(creds) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(LOGIN_URL, __WEBPACK_IMPORTED_MODULE_1_qs___default.a.stringify(creds));
  },
  refresh: function refresh() {
    var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(REFRESH_URL);
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_json__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_api_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_api_json__);


/* harmony default export */ __webpack_exports__["a"] = ({
  apiUrl: __WEBPACK_IMPORTED_MODULE_0__config_api_json___default.a.apiUrl
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_form__ = __webpack_require__(24);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Partials\\Forms\\PostForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PostForm = function (_React$Component) {
  _inherits(PostForm, _React$Component);

  function PostForm(props) {
    _classCallCheck(this, PostForm);

    var _this = _possibleConstructorReturn(this, (PostForm.__proto__ || Object.getPrototypeOf(PostForm)).call(this, props));

    var post = {
      'title': '',
      'slug': '',
      'description': '',
      'content': '',
      'published_at': {
        'String': '',
        'Valid': false
      }
    };

    if (props.post) {
      Object.assign(post, props.post);
    }

    _this.state = {
      post: post
    };
    return _this;
  }

  _createClass(PostForm, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.post != this.props.post) {
        this.setState({
          post: this.props.post
        });
      }
    }
  }, {
    key: 'active',
    value: function active() {
      if (__WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* default */].validateYyyyMmDd(this.state.post.published_at.String)) {
        return true;
      }
      return false;
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.props.handleSubmit) {
        this.props.handleSubmit(e, this.state.post);
      }
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(e, attr) {
      var post = this.state.post;

      if (attr === 'title') {
        post[attr] = e.target.value;
        post['slug'] = __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* default */].slugify(e.target.value);
      } else if (attr === 'published_at') {
        post.published_at.String = e.target.value;
      } else {
        post[attr] = e.target.value;
      }
      this.setState({
        post: post
      });
      if (this.props.handleValueChange) {
        this.props.handleValueChange(e, attr);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            },
            'Title'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].smallTextStyle(),
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'title');
            },
            autoFocus: 'true',
            value: this.state.post.title,
            type: 'text', __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            },
            'Slug'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].smallTextStyle(),
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'slug');
            },
            value: this.state.post.slug,
            type: 'text', __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            },
            'Summary'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
            value: this.state.post.summary,
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].inputStyle(),
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'summary');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            },
            'Content'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
            rows: '20',
            value: this.state.post.content,
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].inputStyle(),
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'content');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            },
            'Published at'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            disabled: 'true',
            type: 'checkbox',
            checked: this.active(),
            value: this.state.post.active,
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'active');
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].smallTextStyle(),
            placeholder: 'YYYY-MM-DD',
            type: 'text',
            value: this.state.post.published_at.String,
            onChange: function onChange(e) {
              return _this2.handleValueChange(e, 'published_at');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            },
            'Submit'
          )
        )
      );
    }
  }]);

  return PostForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_radium___default()(PostForm));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  formGroupStyle: function formGroupStyle() {
    return {
      width: '100%',
      marginBottom: '5px'
    };
  },
  inputStyle: function inputStyle() {
    return {
      width: '100%',
      display: 'block'
    };
  },
  smallTextStyle: function smallTextStyle() {
    return {
      'maxWidth': '200px'
    };
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Forms_ImageForm__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_imagesActions__ = __webpack_require__(10);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\NewImage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var NewImage = function (_React$Component) {
  _inherits(NewImage, _React$Component);

  function NewImage() {
    _classCallCheck(this, NewImage);

    return _possibleConstructorReturn(this, (NewImage.__proto__ || Object.getPrototypeOf(NewImage)).apply(this, arguments));
  }

  _createClass(NewImage, [{
    key: 'handleSubmit',
    value: function handleSubmit(e, formData) {
      e.preventDefault();
      this.props.postNewImage(formData);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Forms_ImageForm__["a" /* default */], {
        handleSubmit: function handleSubmit(e, data) {
          return _this2.handleSubmit(e, data);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  }]);

  return NewImage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (store) {
  return {};
}, function (dispatch) {
  return {
    postNewImage: function postNewImage(formData) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_imagesActions__["d" /* newImage */])(formData));
    }
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(NewImage)));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_form__ = __webpack_require__(24);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Partials\\Forms\\ImageForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ImageForm = function (_React$Component) {
  _inherits(ImageForm, _React$Component);

  function ImageForm(props) {
    _classCallCheck(this, ImageForm);

    var _this = _possibleConstructorReturn(this, (ImageForm.__proto__ || Object.getPrototypeOf(ImageForm)).call(this, props));

    var image = {
      'name': '',
      'imgSrc': '',
      'image': ''
    };
    if (props.image) {
      Object.assign(image, props.image);
    }

    _this.state = {
      image: image
    };
    return _this;
  }

  _createClass(ImageForm, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.image != this.props.image) {
        this.setState({
          image: Object.assign({}, this.state.image, {
            name: this.props.image.name,
            imgSrc: this.props.image.path
          })
        });
      }
    }
  }, {
    key: 'handleNameChange',
    value: function handleNameChange(e) {
      this.setState({
        image: Object.assign({}, this.state.image, {
          name: e.target.value
        })
      });
    }
  }, {
    key: 'handleImageChange',
    value: function handleImageChange(e) {
      var _this2 = this;

      var image = e.target.files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        _this2.setState({
          image: Object.assign({}, _this2.state.image, {
            image: image,
            imgSrc: reader.result
          })
        });
      };

      reader.readAsDataURL(image);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      if (this.props.handleSubmit) {
        var formData = new FormData();
        formData.set('image', this.state.image.image);
        formData.set('name', this.state.image.name);
        this.props.handleSubmit(e, formData);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            return _this3.handleSubmit(e);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            },
            'Name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].smallTextStyle(),
            value: this.state.image.name,
            onChange: function onChange(e) {
              return _this3.handleNameChange(e);
            },
            autoFocus: 'true',
            type: 'text', __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            accept: 'image/*',
            type: 'file',
            onChange: function onChange(e) {
              return _this3.handleImageChange(e);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            },
            'Submit'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: __WEBPACK_IMPORTED_MODULE_3__styles_form__["a" /* default */].formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.image.imgSrc, __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          })
        )
      );
    }
  }]);

  return ImageForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    image: state.images.image
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(ImageForm)));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_js_Server__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_js_components_Test__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_js_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_js_components_Routes__ = __webpack_require__(13);
var _jsxFileName = "C:\\go-projects\\src\\blog3.0\\node\\server.js",
    _this = this;









var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static("../public"));

app.get("*", function (req, res) {
  var branch = Object(__WEBPACK_IMPORTED_MODULE_6_react_router_config__["matchRoutes"])(__WEBPACK_IMPORTED_MODULE_7__src_js_components_Routes__["a" /* default */], req.url);
  var promises = branch.map(function (_ref) {
    var route = _ref.route;

    var fetchData = route.props.component.fetchData;
    return fetchData instanceof Function ? fetchData(__WEBPACK_IMPORTED_MODULE_5__src_js_store__["a" /* default */]) : Promise.resolve(null);
  });
  Promise.all(promises).then(function (data) {
    console.log('DOOOOOOOOOOOOOOOOOOOOONE');
  }).catch(function (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRR');
  });

  var preloadedState = __WEBPACK_IMPORTED_MODULE_5__src_js_store__["a" /* default */].getState();
  var html = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n        <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n        <title id=\"meta-title\"></title>\n        <meta id=\"meta-og-title\" property=\"og:title\" content=\"\" />\n        <meta id=\"meta-description\" name=\"description\" content=\"\"/>\n        <meta id=\"meta-og-description\" property=\"og:description\" content=\"\"/>\n        <meta id=\"meta-og-image\" property=\"og:image\" content=\"\" />\n        <meta property=\"og:type\" content=\"website\" />\n        <!--[if lte IE 8]><script src=\"/css/ie/html5shiv.js\"></script><![endif]-->\n        <!-- <script src=\"/js/all_libs.js\"></script> -->\n        <!-- <link rel=\"stylesheet\" type=\"text/css\" href=\"/vendor/bootstrap-3.3.7/css/bootstrap.min.css\"/> -->\n    </head>\n    <body class=\"landing\">\n        <div id=\"root\">\n        " + Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_js_Server__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_5__src_js_store__["a" /* default */],
    context: {},
    radiumConfig: { userAgent: req.headers['user-agent'] },
    location: req.url, __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: _this
  })) + "\n        </div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState).replace(/</g, "\\u003c") + "\n        </script>\n    </body>\n    </html>\n  ";

  res.send(html);
});

app.listen(process.env.PORT || 3002, function () {
  console.log("Server is listening");
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\Server.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import { hydrate } from 'react-dom'
// import Layout from './components/ServerLayout';
// import radium, {StyleRoot} from 'radium';
// import {Provider, connect} from 'react-redux';
// import {StaticRouter as Router} from 'react-router-dom';

// @radium()
// class App extends React.Component {
//   render() {
//     return (
//       <StyleRoot>
//         <Layout context={{}} location={this.props.location}/>
//       </StyleRoot>
//       <Provider store={this.props.store}>
//         <StyleRoot>
//           <Router><Layout/></Router>
//         </StyleRoot>
//       </Provider>
//     );
//   }
// }

// export default radium(App);






var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
        { store: this.props.store, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_radium__["StyleRoot"],
          {
            radiumConfig: this.props.radiumConfig, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["StaticRouter"],
            { context: this.props.context, location: this.props.location, __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_posts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__["d" /* fetchPosts */])());
    }
  }, {
    key: 'linkStyle',
    value: function linkStyle() {
      return {
        'color': 'black',
        'textDecoration': 'none'
      };
    }
  }, {
    key: 'titleStyle',
    value: function titleStyle() {
      return {
        'marginBottom': '10px',
        'marginTop': 0
      };
    }
  }, {
    key: 'summaryStyle',
    value: function summaryStyle() {
      return {
        fontSize: '18px',
        marginTop: 0,
        marginBottom: '10px'
      };
    }
  }, {
    key: 'moreStyle',
    value: function moreStyle() {
      return {
        fontSize: '18px'
      };
    }
  }, {
    key: 'wrapperStyle',
    value: function wrapperStyle() {
      return {
        'transition': '0.2s',
        'border': '1px solid white',
        'marginBottom': '15px'
      };
    }
  }, {
    key: 'renderPosts',
    value: function renderPosts() {
      var _this2 = this;

      return this.props.posts.map(function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_router_dom__["Link"],
          {
            style: _this2.linkStyle(),
            to: '/posts/' + i.slug,
            key: i.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: i.id,
              style: _this2.wrapperStyle(), __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { style: _this2.titleStyle(), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: _this2
              },
              i.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { style: _this2.summaryStyle(), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: _this2
              },
              i.summary
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: _this2.moreStyle(), href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                },
                __self: _this2
              },
              'More'
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        },
        this.renderPosts()
      );
    }
  }], [{
    key: 'fetchData',
    value: function fetchData(store) {
      return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__["d" /* fetchPosts */])());
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    posts: state.posts.posts
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Index)));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux-promise-middleware");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_posts__ = __webpack_require__(15);


var initialState = {
  posts: [],
  post: {},
  myPosts: []
};

var postsReducer = function postsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["e" /* SET_POSTS */]:
      {
        state = Object.assign({}, state, {
          posts: action.payload
        });
        break;
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["d" /* SET_POST */]:
      {
        state = Object.assign({}, state, {
          post: action.payload
        });
        break;
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["c" /* SET_MY_POSTS */]:
      {
        state = Object.assign({}, state, {
          myPosts: action.payload
        });
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["d" /* SET_POST */]:
      {
        state = Object.assign({}, state, {
          post: action.payload
        });
        break;
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["f" /* UPDATE_POST */]:
      {
        var filter = function filter(i) {
          if (i.id != action.payload.id) {
            return i;
          }
          return action.payload;
        };
        var post = state.post;
        var posts = state.posts.map(filter);
        var myPosts = state.myPosts.map(filter);
        if (action.payload.id == post.id) {
          Object.assign(post, action.payload);
        }
        state = Object.assign({}, state, {
          posts: posts,
          post: post,
          myPosts: myPosts
        });
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_posts__["a" /* DELETE_POST */]:
      {
        var _filter = function _filter(i) {
          return i.id !== action.payload;
        };
        var _posts = state.posts.filter(_filter);
        var _myPosts = state.myPosts.filter(_filter);
        var _post = state.post;
        if (_post.id === action.payload) {
          _post = {};
        }
        state = Object.assign({}, state, {
          posts: _posts,
          post: _post,
          myPosts: _myPosts
        });
      }
  }
  return state;
};



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_users__ = __webpack_require__(8);


var initialState = {
  user: {}
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__const_users__["a" /* SET_USER */]:
      {
        state = Object.assign({}, state, {
          user: action.payload
        });
      }
  }
  return state;
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return imagesReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_images__ = __webpack_require__(16);


var initialState = {
  images: [],
  image: {}
};

var imagesReducer = function imagesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__const_images__["c" /* SET_IMAGES */]:
      {
        state = Object.assign({}, state, {
          images: action.payload
        });
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_images__["b" /* SET_IMAGE */]:
      {
        state = Object.assign({}, state, {
          image: action.payload
        });
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_images__["d" /* UPDATE_IMAGE */]:
      {
        var filter = function filter(i) {
          if (i.id != action.payload.id) {
            return i;
          }
          return action.payload;
        };
        var image = state.image;
        var images = state.images.map(filter);
        if (action.payload.id == image.id) {
          Object.assign(image, action.payload);
        }
        state = Object.assign({}, state, {
          images: images,
          image: image
        });
      }
    case __WEBPACK_IMPORTED_MODULE_0__const_images__["a" /* DELETE_IMAGE */]:
      {
        var _filter = function _filter(i) {
          return i.id != action.payload;
        };
        var _image = state.image;
        var _images = state.images.filter(_filter);
        if (action.id == _image.id) {
          Object.assign(_image, action.payload);
        }
        state = Object.assign({}, state, {
          images: _images,
          image: _image
        });
      }
  }
  return state;
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marked_renderer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions_postsActions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meta_meta__ = __webpack_require__(19);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Show.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var Show = function (_React$Component) {
  _inherits(Show, _React$Component);

  function Show() {
    _classCallCheck(this, Show);

    return _possibleConstructorReturn(this, (Show.__proto__ || Object.getPrototypeOf(Show)).apply(this, arguments));
  }

  _createClass(Show, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchPost();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.fetchPost();
      }
    }
  }, {
    key: 'fetchPost',
    value: function fetchPost() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__store_actions_postsActions__["c" /* fetchPostBySlug */])(this.props.match.params.slug));
    }
  }, {
    key: 'content',
    value: function content() {
      if (!this.props.post.content) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_3_marked___default()(this.props.post.content, { renderer: __WEBPACK_IMPORTED_MODULE_4__marked_renderer__["a" /* default */], sanitize: true });
    }
  }, {
    key: 'linkStyle',
    value: function linkStyle() {
      return {
        'color': 'black',
        'textDecoration': 'none'
      };
    }
  }, {
    key: 'titleStyle',
    value: function titleStyle() {
      return {
        'marginBottom': '10px',
        'marginTop': 0
      };
    }
  }, {
    key: 'summaryStyle',
    value: function summaryStyle() {
      return {
        fontSize: '18px',
        marginTop: 0,
        marginBottom: '10px'
      };
    }
  }, {
    key: 'contentStyle',
    value: function contentStyle() {
      return {
        fontSize: '16px',
        marginTop: 0,
        marginBottom: 0
      };
    }
  }, {
    key: 'wrapperStyle',
    value: function wrapperStyle() {
      return {
        'transition': '0.2s',
        'border': '1px solid white'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          key: this.props.post.id,
          style: this.wrapperStyle(), __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { style: this.titleStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          this.props.post.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { style: this.summaryStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          },
          this.props.post.summary
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          style: this.contentStyle(),
          dangerouslySetInnerHTML: { __html: this.content() }, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        })
      );
    }
  }]);

  return Show;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    post: state.posts.post
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Show)));

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);


var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked___default.a.Renderer();

// Add _blank to links
renderer.link = function (href, title, text) {
  if (renderer.options.sanitize) {
    var prot = '';
    try {
      prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toString().toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  out += ' target="_blank"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

/* harmony default export */ __webpack_exports__["a"] = (renderer);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions_userActions__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Partials_Forms_LoginForm__ = __webpack_require__(43);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(e, creds) {
      this.props.login(creds);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          'Login'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Partials_Forms_LoginForm__["a" /* default */], {
          handleSubmit: function handleSubmit(e, creds) {
            return _this2.handleSubmit(e, creds);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        })
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (store) {
  return {};
}, function (dispatch) {
  return {
    login: function login(creds) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store_actions_userActions__["a" /* login */])(creds));
    }
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Login)));

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {"apiUrl":"http://localhost:3000"}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Partials\\Forms\\LoginForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

    _this.credentials = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'formGroupStyle',
    value: function formGroupStyle() {
      return {
        width: '100%',
        marginBottom: '5px'
      };
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      if (this.props.handleSubmit) {
        this.props.handleSubmit(e, this.credentials);
      }
    }
  }, {
    key: 'handleCredChange',
    value: function handleCredChange(e, cred) {
      if (this.props.handleCredChange) {
        this.props.handleCredChange(e, cred);
      }
      this.credentials[cred] = e.target.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: this.formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            'Email'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            onChange: function onChange(e) {
              return _this2.handleCredChange(e, 'email');
            },
            autoFocus: 'true',
            type: 'text', __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: this.formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            'Password'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            onChange: function onChange(e) {
              return _this2.handleCredChange(e, 'password');
            },
            type: 'password', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: this.formGroupStyle(), __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            },
            'Submit'
          )
        )
      );
    }
  }]);

  return LoginForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_radium___default()(LoginForm));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Forms_PostForm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(9);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\Edit.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Edit = function (_React$Component) {
  _inherits(Edit, _React$Component);

  function Edit() {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
  }

  _createClass(Edit, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchPost();
    }

    // static fetchData(store) {

    // }

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.fetchPost();
      }
    }
  }, {
    key: 'onRouteChanged',
    value: function onRouteChanged() {
      this.fetchPost();
    }
  }, {
    key: 'fetchPost',
    value: function fetchPost() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__["c" /* fetchPostBySlug */])(this.props.match.params.slug));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e, data) {
      if (!__WEBPACK_IMPORTED_MODULE_5__helpers_index__["a" /* default */].validateYyyyMmDd(data.published_at.String)) {
        data.published_at.String = '';
        data.published_at.Valid = false;
      } else {
        data.published_at.Valid = true;
      }
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__["f" /* updatePost */])(data));
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var _this2 = this;

      if (!this.props.post.id) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Forms_PostForm__["a" /* default */], {
        post: this.props.post,
        handleSubmit: function handleSubmit(e, data) {
          return _this2.handleSubmit(e, data);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          },
          this.props.post.title
        ),
        this.renderForm()
      );
    }
  }]);

  return Edit;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {
    post: state.posts.post
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Edit)));

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Forms_PostForm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__(9);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\NewPost.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var NewPost = function (_React$Component) {
  _inherits(NewPost, _React$Component);

  function NewPost() {
    _classCallCheck(this, NewPost);

    return _possibleConstructorReturn(this, (NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call(this));
  }

  _createClass(NewPost, [{
    key: 'handleSubmit',
    value: function handleSubmit(e, data) {
      if (!__WEBPACK_IMPORTED_MODULE_5__helpers_index__["a" /* default */].validateYyyyMmDd(data.published_at.String)) {
        data.published_at.String = '';
        data.published_at.Valid = false;
      } else {
        data.published_at.Valid = true;
      }
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_postsActions__["e" /* newPost */])(data));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          'New post'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Forms_PostForm__["a" /* default */], {
          handleSubmit: function handleSubmit(e, data) {
            return _this2.handleSubmit(e, data);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        })
      );
    }
  }]);

  return NewPost;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return {};
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(NewPost)));

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions_imagesActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\Images.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Images = function (_React$Component) {
  _inherits(Images, _React$Component);

  function Images() {
    _classCallCheck(this, Images);

    return _possibleConstructorReturn(this, (Images.__proto__ || Object.getPrototypeOf(Images)).apply(this, arguments));
  }

  _createClass(Images, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchImages();
    }
  }, {
    key: 'fetchImages',
    value: function fetchImages() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store_actions_imagesActions__["c" /* fetchImages */])());
    }
  }, {
    key: 'deleteById',
    value: function deleteById(e, id) {
      e.preventDefault();
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__store_actions_imagesActions__["a" /* deleteImage */])(id));
    }
  }, {
    key: 'imageStyle',
    value: function imageStyle() {
      return {
        maxWidth: '100%'
      };
    }
  }, {
    key: 'renderImages',
    value: function renderImages() {
      var _this2 = this;

      return this.props.images.map(function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: i.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: _this2
          },
          i.name,
          ' -\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                return _this2.deleteById(e, i.id);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: _this2
            },
            'Delete'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: _this2
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
            { to: '/admin/images/edit/' + i.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { style: _this2.imageStyle(), key: i.id, src: i.path, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: _this2
            })
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        },
        'Images',
        this.renderImages()
      );
    }
  }]);

  return Images;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (store) {
  return {
    images: store.images.images
  };
})(__WEBPACK_IMPORTED_MODULE_1_radium___default()(Images)));

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params__ = __webpack_require__(22);




var POST_NEW_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/images/create';
var POST_EDIT_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/images/edit/';
var GET_IMAGES_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/images/all';
var GET_BY_ID_URL = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/images/single/';
var GET_DELETE_BY_ID = __WEBPACK_IMPORTED_MODULE_2__params__["a" /* default */].apiUrl + '/api/images/delete/';
/*
const GET_MINE_URL = '/api/images/my/all'
const GET_PUBLISHED_URL = '/api/images/all'
*/
/* harmony default export */ __webpack_exports__["a"] = ({
  new: function _new(image) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(POST_NEW_URL, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  update: function update(image, id) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(POST_EDIT_URL + id, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  deleteById: function deleteById(id) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_DELETE_BY_ID + id, {
      headers: {
        'Authorization': __WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* default */].token
      }
    });
  },
  getById: function getById(id) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_BY_ID_URL + id);
  },
  getImages: function getImages() {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(GET_IMAGES_URL);
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NewImage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions_imagesActions__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Partials_Forms_ImageForm__ = __webpack_require__(26);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Pages\\Auth\\EditImage.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var EditImage = function (_React$Component) {
  _inherits(EditImage, _React$Component);

  function EditImage() {
    _classCallCheck(this, EditImage);

    return _possibleConstructorReturn(this, (EditImage.__proto__ || Object.getPrototypeOf(EditImage)).apply(this, arguments));
  }

  _createClass(EditImage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchImage();
    }
  }, {
    key: 'fetchImage',
    value: function fetchImage() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_imagesActions__["b" /* fetchImage */])(this.props.match.params.id));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e, formData) {
      e.preventDefault();
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__store_actions_imagesActions__["e" /* updateImage */])(formData, this.props.match.params.id));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Partials_Forms_ImageForm__["a" /* default */], {
        handleSubmit: function handleSubmit(e, data) {
          return _this2.handleSubmit(e, data);
        },
        image: this.props.image, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }]);

  return EditImage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(function (store) {
  return {
    image: store.images.image
  };
})(__WEBPACK_IMPORTED_MODULE_2_radium___default()(EditImage)));

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Layout\\Title.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Title = function (_React$Component) {
  _inherits(Title, _React$Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this));
  }

  _createClass(Title, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        'fontSize': '30px',
        'paddingBottom': '4px',
        'color': '#909090',
        'borderBottom': 'solid 2px #E5E5E5',
        'marginBottom': '10px'
      };
    }
  }, {
    key: 'getLinkStyles',
    value: function getLinkStyles() {
      return {
        'color': 'inherit',
        'textDecoration': 'none',
        ':visited': {
          color: '#909090',
          textDecoration: 'none'
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: this.getStyles(), __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
          { style: this.getLinkStyles(), to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          },
          this.props.text
        )
      );
    }
  }]);

  return Title;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_radium___default()(Title));

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_posts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Partials\\AdminHeader.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AdminHeader = function (_React$Component) {
  _inherits(AdminHeader, _React$Component);

  function AdminHeader() {
    _classCallCheck(this, AdminHeader);

    return _possibleConstructorReturn(this, (AdminHeader.__proto__ || Object.getPrototypeOf(AdminHeader)).call(this));
  }

  _createClass(AdminHeader, [{
    key: 'getStyles',
    value: function getStyles() {
      return {};
    }
  }, {
    key: 'logout',
    value: function logout(e) {
      if (this.props.logout) {
        this.props.logout(e);
      }
    }
  }, {
    key: 'deletePost',
    value: function deletePost(e, id) {
      if (this.props.onPostDelete) {
        this.props.onPostDelete(id);
      }
    }
  }, {
    key: 'renderMyPosts',
    value: function renderMyPosts() {
      var _this2 = this;

      if (!this.props.posts) {
        return [];
      }
      return this.props.posts.map(function (i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: i.id, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
            { to: '/posts/edit/' + i.slug, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: _this2
            },
            i.title
          ),
          '\xA0-\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                return _this2.deletePost(e, i.id);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: _this2
            },
            'Delete'
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: this.getStyles(), __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        },
        'Hi ',
        this.props.user.name,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { onClick: function onClick(e) {
                return _this3.logout(e);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            },
            'Logout'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: 0, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
              { to: '/posts/write', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              },
              'New post'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: -1, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
              { to: '/admin/images', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                },
                __self: this
              },
              'Images'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { key: -2, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
              { to: '/admin/images/new', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                },
                __self: this
              },
              'New Image'
            )
          ),
          this.renderMyPosts()
        )
      );
    }
  }]);

  return AdminHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_radium___default()(AdminHeader));

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LayoutStyle = function () {
  function LayoutStyle() {
    _classCallCheck(this, LayoutStyle);

    this.nums = {
      base: {
        w: 600
      }
    };

    this.styles = {
      base: {
        width: this.nums.base.w + 'px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '100%'
        /*
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        */
      }
    };
  }

  _createClass(LayoutStyle, [{
    key: 'layoutStyles',
    value: function layoutStyles() {
      return this.styles.base;
    }
  }]);

  return LayoutStyle;
}();

/* harmony default export */ __webpack_exports__["a"] = (LayoutStyle);
;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = 'C:\\go-projects\\src\\blog3.0\\src\\js\\components\\Test.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test() {
    _classCallCheck(this, Test);

    return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          },
          __self: this
        },
        'Test lalal'
      );
    }
  }]);

  return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Test);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map