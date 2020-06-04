import React from 'react';
import {
  Page,
  ListItem,
  ListView,
  Flex,
  ActivityIndicator,
  Typography,
  Brief,
} from '@wonder-ui/core';

function createData(n = 15) {
  return new Array(n).fill(true).map(() => {
    return {
      label: 'item',
      value: 25 + Math.round(Math.random() * 50),
    };
  });
}

function fillString(n, str, s = '') {
  return new Array(n)
    .fill(true)
    .map(() => {
      return str;
    })
    .join(s);
}

const pageSize = 20;
const total = pageSize * 6;
const intialValue = createData(pageSize);

export default function ListViewExamples(props) {
  // const [data, setDate] = React.useState(intialValue);
  const [data, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state.concat(createData(pageSize));
      case 'refresh':
        return intialValue;
      case 'remove':
        const targetIndex = state.findIndex(
          (item) => item.value === action.value,
        );
        state.splice(targetIndex, 1);
        return [...state];
      default:
        break;
    }
  }, intialValue);
  const [refreshing, setrefreshing] = React.useState(false);

  const hasNextPage = data.length < total;

  const loadMoreItems = () => {
    setTimeout(() => {
      if (data.length >= total) {
        return;
      }

      console.log('loadMore');

      dispatch({ type: 'add', data: createData(pageSize) });
    }, 600);
  };

  const handleRefresh = () => {
    setrefreshing(true);

    setTimeout(() => {
      setrefreshing(false);

      dispatch({ type: 'refresh' });
    }, 600);
  };

  const row = (props) => {
    const { data, index } = props;
    return (
      <ListItem
        wrap
        extra={
          <a
            onClick={() => dispatch({ type: 'remove', value: data.value })}
            style={{ color: 'red' }}
          >
            delete
          </a>
        }
      >
        {index}: {data.label} {data.value}
        <Brief>
          {fillString(parseInt(data.value / 10), '默认itemSize, 实际会根据内容计算内容高度,')}
        </Brief>
      </ListItem>
    );
  };

  const renderFooter = () => {
    return (
      <Flex alignContent="center" justify="center" style={{ height: 44 }}>
        <Typography type="caption">已经没有了</Typography>
      </Flex>
    );
  };

  const renderIndicator = () => (
    <Flex alignContent="center" justify="center" style={{ height: 44 }}>
      <ActivityIndicator text="加载中..." />
    </Flex>
  );

  return (
    <Page name="ListView" navbar pageContent={false}>
      <ListView
        data={data}
        renderItem={row}
        loadMoreItems={loadMoreItems}
        hasNextPage={hasNextPage}
        pullToRefresh={true}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        itemSize={44}
        pageSize={pageSize}
        renderIndicator={renderIndicator}
        renderFooter={renderFooter}
      />
    </Page>
  );
}
