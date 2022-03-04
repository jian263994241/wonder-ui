import { Button, Cascader, List, ListItem, ListHeader } from '@wonder-ui/core';
import { getPCA } from 'lcn';
import Form, { Field } from 'rc-field-form';

const pca = getPCA({ inland: true });

export default () => (
  <Form
    onFinish={(values) => {
      console.log(values);
    }}
  >
    <List>
      <ListHeader>基础用法</ListHeader>
      <Field
        name={'address'}
        initialValue={['110000', '110100', '110116']}
        trigger="onConfirm"
      >
        <Cascader
          title="请选择所在地区"
          options={pca}
          fieldNames={{ label: 'name', value: 'code' }}
        >
          {({ selected, show }) => (
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
              地区
            </ListItem>
          )}
        </Cascader>
      </Field>
    </List>

    <div style={{ padding: 16 }}>
      <Button variant="contained" type="submit" fullWidth>
        提交
      </Button>
    </div>
  </Form>
);
