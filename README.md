# ES6

现在写 `ES6` 的人越来越多，但是你知道 `ES6` 是怎么转换成 `ES5` 的吗  
估计很多人都是不知道

本着折腾的心态来研究这个转换的过程。

> 本文所有的编译都是通过 Babel 来转换的

接下来会参考阮一峰大神的 ES6 教程一步步来分享这个过程  
本内容没有详细讲解过程，有的只是一堆代码给你看。

## 必看前言

看之前需要掌握的东西
+ es6
+ babel
+ babel's loose 用来干嘛的[关于Babel 6的 loose mode](https://www.jianshu.com/p/8f47a5364665)

## 代码省略部分

+ use strict

```js
"use strict";
```

+ __PURE__

详细请看 [babel#6209](https://github.com/babel/babel/pull/6209)

```js
/*#__PURE__*/
```

## 目录

+ [let 和 const 命令](./let.md)
+ [变量的解构赋值](./destructuring.md)
+ [对象的新增方法](./object-methods.md)
+ [Class 的基本语法](./class.md)
+ [Class 的继承](./class-extends.md)

## 参考文献

+ [ECMAScript 6 入门](http://es6.ruanyifeng.com)
+ [了解 Babel 6 & 7 生态](https://github.com/creeperyang/blog/issues/25)
+ [babel#6209](https://github.com/babel/babel/pull/6209)
+ [关于Babel 6的 loose mode](https://www.jianshu.com/p/8f47a5364665)