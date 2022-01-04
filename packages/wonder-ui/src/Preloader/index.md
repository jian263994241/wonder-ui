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

### 指令调用


<code src="./demo/demo3.tsx"></code>

### 替换图标

<code src="./demo/demo4.tsx"></code>

### 全局调用

推荐使用`usePreloader`替代

<code src="./demo/demo2.tsx"></code>

## Hook

```ts pure

interface usePreloaderProps extends Omit<PreloaderProps, 'visible'> {
  timeout?: number;
}

const preloader = usePreloader(usePreloaderProps?);

preloader.show(); //显示
preloader.hide(); //隐藏
preloader.hideAll(); //隐藏所有
preloader.rendered // 节点, 放入虚拟dom上下文中
```

<API src="./Preloader.tsx"></API>


