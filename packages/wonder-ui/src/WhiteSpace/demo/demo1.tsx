import {
  ContentBlock,
  List,
  ListHeader,
  ListItem,
  Page,
  WhiteSpace,
  styled
} from '@wonder-ui/core';

const WhiteSpaceDemo = styled(WhiteSpace)`
  background-color: #ccc;
`;

export default () => (
  <Page>
    <List>
      <ListHeader>列表</ListHeader>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <WhiteSpaceDemo />
      <ListItem>Item 3</ListItem>
    </List>

    <WhiteSpaceDemo />
    <ContentBlock title="内容">块之间间隙</ContentBlock>
  </Page>
);
