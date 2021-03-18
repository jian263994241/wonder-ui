/**
 * title: 和文字一起使用
 * desc:
 */

/** @jsx jsx */
import { jsx, Badge, Typography } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
      <Typography variant="h2" gutterBottom>
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
      <Typography variant="h4" gutterBottom>
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
      <Typography variant="h6">
        Example heading <Badge color="secondary">New</Badge>
      </Typography>
    </div>
  );
}
