/**
 * title: 传送门使用
 * desc:
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Portal } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const target = React.useRef(null);
  const [visible, { toggle }] = useToggle(false);

  return (
    <div>
      <Button onClick={() => toggle()}>Toggle</Button>

      <div css={{ backgroundColor: 'grey' }}>
        {visible && (
          <Portal container={() => target.current}>
            <div>Portal Content</div>
          </Portal>
        )}
      </div>

      <div ref={target} css={{ backgroundColor: 'pink' }}></div>
    </div>
  );
}
