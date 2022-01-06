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

### Hook

<code src="./demo/demo4.tsx"></code>

### 指令式调用

指令式调用`Context`不可用, 推荐使用`useDialog`替代.

<code src="./demo/demo5.tsx"></code>


### 提示框布局

`DialogContent`组件提供框内布局

<code src="../DialogContent/demo/demo1.tsx"></code>

## API



### useDialog

```tsx pure
const dialog = useDialog(Omit<DialogProps, 'visible'>?)

dialog.show(Omit<DialogProps, 'visible'>?) //显示
dialog.hide() //隐藏
dialog.rendered //渲染, 放入虚拟dom上下文中

```

### Exposes

```tsx pure
showDialog(Omit<DialogProps, 'visible'>?) //显示
hideDialog(); //隐藏
```

### DialogProps


```ts pure
export interface DialogButtonProps {
  primary?: boolean;
  danger?: boolean;
  text?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
```

<API src="./Dialog.tsx" hideTitle></API>


