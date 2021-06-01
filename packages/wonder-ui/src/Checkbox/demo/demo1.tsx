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
        <Checkbox defaultChecked color="primary" />
        <Checkbox defaultChecked color="secondary" />
        <Checkbox defaultChecked color="success" />
        <Checkbox defaultChecked color="danger" />
        <Checkbox defaultChecked color="warning" />
        <Checkbox defaultChecked color="info" />
        <Checkbox defaultChecked color="light" />
        <Checkbox defaultChecked color="dark" />
      </Space>
      <br />
      <Space wrap>
        <Checkbox disabled defaultChecked color="primary" />
        <Checkbox disabled defaultChecked color="secondary" />
        <Checkbox disabled defaultChecked color="success" />
        <Checkbox disabled defaultChecked color="danger" />
        <Checkbox disabled defaultChecked color="warning" />
        <Checkbox disabled defaultChecked color="info" />
        <Checkbox disabled defaultChecked color="light" />
        <Checkbox disabled defaultChecked color="dark" />
      </Space>
    </div>
  );
}
