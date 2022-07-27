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

# Button 按钮

用户点击触发动作或做出选择的区域. 通常出现在一些用户可传达操作命令的场景中, 例如:

- Dialog 对话框
- Modal 模态框
- Form 表单
- ...

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 按钮颜色

按钮分下面几种类型 `primary` | `secondary` | `success` | `danger` | `warning` | `info` | `light` | `dark`

<code src="./demo/colors.tsx"></code>

### 自定义按钮主题

<code src="./demo/theme.tsx"></code>


<API src="./Button.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-button-bg-color | 背景颜色 |  transparent
| --wui-button-border-color | 边框颜色 |    transparent
| --wui-button-border-radius | 边框角度 | `theme.shape.borderRadius`
| --wui-button-border-width | 边框宽度 |    0px
| --wui-button-box-shadow | 按钮阴影 |    none
| --wui-button-color | 按钮颜色 | `theme.palette.primary.main`
| --wui-button-font-size | 文字大小 |
| --wui-button-font-weight | 文字粗细 |    500
| --wui-button-letter-spacing | 文字间距 |    0
| --wui-button-line-height | 文字行距 |    1.75
| --wui-button-min-width | 按钮最小宽度 |    64px
| --wui-button-padding-horizontal | 水平内间距 |
| --wui-button-padding-vertical | 垂直内间距 |
| --wui-button-text-color | 文字颜色 |   `theme.palette.primary.main`
| --wui-button-text-transform | 英文大写 |    uppercase
