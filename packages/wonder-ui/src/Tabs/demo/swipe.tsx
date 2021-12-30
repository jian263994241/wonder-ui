import * as React from 'react';
import { Tabs, Tab, Swipe, SwipeItem, styled } from '@wonder-ui/core';

const Block = styled('div')`
  padding: 16px;
`;

export default () => {
  const [value, setValue] = React.useState(0);
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
      <Swipe
        defaultIndex={value}
        onIndexChange={(index) => {
          setValue(index);
        }}
      >
        {list.map((_, index) => (
          <SwipeItem key={index}>
            <Block>内容 {index + 1}</Block>
          </SwipeItem>
        ))}
      </Swipe>
    </React.Fragment>
  );
};
