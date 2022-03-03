import { DatePickerView } from '@wonder-ui/core';

const now = new Date();

export default () => {
  return (
    <DatePickerView
      precision="day"
      defaultValue={now}
      onRenderLabel={(type, data) => {
        switch (type) {
          case 'year':
            return data + '年';
          case 'month':
            return data + '月';
          case 'day':
            return data + '日';
          case 'hour':
            return data + '时';
          case 'minute':
            return data + '分';
          case 'second':
            return data + '秒';
          default:
            return data;
        }
      }}
      onChange={(date) => {
        console.log(date);
      }}
    />
  );
};
