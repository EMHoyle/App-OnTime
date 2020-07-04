webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/crud/main/index.js":
/*!***************************************!*\
  !*** ./components/crud/main/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.css */ "./components/crud/main/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _features_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../features/modal */ "./components/crud/features/modal/index.js");








var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\crud\\main\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import API from 'api';



var URL = 'https://jsonplaceholder.typicode.com/';

var StudentPortal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StudentPortal, _React$Component);

  var _super = _createSuper(StudentPortal);

  function StudentPortal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StudentPortal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      post: [],
      title: "",
      body: "",
      isModalOpen: false,
      editable: false,
      editablePost: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "createPost", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          title = _this$state.title,
          body = _this$state.body,
          post = _this$state.post;

      if (_this.state.editable) {
        var _post = _this.state.post;

        var postt = _post.find(function (post) {
          return post.id === _this.state.editablePost;
        });

        postt.title = title;
        postt.body = body;

        _this.setState({
          postt: postt,
          title: "",
          body: "",
          editable: false,
          editablePost: null,
          isModalOpen: false
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(URL + "posts", {
          title: title,
          body: body
        }).then(function (res) {
          if (res.status == 201) {
            console.log(res);
            var posts = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post), [{
              userId: post[post.length - 1].id + 1,
              id: post[post.length - 1].id + 1,
              title: title,
              body: body
            }]);

            _this.setState({
              post: posts,
              title: "",
              body: "",
              isModalOpen: false
            });
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "editHandler", function () {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen
      }); // const {students} = this.state;
      // const student = students.find(student => student.id === id);
      // student.name = name;
      // student.dept = dept;
      // this.setState({students}); 

    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDelete", function (id) {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a["delete"](URL + "posts/" + id).then(function (res) {
        if (res.status == 200) {
          var post = _this.state.post.filter(function (post) {
            return post.id != id;
          });

          _this.setState({
            post: post
          });
        }

        console.log(res);
      })["catch"](function (e) {
        return console.log(e);
      }); // Axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
      //     method: 'DELETE'
      // }).then(res => console.log(res))
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "changeHandler", function (e) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "modalHandler", function (isSubmitable, id) {
      // if isSubmitable == 1 then Submitable
      // if isSubmitable == 2 then Editable
      if (isSubmitable == 2) {
        var post = _this.state.post;
        var postt = post.find(function (post) {
          return post.id === id;
        });

        _this.setState({
          isModalOpen: !_this.state.isModalOpen,
          editable: true,
          editablePost: id,
          title: postt.title,
          body: postt.body
        });
      } else {
        _this.setState({
          isModalOpen: !_this.state.isModalOpen,
          editable: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "modalCloseHandler", function () {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen,
        editable: false,
        editablePost: null,
        title: "",
        body: ""
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StudentPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(URL + "posts").then(function (res) {
        return _this2.setState({
          post: res.data
        });
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      console.log(this.state);
      return (// <div>
        //     <h3>Online posts</h3>
        //     <ul>
        //         {this.state.student.map(({title,id}) => <li key={id}>{title}</li>)}
        //     </ul>
        // </div>
        __jsx("div", {
          className: "main_portal",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "col-lg-12 viw",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }
        }, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: "btn btn-sm btn-info",
          onClick: function onClick() {
            return _this3.modalHandler(1);
          },
          style: {
            position: "fixed"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }
        }, "Add Post")), __jsx(_features_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          isOpen: this.state.isModalOpen,
          close: this.modalCloseHandler,
          handleSubmit: this.createPost,
          changeHandler: this.changeHandler,
          title: this.state.title,
          body: this.state.body,
          editable: this.state.editable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "container grid_view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 25
          }
        }, __jsx("h3", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 29
          }
        }, "Grid View"), __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 29
          }
        }, this.state.post.map(function (_ref, indx) {
          var id = _ref.id,
              title = _ref.title,
              body = _ref.body;
          return __jsx("div", {
            className: "col-sm-4",
            key: id,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 33
            }
          }, __jsx("div", {
            className: "item list-group-item-".concat(indx % 2 === 0 ? "info" : "success"),
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 37
            }
          }, __jsx("h6", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 41
            }
          }, id), __jsx("h5", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 41
            }
          }, title), __jsx("p", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 41
            }
          }, body), __jsx("button", {
            className: "btn btn-sm btn-success mr-2",
            onClick: function onClick() {
              return _this3.modalHandler(2, id);
            },
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 41
            }
          }, "Edit"), __jsx("button", {
            className: "btn btn-sm btn-danger",
            onClick: function onClick() {
              return _this3.handleDelete(id);
            },
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 41
            }
          }, "delete")));
        }))))))
      );
    }
  }]);

  return StudentPortal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StudentPortal);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/crud/main/index1.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/manager.js":
/*!**************************!*\
  !*** ./pages/manager.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Head_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Head/Layout */ "./components/Head/Layout.js");
/* harmony import */ var _components_crud_main_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/crud/main/index */ "./components/crud/main/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\pages\\manager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import TaskM from '../components/TaskM/TaskM';



var Manager = function Manager() {
  return __jsx(_components_Head_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_crud_main_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }));
};

_c = Manager;
/* harmony default export */ __webpack_exports__["default"] = (Manager);

var _c;

$RefreshReg$(_c, "Manager");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlVSTCIsIlN0dWRlbnRQb3J0YWwiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiaXNNb2RhbE9wZW4iLCJlZGl0YWJsZSIsImVkaXRhYmxlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwicG9zdHQiLCJmaW5kIiwiaWQiLCJzZXRTdGF0ZSIsIkF4aW9zIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInVzZXJJZCIsImxlbmd0aCIsImVycm9yIiwiZmlsdGVyIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaXNTdWJtaXRhYmxlIiwiZ2V0IiwiZGF0YSIsIm1vZGFsSGFuZGxlciIsInBvc2l0aW9uIiwibW9kYWxDbG9zZUhhbmRsZXIiLCJjcmVhdGVQb3N0IiwiY2hhbmdlSGFuZGxlciIsIm1hcCIsImluZHgiLCJoYW5kbGVEZWxldGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUVBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLHVDQUFaOztJQUdNQyxhOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLFVBQUksRUFBRSxFQURGO0FBRUpDLFdBQUssRUFBRSxFQUZIO0FBR0pDLFVBQUksRUFBRSxFQUhGO0FBSUpDLGlCQUFXLEVBQUUsS0FKVDtBQUtKQyxjQUFRLEVBQUUsS0FMTjtBQU1KQyxrQkFBWSxFQUFFO0FBTlYsSzs7cU5BbUJLLFVBQUFDLENBQUMsRUFBSTtBQUNkQSxPQUFDLENBQUNDLGNBQUY7QUFEYyx3QkFFWSxNQUFLQyxLQUZqQjtBQUFBLFVBRVBQLEtBRk8sZUFFUEEsS0FGTztBQUFBLFVBRURDLElBRkMsZUFFREEsSUFGQztBQUFBLFVBRUlGLElBRkosZUFFSUEsSUFGSjs7QUFJZCxVQUFHLE1BQUtRLEtBQUwsQ0FBV0osUUFBZCxFQUF1QjtBQUFBLFlBRVpKLEtBRlksR0FFSixNQUFLUSxLQUZELENBRVpSLElBRlk7O0FBR25CLFlBQU1TLEtBQUssR0FBR1QsS0FBSSxDQUFDVSxJQUFMLENBQVUsVUFBQVYsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNXLEVBQUwsS0FBWSxNQUFLSCxLQUFMLENBQVdILFlBQTNCO0FBQUEsU0FBZCxDQUFkOztBQUNBSSxhQUFLLENBQUNSLEtBQU4sR0FBY0EsS0FBZDtBQUNBUSxhQUFLLENBQUNQLElBQU4sR0FBYUEsSUFBYjs7QUFDQSxjQUFLVSxRQUFMLENBQWM7QUFBQ0gsZUFBSyxFQUFMQSxLQUFEO0FBQU9SLGVBQUssRUFBQyxFQUFiO0FBQWdCQyxjQUFJLEVBQUMsRUFBckI7QUFBd0JFLGtCQUFRLEVBQUMsS0FBakM7QUFBdUNDLHNC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Q1JBO0FBQUE7QUFBQTtBQUFrRDtBQUNuQztBQUNmLGlDQUFpQyxpRUFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3JDO0FBQ2YsU0FBUyxrRUFBaUIsU0FBUyxnRUFBZSxTQUFTLDJFQUEwQixTQUFTLGtFQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBa0Q7QUFDbkM7QUFDZjtBQUNBLG9DQUFvQyxpRUFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLGlFQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtDQUVBOztBQUNBOztBQUVBLElBQU15QyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLFNBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQUtILENBTkQ7O0tBQU1BLE87QUFRU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hbmFnZXIuanMuODAwMmM1NDM3ZGU4YzFlZjg5ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcclxuLy8gaW1wb3J0IEFQSSBmcm9tICdhcGknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgTWRsIGZyb20gJy4uL2ZlYXR1cmVzL21vZGFsJ1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS8nXHJcblxyXG5cclxuY2xhc3MgU3R1ZGVudFBvcnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcG9zdDogW10sXHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgYm9keTogXCJcIixcclxuICAgICAgICBpc01vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlUG9zdDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQXhpb3MuZ2V0KFVSTCtcInBvc3RzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7cG9zdDogcmVzLmRhdGF9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBvc3QgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLGJvZHkscG9zdH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmVkaXRhYmxlKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtwb3N0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3R0ID0gcG9zdC5maW5kKHBvc3QgPT4gcG9zdC5pZCA9PT0gdGhpcy5zdGF0ZS5lZGl0YWJsZVBvc3QpO1xyXG4gICAgICAgICAgICBwb3N0dC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICBwb3N0dC5ib2R5ID0gYm9keTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdHQsdGl0bGU6XCJcIixib2R5OlwiXCIsZWRpdGFibGU6ZmFsc2UsZWRpdGFibGVQb3N0Om51bGwsaXNNb2RhbE9wZW46ZmFsc2V9KTsgXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQXhpb3MucG9zdChVUkwrXCJwb3N0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gWy4uLnBvc3QsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcG9zdFtwb3N0Lmxlbmd0aCAtIDFdLmlkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb3N0W3Bvc3QubGVuZ3RoIC0gMV0uaWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdDogcG9zdHMsIHRpdGxlOlwiXCIsYm9keTpcIlwiLGlzTW9kYWxPcGVuOmZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0pXHJcblxyXG5cclxuICAgICAgICAvLyBjb25zdCB7c3R1ZGVudHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAvLyBjb25zdCBzdHVkZW50ID0gc3R1ZGVudHMuZmluZChzdHVkZW50ID0+IHN0dWRlbnQuaWQgPT09IGlkKTtcclxuICAgICAgICAvLyBzdHVkZW50Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIC8vIHN0dWRlbnQuZGVwdCA9IGRlcHQ7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7c3R1ZGVudHN9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG5cclxuICAgICAgICBBeGlvcy5kZWxldGUoVVJMK1wicG9zdHMvXCIraWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMuc3RhdGUucG9zdC5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9IGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3N0fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgICAgIC8vIEF4aW9zLmRlbGV0ZSgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzEnLCB7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsSGFuZGxlciA9IChpc1N1Ym1pdGFibGUsaWQpID0+IHtcclxuICAgICAgICAvLyBpZiBpc1N1Ym1pdGFibGUgPT0gMSB0aGVuIFN1Ym1pdGFibGVcclxuICAgICAgICAvLyBpZiBpc1N1Ym1pdGFibGUgPT0gMiB0aGVuIEVkaXRhYmxlXHJcbiAgICAgICAgaWYoaXNTdWJtaXRhYmxlID09IDIpe1xyXG4gICAgICAgICAgICBjb25zdCB7cG9zdH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0dCA9IHBvc3QuZmluZChwb3N0ID0+IHBvc3QuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuLGVkaXRhYmxlOnRydWUsZWRpdGFibGVQb3N0OmlkLHRpdGxlOnBvc3R0LnRpdGxlLGJvZHk6cG9zdHQuYm9keX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3BlbixlZGl0YWJsZTpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW9kYWxDbG9zZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuLGVkaXRhYmxlOmZhbHNlLGVkaXRhYmxlUG9zdDpudWxsLHRpdGxlOlwiXCIsYm9keTpcIlwifSkgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgICAgIC8vICAgICA8aDM+T25saW5lIHBvc3RzPC9oMz5cclxuICAgICAgICAgICAgLy8gICAgIDx1bD5cclxuICAgICAgICAgICAgLy8gICAgICAgICB7dGhpcy5zdGF0ZS5zdHVkZW50Lm1hcCgoe3RpdGxlLGlkfSkgPT4gPGxpIGtleT17aWR9Pnt0aXRsZX08L2xpPil9XHJcbiAgICAgICAgICAgIC8vICAgICA8L3VsPlxyXG4gICAgICAgICAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3J0YWxcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB2aXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMubW9kYWxIYW5kbGVyKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCJ9fT5BZGQgUG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3Q2hhbmdlKFwiMVwiKX0gY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3ZpZXdTdGF0dXMgPT09IFwiMVwiID8gXCJzdWNjZXNzXCIgOiBcImluZm9cIn0gbXItMmB9Pkxpc3QgVmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXdDaGFuZ2UoXCIyXCIpfSBjbGFzc05hbWU9e2BidG4gYnRuLSR7dmlld1N0YXR1cyA9PT0gXCIyXCIgPyBcInN1Y2Nlc3NcIiA6IFwiaW5mb1wifSBtci0yYH0+R3JpZCBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVmlld0NoYW5nZShcIjNcIil9IGNsYXNzTmFtZT17YGJ0biBidG4tJHt2aWV3U3RhdHVzID09PSBcIjNcIiA/IFwic3VjY2Vzc1wiIDogXCJpbmZvXCJ9IG1yLTJgfT5UYWJsZSBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc01vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlPXt0aGlzLm1vZGFsQ2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXt0aGlzLmNyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXt0aGlzLmNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RoaXMuc3RhdGUuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0aGlzLnN0YXRlLmVkaXRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkX3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HcmlkIFZpZXc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdC5tYXAoKHtpZCx0aXRsZSxib2R5fSxpbmR4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpdGVtIGxpc3QtZ3JvdXAtaXRlbS0ke2luZHglMj09PTA/XCJpbmZvXCI6XCJzdWNjZXNzXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2lkfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIG1yLTJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vZGFsSGFuZGxlcigyLGlkKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGUoaWQpfT5kZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UG9ydGFsOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0hlYWQvTGF5b3V0JztcclxuLy9pbXBvcnQgVGFza00gZnJvbSAnLi4vY29tcG9uZW50cy9UYXNrTS9UYXNrTSc7XHJcbmltcG9ydCBTdHVkZW50UG9ydGFsIGZyb20gJy4uL2NvbXBvbmVudHMvY3J1ZC9tYWluL2luZGV4J1xyXG5cclxuY29uc3QgTWFuYWdlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFN0dWRlbnRQb3J0YWw+PC9TdHVkZW50UG9ydGFsPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==