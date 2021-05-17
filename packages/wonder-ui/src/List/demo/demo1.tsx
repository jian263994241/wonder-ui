/**
 * title: 简易列表
 * desc: 可以设置一个空的`ListHeader`做间隔符
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListItem,
  ListHeader,
  ListItemText,
  ListItemMedia,
  Container
} from '@wonder-ui/core';
import { HouseFill, HeartFill } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Container size="sm">
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
    </Container>
  );
}
