---
sidemenu: false
---

### InputNumber

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| borderless | 去除边框 | boolean | true
| decimalSeparator | 小数点 | string | -
| defaultValue | 初始值 | number | -
| disabled | 禁用 | boolean | false
| formatter | 指定输入框展示值的格式 | function(value: number \| string): string | -
| keyboard | 是否启用键盘快捷行为 | boolean | true
| max | 最大值 | number |
| min | 最小值 | number | -
| parser | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | function(string): number | - | - |
| precision | 数值精度，配置 `formatter` 时会以 `formatter` 为准 | number | -
| readOnly | 只读 | boolean | false
| step | 每次改变步数，可以为小数 | number \| string | 1
| stringMode | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean | false
| value | 当前值 | number | - | - |
| onChange | 变化回调 | function(value: number \| string \| null) | -
| onPressEnter | 按下回车的回调 | function(e) | -
| onStep | 点击上下箭头的回调 | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | -

### InputNumber Actions

```typescript
export interface InputNumberAction {
  focus(): void;
  blur(): void;
  onInternalStep(up: boolean, focus?: boolean): void;
}
```

### InputNumber Classes

```
'root', 'input', 'prefix', 'suffix', 'clearButton', 'revealButton', 'borderless', 'multiline', 'disabled', 'focused', 'resizable', 'readonly', 'notNumber', 'outOfRange'
```


