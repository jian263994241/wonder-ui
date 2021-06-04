# Grid 栅格

借助十二列系统，六个默认响应层，props变量和混合，使用我们强大的移动优先Flexbox网格来构建所有形状和大小的布局。


## 代码演示

### 基本使用

以下是两个网格布局，它们适用于从xs到xxl的每个设备和视口。为所需的每个断点添加任意数量的无单元类，每列的宽度将相同。

<code src="../../packages/wonder-ui/src/Row/demo/demo1.tsx"></code>

### 设置一列宽度

Flexbox网格列的自动布局还意味着您可以设置一列的宽度，并使同级列在其周围自动调整大小。您可以使用预定义的网格类（如下所示），网格混合或内联宽度。请注意，无论中间列的宽度如何，其他列都会调整大小。

<code src="../../packages/wonder-ui/src/Row/demo/demo2.tsx"></code>

### 响应式

<code src="../../packages/wonder-ui/src/Row/demo/demo3.tsx"></code>

### 栅格宽度

<code src="../../packages/wonder-ui/src/Row/demo/demo-row-cols-auto.tsx"></code>

<code src="../../packages/wonder-ui/src/Row/demo/demo-row-cols-width.tsx"></code>

<code src="../../packages/wonder-ui/src/Row/demo/demo-col-width.tsx"></code>
## 配置

可以通过`createTheme`创建一个新的主题覆盖 `breakpoints` 配置

```js | pure
// 默认的 breakpoint
{ xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 }
```

## API

<embed src="../../packages/wonder-ui/src/Row/index.md"></embed>
<embed src="../../packages/wonder-ui/src/Col/index.md"></embed>
