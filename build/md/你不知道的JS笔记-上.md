[TOC]
# 编译原理

## 步骤

```js
var a = 2;
```

1.分词/词法分析  
 将代码字符串分解成有意义的代码块类似 var、 a、 =、 2 、;
 2.解析/语法分析  
 将词法单元流（数组）转换为程序语法结构树（AST）  
3.代码生成  
 将 AST 转换为可执行的代码过程被称为代码生成

## 作用域查找方式

- LHS
  赋值操作的目标是谁，查找目的是对变量进行赋值，不成功的 LHS 引用会导致自动隐式
  地创建一个全局变量（非严格模式下），严格模式下抛出 ReferenceError 异常

- RHS
  谁是赋值操作的源头，查找目的是获取变量的值，不成功的 RHS 引用会导致
  抛出 ReferenceError 异常

# 遮蔽效应

```js
function foo(a) {
  var b = 3;
  console.log(a, b);
}
var b = 2;
foo(1); // 1, 3
```

# 函数作用域

属于这个函数的全部变量都可以在整个函数的范围内使用及复用

## 立即执行函数

```js
var a = 2;
(function IIFE(def) {
  def(window);
})(function def(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
});
```

## 块级作用域

可以通过{.....}显示的创建块级作用域

```js
function process(data) {
  // 在这里做点有趣的事情
}
// 在这个块中定义的内容可以销毁了！
{
  let someReallyBigData = {...};
  process(someReallyBigData);
}
var btn = document.getElementById("my_button");
btn.addEventListener(
  "click",
  function click(evt) {
    console.log("button clicked");
  },
  /*capturingPhase=*/ false
);

```

## 变量提升

```js
a = 2;
var a;
console.log(a); //2
console.log(a);
var a = 2; //undefined
```

为什么以上两段代码会输出如下结果  
回到编译器原理  
引擎结束 javaScript 代码之前首先对其进行编译，编译阶段中的第一部分工作就是找到
所有的声明，并用合适的作用域将他们关联起来  
变量和函数在内的所有声明都会在任何代码被执行前首先被处理
编译过程先声明后复制

```js
foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function bar() {
  // ...
};
```

foo()对 undefined 的值进行函数调用而导致的非法操作，因此抛出 TypeError

## 函数优先

```js
foo(); // 3
function foo() {
  console.log(1);
}
var foo = function () {
  console.log(2);
};
function foo() {
  console.log(3);
}
```

尽管 var foo 声明在 function foo (){....}之前，但是他是重复声明会被忽略掉，因为函数
声明会被提升到普通变量之前

通过 var a =2 声明的变量，在编译时会将 var a 和 a=2 当做两个单独的声明，
第一个是编译阶段的任务，而第二个是执行阶段的任务，声明本身就会被提升

## 作用域和闭包

```js
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz(); // 2
```

在 foo() 整个作用域不会被销毁，bar()依然持有对该作用域的引用，而这个引用就叫做闭包

```js
var a = 2;
(function IIFE() {
  console.log(a);
})();
```

这种方式也是创建了闭包，虽然他不是在本身的词法作用域以外执行的

# 模块

使用 IIFE 创建简单的模块化，命名将作为公共 API 返回对象

```js
var foo = (function CoolModule(id) {
  function change() {
    // 修改公共 API
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log(id);
  }
  function identify2() {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify: identify1,
  };
  return publicAPI;
})("foo module");
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
```

## 现代模块机制

### 实例

```js
var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    m;
    odules[name] = impl.apply(impl, deps);
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get,
  };
})();
```

### 调用

```js
MyModules.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello,
  };
});
MyModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome,
  };
});
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar.hello("hippo")); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO
```

## 未来模块机制

### 函数模块缺点

函数的模块并不能稳定的识别，在运行时才会被使用，并且可以修改。

### ES6 的模块

ES6 的模块模式在编译前期就能校验引用 API 的正确性。不需要在运行时抛出异常。ES6 没有“行内”模块
（一个文件就是一个模块），可以异步的加载模块。

### 实例

- bar.js

```js
function hello(who) {
    return "Let me introduce: " + who;
}
export hello;

```

- foo.js

```js
// 仅从 "bar" 模块导入hello()
import hello from "bar";
var hungry = "hippo";
function awesome() {
    console.log(hello(hungry).toUpperCase());
}
export awesome;

```

- baz.js

```js
// 导入完整的 "foo" 和 "bar" 模块
import foo from "foo";
import bar from "bar";
console.log(bar.hello("rhino")); // Let me introduce: rhino
foo.awesome(); // LET ME INTRODUCE: HIPPO
```

通过 export 关键字，会将当前模块到处为公共 API，通过 import 关键字导入一个或多个模块，并绑定到变量上，这种操作可以根据使用的要求来进行任意多次。模块文件中的内容会被当作作用域闭包来处理一样。

# this 和对象原型

## 词法作用域

跟代码书写的先后顺序有关系，而不跟函数调用有关系

### 实例

```js
function foo() {
  console.log(a); // 是2而不是打印3
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar(); //2
```

## 动态作用域

以上实例代码如果按照动态作用域来算就因该打印‘3’而不是‘2’，动态作用域按照函数调用的作用域算，类似我们的 this。

## this 指向问题

```js
function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  this.count++;
}
foo.count = 0;
for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
console.log(foo.count); // 0
```

## arguments.callee 废除

这中方式是唯一能在匿名函数中调用自身的方法，第 5 版 ECMAScript (ES5) 禁止使用，递归调用时不使用匿名函数，而是使用函数表达式或者函数声明

### 实例

```js
function foo() {
  foo.count = 4; // foo 指向它自身
}
setTimeout(function () {
  // 匿名（没有名字的）函数无法指向自身
}, 10);
```

### 参考

[MDN arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)

## 替代 this

### 使用标识符

通过使用 foo 标识符来替代 this 的引用

```js
function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  foo.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log(foo.count); // 4
```

缺点是这种方法回避了 this 的问题，完全依赖 foo 的词法作用域

### 强制改变 this 指向

```js
function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  // 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    // 使用 call(..) 可以确保 this 指向函数对象 foo 本身
    foo.call(foo, i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log(foo.count); // 4
```

使用 call 或者 apply 方法强制改变 this 指向，两者区别在于 apply 接受参数是数组形式

#### 参考

- [MDN Function.prototype.call()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## 它的作用域

### 实例

```js
function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}
foo(); // ReferenceError: a is not defined
```

不能使用 this 来引用一个词法作用域内部的东西，每当要使用 this 和此法作用域查找一起使用时，这是无法实现的。

this 的绑定和函数的声明位置没有任何关系，只取决于函数的调用位置。

# this 全面解析

## 调用位置

理解 this 的绑定过程之前，首先要理解调用位置，调用位置就是在函数代码中被调用的位置（不是声明位置）

### 实例

```js
function baz() {
  // 当前调用栈是：baz
  // 因此，当前调用位置是全局作用域
  console.log("baz");
  bar(); // <-- bar 的调用位置
}
function bar() {
  // 当前调用栈是 baz -> bar
  // 因此，当前调用位置在 baz 中
  console.log("bar");
  foo(); // <-- foo 的调用位置
}
function foo() {
  // 当前调用栈是 baz -> bar -> foo
  // 因此，当前调用位置在 bar 中
  console.log("foo");
}
baz(); // <-- baz 的调用位置
```

可以通过浏览器调试工具来分析 this 的绑定过程。

## 绑定规则

我们必须找到调用位置，然后根据如下四条规则来判断

### 默认绑定

#### 实例

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); // 2
```

声明了一个全局的 a=2 ，然后 foo 中调用了 this.a，foo 在调用时不带任何修饰符进行调用，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。

如果在严格模式下，那么全局对象无法使用默认绑定，this 会绑定 undefined，在平时书写的时候不要在代码中混合使用 strict mode 和 non-strict mode，注意这种类型的兼容细节

### 隐式绑定

调用位置是否有上下文，或者说是否被某个对象拥有或者包含。

#### 实例

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
obj.foo(); // 2
```

当 foo 被调用时它的落脚点确实指向 obj 对象，当函数引用有上下文时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象，因此在调用过程中 foo 中的 this 被绑定到 obj，this.a 和 obj.a 是一样的。

对象属性引用链中只有最顶层或者说最后一层会影响调用位置

#### 实例

```js
function foo() {
  console.log(this.a);
}
var obj2 = { a: 42, foo: foo };
var obj1 = { a: 2, obj2: obj2 };
obj1.obj2.foo(); // 42
```

#### 隐式丢失

常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象。也就是说会应用默认绑定，把 this 绑定到全局，严格模式下绑定到 undefined。

##### 实例

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

虽然 bar 是 obj.foo 的一个引用，但实际上还是引用的 foo 函数本身，bar 就是一个不带任何修饰符的函数调用，应用的是默认绑定。

- 传入回调函数时丢失

```js
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // fn 其实引用的是 foo
  fn(); // <-- 调用位置！
}
var obj = { a: 2, foo: foo };
var a = "oops, global"; // a 是全局对象的属性
doFoo(obj.foo); // "oops, global"
```

参数传递其实是一种隐式赋值，因此在传入函数的时候也会被隐式的赋值，所以就和上面的代码结果一样了

### 显示绑定

我们可以通过 call()和 apply()方法，把这个对象绑定到 this，再调用函数指定的这个 this，可以直接指定 this 的绑定对象，因此我们称之为显示绑定。

#### 实例

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2 };
foo.call(obj); // 2
```

这里我们使用 call 方法显示的绑定了 this 为 obj 对象。
call() 和 apply()的区别在于他们传递的参数不同。

显示绑定也无法解决之前的丢失绑定问题

#### 硬绑定

显示绑定的一个变种

##### 实例

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2 };
var bar = function () {
  foo.call(obj);
};
bar(); // 2
setTimeout(bar, 100); // 2
// 硬绑定的 bar 不可能再修改它的 this
bar.call(window); // 2
```

foo.call(obj);强制的把 this 绑定到 obj.它总会手动在 obj 上调用 foo。这种方式是一种显示的强制绑定，因此称之为硬绑定。

硬绑定的典型应用场景就是创建一个包裹函数传入所有参数并返回收到的值

##### 实例

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = { a: 2 };
var bar = function () {
  return foo.apply(obj, arguments);
};
var b = bar(3); // 2 3
console.log(b); // 5
```

##### bind 方法实现

根据上述实例我们可以封装一个重复使用的辅助函数

###### 实例

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
// 简单的辅助绑定函数
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}
var obj = { a: 2 };
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5
```
