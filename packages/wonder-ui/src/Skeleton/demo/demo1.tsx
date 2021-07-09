/**
 * title: 基本使用
 */
import { Page, Paper, Skeleton } from '@wonder-ui/core';

export default () => (
  <Page title="Skeleton">
    <Paper style={{ padding: '20px 0' }}>
      <Skeleton title />
      <Skeleton title />
      <Skeleton title />
    </Paper>
  </Page>
);
