"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            'section-title': {\n                textDecoration: 'underline',\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: '#525252',\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'M PLUS Rounded 1c\"\n};\nvar colors = {\n    glassTeal: '#88ccca'\n};\nvar config = {\n    initialColorMode: 'dark',\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBOEM7QUFDRDtBQUU3QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLE1BQU0sRUFBRUMsUUFBUSxDQUFSQSxLQUFLO1FBQUksTUFDakIsQ0FEa0IsQ0FBQztZQUNqQkMsSUFBSSxFQUFFLENBQUM7Z0JBQ0xDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxDQUFTLFVBQUUsQ0FBUyxVQUFFRyxLQUFLO1lBQ3RDLENBQUM7UUFDSCxDQUFDOztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNHLFVBQVUsR0FBRyxDQUFDO0lBQ2xCQyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxRQUFRLEVBQUUsQ0FBQztZQUNULENBQWUsZ0JBQUUsQ0FBQztnQkFDaEJDLGNBQWMsRUFBRSxDQUFXO2dCQUMzQkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RCQyxtQkFBbUIsRUFBRSxDQUFTO2dCQUM5QkMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDMUJDLFNBQVMsRUFBRSxDQUFDO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDTEMsU0FBUyxFQUFFZCxRQUFRLENBQVJBLEtBQUs7WUFBSSxNQUN0QixDQUR1QixDQUFDO2dCQUNwQmUsS0FBSyxFQUFFbEIsNERBQUksQ0FBQyxDQUFTLFVBQUUsQ0FBUyxVQUFFRyxLQUFLO2dCQUN2Q1EsbUJBQW1CLEVBQUUsQ0FBQztZQUN4QixDQUFDOztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDUSxLQUFLLEdBQUcsQ0FBQztJQUNiQyxPQUFPLEVBQUUsQ0FBb0I7QUFDL0IsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQVM7QUFDdEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZEMsZ0JBQWdCLEVBQUUsQ0FBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDLENBQUM7SUFDekJ3QixNQUFNLEVBQU5BLE1BQU07SUFDTnRCLE1BQU0sRUFBTkEsTUFBTTtJQUNOSyxVQUFVLEVBQVZBLFVBQVU7SUFDVmUsTUFBTSxFQUFOQSxNQUFNO0lBQ05GLEtBQUssRUFBTEEsS0FBSztBQUNQLENBQUM7QUFFRCwrREFBZU8sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWJzL3RoZW1lLmpzPzIyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIEhlYWRpbmc6IHtcclxuICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnIzUyNTI1MicsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBMaW5rOiB7XHJcbiAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgIGNvbG9yOiBtb2RlKCcjM2Q3YWVkJywgJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxY1wiXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBjb25maWcsXHJcbiAgc3R5bGVzLFxyXG4gIGNvbXBvbmVudHMsXHJcbiAgY29sb3JzLFxyXG4gIGZvbnRzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxyXG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwic3R5bGVzIiwiZ2xvYmFsIiwicHJvcHMiLCJib2R5IiwiYmciLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInZhcmlhbnRzIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsInRleHRVbmRlcmxpbmVPZmZzZXQiLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwidGV4dERlY29yYXRpb25UaGlja25lc3MiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJMaW5rIiwiYmFzZVN0eWxlIiwiY29sb3IiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJnbGFzc1RlYWwiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/main */ \"./components/layouts/main.js\");\n/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/theme */ \"./libs/theme.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar Website = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n        __source: {\n            fileName: \"D:\\\\Codes\\\\williams-homepage\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layouts_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            router: router,\n            __source: {\n                fileName: \"D:\\\\Codes\\\\williams-homepage\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, _objectSpread({\n            }, pageProps, {\n                key: router.route,\n                __source: {\n                    fileName: \"D:\\\\Codes\\\\williams-homepage\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: _this\n            }))\n        })\n    }));\n};\n_c = Website;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Website);\nvar _c;\n$RefreshReg$(_c, \"Website\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0Y7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLFFBQThCLENBQUM7UUFBcENDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsTUFBTSxTQUFOQSxNQUFNO0lBQzdDLE1BQU0sc0VBQ0hOLDREQUFjOzs7Ozs7O3VGQUNaQyxnRUFBTTtZQUFDSyxNQUFNLEVBQUVBLE1BQU07Ozs7Ozs7eUZBQ25CRixTQUFTO2VBQUtDLFNBQVM7Z0JBQUVFLEdBQUcsRUFBRUQsTUFBTSxDQUFDRSxLQUFLOzs7Ozs7Ozs7O0FBSW5ELENBQUM7S0FSS0wsT0FBTztBQVViLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL21haW4nXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9saWJzL3RoZW1lJ1xyXG5cclxuY29uc3QgV2Vic2l0ZSA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgIDxMYXlvdXQgcm91dGVyPXtyb3V0ZXJ9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYnNpdGVcclxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiTGF5b3V0IiwidGhlbWUiLCJXZWJzaXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwia2V5Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});