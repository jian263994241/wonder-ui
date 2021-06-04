---
sidemenu: false
---
### Snackbar

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes | css | `'root', 'content', 'anchorTopLeft', 'anchorTopCenter', 'anchorTopRight', 'anchorBottomLeft', 'anchorBottomCenter', 'anchorBottomRight', 'anchorCenter'` |
| TransitionComponent | 过渡动画组件 | `React.ComponentType<BaseTransitionProps>` | Grow
| TransitionProps | 过渡动画组件属性 | `BaseTransitionProps` |
| actions | 操作区 | `ReactNode` |
| anchorOrigin | 定位 |  `{ vertical?: 'top' \| 'center' \| 'bottom'; horizontal?: 'left' \| 'center' \| 'right'; }` | `{ vertical: 'bottom', horizontal: 'left' }`
| autoHideDuration | 自动关闭持续时间 | `number \| null` | null
| message | 内容 | `ReactNode` |
| onClose | 关闭回调事件 | `(event: Event, reason: 'timeout' \| 'clickaway') => void` |
| resumeHideDuration | 暂停持续时间 | `boolean \| null` |
| transitionDuration | 过渡动画持续时间 | `TransitionTimeout` |
| visible | 是否显示 | `boolean` |
