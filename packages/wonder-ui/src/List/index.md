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

## CSS Variables

```css
--wui-list-padding-left: 12px;
--wui-list-padding-right: 12px;
--wui-list-padding-top: 10px;
--wui-list-padding-bottom: 10px;
--wui-list-extra-max-width: 70%;
--wui-list-align-items: center;
--wui-list-divider: thin solid rgba(0, 0, 0, 0.12);
--wui-list-border-radius: 8px;
--wui-list-background: #fff;
--wui-list-title-background: #f7f7fa;
```
