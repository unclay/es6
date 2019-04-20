"use strict";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Point = function Point() {};

var ColorPoint =
/*#__PURE__*/
function (_Point) {
  _inheritsLoose(ColorPoint, _Point);

  function ColorPoint() {
    return _Point.apply(this, arguments) || this;
  }

  return ColorPoint;
}(Point);