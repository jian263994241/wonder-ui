---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /fb
  title: 反馈
  order: 5
---
# Dialog 对话框

移动端对话框

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 垂直按钮

设置 `buttonsVertical` 按钮排列方向

<code src="./demo/demo2.tsx"></code>

### 提示框

各种信息提示框. 提示信息, 确认信息, ...

<code src="../withDialog/demo/demo2.tsx"></code>

### 提示栈

`withDialog` 提供 `alert`, `confirm`, `toast` 等静态方法

<code src="../withDialog/demo/demo1.tsx"></code>

### 提示框布局

`DialogContent`组件提供框内布局

<code src="../DialogContent/demo/demo1.tsx"></code>

## 类型

```typescript
interface DialogButton extends ButtonBaseProps {
  primary?: boolean;
  text?: React.ReactNode;
}
```

<API src="./Dialog.tsx" props="visible|children|title|text|buttons|transitionDuration|buttonsVertical|textTypographyProps|titleTypographyProps|content|elevation"></API>


