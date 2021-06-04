---
sidemenu: false
---

### Space

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

```typescript
type SpaceSize = 'small' | 'medium' | 'large' | number;
```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| align | 对齐	 | `'start' \| 'end' \| 'center' \| 'baseline'` | center
| classes | css | `'root', 'item', 'vertical', 'horizontal', 'wrap', 'block'` |
| component | 根节点 | `ElementType` | div
| direction | 方向 | `'vertical' \| 'horizontal'` | horizontal
| gutter | 间距	| `SpaceSize \| [SpaceSize, SpaceSize]` , `SpaceSize = 'small' \| 'medium' \| 'large' \| 'number'` | medium
| split | 分隔符	| `ReactNode` |
| wrap | 换行 | `boolean` | false



