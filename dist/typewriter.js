(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueTypewriter"] = factory();
	else
		root["VueTypewriter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Typewriter = __webpack_require__(1);
	
	var _Typewriter2 = _interopRequireDefault(_Typewriter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (window.Vue) {
	  window.Vue.component('typewriter', _Typewriter2.default);
	}
	
	exports.default = _Typewriter2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(2)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/eduardostuart/Code/Projects/vue-typewriter/src/Typewriter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0971b9ea", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0971b9ea", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Typewriter.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0971b9ea!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typewriter.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0971b9ea!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Typewriter.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.typewriter-selected{\n  background-color: rgba(0,0,0,.1);\n}\n.typewriter-cursor{\n    opacity: 1;\n    animation: blink 0.7s infinite;\n    position: relative;\n    top:-3px;\n    left:-12px;\n}\n@keyframes blink{\n0% { opacity:1;\n}\n50% { opacity:0;\n}\n100% { opacity:1;\n}\n}\n", "", {"version":3,"sources":["/./src/Typewriter.vue?bf505f4a"],"names":[],"mappings":";AAEA;EACA,iCAAA;CACA;AACA;IACA,WAAA;IACA,+BAAA;IACA,mBAAA;IACA,SAAA;IACA,WAAA;CACA;AACA;AACA,KAAA,UAAA;CAAA;AACA,MAAA,UAAA;CAAA;AACA,OAAA,UAAA;CAAA;CACA","file":"Typewriter.vue","sourcesContent":["<template src=\"./template.html\"></template>\n<style>\n.typewriter-selected{\n  background-color: rgba(0,0,0,.1);\n}\n.typewriter-cursor{\n    opacity: 1;\n    animation: blink 0.7s infinite;\n    position: relative;\n    top:-3px;\n    left:-12px;\n}\n@keyframes blink{\n    0% { opacity:1; }\n    50% { opacity:0; }\n    100% { opacity:1; }\n}\n</style>\n<script>\nexport default {\n  props: {\n    words: {\n      type: Array,\n      default () {\n        return []\n      }\n    },\n    interval: {\n      type: Number,\n      default: 200\n    },\n    speed: {\n      type: Number,\n      default: 300\n    },\n    cursor: {\n      type: Boolean,\n      default: true\n    },\n    cursorSymbol: {\n      type: String,\n      default: '|'\n    },\n    fullErase: {\n      type: Boolean,\n      default: false\n    }\n  },\n  data () {\n    return {\n      typePos: 0,\n      isTyping: false,\n      isWaiting: false,\n      currentWordPos: null,\n      currentWord: null,\n      typing: null,\n      isFullErasing: false\n    }\n  },\n  computed: {\n    isErasing () {\n      return !this.isTyping\n    },\n    finishTyping () {\n      if (this.typing === null || this.currentWord === null) return false\n      if (!this.hasStarted) return false\n      return this.isTyping && this.typing.length >= this.currentWord.length\n    },\n    hasStarted () {\n      return this.currentWord !== null\n    },\n    isErased () {\n      if (!this.hasStarted) return false\n      if (this.isErasing && this.typing === null) return true\n      return this.isErasing && this.typing.length <= 0\n    },\n    isLastWord () {\n      return this.hasStarted && this.currentWordPos >= (this.words.length - 1)\n    }\n  },\n  mounted () {\n    this.type()\n  },\n  beforeDestroy () {\n    this.destroyTimers()\n  },\n  methods: {\n    destroyTimers () {\n      this.destroyTypeInterval()\n      this.destroyCharTimeout()\n      this.destroyFullEraseTimeout()\n    },\n    destroyTypeInterval () {\n      if (this.typeInterval) {\n        clearInterval(this.typeInterval)\n      }\n    },\n    destroyCharTimeout () {\n      if (this.charTimeout) {\n        clearTimeout(this.charTimeout)\n      }\n    },\n    destroyFullEraseTimeout () {\n      if (this.fullEraseTimeout) {\n        clearTimeout(this.fullEraseTimeout)\n      }\n    },\n    next () {\n      if (!this.canContinue()) return\n\n      if (!this.hasStarted) {\n        this.currentWordPos = 0\n      } else {\n        if (this.isLastWord) {\n          this.currentWordPos = 0\n        } else {\n          this.currentWordPos++\n        }\n      }\n\n      this.isWaiting = true\n\n      this.charTimeout = setTimeout(() => {\n        this.destroyCharTimeout()\n        this.isWaiting = false\n        this.currentWord = this.words[this.currentWordPos]\n        this.typePos = this.isTyping ? this.currentWord.length : 0\n        this.isTyping = !this.isTyping\n      }, this.interval)\n    },\n    canContinue () {\n      if (this.isWaiting) return false\n\n      if (this.isTyping && !this.finishTyping && this.hasStarted) {\n        return false\n      }\n\n      if (this.isErasing && !this.isErased && this.hasStarted) {\n        return false\n      }\n\n      if (this.isTyping && this.finishTyping) {\n        this.isTyping = !this.isTyping\n        this.doFullErase()\n        return false\n      }\n\n      return true\n    },\n    doFullErase () {\n      if (this.fullErase && !this.isFullErasing) {\n        this.isFullErasing = true\n        this.isWaiting = true\n\n        this.fullEraseTimeout = setTimeout(() => {\n          clearTimeout(this.fullEraseTimeout)\n          this.reset()\n        }, 300)\n      }\n    },\n    reset () {\n      this.isWaiting = false\n      this.typing = null\n      this.typePos = 0\n      this.isFullErasing = false\n    },\n    type () {\n      this.destroyTypeInterval()\n\n      this.typeInterval = setInterval(() => {\n        this.next()\n\n        if (this.hasStarted && !this.isWaiting) {\n          if (this.isTyping) {\n            this.typePos++\n          } else {\n            this.typePos--\n          }\n          this.typing = this.currentWord.substr(0, this.typePos)\n        }\n      }, this.speed)\n    }\n  }\n}\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    words: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    interval: {
	      type: Number,
	      default: 200
	    },
	    speed: {
	      type: Number,
	      default: 300
	    },
	    cursor: {
	      type: Boolean,
	      default: true
	    },
	    cursorSymbol: {
	      type: String,
	      default: '|'
	    },
	    fullErase: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      typePos: 0,
	      isTyping: false,
	      isWaiting: false,
	      currentWordPos: null,
	      currentWord: null,
	      typing: null,
	      isFullErasing: false
	    };
	  },
	
	  computed: {
	    isErasing: function isErasing() {
	      return !this.isTyping;
	    },
	    finishTyping: function finishTyping() {
	      if (this.typing === null || this.currentWord === null) return false;
	      if (!this.hasStarted) return false;
	      return this.isTyping && this.typing.length >= this.currentWord.length;
	    },
	    hasStarted: function hasStarted() {
	      return this.currentWord !== null;
	    },
	    isErased: function isErased() {
	      if (!this.hasStarted) return false;
	      if (this.isErasing && this.typing === null) return true;
	      return this.isErasing && this.typing.length <= 0;
	    },
	    isLastWord: function isLastWord() {
	      return this.hasStarted && this.currentWordPos >= this.words.length - 1;
	    }
	  },
	  mounted: function mounted() {
	    this.type();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.destroyTimers();
	  },
	
	  methods: {
	    destroyTimers: function destroyTimers() {
	      this.destroyTypeInterval();
	      this.destroyCharTimeout();
	      this.destroyFullEraseTimeout();
	    },
	    destroyTypeInterval: function destroyTypeInterval() {
	      if (this.typeInterval) {
	        clearInterval(this.typeInterval);
	      }
	    },
	    destroyCharTimeout: function destroyCharTimeout() {
	      if (this.charTimeout) {
	        clearTimeout(this.charTimeout);
	      }
	    },
	    destroyFullEraseTimeout: function destroyFullEraseTimeout() {
	      if (this.fullEraseTimeout) {
	        clearTimeout(this.fullEraseTimeout);
	      }
	    },
	    next: function next() {
	      var _this = this;
	
	      if (!this.canContinue()) return;
	
	      if (!this.hasStarted) {
	        this.currentWordPos = 0;
	      } else {
	        if (this.isLastWord) {
	          this.currentWordPos = 0;
	        } else {
	          this.currentWordPos++;
	        }
	      }
	
	      this.isWaiting = true;
	
	      this.charTimeout = setTimeout(function () {
	        _this.destroyCharTimeout();
	        _this.isWaiting = false;
	        _this.currentWord = _this.words[_this.currentWordPos];
	        _this.typePos = _this.isTyping ? _this.currentWord.length : 0;
	        _this.isTyping = !_this.isTyping;
	      }, this.interval);
	    },
	    canContinue: function canContinue() {
	      if (this.isWaiting) return false;
	
	      if (this.isTyping && !this.finishTyping && this.hasStarted) {
	        return false;
	      }
	
	      if (this.isErasing && !this.isErased && this.hasStarted) {
	        return false;
	      }
	
	      if (this.isTyping && this.finishTyping) {
	        this.isTyping = !this.isTyping;
	        this.doFullErase();
	        return false;
	      }
	
	      return true;
	    },
	    doFullErase: function doFullErase() {
	      var _this2 = this;
	
	      if (this.fullErase && !this.isFullErasing) {
	        this.isFullErasing = true;
	        this.isWaiting = true;
	
	        this.fullEraseTimeout = setTimeout(function () {
	          clearTimeout(_this2.fullEraseTimeout);
	          _this2.reset();
	        }, 300);
	      }
	    },
	    reset: function reset() {
	      this.isWaiting = false;
	      this.typing = null;
	      this.typePos = 0;
	      this.isFullErasing = false;
	    },
	    type: function type() {
	      var _this3 = this;
	
	      this.destroyTypeInterval();
	
	      this.typeInterval = setInterval(function () {
	        _this3.next();
	
	        if (_this3.hasStarted && !_this3.isWaiting) {
	          if (_this3.isTyping) {
	            _this3.typePos++;
	          } else {
	            _this3.typePos--;
	          }
	          _this3.typing = _this3.currentWord.substr(0, _this3.typePos);
	        }
	      }, this.speed);
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('span', {
	    staticClass: "typewriter"
	  }, [_t("default"), " ", _h('span', {
	    staticClass: "typewriter-msg",
	    class: {
	      "typewriter-selected": isFullErasing
	    }
	  }, [_s(typing)]), " ", (cursor) ? _h('span', {
	    staticClass: "typewriter-cursor"
	  }, [_s(cursorSymbol)]) : _e()])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0971b9ea", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=typewriter.js.map