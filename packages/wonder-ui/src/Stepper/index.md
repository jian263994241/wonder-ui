---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /data-input
  title: 数据录入
  order: 3
---
# Stepper 步进器

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 自定义

如果不想触发连续增长, 可以给 `stepDelay` 一个尽可能大的值

<code src="./demo/demo2.tsx"></code>


<API src="./Stepper.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-stepper-height | 高度 | 28px
| --wui-stepper-border-radius | 圆角 | `theme.shape.borderRadius`
| --wui-stepper-bg-color | 背景色 | `theme.palette.background.default`
| --wui-stepper-button-color | 按钮颜色 | `theme.palette.primary.main`
| --wui-stepper-font-size | 文字大小 | `14px`
| --wui-stepper-text-color | 文字颜色 | `theme.palette.text.primary`
| --wui-stepper-gap | 间隙 | 2px
