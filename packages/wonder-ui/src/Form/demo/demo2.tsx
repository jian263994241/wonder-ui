import {
  Button,
  DatePicker,
  PickerAction,
  Form,
  FormItem,
  ListHeader,
  Input,
  Stepper,
  Toggle,
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
      layout="vertical"
      onFinish={onFinish}
      footer={
        <Button fullWidth variant="contained" size="large" type="submit">
          提交
        </Button>
      }
    >
      {dialog.rendered}
      <ListHeader>竖直布局表单</ListHeader>
      <FormItem
        name="name"
        label="姓名"
        rules={[
          {
            required: true,
            message: '姓名不能为空'
          }
        ]}
      >
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem name="address" label="地址" help="详细地址">
        <Input
          multiline
          showCount
          minRows={2}
          maxLength={100}
          placeholder="请输入地址"
        />
      </FormItem>
      <FormItem
        name="birthday"
        label="生日"
        trigger="onConfirm"
        arrow="horizontal"
        onClick={(e, childRef: React.RefObject<PickerAction>) => {
          childRef.current?.show();
        }}
      >
        <DatePicker title="您的生日?">
          {({ selected }) => {
            return selected ? (
              dayjs(selected).format('YYYY/MM/DD')
            ) : (
              <Typography color="secondary">请选择日期</Typography>
            );
          }}
        </DatePicker>
      </FormItem>
      <FormItem
        name="amount"
        label="数量"
        initialValue={1}
        rules={[
          {
            max: 5,
            min: 1,
            type: 'number'
          }
        ]}
      >
        <Stepper />
      </FormItem>
      <FormItem
        name="delivery"
        label="送货上门"
        childAlign="right"
        layout="horizontal"
      >
        <Toggle />
      </FormItem>

      <FormItem name="disabledField" label="禁用" disabled>
        <Input placeholder="禁止输入" />
      </FormItem>
    </Form>
  );
};
