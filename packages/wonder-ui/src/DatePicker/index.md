---
sidemenu: false
---

### DatePicker Props

除了支持 [PickerProps](picker#picker) 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| type | 类型 | 'date' \| 'datetime' \| 'datehour' \| 'month-day' \| 'year-month' | datetime
| minDate | 可选的最小时间，精确到分钟 | Date | 十年前
| maxDate | 可选的最大时间，精确到分钟 | Date | 十年后
| currentDate | 当前时间 | Date |
| filter | 选项过滤函数	 | (type, vals) => vals	 |
| formatter | 选项格式化函数	 | (type, val) => val |
| onChange | 当值变化时触发的事件 | (value: Date) => void |
| onConfirm | 点击完成按钮时触发的事件 | (value: Date) => void |
| onCancel | 点击取消按钮时触发的事件 | () => void |
