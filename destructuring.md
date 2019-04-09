# 变量的解构赋值

## 数组解构赋值

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


