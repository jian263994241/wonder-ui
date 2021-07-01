---
sidemenu: false
---


### Input



| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| actionRef | `InputAction` | Ref\<InputAction\> |
| allowClear | 可以点击清除图标删除内容 | boolean | -
| borderless | 去除边框 | boolean | true
| defaultValue | 输入框默认内容 | string | -
| disabled | 是否禁用状态，默认为 false | boolean | false
| maxLength | 最大长度 | number | -
| prefix | 带有前缀图标的 input | ReactNode | -
| suffix | 带有后缀图标的 input | ReactNode | -
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性) | string | text
| multiline | 多行, 代替 `textarea` | boolean | false
| maxRows | 多行时的最大行数 | number |
| minRows | 多行时的最小行数 | number |  1
| value | 输入框内容 | string | -
| onChange | 输入框内容变化时的回调 | function(e) | -
| onPressEnter | 按下回车的回调 | function(e) | -


### Input Actions

```typescript
export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}
export interface InputAction {
  focus(option?: InputFocusOptions): void; //聚焦
  blur(): void; //失效
  select(): void; //全选
  setSelectionRange(
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none'
  ): void;
}
```

### Input Classes

```
'root', 'input', 'prefix', 'suffix', 'clearButton', 'revealButton', 'borderless', 'multiline', 'disabled', 'focused', 'resizable', 'readonly'
```


