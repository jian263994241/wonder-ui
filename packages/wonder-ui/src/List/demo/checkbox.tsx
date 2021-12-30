import { Checkbox, List, ListItem, ListHeader } from '@wonder-ui/core';

export default () => (
  <List>
    <ListHeader>Settings</ListHeader>
    <ListItem button divider media={<Checkbox id="checkbox-wifi1" />}>
      <label htmlFor="checkbox-wifi1" style={{ display: 'block' }}>
        Wi-Fi
      </label>
    </ListItem>
    <ListItem button media={<Checkbox id="checkbox-wifi2" />}>
      <label htmlFor="checkbox-wifi2" style={{ display: 'block' }}>
        Wi-Fi 2
      </label>
    </ListItem>
  </List>
);
