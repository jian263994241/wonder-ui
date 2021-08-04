import {
  Button,
  Container,
  Drawer,
  Page,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default () => {
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  return (
    <Page title="页面和抽屉">
      <WhiteSpace />
      <Container>
        <Button variant="contained" onClick={() => setTrue()}>
          打开抽屉
        </Button>
      </Container>

      <Drawer visible={visible} anchor="bottom" onClose={() => setFalse()}>
        <Page
          style={{ width: '100%', height: 300 }}
          title="抽屉"
          showCloseButton
          onClose={() => setFalse()}
        >
          <Typography gutterBottom>抽屉内的页面</Typography>
        </Page>
      </Drawer>
    </Page>
  );
};
