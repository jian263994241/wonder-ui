/**
 * title: 基本的选择框
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, Space, Radio, Typography } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <div>
        <Typography component="label">
          <Radio name="radio-demo" />
          <span>选项一</span>
        </Typography>
      </div>
      <div>
        <Typography component="label">
          <Radio name="radio-demo" />
          <span>选项二</span>
        </Typography>
      </div>
      <div>
        <Typography component="label">
          <Radio name="radio-demo" />
          <span>选项三</span>
        </Typography>
      </div>
    </Space>
  );
}
