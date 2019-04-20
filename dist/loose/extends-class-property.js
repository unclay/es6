"use strict";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ColorPoint =
/*#__PURE__*/
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