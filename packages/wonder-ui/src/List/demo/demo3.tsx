/**
 * title: 文件夹列表
 * desc: 使用 `ListItemMedia` 用来放Icon和图片
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListItemMedia,
  ListItem,
  ListItemText,
  Container
} from '@wonder-ui/core';
import { FileEarmarkFill } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Container size="sm">
      <List>
        <ListItem>
          <ListItemMedia>
            <FileEarmarkFill />
          </ListItemMedia>
          <ListItemText primary="Index" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <FileEarmarkFill />
          </ListItemMedia>
          <ListItemText primary="Index 2" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
    </Container>
  );
}
