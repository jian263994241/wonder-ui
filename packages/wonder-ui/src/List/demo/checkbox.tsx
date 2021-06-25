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
  ListItemMedia,
  ListItemText
} from '@wonder-ui/core';

export default () => (
  <Page title="Checkbox">
    <List component="div">
      <ListHeader>Settings</ListHeader>
      <ListItem button divider component="label">
        <ListItemMedia>
          <Checkbox />
        </ListItemMedia>
        <ListItemText>Wi-Fi</ListItemText>
      </ListItem>
      <ListItem button divider component="label">
        <ListItemMedia>
          <Checkbox />
        </ListItemMedia>
        <ListItemText>Wi-Fi 2</ListItemText>
      </ListItem>
    </List>
  </Page>
);
