import * as React from 'react';
import { Tabs, Tab } from '@wonder-ui/core';

const list = Array(3).fill('');

export default () => {
  const [activeKey, setActiveKey] = React.useState();

  const handleChange = (value: any) => {
    console.log('Change value:', value);
    setActiveKey(value);
  };
  return (
    <Tabs
      showIndicator
      defaultValue={1}
      value={activeKey}
      defaultValue={'Item-1'}
      onChange={handleChange}
    >
      {list.map((_, index) => (
        <Tab key={index} value={`Item-${index}`} label={`标签 ${index + 1}`} />
      ))}
    </Tabs>
  );
};
