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

数字输入框

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 自定义

<code src="./demo/demo2.tsx"></code>


## 类型

```typescript
type ValueType = string | number;

interface InputNumberAction {
  focus(): void;
  blur(): void;
  onInternalStep(up: boolean, focus?: boolean): void;
}
```

<API src="./InputNumber.tsx" ></API>







