
### 基本用法

```jsx
import { List, ListItem } from '@wonder-ui/core';

<div className="mobile-preview small">
  <List renderHeader={()=> `header`}>
    <ListItem extra="extra content">Title</ListItem>
  </List>
  <List renderHeader={()=> `header`} renderFooter={()=>`footer`}>
    <ListItem extra="extra content">Title</ListItem>
  </List>
</div>


```