---
sidemenu: false
---

### ButtonBase

除了支持 `HTMLButtonElement` 所有属性, 还支持以下属性:

```typescript
interface ButtonBaseActions {
  focusVisible(): void;
}

```

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| actionRef | 操作 | `Ref<ButtonBaseActions>` |
| centerRipple | 波纹居中 | `boolean` | false
| classes | css | `'root', 'disabled', 'focusVisible'` |
| disableRipple | 禁用波纹 | `boolean` | false
| disableTouchRipple | 禁用点击波纹 | `boolean` | false
| disabled | 禁用按钮 | `boolean` | false
| focusRipple | 焦点波纹 | `boolean` | false
| focusVisibleClassName | 焦点ClassName | `string` |
| onFocusVisible | 事件 | `(event: any) => void` |
