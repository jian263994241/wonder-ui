---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /utils
  title: 辅助
  order: 5
---
# Modal 模态框

模态框组件可以用来快速创建对话框、弹出窗口, 浮层等组件.

## 代码演示

### 基本使用

使用`ModalContent`创建一个带UI样式的浮层:

按钮在 `onOk, onCancel, onClose` 存在时候展示

<code src="./demo/demo1.tsx"></code>


### 自定义浮层

借助 `Modal` 组件创建一个自己的Modal框:

<code src="./demo/demo2.tsx"></code>

### API

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| BackdropProps | Backdrop Props | `BackdropProps` | {}
| FocusLockProps | FocusLock Props | `ReactFocusLockProps` | {}
| autoFocus | Auto focus | `boolean` | false
| children | 子节点 | `ReactElement` |
| closeAfterTransition | 过渡后关闭 | `boolean` | false
| component | root element | `ElementType` | div
| container | container | `HTMLElement` |
| disableEscapeKeyDown | 禁用esc按键执行关闭 | `boolean` | false
| disableFocusLock | 禁用FocusLock | `boolean` | false
| disablePortal | 禁用protal | `boolean` | false
| disableScrollLock | 禁用滚动锁 | `boolean` | false
| hideBackdrop | 隐藏Backdrop | `boolean` | false
| keepMounted | 保持Modal节点 | `boolean` | false
| onBackdropClick | 背景板点击事件 | `(event) => void` |
| onClose |  Modal关闭事件 | `(event) => void` |
| onKeyDown | esc键盘事件 | `(event) => void` |
| onTransitionEnter | 过渡动画事件 | `() => void` |
| onTransitionExited | 过渡动画事件 | `() => void` |
| visible | 是否显示 回调 | `boolean` | false
