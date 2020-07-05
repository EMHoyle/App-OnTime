webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/Toggle/Toggle.js":
/*!*************************************!*\
  !*** ./components/Toggle/Toggle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TodoList; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TaskM_TaskM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TaskM/TaskM */ "./components/TaskM/TaskM.js");








var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\Toggle\\Toggle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

var TodoList = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoList, _React$Component);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TodoList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      todos: [],
      todoToShow: "all",
      toggleAllComplete: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "addTodo", function (todo) {
      _this.setState(function (state) {
        return {
          todos: [todo].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.todos))
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "toggleComplete", function (id) {
      _this.setState(function (state) {
        return {
          todos: state.todos.map(function (todo) {
            if (todo.id === id) {
              // suppose to update
              return _objectSpread(_objectSpread({}, todo), {}, {
                complete: !todo.complete
              });
            } else {
              return todo;
            }
          })
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateTodoToShow", function (s) {
      _this.setState({
        todoToShow: s
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleDeleteTodo", function (id) {
      _this.setState(function (state) {
        return {
          todos: state.todos.filter(function (todo) {
            return todo.id !== id;
          })
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "removeAllTodosThatAreComplete", function () {
      _this.setState(function (state) {
        return {
          todos: state.todos.filter(function (todo) {
            return !todo.complete;
          })
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var todos = [];

      if (this.state.todoToShow === "all") {
        todos = this.state.todos;
      } else if (this.state.todoToShow === "active") {
        todos = this.state.todos.filter(function (todo) {
          return !todo.complete;
        });
      } else if (this.state.todoToShow === "complete") {
        todos = this.state.todos.filter(function (todo) {
          return todo.complete;
        });
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 7
        }
      }, todos.map(function (todo) {
        return __jsx(_TaskM_TaskM__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: todo.id,
          toggleComplete: function toggleComplete() {
            return _this2.toggleComplete(todo.id);
          },
          onDelete: function onDelete() {
            return _this2.handleDeleteTodo(todo.id);
          },
          todo: todo,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }
        });
      }), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, "todos left: ", this.state.todos.filter(function (todo) {
        return !todo.complete;
      }).length), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, __jsx("button", {
        onClick: function onClick() {
          return _this2.updateTodoToShow("all");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, "all"), __jsx("button", {
        onClick: function onClick() {
          return _this2.updateTodoToShow("active");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, "active"), __jsx("button", {
        onClick: function onClick() {
          return _this2.updateTodoToShow("complete");
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, "complete")), this.state.todos.some(function (todo) {
        return todo.complete;
      }) ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx("button", {
        onClick: this.removeAllTodosThatAreComplete,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, "remove all complete todos")) : null, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }
      }, __jsx("button", {
        onClick: function onClick() {
          return _this2.setState(function (state) {
            return {
              todos: state.todos.map(function (todo) {
                return _objectSpread(_objectSpread({}, todo), {}, {
                  complete: state.toggleAllComplete
                });
              }),
              toggleAllComplete: !state.toggleAllComplete
            };
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, "toggle all complete: ", "".concat(this.state.toggleAllComplete))));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var _components_TaskM_TaskM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TaskM/TaskM */ "./components/TaskM/TaskM.js");
/* harmony import */ var _components_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Toggle/Toggle */ "./components/Toggle/Toggle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\pages\\manager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import StudentPortal from '../components/crud/main/index';

var Manager = function Manager() {
  return __jsx(_components_Head_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_components_TaskM_TaskM__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZ2dsZS9Ub2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdCIsInRvZG9zIiwidG9kb1RvU2hvdyIsInRvZ2dsZUFsbENvbXBsZXRlIiwidG9kbyIsInNldFN0YXRlIiwic3RhdGUiLCJpZCIsIm1hcCIsImNvbXBsZXRlIiwicyIsImZpbHRlciIsInRvZ2dsZUNvbXBsZXRlIiwiaGFuZGxlRGVsZXRlVG9kbyIsImxlbmd0aCIsInVwZGF0ZVRvZG9Ub1Nob3ciLCJzb21lIiwicmVtb3ZlQWxsVG9kb3NUaGF0QXJlQ29tcGxldGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztJQWNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDWDtBQUNOQyxXQUFLLEVBQUUsRUFERDtBQUVOQyxnQkFBVSxFQUFFLEtBRk47QUFHTkMsdUJBQWlCLEVBQUU7QUFIYixLOztrTkFNRSxVQUFBQyxJQUFJLEVBQUk7QUFDaEIsWUFBS0MsUUFBTCxDQUFjLFVBQUFDLEtBQUs7QUFBQSxlQUFLO0FBQ3RCTCxlQUFLLEdBQUdHLElBQUgsc0dBQVlFLEtBQUssQ0FBQ0wsS0FBbEI7QUFEaUIsU0FBTDtBQUFBLE9BQW5CO0FBR0QsSzs7eU5BRWdCLFVBQUFNLEVBQUUsRUFBSTtBQUNyQixZQUFLRixRQUFMLENBQWMsVUFBQUMsS0FBSztBQUFBLGVBQUs7QUFDdEJMLGVBQUssRUFBRUssS0FBSyxDQUFDTCxLQUFOLENBQVlPLEdBQVosQ0FBZ0IsVUFBQUosSUFBSSxFQUFJO0FBQzdCLGdCQUFJQSxJQUFJLENBQUNHLEVBQUwsS0FBWUEsRUFBaEIsRUFBb0I7QUFDbEI7QUFDQSxxREFDS0gsSUFETDtBQUVFSyx3QkFBUSxFQUFFLENB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNUM7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixTQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFSLENBREosQ0FESjtBQU1ILENBUEQ7O0tBQU1BLE87QUFTU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hbmFnZXIuanMuZmMwNTJhYTc3MmFmM2YxZmU0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhc2tNIGZyb20gJy4uL1Rhc2tNL1Rhc2tNJztcclxuXHJcbi8qXHJcbiAgVG9kb01WQ1xyXG4gIDEuIGFkZCB0b2RvXHJcbiAgMi4gZGlzcGxheSB0b2Rvc1xyXG4gIDMuIGNyb3NzIG9mZiB0b2RvXHJcbiAgNC4gc2hvdyBudW1iZXIgb2YgYWN0aXZlIHRvZG9zXHJcbiAgNS4gZmlsdGVyIGFsbC9hY3RpdmUvY29tcGxldGVcclxuICA2LiBkZWxldGUgdG9kb1xyXG4gIDcuIGRlbGV0ZSBhbGwgY29tcGxldGVcclxuICAgIDcuMSBvbmx5IHNob3cgaWYgYXRsZWFzdCBvbmUgaXMgY29tcGxldGVcclxuICA4LiBidXR0b24gdG8gdG9nZ2xlIGFsbCBvbi9vZmZcclxuKi9cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICB0b2RvczogW10sXHJcbiAgICB0b2RvVG9TaG93OiBcImFsbFwiLFxyXG4gICAgdG9nZ2xlQWxsQ29tcGxldGU6IHRydWVcclxuICB9O1xyXG5cclxuICBhZGRUb2RvID0gdG9kbyA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIHRvZG9zOiBbdG9kbywgLi4uc3RhdGUudG9kb3NdXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlQ29tcGxldGUgPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvcy5tYXAodG9kbyA9PiB7XHJcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAvLyBzdXBwb3NlIHRvIHVwZGF0ZVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4udG9kbyxcclxuICAgICAgICAgICAgY29tcGxldGU6ICF0b2RvLmNvbXBsZXRlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlVG9kb1RvU2hvdyA9IHMgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRvZG9Ub1Nob3c6IHNcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURlbGV0ZVRvZG8gPSBpZCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XHJcbiAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBpZClcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZW1vdmVBbGxUb2Rvc1RoYXRBcmVDb21wbGV0ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgdG9kb3M6IHN0YXRlLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlKVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB0b2RvcyA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLnRvZG9Ub1Nob3cgPT09IFwiYWxsXCIpIHtcclxuICAgICAgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRvZG9Ub1Nob3cgPT09IFwiYWN0aXZlXCIpIHtcclxuICAgICAgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b2RvVG9TaG93ID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgdG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcclxuICAgICAgICAgIDxUYXNrTVxyXG4gICAgICAgICAgICBrZXk9e3RvZG8uaWR9XHJcbiAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlPXsoKSA9PiB0aGlzLnRvZ2dsZUNvbXBsZXRlKHRvZG8uaWQpfVxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGVUb2RvKHRvZG8uaWQpfVxyXG4gICAgICAgICAgICB0b2RvPXt0b2RvfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgdG9kb3MgbGVmdDoge3RoaXMuc3RhdGUudG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGUpLmxlbmd0aH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVRvZG9Ub1Nob3coXCJhbGxcIil9PmFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVRvZG9Ub1Nob3coXCJhY3RpdmVcIil9PlxyXG4gICAgICAgICAgICBhY3RpdmVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZVRvZG9Ub1Nob3coXCJjb21wbGV0ZVwiKX0+XHJcbiAgICAgICAgICAgIGNvbXBsZXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50b2Rvcy5zb21lKHRvZG8gPT4gdG9kby5jb21wbGV0ZSkgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVtb3ZlQWxsVG9kb3NUaGF0QXJlQ29tcGxldGV9PlxyXG4gICAgICAgICAgICAgIHJlbW92ZSBhbGwgY29tcGxldGUgdG9kb3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvcy5tYXAodG9kbyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAuLi50b2RvLFxyXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZTogc3RhdGUudG9nZ2xlQWxsQ29tcGxldGVcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFsbENvbXBsZXRlOiAhc3RhdGUudG9nZ2xlQWxsQ29tcGxldGVcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB0b2dnbGUgYWxsIGNvbXBsZXRlOiB7YCR7dGhpcy5zdGF0ZS50b2dnbGVBbGxDb21wbGV0ZX1gfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZC9MYXlvdXQnO1xyXG5pbXBvcnQgVGFza00gZnJvbSAnLi4vY29tcG9uZW50cy9UYXNrTS9UYXNrTSc7XHJcbmltcG9ydCBUb2dnbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2dnbGUvVG9nZ2xlJ1xyXG4vL2ltcG9ydCBTdHVkZW50UG9ydGFsIGZyb20gJy4uL2NvbXBvbmVudHMvY3J1ZC9tYWluL2luZGV4JztcclxuXHJcblxyXG5jb25zdCBNYW5hZ2VyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8VG9nZ2xlPjxUYXNrTT48L1Rhc2tNPjwvVG9nZ2xlPlxyXG4gICAgICAgICAgICB7LyogPFN0dWRlbnRQb3J0YWw+PC9TdHVkZW50UG9ydGFsPiAqL31cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlciJdLCJzb3VyY2VSb290IjoiIn0=