import {
  Button,
  Checkbox,
  CheckboxGroup,
  Space,
  Form,
  FormItem,
  ListHeader,
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
      layout="vertical"
      onFinish={onFinish}
      footer={
        <Button fullWidth variant="contained" size="large" type="submit">
          提交
        </Button>
      }
    >
      {dialog.rendered}
      <ListHeader>基础用法</ListHeader>
      <FormItem label="选项组" name="options" initialValue={['apple']}>
        <CheckboxGroup>
          <Space direction="vertical">
            <Checkbox value="apple">苹果</Checkbox>
            <Checkbox value="orange">橘子</Checkbox>
            <Checkbox value="banana">香蕉</Checkbox>
          </Space>
        </CheckboxGroup>
      </FormItem>

      <FormItem label="禁用选项组" name="options2" initialValue={['apple']}>
        <CheckboxGroup disabled>
          <Space direction="vertical">
            <Checkbox value="apple">苹果</Checkbox>
            <Checkbox value="orange">橘子</Checkbox>
            <Checkbox value="banana">香蕉</Checkbox>
          </Space>
        </CheckboxGroup>
      </FormItem>
    </Form>
  );
};
