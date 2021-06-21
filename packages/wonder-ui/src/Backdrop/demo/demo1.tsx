/**
 * title: 基本使用
 * desc:
 *
 */
import { Button, Backdrop, CircularProgress, useTheme } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const theme = useTheme();
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()} variant="contained">
        Show Backdrop
      </Button>

      <Backdrop
        visible={visible}
        onClick={() => toggle()}
        style={{ zIndex: theme.zIndex.fixed }}
      >
        <CircularProgress color="light" />
      </Backdrop>
    </div>
  );
};
