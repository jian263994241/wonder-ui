/**
 * title: 方法调用
 * desc: 调用`show`或`hide`
 */

/** @jsx jsx */
import { jsx, Button, showPreloader, hidePreloader } from '@wonder-ui/core';

export default function Example() {
  const open = () => {
    showPreloader();
    setTimeout(() => {
      hidePreloader();
    }, 2000);
  };

  return (
    <Button variant="contained" onClick={() => open()}>
      Open
    </Button>
  );
}
