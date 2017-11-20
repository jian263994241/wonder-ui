## &lt;Citys/&gt;

省市区城市选择器

```js
import React, {Component} from 'react';
import {render} from 'react-dom';
import Citys from 'wonder-ui/Citys';

class Example extends Component {

  state = {
    visible: false,
    inputText: null
  }

  open = ()=>{
    this.setState({
      visible: true
    })
  }
  close = ()=>{
    this.setState({
      visible: false
    })
  }

  select = (data)=>{

    this.setState({
      inputText: JSON.stringify(data)
    })

  }

  render(){

    const inputStyle={
      width: '100%',
      border: '1px solid #ccc',
      padding: '10px',
      boxSizing: 'border-box'
    }

    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
    }

    return (
      <div style={style}>
        <div style={inputStyle} onClick={this.open}>{this.state.inputText? this.state.inputText : '请选择'}</div>

        <Citys
          visible={this.state.visible}
          onCancel={this.close}
          onSelect={this.select}
        />
      </div>
    )
  }
}
```

onSelect 数据示例

```json
{"province":{"id":"110000","name":"北京市"},"city":{},"area":{"id":"110105","name":"朝阳区"}}
```

### 参数

* `visible`  bool 是否显示组件

* `onCancel` func 关闭时触发

* `onSelect` func 选择时触发
