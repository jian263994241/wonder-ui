import { PickerView, PickerObjectColumn } from '@wonder-ui/core';

const columns: PickerObjectColumn[] = [
  // 第一列
  {
    values: ['周一', '周二', '周三', '周四', '周五'],
    defaultIndex: 2
  },
  // 第二列
  {
    values: ['上午', '下午', '晚上'],
    defaultIndex: 1
  }
];

export default () => (
  <PickerView
    columns={columns}
    onChange={(values) => {
      console.log(values);
    }}
  />
);
