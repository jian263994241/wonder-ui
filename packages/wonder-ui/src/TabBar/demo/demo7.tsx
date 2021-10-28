import * as React from 'react';
import { TabBar, TabBarItem } from '@wonder-ui/core';

const list = Array(3).fill('');

export default () => {
  const [activeKey, setActiveKey] = React.useState();

  const handleChange = (value: any) => {
    console.log('Change', value);
    setActiveKey(value);
  };
  return (
    <TabBar
      showIndicator
      defaultValue={1}
      value={activeKey}
      onChange={handleChange}
    >
      {list.map((_, index) => (
        <TabBarItem key={index} itemKey={index} label={`标签 ${index + 1}`} />
      ))}
    </TabBar>
  );
};
