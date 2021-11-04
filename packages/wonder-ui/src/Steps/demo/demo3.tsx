import { Steps, Step, Space } from '@wonder-ui/core';

export default () => (
  <Space direction="vertical">
    <Steps current={2}>
      <Step title="第一步" />
      <Step title="第二步" />
      <Step title="第三步" status="error" />
    </Steps>

    <Steps direction="vertical" current={3}>
      <Step title="填写机构信息" description="完成时间：2020-12-01 12:30" />
      <Step title="签约机构" description="完成时间：2020-12-01 12:30" />
      <Step title="关联服务区" description="完成时间：2020-12-01 12:30" />
      <Step title="审批失败" status="error" />
    </Steps>
  </Space>
);
