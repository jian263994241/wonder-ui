/**
 * title: 基本的选择框
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, Space, Checkbox } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox defaultChecked disabled />
      <Checkbox disabled defaultChecked color="secondary" />
    </Space>
  );
}
