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
      <Steps current={state}>
        <Step title="标题1" description="描述" />
        <Step title="标题2" description="描述" />
        <Step title="标题3" description="描述" />
      </Steps>

      <Space horizontalAlign="center">
        <Button onClick={() => next()}>下一步</Button>
      </Space>
    </Space>
  );
};
