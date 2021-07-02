/**
 * title: 指定滚动区域
 * desc: 通过 `scrollEl` 属性可以指定滚动区域, 默认是 window, 在`Page`内需要指定 `scrollEl`
 * iframe: true
 */
import {
  Button,
  Sticky,
  Page,
  Space,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [scrollEl, setScrollEl] = React.useState<HTMLDivElement | null>(null);
  return (
    <Page
      title="Sticky"
      style={{ width: 320, height: 300, margin: '0 auto' }}
      ContentRef={(node) => {
        setScrollEl(node);
      }}
    >
      <WhiteSpace size="large" />

      <Space horizontalAlign="center">
        <Sticky scrollEl={scrollEl} offsetTop={44}>
          <Button variant="contained">Sticky</Button>
        </Sticky>
      </Space>

      <WhiteSpace size="large" />

      <Space direction="vertical">
        {Array(20)
          .fill('')
          .map((_, index) => (
            <Typography paragraph key={index}>
              通过 `scrollEl` 属性可以指定滚动区域, 默认是 window,
              在`Page`内需要指定 `scrollEl`;
            </Typography>
          ))}
      </Space>
    </Page>
  );
};
