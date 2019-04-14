# Class 的基本语法

## 定义一个类

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

```javascript
var Point =
/*#__PURE__*/
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