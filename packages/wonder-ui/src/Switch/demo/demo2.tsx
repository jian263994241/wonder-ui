/**
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import { jsx, List, ListItem, ListItemText, Container } from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListItem>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 3</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 4</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
