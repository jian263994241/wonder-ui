import {
  Page,
  List,
  ListHeader,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { FileEarmarkFill } from '@wonder-ui/icons';

export default () => (
  <Page title="List with icon">
    <List>
      <ListHeader>文件夹</ListHeader>
      <ListItem divider media={<FileEarmarkFill />}>
        <ListItemText primary="Index" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem divider media={<FileEarmarkFill />}>
        <ListItemText primary="Index 2" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem media={<FileEarmarkFill />}>
        <ListItemText primary="Index 3" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  </Page>
);
