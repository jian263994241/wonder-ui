/**
 * title: Checkbox
 * desc:
 * background: '#f5f5f5'
 */
import {
  Container,
  Checkbox,
  List,
  ListItem,
  ListHeader,
  ListItemMedia,
  ListItemText
} from '@wonder-ui/core';

export default () => (
  <Container size="sm">
    <List component="div">
      <ListHeader>Settings</ListHeader>
      <ListItem button divider component="label">
        <ListItemMedia>
          <Checkbox />
        </ListItemMedia>
        <ListItemText>Wi-Fi</ListItemText>
      </ListItem>
      <ListItem button divider component="label">
        <ListItemMedia>
          <Checkbox />
        </ListItemMedia>
        <ListItemText>Wi-Fi 2</ListItemText>
      </ListItem>
    </List>
  </Container>
);
