---
sidemenu: false
---

### Preloader

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | 触发按钮 | `ReactElement` |
| middleLength | 居中位置偏移 | `number` | 0
| onLoad | 异步事件 | `() => Promise<any>` |
| text | 禁用portal | `string` |
| visible | 显示 | `boolean` |

### 全局

```jsx | pure
Preloader.show(PreloaderProps);

Preloader.hide();
```
