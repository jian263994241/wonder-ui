/**
 * title: 基本使用
 * desc:
 */
import * as React from 'react';
import { Button, Popover } from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default () => {
  const [visible, actions] = useBoolean(false);
  const buttonRef = React.useRef<HTMLElement>(null);

  return (
    <div>
      <Button variant="contained" ref={buttonRef} onClick={actions.setTrue}>
        弹出框
      </Button>

      <Popover
        visible={visible}
        anchorEl={() => buttonRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => actions.setFalse()}
      >
        <div style={{ padding: 16 }}>
          气泡卡片内容... <Button>更多</Button>
        </div>
      </Popover>
    </div>
  );
};
