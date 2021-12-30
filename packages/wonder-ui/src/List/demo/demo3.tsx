import { List, ListHeader, ListItem } from '@wonder-ui/core';

const image = (
  <img
    width={80}
    src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
  />
);

export default () => (
  <List>
    <ListHeader>媒体列表</ListHeader>
    <ListItem
      divider
      media={image}
      primary="Index"
      secondary="Jan 9, 2014"
    ></ListItem>
    <ListItem
      divider
      media={image}
      primary="Index 2"
      secondary="Jan 9, 2014"
    ></ListItem>
    <ListItem
      media={image}
      primary="Index 3"
      secondary="Jan 9, 2014"
    ></ListItem>
  </List>
);
