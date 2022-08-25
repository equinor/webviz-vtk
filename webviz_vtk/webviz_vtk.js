/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["webviz_vtk"] = factory(require("react"));
	else
		root["webviz_vtk"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/AsyncReactVTK.tsx":
/*!***********************************!*\
  !*** ./src/lib/AsyncReactVTK.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Algorithm\": () => (/* binding */ Algorithm),\n/* harmony export */   \"CellData\": () => (/* binding */ CellData),\n/* harmony export */   \"DataArray\": () => (/* binding */ DataArray),\n/* harmony export */   \"FieldData\": () => (/* binding */ FieldData),\n/* harmony export */   \"GeometryRepresentation\": () => (/* binding */ GeometryRepresentation),\n/* harmony export */   \"PointData\": () => (/* binding */ PointData),\n/* harmony export */   \"PolyData\": () => (/* binding */ PolyData),\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * fakeModules: We need to trick React.lazy into thinking we are\n * giving the output of an import(\"my-module.js\") Promise.\n */\nconst asyncComponentBuilder = name => () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {\n    // eslint-disable-next-line\n    const AsyncReactVTK = __webpack_require__.e(/*! import() | ReactVTK */ \"async-ReactVTK\").then(__webpack_require__.bind(__webpack_require__, /*! ./ReactVTK */ \"./src/lib/ReactVTK.ts\"));\n    const ReactVTK = yield AsyncReactVTK;\n    const reactComponent = ReactVTK.default[name];\n    const fakeModule = { default: reactComponent };\n    return fakeModule;\n});\nconst Algorithm = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"Algorithm\"));\nconst CellData = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"CellData\"));\nconst DataArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"DataArray\"));\nconst FieldData = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"FieldData\"));\nconst GeometryRepresentation = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"GeometryRepresentation\"));\nconst PointData = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"PointData\"));\nconst PolyData = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"PolyData\"));\nconst View = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(asyncComponentBuilder(\"View\"));\n\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/AsyncReactVTK.tsx?");

/***/ }),

/***/ "./src/lib/dash/Algorithm.tsx":
/*!************************************!*\
  !*** ./src/lib/dash/Algorithm.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * Algorithm is exposing a source or filter to a downstream filter\n * It takes the following set of properties:\n *   - vtkClass: vtkClassName\n *   - state: {}\n */\nconst Algorithm = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.Algorithm, Object.assign({}, props))));\nAlgorithm.defaultProps = {\n    port: 0,\n    vtkClass: 'vtkConeSource',\n    state: {},\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Algorithm);\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/Algorithm.tsx?");

/***/ }),

/***/ "./src/lib/dash/CellData.tsx":
/*!***********************************!*\
  !*** ./src/lib/dash/CellData.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * CellData is exposing a vtkCellData to a downstream element\n */\nconst CellData = (props) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.CellData, Object.assign({}, props))));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CellData);\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/CellData.tsx?");

/***/ }),

/***/ "./src/lib/dash/DataArray.tsx":
/*!************************************!*\
  !*** ./src/lib/dash/DataArray.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataArray)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * DataArray is creating a vtkDataArray for the container fields\n * It takes the following set of properties:\n *   - type: 'Float32Array', 'Float64Array', 'Uint16Array', ...\n *   - values: [number, number, ...]\n *   - numberOfComponents: 1,\n *   - registration: 'addArray', 'setScalars', ...\n */\nfunction DataArray(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.DataArray, Object.assign({}, props)));\n}\n;\nDataArray.defaultProps = {\n    name: 'scalars',\n    type: 'Float32Array',\n    values: [],\n    numberOfComponents: 1,\n    registration: 'addArray',\n};\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/DataArray.tsx?");

/***/ }),

/***/ "./src/lib/dash/FieldData.tsx":
/*!************************************!*\
  !*** ./src/lib/dash/FieldData.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FieldData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * FieldData is exposing a FieldData to a downstream element\n */\nfunction FieldData(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.FieldData, Object.assign({}, props)));\n}\n;\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/FieldData.tsx?");

/***/ }),

/***/ "./src/lib/dash/GeometryRepresentation.tsx":
/*!*************************************************!*\
  !*** ./src/lib/dash/GeometryRepresentation.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GeometryRepresentation)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * GeometryRepresentation is responsible to convert a vtkPolyData into rendering\n * It takes the following set of properties:\n *   - actor: Properties to assign to the vtkActor\n *   - mapper: Properties to assign to the vtkMapper\n *   - property: Properties to assign to the vtkProperty (actor.getProperty())\n *   - colorMapPreset: Name of the preset to use for controlling the color mapping\n *   - colorDataRange: Range to use for the color scale\n */\nfunction GeometryRepresentation(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.GeometryRepresentation, Object.assign({}, props)));\n}\n;\nGeometryRepresentation.defaultProps = {\n    colorMapPreset: 'erdc_rainbow_bright',\n    colorDataRange: [0, 1],\n    showCubeAxes: false,\n    showScalarBar: false,\n    scalarBarTitle: '',\n};\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/GeometryRepresentation.tsx?");

/***/ }),

/***/ "./src/lib/dash/PointData.tsx":
/*!************************************!*\
  !*** ./src/lib/dash/PointData.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PointData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * PointData is exposing a vtkPointData to a downstream element\n */\nfunction PointData(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.PointData, Object.assign({}, props)));\n}\n;\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/PointData.tsx?");

/***/ }),

/***/ "./src/lib/dash/PolyData.tsx":
/*!***********************************!*\
  !*** ./src/lib/dash/PolyData.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PolyData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n\n\n/**\n * PolyData is exposing a vtkPolyData to a downstream filter\n * It takes the following set of properties:\n *   - points: [x, y, z, x, y, z, ...],\n *   - verts: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]\n *   - lines: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]\n *   - polys: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]\n *   - strips: [cellSize, pointId0, pointId1, ..., cellSize, pointId0, ...]\n * Cell connectivity helper property:\n *   - connectivity: 'manual', // [manual, points, triangles, strips]\n */\nfunction PolyData(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.PolyData, Object.assign({}, props)));\n}\n;\nPolyData.defaultProps = {\n    port: 0,\n    points: [],\n    connectivity: 'manual',\n};\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/PolyData.tsx?");

/***/ }),

/***/ "./src/lib/dash/View.tsx":
/*!*******************************!*\
  !*** ./src/lib/dash/View.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncReactVTK */ \"./src/lib/AsyncReactVTK.tsx\");\n/* eslint-disable no-magic-numbers */\n\n\n/**\n * View is responsible to render vtk.js data.\n * It takes the following set of properties:\n *   - `background`: [0.2, 0.3, 0.4]\n *   - `cameraPosition`: [0, 0, 1]\n *   - `cameraViewUp`: [0, 1, 0]\n *   - `cameraParallelProjection`: false\n *   - `showOrientationAxes`: true\n */\nfunction View(props) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), { fallback: null },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AsyncReactVTK__WEBPACK_IMPORTED_MODULE_1__.View, Object.assign({}, props)));\n}\n;\nView.defaultProps = {\n    style: {\n        width: '100%',\n        height: '100%',\n    },\n    triggerRender: 0,\n    triggerResetCamera: 0,\n    background: [0.2, 0.3, 0.4],\n    cameraPosition: [0, 0, 1],\n    cameraViewUp: [0, 1, 0],\n    cameraFocalPoint: [0, 0, 0],\n    autoResetCamera: true,\n    cameraParallelProjection: false,\n    cameraParallelHorScale: 1.0,\n    interactorSettings: [\n        {\n            button: 1,\n            action: 'Rotate',\n        },\n        {\n            button: 2,\n            action: 'Pan',\n        },\n        {\n            button: 3,\n            action: 'Zoom',\n            scrollEnabled: true,\n        },\n        {\n            button: 1,\n            action: 'Pan',\n            shift: true,\n        },\n        {\n            button: 1,\n            action: 'Zoom',\n            alt: true,\n        },\n        {\n            button: 1,\n            action: 'ZoomToMouse',\n            control: true,\n        },\n        {\n            button: 1,\n            action: 'Roll',\n            alt: true,\n            shift: true,\n        },\n    ],\n    showOrientationAxes: true,\n};\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/dash/View.tsx?");

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Algorithm\": () => (/* reexport safe */ _dash_Algorithm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"CellData\": () => (/* reexport safe */ _dash_CellData__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"DataArray\": () => (/* reexport safe */ _dash_DataArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"FieldData\": () => (/* reexport safe */ _dash_FieldData__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"GeometryRepresentation\": () => (/* reexport safe */ _dash_GeometryRepresentation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"PointData\": () => (/* reexport safe */ _dash_PointData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"PolyData\": () => (/* reexport safe */ _dash_PolyData__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"View\": () => (/* reexport safe */ _dash_View__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dash_Algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash/Algorithm */ \"./src/lib/dash/Algorithm.tsx\");\n/* harmony import */ var _dash_CellData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash/CellData */ \"./src/lib/dash/CellData.tsx\");\n/* harmony import */ var _dash_DataArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash/DataArray */ \"./src/lib/dash/DataArray.tsx\");\n/* harmony import */ var _dash_FieldData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash/FieldData */ \"./src/lib/dash/FieldData.tsx\");\n/* harmony import */ var _dash_GeometryRepresentation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash/GeometryRepresentation */ \"./src/lib/dash/GeometryRepresentation.tsx\");\n/* harmony import */ var _dash_PointData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash/PointData */ \"./src/lib/dash/PointData.tsx\");\n/* harmony import */ var _dash_PolyData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dash/PolyData */ \"./src/lib/dash/PolyData.tsx\");\n/* harmony import */ var _dash_View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dash/View */ \"./src/lib/dash/View.tsx\");\n/* eslint-disable import/prefer-default-export */\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webviz_vtk/./src/lib/index.ts?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__assign\": () => (/* binding */ __assign),\n/* harmony export */   \"__asyncDelegator\": () => (/* binding */ __asyncDelegator),\n/* harmony export */   \"__asyncGenerator\": () => (/* binding */ __asyncGenerator),\n/* harmony export */   \"__asyncValues\": () => (/* binding */ __asyncValues),\n/* harmony export */   \"__await\": () => (/* binding */ __await),\n/* harmony export */   \"__awaiter\": () => (/* binding */ __awaiter),\n/* harmony export */   \"__classPrivateFieldGet\": () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   \"__classPrivateFieldSet\": () => (/* binding */ __classPrivateFieldSet),\n/* harmony export */   \"__createBinding\": () => (/* binding */ __createBinding),\n/* harmony export */   \"__decorate\": () => (/* binding */ __decorate),\n/* harmony export */   \"__exportStar\": () => (/* binding */ __exportStar),\n/* harmony export */   \"__extends\": () => (/* binding */ __extends),\n/* harmony export */   \"__generator\": () => (/* binding */ __generator),\n/* harmony export */   \"__importDefault\": () => (/* binding */ __importDefault),\n/* harmony export */   \"__importStar\": () => (/* binding */ __importStar),\n/* harmony export */   \"__makeTemplateObject\": () => (/* binding */ __makeTemplateObject),\n/* harmony export */   \"__metadata\": () => (/* binding */ __metadata),\n/* harmony export */   \"__param\": () => (/* binding */ __param),\n/* harmony export */   \"__read\": () => (/* binding */ __read),\n/* harmony export */   \"__rest\": () => (/* binding */ __rest),\n/* harmony export */   \"__spread\": () => (/* binding */ __spread),\n/* harmony export */   \"__spreadArray\": () => (/* binding */ __spreadArray),\n/* harmony export */   \"__spreadArrays\": () => (/* binding */ __spreadArrays),\n/* harmony export */   \"__values\": () => (/* binding */ __values)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    if (typeof b !== \"function\" && b !== null)\r\n        throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nvar __createBinding = Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n});\r\n\r\nfunction __exportStar(m, o) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\n/** @deprecated */\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\n/** @deprecated */\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n}\r\n\r\nfunction __spreadArray(to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nvar __setModuleDefault = Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, state, kind, f) {\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\r\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, state, value, kind, f) {\r\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\r\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\r\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\r\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\r\n}\r\n\n\n//# sourceURL=webpack://webviz_vtk/./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","umd":"react","root":"React"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webviz_vtk:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	var getCurrentScript = function() {
/******/ 	    var script = document.currentScript;
/******/ 	    if (!script) {
/******/ 	        /* Shim for IE11 and below */
/******/ 	        /* Do not take into account async scripts and inline scripts */
/******/ 	
/******/ 	        var doc_scripts = document.getElementsByTagName('script');
/******/ 	        var scripts = [];
/******/ 	
/******/ 	        for (var i = 0; i < doc_scripts.length; i++) {
/******/ 	            scripts.push(doc_scripts[i]);
/******/ 	        }
/******/ 	
/******/ 	        scripts = scripts.filter(function(s) { return !s.async && !s.text && !s.textContent; });
/******/ 	        script = scripts.slice(-1)[0];
/******/ 	    }
/******/ 	
/******/ 	    return script;
/******/ 	};
/******/ 	
/******/ 	var isLocalScript = function(script) {
/******/ 	    return /\/_dash-component-suites\//.test(script.src);
/******/ 	};
/******/ 	
/******/ 	Object.defineProperty(__webpack_require__, 'p', {
/******/ 	    get: (function () {
/******/ 	        var script = getCurrentScript();
/******/ 	
/******/ 	        var url = script.src.split('/').slice(0, -1).join('/') + '/';
/******/ 	
/******/ 	        return function() {
/******/ 	            return url;
/******/ 	        };
/******/ 	    })()
/******/ 	});
/******/ 	
/******/ 	if (typeof jsonpScriptSrc !== 'undefined') {
/******/ 	    var __jsonpScriptSrc__ = jsonpScriptSrc;
/******/ 	    jsonpScriptSrc = function(chunkId) {
/******/ 	        var script = getCurrentScript();
/******/ 	        var isLocal = isLocalScript(script);
/******/ 	
/******/ 	        var src = __jsonpScriptSrc__(chunkId);
/******/ 	
/******/ 	        if(!isLocal) {
/******/ 	            return src;
/******/ 	        }
/******/ 	
/******/ 	        var srcFragments = src.split('/');
/******/ 	        var fileFragments = srcFragments.slice(-1)[0].split('.');
/******/ 	
/******/ 	        fileFragments.splice(1, 0, "v1_0_0m1661171799");
/******/ 	        srcFragments.splice(-1, 1, fileFragments.join('.'))
/******/ 	
/******/ 	        return srcFragments.join('/');
/******/ 	    };
/******/ 	}
/******/ 	
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebviz_vtk"] = self["webpackChunkwebviz_vtk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lib/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});