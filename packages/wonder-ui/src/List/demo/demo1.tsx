/**
 * title: 简易列表
 * desc: 可以设置一个空的`ListHeader`做间隔符
 * background: '#f5f5f5'
 */
import {
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemText,
  Divider,
  WhiteSpace
} from '@wonder-ui/core';
import { HouseFill, HeartFill } from '@wonder-ui/icons';

export default () => (
  <Page title="Simple list">
    <List>
      <ListHeader>列表</ListHeader>
      <ListItem>
        <ListItemText>Item 1</ListItemText>
      </ListItem>

      <Divider component="li" />

      <ListItem>
        <ListItemText>Item 2</ListItemText>
      </ListItem>

      <WhiteSpace component="li" />

      <ListItem>
        <ListItemText>Item 3</ListItemText>
      </ListItem>

      <Divider component="li" />

      <ListItem>
        <ListItemText>Item 4</ListItemText>
      </ListItem>
    </List>
  </Page>
);
