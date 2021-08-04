import { Checkbox, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Checkbox defaultChecked color="primary">
      Nickname is required
    </Checkbox>
    <Checkbox color="primary" disabled>
      Nickname is required
    </Checkbox>
    <Checkbox defaultChecked color="primary" disabled>
      Nickname is required
    </Checkbox>
  </Space>
);
