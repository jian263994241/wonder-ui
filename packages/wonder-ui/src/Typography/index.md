---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /general
  title: 通用
  order: 0
---

# Typography 排版

文字样式: 标题, 段落, 文本.

通用组件, 框架内所有涉及文字的部分都内嵌该组件, 直接修改组件全局变量可以改变整体UI字体样式


## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>



<API src="./Typography.tsx"></API>


## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-typography-body-1 | 主体文字 | 0.9375rem
| --wui-typography-body-2 | 主体文字(小) | 0.875rem
| --wui-typography-caption | 描述文字 | 0.75rem
| --wui-typography-color | 颜色  | inherit
| --wui-typography-font-family | 字体 | `theme.typography.fontFamily`
| --wui-typography-font-size | 文字大小 | inherit
| --wui-typography-font-weight | 文字粗细 | 400
| --wui-typography-gutter-bottom | 间距 | `theme.spacing(1)`
| --wui-typography-h-1 | 标题h1 | 2.25rem
| --wui-typography-h-2 | 标题h2 | 1.875rem
| --wui-typography-h-3 | 标题h3 | 1.625rem
| --wui-typography-h-4 | 标题h4 | 1.5rem
| --wui-typography-h-5 | 标题h5 | 1.375rem
| --wui-typography-h-6 | 标题h6 | 1.25rem
| --wui-typography-line-height | 行距 | inherit
| --wui-typography-paragraph-gutter | 段落间距 | `theme.spacing(2)`
| --wui-typography-paragraph-indent | 段落文字锁进 | 2em
| --wui-typography-subtitle-1 | 副标题 | 1.0625rem
| --wui-typography-subtitle-2 | 副标题(小) | 0.9375rem
| --wui-typography-text-align | 对齐 | inherit
| --wui-typography-title-font-weight | 标题粗细 | 500
