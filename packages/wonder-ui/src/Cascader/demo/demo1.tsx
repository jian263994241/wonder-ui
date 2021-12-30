/**
 * title: 基本使用
 * desc:
 */
import {
  Button,
  Cascader,
  List,
  ListItem,
  ListInputItem,
  ListHeader,
  Typography
} from '@wonder-ui/core';
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
        getValueFromEvent={(options) => {
          console.log(options);
          return options.map((item: any) => item.code);
        }}
      >
        <Cascader
          keepMounted
          title="请选择所在地区"
          options={pca}
          textKey="name"
          valueKey="code"
        >
          <ListInputItem
            divider
            button
            readOnly
            label="地区1"
            placeholder="请选择地区"
          />
        </Cascader>
      </Field>

      <Field
        name={'address2'}
        getValueFromEvent={(options) => {
          console.log(options);
          return options.map((item: any) => item.code);
        }}
      >
        <Cascader
          keepMounted
          title="请选择所在地区"
          options={pca}
          textKey="name"
          valueKey="code"
          onRenderChildren={({ onClick, displayText }) => {
            return (
              <ListItem
                button
                extra={
                  <Typography style={{ maxWidth: 220 }}>
                    {displayText || '请选择地区'}
                  </Typography>
                }
                onClick={onClick}
                arrow="horizontal"
              >
                地区2
              </ListItem>
            );
          }}
        />
      </Field>
    </List>

    <div style={{ padding: 16 }}>
      <Button variant="contained" type="submit" fullWidth>
        提交
      </Button>
    </div>
  </Form>
);
