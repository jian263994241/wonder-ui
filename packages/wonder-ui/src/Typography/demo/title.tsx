/**
 * title: 标题
 * desc: html的所有标题 `h1`~`h6`
 */
/** @jsx jsx */
import { Typography, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        h1.Wonder heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2.Wonder heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3.Wonder heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4.Wonder heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5.Wonder heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6.Wonder heading
      </Typography>
    </div>
  );
}
