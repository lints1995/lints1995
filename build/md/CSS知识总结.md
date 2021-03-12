[TOC]

# 盒子模型

- 盒子模型构成：content+padding+border+margin

## 区别

1. 标准盒子模型：width(包含：content)
2. IE 盒子模型（ie5,6）：width(包含：content+padding+border)

- 两种盒子模型之间的转换：

1. box-sizing: content-box 是 W3C 盒子模型（默认标准盒模型）
2. box-sizing: border-box 是 IE 盒子模型

## 参考

- [盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
# 布局

## float 布局

指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，尽管仍然保持部分的流动性（与绝对定位相反）
_绝对定位的元素忽略 float 属性_

### 属性

| 值           | 描述                                               |
| ------------ | -------------------------------------------------- |
| left         | 元素向左浮动                                       |
| right        | 元素向右浮动                                       |
| none         | 默认值。元素不浮动，并会显示在其在文本中出现的位置 |
| inline-start | 规表明元素必须浮动在其所在块容器的开始一侧         |
| inline-end   | 表明元素必须浮动在其所在块容器的结束一侧           |

## 清除浮动

指定一个元素是否必须移动(清除浮动后)到在它之前的*浮动元素下面*

### 参考

- [float](https://developer.mozilla.org/zh-CN/docs/CSS/float)
- [clear](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear)
### position 布局

用于指定一个元素在文档中的位置

#### 属性

| 值       | 描述                       |
| -------- | -------------------------- |
| static   | 当前的布局位置             |
| relative | 相对于自身定位             |
| absolute | 相对于父级有定位的元素定位 |
| fixed    | 相对于浏览器可视区域定位   |

#### 参考

- [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

## flex 弹性盒子布局

## grid 布局
