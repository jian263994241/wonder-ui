/**
 * title: 固定的副标题列表
 * desc: 此性能由 CSS sticky 位置实现
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  List,
  ListItem,
  ListHeader,
  ListItemText,
  Container
} from '@wonder-ui/core';

const dataList = Array(10).fill('');

export default function Example() {
  return (
    <Container size="sm">
      <List
        style={{
          height: 400,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: '#ccc'
        }}
      >
        <ListHeader>sticky 0</ListHeader>
        {dataList.map((item, index) => (
          <ListItem key={index}>
            <ListItemText>Item {index}</ListItemText>
          </ListItem>
        ))}
        <ListHeader>sticky 1</ListHeader>
        {dataList.map((item, index) => (
          <ListItem key={index}>
            <ListItemText>Item {index}</ListItemText>
          </ListItem>
        ))}

        <ListHeader>sticky 2</ListHeader>
        {dataList.map((item, index) => (
          <ListItem key={index}>
            <ListItemText>Item {index}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
