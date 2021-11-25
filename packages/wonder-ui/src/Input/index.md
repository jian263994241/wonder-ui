---
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

基本的文字输入框

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 尺寸

<code src="./demo/demo10.tsx"></code>

### 带移除图标

<code src="./demo/demo2.tsx"></code>

### 前缀和后缀

<code src="./demo/demo3.tsx"></code>

### 无边框输入框

<code src="./demo/demo4.tsx"></code>

### 限制输入长度

<code src="./demo/demo5.tsx"></code>

### 多行输入

<code src="./demo/demo6.tsx"></code>


### 聚焦

<code src="./demo/demo8.tsx"></code>

### 密码框

<code src="./demo/demo9.tsx"></code>

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

<API src="./InputBase.tsx" props="actionRef|allowClear|borderless|defaultValue|disabled|maxLength|prefix|suffix|type|multiline|maxRows|minRows|value|onChange|onPressEnter|onRenderPrefix|onRenderSuffix|parser|formatter"></API>






