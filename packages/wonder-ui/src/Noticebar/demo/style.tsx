import { Noticebar, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Noticebar text="请在23小时56分钟内完成支付，超时订单将被取消" />

    <Noticebar
      type="info"
      text="请在23小时56分钟内完成支付，超时订单将被取消"
    />

    <Noticebar
      style={{
        color: 'red',
        background: 'pink'
      }}
      text="请在23小时56分钟内完成支付，超时订单将被取消"
    />
  </Space>
);
