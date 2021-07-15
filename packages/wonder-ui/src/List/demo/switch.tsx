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
  ListItemText,
  Toggle
} from '@wonder-ui/core';
import { Wifi } from '@wonder-ui/icons';

export default () => (
  <Page title="Switch">
    <List>
      <ListHeader>Settings</ListHeader>
      <ListItem divider media={<Wifi />} extra={<Toggle />}>
        <ListItemText>Wi-Fi</ListItemText>
      </ListItem>
      <ListItem media={<Wifi />} extra={<Toggle />}>
        <ListItemText>Wi-Fi 2</ListItemText>
      </ListItem>
    </List>
  </Page>
);
