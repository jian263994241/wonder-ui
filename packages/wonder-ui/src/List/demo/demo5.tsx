/**
 * title: 选中的列表项
 * desc: 选中状态 `selected`
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  ListItem,
  ListItemText,
  Container,
  MenuList
} from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const listData = [1, 2, 3, 4, 5];

export default function Example() {
  const { isSelected, toggle, setSelected } = useSelections(listData, [3]);

  return (
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
}
