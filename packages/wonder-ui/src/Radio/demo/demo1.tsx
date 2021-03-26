/**
 * title: 基本的选择框
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, Space, Typography, Radio } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Typography component="label">
        <Radio name="radio-demo" />
        <span>Primary</span>
      </Typography>
      <Typography component="label">
        <Radio name="radio-demo" color="secondary" />
        <span>Secondary</span>
      </Typography>
      <Typography component="label">
        <Radio name="radio-demo" color="danger" />
        <span>Danger</span>
      </Typography>
      <Typography component="label">
        <Radio name="radio-demo" color="warning" />
        <span>Warning</span>
      </Typography>
      <Typography component="label">
        <Radio name="radio-demo" color="info" />
        <span>Info</span>
      </Typography>
    </Space>
  );
}
