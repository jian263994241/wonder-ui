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

# Sticky 粘性布局

Sticky 组件与 CSS 中position: sticky属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>


### 吸顶距离

<code src="./demo/demo2.tsx"></code>

### 指定容器

<code src="./demo/demo3.tsx"></code>


<API src="./Sticky.tsx" props="container|offsetTop|offsetBottom|position|zIndex"></API>

