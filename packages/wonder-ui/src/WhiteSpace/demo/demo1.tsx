import {
  ContentBlock,
  List,
  ListHeader,
  ListItem,
  ListItemText,
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
      <ListItem>
        <ListItemText>Item 1</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Item 2</ListItemText>
      </ListItem>
      <WhiteSpaceDemo />
      <ListItem>
        <ListItemText>Item 3</ListItemText>
      </ListItem>
    </List>

    <WhiteSpaceDemo />
    <ContentBlock title="内容">块之间间隙</ContentBlock>
  </Page>
);
