/**
 * title: 尺寸
 * desc: 使用 size 属性 定义小一号开关
 *
 */
import { Container, Space, Toggle } from '@wonder-ui/core';

export default () => (
  <Container>
    <Space>
      <Toggle />
      <Toggle size="small" />
    </Space>
  </Container>
);
