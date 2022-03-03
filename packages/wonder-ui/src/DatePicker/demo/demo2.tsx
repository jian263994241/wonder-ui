import * as React from 'react';
import {
  Button,
  DatePicker,
  List,
  ListHeader,
  ListItem
} from '@wonder-ui/core';
import dayjs from 'dayjs';
import Form, { Field } from 'rc-field-form';

export default () => {
  return (
    <Form
      onFinish={(values) => {
        console.log('Finish:', values);
      }}
    >
      <List style={{ marginBottom: 20 }}>
        <ListHeader>表单</ListHeader>
        <Field name="date" trigger="onConfirm" initialValue={new Date()}>
          <DatePicker
            precision="day"
            title="选择年月日"
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2025, 10, 1)}
          >
            {({ selected, show }) => {
              return (
                <ListItem
                  button
                  arrow="horizontal"
                  onClick={show}
                  extra={
                    selected ? dayjs(selected).format('YYYY/MM/DD') : '请选择'
                  }
                >
                  日期
                </ListItem>
              );
            }}
          </DatePicker>
        </Field>
      </List>

      <Button type="submit" variant="contained" fullWidth>
        提交
      </Button>
    </Form>
  );
};
