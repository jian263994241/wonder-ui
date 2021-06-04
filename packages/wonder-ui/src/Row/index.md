---
sidemenu: false
---
### Row

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

```typescript
type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ResponsiveValue<T = any> = T | Partial<Record<BreakpointKeys, T>>;

```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes |  classes | `'root'` |
| gutter | 间距, `8px`倍数 | `number \| [number, number]` | 0
| rowCols | cols的默认配置 | `ResponsiveValue<'auto' \| boolean \| number>` |
