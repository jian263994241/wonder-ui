/**
 * title: Checkbox
 * desc:
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
  Container,
  Checkbox
} from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <List component="div">
        <ListHeader>Settings</ListHeader>
        <ListItem button component="label">
          <ListItemMedia>
            <Checkbox circle />
          </ListItemMedia>
          <ListItemText>Wi-Fi</ListItemText>
        </ListItem>
        <ListItem button component="label">
          <ListItemMedia>
            <Checkbox circle />
          </ListItemMedia>
          <ListItemText>Wi-Fi 2</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
