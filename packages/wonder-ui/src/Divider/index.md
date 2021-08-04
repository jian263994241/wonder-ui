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

### 垂直文字分割线

分割线中带有文字。

<code src="./demo/vertical-title.tsx"></code>

### 行内分割文字

使用 `direction="vertical"`设置为行内的垂直分割线。

<code src="./demo/vertical.tsx"></code>

<API src="./Divider.tsx" props="absolute|classes|component|children|direction|flexItem|light|textAlign|variant"></API>

