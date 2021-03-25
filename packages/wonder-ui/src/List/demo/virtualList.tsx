/**
 * title: 虚拟列表
 * desc:
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import { jsx, List, ListItem, ListItemText, Container } from '@wonder-ui/core';
import { useVirtualList } from '@wonder-ui/hooks';

const dataList = Array(2000).fill('');

export default function Example() {
  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {
    overscan: 15,
    itemHeight: 44
  });

  return (
    <Container size="sm">
      <div
        {...containerProps}
        style={{
          height: '300px',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <List {...wrapperProps}>
          {list.map(({ data, index }) => (
            <ListItem key={index} style={{ height: 44 }}>
              <ListItemText>Item {index}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}
