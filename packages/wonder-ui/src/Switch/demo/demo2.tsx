/**
 * title: 尺寸
 * desc: 使用 size 属性 定义小一号开关
 *
 */

/** @jsx jsx */
import { jsx, Space, Switch } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Switch />
      <Switch size="small" />
    </Space>
  );
}
