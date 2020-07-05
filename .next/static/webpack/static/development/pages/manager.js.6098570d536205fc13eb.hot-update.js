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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");










var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\TaskM\\TaskM.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 //constante

var url = "https://jsonplaceholder.typicode.com/todos/";
var initState = {
  todo: [],
  modalInsertar: false,
  modalEliminar: false,
  tipoModal: "",
  form: {
    id: "",
    title: "",
    completed: false
  }
};
var TaskM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TaskM, _Component);

  var _super = _createSuper(TaskM);

  function TaskM(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, TaskM);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "modalInsertar", function () {
      _this.setState({
        modalInsertar: !_this.state.modalInsertar
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        var _objectSpread2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.persist();
                _context.next = 3;
                return _this.setState({
                  form: _objectSpread(_objectSpread({}, _this.state.form), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread2, e.target.name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread2, e.target.name, e.target.checked), _objectSpread2))
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "seleccionarTask", function (todo) {
      _this.setState({
        tipoModal: "actualizar",
        form: {
          id: todo.id,
          title: todo.title
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "peticionGet", function () {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(url).then(function (response) {
        _this.setState({
          todo: response.data
        });
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "peticionPost", function () {
      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(url, _this.state.form).then(function (response) {
        if (response.status === 201) _this.setState(function (oldState) {
          return _objectSpread(_objectSpread({}, initState), {}, {
            todo: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(oldState.todo), [oldState.form]),
            modalInsertar: !oldState.modalInsertar
          });
        });
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "peticionPut", function () {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.put("".concat(url).concat(_this.state.form.id), _this.state.form).then(function (response) {
        if (response.status === 200) {
          var newToDo = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.todo);

          newToDo[_this.state.form.id - 1].title = _this.state.form.title;

          _this.setState(function (oldState) {
            return _objectSpread(_objectSpread({}, initState), {}, {
              todo: newToDo,
              modalInsertar: !oldState.modalInsertar
            });
          });
        }
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "peticionDelete", function () {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a["delete"](url + _this.state.form.id).then(function (response) {
        if (response.status === 200) {
          var newToDo = _this.state.todo.filter(function (task) {
            return task.id !== _this.state.form.id;
          });

          _this.setState(_objectSpread(_objectSpread({}, initState), {}, {
            todo: newToDo,
            modalEliminar: false
          }));
        }
      })["catch"](function (error) {
        console.log(error.message);
      });
    });

    _this.state = {
      todo: [],
      modalInsertar: false,
      modalEliminar: false,
      tipoModal: "",
      form: {
        id: "",
        title: "",
        completed: false
      }
    };
    return _this;
  } //acciones


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(TaskM, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.peticionGet();
    } //Task Manager

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var form = this.state.form;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
        className: "App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }
      }, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.setState(function (oldState) {
            return _objectSpread(_objectSpread({}, oldState), {}, {
              modalInsertar: !oldState.modalInsertar,
              tipoModal: "insertar",
              form: {
                id: _this2.state.todo.length + 1,
                title: ""
              }
            });
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }
      }, "Agregar Task"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 27
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        className: "Table",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }
      }, __jsx(Thead, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 25
        }
      }, __jsx(Tr, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 29
        }
      }, __jsx(Th, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 33
        }
      }, "ID"), __jsx(Th, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 33
        }
      }, "TASK"), __jsx(Th, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 33
        }
      }, "ESTATUS"), __jsx(Th, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 33
        }
      }, "ACCIONES"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }
      }, this.state.todo.map(function (userID) {
        return __jsx("tr", {
          key: userID.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 37
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 41
          }
        }, userID.id), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 41
          }
        }, userID.title), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 41
          }
        }, __jsx("input", {
          type: "checkbox",
          checked: userID.completed,
          onChange: _this2.handleChange,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 45
          }
        }), userID.completed), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
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
            lineNumber: 153,
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
            lineNumber: 156,
            columnNumber: 45
          }
        }, "Eliminar")));
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.modalInsertar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalHeader"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }
      }, "Nueva Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        htmlFor: "id",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }
      }, "ID"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        className: "form-control",
        type: "text",
        name: "id",
        id: "id",
        readOnly: true,
        onChange: this.handleChange,
        value: form.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 25
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        htmlFor: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 25
        }
      }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        className: "form-control",
        type: "text",
        name: "title",
        id: "title",
        onChange: this.handleChange,
        value: form.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 25
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }
      }, this.state.tipoModal == "insertar" ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPost();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 25
        }
      }, "Agregar") : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionPut();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 25
        }
      }, "Actualizar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.modalInsertar();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 25
        }
      }, "Cancelar"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
        isOpen: this.state.modalEliminar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }
      }, "Est\xE1s seguro que deseas eliminar esta Task? ", form && form.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-success",
        onClick: function onClick() {
          return _this2.peticionDelete();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }
      }, "Si"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.setState({
            modalEliminar: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }, "NO"))));
    }
  }]);

  return TaskM;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tNL1Rhc2tNLmpzIl0sIm5hbWVzIjpbInVybCIsImluaXRTdGF0ZSIsInRvZG8iLCJtb2RhbEluc2VydGFyIiwibW9kYWxFbGltaW5hciIsInRpcG9Nb2RhbCIsImZvcm0iLCJpZCIsInRpdGxlIiwiY29tcGxldGVkIiwiVGFza00iLCJwcm9wcyIsInNldFN0YXRlIiwic3RhdGUiLCJlIiwicGVyc2lzdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwicG9zdCIsInN0YXR1cyIsIm9sZFN0YXRlIiwicHV0IiwibmV3VG9EbyIsImZpbHRlciIsInRhc2siLCJwZXRpY2lvbkdldCIsImxlbmd0aCIsIm1hcCIsInVzZXJJRCIsImhhbmRsZUNoYW5nZSIsInNlbGVjY2lvbmFyVGFzayIsInBldGljaW9uUG9zdCIsInBldGljaW9uUHV0IiwicGV0aWNpb25EZWxldGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLDZDQUFaO0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ05DLE1BQUksRUFBRSxFQURBO0FBRU5DLGVBQWEsRUFBRSxLQUZUO0FBR05DLGVBQWEsRUFBRSxLQUhUO0FBSU5DLFdBQVMsRUFBRSxFQUpMO0FBS05DLE1BQUksRUFBRTtBQUNGQyxNQUFFLEVBQUUsRUFERjtBQUVGQyxTQUFLLEVBQUUsRUFGTDtBQUdGQyxhQUFTLEVBQUU7QUFIVDtBQUxBLENBQWxCO0FBWU8sSUFBTUMsS0FBYjtBQUFBOztBQUFBOztBQUVJLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDREQUNpREUsSUFBSSxJQUFJQSxJQUFJLENBQUNFLEtBRDlELENBREosRUFJSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGtEQUFEO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsZUFBTyxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDb0MsY0FBTCxFQUFKO0FBQUEsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQyxrREFBRDtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQW1DLGVBQU8sRUFBRTtBQUFBLGlCQUFJLE1BQUksQ0FBQ2hDLFFBQUwsQ0FBYztBQUFDUix5QkFBYSxFQUFFO0FBQWhCLFdBQWQsQ0FBSjtBQUFBLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixDQUpKLENBaEdKLENBREo7QUE0R0g7QUFyTUw7O0FBQUE7QUFBQSxFQUEyQnlDLGdEQUEzQjtBQXdNZW5DLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYW5hZ2VyLmpzLjYwOTg1NzBkNTM2MjA1ZmMxM2ViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0J1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBGb3JtR3JvdXAsIElucHV0LCBMYWJlbCwgVGFibGV9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuLy9jb25zdGFudGVcclxuY29uc3QgdXJsID0gXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvXCI7XHJcbmNvbnN0IGluaXRTdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIHRvZG86IFtdLFxyXG4gICAgICAgICAgICBtb2RhbEluc2VydGFyOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kYWxFbGltaW5hcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpcG9Nb2RhbDogXCJcIixcclxuICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza00gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgICAgICAgdG9kbzogW10sXHJcbiAgICAgICAgICAgIG1vZGFsSW5zZXJ0YXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbEVsaW1pbmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgdGlwb01vZGFsOiBcIlwiLFxyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbi8vYWNjaW9uZXNcclxuICAgIG1vZGFsSW5zZXJ0YXI9KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbEluc2VydGFyOiAhdGhpcy5zdGF0ZS5tb2RhbEluc2VydGFyfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZT0gYXN5bmMgZT0+e1xyXG4gICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY2Npb25hclRhc2s9KHRvZG8pPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRpcG9Nb2RhbDogXCJhY3R1YWxpemFyXCIsXHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0b2RvLmlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRvZG8udGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4vL3BldGljaW9uZXNcclxuICAgIHBldGljaW9uR2V0PSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt0b2RvOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHBldGljaW9uUG9zdCA9ICgpID0+IGF4aW9zLnBvc3QodXJsLCB0aGlzLnN0YXRlLmZvcm0pLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpXHJcbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvbGRTdGF0ZSA9PiAoey4uLmluaXRTdGF0ZSwgdG9kbzogWy4uLm9sZFN0YXRlLnRvZG8sIG9sZFN0YXRlLmZvcm1dLCBtb2RhbEluc2VydGFyOiAhb2xkU3RhdGUubW9kYWxJbnNlcnRhciwgfSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSlcclxuXHJcbiAgICBwZXRpY2lvblB1dCA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wdXQoYCR7dXJsfSR7dGhpcy5zdGF0ZS5mb3JtLmlkfWAsIHRoaXMuc3RhdGUuZm9ybSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3VG9EbyA9IFsuLi50aGlzLnN0YXRlLnRvZG9dXHJcbiAgICAgICAgICAgICAgbmV3VG9Eb1t0aGlzLnN0YXRlLmZvcm0uaWQgLSAxXS50aXRsZSA9IHRoaXMuc3RhdGUuZm9ybS50aXRsZVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2xkU3RhdGUgPT4gKHsuLi5pbml0U3RhdGUsIHRvZG86IG5ld1RvRG8sIG1vZGFsSW5zZXJ0YXI6ICFvbGRTdGF0ZS5tb2RhbEluc2VydGFyLCB9KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnJvcj0+e1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSl9XHJcblxyXG4gICAgcGV0aWNpb25EZWxldGU9KCk9PntcclxuICAgICAgICBheGlvcy5kZWxldGUodXJsICsgdGhpcy5zdGF0ZS5mb3JtLmlkKS50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRoaXMuc3RhdGUudG9kby5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0aGlzLnN0YXRlLmZvcm0uaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4uaW5pdFN0YXRlLCB0b2RvOiBuZXdUb0RvLCBtb2RhbEVsaW1pbmFyOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgfSl9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucGV0aWNpb25HZXQoKTtcclxuICAgIH1cclxuXHJcbi8vVGFzayBNYW5hZ2VyXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2Zvcm19ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUob2xkU3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2xkU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSW5zZXJ0YXI6ICFvbGRTdGF0ZS5tb2RhbEluc2VydGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvTW9kYWw6IFwiaW5zZXJ0YXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc3RhdGUudG9kby5sZW5ndGgrMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmVnYXIgVGFza1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9XCJUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPklEPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+VEFTSzwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPkVTVEFUVVM8L1RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5BQ0NJT05FUzwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b2RvLm1hcCgodXNlcklELCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJJRC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJJRC5pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt1c2VySUQudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt1c2VySUQuY29tcGxldGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlcklELmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5zZWxlY2Npb25hclRhc2sodXNlcklEKTsgdGhpcy5tb2RhbEluc2VydGFyKCl9fT5FZGl0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgICBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e3RoaXMuc2VsZWNjaW9uYXJUYXNrKHVzZXJJRCk7IHRoaXMuc2V0U3RhdGUoe21vZGFsRWxpbWluYXI6IHRydWV9KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgQWdyZWdhci9FZGl0YXIgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsSW5zZXJ0YXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICBOdWV2YSBUYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaWRcIj5JRDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpZFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9IFwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5pZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRhc2s8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0udGl0bGV9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGlwb01vZGFsID09IFwiaW5zZXJ0YXJcIj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKT0+dGhpcy5wZXRpY2lvblBvc3QoKX0+QWdyZWdhcjwvQnV0dG9uPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXsoKT0+dGhpcy5wZXRpY2lvblB1dCgpfT5BY3R1YWxpemFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpPT50aGlzLm1vZGFsSW5zZXJ0YXIoKX0+Q2FuY2VsYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTW9kYWwgRWxpbWluYXIgKi99XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1vZGFsRWxpbWluYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVzdMOhcyBzZWd1cm8gcXVlIGRlc2VhcyBlbGltaW5hciBlc3RhIFRhc2s/IHtmb3JtICYmIGZvcm0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9eygpPT50aGlzLnBldGljaW9uRGVsZXRlKCl9PlNpPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7bW9kYWxFbGltaW5hcjogZmFsc2V9KX0+Tk88L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTSJdLCJzb3VyY2VSb290IjoiIn0=