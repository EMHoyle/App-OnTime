webpackHotUpdate("static\\development\\pages\\manager.js",{

/***/ "./components/TaskM/TaskM.js":
false,

/***/ "./components/crud/features/modal/index.js":
/*!*************************************************!*\
  !*** ./components/crud/features/modal/index.js ***!
  \*************************************************/
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
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ "./components/crud/features/modal/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Maria Elena\\Desktop\\Programaci\xF3n\\Bluuweb\\Next\\ontime\\components\\crud\\features\\modal\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Mdl = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Mdl, _React$Component);

  var _super = _createSuper(Mdl);

  function Mdl() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mdl);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mdl, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "modal_cont ".concat(this.props.isOpen ? "db" : "dn"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "mdl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 25
        }
      }, this.props.editable ? "Edit Student" : "Add Student")), __jsx("form", {
        action: "",
        method: "POST",
        onSubmit: this.props.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "cont_body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 29
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }
      }, "Title"), __jsx("input", {
        type: "text",
        name: "title",
        className: "form-control",
        value: this.props.title,
        onChange: this.props.changeHandler,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "form-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 29
        }
      }, __jsx("label", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      }, "Body"), __jsx("textarea", {
        name: "body",
        className: "form-control",
        onChange: this.props.changeHandler,
        value: this.props.body,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, __jsx("button", {
        type: "button",
        style: {
          backgroundColor: "#c34646"
        },
        onClick: this.props.close,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      }, "Close"), __jsx("button", {
        type: "submit",
        style: {
          backgroundColor: "#358835"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }
      }, this.props.editable ? "Edit" : "Add")))));
    }
  }]);

  return Mdl;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Mdl);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/crud/features/modal/style.module.css":
/*!*********************************************************!*\
  !*** ./components/crud/features/modal/style.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/features/modal/style.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/features/modal/style.module.css",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/features/modal/style.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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

/***/ "./components/crud/main/styles.module.css":
/*!************************************************!*\
  !*** ./components/crud/main/styles.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/main/styles.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/main/styles.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/main/styles.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
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

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

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

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/create-react-context/lib/index.js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/features/modal/style.module.css":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/crud/features/modal/style.module.css ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".style_modal_cont__RQQtr{\r\n    background-color: #000000b0;\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n}\r\n\r\n.style_modal_cont__RQQtr .style_mdl__waQIi{\r\n    width: 600px;\r\n    background-color: white;\r\n    padding: 30px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%,-50%);\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 44px 5px black;\r\n}\r\n.style_footer__1ixTL{\r\n    text-align: right\r\n}\r\n.style_footer__1ixTL button{\r\n    background-color: gray;\r\n    border: 0;\r\n    outline: 0;\r\n    padding: 8px 19px;\r\n    margin: 0 0px 0 10px;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    letter-spacing: 3px;\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n}\r\n.style_dn__2YACC{display: none}\r\n.style_db__3fiON{display: block}\r\n", "",{"version":3,"sources":["C:/Users/Maria Elena/Desktop/Programación/Bluuweb/Next/ontime/components/crud/features/modal/style.module.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,eAAe;IACf,WAAW;IACX,OAAO;IACP,MAAM;IACN,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,+BAA+B;IAC/B,kBAAkB;IAClB,kCAAkC;AACtC;AACA;IACI;AACJ;AACA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA,iBAAI,aAAa;AACjB,iBAAI,cAAc","file":"style.module.css","sourcesContent":[".modal_cont{\r\n    background-color: #000000b0;\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n}\r\n\r\n.modal_cont .mdl{\r\n    width: 600px;\r\n    background-color: white;\r\n    padding: 30px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%,-50%);\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 44px 5px black;\r\n}\r\n.footer{\r\n    text-align: right\r\n}\r\n.footer button{\r\n    background-color: gray;\r\n    border: 0;\r\n    outline: 0;\r\n    padding: 8px 19px;\r\n    margin: 0 0px 0 10px;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    letter-spacing: 3px;\r\n    border-radius: 5px;\r\n    font-weight: 400;\r\n}\r\n.dn{display: none}\r\n.db{display: block}\r\n"]}]);
// Exports
exports.locals = {
	"modal_cont": "style_modal_cont__RQQtr",
	"mdl": "style_mdl__waQIi",
	"footer": "style_footer__1ixTL",
	"dn": "style_dn__2YACC",
	"db": "style_db__3fiON"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/crud/main/styles.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/crud/main/styles.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".styles_portal_list__1MwOP {\r\n    width: 550px;\r\n    margin: 0 auto;\r\n    border: 1px solid #b1b1b1;\r\n    padding: 30px;\r\n    float: left;\r\n}\r\n.styles_pcontainer__2o64q{\r\n    width: 1111px;\r\n    margin: 0 auto;\r\n}\r\n.styles_basicForm__1M6oB {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n    border: 1px solid #a4a4a4;\r\n    padding: 20px;\r\n    margin-top: 40px;\r\n    float: left;\r\n    margin-right: 53px;\r\n}\r\n.styles_main_portal__3SqJl {\r\n    width: 80%;\r\n    margin: 100px auto;\r\n}\r\n\r\n.styles_grid_view__3ZH8t h6{margin: 0;background-color: #e8e1b1;\r\n    display: inline-block;\r\n    padding: 0 4px;}\r\n    .styles_form__1rWwW h3,\r\n.styles_table_view__3Pepl h3,\r\n.styles_list_view__ZC-ub h3,\r\n.styles_grid_view__3ZH8t h3{margin-bottom: 30px;}\r\n.styles_grid_view__3ZH8t .styles_item__QoyML{\r\n    border: 1px solid #c7c7c7;\r\n    padding: 10px;\r\n    margin-bottom: 30px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.styles_grid_view__3ZH8t .styles_item__QoyML h5{margin: 0;}\r\n\r\n.styles_grid_view__3ZH8t .styles_profile_img__361Re{\r\n    position: absolute;\r\n    right: 0;\r\n    width: 100px;\r\n    height: auto;\r\n    top: 0;\r\n}\r\n\r\n\r\n/* .list_view {}\r\n.list_view p{margin: 0;}\r\n.list_view {}\r\n.list_view {}\r\n.list_view {} */\r\n\r\n.styles_search__2Czt4 {margin: 15px;\r\n    padding: 3px 10px;\r\n    width: 34%;\r\n    position: absolute;\r\n    right: 14px;}\r\n@media (max-width: 600px) {\r\n    .styles_main_portal__3SqJl {\r\n        width: 100%;\r\n    }\r\n    .styles_form__1rWwW{padding: 0 40px;}\r\n}\r\n\r\n.styles_Page__1fWdL.styles_navigation__1NFt_ {\r\n    margin-top: 22px;\r\n    float: right;\r\n    padding-right: 16px;\r\n}", "",{"version":3,"sources":["C:/Users/Maria Elena/Desktop/Programación/Bluuweb/Next/ontime/components/crud/main/styles.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,WAAW;AACf;AACA;IACI,aAAa;IACb,cAAc;AAClB;AACA;IACI,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA,4BAAc,SAAS,CAAC,yBAAyB;IAC7C,qBAAqB;IACrB,cAAc,CAAC;IACf;;;4BAGU,mBAAmB,CAAC;AAClC;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA,gDAAoB,SAAS,CAAC;;AAE9B;IACI,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,MAAM;AACV;;;AAGA;;;;eAIe;;AAEf,uBAAS,YAAY;IACjB,iBAAiB;IACjB,UAAU;IACV,kBAAkB;IAClB,WAAW,CAAC;AAChB;IACI;QACI,WAAW;IACf;IACA,oBAAM,eAAe,CAAC;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;AACvB","file":"styles.module.css","sourcesContent":[".portal_list {\r\n    width: 550px;\r\n    margin: 0 auto;\r\n    border: 1px solid #b1b1b1;\r\n    padding: 30px;\r\n    float: left;\r\n}\r\n.pcontainer{\r\n    width: 1111px;\r\n    margin: 0 auto;\r\n}\r\n.basicForm {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n    border: 1px solid #a4a4a4;\r\n    padding: 20px;\r\n    margin-top: 40px;\r\n    float: left;\r\n    margin-right: 53px;\r\n}\r\n.main_portal {\r\n    width: 80%;\r\n    margin: 100px auto;\r\n}\r\n\r\n.grid_view h6{margin: 0;background-color: #e8e1b1;\r\n    display: inline-block;\r\n    padding: 0 4px;}\r\n    .form h3,\r\n.table_view h3,\r\n.list_view h3,\r\n.grid_view h3{margin-bottom: 30px;}\r\n.grid_view .item{\r\n    border: 1px solid #c7c7c7;\r\n    padding: 10px;\r\n    margin-bottom: 30px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.grid_view .item h5{margin: 0;}\r\n\r\n.grid_view .profile_img{\r\n    position: absolute;\r\n    right: 0;\r\n    width: 100px;\r\n    height: auto;\r\n    top: 0;\r\n}\r\n\r\n\r\n/* .list_view {}\r\n.list_view p{margin: 0;}\r\n.list_view {}\r\n.list_view {}\r\n.list_view {} */\r\n\r\n.search {margin: 15px;\r\n    padding: 3px 10px;\r\n    width: 34%;\r\n    position: absolute;\r\n    right: 14px;}\r\n@media (max-width: 600px) {\r\n    .main_portal {\r\n        width: 100%;\r\n    }\r\n    .form{padding: 0 40px;}\r\n}\r\n\r\n.Page.navigation {\r\n    margin-top: 22px;\r\n    float: right;\r\n    padding-right: 16px;\r\n}"]}]);
// Exports
exports.locals = {
	"portal_list": "styles_portal_list__1MwOP",
	"pcontainer": "styles_pcontainer__2o64q",
	"basicForm": "styles_basicForm__1M6oB",
	"main_portal": "styles_main_portal__3SqJl",
	"grid_view": "styles_grid_view__3ZH8t",
	"form": "styles_form__1rWwW",
	"table_view": "styles_table_view__3Pepl",
	"list_view": "styles_list_view__ZC-ub",
	"item": "styles_item__QoyML",
	"profile_img": "styles_profile_img__361Re",
	"search": "styles_search__2Czt4",
	"Page": "styles_Page__1fWdL",
	"navigation": "styles_navigation__1NFt_"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/deep-equal/index.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/es-abstract/GetIntrinsic.js":
false,

/***/ "./node_modules/es-abstract/helpers/callBind.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/has-symbols/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/is-arguments/index.js":
false,

/***/ "./node_modules/is-date-object/index.js":
false,

/***/ "./node_modules/is-regex/index.js":
false,

/***/ "./node_modules/object-is/implementation.js":
false,

/***/ "./node_modules/object-is/index.js":
false,

/***/ "./node_modules/object-is/polyfill.js":
false,

/***/ "./node_modules/object-is/shim.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/react-transition-group/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/Transition.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/index.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./node_modules/reactstrap/es/Alert.js":
false,

/***/ "./node_modules/reactstrap/es/Badge.js":
false,

/***/ "./node_modules/reactstrap/es/Breadcrumb.js":
false,

/***/ "./node_modules/reactstrap/es/BreadcrumbItem.js":
false,

/***/ "./node_modules/reactstrap/es/Button.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonGroup.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonToggle.js":
false,

/***/ "./node_modules/reactstrap/es/ButtonToolbar.js":
false,

/***/ "./node_modules/reactstrap/es/Card.js":
false,

/***/ "./node_modules/reactstrap/es/CardBody.js":
false,

/***/ "./node_modules/reactstrap/es/CardColumns.js":
false,

/***/ "./node_modules/reactstrap/es/CardDeck.js":
false,

/***/ "./node_modules/reactstrap/es/CardFooter.js":
false,

/***/ "./node_modules/reactstrap/es/CardGroup.js":
false,

/***/ "./node_modules/reactstrap/es/CardHeader.js":
false,

/***/ "./node_modules/reactstrap/es/CardImg.js":
false,

/***/ "./node_modules/reactstrap/es/CardImgOverlay.js":
false,

/***/ "./node_modules/reactstrap/es/CardLink.js":
false,

/***/ "./node_modules/reactstrap/es/CardSubtitle.js":
false,

/***/ "./node_modules/reactstrap/es/CardText.js":
false,

/***/ "./node_modules/reactstrap/es/CardTitle.js":
false,

/***/ "./node_modules/reactstrap/es/Carousel.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselCaption.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselControl.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselIndicators.js":
false,

/***/ "./node_modules/reactstrap/es/CarouselItem.js":
false,

/***/ "./node_modules/reactstrap/es/Col.js":
false,

/***/ "./node_modules/reactstrap/es/Collapse.js":
false,

/***/ "./node_modules/reactstrap/es/Container.js":
false,

/***/ "./node_modules/reactstrap/es/CustomFileInput.js":
false,

/***/ "./node_modules/reactstrap/es/CustomInput.js":
false,

/***/ "./node_modules/reactstrap/es/Dropdown.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownContext.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownItem.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownMenu.js":
false,

/***/ "./node_modules/reactstrap/es/DropdownToggle.js":
false,

/***/ "./node_modules/reactstrap/es/Fade.js":
false,

/***/ "./node_modules/reactstrap/es/Form.js":
false,

/***/ "./node_modules/reactstrap/es/FormFeedback.js":
false,

/***/ "./node_modules/reactstrap/es/FormGroup.js":
false,

/***/ "./node_modules/reactstrap/es/FormText.js":
false,

/***/ "./node_modules/reactstrap/es/Input.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroup.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupAddon.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/InputGroupText.js":
false,

/***/ "./node_modules/reactstrap/es/Jumbotron.js":
false,

/***/ "./node_modules/reactstrap/es/Label.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroup.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItem.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItemHeading.js":
false,

/***/ "./node_modules/reactstrap/es/ListGroupItemText.js":
false,

/***/ "./node_modules/reactstrap/es/Media.js":
false,

/***/ "./node_modules/reactstrap/es/Modal.js":
false,

/***/ "./node_modules/reactstrap/es/ModalBody.js":
false,

/***/ "./node_modules/reactstrap/es/ModalFooter.js":
false,

/***/ "./node_modules/reactstrap/es/ModalHeader.js":
false,

/***/ "./node_modules/reactstrap/es/Nav.js":
false,

/***/ "./node_modules/reactstrap/es/NavItem.js":
false,

/***/ "./node_modules/reactstrap/es/NavLink.js":
false,

/***/ "./node_modules/reactstrap/es/Navbar.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarBrand.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarText.js":
false,

/***/ "./node_modules/reactstrap/es/NavbarToggler.js":
false,

/***/ "./node_modules/reactstrap/es/Pagination.js":
false,

/***/ "./node_modules/reactstrap/es/PaginationItem.js":
false,

/***/ "./node_modules/reactstrap/es/PaginationLink.js":
false,

/***/ "./node_modules/reactstrap/es/Popover.js":
false,

/***/ "./node_modules/reactstrap/es/PopoverBody.js":
false,

/***/ "./node_modules/reactstrap/es/PopoverHeader.js":
false,

/***/ "./node_modules/reactstrap/es/PopperContent.js":
false,

/***/ "./node_modules/reactstrap/es/PopperTargetHelper.js":
false,

/***/ "./node_modules/reactstrap/es/Portal.js":
false,

/***/ "./node_modules/reactstrap/es/Progress.js":
false,

/***/ "./node_modules/reactstrap/es/Row.js":
false,

/***/ "./node_modules/reactstrap/es/Spinner.js":
false,

/***/ "./node_modules/reactstrap/es/TabContent.js":
false,

/***/ "./node_modules/reactstrap/es/TabContext.js":
false,

/***/ "./node_modules/reactstrap/es/TabPane.js":
false,

/***/ "./node_modules/reactstrap/es/Table.js":
false,

/***/ "./node_modules/reactstrap/es/Toast.js":
false,

/***/ "./node_modules/reactstrap/es/ToastBody.js":
false,

/***/ "./node_modules/reactstrap/es/ToastHeader.js":
false,

/***/ "./node_modules/reactstrap/es/Tooltip.js":
false,

/***/ "./node_modules/reactstrap/es/TooltipPopoverWrapper.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledAlert.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledButtonDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledCarousel.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledCollapse.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledDropdown.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledPopover.js":
false,

/***/ "./node_modules/reactstrap/es/UncontrolledTooltip.js":
false,

/***/ "./node_modules/reactstrap/es/index.js":
false,

/***/ "./node_modules/reactstrap/es/polyfill.js":
false,

/***/ "./node_modules/reactstrap/es/utils.js":
false,

/***/ "./node_modules/regexp.prototype.flags/implementation.js":
false,

/***/ "./node_modules/regexp.prototype.flags/index.js":
false,

/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
false,

/***/ "./node_modules/regexp.prototype.flags/shim.js":
false,

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvZmVhdHVyZXMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jcnVkL2ZlYXR1cmVzL21vZGFsL3N0eWxlLm1vZHVsZS5jc3M/ZmQwMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NydWQvbWFpbi9zdHlsZXMubW9kdWxlLmNzcz85ZDNmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3J1ZC9mZWF0dXJlcy9tb2RhbC9zdHlsZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3J1ZC9tYWluL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hbmFnZXIuanMiXSwibmFtZXMiOlsiTWRsIiwicHJvcHMiLCJpc09wZW4iLCJlZGl0YWJsZSIsImhhbmRsZVN1Ym1pdCIsInRpdGxlIiwiY2hhbmdlSGFuZGxlciIsImJvZHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbG9zZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVVJMIiwiU3R1ZGVudFBvcnRhbCIsInBvc3QiLCJpc01vZGFsT3BlbiIsImVkaXRhYmxlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwicG9zdHQiLCJmaW5kIiwiaWQiLCJzZXRTdGF0ZSIsIkF4aW9zIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsInVzZXJJZCIsImxlbmd0aCIsImVycm9yIiwiZmlsdGVyIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaXNTdWJtaXRhYmxlIiwiZ2V0IiwiZGF0YSIsIm1vZGFsSGFuZGxlciIsInBvc2l0aW9uIiwibW9kYWxDbG9zZUhhbmRsZXIiLCJjcmVhdGVQb3N0IiwibWFwIiwiaW5keCIsImhhbmRsZURlbGV0ZSIsIk1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFLTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFFTTtBQUNKLGFBQ0k7QUFBSyxpQkFBUyx1QkFBZ0IsS0FBS0MsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLElBQXBCLEdBQTJCLElBQTNDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNbUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixTQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSCxDQU5EOztLQUFNQSxPO0FBUVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYW5hZ2VyLmpzLjZiYzA3OWExMDg0ZTdiOGQwNjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuICBcclxuY2xhc3MgTWRsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsX2NvbnQgJHt0aGlzLnByb3BzLmlzT3BlbiA/IFwiZGJcIiA6IFwiZG5cIn1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmVkaXRhYmxlID8gXCJFZGl0IFN0dWRlbnRcIiA6IFwiQWRkIFN0dWRlbnRcIn08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250X2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Qm9keTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhICBuYW1lPVwiYm9keVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUhhbmRsZXJ9IHZhbHVlPXt0aGlzLnByb3BzLmJvZHl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiNjMzQ2NDZcIn19IG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9PkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMzU4ODM1XCJ9fT57dGhpcy5wcm9wcy5lZGl0YWJsZSA/IFwiRWRpdFwiIDogXCJBZGRcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gZXhwb3J0IGRlZmF1bHQgTWRsOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3N0eWxlLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3N0eWxlLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zdHlsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcclxuLy8gaW1wb3J0IEFQSSBmcm9tICdhcGknO1xyXG5pbXBvcnQgJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgTWRsIGZyb20gJy4uL2ZlYXR1cmVzL21vZGFsJ1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS8nXHJcblxyXG5cclxuY2xhc3MgU3R1ZGVudFBvcnRhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7IFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcG9zdDogW10sXHJcbiAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgYm9keTogXCJcIixcclxuICAgICAgICBpc01vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlUG9zdDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQXhpb3MuZ2V0KFVSTCtcInBvc3RzXCIpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7cG9zdDogcmVzLmRhdGF9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBvc3QgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLGJvZHkscG9zdH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmVkaXRhYmxlKXtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtwb3N0fSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3R0ID0gcG9zdC5maW5kKHBvc3QgPT4gcG9zdC5pZCA9PT0gdGhpcy5zdGF0ZS5lZGl0YWJsZVBvc3QpO1xyXG4gICAgICAgICAgICBwb3N0dC50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICBwb3N0dC5ib2R5ID0gYm9keTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdHQsdGl0bGU6XCJcIixib2R5OlwiXCIsZWRpdGFibGU6ZmFsc2UsZWRpdGFibGVQb3N0Om51bGwsaXNNb2RhbE9wZW46ZmFsc2V9KTsgXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQXhpb3MucG9zdChVUkwrXCJwb3N0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gWy4uLnBvc3QsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcG9zdFtwb3N0Lmxlbmd0aCAtIDFdLmlkICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb3N0W3Bvc3QubGVuZ3RoIC0gMV0uaWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdDogcG9zdHMsIHRpdGxlOlwiXCIsYm9keTpcIlwiLGlzTW9kYWxPcGVuOmZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3Blbn0pXHJcblxyXG5cclxuICAgICAgICAvLyBjb25zdCB7c3R1ZGVudHN9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAvLyBjb25zdCBzdHVkZW50ID0gc3R1ZGVudHMuZmluZChzdHVkZW50ID0+IHN0dWRlbnQuaWQgPT09IGlkKTtcclxuICAgICAgICAvLyBzdHVkZW50Lm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIC8vIHN0dWRlbnQuZGVwdCA9IGRlcHQ7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7c3R1ZGVudHN9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlID0gaWQgPT4ge1xyXG5cclxuICAgICAgICBBeGlvcy5kZWxldGUoVVJMK1wicG9zdHMvXCIraWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMuc3RhdGUucG9zdC5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9IGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3N0fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcblxyXG4gICAgICAgIC8vIEF4aW9zLmRlbGV0ZSgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzEnLCB7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgPSBlID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsSGFuZGxlciA9IChpc1N1Ym1pdGFibGUsaWQpID0+IHtcclxuICAgICAgICAvLyBpZiBpc1N1Ym1pdGFibGUgPT0gMSB0aGVuIFN1Ym1pdGFibGVcclxuICAgICAgICAvLyBpZiBpc1N1Ym1pdGFibGUgPT0gMiB0aGVuIEVkaXRhYmxlXHJcbiAgICAgICAgaWYoaXNTdWJtaXRhYmxlID09IDIpe1xyXG4gICAgICAgICAgICBjb25zdCB7cG9zdH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0dCA9IHBvc3QuZmluZChwb3N0ID0+IHBvc3QuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuLGVkaXRhYmxlOnRydWUsZWRpdGFibGVQb3N0OmlkLHRpdGxlOnBvc3R0LnRpdGxlLGJvZHk6cG9zdHQuYm9keX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9kYWxPcGVuOiAhdGhpcy5zdGF0ZS5pc01vZGFsT3BlbixlZGl0YWJsZTpmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbW9kYWxDbG9zZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2RhbE9wZW46ICF0aGlzLnN0YXRlLmlzTW9kYWxPcGVuLGVkaXRhYmxlOmZhbHNlLGVkaXRhYmxlUG9zdDpudWxsLHRpdGxlOlwiXCIsYm9keTpcIlwifSkgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgICAgIC8vICAgICA8aDM+T25saW5lIHBvc3RzPC9oMz5cclxuICAgICAgICAgICAgLy8gICAgIDx1bD5cclxuICAgICAgICAgICAgLy8gICAgICAgICB7dGhpcy5zdGF0ZS5zdHVkZW50Lm1hcCgoe3RpdGxlLGlkfSkgPT4gPGxpIGtleT17aWR9Pnt0aXRsZX08L2xpPil9XHJcbiAgICAgICAgICAgIC8vICAgICA8L3VsPlxyXG4gICAgICAgICAgICAvLyA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9wb3J0YWxcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB2aXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIG9uQ2xpY2s9eygpID0+IHRoaXMubW9kYWxIYW5kbGVyKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiBcImZpeGVkXCJ9fT5BZGQgUG9zdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVWaWV3Q2hhbmdlKFwiMVwiKX0gY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3ZpZXdTdGF0dXMgPT09IFwiMVwiID8gXCJzdWNjZXNzXCIgOiBcImluZm9cIn0gbXItMmB9Pkxpc3QgVmlldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVZpZXdDaGFuZ2UoXCIyXCIpfSBjbGFzc05hbWU9e2BidG4gYnRuLSR7dmlld1N0YXR1cyA9PT0gXCIyXCIgPyBcInN1Y2Nlc3NcIiA6IFwiaW5mb1wifSBtci0yYH0+R3JpZCBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVmlld0NoYW5nZShcIjNcIil9IGNsYXNzTmFtZT17YGJ0biBidG4tJHt2aWV3U3RhdHVzID09PSBcIjNcIiA/IFwic3VjY2Vzc1wiIDogXCJpbmZvXCJ9IG1yLTJgfT5UYWJsZSBWaWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc01vZGFsT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlPXt0aGlzLm1vZGFsQ2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXt0aGlzLmNyZWF0ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VIYW5kbGVyPXt0aGlzLmNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk9e3RoaXMuc3RhdGUuYm9keX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlPXt0aGlzLnN0YXRlLmVkaXRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkX3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HcmlkIFZpZXc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdC5tYXAoKHtpZCx0aXRsZSxib2R5fSxpbmR4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTRcIiBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BpdGVtIGxpc3QtZ3JvdXAtaXRlbS0ke2luZHglMj09PTA/XCJpbmZvXCI6XCJzdWNjZXNzXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2lkfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e3RpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Ym9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIG1yLTJcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm1vZGFsSGFuZGxlcigyLGlkKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVEZWxldGUoaWQpfT5kZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UG9ydGFsOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3N0eWxlcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpLy8gUmVtZW1iZXI6IHRoaXMgaXMgZGV2ZWxvcG1lbnQgb25seSBjb2RlLlxuLy9cbi8vIEFmdGVyIHN0eWxlcyBhcmUgaW5qZWN0ZWQsIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZVxuLy8gPHN0eWxlPiB0YWdzIHRoYXQgc2V0IGBib2R5IHsgZGlzcGxheTogbm9uZTsgfWAuXG4vL1xuLy8gV2UgdXNlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFzIGEgd2F5IHRvIGRlZmVyXG4vLyB0aGlzIG9wZXJhdGlvbiBzaW5jZSB0aGVyZSBtYXkgYmUgbXVsdGlwbGUgc3R5bGVcbi8vIHRhZ3MuXG47KHNlbGYucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0KShmdW5jdGlvbigpe2Zvcih2YXIgeD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSxpPXgubGVuZ3RoO2ktLTspe3hbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTt9fSk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zdHlsZXMubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL3N0eWxlcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlX21vZGFsX2NvbnRfX1JRUXRye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjA7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3R5bGVfbW9kYWxfY29udF9fUlFRdHIgLnN0eWxlX21kbF9fd2FRSWl7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDQ0cHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG4uc3R5bGVfZm9vdGVyX18xaXhUTHtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcXHJcXG59XFxyXFxuLnN0eWxlX2Zvb3Rlcl9fMWl4VEwgYnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xcclxcbiAgICBtYXJnaW46IDAgMHB4IDAgMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG4uc3R5bGVfZG5fXzJZQUNDe2Rpc3BsYXk6IG5vbmV9XFxyXFxuLnN0eWxlX2RiX18zZmlPTntkaXNwbGF5OiBibG9ja31cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9NYXJpYSBFbGVuYS9EZXNrdG9wL1Byb2dyYW1hY2nDs24vQmx1dXdlYi9OZXh0L29udGltZS9jb21wb25lbnRzL2NydWQvZmVhdHVyZXMvbW9kYWwvc3R5bGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsV0FBVztJQUNYLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBLGlCQUFJLGFBQWE7QUFDakIsaUJBQUksY0FBY1wiLFwiZmlsZVwiOlwic3R5bGUubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWxfY29udHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGIwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX2NvbnQgLm1kbHtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDRweCA1cHggYmxhY2s7XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0XFxyXFxufVxcclxcbi5mb290ZXIgYnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xcclxcbiAgICBtYXJnaW46IDAgMHB4IDAgMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG4uZG57ZGlzcGxheTogbm9uZX1cXHJcXG4uZGJ7ZGlzcGxheTogYmxvY2t9XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibW9kYWxfY29udFwiOiBcInN0eWxlX21vZGFsX2NvbnRfX1JRUXRyXCIsXG5cdFwibWRsXCI6IFwic3R5bGVfbWRsX193YVFJaVwiLFxuXHRcImZvb3RlclwiOiBcInN0eWxlX2Zvb3Rlcl9fMWl4VExcIixcblx0XCJkblwiOiBcInN0eWxlX2RuX18yWUFDQ1wiLFxuXHRcImRiXCI6IFwic3R5bGVfZGJfXzNmaU9OXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX3BvcnRhbF9saXN0X18xTXdPUCB7XFxyXFxuICAgIHdpZHRoOiA1NTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMWIxYjE7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4uc3R5bGVzX3Bjb250YWluZXJfXzJvNjRxe1xcclxcbiAgICB3aWR0aDogMTExMXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLnN0eWxlc19iYXNpY0Zvcm1fXzFNNm9CIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E0YTRhNDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNTNweDtcXHJcXG59XFxyXFxuLnN0eWxlc19tYWluX3BvcnRhbF9fM1NxSmwge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfZ3JpZF92aWV3X18zWkg4dCBoNnttYXJnaW46IDA7YmFja2dyb3VuZC1jb2xvcjogI2U4ZTFiMTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwIDRweDt9XFxyXFxuICAgIC5zdHlsZXNfZm9ybV9fMXJXd1cgaDMsXFxyXFxuLnN0eWxlc190YWJsZV92aWV3X18zUGVwbCBoMyxcXHJcXG4uc3R5bGVzX2xpc3Rfdmlld19fWkMtdWIgaDMsXFxyXFxuLnN0eWxlc19ncmlkX3ZpZXdfXzNaSDh0IGgze21hcmdpbi1ib3R0b206IDMwcHg7fVxcclxcbi5zdHlsZXNfZ3JpZF92aWV3X18zWkg4dCAuc3R5bGVzX2l0ZW1fX1FveU1Me1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5zdHlsZXNfZ3JpZF92aWV3X18zWkg4dCAuc3R5bGVzX2l0ZW1fX1FveU1MIGg1e21hcmdpbjogMDt9XFxyXFxuXFxyXFxuLnN0eWxlc19ncmlkX3ZpZXdfXzNaSDh0IC5zdHlsZXNfcHJvZmlsZV9pbWdfXzM2MVJle1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAubGlzdF92aWV3IHt9XFxyXFxuLmxpc3RfdmlldyBwe21hcmdpbjogMDt9XFxyXFxuLmxpc3RfdmlldyB7fVxcclxcbi5saXN0X3ZpZXcge31cXHJcXG4ubGlzdF92aWV3IHt9ICovXFxyXFxuXFxyXFxuLnN0eWxlc19zZWFyY2hfXzJDenQ0IHttYXJnaW46IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgICB3aWR0aDogMzQlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxNHB4O31cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLnN0eWxlc19tYWluX3BvcnRhbF9fM1NxSmwge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnN0eWxlc19mb3JtX18xcld3V3twYWRkaW5nOiAwIDQwcHg7fVxcclxcbn1cXHJcXG5cXHJcXG4uc3R5bGVzX1BhZ2VfXzFmV2RMLnN0eWxlc19uYXZpZ2F0aW9uX18xTkZ0XyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIycHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvTWFyaWEgRWxlbmEvRGVza3RvcC9Qcm9ncmFtYWNpw7NuL0JsdXV3ZWIvTmV4dC9vbnRpbWUvY29tcG9uZW50cy9jcnVkL21haW4vc3R5bGVzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLDRCQUFjLFNBQVMsQ0FBQyx5QkFBeUI7SUFDN0MscUJBQXFCO0lBQ3JCLGNBQWMsQ0FBQztJQUNmOzs7NEJBR1UsbUJBQW1CLENBQUM7QUFDbEM7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0EsZ0RBQW9CLFNBQVMsQ0FBQzs7QUFFOUI7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBQ1osTUFBTTtBQUNWOzs7QUFHQTs7OztlQUllOztBQUVmLHVCQUFTLFlBQVk7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVyxDQUFDO0FBQ2hCO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQSxvQkFBTSxlQUFlLENBQUM7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGVzLm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcnRhbF9saXN0IHtcXHJcXG4gICAgd2lkdGg6IDU1MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IxYjFiMTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi5wY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogMTExMXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLmJhc2ljRm9ybSB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhNGE0YTQ7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUzcHg7XFxyXFxufVxcclxcbi5tYWluX3BvcnRhbCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfdmlldyBoNnttYXJnaW46IDA7YmFja2dyb3VuZC1jb2xvcjogI2U4ZTFiMTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwIDRweDt9XFxyXFxuICAgIC5mb3JtIGgzLFxcclxcbi50YWJsZV92aWV3IGgzLFxcclxcbi5saXN0X3ZpZXcgaDMsXFxyXFxuLmdyaWRfdmlldyBoM3ttYXJnaW4tYm90dG9tOiAzMHB4O31cXHJcXG4uZ3JpZF92aWV3IC5pdGVte1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5ncmlkX3ZpZXcgLml0ZW0gaDV7bWFyZ2luOiAwO31cXHJcXG5cXHJcXG4uZ3JpZF92aWV3IC5wcm9maWxlX2ltZ3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLmxpc3RfdmlldyB7fVxcclxcbi5saXN0X3ZpZXcgcHttYXJnaW46IDA7fVxcclxcbi5saXN0X3ZpZXcge31cXHJcXG4ubGlzdF92aWV3IHt9XFxyXFxuLmxpc3RfdmlldyB7fSAqL1xcclxcblxcclxcbi5zZWFyY2gge21hcmdpbjogMTVweDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAzNCU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDE0cHg7fVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAubWFpbl9wb3J0YWwge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvcm17cGFkZGluZzogMCA0MHB4O31cXHJcXG59XFxyXFxuXFxyXFxuLlBhZ2UubmF2aWdhdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIycHg7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicG9ydGFsX2xpc3RcIjogXCJzdHlsZXNfcG9ydGFsX2xpc3RfXzFNd09QXCIsXG5cdFwicGNvbnRhaW5lclwiOiBcInN0eWxlc19wY29udGFpbmVyX18ybzY0cVwiLFxuXHRcImJhc2ljRm9ybVwiOiBcInN0eWxlc19iYXNpY0Zvcm1fXzFNNm9CXCIsXG5cdFwibWFpbl9wb3J0YWxcIjogXCJzdHlsZXNfbWFpbl9wb3J0YWxfXzNTcUpsXCIsXG5cdFwiZ3JpZF92aWV3XCI6IFwic3R5bGVzX2dyaWRfdmlld19fM1pIOHRcIixcblx0XCJmb3JtXCI6IFwic3R5bGVzX2Zvcm1fXzFyV3dXXCIsXG5cdFwidGFibGVfdmlld1wiOiBcInN0eWxlc190YWJsZV92aWV3X18zUGVwbFwiLFxuXHRcImxpc3Rfdmlld1wiOiBcInN0eWxlc19saXN0X3ZpZXdfX1pDLXViXCIsXG5cdFwiaXRlbVwiOiBcInN0eWxlc19pdGVtX19Rb3lNTFwiLFxuXHRcInByb2ZpbGVfaW1nXCI6IFwic3R5bGVzX3Byb2ZpbGVfaW1nX18zNjFSZVwiLFxuXHRcInNlYXJjaFwiOiBcInN0eWxlc19zZWFyY2hfXzJDenQ0XCIsXG5cdFwiUGFnZVwiOiBcInN0eWxlc19QYWdlX18xZldkTFwiLFxuXHRcIm5hdmlnYXRpb25cIjogXCJzdHlsZXNfbmF2aWdhdGlvbl9fMU5GdF9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkL0xheW91dCc7XHJcbi8vaW1wb3J0IFRhc2tNIGZyb20gJy4uL2NvbXBvbmVudHMvVGFza00vVGFza00nO1xyXG5pbXBvcnQgU3R1ZGVudFBvcnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2NydWQvbWFpbi9pbmRleCdcclxuXHJcbmNvbnN0IE1hbmFnZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdHVkZW50UG9ydGFsPjwvU3R1ZGVudFBvcnRhbD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlciJdLCJzb3VyY2VSb290IjoiIn0=