import React from 'react';
import { CircularProgress, ContentBlock, Space } from '@wonder-ui/core';
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
        <Space>
          <CircularProgress color="primary" />
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="error" />
          <CircularProgress color="warning" />
          <CircularProgress color="light" />
          <CircularProgress color="dark" />
        </Space>
      </ContentBlock>
      <ContentBlock title="设置尺寸">
        <Space>
          <CircularProgress size={44} />
          <CircularProgress size={24} />
        </Space>
      </ContentBlock>

      <ContentBlock title="进度">
        <Space>
          <CircularProgress variant="determinate" value={20} />
          <CircularProgress variant="determinate" value={40} />
          <CircularProgress variant="determinate" value={60} />
          <CircularProgress variant="determinate" value={80} />
          <CircularProgress variant="determinate" value={100} />
          <CircularProgress
            variant="determinate"
            size={100}
            thickness={1}
            value={count}
          >
            {count}%
          </CircularProgress>
        </Space>
      </ContentBlock>
    </div>
  );
};
