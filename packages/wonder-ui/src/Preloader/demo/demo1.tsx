/**
 * title: 基础用法
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, Preloader } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle(false);

  const open = () => {
    toggle();

    setTimeout(() => {
      toggle();
    }, 2000);
  };

  return (
    <div>
      <Button onClick={() => open()}>Open</Button>
      <Preloader visible={visible} />
    </div>
  );
}
