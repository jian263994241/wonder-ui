---
sidemenu: false
---

### Searchbar

除了支持 `HTMLDivElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| InputProps | input属性 | [InputProps](input#input) |
| allowCancel | 取消按钮 | boolean | false
| barLeft | 定义左边区域 | ReactNode |
| barRight | 定义右边区域 | ReactNode |
| cancelText | 取消按钮文本 | string |
| defaultValue | 默认值 | |
| fixCancelButton | 取消按钮一直存在 | boolean | false
| icon | 图标 | ReactNode |
| onCencel | 回调 | (): void |
| onChange | 回调 | InputProps['onChange'] |
| placeholder | | string |
| value | | |

### Searchbar classes

```
'root', 'input', 'bg', 'inner', 'cancel'
```
