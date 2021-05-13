/**
 * title: 基本使用
 * desc:
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Popover } from '@wonder-ui/core';

export default function Example() {
  const [visible, setVisible] = React.useState(false);

  const buttonRef = React.useRef<HTMLElement>(null);

  return (
    <div>
      <Button
        ref={buttonRef}
        onClick={() => {
          setVisible(true);
        }}
      >
        弹出框
      </Button>
      <Popover
        visible={visible}
        anchorEl={() => buttonRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ padding: 16 }}>气泡卡片内容...</div>
      </Popover>
    </div>
  );
}
