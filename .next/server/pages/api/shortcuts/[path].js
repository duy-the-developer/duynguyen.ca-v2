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
exports.id = "pages/api/shortcuts/[path]";
exports.ids = ["pages/api/shortcuts/[path]"];
exports.modules = {

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

/***/ "(api)/./pages/api/shortcuts/[path].ts":
/*!***************************************!*\
  !*** ./pages/api/shortcuts/[path].ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { path  } = req.query;\n    const rootDir = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(process.cwd(), \"_data\");\n    //@ts-ignore\n    const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(rootDir, path);\n    const data = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(fullPath);\n    res.status(200).json({\n        ok: true,\n        data\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2hvcnRjdXRzL1twYXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMyQjtBQUNSO0FBR25CLGlFQUFlLENBQUNFLEtBQXFCQyxNQUF5QjtJQUM1RCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQzFCLE1BQU1DLFVBQVVOLDBDQUFJQSxDQUFDTyxRQUFRQyxHQUFHLElBQUk7SUFDcEMsWUFBWTtJQUNaLE1BQU1DLFdBQVdULDBDQUFJQSxDQUFDTSxTQUFTRjtJQUMvQixNQUFNTSxPQUFPVCxxREFBYyxDQUFDUTtJQUU1Qk4sSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxJQUFJLElBQUk7UUFBRUo7SUFBSztBQUN4QyxHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHV5bmd1eWVuLmNhLy4vcGFnZXMvYXBpL3Nob3J0Y3V0cy9bcGF0aF0udHM/NWMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgcGF0aCB9ID0gcmVxLnF1ZXJ5XG4gIGNvbnN0IHJvb3REaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksICdfZGF0YScpXG4gIC8vQHRzLWlnbm9yZVxuICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocm9vdERpciwgcGF0aClcbiAgY29uc3QgZGF0YSA9IGZzLnJlYWRkaXJTeW5jKGZ1bGxQYXRoKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb2s6IHRydWUsIGRhdGEgfSlcbn1cbiJdLCJuYW1lcyI6WyJqb2luIiwiZnMiLCJyZXEiLCJyZXMiLCJwYXRoIiwicXVlcnkiLCJyb290RGlyIiwicHJvY2VzcyIsImN3ZCIsImZ1bGxQYXRoIiwiZGF0YSIsInJlYWRkaXJTeW5jIiwic3RhdHVzIiwianNvbiIsIm9rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/shortcuts/[path].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/shortcuts/[path].ts"));
module.exports = __webpack_exports__;

})();