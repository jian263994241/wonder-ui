import { List, ListItem, ListHeader, WhiteSpace } from '@wonder-ui/core';

export default () => (
  <List inset>
    <ListHeader>内嵌列表</ListHeader>
    <ListItem divider>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <WhiteSpace component="li" />
    <ListItem divider>Item 3</ListItem>
    <ListItem>Item 4</ListItem>
  </List>
);
