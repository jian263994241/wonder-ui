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

单列选择时，可以通过 `defaultIndex` 属性设置初始选中项的索引

<code src="./demo/demo1.tsx"></code>


### 多列选择

属性 `columns` 可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等

<code src="./demo/demo2.tsx"></code>

### 级联选择

级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位


<code src="./demo/demo3.tsx"></code>

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

<code src="./demo/demo4.tsx"></code>

### 动态设置选项

通过 actionRef 上的实例方法可以更灵活地控制选择器，比如使用 setColumnValues 方法实现多列联动。

<code src="./demo/demo5.tsx"></code>

### 加载状态

若选择器数据是异步获取的，可以通过 loading 属性显示加载提示。

<code src="./demo/demo6.tsx"></code>

### 浮层

在实际场景中，Picker 通常在浮层中显示

<code src="./demo/demo7.tsx"></code>

### 表单输入

Picker 作为用于辅助表单填写项, 搭配 `rc-field-form`

<code src="./demo/demo9.tsx"></code>

### 地址选择器

使用`lcn`创建组件数据

<code src="./demo/demo8.tsx"></code>

<API src="./Picker.tsx" props="actionRef|columns|title|subTitle|confirmText|cancelText|textKey|childrenKey|loading|readOnly|showNavbar|navbarPosition|defaultIndex|itemHeight|visibleItemCount|visible|swipeDuration|onChange|onConfirm"></API>



## Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列:

| 键名 | 说明 |	类型
| --- | --- | ---
| values | 列中对应的备选值 | Array<string \| number>
| defaultIndex | 初始选中项的索引，默认为 0 | number
| className | 为对应列添加额外的类名 | string
| children | 级联选项 | Column

## 内置方法

通过 `actionRef` 可以获取到 Picker 内置方法

| 方法名 |	说明 |	参数 |	返回值
| --- | --- | --- | ---
| getValues	| 获取所有列选中的值 |	-	| values
| setValues	| 设置所有列选中的值 |	values	| -
| getIndexes	| 获取所有列选中值对应的索引 |	-	| indexes
| setIndexes	| 设置所有列选中值对应的索引 |	indexes	| -
| getColumnValue	| 获取对应列选中的值 |	columnIndex	| value
| setColumnValue	| 设置对应列选中的值 |	columnIndex, value	| -
| getColumnIndex	| 获取对应列选中项的索引 |	columnIndex	| optionIndex
| setColumnIndex	| 设置对应列选中项的索引 |	columnIndex, optionIndex	| -
| getColumnValues	| 获取对应列中所有选项 |	columnIndex	| values
| setColumnValues	| 设置对应列中所有选项 |	columnIndex, values	| -
| confirm	| 停止惯性滚动并触发 confirm 事件 |	-	| -

