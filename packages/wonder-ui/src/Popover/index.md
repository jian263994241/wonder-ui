---
sidemenu: false
---

### Popover

继承 [ModalProps](modal#modal) 的全部属性:

```ts
type Rect = { width: number; height: number };
type AnchorEl = HTMLElement | null | (() => HTMLElement | null);
type Vertical = 'bottom' | 'center' | 'top' | number;
type Horizontal = 'center' | 'left' | 'right' | number;
type TransformOrigin = { horizontal: Horizontal; vertical: Vertical };
```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| action | 支持updatePosition操作 | `Ref<any>` |
| anchorEl | 设置位置描点的element | `AnchorEl` |
| anchorOrigin | anchorReference=anchorEl 时的参考位置 | `{ horizontal: Horizontal; vertical: Vertical }` | { vertical: 'top', horizontal: 'left' }
| anchorPosition | anchorReference=anchorPosition 时的位置设置 | `{ top: number; left: number }` | { top: 0, left: 0 }
| anchorReference | 描点类型 | `'anchorEl' \| 'anchorPosition' \| 'none'` | anchorEl
| children | 内容 | `ReactNode` |
| elevation | 边框 | `number` | 8
| transformOrigin | 附加到锚点的原点 | `TransformOrigin` | { vertical: 'top', horizontal: 'left' }
| transitionDuration | 动画时间 | `TransitionTimeout` |
| visible | 是否显示 | `boolean` |
