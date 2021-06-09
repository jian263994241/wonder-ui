/**
 * title: 带导航栏的页面
 * desc:
 */

/** @jsx jsx */
import { jsx, Page, Typography, Container } from '@wonder-ui/core';

export default function Example() {
  return (
    <Page style={{ width: 320, height: 300 }} title="导航栏" showBackButton>
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
  );
}
