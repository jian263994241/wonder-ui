/**
 * title: 带文字的垂直分割线
 * desc: 分割线中带有文字。
 */
import { Typography, Divider } from '@wonder-ui/core';

export default () => (
  <div style={{ display: 'flex' }}>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
    <Divider direction="vertical" flexItem>
      VERTICAL
    </Divider>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </Typography>
  </div>
);
