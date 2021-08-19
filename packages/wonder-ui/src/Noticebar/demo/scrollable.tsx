import { Noticebar, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Noticebar text="请在23小时56分钟内完成支付，超时订单将被取消" />
    <Noticebar
      scrollable={false}
      text="请在23小时56分钟内完成支付，超时订单将被取消"
    />
  </Space>
);
