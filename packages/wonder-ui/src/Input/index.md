---
hide: true
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---

# Input 输入框

文字输入框

## 代码演示


<code src="./demo/demo1.tsx"></code>


<code src="./demo/demo2.tsx"></code>


## 类型

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

<API src="./InputBase.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-input-bg-color | 背景色 | #fff
| --wui-input-border-color | 边框颜色 | rgba(0, 0, 0, 0.12)
| --wui-input-size-middle | 预设尺寸 | 2rem
| --wui-input-size-small | 预设尺寸 | 1.5rem
| --wui-input-size-large | 预设尺寸 | 2.5rem


