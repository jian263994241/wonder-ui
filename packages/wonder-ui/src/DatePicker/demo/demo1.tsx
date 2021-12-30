import { DatePicker, useSnackbar } from '@wonder-ui/core';
import dayjs from 'dayjs';

export default () => {
  const toast = useSnackbar();
  return (
    <DatePicker
      visible
      onConfirm={(value) => {
        const dateString = dayjs(value).format('YYYY/MM/DD,HH:mm');
        toast(dateString);
      }}
    />
  );
};
