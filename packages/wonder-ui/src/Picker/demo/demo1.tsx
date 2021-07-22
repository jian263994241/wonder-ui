/**
 * title: 基本使用
 * desc: 单列选择时，可以通过 `defaultIndex` 属性设置初始选中项的索引
 */
import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => <Picker {...props} />;
