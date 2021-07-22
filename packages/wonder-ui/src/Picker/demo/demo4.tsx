/**
 * title: 禁用选项
 * desc: 选项可以为对象结构，通过设置 `disabled` 来禁用该选项。
 */
import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: [
    { text: '杭州', disabled: true },
    { text: '宁波' },
    { text: '温州' }
  ],
  defaultIndex: 2
};

export default () => <Picker {...props} />;
