import * as React from 'react';
import { Tabs, Tab, Swipe, SwipeItem, styled } from '@wonder-ui/core';

const Block = styled('div')`
  padding: 16px;
`;

export default () => {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <Tabs
        showIndicator
        value={value}
        onChange={(a) => {
          setValue(a);
        }}
      >
        <Tab label="标签 1" />
        <Tab label="标签 2" />
        <Tab label="标签 3" />
      </Tabs>

      <Swipe
        defaultIndex={value}
        onIndexChange={(index) => {
          setValue(index);
        }}
      >
        <SwipeItem>
          <Block>Content of Tab Pane 1</Block>
        </SwipeItem>
        <SwipeItem>
          <Block>Content of Tab Pane 2</Block>
        </SwipeItem>
        <SwipeItem>
          <Block>Content of Tab Pane 3</Block>
        </SwipeItem>
      </Swipe>
    </React.Fragment>
  );
};
