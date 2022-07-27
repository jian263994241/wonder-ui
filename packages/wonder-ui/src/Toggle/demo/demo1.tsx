import {
  ContentBlock,
  Space,
  Toggle,
  List,
  ListItem,
  ListHeader,
  Form,
  FormItem
} from '@wonder-ui/core';
import { CheckCircle, CheckCircleFill } from '@wonder-ui/icons';

export default function Example() {
  return (
    <div>
      <ContentBlock title="颜色">
        <Space>
          <Toggle defaultChecked />
          <Toggle defaultChecked color="secondary" />
          <Toggle defaultChecked color="danger" />
          <Toggle defaultChecked color="warning" />
          <Toggle defaultChecked color="info" />
        </Space>
      </ContentBlock>

      <ContentBlock title="禁用">
        <Space>
          <Toggle disabled />
          <Toggle disabled defaultChecked />
        </Space>
      </ContentBlock>

      <ContentBlock title="自定义">
        <Toggle
          icon={(checked) => (checked ? <CheckCircleFill /> : <CheckCircle />)}
        />
      </ContentBlock>

      <List>
        <ListHeader>列表内使用</ListHeader>
        <ListItem extra={<Toggle />}>开关</ListItem>
      </List>

      <Form>
        <ListHeader>Form内使用</ListHeader>
        <FormItem
          label="开关"
          name="switch"
          childAlign="right"
          initialValue={true}
          valuePropName="checked"
        >
          <Toggle />
        </FormItem>
      </Form>
    </div>
  );
}
