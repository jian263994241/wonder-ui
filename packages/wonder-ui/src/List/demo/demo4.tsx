import { List, ListItem, ListHeader, WhiteSpace } from '@wonder-ui/core';

export default () => (
  <List mode="card">
    <ListHeader>卡片样式</ListHeader>
    <div>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
    </div>

    <WhiteSpace />
    <div>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </div>
  </List>
);
