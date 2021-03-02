/**
 * title: 水平方向折叠
 * desc: 通过 `direction=horizontal, collapsedSize` 改变折叠方向
 */

/** @jsx jsx */
import * as React from 'react';
import {
  jsx,
  Button,
  Space,
  Collapse,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';

export default function Example() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Space>
        <Button onClick={() => setVisible(true)}>Open</Button>
        <Button onClick={() => setVisible(false)}>Close</Button>
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>
      </Space>
      <WhiteSpace />
      <Collapse visible={visible} direction="horizontal" collapsedSize={1}>
        <div
          css={{
            width: 300,
            padding: 16,
            boxSizing: 'border-box'
          }}
        >
          <Typography>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </Typography>
        </div>
      </Collapse>
    </div>
  );
}
