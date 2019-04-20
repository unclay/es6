# Class 的基本语法

## 定义一个类

+ [src/class-define.js](https://github.com/unclay/es6/blob/master/src/class-define.js)
```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

+ [dist/loose/class-define.js](https://github.com/unclay/es6/blob/master/dist/loose/class-define.js)
```javascript
var Point =
function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  var _proto = Point.prototype;
  _proto.toString = function toString() {
    return '(' + this.x + ', ' + this.y + ')';
  };
  return Point;
}();
```

+ [dist/normal/class-define.js](https://github.com/unclay/es6/blob/master/dist/normal/class-define.js)
```javascript
// 检查：class 不能被当作普通函数来执行
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// 对目标进行属性（函数）定义
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
// 扩展属性（函数），两种模式：一种是实例属性（函数），另外一种是类属性（函数）
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
function () {
  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  // 与 loose mode 相比：用了隐式方式来定义 prototype 上的方法
  _createClass(Point, [{
    key: "toString",
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);
  return Point;
}();
```

## 取值函数（getter）和存值函数（setter）

+ [src/class-getter-setter.js](https://github.com/unclay/es6/blob/master/src/class-getter-setter.js)
```js
class MyClass {
  constructor() {
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}
```

+ [dist/loose/class-getter-setter.js](https://github.com/unclay/es6/blob/master/dist/loose/class-getter-setter.js)
```js
// 此处省略 _createClass 方法（如有需要，请前往上面查看）
var MyClass =
function () {
  function MyClass() {}
  _createClass(MyClass, [{
    key: "prop",
    get: function get() {
      return 'getter';
    },
    set: function set(value) {
      console.log('setter: ' + value);
    }
  }]);
  return MyClass;
}();
```

+ [dist/normal/class-getter-setter.js](https://github.com/unclay/es6/blob/master/dist/normal/class-getter-setter.js)
```js
// 此处省略 _classCallCheck, _createClass 方法（如有需要，请前往上面查看）
var MyClass =
function () {
  function MyClass() {
    // 比 normal mode 多加了一层检查
    _classCallCheck(this, MyClass);
  }
  _createClass(MyClass, [{
    key: "prop",
    get: function get() {
      return 'getter';
    },
    set: function set(value) {
      console.log('setter: ' + value);
    }
  }]);
  return MyClass;
}();
```

## 静态函数（static）和静态属性

`ES6` 本身的 `class` 不支持静态属性（不过有新的提案说支持，期待把）

+ [src/class-static.js](https://github.com/unclay/es6/blob/master/src/class-static.js)
```js
class MyClass {
  static prop1() {
    return 'static prop1';
  }
  static get prop2() {
    return 'static prop2';
  }
}
// 变通定义静态属性
MyClass.prop3 = 'static prop3';
```

+ [dist/loose/class-static.js](https://github.com/unclay/es6/blob/master/dist/loose/class-static.js)
```js
// 此处省略 _createClass 方法（如有需要，请前往上面查看）
var MyClass =
function () {
  function MyClass() {}
  MyClass.prop1 = function prop1() {
    return 'static prop1';
  };
  _createClass(MyClass, null, [{
    key: "prop2",
    get: function get() {
      return 'static prop2';
    }
  }]);
  return MyClass;
}();
MyClass.prop3 = 'static prop3';
```

+ [dist/normal/class-static.js](https://github.com/unclay/es6/blob/master/dist/normal/class-static.js)
```js
// 此处省略 _classCallCheck, _createClass 方法（如有需要，请前往上面查看）
var MyClass =
function () {
  function MyClass() {
    _classCallCheck(this, MyClass);
  }
  // 与 loose mode 相比：静态方法无论用不用 getter，最后都是通过隐式定义的
  _createClass(MyClass, null, [{
    key: "prop1",
    value: function prop1() {
      return 'static prop1';
    }
  }, {
    key: "prop2",
    get: function get() {
      return 'static prop2';
    }
  }]);
  return MyClass;
}();
MyClass.prop3 = 'static prop3';
```

## new.target 属性

> new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

+ [src/class-new-target.js](https://github.com/unclay/es6/blob/master/src/class-new-target.js)
```js
function Person(name) {
  if (new.target !== Person) throw new Error('必须使用 new 命令生成实例');
  this.name = name;
}
new.target;
```

+ [dist/loose/class-new-target.js](https://github.com/unclay/es6/blob/master/dist/loose/class-new-target.js) or [dist/normal/class-new-target.js](https://github.com/unclay/es6/blob/master/dist/normal/class-new-target.js)
```js
// loose mode 和 normal mode 代码无差异
function Person(name) {
  if ((this instanceof Person ? this.constructor : void 0) !== Person) throw new Error('必须使用 new 命令生成实例');
  this.name = name;
}
```