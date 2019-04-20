"use strict";

function Person(name) {
  if ((this instanceof Person ? this.constructor : void 0) !== Person) throw new Error('必须使用 new 命令生成实例');
  this.name = name;
}