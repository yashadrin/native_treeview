/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = function () {
  function BaseElement(parent, type) {
    _classCallCheck(this, BaseElement);

    if (!this.isDomElement(parent)) {
      throw 'parrent is not DomElement';
    };
    this.parent = parent;
    this.element = document.createElement(type);
  }

  _createClass(BaseElement, [{
    key: 'delete',
    value: function _delete() {
      try {
        this.parent.removeChild(this.element);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      try {
        this.parent.appendChild(this.element);
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'isDomElement',
    value: function isDomElement(element) {
      return element.nodeName ? true : false;
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.element;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.element.innerHTML = '';
    }
  }]);

  return BaseElement;
}();

exports.default = BaseElement;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(0);

var _baseElement2 = _interopRequireDefault(_baseElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_BaseElement) {
  _inherits(Button, _BaseElement);

  function Button(parent, text) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, parent, "button"));

    _this.element.innerText = text;
    _this.render();
    return _this;
  }

  _createClass(Button, [{
    key: "addAction",
    value: function addAction(action) {
      this.element.addEventListener("click", action);
    }
  }]);

  return Button;
}(_baseElement2.default);

exports.default = Button;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseElement = __webpack_require__(0);

var _baseElement2 = _interopRequireDefault(_baseElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnsortedList = function (_BaseElement) {
  _inherits(UnsortedList, _BaseElement);

  function UnsortedList(parent, children) {
    _classCallCheck(this, UnsortedList);

    var _this = _possibleConstructorReturn(this, (UnsortedList.__proto__ || Object.getPrototypeOf(UnsortedList)).call(this, parent, "ul"));

    _this.render();
    return _this;
  }

  return UnsortedList;
}(_baseElement2.default);

exports.default = UnsortedList;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseNode = function () {
  function BaseNode() {
    _classCallCheck(this, BaseNode);

    if (new.target === BaseNode) {
      throw new TypeError("Cannot construct Abstract instances");
    }
    this.children = [];
  }

  _createClass(BaseNode, [{
    key: "getDomElement",
    value: function getDomElement() {
      return this.element.getElement();
    }
  }, {
    key: "addChild",
    value: function addChild() {}
  }, {
    key: "deleteChild",
    value: function deleteChild(child) {
      var index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.element.clear();
      this.children = [];
    }
  }, {
    key: "getState",
    value: function getState() {
      var state = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;

          state.push({ name: child.getName(), children: child.getState() });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return state;
    }
  }, {
    key: "addChildren",
    value: function addChildren(children) {}
  }]);

  return BaseNode;
}();

exports.default = BaseNode;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

var _storageService = __webpack_require__(5);

var _storageService2 = _interopRequireDefault(_storageService);

var _nodeWrapper = __webpack_require__(6);

var _nodeWrapper2 = _interopRequireDefault(_nodeWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  try {
    var storageService = new _storageService2.default();
    var buttonWrapper = document.getElementById('buttonWrapper');
    var createButton = new _button2.default(buttonWrapper, "create");
    var saveButton = new _button2.default(buttonWrapper, "save");
    var loadButton = new _button2.default(buttonWrapper, "load");
    var nodeWrapper = new _nodeWrapper2.default(document.getElementById('root'));
    createButton.addAction(function () {
      nodeWrapper.addChild();
    });
    saveButton.addAction(function () {
      storageService.save(nodeWrapper.getState());
    });
    loadButton.addAction(function () {
      var children = storageService.load();
      nodeWrapper.clear();
      nodeWrapper.addChildren(children);
    });
  } catch (e) {
    console.log(e);
  }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageService = function () {
  function StorageService() {
    _classCallCheck(this, StorageService);

    this.key = "TREE_VIEW_KEY";
    if (!window.localStorage) {
      throw 'localStorage is not supported';
    }
  }

  _createClass(StorageService, [{
    key: "save",
    value: function save(json) {
      window.localStorage.setItem(this.key, JSON.stringify(json));
    }
  }, {
    key: "load",
    value: function load() {
      return JSON.parse(window.localStorage.getItem(this.key));
    }
  }]);

  return StorageService;
}();

exports.default = StorageService;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _unsortedList = __webpack_require__(2);

var _unsortedList2 = _interopRequireDefault(_unsortedList);

var _baseNode = __webpack_require__(3);

var _baseNode2 = _interopRequireDefault(_baseNode);

var _node = __webpack_require__(7);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeWrapper = function (_BaseNode) {
  _inherits(NodeWrapper, _BaseNode);

  function NodeWrapper(domElement) {
    _classCallCheck(this, NodeWrapper);

    var _this = _possibleConstructorReturn(this, (NodeWrapper.__proto__ || Object.getPrototypeOf(NodeWrapper)).call(this));

    try {
      _this.element = new _unsortedList2.default(domElement);
    } catch (e) {
      console.log(e);
    }
    return _this;
  }

  _createClass(NodeWrapper, [{
    key: 'addChild',
    value: function addChild() {
      this.children.push(new _node2.default(this));
    }
  }, {
    key: 'addChildren',
    value: function addChildren(children) {
      if (Array.isArray(children)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            var node = new _node2.default(this, child.name);
            node.addChildren(child.children);
            this.children.push(node);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }]);

  return NodeWrapper;
}(_baseNode2.default);

exports.default = NodeWrapper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeElement = __webpack_require__(8);

var _nodeElement2 = _interopRequireDefault(_nodeElement);

var _baseNode = __webpack_require__(3);

var _baseNode2 = _interopRequireDefault(_baseNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Node = function (_BaseNode) {
  _inherits(Node, _BaseNode);

  function Node(parent, name) {
    _classCallCheck(this, Node);

    var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

    if (!parent) throw 'parent element is undefined';
    _this.parent = parent;
    _this.element = new _nodeElement2.default(parent.getDomElement(), name);

    _this.element.setDeleteButtonAction(_this.delete.bind(_this));
    _this.element.setCreateChildButtonAction(_this.addChild.bind(_this));
    return _this;
  }

  _createClass(Node, [{
    key: 'delete',
    value: function _delete() {
      this.element.delete();
      if (this.parent) {
        this.parent.deleteChild(this);
      }
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.element.getName();
    }
  }, {
    key: 'addChild',
    value: function addChild() {
      this.children.push(new Node(this));
    }
  }, {
    key: 'addChildren',
    value: function addChildren(children) {
      if (Array.isArray(children)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            var node = new Node(this, child.name);
            node.addChildren(child.children);
            this.children.push(node);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }]);

  return Node;
}(_baseNode2.default);

exports.default = Node;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _unsortedList = __webpack_require__(2);

var _unsortedList2 = _interopRequireDefault(_unsortedList);

var _button = __webpack_require__(1);

var _button2 = _interopRequireDefault(_button);

var _title = __webpack_require__(9);

var _title2 = _interopRequireDefault(_title);

var _baseElement = __webpack_require__(0);

var _baseElement2 = _interopRequireDefault(_baseElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeElement = function (_BaseElement) {
  _inherits(NodeElement, _BaseElement);

  function NodeElement(parent, name) {
    _classCallCheck(this, NodeElement);

    var _this = _possibleConstructorReturn(this, (NodeElement.__proto__ || Object.getPrototypeOf(NodeElement)).call(this, parent, "li"));

    _this.deleteButton = new _button2.default(_this.element, "delete");
    _this.createChildButton = new _button2.default(_this.element, "add child");
    _this.title = new _title2.default(_this.element, name);
    _this.unsortedList = new _unsortedList2.default(_this.element);
    _this.render();
    return _this;
  }

  _createClass(NodeElement, [{
    key: 'setDeleteButtonAction',
    value: function setDeleteButtonAction(action) {
      this.deleteButton.addAction(action);
    }
  }, {
    key: 'setCreateChildButtonAction',
    value: function setCreateChildButtonAction(action) {
      this.createChildButton.addAction(action);
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.title.getText();
    }
  }, {
    key: 'getWrapperElement',
    value: function getWrapperElement() {
      return this.unsortedList.getElement();
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.unsortedList.getElement();
    }
  }]);

  return NodeElement;
}(_baseElement2.default);

exports.default = NodeElement;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseElement = __webpack_require__(0);

var _baseElement2 = _interopRequireDefault(_baseElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_BaseElement) {
  _inherits(Title, _BaseElement);

  function Title(parent) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "child";

    _classCallCheck(this, Title);

    var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, parent, "input"));

    _this.element.value = text;
    _this.render();
    return _this;
  }

  _createClass(Title, [{
    key: "getText",
    value: function getText() {
      return this.element.value;
    }
  }, {
    key: "render",
    value: function render() {
      this.parent.appendChild(this.element);
    }
  }]);

  return Title;
}(_baseElement2.default);

exports.default = Title;

/***/ })
/******/ ]);