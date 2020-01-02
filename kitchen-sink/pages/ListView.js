import React from 'react';
import { Page, List, ListItem, ListView } from '@wonder-ui/core';

const demoData = ((len)=>{
  const arr = [];
  for(let i = 0; i< len; i++){
    arr.push({ label: 'title' })
  }
  return arr;
})(20);


export default function ListViewExamples(props) {

  const [dataSource, setDataSource] = React.useState(
    new ListView.DataSource({ 
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  );

  const pageSize = demoData.length;

  const [data, setDate] = React.useState(demoData);

  React.useEffect(()=>{
    setDataSource(dataSource.cloneWithRows(data));
  }, []);

  const onEndReached = ()=>{
    const newData = data.concat(demoData);
    setDate(newData);
    setDataSource(dataSource.cloneWithRows(newData));
  }

  const row = (rowData, sectionID, rowID) => (
    <ListItem key={rowID}>{rowData.label} {rowID}</ListItem>
  );

  return (
    <Page name="ListView" navbar pageContent={false}>
      <ListView
        dataSource={dataSource}
        pageSize={pageSize}
        initialListSize={pageSize}
        // renderHeader={(Header)=> <Header>列表头</Header>}
        // renderFooter={(Footer)=> <Footer>列表底部</Footer>}
        renderRow={row}
        onEndReached={onEndReached}
        style={{width:'100%', height: '100%', boxSizing: ' border-box'}}
      />
    </Page>
  )
}