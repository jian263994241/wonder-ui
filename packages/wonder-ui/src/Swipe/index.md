---
sidemenu: false
---

### Swipe

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| arrows | 显示箭头 | boolean |
| actionRef | action | Ref\<SwipeAction\> |
| interval | 每次自动滚动之间的延迟（以毫秒为单位）| number | 3000
| autoplay | 自动滚动 | boolean | false
| className | 内部滑块div的CSS类 | string |
| dots | 显示指示点 | boolean | false
| enableMouseEvents | 鼠标模拟 | boolean | true
| infinite | 无限包裹内容 | boolean | false
| initialSlide | 第一张幻灯片的索引 | number | 0
| disabled | 启用/禁用滑动以更改幻灯片 | boolean | false
| disableLazyLoading | 禁用按需或逐步加载图像或渲染组件 | boolean | false
| onChangeIndex | 索引更改回调 | (currentSlide: number): void |
| onSwitching | 滑动切换时由组件调用 | (currentSlide: number, type: 'move' \| 'end'): void |
| onTransitionEnd | 动画停止时触发的回调 | (): void |
| onRenderDots| 自定义点模板 | (currentSlide, SwipeAction): Element |
| onRenderPrevArrow| 自定义点模板 | (currentSlide, SwipeAction): Element |
| onRenderNextArrow| 自定义点模板 | (currentSlide, SwipeAction): Element |


#### SwipeAction 方法

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| slickGoTo | 滑动到与index匹配的位置 | (slideNumber: number, dontAnimate?: boolean): void |
| slickNext | 滑到下一张幻灯片 | (): void |
| slickPrev | 滑到上一张幻灯片 | (): void |
