/**
 * title: 基础用法
 * desc: 通过改变 `visible` 显示或隐藏内容
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
      <Collapse in={visible}>
        <div
          css={{
            border: '1px solid #ccc',
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
