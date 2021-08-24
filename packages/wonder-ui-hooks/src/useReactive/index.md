---
mobile: false
nav:
  path: /hooks
group:
  path: /advanced
  title: Advanced
  order: 99
---

# useReactive

管理 object 类型 state 的 Hooks。 直接修改属性即可刷新视图


### 基本使用

<code src="./demo/demo1.tsx"></code>


## API

```ts
function useReactive <T>(initialState: T) : T
```
