---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /data-display
  title: 数据展示
  order: 4
---
# PullRefresh 拉动刷新

通过触发，立刻加载内容。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>


### 自定义提示

<code src="./demo/demo2.tsx"></code>


<API src="./PullRefresh.tsx"></API>



## Slots

| 参数	|说明	|参数
| --- | --- | ---
normal |	非下拉状态时顶部内容|	-
pulling	|下拉过程中顶部内容|	{ distance: 当前下拉距离 }
loosing	|释放过程中顶部内容|	{ distance: 当前下拉距离 }
loading	|加载过程中顶部内容|	{ distance: 当前下拉距离 }
success	|刷新成功提示内容|	-



