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

# Picker 选择器

提供多个选项集合供用户选择，支持单列选择和多列级联。

## 代码演示


### 基本使用

在实际场景中，Picker 通常在浮层中显示

<code src="./demo/demo1.tsx"></code>

### 表单输入

Picker 作为用于辅助表单填写项, 搭配 `rc-field-form`

<code src="./demo/demo2.tsx"></code>

### Hook

<code src="./demo/demo3.tsx"></code>

### 指令式调用

指令式调用`Context`不可用, 推荐使用`usePicker`替代.

<code src="./demo/demo4.tsx"></code>

更多场景和参数请参考 `PickerView`


## API

### usePicker

```tsx pure
const picker = usePicker(Omit<PickerProps, 'visible'>?)

picker.show(Omit<PickerProps, 'visible'>?) //显示
picker.hide() //隐藏
picker.rendered //渲染, 放入虚拟dom上下文中
```

### Exposes

```tsx pure
showPicker(Omit<PickerProps, 'visible'>?) //显示
hidePicker(); //隐藏
```

### PickerProps

<API src="./Picker.tsx" hideTitle></API>

