/**
 * title: 内嵌列表
 * desc: List inset 样式
 * background: '#f5f5f5'
 */
import {
  Collapse,
  Page,
  List,
  ListItem,
  ListItemText,
  WhiteSpace
} from '@wonder-ui/core';
import { HeartFill } from '@wonder-ui/icons';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle(true);
  return (
    <Page title="Inset">
      <WhiteSpace />
      <List inset>
        <ListItem divider media={<HeartFill />}>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem divider media={<HeartFill />}>
          <ListItemText>Item 2</ListItemText>
        </ListItem>

        <ListItem
          onClick={() => toggle()}
          button
          arrow={visible ? 'vertical-up' : 'vertical'}
          divider
        >
          <ListItemText>Item 3</ListItemText>
        </ListItem>

        <Collapse in={visible}>
          <List>
            <ListItem divider media={<HeartFill />}>
              <ListItemText>Item 1</ListItemText>
            </ListItem>
            <ListItem divider media={<HeartFill />}>
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
        <ListItem>
          <ListItemText>Item 5</ListItemText>
        </ListItem>
      </List>
    </Page>
  );
};
