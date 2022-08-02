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


<code src="./demo/demo1.tsx"></code>



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

<API src="./Dialog.tsx" ></API>

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




