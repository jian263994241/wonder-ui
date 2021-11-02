import { Tab, Tabs } from '@wonder-ui/core';

const list = Array(20).fill('');

export default () => (
  <Tabs showIndicator variant="scrollable">
    {list.map((_, index) => (
      <Tab key={index} label={`标签 ${index + 1}`} />
    ))}
  </Tabs>
);
