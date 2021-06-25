/**
 * title: 嵌套列表
 * desc: 使用`Collapse`折叠列表
 * background: '#f5f5f5'
 */
import {
  Collapse,
  Page,
  List,
  ListItemMedia,
  ListItem,
  ListItemText
} from '@wonder-ui/core';
import { HeartFill } from '@wonder-ui/icons';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle(true);
  return (
    <Page title="Nested list">
      <List>
        <ListItem divider>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemMedia>
            <HeartFill />
          </ListItemMedia>
          <ListItemText>Item 2</ListItemText>
        </ListItem>

        <ListItem
          arrow={visible ? 'vertical-up' : 'vertical'}
          onClick={() => toggle()}
          button
          divider
        >
          Item 3
        </ListItem>

        <Collapse in={visible}>
          <List>
            <ListItem divider>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem divider>
              <ListItemMedia>
                <HeartFill />
              </ListItemMedia>
              <ListItemText>Item 2</ListItemText>
            </ListItem>

            <ListItem divider>
              <ListItemText>Item 3</ListItemText>
            </ListItem>
          </List>
        </Collapse>

        <ListItem divider>
          <ListItemText>Item 4</ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText>Item 5</ListItemText>
        </ListItem>
      </List>
    </Page>
  );
};
