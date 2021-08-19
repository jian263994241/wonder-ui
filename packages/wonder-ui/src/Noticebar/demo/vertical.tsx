import { Noticebar, Swipe, SwipeItem } from '@wonder-ui/core';
import { Bell } from '@wonder-ui/icons';

export default () => (
  <Noticebar icon={<Bell />} scrollable={false}>
    <Swipe vertical autoplay showIndicators={false}>
      <SwipeItem>请在23小时56分钟内完成支付 1</SwipeItem>
      <SwipeItem>请在23小时56分钟内完成支付 2</SwipeItem>
    </Swipe>
  </Noticebar>
);
