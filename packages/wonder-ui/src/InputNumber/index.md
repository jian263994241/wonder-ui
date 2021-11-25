---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 格式化展示

<code src="./demo/demo2.tsx"></code>

### 高精度小数

<code src="./demo/demo3.tsx"></code>

### 键盘行为

<code src="./demo/demo4.tsx"></code>

### 超出边界

<code src="./demo/demo5.tsx"></code>

### 实现一个进步器

<code src="./demo/demo6.tsx"></code>

### 格式化显示

<code src="./demo/demo7.tsx"></code>
## 类型

```typescript
type ValueType = string | number;

interface InputNumberAction {
  focus(): void;
  blur(): void;
  onInternalStep(up: boolean, focus?: boolean): void;
}
```

<API src="./InputNumber.tsx" props="actionRef|borderless|decimalSeparator|disableStepHandler|defaultValue|disabled|formatter|keyboard|max|min|parser|precision|readOnly|step|stringMode|value|onChange|onPressEnter|onStep"></API>







