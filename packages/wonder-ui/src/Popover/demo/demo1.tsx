/**
 * title: 基本使用
 * desc:
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Popover } from '@wonder-ui/core';

export default function Example() {
  const [target, setTarget] = React.useState<Element | null>(null);
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button
        ref={(node: any) => setTarget(node)}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
      </Button>

      <Popover target={target}>123321</Popover>
    </div>
  );
}
