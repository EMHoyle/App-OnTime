webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/New/contacts/AddContact.js":
/*!***********************************************!*\
  !*** ./components/New/contacts/AddContact.js ***!
  \***********************************************/
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
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/context */ "./components/New/context/context.js");
/* harmony import */ var _layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/TextInputGroup */ "./components/New/layout/TextInputGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\contacts\\AddContact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AddContact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddContact, _Component);

  var _super = _createSuper(AddContact);

  function AddContact() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddContact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      name: "",
      email: "",
      phone: "",
      // Create an error object to catch and send message of error
      errors: {}
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, e) {
        var _this$state, name, email, phone, newContact, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // preventDefault() we don't want to actually submit by default
                e.preventDefault();
                _this$state = _this.state, name = _this$state.name, email = _this$state.email, phone = _this$state.phone; // Check for Errors

                if (!(name === "")) {
                  _context.next = 5;
                  break;
                }

                _this.setState({
                  errors: {
                    name: "Name is required"
                  }
                });

                return _context.abrupt("return");

              case 5:
                if (!(email === "")) {
                  _context.next = 8;
                  break;
                }

                _this.setState({
                  errors: {
                    email: "Email is required"
                  }
                });

                return _context.abrupt("return");

              case 8:
                if (!(phone === "")) {
                  _context.next = 11;
                  break;
                }

                _this.setState({
                  errors: {
                    phone: "Phone is required"
                  }
                });

                return _context.abrupt("return");

              case 11:
                // Construct a new contact object
                newContact = {
                  name: name,
                  email: email,
                  phone: phone
                }; // Getting external request via JSONplaceholder

                _context.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("https://jsonplaceholder.typicode.com/users", newContact);

              case 14:
                res = _context.sent;
                dispatch({
                  type: "ADD_CONTACT",
                  payload: res.data
                }); // Clear State

                _this.setState({
                  name: "",
                  email: "",
                  phone: "",
                  errors: {}
                });

                _this.props.history.push("/");

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddContact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // Destructuring to extrat key in state object
      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          phone = _this$state2.phone,
          errors = _this$state2.errors;
      return __jsx(_context_context__WEBPACK_IMPORTED_MODULE_10__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, function (value) {
        var dispatch = value.dispatch;
        return __jsx("div", {
          className: "card mb-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "card-header",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 29
          }
        }, "Add Contact"), __jsx("div", {
          className: "card-body",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }
        }, __jsx("form", {
          onSubmit: _this2.onSubmit.bind(_this2, dispatch),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 33
          }
        }, __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Name",
          name: "name",
          placeholder: "Enter Name",
          value: name,
          onChange: _this2.onChange,
          error: errors.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 37
          }
        }), __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Enter Email",
          value: email,
          onChange: _this2.onChange,
          error: errors.email,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 37
          }
        }), __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Phone",
          name: "phone",
          placeholder: "Enter Phone",
          value: phone,
          onChange: _this2.onChange,
          error: errors.phone,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 37
          }
        }), __jsx("input", {
          type: "submit",
          value: "Add Contact",
          className: "btn btn-light btn-block",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 37
          }
        }))));
      });
    }
  }]);

  return AddContact;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddContact);

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

/***/ "./components/New/contacts/Contact.js":
/*!********************************************!*\
  !*** ./components/New/contacts/Contact.js ***!
  \********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../context/context */ "./components/New/context/context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\contacts\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // This is a class component not functional component, we have to use 'this.props' instead of just props

var Contact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      // If click, show info
      showContactInfo: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteClick", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id, dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a["delete"]("https://jsonplaceholder.typicode.com/users/".concat(id));

              case 3:
                dispatch({
                  type: "DELETE_CONTACT",
                  payload: id
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: "DELETE_CONTACT",
                  payload: id
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$contact = this.props.contact,
          id = _this$props$contact.id,
          name = _this$props$contact.name,
          email = _this$props$contact.email,
          phone = _this$props$contact.phone; // We can extract value out of props, so we don't need to pass in 'this.props' each time

      var showContactInfo = this.state.showContactInfo;
      return (// You need a Consumer to access the stuff from context.js
        __jsx(_context_context__WEBPACK_IMPORTED_MODULE_12__["Consumer"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }
        }, function (value) {
          // Pulling out dispatch() from the state
          var dispatch = value.dispatch;
          return __jsx("div", {
            className: "card card-body mb-3",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 25
            }
          }, __jsx("h4", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }
          }, name, " ", __jsx("i", {
            onClick: function onClick() {
              return _this2.setState({
                showContactInfo: !_this2.state.showContactInfo
              });
            },
            className: "fas fa-sort-down",
            style: {
              cursor: "pointer"
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 33
            }
          }), __jsx("i", {
            className: "fas fa-times",
            style: {
              cursor: "pointer",
              "float": "right",
              color: "red"
            } // Add event listern to delete when icon is click
            ,
            onClick: _this2.onDeleteClick.bind(_this2, id, dispatch),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }
          }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            to: "contact/edit/".concat(id),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }
          }, __jsx("i", {
            className: "fas fa-pencil-alt",
            style: {
              cursor: 'pointer',
              "float": 'right',
              color: 'black',
              marginRight: '1rem'
            },
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 37
            }
          }))), showContactInfo ? // If this is true; show the content, if 'null' then hide
          __jsx("ul", {
            className: "list-group",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }
          }, __jsx("li", {
            className: "list-group-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 37
            }
          }, "Email: ", email), __jsx("li", {
            className: "list-group-item",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 37
            }
          }, "Phone: ", phone)) : null);
        })
      );
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Contact.propTypes = {
  contact: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

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

/***/ "./components/New/contacts/Contacts.js":
/*!*********************************************!*\
  !*** ./components/New/contacts/Contacts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contact */ "./components/New/contacts/Contact.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/context */ "./components/New/context/context.js");





var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\contacts\\Contacts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // We use class base component because we want to use 'state'

var Contacts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Contacts, _Component);

  var _super = _createSuper(Contacts);

  function Contacts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contacts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contacts, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx(_context_context__WEBPACK_IMPORTED_MODULE_7__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, function (value) {
        // destructuring contacts, assign to value
        var contacts = value.contacts;
        return (// Fragments removes uncessary elements you don't need, here we take out the <div></div>
          __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }
          }, __jsx("h1", {
            className: "display-4 mb-2",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }
          }, __jsx("span", {
            className: "text-danger",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 33
            }
          }, "Contact"), " ", "List"), contacts.map(function (contact) {
            return __jsx(_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
              key: contact.id,
              contact: contact,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 33
              }
            });
          }))
        );
      });
    }
  }]);

  return Contacts;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

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

/***/ "./components/New/contacts/EditContact.js":
/*!************************************************!*\
  !*** ./components/New/contacts/EditContact.js ***!
  \************************************************/
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
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/context */ "./components/New/context/context.js");
/* harmony import */ var _layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/TextInputGroup */ "./components/New/layout/TextInputGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\contacts\\EditContact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AddContact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddContact, _Component);

  var _super = _createSuper(AddContact);

  function AddContact() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddContact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      name: "",
      email: "",
      phone: "",
      // Create an error object to catch and send message of error
      errors: {}
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, e) {
        var _this$state, name, email, phone, updContact, id, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // preventDefault() we don't want to actually submit by default
                e.preventDefault();
                _this$state = _this.state, name = _this$state.name, email = _this$state.email, phone = _this$state.phone; // Check for Errors

                if (!(name === '')) {
                  _context.next = 5;
                  break;
                }

                _this.setState({
                  errors: {
                    name: 'Name is required'
                  }
                });

                return _context.abrupt("return");

              case 5:
                if (!(email === '')) {
                  _context.next = 8;
                  break;
                }

                _this.setState({
                  errors: {
                    email: 'Email is required'
                  }
                });

                return _context.abrupt("return");

              case 8:
                if (!(phone === '')) {
                  _context.next = 11;
                  break;
                }

                _this.setState({
                  errors: {
                    phone: 'Phone is required'
                  }
                });

                return _context.abrupt("return");

              case 11:
                updContact = {
                  name: name,
                  email: email,
                  phone: phone
                }; // We want to pull the id out of the url e.g. localhost:3000/contact/edit/1

                id = _this.props.match.params.id; // Use await because of the async, then send our updContact payload

                _context.next = 15;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.put("https://jsonplaceholder.typicode.com/users/".concat(id), updContact);

              case 15:
                res = _context.sent;
                // Use the dispatch method to update contact, and pass in the payload.data above
                dispatch({
                  type: 'UPDATE_CONTACT',
                  payload: res.data
                }); // Clear State

                _this.setState({
                  name: "",
                  email: "",
                  phone: "",
                  errors: {}
                });

                _this.props.history.push("/");

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AddContact, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, res, contact;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.match.params.id;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("https://jsonplaceholder.typicode.com/users/".concat(id));

              case 3:
                res = _context2.sent;
                contact = res.data;
                this.setState({
                  name: contact.name,
                  email: contact.email,
                  phone: contact.phone
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Destructuring to extrat key in state object
      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          phone = _this$state2.phone,
          errors = _this$state2.errors;
      return __jsx(_context_context__WEBPACK_IMPORTED_MODULE_10__["Consumer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, function (value) {
        var dispatch = value.dispatch;
        return __jsx("div", {
          className: "card mb-3",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "card-header",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }
        }, "Edit Contact"), __jsx("div", {
          className: "card-body",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }
        }, __jsx("form", {
          onSubmit: _this2.onSubmit.bind(_this2, dispatch),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 33
          }
        }, __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Name",
          name: "name",
          placeholder: "Enter Name",
          value: name,
          onChange: _this2.onChange,
          error: errors.name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 37
          }
        }), __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Enter Email",
          value: email,
          onChange: _this2.onChange,
          error: errors.email,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 37
          }
        }), __jsx(_layout_TextInputGroup__WEBPACK_IMPORTED_MODULE_11__["default"], {
          label: "Phone",
          name: "phone",
          placeholder: "Enter Phone",
          value: phone,
          onChange: _this2.onChange,
          error: errors.phone,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 37
          }
        }), __jsx("input", {
          type: "submit",
          value: "Edit Contact",
          className: "btn btn-light btn-block",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 37
          }
        }))));
      });
    }
  }]);

  return AddContact;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddContact);

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

/***/ "./components/New/context/context.js":
/*!*******************************************!*\
  !*** ./components/New/context/context.js ***!
  \*******************************************/
/*! exports provided: Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\context\\context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // .createContext for our global state management rather than each individual compoents

var Context = react__WEBPACK_IMPORTED_MODULE_10___default.a.createContext(); // 'action' will be an object, and it will be a type; so that type we want to be evaluated
// reducer to evaluate the action type

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "DELETE_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        // filter out the contact that needs to be filtered out
        contacts: state.contacts.filter(function (contact // payload is just some data we want to send along with our action, sending 'id' as the payload
        ) {
          return contact.id !== action.payload;
        })
      });

    case "ADD_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        // filter out the contact that needs to be filtered out
        // Take 'contacts' which is the array of o
        contacts: [action.payload].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["default"])(state.contacts))
      });

    case "UPDATE_CONTACT":
      return _objectSpread(_objectSpread({}, state), {}, {
        contacts: state.contacts.map(function (contact) {
          return contact.id === action.payload.id ? contact = action.payload : contact;
        })
      });

    default:
      return state;
  }
};

var Provider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Provider, _Component);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      contacts: [],
      // When we have a consumer, it consume their entire state because that's what we're passing in.
      // We should be able to access 'dispatch' anywhere
      dispatch: function dispatch(action) {
        return _this.setState(function (state) {
          return reducer(state, action);
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Provider, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://jsonplaceholder.typicode.com/users");

              case 2:
                res = _context.sent;
                this.setState({
                  contacts: res.data
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      // We pass in the entire state so we can use it anywhere in our app, including props and functions
      return __jsx(Context.Provider, {
        value: this.state,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, this.props.children);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]); // We then export a 'consumer', because we have a 'provider' so consumer can access state

var Consumer = Context.Consumer;

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

/***/ "./components/New/layout/Header.js":
/*!*****************************************!*\
  !*** ./components/New/layout/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\layout\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // This is a functional component, we can just use 'props'

var Header = function Header(props) {
  // Using destructruing to having to pass in 'props' each time during the return
  var branding = props.branding;
  return __jsx("nav", {
    className: "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, branding), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navbar-nav mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: "/",
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  }), " Home")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: "/contact/add",
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }), " Add")), __jsx("li", {
    className: "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: "/about",
    className: "nav-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fas fa-question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }), " About"))))));
}; // Typing checking our props


_c = Header;
Header.defaultProps = {
  // Deafult value if branding props is missing
  branding: "My App"
};
Header.propTypes = {
  // Checkt if branding is a string, and required
  branding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./components/New/layout/TextInputGroup.js":
/*!*************************************************!*\
  !*** ./components/New/layout/TextInputGroup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\layout\\TextInputGroup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Destructure here, so we don't have to type props.... each time

var TextInputGroup = function TextInputGroup(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      placeholder = _ref.placeholder,
      type = _ref.type,
      onChange = _ref.onChange,
      error = _ref.error;
  return __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, label), __jsx("input", {
    type: type,
    name: name,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("form-control form-control-lg", {
      "is-invalid": error
    }),
    placeholder: placeholder // Will not be able to type in input field, until there is an onChange() event, because initial state is immutable
    ,
    value: value // Use onChange property to and object to pass the function to change state
    ,
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), error && __jsx("div", {
    className: "invalid-feedback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, error));
};

_c = TextInputGroup;
TextInputGroup.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
TextInputGroup.defaultProps = {
  type: "text"
};
/* harmony default export */ __webpack_exports__["default"] = (TextInputGroup);

var _c;

$RefreshReg$(_c, "TextInputGroup");

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

/***/ "./components/New/pages/About.js":
/*!***************************************!*\
  !*** ./components/New/pages/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\pages\\About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "About Contact Manager"), __jsx("p", {
    className: "lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Simple app to manage contacts"), __jsx("p", {
    className: "text-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Version 1.0.0"));
});

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

/***/ "./components/New/pages/NotFound.js":
/*!******************************************!*\
  !*** ./components/New/pages/NotFound.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\pages\\NotFound.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "text-danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "404"), " Page Not Found"), __jsx("p", {
    className: "lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Sorry, that page does not exist"));
});

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

/***/ "./components/New/prub/prub.js":
/*!*************************************!*\
  !*** ./components/New/prub/prub.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contacts_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contacts/Contacts */ "./components/New/contacts/Contacts.js");
/* harmony import */ var _contacts_AddContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contacts/AddContact */ "./components/New/contacts/AddContact.js");
/* harmony import */ var _contacts_EditContact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contacts/EditContact */ "./components/New/contacts/EditContact.js");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/Header */ "./components/New/layout/Header.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/About */ "./components/New/pages/About.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/NotFound */ "./components/New/pages/NotFound.js");
/* harmony import */ var _test_Test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../test/Test */ "./components/New/test/Test.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../context/context */ "./components/New/context/context.js");





var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\prub\\prub.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Prub = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Prub, _Component);

  var _super = _createSuper(Prub);

  function Prub() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prub);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prub, [{
    key: "render",
    value: function render() {
      return (// We wrap everything in the provider due to global state
        __jsx(_context_context__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "App",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }
        }, __jsx(_layout_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
          branding: "Contact Manager",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }
        }), __jsx("div", {
          className: "container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          exact: true,
          path: "/",
          component: _contacts_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 33
          }
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          exact: true,
          path: "/contact/add",
          component: _contacts_AddContact__WEBPACK_IMPORTED_MODULE_8__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 33
          }
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          exact: true,
          path: "/contact/edit/:id",
          component: _contacts_EditContact__WEBPACK_IMPORTED_MODULE_9__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 33
          }
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          exact: true,
          path: "/about",
          component: _pages_About__WEBPACK_IMPORTED_MODULE_11__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 33
          }
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          exact: true,
          path: "/test",
          component: _test_Test__WEBPACK_IMPORTED_MODULE_13__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 33
          }
        }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_12__["default"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 33
          }
        }))))))
      );
    }
  }]);

  return Prub;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Prub);

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

/***/ "./components/New/test/Test.js":
/*!*************************************!*\
  !*** ./components/New/test/Test.js ***!
  \*************************************/
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







var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\New\\test\\Test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Test = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Test, _Component);

  var _super = _createSuper(Test);

  function Test() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Test);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      test: "",
      body: ""
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Test, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          title: data.title,
          body: data.body
        });
      });
    } // componentWillMount() {
    //     console.log("componentWillMount...");
    // }
    // componentDidUpdate() {
    //     console.log("componentDidUpdate...");
    // }
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps...");
    // }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         test: "something"
    //     };
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(" getSnapShotBeforeUpdate...");
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          title = _this$state.title,
          body = _this$state.body;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, title), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, body));
    }
  }]);

  return Test;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Test);

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
/* harmony import */ var _components_TaskM_TaskM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TaskM/TaskM */ "./components/TaskM/TaskM.js");
/* harmony import */ var _components_New_prub_prub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/New/prub/prub */ "./components/New/prub/prub.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\pages\\manager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //import StudentPortal from '../components/crud/main/index';



var Manager = function Manager() {
  return __jsx(_components_Head_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_New_prub_prub__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ldy9jb250YWN0cy9BZGRDb250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3L2NvbnRhY3RzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXcvY29udGFjdHMvQ29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXcvY29udGFjdHMvRWRpdENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXcvY29udGV4dC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3L2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXcvbGF5b3V0L1RleHRJbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3L3BhZ2VzL0Fib3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3L3BhZ2VzL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3L3BydWIvcHJ1Yi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ldy90ZXN0L1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJBZGRDb250YWN0IiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJlcnJvcnMiLCJkaXNwYXRjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwic2V0U3RhdGUiLCJuZXdDb250YWN0IiwiYXhpb3MiLCJwb3N0IiwicmVzIiwidHlwZSIsInBheWxvYWQiLCJkYXRhIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJiaW5kIiwib25DaGFuZ2UiLCJDb21wb25lbnQiLCJDb250YWN0Iiwic2hvd0NvbnRhY3RJbmZvIiwiaWQiLCJjb250YWN0IiwiY3Vyc29yIiwiY29sb3IiLCJvbkRlbGV0ZUNsaWNrIiwibWFyZ2luUmlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiQ29udGFjdHMiLCJjb250YWN0cyIsIm1hcCIsInVwZENvbnRhY3QiLCJtYXRjaCIsInBhcmFtcyIsInB1dCIsImdldCIsIkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZmlsdGVyIiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsIkNvbnN1bWVyIiwiSGVhZGVyIiwiYnJhbmRpbmciLCJkZWZhdWx0UHJvcHMiLCJzdHJpbmciLCJUZXh0SW5wdXRHcm91cCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJlcnJvciIsImNsYXNzbmFtZXMiLCJmdW5jIiwiUHJ1YiIsIkVkaXRDb250YWN0IiwiQWJvdXQiLCJUZXN0IiwiTm90Rm91bmQiLCJ0ZXN0IiwiYm9keSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNl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LEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDSjtBQUNzQjtBQUNsQjtBQUNyQztBQUNmLFNBQVMsa0VBQWlCLFNBQVMsZ0VBQWUsU0FBUywyRUFBMEIsU0FBUyxrRUFBaUI7QUFDL0csQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQWtEO0FBQ25DO0FBQ2Y7QUFDQSxvQ0FBb0MsaUVBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixpRUFBZ0I7QUFDdEcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNUyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLFNBQ0ksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQU1ILENBUEQ7O0tBQU1BLE87QUFTU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1hbmFnZXIuanMuOGZmNmJkZmQxY2Q1ZmZlMjM2NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnN1bWVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IFRleHRJbnB1dEdyb3VwIGZyb20gXCIuLi9sYXlvdXQvVGV4dElucHV0R3JvdXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgQWRkQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGVycm9yIG9iamVjdCB0byBjYXRjaCBhbmQgc2VuZCBtZXNzYWdlIG9mIGVycm9yXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZGlzcGF0Y2gsIGUpID0+IHtcbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSB3ZSBkb24ndCB3YW50IHRvIGFjdHVhbGx5IHN1Ym1pdCBieSBkZWZhdWx0XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgRXJyb3JzXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiB7IG5hbWU6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH0gfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW1haWwgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnM6IHsgZW1haWw6IFwiRW1haWwgaXMgcmVxdWlyZWRcIiB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBob25lID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiB7IHBob25lOiBcIlBob25lIGlzIHJlcXVpcmVkXCIgfSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBhIG5ldyBjb250YWN0IG9iamVjdFxuICAgICAgICBjb25zdCBuZXdDb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXR0aW5nIGV4dGVybmFsIHJlcXVlc3QgdmlhIEpTT05wbGFjZWhvbGRlclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIiwgXG4gICAgICAgICAgICBuZXdDb250YWN0KTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFERF9DT05UQUNUXCIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ2xlYXIgU3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgIH07XG5cbiAgICBvbkNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBEZXN0cnVjdHVyaW5nIHRvIGV4dHJhdCBrZXkgaW4gc3RhdGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25zdW1lcj5cbiAgICAgICAgICAgICAgICB7dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRpc3BhdGNoIH0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkFkZCBDb250YWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkFkZCBDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Db25zdW1lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgQ29uc3VtZXIgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIFRoaXMgaXMgYSBjbGFzcyBjb21wb25lbnQgbm90IGZ1bmN0aW9uYWwgY29tcG9uZW50LCB3ZSBoYXZlIHRvIHVzZSAndGhpcy5wcm9wcycgaW5zdGVhZCBvZiBqdXN0IHByb3BzXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBBZGRpZ24gc3RhdGUgaGVyZSBkdXJpbmcgb25TaG93Q2xpY2soKSBldmVudFxuICAgIHN0YXRlID0ge1xuICAgICAgICAvLyBJZiBjbGljaywgc2hvdyBpbmZvXG4gICAgICAgIHNob3dDb250YWN0SW5mbzogZmFsc2VcbiAgICB9O1xuXG4gICAgLy8gQWRkIHRoaXMgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIHRoZSBwcm9wZXJ0aWVzXG4gICAgb25EZWxldGVDbGljayA9IGFzeW5jIChpZCwgZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlXG4gICAgICAgIChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7aWR9YCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFX0NPTlRBQ1RcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IGlkXG4gICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFX0NPTlRBQ1RcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHBob25lIH0gPSB0aGlzLnByb3BzLmNvbnRhY3Q7IC8vIFdlIGNhbiBleHRyYWN0IHZhbHVlIG91dCBvZiBwcm9wcywgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIGluICd0aGlzLnByb3BzJyBlYWNoIHRpbWVcbiAgICAgICAgY29uc3QgeyBzaG93Q29udGFjdEluZm8gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIFlvdSBuZWVkIGEgQ29uc3VtZXIgdG8gYWNjZXNzIHRoZSBzdHVmZiBmcm9tIGNvbnRleHQuanNcbiAgICAgICAgICAgIDxDb25zdW1lcj5cbiAgICAgICAgICAgICAgICB7dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBQdWxsaW5nIG91dCBkaXNwYXRjaCgpIGZyb20gdGhlIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29udGFjdEluZm86ICF0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvd0NvbnRhY3RJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zb3J0LWRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3Rlcm4gdG8gZGVsZXRlIHdoZW4gaWNvbiBpcyBjbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkRlbGV0ZUNsaWNrLmJpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Bjb250YWN0L2VkaXQvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5jaWwtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzFyZW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93Q29udGFjdEluZm8gPyAoIC8vIElmIHRoaXMgaXMgdHJ1ZTsgc2hvdyB0aGUgY29udGVudCwgaWYgJ251bGwnIHRoZW4gaGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsOiB7ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBob25lOiB7cGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvQ29uc3VtZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Db250YWN0LnByb3BUeXBlcyA9IHtcbiAgICBjb250YWN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5pbXBvcnQgeyBDb25zdW1lciB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcblxuLy8gV2UgdXNlIGNsYXNzIGJhc2UgY29tcG9uZW50IGJlY2F1c2Ugd2Ugd2FudCB0byB1c2UgJ3N0YXRlJ1xuY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25zdW1lcj5cbiAgICAgICAgICAgICAgICB7dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZXN0cnVjdHVyaW5nIGNvbnRhY3RzLCBhc3NpZ24gdG8gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjb250YWN0cyB9ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGcmFnbWVudHMgcmVtb3ZlcyB1bmNlc3NhcnkgZWxlbWVudHMgeW91IGRvbid0IG5lZWQsIGhlcmUgd2UgdGFrZSBvdXQgdGhlIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+Q29udGFjdDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250YWN0cy5tYXAoY29udGFjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250YWN0IGtleT17Y29udGFjdC5pZH0gY29udGFjdD17Y29udGFjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvQ29uc3VtZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnN1bWVyIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IFRleHRJbnB1dEdyb3VwIGZyb20gXCIuLi9sYXlvdXQvVGV4dElucHV0R3JvdXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgQWRkQ29udGFjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgLy8gQ3JlYXRlIGFuIGVycm9yIG9iamVjdCB0byBjYXRjaCBhbmQgc2VuZCBtZXNzYWdlIG9mIGVycm9yXG4gICAgICAgIGVycm9yczoge31cbiAgICB9O1xuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke2lkfWApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSByZXMuZGF0YTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGNvbnRhY3QubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBjb250YWN0LmVtYWlsLFxuICAgICAgICAgICAgcGhvbmU6IGNvbnRhY3QucGhvbmVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jIChkaXNwYXRjaCwgZSkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIHdlIGRvbid0IHdhbnQgdG8gYWN0dWFsbHkgc3VibWl0IGJ5IGRlZmF1bHRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBFcnJvcnNcbiAgICAgICAgaWYgKG5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzOiB7IG5hbWU6ICdOYW1lIGlzIHJlcXVpcmVkJyB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVtYWlsID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yczogeyBlbWFpbDogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBob25lID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yczogeyBwaG9uZTogJ1Bob25lIGlzIHJlcXVpcmVkJyB9IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHVwZENvbnRhY3QgPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwaG9uZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2Ugd2FudCB0byBwdWxsIHRoZSBpZCBvdXQgb2YgdGhlIHVybCBlLmcuIGxvY2FsaG9zdDozMDAwL2NvbnRhY3QvZWRpdC8xXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuXG4gICAgICAgIC8vIFVzZSBhd2FpdCBiZWNhdXNlIG9mIHRoZSBhc3luYywgdGhlbiBzZW5kIG91ciB1cGRDb250YWN0IHBheWxvYWRcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtpZH1gLCB1cGRDb250YWN0KTtcblxuICAgICAgICAvLyBVc2UgdGhlIGRpc3BhdGNoIG1ldGhvZCB0byB1cGRhdGUgY29udGFjdCwgYW5kIHBhc3MgaW4gdGhlIHBheWxvYWQuZGF0YSBhYm92ZVxuICAgICAgICBkaXNwYXRjaCh7dHlwZTonVVBEQVRFX0NPTlRBQ1QnLCBwYXlsb2FkOiByZXMuZGF0YX0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2xlYXIgU3RhdGVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBwaG9uZTogXCJcIixcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgIH07XG5cbiAgICBvbkNoYW5nZSA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBEZXN0cnVjdHVyaW5nIHRvIGV4dHJhdCBrZXkgaW4gc3RhdGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBob25lLCBlcnJvcnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb25zdW1lcj5cbiAgICAgICAgICAgICAgICB7dmFsdWUgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5FZGl0IENvbnRhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRWRpdCBDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Db25zdW1lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZENvbnRhY3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIC5jcmVhdGVDb250ZXh0IGZvciBvdXIgZ2xvYmFsIHN0YXRlIG1hbmFnZW1lbnQgcmF0aGVyIHRoYW4gZWFjaCBpbmRpdmlkdWFsIGNvbXBvZW50c1xuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuLy8gJ2FjdGlvbicgd2lsbCBiZSBhbiBvYmplY3QsIGFuZCBpdCB3aWxsIGJlIGEgdHlwZTsgc28gdGhhdCB0eXBlIHdlIHdhbnQgdG8gYmUgZXZhbHVhdGVkXG4vLyByZWR1Y2VyIHRvIGV2YWx1YXRlIHRoZSBhY3Rpb24gdHlwZVxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiREVMRVRFX0NPTlRBQ1RcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gdGFrZSB0aGUgZXhpc3Rpbmcgc3RhdGUsIHVzaW5nIHNwcmVhZCBvcGVyYXRpb3JcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgLy8gZmlsdGVyIG91dCB0aGUgY29udGFjdCB0aGF0IG5lZWRzIHRvIGJlIGZpbHRlcmVkIG91dFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzOiBzdGF0ZS5jb250YWN0cy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3QgLy8gcGF5bG9hZCBpcyBqdXN0IHNvbWUgZGF0YSB3ZSB3YW50IHRvIHNlbmQgYWxvbmcgd2l0aCBvdXIgYWN0aW9uLCBzZW5kaW5nICdpZCcgYXMgdGhlIHBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgKSA9PiBjb250YWN0LmlkICE9PSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJBRERfQ09OVEFDVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyB0YWtlIHRoZSBleGlzdGluZyBzdGF0ZSwgdXNpbmcgc3ByZWFkIG9wZXJhdGlvclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCAvLyBmaWx0ZXIgb3V0IHRoZSBjb250YWN0IHRoYXQgbmVlZHMgdG8gYmUgZmlsdGVyZWQgb3V0XG4gICAgICAgICAgICAgICAgLy8gVGFrZSAnY29udGFjdHMnIHdoaWNoIGlzIHRoZSBhcnJheSBvZiBvXG4gICAgICAgICAgICAgICAgY29udGFjdHM6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuY29udGFjdHNdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiVVBEQVRFX0NPTlRBQ1RcIjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgY29udGFjdHM6IHN0YXRlLmNvbnRhY3RzLm1hcChjb250YWN0ID0+IFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCBcbiAgICAgICAgICAgICAgICAgICAgPyAoY29udGFjdCA9IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnRhY3RcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBoYXZlIG91ciBnbG9iYWwgc3RhdGVcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY29udGFjdHM6IFtdLFxuICAgICAgICAvLyBXaGVuIHdlIGhhdmUgYSBjb25zdW1lciwgaXQgY29uc3VtZSB0aGVpciBlbnRpcmUgc3RhdGUgYmVjYXVzZSB0aGF0J3Mgd2hhdCB3ZSdyZSBwYXNzaW5nIGluLlxuICAgICAgICAvLyBXZSBzaG91bGQgYmUgYWJsZSB0byBhY2Nlc3MgJ2Rpc3BhdGNoJyBhbnl3aGVyZVxuICAgICAgICBkaXNwYXRjaDogYWN0aW9uID0+IHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSlcbiAgICB9O1xuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udGFjdHM6IHJlcy5kYXRhIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gV2UgcGFzcyBpbiB0aGUgZW50aXJlIHN0YXRlIHNvIHdlIGNhbiB1c2UgaXQgYW55d2hlcmUgaW4gb3VyIGFwcCwgaW5jbHVkaW5nIHByb3BzIGFuZCBmdW5jdGlvbnNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIFdlIHRoZW4gZXhwb3J0IGEgJ2NvbnN1bWVyJywgYmVjYXVzZSB3ZSBoYXZlIGEgJ3Byb3ZpZGVyJyBzbyBjb25zdW1lciBjYW4gYWNjZXNzIHN0YXRlXG5leHBvcnQgY29uc3QgQ29uc3VtZXIgPSBDb250ZXh0LkNvbnN1bWVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uYWwgY29tcG9uZW50LCB3ZSBjYW4ganVzdCB1c2UgJ3Byb3BzJ1xuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4ge1xuICAgIC8vIFVzaW5nIGRlc3RydWN0cnVpbmcgdG8gaGF2aW5nIHRvIHBhc3MgaW4gJ3Byb3BzJyBlYWNoIHRpbWUgZHVyaW5nIHRoZSByZXR1cm5cbiAgICBjb25zdCB7IGJyYW5kaW5nIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci1kYXJrIGJnLWRhbmdlciBtYi0zIHB5LTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAge2JyYW5kaW5nfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaG9tZVwiIC8+IEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY29udGFjdC9hZGRcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIC8+IEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1xdWVzdGlvblwiIC8+IEFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICApO1xufTtcblxuLy8gVHlwaW5nIGNoZWNraW5nIG91ciBwcm9wc1xuSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAvLyBEZWFmdWx0IHZhbHVlIGlmIGJyYW5kaW5nIHByb3BzIGlzIG1pc3NpbmdcbiAgICBicmFuZGluZzogXCJNeSBBcHBcIlxufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgICAvLyBDaGVja3QgaWYgYnJhbmRpbmcgaXMgYSBzdHJpbmcsIGFuZCByZXF1aXJlZFxuICAgIGJyYW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbi8vIERlc3RydWN0dXJlIGhlcmUsIHNvIHdlIGRvbid0IGhhdmUgdG8gdHlwZSBwcm9wcy4uLi4gZWFjaCB0aW1lXG5jb25zdCBUZXh0SW5wdXRHcm91cCA9ICh7XG4gICAgbGFiZWwsXG4gICAgbmFtZSxcbiAgICB2YWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0eXBlLFxuICAgIG9uQ2hhbmdlLFxuICAgIGVycm9yXG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBlcnJvclxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLy8gV2lsbCBub3QgYmUgYWJsZSB0byB0eXBlIGluIGlucHV0IGZpZWxkLCB1bnRpbCB0aGVyZSBpcyBhbiBvbkNoYW5nZSgpIGV2ZW50LCBiZWNhdXNlIGluaXRpYWwgc3RhdGUgaXMgaW1tdXRhYmxlXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSAvLyBVc2Ugb25DaGFuZ2UgcHJvcGVydHkgdG8gYW5kIG9iamVjdCB0byBwYXNzIHRoZSBmdW5jdGlvbiB0byBjaGFuZ2Ugc3RhdGVcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcn08L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5UZXh0SW5wdXRHcm91cC5wcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVGV4dElucHV0R3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6IFwidGV4dFwiXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRHcm91cDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+QWJvdXQgQ29udGFjdCBNYW5hZ2VyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5TaW1wbGUgYXBwIHRvIG1hbmFnZSBjb250YWN0czwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+VmVyc2lvbiAxLjAuMDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+NDA0PC9zcGFuPiBQYWdlIE5vdCBGb3VuZFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5Tb3JyeSwgdGhhdCBwYWdlIGRvZXMgbm90IGV4aXN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ29udGFjdHMgZnJvbSBcIi4uL2NvbnRhY3RzL0NvbnRhY3RzXCI7XG5pbXBvcnQgQWRkQ29udGFjdCBmcm9tIFwiLi4vY29udGFjdHMvQWRkQ29udGFjdFwiO1xuaW1wb3J0IEVkaXRDb250YWN0IGZyb20gXCIuLi9jb250YWN0cy9FZGl0Q29udGFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vbGF5b3V0L0hlYWRlclwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9BYm91dFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLi9wYWdlcy9Ob3RGb3VuZFwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4uL3Rlc3QvVGVzdFwiO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcblxuXG5cbmNsYXNzIFBydWIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIFdlIHdyYXAgZXZlcnl0aGluZyBpbiB0aGUgcHJvdmlkZXIgZHVlIHRvIGdsb2JhbCBzdGF0ZVxuICAgICAgICAgICAgPFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBicmFuZGluZz1cIkNvbnRhY3QgTWFuYWdlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17Q29udGFjdHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4YWN0IHBhdGg9XCIvY29udGFjdC9hZGRcIiBjb21wb25lbnQ9e0FkZENvbnRhY3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4YWN0IHBhdGg9XCIvY29udGFjdC9lZGl0LzppZFwiIGNvbXBvbmVudD17RWRpdENvbnRhY3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4YWN0IHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBleGFjdCBwYXRoPVwiL3Rlc3RcIiBjb21wb25lbnQ9e1Rlc3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcnViO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGVzdDogXCJcIixcbiAgICAgICAgYm9keTogXCJcIlxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YS5ib2R5XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudFdpbGxNb3VudC4uLlwiKTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50RGlkVXBkYXRlLi4uXCIpO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLi4uXCIpO1xuICAgIC8vIH1cblxuICAgIC8vIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIHRlc3Q6IFwic29tZXRoaW5nXCJcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9XG5cbiAgICAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiBnZXRTbmFwU2hvdEJlZm9yZVVwZGF0ZS4uLlwiKTtcbiAgICAvLyB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGJvZHkgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57Ym9keX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkL0xheW91dCc7XHJcbmltcG9ydCBUYXNrTSBmcm9tICcuLi9jb21wb25lbnRzL1Rhc2tNL1Rhc2tNJztcclxuLy9pbXBvcnQgU3R1ZGVudFBvcnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleCc7XHJcbmltcG9ydCBQcnViIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3L3BydWIvcHJ1YidcclxuXHJcbmNvbnN0IE1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxQcnViPjwvUHJ1Yj5cclxuICAgICAgICAgICAgey8qIDxTdHVkZW50UG9ydGFsPjwvU3R1ZGVudFBvcnRhbD4gKi99XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXIiXSwic291cmNlUm9vdCI6IiJ9