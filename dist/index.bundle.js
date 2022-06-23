"use strict";
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  --bgbrown: #f5f5f5;\r\n  --bgwhite: #fff;\r\n  --bgrey: grey;\r\n  --color-primary-rgb: 255, 99, 71;\r\n  --color-primary: tomato;\r\n  --opacity: 0.33;\r\n  --bgblack: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bgbrown);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nheader h1 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nheader h1 a {\r\n  color: var(--bgblack);\r\n  font-weight: bolder;\r\n}\r\n\r\n.container {\r\n  margin-top: 80px;\r\n  border: 1px solid black;\r\n\r\n  /* width: fit-content; */\r\n  padding: 50px;\r\n  background-color: var(--bgwhite);\r\n}\r\n\r\n.msection {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.mtitles div {\r\n  flex-grow: 2;\r\n  font-weight: bolder;\r\n  font-size: 20px;\r\n}\r\n\r\n.msection div:first-child {\r\n  width: 350px;\r\n  padding: 5px 0 5px 0;\r\n  border: 2px solid black;\r\n  margin-right: 30px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.msection div:last-child {\r\n  width: 250px;\r\n  padding: 20px;\r\n}\r\n\r\n.mform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mform input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ntable {\r\n  width: 340px;\r\n}\r\n\r\n/* tbody {\r\n  width: 340px;\r\n} */\r\n\r\n#leader-table tr {\r\n  border-bottom: rgb(184, 184, 184) solid 1px;\r\n  width: 20px;\r\n}\r\n\r\n\r\n#leader-table tr:nth-of-type(even) {\r\n  background-color: #e0e0e0;\r\n  width: 100px;\r\n}\r\n\r\n#leader-table tr:last-of-type {\r\n  border-bottom: aquamarine solid 2px;\r\n  width: 100px;\r\n}\r\n\r\n.mtitles {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mtitles h3 {\r\n  flex-grow: 1;\r\n  margin-left: 0;\r\n}\r\n\r\n.message {\r\n  width: 210px;\r\n  margin-bottom: 20px;\r\n  color:green;\r\n}\r\n.spacer {\r\n  padding-right: 100px;\r\n}\r\n\r\n.loader {\r\n  font-size: 40px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  color: #FF3D00;\r\n  letter-spacing: 2px;\r\n  position: relative;\r\n}\r\n.loader::after {\r\n  content: 'Loading';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  color: rgb(53, 12, 12);\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  animation: animloader 10s ease-in infinite;\r\n}\r\n\r\n@keyframes animloader {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,0EAA0E;EAC1E,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,gCAAgC;EAChC,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;;EAEvB,wBAAwB;EACxB,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;GAEG;;AAEH;EACE,2CAA2C;EAC3C,WAAW;AACb;;;AAGA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;AACb;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,yCAAyC;EACzC,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,0CAA0C;AAC5C;;AAEA;EACE;IACE,SAAS;EACX;EACA;IACE,WAAW;EACb;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins');\r\n\r\n:root {\r\n  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  --bgbrown: #f5f5f5;\r\n  --bgwhite: #fff;\r\n  --bgrey: grey;\r\n  --color-primary-rgb: 255, 99, 71;\r\n  --color-primary: tomato;\r\n  --opacity: 0.33;\r\n  --bgblack: #000;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bgbrown);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nheader h1 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nheader h1 a {\r\n  color: var(--bgblack);\r\n  font-weight: bolder;\r\n}\r\n\r\n.container {\r\n  margin-top: 80px;\r\n  border: 1px solid black;\r\n\r\n  /* width: fit-content; */\r\n  padding: 50px;\r\n  background-color: var(--bgwhite);\r\n}\r\n\r\n.msection {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.mtitles div {\r\n  flex-grow: 2;\r\n  font-weight: bolder;\r\n  font-size: 20px;\r\n}\r\n\r\n.msection div:first-child {\r\n  width: 350px;\r\n  padding: 5px 0 5px 0;\r\n  border: 2px solid black;\r\n  margin-right: 30px;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.msection div:last-child {\r\n  width: 250px;\r\n  padding: 20px;\r\n}\r\n\r\n.mform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.mform input {\r\n  margin-bottom: 20px;\r\n}\r\n\r\ntable {\r\n  width: 340px;\r\n}\r\n\r\n/* tbody {\r\n  width: 340px;\r\n} */\r\n\r\n#leader-table tr {\r\n  border-bottom: rgb(184, 184, 184) solid 1px;\r\n  width: 20px;\r\n}\r\n\r\n\r\n#leader-table tr:nth-of-type(even) {\r\n  background-color: #e0e0e0;\r\n  width: 100px;\r\n}\r\n\r\n#leader-table tr:last-of-type {\r\n  border-bottom: aquamarine solid 2px;\r\n  width: 100px;\r\n}\r\n\r\n.mtitles {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.mtitles h3 {\r\n  flex-grow: 1;\r\n  margin-left: 0;\r\n}\r\n\r\n.message {\r\n  width: 210px;\r\n  margin-bottom: 20px;\r\n  color:green;\r\n}\r\n.spacer {\r\n  padding-right: 100px;\r\n}\r\n\r\n.loader {\r\n  font-size: 40px;\r\n  display: inline-block;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  color: #FF3D00;\r\n  letter-spacing: 2px;\r\n  position: relative;\r\n}\r\n.loader::after {\r\n  content: 'Loading';\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  color: rgb(53, 12, 12);\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  animation: animloader 10s ease-in infinite;\r\n}\r\n\r\n@keyframes animloader {\r\n  0% {\r\n    width: 0%;\r\n  }\r\n  100% {\r\n    width: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_getgames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getgames.js */ "./src/module/getgames.js");
/* harmony import */ var _module_createGames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/createGames.js */ "./src/module/createGames.js");
// import _ from 'lodash';




const refresh = document.getElementById('refresh');

const games = _module_getgames_js__WEBPACK_IMPORTED_MODULE_1__["default"].games();

refresh.addEventListener('click', () => _module_getgames_js__WEBPACK_IMPORTED_MODULE_1__["default"].games())

const createGameBtn = document.getElementById('postBtn');
createGameBtn.addEventListener('click', (e) => _module_createGames_js__WEBPACK_IMPORTED_MODULE_2__["default"].postGame(e));


document.addEventListener('DOMContentLoaded', games);


/***/ }),

/***/ "./src/module/api.js":
/*!***************************!*\
  !*** ./src/module/api.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class API {

    //Get Data from API
    static getdata = async (url) => {
        const res = await fetch(url, { method: 'GET' });
        const result = await res.json();
        return result;
    }

    //Add data to the API
    static postGames = async (url, body) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          });
          const result = await res.json();
          return result;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);



/***/ }),

/***/ "./src/module/createGames.js":
/*!***********************************!*\
  !*** ./src/module/createGames.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/module/api.js");


class createGame {

    static postGame = async (e) => {
       
        e.preventDefault();

        const name = document.querySelector('#name');
        const score = document.querySelector('#score');
        const message = document.querySelector('#message')

        const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B40y3Q2g4raVYYfX4Gif/scores/';

        if(!name.value){
            message.textContent = 'Please enter your name';
            return;
        }

        if(!score.value){
            message.textContent = 'Please enter a score';
            return;
        }

        const mbody = {
            user: name.value,
            score: score.value
        }

        const postGamesApi = await _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].postGames(url, mbody);
        const { result } = postGamesApi;
        message.textContent = result;
        name.value = '';
        score.value = '';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGame);

/***/ }),

/***/ "./src/module/getgames.js":
/*!********************************!*\
  !*** ./src/module/getgames.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/module/api.js");


class GetGames {

 static games = async () => {
  
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B40y3Q2g4raVYYfX4Gif/scores/';
    const getData = await _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].getdata(url);
      
    const { result } = getData;
   
    const displayGames = document.querySelector('#leader-table');
    let gameDisplay = '';

    console.log(result)
     if(result.length > 0 ){
      //const sortedArray = result.sort((a, b) => b.user - a.user);
      const sortedArray = result.sort((a, b) => a.user.localeCompare(b.user));
       
      sortedArray.map((el) => {
        if(typeof el.score !== 'object'){
            gameDisplay += `
            <tr>
                <td>${el.user}</td>
                <td>${el.score}</td>
            </tr>
            `;
        //return el;
        }
       
       })
       displayGames.innerHTML = gameDisplay;
       document.querySelector('.loader').style.display='none';
     }else{
        displayGames.textContent = 'No Game Scores';
        document.querySelector('.loader').style.display='none';
     }
   
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetGames);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUIsc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3NldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3NldHVwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfc2V0dXAvLi9zcmMvbW9kdWxlL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3NldHVwLy4vc3JjL21vZHVsZS9jcmVhdGVHYW1lcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3NldHVwLy4vc3JjL21vZHVsZS9nZXRnYW1lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXHJcXG4gIC0tYmdicm93bjogI2Y1ZjVmNTtcXHJcXG4gIC0tYmd3aGl0ZTogI2ZmZjtcXHJcXG4gIC0tYmdyZXk6IGdyZXk7XFxyXFxuICAtLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDk5LCA3MTtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogdG9tYXRvO1xcclxcbiAgLS1vcGFjaXR5OiAwLjMzO1xcclxcbiAgLS1iZ2JsYWNrOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2Jyb3duKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWJnYmxhY2spO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmd3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5tc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm10aXRsZXMgZGl2IHtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tc2VjdGlvbiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZWN0aW9uIGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1mb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHdpZHRoOiAzNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGJvZHkge1xcclxcbiAgd2lkdGg6IDM0MHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4jbGVhZGVyLXRhYmxlIHRyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IHJnYigxODQsIDE4NCwgMTg0KSBzb2xpZCAxcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2xlYWRlci10YWJsZSB0cjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVhZGVyLXRhYmxlIHRyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBhcXVhbWFyaW5lIHNvbGlkIDJweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm10aXRsZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXRpdGxlcyBoMyB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOmdyZWVuO1xcclxcbn1cXHJcXG4uc3BhY2VyIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI0ZGM0QwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5sb2FkZXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdMb2FkaW5nJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb2xvcjogcmdiKDUzLCAxMiwgMTIpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWxvYWRlciAxMHMgZWFzZS1pbiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltbG9hZGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsMEVBQTBFO0VBQzFFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7O0VBRXZCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7OztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXHJcXG4gIC0tYmdicm93bjogI2Y1ZjVmNTtcXHJcXG4gIC0tYmd3aGl0ZTogI2ZmZjtcXHJcXG4gIC0tYmdyZXk6IGdyZXk7XFxyXFxuICAtLWNvbG9yLXByaW1hcnktcmdiOiAyNTUsIDk5LCA3MTtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogdG9tYXRvO1xcclxcbiAgLS1vcGFjaXR5OiAwLjMzO1xcclxcbiAgLS1iZ2JsYWNrOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2Jyb3duKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWJnYmxhY2spO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxuICAvKiB3aWR0aDogZml0LWNvbnRlbnQ7ICovXFxyXFxuICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmd3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5tc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm10aXRsZXMgZGl2IHtcXHJcXG4gIGZsZXgtZ3JvdzogMjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tc2VjdGlvbiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZWN0aW9uIGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1mb3JtIGlucHV0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIHdpZHRoOiAzNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGJvZHkge1xcclxcbiAgd2lkdGg6IDM0MHB4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4jbGVhZGVyLXRhYmxlIHRyIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IHJnYigxODQsIDE4NCwgMTg0KSBzb2xpZCAxcHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2xlYWRlci10YWJsZSB0cjpudGgtb2YtdHlwZShldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVhZGVyLXRhYmxlIHRyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBhcXVhbWFyaW5lIHNvbGlkIDJweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm10aXRsZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXRpdGxlcyBoMyB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGNvbG9yOmdyZWVuO1xcclxcbn1cXHJcXG4uc3BhY2VyIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI0ZGM0QwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5sb2FkZXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdMb2FkaW5nJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb2xvcjogcmdiKDUzLCAxMiwgMTIpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGFuaW1hdGlvbjogYW5pbWxvYWRlciAxMHMgZWFzZS1pbiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBhbmltbG9hZGVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBHZXRHYW1lcyBmcm9tICcuL21vZHVsZS9nZXRnYW1lcy5qcyc7XG5pbXBvcnQgY3JlYXRlR2FtZSBmcm9tICcuL21vZHVsZS9jcmVhdGVHYW1lcy5qcyc7XG5cbmNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaCcpO1xuXG5jb25zdCBnYW1lcyA9IEdldEdhbWVzLmdhbWVzKCk7XG5cbnJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBHZXRHYW1lcy5nYW1lcygpKVxuXG5jb25zdCBjcmVhdGVHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3RCdG4nKTtcbmNyZWF0ZUdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY3JlYXRlR2FtZS5wb3N0R2FtZShlKSk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGdhbWVzKTtcbiIsImNsYXNzIEFQSSB7XHJcblxyXG4gICAgLy9HZXQgRGF0YSBmcm9tIEFQSVxyXG4gICAgc3RhdGljIGdldGRhdGEgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIGRhdGEgdG8gdGhlIEFQSVxyXG4gICAgc3RhdGljIHBvc3RHYW1lcyA9IGFzeW5jICh1cmwsIGJvZHkpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSTtcclxuXHJcbiIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xyXG5cclxuY2xhc3MgY3JlYXRlR2FtZSB7XHJcblxyXG4gICAgc3RhdGljIHBvc3RHYW1lID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UnKVxyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvQjQweTNRMmc0cmFWWVlmWDRHaWYvc2NvcmVzLyc7XHJcblxyXG4gICAgICAgIGlmKCFuYW1lLnZhbHVlKXtcclxuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgeW91ciBuYW1lJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXNjb3JlLnZhbHVlKXtcclxuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGVhc2UgZW50ZXIgYSBzY29yZSc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1ib2R5ID0ge1xyXG4gICAgICAgICAgICB1c2VyOiBuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBzY29yZTogc2NvcmUudmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc3RHYW1lc0FwaSA9IGF3YWl0IEFQSS5wb3N0R2FtZXModXJsLCBtYm9keSk7XHJcbiAgICAgICAgY29uc3QgeyByZXN1bHQgfSA9IHBvc3RHYW1lc0FwaTtcclxuICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICBzY29yZS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lOyIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xyXG5cclxuY2xhc3MgR2V0R2FtZXMge1xyXG5cclxuIHN0YXRpYyBnYW1lcyA9IGFzeW5jICgpID0+IHtcclxuICBcclxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9CNDB5M1EyZzRyYVZZWWZYNEdpZi9zY29yZXMvJztcclxuICAgIGNvbnN0IGdldERhdGEgPSBhd2FpdCBBUEkuZ2V0ZGF0YSh1cmwpO1xyXG4gICAgICBcclxuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBnZXREYXRhO1xyXG4gICBcclxuICAgIGNvbnN0IGRpc3BsYXlHYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWFkZXItdGFibGUnKTtcclxuICAgIGxldCBnYW1lRGlzcGxheSA9ICcnO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICBpZihyZXN1bHQubGVuZ3RoID4gMCApe1xyXG4gICAgICAvL2NvbnN0IHNvcnRlZEFycmF5ID0gcmVzdWx0LnNvcnQoKGEsIGIpID0+IGIudXNlciAtIGEudXNlcik7XHJcbiAgICAgIGNvbnN0IHNvcnRlZEFycmF5ID0gcmVzdWx0LnNvcnQoKGEsIGIpID0+IGEudXNlci5sb2NhbGVDb21wYXJlKGIudXNlcikpO1xyXG4gICAgICAgXHJcbiAgICAgIHNvcnRlZEFycmF5Lm1hcCgoZWwpID0+IHtcclxuICAgICAgICBpZih0eXBlb2YgZWwuc2NvcmUgIT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZ2FtZURpc3BsYXkgKz0gYFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtlbC51c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtlbC5zY29yZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIC8vcmV0dXJuIGVsO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIGRpc3BsYXlHYW1lcy5pbm5lckhUTUwgPSBnYW1lRGlzcGxheTtcclxuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICB9ZWxzZXtcclxuICAgICAgICBkaXNwbGF5R2FtZXMudGV4dENvbnRlbnQgPSAnTm8gR2FtZSBTY29yZXMnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKS5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0R2FtZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9