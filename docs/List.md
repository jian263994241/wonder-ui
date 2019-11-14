

```jsx
import { List, ListItem } from '@wonder-ui/core';

<>
  <List renderHeader={()=> `header`}>
    <ListItem extra="extra content">Title</ListItem>
  </List>
  <List renderHeader={()=> `header`} renderFooter={()=>`footer`}>
    <ListItem extra="extra content">Title</ListItem>
  </List>
</>

```