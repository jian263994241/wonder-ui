import {
  Button,
  Picker,
  PickerProps,
  Page,
  List,
  ListInputItem,
  ListHeader,
  WhiteSpace
} from '@wonder-ui/core';
import Form, { Field } from 'rc-field-form';

const props: PickerProps = {
  columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => {
  return (
    <Page>
      <Form
        onFinish={(values) => {
          console.log('Finish:', values);
        }}
      >
        <List>
          <ListHeader>表单</ListHeader>

          <Field name="city" trigger="onConfirm" initialValue="金华">
            <Picker
              {...props}
              onRenderInput={({ value, setVisibleUnControlled }) => {
                return (
                  <ListInputItem
                    button
                    label="城市"
                    readOnly
                    placeholder="选择城市"
                    value={value}
                    onClick={() => {
                      setVisibleUnControlled(true);
                    }}
                  />
                );
              }}
            />
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
