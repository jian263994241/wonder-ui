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

Dialog可以通过 `visible` 控制显示隐藏, 也可以通过`children`节点的点击事件控制显示隐藏

<code src="./demo/demo1.tsx"></code>

### 垂直按钮

设置 `buttonsVertical` 按钮排列方向.

<code src="./demo/demo2.tsx"></code>

### 使用 Hook

`useDialog` 提供了提示信息, 确认信息, 操作框... 等自定义信息提示框

<code src="./demo/demo3.tsx"></code>

### 提示栈

<code src="./demo/demo4.tsx"></code>

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


