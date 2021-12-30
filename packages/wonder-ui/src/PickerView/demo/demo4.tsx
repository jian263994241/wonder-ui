import { PickerView } from '@wonder-ui/core';

const columns = [
  { text: '杭州', disabled: true },
  { text: '宁波' },
  { text: '温州' }
];

export default () => (
  <PickerView
    columns={columns}
    onChange={(values) => {
      console.log(values);
    }}
  />
);
