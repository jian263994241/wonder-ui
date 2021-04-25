/**
 * title: 嵌套列表
 * desc: 使用`Collapse`折叠列表
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  Collapse,
  Container,
  jsx,
  List,
  ListItemMedia,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { HeartFill } from '@wonder-ui/icons';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle(true);
  return (
    <Container size="sm">
      <List>
        <ListItem>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 2</ListItemText>
        </ListItem>

        <ListItem
          arrow={visible ? 'vertical-up' : 'vertical'}
          onClick={() => toggle()}
          button
        >
          Item 3
        </ListItem>

        <Collapse in={visible}>
          <List>
            <ListItem>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 2</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>Item 3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <ListItem>
          <ListItemText>Item 4</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Item 5</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
}
