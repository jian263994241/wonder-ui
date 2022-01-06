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

### Hook

<code src="./demo/demo3.tsx"></code>

### 替换图标

<code src="./demo/demo4.tsx"></code>

### 指令调用

指令调用时`Context`不可用, 推荐使用`usePreloader`替代.

<code src="./demo/demo2.tsx"></code>

## API

### usePreloader

```ts pure

interface usePreloaderProps extends Omit<PreloaderProps, 'visible'> {
  timeout?: number;
}

const preloader = usePreloader(usePreloaderProps?);

preloader.show(usePreloaderProps?); //显示
preloader.hide(); //隐藏
preloader.rendered // 渲染, 放入虚拟dom上下文中
```

### Exposes

```ts pure
showPreloader(Omit<PreloaderProps, 'visible'>?); //显示
hidePreloader({hideAll?: boolean}?) //隐藏
```

### PreloaderProps

<API src="./Preloader.tsx" hideTitle></API>


