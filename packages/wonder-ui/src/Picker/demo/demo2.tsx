/**
 * title: 多列选择
 * desc: 属性 `columns` 可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等
 */
import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: [
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
  ]
};

export default () => <Picker {...props} />;
