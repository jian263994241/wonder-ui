---
sidemenu: false
---

### TimePicker Props

除了支持 [PickerProps](picker#picker) 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| minHour | 可选的最小小时 | number | 0
| maxHour | 可选的最大小时 | number | 23
| minMinute | 可选的最小分钟 | number | 0
| maxMinute | 可选的最大分钟 | number | 59
| currentTime | 当前时间 | string |
| filter | 选项过滤函数	 | (type, vals) => vals	 |
| formatter | 选项格式化函数	 | (type, val) => val |
| onChange | 当值变化时触发的事件 | (value: string) => void |
| onConfirm | 点击完成按钮时触发的事件 | (value: string) => void |
| onCancel | 点击取消按钮时触发的事件 | () => void |
