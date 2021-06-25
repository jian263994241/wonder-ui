/**
 * title: 基础用法
 * desc:
 */
import {
  Button,
  Container,
  Page,
  Preloader,
  WhiteSpace
} from '@wonder-ui/core';
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
    <Page title="Preloader">
      <WhiteSpace />
      <Container>
        <Button variant="contained" onClick={() => open()}>
          Open
        </Button>
      </Container>

      <Preloader visible={visible} text="加载中..." />
    </Page>
  );
};
