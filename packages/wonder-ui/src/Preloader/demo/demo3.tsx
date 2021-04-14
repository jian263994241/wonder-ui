/**
 * title: 方法调用
 * desc: 调用`show`或`hide`
 */

/** @jsx jsx */
import { jsx, Button, Preloader } from '@wonder-ui/core';

export default function Example() {
  const open = () => {
    Preloader.show();
    setTimeout(() => {
      Preloader.hide();
    }, 2000);
  };

  return <Button onClick={() => open()}>Open</Button>;
}
