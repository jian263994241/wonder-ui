/**
 * title: 水平分割线
 * desc: 默认为水平分割线，可在中间加入文字。
 */
import { Divider, Space, Typography } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider />
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider />
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
  </Space>
);
