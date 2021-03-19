/**
 * title: 基本的开关
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, Space, Switch } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Switch />
      <Switch defaultChecked />
      <Switch defaultChecked color="secondary" />
      <Switch defaultChecked disabled />
      <Switch defaultChecked disabled color="secondary" />
      <Switch disabled />
    </Space>
  );
}
