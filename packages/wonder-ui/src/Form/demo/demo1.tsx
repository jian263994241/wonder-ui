import {
  Button,
  Form,
  FormItem,
  ListHeader,
  Input,
  Stepper,
  Toggle,
  useDialog
} from '@wonder-ui/core';

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
      onFinish={onFinish}
      footer={
        <Button fullWidth variant="contained" size="large" type="submit">
          提交
        </Button>
      }
    >
      {dialog.rendered}
      <ListHeader>水平布局表单</ListHeader>
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
        name="amount"
        label="数量"
        childAlign="right"
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
      <FormItem name="delivery" label="送货上门" childAlign="right">
        <Toggle />
      </FormItem>
    </Form>
  );
};
