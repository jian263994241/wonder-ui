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
# Tabs 选项卡

控制浏览和切换不同的视图

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 超长的标签

对于那些比较长的标签，`wrapped` 使它们自动包装成选项卡。

<code src="./demo/demo2.tsx"></code>

### 标签颜色

如果需要不一样颜色的指示器, 可以使用`indicatorStyle`单独定制指示器样式

<code src="./demo/demo3.tsx"></code>

### 禁用选项卡

<code src="./demo/demo4.tsx"></code>

### 滚动的选项卡

<code src="./demo/demo5.tsx"></code>

### 居中对齐

对于较大的视图，则应使用 `centered` 属性居中对齐

<code src="./demo/demo6.tsx"></code>

### 受控组件

Change事件中的 `value` 将从 `Tab` `props.value` 中获取

<code src="./demo/demo7.tsx"></code>

### 标签图标

选项卡的标签可以是所有的图标或者所有的文本。

<code src="./demo/demo8.tsx"></code>

### 标签徽记

<code src="./demo/demo9.tsx"></code>

### 导航标签

默认情况下 Tabs 使用的 `button` 节点, 您可以自定义节点和触发行为, 下面是一个实现导航选项卡的例子：

<code src="./demo/demo10.tsx"></code>

### 内容切换

<code src="./demo/experiment.tsx"></code>

### 滑动切换

使用 `Swipe` 实现滑动切换

<code src="./demo/swipe.tsx"></code>



## API

### Tabs

<API src="./Tabs.tsx" hideTitle></API>


### Tab

<API src="../Tab/Tab.tsx" hideTitle></API>
