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

### 浮层

`NumberKeyboard`存在`children`的情况下会已浮层的形式出现,  请预留足够的滚动空间, 如果预留滚动高度不足, 键盘会覆盖输入框

<code src="./demo/demo2.tsx"></code>



<API src="./NumberKeyboard.tsx"></API>
