---
mobile: false
nav:
  path: /hooks
group:
  path: /advanced
  title: Advanced
  order: 99
---

# useCreation

useCreation 替代 `useMemo` 和 `useRef`, 保证值不会被重复创建。

相对 `useRef` 创建一些常量时, useCreation 的参数是一个function, 避免了每次刷新都会执行实例过程

```ts
const a = useRef(new Subject()) // 每次重渲染，都会执行实例化 Subject 的过程，即便这个实例立刻就被扔掉了
const b = useCreation(() => new Subject(), []) // 通过 factory 函数，可以避免性能隐患
```


## API

```ts

function useCreation<T>(factory: () => T, deps: any[] = []) : T

```
