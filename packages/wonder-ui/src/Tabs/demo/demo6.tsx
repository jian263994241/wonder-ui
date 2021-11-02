import { Tabs, Tab } from '@wonder-ui/core';

const list = Array(3).fill('');

export default () => (
  <Tabs showIndicator centered variant="autoWidth">
    {list.map((_, index) => (
      <Tab key={index} label={`标签 ${index + 1}`} />
    ))}
  </Tabs>
);
