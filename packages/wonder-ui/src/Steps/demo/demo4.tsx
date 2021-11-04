import { Steps, Step } from '@wonder-ui/core';
import {
  CheckCircleFill,
  ClockFill,
  EmojiFrownFill,
  XCircleFill
} from '@wonder-ui/icons';

export default () => (
  <Steps direction="vertical" current={3}>
    <Step
      title="填写机构信息"
      description="完成时间：2020-12-01 12:30"
      icon={<CheckCircleFill />}
    />
    <Step
      title="签约机构"
      description="完成时间：2020-12-01 12:30"
      icon={<CheckCircleFill />}
    />
    <Step
      title="关联服务区"
      description="完成时间：2020-12-01 12:30"
      icon={<ClockFill />}
    />
    <Step title="审批失败" status="error" icon={<EmojiFrownFill />} />
    <Step title="审批失败" status="error" icon={<XCircleFill />} />
  </Steps>
);
