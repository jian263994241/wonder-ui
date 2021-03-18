/**
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListHeader,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemExtra,
  Container
} from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListHeader>Header</ListHeader>
        <ListItem>
          <ListItemText>Index</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Index 2</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
