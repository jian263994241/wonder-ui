/**
 * title: 基本使用
 * desc:
 */
import { Button, Container, Preloader } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default () => {
  const [visible, { toggle }] = useToggle(false);

  const open = () => {
    toggle();

    setTimeout(() => {
      toggle();
    }, 2000);
  };

  return (
    <Container>
      <Button variant="contained" onClick={() => open()}>
        Open
      </Button>
      <Preloader visible={visible} text="加载中..." />
    </Container>
  );
};
