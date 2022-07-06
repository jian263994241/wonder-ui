import * as React from 'react';
import { Collapse, List, ListItem, ListHeader } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(true);

  const toggle = () => {
    setVisible((show) => !show);
  };

  return (
    <List>
      <ListHeader>嵌套列表</ListHeader>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>

      <ListItem
        arrow={visible ? 'vertical-up' : 'vertical'}
        onClick={() => toggle()}
      >
        Item 3
      </ListItem>

      <Collapse in={visible} component={ListItem}>
        <List>
          <ListItem>Nested Item 1</ListItem>
          <ListItem>NestedItem 2</ListItem>
          <ListItem>NestedItem 3</ListItem>
        </List>
      </Collapse>

      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  );
};
