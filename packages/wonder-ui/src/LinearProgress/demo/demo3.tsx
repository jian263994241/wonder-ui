/**
 * title: 线性进度条标签
 * desc:
 */
import { LinearProgress, Space } from '@wonder-ui/core';
import * as React from 'react';

const intervalDelay = 100;
const intervalIncrement = 0.01;

export default () => {
  const [percentComplete, setPercentComplete] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setPercentComplete((intervalIncrement + percentComplete) % 1);
    }, intervalDelay);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <Space direction="vertical">
      <LinearProgress
        animated
        variant="determinate"
        value={percentComplete * 100}
        color="primary"
      >
        {Math.round(percentComplete * 100)}%
      </LinearProgress>
    </Space>
  );
};
