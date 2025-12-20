/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js ***!
  \********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\n/**\n * MIT License\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// This file is copied from the Metro JavaScript bundler, with minor tweaks for\n// webpack 4 compatibility.\n//\n// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js\nconst runtime_1 = __importDefault(__webpack_require__(/*! next/dist/compiled/react-refresh/runtime */ \"(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/runtime.js\"));\nfunction isSafeExport(key) {\n    return (key === '__esModule' ||\n        key === '__N_SSG' ||\n        key === '__N_SSP' ||\n        // TODO: remove this key from page config instead of allow listing it\n        key === 'config');\n}\nfunction registerExportsForReactRefresh(moduleExports, moduleID) {\n    runtime_1.default.register(moduleExports, moduleID + ' %exports%');\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            continue;\n        }\n        var typeID = moduleID + ' %exports% ' + key;\n        runtime_1.default.register(exportValue, typeID);\n    }\n}\nfunction getRefreshBoundarySignature(moduleExports) {\n    var signature = [];\n    signature.push(runtime_1.default.getFamilyByType(moduleExports));\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        // (This is important for legacy environments.)\n        return signature;\n    }\n    for (var key in moduleExports) {\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            continue;\n        }\n        signature.push(key);\n        signature.push(runtime_1.default.getFamilyByType(exportValue));\n    }\n    return signature;\n}\nfunction isReactRefreshBoundary(moduleExports) {\n    if (runtime_1.default.isLikelyComponentType(moduleExports)) {\n        return true;\n    }\n    if (moduleExports == null || typeof moduleExports !== 'object') {\n        // Exit if we can't iterate over exports.\n        return false;\n    }\n    var hasExports = false;\n    var areAllExportsComponents = true;\n    for (var key in moduleExports) {\n        hasExports = true;\n        if (isSafeExport(key)) {\n            continue;\n        }\n        try {\n            var exportValue = moduleExports[key];\n        }\n        catch (_a) {\n            // This might fail due to circular dependencies\n            return false;\n        }\n        if (!runtime_1.default.isLikelyComponentType(exportValue)) {\n            areAllExportsComponents = false;\n        }\n    }\n    return hasExports && areAllExportsComponents;\n}\nfunction shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {\n    if (prevSignature.length !== nextSignature.length) {\n        return true;\n    }\n    for (var i = 0; i < nextSignature.length; i++) {\n        if (prevSignature[i] !== nextSignature[i]) {\n            return true;\n        }\n    }\n    return false;\n}\nvar isUpdateScheduled = false;\n// This function aggregates updates from multiple modules into a single React Refresh call.\nfunction scheduleUpdate() {\n    if (isUpdateScheduled) {\n        return;\n    }\n    isUpdateScheduled = true;\n    function canApplyUpdate(status) {\n        return status === 'idle';\n    }\n    function applyUpdate() {\n        isUpdateScheduled = false;\n        try {\n            runtime_1.default.performReactRefresh();\n        }\n        catch (err) {\n            console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\\n' +\n                err);\n        }\n    }\n    if (canApplyUpdate(module.hot.status())) {\n        // Apply update on the next tick.\n        Promise.resolve().then(() => {\n            applyUpdate();\n        });\n        return;\n    }\n    const statusHandler = (status) => {\n        if (canApplyUpdate(status)) {\n            module.hot.removeStatusHandler(statusHandler);\n            applyUpdate();\n        }\n    };\n    // Apply update once the HMR runtime's status is idle.\n    module.hot.addStatusHandler(statusHandler);\n}\n// Needs to be compatible with IE11\nexports[\"default\"] = {\n    registerExportsForReactRefresh: registerExportsForReactRefresh,\n    isReactRefreshBoundary: isReactRefreshBoundary,\n    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n    getRefreshBoundarySignature: getRefreshBoundarySignature,\n    scheduleUpdate: scheduleUpdate,\n};\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9kaXN0L2ludGVybmFsL2hlbHBlcnMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxnSUFBMEM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFVBQVU7QUFDZDtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxpb3NpZlxcRHJvcGJveFxcY19wbGF5bml0ZVxccGxheW5pdGVfbmV4dFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxjb21waWxlZFxcQG5leHRcXHJlYWN0LXJlZnJlc2gtdXRpbHNcXGRpc3RcXGludGVybmFsXFxoZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIFRoaXMgZmlsZSBpcyBjb3BpZWQgZnJvbSB0aGUgTWV0cm8gSmF2YVNjcmlwdCBidW5kbGVyLCB3aXRoIG1pbm9yIHR3ZWFrcyBmb3Jcbi8vIHdlYnBhY2sgNCBjb21wYXRpYmlsaXR5LlxuLy9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2Q2Yjk2ODVjNzMwZDBkNjM1NzdkYjQwZjQxMzY5MTU3ZjI4ZGZhM2EvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qc1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmZ1bmN0aW9uIGlzU2FmZUV4cG9ydChrZXkpIHtcbiAgICByZXR1cm4gKGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU0cnIHx8XG4gICAgICAgIGtleSA9PT0gJ19fTl9TU1AnIHx8XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGtleSBmcm9tIHBhZ2UgY29uZmlnIGluc3RlYWQgb2YgYWxsb3cgbGlzdGluZyBpdFxuICAgICAgICBrZXkgPT09ICdjb25maWcnKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJRCkge1xuICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlEICsgJyAlZXhwb3J0cyUnKTtcbiAgICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgICAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgZmFpbCBkdWUgdG8gY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZUlEID0gbW9kdWxlSUQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgICAgICBydW50aW1lXzEuZGVmYXVsdC5yZWdpc3RlcihleHBvcnRWYWx1ZSwgdHlwZUlEKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cykge1xuICAgIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0cykpO1xuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIC8vIChUaGlzIGlzIGltcG9ydGFudCBmb3IgbGVnYWN5IGVudmlyb25tZW50cy4pXG4gICAgICAgIHJldHVybiBzaWduYXR1cmU7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGlmIChpc1NhZmVFeHBvcnQoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgbWlnaHQgZmFpbCBkdWUgdG8gY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzaWduYXR1cmUucHVzaChrZXkpO1xuICAgICAgICBzaWduYXR1cmUucHVzaChydW50aW1lXzEuZGVmYXVsdC5nZXRGYW1pbHlCeVR5cGUoZXhwb3J0VmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cbmZ1bmN0aW9uIGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cykge1xuICAgIGlmIChydW50aW1lXzEuZGVmYXVsdC5pc0xpa2VseUNvbXBvbmVudFR5cGUobW9kdWxlRXhwb3J0cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGhhc0V4cG9ydHMgPSBmYWxzZTtcbiAgICB2YXIgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSB0cnVlO1xuICAgIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAgIGhhc0V4cG9ydHMgPSB0cnVlO1xuICAgICAgICBpZiAoaXNTYWZlRXhwb3J0KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBUaGlzIG1pZ2h0IGZhaWwgZHVlIHRvIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVudGltZV8xLmRlZmF1bHQuaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgICAgICAgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2U2lnbmF0dXJlLCBuZXh0U2lnbmF0dXJlKSB7XG4gICAgaWYgKHByZXZTaWduYXR1cmUubGVuZ3RoICE9PSBuZXh0U2lnbmF0dXJlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0U2lnbmF0dXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcmV2U2lnbmF0dXJlW2ldICE9PSBuZXh0U2lnbmF0dXJlW2ldKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG52YXIgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbi8vIFRoaXMgZnVuY3Rpb24gYWdncmVnYXRlcyB1cGRhdGVzIGZyb20gbXVsdGlwbGUgbW9kdWxlcyBpbnRvIGEgc2luZ2xlIFJlYWN0IFJlZnJlc2ggY2FsbC5cbmZ1bmN0aW9uIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgIGlmIChpc1VwZGF0ZVNjaGVkdWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzVXBkYXRlU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBmdW5jdGlvbiBjYW5BcHBseVVwZGF0ZShzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gJ2lkbGUnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseVVwZGF0ZSgpIHtcbiAgICAgICAgaXNVcGRhdGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnBlcmZvcm1SZWFjdFJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IEZhaWxlZCB0byByZS1yZW5kZXIuIFdlIHdpbGwgcmV0cnkgb24gdGhlIG5leHQgRmFzdCBSZWZyZXNoIGV2ZW50LlxcbicgK1xuICAgICAgICAgICAgICAgIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNhbkFwcGx5VXBkYXRlKG1vZHVsZS5ob3Quc3RhdHVzKCkpKSB7XG4gICAgICAgIC8vIEFwcGx5IHVwZGF0ZSBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFwcGx5VXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXR1c0hhbmRsZXIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgIGlmIChjYW5BcHBseVVwZGF0ZShzdGF0dXMpKSB7XG4gICAgICAgICAgICBtb2R1bGUuaG90LnJlbW92ZVN0YXR1c0hhbmRsZXIoc3RhdHVzSGFuZGxlcik7XG4gICAgICAgICAgICBhcHBseVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBBcHBseSB1cGRhdGUgb25jZSB0aGUgSE1SIHJ1bnRpbWUncyBzdGF0dXMgaXMgaWRsZS5cbiAgICBtb2R1bGUuaG90LmFkZFN0YXR1c0hhbmRsZXIoc3RhdHVzSGFuZGxlcik7XG59XG4vLyBOZWVkcyB0byBiZSBjb21wYXRpYmxlIHdpdGggSUUxMVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaDogcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxuICAgIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5OiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gICAgZ2V0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlOiBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUsXG4gICAgc2NoZWR1bGVVcGRhdGU6IHNjaGVkdWxlVXBkYXRlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js\n"));

/***/ }),

/***/ "(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst runtime_1 = __importDefault(__webpack_require__(/*! next/dist/compiled/react-refresh/runtime */ \"(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/runtime.js\"));\nconst helpers_1 = __importDefault(__webpack_require__(/*! ./internal/helpers */ \"(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js\"));\n// Hook into ReactDOM initialization\nruntime_1.default.injectIntoGlobalHook(self);\n// Register global helpers\nself.$RefreshHelpers$ = helpers_1.default;\n// Register a helper for module execution interception\nself.$RefreshInterceptModuleExecution$ = function (webpackModuleId) {\n    var prevRefreshReg = self.$RefreshReg$;\n    var prevRefreshSig = self.$RefreshSig$;\n    self.$RefreshReg$ = function (type, id) {\n        runtime_1.default.register(type, webpackModuleId + ' ' + id);\n    };\n    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;\n    // Modeled after `useEffect` cleanup pattern:\n    // https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed\n    return function () {\n        self.$RefreshReg$ = prevRefreshReg;\n        self.$RefreshSig$ = prevRefreshSig;\n    };\n};\n//# sourceMappingURL=runtime.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvQG5leHQvcmVhY3QtcmVmcmVzaC11dGlscy9kaXN0L3J1bnRpbWUuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQ0FBa0MsbUJBQU8sQ0FBQyxnSUFBMEM7QUFDcEYsa0NBQWtDLG1CQUFPLENBQUMsb0lBQW9CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW9zaWZcXERyb3Bib3hcXGNfcGxheW5pdGVcXHBsYXluaXRlX25leHRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcY29tcGlsZWRcXEBuZXh0XFxyZWFjdC1yZWZyZXNoLXV0aWxzXFxkaXN0XFxydW50aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcnVudGltZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9ydW50aW1lXCIpKTtcbmNvbnN0IGhlbHBlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlcm5hbC9oZWxwZXJzXCIpKTtcbi8vIEhvb2sgaW50byBSZWFjdERPTSBpbml0aWFsaXphdGlvblxucnVudGltZV8xLmRlZmF1bHQuaW5qZWN0SW50b0dsb2JhbEhvb2soc2VsZik7XG4vLyBSZWdpc3RlciBnbG9iYWwgaGVscGVyc1xuc2VsZi4kUmVmcmVzaEhlbHBlcnMkID0gaGVscGVyc18xLmRlZmF1bHQ7XG4vLyBSZWdpc3RlciBhIGhlbHBlciBmb3IgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRpb25cbnNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kID0gZnVuY3Rpb24gKHdlYnBhY2tNb2R1bGVJZCkge1xuICAgIHZhciBwcmV2UmVmcmVzaFJlZyA9IHNlbGYuJFJlZnJlc2hSZWckO1xuICAgIHZhciBwcmV2UmVmcmVzaFNpZyA9IHNlbGYuJFJlZnJlc2hTaWckO1xuICAgIHNlbGYuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24gKHR5cGUsIGlkKSB7XG4gICAgICAgIHJ1bnRpbWVfMS5kZWZhdWx0LnJlZ2lzdGVyKHR5cGUsIHdlYnBhY2tNb2R1bGVJZCArICcgJyArIGlkKTtcbiAgICB9O1xuICAgIHNlbGYuJFJlZnJlc2hTaWckID0gcnVudGltZV8xLmRlZmF1bHQuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG4gICAgLy8gTW9kZWxlZCBhZnRlciBgdXNlRWZmZWN0YCBjbGVhbnVwIHBhdHRlcm46XG4gICAgLy8gaHR0cHM6Ly9yZWFjdC5kZXYvbGVhcm4vc3luY2hyb25pemluZy13aXRoLWVmZmVjdHMjc3RlcC0zLWFkZC1jbGVhbnVwLWlmLW5lZWRlZFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hSZWckID0gcHJldlJlZnJlc2hSZWc7XG4gICAgICAgIHNlbGYuJFJlZnJlc2hTaWckID0gcHJldlJlZnJlc2hTaWc7XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydW50aW1lLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js\n"));

/***/ }),

/***/ "(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("/**\n * @license React\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\nvar REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\nvar REACT_MEMO_TYPE = Symbol.for('react.memo');\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUEsbURBQW1EO0FBQ25EOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQSwrQkFBK0I7O0FBRS9CLDhCQUE4Qjs7QUFFOUIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixrQkFBa0I7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw2REFBNkQ7QUFDN0QsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7O0FBRVI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBb0M7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7OztBQUdkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxZQUFZOzs7QUFHWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixzQ0FBc0M7QUFDdEMsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxpb3NpZlxcRHJvcGJveFxcY19wbGF5bml0ZVxccGxheW5pdGVfbmV4dFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxjb21waWxlZFxccmVhY3QtcmVmcmVzaFxcY2pzXFxyZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xuXG52YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwOyAvLyBXZSBuZXZlciByZW1vdmUgdGhlc2UgYXNzb2NpYXRpb25zLlxuLy8gSXQncyBPSyB0byByZWZlcmVuY2UgZmFtaWxpZXMsIGJ1dCB1c2UgV2Vha01hcC9TZXQgZm9yIHR5cGVzLlxuXG52YXIgYWxsRmFtaWxpZXNCeUlEID0gbmV3IE1hcCgpO1xudmFyIGFsbEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xuLy8gdGhhdCBoYXZlIGFjdHVhbGx5IGJlZW4gZWRpdGVkIGhlcmUuIFRoaXMga2VlcHMgY2hlY2tzIGZhc3QuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciB1cGRhdGVkRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgaXMgY2xlYXJlZCBvbiBldmVyeSBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbC5cbi8vIEl0IGlzIGFuIGFycmF5IG9mIFtGYW1pbHksIE5leHRUeXBlXSB0dXBsZXMuXG5cbnZhciBwZW5kaW5nVXBkYXRlcyA9IFtdOyAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSByZW5kZXJlciB2aWEgRGV2VG9vbHMgZ2xvYmFsIGhvb2suXG5cbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xudmFyIGhlbHBlcnNCeVJvb3QgPSBuZXcgTWFwKCk7IC8vIFdlIGtlZXAgdHJhY2sgb2YgbW91bnRlZCByb290cyBzbyB3ZSBjYW4gc2NoZWR1bGUgdXBkYXRlcy5cblxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cblxudmFyIGZhaWxlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJbiBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IFdlYWtNYXAsIHdlIGFsc28gcmVtZW1iZXIgdGhlIGxhc3QgZWxlbWVudCBmb3IgZXZlcnkgcm9vdC5cbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxuLy8gSWYgdGhlcmUgaXMgbm8gV2Vha01hcCwgd2Ugd29uJ3QgYXR0ZW1wdCB0byBkbyByZXRyeWluZy5cbi8vICRGbG93SXNzdWVcblxudmFyIHJvb3RFbGVtZW50cyA9IC8vICRGbG93SXNzdWVcbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpIHtcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5mdWxsS2V5O1xuICB9XG5cbiAgdmFyIGZ1bGxLZXkgPSBzaWduYXR1cmUub3duS2V5O1xuICB2YXIgaG9va3M7XG5cbiAgdHJ5IHtcbiAgICBob29rcyA9IHNpZ25hdHVyZS5nZXRDdXN0b21Ib29rcygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIGV4cHJlc3Npb24gbGlrZSBGb28udXNlU29tZXRoaW5nXG4gICAgLy8gZGVwZW5kcyBvbiBGb28gd2hpY2ggaXMgbGF6aWx5IGluaXRpYWxpemVkIGR1cmluZyByZW5kZXJpbmcuXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBob29rID0gaG9va3NbaV07XG5cbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFNvbWV0aGluZydzIHdyb25nLiBBc3N1bWUgd2UgbmVlZCB0byByZW1vdW50LlxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgICAgcmV0dXJuIGZ1bGxLZXk7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChob29rKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIHNpZ25hdHVyZSBtZWFucyBIb29rIHdhc24ndCBpbiB0aGUgc291cmNlIGNvZGUsIGUuZy4gaW4gYSBsaWJyYXJ5LlxuICAgICAgLy8gV2UnbGwgc2tpcCBpdCBiZWNhdXNlIHdlIGNhbiBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlIGR1cmluZyB0aGlzIHNlc3Npb24uXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xuICB9XG5cbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICByZXR1cm4gZnVsbEtleTtcbn1cblxuZnVuY3Rpb24gaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChwcmV2VHlwZSk7XG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgJiYgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wdXRlRnVsbEtleShwcmV2U2lnbmF0dXJlKSAhPT0gY29tcHV0ZUZ1bGxLZXkobmV4dFNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgaWYgKGlzUmVhY3RDbGFzcyhwcmV2VHlwZSkgfHwgaXNSZWFjdENsYXNzKG5leHRUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUZhbWlseSh0eXBlKSB7XG4gIC8vIE9ubHkgY2hlY2sgdXBkYXRlZCB0eXBlcyB0byBrZWVwIGxvb2t1cHMgZmFzdC5cbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG59IC8vIElmIHdlIGRpZG4ndCBjYXJlIGFib3V0IElFMTEsIHdlIGNvdWxkIHVzZSBuZXcgTWFwL1NldChpdGVyYWJsZSkuXG5cblxuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBjbG9uZSA9IG5ldyBNYXAoKTtcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjbG9uZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xuICB2YXIgY2xvbmUgPSBuZXcgU2V0KCk7XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNsb25lLmFkZCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59IC8vIFRoaXMgaXMgYSBzYWZldHkgbWVjaGFuaXNtIHRvIHByb3RlY3QgYWdhaW5zdCByb2d1ZSBnZXR0ZXJzIGFuZCBQcm94aWVzLlxuXG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb2JqZWN0W3Byb3BlcnR5XTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSW50ZW50aW9uYWxseSBpZ25vcmUuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJmb3JtUmVhY3RSZWZyZXNoKCkge1xuXG4gIGlmIChwZW5kaW5nVXBkYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIHZhciBzdGFsZUZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVkRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZXMgPSBwZW5kaW5nVXBkYXRlcztcbiAgICBwZW5kaW5nVXBkYXRlcyA9IFtdO1xuICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGZhbWlseSA9IF9yZWZbMF0sXG4gICAgICAgICAgbmV4dFR5cGUgPSBfcmVmWzFdO1xuICAgICAgLy8gTm93IHRoYXQgd2UgZ290IGEgcmVhbCBlZGl0LCB3ZSBjYW4gY3JlYXRlIGFzc29jaWF0aW9uc1xuICAgICAgLy8gdGhhdCB3aWxsIGJlIHJlYWQgYnkgdGhlIFJlYWN0IHJlY29uY2lsZXIuXG4gICAgICB2YXIgcHJldlR5cGUgPSBmYW1pbHkuY3VycmVudDtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQocHJldlR5cGUsIGZhbWlseSk7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KG5leHRUeXBlLCBmYW1pbHkpO1xuICAgICAgZmFtaWx5LmN1cnJlbnQgPSBuZXh0VHlwZTsgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBzaG91bGQgYmUgYSByZS1yZW5kZXIgb3IgYSByZS1tb3VudC5cblxuICAgICAgaWYgKGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICAgICAgdXBkYXRlZEZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhbGVGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH1cbiAgICB9KTsgLy8gVE9ETzogcmVuYW1lIHRoZXNlIGZpZWxkcyB0byBzb21ldGhpbmcgbW9yZSBtZWFuaW5nZnVsLlxuXG4gICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgIHVwZGF0ZWRGYW1pbGllczogdXBkYXRlZEZhbWlsaWVzLFxuICAgICAgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIHJlLXJlbmRlciBwcmVzZXJ2aW5nIHN0YXRlXG4gICAgICBzdGFsZUZhbWlsaWVzOiBzdGFsZUZhbWlsaWVzIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCBiZSByZW1vdW50ZWRcblxuICAgIH07XG4gICAgaGVscGVyc0J5UmVuZGVyZXJJRC5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXJzKSB7XG4gICAgICAvLyBFdmVuIGlmIHRoZXJlIGFyZSBubyByb290cywgc2V0IHRoZSBoYW5kbGVyIG9uIGZpcnN0IHVwZGF0ZS5cbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IGlmICpuZXcqIHJvb3RzIGFyZSBtb3VudGVkLCB0aGV5J2xsIHVzZSB0aGUgcmVzb2x2ZSBoYW5kbGVyLlxuICAgICAgaGVscGVycy5zZXRSZWZyZXNoSGFuZGxlcihyZXNvbHZlRmFtaWx5KTtcbiAgICB9KTtcbiAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgZmlyc3RFcnJvciA9IG51bGw7IC8vIFdlIHNuYXBzaG90IG1hcHMgYW5kIHNldHMgdGhhdCBhcmUgbXV0YXRlZCBkdXJpbmcgY29tbWl0cy5cbiAgICAvLyBJZiB3ZSBkb24ndCBkbyB0aGlzLCB0aGVyZSBpcyBhIHJpc2sgdGhleSB3aWxsIGJlIG11dGF0ZWQgd2hpbGVcbiAgICAvLyB3ZSBpdGVyYXRlIG92ZXIgdGhlbS4gRm9yIGV4YW1wbGUsIHRyeWluZyB0byByZWNvdmVyIGEgZmFpbGVkIHJvb3RcbiAgICAvLyBtYXkgY2F1c2UgYW5vdGhlciByb290IHRvIGJlIGFkZGVkIHRvIHRoZSBmYWlsZWQgbGlzdCAtLSBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgdmFyIGZhaWxlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChmYWlsZWRSb290cyk7XG4gICAgdmFyIG1vdW50ZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQobW91bnRlZFJvb3RzKTtcbiAgICB2YXIgaGVscGVyc0J5Um9vdFNuYXBzaG90ID0gY2xvbmVNYXAoaGVscGVyc0J5Um9vdCk7XG4gICAgZmFpbGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmYWlsZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgZmFpbGVkLlxuICAgICAgfVxuXG4gICAgICBpZiAocm9vdEVsZW1lbnRzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb290RWxlbWVudHMuaGFzKHJvb3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSByb290RWxlbWVudHMuZ2V0KHJvb3QpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUm9vdChyb290LCBlbGVtZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb3VudGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtb3VudGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIG1vdW50ZWQuXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSZWZyZXNoKHJvb3QsIHVwZGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgIHRocm93IGZpcnN0RXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIGlkKSB7XG4gIHtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgd2UgcmVnaXN0ZXJcbiAgICAvLyByZXR1cm4gdmFsdWUgb2YgYSBIT0MgYnV0IGl0IHJldHVybnMgYSBjYWNoZWQgY29tcG9uZW50LlxuICAgIC8vIElnbm9yZSBhbnl0aGluZyBidXQgdGhlIGZpcnN0IHJlZ2lzdHJhdGlvbiBmb3IgZWFjaCB0eXBlLlxuXG5cbiAgICBpZiAoYWxsRmFtaWxpZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDcmVhdGUgZmFtaWx5IG9yIHJlbWVtYmVyIHRvIHVwZGF0ZSBpdC5cbiAgICAvLyBOb25lIG9mIHRoaXMgYm9va2tlZXBpbmcgYWZmZWN0cyByZWNvbmNpbGlhdGlvblxuICAgIC8vIHVudGlsIHRoZSBmaXJzdCBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbCBhYm92ZS5cblxuXG4gICAgdmFyIGZhbWlseSA9IGFsbEZhbWlsaWVzQnlJRC5nZXQoaWQpO1xuXG4gICAgaWYgKGZhbWlseSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmYW1pbHkgPSB7XG4gICAgICAgIGN1cnJlbnQ6IHR5cGVcbiAgICAgIH07XG4gICAgICBhbGxGYW1pbGllc0J5SUQuc2V0KGlkLCBmYW1pbHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nVXBkYXRlcy5wdXNoKFtmYW1pbHksIHR5cGVdKTtcbiAgICB9XG5cbiAgICBhbGxGYW1pbGllc0J5VHlwZS5zZXQodHlwZSwgZmFtaWx5KTsgLy8gVmlzaXQgaW5uZXIgdHlwZXMgYmVjYXVzZSB3ZSBtaWdodCBub3QgaGF2ZSByZWdpc3RlcmVkIHRoZW0uXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUucmVuZGVyLCBpZCArICckcmVuZGVyJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS50eXBlLCBpZCArICckdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc2V0U2lnbmF0dXJlKHR5cGUsIGtleSkge1xuICB2YXIgZm9yY2VSZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gIHZhciBnZXRDdXN0b21Ib29rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuXG4gIHtcbiAgICBpZiAoIWFsbFNpZ25hdHVyZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICBhbGxTaWduYXR1cmVzQnlUeXBlLnNldCh0eXBlLCB7XG4gICAgICAgIGZvcmNlUmVzZXQ6IGZvcmNlUmVzZXQsXG4gICAgICAgIG93bktleToga2V5LFxuICAgICAgICBmdWxsS2V5OiBudWxsLFxuICAgICAgICBnZXRDdXN0b21Ib29rczogZ2V0Q3VzdG9tSG9va3MgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHNpZ25lZCB0aGVtLlxuXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLnJlbmRlciwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUudHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59IC8vIFRoaXMgaXMgbGF6aWx5IGNhbGxlZCBkdXJpbmcgZmlyc3QgcmVuZGVyIGZvciBhIHR5cGUuXG4vLyBJdCBjYXB0dXJlcyBIb29rIGxpc3QgYXQgdGhhdCB0aW1lIHNvIGlubGluZSByZXF1aXJlcyBkb24ndCBicmVhayBjb21wYXJpc29ucy5cblxuZnVuY3Rpb24gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHR5cGUpIHtcbiAge1xuICAgIHZhciBzaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldCh0eXBlKTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5SUQoaWQpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlUeXBlKHR5cGUpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMoZmFtaWxpZXMpIHtcbiAge1xuICAgIHZhciBhZmZlY3RlZEluc3RhbmNlcyA9IG5ldyBTZXQoKTtcbiAgICBtb3VudGVkUm9vdHMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zdGFuY2VzRm9yUm9vdCA9IGhlbHBlcnMuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKHJvb3QsIGZhbWlsaWVzKTtcbiAgICAgIGluc3RhbmNlc0ZvclJvb3QuZm9yRWFjaChmdW5jdGlvbiAoaW5zdCkge1xuICAgICAgICBhZmZlY3RlZEluc3RhbmNlcy5hZGQoaW5zdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRJbnN0YW5jZXM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdEludG9HbG9iYWxIb29rKGdsb2JhbE9iamVjdCkge1xuICB7XG4gICAgLy8gRm9yIFJlYWN0IE5hdGl2ZSwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHJlcXVpcmUoJ3JlYWN0LWRldnRvb2xzLWNvcmUnKS5cbiAgICAvLyBUaGF0IGNvZGUgd2lsbCBydW4gYmVmb3JlIHVzLiBTbyB3ZSBuZWVkIHRvIG1vbmtleXBhdGNoIGZ1bmN0aW9ucyBvbiBleGlzdGluZyBob29rLlxuICAgIC8vIEZvciBSZWFjdCBXZWIsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgIC8vIFRoaXMgd2lsbCBhbHNvIHJ1biBiZWZvcmUgdXMuXG4gICAgdmFyIGhvb2sgPSBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4gICAgaWYgKGhvb2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSG93ZXZlciwgaWYgdGhlcmUgaXMgbm8gRGV2VG9vbHMgZXh0ZW5zaW9uLCB3ZSdsbCBuZWVkIHRvIHNldCB1cCB0aGUgZ2xvYmFsIGhvb2sgb3Vyc2VsdmVzLlxuICAgICAgLy8gTm90ZSB0aGF0IGluIHRoaXMgY2FzZSBpdCdzIGltcG9ydGFudCB0aGF0IHJlbmRlcmVyIGNvZGUgcnVucyAqYWZ0ZXIqIHRoaXMgbWV0aG9kIGNhbGwuXG4gICAgICAvLyBPdGhlcndpc2UsIHRoZSByZW5kZXJlciB3aWxsIHRoaW5rIHRoYXQgdGhlcmUgaXMgbm8gZ2xvYmFsIGhvb2ssIGFuZCB3b24ndCBkbyB0aGUgaW5qZWN0aW9uLlxuICAgICAgdmFyIG5leHRJRCA9IDA7XG4gICAgICBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID0gaG9vayA9IHtcbiAgICAgICAgcmVuZGVyZXJzOiBuZXcgTWFwKCksXG4gICAgICAgIHN1cHBvcnRzRmliZXI6IHRydWUsXG4gICAgICAgIGluamVjdDogZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRJRCsrO1xuICAgICAgICB9LFxuICAgICAgICBvblNjaGVkdWxlRmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJVbm1vdW50OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaG9vay5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyBUaGlzIGlzbid0IGEgcmVhbCBwcm9wZXJ0eSBvbiB0aGUgaG9vaywgYnV0IGl0IGNhbiBiZSBzZXQgdG8gb3B0IG91dFxuICAgICAgLy8gb2YgRGV2VG9vbHMgaW50ZWdyYXRpb24gYW5kIGFzc29jaWF0ZWQgd2FybmluZ3MgYW5kIGxvZ3MuXG4gICAgICAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnd2FybiddKCdTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiAnICsgJ0Zhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhlcmUsIHdlIGp1c3Qgd2FudCB0byBnZXQgYSByZWZlcmVuY2UgdG8gc2NoZWR1bGVSZWZyZXNoLlxuXG5cbiAgICB2YXIgb2xkSW5qZWN0ID0gaG9vay5pbmplY3Q7XG5cbiAgICBob29rLmluamVjdCA9IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgdmFyIGlkID0gb2xkSW5qZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH07IC8vIERvIHRoZSBzYW1lIGZvciBhbnkgYWxyZWFkeSBpbmplY3RlZCByb290cy5cbiAgICAvLyBUaGlzIGlzIHVzZWZ1bCBpZiBSZWFjdERPTSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTc2MjZcblxuXG4gICAgaG9vay5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5qZWN0ZWQsIGlkKSB7XG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7IC8vIFdlIGFsc28gd2FudCB0byB0cmFjayBjdXJyZW50bHkgbW91bnRlZCByb290cy5cblxuICAgIHZhciBvbGRPbkNvbW1pdEZpYmVyUm9vdCA9IGhvb2sub25Db21taXRGaWJlclJvb3Q7XG5cbiAgICB2YXIgb2xkT25TY2hlZHVsZUZpYmVyUm9vdCA9IGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHtcbiAgICAgIGlmICghaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgICAgICAvLyBJZiBpdCB3YXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQsIGRvbid0IGF0dGVtcHQgdG8gcmVzdG9yZS5cbiAgICAgICAgLy8gVGhpcyBpbmNsdWRlcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCB1bm1vdW50cy5cbiAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgIGlmIChyb290RWxlbWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICByb290RWxlbWVudHMuc2V0KHJvb3QsIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkT25TY2hlZHVsZUZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBob29rLm9uQ29tbWl0RmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJlbmRlcmVySUQuZ2V0KGlkKTtcblxuICAgICAgaWYgKGhlbHBlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoZWxwZXJzQnlSb290LnNldChyb290LCBoZWxwZXJzKTtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSByb290LmN1cnJlbnQ7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSBjdXJyZW50LmFsdGVybmF0ZTsgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGlzIHJvb3QgaGFzIGp1c3QgKHVuKW1vdW50ZWQuXG4gICAgICAgIC8vIFRoaXMgbG9naWMgaXMgY29weS1wYXN0ZWQgZnJvbSBzaW1pbGFyIGxvZ2ljIGluIHRoZSBEZXZUb29scyBiYWNrZW5kLlxuICAgICAgICAvLyBJZiB0aGlzIGJyZWFrcyB3aXRoIHNvbWUgcmVmYWN0b3JpbmcsIHlvdSdsbCB3YW50IHRvIHVwZGF0ZSBEZXZUb29scyB0b28uXG5cbiAgICAgICAgaWYgKGFsdGVybmF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGwgJiYgbW91bnRlZFJvb3RzLmhhcyhyb290KTtcbiAgICAgICAgICB2YXIgaXNNb3VudGVkID0gY3VycmVudC5tZW1vaXplZFN0YXRlICE9IG51bGwgJiYgY3VycmVudC5tZW1vaXplZFN0YXRlLmVsZW1lbnQgIT0gbnVsbDtcblxuICAgICAgICAgIGlmICghd2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXG4gICAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIDsgZWxzZSBpZiAod2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBVbm1vdW50IGFuIGV4aXN0aW5nIHJvb3QuXG4gICAgICAgICAgICBtb3VudGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlbHBlcnNCeVJvb3QuZGVsZXRlKHJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgICBmYWlsZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXG4gICAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbHdheXMgY2FsbCB0aGUgZGVjb3JhdGVkIERldlRvb2xzIGhvb2suXG5cblxuICAgICAgcmV0dXJuIG9sZE9uQ29tbWl0RmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzVW5yZWNvdmVyYWJsZUVycm9ycygpIHtcbiAgLy8gVE9ETzogZGVsZXRlIHRoaXMgYWZ0ZXIgcmVtb3ZpbmcgZGVwZW5kZW5jeSBpbiBSTi5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBFeHBvc2VkIGZvciB0ZXN0aW5nLlxuXG5mdW5jdGlvbiBfZ2V0TW91bnRlZFJvb3RDb3VudCgpIHtcbiAge1xuICAgIHJldHVybiBtb3VudGVkUm9vdHMuc2l6ZTtcbiAgfVxufSAvLyBUaGlzIGlzIGEgd3JhcHBlciBvdmVyIG1vcmUgcHJpbWl0aXZlIGZ1bmN0aW9ucyBmb3Igc2V0dGluZyBzaWduYXR1cmUuXG4vLyBTaWduYXR1cmVzIGxldCB1cyBkZWNpZGUgd2hldGhlciB0aGUgSG9vayBvcmRlciBoYXMgY2hhbmdlZCBvbiByZWZyZXNoLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSB0YXJnZXQsIGUuZy46XG4vLyB2YXIgX3MgPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpXG4vL1xuLy8gZnVuY3Rpb24gSGVsbG8oKSB7XG4vLyAgIGNvbnN0IFtmb28sIHNldEZvb10gPSB1c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgdmFsdWUgPSB1c2VDdXN0b21Ib29rKCk7XG4vLyAgIF9zKCk7IC8qIENhbGwgd2l0aG91dCBhcmd1bWVudHMgdHJpZ2dlcnMgY29sbGVjdGluZyB0aGUgY3VzdG9tIEhvb2sgbGlzdC5cbi8vICAgICAgICAgICogVGhpcyBkb2Vzbid0IGhhcHBlbiBkdXJpbmcgdGhlIG1vZHVsZSBldmFsdWF0aW9uIGJlY2F1c2Ugd2Vcbi8vICAgICAgICAgICogZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIG1vZHVsZSBvcmRlciB3aXRoIGlubGluZSByZXF1aXJlcy5cbi8vICAgICAgICAgICogTmV4dCBjYWxscyBhcmUgbm9vcHMuICovXG4vLyAgIHJldHVybiA8aDE+SGk8L2gxPjtcbi8vIH1cbi8vXG4vLyAvKiBDYWxsIHdpdGggYXJndW1lbnRzIGF0dGFjaGVzIHRoZSBzaWduYXR1cmUgdG8gdGhlIHR5cGU6ICovXG4vLyBfcyhcbi8vICAgSGVsbG8sXG4vLyAgICd1c2VTdGF0ZXtbZm9vLCBzZXRGb29dfSgwKScsXG4vLyAgICgpID0+IFt1c2VDdXN0b21Ib29rXSwgLyogTGF6eSB0byBhdm9pZCB0cmlnZ2VyaW5nIGlubGluZSByZXF1aXJlcyAqL1xuLy8gKTtcblxuZnVuY3Rpb24gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0oKSB7XG4gIHtcbiAgICB2YXIgc2F2ZWRUeXBlO1xuICAgIHZhciBoYXNDdXN0b21Ib29rcztcbiAgICB2YXIgZGlkQ29sbGVjdEhvb2tzID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIGluaXRpYWwgcGhhc2UgdGhhdCBhc3NvY2lhdGVzIHNpZ25hdHVyZXNcbiAgICAgICAgLy8gd2l0aCB0aGUgZnVuY3Rpb25zLiBOb3RlIHRoaXMgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1xuICAgICAgICAvLyBpbiBIT0MgY2hhaW5zIGxpa2UgX3MoaG9jMShfcyhob2MyKF9zKGFjdHVhbEZ1bmN0aW9uKSkpKSkuXG4gICAgICAgIGlmICghc2F2ZWRUeXBlKSB7XG4gICAgICAgICAgLy8gV2UncmUgaW4gdGhlIGlubmVybW9zdCBjYWxsLCBzbyB0aGlzIGlzIHRoZSBhY3R1YWwgdHlwZS5cbiAgICAgICAgICBzYXZlZFR5cGUgPSB0eXBlO1xuICAgICAgICAgIGhhc0N1c3RvbUhvb2tzID0gdHlwZW9mIGdldEN1c3RvbUhvb2tzID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9IC8vIFNldCB0aGUgc2lnbmF0dXJlIGZvciBhbGwgdHlwZXMgKGV2ZW4gd3JhcHBlcnMhKSBpbiBjYXNlXG4gICAgICAgIC8vIHRoZXkgaGF2ZSBubyBzaWduYXR1cmVzIG9mIHRoZWlyIG93bi4gVGhpcyBpcyB0byBwcmV2ZW50XG4gICAgICAgIC8vIHByb2JsZW1zIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDQxNy5cblxuXG4gICAgICAgIGlmICh0eXBlICE9IG51bGwgJiYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHRoZSBfcygpIGNhbGwgd2l0aG91dCBhcmd1bWVudHMsIHdoaWNoIG1lYW5zXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHRpbWUgdG8gY29sbGVjdCBjdXN0b20gSG9vayBzaWduYXR1cmVzLlxuICAgICAgICAvLyBPbmx5IGRvIHRoaXMgb25jZS4gVGhpcyBwYXRoIGlzIGhvdCBhbmQgcnVucyAqaW5zaWRlKiBldmVyeSByZW5kZXIhXG4gICAgICAgIGlmICghZGlkQ29sbGVjdEhvb2tzICYmIGhhc0N1c3RvbUhvb2tzKSB7XG4gICAgICAgICAgZGlkQ29sbGVjdEhvb2tzID0gdHJ1ZTtcbiAgICAgICAgICBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUoc2F2ZWRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTGlrZWx5Q29tcG9uZW50VHlwZSh0eXBlKSB7XG4gIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB0eXBlKSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBGaXJzdCwgZGVhbCB3aXRoIGNsYXNzZXMuXG4gICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgIC8vIFJlYWN0IGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG93bk5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModHlwZS5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgICBpZiAob3duTmFtZXMubGVuZ3RoID4gMSB8fCBvd25OYW1lc1swXSAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cblxuXG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuX19wcm90b19fICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgIC8vIEl0IGhhcyBhIHN1cGVyY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gUGFzcyB0aHJvdWdoLlxuICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgcmVndWxhciBmdW5jdGlvbiB3aXRoIGVtcHR5IHByb3RvdHlwZS5cblxuICAgICAgICAgIH0gLy8gRm9yIHBsYWluIGZ1bmN0aW9ucyBhbmQgYXJyb3dzLCB1c2UgbmFtZSBhcyBhIGhldXJpc3RpYy5cblxuXG4gICAgICAgICAgdmFyIG5hbWUgPSB0eXBlLm5hbWUgfHwgdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIC9eW0EtWl0vLnRlc3QobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmICh0eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgICAvLyBEZWZpbml0ZWx5IFJlYWN0IGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5fZ2V0TW91bnRlZFJvb3RDb3VudCA9IF9nZXRNb3VudGVkUm9vdENvdW50O1xuZXhwb3J0cy5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUgPSBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU7XG5leHBvcnRzLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG5leHBvcnRzLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMgPSBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzO1xuZXhwb3J0cy5nZXRGYW1pbHlCeUlEID0gZ2V0RmFtaWx5QnlJRDtcbmV4cG9ydHMuZ2V0RmFtaWx5QnlUeXBlID0gZ2V0RmFtaWx5QnlUeXBlO1xuZXhwb3J0cy5oYXNVbnJlY292ZXJhYmxlRXJyb3JzID0gaGFzVW5yZWNvdmVyYWJsZUVycm9ycztcbmV4cG9ydHMuaW5qZWN0SW50b0dsb2JhbEhvb2sgPSBpbmplY3RJbnRvR2xvYmFsSG9vaztcbmV4cG9ydHMuaXNMaWtlbHlDb21wb25lbnRUeXBlID0gaXNMaWtlbHlDb21wb25lbnRUeXBlO1xuZXhwb3J0cy5wZXJmb3JtUmVhY3RSZWZyZXNoID0gcGVyZm9ybVJlYWN0UmVmcmVzaDtcbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmV4cG9ydHMuc2V0U2lnbmF0dXJlID0gc2V0U2lnbmF0dXJlO1xuICB9KSgpO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js\n"));

/***/ }),

/***/ "(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/runtime.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/compiled/react-refresh/runtime.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxzTUFBc0U7QUFDeEUiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW9zaWZcXERyb3Bib3hcXGNfcGxheW5pdGVcXHBsYXluaXRlX25leHRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcY29tcGlsZWRcXHJlYWN0LXJlZnJlc2hcXHJ1bnRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./node_modules/next/dist/compiled/react-refresh/runtime.js\n"));

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("static/webpack/" + __webpack_require__.h() + ".react-refresh.hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("80facea49ec2627f")
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
/******/ 		var dataWebpackPrefix = "_N_E:";
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
/******/ 		
/******/ 				script.src = __webpack_require__.tu(url);
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
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script),
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"react-refresh": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_N_E"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("(pages-dir-browser)/./node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;