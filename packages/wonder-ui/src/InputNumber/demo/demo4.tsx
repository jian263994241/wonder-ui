/**
 * title: 键盘行为
 * desc: 使用 `keyboard` 属性可以控制键盘行为。
 */
import * as React from 'react';
import { Checkbox, InputNumber, Space } from '@wonder-ui/core';

export default () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />

      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};
