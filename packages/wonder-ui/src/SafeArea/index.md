---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /layout
  title: 布局
  order: 1
---

# SafeArea 安全区

当网页被全屏展示时，可借助安全区实现自动适配。

<code src="./demo/demo1.tsx"></code>

<API src="./SafeArea.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-safe-area-coef | 缩放系数 | 1
| --wui-safe-area-top | 上边距 | env(safe-area-inset-top)
| --wui-safe-area-bottom | 下边距 | env(safe-area-inset-bottom)

