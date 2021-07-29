---
sidemenu: false
---
### Tag

除了支持 `HTMLElement` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| color | 颜色 | default \| primary \| secondary \| success \| danger \| warning \| info \| light \| dark | default
| classes | css | Recard<TagClasses, string> |
| variant | 类型 | outlined \| contained | outlined
| closable | 可关闭类型 | boolean | false
| onClose | onClose事件 | () => void |


### Tag classes

```
'root', 'close', 'outlined', 'contained', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorDanger', 'colorWarning', 'colorInfo', 'colorLight', 'colorDark'
```

