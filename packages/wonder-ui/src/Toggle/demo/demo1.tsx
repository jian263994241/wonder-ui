/**
 * title: 基本的开关
 * desc:
 *
 */
/** @jsx jsx */
import { jsx, Space, Toggle, WhiteSpace } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Space wrap>
        <Toggle defaultChecked />
        <Toggle defaultChecked color="secondary" />
        <Toggle defaultChecked color="danger" />
        <Toggle defaultChecked color="warning" />
        <Toggle defaultChecked color="info" />
      </Space>
      <WhiteSpace />
      <Space wrap>
        <Toggle disabled defaultChecked />
        <Toggle disabled defaultChecked color="secondary" />
        <Toggle disabled defaultChecked color="danger" />
        <Toggle disabled defaultChecked color="warning" />
        <Toggle disabled defaultChecked color="info" />
      </Space>
    </div>
  );
}
