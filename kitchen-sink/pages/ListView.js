import React from 'react';
import { Page, ListItem, ListView } from '@wonder-ui/core';

const demoData = new Array(20)
.fill(true)
.map(() => {
  return {
    label: 'item',
    value: 25 + Math.round(Math.random() * 50)
  }
});


export default function ListViewExamples(props) {

  const [data, setDate] = React.useState(demoData);

  const loadMoreItems = ()=>{
    const newData = data.concat(demoData);
    setDate(newData);
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
        renderRow={row}
        loadMoreItems={loadMoreItems}
        isItemLoaded={() => false}
      />
    </Page>
  )
}