# <Preloader/>
指示器

```js
import React, {Component} from 'react';
import Preloader, {showPreloader, hidePreloader} from '../../src/Preloader';
class Example extends Component {
  render(){
    return (
      <Preloader visible/>
    )
  }
}

```

## Props

- visible `bool` 显示|隐藏 Preloader


## 方法

提供直接调用preloader的方法 `showPreloader` `hidePreloader`
