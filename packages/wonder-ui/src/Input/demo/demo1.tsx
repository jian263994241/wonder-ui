/**
 * title: 基本使用
 * desc: 基本使用
 */
import { Input, Space } from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <Space direction="vertical">
      <Input
        placeholder="Basic"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Input placeholder="Basic (borderless)" borderless />

      <Input readOnly placeholder="Basic readOnly" />

      <Input readOnly borderless placeholder="Basic readOnly (borderless)" />

      <Input disabled placeholder="Basic disabled" />

      <Input disabled borderless placeholder="Basic disabled" />
    </Space>
  );
};
