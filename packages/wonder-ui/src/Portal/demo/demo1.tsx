/**
 * title: 传送门使用
 * desc:
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Portal } from '@wonder-ui/core';

export default function Example() {
  const target = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Toggle
        {visible && (
          <Portal container={() => target.current}>
            <div>不在button内</div>
          </Portal>
        )}
      </Button>

      <div ref={target}></div>
    </div>
  );
}
