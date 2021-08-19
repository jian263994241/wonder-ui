---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /data-display
  title: 数据展示
  order: 4
---
# Noticebar 通知栏

在导航栏下方，一般用作系统提醒、活动提醒等通知。

## 代码演示

### 基本使用

通过 `text` 属性设置通知栏的内容，通过 `icon` 属性设置通知栏左侧的图标。

<code src="./demo/basic.tsx"></code>

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

<code src="./demo/scrollable.tsx"></code>

### 多行展示

文字较长时，可以通过设置 `wrap` 属性来开启多行展示。

<code src="./demo/wrap.tsx"></code>

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

<code src="./demo/mode.tsx"></code>

### 自定义样式

通过 `style.color` 属性设置文本颜色，通过 `style.background` 属性设置背景色。 预置了 `warning`和`info` 的样式.

<code src="./demo/style.tsx"></code>

### 垂直滚动

搭配 `NoticeBar` 和 `Swipe` 组件可以实现垂直滚动的效果。

<code src="./demo/vertical.tsx"></code>


<API src="./Noticebar.tsx"></API>

