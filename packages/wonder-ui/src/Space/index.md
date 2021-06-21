---
sidemenu: false
---

### Space

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

```typescript
type Alignment = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'baseline' | 'stretch';
type SpaceSize = 'small' | 'medium' | 'large' | number;
```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes | css | `'root', 'item', 'vertical', 'horizontal', 'wrap', 'block'` |
| component | 根节点 | `ElementType` | div
| direction | 方向 | `'vertical' \| 'horizontal'` | horizontal
| gap | 间距	| `SpaceSize \| [SpaceSize, SpaceSize]` | medium
| horizontalAlign | 对齐 | `Alignment` |
| nowrap | 不换行 | `boolean` | false
| split | 分隔符	| `ReactNode` |
| verticalAlign | 对齐	 | `Alignment` | center



