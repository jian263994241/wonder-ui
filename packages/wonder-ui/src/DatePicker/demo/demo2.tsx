import { DatePicker, useSnackbar } from '@wonder-ui/core';
import dayjs from 'dayjs';

export default () => {
  const toast = useSnackbar();
  return (
    <DatePicker
      disableDrawer
      type="date"
      title="选择年月日"
      minDate={new Date(2020, 0, 1)}
      maxDate={new Date(2025, 10, 1)}
      currentDate={new Date()}
      onConfirm={(value) => {
        const dateString = dayjs(value).format('YYYY/MM/DD');
        toast(dateString);
      }}
    />
  );
};
