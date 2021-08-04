import { Page, List, ListItem, ListItemText } from '@wonder-ui/core';

const ListItemLink = ListItem.withComponent('a');

export default () => (
  <Page title="Link">
    <List component="div">
      <ListItemLink divider href="#列表链接">
        <ListItemText>Link 1</ListItemText>
      </ListItemLink>

      <ListItemLink divider href="#列表链接" extra={<span>CEO</span>}>
        <ListItemText>Link 2</ListItemText>
      </ListItemLink>

      <ListItemLink divider href="#列表链接" arrow="horizontal">
        <ListItemText>Link 3</ListItemText>
      </ListItemLink>

      <ListItemLink
        href="#列表链接"
        arrow="horizontal"
        extra={<span>CEO</span>}
      >
        <ListItemText>Link 4</ListItemText>
      </ListItemLink>
    </List>
  </Page>
);
