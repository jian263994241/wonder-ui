/**
 * title: 按钮尺寸
 * desc: 按钮尺寸分下面几种类型 `small` | `medium` | `large`, 默认是 `medium`
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';
import { House } from '@wonder-ui/icons';

export default function Example() {
  return (
    <Space direction="vertical" align="start">
      <Space>
        <Button size="large">Large button</Button>
        <Button shape="round" size="large">
          Large button
        </Button>
        <Button shape="circle" size="large">
          <House />
        </Button>
      </Space>
      <Space>
        <Button size="small">Small button</Button>
        <Button shape="round" size="small">
          Small button
        </Button>
        <Button shape="circle" size="small">
          <House />
        </Button>
      </Space>
    </Space>
  );
}
