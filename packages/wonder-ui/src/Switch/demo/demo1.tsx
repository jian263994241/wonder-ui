/**
 * title: 基本使用
 * desc: 该开关作用为一个辅助操作和一个单独的目标。
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListItem,
  ListHeader,
  ListItemMedia,
  ListItemText,
  Container
} from '@wonder-ui/core';
import { Wifi } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListHeader>Settings</ListHeader>
        <ListItem>
          <ListItemMedia>
            <Wifi />
          </ListItemMedia>
          <ListItemText>Wi-Fi</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <Wifi />
          </ListItemMedia>
          <ListItemText>Wi-Fi 2</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
