---
sidemenu: false
---

### Dialog

除了支持 `DialogContent` 所有属性, 还支持以下属性:

| 参数	|说明	|类型	|默认值
| --- | --- | --- | ---
| children | target | `ReactElement` |
| classes | css | `'root', 'content'` |
| visible | 是否显示 | `boolean` |
| TranstionComponent | 动画 | `ComponentType<BaseTransitionProps>` |
| TranstionComponentProps | 动画属性 | `BaseTransitionProps` |
| transitionDuration | 动画时长 | `number \| { appear?: number; enter?: number; exit?: number } \| null` | theme.duration.area.medium
