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


### 水平方向对齐

<code src="./demo/horizontalAlign.tsx"></code>

### 垂直方向对齐

<code src="./demo/verticalHorizontalAlign.tsx"></code>



<API src="./Space.tsx"></API>



## 类型

```typescript
type Alignment = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'baseline' | 'stretch';
```

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-space-gap | 间距 | `theme.space(1)`
| --wui-space-gap-horizontal | 水平间距 | var(--wui-space-gap)
| --wui-space-gap-vertical | 垂直间距 | var(--wui-space-gap)
