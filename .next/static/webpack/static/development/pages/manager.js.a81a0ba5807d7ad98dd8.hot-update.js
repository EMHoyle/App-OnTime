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




var url = "https://jsonplaceholder.typicode.com/todos";
var TaskM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TaskM, _Component);

  var _super = _createSuper(TaskM);

  function TaskM() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TaskM);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      data: [],
      modalInsertar: false,
      form: {
        id: '',
        title: ''
      },
      tipoModal: ''
    });

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "seleccionTask", function (userID) {
      _this.setState({
        tipoModal: 'actualizar',
        form: {
          id: userID.id,
          title: userID.title
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionGet", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url).then(function (response) {
        _this.setState({
          data: response.data
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
              delete _this.state.form.id;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(url, _this.state.form).then(function (response) {
                _this.modalInsertar();

                _this.peticionGet();
              })["catch"](function (error) {
                console.log(error.message);
              });

            case 3:
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
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskM, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.peticionGet();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.state.form;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          _this2.setState({
            form: null,
            tipoModal: 'insertar'
          });

          _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }, "Agregar Task"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 27
        }
      }), __jsx("table", {
        className: "table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 33
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 33
        }
      }, "TASK"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 33
        }
      }, "ACCIONES"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }
      }, this.state.data.map(function (userID) {
        return __jsx("tr", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 37
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 41
          }
        }, userID.id), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 41
          }
        }, userID.title), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 41
          }
        }, __jsx("button", {
          className: "btn btn-secondary",
          onClick: function onClick() {
            _this2.seleccionTask(userID);

            _this2.modalInsertar();
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 45
          }
        }, "Editar"), "   ", __jsx("button", {
          className: "btn btn-danger",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 45
          }
        }, "Eliminar")));
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: this.state.modalInsertar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalHeader"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }
      }, "Nueva Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "id",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }
      }, "ID"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "id",
        id: "id",
        readOnly: true,
        onChange: this.handleChange,
        value: form ? form.id : this.state.data.length + 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        htmlFor: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }
      }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        className: "form-control",
        type: "text",
        name: "title",
        id: "id",
        onChange: this.handleChange,
        value: form ? form.title : '',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }
      }, this.state.tipoModal == 'insertar' ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPost();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }
      }, "Agregar") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this2.peticionPut();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
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
          lineNumber: 142,
          columnNumber: 25
        }
      }, "Cancelar"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tNL1Rhc2tNLmpzIl0sIm5hbWVzIjpbInVybCIsIlRhc2tNIiwiZGF0YSIsIm1vZGFsSW5zZXJ0YXIiLCJmb3JtIiwiaWQiLCJ0aXRsZSIsInRpcG9Nb2RhbCIsInNldFN0YXRlIiwic3RhdGUiLCJlIiwicGVyc2lzdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySUQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwibWVzc2FnZSIsInBvc3QiLCJwZXRpY2lvbkdldCIsInB1dCIsIm1hcCIsInNlbGVjY2lvblRhc2siLCJoYW5kbGVDaGFuZ2UiLCJsZW5ndGgiLCJwZXRpY2lvblBvc3QiLCJwZXRpY2lvblB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUUsNENBQVg7QUFFTyxJQUFNQyxLQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEsZ05BQ1k7QUFDSkMsVUFBSSxFQUFFLEVBREY7QUFFSkMsbUJBQWEsRUFBRSxLQUZYO0FBR0pDLFVBQUksRUFBRTtBQUNGQyxVQUFFLEVBQUUsRUFERjtBQUVGQyxhQUFLLEVBQUU7QUFGTCxPQUhGO0FBT0ZDLGVBQVMsRUFBRTtBQVBULEtBRFo7O0FBQUEsd05BV2tCLFlBQUk7QUFDZCxZQUFLQyxRQUFMLENBQWM7QUFBQ0wscUJBQWEsRUFBRSxDQUFDLE1BQUtNLEtBQUwsQ0FBV047QUFBNUIsT0FBZDtBQUNILEtBYkw7O0FBQUE7QUFBQSxrTUFla0IsaUJBQU1PLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWQSxpQkFBQyxDQUFDQyxPQUFGO0FBRFU7QUFBQSx1QkFFSixNQUFLSCxRQUFM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LElBQUksR0FBQ0EsSUFBSSxDQUFDRSxLQUFOLEdBQWEsRUFOeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhKLENBREEsQ0FKSixFQTBCSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLRyxLQUFMLENBQVdGLFNBQVgsSUFBd0IsVUFBeEIsR0FDRCxNQUFDLGtEQUFEO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDd0IsWUFBTCxFQUFKO0FBQUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQyxHQUVELE1BQUMsa0RBQUQ7QUFBUSxpQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxlQUFPLEVBQUU7QUFBQSxpQkFBSSxNQUFJLENBQUNDLFdBQUwsRUFBSjtBQUFBLFNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosRUFLSSxNQUFDLGtEQUFEO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBbUMsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDN0IsYUFBTCxFQUFKO0FBQUEsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSixDQTFCSixDQXBDSixDQURKO0FBeUVIO0FBNUlMOztBQUFBO0FBQUEsRUFBMkI4QiwrQ0FBM0I7QUErSWVoQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFuYWdlci5qcy5hODFhMGJhNTgwN2Q3YWQ5OGRkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciwgRm9ybUdyb3VwLCBJbnB1dCwgTGFiZWx9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgdXJsPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza00gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIG1vZGFsSW5zZXJ0YXI6IGZhbHNlLFxyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGlwb01vZGFsOiAnJyxcclxuICAgIH07XHJcblxyXG4gICAgbW9kYWxJbnNlcnRhcj0oKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsSW5zZXJ0YXI6ICF0aGlzLnN0YXRlLm1vZGFsSW5zZXJ0YXJ9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2U9IGFzeW5jIGU9PntcclxuICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5mb3JtLFxyXG4gICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY2Npb25UYXNrPSh1c2VySUQpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRpcG9Nb2RhbDogJ2FjdHVhbGl6YXInLFxyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdXNlcklELmlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHVzZXJJRC50aXRsZSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwZXRpY2lvbkdldD0oKT0+IHtcclxuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3BvbnNlLmRhdGF9KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGV0aWNpb25Qb3N0PSBhc3luYyAoKT0+e1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmZvcm0uaWQ7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHRoaXMuc3RhdGUuZm9ybSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgdGhpcy5tb2RhbEluc2VydGFyKCk7XHJcbiAgICAgICAgICB0aGlzLnBldGljaW9uR2V0KCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGV0aWNpb25QdXQ9KCk9PntcclxuICAgICAgICBheGlvcy5wdXQodXJsICsgdGhpcy5zdGF0ZS5mb3JtLmlkLCB0aGlzLnN0YXRlLmZvcm0pLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgIHRoaXMubW9kYWxJbnNlcnRhcigpO1xyXG4gICAgICAgICAgdGhpcy5wZXRpY2lvbkdldCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wZXRpY2lvbkdldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Zm9ybX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9Pnt0aGlzLnNldFN0YXRlKHtmb3JtOiBudWxsLCB0aXBvTW9kYWw6ICdpbnNlcnRhcid9KTsgdGhpcy5tb2RhbEluc2VydGFyKCl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5BZ3JlZ2FyIFRhc2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRBU0s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BQ0NJT05FUzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgodXNlcklELCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dXNlcklELmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJJRC50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2VsZWNjaW9uVGFzayh1c2VySUQpOyB0aGlzLm1vZGFsSW5zZXJ0YXIoKX19PkVkaXRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiAgIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIj5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbEluc2VydGFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgTnVldmEgVGFza1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImlkXCI+SUQ8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIiBpZD1cImlkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtP2Zvcm0uaWQ6IHRoaXMuc3RhdGUuZGF0YS5sZW5ndGgrMX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRhc2s8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtP2Zvcm0udGl0bGU6ICcnfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpcG9Nb2RhbCA9PSAnaW5zZXJ0YXInP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUG9zdCgpfT5BZ3JlZ2FyPC9CdXR0b24+OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uUHV0KCl9PkFjdHVhbGl6YXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PnRoaXMubW9kYWxJbnNlcnRhcigpfT5DYW5jZWxhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tNXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=