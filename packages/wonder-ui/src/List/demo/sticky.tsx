import {
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemText
} from '@wonder-ui/core';

const dataList = Array(10).fill('');

export default () => (
  <Page title="Sticky">
    <List>
      <ListHeader sticky>sticky 0</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 1</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 2</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Page>
);
