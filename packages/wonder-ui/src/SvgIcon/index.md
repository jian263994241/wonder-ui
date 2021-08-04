---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /general
  title: 通用
  order: 0
---

# Icon 图标

矢量图标库。使用图标组件请先导入 `@wonder-ui/icons` :

```bash
npm install @wonder-ui/icons
```

## 代码演示

### 基本使用

用`SvgIcon`扩展, 只需要在子节点添加路径即可

<code src="./demo/default.tsx"></code>

### 使用预置图标

``` tsx | pure
import { Alarm } from '@wonder-ui/icons';

<Alarm size="large"/>
```

## 图标列表

<code src="./demo/icons.tsx"></code>


<API src="./SvgIcon.tsx" props="classes|className|style|color|component|fontSize|spin|titleAccess|viewBox"></API>


