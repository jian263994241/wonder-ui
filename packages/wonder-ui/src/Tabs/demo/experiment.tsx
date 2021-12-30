import * as React from 'react';
import { TabContext, TabPane, Tabs, Tab, styled } from '@wonder-ui/core';

const Block = styled('div')`
  padding: 16px;
`;

export default () => {
  const [value, setValue] = React.useState(1);

  const list = React.useMemo(() => Array(8).fill(''), []);

  return (
    <React.Fragment>
      <Tabs
        showIndicator
        variant="scrollable"
        value={value}
        onChange={(a) => {
          setValue(a);
        }}
      >
        {list.map((_, index) => (
          <Tab label={`标签 ${index + 1}`} key={index} value={index} />
        ))}
      </Tabs>

      <TabContext value={value}>
        {list.map((_, index) => (
          <TabPane key={index} value={index}>
            <Block>内容 {index + 1}</Block>
          </TabPane>
        ))}
      </TabContext>
    </React.Fragment>
  );
};
