---
sidemenu: false
---



### PullToRefresh


| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| refreshing | 是否处于加载中状态 | boolean | -
| pullingText | 下拉过程提示文案 | string | -
| loosingText | 释放过程提示文案	| string | -
| loadingText | 加载过程提示文案	| string | -
| successText | 刷新成功提示文案 | string | -
| successDuration | 刷新成功提示展示时长(ms) | number | 500
| animationDuration | 动画时长	| number | 300
| headHeight | 顶部内容高度 | number | 50
| pullDistance | 触发下拉刷新的距离 | number | 与 `headHeight` 一致
| disabled | 是否禁用下拉刷新 | boolean | false
| onRefresh | 下拉刷新时触发 | () => void | -
| slots | 自定义内容 | ||


### PullToRefresh slots

| 参数	|说明	|参数
| --- | --- | ---
normal |	非下拉状态时顶部内容|	-
pulling	|下拉过程中顶部内容|	{ distance: 当前下拉距离 }
loosing	|释放过程中顶部内容|	{ distance: 当前下拉距离 }
loading	|加载过程中顶部内容|	{ distance: 当前下拉距离 }
success	|刷新成功提示内容|	-


### PullToRefresh classes

```
'root', 'track', 'indicator', 'text', 'normal', 'loading', 'loosing', 'pulling', 'success'
```
