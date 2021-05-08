---
sidemenu: false
---

### Collapse

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | children | `ReactNode` |
| collapsedSize | 折叠尺寸 | `string \| number` | 0
| component | root element | `ElementType` | div
| direction | 动画过渡方向 | `'horizontal' \| 'vertical'` | vertical
| in | 显示隐藏内容 | `boolean` | false
| onEnter | transition 回调 | `(node: HTMLElement) => void` |
| onEntered | transition 回调 | `(node: HTMLElement) => void` |
| onEntering | transition 回调 | `(node: HTMLElement) => void` |
| onExit | transition 回调 | `(node: HTMLElement) => void` |
| onExited | transition 回调 | `(node: HTMLElement) => void` |
| onExiting | transition 回调 | `(node: HTMLElement) => void` |
| timeout | transition duration ms | `'atuo' \| number \| { appear?: number; enter?: number; exit?: number }` | atuo
