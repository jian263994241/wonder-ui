---
sidemenu: false
---

### Swipe

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| adaptiveHeight | 自动调整幻灯片的高度 | `boolean` | false
| afterChange | 索引更改回调 | `(currentSlide: number): void` |
| appendDots| 自定义点模板 | `(dots: ReactNode): Element` |
| arrows | 显示箭头 | `boolean` |
| asNavFor | 提供对另一个滑块的引用，并将其与当前滑块同步 | `ref` |
| autoplaySpeed | 每次自动滚动之间的延迟（以毫秒为单位）| `number` | 3000
| autoplay | 自动滚动 | `boolean` | false
| beforeChange | 索引更改回调 | `(currentSlide: number): void` |
| centerMode | 居中当前幻灯片 | `boolean` | false
| centerPadding | | `string` | 50px
| className | 内部滑块div的CSS类 | `string` |
| customPaging | 自定义分页模板 | `(index: number): Element` |
| dotsClass | 点的CSS类 | `string` |
| dots | 显示指示点 | `boolean` | false
| draggable | 通过在桌面上拖动来启用滚动 | `boolean` | true
| easing | | `easing` | linear
| fade | | `boolean` | false
| focusOnSelect | 点击滑动 | `boolean` | false
| infinite | 无限包裹内容 | `boolean` | false
| initialSlide | 第一张幻灯片的索引 | `number` | 0
| lazyLoad | 按需或逐步加载图像或渲染组件 | `"ondemand" \| "progressive"` | null
| onEdge | 在有限情况下的边缘拖动事件 | `(swipeDirection: SwipeDirection): void` |
| onInit | componentWillMount回调 | `(): void` |
| onLazyLoad | 幻灯片延迟加载后的回调 | `(slidesToLoad: number[]): void` |
| onReInit | componentDidUpdate回调 | `(): void` |
| onSwipe | 滑动更改幻灯片后的回调 | `(): void` |
| pauseOnDotsHover | 防止将鼠标悬停在点上时自动播放 | `boolean` | false
| pauseOnFocus | 防止在幻灯片上播放时自动播放 | `boolean` | false
| pauseOnHover | 防止在轨道上徘徊时自动播放 | `boolean` | true
| responsive | 根据断点定制 | [] |
| rows | 滑块中每张幻灯片的行数（启用网格模式）| `number` | 1
| rtl | 反转幻灯片顺序 | `boolean` | false
| slide | 滑盖容器类型 | `string` | div
| slidesPerRow | 在网格模式下显示的幻灯片数，这对于行选项很有用 | `number` | 1
| slidesToScroll | 一次滚动几张幻灯片 | `number` | 1
| slidesToShow | 一帧显示多少张幻灯片 | `number` | 1
| speed | 动画速度，以毫秒为单位 | `number` | 500
| swipeToSlide | 启用拖动/滑动，无论`slidesToScroll`如何 | `boolean` | false
| swipe | 启用/禁用滑动以更改幻灯片 | `boolean` | true
| touchMove | | `boolean` | true
| touchThreshold | | `number` | 5
| useCSS | 启用/禁用CSS过渡 | `boolean` | true
| useTransform | 启用/禁用CSS转换 | `boolean` | true
| variableWidth | | `boolean` | false
| vertical | | `boolean` | false

#### 方法

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| slickGoTo | 滑动到与index匹配的位置 | `(slideNumber: number, dontAnimate?: boolean): void` |
| slickNext | 滑到下一张幻灯片 | `(): void` |
| slickPause | 暂停autoplay | `(): void` |
| slickPlay | 播放autoplay | `(): void` |
| slickPrev | 滑到上一张幻灯片 | `(): void` |
