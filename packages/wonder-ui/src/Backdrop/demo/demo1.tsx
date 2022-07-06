import { Button, Backdrop, CircularProgress } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()} variant="contained">
        Show Backdrop
      </Button>

      <Backdrop visible={visible} onClick={() => toggle()}>
        <CircularProgress color="light" />
      </Backdrop>
    </div>
  );
};
