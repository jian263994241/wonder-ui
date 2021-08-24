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

# message 全局消息

提供 Dialog, Snackbar 的方法调用


## 代码演示
### 基本使用

方法调用的组件不在上下文内, 需要使用`message`提供的方法 `message.setup` 设置主题

<code src="./demo/global.tsx"></code>


## API

`alert`, `confirm`, `custom` 请参考 `useDialog` 的API

`toast` 请参考 `useSnackbar` 的API

```jsx | pure

message.alert({ title, text, onOk, okText });

message.confirm({ title, text, onOk, okText, onCancel, cancelText });

message.custom(DialogProps);

message.toast(message, SnackbarHookOptions)

// 设置主题
message.setup({ theme })

```
