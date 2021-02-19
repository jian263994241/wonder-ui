/**
 * title: 带文字的水平分割线
 * desc: 分割线中带有文字，可以用 `textAlign` 指定文字位置。
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
      <Divider style={{ margin: '24px 0' }} textAlign="center">
        Text
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider style={{ margin: '24px 0' }} textAlign="left">
        Left Text
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider style={{ margin: '24px 0' }} textAlign="right">
        Right Text
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </div>
  );
}
