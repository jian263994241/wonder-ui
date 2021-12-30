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
      <ListItem divider>Item 1</ListItem>
      <ListItem divider>Item 2</ListItem>

      <ListItem
        button
        divider
        arrow={visible ? 'vertical-up' : 'vertical'}
        onClick={() => toggle()}
      >
        Item 3
      </ListItem>

      <Collapse in={visible}>
        <List>
          <ListItem divider>Nested Item 1</ListItem>
          <ListItem divider>NestedItem 2</ListItem>
          <ListItem>NestedItem 3</ListItem>
        </List>
      </Collapse>

      <ListItem divider>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  );
};
