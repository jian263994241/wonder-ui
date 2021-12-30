import { Page, List, ListItem, ListHeader } from '@wonder-ui/core';

const dataList = Array(10).fill('');

export default () => (
  <Page>
    <List>
      <ListHeader sticky>sticky 0</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>Item {index}</ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 1</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>Item {index}</ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 2</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>Item {index}</ListItem>
      ))}
    </List>
  </Page>
);
