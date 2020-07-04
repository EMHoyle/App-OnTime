webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/TaskM/TaskM.js":
/*!***********************************!*\
  !*** ./components/TaskM/TaskM.js ***!
  \***********************************/
/*! exports provided: TaskM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskM", function() { return TaskM; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\TaskM\\TaskM.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //constante JSON

var url = "https://jsonplaceholder.typicode.com/todos";
var TaskM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TaskM, _Component);

  var _super = _createSuper(TaskM);

  function TaskM(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TaskM);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "modalInsertar", function () {
      _this.setState({
        modalInsertar: !_this.state.modalInsertar
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.persist();
                _context.next = 3;
                return _this.setState({
                  form: _objectSpread(_objectSpread({}, _this.state.form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value))
                });

              case 3:
                console.log(_this.state.form);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "seleccionarTask", function (todo) {
      _this.setState({
        tipoModal: "actualizar",
        form: {
          id: todo.id,
          title: todo.title
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionGet", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
        _this.setState({
          todo: response.data
        });
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionPost", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, _this.state.form).then(function (response) {
                _this.modalInsertar();

                _this.peticionGet();

                console.log(response);
              })["catch"](function (error) {
                console.log(error.message);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionPut", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.put(url + _this.state.form.id, _this.state.form).then(function (response) {
        _this.modalInsertar();

        _this.peticionGet();

        console.log(response);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionDelete", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a["delete"](url + _this.state.form.id).then(function (response) {
        _this.setState({
          modalEliminar: false
        });

        _this.peticionGet();

        console.log(response);
      });
    });

    _this.state = {
      todo: [],
      modalInsertar: false,
      modalEliminar: false,
      tipoModal: "",
      form: {
        id: "",
        title: ""
      }
    };
    return _this;
  } //acciones


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskM, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.peticionGet();
    } //Task Manager

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.state.form;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          _this2.setState({
            form: null,
            tipoModal: "insertar"
          });

          _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, "Agregar Task"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 27
        }
      }), __jsx("table", {
        className: "table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 29
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 33
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 33
        }
      }, "TASK"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 33
        }
      }, "ACCIONES"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }
      }, this.state.todo.map(function (userID) {
        return __jsx("tr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 37
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 41
          }
        }, userID.id), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 41
          }
        }, userID.title), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 41
          }
        }, __jsx("button", {
          className: "btn btn-secondary",
          onClick: function onClick() {
            _this2.seleccionarTask(userID);

            _this2.modalInsertar();
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 45
          }
        }, "Editar"), "   ", __jsx("button", {
          className: "btn btn-danger",
          onClick: function onClick() {
            _this2.seleccionarTask(userID);

            _this2.setState({
              modalEliminar: true
            });
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 45
          }
        }, "Eliminar")));
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: this.state.modalInsertar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalHeader"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }, "Nueva Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "id",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 25
        }
      }, "ID"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "id",
        id: "id",
        readOnly: true,
        onChange: this.handleChange,
        value: this.state.todo.length + 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }
      }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "title",
        id: "title",
        onChange: this.handleChange,
        value: form.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }
      }, this.state.tipoModal == "insertar" ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPost();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 25
        }
      }, "Agregar") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPut();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 25
        }
      }, "Actualizar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 25
        }
      }, "Cancelar"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: this.state.modalEliminar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }
      }, "Est\xE1s seguro que deseas eliminar esta Task? ", form && form.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionDelete();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }, "Si"), __jsx("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.setState({
            modalEliminar: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 25
        }
      }, "NO"))));
    }
  }]);

  return TaskM;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (TaskM);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tNL1Rhc2tNLmpzIl0sIm5hbWVzIjpbInVybCIsIlRhc2tNIiwicHJvcHMiLCJzZXRTdGF0ZSIsIm1vZGFsSW5zZXJ0YXIiLCJzdGF0ZSIsImUiLCJwZXJzaXN0IiwiZm9ybSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2RvIiwidGlwb01vZGFsIiwiaWQiLCJ0aXRsZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInBvc3QiLCJwZXRpY2lvbkdldCIsInB1dCIsIm1vZGFsRWxpbWluYXIiLCJtYXAiLCJ1c2VySUQiLCJzZWxlY2Npb25hclRhc2siLCJoYW5kbGVDaGFuZ2UiLCJsZW5ndGgiLCJwZXRpY2lvblBvc3QiLCJwZXRpY2lvblB1dCIsInBldGljaW9uRGVsZXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsNENBQVo7QUFFTyxJQUFNQyxLQUFiO0FBQUE7O0FBQUE7O0FBRUksaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx3TkFnQkwsWUFBSTtBQUNkLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxxQkFBYSxFQUFFLENBQUMsTUFBS0MsS0FBTCxDQUFXRDtBQUE1QixPQUFkO0FBQ0gsS0FsQmtCOztBQUFBO0FBQUEsa01Bb0JMLGlCQUFNRSxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVkEsaUJBQUMsQ0FBQ0MsT0FBRjtBQURVO0FBQUEsdUJBRUosTUFBS0osUUFBTCxDQUFjO0FBQ2hCSyxzQkFBSSxrQ0FDRyxNQUFLSCxLQUFMLENBQVdHLElBRGQscUdBRUNGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxJ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O0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosRUFLSSxNQUFDLGtEQUFEO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDL0IsYUFBTCxFQUFKO0FBQUEsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSixDQTNCSixDQXBDSixFQXlFSSxNQUFDLGlEQUFEO0FBQU8sY0FBTSxFQUFFLEtBQUtDLEtBQUwsQ0FBV3VCLGFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBQ2lEcEIsSUFBSSxJQUFJQSxJQUFJLENBQUNTLEtBRDlELENBREosRUFJSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGVBQU8sRUFBRTtBQUFBLGlCQUFJLE1BQUksQ0FBQ21CLGNBQUwsRUFBSjtBQUFBLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDakMsUUFBTCxDQUFjO0FBQUN5Qix5QkFBYSxFQUFFO0FBQWhCLFdBQWQsQ0FBSjtBQUFBLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQUpKLENBekVKLENBREo7QUFxRkg7QUExS0w7O0FBQUE7QUFBQSxFQUEyQlMsK0NBQTNCO0FBNktlcEMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hbmFnZXIuanMuNGViNTc4YTUzZWU4OTQyMGNiN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbi8vY29uc3RhbnRlIEpTT05cclxuY29uc3QgdXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tNIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIHRvZG86IFtdLFxyXG4gICAgICAgICAgICBtb2RhbEluc2VydGFyOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kYWxFbGltaW5hcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpcG9Nb2RhbDogXCJcIixcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4vL2FjY2lvbmVzXHJcbiAgICBtb2RhbEluc2VydGFyPSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWxJbnNlcnRhcjogIXRoaXMuc3RhdGUubW9kYWxJbnNlcnRhcn0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZT0gYXN5bmMgZT0+e1xyXG4gICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjY2lvbmFyVGFzaz0odG9kbyk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGlwb01vZGFsOiBcImFjdHVhbGl6YXJcIixcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRvZG8uaWQsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdG9kby50aXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbi8vcGV0aWNpb25lc1xyXG4gICAgcGV0aWNpb25HZXQ9KCk9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RvOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgICBwZXRpY2lvblBvc3Q9IGFzeW5jICgpPT57XHJcbiAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QodXJsLCB0aGlzLnN0YXRlLmZvcm0pLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICB0aGlzLm1vZGFsSW5zZXJ0YXIoKTtcclxuICAgICAgICAgICB0aGlzLnBldGljaW9uR2V0KCk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICB9KVxyXG4gICAgIH1cclxuXHJcbiAgICAgcGV0aWNpb25QdXQ9KCk9PntcclxuICAgICAgICAgYXhpb3MucHV0KHVybCArIHRoaXMuc3RhdGUuZm9ybS5pZCwgdGhpcy5zdGF0ZS5mb3JtKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICB0aGlzLm1vZGFsSW5zZXJ0YXIoKTtcclxuICAgICAgICAgICAgIHRoaXMucGV0aWNpb25HZXQoKTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgfSlcclxuICAgICB9XHJcblxyXG4gICAgIHBldGljaW9uRGVsZXRlPSgpPT57XHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKHVybCArIHRoaXMuc3RhdGUuZm9ybS5pZCkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbEVsaW1pbmFyOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnBldGljaW9uR2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wZXRpY2lvbkdldCgpO1xyXG4gICAgfVxyXG5cclxuLy9UYXNrIE1hbmFnZXJcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Zm9ybX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtmb3JtOiBudWxsLCB0aXBvTW9kYWw6IFwiaW5zZXJ0YXJcIn0pOyB0aGlzLm1vZGFsSW5zZXJ0YXIoKX19PkFncmVnYXIgVGFzazwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VEFTSzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFDQ0lPTkVTPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZG8ubWFwKCh1c2VySUQsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VySUQuaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcklELnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZWxlY2Npb25hclRhc2sodXNlcklEKTsgdGhpcy5tb2RhbEluc2VydGFyKCl9fT5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2VsZWNjaW9uYXJUYXNrKHVzZXJJRCk7IHRoaXMuc2V0U3RhdGUoe21vZGFsRWxpbWluYXI6IHRydWV9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgQWdyZWdhci9FZGl0YXIgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsSW5zZXJ0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBUYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaWRcIj5JRDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9IFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b2RvLmxlbmd0aCsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGFzazwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS50aXRsZX0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXBvTW9kYWwgPT0gXCJpbnNlcnRhclwiP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUG9zdCgpfT5BZ3JlZ2FyPC9CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUHV0KCl9PkFjdHVhbGl6YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PnRoaXMubW9kYWxJbnNlcnRhcigpfT5DYW5jZWxhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBNb2RhbCBFbGltaW5hciAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxFbGltaW5hcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXN0w6FzIHNlZ3VybyBxdWUgZGVzZWFzIGVsaW1pbmFyIGVzdGEgVGFzaz8ge2Zvcm0gJiYgZm9ybS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17KCk9PnRoaXMucGV0aWNpb25EZWxldGUoKX0+U2k8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpPT50aGlzLnNldFN0YXRlKHttb2RhbEVsaW1pbmFyOiBmYWxzZX0pfT5OTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tNIl0sInNvdXJjZVJvb3QiOiIifQ==