/**
 * title: 显示头像
 */

import { Page, Paper, Skeleton } from '@wonder-ui/core';

export default () => (
  <Page title="Skeleton with avatar">
    <Paper style={{ padding: '20px 0' }}>
      <Skeleton title avatar />
      <Skeleton title avatar />
      <Skeleton title avatar />
    </Paper>
  </Page>
);
