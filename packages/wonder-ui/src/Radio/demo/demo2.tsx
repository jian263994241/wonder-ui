import {
  Button,
  Radio,
  RadioGroup,
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
      <FormItem label="选项组" name="options" initialValue={'orange'}>
        <RadioGroup>
          <Space direction="vertical">
            <Radio value="apple">苹果</Radio>
            <Radio value="orange">橘子</Radio>
            <Radio value="banana">香蕉</Radio>
          </Space>
        </RadioGroup>
      </FormItem>

      <FormItem label="禁用选项组" name="options2" initialValue={'orange'}>
        <RadioGroup disabled>
          <Space direction="vertical">
            <Radio value="apple">苹果</Radio>
            <Radio value="orange">橘子</Radio>
            <Radio value="banana">香蕉</Radio>
          </Space>
        </RadioGroup>
      </FormItem>
    </Form>
  );
};
