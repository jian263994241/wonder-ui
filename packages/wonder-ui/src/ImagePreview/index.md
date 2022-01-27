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


# ImagePreview 图片预览

图片放大预览

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### Hook

<code src="./demo/demo2.tsx"></code>

## API

### useImagePreview

```tsx pure
const imagePreview = useImagePreview(Omit<ImagePreviewProps, 'visible'>?)

imagePreview.show(Omit<ImagePreviewProps, 'visible'>?) //显示
imagePreview.rendered //渲染, 放入虚拟dom上下文中
```

<API src="./ImagePreview.tsx" hideTitle></API>
