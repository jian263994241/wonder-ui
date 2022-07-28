import * as React from 'react';
import {
  Button,
  DatePicker,
  PickerAction,
  Form,
  FormItem,
  ListHeader,
  Typography,
  useDialog
} from '@wonder-ui/core';
import dayjs from 'dayjs';

Date.prototype.toISOString = function () {
  return dayjs(this).format('YYYY-MM-DDTHH:mm:ss');
};

export default () => {
  const dialog = useDialog();
  const onFinish = (values: any) => {
    dialog.show({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
      buttons: [
        {
          text: '关闭',
          primary: true,
          onClick: () => {
            dialog.hide();
          }
        }
      ]
    });
  };
  return (
    <Form
      footer={
        <Button type="submit" variant="contained" fullWidth>
          提交
        </Button>
      }
      onFinish={onFinish}
    >
      {dialog.rendered}
      <ListHeader>表单</ListHeader>
      <FormItem
        label="日期"
        name="date"
        trigger="onConfirm"
        arrow="horizontal"
        childAlign="right"
        rules={[
          {
            required: true,
            message: '请选择日期'
          }
        ]}
        onClick={(e, childRef: React.RefObject<PickerAction>) => {
          childRef.current!.show();
        }}
      >
        <DatePicker
          precision="second"
          title="选择年月日"
          minDate={new Date(2020, 0, 1)}
          maxDate={new Date(2025, 10, 1)}
        >
          {({ selected }) => {
            return selected ? (
              <Typography>{dayjs(selected).format('YYYY/MM/DD')}</Typography>
            ) : (
              <Typography color="secondary">请选择</Typography>
            );
          }}
        </DatePicker>
      </FormItem>
    </Form>
  );
};
