import {
  Page,
  List,
  ListHeader,
  ListItem,
  ListItemText
} from '@wonder-ui/core';

export default () => (
  <Page>
    <List>
      <ListHeader>Header</ListHeader>
      <ListItem>
        <ListItemText>Index</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Index 2</ListItemText>
      </ListItem>
    </List>
  </Page>
);
