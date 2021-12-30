import { List, ListItem, ListHeader, Toggle } from '@wonder-ui/core';
import { Wifi } from '@wonder-ui/icons';

export default () => (
  <List>
    <ListHeader>Settings</ListHeader>
    <ListItem divider media={<Wifi />} extra={<Toggle />}>
      Wi-Fi
    </ListItem>
    <ListItem media={<Wifi />} extra={<Toggle />}>
      Wi-Fi 2
    </ListItem>
  </List>
);
