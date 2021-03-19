/**
 * title: 自定义值
 * desc:
 *
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Space, Switch } from '@wonder-ui/core';
import { withProps } from '@wonder-ui/utils';

type Value = '0' | '1';

const Switch01 = withProps(
  Switch,
  (props: { checked: Value; onChange: (value: Value) => void }) => {
    return {
      checked: props.checked === '1',
      onChange: (checked: boolean) => {
        if (props.onChange) {
          props.onChange(checked ? '1' : '0');
        }
      }
    };
  }
);

export default function Example() {
  const [value, setValue] = React.useState<Value>('0');

  return (
    <Space>
      <div>Value: {value}</div>
      <Switch01 checked={value} onChange={(value) => setValue(value)} />
    </Space>
  );
}
