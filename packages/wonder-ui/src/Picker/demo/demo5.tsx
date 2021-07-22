/**
 * title: 动态设置选项
 * desc: 通过 actionRef 上的实例方法可以更灵活地控制选择器，比如使用 setColumnValues 方法实现多列联动。
 */
import * as React from 'react';
import { Picker, PickerProps, PickerAction } from '@wonder-ui/core';

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
};

const props: PickerProps = {
  columns: [{ values: Object.keys(cities) }, { values: cities['浙江'] }]
};

export default () => {
  const actionRef = React.useRef<PickerAction>(null);

  const onChange = (values: (keyof typeof cities)[]) => {
    actionRef.current?.setColumnValues(1, cities[values[0]]);
  };

  return <Picker actionRef={actionRef} onChange={onChange} {...props} />;
};
