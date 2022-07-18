import React from 'react';
import { ContentBlock, LinearProgress, Space } from '@wonder-ui/core';
import { useInterval } from '@wonder-ui/hooks';

export default () => {
  const [count, setCount] = React.useState(0);

  useInterval(() => {
    if (count < 100) {
      setCount(count + 10);
    } else {
      setCount(0);
    }
  }, 800);

  return (
    <div>
      <ContentBlock title="颜色">
        <Space direction="vertical">
          <LinearProgress color="primary" value={60} />
          <LinearProgress color="secondary" value={60} />
          <LinearProgress color="success" value={60} />
          <LinearProgress color="error" value={60} />
          <LinearProgress color="warning" value={60} />
          <LinearProgress color="light" value={60} />
          <LinearProgress color="dark" value={60} />
        </Space>
      </ContentBlock>

      <ContentBlock title="不确定的进度">
        <LinearProgress variant="indeterminate" color="primary" />
      </ContentBlock>

      <ContentBlock title="进度">
        <Space direction="vertical">
          <LinearProgress variant="determinate" value={20} />
          <LinearProgress variant="determinate" value={60} />

          <LinearProgress animated variant="determinate" value={count}>
            {count}%
          </LinearProgress>
        </Space>
      </ContentBlock>
    </div>
  );
};
