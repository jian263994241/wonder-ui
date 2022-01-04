import * as React from 'react';
import { Button, Preloader } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);

  const open = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <div>
      <Button onClick={() => open()}>Open</Button>
      <Preloader visible={visible} text="加载中..." />
    </div>
  );
};
