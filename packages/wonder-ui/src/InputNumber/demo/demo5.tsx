/**
 * title: 超出边界
 * desc: 当通过受控将 `value` 超出边界时，提供警告样式。
 */
import * as React from 'react';
import { Button, InputNumber, Space } from '@wonder-ui/core';

export default () => {
  const [value, setValue] = React.useState<string | number>('99');
  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};
