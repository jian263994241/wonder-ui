import { Noticebar } from '@wonder-ui/core';
import { Bell } from '@wonder-ui/icons';

export default () => (
  <Noticebar
    icon={<Bell />}
    text="请在23小时56分钟内完成支付，超时订单将被取消"
  />
);
