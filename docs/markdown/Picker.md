## Picker


### 基本使用

```js
import React, {Component} from 'react';
import {Picker, PickerCol} from 'wonder-ui/Picker';
import Modal from 'wonder-ui/Modal';
import Toolbar from 'wonder-ui/Toolbar';

export default class Example extends Component {

  constructor(props){
    super(props);
    const y = [], m = [], d = [];
    for(let i=0; i< 100; i++){
      y.push(2000 + i);
    }
    for(let i=0; i< 12; i++){
      m.push(i + 1);
    }
    for(let i=0; i< 31; i++){
      d.push(i + 1);
    }

    this.state = {
      value: [],
      selectedValue: [],
      visible: false,
      y,m,d
    }
  }

  open = ()=>this.setState({visible:true})

  close = ()=> this.setState({visible:false})

  select = ()=>{
    const {y,m,d, selectedValue} = this.state;
    const value = selectedValue.length > 0 ? selectedValue : [y[0],m[0],d[0]]
    this.setState({
      value,
      visible: false
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

        <div style={inputStyle} onClick={this.open}>选择日期: {this.state.value.toString()}</div>
        <Modal
          visible={this.state.visible}
          overlay
        >
          <Toolbar
            style={{background: '#F8F8F8'}}
            extraLeft={<a onClick={this.close}>取消</a>}
            extraRight={<a onClick={this.select}>确定</a>}
            title="选择日期"
          />
          <Picker
            selectedValue={this.state.selectedValue}
            onValueChange={(selectedValue)=>this.setState({selectedValue})}
          >
            <PickerCol>
              {
                this.state.y.map((val)=><div value={val} key={val}>{val}年</div>)
              }
            </PickerCol>
            <PickerCol>
              {
                this.state.m.map((val)=><div value={val} key={val}>{val}月</div>)
              }
            </PickerCol>
            <PickerCol>
              {
                this.state.d.map((val)=><div value={val} key={val}>{val}日</div>)
              }
            </PickerCol>
          </Picker>
        </Modal>
      </div>
    )
  }
}
```

### 参数

#### Props

- `selectedValue`  array 已选择的值
- `onValueChange`  function  值改变时触发

#### Picker.Col props

- `disabled` bool 禁用
