/**
 * title: 无限滚动列表
 * desc:
 * background: '#f5f5f5'
 */
import {
  Container,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
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

const dataList = Array(10).fill('');

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
    <Container size="sm">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          height: '300px',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>Item {index}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Indicator>
          <CircularProgress size={22} />
        </Indicator>
      </div>
    </Container>
  );
};
