import { Space, CheckableGroup, Checkbox } from '@wonder-ui/core';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
];

export default () => (
  <Space itemWrap={false}>
    <CheckableGroup
      options={options}
      defaultValue={['Apple']}
      onRenderItem={({ emitOnChange, checked, data }) => (
        <Checkbox
          checked={checked}
          disabled={data.disabled}
          onClick={emitOnChange}
        >
          {data.label}
        </Checkbox>
      )}
    />
  </Space>
);
