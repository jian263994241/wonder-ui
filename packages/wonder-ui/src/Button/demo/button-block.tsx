/**
 * title: 块状按钮
 * desc: 通过辅助样式实现块状按钮
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <div
      css={{
        display: 'grid',
        gap: 8
      }}
    >
      <Button>Block button</Button>
      <Button>Block button</Button>
    </div>
  );
}
