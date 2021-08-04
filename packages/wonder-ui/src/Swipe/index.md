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

<code src="./demo/demo1.tsx"></code>


<API src="./Swipe.tsx" props="arrows|actionRef|children|interval|autoplay|dots|enableMouseEvents|infinite|initialSlide|disabled|disableLazyLoading|onChangeIndex|onSwitching|onTransitionEnd|onRenderDots|onRenderPrevArrow|onRenderNextArrow"></API>


## 内置方法

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| slickGoTo | 滑动到与index匹配的位置 | (slideNumber: number, dontAnimate?: boolean): void |
| slickNext | 滑到下一张幻灯片 | (): void |
| slickPrev | 滑到上一张幻灯片 | (): void |
