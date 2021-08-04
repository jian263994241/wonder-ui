import { DatePicker, withDialog } from '@wonder-ui/core';
import dayjs from 'dayjs';

export default withDialog(({ dialog }) => {
  return (
    <DatePicker
      onConfirm={(value) => {
        const dateString = dayjs(value).format('YYYY/MM/DD,HH:mm');
        dialog.toast(dateString);
      }}
    />
  );
});
