/**
 * title: 基本的开关
 * desc:
 *
 */
import { Space, Toggle, Container } from '@wonder-ui/core';

export default function Example() {
  return (
    <Container>
      <Space direction="vertical">
        <Space>
          <Toggle defaultChecked />
          <Toggle defaultChecked color="secondary" />
          <Toggle defaultChecked color="danger" />
          <Toggle defaultChecked color="warning" />
          <Toggle defaultChecked color="info" />
        </Space>

        <Space>
          <Toggle disabled defaultChecked />
          <Toggle disabled defaultChecked color="secondary" />
          <Toggle disabled defaultChecked color="danger" />
          <Toggle disabled defaultChecked color="warning" />
          <Toggle disabled defaultChecked color="info" />
        </Space>
      </Space>
    </Container>
  );
}
