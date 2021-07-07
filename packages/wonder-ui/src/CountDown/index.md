---
sidemenu: false
---

### CountDown


| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | 内容 | (data: { countdown: number; formattedRes: FormattedRes; setTargetDate: React.Dispatch\<React.SetStateAction\<TDate\>\>; }) => ReactElement |
| targetDate | 未来时间 | `TDate` |
| interval | 变化时间间隔（毫秒） | number | 1000
| onEnd | 结束后的回调函数 | () => void |


### CountDown types

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
