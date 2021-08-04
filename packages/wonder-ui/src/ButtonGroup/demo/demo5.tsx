import { Button, ButtonGroup, CheckableGroup } from '@wonder-ui/core';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
];

export default () => (
  <ButtonGroup ButtonProps={{ variant: 'outlined' }}>
    <CheckableGroup
      exclusive //是否单选
      options={options}
      defaultValue="Apple"
      onRenderItem={({ emitOnChange, checked, data, key }) => (
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
