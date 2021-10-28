import { TabBar, TabBarItem } from '@wonder-ui/core';

const list = Array(20).fill('');

export default () => (
  <TabBar showIndicator variant="scrollable">
    {list.map((_, index) => (
      <TabBarItem key={index} itemKey={index} label={`标签 ${index + 1}`} />
    ))}
  </TabBar>
);
