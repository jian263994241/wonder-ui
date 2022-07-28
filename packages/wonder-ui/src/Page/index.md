---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /layout
  title: 布局
  order: 1
---

# Page 页面

带导航条,可以滚动的区域

## 代码演示


### 基本使用

默认一块可以滚动的区域

<code src="./demo/demo1.tsx"></code>

### 导航&工具栏

<code src="./demo/demo2.tsx"></code>

### 抽屉内的页面

<code src="./demo/demo3.tsx"></code>


<API src="./Page.tsx" ></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-page-background | 背景 | `theme.palette.background.default`
| --wui-page-content-background | 内容背景 | transparent
| --wui-page-content-overflow-x | 内容滚动(X) | unset
| --wui-page-content-overflow-y | 内容滚动(Y) | auto
