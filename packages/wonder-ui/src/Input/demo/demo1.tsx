/**
 * title: 基本使用
 * desc: 基本使用
 */
import { Input, Space } from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [value, setValue] = React.useState('123123');

  return (
    <Space direction="vertical">
      <Input
        placeholder="Basic"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Input readOnly placeholder="Basic readOnly" />

      <Input readOnly disabledActiveStyle placeholder="Basic readOnly" />

      <Input disabled placeholder="Basic disabled" />
    </Space>
  );
};
