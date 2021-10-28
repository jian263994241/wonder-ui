import { TabBar, TabBarItem } from '@wonder-ui/core';

const list = Array(3).fill('');

export default () => (
  <TabBar showIndicator centered variant="autoWidth">
    {list.map((_, index) => (
      <TabBarItem key={index} itemKey={index} label={`标签 ${index + 1}`} />
    ))}
  </TabBar>
);
