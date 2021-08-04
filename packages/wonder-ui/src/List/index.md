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
# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作


## 代码演示

### 简易列表

可以设置一个空的`WhiteSpace`做间隔符

<code src="./demo/demo1.tsx"></code>

### 列表链接

<code src="./demo/listLink.tsx"></code>


### 嵌套列表

使用`Collapse`折叠列表

<code src="./demo/demo2.tsx"></code>

### 内嵌列表

<code src="./demo/demo8.tsx"></code>

### 文件夹列表

<code src="./demo/demo3.tsx"></code>

### 交互演示

下面是一些常见交互的演示：

<code src="./demo/demo4.tsx"></code>


### 对齐列表项

显示 3 行或者更多行时，你应该改变列表项的对齐方式，将 `alignItems` 属性值设置为 "flex-start"

<code src="./demo/demo6.tsx"></code>



### 列表控件

#### Checkbox 选择框

<code src="./demo/checkbox.tsx"></code>

#### Toggle 开关

该开关作用为一个辅助操作和一个单独的目标。

<code  src="./demo/switch.tsx"></code>

### 固定的副标题列表

在滚动列表时，子标题保持固定在屏幕的顶端，直到被下一个子标题推离屏幕。 此性能由 CSS sticky 位置实现, 可以通过`disableSticky`禁用此选项

<code  src="./demo/sticky.tsx"></code>

### 无限滚动列表

<code  src="./demo/InfiniteScroll.tsx"></code>

### 大型列表渲染

`useVirtualList` 与 List 组件一起使用。 优化长列表的性能。

<code  src="./demo/virtualList.tsx"></code>

<API src="./List.tsx" props="inset|className|style|children"></API>

<API src="../ListHeader/ListHeader.tsx" props="sticky|className|style|children"></API>

<API src="../ListItem/ListItem.tsx" props="alignItems|arrow|divider|button|media|extra|className|style|children"></API>

<API src="../ListItemText/ListItemText.tsx" props="className|style|children"></API>
