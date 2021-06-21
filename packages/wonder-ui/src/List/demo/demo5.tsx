/**
 * title: 选中的列表项
 * desc: 选中状态 `selected`
 * background: '#f5f5f5'
 */
import { Container, ListItem, ListItemText, MenuList } from '@wonder-ui/core';

const listData = [1, 2, 3, 4, 5];

export default () => (
  <Container size="sm">
    <MenuList>
      {listData.map((item, index) => (
        <ListItem button key={index} tabIndex={0} disabled={item === 1}>
          <ListItemText>Item {item}</ListItemText>
        </ListItem>
      ))}
    </MenuList>
  </Container>
);
