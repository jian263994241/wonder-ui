
### 带箭头的列表

```jsx
import { List, ListItem } from '@wonder-ui/core';

<div className="mobile-preview small">
  <List renderHeader={()=> `带箭头的列表`}>
    <ListItem extra="horizontal" arrow="horizontal">Title</ListItem>
    <ListItem extra="vertical" arrow="vertical">Title</ListItem>
    <ListItem extra="vertical-up" arrow="vertical-up">Title</ListItem>
  </List>
</div>

```


### 内容列表

```jsx
import { List, ListItem } from '@wonder-ui/core';

<div className="mobile-preview">
  <List renderHeader={()=> `超出内容隐藏`}>
    <ListItem>
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title
    </ListItem>
  </List>
  <List renderHeader={()=> `超出内容换行`}>
    <ListItem wrap>
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title
    </ListItem>
  </List>
  <List renderHeader={()=> `超出内容换行`}>
    <ListItem wrap extra="align center" arrow="horizontal">
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title
    </ListItem>
  </List>
  <List renderHeader={()=> `超出内容换行 - align top`}>
    <ListItem wrap extra="align top" align="top" arrow="horizontal">
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title
    </ListItem>
  </List>
  <List renderHeader={()=> `完整的列表项`}>
    <ListItem wrap extra="align top" align="top" arrow="horizontal">
      Title Title Title Title Title Title Title Title Title Title Title Title Title Title
    </ListItem>
  </List>
</div>

```