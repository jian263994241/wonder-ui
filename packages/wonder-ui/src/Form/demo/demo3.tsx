import {
  Form,
  FormItem,
  ListHeader,
  Input,
  WhiteSpace,
  styled
} from '@wonder-ui/core';

const Link = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer'
}));

export default function () {
  return (
    <>
      <Form layout="horizontal" mode="card">
        <ListHeader>卡片模式及分组</ListHeader>
        <FormItem label="手机号">
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem label="短信验证码">
          <Input placeholder="请输入" />
        </FormItem>

        <WhiteSpace />

        <FormItem label="姓名">
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem label="邮箱地址">
          <Input placeholder="请输入" />
        </FormItem>
        <FormItem label="所在城市">
          <Input placeholder="请输入" />
        </FormItem>
      </Form>
      <Form layout="horizontal" mode="card">
        <ListHeader>带辅助操作</ListHeader>
        <FormItem label="短信验证码" extra={<Link>发送验证码</Link>}>
          <Input placeholder="请输入" />
        </FormItem>
      </Form>
    </>
  );
}
