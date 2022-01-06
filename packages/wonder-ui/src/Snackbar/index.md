---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /fb
  title: 反馈
  order: 5
---
# Snackbar 消息条

展示操作反馈信息。 提供成功、警告和错误等简短的通知信息。


## 代码演示

### 基本使用


<code src="./demo/demo1.tsx"></code>

### 消息条的位置

通过指定 `anchorOrigin` 的属性，您可以控制消息条的位置

<code src="./demo/demo2.tsx"></code>

### Hooks

<code src="./demo/demo3.tsx"></code>

### 指令式调用

指令式调用`Context`不可用, 推荐使用`useSnackbar`替代.

<code src="./demo/demo4.tsx"></code>


## API

### useSnackbar

```tsx pure
const snackbar = useSnackbar(Omit<SnackbarProps, 'visible'>?)

snackbar.show(Omit<SnackbarProps, 'visible'>?) //显示
snackbar.hide() //隐藏
snackbar.rendered //渲染, 放入虚拟dom上下文中

```

### Exposes

```tsx pure
showSnackbar(Omit<SnackbarProps, 'visible'>?) //显示
hideSnackbar(); //隐藏
```

### SnackbarProps

<API src="./Snackbar.tsx" hideTitle></API>
