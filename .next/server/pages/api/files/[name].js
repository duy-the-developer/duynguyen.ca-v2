"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/files/[name]";
exports.ids = ["pages/api/files/[name]"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/files/[name].ts":
/*!***********************************!*\
  !*** ./pages/api/files/[name].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const name = req.query.name;\n    const postsDir = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(process.cwd(), \"_data\");\n    //@ts-ignore\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(postsDir, name);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(fullPath, \"utf8\");\n    const data = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n    res.status(200).json({\n        ok: true,\n        data\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmlsZXMvW25hbWVdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkI7QUFDUjtBQUNhO0FBRWhDLGlFQUFlLENBQUNHLEtBQXFCQyxNQUF5QjtJQUM1RCxNQUFNQyxPQUFPRixJQUFJRyxLQUFLLENBQUNELElBQUk7SUFDM0IsTUFBTUUsV0FBV1AsMENBQUlBLENBQUNRLFFBQVFDLEdBQUcsSUFBSTtJQUNyQyxZQUFZO0lBQ1osTUFBTUMsV0FBV1YsMENBQUlBLENBQUNPLFVBQVVGO0lBQ2hDLE1BQU1NLGVBQWVWLHNEQUFlLENBQUNTLFVBQVU7SUFDL0MsTUFBTUcsT0FBT1gsa0RBQU1BLENBQUNTO0lBQ3BCUCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLElBQUksSUFBSTtRQUFFSDtJQUFLO0FBQ3hDLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kdXluZ3V5ZW4uY2EvLi9wYWdlcy9hcGkvZmlsZXMvW25hbWVdLnRzP2ViNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBuYW1lID0gcmVxLnF1ZXJ5Lm5hbWVcbiAgY29uc3QgcG9zdHNEaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksICdfZGF0YScpXG4gIC8vQHRzLWlnbm9yZVxuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXIsIG5hbWUpXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxuICBjb25zdCBkYXRhID0gbWF0dGVyKGZpbGVDb250ZW50cylcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvazogdHJ1ZSwgZGF0YSB9KVxufVxuIl0sIm5hbWVzIjpbImpvaW4iLCJmcyIsIm1hdHRlciIsInJlcSIsInJlcyIsIm5hbWUiLCJxdWVyeSIsInBvc3RzRGlyIiwicHJvY2VzcyIsImN3ZCIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJvayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/files/[name].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/files/[name].ts"));
module.exports = __webpack_exports__;

})();