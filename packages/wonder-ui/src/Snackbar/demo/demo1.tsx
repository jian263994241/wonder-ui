/**
 * title: 简单的消息条
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Snackbar, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Snackbar visible message="123213" />
    </div>
  );
}
