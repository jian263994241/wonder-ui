import {
  Button,
  Picker,
  Page,
  List,
  ListInputItem,
  ListHeader,
  WhiteSpace
} from '@wonder-ui/core';
import { getPCA, CascadeData } from 'lcn';
import Form, { Field } from 'rc-field-form';

const pca = getPCA({ inland: true });

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

          <Field
            name="city"
            trigger="onConfirm"
            getValueFromEvent={(values: CascadeData[]) => {
              return values
                .map((item) => (item ? item.name : undefined))
                .filter(Boolean)
                .join('/');
              // return values.map((item) => item.code).join(',');
            }}
          >
            <Picker
              columns={pca}
              textKey="name"
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
