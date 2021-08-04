import { Button, showPreloader, hidePreloader } from '@wonder-ui/core';

export default () => {
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
};
