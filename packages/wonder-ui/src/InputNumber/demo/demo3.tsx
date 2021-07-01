/**
 * title: 高精度小数
 * desc: 通过 `stringMode` 开启高精度小数支持，`onChange` 事件将返回 string 类型。对于旧版浏览器，你需要 BigInt polyfill。
 */
import { InputNumber, Space } from '@wonder-ui/core';

function onChange(value: string) {
  console.log('changed', value);
}

export default () => (
  <Space>
    <InputNumber
      defaultValue="1"
      min="0"
      max="10"
      step="0.00000000000001"
      onChange={onChange}
      stringMode
    />
  </Space>
);
