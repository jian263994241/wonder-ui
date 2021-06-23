---
sidemenu: false
---

### Stepper

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| classes | css | `'root', 'input', 'button', 'minus', 'plus', 'disabled', 'disableInput', 'disableMinusButton', 'disablePlusButton'` |
| defaultValue | 默认值 | `number \| string` | 0
| disableInput | 禁用输入框 | `boolean` | false
| disableMinusButton |  禁用减 | `boolean` | false
| disablePlusButton |  禁用加 | `boolean` | false
| disabled |  禁用 | `boolean` | false
| hideInput | 隐藏输入框 | `boolean` | false
| hideMinusButton | 隐藏减 | `boolean` | false
| hidePlusButton | 隐藏加 | `boolean` | false
| max | 最大值 | `number \| string` |
| min | 最小值 | `number \| string` | 0
| onChange | 事件 | `(value: number) => void` |
| step | 步长 | `number \| string` | 1
| value | 值 | `number \| string` | 0
