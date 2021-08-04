---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /data-display
  title: 数据展示
  order: 4
---
# CountDown 倒计时

用于实时展示倒计时数值，支持毫秒精度。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 手动控制状态

<code src="./demo/demo2.tsx"></code>


## 类型

```ts
type TDate = Date | number | string | undefined;

interface FormattedRes {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}
```

<API src="./CountDown.tsx" props="children|targetDate|interval|onEnd"></API>

