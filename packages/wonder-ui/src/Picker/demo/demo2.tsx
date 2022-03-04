import { Button, Picker, List, ListItem, ListHeader } from '@wonder-ui/core';
import Form, { Field } from 'rc-field-form';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('Finish:', values);
      }}
    >
      <List>
        <ListHeader>表单</ListHeader>

        <Field
          name="city"
          trigger="onConfirm"
          initialValue={['310000', '310100', '310105']}
        >
          <Picker columns={pca} fieldNames={{ label: 'name', value: 'code' }}>
            {({ selected, show }) => {
              return (
                <ListItem
                  button
                  arrow="horizontal"
                  onClick={show}
                  extra={
                    selected
                      ? selected.map((item: any) => item.name).join(',')
                      : '请选择'
                  }
                >
                  城市
                </ListItem>
              );
            }}
          </Picker>
        </Field>
      </List>
      <div style={{ padding: 16 }}>
        <Button type="submit" variant="contained" fullWidth>
          提交
        </Button>
      </div>
    </Form>
  );
};
