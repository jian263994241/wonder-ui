/**
 * title: 水平分割线
 * desc: 默认为水平分割线，可在中间加入文字。
 */
/** @jsx jsx */
import { Typography, jsx, Divider } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider style={{ margin: '24px 0' }} />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider style={{ margin: '24px 0' }} />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </div>
  );
}
