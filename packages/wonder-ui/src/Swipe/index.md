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
# Swipe 轮播

用于循环播放一组图片或内容。

## 代码演示

### 基本使用

每个 Child 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播, `interval`设置轮播的间隔。

<code src="./demo/demo1.tsx"></code>

### 懒加载

默认加载当前和相邻的`slide`, 可以通过`disableLazyLoading`属性禁用懒加载

<code src="./demo/demo2.tsx"></code>

### 纵向滚动

通过`vertical`属性设置纵向滚动, 注意最外层容器需要设置高度

<code src="./demo/demo3.tsx"></code>

### 自定义滑块大小

滑块默认宽度为 100%，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

<code src="./demo/demo4.tsx"></code>

### 自定义指示器

通过 `onRenderIndicator` 属性可以自定义指示器的样式。

<code src="./demo/demo5.tsx"></code>

<API src="./Swipe.tsx"></API>

<API src="../SwipeItem/SwipeItem.tsx"></API>
## Swipe 方法

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| swipeTo | 滑动到与index匹配的位置 | `(slideNumber: number, {immediate?: boolean}) => void` |
| next | 滑到下一张幻灯片 | `() => void` |
| prev | 滑到上一张幻灯片 | `() => void` |
