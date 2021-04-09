[TOC]

# 基本数据类型

```js
String、Boolean、Number、Null、undefined、Object
```
## 检测数据类型方法

```js
Object.prototype.toString.call(value).slice(8, -1);
// return "object" etc..
```

# 浏览器同源策略（浏览器跨域原因）

浏览器的安全协议，默认阻止不同的资源来源相互访问，相同的协议，端口，主机认定为同源。

## IE 中的不同

- 授信范围  
  两个相互之间高度互信的域名，如公司域名（corporate domains），则不受同源策略限制
- 端口  
  IE 未将端口号纳入到同源的检测中，其他一致的情况下，不同的端口号不受访问约束

### 参考

- [浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

## 跨域解决方案

### JSONP

JSONP 就是利用动态创建 script 标签来实现跨域访问资源，缺点只支持 get 请求

#### 实列

```js
function handleCallback(data) {
  console.log("====>接受数据", data);
}

let url = "https://www.foo.com?id=1&callback=handleCallback";
let script = document.createElement("script");
script.setAttribute("src", url);
document.getElementsByClassName("head")[0].appendChild(script);
```

https://www.foo.com?id=1 get 请求地址和参数  
callback 作为请求成功返回后的回调函数，接收返回数据

#### 参考

- [浅谈 JSONP 的原理与实现](https://segmentfault.com/a/1190000007232373)

### 跨域资源共享(CORS)

通过服务器端配置跨域请求来实现访问另一个域的资源
支持所有请求类型

#### 参考

- [跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)

还有其他方法能实现跨域资源访问如 img，link 标签等。

# 遍历(map,for...in...,forEach)

### map

```js

```

## for...in...

```js

```

## forEach

```js

```

# 事件冒泡与事件捕获

[事件冒泡和事件捕获](https://www.jianshu.com/p/8311f782f70d)

## 阻止冒泡

```js
function stopBubble(e) {
  if (e && e.stopPropagation) {
    //普通
    e.stopPropagation();
  }
  //IE
  else window.event.cancelBubble = true;
}
```

# 事件委派
利用事件冒泡原理实现事件委派
```html
<body>
  <ul id="lists">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
    let lists = document.getElementById("lists");
    lists.addEventListener("click", function (event) {
      let target = event.target;
      if (target.nodeName == "LI") {
        console.log(target.innerText);
      }
    });
  </script>
</body>
```
## 优点

减少了 DOM 操作，后期动态添加的子节点依旧生效

# 排序

## 冒泡排序

```js
function sorts(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      let max = arr[j];
      let min = arr[j + 1];
      if (max > min) {
        arr[j] = min;
        arr[j + 1] = max;
      }
    }
  }
  return arr;
}
let foo = [2, 4, 0, 1, 3, 76, 50];
sorts(foo);
// 输出 [0, 1, 2, 3, 4, 50, 76]
```

## sort 排序

```js
let arr = [2, 3, 1, 1, 3, 76, 50];
arr.sort((a, b) => {
  a - b;
});
// 输出 [1, 1, 2, 3, 3, 50, 76]
// b-a 倒序
```

### 描述

原地排序不进行复制并返回数组，默认排序是将他们的元素转换成字符串，比较 UTF-16 代码单元值序列。

### 缺点：

无法保证时间和空间复杂度

### 参考

- [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)