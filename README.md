# wonder-ui

## 开始

入口文件

```jsx

/* app.js */
import React, {Component} from 'react';
import {render} from 'react-dom';
import { createHashHistory } from 'history';

const hashHistory = createHashHistory({hashType: 'hashbang'});

class App extends Component {

  routes = [
    {path: '/', component: require('~/pages/invite').default},
    {path: '/trace', component: require('~/pages/trace').default},
    {path: '/privilege', component: require('~/pages/privilege').default, exact: true},
    {path: '/privilege/log', component: require('~/pages/privilege-log').default, exact: true},
  ]

  onPageInit = ({title})=>{
    document.title = title;
  }

  render() {
    return (
      <View onPageInit={this.onPageInit} history={hashHistory}>
        <Pages routes={this.routes} />
      </View>
    );
  }
}

render(<App/>, document.getElementById('root'));

```


html 文件


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
  <div id="root"></div>
  <script src="app.js"></script>
</body>
</html>

```




## 组件

- [Accordion](./docs/Accordion.md)
- [Button](./docs/Button.md)
- [Citys](./docs/Citys.md)
- [Countdown](./docs/Countdown.md)
- [Dialog](./docs/Dialog.md)
- [Grid](./docs/Grid.md)
- [Keyboard](./docs/Keyboard.md)
- [Picker](./docs/Picker.md)
- [Popup](./docs/Popup.md)
- [Preloader](./docs/Preloader.md)
