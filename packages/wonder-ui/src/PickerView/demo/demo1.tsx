import { PickerView } from '@wonder-ui/core';

const columns = ['杭州', '宁波', '温州', '绍兴', '湖州'];

export default () => (
  <PickerView
    columns={columns}
    onChange={(values) => {
      console.log(values);
    }}
  />
);
