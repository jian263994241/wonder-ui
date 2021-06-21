/**
 * title: 传送门使用
 * desc:
 */
import * as React from 'react';
import { Button, Portal } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const target = React.useRef(null);
  const [visible, { toggle }] = useToggle(false);

  return (
    <div>
      <Button variant="contained" onClick={() => toggle()}>
        Toggle
      </Button>

      <div style={{ backgroundColor: 'grey' }}>
        {visible && (
          <Portal container={() => target.current}>
            <div>Portal Content</div>
          </Portal>
        )}
      </div>

      <div ref={target} style={{ backgroundColor: 'pink' }}></div>
    </div>
  );
};
