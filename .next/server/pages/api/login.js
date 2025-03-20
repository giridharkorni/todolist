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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\login.js */ \"(api)/./pages/api/login.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/login\",\n        pathname: \"/api/login\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmxvZ2luJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNsb2dpbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNtRDtBQUNuRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsZ0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGdEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGxvZ2luLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool(process.env.DATABASE_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLEtBQUtELGdFQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFcEQsaUVBQWVKLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZ2lyaWRoYXJcXE9uZURyaXZlXFxEZXNrdG9wXFxXYXl2b1xcSFRNTCBDU1NcXHRvZG9saXN0XFxsaWJcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwibXlzcWwyL3Byb21pc2VcIjtcclxuXHJcbmNvbnN0IGRiID0gbXlzcWwuY3JlYXRlUG9vbChwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY3JlYXRlUG9vbCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bcryptjs__WEBPACK_IMPORTED_MODULE_1__]);\nbcryptjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email, password } = req.body;\n        if (!email || !password) {\n            return res.status(400).json({\n                message: \"Email or Password cannot be empty\"\n            });\n        } else {\n            try {\n                const [rows] = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"select * from users where email = ?\", [\n                    email\n                ]);\n                if (rows.length === 0) {\n                    return res.status(401).json({\n                        message: \"User Not Found\"\n                    });\n                }\n                const user = rows[0];\n                const hashedPassword = user.password;\n                const isMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, hashedPassword);\n                if (!isMatch) {\n                    return res.status(401).json({\n                        message: \"Invalid Email or Password\"\n                    });\n                }\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n                    id: user.id,\n                    email: user.email\n                }, process.env.JWT_SECRET, {\n                    expiresIn: \"1h\"\n                });\n                const cookie = (0,cookie__WEBPACK_IMPORTED_MODULE_3__.serialize)(\"authToken\", token, {\n                    httpOnly: true,\n                    secure: \"development\" === \"production\",\n                    sameSite: \"strict\",\n                    path: \"/\",\n                    maxAge: 3600\n                });\n                res.setHeader(\"Set-Cookie\", cookie);\n                return res.status(200).json({\n                    message: \"Login Successful\",\n                    token: token\n                });\n            } catch (err) {\n                console.log(\"Database Failure\", err);\n                return res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            }\n        }\n    } else {\n        return res.status(405).json({\n            message: \"Method Not Supported\"\n        });\n    }\n} // mysql://root:HMNdrYUUWIqVeGeKoiDDIYXukHcSuKnP@yamabiko.proxy.rlwy.net:41451/railway\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBQ0M7QUFDSTtBQUNwQixlQUFlSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1FBQ3BDLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxVQUFVO1lBQ3ZCLE9BQU9ILElBQ0pLLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBb0M7UUFDekQsT0FBTztZQUNMLElBQUk7Z0JBQ0YsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTWQscURBQVEsQ0FBQyx1Q0FBdUM7b0JBQ25FUTtpQkFDRDtnQkFDRCxJQUFJTSxLQUFLRSxNQUFNLEtBQUssR0FBRztvQkFDckIsT0FBT1YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUztvQkFBaUI7Z0JBQzFEO2dCQUNBLE1BQU1JLE9BQU9ILElBQUksQ0FBQyxFQUFFO2dCQUNwQixNQUFNSSxpQkFBaUJELEtBQUtSLFFBQVE7Z0JBQ3BDLE1BQU1VLFVBQVUsTUFBTWxCLHdEQUFjLENBQUNRLFVBQVVTO2dCQUMvQyxJQUFJLENBQUNDLFNBQVM7b0JBQ1osT0FBT2IsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBRUMsU0FBUztvQkFBNEI7Z0JBQ3JFO2dCQUNBLE1BQU1RLFFBQVFuQix3REFBUSxDQUNwQjtvQkFBRXFCLElBQUlOLEtBQUtNLEVBQUU7b0JBQUVmLE9BQU9TLEtBQUtULEtBQUs7Z0JBQUMsR0FDakNnQixRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFDdEI7b0JBQUVDLFdBQVc7Z0JBQUs7Z0JBRXBCLE1BQU1DLFNBQVN6QixpREFBU0EsQ0FBQyxhQUFha0IsT0FBTztvQkFDM0NRLFVBQVU7b0JBQ1ZDLFFBQVFOLGtCQUF5QjtvQkFDakNPLFVBQVU7b0JBQ1ZDLE1BQU07b0JBQ05DLFFBQVE7Z0JBQ1Y7Z0JBQ0EzQixJQUFJNEIsU0FBUyxDQUFDLGNBQWNOO2dCQUM1QixPQUFPdEIsSUFDSkssTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztvQkFBRUMsU0FBUztvQkFBb0JRLE9BQU9BO2dCQUFNO1lBQ3RELEVBQUUsT0FBT2MsS0FBSztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkY7Z0JBQ2hDLE9BQU83QixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUF3QjtZQUNqRTtRQUNGO0lBQ0YsT0FBTztRQUNMLE9BQU9QLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUF1QjtJQUNoRTtBQUNGLEVBRUEsc0ZBQXNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGdpcmlkaGFyXFxPbmVEcml2ZVxcRGVza3RvcFxcV2F5dm9cXEhUTUwgQ1NTXFx0b2RvbGlzdFxccGFnZXNcXGFwaVxcbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgLnN0YXR1cyg0MDApXHJcbiAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIkVtYWlsIG9yIFBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVwiIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcm93c10gPSBhd2FpdCBkYi5xdWVyeShcInNlbGVjdCAqIGZyb20gdXNlcnMgd2hlcmUgZW1haWwgPSA/XCIsIFtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogXCJVc2VyIE5vdCBGb3VuZFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB1c2VyID0gcm93c1swXTtcclxuICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IHVzZXIucGFzc3dvcmQ7XHJcbiAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKCFpc01hdGNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiBcIkludmFsaWQgRW1haWwgb3IgUGFzc3dvcmRcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgICAgIHsgaWQ6IHVzZXIuaWQsIGVtYWlsOiB1c2VyLmVtYWlsIH0sXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG4gICAgICAgICAgeyBleHBpcmVzSW46IFwiMWhcIiB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb29raWUgPSBzZXJpYWxpemUoXCJhdXRoVG9rZW5cIiwgdG9rZW4sIHtcclxuICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBzYW1lU2l0ZTogXCJzdHJpY3RcIixcclxuICAgICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgICAgbWF4QWdlOiAzNjAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIGNvb2tpZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAuanNvbih7IG1lc3NhZ2U6IFwiTG9naW4gU3VjY2Vzc2Z1bFwiLCB0b2tlbjogdG9rZW4gfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgRmFpbHVyZVwiLCBlcnIpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2QgTm90IFN1cHBvcnRlZFwiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gbXlzcWw6Ly9yb290OkhNTmRyWVVVV0lxVmVHZUtvaURESVlYdWtIY1N1S25QQHlhbWFiaWtvLnByb3h5LnJsd3kubmV0OjQxNDUxL3JhaWx3YXlcclxuIl0sIm5hbWVzIjpbImRiIiwiYmNyeXB0Iiwiand0Iiwic2VyaWFsaXplIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJyb3dzIiwicXVlcnkiLCJsZW5ndGgiLCJ1c2VyIiwiaGFzaGVkUGFzc3dvcmQiLCJpc01hdGNoIiwiY29tcGFyZSIsInRva2VuIiwic2lnbiIsImlkIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJjb29raWUiLCJodHRwT25seSIsInNlY3VyZSIsInNhbWVTaXRlIiwicGF0aCIsIm1heEFnZSIsInNldEhlYWRlciIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();