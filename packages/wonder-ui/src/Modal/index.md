---
sidemenu: false
---

### Modal

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
