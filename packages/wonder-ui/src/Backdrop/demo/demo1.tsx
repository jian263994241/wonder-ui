/**
 * title: 基本使用
 * desc:
 *
 */

/** @jsx jsx */
import {
  jsx,
  Button,
  Backdrop,
  useTheme,
  CircularProgress
} from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const theme = useTheme();
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()}>Show Backdrop</Button>

      <Backdrop
        visible={visible}
        onClick={() => toggle()}
        css={{
          zIndex: theme.zIndex.fixed,
          color: '#fff'
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
