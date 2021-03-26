/**
 * title: 基本的选择框
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, Checkbox, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Space wrap>
        <Checkbox defaultChecked />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="danger" />
        <Checkbox defaultChecked color="warning" />
        <Checkbox defaultChecked color="info" />
      </Space>
      <br />
      <Space wrap>
        <Checkbox disabled defaultChecked />
        <Checkbox disabled defaultChecked color="secondary" />
        <Checkbox disabled defaultChecked color="danger" />
        <Checkbox disabled defaultChecked color="warning" />
        <Checkbox disabled defaultChecked color="info" />
      </Space>
    </div>
  );
}
