import { List, ListHeader, ListItem } from '@wonder-ui/core';

const ListItemLink = ListItem.withComponent('a');

export default () => (
  <List component="div">
    <ListHeader component="div">列表链接</ListHeader>
    <ListItemLink button divider href="#列表链接" arrow="horizontal">
      Link 1
    </ListItemLink>

    <ListItemLink
      button
      href="#列表链接"
      arrow="horizontal"
      extra={<span>CEO</span>}
    >
      Link 2
    </ListItemLink>
  </List>
);
