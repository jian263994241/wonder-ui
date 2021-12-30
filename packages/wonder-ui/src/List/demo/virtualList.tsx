import { Page, List, ListHeader, ListItem, Typography } from '@wonder-ui/core';
import { useVirtualList } from '@wonder-ui/hooks';

const dataList = Array(2000).fill('');

export default () => {
  const { list, containerProps, wrapperProps } = useVirtualList(dataList, {
    overscan: 20,
    itemHeight: 44
  });

  return (
    <Page ContentProps={containerProps}>
      <div style={{ padding: 20 }}>
        <Typography paragraph>
          This example shows how to use Virtual List
        </Typography>
      </div>

      <List {...wrapperProps}>
        <ListHeader sticky>虚拟列表</ListHeader>
        {list.map(({ data, index }) => (
          <ListItem key={index} style={{ height: 44 }}>
            Item {index}
          </ListItem>
        ))}
      </List>
    </Page>
  );
};
