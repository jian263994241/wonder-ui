import { DatePickerView } from '@wonder-ui/core';

const now = new Date();

export default () => {
  return (
    <DatePickerView
      precision="second"
      onChange={(date) => {
        console.log(date);
      }}
    />
  );
};
