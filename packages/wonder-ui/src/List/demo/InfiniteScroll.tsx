import {
  Page,
  CircularProgress,
  List,
  ListItem,
  ListHeader,
  styled
} from '@wonder-ui/core';
import { useDynamicList } from '@wonder-ui/hooks';
import * as React from 'react';

const Indicator = styled('div')`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

const dataList = Array(12).fill('');

export default () => {
  const { list, merge } = useDynamicList(dataList);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const node = scrollRef.current;
    if (node) {
      if (node.scrollTop === node.scrollHeight - node.offsetHeight) {
        setTimeout(() => {
          merge(list.length - 1, dataList);
        }, 1000);
      }
    }
  };

  return (
    <Page
      ContentRef={scrollRef}
      ContentProps={{
        onScroll: handleScroll
      }}
    >
      <List>
        <ListHeader sticky>无限滚动列表</ListHeader>
        {list.map((item, index) => (
          <ListItem key={index}>Item {index}</ListItem>
        ))}
      </List>
      <Indicator>
        <CircularProgress size={22} />
      </Indicator>
    </Page>
  );
};
