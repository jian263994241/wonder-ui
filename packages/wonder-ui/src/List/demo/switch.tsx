/**
 * title: Switch 开关
 * desc: 该开关作用为一个辅助操作和一个单独的目标。
 * background: '#f5f5f5'
 */
import {
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemMedia,
  ListItemText,
  Toggle
} from '@wonder-ui/core';
import { Wifi } from '@wonder-ui/icons';

export default () => (
  <Page title="Switch">
    <List>
      <ListHeader>Settings</ListHeader>
      <ListItem>
        <ListItemMedia>
          <Wifi />
        </ListItemMedia>
        <ListItemText>Wi-Fi</ListItemText>
        <Toggle />
      </ListItem>
      <ListItem>
        <ListItemMedia>
          <Wifi />
        </ListItemMedia>
        <ListItemText>Wi-Fi 2</ListItemText>
        <Toggle />
      </ListItem>
    </List>
  </Page>
);
