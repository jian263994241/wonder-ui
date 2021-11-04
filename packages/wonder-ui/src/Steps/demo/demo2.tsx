import * as React from 'react';
import { Button, Steps, Step, Space } from '@wonder-ui/core';

export default () => {
  const [state, setState] = React.useState(0);

  const next = () => {
    setState((prev) => {
      return ++prev % 3;
    });
  };

  return (
    <Space direction="vertical">
      <Steps current={state} direction="vertical">
        <Step title="填写机构信息" />
        <Step title="签约机构" />
        <Step title="关联服务区" />
      </Steps>

      <Space horizontalAlign="center">
        <Button onClick={() => next()}>下一步</Button>
      </Space>
    </Space>
  );
};
