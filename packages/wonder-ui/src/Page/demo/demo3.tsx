/**
 * title: 抽屉内的页面
 * desc:
 */
import { Button, Container, Drawer, Page, Typography } from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default () => {
  const [visible, { setTrue, setFalse }] = useBoolean(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setTrue()}>
        抽屉内的页面
      </Button>

      <Drawer visible={visible} anchor="bottom" onClose={() => setFalse()}>
        <Page
          style={{ width: '100%', height: 300 }}
          title="标题"
          showCloseButton
          onClose={() => setFalse()}
        >
          <Container>
            <Typography gutterBottom>第一条</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
            <Typography gutterBottom>默认一块可以滚动的区域</Typography>
          </Container>
        </Page>
      </Drawer>
    </div>
  );
};
