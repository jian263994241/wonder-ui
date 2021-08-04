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

# Space 间距

设置组件之间的水平间距或垂直间距。

## 代码演示


### 基本使用

<code src="./demo/demo1.tsx"></code>

### 设置分隔符

<code src="./demo/spaceSplit.tsx"></code>

### 行间距

<code src="./demo/wrap.tsx"></code>

### 水平方向-水平对齐

<code src="./demo/horizontalAlign.tsx"></code>

### 水平方向-垂直对齐

<code src="./demo/verticalAlignments.tsx"></code>

### 垂直方向-水平对齐

<code src="./demo/verticalHorizontalAlign.tsx"></code>

### 垂直方向-垂直对齐

<code src="./demo/verticalVerticalAlignments.tsx"></code>



## 类型

```typescript
type SpaceSize = 'small' | 'medium' | 'large' | number;
type Gap = SpaceSize | [SpaceSize, SpaceSize];
type Alignment = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'baseline' | 'stretch';
type SpaceSize = 'small' | 'medium' | 'large' | number;
```

<API src="./Space.tsx" props="classes|component|direction|gap|horizontalAlign|nowrap|split|verticalAlign|itemWrap"></API>



