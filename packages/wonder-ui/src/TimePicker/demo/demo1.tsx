/**
 * title: 选择时间
 * desc:
 */
import { TimePicker, TimePickerProps, withDialog } from '@wonder-ui/core';
import dayjs from 'dayjs';

const formatter: TimePickerProps['formatter'] = (type, value) => {
  return type === 'hour' ? `${value}时` : `${value}分`;
};

export default withDialog(({ dialog }) => (
  <TimePicker
    formatter={formatter}
    currentTime={dayjs().format('HH:mm')}
    // onChange={(value) => dialog.toast(value)}
    onConfirm={(value) => dialog.toast(value)}
  />
));
