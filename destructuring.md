# 变量的解构赋值

## 数组的解构赋值

+ 常规数组

```javascript
let [a, b, c] = [1, 2, 3];
```

```javascript
var a = 1,
    b = 2,
    c = 3;
```

+ 多维数组
```javascript
let [a, [b], [[c]]] = [1, [2], [[3]]]
```
```javascript
var a = 1,
    b = 2,
    c = 3;
```

+ 模式匹配

模式1
```javascript
let [, , c] = [1, 2, 3];
```
```javascript
var _ref = [1, 2, 3],
    c = _ref[2];
```

模式2
```javascript
let [head, ...tail] = [1, 2, 3, 4];
```
```javascript
var head = 1,
    tail = [2, 3, 4];
```

模式3
```javascript
let [x, y, ...z] = ['a'];
```
```javascript
var _ref = ['a'],
    x = _ref[0],
    y = _ref[1],
    z = _ref.slice(2);
```

模式4
```javascript
let [a, [b], d] = [1, [2, 3], 4];
```
```javascript
var a = 1,
    _ref = [2, 3],
    b = _ref[0],
    d = 4;
```

+ 指定默认值

```javascript
let [a = true] = [];
```

```javascript
var _ref = [],
    _ref$ = _ref[0],
    a = _ref$ === void 0 ? true : _ref$;
```

`void 0` 可以参考我以前写过的一篇文章 [探究 undefined 与 void](https://www.unclay.com/2018/09/05/undefined-void/)

## 对象的解构赋值

+ 常规对象

```javascript
let { a, c } = { a: 1, b: 2, c: 3 };
```

```javascript
var _a$b$c = {
  a: 1,
  b: 2,
  c: 3
},
    a = _a$b$c.a,
    c = _a$b$c.c;
```

+ 变量名与属性名不一致

```javascript
let { a: newA } = { a: 1 };
```

```javascript
var _a = {
  a: 1
},
    newA = _a.a;
```

+ 嵌套对象数组结构

```javascript
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};
let { p, p: [x, { y }] } = obj;
```

```javascript
// 获取数组
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
// 非可解构的异常
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
// 迭代器方式拷贝定量的数组（可以看完后面迭代器再回来看此方法）
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    } 
  }
  return _arr;
}
// 判断是否数组，是：返回原数组，否：返回 undefined
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var obj = {
  p: ['Hello', {
    y: 'World'
  }]
};

var p = obj.p,
    _obj$p = _slicedToArray(obj.p, 2),
    x = _obj$p[0],
    y = _obj$p[1].y;
```

+ 指定默认值，且变量名与属性名不一致的

```javascript
var { x: y = 3 } = { x: 5 };
```

```javascript
var _x = {
  x: 5
},
    _x$x = _x.x,
    y = _x$x === void 0 ? 3 : _x$x;
```

## 字符的解构赋值

+ 常规字符

```javascript
const [a, b, c, d, e] = 'hello';
```

```javascript
// 获取数组
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
// 非可解构的异常
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
// 迭代器方式拷贝定量的数组（可以看完后面迭代器再回来看此方法）
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    } 
  }
  return _arr;
}
// 判断是否数组，是：返回原数组，否：返回 undefined
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];
```

`_slicedToArray` 与 `嵌套对象数组结构` 里面的 `_slicedToArray` 相同

+ 字符的长度

```javascript
let { length: len } = 'hello';
```

```javascript
var _hello = 'hello',
    len = _hello.length;
```

## 数值和布尔值的解构赋值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let { toString: a } = 123;
let { toString: b } = true;
```

```javascript
var _ = 123,
    a = _.toString;
var _true = true,
    b = _true.toString;
```

## 函数参数的解构赋值

+ 常规函数参数

```javascript
function add({ x, y }){
  return x + y;
}

add({ x: 1, y: 2 }); // 3
```

```javascript
function add(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return x + y;
}

add({
  x: 1,
  y: 2
}); // 3
```

+ 存在默认值的参数

```javascript
function move({ x = 0, y = 0 } = {}) {
  return [x, y]
}
```

```javascript
function move() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 0 : _ref$y;

  return [x, y];
}
```

## 用途

+ 交换变量

```javascript
let x = 1;
let y = 2;

[x, y] = [y, x];
```

```javascript
var x = 1;
var y = 2;
var _ref = [y, x];
x = _ref[0];
y = _ref[1];
```

+ 从函数返回多个值

```javascript
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

```javascript
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var _example = example(),
    foo = _example.foo,
    bar = _example.bar;
```

+ 函数参数的定义

```javascript
function f({x, y, z}) {}
f({ z: 3, y: 2, x: 1 });
```

```javascript
function f(_ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
}
f({
  z: 3,
  y: 2,
  x: 1
});
```

+ 提取 JSON 数据

```javascript
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
let { id, status, data: number } = jsonData;
```

```javascript
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};
var id = jsonData.id,
    status = jsonData.status,
    number = jsonData.data;
```

+ 函数参数的默认值

```javascript
jQuery.ajax = function (url, {
  complete = function () {},
  crossDomain = false,
  // ... more config
} = {}) {
  // ... do stuff
};
```

```javascript
jQuery.ajax = function (url) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      _ref$complete = _ref.complete,
      complete = _ref$complete === void 0 ? function () {} : _ref$complete,
      _ref$crossDomain = _ref.crossDomain,
      crossDomain = _ref$crossDomain === void 0 ? false : _ref$crossDomain;
  // ... do stuff
};
```

+ 遍历 Map 结构

```javascript
// map = new Map();
// map.set('first', 'hello');
for (let [key, value] of map) { }
```

```javascript
// map = new Map();
// map.set('first', 'hello');

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
```
ps: 跟数组、字符的结构雷同，都通过 `Symbol.iterator` 接口来形成迭代器循环处理数据

+ 输入模块的指定方法

```javascript
const { SourceMapConsumer, SourceNode } = require("source-map");
```

```javascript
"use strict";

var _require = require("source-map"),
    SourceMapConsumer = _require.SourceMapConsumer,
    SourceNode = _require.SourceNode;
```

## 总结

只要涉及到数组、类数组（字符、Map、Iterator接口等）的结构，就必须生成 `_slicedToArray` 方法来处理数组，代码如下：

```javascript
// 获取数组
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

// 非可解构的异常
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// 迭代器方式拷贝定量的数组（可以看完后面迭代器再回来看此方法）
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

// 判断是否数组，是：返回原数组，否：返回 undefined
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
```