import React from 'react';
import {
  Avatar,
  List,
  ListHeader,
  ListItem,
  Slide,
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
          primary="Slide"
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
        <Slide in={visible} direction="up">
          <Avatar size={80} variant="rounded" />
        </Slide>
      </Space>
    </div>
  );
};
