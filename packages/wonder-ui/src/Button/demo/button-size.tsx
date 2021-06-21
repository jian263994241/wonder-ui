/**
 * title: 按钮尺寸
 * desc: 按钮尺寸分下面几种类型 `small` | `medium` | `large`, 默认是 `medium`
 */
import { Button, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Space verticalAlign="start">
      <Button variant="contained" size="large">
        Large button
      </Button>
      <Button variant="contained" size="medium">
        Medium button
      </Button>
      <Button variant="contained" size="small">
        Small button
      </Button>
    </Space>
    <Space verticalAlign="start">
      <Button variant="contained" shape="round" size="large">
        Large button
      </Button>

      <Button variant="contained" shape="round" size="medium">
        Medium button
      </Button>

      <Button variant="contained" shape="round" size="small">
        Small button
      </Button>
    </Space>
  </Space>
);
