/**
 * background: '#f5f5f5'
 */
import {
  Container,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListHeader
} from '@wonder-ui/core';

const dataList = [1, 2, 3];

export default () => (
  <Container size="sm">
    <List component="div">
      <ListHeader>样式1</ListHeader>
      {dataList.map((item, index) => (
        <ListItem
          component="label"
          key={index}
          media={<Checkbox circle name="demo-checkbox1" />}
        >
          <ListItemText>Movie {item}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List component="div">
      <ListHeader>样式2</ListHeader>
      {dataList.map((item, index) => (
        <ListItem
          component="label"
          key={index}
          extra={<Checkbox circle name="demo-checkbox2" />}
        >
          <ListItemText>Movie {item}</ListItemText>
        </ListItem>
      ))}
    </List>

    <List component="div">
      <ListHeader>样式3</ListHeader>
      {dataList.map((item, index) => (
        <ListItem
          component="label"
          key={index}
          media={<Checkbox name="demo-checkbox3" />}
        >
          <ListItemText>Movie {item}</ListItemText>
        </ListItem>
      ))}
    </List>

    <List component="div">
      <ListHeader>样式4</ListHeader>
      {dataList.map((item, index) => (
        <ListItem
          component="label"
          key={index}
          extra={<Checkbox name="demo-checkbox4" />}
        >
          <ListItemText>Movie {item}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Container>
);
