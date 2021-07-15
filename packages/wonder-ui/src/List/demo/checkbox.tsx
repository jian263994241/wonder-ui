/**
 * title: Checkbox
 * desc:
 * background: '#f5f5f5'
 */
import {
  Checkbox,
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemText
} from '@wonder-ui/core';

const ListLabel = ListItemText.withComponent('label');

export default () => (
  <Page title="Checkbox">
    <List>
      <ListHeader>Settings</ListHeader>
      <ListItem button divider media={<Checkbox id="checkbox-wifi1" />}>
        <ListLabel component="label" htmlFor="checkbox-wifi1">
          Wi-Fi
        </ListLabel>
      </ListItem>
      <ListItem button media={<Checkbox id="checkbox-wifi2" />}>
        <ListLabel component="label" htmlFor="checkbox-wifi2">
          Wi-Fi 2
        </ListLabel>
      </ListItem>
    </List>
  </Page>
);
