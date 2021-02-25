---
sidemenu: false
---

### ButtonBase

除了继承 `ButtonHTMLAttributes` 属性, 还有如下属性：

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| activeClassName | 点击时的状态样式名 | `string` | state-active
| component | 渲染的节点类型 | `keyof ReactHTML` | button
| href | 相当于 `a` 链接的 `href` 属性，`component`为 `a` 存在时生效 | `string` |
| target | 相当于 `a` 链接的 `target` 属性，`href` 存在时生效 | `string` |

