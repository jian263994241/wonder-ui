/**
 * title: 定量环形进度
 * desc:
 */
import * as React from 'react';
import { Space, CircularProgress } from '@wonder-ui/core';
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
        label={`${count}%`}
      />
    </Space>
  );
};
