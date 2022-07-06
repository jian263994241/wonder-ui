/**
 * title: 和 List 一起使用
 * desc:
 */
import {
  WhiteSpace,
  List,
  ListItem,
  ListHeader,
  ListItemText,
  Page
} from '@wonder-ui/core';

export default () => (
  <Page>
    <List>
      <ListHeader>WhiteSpace</ListHeader>
      <ListItem divider>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <WhiteSpace />
      <ListItem>
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>
  </Page>
);
