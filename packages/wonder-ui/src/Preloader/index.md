---
mobile: true
toc: menu
nav:
  path: /components
group:
  path: /fb
  title: 反馈
  order: 5
---
# Preloader 指示器

异步等待指示器


## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>

### 异步使用

<code src="./demo/demo2.tsx"></code>

### 方法调用

组件提供了两个全局方法, 方便调用:

- showPreloader(PreloaderProps);
- hidePreloader();

<code src="./demo/demo3.tsx"></code>

### 替换图标

<code src="./demo/demo4.tsx"></code>

### 全局调用

```jsx | pure
import { showPreloader, hidePreloader } from '@wonder-ui/core'

showPreloader(PreloaderProps);

hidePreloader();
```

<API src="./Preloader.tsx" exports='["default"]' props="children|onLoad|text|visible|indicator|vertical|type"></API>


