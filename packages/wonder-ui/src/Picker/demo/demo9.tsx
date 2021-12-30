import {
  Button,
  Picker,
  Page,
  List,
  ListItem,
  ListInputItem,
  ListHeader,
  WhiteSpace,
  message
} from '@wonder-ui/core';
import Form, { Field } from 'rc-field-form';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

const columns = {
  values: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => {
  return (
    <Page>
      <Form
        onFinish={(values) => {
          console.log('Finish:', values);
          message.toast(JSON.stringify(values));
        }}
      >
        <List>
          <ListHeader>表单</ListHeader>

          <Field name="city" trigger="onConfirm" initialValue={['金华']}>
            <Picker
              columns={columns}
              onRenderChildren={({ options, onClick }) => {
                return (
                  <ListItem
                    button
                    arrow="horizontal"
                    onClick={onClick}
                    extra={options[0] ? options[0] : '选择城市'}
                  >
                    城市
                  </ListItem>
                );
              }}
            />
          </Field>

          <Field
            name="city2"
            trigger="onConfirm"
            getValueFromEvent={(values) => {
              return values.map((option: any) => option.code);
            }}
          >
            <Picker columns={pca} textKey="name">
              <ListInputItem
                button
                label="城市2"
                readOnly
                placeholder="选择城市"
              />
            </Picker>
          </Field>
        </List>
        <WhiteSpace />
        <Button type="submit" variant="contained" fullWidth>
          提交
        </Button>
      </Form>
    </Page>
  );
};
