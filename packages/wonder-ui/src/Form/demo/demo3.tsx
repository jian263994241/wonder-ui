import {
  Form,
  FormItem,
  ListHeader,
  Input,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';

export default function () {
  return (
    <>
      <Form layout="horizontal" card>
        <ListHeader>卡片模式及分组</ListHeader>
        <div>
          <FormItem label="手机号">
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem label="短信验证码">
            <Input placeholder="请输入" />
          </FormItem>
        </div>

        <WhiteSpace />
        <div>
          <FormItem label="姓名">
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem label="邮箱地址">
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem label="所在城市">
            <Input placeholder="请输入" />
          </FormItem>
        </div>

        <ListHeader>带辅助操作</ListHeader>

        <div>
          <FormItem
            label="短信验证码"
            extra={
              <Typography color="primary" component="a">
                发送验证码
              </Typography>
            }
          >
            <Input placeholder="请输入" />
          </FormItem>
        </div>
      </Form>
    </>
  );
}
