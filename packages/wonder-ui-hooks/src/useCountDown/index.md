---
mobile: false
nav:
  path: /hooks
group:
  path: /state
  title: State
  order: 3
---

# useCountDown

用于实时展示倒计时数值，支持毫秒精度。

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 短信倒计时

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

## API

```ts
function useCountDown (options?: { targetDate?: TDate }) :
[timeLeft: number, setTargetDate: () =>void , formattedRes: FormattedRes];

```
