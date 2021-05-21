/**
 * title: 虚拟列表
 * desc:
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListHeader,
  ListItem,
  ListItemText,
  Container,
  Typography
} from '@wonder-ui/core';
import { useVirtualList } from '@wonder-ui/hooks';
import { disableBodyScroll, allowScrollOnElement } from '@wonder-ui/utils';
import * as React from 'react';

const dataList = Array(2000).fill('');

export default function Example() {
  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {
    overscan: 15,
    itemHeight: 44
  });
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <Container size="sm" ref={rootRef}>
      <button
        onClick={() => {
          disableBodyScroll(document.querySelector<HTMLElement>('#root')!);
          allowScrollOnElement(rootRef.current);
        }}
      >
        aaaa
      </button>
      <div
        {...containerProps}
        style={{
          height: 450,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <Typography paragraph>
          This example shows how to use Virtual List
        </Typography>
        <List {...wrapperProps}>
          <ListHeader>Virtual List</ListHeader>
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
