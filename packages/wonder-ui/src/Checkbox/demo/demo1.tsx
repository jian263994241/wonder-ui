/**
 * title: 基本的选择框
 * desc:
 *
 */
import { Checkbox, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical" gap={[5, 20]}>
    <Space>
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
      <Checkbox disabled defaultChecked color="primary" />
      <Checkbox disabled defaultChecked color="secondary" />
    </Space>
    <Space direction="vertical">
      <Checkbox defaultChecked color="primary">
        checkbox 1
      </Checkbox>
      <Checkbox defaultChecked color="primary">
        checkbox 2
      </Checkbox>
    </Space>
  </Space>
);
