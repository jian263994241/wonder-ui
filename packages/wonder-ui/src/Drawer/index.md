---
sidemenu: false
---

### Drawer

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| anchor | 出现的位置 | 'bottom' \| 'left' \| 'right' \| 'top' | left
| classes | css | Recard<DrawerClasses, string>  |
| elevation | 阴影 | number | 16
| variant | 类型 | 'permanent' \| 'persistent' \| 'temporary' | temporary
| visible | 是否显示 | boolean |
| onClose | 事件 | () => void |
| keepMounted | 保持节点存在 | boolean | false
| ModalProps | modal props | [ModalProps](modal#modal) |

### Drawer classes


```
'root', 'permanent', 'persistent', 'temporary', 'anchorTop', 'anchorBottom', 'anchorLeft', 'anchorRight', 'temporaryAnchorTop', 'temporaryAnchorBottom', 'temporaryAnchorLeft', 'temporaryAnchorRight'
```
