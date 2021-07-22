/**
 * title: 加载状态
 * desc: 若选择器数据是异步获取的，可以通过 loading 属性显示加载提示。
 */
import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2,
  loading: true
};

export default () => <Picker {...props} />;
