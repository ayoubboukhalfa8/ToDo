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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://127.0.0.1:8000\" || 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLE1BQU1ELG9EQUFZLENBQUM7SUFDdkJHLFNBQVNDLHVCQUErQixJQUFJO0FBQzlDO0FBRUEsaUVBQWVILEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlrZS1mcm9udGVuZC8uL2xpYi9hcGkuanM/NDU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwaVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_3__]);\n_redux_store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\eternel\\\\Desktop\\\\todo\\\\todo_frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\eternel\\\\Desktop\\\\todo\\\\todo_frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNRO0FBQ0o7QUFFbkIsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDcEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlrZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _tasksSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksSlice */ \"./redux/tasksSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _tasksSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _tasksSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        tasks: _tasksSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDVjtBQUV2QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUMzQkcsU0FBUztRQUNQQyxPQUFPSCxtREFBWUE7SUFDckI7QUFDRjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Bpa2UtZnJvbnRlbmQvLi9yZWR1eC9zdG9yZS5qcz8zNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB0YXNrc1JlZHVjZXIgZnJvbSAnLi90YXNrc1NsaWNlJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHRhc2tzOiB0YXNrc1JlZHVjZXJcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInRhc2tzUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInRhc2tzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./redux/tasksSlice.js":
/*!*****************************!*\
  !*** ./redux/tasksSlice.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   bulkDelete: () => (/* binding */ bulkDelete),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   fetchTasks: () => (/* binding */ fetchTasks),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _lib_api__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _lib_api__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst fetchTasks = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/fetch\", async ()=>{\n    const res = await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/tasks/\");\n    return res.data;\n});\nconst addTask = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/add\", async (payload)=>{\n    const res = await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/tasks/\", payload);\n    return res.data;\n});\nconst updateTask = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/update\", async ({ id, title })=>{\n    const res = await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(`/tasks/${id}`, {\n        title\n    });\n    return res.data;\n});\nconst deleteTask = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/delete\", async (id, thunkAPI)=>{\n    await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(`/tasks/${id}`);\n    return id;\n});\nconst bulkDelete = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"tasks/bulkDelete\", async (ids)=>{\n    await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/tasks/bulk-delete\", ids);\n    const res = await _lib_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/tasks/\");\n    return res.data;\n});\nconst tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tasks\",\n    initialState: {\n        list: [],\n        loading: false\n    },\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchTasks.pending, (state)=>{\n            state.loading = true;\n        });\n        builder.addCase(fetchTasks.fulfilled, (state, action)=>{\n            state.loading = false;\n            state.list = action.payload;\n        });\n        builder.addCase(fetchTasks.rejected, (state)=>{\n            state.loading = false;\n        });\n        builder.addCase(addTask.fulfilled, (state, action)=>{\n            state.list.push(action.payload);\n        });\n        builder.addCase(updateTask.fulfilled, (state, action)=>{\n            state.list = state.list.map((t)=>t.id === action.payload.id ? action.payload : t);\n        });\n        builder.addCase(deleteTask.fulfilled, (state, action)=>{\n            state.list = state.list.map((t)=>t.id === action.payload ? {\n                    ...t,\n                    deleted: true\n                } : t);\n        });\n        builder.addCase(bulkDelete.fulfilled, (state, action)=>{\n            state.list = action.payload;\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Y7QUFFQSxpRUFBZVcsV0FBV2tCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlrZS1mcm9udGVuZC8uL3JlZHV4L3Rhc2tzU2xpY2UuanM/NzNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXG5cbmV4cG9ydCBjb25zdCBmZXRjaFRhc2tzID0gY3JlYXRlQXN5bmNUaHVuaygndGFza3MvZmV0Y2gnLCBhc3luYyAoKT0+e1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCcvdGFza3MvJylcbiAgcmV0dXJuIHJlcy5kYXRhXG59KVxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Rhc2tzL2FkZCcsIGFzeW5jIChwYXlsb2FkKT0+e1xuICBjb25zdCByZXMgPSBhd2FpdCBhcGkucG9zdCgnL3Rhc2tzLycsIHBheWxvYWQpXG4gIHJldHVybiByZXMuZGF0YVxufSlcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhc2sgPSBjcmVhdGVBc3luY1RodW5rKCd0YXNrcy91cGRhdGUnLCBhc3luYyAoe2lkLHRpdGxlfSk9PntcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLnB1dChgL3Rhc2tzLyR7aWR9YCwge3RpdGxlfSlcbiAgcmV0dXJuIHJlcy5kYXRhXG59KVxuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9IGNyZWF0ZUFzeW5jVGh1bmsoJ3Rhc2tzL2RlbGV0ZScsIGFzeW5jIChpZCwgdGh1bmtBUEkpPT57XG4gIGF3YWl0IGFwaS5kZWxldGUoYC90YXNrcy8ke2lkfWApXG4gIHJldHVybiBpZFxufSlcblxuZXhwb3J0IGNvbnN0IGJ1bGtEZWxldGUgPSBjcmVhdGVBc3luY1RodW5rKCd0YXNrcy9idWxrRGVsZXRlJywgYXN5bmMgKGlkcyk9PntcbiAgYXdhaXQgYXBpLnBvc3QoJy90YXNrcy9idWxrLWRlbGV0ZScsIGlkcylcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnL3Rhc2tzLycpXG4gIHJldHVybiByZXMuZGF0YVxufSlcblxuY29uc3QgdGFza3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTondGFza3MnLFxuICBpbml0aWFsU3RhdGU6eyBsaXN0OiBbXSwgbG9hZGluZzpmYWxzZSB9LFxuICByZWR1Y2Vyczp7fSxcbiAgZXh0cmFSZWR1Y2VyczooYnVpbGRlcik9PntcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hUYXNrcy5wZW5kaW5nLCAoc3RhdGUpPT57IHN0YXRlLmxvYWRpbmc9dHJ1ZSB9KVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShmZXRjaFRhc2tzLmZ1bGZpbGxlZCwgKHN0YXRlLGFjdGlvbik9Pnsgc3RhdGUubG9hZGluZz1mYWxzZTsgc3RhdGUubGlzdCA9IGFjdGlvbi5wYXlsb2FkIH0pXG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoVGFza3MucmVqZWN0ZWQsIChzdGF0ZSk9Pnsgc3RhdGUubG9hZGluZz1mYWxzZSB9KVxuICAgIGJ1aWxkZXIuYWRkQ2FzZShhZGRUYXNrLmZ1bGZpbGxlZCwgKHN0YXRlLGFjdGlvbik9Pnsgc3RhdGUubGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKSB9KVxuICAgIGJ1aWxkZXIuYWRkQ2FzZSh1cGRhdGVUYXNrLmZ1bGZpbGxlZCwgKHN0YXRlLGFjdGlvbik9PntcbiAgICAgIHN0YXRlLmxpc3QgPSBzdGF0ZS5saXN0Lm1hcCh0PT4gdC5pZD09PWFjdGlvbi5wYXlsb2FkLmlkID8gYWN0aW9uLnBheWxvYWQgOiB0KVxuICAgIH0pXG4gICAgYnVpbGRlci5hZGRDYXNlKGRlbGV0ZVRhc2suZnVsZmlsbGVkLCAoc3RhdGUsYWN0aW9uKT0+e1xuICAgICAgc3RhdGUubGlzdCA9IHN0YXRlLmxpc3QubWFwKHQ9PiB0LmlkPT09YWN0aW9uLnBheWxvYWQgPyB7Li4udCwgZGVsZXRlZDp0cnVlfSA6IHQpXG4gICAgfSlcbiAgICBidWlsZGVyLmFkZENhc2UoYnVsa0RlbGV0ZS5mdWxmaWxsZWQsIChzdGF0ZSxhY3Rpb24pPT57IHN0YXRlLmxpc3QgPSBhY3Rpb24ucGF5bG9hZCB9KVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrc1NsaWNlLnJlZHVjZXJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJhcGkiLCJmZXRjaFRhc2tzIiwicmVzIiwiZ2V0IiwiZGF0YSIsImFkZFRhc2siLCJwYXlsb2FkIiwicG9zdCIsInVwZGF0ZVRhc2siLCJpZCIsInRpdGxlIiwicHV0IiwiZGVsZXRlVGFzayIsInRodW5rQVBJIiwiZGVsZXRlIiwiYnVsa0RlbGV0ZSIsImlkcyIsInRhc2tzU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibGlzdCIsImxvYWRpbmciLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInJlamVjdGVkIiwicHVzaCIsIm1hcCIsInQiLCJkZWxldGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/tasksSlice.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();