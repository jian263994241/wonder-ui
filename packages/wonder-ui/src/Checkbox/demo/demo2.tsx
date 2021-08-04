/**
 * background: '#f5f5f5'
 */
import {
  Container,
  Checkbox,
  List,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { useSelections } from '@wonder-ui/hooks';

const dataList = [1, 2, 3];

export default () => {
  const { allSelected, isSelected, toggleAll, toggle, partiallySelected } =
    useSelections(dataList);

  return (
    <Container size="sm">
      <List component="div">
        <ListItem
          component="label"
          media={
            <Checkbox
              circle
              name="demo-checkbox"
              indeterminate={partiallySelected}
              checked={allSelected}
              onChange={() => toggleAll()}
            />
          }
        >
          <ListItemText>Movies</ListItemText>
        </ListItem>
        <List component="div">
          {dataList.map((item, index) => (
            <ListItem
              component="label"
              key={index}
              media={
                <Checkbox
                  circle
                  name="demo-checkbox"
                  value={`move ${item}`}
                  checked={isSelected(item)}
                  onChange={() => toggle(item)}
                />
              }
            >
              <ListItemText secondary="Click me!" primary={`Movie ${item}`} />
            </ListItem>
          ))}
        </List>
      </List>
    </Container>
  );
};
