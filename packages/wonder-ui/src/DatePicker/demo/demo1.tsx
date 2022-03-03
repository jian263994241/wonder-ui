import * as React from 'react';
import { Button, DatePicker, message } from '@wonder-ui/core';
import dayjs from 'dayjs';

const now = new Date();

export default () => {
  const [value, setValue] = React.useState<Date>(now);

  return (
    <DatePicker
      value={value}
      onConfirm={(value) => {
        return new Promise((resolve, reject) => {
          message.alert({
            text: '提示信息....',
            onOk: () => {
              resolve({});
              setValue(value);
            }
          });
        });
      }}
    >
      {({ selected, show }) => {
        return (
          <Button onClick={show}>
            {selected ? dayjs(selected).format('YYYY/MM/DD') : '请选择'}
          </Button>
        );
      }}
    </DatePicker>
  );
};
