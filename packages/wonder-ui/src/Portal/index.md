---
mobile: false
toc: menu
nav:
  path: /components
group:
  path: /utils
  title: 辅助
  order: 5
---
# Portal 传送门

传送门组件将其子节点渲染到目标DOM树当中。


<Alert type="warning">
   React 不支持服务端渲染的 createPortal() API。 若您想显示模态框，则需要通过 disablePortal 这个属性来禁用 protal 功能
</Alert>

## 代码演示

### 基本使用

<code src="./demo/demo1.tsx"></code>



## API


| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | 子节点 | `ReactElement` |
| container | 目标容器 | `Element \| null \| (() => Element \| null)` | document.body
| disablePortal | 禁用 | `boolean` | false
| ref | ref | `React.Ref<children>` |



