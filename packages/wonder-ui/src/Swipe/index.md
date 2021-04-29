---
sidemenu: false
---

### Swipe

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| startSlide | 滑动应开始的索引位置 | `number` | 0
| speed | 上一个和下一个过渡的速度（以毫秒为单位）| `number` | 400
| auto | 指定后，开始自动播放幻灯片（幻灯片切换之间的时间，以毫秒为单位）  | `number` | 3000
| continuous | 创造无终点的无限感觉 | `boolean` | true
| autoRestart | 用户的触摸事件或下一个/上一个呼叫后自动重启幻灯片放映 | `boolean` | true
| disableScroll | 防止此容器上的任何触摸事件滚动页面 | `boolean` | false
| stopPropagation | stop event propagation | `boolean` | false
| draggable | 除了触摸事件外，还监听鼠标事件 | `boolean` | true
| ignore | 忽略与该选择器匹配的任何元素上的触摸事件 | `string` | null
| callback | 在幻灯片更改时运行。三个参数传递给该函数：`index`（当前幻灯片索引）`elem`（当前幻灯片元素）和`dir`（方向：“ 1”代表左或后退“ -1”代表右或前向）。| `(index: number, elem: HTMLElement, dir: number) => void` |
| transitionEnd | 在幻灯片过渡结束时运行。两个参数传递给该函数：`index`（当前幻灯片索引）和`elem`（当前幻灯片元素）。 | `(index: number, elem: HTMLElement) => void` |

#### 方法

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| prev | 滑到上一张幻灯片 | `() => void` |
| next | 滑到下一张幻灯片 | `() => void` |
| getPos | 返回当前幻灯片索引位置 | `() => number` |
| getNumSlides | 返回幻灯片的数量 | `() => number` |
| slide | 滑动到与index匹配的位置 | `(index: number, duration: number)=> void;` |
