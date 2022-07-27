import { Form, FormItem, ListHeader, Stepper } from '@wonder-ui/core';

export default () => (
  <Form>
    <ListHeader>基本使用</ListHeader>
    <FormItem label="默认" childAlign="right">
      <Stepper />
    </FormItem>
    <FormItem label="步长设置" childAlign="right">
      <Stepper step={3} />
    </FormItem>
    <FormItem label="限制输入范围" childAlign="right">
      <Stepper min={1} max={8} />
    </FormItem>
    <FormItem label="限制输入整数" childAlign="right">
      <Stepper step={1} min={1} />
    </FormItem>
    <FormItem label="禁用状态" childAlign="right">
      <Stepper disabled />
    </FormItem>
    <FormItem label="禁用输入框" childAlign="right">
      <Stepper disableInput />
    </FormItem>
    <FormItem label="固定小数位数" childAlign="right">
      <Stepper step={0.1} min={1} />
    </FormItem>
    <FormItem label="隐藏输入框" childAlign="right">
      <Stepper hideInput />
    </FormItem>
  </Form>
);
