function Person(name) {
  if (new.target !== Person) throw new Error('必须使用 new 命令生成实例');
  this.name = name;
}