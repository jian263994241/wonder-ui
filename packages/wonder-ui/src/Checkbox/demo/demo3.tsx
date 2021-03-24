/**
 * title: 选择列表
 * desc:
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  Container,
  Checkbox,
  List,
  ListItem,
  ListItemMedia,
  ListItemText,
  ListHeader
} from '@wonder-ui/core';

const dataList = [1, 2, 3];

export default function Example() {
  return (
    <Container size="sm">
      <List component="div">
        <ListHeader>样式1</ListHeader>
        {dataList.map((item, index) => (
          <ListItem component="label" button key={index}>
            <ListItemMedia>
              <Checkbox circle name="demo-checkbox1" />
            </ListItemMedia>
            <ListItemText>Movie {item}</ListItemText>
          </ListItem>
        ))}
      </List>
      <List component="div">
        <ListHeader>样式2</ListHeader>
        {dataList.map((item, index) => (
          <ListItem component="label" button key={index}>
            <ListItemText>Movie {item}</ListItemText>
            <Checkbox circle name="demo-checkbox2" />
          </ListItem>
        ))}
      </List>

      <List component="div">
        <ListHeader>样式3</ListHeader>
        {dataList.map((item, index) => (
          <ListItem component="label" button key={index}>
            <ListItemMedia>
              <Checkbox small name="demo-checkbox3" />
            </ListItemMedia>
            <ListItemText>Movie {item}</ListItemText>
          </ListItem>
        ))}
      </List>

      <List component="div">
        <ListHeader>样式4</ListHeader>
        {dataList.map((item, index) => (
          <ListItem component="label" button key={index}>
            <ListItemText>Movie {item}</ListItemText>
            <Checkbox small name="demo-checkbox4" />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
