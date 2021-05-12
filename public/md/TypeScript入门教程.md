[TOC]

# 数据类型

```ts
// 申明一个只包含number类型的数组
let arr1: number[] = [1, 2];
```

## 采用泛型申明

```ts
let arr2: Array<number> = [1, Number("2"), 3];
let arr3 = ["2", 1];
```

## Tupple（元祖）

```ts
// 声明一个元祖(Tupple)，元祖是固定长度，固定类型的特殊数组
let arr4: [string, number] = ["aaaa", 2];

// 元祖两个bug
// 可以使用push 增加元素
arr4.push(3);
// 一定要指定数据类型，不指定就是个正常的数组
let arr5 = ["aaa", 2];
```

## Union（联合类型）

```ts
// 只能存储指定的数据类型，其他的不能被保存
let union: string | number;
union = 1;
union = "aa";
union = true; // 报错
```

## Literal （字面量类型）

```ts
// 指定联合类型的数值和类型
// union2的赋值只能是指定的‘1 | 2 | "aa"’之中的值
let union2: 1 | 2 | "aa";
union2 = 1;
union2 = 3; // 报错
```

## Enum （枚举类型）

```ts
enum Color1 {
  red,
  blue,
  green,
}
console.log(Color1.red); // 0 访问foo.red默认是从0开始

// 也可以指定枚举中的数据
enum Color2 {
  red = 2, //2
  blue, //3
  green, //4
}
enum Color3 {
  red = "red",
  blue = "blue",
  green = "green",
}
console.log(Color3.red); // red
```

## any

```ts
let any1: any = 1;
any1 = "a";
any1(); // 这个函数是不存在的,但是any类型能被调用
```

## unkonwn

```ts
// 类型必须是确定了类型后才能使用
let unkonwnValue: unknown = 6;

// unknown 要检测类型后才能被使用，会自动检测错误
if (typeof unkonwnValue === "string") {
  unkonwnValue.toUpperCase();
}
if (typeof unkonwnValue === "function") {
  unkonwnValue();
}
console.log(unkonwnValue);
```

# 函数类型

## void

```ts
// 只是运行一段代码，没有返回值
function printString(): void {
  console.log("11111");
}
```

## undefined

```ts
// 直接返回的就是undefined
function printString(): undefined {
  console.log("11111");
  return;
}
```

## never

```ts
// never 永远都执行不完就声明为never
function loop(): never {
  while (true) {
    console.log("loop");
  }
}
```

# 类型适配（类型断言）

```ts
let msg: any;
msg = "abc"; // 类型声明的是any ，赋值成字符串也不能改变any的类型
msg.endsWith("c");

//类型适配，告诉ts转换类型为string
// 第一种方法
let str1 = (<string>msg).length;
// 第二种方法
let str2 = (msg as string).length;
```

# 函数

## 返回类型校验

```ts
// 函数类型
let log2 = (msg: string) => console.log(msg);
log2("a");
log2(1); // 类型错误
```

## 多参函数

```ts
let log3 = (val1: string, val2: number) => {
  console.log(val1, val2);
};
log3("1", 2); // 参数必须传全

// ?表示可选参数，如果不传val2默认undefault
let log4 = (val1: string, val2?: number) => {
  console.log(val1, val2);
};
console.log(log4("1"));

// 初始化参数值
let log5 = (val1: string, val2: number = 2) => {
  console.log(val1, val2);
};
console.log(log5("1", 6));
```

# 对象

## interface（接口）

```ts
interface Point1 {
  x: number;
  y: number;
}
function printPoint(point: Point1) {
  console.log({ x: point.x, y: point.y });
}

printPoint({ x: 1, y: 2 });
printPoint({ a: "xxxx", b: "abc" }); // 类型不是number报错
```

## class（类）

```ts
// 1.定义一个接口
interface Point {
  X: number; // 接口关联到calss类中的geter/seter
  Y: number;
  drawPoint: () => void;
  calcDistances: (p: Point) => number;
}

//2.实现Point接口
class OPoint implements Point {
  // public、prvate,protected 访问修饰符，通过修饰符控制外界访问类内部便变量，默认public
  // 设置为私有变量保护类内部变量不被暴出去
  constructor(private x: number, private y: number) {}
  drawPoint() {
    console.log({ x: this.x, y: this.y });
  }
  calcDistances(p: Point) {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2);
  }
  // 采用geter，seter 来访问和设置内部变量防止外部串改
  get X() {
    return this.x;
  }
  set X(val) {
    if (val < 0) throw new Error("值不能是负数");
    this.x = val;
  }
  get Y() {
    return this.y;
  }
  set Y(val) {
    if (val < 0) throw new Error("值不能是负数");
    this.y = val;
  }
}

let point1 = new OPoint(1, 2);
point1.X = 10;
point1.Y = 20;
console.log(point1.X, point1.Y);
```

# 模块

1. 新建一个叫 Point.ts 的文件，我们把上面的 OPoint 类放入这个文件

```ts
// Point.ts 文件内容
interface Point {
  X: number;
  Y: number;
  drawPoint: () => void;
  calcDistances: (p: Point) => number;
}

export class OPoint implements Point {
  constructor(private x: number, private y: number) {}
  drawPoint() {
    console.log({ x: this.x, y: this.y });
  }
  calcDistances(p: Point) {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2);
  }
  get X() {
    return this.x;
  }
  set X(val) {
    if (val < 0) throw new Error("值不能是负数");
    this.x = val;
  }
  get Y() {
    return this.y;
  }
  set Y(val) {
    if (val < 0) throw new Error("值不能是负数");
    this.y = val;
  }
}
```

2. 创建一个 importModule.ts,在文件中引用 Point.ts 类，再实例化使用

```ts
// importModule.ts 文件
import { OPoint } from "./Point";
let point1 = new OPoint(1, 2);
point1.X = 10;
point1.Y = 20;
console.log(point1.X, point1.Y);
```

# 泛型

```ts
// 定义一个只能包含 string类型值的数组，不能在赋值的时候修改存储类型
let arr6: Array<string> = ["1", "2"];

// 函数传参为泛型，能接收任意ts的数据类型，
let lastEl = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

let l1 = lastEl([1, 2, 3, 4]); // 不指定类型自动适配
let l2 = lastEl<string | number>(["1", 2, 3, 4]); // 指定类型为string和number
```

# 多参泛型

```ts
// 'Y = number' 可以定义泛型的默认类型
let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y];
const v1 = makeTuple("1", 2); //  TS 自动转换
const v2 = makeTuple<boolean>(true, 2); // 显示指定参数类型，第二个参数Y定义类默认number类型就可以省略
```
