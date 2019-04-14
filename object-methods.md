# 对象的新增方法

## Object.is

使用 Babel 解析完后，发现没有转，看了下以前的插件（babel-plugin-object-is）是旧版，基本不用了。

然后又重新查了下兼容性，发现这个方法兼容程度很高（除了ie），基本都实现了，所以说可以直接使用，不需要编译。

最后又查了 [MDN: Object-is](https://developer.mozilla.org/zh-CN/docs/Web/javascript/Reference/Global_Objects/Object/is), 里面列出一个兼容 ES5 的写法。

```js
if (!Object.is) {
  Object.is = function(x, y) {
    if (x === y) {
      // 针对 +0 不等于 -0 的情况
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // 针对 NaN 的情况
      return x !== x && y !== y;
    }
  };
}
```

ps: 至于为什么设计这个方法，可以参考 [ruanyifeng: Object-is](http://es6.ruanyifeng.com/#docs/object-methods#Object-is)


## Object.assign

> 依赖 @babel/plugin-transform-object-assign

```js
Object.assign({
  a: 1
}, {
  b: 1
});
```

```js
function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      // 注意 target 这个变量
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      // 不难看出，最后都是把源对象的属性值复制到目标对象
      return target;
    };
  return _extends.apply(this, arguments);
}

_extends(
  {
    a: 1
  },
  {
    b: 1
  }
);

```

+ 分析：这是一个浅拷贝

从上面解析出来的代码不难看出，这是一个浅拷贝，都是复制源对象的属性值；  
如果源对象的属性值也是一个对象，那么复制到的也只能是一个引用。

+ 技巧：既要合并对象，又要不改变目标对象的值

设置目标对象为空的匿名对象值

```js
const newObj = Object.assign({}, {
  a: 1,
}, {
  b: 2,
});
```

+ 错误？target 是数字、字符、布尔值

按照上面编译后的结果，如果 `target` 是数字、字符、布尔值等，肯定在 `target[key] = source[key]` 这一行报错，`target` 根本不是对象，取不到对应的 `key` 值。

在 `ES6` 中，`Object.assign` 会提前对这些值转成对象，然后再拷贝。

+ 错误？target 是null、undefined

原生 `Object.assign` 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
但是编译后的结果也没有兼容这些问题。

> 猜测：可能只为了拷贝对象，所以不考虑那么多其他杂七杂八的条件

## Object.keys, Object.values

`Babel` 没有对这个两个函数进行编译，估计兼容性良好，也不难实现，自己在这里简单实现下(暂时没考虑iterator, 后面看看)。

```js
var _keys = function(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key);
  }
  return arr;
}
var newKeys = _keys({
  a: 1,
  b: 2,
});
console.log(newKeys); // ['a', 'b']
```

```js
var _values = function(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}
var newValues = _values({
  a: 1,
  b: 2,
});
console.log(newValues); // ['a', 'b']
```

## Object.entries, Object.fromEntries

