/**
 * title: 基本使用
 * desc: 一条基本的通知消息
 */
import * as React from 'react';
import { Button, Snackbar } from '@wonder-ui/core';

export default function Example() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setVisible(true)}>简单的消息条</Button>
      <Snackbar
        visible={visible}
        message="简单的消息条"
        autoHideDuration={3000}
        onClose={() => setVisible(false)}
      />
    </div>
  );
}
