/**
 * title: 过渡动画
 * desc: 和 `Fade` 一起使用
 */

/** @jsx jsx */
import { jsx, Button, Fade, Toast, styled } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()}>Show Modal</Button>

      <Toast visible={visible} onClose={() => toggle()} message={'12313'} />
    </div>
  );
}
