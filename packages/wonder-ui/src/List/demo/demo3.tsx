/**
 * title: 文件夹列表
 * desc: 使用 `ListItemMedia` 用来放Icon和图片
 * background: '#f5f5f5'
 */
import {
  Container,
  List,
  ListItemMedia,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { FileEarmarkFill } from '@wonder-ui/icons';

export default () => (
  <Container size="sm">
    <List>
      <ListItem divider>
        <ListItemMedia>
          <FileEarmarkFill />
        </ListItemMedia>
        <ListItemText primary="Index" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem divider>
        <ListItemMedia>
          <FileEarmarkFill />
        </ListItemMedia>
        <ListItemText primary="Index 2" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  </Container>
);
