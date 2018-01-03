# Grid

灵活的网格布局:

```jsx
import {GridRow, GridCol} from 'wonder-ui/Grid';


<GridRow gutter={15}>
    <GridCol width={50}>col-50</GridCol>
    <GridCol width={50}>col-50</GridCol>
</GridRow>
```

## Props

### GridRow

* gutter  `number` 间距 默认值 15

### GridCol

* width `number` 宽度  10, 20, 25, 30, 35 ...... 100
