/**
 * title: 多选按钮
 * desc: 改变`checked`prop设定激活状态
 */

import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false }
];

export default () => (
  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
    <CheckableGroup
      options={options}
      defaultValue={['Apple']}
      renderItem={({ emitOnChange, checked, data, key }) => (
        <Button
          key={key}
          variant={checked ? 'contained' : 'outlined'}
          onClick={emitOnChange}
          disabled={data.disabled}
        >
          {data.label}
        </Button>
      )}
    />
  </ButtonGroup>
);
