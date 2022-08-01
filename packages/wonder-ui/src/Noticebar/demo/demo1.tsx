import { Button, ContentBlock, Noticebar, Space } from '@wonder-ui/core';
import { Bell } from '@wonder-ui/icons';

export default () => (
  <div
    style={
      {
        '--wui-content-block-padding-horizontal': '0px',
        '--wui-content-block-padding-vertical': '0px',
        '--wui-content-block-content-bg-color': 'transparent'
      } as any
    }
  >
    <ContentBlock title="基本使用">
      <Space direction="vertical">
        <Noticebar text="通知文字" />
        <Noticebar text="通知文字" type="info" />
        <Noticebar text="通知文字" type="error" />
      </Space>
    </ContentBlock>

    <ContentBlock title="超出长度的文字">
      <Space direction="vertical">
        <Noticebar text="超出长度的消息文字, 会滚动显示, 超出长度的消息文字, 会滚动显示, " />
        <Noticebar
          wrap
          text="超出长度的消息文字, 换行显示, 超出长度的消息文字, 换行显示, "
        />
      </Space>
    </ContentBlock>

    <ContentBlock title="可关闭">
      <Noticebar text="可关闭的通知文字" closeable />
    </ContentBlock>

    <ContentBlock title="自定义">
      <Noticebar
        icon={<Bell />}
        text="请在23小时56分钟内完成支付，超时订单将被取消"
        extra={
          <div>
            <Button>详细情况</Button>
            <Button edge="end">关闭</Button>
          </div>
        }
      />
    </ContentBlock>
  </div>
);
