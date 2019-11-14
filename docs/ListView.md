
#### 基础用法

```jsx
import { ListView, ListItem } from '@wonder-ui/core';

class ListViewExample extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ 
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      data: []
    };
    this.demoData = [
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
      { label: 'title' },
    ];
    this.pageSize = this.demoData.length;
  }

  componentDidMount(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.demoData) ,
      data: this.demoData
    })
  }

  render(){
    //拉到底更新数据
    const onEndReached = ()=>{
      const data = this.state.data.concat(this.demoData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        data
      })
    }
    //自定义行数据展示
    const row = (rowData, sectionID, rowID) => (
      <ListItem>{rowData.label} {rowID}</ListItem>
    );
    return (
      <ListView
        dataSource={this.state.dataSource}
        pageSize={this.pageSize}
        initialListSize={this.pageSize}
        renderHeader={(Header)=> <Header>列表头</Header>}
        renderFooter={(Footer)=> <Footer>列表底部</Footer>}
        renderRow={row}
        onEndReached={onEndReached}
        style={{width:'100%', height: '100%', boxSizing: ' border-box'}}
      />
    )
  }
};
<ListViewExample/>
```