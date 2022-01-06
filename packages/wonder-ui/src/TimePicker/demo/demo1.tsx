import { TimePicker, TimePickerProps, message } from '@wonder-ui/core';
import dayjs from 'dayjs';

const formatter: TimePickerProps['formatter'] = (type, value) => {
  return type === 'hour' ? `${value}时` : `${value}分`;
};

export default () => (
  <TimePicker
    visible
    title="选择时间"
    formatter={formatter}
    currentTime={dayjs().format('HH:mm')}
    // onChange={(value) => dialog.toast(value)}
    onConfirm={(value) => message.toast(value)}
  />
);
