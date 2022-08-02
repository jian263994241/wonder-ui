---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /layout
  title: 布局
  order: 1
---

# Divider 分隔线

分隔线是对列表和布局中的内容进行分组的一条细线。

## 代码演示

### 水平分割线

默认为水平分割线，可在中间加入文字。

<code src="./demo/horizontal.tsx"></code>

### 水平文字分割线

分割线中带有文字，可以用 `textAlign` 指定文字位置。

<code src="./demo/horizontal-title.tsx"></code>

### 垂直分割线

<code src="./demo/vertical-title.tsx"></code>


<API src="./Divider.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-divider-border-width | 分割线宽度 | thin
| --wui-divider-border-color | 分割线颜色 | `theme.palette.divider`
| --wui-divider-border-style | 分割线风格 | solid
| --wui-divider-horizontal-margin | 外边距 | 0px
| --wui-divider-vertical-margin | 外边距 | 0px
| --wui-divider-vertical-padding | 标题内边距 | 10px
| --wui-divider-horizontal-padding | 标题内边距 | 10px
