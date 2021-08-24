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

# DatePicker 时间选择器

时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用


### 基本使用

<code src="./demo/demo1.tsx"></code>

### 选择年月日

通过 type 属性来定义需要选择的时间类型，type 为 date 表示选择年月日。通过 minDate 和 maxDate 属性可以确定可选的时间范围。

<code src="./demo/demo2.tsx"></code>

### 选择时间

<code src="../TimePicker/demo/demo1.tsx"></code>

<API src="./DatePicker.tsx" props="type|currentDate|minDate|maxDate|filter|formatter|onChange|onConfirm|onCancel"></API>

<API src="../TimePicker/TimePicker.tsx"></API>
