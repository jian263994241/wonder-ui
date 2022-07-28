---
nav:
  path: /components
group:
  path: /data-display
  title: 数据展示
  order: 4
---
# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作


## 代码演示

### 基本使用

可以设置一个空的`WhiteSpace`做间隔符

<code src="./demo/demo1.tsx"></code>

### 嵌套列表

使用`Collapse`折叠列表

<code src="./demo/demo2.tsx"></code>

### 卡片样式

<code src="./demo/demo4.tsx"></code>

### 用户列表

<code src="./demo/demo3.tsx"></code>


### 固定的副标题列表

<code  src="./demo/sticky.tsx"></code>

### 无限滚动列表

<code  src="./demo/InfiniteScroll.tsx"></code>

### 大型列表渲染

`useVirtualList` 与 List 组件一起使用。 优化长列表的性能。

<code  src="./demo/virtualList.tsx"></code>

### 拖拽排序

结合 `react-beautiful-dnd` 实现拖拽排序

<code src="./demo/demo5.tsx"></code>


## API

### List

<API src="./List.tsx" hideTitle></API>

### ListHeader

<API src="../ListHeader/ListHeader.tsx" hideTitle></API>

### ListItem

<API src="../ListItem/ListItem.tsx" hideTitle></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-list-align-items | 垂直对齐 | center
| --wui-list-bg-color | 背景色 | `theme.palette.background.paper`
| --wui-list-card-border-radius | card 圆角 | `theme.shape.borderRadius * 2`
| --wui-list-card-margin-horizontal | card 外边距 | `theme.spacing(2)`
| --wui-list-divider | 分割线 | `thin solid ${theme.palette.divider}`
| --wui-list-extra-max-width | extra宽度限制 | 70%
| --wui-list-extra-padding-left | extra内边距 | `theme.spacing(1.5)`
| --wui-list-padding-horizontal | 内边距 | `theme.spacing(1.5)`
| --wui-list-padding-vertical | 垂直内边距 | `theme.spacing(1.5)`
| --wui-list-prefix-padding-right | prefix边距 | `theme.spacing(1.5)`
| --wui-list-prefix-width | preifx 宽度 | auto
| --wui-list-title-bg-color | 标题背景 | `theme.palette.background.default`

