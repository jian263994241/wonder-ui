---
sidemenu: false
---

### Picker


| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| columns	| 对象数组，配置每一列显示的数据 |	Column[]|	[]
| title	| 顶部栏标题 |	string	| -
| subTitle | 顶部栏标题 |	string	| -
| confirmText	| 确认按钮文字 |	string	| 确认
| cancelText	| 取消按钮文字 |	string	| 取消
| drawer | 抽屉 | boolean | false
| textKey	| 选项对象中，选项文字对应的键名 |	string|	text
| loading	| 是否显示加载状态	 | boolean	| false
| readOnly | 是否为只读状态，只读状态下无法切换选项 |	boolean	| false
| showNavbar	| 是否显示顶部栏	 | boolean |	false
| defaultIndex	| 单列选择时，默认选中项的索引 |	number | 	0
| itemHeight	| 选项高度，支持 px	 | number	| 44
| visibleItemCount	| 可见的选项个数 |	number |	6
| visible | 抽屉显示隐藏,抽屉时可用 | boolean | false
| swipeDuration	| 快速滑动时惯性滚动的时长，单位 ms	 | number	| 600

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列:

| 键名 | 说明 |	类型
| --- | --- | ---
| values | 列中对应的备选值 | Array<string \| number>
| defaultIndex | 初始选中项的索引，默认为 0 | number
| className | 为对应列添加额外的类名 | string
| children | 级联选项 | Column

### Picker 方法

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

### Picker classes

```
'root', 'drawser', 'columns', 'mask', 'indicator', 'cloumnRoot', 'cloumnInner', 'cloumnItem', 'loading', 'readOnly', 'showNavbar', 'navbar', 'drawer'
```
