import React from 'react';
import {
  Collapse,
  ContentBlock,
  List,
  ListHeader,
  ListItem,
  Toggle
} from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <List>
        <ListHeader>水平方向折叠</ListHeader>
        <ListItem
          primary="展开"
          extra={
            <Toggle checked={visible} onChange={() => setVisible(!visible)} />
          }
        />
      </List>

      <Collapse in={visible} direction="horizontal">
        <ContentBlock title="展现的内容" style={{ width: '100vw' }}>
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </ContentBlock>
      </Collapse>
    </div>
  );
};
