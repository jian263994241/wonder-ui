import { Space, CheckableGroup, Radio } from '@wonder-ui/core';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
];

export default () => (
  <Space itemWrap={false}>
    <CheckableGroup
      exclusive
      options={options}
      defaultValue={['Apple']}
      onRenderItem={({ emitOnChange, checked, data }) => (
        <Radio
          checked={checked}
          disabled={data.disabled}
          onClick={emitOnChange}
          readOnly
        >
          {data.label}
        </Radio>
      )}
    />
  </Space>
);
