import { TabBar, TabBarItem } from '@wonder-ui/core';

export default () => (
  <TabBar showIndicator>
    <TabBarItem
      wrapped
      itemKey="one"
      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
    />
    <TabBarItem
      itemKey="two"
      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
    />
  </TabBar>
);
