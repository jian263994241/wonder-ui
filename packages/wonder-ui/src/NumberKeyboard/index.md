---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# NumberKeyboard 数字键盘

虚拟数字键盘，模拟键盘行为。

## 代码演示

### 基本使用

通过设置`extra` 属性为 `.` 、 `X`, 常用于小数和身份证场景

<code src="./demo/demo1.tsx"></code>

### 带右侧栏的键盘

通过设置 `showSlidebar`显示侧边栏, 常用于输入金额的场景。

<code src="./demo/demo2.tsx"></code>

### 键盘标题

通过 `title` 属性可以设置键盘标题。

<code src="./demo/demo3.tsx"></code>

### 随机数字键盘

通过 `randomKeyOrder` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

<code src="./demo/demo4.tsx"></code>

### 事件

数字键盘提供了 `input`、`delete`、`enter`、`close` 事件，分别对应输入内容、删除内容和失去焦点的动作。 `showCloseKey`控制显示关闭按钮, `showEnterKey`控制显示完成按钮。

<code src="./demo/demo5.tsx"></code>


### 浮层

`NumberKeyboard`存在`children`的情况下会已浮层的形式出现,  请预留足够的滚动空间, 如果预留滚动高度不足, 键盘会覆盖输入框

<code src="./demo/demo6.tsx"></code>



<API src="./NumberKeyboard.tsx"></API>
