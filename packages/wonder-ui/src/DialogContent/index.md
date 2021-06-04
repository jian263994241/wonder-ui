---
sidemenu: false
---

### DialogContent

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

```typescript
interface DialogButton extends ButtonBaseProps {
  primary?: boolean;
  text?: React.ReactNode;
}
```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| buttons | 按钮 | `DialogButton[]` |
| buttonsVertical | Buttons Vertical | `boolean` | false
| classes | css | `'root', 'inner', 'title', 'text', 'buttonsVertical', 'buttons', 'button'` |
| content | 文字后的节点 | `ReactNode` |
| elevation | 阴影 | `number` | 4
| text | 标题下的文字 | `ReactNode` |
| textTypographyProps | 文字属性 | `TypographyProps` |
| title | 标题 | `ReactNode` |
| titleTypographyProps | 标题属性 | `TypographyProps` |
