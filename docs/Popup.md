# <Popup/>

弹窗页

```js
import React, {Component} from 'react';
import Popup from 'wonder-ui/Popup';

class Example extends Component {

  state={
    visible: false
  }

  render(){
    return (
      <div>
        <a onClick={()=>this.setState({visible: true})}>Open Popup</a>
        <Popup visible={this.state.visible}>
          ...
        </Popup>
      </div>
    )
  }
}
```

## Props

- visible `bool` 显示|隐藏 Popup


# <PopupRoute/>

路由弹窗页

```js
import React, {Component} from 'react';
import {Page, PageContent, Link, PopupRoute, Route} from 'wonder-ui/CreateApp';
import PopupPage from './PopupPage';

export default class PopupDemo extends Component {
  render(){
    return (
      <Page>
        <PageContent>
          <Link to="/popup/popup-page">打开Pop页面</Link>
        </PageContent>

        <PopupRoute path="/popup/popup-page" component={PopupPage} bgColor="transparent"/>

      </Page>
    )
  }
}

```
