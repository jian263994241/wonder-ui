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

# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。


## 代码演示

### 基本使用


<code src="./demo/demo1.tsx"></code>



## API

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
