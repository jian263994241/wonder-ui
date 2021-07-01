/**
 * title: 格式化展示
 * desc: 通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。
 */
import { InputNumber, Space } from '@wonder-ui/core';

function onChange(value: string) {
  console.log('changed', value);
}

export default () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      parser={(value) => value!.replace('%', '')}
      onChange={onChange}
    />
  </Space>
);
