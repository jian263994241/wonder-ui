/**
 * title: 选中的列表项
 * desc: 选中状态 `selected`
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListItem,
  ListItemText,
  Container,
  FocusZone
} from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const listData = [1, 2, 3, 4, 5];

export default function Example() {
  const { isSelected, toggle, setSelected } = useSelections(listData, [3]);

  return (
    <Container size="sm">
      <FocusZone direction="vertical">
        <List>
          {listData.map((item, index) => (
            <ListItem
              button
              data-is-focusable={item != 1}
              key={index}
              selected={isSelected(item)}
              onClick={() =>
                isSelected(item) ? toggle(item) : setSelected([item])
              }
              disabled={item === 1}
            >
              <ListItemText>Item {item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </FocusZone>
    </Container>
  );
}
