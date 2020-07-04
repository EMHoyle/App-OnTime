webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modal.module.css */ "./components/Modal/Modal.module.css");
/* harmony import */ var _Modal_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\Modal\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var url = "https://jsonplaceholder.typicode.com/todos";

var Ventana = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Ventana, _React$Component);

  var _super = _createSuper(Ventana);

  function Ventana() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Ventana);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      abierto: false,
      form: {
        id: '',
        title: '',
        completed: ''
      },
      task: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "abrirModal", function () {
      _this.setState({
        abierto: !_this.state.abierto
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "peticionPost", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              delete _this.state.form.id;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(url, _this.state.form).then(function (response) {
                _this.abrirModal();

                _this.peticionGet();
              })["catch"](function (error) {
                console.log(error.message);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.persist();
                _context2.next = 3;
                return _this.setState({
                  form: _objectSpread(_objectSpread({}, _this.state.form), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value))
                });

              case 3:
                console.log(_this.state.form);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Ventana, [{
    key: "render",
    value: function render() {
      var form = this.state.form;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn btn-success",
        onClick: this.abrirModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, "Agregar Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.abierto,
        className: "modalStyles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, "Nueva Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        htmlFor: "id",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, "ID"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        className: "form-control",
        type: "text",
        name: "id",
        id: "id",
        readOnly: true,
        onChange: this.handleChange,
        value: this.state.data && this.state.data.length + 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
        htmlFor: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, "Task"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
        className: "form-control",
        type: "text",
        name: "title",
        id: "id",
        onChange: this.handleChange,
        value: form.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalFooter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn btn-success",
        onClick: this.peticionPost,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, "Agregar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn btn-danger",
        onClick: this.abrirModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, "Cancelar"))));
    }
  }]);

  return Ventana;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ventana);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzIl0sIm5hbWVzIjpbInVybCIsIlZlbnRhbmEiLCJhYmllcnRvIiwiZm9ybSIsImlkIiwidGl0bGUiLCJjb21wbGV0ZWQiLCJ0YXNrIiwic2V0U3RhdGUiLCJzdGF0ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImFicmlyTW9kYWwiLCJwZXRpY2lvbkdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJlIiwicGVyc2lzdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImRhdGEiLCJsZW5ndGgiLCJwZXRpY2lvblBvc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUUsNENBQVg7O0lBRU1DLE87Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0U7QUFDSkMsYUFBTyxFQUFFLEtBREw7QUFFSkMsVUFBSSxFQUFFO0FBQ0pDLFVBQUUsRUFBRSxFQURBO0FBRUpDLGFBQUssRUFBRSxFQUZIO0FBR0pDLGlCQUFTLEVBQUU7QUFIUCxPQUZGO0FBT0pDLFVBQUksRUFBRTtBQVBGLEs7O3FOQVVLLFlBQUk7QUFDYixZQUFLQyxRQUFMLENBQWM7QUFBQ04sZUFBTyxFQUFFLENBQUMsTUFBS08sS0FBTCxDQUFXUDtBQUF0QixPQUFkO0FBQ0QsSzs7cVpBRWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaLHFCQUFPLE1BQUtPLEtBQUwsQ0FBV04sSUFBWCxDQUFnQkMsRUFBdkI7QUFEWTtBQUFBLHFCQUVOTSw2Q0FBSyxDQUFDQyxJQUFOLENBQVdYLEdBQVgsRUFBZ0IsTUFBS1MsS0FBTCxDQUFXTixJQUEzQixFQUFpQ1MsSUFBakMsQ0FBc0MsVUFBQUMsUUFBUSxFQUFFO0FBQ3BE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a0RBQUQ7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUUsS0FBS2QsVUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixDQWZGLENBSEEsQ0FERjtBQTBCRDs7OztFQWhFbUJlLDRDQUFLLENBQUNDLFM7O0FBbUViN0Isc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hbmFnZXIuanMuMzJjMGU3OWRlMGJkNjBjY2E2NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIEZvcm1Hcm91cCwgSW5wdXQsIExhYmVsfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0ICcuL01vZGFsLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1cmw9IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zXCJcclxuXHJcbmNsYXNzIFZlbnRhbmEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgc3RhdGU9e1xyXG4gICAgYWJpZXJ0bzogZmFsc2UsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBjb21wbGV0ZWQ6ICcnXHJcbiAgICB9LFxyXG4gICAgdGFzazogW10sXHJcbiAgfVxyXG5cclxuICBhYnJpck1vZGFsPSgpPT57XHJcbiAgICB0aGlzLnNldFN0YXRlKHthYmllcnRvOiAhdGhpcy5zdGF0ZS5hYmllcnRvfSk7XHJcbiAgfVxyXG5cclxuICBwZXRpY2lvblBvc3Q9IGFzeW5jICgpPT57XHJcbiAgICBkZWxldGUgdGhpcy5zdGF0ZS5mb3JtLmlkO1xyXG4gICAgYXdhaXQgYXhpb3MucG9zdCh1cmwsIHRoaXMuc3RhdGUuZm9ybSkudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICB0aGlzLmFicmlyTW9kYWwoKTtcclxuICAgICAgdGhpcy5wZXRpY2lvbkdldCgpO1xyXG4gICAgfSkuY2F0Y2goZXJyb3I9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlPSBhc3luYyBlPT57XHJcbiAgICBlLnBlcnNpc3QoKTtcclxuICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5mb3JtLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZvcm0pO1xyXG59XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3Qge2Zvcm19ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLmFicmlyTW9kYWx9PkFncmVnYXIgVGFzazwvQnV0dG9uPlxyXG5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5hYmllcnRvfSBjbGFzc05hbWU9XCJtb2RhbFN0eWxlc1wiPlxyXG4gICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgIE51ZXZhIFRhc2tcclxuICAgICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImlkXCI+SUQ8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiaWRcIiBpZD1cImlkXCIgcmVhZE9ubHkgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YSAmJiB0aGlzLnN0YXRlLmRhdGEubGVuZ3RoKzF9Lz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UYXNrPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJpZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0udGl0bGV9Lz4gXHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L01vZGFsQm9keT5cclxuXHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMucGV0aWNpb25Qb3N0fT5BZ3JlZ2FyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmFicmlyTW9kYWx9PkNhbmNlbGFyPC9CdXR0b24+XHJcbiAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZW50YW5hOyJdLCJzb3VyY2VSb290IjoiIn0=