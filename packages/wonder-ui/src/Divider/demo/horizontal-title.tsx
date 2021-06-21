/**
 * title: 带文字的水平分割线
 * desc: 分割线中带有文字，可以用 `textAlign` 指定文字位置。
 */
import { Divider, Space, Typography } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider textAlign="center">Text</Divider>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider textAlign="left">Left Text</Divider>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider textAlign="right">Right Text</Divider>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
  </Space>
);
