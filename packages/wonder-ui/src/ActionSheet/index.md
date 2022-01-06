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

### Hook

<code src="./demo/demo5.tsx"></code>

### 指令式调用

指令式调用`Context`不可用, 推荐使用`useActionSheet`替代.

<code src="./demo/demo7.tsx"></code>

### 自定义

<code src="./demo/demo6.tsx"></code>


## API

###  ActionSheetAction 数据结构

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
### useActionSheet

```tsx pure
const actionSheet = useActionSheet(Omit<ActionSheetProps, 'visible'>?)

actionSheet.show(Omit<ActionSheetProps, 'visible'>?) //显示
actionSheet.hide() //隐藏
actionSheet.rendered //渲染, 放入虚拟dom上下文中

```

### Exposes

```tsx pure
showActionSheet(Omit<ActionSheetProps, 'visible'>?) //显示
hideActionSheet(); //隐藏
```

### ActionSheetProps

<API src="./ActionSheet.tsx" hideTitle></API>
