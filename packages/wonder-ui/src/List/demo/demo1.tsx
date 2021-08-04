import {
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemText,
  Divider,
  WhiteSpace
} from '@wonder-ui/core';

export default () => (
  <Page title="Simple list">
    <List>
      <ListHeader>列表</ListHeader>
      <ListItem>
        <ListItemText>Item 1</ListItemText>
      </ListItem>

      <Divider component="li" />

      <ListItem>
        <ListItemText>Item 2</ListItemText>
      </ListItem>

      <WhiteSpace component="li" />

      <ListItem>
        <ListItemText>Item 3</ListItemText>
      </ListItem>

      <Divider component="li" />

      <ListItem>
        <ListItemText>Item 4</ListItemText>
      </ListItem>
    </List>
  </Page>
);
