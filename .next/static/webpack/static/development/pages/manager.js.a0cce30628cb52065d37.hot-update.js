webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/crud/main/index.js":
false,

/***/ "./components/crud/main/index1.js":
/*!****************************************!*\
  !*** ./components/crud/main/index1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.css */ "./components/crud/main/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _features_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../features/modal */ "./components/crud/features/modal/index.js");







var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\crud\\main\\index1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import API from 'api';



var URL = 'http://react.techuno.net/class/crud';
var CREATE_URL = 'http://react.techuno.net/class/crud/create-student';
var DELETE_URL = 'http://react.techuno.net/class/crud/delete-student/'; // const URL = 'https://jsonplaceholder.typicode.com/students'

var StudentPortal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StudentPortal, _React$Component);

  var _super = _createSuper(StudentPortal);

  function StudentPortal() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StudentPortal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      student: [],
      formItem: {
        name: "",
        image: "",
        dept: ""
      },
      isModalOpen: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "createStudent", function (e) {
      e.preventDefault();
      var _this$state$formItem = _this.state.formItem,
          name = _this$state$formItem.name,
          dept = _this$state$formItem.dept,
          image = _this$state$formItem.image;
      console.log(name, dept, image);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(CREATE_URL, {
        name: 'Fred'
      }).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleDelete", function (id) {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("".concat(DELETE_URL).concat(id)).then(function (res) {
        if (res.status == 200) {
          var student = _this.state.student.filter(function (student) {
            return student.id != id;
          });

          _this.setState({
            student: student
          });
        }

        console.log(res.data);
      })["catch"](function (e) {
        return console.log(e);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeHandler", function (e) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "modalHandler", function () {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "modalCloseHandler", function () {
      _this.setState({
        isModalOpen: !_this.state.isModalOpen
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StudentPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(URL).then(function (res) {
        return _this2.setState({
          student: res.data
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
        //     <h3>Online students</h3>
        //     <ul>
        //         {this.state.student.map(({title,id}) => <li key={id}>{title}</li>)}
        //     </ul>
        // </div>
        __jsx("div", {
          className: "main_portal",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "col-lg-12 viw",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }
        }, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }
        }, __jsx("button", {
          className: "btn btn-sm btn-info",
          onClick: this.modalHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }
        }, "Add Student")), __jsx(_features_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
          isOpen: this.state.isModalOpen,
          close: this.modalCloseHandler,
          handleSubmit: this.createStudent,
          changeHandler: this.changeHandler,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "container grid_view",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }
        }, __jsx("h3", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 29
          }
        }, "Grid View"), __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 29
          }
        }, this.state.student.map(function (_ref, indx) {
          var id = _ref.id,
              name = _ref.name,
              dept = _ref.dept,
              image = _ref.image;
          return __jsx("div", {
            className: "col-sm-4",
            key: id,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 33
            }
          }, __jsx("div", {
            className: "item list-group-item-".concat(indx % 2 === 0 ? "info" : "success"),
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 37
            }
          }, __jsx("img", {
            className: "profile_img",
            src: image,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 41
            }
          }), __jsx("h6", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 41
            }
          }, id), __jsx("h5", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 41
            }
          }, name), __jsx("p", {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 41
            }
          }, dept), __jsx("button", {
            className: "btn btn-sm btn-success mr-2",
            onClick: _this3.createStudent,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 41
            }
          }, "create"), __jsx("button", {
            className: "btn btn-sm btn-success mr-2",
            onClick: _this3.modalHandler,
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
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
              lineNumber: 124,
              columnNumber: 41
            }
          }, "delete")));
        }))))))
      );
    }
  }]);

  return StudentPortal;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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
/* harmony import */ var _components_crud_main_index1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/crud/main/index1 */ "./components/crud/main/index1.js");
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
  }, __jsx(_components_crud_main_index1__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleDEuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJVUkwiLCJDUkVBVEVfVVJMIiwiREVMRVRFX1VSTCIsIlN0dWRlbnRQb3J0YWwiLCJzdHVkZW50IiwiZm9ybUl0ZW0iLCJuYW1lIiwiaW1hZ2UiLCJkZXB0IiwiaXNNb2RhbE9wZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJBeGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImlkIiwicmVzIiwic3RhdHVzIiwiZmlsdGVyIiwic2V0U3RhdGUiLCJkYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJnZXQiLCJtb2RhbEhhbmRsZXIiLCJtb2RhbENsb3NlSGFuZGxlciIsImNyZWF0ZVN0dWRlbnQiLCJjaGFuZ2VIYW5kbGVyIiwibWFwIiwiaW5keCIsImhhbmRsZURlbGV0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUVBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLHFDQUFaO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLG9EQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxxREFBbkIsQyxDQUNBOztJQUdNQyxhOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGFBQU8sRUFBRSxFQURMO0FBRUpDLGNBQVEsRUFBRTtBQUNOQyxZQUFJLEVBQUUsRUFEQTtBQUVOQyxhQUFLLEVBQUUsRUFGRDtBQUdOQyxZQUFJLEVBQUU7QUFIQSxPQUZOO0FBT0pDLGlCQUFXLEVBQUU7QUFQVCxLOzt3TkFvQlEsVUFBQUMsQ0FBQyxFQUFJO0FBQ2pCQSxPQUFDLENBQUNDLGNBQUY7QUFEaUIsaUNBRVMsTUFBS0MsS0FBTCxDQUFXUCxR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QUFBQSxhQUFLZCxJQUFMLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUlFLElBQUosQ0FKSixFQUtJO0FBQVMscUJBQVMsRUFBQyw2QkFBbkI7QUFBaUQsbUJBQU8sRUFBRSxNQUFJLENBQUN1QixhQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKLEVBTUk7QUFBUyxxQkFBUyxFQUFDLDZCQUFuQjtBQUFpRCxtQkFBTyxFQUFFLE1BQUksQ0FBQ0YsWUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixFQU9JO0FBQVMscUJBQVMsRUFBQyx1QkFBbkI7QUFBMkMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ00sWUFBTCxDQUFrQmYsRUFBbEIsQ0FBTjtBQUFBLGFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosQ0FESixDQUR3QjtBQUFBLFNBQXZCLENBRkwsQ0FGSixDQWxCSixDQURKLENBRko7QUFSSjtBQThESDs7OztFQWxJdUJnQiw0Q0FBSyxDQUFDQyxTOztBQXFJbkJsQyw0RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0NBRUE7O0FBQ0E7O0FBRUEsSUFBTW1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEIsU0FDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0gsQ0FORDs7S0FBTUEsTztBQVFTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFuYWdlci5qcy5hMGNjZTMwNjI4Y2I1MjA2NWQzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xyXG4vLyBpbXBvcnQgQVBJIGZyb20gJ2FwaSc7XHJcbmltcG9ydCAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBNZGwgZnJvbSAnLi4vZmVhdHVyZXMvbW9kYWwnXHJcblxyXG5jb25zdCBVUkwgPSAnaHR0cDovL3JlYWN0LnRlY2h1bm8ubmV0L2NsYXNzL2NydWQnXHJcbmNvbnN0IENSRUFURV9VUkwgPSAnaHR0cDovL3JlYWN0LnRlY2h1bm8ubmV0L2NsYXNzL2NydWQvY3JlYXRlLXN0dWRlbnQnXHJcbmNvbnN0IERFTEVURV9VUkwgPSAnaHR0cDovL3JlYWN0LnRlY2h1bm8ubmV0L2NsYXNzL2NydWQvZGVsZXRlLXN0dWRlbnQvJ1xyXG4vLyBjb25zdCBVUkwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3N0dWRlbnRzJ1xyXG5cclxuXHJcbmNsYXNzIFN0dWRlbnRQb3J0YWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN0dWRlbnQ6IFtdLFxyXG4gICAgICAgIGZvcm1JdGVtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBkZXB0OiBcIlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc01vZGFsT3BlbjogZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIEF4aW9zLmdldChVUkwpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7c3R1ZGVudDogcmVzLmRhdGF9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVN0dWRlbnQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge25hbWUsZGVwdCxpbWFnZX0gPSB0aGlzLnN0YXRlLmZvcm1JdGVtO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsZGVwdCxpbWFnZSlcclxuXHJcbiAgICAgICAgQXhpb3MucG9zdChDUkVBVEVfVVJMLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ZyZWQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpOyBcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGUgPSBpZCA9PiB7XHJcblxyXG4gICAgICAgIEF4aW9zLmRlbGV0ZShgJHtERUxFVEVfVVJMfSR7aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50ID0gdGhpcy5zdGF0ZS5zdHVkZW50LmZpbHRlcihzdHVkZW50ID0+IHN0dWRlbnQuaWQgIT0gaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0dWRlbnR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VIYW5kbGVyID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXSA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb2RhbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVufSlcclxuICAgIH1cclxuICAgIG1vZGFsQ2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0pIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgPGgzPk9ubGluZSBzdHVkZW50czwvaDM+XHJcbiAgICAgICAgICAgIC8vICAgICA8dWw+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAge3RoaXMuc3RhdGUuc3R1ZGVudC5tYXAoKHt0aXRsZSxpZH0pID0+IDxsaSBrZXk9e2lkfT57dGl0bGV9PC9saT4pfVxyXG4gICAgICAgICAgICAvLyAgICAgPC91bD5cclxuICAgICAgICAgICAgLy8gPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fcG9ydGFsXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdml3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWluZm9cIiBvbkNsaWNrPXt0aGlzLm1vZGFsSGFuZGxlcn0+QWRkIFN0dWRlbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVmlld0NoYW5nZShcIjFcIil9IGNsYXNzTmFtZT17YGJ0biBidG4tJHt2aWV3U3RhdHVzID09PSBcIjFcIiA/IFwic3VjY2Vzc1wiIDogXCJpbmZvXCJ9IG1yLTJgfT5MaXN0IFZpZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3Q2hhbmdlKFwiMlwiKX0gY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3ZpZXdTdGF0dXMgPT09IFwiMlwiID8gXCJzdWNjZXNzXCIgOiBcImluZm9cIn0gbXItMmB9PkdyaWQgVmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXdDaGFuZ2UoXCIzXCIpfSBjbGFzc05hbWU9e2BidG4gYnRuLSR7dmlld1N0YXR1cyA9PT0gXCIzXCIgPyBcInN1Y2Nlc3NcIiA6IFwiaW5mb1wifSBtci0yYH0+VGFibGUgVmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNNb2RhbE9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZT17dGhpcy5tb2RhbENsb3NlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5jcmVhdGVTdHVkZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlSGFuZGxlcj17dGhpcy5jaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkX3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HcmlkIFZpZXc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3R1ZGVudC5tYXAoKHtpZCxuYW1lLGRlcHQsaW1hZ2V9LGluZHgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNFwiIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGl0ZW0gbGlzdC1ncm91cC1pdGVtLSR7aW5keCUyPT09MD9cImluZm9cIjpcInN1Y2Nlc3NcIn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZV9pbWdcIiBzcmM9e2ltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2lkfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3MgbXItMlwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlU3R1ZGVudH0+Y3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIG1yLTJcIiBvbkNsaWNrPXt0aGlzLm1vZGFsSGFuZGxlcn0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGUoaWQpfT5kZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UG9ydGFsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkL0xheW91dCc7XHJcbi8vaW1wb3J0IFRhc2tNIGZyb20gJy4uL2NvbXBvbmVudHMvVGFza00vVGFza00nO1xyXG5pbXBvcnQgU3R1ZGVudFBvcnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleDEnXHJcblxyXG5jb25zdCBNYW5hZ2VyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8U3R1ZGVudFBvcnRhbD48L1N0dWRlbnRQb3J0YWw+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXIiXSwic291cmNlUm9vdCI6IiJ9