# Class 的继承

## 简易的类继承

+ [src/extends-class.js](https://github.com/unclay/es6/blob/master/src/extends-class.js)
```javascript
class Point {
}
class ColorPoint extends Point {
}
```

+ [dist/loose/extends-class.js](https://github.com/unclay/es6/blob/master/dist/loose/extends-class.js)
```javascript
// 继承 prototype，设置 constructor，设置 __proto__（__proto__非标准，但大部分浏览器支持）
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Point = function Point() {};

var ColorPoint =
function (_Point) {
  _inheritsLoose(ColorPoint, _Point);
  function ColorPoint() {
    // 调用父类构造函数
    return _Point.apply(this, arguments) || this;
  }
  return ColorPoint;
}(Point);
```

+ [dist/normal/extends-class.js](https://github.com/unclay/es6/blob/master/dist/normal/extends-class.js)
```javascript
// 此处省略 _classCallCheck 方法（如有需要，请前往 class.md 查看）
// 类型判断，包括 symbol 类型  
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) { return typeof obj; };
  } else {
    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  }
  return _typeof(obj);
}
// 检查是否是构造函数返回的值
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
// 校验有没有调用 super() 来初始化构造函数
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); 
  }
  return self;
}
// 从子类获取父类，获取对象的原型
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// 子类继承父类的 prototype
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  }); 
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// 为子类设置父类，为对象创建原型链
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Point = function Point() {
  _classCallCheck(this, Point);
};

var ColorPoint =
function (_Point) {
  _inherits(ColorPoint, _Point);
  function ColorPoint() {
    _classCallCheck(this, ColorPoint);
    return _possibleConstructorReturn(this, _getPrototypeOf(ColorPoint).apply(this, arguments));
  }
  return ColorPoint;
}(Point);
```

## 子类覆盖父类方法，并调用父类方法

+ [src/extends-class-property.js](https://github.com/unclay/es6/blob/master/src/extends-class-property.js)
```javascript
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}
```

+ [dist/loose/extends-class-property.js](https://github.com/unclay/es6/blob/master/dist/loose/extends-class-property.js)
```javascript
// 此处省略 _inheritsLoose 方法（如有需要，请前往上面查看）
var ColorPoint =
function (_Point) {
  _inheritsLoose(ColorPoint, _Point);
  function ColorPoint(x, y, color) {
    var _this;
    _this = _Point.call(this, x, y) || this; // 调用父类的constructor(x, y)
    _this.color = color;
    return _this;
  }
  var _proto = ColorPoint.prototype;
  _proto.toString = function toString() {
    return this.color + ' ' + _Point.prototype.toString.call(this); // 调用父类的toString()
  };
  return ColorPoint;
}(Point);
```

+ [dist/normal/extends-class-property.js](https://github.com/unclay/es6/blob/master/dist/normal/extends-class-property.js)
```javascript
// 此处省略 _classCallCheck, _createClass 方法（如有需要，请前往 class.md 查看）
// 此处省略 _typeof, _possibleConstructorReturn, _assertThisInitialized, _getPrototypeOf, _inherits, _setPrototypeOf 方法（如有需要，请前往上面查看）

// 查找目标对象的属性（方法）（雷同 Reflect.get）
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) { return desc.get.call(receiver); }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}
// 找到最顶级的父类
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break; 
  }
  return object;
}

var ColorPoint =
function (_Point) {
  _inherits(ColorPoint, _Point);
  function ColorPoint(x, y, color) {
    var _this;
    _classCallCheck(this, ColorPoint);
    // 相比 loose mode 新的差异性：多了一层 _possibleConstructorReturn 方法
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPoint).call(this, x, y)); // 调用父类的constructor(x, y)
    _this.color = color;
    return _this;
  }
  _createClass(ColorPoint, [{
    key: "toString",
    value: function toString() {
      // 相比 loose mode 新的差异性：多了一层 _get 方法
      return this.color + ' ' + _get(_getPrototypeOf(ColorPoint.prototype), "toString", this).call(this); // 调用父类的toString()
    }
  }]);

  return ColorPoint;
}(Point);
```