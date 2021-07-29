/**
 * title: 选择年月日
 * desc: 通过 type 属性来定义需要选择的时间类型，type 为 date 表示选择年月日。通过 minDate 和 maxDate 属性可以确定可选的时间范围。
 */
import { DatePicker, withDialog } from '@wonder-ui/core';
import dayjs from 'dayjs';

export default withDialog(({ dialog }) => {
  return (
    <DatePicker
      type="date"
      title="选择年月日"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      currentDate={new Date()}
      onConfirm={(value) => {
        const dateString = dayjs(value).format('YYYY/MM/DD');
        dialog.toast(dateString);
      }}
    />
  );
});
