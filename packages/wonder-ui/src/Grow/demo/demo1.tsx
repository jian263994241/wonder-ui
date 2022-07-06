import React from 'react';
import {
  Avatar,
  Grow,
  List,
  ListHeader,
  ListItem,
  Space,
  Toggle
} from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <List>
        <ListHeader>过度效果</ListHeader>
        <ListItem
          primary="Grow"
          extra={
            <Toggle
              checked={visible}
              onChange={(checked) => {
                setVisible(checked);
              }}
            />
          }
        ></ListItem>
      </List>
      <Space horizontalAlign="center" style={{ height: 200 }}>
        <Grow in={visible}>
          <Avatar size={100} variant="rounded" />
        </Grow>
      </Space>
    </div>
  );
};
