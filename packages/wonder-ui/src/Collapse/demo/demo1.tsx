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
        <ListHeader>基本使用</ListHeader>
        <ListItem
          primary="展开"
          extra={
            <Toggle checked={visible} onChange={() => setVisible(!visible)} />
          }
        />
      </List>

      <Collapse in={visible}>
        <ContentBlock title="展现的内容">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </ContentBlock>
      </Collapse>
    </div>
  );
};
