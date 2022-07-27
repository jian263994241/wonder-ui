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

### 基本使用

``` tsx | pure
import { Alarm } from '@wonder-ui/icons';

<Alarm className="custom-class" style={{color: 'blue', fontSize: 36}}/>
```

<API src="./SvgIcon.tsx"></API>

## CSS 变量

| 属性 | 说明 | 默认值
| - | - | -
| --wui-svg-icon-color | 颜色 | currentColor
| --wui-svg-icon-size | 尺寸 | 1em

## 图标列表

<code src="./demo/icons.tsx"></code>





