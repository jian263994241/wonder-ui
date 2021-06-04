---
sidemenu: false
---

### Collapse

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes | css | `'root', 'horizontal', 'vertical', 'hidden', 'visible'` |
| collapsedSize | 折叠尺寸 | `string \| number` | 0
| component | 根节点 | `ElementType` | div
| direction | 方向 | `'horizontal' \| 'vertical'` | vertical
| in | 显示隐藏 | `boolean` | false
| onEnter | 事件 | `(node: HTMLElement, appearing: boolean) => void` |
| onEntered | 事件 | `(node: HTMLElement, appearing: boolean) => void` |
| onEntering | 事件 | `(node: HTMLElement, appearing: boolean) => void` |
| onExit | 事件 | `(node: HTMLElement) => void` |
| onExited | 事件 | `(node: HTMLElement) => void` |
| onExiting | 事件 | `(node: HTMLElement) => void` |
| timeout | 动画时间 | `'atuo' \| number \| { appear?: number; enter?: number; exit?: number }` | atuo
