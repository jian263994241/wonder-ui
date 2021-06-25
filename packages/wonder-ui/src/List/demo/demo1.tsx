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
  ListItemMedia
} from '@wonder-ui/core';
import { HouseFill, HeartFill } from '@wonder-ui/icons';

export default () => (
  <Page title="Simple list">
    <List>
      <ListItem divider>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <ListHeader />
      <ListItem divider>
        <ListItemMedia>
          <HouseFill />
        </ListItemMedia>
        <ListItemText>Item 3</ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <HeartFill />
        </ListItemMedia>
        <ListItemText>Item 4</ListItemText>
      </ListItem>
    </List>
  </Page>
);
