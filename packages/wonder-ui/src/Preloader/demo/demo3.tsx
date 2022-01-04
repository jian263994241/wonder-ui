import { Button, usePreloader } from '@wonder-ui/core';

export default () => {
  const preloader = usePreloader();

  const open = () => {
    preloader.show();
    setTimeout(() => {
      preloader.hide();
    }, 2000);
  };

  return (
    <div>
      <Button onClick={() => open()}>Open</Button>
      {preloader.rendered}
    </div>
  );
};
