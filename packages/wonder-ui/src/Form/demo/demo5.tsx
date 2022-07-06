import { Button, Form, FormItem, ListHeader, Input } from '@wonder-ui/core';

export default () => {
  const onFinish = (values: any) => {
    console.log(values);
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
      <ListHeader>表单校验</ListHeader>
      <FormItem
        name="email"
        label="邮箱"
        help="表单校验"
        rules={[
          { required: true },
          { type: 'string', min: 6 },
          { type: 'email', warningOnly: true }
        ]}
      >
        <Input placeholder="请输入" />
      </FormItem>
    </Form>
  );
};
