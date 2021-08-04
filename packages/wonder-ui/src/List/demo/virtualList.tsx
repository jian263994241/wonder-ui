import {
  Container,
  Page,
  List,
  ListHeader,
  ListItem,
  ListItemText,
  Typography,
  WhiteSpace
} from '@wonder-ui/core';
import { useVirtualList } from '@wonder-ui/hooks';

const dataList = Array(2000).fill('');

export default () => {
  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {
    overscan: 20,
    itemHeight: 44
  });

  return (
    <Page title="Virtual list" ContentProps={containerProps}>
      <Container>
        <WhiteSpace />
        <Typography paragraph>
          This example shows how to use Virtual List
        </Typography>
      </Container>

      <List {...wrapperProps}>
        <ListHeader sticky>Virtual List</ListHeader>
        {list.map(({ data, index }) => (
          <ListItem key={index} style={{ height: 44 }}>
            <ListItemText>Item {index}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Page>
  );
};
