/**
 * title: 抽屉内的页面
 * desc:
 */

/** @jsx jsx */
import {
  jsx,
  Button,
  Drawer,
  Page,
  Typography,
  Container
} from '@wonder-ui/core';
import * as React from 'react';

export default function Example() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setVisible(true)}>
        抽屉内的页面
      </Button>

      <Drawer
        visible={visible}
        anchor="bottom"
        onClose={() => setVisible(false)}
      >
        <Page
          style={{ width: '100%', height: 300 }}
          title="标题"
          showCloseButton
          onClose={() => setVisible(false)}
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
}
