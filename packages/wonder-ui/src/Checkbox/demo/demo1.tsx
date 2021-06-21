/**
 * title: 基本的选择框
 * desc:
 *
 */
import { Checkbox, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <Checkbox defaultChecked color="primary" />
    <Checkbox defaultChecked color="secondary" />
    <Checkbox disabled defaultChecked color="primary" />
    <Checkbox disabled defaultChecked color="secondary" />
  </Space>
);
