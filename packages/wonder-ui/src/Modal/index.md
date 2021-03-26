---
sidemenu: false
---

### Modal

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| BackdropProps | Backdrop Props | `BackdropProps` | {}
| children | 子节点 | `ReactElement` |
| container | container | `HTMLElement` |
| closeAfterTransition | 过渡后关闭 | `boolean` | false
| disableAutoFocus | 禁用AutoFocus | `boolean` | false
| disableEscapeKeyDown | 禁用esc按键执行关闭 | `boolean` | false
| disableFocusLock | 禁用FocusLock | `boolean` | false
| disablePortal | 禁用protal | `boolean` | false
| disableScrollLock | 禁用滚动锁 | `boolean` | false
| FocusLockProps | FocusLock Props | `ReactFocusLockProps` | {}
| hideBackdrop | 隐藏Backdrop | `boolean` | false
| keepMounted | 保持Modal节点 | `boolean` | false
| onBackdropClick | 背景板点击事件 | `(event) => void` |
| onClose |  Modal关闭事件 | `(event) => void` |
| onKeyDown | esc键盘事件 | `(event) => void` |
| onTransitionEnter | 过渡动画事件 | `() => void` |
| onTransitionExited | 过渡动画事件 | `() => void` |
| visible | 是否显示 回调 | `boolean` | false