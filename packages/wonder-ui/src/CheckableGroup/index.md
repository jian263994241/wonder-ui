---
sidemenu: false
---

### CheckableGroup


| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| defaultValue | 默认值 | `TValue` |
| exclusive | 单选 | boolean | false
| onChange | 回调 | (value: `TValue`): void |
| options | 配置选项 | { value: `TValue`; [k: string]: any }[] |
| renderItem | 渲染项 | (props: `CheckableGroupItemProps`): ReactNode |
| value | 值 | `TValue` |

### CheckableGroup types

```ts
type TValue = any | any[];

interface CheckableGroupItemProps {
  checked: boolean;
  data: { value: TValue; [k: string]: any };
  emitOnChange(): void;
  key: number;
}
```
