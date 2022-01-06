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

提供 alert, confirm, toast 的方法

## 代码演示
### 基本使用

`message`支持消息栈和异步关闭

<code src="./demo/demo1.tsx"></code>

### 配置

配置 toast 自动关闭时间, 出现位置

<code src="./demo/demo2.tsx"></code>

## API

```jsx | pure

message.alert({ title, text, onOk, okText });

message.confirm({
  title?: React.ReactNode;
  text?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
  onCancel?: () => void;
  cancelText?: string;
  danger?: boolean;
});

message.toast(message, SnackbarProps)

// 设置
message.setup({ toastOption?: SnackbarProps })

```
