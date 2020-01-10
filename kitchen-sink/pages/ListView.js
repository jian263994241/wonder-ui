import React from 'react';
import { Page, ListItem, ListView } from '@wonder-ui/core';

function createData(n = 20){
  return new Array(n)
  .fill(true)
  .map(() => {
    return {
      label: 'item',
      value: 25 + Math.round(Math.random() * 50)
    }
  });
}


export default function ListViewExamples(props) {

  const [data, setDate] = React.useState(createData());
  const [refreshing, setrefreshing] = React.useState(false);

  const loadMoreItems = ()=>{
    
    console.log('loadMore');
    setTimeout(() => {
      
      const newData = data.concat(createData());
      setDate(newData);

    }, 600);
  }

  const handleRefresh = ()=>{
    
    setrefreshing(true);

    setTimeout(() => {
      setrefreshing(false);

      setDate(createData());

    }, 600);
  }

  const row = (props) => {
    const { index, style, data } = props;

    return (
      <ListItem key={index} style={style}>{data.label} {data.value}</ListItem>
    )
  };

  return (
    <Page name="ListView" navbar pageContent={false}>
      <ListView
        data={data}
        renderItem={row}
        loadMoreItems={loadMoreItems}
        hasNextPage={true}
        PullToRefresh={true}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        itemSize={44}
        minimumBatchSize={15}
      />
    </Page>
  )
}