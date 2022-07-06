import { Form, FormItem, ListHeader, Input } from '@wonder-ui/core';

export default () => {
  return (
    <div>
      <Form requiredMarkType="asterisk">
        <ListHeader>星号</ListHeader>
        <FormItem name="name" label="姓名" rules={[{ required: true }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>
        <FormItem name="address" label="地址" help="详情地址">
          <Input placeholder="请输入地址" />
        </FormItem>
      </Form>
      <Form requiredMarkType="text-required">
        <ListHeader>文字-必填</ListHeader>
        <FormItem name="name" label="姓名" rules={[{ required: true }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>
        <FormItem name="address" label="地址" help="详情地址">
          <Input placeholder="请输入地址" />
        </FormItem>
      </Form>
      <Form requiredMarkType="text-optional">
        <ListHeader>文字-选填</ListHeader>
        <FormItem name="name" label="姓名" rules={[{ required: true }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>
        <FormItem name="address" label="地址" help="详情地址">
          <Input placeholder="请输入地址" />
        </FormItem>
      </Form>
    </div>
  );
};
