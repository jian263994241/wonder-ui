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

# ActionSheet 动作面板

底部弹起的模态面板，包含与当前情境相关的多个选项。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 按钮触发

<code src="./demo/demo2.tsx"></code>

### 取消按钮和额外描述

<code src="./demo/demo3.tsx"></code>

### 禁用和事件处理

<code src="./demo/demo4.tsx"></code>

### 指令式调用

`const { rendered, show, hide } = useActionSheet(ActionSheetProps)`

<code src="./demo/demo5.tsx"></code>

### 自定义

<code src="./demo/demo6.tsx"></code>


## Action 数据结构

```jsx pure
export type ActionSheetAction = {
  text: string;
  description?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler<MouseEvent>;
  key?: any;
  // others
  [k: string]: any;
}
```

<API src="./ActionSheet.tsx"></API>
