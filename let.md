# let 和 const 命令

## let 命令

### 基本用法

+ 定义变量

```javascript
let a = 1;
```

```javascript
"use strict"; // 后面省略此行
var a = 1;
```

+ 多层作用域同名变量

```javascript
{
  let i = 0;
  {
  	let i = 1;
    {
  	  let i = 2;
      {
  	  	let i = 3;
  	  }
  	}
  }
}
```

```javascript
{
  var i = 0;
  {
    var _i = 1;
    {
      var _i2 = 2;
      {
        var _i3 = 3;
      }
    }
  }
}
```

+ 常见的异步`for`循环计数器

```javascript
for (let i = 0; i < 10 ; i+= 1) {
  setTimeout(function() {
  	console.log(i);
  }, 1000);
}
```

```javascript
var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};

for (var i = 0; i < 10; i += 1) {
  _loop(i);
}
```

+ `for`循环变量是一个父作用域，循环体内部是一个单独的子作用域

```javascript
for (let i = 0; i < 10; i += 1) {
  let i = 'abc';
  console.log(i);
}
```

```javascript
for (var i = 0; i < 10; i += 1) {
  var _i = 'abc';
  console.log(_i);
}
```

## 其他场景

+ 函数内定义默认参数值

```javascript
function fn(arg = 1) {
  {
    let arg = 2;
  }
}
```

```javascript
function fn() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  {
    var _arg = 2;
  }
}
```

+ 函数声明会导致变量提前

```javascript
{
  let a = 'secret';
  function f() {
    return a;
  }
}
```
```javascript
{
  var f = function f() {
    return a;
  };
  var a = 'secret';
}
```
