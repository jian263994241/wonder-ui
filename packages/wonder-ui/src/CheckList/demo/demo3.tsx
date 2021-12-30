import { CheckList, CheckListItem, ListHeader } from '@wonder-ui/core';

const image = (
  <img
    width={80}
    src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
  />
);

export default () => (
  <CheckList multiple defaultValue={['A', 'C']}>
    <ListHeader>完成显示</ListHeader>
    <CheckListItem
      divider
      value="A"
      media={image}
      primary="Novalee Spicer A"
      secondary="Deserunt dolor ea eaque eos"
    />
    <CheckListItem
      divider
      value="B"
      media={image}
      primary="Novalee Spicer B"
      secondary="Deserunt dolor ea eaque eos"
    />
    <CheckListItem
      value="C"
      media={image}
      primary="Novalee Spicer C"
      secondary="Deserunt dolor ea eaque eos"
    />
  </CheckList>
);
