import { Collapse, Page, List, ListItem, ListItemText } from '@wonder-ui/core';
import { HeartFill } from '@wonder-ui/icons';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle(true);
  return (
    <Page title="Nested list">
      <List>
        <ListItem divider media={<HeartFill />}>
          <ListItemText>Item 1</ListItemText>
        </ListItem>
        <ListItem divider media={<HeartFill />}>
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
        <ListItem divider>
          <ListItemText>Item 5</ListItemText>
        </ListItem>
      </List>
    </Page>
  );
};
