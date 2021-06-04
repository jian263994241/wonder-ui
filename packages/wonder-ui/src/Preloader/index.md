---
sidemenu: false
---

### Preloader

除了支持 HTMLElement 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | target | `ReactElement` |
| middleLength | 居中位置偏移 | `number` | 0
| onLoad | 异步事件 | `() => Promise<any>` |
| text | 禁用portal | `string` |
| visible | 显示 | `boolean` |

### 全局

```jsx | pure
import { showPreloader, hidePreloader } from '@wonder-ui/core'

showPreloader(PreloaderProps);

hidePreloader();
```
