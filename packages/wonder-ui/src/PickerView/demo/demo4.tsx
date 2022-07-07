import { PickerView } from '@wonder-ui/core';

const columns = [
  { label: '杭州', disabled: true },
  { label: '宁波' },
  { label: '温州' }
];

export default () => (
  <PickerView
    columns={columns}
    onChange={(values) => {
      console.log(values);
    }}
  />
);
